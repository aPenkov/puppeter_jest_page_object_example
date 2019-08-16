const puppeteer = require('puppeteer');
const devices = require('puppeteer/DeviceDescriptors');
const { BASE_URL} = require('../shared/constants');

const url = BASE_URL+'en/top';
const iPhonex = devices['iPhone X'];

puppeteer.launch({headless:false}).then(async bs => {
    const page = await bs.newPage();
    await page.goto(url, {waitUntil: 'networkidle2'});
    await page.emulate(iPhonex);

    await page.screenshot({
        path:"screenshoots/simple-screenshoot-iphone.png"
    })

    await bs.close();

  });
