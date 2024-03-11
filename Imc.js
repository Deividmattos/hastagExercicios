document.addEventListener("DOMContentLoaded", function () {
  const formulario = document.getElementById("calc-form");
  const nomeInput = document.getElementById("nome");
  const nomeError = document.getElementById("nome-error");

  formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!nomeInput.value) {
      nomeError.style.display = "block";
      return;
    } else {
      nomeError.style.display = "nome";
    }

    const nome = nomeInput.value;
    const altura = parseFloat(document.getElementById("altura").value);
    const peso = parseFloat(document.getElementById("peso").value);

    const imc = peso / (altura * altura);
    const resultadoElement = document.getElementById("resultado");

    let categoria;
    if (imc < 18.5) {
      categoria = "abaixo do Peso";
      resultadoElement.style.backgroundColor = "#ffff00";
    } else if (imc < 25) {
      categoria = "Peso normal";
      resultadoElement.style.backgroundColor = "#00FF00";
    } else if (imc < 30) {
      categoria = "Sobrepeso";
      resultadoElement.style.backgroundColor = "#ffa500";
    } else {
      categoria = "Obesidade";
      resultadoElement.style.backgroundColor = "#ff0000";
    }

    resultadoElement.innerHTML = `<p> ${nome}, seu imc eh ${imc.toFixed(
      2
    )}</p><p>Voce esta na categoria: ${categoria}</p>`;

    // atualizar a categoria - input
    document.getElementById("categoria").value = categoria;
    let dados = new FormData(formulario);

    for (let [chave, valor] of dados.entries());
  });
});
