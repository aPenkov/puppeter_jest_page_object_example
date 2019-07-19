const puppeteer = require('puppeteer');

(async () => {
  const bs = await puppeteer.launch({headless:false});
  const page = await bs.newPage();
  await page.tracing.start({path:'trace.js'})
  await page.goto('http://localhost:3000/?isOfflineMode&dontWaitForPdf', {waitUntil: 'networkidle2'});
  await page.tracing.stop();
  await bs.close();
})();
