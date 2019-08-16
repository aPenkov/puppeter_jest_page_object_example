const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const iPhonex = devices['iPhone X'];
const {W9_URL} = require('../shared/constants')

const URL = W9_URL;
(async () => {
  const bs = await puppeteer.launch({headless:false});
  const page = await bs.newPage();
  await page.setViewport({width: 1360, height: 768})
  await page.goto(URL, {waitUntil: 'networkidle2'});
  
  const [fllNln] = await page.$x('//*[@id="mobile-panel"]/div[3]/div/section[1]/div/div[2]/div[2]/div/a');
  await fllNln.click(); 
  await page.waitFor(1500);
  let crntUrl = await page.url();
  crntUrl = crntUrl.replace('desk13','desk02')
  await page.goto(crntUrl) 

  await page.waitForXPath("//button[.='ADD FILLABLE FIELDS']");
  const [cnstrtrBtn] = await page.$x("//button[.='ADD FILLABLE FIELDS']");
  await cnstrtrBtn.click();
  await page.waitForXPath("//button[@aria-label='Remove Field']");
  const [dltFrstFld] = await page.$x("//button[@aria-label='Remove Field']");
  await dltFrstFld.click();
  const [svBtn] = await page.$x("//button[.='SAVE']");
  await svBtn.click();
  await page.waitForSelector(".is-focused");
  const [field] = await page.$x("//div[contains(@class,'is-focused')]//textarea");
  await field.type('test');
  await page.screenshot({
    path: './some_screenshot.png',
    fullPage:true
  });

  await page.emulate(iPhonex);
  await page.waitForXPath('//*[@id="content"]/div[3]/div[2]/div/div/div[5]/div[2]/div/div[1]/div/div/div/div/div/div[2]/div/div[2]/div/div/div/div');
  await page.screenshot({
    path: './some_screenshot_iphone.png',
    fullPage:true
  });

  await bs.close();
})();
