const puppeteer = require('puppeteer');

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  })
} 

(async () => {
  const bs = await puppeteer.launch({headless:false});
  const page = await bs.newPage();
  await page.goto('http://localhost:3000/?isOfflineMode&dontWaitForPdf', {waitUntil: 'networkidle2'});

  await page.click('button[title = "Toggle Wizard"]');
  const fillableFields = await page.$$('.fillable-field__input-control');
  for (let i = 0; i < fillableFields.length; i++) {
    await fillableFields[i].click();
    await fillableFields[i].type('2')
  }
  await page.screenshot({path: './screenshots/some_screenshot.png'});

  await bs.close();
})();
