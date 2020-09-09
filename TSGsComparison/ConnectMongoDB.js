const winston = require('winston');
const request = require('request');

class ConnectMongoDB{
	constructor(apiBaseUrl){
		this.apiBaseUrl = apiBaseUrl;
		this.winston = winston;
	}

	async findOneLinkR2(link) {
		let postUrl = this.apiBaseUrl + '/api/findOneLinkR2'; 
		let item = link;
		return new Promise(function(resolve, reject) {
			request.post({url:postUrl, form:item}, function(err,httpResponse,body){
				if (err) {
					console.log("findOneLinkR2 is err");
					reject(err);
				} else{
					resolve(body);
				}
			});
		});
	}

	async saveLinkR2ToMongodb(link){
		let linkExisted = await this.findOneLinkR2(link);
		if (linkExisted === undefined || linkExisted === null || linkExisted === '' || linkExisted.length === 0) {
			let postUrl = this.apiBaseUrl + '/api/saveLinkR2';
			let item = link;
			return new Promise(function(resolve, reject) {
				request.post({url:postUrl, form:item}, function(err,httpResponse,body){
					if (err) {
						console.log("saveLinkR2ToMongodb is err");
						reject(err);
					} else{
						resolve(body);
					}
				});
			});
		}    
	}

	async findOneUrlR2(url) {
		let postUrl = this.apiBaseUrl + '/api/findOneUrlR2'; 
		let item = {};
		item.urlContent = url;
		return new Promise(function(resolve, reject) {
			request.post({url:postUrl, form:item}, function(err,httpResponse,body){
				if (err) {
					console.log("findOneUrlR2 is err");
					reject(err);
				} else{
					resolve(body);
				}
			});
		});
	}

	async saveUrlR2ToMongodb(url){
		let urlExisted = await this.findOneUrlR2(url);
		if (urlExisted === undefined || urlExisted === null || urlExisted === '' || urlExisted.length === 0) {
			let postUrl = this.apiBaseUrl + '/api/saveUrlR2';
			let item = {};
			item.urlContent = url;
			// await request.post(postUrl, {form:item});
			return new Promise(function(resolve, reject) {
				request.post({url:postUrl, form:item}, function(err,httpResponse,body){
					if (err) {
						console.log("saveUrlR2ToMongodb is err");
						reject(err);
					} else{
						resolve(body);
					}
				});
			});
		}    
	}

	async findOneActionR1(action) {
		console.log('findOneActionR1 function begins');
		var postUrl = this.apiBaseUrl + '/api/findOneAction';        
		var actionToPost = {};
		var actionJSON = JSON.parse(JSON.stringify(action));
		actionToPost.actionContents = actionJSON;
		return new Promise(function(resolve, reject) {
			request.post({url:postUrl, form:actionToPost}, function(err,httpResponse,body){
				if (err) {
					console.log("findOneActionR1 is err");
					reject(err);
				} else{
					resolve(body);
				}
			});
		});
	}

	async findOneActionR2(action) {
		var postUrl = this.apiBaseUrl + '/api/findOneActionR2';        
		var actionToPost = {};
		// console.log('findOneActionR2 function begins');
		var actionJSON = JSON.parse(JSON.stringify(action));
		// console.log(actionJSON);
		actionToPost.actionContents = actionJSON;
		return new Promise(function(resolve, reject) {
			request.post({url:postUrl, form:actionToPost}, function(err,httpResponse,body){
				if (err) {
					console.log("findOneActionR2 is err");
					reject(err);
				} else{
					resolve(body);
					// console.log('body is:');
					// console.log(body);
					// console.log("body end");
					// if (body === null || body === undefined || body === '') {
					// 	resolve(null);
					// } else {
					// 	// console.log(typeof(body));
					// 	// console.log('begin to JSON');
					// 	// let bodyJSON = JSON.parse(body);
					// 	// resolve(bodyJSON);
					// 	resolve(body);
					// }
					// if (body) {resolve(JSON.parse(body));}
					// else {resolve(body);}
				}
			});
		});
	}

	async saveActionR2ToMongodb(action, candidateActions){
		var actionExisted = await this.findOneActionR2(action);
		if (actionExisted === null || actionExisted === undefined || actionExisted === '' || actionExisted.length === 0) {
			var postUrl = this.apiBaseUrl + '/api/saveActionR2';
			var actionToPost = {};
			var actionJSON = JSON.parse(JSON.stringify(action));   
			actionToPost.actionContents = actionJSON;
			actionToPost.candidateActions = candidateActions;
			return new Promise(function(resolve, reject) {
				request.post({url:postUrl, form:actionToPost}, function(err,httpResponse,body){
					if (err) {
						console.log("saveActionR2ToMongodb is err");
						reject(err);
					} else{
						resolve(body);
					}
				});
			});
		}	
	}

	async findScenarioByRunResultSuccess(success) {
		let postUrl = this.apiBaseUrl + '/api/findScenarioByRunResultSuccess';
		let item = {success};
		return new Promise(function(resolve, reject) {
			request.post({url:postUrl, form:item}, function(err,httpResponse,body){
				if (err) {
					console.log("findScenarioByRunResultSuccess is err");
					reject(err);
				} else{
					resolve(JSON.parse(body));
				}
			});
		});
	}

	async findScenarioR2ByRunResultSuccess(success) {
		let postUrl = this.apiBaseUrl + '/api/findScenarioR2ByRunResultSuccess';
		let item = {success};
		return new Promise(function(resolve, reject) {
			request.post({url:postUrl, form:item}, function(err,httpResponse,body){
				if (err) {
					console.log("findScenarioR2ByRunResultSuccess is err");
					reject(err);
				} else{
					resolve(JSON.parse(body));
				}
			});
		});
	}

	async updateScenarioR2ByIdToMongodb(scenario){
		var postUrl = this.apiBaseUrl + '/api/updateScenarioR2ById';
		var scenarioToUpdate = scenario;
		return new Promise(function(resolve, reject) {
			request.post({url:postUrl, form:scenarioToUpdate}, function(err,httpResponse,body){
				if (err) {
					console.log("updateScenarioR2ByIdToMongodb is err");
					reject(err);
				} else{
					resolve(body);
				}
			});
		});
	}

}


module.exports.ConnectMongoDB = ConnectMongoDB;