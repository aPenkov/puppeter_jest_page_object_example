const puppeteer = require('puppeteer');

(async () => {
  const bs = await puppeteer.launch();
  const page = await bs.newPage();
  await page.setViewport({width: 1360, height: 768})

  await page.setRequestInterception(true);
  page.on('request', interceptedRequest => {
    if (interceptedRequest.url().endsWith('.png') || interceptedRequest.url().endsWith('.jpg'))
      interceptedRequest.abort();
    else
      interceptedRequest.continue();
  });

  await page.goto("https://dev3.pdffiller.com", {waitUntil: 'networkidle2'});
  await page.screenshot({
    path: './screenshot-abort-request.png',
    fullPage:true
  });

  await bs.close();
})();
