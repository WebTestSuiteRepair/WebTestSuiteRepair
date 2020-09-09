const request = require('request');
const puppeteer = require('puppeteer');
const lib = require('test_scenario');

const ConnectMongoDB = require('./ConnectMongoDB.js').ConnectMongoDB;
const FunctionsOfScenario = require('./FunctionsOfScenario.js').FunctionsOfScenario;
const FunctionsOfAction = require('./FunctionsOfAction.js').FunctionsOfAction;
const FunctionsOfCandidate = require('./FunctionsOfCandidate.js').FunctionsOfCandidate;
const FixScenario = require('./FixScenario.js').FixScenario;
const UpdateTSGR2 = require('./UpdateTSGR2.js').UpdateTSGR2;
const DeleteOneScenario = require('./DeleteOneScenario.js').DeleteOneScenario;
const NewScenario = require('./NewScenario.js').NewScenario;



// const generateTSGR2 = require('../generateTestSuiteGraphR2/generateTSGR2.js');
const apiBaseUrl = 'http://localhost:8086';
var connectMongoDB = new ConnectMongoDB(apiBaseUrl);
var updateTSGR2 = new UpdateTSGR2(apiBaseUrl);
var functionsOfScenario = new FunctionsOfScenario();
var functionsOfAction = new FunctionsOfAction();


// const WebAppR1 = 'Joomla_3_6_0';
// const WebAppR2 = 'Joomla_3_7_0';
// const WebAppR1 = 'moodle_3_5_0';
// const WebAppR2 = 'moodle_3_6_0';
const WebAppR1 = 'dolibarr_5_0_0';
const WebAppR2 = 'dolibarr_6_0_0';


test();

async function test() {
	console.time("COMPARE");
	// await testR1();
	await testR2();
	console.timeEnd("COMPARE");
}

async function testR1() {
	var scenarioJSONtrue = await connectMongoDB.findScenarioByRunResultSuccess(true);
	var scenarioJSONfalse = await connectMongoDB.findScenarioByRunResultSuccess(false);
	console.log('The number of scenarios run success on R1:');
    console.log(scenarioJSONtrue.length);
    console.log('The broken number of scenarios run on R1:');
    console.log(scenarioJSONfalse.length);


    var scenarioR2JSONtrue = await connectMongoDB.findScenarioR2ByRunResultSuccess(true);
	var scenarioR2JSONfalse = await connectMongoDB.findScenarioR2ByRunResultSuccess(false);
	console.log('The number of scenarios run success on R2:');
    console.log(scenarioR2JSONtrue.length);
    console.log('The broken number of scenarios run on R2');
    console.log(scenarioR2JSONfalse.length);
}

async function testR2() {
	var scenarioR2JSONtrue = await connectMongoDB.findScenarioR2ByRunResultSuccess(true);
	var scenarioR2JSONfalse = await connectMongoDB.findScenarioR2ByRunResultSuccess(false);

    let i = 0;
    await repairOneTestScript(scenarioR2JSONfalse[0]);
    // await forEachScenarioR2FalseRepair(scenarioR2JSONfalse);

    // await addOneTestScript(scenarioR2JSONfalse[0]);
    // await forEachScenarioR2FalseAdd(scenarioR2JSONfalse);

    // await forEachScenarioR2FalseDelete(scenarioR2JSONfalse);
    // await deleteOneTestScript(scenarioR2JSONfalse[1]);

    // await generateOneNewScenario(scenarioR2JSONtrue[0]);

}

async function generateOneNewScenario(scenarioR2True){
	var iRunnedActions = parseInt(scenarioR2True.runResult.runnedActions, 10);
	// console.log(scenarioR2True);
	// console.log(iRunnedActions);
	var previousAction = scenarioR2True.actions[iRunnedActions-1];
	var nextAction = scenarioR2True.actions[iRunnedActions];
	var previousActionR2Str = await connectMongoDB.findOneActionR2(previousAction);
	let tempAction = functionsOfAction.actionUrlReplace(previousAction, WebAppR2, WebAppR1);
	// console.log(tempAction);
	//R1 candidate actions
	var previousActionR1Str = await connectMongoDB.findOneActionR1(tempAction);
	// console.log('000');
	// console.log(previousActionR1Str);
	if (previousActionR2Str && previousActionR1Str) {		
		var previousActionR2Json = JSON.parse(previousActionR2Str);
		var candidatesR2 = previousActionR2Json.candidateActions; //if candidatesR2 can not be found, then how to deal??
		// console.log(candidatesR2);
		var previousActionR1Json = JSON.parse(previousActionR1Str);
		var candidatesR1 = previousActionR1Json.candidateActions; //if candidatesR2 can not be found, then how to deal??
		// console.log(candidatesR1);
	}

}

