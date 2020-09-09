const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const winston = require('winston');
const CollectionName = 'scenario';

module.exports.init = (dbUrl, webServer) => {	
	webServer
	.get('/api/scenario', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, {strict:true}, (err, scenarioCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					scenarioCollection.find().toArray()
					.then(scenarioArray => {
						res.send(scenarioArray).status(200).end();
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
	.post('/api/saveScenario', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, scenarioCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {

					var scenario = req.body;
					scenario._id = ObjectID();
					// winston.info(`get the req body : ${req.body})`);
					scenarioCollection.save(scenario)
					.then(savedScenario => {
						res.status(200).send(savedScenario).end();
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
	.post('/api/findOneScenario', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, scenarioCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var scenario = req.body;
					scenarioCollection.findOne({"actions":scenario.actions})
					.then(foundScenario => {
						res.send(foundScenario).status(200).end();
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
	.post('/api/findScenarioByRunResultSuccess', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, scenarioCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var item = req.body;
					scenarioCollection.find({"runResult.success": item.success}).toArray()
					.then(foundScenarioArray => {
						res.send(foundScenarioArray).status(200).end();
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

};