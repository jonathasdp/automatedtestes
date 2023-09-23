import { Conta } from "../../src/model/Conta";
import { Repositorio } from "../model/contract/Repositorio";

export class MemoriaContaRepositorio implements Repositorio<Conta, string> {
    private _dicionario: Map<string, Conta>;

    public constructor(){
        this._dicionario = new Map<string, Conta>();
    }

    public buscar(numero: string): Conta | undefined {
        return this._dicionario.get(numero);
    }

    public adicionar(conta: Conta): void {
        this._dicionario.set(conta.numero, conta);
    }
}