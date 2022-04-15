/*
  Valores Primitivos: valores imutáveis - ATENÇÂO não é a variável e sim o VALOR imutável
  - String
  - Number
  - Boolean
  - Undefined
  - null
  - bigInt
  - Symbol
  Quando atribuímos uma variável para outra variável com valores primitivos
  ocorre uma cópia.

  Exmplo 01

  Valores Referência: valores mutáveis 
  - Array
  - Object
  - Function

  Quando atribuímos uma variável para outra variável com valores referentes
  ocorre uma referencia na mémoria para o mesmo lugar

  Exemplo 02
*/

// Exemplo 01
let a = 5;
let b = a; // Cópia
console.log(a, b); // 5 5

// Exemplo 02
let names = ["Jonh", "Paul"];
let nickname = names;
console.log(names, nickname);
names.push("Marie");
console.log(names, nickname);
