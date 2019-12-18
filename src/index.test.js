
import { output, main, parseLine } from './index'


describe("@ DOJO", ()=> {
  test("initial test", ()=> {
    expect(true).toEqual(true);
  });

  test("expect to be expected result", () => {
    const expectResult = main();
    expect(expectResult).toEqual(output);
  });

  test("expect result decomposition", () => {
    const inp = `
A B C
D E F
`;

    const res = parseLine(inp);

    const out = ['A B C', 'D E F'];


    expect(res).toEqual(out);
  });


})