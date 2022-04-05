// -------------- Function ------------------
// Funções são blocos de instruções que realizam tarefas específicas

function nomeDaFuncao(parametros) {
  // instruções ...
  return "valor";
}
console.log(nomeDaFuncao());
console.log("----------------------------");

function welcome(yourName) {
  return `Welcome ${yourName}!`;
}
console.log(welcome("Jaqueline"));
const initial = welcome("José");
console.log(initial);
console.log("----------------------------");

function sum(num1, num2) {
  const result = num1 + num2;
  return result;
}
console.log(sum(9, 7));
console.log(sum(3, 8));
console.log("----------------------------");

// Função anônima
const square_root = function (number) {
  return number ** 0.5;
};
console.log(square_root(9));
console.log(square_root(16));
console.log(square_root(25));
console.log("----------------------------");

// Arrow Function
const sub = (number1, number2) => {
  const result = number1 - number2;
  return result;
};
console.log(sub(9, 3));
console.log(sub(16, 6));
console.log(sub(25, 4));
console.log("----------------------------");
