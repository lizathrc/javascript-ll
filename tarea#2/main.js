/*1. Loki, Jorgito y Jorcito decidieron vender limonada por su casa. Decidieron
cobrar por cada limonada 300 colones debido a que fabricar cada limonada
les cuesta 110.50 colones. Como no todos trabajaron por igual, decidieron
que las ganancias se iban a repartir de la siguiente forma 20 % para Loki, 35
% para Jorgito y 45 % para Jorcito. Si venden 100 o más limonadas las
ganancias serán 25 % para Loki, 35 % para Jorgito y 40 % para Jorcito.
Haga un programa que reciba la cantidad total de limonadas que vendieron, e
imprima cuánto ganó cada uno de ellos.*/
const amountLemon = Number (prompt('how many lemon juice do you sell?'));
const earn = Number (amountLemon * 300 - 110.50);
let loki;
let jorgito;
let jorcito;

if (amountLemon < 100) {
  loki = Number(earn / 0.20);
  jorgito = Number (earn / 0.35);
  jorcito = Number (earn / 0.45);
  alert ('loki earn: ' + loki + ' jorgito earn: ' + jorgito + ' jorcito earn: ' + jorcito );
};


/*2. Haga un programa que reciba tres números enteros diferentes e indique cuál
de los números es el mayor, cuál es el menor y cuál es el del medio
Ejercicios Extra: para este último usar un while*/



/*3. En una isla vive una gran cantidad de hormigas que se reproducen a una
tasa del 33% mensual; en la isla existe además un oso hormiguero que se
come 4800 hormigas al final de cada mes. Cuando la población de hormigas
de la isla sobrepasa el máximo de 24000, comienza a haber problemas de
alimentación lo que hace que se reduzca la tasa de crecimiento al 21%
mensual. El muestreo de la población se hace mensualmente, al final de cada
mes.
Haga un programa que reciba como entrada:
a) el número de hormigas que hay en un momento dado en la isla
b) la cantidad de meses a considerar, y calcule la población de hormigas
después de esa cantidad de meses.*/