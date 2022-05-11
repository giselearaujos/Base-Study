//-------------- If Else -------------------

/*
  Declarações de controle de fluxo são utilizadas para deixar o código mais flexível,
   onde o mesmo trecho de código pode ter fluxos de execuções diferentes dependendo 
   da interação do usuário.
*/

// if (condicao) {
//    declaracao 1, executada quando a condição for verdadeira
// } else {
//    declaracao 2, executada quando a condição for false
// }

const age = 2;
if (age >= 18) {
  console.log(`Your age is ${age} years. You can get a driver's license.`);
} else {
  console.log(`Your age is ${age} years. You can´t get a driver's license.`);
}
console.log("-----------------------");

const note = 2;
if (note >= 7) {
  console.log(`Okay!`);
} else if (note >= 5) {
  console.log(`Recovery!`);
} else {
  console.log(`Disapproved!`);
}
console.log("--------------------");
