import { Recibo } from "../../src/model/Recibo";

describe("Recibo", () => {
    test("Criou recibo.", async () => {
        const recibo = new Recibo();
        expect(recibo.codigo.length).toBe(6);
    })
})
