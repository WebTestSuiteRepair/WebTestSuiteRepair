const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const winston = require('winston');
const CollectionName = 'scenarioR2';

module.exports.init = (dbUrl, webServer) => {	
	webServer
	.get('/api/scenarioR2', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, {strict:true}, (err, scenarioR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					scenarioR2Collection.find().toArray()
					.then(scenarioR2Array => {
						res.send(scenarioR2Array).status(200).end();
						db.close();
					})
					.catch(err => {
						res.status(500).send(err).end();
						db.close();
					});
				}
			});
		})
		.catch(err => {
			winston.error(`connect to mongodb encounter an error ${err}`);
			res.status(500).send(err).end;
		});
	});

	webServer
	.post('/api/saveScenarioR2', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, scenarioR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {

					var scenarioR2 = req.body;
					scenarioR2._id = ObjectID();
					// winston.info(`get the req body : ${req.body})`);
					scenarioR2Collection.save(scenarioR2)
					.then(savedScenario => {
						res.send(savedScenarioR2).status(200).end();
						db.close();					
					})
					.catch(err => {
						winston.error(err);
						res.status(500).send(err).end();
						db.close();
					});					
					
				}
			});
		}).catch(err => {
			winston.error(`connect to mongodb encounter an error ${err}`);
			res.status(500).send(err).end;
		});
	});

	webServer
	.post('/api/findOneScenarioR2', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, scenarioR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var scenarioR2 = req.body;
					scenarioR2Collection.findOne({"actions":scenarioR2.actions})
					.then(foundScenarioR2 => {
						res.send(foundScenarioR2).status(200).end();
						db.close();
					})
					.catch(err => {
						res.status(500).send(err).end();
						db.close();
					});
				}
			});
		})
		.catch(err => {
			winston.error(`connect to mongodb encounter an error ${err}`);
			res.status(500).send(err).end;
		});
	});

	webServer
	.post('/api/findScenarioR2ByRunResultSuccess', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, scenarioR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var item = req.body;
					scenarioR2Collection.find({"runResult.success": item.success}).toArray()
					.then(foundScenarioR2Array => {
						res.send(foundScenarioR2Array).status(200).end();
						db.close();
					})
					.catch(err => {
						res.status(500).send(err).end();
						db.close();
					});
				}
			});
		})
		.catch(err => {
			winston.error(`connect to mongodb encounter an error ${err}`);
			res.status(500).send(err).end;
		});
	});

	webServer
	.post('/api/updateScenarioR2ById', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, scenarioR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var scenario = {};
					scenario = req.body;
					if (scenario._id === null || scenario._id === undefined) {
						scenario._id = ObjectID();
					} else {
						scenario._id = ObjectID(scenario._id);
					}
					// scenarioR2._id = ObjectID(scenarioR2._id);
					// winston.info(`get the req body : ${req.body})`);
					//https://docs.mongodb.com/manual/reference/method/db.collection.findOneAndUpdate/
					
					scenarioR2Collection.findOneAndReplace({_id:scenario._id},scenario, {upsert:true})
					.then(savedScenario => {
						res.send(savedScenario).status(200).end();
						db.close();
					})
					.catch(err => {
						winston.error(err);
						res.status(500).send(err).end();
						db.close();
					});					
					
				}
			});
		}).catch(err => {
			winston.error(`connect to mongodb encounter an error ${err}`);
			res.status(500).send(err).end;
		});
	});

};