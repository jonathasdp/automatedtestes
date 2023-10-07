import { NumeroConta } from "../../src/model/NumeroConta";

describe("Número Conta", () => {
    test("Conta possui 6 dígitos.", async () => {
        const numeroConta = new NumeroConta("123456");
        expect(numeroConta.numero.length).toBe(6);
    })

    test("Número possui menos de 6 dígitos.", async () => {
        expect(() => { new NumeroConta("12345") }).toThrow("Número de conta inválido.");
    })

    test("Número possui mais de 6 dígitos.", async () => {
        expect(() => { new NumeroConta("1234567") }).toThrow("Número de conta inválido.");
    })

    test("Número possui letras.", async () => {
        expect(() => { new NumeroConta("abc123") }).toThrow("Número de conta inválido.");
    })
});