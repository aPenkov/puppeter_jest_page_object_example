import puppeteer from 'puppeteer';
import { WIDTH, HEIGHT} from './constants';

class BrowserSession {

  async setup() {
    this.browser = await puppeteer.launch(
      {
        headless: false,
        slowMo: 40,
        devtools: false,
        args: ['--start-fullscreen'],
        }
    );
    this.page = await this.browser.newPage();
    await this.page.setViewport({ width: WIDTH, height: HEIGHT });
  }

  async teardown() {    
    this.browser.close();
  }
}

export const bs = new BrowserSession();


// export const initModule = async () => {
//   let page = null;
//   let browser = null;
   
//   const setup = async () => {
//     browser = await puppeteer.launch({
//       headless: false,
//       slowMo: 100,
//       devtools: false,
//       args: ['--start-fullscreen'], 
//     });
//     page = await browser.newPage();
//     await page.setViewport({ width: WIDTH, height: HEIGHT });
//   }

//   const teardown = async () => {    
//     browser.close();
//   }

//   await setup();

//   return { page, teardown };
// }

