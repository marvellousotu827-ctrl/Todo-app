const form = document.getElementById("form");
const addTask = document.getElementById("task");
const tskBtn = document.getElementById("add_btn");
const creationDiv = document.querySelector(".task_section");
let taskArr = [];

// To save tasks
function saveTasks() {
  localStorage.setItem("taskObj", JSON.stringify(taskArr));
}

// Validate for empty inputs and prevent default behaviour
renderTask();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const task = addTask.value.trim();

  // Validate that task isn't empty
  if (task === "") {
    document.getElementById("err").textContent =
      "Tasks is currently empty.....";
  } else {
    const formattedObj = {
      ToDo: task,
      completed: false,
    };
    taskArr.push(formattedObj);
    saveTasks();
    document.getElementById("err").textContent = "";
    addTask.value = "";
    renderTask();
  }
});

// Function to render tasks
function renderTask() {
  taskArr = JSON.parse(localStorage.getItem("taskObj")) ?? [];

  creationDiv.textContent = "";

  for (let i = 0; i < taskArr.length; i++) {
    // Create Elements and append them to the DOM
    const taskRender = document.createElement("div");
    taskRender.classList.add("wrap");

    const checkInput = document.createElement("input");
    checkInput.type = "checkbox";
    checkInput.classList.add("input");
    taskRender.append(checkInput);

    /* checkInput.addEventListener("click", function () {
      taskArr[i].completed = checkInput.checked;
      saveTasks();
      renderTask();

      if (taskArr[i].completed) {
        taskOutput.classList.add("completeTask");
        saveTasks();
      } else {
        taskOutput.classList.remove("completeTask");
      }
      renderTask();
    });
    */

    const taskOutput = document.createElement("p");
    taskOutput.classList.add("taskOutput");
    taskOutput.textContent = taskArr[i].ToDo;
    taskRender.append(taskOutput);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete_btn");
    taskRender.append(deleteBtn);
    creationDiv.append(taskRender);

    // Event to delete tasks
    deleteBtn.addEventListener("click", function () {
      taskArr.splice(i, 1);
      saveTasks();
      renderTask();
    });
  }
}
