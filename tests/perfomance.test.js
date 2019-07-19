import { bs, consts } from '../shared';
import { clickButtonOnRightSideBar, isConstructorOpen } from '../steps/constructorSteps'

beforeAll(async () => {
  await bs.setup();
  await bs.page.goto(consts.BASE_URL, { waitUntil: "networkidle2" } );
});

afterAll(async () => {
  await bs.teardown();
});

describe("Perfomance", ()=> {
  it("User can open constructor", async () => {
    //console.log(bs)
    clickButtonOnRightSideBar(bs.page, 'ADD FILLABLE FIELDS');
    expect(await isConstructorOpen(bs.page)).toEqual(true);
  })
})