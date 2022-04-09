function myScope() {
  const form = document.querySelector("#form");
  const result = document.querySelector("#result");

  const people = [];

  // Exemplo 02
  function sendForm(event) {
    event.preventDefault();

    const name = form.querySelector("#name");
    const lastName = form.querySelector("#lastName").value;
    const weight = form.querySelector("#weight").value;
    const height = form.querySelector("#height").value;

    // people.push({
    //   name: name,
    //   lastName: lastName,
    //   weight: weight,
    //   height: height,
    // });
    console.log(name.value);

    // result.innerHTML += `<h3>${name.value}</h3>`;
  }

  form.addEventListener("submit", sendForm);
}
myScope();
