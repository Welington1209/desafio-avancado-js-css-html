const formulario = document.getElementById("form");

const inputs = document.querySelectorAll(".input");

const alerta = document.querySelectorAll(".paragrafo");

formulario.addEventListener("submit", (event) => {
  event.preventDefault();

  inputs.forEach((input, indice) => {
    if (input.value === "") {
      alerta[indice].classList.add("validacao-de-campo");
      inputs[indice].classList.add("input-recusado");

      return;
    } else {
      alerta[indice].classList.remove("validacao-de-campo");
      inputs[indice].classList.add("input-aprovado");
      return;
    }
    formulario.submit();
  });
});
