const btnOpenConstructor = "//button[.='ADD FILLABLE FIELDS']";
const activeFillableTextField = "//div[contains(@class,'is-focused')]//textarea";
const fillabeFieldsList = '.fillable-field__input-control';

export const getBtnOpenContructor = async (page) => {
	const [button] = await page.$x(btnOpenConstructor);
	return button; 
}

export const waitEditorOpen = async (page) => {
    await page.waitForXPath(btnOpenConstructor);
}

export const getIsEditorMode = async (page) => {
    const elements = await page.$x(btnOpenConstructor);
    return !!elements.length; 
}

export const getActiveField = async (page) => {
	const [field] = await page.$x(activeFillableTextField);
	return field; 
}

export const getFillableFields = async(page) => {
	const fields = await page.$$(fillabeFieldsList);
	return fields;
}
