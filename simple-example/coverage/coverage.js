const puppeteer = require('puppeteer');
const util = require('util');
const { BASE_URL,COOKIES,PARAMS,DESK } = require('../shared/constants');

const url = `${BASE_URL}${DESK}${PARAMS}`;
const cookies = COOKIES;

(async () => {
  const bs = await puppeteer.launch({headless:true});
  const page = await bs.newPage();
  await page.setCookie(...cookies);
  await Promise.all([
        page.coverage.startCSSCoverage(),
        page.coverage.startJSCoverage(),
  ]);
  await page.goto(url, {waitUntil: 'networkidle2'});
  await page.waitForXPath("//button[.='ADD FILLABLE FIELDS']")

  const[cssCoverage, jsCoverage] = await Promise.all([
        page.coverage.stopCSSCoverage(),
        page.coverage.stopJSCoverage(),
  ]);
  console.log(util.inspect(jsCoverage[0], { showHidden: false, depth: null }));

  let totalJSBytes = 0;
  let usedJSBytes = 0;

  for (const entry of jsCoverage){
      totalJSBytes += entry.text.length;
      for (const range  of entry.ranges){
          usedJSBytes += range.end - range.start -1;
      }
  }
  console.log(`js used: ${Math.round(usedJSBytes/totalJSBytes * 100)}%`)

  let totalCSSBytes = 0;
  let usedCSSBytes = 0;

  for (const entry of cssCoverage){
      totalCSSBytes += entry.text.length;
      for (const range  of entry.ranges){
          usedCSSBytes += range.end - range.start -1;
      }
  }
  console.log(`css used: ${Math.round(usedCSSBytes/totalCSSBytes * 100)}%`)
    

  await bs.close();
})();
