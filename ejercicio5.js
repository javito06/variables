// class CuentaBancaria {
//     constructor(saldoInicial = 0) {
//         this.saldo = saldoInicial;
//     }

//     depositar(cantidad) {
//         if (cantidad > 0) {
//             this.saldo += cantidad;
//             console.log(`Depositado: $${cantidad.toFixed(2)}. Saldo actual: $${this.saldo.toFixed(2)}`);
//         } else {
//             console.log("La cantidad a depositar debe ser positiva.");
//         }
//     }

//     retirar(cantidad) {
//         if (cantidad > 0) {
//             if (cantidad <= this.saldo) {
//                 this.saldo -= cantidad;
//                 console.log(`Retirado: $${cantidad.toFixed(2)}. Saldo actual: $${this.saldo.toFixed(2)}`);
//             } else {
//                 console.log("Fondos insuficientes para realizar el retiro.");
//             }
//         } else {
//             console.log("La cantidad a retirar debe ser positiva.");
//         }
//     }
// }

// // Crear una instancia de CuentaBancaria con un saldo inicial de $1000
// const cuenta = new CuentaBancaria(1000);

// // Realizar varias operaciones
// cuenta.depositar(500);   // Depositar $500
// cuenta.retirar(200);    // Retirar $200
// cuenta.depositar(300);   // Depositar $300
// cuenta.retirar(1000);   // Intentar retirar $1000 (debería fallar)

// // Mostrar el saldo final
// console.log(`Saldo final: $${cuenta.saldo.toFixed(2)}`);
