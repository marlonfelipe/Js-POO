/*Definición de Clases*/



cuentaDeLeonardo = new CuentaCorriente();
//cuentaDeLeonardo.#saldo = 10;
let saldo = cuentaDeLeonardo.verSaldo();
console.log('El saldo actual es ' +saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(100)
console.log('El saldo actual es ' +saldo);

saldo = cuentaDeLeonardo.rertirarDeCuenta(100)
console.log('El saldo actual es ' +saldo);

saldo = cuentaDeLeonardo.depositoEnCuenta(-10)
console.log('El saldo actual es ' +saldo);


