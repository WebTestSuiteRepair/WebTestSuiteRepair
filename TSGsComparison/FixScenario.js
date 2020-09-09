const winston = require('winston');
// const wat_scenario = require('wat_scenario');
const lib = require('test_scenario');
const puppeteer = require('puppeteer');
const RunScenario = require('./RunScenario.js').RunScenario;

class FixScenario{
	constructor(baseScenario, candidateActions, index){
		this.baseScenario = baseScenario;
		this.candidateActions = candidateActions;
		this.iBaseScenario = index;
	}

	async runWithNoise() {
		winston.info('begin runWithNoise');		
		// let page = await this.createPage();
		// await page.authenticate({username:"anonymous",password:"anonymous"});

		let tempRunScenario = this.baseScenario;
		let isFindCandidates = false;
		this.successCa = [];
		this.scenarios = [];
		let numOfSuccessCandidates = 0;

		for (let i = 0 ; i < this.candidateActions.length ; i++) {
			// await page.waitFor(1000);
			// winston.info(`it will change the ${this.iBaseScenario+1} action of base Scenario using this action:`);
			// console.log(this.candidateActions[i].action);
			let brokenAction = tempRunScenario.actions[this.iBaseScenario+1];
			// console.log(brokenAction);
			tempRunScenario.actions[this.iBaseScenario+1] = await this.candidateActions[i].action;			
			
			this.scenario = new lib.Scenario(tempRunScenario.actions);
			// winston.info(`it will run this following scenario:`);
			// console.log(this.scenario);

			let runScenario = new RunScenario(this.scenario);
			await runScenario.runOneScenario();
			let succScenario = await runScenario.getSuccessScenario();
			if (succScenario) {
				this.scenarios.push(succScenario);
				this.successCa.push(this.candidateActions[i].action);
				break;
			}		

		}	
		
		// await page.close();
		// await this.browser.close();		
		// this.browser.removeAllListeners('targetcreated');
	}


	async initBrowser() {
		if (!this.browser) this.browser =  await puppeteer.launch({headless: false, args:['--no-sandbox']});
	}

	async createPage() {
		await this.initBrowser();
		let page = await this.browser.newPage();
		return page;
	}


	getCandidateActions() {
		return this.candidateActions;
	}

	getSuccessCandidateActions() {
		return this.successCa;
	}

	getRepairSuccessedScenario(){
		return this.scenario;
	}

	getScenarios() {
		return this.scenarios;
	}

}


module.exports.FixScenario = FixScenario;