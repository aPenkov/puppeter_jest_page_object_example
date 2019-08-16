const puppeteer = require('puppeteer');
const util = require('util');

const { BASE_URL,COOKIES,PARAMS } = require('../shared/constants');

const DESK = 'jsfiller-desk02';
const url = `${BASE_URL}${DESK}${PARAMS}`;
const cookies = COOKIES;

(async () => {
  const bs = await puppeteer.launch({headless:true});
  const page = await bs.newPage();
  await page.setCookie(...cookies);
  page.on('console', msg => {
  	if(msg.type()=='error'){//error
  		console.log(util.inspect(msg.text()));
	  }
  })

  await page.goto(url, {waitUntil: 'networkidle2'});
  await page.waitForXPath("//button[.='ADD FILLABLE FIELDS']")
  await bs.close();
})();
