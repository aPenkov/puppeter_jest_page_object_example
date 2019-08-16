import { bs, consts } from '../shared';
import {makeScreenshoot} from '../steps/utils'
import { isConstructorOpen, clickSaveBtn } from '../steps/constructorSteps'
import { openConstructor, isEditorOpen, clickFillOnline,
   enterTextToActiveField, getTextFromField } from '../steps/editorSteps'

const w9UrlPArametr = '454879723--w9-2018-2019-form-';
const url = `${consts.BASE_URL}${w9UrlPArametr}`;

beforeAll(async () => {
  await bs.setup();
  bs.page.setCookie(consts.DESK);
});

afterAll(async () => {
  await bs.teardown();
});

describe("Fill field", () => {
  it("User can fill field", async () => {
    await bs.page.goto(url, { waitUntil: "networkidle2" } );
    await clickFillOnline(bs.page);
    expect(await isEditorOpen(bs.page)).toEqual(true);
    await openConstructor(bs.page);
    expect(await isConstructorOpen(bs.page)).toEqual(true);
    await clickSaveBtn(bs.page);
    expect(await isEditorOpen(bs.page)).toEqual(true);
    await enterTextToActiveField(bs.page, 'test');
    await expect(await getTextFromField(bs.page,0)).toEqual('test')
    await makeScreenshoot(bs.page);
  })
})
