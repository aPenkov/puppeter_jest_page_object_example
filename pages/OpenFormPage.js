const btnFillOnline = ".js-greeting-button > .btn-fill-online";

export const getBtnFillOnline = async (page) => {
	const button = await page.$(btnFillOnline);
	return button; 
}