async function forEachScenarioR2FalseAdd(scenarioR2JSONfalse) {
	for (var i = scenarioR2JSONfalse.length - 1; i >= 0; i--) {
		// console.log(scenarioR2JSONfalse[i]);
		await addOneTestScript(scenarioR2JSONfalse[i]);
	}
}

async function addOneTestScript(scenarioFalse){

	// console.log(scenarioFalse);
	var iRunnedActions = parseInt(scenarioFalse.runResult.runnedActions, 10);
	// console.log(iRunnedActions);
	// console.log(scenarioFalse.actions[iRunnedActions]);

	var previousBadAction = scenarioFalse.actions[iRunnedActions];
	// console.log(scenarioFalse.actions[iRunnedActions+1]);

	var previousActionR2ofBrokenActionStr = await connectMongoDB.findOneActionR2(previousBadAction);
	console.log('R2',previousActionR2ofBrokenActionStr);
	let tempAction = functionsOfAction.actionUrlReplace(previousBadAction, WebAppR2, WebAppR1);
	//R1 candidate actions
	// console.log('tempAction:', tempAction);
	var previousActionR1ofBrokenStr = await connectMongoDB.findOneActionR1(tempAction);
	console.log('R1 previousActionR1ofBrokenStr:', previousActionR1ofBrokenStr);
	if (previousActionR2ofBrokenActionStr && previousActionR1ofBrokenStr) {
		var previousActionR2ofBrokenActionJson = JSON.parse(previousActionR2ofBrokenActionStr);
		var candidatesR2 = previousActionR2ofBrokenActionJson.candidateActions; //if candidatesR2 can not be found, then how to deal??
		var previousActionR1ofBrokenJson = JSON.parse(previousActionR1ofBrokenStr);
		// console.log(previousActionR1ofBrokenJson);
		var candidatesR1 = previousActionR1ofBrokenJson.candidateActions;
		var functionsOfCandidate = new FunctionsOfCandidate(candidatesR1, candidatesR2, scenarioFalse.actions[iRunnedActions+1]);	
		let ca = await functionsOfCandidate.getCandidates();
		ca = [].concat(ca.added.theOrderedCandidates, ca.added.farPathCandidates, ca.same.theOrderedCandidates, ca.same.farPathCandidates);
		// console.log(ca);
		var newScenario = new NewScenario(scenarioFalse,ca);
		await newScenario.newScenarios();
		var addedScenario = await newScenario.getSuccessScenario();
		if (addedScenario) {
			console.log(addedScenario);
			await updateTSGR2.tryOneScenarioToBuildTSG(addedScenario);
		} else {
			console.log('add one scenario failed');
		}

			

	}else {		
		console.log('Do not find candiates from previous action in mongo!');
	}

}

async function forEachScenarioR2FalseDelete(scenarioR2JSONfalse) {
	for (var i = scenarioR2JSONfalse.length - 1; i >= 0; i--) {
		// console.log(scenarioR2JSONfalse[i]);
		await deleteOneTestScript(scenarioR2JSONfalse[i]);
	}
}

async function deleteOneTestScript(scenario){
	var deleteOneScenario = new DeleteOneScenario(scenario);
	await deleteOneScenario.deleteOneScenario();
	let succScenario = await deleteOneScenario.getSuccessScenario();
	console.log(succScenario);
}

async function forEachScenarioR2FalseRepair(scenarioR2JSONfalse) {
	for (var i = scenarioR2JSONfalse.length - 1; i >= 0; i--) {
		// console.log(scenarioR2JSONfalse[i]);
		await repairOneTestScript(scenarioR2JSONfalse[i]);
	}
}

