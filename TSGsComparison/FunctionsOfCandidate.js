const lib = require('test_scenario');
// const diff = require('diff-arrays-of-objects');
const OrderCandidates = require('./OrderCandidates.js').OrderCandidates;
const FunctionsOfAction = require('./FunctionsOfAction.js').FunctionsOfAction;

class FunctionsOfCandidate {

	constructor(candidatesR1, candidatesR2, badAction){
		this.candidatesR1 = candidatesR1;
		this.candidatesR2 = candidatesR2;
		this.badAction = badAction;
	}

	async getCandidates(){
		var diffClassifiedCandidates = await this.compareCandidateOfBadAction();
		var classifiedSortedCandidates = await this.sortClassifiedCandidateOfBadAction(diffClassifiedCandidates);
		// console.log(classifiedSortedCandidates);
		//the classifiedSortedCandidates is after comparison and sorted		
		return classifiedSortedCandidates;
		// let ca = [].concat(classifiedSortedCandidates.added.theOrderedCandidates, classifiedSortedCandidates.added.farPathCandidates, classifiedSortedCandidates.same.theOrderedCandidates, classifiedSortedCandidates.same.farPathCandidates);
		// return ca;
	}

	async sortClassifiedCandidateOfBadAction(classifiedCandidates){
		// console.log(classifiedCandidates);
		// console.log(classifiedCandidates.same);
		// console.log(classifiedCandidates.deleted);
		// console.log(this.badAction);
		if (typeof(classifiedCandidates) != 'undefined') {
			var added = await this.orderCandidateOfBadAction(classifiedCandidates.added);
			var same = await this.orderCandidateOfBadAction(classifiedCandidates.same);
			var deleted = await this.orderCandidateOfBadAction(classifiedCandidates.deleted);
			var classifiedSortedCandidates = {
				'added': added,
				'same': same,
				'deleted': deleted
			}
			return classifiedSortedCandidates;
		} else {
			return null;
		}
		
	}

	async orderCandidateOfBadAction(ca){
		var orderCandidates = new OrderCandidates(ca, this.badAction);
	    await orderCandidates.readAndOrderCandidates();
		var theOrderedCandidates = await orderCandidates.getOrderedCandidatesArray();
		var farPathCandidates = await orderCandidates.getFarPathCandidatesArray();
		var orderedResult = {
			'theOrderedCandidates' : theOrderedCandidates,
			'farPathCandidates' : farPathCandidates
		}
		orderedResult.theOrderedCandidates = orderedResult.theOrderedCandidates.slice(0, 5);
		orderedResult.farPathCandidates = orderedResult.farPathCandidates.slice(0, 5);
		return orderedResult;
	}

	async compareCandidateOfBadAction(){
		var functionsOfAction = new FunctionsOfAction();
		var badActionSelectorType = functionsOfAction.getActionSelectorType(this.badAction);

		var candidateActionsR1 = null;
		var candidateActionsR2 = null;
		if (typeof(this.candidatesR1) != 'undefined' && typeof(this.candidatesR2) != 'undefined') {
			if (badActionSelectorType === 'HTML') {
				if (typeof(this.candidatesR1.selectorPathHTML) != 'undefined' && typeof(this.candidatesR2.selectorPathHTML) != 'undefined') {
					if (this.candidatesR1.selectorPathHTML.length > 0 && this.candidatesR2.selectorPathHTML.length > 0) {
						candidateActionsR1 = this.candidatesR1.selectorPathHTML;
						candidateActionsR2 = this.candidatesR2.selectorPathHTML;
					}
				}
				
			} else {

				if (typeof(this.candidatesR1.selectorPathID) != 'undefined' && typeof(this.candidatesR2.selectorPathID) != 'undefined') {
					if (this.candidatesR1.selectorPathID.length > 0 && this.candidatesR2.selectorPathID.length > 0) {
						candidateActionsR1 = this.candidatesR1.selectorPathID;
						candidateActionsR2 = this.candidatesR2.selectorPathID;
					}

				}

			}

		}		
		
		// console.log(candidateActionsR1);
		// console.log("in compareCandidateOfBadAction, the candidateActionsR1");
		// console.log(candidateActionsR2);

		if (candidateActionsR1 != null && candidateActionsR2 != null) {
			var compareResult = this.diffArrays(candidateActionsR1, candidateActionsR2);
			return compareResult;
		}
		
	}

	diffArrays(array1, array2){
		//output the added, same, deleted item		
		var added = [];
		var same = [];
		var deleted = [];
		var strArray1 = JSON.stringify(array1);
		var strArray2 = JSON.stringify(array2);
		array2.forEach( e2 => {
			if (strArray1.indexOf(JSON.stringify(e2)) < 0) {
				added.push(e2);
			} else if (strArray1.indexOf(JSON.stringify(e2)) >= 0) {
				same.push(e2);
			}
		});

		array1.forEach( e1 => {
			if (strArray2.indexOf(JSON.stringify(e1)) < 0) {
				deleted.push(e1);
			}
		});
		var compareResult = {
			'added': added,
			'same': same,
			'deleted': deleted
		}
		return compareResult;
	}

}

module.exports.FunctionsOfCandidate = FunctionsOfCandidate;