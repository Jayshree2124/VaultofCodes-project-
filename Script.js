function addTask() {
  let taskInput = document.getElementById("taskInput");
  let taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  let li = document.createElement("li");
  li.textContent = taskText;

  // Complete button
  let completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.onclick = function () {
    li.classList.toggle("completed");
  };

  // Delete button
  let deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.onclick = function () {
    li.remove();
  };

  li.appendChild(completeBtn);
  li.appendChild(deleteBtn);

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
