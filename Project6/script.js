function deleteTask() {
  document.getElementById("delete").parentNode.remove("");
}

function clearInput() {
  document.getElementById("input_task").value = "";
}

function addTask() {
  const text_input = document.getElementById("input_task").value;
  const newTask = document.getElementById("new_tasks");

  if (text_input.length == 0) {
    alert("Digite alguma tarefa");
    return;
  }

  // Create new task element
  const newTaskDiv = document.createElement("div");
  newTaskDiv.id = "tasks";
  newTaskDiv.className = "tasks";

  const newTaskSpan = document.createElement("span");
  newTaskSpan.textContent = text_input;

  const deleteButton = document.createElement("button");
  deleteButton.id = "delete";
  deleteButton.className = "delete";
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", deleteTask);

  newTaskDiv.appendChild(newTaskSpan);
  newTaskDiv.appendChild(deleteButton);

  newTask.appendChild(newTaskDiv);
  clearInput();
  return;
}

document.getElementById("button_add").addEventListener("click", addTask);
