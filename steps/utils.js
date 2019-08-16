export const makeScreenshoot = async (page) => {
    await page.screenshot({
        path: './screenshots/some_screenshot.png',
        fullPage:true
      });
  }