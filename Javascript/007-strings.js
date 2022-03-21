// Methods String

// charAt - retorna uma string
let string01 = "Batman";
console.log(string01.charAt(0)); // B

// charCodeAt
let string02 = "Superman";
console.log(string02.charCodeAt(0)); // 83

// concat
let string03 = "Spider";
let string04 = "Man";
console.log(string03.concat(" ", string04));

// indexOf
let text = "Hello world, welcome to the universe.";
console.log(text.indexOf("e", 6)); // 14

// length - mostra o comprimento de uma string
let string05 = "Mulher Maravilha";
console.log(string05.length); // 16

// match - retorna uma correspondência entre uma string com uma expressão regular.
console.log(string05.match(/[a-z]/g));

// replace - retorna uma nova string, é possivel tb usar regex
let string06 = "Front-end is the best!";
console.log(string06.replace("best", "loko")); // Front-end is the loko

// search

/* slice -  extrai uma parte de uma string e a retorna como uma nova string, 
sem modificar a string original. 
*/
let myPlay = "pubg";
console.log(myPlay.slice(0, 3));

// split - método divide uma string
let string07 = "World,is,big!";
console.log(string07.split(",")); // [ 'World', 'is', 'big!' ]

// substring

// toUpperCase - converte string em maiusculo
let string08 = "martin luther king";
console.log(string08.toLocaleUpperCase()); // MARTIN LUTHER KING

// toLowerCase - converte string em minusculo
let string09 = "PLaTÃO";
console.log(string09.toLowerCase()); // platão

// trim - remove espaçoes em brancos de ambas as extremidades
let string10 = "  Capitão América   ";
console.log(string10.trim()); // Capitão América

// valueOf
