
const puppeteer = require('puppeteer');

// gets a URL
// returns a screenshot

module.exports = async (url) => {

  const browser = await puppeteer.launch();
  let page = await browser.newPage();
  page.setViewport({width: 800, height: 1200});
  await page.goto(url,{timeout: 60000});
  
  const screenshot = await page.screenshot({
      encoding: 'binary'
    });
 
  await browser.close();

  return screenshot;   

}

