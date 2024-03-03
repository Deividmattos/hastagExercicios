const input = document.getElementById("taskInput");
const ul = document.getElementById("taskList");

function addTask() {
  if (input.value !== "") {
    const li = document.createElement("li");
    li.textContent = input.value;

    const removerBtn = document.createElement("button");
    removerBtn.textContent = "Remover";
    removerBtn.onclick = function () {
      ul.removeChild(li);
    };
    li.appendChild(removerBtn);
    ul.appendChild(li);

    input.value = "";
  } else {
    alert("Por Favor, insira uma tarefa.");
  }
}
function removeList() {}