async function repairOneTestScript(scenarioToBeRepair){
	// console.log(scenarioToBeRepair);	
	if (typeof(scenarioToBeRepair) != 'undefined' && typeof(scenarioToBeRepair.runResult) != 'undefined') {
		var iRunnedActions = parseInt(scenarioToBeRepair.runResult.runnedActions, 10);
		// var indexBadAction = iRunnedActions + 1;
		// var indexPreviousBadAction = indexBadAction - 1;

		// var indexPreviousBadAction = iRunnedActions;
		// var candiScenarios = await replaceOneBadAction(scenarioToBeRepair, indexPreviousBadAction);

		
		var replacedScenario = null;
		for (var i = iRunnedActions; i >= 0; i--) {//for all the bad action(including mis-select actions)
			indexPreviousBadAction = i;
			replacedScenario = await replaceOneBadAction(scenarioToBeRepair, indexPreviousBadAction);
			// console.log('the returned replacedScenario is :');
			// console.log(replacedScenario);
			
			if (typeof(replacedScenario) != 'undefined' && replacedScenario != null) {
				// console.log("replacedScenario.length", replacedScenario.length);
				break;
			}	
		}

		if (typeof(replacedScenario) != 'undefined' && replacedScenario != null) {
			//save replacedScenario to mongodb
			// console.log("ready to updateTSGR2 in mongodb");
			let scenarioToUpdate = await updateTSGR2.tryOneScenarioToBuildTSG(replacedScenario);
			// console.log("+++++++++++-------+++++++++--------======================,the checked runResult:");
			// console.log(scenarioToUpdate);
			if (typeof(scenarioToUpdate) != 'undefined' && typeof(scenarioToUpdate.runResult) != 'undefined') {
				if (scenarioToUpdate.runResult.success == false) {
					await repairOneTestScript(scenarioToBeRepair); //continue repair the second break in same scenario.
				} else {
					console.log('this scenario is repaired successfully.');
				}
			}

		} else {
			console.log("do not get replacedScenario");
		}


		// var candiScenarios;
		// for (var i = iRunnedActions; i >= 0; i--) {//for all the bad action(including mis-select actions)
		// 	indexPreviousBadAction = i;
		// 	candiScenarios = await replaceOneBadAction(scenarioToBeRepair, indexPreviousBadAction);		
		// 	if (candiScenarios && candiScenarios.length > 0)
		// 		break;	
		// 	// if (candiScenarios != undefined && candiScenarios.length > 0) {break}	
		// }


	}

}

// async function forEachMisSelectAction(scenarioToBeRepair){
// 	let iRunnedActions = scenarioToBeRepair.runResult.iRunnedActions;
// 	for (var i = iRunnedActions; i >= 0; i--) {
// 		let cutScenario = await functionsOfScenario.cutScenarioToRepair(scenario,i);
// 	}
// }

