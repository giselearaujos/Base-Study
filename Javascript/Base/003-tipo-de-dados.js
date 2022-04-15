/*
Internamente o Javascript atribui um tipo de dado
para suas variáveis e constantes
junto de seus respectivos valores.
*/

// O Javascript possui seis tipos de dados Primitivos:

//Boolean - armazena valores lógicos: true e false.
const verificationIsValid = true;

//null - palavra-chave que indica valor nulo.(não aponta para nenhum local na memória) aqui esse valor é colocado de propósito.
let likeToEat = null;

//undefined - indefinido, identifica a falta de valor para uma determinada variável. (não aponta para nenhum local na memória).
let firstRegistration;

//Number. - armazena valores numéricos, inteiros e de ponto flutuantes: 42 ou 3.14159.
const mySalary = 1000;

//String - armazena uma sequência de caracteres: "bob".
const myName = "bob";

//Symbol (novo em ECMAScript 6). Um tipo de dado cuja as instâncias são únicas e imutáveis (pouco utilizado ainda).

/*Object - (Objeto) - é um tipo mais dinâmico,
 que ao desenvolvedor criar atributos e métodos,
 além de já possuir um conjunto de métodos pré-definidos.
 Geralmente, cria-se objetos para agrupar valores em uma única referência.
*/

const myAddress = { city: "Campinas", state: "SP" };
