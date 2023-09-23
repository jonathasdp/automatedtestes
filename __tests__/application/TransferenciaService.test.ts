import { TransferenciaServico } from "../../src/application/TransferenciaService";
import { TransferenciaDTO } from "../../src/application/dto/TransferenciaDTO";
import { Conta } from "../../src/model/Conta";
import { MemoriaContaRepositorio } from "../fake/MemoriaContaRepositorio";

describe("Transferência serviço", () => {
    test("Transferir valores com sucesso.", async () => {
        const repositorio = new MemoriaContaRepositorio();
        const contaOrigem = new Conta("123456", 1000.0);
        const contaDestino = new Conta("654321", 1000.0);
        repositorio.adicionar(contaOrigem);
        repositorio.adicionar(contaDestino);

        const transferenciaServico = new TransferenciaServico(repositorio);

        const dto = new TransferenciaDTO("123465", "654321", 100);

        transferenciaServico.transferir(dto);

        expect(repositorio.buscar("123465")!.saldo).toBe(4900.00)
        expect(repositorio.buscar("654321")!.saldo).toBe(5100.00)

    })
})