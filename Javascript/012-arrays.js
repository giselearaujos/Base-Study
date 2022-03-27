/* -------- Arrays ----------- */

/*
Array é uma estrutura de dados que armazena uma coleção de elementos
(valores ou variáveis), cada elemento do array é identificado por um index.
Em Javascript, os Arrays são objetos que vêm com uma série de métodos 
embutidos para realizar operações de travessia e mutação.
*/

// Exemplo de array
const guitar = ["Fender", "Gibson", "PRS", "Tagima"];
console.log(guitar); // ["Fender", "Gibson", "PRS", "Tagima"]
console.log("---------------------------------------");

// Acessar um elemento de um array
console.log(guitar[2]); // PRS
console.log("------------------------------------");

// Editar um elemnto do array
console.log((guitar[2] = "Giannini"));
console.log(guitar);
console.log("--------------------------------");

// Descobrir um tamanho do array
console.log(guitar.length); // 4
console.log("-----------------------------------");

// Add um novo elemento no final do array
console.log(guitar.push("Jaguar"));
console.log(guitar);
console.log("----------------------------------");

// Add um novo elemento no inicio do array
console.log(guitar.unshift("Jackson"));
console.log(guitar);
console.log("----------------------------------");

// Retira um elemento do final do array
console.log(guitar.pop());
console.log("----------------------------------");

// Retira um elemento do começo do array
console.log(guitar.shift());
console.log("----------------------------------");

// Deletando um elementos
console.log(delete guitar[0]);
console.log(guitar);
console.log("----------------------------------");
