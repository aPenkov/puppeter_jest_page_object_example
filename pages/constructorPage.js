const btnFieldsOnRightSidebar = `//span[@class = 'control__text']//span[contains(text(), "Fields")]`;
const btnSave = "//button[.='SAVE']";


export const getBtnDeleteField = async (page) => {
	const [button] = await page.$x('//div[contains(@class,"is-focused")]//button');
	return button; 
}

export const getIsConstructorMode = async (page) => {
    const elements = await page.$x(btnFieldsOnRightSidebar);
    return !!elements.length; 
  }
  
export const waitConstructorOpen = async (page) => {
  await page.waitFor(btnFieldsOnRightSidebar);
}

export const getBtnSave = async (page) => {
  const [button] = await page.$x(btnSave);
  return button;
}
