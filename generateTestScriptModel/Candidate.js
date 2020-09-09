const winston = require('winston');
const wat_scenario = require('test_scenario');
const select = require('optimal-select');

class Candidate{
	constructor(page){
		this.page = page;
		this.winston = winston;
	}	

	async crawlCandidateActions(){
		var selectorPathHTML = await this.crawlCandidateActionSelectorPathHTML();		
		var selectorPathID = await this.crawlCandidateActionSelectorPathID();
		// console.log('selectorPathHTML in crawlCandidateActions:');
		// console.log(selectorPathHTML);
		// console.log('selectorPathID in crawlCandidateActions:');
		// console.log(selectorPathID);
		this.candidateActions = {
			selectorPathHTML: selectorPathHTML,
			selectorPathID: selectorPathID
		};
	}

	async crawlCandidateActionSelectorPathID(){
		var selectorPathID = [];
		await this.page.addScriptTag({path:'./optimal-select.js'});
		let candidateSelector;
		let candidateSelectorSubmitButton;
		let candidateSelectorSubmitInput;

		candidateSelector = await this.page.evaluate(this.scanCandidateActionCopy);
		candidateSelectorSubmitButton = await this.page.evaluate(scanCandidateActionTestSubmitButtion);				
		candidateSelectorSubmitInput = await this.page.evaluate(scanCandidateActionTestSubmitInput);

		if(candidateSelector){
			candidateSelector.forEach(selector => {
				// console.log("*********************************the candidates selector: ")
				// console.log(selector);
				selectorPathID.push({
					action : new wat_scenario.ClickAction(selector.action)
				});
			});
		}
		

		if(candidateSelectorSubmitButton){
			candidateSelectorSubmitButton.forEach(selector => {
				// console.log("*********************************the submit button: not <a> link")
				// console.log(selector);
				selectorPathID.push({
					action : new wat_scenario.ClickAction(selector.action)
				});
			});
		}

		if(candidateSelectorSubmitInput){
			candidateSelectorSubmitInput.forEach(selector => {
				// console.log("*********************************the submit button: not <a> link")
				// console.log(selector);
				selectorPathID.push({
					action : new wat_scenario.ClickAction(selector.action)
				});
			});
		}

		return selectorPathID;
	}

	async crawlCandidateActionSelectorPathHTML(){
	    // winston.info(`begin crawlCandidateActionSelectorPathHTML:`);		
		var selectorPathHTML = [];
		await this.page.addScriptTag({path:'./optimal-select.js'});

		let candidateSelector;
		let candidateSelectorSubmitButton;
		let candidateSelectorSubmitInput;

		
		candidateSelector = await this.page.evaluate(this.scanCandidateActionCopyWithPath);
		candidateSelectorSubmitButton = await this.page.evaluate(scanCandidateActionTestSubmitButtionWithPath);
		candidateSelectorSubmitInput = await this.page.evaluate(scanCandidateActionTestSubmitInputWithPath);


		if(candidateSelector){
			candidateSelector.forEach(selector => {
				// console.log("*********************************the candidates selector: ")
				// console.log(selector);
				selectorPathHTML.push({
					action : new wat_scenario.ClickAction(selector.action)
				});
			});
		}
		

		if(candidateSelectorSubmitButton){
			candidateSelectorSubmitButton.forEach(selector => {
				// console.log("*********************************the submit button: not <a> link")
				// console.log(selector);
				selectorPathHTML.push({
					action : new wat_scenario.ClickAction(selector.action)
				});
			});
		}

		if(candidateSelectorSubmitInput){
			candidateSelectorSubmitInput.forEach(selector => {
				// console.log("*********************************the submit button: not <a> link")
				// console.log(selector);
				selectorPathHTML.push({
					action : new wat_scenario.ClickAction(selector.action)
				});
			});
		}

		return selectorPathHTML;
	}

	getCandidateActions() {
		return this.candidateActions;
	}	

