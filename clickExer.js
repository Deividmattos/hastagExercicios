/*const elemento = document.getElementById("changeColor");
const btn = document.getElementById("btn");
let count = 0;

function handleMouseOver() {
  elemento.style.backgroundColor = "#ffcc00";
  alert("O Mouse Passou Por cima do Mouse");
}
function handleMouseOut() {
  elemento.style.backgroundColor = "#ccc";
  alert("O Mouse Passou Por cima do Mouse");
}
elemento.addEventListener("mouseover", handleMouseOver);
elemento.addEventListener("mouseout", handleMouseOut);

function handleClick(event) {
  count++;
  console.log(count);
  if (count >= 10) {
    console.log("removendo o evento apos cliques");
    btn.removeEventListener("click", handleClick(event));
  }
}
btn.addEventListener("click", handleClick);

const form = document.getElementById("myForm");
const input = form.querySelector("input");

function handleSubmit(event) {
  event.preventDefault();
  console.log("formulario nao foi enviado a prevencao do Comportamento padrao");
}
form.addEventListener("submit", handleSubmit);

input.addEventListener("Keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    console.log("Botao enter nao vai enviar o formulario");
  }
});
*/
let count = 0;
function preventScroll(event) {
  count++;
  console.log(count);
  if (event.key === "ArrowDown") {
    event.preventDefault();
    console.log("Rolagem para baixo foi desativada");
    if (count >= 10) {
      console.log("Removendo event listener apos 10 pressionando");
      document.removeEventListener("keydown", preventScroll);
    }
  }
}
document.addEventListener("keydown", preventScroll);
