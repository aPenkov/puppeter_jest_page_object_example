const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const bs = await puppeteer.launch();
  const page = await bs.newPage();
  await page.setViewport({width: 1360, height: 768})

  await page.setRequestInterception(true);
  page.on('request', interceptedRequest => {
    let resBody = fs.readFileSync('./doc.html', 'utf-8')
    if (interceptedRequest.url()=='https://dev3.pdffiller.com/')
    interceptedRequest.respond({
        body: resBody
      });
    else
      interceptedRequest.continue();
  });

  await page.goto("https://dev3.pdffiller.com", {waitUntil: 'networkidle2'});
  await page.screenshot({
    path: './screenshot-change-response.png',
    fullPage:true
  });

  await bs.close();
})();