async function replaceOneBadAction(scenarioToBeRepair, indexPreviousBadAction){
	var indexBadAction = indexPreviousBadAction + 1;

	var badAction = functionsOfAction.getBadAction(scenarioToBeRepair, indexBadAction);
	var previousBadAction = functionsOfAction.getPreviousBadAction(scenarioToBeRepair, indexPreviousBadAction);
	// console.log(badAction);
	// console.log(previousBadAction);
	// console.log(scenarioToBeRepair.actions[iRunnedActions]);	
	
	let cutScenario = await functionsOfScenario.cutScenarioToRepair(scenarioToBeRepair,indexPreviousBadAction);
	// console.log(cutScenario);

	//find the candidate actions of two TSGs to replace the broken action.
	//R2 candidate actions
	var previousActionR2ofBrokenActionStr = await connectMongoDB.findOneActionR2(previousBadAction);
	// console.log(previousActionR2ofBrokenActionStr);
	// console.log('previousBadAction :');
	// console.log(previousBadAction);
	let tempAction = functionsOfAction.actionUrlReplace(previousBadAction, WebAppR2, WebAppR1);
	// console.log('previousBadAction :');
	// console.log(previousBadAction);

	//R1 candidate actions
	var previousActionR1ofBrokenStr = await connectMongoDB.findOneActionR1(tempAction);
	// console.log(previousActionR1ofBrokenStr);

	functionsOfAction.actionUrlReplace(previousBadAction, WebAppR1, WebAppR2); // ScenarioR2 url back to R2
	// console.log('previousBadAction :');
	// console.log(previousBadAction);

	if (previousActionR2ofBrokenActionStr && previousActionR1ofBrokenStr) {//what to do if we can not find candiates from database?
		// console.log("previousActionR2ofBrokenActionStr");
		// console.log(previousActionR2ofBrokenActionStr);
		// console.log(typeof(previousActionR2ofBrokenActionStr));
		var previousActionR2ofBrokenActionJson = JSON.parse(previousActionR2ofBrokenActionStr);
		// console.log(previousActionR2ofBrokenActionJson);
		var candidatesR2 = previousActionR2ofBrokenActionJson.candidateActions; //if candidatesR2 can not be found, then how to deal??
		// if (previousActionR1ofBrokenStr===null|| previousActionR1ofBrokenStr===undefined||previousActionR1ofBrokenStr==='') {
		// } else {
		// 	var previousActionR1ofBrokenJson = JSON.parse(previousActionR1ofBrokenStr);		
		// }
		var previousActionR1ofBrokenJson = JSON.parse(previousActionR1ofBrokenStr);
		console.log(previousActionR1ofBrokenJson);


		var candidatesR1 = previousActionR1ofBrokenJson.candidateActions;

		var functionsOfCandidate = new FunctionsOfCandidate(candidatesR1, candidatesR2, badAction);	
		let ca = await functionsOfCandidate.getCandidates();
		let cadi = null;
		if (ca != null) {
			if (typeof(ca.added) != 'undefined' && typeof(ca.same) != 'undefined') {
				cadi = [].concat(ca.added.theOrderedCandidates, ca.same.theOrderedCandidates, ca.added.farPathCandidates, ca.same.farPathCandidates);
			} else {
				if (typeof(ca.added) != 'undefined') {
					cadi = [].concat(ca.added.theOrderedCandidates, ca.added.farPathCandidates);
				}
				if (typeof(ca.same) != 'undefined') {
					if (cadi == null) {
						cadi = [].concat(ca.same.theOrderedCandidates, ca.same.farPathCandidates);
					} else {
						cadi = cadi.concat(ca.same.theOrderedCandidates, ca.same.farPathCandidates);
					}
					
				}

			}

			console.log("cadi is: ");
			console.log(cadi);

			//try one replacement of badAction	
			let fixScenario = new FixScenario(cutScenario, cadi, indexPreviousBadAction);
			await fixScenario.runWithNoise();
		    let candiScenarios = await fixScenario.getScenarios();
		    // console.log(candiScenarios);


		    if (candiScenarios && candiScenarios.length > 0) {
				// let brokenIndex = iRunnedActions + 1;
				let indexBrokenAction = parseInt(scenarioToBeRepair.runResult.runnedActions, 10) + 1;
				let brokenAction = await functionsOfAction.getBadAction(scenarioToBeRepair, indexBrokenAction);
				// badAction is ready
				// indexBadAction is ready
				let successCadidates = await fixScenario.getSuccessCandidateActions();
				let replacementAction = successCadidates[0];
				console.log('replacementAction is:');
				console.log(replacementAction);
				// functionsOfAction.actionUrlReplace(previousBadAction, WebAppR2, WebAppR1);
				var replacedScenario = await functionsOfScenario.replaceBadActionInScenario(scenarioToBeRepair, indexBadAction, replacementAction);
				
				replacedScenario.status = 'Repaired';
				// replacedScenario.repairInfo = {
				// 	'indexBrokenAction' : indexBrokenAction,
				// 	'brokenAction' : brokenAction,
				// 	'indexBadAction' : indexBadAction,
				// 	'badAction' : badAction,
				// 	'replacementAction' : replacementAction
				// }

				if (replacedScenario.repairInfo == undefined) {//the initial repair Info, set as an array.
					replacedScenario.repairInfo = [];
				}

				replacedScenario.repairInfo.push({
					'indexBrokenAction' : indexBrokenAction,
					'brokenAction' : brokenAction,
					'indexBadAction' : indexBadAction,
					'badAction' : badAction,
					'replacementAction' : replacementAction
				});

				console.log("replacedScenario is ready to return:");
				console.log(replacedScenario);
				return replacedScenario;

				// //replacedScenario
				// let scenarioToUpdate = await updateTSGR2.tryOneScenarioToBuildTSG(replacedScenario);
				// console.log("+++++++++++-------+++++++++--------======================,the checked runResult:");
				// console.log(scenarioToUpdate);

				// console.log(brokenAction);
				// console.log(replacementAction[0]);
				// console.log(candiScenarios[0]);
			}
			
		}		

	}
	else {		
		console.log('Do not find candiates from previous action in mongo!');
	}	
    
}



