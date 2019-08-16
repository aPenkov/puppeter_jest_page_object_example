import { getBtnOpenContructor, waitEditorOpen, getIsEditorMode, getFillableFields, getActiveField } from '../pages/EditorPage';
import { getBtnFillOnline} from '../pages/OpenFormPage';
import { getBtnNoThanks } from '../pages/elements/pop-ups';

export const openConstructor = async (page) => {
    const button = await getBtnOpenContructor(page);
    await button.click();
  }

export const isEditorOpen = async (page) => {
    await waitEditorOpen(page);
    const isOpen = await getIsEditorMode(page)
    return isOpen;
}

export const clickNoThanks = async (page) => {
  const button = await getBtnNoThanks(page);
  await button.click();
}

export const clickFillOnline = async (page) => {
  const button = await getBtnFillOnline(page);
  await button.click();
}

export const enterTextToActiveField = async (page, text) => {
  const field = await getActiveField(page);
  await field.type(text);
}

export const getTextFromField = async (page, fieldNumber) => {
  const fields = await getFillableFields(page);
  const field = fields[fieldNumber];
  const text = await (await field.getProperty('textContent')).jsonValue();
  return text;
}
