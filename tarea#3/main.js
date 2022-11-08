//--------------------------------------------------------------------------

/*1. Cree un programa que reciba como parámetro un array de números, y
verifique la lista de manera que retorne el número mayor. (Valor: 5pts)*/

// const arrayB = Math.max(1, 3, 2,40,100,80)
// console.log(arrayB);

//--------------------------------------------------------------------------

/*3. Dada la siguiente matriz [ [1,0,0], [0,1,1], [0,1,0] ], haga un programa que
cuente e imprima la cantidad de ceros totales en dicha matriz. Debe utilizar
ciclos for (Valor: 10pts)*/

// const ceros = [];
// const matriz = [ [1,0,0], [0,1,1], [0,1,0] ];
// for (let i = 0; i < matriz.length; i++) {
//      for (let j = 0; j < matriz.length; j++) {
//        if (matriz[i][j] === 0) { //llegar a esto fue difiil
//          		const count = ceros.push(matriz[i][j]);
//        }
//      }
// }
// console.log(ceros.length)

//--------------------------------------------------------------------------

/*5. Haga un programa que reciba un parámetro numérico x, el cual debe ser
mayor o igual a 5, y que imprima un patrón, que simule un triángulo de
asteriscos, como el siguiente. Debe utilizar ciclos for para la solución del
problema. (Valor: 15pts)
*
* *
* * *
* * * *
* * * * *
* * * * * *
* * * * * * *
* * * * * * * *
** En el ejemplo de arriba el programa recibió un parámetro de 8*/

// for (let i = 1; i <= 5; i++){
//   let as = '';

// for (let j = 1; j <= i; j++){
//     as += '* '
// }
// console.log (as);
// }

//estos me costaron por la parte de la resta

//--------------------------------------------------------------------------

/*Práctica 2= Inicialice un array con los valores 0 y 1, y a continuación 
añada los valores de la suma de los dos últimos valores del array hasta que 
el array tenga 10 elementos. Debe utilizar un for*/

// let arrayA = [0,1];
// for (let i = arrayA.length; i < 10 ; i++) {
//   arrayA[i] = arrayA[i -1] + arrayA[i - 2];
// }
// console.log(arrayA);

//--------------------------------------------------------------------------
/*2. Cree un programa que reciba como parámetro una palabra y verifique si
dicha palabra es palíndromo, es decir, la palabra se lee igual de izquierda a
derecha o de derecha a izquierda, o no. Para la resolución de dicho problema
debe utilizar ciclo for . (Valor: 5pts)*/


// let str = "oro";
// let arrayE = "";

// str = str.toLocaleLowerCase().replace(/\ s/g,"");

// for (let i = str.length -1; i >= 0; i--) {
//     arrayE += str[i];
// }


// console.log("it's an Palindrome?", str == arrayE);
//--------------------------------------------------------------------------

/*4. Cree un programa que reciba un array de números, verifique cuáles números
están repetidos y retorne un array con dichos números (los que estan
duplicados), si no hay números repetidos en el array debe retornar el
siguiente mensaje: “No se encontraron números repetidos en la lista de
números recibida”. Debe usar un ciclo for. (Valor: 10pts)*/

const numbers  = [1, 2, 1, 3, 4, 2, 5];
let bin = [];
 
const arrayF = [...numbers].sort();
 
for (let i = 0; i < arrayF.length; i++) {
  if (arrayF[i + 1] === arrayF[i]) {
    bin.push(arrayF[i]);
  }
}
 
console.log(bin);