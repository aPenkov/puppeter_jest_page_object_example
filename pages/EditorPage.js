export const getRightSidebarElement = async (page, element) => {
	const [button] = await page.$x(`//ul[@class = 'collapsed-right-sidebar__list']//span[contains(text(), "${element}")]`);
	return button; 
}

export const getIsConstructorMode = async (page) => {
  const elements = await page.$x(`//span[@class = 'control__text']//span[contains(text(), "Fields")]`);
  return !!elements.length; 
}

export const waitConstructorOpen = async (page) => {
  await page.waitFor(`//span[@class = 'control__text']//span[contains(text(), "Fields")]`);
}
