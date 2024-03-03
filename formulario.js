document.addEventListener("DOMContentLoaded", function () {
  let formulario = document.getElementById("meuFormulario");

  formulario.addEventListener("submit", function (event) {
    alert("Enviar com sucesso o Formulario");
  });
});
let campoTexto = document.getElementById("campoTexto");
campoTexto.addEventListener("change", function () {
  console.log("Campo de texto foi alterado:" + campoTexto.value);
});
