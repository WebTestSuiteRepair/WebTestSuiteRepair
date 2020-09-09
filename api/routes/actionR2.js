const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const winston = require('winston');
const CollectionName = 'actionR2';
module.exports.init = (dbUrl, webServer) => {	
	webServer
	.get('/api/actionR2', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, {strict:true}, (err, actionR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					actionR2Collection.find().toArray()
					.then(actionR2sArray => {
						res.send(actionR2sArray).status(200).end();
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
	.post('/api/saveActionR2', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, actionR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {

					var actionR2 = req.body;
					// actionR2._id = ObjectID();
					// winston.info(`get the req body : ${req.body})`);				
					actionR2Collection.save(actionR2)
					.then(savedAction => {
						res.send(savedActionR2).status(200).end();
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
	.post('/api/findOneActionR2', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, actionR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var actionR2 = req.body;
					actionR2Collection.findOne({"actionContents":actionR2.actionContents})
					.then(FoundActionR2 => {
						res.send(FoundActionR2).status(200).end();
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
	.post('/api/updateActionR2', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, actionR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var actionR2 = req.body;
					// if (actionR2._id === null || actionR2._id === undefined) {
					// 	actionR2._id = ObjectID();
					// } else {
					// 	actionR2._id = ObjectID(actionR2._id);
					// }
					// winston.info(`get the req body : ${req.body})`);
					actionR2Collection.findOneAndReplace({'actionContents': actionR2.actionContents}, actionR2, {upsert:true})
					.then(updatedAction => {
						res.send(updatedAction).status(200).end();
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