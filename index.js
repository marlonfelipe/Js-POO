/*Importación de Clases*/
import{Cliente} from './Cliente.js';
import{CuentaCorriente} from './CuentaCorriente.js';

const cliente = new Cliente();
cliente.nombreCliente = 'Leonardo';
cliente.dniCliente = '234233232';
cliente.rutCliente = '223232'

const cuentaDeLeonardo = new CuentaCorriente();
cuentaDeLeonardo.numero = '1';
cuentaDeLeonardo.agencia = '001';
cuentaDeLeonardo.cliente = cliente;


//cuentaDeLeonardo.#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo();

saldo = cuentaDeLeonardo.depositoEnCuenta(100)
console.log('El saldo actual (CuentaLeonardo) ' +saldo);

const cliente2 = new Cliente();
cliente2.nombreCliente = 'Maria';
cliente2.dniCliente = '654545';
cliente2.rutCliente = '122121'

const cuentaDeMaria = new CuentaCorriente();
cuentaDeMaria.numero = '2';
cuentaDeMaria.agencia = '002';
cuentaDeMaria.cliente = 0;
console.log(cuentaDeMaria);
let parametroValor = 100;

/*
console.log('Parámetro Valor', parametroValor);
cuentaDeLeonardo.transferirParaCuenta(parametroValor, cuentaDeMaria);
console.log('Parámetro valor', parametroValor);


const saldoMaria = cuentaDeMaria.verSaldo();

console.log('Cuenta de Maria', cuentaDeMaria);


const saldoMaria = cuentaDeMaria.verSaldo();

console.log('El saldo actual (cuentaMaria) ' +saldoMaria);

const saldoLeonardo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual (cuentaLeonardo) ' +saldoLeonardo);
*/


