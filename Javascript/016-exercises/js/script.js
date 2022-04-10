function myScope() {
  const form = document.querySelector("#form");
  const result = document.querySelector("#result");

  const people = [];

  // Exemplo 02
  function sendForm(event) {
    event.preventDefault();

    const name = form.querySelector("#name");
    const lastName = form.querySelector("#lastName");
    const weight = form.querySelector("#weight");
    const height = form.querySelector("#height");

    people.push({
      name: name.value,
      lastName: lastName.value,
      weight: weight.value,
      height: height.value,
    });
    console.log(people);

    result.innerHTML += `
      <table class="table">
        <thead>
          <tr class="head-table">
            <th>Name</th>
            <th>Last Name</th>
            <th>Weight</th>
            <th>Height</th>
          </tr>        
        </thead>
        <tbody>
          <tr class="body-table">
            <td>${name.value}</td>
            <td>${lastName.value}</td>
            <td>${weight.value}</td>
            <td>${height.value}</td>
          </tr>
        </tbody>
      </table>    
    `;
  }

  form.addEventListener("submit", sendForm);
}
myScope();
