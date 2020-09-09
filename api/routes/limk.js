const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const winston = require('winston');
const CollectionName = 'link';
module.exports.init = (dbUrl, webServer) => {

	webServer
	.get('/api/link', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, {strict:true}, (err, linkCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					linkCollection.find().toArray()
					.then(linksArray => {
						res.send(linksArray).status(200).end();
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
	.post('/api/findOneLink', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, linkCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var linkItem = req.body;
					linkCollection.findOne({"former_action": linkItem.former_action, "latter_action":linkItem.latter_action})
					.then(FoundLink => {
						res.send(FoundLink).status(200).end();
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
	.post('/api/saveLink', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, linkCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {

					var linkItem = req.body;
					linkItem._id = ObjectID();				

					linkCollection.save(linkItem)
					.then(savedLink => {
						res.status(200).send(savedLink).end();
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
	.post('/api/findLinksByFormerAction', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, linkCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var linkItem = req.body;
					linkCollection.find({"former_action": linkItem.former_action}).toArray()
					.then(FoundLinks => {
						res.send(FoundLinks).status(200).end();
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
	.post('/api/findLinksByLatterAction', (req, res) => {
		MongoClient.connect(dbUrl)
		.then(db => {
			db.collection(CollectionName, (err, linkCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var linkItem = req.body;
					console.log('db api findLinksByLatterAction: the item to search is:');
					console.log(linkItem);
					linkCollection.find({"latter_action": linkItem.latter_action}).toArray()
					.then(FoundLinks => {
						res.send(FoundLinks).status(200).end();
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