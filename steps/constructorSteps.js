import { getIsConstructorMode, waitConstructorOpen,getBtnSave } from '../pages/ConstructorPage';

export const isConstructorOpen = async (page) => {
  await waitConstructorOpen(page);
  const isOpen = await getIsConstructorMode(page);
  return isOpen;
}

export const clickSaveBtn = async (page) => {
  const button = await getBtnSave(page);
  button.click();
}

