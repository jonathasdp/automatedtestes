export class NumeroConta {
    constructor(public numero: string) {
        this.validar(numero);
    }

    validar(numero: string): void {
        if (!this.PossuiSeisDigitosNumericos(numero)) {
            throw new Error("Número de conta inválido.");
        }
    }
    
    PossuiSeisDigitosNumericos(numero: string): boolean {
        const rgx: RegExp = /^\d{6}$/;
        return rgx.test(numero)
    }
}

