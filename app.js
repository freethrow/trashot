const screenshot = require('./screenshot');
const cdUpload = require('./cdUpload');





const sites = [{
    url:'http://www.informer.rs',
    name:'informer'},
    {
    url:'https://www.kurir.rs/vesti/politika',
    name:'kurir'}
    ];


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

const site1 = {
    site: 'B92',
    url: 'http://www.b92.net'
};

screenshot(site1.url)
.then(
    (screenshot) => cdUpload(site1.site, screenshot))
.then(
    (result) => console.log(result))
.catch((err) => {
    console.log(err);
});
