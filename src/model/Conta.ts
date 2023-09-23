import { NumeroConta } from "./NumeroConta";

export class Conta {
    private _numeroConta: NumeroConta;
    private _saldo: number;

    constructor(numero: string, saldo: number) {
        this._numeroConta = new NumeroConta(numero);
        this._saldo = saldo;
    }

    public get saldo(): number {
        return this._saldo;
    }

    public get numero(): string {
        return this._numeroConta.numero;
    }

    public sacar(valor: number): void {
        this.validarValor(valor);

        if ((this._saldo - valor) < 0)
            throw new Error("Saques devem possuir saldo.");

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