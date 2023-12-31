import { Conta } from "../../src/model/Conta";

describe("Conta", () => {
    test("Sacou corretamente.", async () => {
        const conta = criarConta();
        conta.sacar(200.0);
        expect(conta.saldo).toBe(4800.0);
    });
    test("Não sacou com valor zerado.", async () => {
        const conta = criarConta();
        expect(() => conta.sacar(0)).toThrow("Valor não pode ser igual ou menor que zero.");
    });
    test("Não sacou com valor negativo.", async () => {
        const conta = criarConta();
        expect(() => conta.sacar(-5.0)).toThrow("Valor não pode ser igual ou menor que zero.");
    });
    test("Depositou corretamente.", async () => {
        const conta = criarConta();
        conta.depositar(200.0);
        expect(conta.saldo).toBe(5200.0);
    });
    test("Não depositou com valor zerado.", async () => {
        const conta = criarConta();
        expect(() => conta.depositar(0)).toThrow("Valor não pode ser igual ou menor que zero.");
    });
    test("Não depositou com valor negativo.", async () => {
        const conta = criarConta();
        expect(() => conta.sacar(-5.0)).toThrow("Valor não pode ser igual ou menor que zero.");
    });
    test("sacar valor acima do saldo", async () => {
        const conta = criarConta("123456", 199.0);
        expect(() => { conta.sacar(200.0); }).toThrow("Saques devem possuir saldo.");
    });
    test("sacar todo o saldo", async () => {
        const conta = criarConta();
        conta.sacar(5000.0);
        expect(conta.saldo).toBe(0);
    });
})

function criarConta(numero: string = "123456", saldo: number = 5000) {
    return new Conta(numero, saldo);
}
