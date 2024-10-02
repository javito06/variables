// EJERCICIO1
// const nombres = []
// const cantidadmaxima= 10
// while(nombres.length <=cantidadmaxima){
//     const  nombre = prompt("ingrese un nombre")
//     nombres.push(nombre)
// }
// console.log("antes de elminar el ultimo",nombres)
// nombres.pop()
// console.log("despues de eleminar el ultimo",nombres)


// EJERCICIO2   
// const frutas = ["manzana,frutilla,banana,pera,uva"]
// for(let i=0;i<frutas.length;i++){
//     console.log (frutas[i])
// }
// alert(frutas)
// frutas.shift()
// alert(frutas)
// let nuevafruta = prompt("ingresa la fruta")
// frutas.unshift(nuevafruta)
// alert(frutas)

// EJERCICIO3
// const nombre = ["marcos","juan","mateo","javier","lucas"];
// let indice = prompt("ingrese un indice")
// let cantidad = prompt("ingrese la cantidad a borrar")
// console.log("antes")
// if(indice >= 0 & indice <= nombre.length & cantidad > 0 & cantidad <= nombre.length){
//     console.log ("indice o cantidad correcto")
//     nombre.splice(indice,cantidad)
// }else{
//     console.log("indices borrado incorrecto")
// }
// console.log("despues",nombre)

// EJERCICIO4
// const arrayA = [1,2,3,4,5,6]
// console.log (arrayA)
// arrayA.reverse()
// console.log (arrayA)

// EJERCICIO 5
// const arrayA =[1,2,3,4]
// const arrayB =[a,b,c,d]

// const arrayC = arrayA.concat(arrayB)

// console.log(arrayC)

// EJERCICIO 6
// const arrayA = [a,b,c,d,e,f]
// const  indice_buscar = prompt("ingresa el indice a buscar")

// if(indice_buscar >= 0 & indice_buscar < arrayA.length){
//     console.log("el indice es correcto")
//     console.log(arrayA[indice_buscar])
// }else{
//     console.log (" el indicce es incorrecto")
// }
// EJERCICIO 7
// const arrayA = []
// const cantidadmaxima = prompt("ingresa la cantidad maxima de elementos")
// for(let i= 0;i<cantidadmaxima;i++){
//     let elemento = prompt ("ingresa un elemento")
//     if(Number(elemento)){
//     }else{
//         alert("no ingreesast un numero")
//         elemento =prompt("ingrese un numero")
//     }
// }
// console.log(arrayA)
// ejercicio 8
// const arrayA =[]
// const numero = 0
// while(numero > 0){
//     if( numero =prompt("ingresar un numero")){
//     console.log(numero)} 
// }
// 1. Crea un array vacío.
// let numeros = [];

// // 2. Usa un ciclo while que pida al usuario ingresar números.
// while (true) {
//     let input = prompt("Ingresa un número (negativo para terminar):");

//     // Convierte la entrada a número
//     let numero = Number(input);

//     // 3. Termina el ciclo cuando el usuario ingrese un número negativo.
//     if (numero < 0) {
//         break;
//     }

//     // Usa unshift para agregar cada número al principio del array.
//     numeros.unshift(numero);
// }

// // 4. Usa pop para eliminar el último número agregado.
// numeros.pop();

// // Muestra el array resultante con console.log.
// console.log(numeros);

