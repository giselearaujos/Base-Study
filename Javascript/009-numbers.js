//------------- Numbers ----------------

// Para converter uma string em number
let number1 = "25";
let number2 = 30;

console.log(number1 + number2); // Resultado é uma concatenação

number1 = Number(number1);
console.log(typeof number1); // Transforma a string em number

// Para descobrir como é a representação de um numero em binário
console.log(number2.toString(2)); // 11110

/*
 ------------------ Fatores da imprecisão ----------------------

Imprecisões numéricas ocorrem por uma variedade de fatores,
que decorrem da forma com que tais números são representados pelo computador.

Números com ponto flutuante, nos sistemas modernos são geralmente representados
de acordo com a norma IEEE 754 de forma nativa.

O javascript especificamente, usa o double para representar todos os números.

No caso do double da norma IEEE 754, imprecisões são causadas por dois fatores:

    Quantidade de espaço para representar o número é finita. 

    Base numérica do expoente é 2, que não pode ser alinhada 
    com a base do número original que está na base 10.

*/

let num1 = 0.7;
let num2 = 0.1;

let sum = num1 + num2;
console.log(sum); // 0.7999999999999999
console.log(Number(sum.toFixed(2))); // 0.8
