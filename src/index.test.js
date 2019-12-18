
import { output, main } from './index'


describe("@ DOJO", ()=> {
  test("initial test", ()=> {
    expect(true).toEqual(true);
  });

  test("expect to be expected result", () => {
    const expectResult = main();
    expect(expectResult).toEqual(output);
  });


})