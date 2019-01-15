const cloudinary = require('cloudinary');
const keys = require('./keys');


// hide this in a config file, then gitignore it
cloudinary.config({ 
  cloud_name: keys.cloud_name, 
  api_key: keys.api_key, 
  api_secret: keys.api_secret 
});

// gets a screenshot, uploads it with a custom public_id


module.exports = (site, screenshot) => {

	return new Promise((resolve, reject) => {

		// date and time public ID
		const today  = new Date();
		const dd = today.getDate();
		const mm = today.getMonth() + 1;
		const yyyy = today.getFullYear();
		const hh = today.getHours();
		const mins = today.getMinutes();
		const dateTime = `${yyyy}-${mm}-${dd}-${hh}-${mins}`;


		const options = {
			folder: 'trashot',
			public_id: `${site}-${dateTime}`
		};

		cloudinary.v2.uploader.upload_stream(options, (error,result) => {
			if (error) reject(error)
			else resolve(result);
		}).end(screenshot);
	});

	}

