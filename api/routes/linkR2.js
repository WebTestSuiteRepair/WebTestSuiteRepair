const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const winston = require('winston');
const CollectionName = 'linkR2';
module.exports.init = (dbUrl, webServer) => {

	webServer
	.get('/api/linkR2', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, {strict:true}, (err, linkR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					linkR2Collection.find().toArray()
					.then(linkR2sArray => {
						res.send(linkR2sArray).status(200).end();
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
	.post('/api/findOneLinkR2', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, linkR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var linkR2Item = req.body;
					linkR2Collection.findOne({"former_action": linkR2Item.former_action, "latter_action":linkR2Item.latter_action})
					.then(FoundLinkR2 => {
						res.send(FoundLinkR2).status(200).end();
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
	.post('/api/saveLinkR2', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, linkR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {

					var linkR2Item = req.body;
					linkR2Item._id = ObjectID();				

					linkR2Collection.save(linkR2Item)
					.then(savedLink => {
						res.send(savedLinkR2).status(200).end();
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
	.post('/api/findLinkR2sByFormerAction', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, linkR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var linkR2Item = req.body;
					linkR2Collection.find({"former_action": linkR2Item.former_action}).toArray()
					.then(FoundLinkR2s => {
						res.send(FoundLinkR2s).status(200).end();
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
	.post('/api/findLinkR2sByLatterAction', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, linkR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var linkR2Item = req.body;
					console.log('db api findLinkR2sByLatterAction: the item to search is:');
					console.log(linkR2Item);
					linkR2Collection.find({"latter_action": linkR2Item.latter_action}).toArray()
					.then(FoundLinkR2s => {
						res.send(FoundLinkR2s).status(200).end();
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