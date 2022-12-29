export class CuentaCorriente
{
    cliente;
    numero;
    agencia;   
    #saldo;
    

    constructor(){
        this.cliente = null;
        this.numero = '';
        this.agencia = '';
        this.#saldo = 0;
       
    }
    
    depositoEnCuenta(valor){
        if (valor > 0)
        this.#saldo += valor;
        return this.#saldo;
    }

    rertirarDeCuenta(valor){
        if(valor <= this.#saldo)
        this.#saldo -= valor;
        return this.#saldo;
    }

    verSaldo(){
        return this.#saldo;
    }

    transferirParaCuenta(valor, cuentaDestino){        
        this.rertirarDeCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);
        valor = 200;
    }
}
