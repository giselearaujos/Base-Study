// Methods Math

// abs - mostra o valor absoluto do número
let num01 = 98.0987654;
console.log(Math.abs(num01)); // 98.0987654

// floor - valor inteiro do número
let num02 = 98.0987654;
console.log(Math.floor(num02)); // 98

// ceil - valor arrendondado do número para cima
console.log(Math.ceil(num02)); // 99

// log - logarítmo natural do número (base e)
let num03 = 90;
console.log(Math.log(num03)); // 4.499809670330265

// min - retorna o menor número
let num04 = [4, 5, 6, 3, 2, 6, 9];
console.log(Math.min(...num04)); // 2

// max - retorna o maior número
let num05 = [4, 5, 6, 3, 2, 6, 9];
console.log(Math.max(...num05)); // 9

// pow - potência do número
let num06 = 2; // base
let num07 = 2; // exponent
console.log(Math.pow(num06, num07)); // 4

// random - gera um número randômico
let num08 = function (max, min) {
  return Math.floor(Math.random() * (max - min));
};
console.log(num08(100, 1)); // 64

const colors = ["White", "Black", "Orange", "Yellow", "Green", "Red", "Blue"];
const reqColors = () =>
  colors[(0, Math.floor(Math.random() * colors.length - 1))];
console.log(reqColors());

// round - arredonda o número para o  inteiro mais próximo

// sin - seno do número

// sqrt - raiz quadrada do número

// tan - tangente do número
