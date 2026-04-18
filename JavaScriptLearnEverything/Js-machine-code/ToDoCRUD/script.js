let toDoTaskContainer = [];

// console.log("Initial ToDo Task Container:", toDoTaskContainer);

const addTaskButton = document.getElementById("add-new-task-btn");
const taskListContainer = document.querySelector(".task-list");

function addTask() {
  let taskInput = document.getElementById("add-new-task-input");
  let task = taskInput.value;
  if (task) {
    toDoTaskContainer.push(task);
    taskInput.value = "";
  }
  renderTasks();
}

addTaskButton.addEventListener("click", addTask);

function renderTasks() {
  taskListContainer.innerHTML = "";
  const ul = document.createElement("ul");
  toDoTaskContainer.forEach((task, index) => {
    let taskItem = document.createElement("li");
    taskItem.innerHTML = `
            <span>${task}</span>
            <div>
            <button onclick="editTask(${index})">Edit</button>
            <button onclick="deleteTask(${index})">Delete</button> 
            </div>
        `;
    ul.appendChild(taskItem);
  });
  taskListContainer.appendChild(ul);
}

function editTask(index) {
  let newTask = prompt("Edit task:", toDoTaskContainer[index]);
  if (newTask !== null && newTask.trim()) {
    toDoTaskContainer[index] = newTask.trim();
    renderTasks();
  }
}

function deleteTask(index) {
  toDoTaskContainer.splice(index, 1);
  renderTasks();
}

renderTasks();
