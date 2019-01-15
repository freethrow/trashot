
const puppeteer = require('puppeteer');

// gets a URL
// returns a screenshot

module.exports = async (url) => {

  const browser = await puppeteer.launch();
  let page = await browser.newPage();
  page.setViewport({width: 800, height: 2000});
  await page.goto(url),
     { waitUntil: 'networkidle2' };
  
  const screenshot = await page.screenshot({
      omitBackground: true,
      encoding: 'binary'
    });
 
  await browser.close();

  return screenshot;   

}

