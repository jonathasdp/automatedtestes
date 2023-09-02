import { Conta } from "../../src/model/Conta";

describe("Conta", () => {
    test("Sacou", async () => {
        const conta = new Conta("123456", 5000.0);
        conta.sacar(200.0);
        expect(conta.saldo).toBe(4800.0);
    })
})


describe("Conta", () => {
    test("Depositou", async () => {
        const conta = new Conta("123456", 5000.0);
        conta.depositar(200.0);
        expect(conta.saldo).toBe(5200.0);
    })
})

describe("Conta", () => {
    test("Não sacou com valor zerado", async () => {
        const conta = new Conta("123456", 5000.0);
        expect(() => conta.sacar(0)).toThrow("Valor não pode ser igual ou menor que zero.");
    })
})