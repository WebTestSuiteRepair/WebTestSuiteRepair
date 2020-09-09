const winston = require('winston');
const puppeteer = require('puppeteer');
const lib = require('test_scenario');
// const lib = require('wat_scenario');
const request = require('request');

const transfer = require('./transferScenario.js');
const ReadAllFiles = require('./ReadAllFiles.js').ReadAllFiles;
const Candidate = require('./Candidate.js').Candidate;

// const pathOfReadAllFiles = '/input_script/joomla/';
const pathOfReadAllFiles = '/input_script/dolibarr/';
// const pathOfReadAllFiles = '/input_script/moodle/';

describe('Generate TestScriptModel', function () {
	// this.timeout(40000);
	winston.info('begin mocha function');	
	it('should use test scripts to generate TestScriptModel ', async function() {
		winston.info('in it of describe:');		
		var readAllFiles = new ReadAllFiles(pathOfReadAllFiles);
		var files = await readAllFiles.readAll();
		(async function loop() {
			console.time("TSM");
			for (let i = 0; i <= files.length - 1; i++) {
				await generateTSM(pathOfReadAllFiles + files[i]);
			}
			console.timeEnd("TSM");
		})();
		

	});
	
});


async function generateTSM(filePath){

	// var scenarioStr = await runScriptPromise(scriptPath);
	var scenarioStr = await transfer.transfer(filePath);
	var scenarioJSON = JSON.parse(scenarioStr);
	var scenario = new lib.Scenario(scenarioJSON);
	// var scenario = new lib.Scenario(JSON.parse(scenarioStr));
	// let browser = await initBrowser();
	// winston.info(`run the initial scenario:`)
	// console.log(scenario);
	var page = await createPage();

	try{
		await page.setViewport({
			width: 1200,
			height: 800
		});
		// let baseResult = await scenario.run(page);
		let baseResult = await playScenario(page, scenario);	

		if (baseResult.success == true) {
			winston.info('scenario run success!');
			console.log(scenario);
			await linkTraversal(scenario);			
			await saveScenarioToMongodb(scenario, baseResult);

			await page.close();
			await this.browser.close();

		} else if (baseResult.success == false){			
			winston.info(`scenario run false!`);
			console.log(baseResult);
			await linkTraversalFailedScenario(scenario, baseResult.runnedActions)
			await saveScenarioToMongodb(scenario, baseResult);
			winston.info(`=======================the false result of running original test script is end =========================`)
			await page.close();
			await this.browser.close();			

		}
	}catch(e){
		winston.info(`in function generateTSM, try catch err is : ${e}`);
		await page.close();
	}

}

async function initBrowser() {
	// if (!this.browser) this.browser =  await puppeteer.launch();
	// this.browser.on('disconnected', initBrowser());
	if (!this.browser || this.browser.domain === null || !this.browser.isConnected()) this.browser =  await puppeteer.launch({headless: false, args:['--no-sandbox']});

}

async function createPage() {
	await initBrowser();
	let page = await this.browser.newPage();
	return page;
}

