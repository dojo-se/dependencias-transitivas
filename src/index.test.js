
import { output, main, parseLine,fnLetter } from './index'


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

  test("expect result to letter", () => {
    const inp = 'D E F';
    const out = ['D', 'E', 'F'];
    const expectResultLetter = fnLetter(inp); 
    expect(expectResultLetter).toEqual(out);
  });

})