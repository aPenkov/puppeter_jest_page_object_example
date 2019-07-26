const puppeteer = require('puppeteer');
const cookies;

const url;

(async () => {
  const bs = await puppeteer.launch({headless:false});
  const page = await bs.newPage();
  await page.setCookie(...cookies);
  await page.goto(url,{waitUntil: 'networkidle2'});
  await page.waitForXPath(`//ul[@class = 'collapsed-right-sidebar__list']//span[contains(text(), "ADD FILLABLE FIELDS")]`)

  await bs.close();
})();
