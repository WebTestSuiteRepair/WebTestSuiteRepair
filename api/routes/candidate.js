const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const winston = require('winston');
const CollectionName = 'candidate';
module.exports.init = (dbUrl, webServer) => {	
	webServer
	.get('/api/candidate', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, {strict:true}, (err, candidateCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					candidateCollection.find().toArray()
					.then(candidatesArray => {
						res.send(candidatesArray).status(200).end();
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
	.post('/api/saveCandidate', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, candidateCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {

					var candidate = req.body;
					if (candidate._id === null || candidate._id === undefined) {
						candidate._id = ObjectID();
					} else {
						candidate._id = ObjectID(candidate._id);
					}
					candidate.aid = ObjectID(candidate.aid);
					candidateCollection.findOneAndReplace({_id: candidate._id, aid: candidate.aid, 'actionContents': candidate.actionContents}, candidate, {upsert:true})
					.then(savedCandidate => {
						res.status(200).send(savedCandidate).end();
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
	.post('/api/findCandidatesByAID', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, candidateCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var candidate = req.body;
					candidate.aid = ObjectID(candidate.aid);
					candidateCollection.find({aid: candidate.aid}).toArray()
					.then(FoundCandidateArray => {
						res.send(FoundCandidateArray).status(200).end();
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
	.post('/api/findOneCandidate', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, candidateCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var candidate = req.body;
					candidate.aid = ObjectID(candidate.aid);
					candidateCollection.findOne({aid: candidate.aid, "actionContents": candidate.actionContents})
					.then(FoundCandidate => {
						res.send(FoundCandidate).status(200).end();
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