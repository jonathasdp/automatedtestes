import { Conta } from "../../src/model/Conta";

describe("Conta", () => {
    test("sacar com sucesso", async () => {
        const conta = new Conta("123456", 5000.0);
        conta.sacar(200.0);
        expect(conta.saldo).toBe(4800.0);
    })
})


describe("Conta", () => {
    test("depositar com sucesso", async () => {
        const conta = new Conta("123456", 5000.0);
        conta.depositar(200.0);
        expect(conta.saldo).toBe(5200.0);
    })
})