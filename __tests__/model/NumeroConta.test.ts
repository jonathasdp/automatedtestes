import { NumeroConta } from "../../src/model/NumeroConta";

describe("Número Conta", () => {
    test("Conta possui 6 dígitos.", async () => {
        const numeroConta = new NumeroConta("123456");
        expect(numeroConta.numero).toBe("123456");
        expect(numeroConta.numero.length).toBe(6);
    })
});