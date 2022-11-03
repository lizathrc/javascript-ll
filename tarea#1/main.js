/*1. Haga un programa que reciba como entrada la edad actual de Elena, y debe
imprimir la edad de Lucía dentro de siete años, siendo que la edad de Lucía
es la tercera parte de la de Elena */

// const elena = Number (prompt('write elena age'));
// const lucia = Number (parseInt((elena/3)+7));
// alert ('lucia would have ' + lucia);


// 2. Cree un programa que calcule la posible edad de una persona en un año
// específico. El usuario debe ingresar el año en que se encuentra y el año con
// el que desea hacer el cálculo, este segundo parámetro no puede ser menor
// al año actual del usuario. Ejemplo: Si el usuario está en el año 2022 no puede
// ingresar un valor menor a dicho año para hacer el cálculo de la edad.

// const currentAge = Number (prompt('write your current age'));
// const currentYear = Number (prompt('write your current year'));
// const anotherYear = Number(prompt('write another year older than the current year'));
// const result = (anotherYear-currentYear) + currentAge;

// if (anotherYear <= currentYear) {
//   alert ('the year has to be older than the current year');
// };
// alert ('you would have ' + result + ' years old');

// 3. Haga un programa que reciba como entrada el año de matrimonio del abuelo
// de Alberto. Encontrar la edad de la abuela de Alberto a hoy, si es 7 años
// menor que el abuelo de Alberto, y en el año del matrimonio, el abuelo tenía
// 25 años.Debe imprimir la edad de la abuela de Alberto.

// const yearMarriage = Number (prompt ('write the year the granpa got married'));
// const currentYear2 = Number (prompt ('write the current year'));
// const granmaYear = 25 - 7;
// const result = (currentYear2 - yearMarriage) + granmaYear;
// alert ('granma is ' + result + ' years old');

/*4. Cree un programa que le permita al usuario convertir grados Fahrenheit a
Celsius o viceversa. El programa debe recibir el tipo de conversión que se
desea realizar, siendo la letra “F” para Fahrenheit y “C” para Celsiu, y el valor
a convertir. El programa no recibirá el valor a convertir hasta que se haya
ingresado correctamente el tipo de conversión que se desea realizar. Debe
imprimir mostrando el resultado de la conversión: N°C/F = N°C/F. Si el tipo de
conversión no es válido debe imprimir: “Tipo de conversión no reconocido”
Fórmula Celsius a Fahrenheit
(n°C × 9/5) + 32
Fórmula Fahrenheit a Celsius
((nc - 32) × 5) / 9*/

// const option = prompt('f. Celsius to Fahrenheit c. Fahrenheit to Celsius');
// const degree = prompt('Write a number degree');
// let number; //saber que hay que dejar una variable vacia me costo

// const fahrenheit = ((degree * 9/5) + 32);
// const celsius = (((degree - 32) * 9)/9);

// if (option === 'f') {
//   number = (fahrenheit);
//   alert (degree + '°C = ' + number + '°F')
// } else if (option === 'c') {
//   number = (celsius);
//   alert (degree + '°F = ' + number + '°C')
// }else {
//   alert ('no a valid choice')
// };

/*5. Haga un programa que reciba el nombre de un producto, el precio de este y
cantidad a comprar, si la persona compra 3 se le aplicará un descuento de
10%, si lleva 5 o más un descuento de 20%. Debe imprimir una tabla con el
nombre del producto, cantidad, subtotal, descuento a aplicar y el precio final a
pagar.*/

// const Product = prompt('write a product')
// const Price = Number (prompt('write a price'));
// const Amount = Number (prompt('write the amount'));
// const discount10 = Price * Amount * 0.1;
// const discount20 = Price * Amount * 0.2; 
// const subtotal = Price * Amount;
// let finalPrice;

//  if (Amount >= 3 && Amount < 5){
//       finalPrice = (Price * Amount - discount10);
//       alert ('product = ' + Product + ' amount = ' + Amount + ' subtotal = ' + subtotal + ' discount applied ' + discount10 + ' final price ' + finalPrice );
//  }
//   else if (Amount >= 5){
//     finalPrice = (Price * Amount - discount20);
//     alert ('product = ' + Product + ' amount = ' + Amount + ' subtotal = ' + subtotal + ' discount applied ' + discount20 + ' final price ' + finalPrice );
//   }
//  else{
//   finalPrice = (Price * Amount);
//   alert ('product = ' + Product + ' amount = ' + Amount + ' subtotal = ' + subtotal + ' discount applied = none ' + ' final price ' + finalPrice );

//  }


// 6. Haga un programa que reciba las notas de tres exámenes realizados por un
// estudiante en un curso, el primer examen tiene un valor de 25% de la nota
// del curso, el segundo examen un valor de 35% y el examen final 40%. Para
// aprobar el estudiante debe tener 70 como nota del curso y no debe tener
// menos de 50 en cada examen. Si el estudiante obtuvo menos de 70 y mayor
// a 59 en el curso debe de ir a ampliación. Si el estudiante obtuvo más de 70
// en el curso, pero uno de los exámenes tuvo nota menor a 50 debe ir a
// ampliación. Si el estudiante obtuvo nota menor a 60 reprueba el curso.

// const score1 = Number (parseInt(prompt('first score')));
// const score2 = Number (parseInt(prompt('second score')));
// const score3 = Number (parseInt(prompt('third score')));
// const finalScore = (score1 * 0.25) + (score2 * 0.35) + (score3 * 0.40)

// if (finalScore < 70 && finalScore > 59) {
//   alert ('ampliacioneningles ' + finalScore);
// } else if (finalScore > 70 && score1 < 50 || score2 < 50 || score3 < 50){
//   alert ('ampliacioneningles again ' + finalScore)
// }else if (finalScore < 60){
//   alert ('fail' + finalScore)
// }else if (finalScore >= 70){
//   alert ('you r good ' + finalScore)
// }else {
//   alert('study more')
// };

/* NOTAS: lo que mas me cuesta es saber cuales son las operaciones
que se utilizan para sacar los resultados, saber si hay que suma, multiplicar
o restar. Tambien el pensar en si debo o no dejar variables vacias para que 
guarden un resultado. Pero ya voy entendiendo mucho mejor
y logre realizar esta practica*/