const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const winston = require('winston');
const CollectionName = 'url';

module.exports.init = (dbUrl, webServer) => {	
	webServer
	.get('/api/url', (req, res) => {
		MongoClient.connect(dbUrl,{ useUnifiedTopology: true, useNewUrlParser: true })
		.then(db => {
			db.collection(CollectionName, {strict:true}, (err, urlCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					urlCollection.find().toArray()
					.then(urlsArray => {
						res.send(urlsArray).status(200).end();
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
	.post('/api/findOneUrl', (req, res) => {
		MongoClient.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true })
		.then(db => {
			db.collection(CollectionName, (err, urlCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var item = req.body;
					urlCollection.findOne({"urlContent":item.urlContent})
					.then(FoundUrl => {
						res.send(FoundUrl).status(200).end();
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
	.post('/api/saveUrl', (req, res) => {
		MongoClient.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true })
		.then(db => {
			db.collection(CollectionName, (err, urlCollection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {

					var item = req.body;
					item._id = ObjectID();			

					urlCollection.save(item)
					.then(savedUrl => {
						res.status(200).send(savedUrl).end();
						db.close();					
					})
					.catch(err => {
						winston.error(`save the item to mongodb is failed: ${err}`);
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