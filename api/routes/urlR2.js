const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const winston = require('winston');
const CollectionName = 'urlR2';

module.exports.init = (dbUrl, webServer) => {	
	webServer
	.get('/api/urlR2', (req, res) => {
		MongoClient.connect(dbUrl,{ useUnifiedTopology: true, useNewUrlParser: true })
		.then(db => {
			db.collection(CollectionName, {strict:true}, (err, urlR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					urlR2Collection.find().toArray()
					.then(urlR2sArray => {
						res.send(urlR2sArray).status(200).end();
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
	.post('/api/findOneUrlR2', (req, res) => {
		MongoClient.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true })
		.then(db => {
			db.collection(CollectionName, (err, urlR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {
					var item = req.body;
					urlR2Collection.findOne({"urlContent":item.urlContent})
					.then(FoundUrlR2 => {
						res.send(FoundUrlR2).status(200).end();
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
	.post('/api/saveUrlR2', (req, res) => {
		MongoClient.connect(dbUrl, { useUnifiedTopology: true, useNewUrlParser: true })
		.then(db => {
			db.collection(CollectionName, (err, urlR2Collection) => {
				if (err) {
					res.status(404).send(err).end();
					db.close();
				} else {

					var item = req.body;
					item._id = ObjectID();			

					urlR2Collection.save(item)
					.then(savedUrlR2 => {
						res.status(200).send(savedUrlR2).end();
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