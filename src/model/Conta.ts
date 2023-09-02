export class Conta {
    private _numero: string;
    private _saldo: number;

    constructor(numero: string, saldo: number) {
        this._numero = numero;
        this._saldo = saldo;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public sacar(valor: number): void {
        this.validarValor(valor);
        this._saldo -= valor;
    }

    public depositar(valor: number) {
        this.validarValor(valor);
        this._saldo += valor;
    }

    private validarValor(valor: number) {
        if (valor <= 0) {
            throw new Error("Valor não pode ser igual ou menor que zero.");
        }
    }
}