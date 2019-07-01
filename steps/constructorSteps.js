import { getRightSidebarElement, getIsConstructorMode, waitConstructorOpen } from '../pages/EditorPage';

export const clickButtonOnRightSideBar = async (page, element) => {
  const button = await getRightSidebarElement(page, element);
  await button.click();
}

export const isConstructorOpen = async (page) => {
  await waitConstructorOpen(page);
  const isOpen = await getIsConstructorMode(page);
  return isOpen;
}

