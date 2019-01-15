const puppeteer = require('puppeteer');
const path = require('path');

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


function takeShots(sites) {

    let now = Date();    

    sites.forEach(async function(site){
        const browser = await puppeteer.launch();
        let page = await browser.newPage();
        await page.goto(site.url);
        page.setViewport({width: 800, height: 2000});
        
        //let timePart = moment(now, "DD-MM-YYYY");
        let fileName = site.name +  '.png'
        console.log(fileName);
        await page.screenshot({path:fileName});
        await browser.close();
    });
};

takeShots(sites);

/*(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.informer.rs');
  await page.screenshot({path: 'informer.png'});

  await browser.close();
})();*/