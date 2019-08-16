const puppeteer = require('puppeteer');
const { BASE_URL} = require('../shared/constants');

const url = BASE_URL;

puppeteer.launch({headless:false}).then(async bs => {
    const page = await bs.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'});

    await page.screenshot({
        path:"screenshoots/simple-screenshoot.png"
    })

    await page.screenshot({
        path:"screenshoots/fulpage-screenshoot.png",
        fullPage:"true"
    })
    await bs.close();

  });
