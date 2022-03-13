const name = "Joana";
const age = 31;
const kg = 54;
const heigthInMeters = 1.66;

const calculation = (kg / (heigthInMeters * heigthInMeters)).toFixed(2);

console.log(`
  ${name} tem ${age} anos,
  pesa ${kg} kg, 
  tem ${heigthInMeters} de altura
  e seu IMC é de ${calculation}
`);
