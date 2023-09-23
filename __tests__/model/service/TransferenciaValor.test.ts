import { Conta } from "../../../src/model/Conta";
import { TransferenciaValor } from "../../../src/model/service/TransferenciaValor";

describe("Transferência Valor", () => {
    test("transferencia de valor entre duas contas", () => {
        const contaOrigem = new Conta("123456", 1000.0);
        const contaDestino = new Conta("789012", 1000.0);

        const transferenciaValor = new TransferenciaValor();
        transferenciaValor.transferir(contaOrigem, contaDestino, 100);

        expect(contaOrigem.saldo).toBe(900);
        expect(contaDestino.saldo).toBe(1100);
    })
}); 