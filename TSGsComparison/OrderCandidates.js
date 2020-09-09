
class OrderCandidates{
	constructor(ca, brokenAction){
		this.ca = ca;
		this.brokenAction = brokenAction;
		this.orderedCandidatesArray = [];
		this.farPathCandidatesArray = [];
	}

	async readAndOrderCandidates(){

		var readCandidatesJson = this.ca;
		var readBreakActionJson = this.brokenAction;

		var breakActionSelector = readBreakActionJson.selector;
		var breakActionSplitArray = breakActionSelector.split(' > ');
		var orderedCandidates = [];
		
		for (var i = breakActionSplitArray.length - 1; i >= 0; i--) {

			if (breakActionSplitArray.length > 1) {
				let cutOneItemInSelector = breakActionSplitArray.slice(0, i + 1);
				// console.log('====================',i)
				// console.log(cutOneItemInSelector);
				//for Each Candidates, order it.
				readCandidatesJson = await this.orderEachCandidatesCompare(readCandidatesJson, cutOneItemInSelector);
			}
	    }
	    await this.findFarPathCandidates(readCandidatesJson);
	}

	async orderEachCandidatesCompare(readCandidatesJson, cutOneItemInSelector) {		
	    var orderedCandidates = [];
	    for (let j = 0 ; j < readCandidatesJson.length; j++) {
	    	let itemCandidate = readCandidatesJson[j];
	    	if (itemCandidate != null) {
	    		let itemSelector = itemCandidate.action.selector;
		    	let itemCandidateArray = itemSelector.split(' > ');
		    	if (hasSubArray(itemCandidateArray, cutOneItemInSelector)) {
		    		// orderedCandidates.push(itemCandidate);
		    		this.orderedCandidatesArray.push(itemCandidate);
		    		readCandidatesJson[j] = null;
		    	}
	    	}  	
	    }

	    return readCandidatesJson;
	}

	async findFarPathCandidates(readCandidatesJson){
		for (let j = 0 ; j < readCandidatesJson.length; j++) {
	    	let itemCandidate = readCandidatesJson[j];
	    	if (itemCandidate != null) {
	    		this.farPathCandidatesArray.push(itemCandidate);
	    		readCandidatesJson[j] = null;    		
	    	}  	
	    }
	}

	getOrderedCandidatesArray() {
		return this.orderedCandidatesArray;
	}

	getFarPathCandidatesArray() {
		return this.farPathCandidatesArray;
	}

}

function hasSubArray(master, sub) {
    return sub.every((i => v => i = master.indexOf(v, i) + 1)(0));
}

module.exports.OrderCandidates = OrderCandidates;
