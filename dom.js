const lista = document.getElementById("list");

function adiciona() {
  const novaLi = document.createElement("li");
  novaLi.textContent = "Novo Item";

  lista.appendChild(novaLi);
}
function remove() {
  const ultimo = lista.lastElementChild;

  lista.removeChild(ultimo);
}
