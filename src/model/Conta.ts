export class Conta {
    private _numero: string;
    private _saldo: number;
    public get saldo(): number {
        return this._saldo;
    }
    constructor(numero: string, saldo: number) {
        this._numero = numero;
        this._saldo = saldo;
    }

    public sacar(valor: number): void {
        this._saldo -= valor;
    }
    public depositar(valor: number) {
        this._saldo += valor;
    }
}