	scanCandidateActionCopy() {		
		let actions = [];
		let aElements = document.querySelectorAll('a');
		// let buttonElements = document.querySelectorAll('button');
		// let submitElements = document.querySelectorAll('input[type="submit"]');
		//input but type is submit?
		//select?
		//type an input		
		let elementCandi = [];
		for (let i=0 ; i < aElements.length ; i++) {
			if (! isMailTo(aElements[i])) {
				actions.push(computeSelector(aElements[i]));
				elementCandi.push({
					action : computeSelector(aElements[i])
				});
			}
		}
		return elementCandi;

		function isMailTo(element) {
			let href = element.href;
			return href && (href.toLowerCase().indexOf('mailto') > -1)		
		}

		function computeSelector(el) {			
			return computeSelectorWithID(el);
		}

		function computeSelectorWithID(el) {
	        var names = [];
	        // if (el.parentNode) {
	        // 	for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
	        //         names.unshift(`${el.tagName}:nth-child(${c})`);
	            
	        //     el = el.parentNode;
	        // }
	        while (el.parentNode) {
	            if (el.id && el.id.indexOf('yui_')=== -1) {
	                names.unshift(`#${el.id}`);
	                break;
	            } else {
	                if (el == el.ownerDocument.documentElement)
	                    names.unshift(el.tagName);
	                else {
	                    for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
	                        names.unshift(`${el.tagName}:nth-child(${c})`);
	                }
	                el = el.parentNode;
	            }
	        }
	        return names.join(' > ');
	    }

	    function computeSelectorWithPath(el) {        
	    	var names = [];
	    	while (el.parentNode) {
	    		if (el == el.ownerDocument.documentElement)
	    			names.unshift(el.tagName);
	    		else {
	    			for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
	    				names.unshift(`${el.tagName}:nth-child(${c})`);
	    		}
	    		el = el.parentNode;
	    	}
	    	return names.join(' > ');
	    }

	}

	scanCandidateActionCopyWithPath() {		
		let actions = [];
		let aElements = document.querySelectorAll('a');
		// let buttonElements = document.querySelectorAll('button');
		// let submitElements = document.querySelectorAll('button[type="submit"]');
		// let submitElements = document.querySelectorAll('input[type="submit"]');
		//input but type is submit?
		//select?
		//type an input		
		let elementCandi = [];

		for (let i=0 ; i < aElements.length ; i++) {
			if (! isMailTo(aElements[i])) {
				actions.push(computeSelector(aElements[i]));
				elementCandi.push({
					action : computeSelector(aElements[i])
				});
			}
		}		
		
		return elementCandi;

		function isMailTo(element) {
			let href = element.href;
			return href && (href.toLowerCase().indexOf('mailto') > -1)		
		}

		function computeSelector(el) {			
			return computeSelectorWithPath(el);
		}

		function computeSelectorWithID(el) {
	        var names = [];
	        // if (el.parentNode) {
	        // 	for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
	        //         names.unshift(`${el.tagName}:nth-child(${c})`);
	            
	        //     el = el.parentNode;
	        // }
	        while (el.parentNode) {
	            if (el.id && el.id.indexOf('yui_')=== -1) {
	                names.unshift(`#${el.id}`);
	                break;
	            } else {
	                if (el == el.ownerDocument.documentElement)
	                    names.unshift(el.tagName);
	                else {
	                    for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
	                        names.unshift(`${el.tagName}:nth-child(${c})`);
	                }
	                el = el.parentNode;
	            }
	        }
	        return names.join(' > ');
	    }

	    function computeSelectorWithPath(el) {        
	    	var names = [];
	    	while (el.parentNode) {
	    		if (el == el.ownerDocument.documentElement)
	    			names.unshift(el.tagName);
	    		else {
	    			for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
	    				names.unshift(`${el.tagName}:nth-child(${c})`);
	    		}
	    		el = el.parentNode;
	    	}
	    	return names.join(' > ');
	    }

	}
	
}

function scanCandidateActionTestSubmitButtion() {
	let actions = [];
	let submitElements = document.querySelectorAll('button');		
	// let submitElements = document.querySelectorAll('button[type="submit"]');	
	let elementCandi = [];
	for (let i=0 ; i < submitElements.length ; i++) {
		if (! isMailTo(submitElements[i])) {
			actions.push(computeSelector(submitElements[i]));

			elementCandi.push({
				action : computeSelector(submitElements[i])
			});
		}
	}
	return elementCandi;

	function isMailTo(element) {
		let href = element.href;
		return href && (href.toLowerCase().indexOf('mailto') > -1)		
	}

	function computeSelector(el) {
		return computeSelectorWithID(el);		
	}

	function computeSelectorWithID(el) {
		var names = [];
		while (el.parentNode) {
			if (el.id && el.id.indexOf('yui_')=== -1) {
				names.unshift(`#${el.id}`);
				break;
				
			} else {
				if (el == el.ownerDocument.documentElement)
					names.unshift(el.tagName);
				else {
					for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
						names.unshift(`${el.tagName}:nth-child(${c})`);
				}
				el = el.parentNode;
			}
		}
		return names.join(' > ');
	}

	function computeSelectorWithPath(el) {        
		var names = [];
		while (el.parentNode) {
			if (el == el.ownerDocument.documentElement)
				names.unshift(el.tagName);
			else {
				for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
					names.unshift(`${el.tagName}:nth-child(${c})`);
			}
			el = el.parentNode;
		}
		return names.join(' > ');
	}

}

