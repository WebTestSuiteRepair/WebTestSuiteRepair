const winston = require('winston');
const puppeteer = require('puppeteer');
const lib = require('test_scenario');
// const lib = require('wat_scenario');

class NewScenario{
	constructor(scenario, candidates){
		this.scenario = scenario;
		this.candidates = candidates;
		this.runnedActions = parseInt(scenario.runResult.runnedActions, 10);		
	}

	async newScenarios(){
		for (var i = this.candidates.length - 1; i >= 0; i--) {
			// console.log(this.candidates[i]);
			await this.newOneScenario(this.scenario, this.candidates[i]);
			if (this.successScenario && this.successScenario.length > 0) {
				break;
			}
		}
	}

	async newOneScenario(tempScenario, cadidate) {
		winston.info('begin newOneScenario');
		console.log(cadidate);		
		let page = await this.createPage();
		await page.setViewport({
	        width: 1200,
	        height: 800
	    });
		try {
			//add candidate into scenario			
			var addTempScenario = [].concat(tempScenario.actions.slice(0, this.runnedActions + 1), cadidate.action, tempScenario.actions.slice(this.runnedActions + 1, tempScenario.actions.length));
			console.log(addTempScenario);
			// console.log(this.scenario.actions.length);
			var scenarioToPlay = new lib.Scenario(addTempScenario);
			// console.log(scenarioToPlay);
			let runResult = await scenarioToPlay.run(page);
			// console.log(runResult);
			// let runResult = await this.playScenario(scenarioToPlay, page);
			// winston.info(" in runOneScenario each scenario run result: ")
			// console.log(runResult);
			if (runResult.success) {
				this.successScenario = this.scenario;
			} else {
				winston.info('addScenario cannot run !');
				this.successScenario = null;
			}			

		} catch (ex) {
			winston.info(ex);
			winston.info('addScenario gets exception when runs!');
		}
			
		await page.close();
		await this.browser.close();		
		// this.browser.removeAllListeners('targetcreated');
	}


	async initBrowser() {
		if (!this.browser || this.browser.domain === null || !this.browser.isConnected()) this.browser =  await puppeteer.launch({headless: false, args:['--no-sandbox']});
	}

	async createPage() {
		await this.initBrowser();
		let page = await this.browser.newPage();
		return page;
	}

	async playScenario(scenarioToPlay, page){
		let i;
		try {
			for (i=0 ; i < scenarioToPlay.actions.length; i++) {				
				await scenarioToPlay.actions[i].run(page);
				await page.waitFor(500);
				// await page.waitFor(scenarioToPlay.actions[i+1].selector);
			}
			await page.waitFor(500);

			return {
				success : true,
				runnedActions : i-1
			}
		} catch(err) {
			return {
				success : false,
				runnedActions : i-1,
				error : err
			}
		}

	}	

	getSuccessScenario() {
		return this.successScenario;
	}

}

module.exports.NewScenario = NewScenario;

