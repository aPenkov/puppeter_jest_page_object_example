const puppeteer = require('puppeteer');

(async () => {
  const bs = await puppeteer.launch({headless:false});
  const page = await bs.newPage();

  await page.goto('http://localhost:3000/?isOfflineMode&dontWaitForPdf', {waitUntil: 'networkidle2'});
  page.on("pageerror", function(err) {  
    theTempValue = err.toString();
    console.log("Page error: " + theTempValue); 
    })
  await bs.close();
})();