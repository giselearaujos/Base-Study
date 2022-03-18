// Exercício para reatribuir variáveis

let varA = "A"; // varA terá o valor de B
let varB = "B"; // varB terá o valor de C
let varC = "C"; // varC terá o valor de A
console.log(varA, varB, varC);
console.log("--------------------------------");

// Resolução

const varTemp = varA; // Cria uma constante para guardar o valor de varA
varA = varB;
varB = varC;
varC = varTemp;
console.log(varA, varB, varC);
console.log("---------------------------------");

// Soução ultra rápida:
[varA, varB, varC] = [varB, varC, varA];
console.log(varA, varB, varC);
