import { Conta } from "../../src/model/Conta";

describe("Conta", () => {
    test("saque sucesso", async () => {
        const conta = new Conta();
        expect(conta.sacar()).toBe(1000);
    })
})