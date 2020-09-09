//requiring path and fs modules
const path = require('path');
const fs = require('fs');
//joining path of directory 
// const directoryPath = path.join(__dirname, readPath);
//passsing directoryPath and callback function

class ReadAllFiles {
	constructor(readPath){
		this.readPath = readPath;
		this.directoryPath = path.join(__dirname, readPath);
	}

	readAll(){	

		return new Promise((resolve,reject) =>{
			fs.readdir(this.directoryPath, function (err, files) {			
			    if (err) {
			    	console.log('Unable to scan directory: ' + err);
			    	reject(err);
			    } else {					
			    	resolve(files);			    			
			    }
			});
		});

	}

}
module.exports.ReadAllFiles = ReadAllFiles;