function scanCandidateActionTestSubmitButtionWithPath() {
	let actions = [];
	let submitElements = document.querySelectorAll('button');		
	// let submitElements = document.querySelectorAll('button[type="submit"]');	
	let elementCandi = [];
	for (let i=0 ; i < submitElements.length ; i++) {
		if (! isMailTo(submitElements[i])) {
			actions.push(computeSelector(submitElements[i]));

			elementCandi.push({
				action : computeSelector(submitElements[i])
			});
		}
	}
	return elementCandi;

	function isMailTo(element) {
		let href = element.href;
		return href && (href.toLowerCase().indexOf('mailto') > -1)		
	}

	function computeSelector(el) {
		return computeSelectorWithPath(el);		
	}

	function computeSelectorWithID(el) {
		var names = [];
		while (el.parentNode) {
			if (el.id && el.id.indexOf('yui_')=== -1) {
				names.unshift(`#${el.id}`);
				break;
				
			} else {
				if (el == el.ownerDocument.documentElement)
					names.unshift(el.tagName);
				else {
					for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
						names.unshift(`${el.tagName}:nth-child(${c})`);
				}
				el = el.parentNode;
			}
		}
		return names.join(' > ');
	}

	function computeSelectorWithPath(el) {        
		var names = [];
		while (el.parentNode) {
			if (el == el.ownerDocument.documentElement)
				names.unshift(el.tagName);
			else {
				for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
					names.unshift(`${el.tagName}:nth-child(${c})`);
			}
			el = el.parentNode;
		}
		return names.join(' > ');
	}

}

function scanCandidateActionTestSubmitInput() {
	let actions = [];		
	let submitElements = document.querySelectorAll('input[type="submit"]');	
	let elementCandi = [];
	for (let i=0 ; i < submitElements.length ; i++) {
		if (! isMailTo(submitElements[i])) {
			actions.push(computeSelector(submitElements[i]));
			elementCandi.push({
				action : computeSelector(submitElements[i])
			});
		}
	}
	return elementCandi;

	function isMailTo(element) {
		let href = element.href;
		return href && (href.toLowerCase().indexOf('mailto') > -1)		
	}

	function computeSelector(el) {
		return computeSelectorWithID(el);		
	}

	function computeSelectorWithID(el) {
		var names = [];
		while (el.parentNode) {
			if (el.id && el.id.indexOf('yui_')=== -1) {
				names.unshift(`#${el.id}`);
				break;
				
			} else {
				if (el == el.ownerDocument.documentElement)
					names.unshift(el.tagName);
				else {
					for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
						names.unshift(`${el.tagName}:nth-child(${c})`);
				}
				el = el.parentNode;
			}
		}
		return names.join(' > ');
	}

	function computeSelectorWithPath(el) {        
		var names = [];
		while (el.parentNode) {
			if (el == el.ownerDocument.documentElement)
				names.unshift(el.tagName);
			else {
				for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
					names.unshift(`${el.tagName}:nth-child(${c})`);
			}
			el = el.parentNode;
		}
		return names.join(' > ');
	}

}

function scanCandidateActionTestSubmitInputWithPath() {
	let actions = [];		
	let submitElements = document.querySelectorAll('input[type="submit"]');	
	let elementCandi = [];
	for (let i=0 ; i < submitElements.length ; i++) {
		if (! isMailTo(submitElements[i])) {
			actions.push(computeSelector(submitElements[i]));

			elementCandi.push({
				action : computeSelector(submitElements[i])
			});
		}
	}
	return elementCandi;

	function isMailTo(element) {
		let href = element.href;
		return href && (href.toLowerCase().indexOf('mailto') > -1)		
	}

	function computeSelector(el) {
		return computeSelectorWithPath(el);		
	}

	function computeSelectorWithID(el) {
		var names = [];
		while (el.parentNode) {
			if (el.id && el.id.indexOf('yui_')=== -1) {
				names.unshift(`#${el.id}`);
				break;
				
			} else {
				if (el == el.ownerDocument.documentElement)
					names.unshift(el.tagName);
				else {
					for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
						names.unshift(`${el.tagName}:nth-child(${c})`);
				}
				el = el.parentNode;
			}
		}
		return names.join(' > ');
	}

	function computeSelectorWithPath(el) {        
		var names = [];
		while (el.parentNode) {
			if (el == el.ownerDocument.documentElement)
				names.unshift(el.tagName);
			else {
				for (var c = 1, e = el; e.previousElementSibling; e = e.previousElementSibling, c++);
					names.unshift(`${el.tagName}:nth-child(${c})`);
			}
			el = el.parentNode;
		}
		return names.join(' > ');
	}

}

module.exports.Candidate = Candidate;