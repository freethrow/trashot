
const puppeteer = require('puppeteer');
const mongoose = require('mongoose');
const cdUpload = require('./cdUpload');
const screenshot = require('./models/Screenshot');

// DB config
const db = require('./keys').MongoURI;

// connect to mongo
mongoose.connect(db, {useNewUrlParser:true}).
    then(() =>{ console.log('MongoDB connected');}).
    catch((err) => {
        console.log(err);
    });


// make the screenshot and send it 



// hardcode some sites

const sites = [{
  url:'http://www.blic.rs',
  name:'blic'},
  {
  url:'https://www.kurir.rs/vesti/politika',
  name:'kurir'}
  ];


async function takeShot(site) {

  let now = Date();    

  const browser = await puppeteer.launch();
  let page = await browser.newPage();
  await page.goto(site.url);
  page.setViewport({width: 1200, height: 2000});
      
  let fileName = site.name +  '.png'
  console.log(fileName);
  await page.screenshot({path:fileName});
  await browser.close();

  let imgUrl = cdUpload(fileName);
      
  result = {
    imgUrl: imgUrl,
    siteUrl: site.url,
    name: site.name
  }

  console.log(result);
  return result
};

takeShot(
  {
    url:'http://www.b92.net',
    name:'B92'
  }
);