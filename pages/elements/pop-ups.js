const BtnNoThanks = '.g-btn--secondary';

export const getBtnNoThanks = async (page) => {
    const button = await page(BtnNoThanks);
    return button;
  }