const meuElemento = document.getElementById("meuElemento");

function tornarCirculo() {
  meuElemento.classList.add("circle");
  meuElemento.classList.remove("square");
}
function quadrado() {
  meuElemento.classList.add("square");
  meuElemento.classList.remove("circle");
}

function alterar() {
  meuElemento.classList.toggle("circle");
  meuElemento.classList.toggle("square");
}
function verificar() {
  if (meuElemento.classList.contains("circle")) {
    console.log("O elemento possui a classe circle");
  } else {
    console.log("O elemento possui a classe square");
  }
}
