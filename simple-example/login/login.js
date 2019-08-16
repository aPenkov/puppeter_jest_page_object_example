const puppeteer = require('puppeteer');
const {BASE_URL, LOGIN_URL_PARAM,W9_URL} = require('../shared/constants')

const url = `${BASE_URL}${LOGIN_URL_PARAM}`
(async () => {
  const bs = await puppeteer.launch({headless:false});
  //const pages = await bs.newPage();
  const page = (await bs.pages())[0];

  await page.goto(URL, {waitUntil: 'networkidle2'});
  const [email] = await page.$x('//*[@id="form-responsive-login"]/div[1]//input');
  const [pass] = await page.$x('//*[@id="form-responsive-login"]/div[2]//input');
  const [loginBtn] = await page.$x('//*[@id="form-responsive-login"]/div[4]/button');

  await email.type("apenkov+dev31@spbfiller.com")
  await pass.type('123456')
  await loginBtn.click();
  await page.waitFor(3000)
  
  await page.goto(W9_URL);
  await page.click(".js-greeting-button > .btn-fill-online");
  await page.waitForXPath("//button[.='ADD FILLABLE FIELDS']");

  await page.screenshot({
    path: './some_screenshot_login.png',
    fullPage:true
  });
  await bs.close();
})();
