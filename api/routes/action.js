const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const winston = require('winston');
const CollectionName = 'action';
module.exports.init = (dbUrl, webServer) => {	
	webServer
	.get('/api/action', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, {strict:true}, (err, actionCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					actionCollection.find().toArray()
					.then(actionsArray => {
						res.send(actionsArray).status(200).end();
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
	.post('/api/saveAction', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, actionCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {

					var action = req.body;
					action._id = ObjectID();
					winston.info(`get the req body : ${req.body})`);				

					actionCollection.save(action)
					.then(savedAction => {
						res.status(200).send(savedAction).end();
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
	.post('/api/findOneAction', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, actionCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var action = req.body;
					// actionCollection.findOne({"preUrl": action.preUrl, "url":action.url, "action":action.action})
					// actionCollection.findOne({"url": action.url, "action":action.action})
					actionCollection.findOne({"actionContents":action.actionContents})
					.then(FoundAction => {
						res.send(FoundAction).status(200).end();
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