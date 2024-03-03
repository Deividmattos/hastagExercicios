let botao = document.getElementById("meuBotao");
botao.addEventListener("click", cliccouBotao);

setTimeout(function () {
  botao.removeEventListener("click", cliccouBotao);
  console.log("Manipulador do evento foi removido apos 5 segundos");
}, 5000);

function cliccouBotao() {
  alert("clicou no botao");
}
