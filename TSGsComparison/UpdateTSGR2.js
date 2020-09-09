const winston = require('winston');
const puppeteer = require('puppeteer');
const lib = require('test_scenario');

const ConnectMongoDB = require('./ConnectMongoDB.js').ConnectMongoDB;
const CandidateCrawler = require('./CandidateCrawler.js').CandidateCrawler;
// var connectMongoDB = new ConnectMongoDB(this.apiBaseUrl);
class UpdateTSGR2 {
	constructor(apiBaseUrl){
		this.apiBaseUrl = apiBaseUrl;
		this.connectMongoDB = new ConnectMongoDB(this.apiBaseUrl);
	}

	async tryOneScenarioToBuildTSG(scenario){
		// console.log(scenario);
		var scenarioToRun = new lib.Scenario(scenario.actions);

		// console.log('scenarioToRun prepare to run in tryOneScenarioToBuildTSG');
		// console.log(scenarioToRun);

		var page = await this.createPage();
		try{
			await page.setViewport({
				width: 1200,
				height: 800
			});
			// let baseResult = await scenario.run(page);
			let baseResult = await this.playScenarioForTSGR2(page, scenarioToRun);			
			await this.linkTraversal(scenarioToRun, baseResult.runnedActions);
			//now the scenarioToRun is changed in playScenarioForTSGR2. So it should be after of playScenarioForTSGR2.	
			var scenarioToUpdate = scenario;
			scenarioToUpdate.actions = JSON.parse(JSON.stringify(scenarioToRun.actions));
			scenarioToUpdate.runResult = baseResult;
			// console.log(scenarioToUpdate);
			let updateScenarioR2Response = await this.connectMongoDB.updateScenarioR2ByIdToMongodb(scenarioToUpdate);
			// if (updateScenarioR2Response) {
			// 	let updateScenarioR2ResponseJSON = JSON.parse(JSON.stringify(updateScenarioR2Response));
			// 	console.log(updateScenarioR2ResponseJSON);
			// }

			console.log(updateScenarioR2Response);		
			await page.close();
			await this.browser.close();

			return scenarioToUpdate;

		}catch(e){
			winston.info(`in function generateTSG, try catch err is : ${e}`);
			await page.close();
			await this.browser.close();
		}

	}

	
	async initBrowser() {
		if (!this.browser || this.browser.domain === null || !this.browser.isConnected()) this.browser =  await puppeteer.launch({headless: false, args:['--no-sandbox']});

	}

	async createPage() {
		await this.initBrowser();
		let page = await this.browser.newPage();
		return page;
	}

	async playScenarioForTSGR2(page, scenarioToRun){		
		let i;
		try {
			for (i = 0 ; i < scenarioToRun.actions.length ; i++ ) {

				let currentUrl;
				if (scenarioToRun.actions[i].type === 'GotoAction') {
					currentUrl = scenarioToRun.actions[i].url;
				} else {
					currentUrl = page.url();
					scenarioToRun.actions[i].url = currentUrl;
				}
				// winston.info(`currentUrl be ready to save in mongodb! currentUrl: ${currentUrl}`);
				await this.connectMongoDB.saveUrlR2ToMongodb(currentUrl); //save url				
				await scenarioToRun.actions[i].run(page); //execute action
				await page.waitFor(500);			
				// get all the candidate actions after each action.
				var candidateClass = new CandidateCrawler(page);
				await candidateClass.crawlCandidateActions();
				var candidateActions = await candidateClass.getCandidateActions();
				console.log("++--++-- candidates:");
				console.log(candidateActions.selectorPathHTML.length);
				console.log(candidateActions.selectorPathID.length);

				await this.connectMongoDB.saveActionR2ToMongodb(scenarioToRun.actions[i],candidateActions); //save action
				
				
			}
			// await page.waitFor(1000);

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

	async linkTraversal(scenario, runnedActions){	
		// when scenario runs successfully, runnedActions is scenario.actions.length-1
		for (let i = 0 ; i < runnedActions ; i++ ) {
			let link = {};
			link.former_action = scenario.actions[i];
			link.latter_action = scenario.actions[i+1];
			let saveLinkR2Result = await this.connectMongoDB.saveLinkR2ToMongodb(link);
		}
	}

}

module.exports.UpdateTSGR2 = UpdateTSGR2;