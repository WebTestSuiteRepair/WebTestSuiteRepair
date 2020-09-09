const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const winston = require('winston');
const CollectionName = 'candidateR2';
module.exports.init = (dbUrl, webServer) => {	
	webServer
	.get('/api/candidateR2', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, {strict:true}, (err, candidateR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					candidateR2Collection.find().toArray()
					.then(candidateR2sArray => {
						res.send(candidateR2sArray).status(200).end();
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
	.post('/api/saveCandidateR2', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, candidateR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var candidateR2 = req.body;
					if (candidateR2._id === null || candidateR2._id === undefined) {
						candidateR2._id = ObjectID();
					} else {
						candidateR2._id = ObjectID(candidateR2._id);
					}
					candidateR2.aid = ObjectID(candidateR2.aid);
					candidateR2Collection.save(candidateR2)
					.then(savedCandidateR2 => {
						res.status(200).send(savedCandidateR2).end();
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
	.post('/api/findCandidateR2sByAID', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, candidateR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var candidateR2 = req.body;
					candidateR2.aid = ObjectID(candidateR2.aid);
					candidateR2Collection.find({aid: candidateR2.aid}).toArray()
					.then(FoundCandidateR2Array => {
						res.send(FoundCandidateR2Array).status(200).end();
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
	.post('/api/findOneCandidateR2', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, candidateR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var candidateR2 = req.body;
					candidateR2.aid = ObjectID(candidateR2.aid);
					candidateR2Collection.findOne({aid: candidateR2.aid, "actionContents": candidateR2.actionContents, "selectorType": candidateR2.selectorType})
					.then(FoundCandidateR2 => {
						res.send(FoundCandidateR2).status(200).end();
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
	.post('/api/saveAllCandidateR2', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, candidateR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var candidateR2 = req.body;
					candidateR2.aid = ObjectID(candidateR2.aid);

					candidateR2Collection.findOneAndReplace({'aid': candidateR2.aid, 'selectorType': candidateR2.selectorType}, candidateR2, {upsert:true})
					.then(updateCandidateR2 => {
						res.send(updateCandidateR2).status(200).end();
						db.close();
					})
					.catch(err => {
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