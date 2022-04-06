// -------------- Objects ----------------

// Em JavaScript, um objeto é uma entidade independente, com propriedades e tipos.

// Exemplo de um objeto
const user = {
  name: "Mario",
  email: "mario@gmail.com",
};
console.log(user);
console.log("--------------------------");

// Dentro dos parenteses de uma função ficam os PARÂMETROS
function registrationGenerator(fullName, age) {
  return {
    fullName: fullName,
    age: age,
  };
}
// Dentro dos parenteses da chamada da função ficam os ARGUMENTOS
console.log(registrationGenerator("Bianca Bondosa", 29));
console.log(registrationGenerator("Josefa Francisca", 18));
console.log(registrationGenerator("Adam Pereira", 78));
console.log("-------------------------");

// Podemos podemos acessar uma propriedade de um objeto atráves so ponto
const registerOne = registrationGenerator("Carlos Gomes", 44);
console.log(registerOne.fullName);
console.log("-------------------------");

// Podemos ter funções dentro de objetos que se tornam métodos.
const myCar = {
  color: "black",
  state: 0,
  walk() {
    console.log(`My velocity is ${this.state}km/h`);
  },
  increment() {
    ++this.state;
  },
};
myCar.walk();
myCar.increment();
myCar.walk();
myCar.increment();
myCar.walk();
myCar.increment();
