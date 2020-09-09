const lib = require('test_scenario');

class FunctionsOfScenario {
	constructor(){		
	}

	async replaceBadActionInScenario(scenario, indexBadAction, candidateAction){		
		scenario.actions[indexBadAction] = candidateAction;
		return scenario;
	}


	async cutScenarioToRepair(scenario,iRunnedActions){	
		iRunnedActions = parseInt(iRunnedActions, 10);// to makesure iRunnedActions is an Int number.	
		let cutScenario = new lib.Scenario();	
		if (iRunnedActions + 2 < scenario.actions.length) {
			for (let i = 0; i <= iRunnedActions+2; i++) { 
				if (scenario.actions[i]) { await cutScenario.actions.push(scenario.actions[i]); }
			}
		} else {		
			cutScenario = scenario;
		}
		return cutScenario;
	}

}

module.exports.FunctionsOfScenario = FunctionsOfScenario;