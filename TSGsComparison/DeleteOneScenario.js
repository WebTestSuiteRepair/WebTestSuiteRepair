const winston = require('winston');
const puppeteer = require('puppeteer');
const lib = require('test_scenario');
// const lib = require('wat_scenario');

class DeleteOneScenario{
	constructor(scenario){
		this.scenario = scenario;
		this.runnedActions = parseInt(scenario.runResult.runnedActions, 10);		
	}
	async deleteOneScenario() {
		// winston.info('begin deleteOneScenario');		
		let page = await this.createPage();
		await page.setViewport({
	        width: 1200,
	        height: 800
	    });
		// this.successScenario = [];
		try {
			// console.log(this.scenario.actions);
			// console.log(this.scenario.actions.length);
			// console.log(this.runnedActions);
			this.scenario.actions.splice(this.runnedActions + 1, 1);
			// console.log(this.scenario.actions);
			// console.log(this.scenario.actions.length);
			var scenarioToPlay = new lib.Scenario(this.scenario.actions);
			// console.log(scenarioToPlay);

			// let runResult1 = await this.scenario.run(page);
			// console.log(runResult1);
			let runResult = await this.playScenario(scenarioToPlay, page);
			// winston.info(" in runOneScenario each scenario run result: ")
			// console.log(runResult);
			if (runResult.success) {
				this.successScenario = this.scenario;
			} else {
				winston.info('FixScenario cannot run !');
				this.successScenario = null;
			}			

		} catch (ex) {
			winston.info(ex);
			winston.info('FixScenario gets exception when runs!');
		}
			
		await page.close();
		await this.browser.close();		
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


module.exports.DeleteOneScenario = DeleteOneScenario;