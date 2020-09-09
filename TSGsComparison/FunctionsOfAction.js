
class FunctionsOfAction {
	constructor(){		
	}

	getActionSelectorType(action){
		let actionSelectorToSplit = action.selector;
		let actionSplitArray = actionSelectorToSplit.split(' > ');
		let actionSelectorType = actionSplitArray[0];
		return actionSelectorType;
	}

	getPreviousBadAction(scenario, indexPreviousBadAction){
		return scenario.actions[indexPreviousBadAction];
	}

	getBadAction(scenario, indexBadAction){
		return scenario.actions[indexBadAction];
	}

	actionUrlReplace(action, predecessor, successor){
		let tempActionUrl = action.url.replace(predecessor, successor);	
		action.url = tempActionUrl;
		return action;
	}

}

module.exports.FunctionsOfAction = FunctionsOfAction;