const screenshot = require('./screenshot');
const cdUpload = require('./cdUpload');

const mongoose = require('mongoose');

const Shot = require('./models/Shot');


//

const db = require('./keys').MongoURI;

mongoose.connect(db, {useNewUrlParser:true})
    .then(() =>{console.log('MongoDB connected...');})
    .catch((err) => {
        console.log(err);
    });

/* TO DO: 
==============================================================
-setup date formatting
-setup scheduling ---> 8AM and 8PM for starters
-setup cloudinary uploads
-setup mongodb for storing screenshots 
-simple heroku express app to pull down pictures sorted by day

App structure:

screenshot.js - different module: receives an URL, returns an image file, path

models/Screenshot.js - MongoDB model for images (url, site, date, time)

upload.js - handles cloudinary uploads -> receives a file handle, a date time, returns a url

simple express app: queries the MongoDB, returns a list of images sorted by date and site

testing for everything mocha, chai



*/

const sites = [{
    name: 'B92',
    url: 'https://www.b92.net/info/'
},
{   name: 'Kurir',
    url: 'https://www.kurir.rs'},
    {   name: 'Informer',
    url: 'https://www.informer.rs'}    

];



// loop through the sites

sites.forEach(function(site) {
    console.log(`Processing site ${site.name} : ${site.url}...`);

    screenshot(site.url)
    .then(
    (screenshot) => cdUpload(site.name, screenshot))
    .then(
    (result) => {
        console.log(result);

        // save to mongoDB
        let newShot = new Shot({
            site: site.name,
            siteUrl: site.url,
            url: result.url
        });

        newShot.save();


    })
    .catch((err) => {
    console.log(err);
});




  });






