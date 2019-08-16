const puppeteer = require('puppeteer');
const { BASE_URL,COOKIES,PARAMS } = require('../shared/constants');

const DESK = 'jsfiller-desk02';
const url = `${BASE_URL}${DESK}${PARAMS}`;
const cookies = COOKIES;

(async () => {
  const bs = await puppeteer.launch({headless:false});
  const page = await bs.newPage();
  await page.setCookie(...cookies);
  await page.tracing.start({path:'./traces/trace.js'})

  await page.goto(url, {waitUntil: 'networkidle2'});
  await page.waitForXPath("//button[.='ADD FILLABLE FIELDS']")
  await page.tracing.stop();
  await bs.close();
})();
