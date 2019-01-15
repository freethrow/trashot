
const cloudinary = require('cloudinary');
const fs = require('fs');

const keys = require('./keys');


// hide this in a config file, then gitignore it
cloudinary.config({ 
  cloud_name: keys.cloud_name, 
  api_key: keys.api_key, 
  api_secret: keys.api_secret 
});




var cdUpload = (file_path) =>{
	cloudinary.v2.uploader.upload(file_path, 
    	(error, result) => {

			//console.log(result, error);
			console.log(result);

    		fs.unlink(file_path, (err) => {
  				if (err) throw err;
  				console.log(file_path,' was deleted');
	    	});

		






		});
};





module.exports = cdUpload;