async function playScenario(page, scenarioToRun){		
	let i;
	try {
		for (i = 0 ; i < scenarioToRun.actions.length ; i++ ) {

			let currentUrl;
			if (scenarioToRun.actions[i].type === 'GotoAction') {
				currentUrl = scenarioToRun.actions[i].url;
				// await runGotoAction(page, scenarioToRun, i);
			} else {
				currentUrl = page.url();
				scenarioToRun.actions[i].url = currentUrl;
			}
			let saveUrlResult = await saveUrlToMongodb(currentUrl); //save url			
			await scenarioToRun.actions[i].run(page); //execute action			
			// get all the candidate actions after each action.
			var candidateClass = new Candidate(page);
			await candidateClass.crawlCandidateActions();
			var candidateActions = await candidateClass.getCandidateActions();
			console.log("++--++-- candidates:");
			console.log(candidateActions.selectorPathHTML.length);
			console.log(candidateActions.selectorPathID.length);

			await saveActionToMongodb(scenarioToRun.actions[i],candidateActions); //save action
			await page.waitFor(500);
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

// async function runGotoAction(page, scenarioToRun, i) {	
// 	var iAction = scenarioToRun.actions[i];
// 	await iAction.run(page);
// 	let saveUrlResult = await saveUrlToMongodb(iAction.url);	
// 	await saveActionToMongodb(iAction);
// }

function findOneUrl(url) {
	let postUrl = 'http://localhost:8086/api/findOneUrl'; 
	let item = {};
	item.urlContent = url;
	return new Promise(function(resolve, reject) {
		request.post({url:postUrl, form:item}, function(err,httpResponse,body){
			if (err) {
				console.log("findOneUrl is err");
				reject(err);
			} else{
				resolve(body);
			}
		});
	});
}

async function saveUrlToMongodb(url){
	let urlExisted = await findOneUrl(url);
	if (urlExisted.length === 0) {
		let postUrl = 'http://localhost:8086/api/saveUrl';
		let item = {};
		item.urlContent = url;
		// await request.post(postUrl, {form:item});
		return new Promise(function(resolve, reject) {
			request.post({url:postUrl, form:item}, function(err,httpResponse,body){
				if (err) {
					console.log("saveUrlToMongodb is err");
					reject(err);
				} else{
					resolve(body);
				}
			});
		});
	}    
}

function findOneAction(action) {
	var postUrl = 'http://localhost:8086/api/findOneAction';        
	var actionToPost = {};
	var actionJSON = JSON.parse(JSON.stringify(action));
	actionToPost.actionContents = actionJSON;
	return new Promise(function(resolve, reject) {
		request.post({url:postUrl, form:actionToPost}, function(err,httpResponse,body){
			if (err) {
				console.log("findOneAction is err");
				reject(err);
			} else{
				resolve(body);
			}
		});
	});
}

async function saveActionToMongodb(action, candidateActions){
	var actionExisted = await findOneAction(action);
	if (actionExisted.length === 0) {
		var postUrl = 'http://localhost:8086/api/saveAction';
		var actionToPost = {};	
		var actionJSON = JSON.parse(JSON.stringify(action));   
		actionToPost.actionContents = actionJSON;
		actionToPost.candidateActions = candidateActions;
		return new Promise(function(resolve, reject) {
			request.post({url:postUrl, form:actionToPost}, function(err,httpResponse,body){
				if (err) {
					console.log("saveActionToMongodb is err");
					reject(err);
				} else{
					console.log(body);
					resolve(body);
				}
			});
		});
	}	
}

async function linkTraversal(scenario){
	for (let i = 0 ; i < scenario.actions.length-1 ; i++ ) {
		let link = {};
		link.former_action = scenario.actions[i];
		link.latter_action = scenario.actions[i+1];
		await saveLinkToMongodb(link);
	}
}

async function linkTraversalFailedScenario(scenario, runnedActions){	
	// scenario.actions.length-1
	for (let i = 0 ; i < runnedActions ; i++ ) {
		let link = {};
		link.former_action = scenario.actions[i];
		link.latter_action = scenario.actions[i+1];
		await saveLinkToMongodb(link);
	}
}

function findOneLink(link) {
	let postUrl = 'http://localhost:8086/api/findOneLink'; 
	let item = link;
	return new Promise(function(resolve, reject) {
		request.post({url:postUrl, form:item}, function(err,httpResponse,body){
			if (err) {
				console.log("findOneLink is err");
				reject(err);
			} else{
				resolve(body);
			}
		});
	});
}

async function saveLinkToMongodb(link){
	let linkExisted = await findOneLink(link);
	if (linkExisted.length === 0) {
		let postUrl = 'http://localhost:8086/api/saveLink';
		let item = link;
		return new Promise(function(resolve, reject) {
			request.post({url:postUrl, form:item}, function(err,httpResponse,body){
				if (err) {
					console.log("saveLinkToMongodb is err");
					reject(err);
				} else{
					resolve(body);
				}
			});
		});
	}    
}

function findOneScenario(scenario) {
	let postUrl = 'http://localhost:8086/api/findOneScenario'; 
	let item = scenario;
	return new Promise(function(resolve, reject) {
		request.post({url:postUrl, form:item}, function(err,httpResponse,body){
			if (err) {
				console.log("findOneScenario is err");
				reject(err);
			} else{
				resolve(body);
			}
		});
	});
}

async function saveScenarioToMongodb(scenario, runResult){
	let scenarioExisted = await findOneScenario(scenario);
	// console.log('scenarioExisted is :', scenarioExisted);
	if (scenarioExisted.length === 0) {
		let postUrl = 'http://localhost:8086/api/saveScenario';
		let item = scenario;
		item.runResult = runResult;
		return new Promise(function(resolve, reject) {
			request.post({url:postUrl, form:item}, function(err,httpResponse,body){
				if (err) {
					console.log("saveScenarioToMongodb is err");
					reject(err);
				} else{
					resolve(body);
				}
			});
		});
	}    
}

