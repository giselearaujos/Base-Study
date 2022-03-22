//------------- Numbers ----------------

// Para converter uma string em number
let number1 = "25";
let number2 = 30;

console.log(number1 + number2); // Resultado é uma concatenação

number1 = Number(number1);
console.log(typeof number1); // Transforma a string em number

// Para descobrir como é a representação de um numero em binário
console.log(number2.toString(2)); // 11110

// Para realizar contas no JS existe um padrão IEEE 745-2008
// Para contas abaixo de 0, alguma coisa ocorre um imprecisão
