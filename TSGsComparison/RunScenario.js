const winston = require('winston');
const puppeteer = require('puppeteer');

class RunScenario{
	constructor(scenario){
		this.scenario = scenario;		
	}
	async runOneScenario() {
		winston.info('begin runOneScenario');		
		let page = await this.createPage();
		await page.setViewport({
	        width: 1200,
	        height: 800
	    });
		// this.successScenario = [];
		try {
			// let runResult = await this.scenario.run(page);
			let runResult = await this.playScenario(page);
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

	async playScenario(page){
		let i;
		try {
			for (i=0 ; i < this.scenario.actions.length; i++) {				
				await this.scenario.actions[i].run(page);
				await page.waitFor(1000);
			}
			await page.waitFor(1000);

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


module.exports.RunScenario = RunScenario;