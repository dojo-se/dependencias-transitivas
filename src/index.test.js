
import { input, output, main } from './index'


describe("@", ()=> {
  test("Teste inicial", ()=> {
    expect(true).toEqual(true);
  })

  test("Espera a saída correta", () => {
    const expectResult = main();
    expect(expectResult).toEqual(output);
  })


})