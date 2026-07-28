const form = document.getElementById("form");
const addTask = document.getElementById("task");
const tskBtn = document.getElementById("add_btn");
const creationDiv = document.querySelector(".task_section");
let taskArr = [];

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
    localStorage.setItem("taskObj", JSON.stringify(taskArr));
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

    const taskOutput = document.createElement("p");
    taskOutput.classList.add("taskOutput");
    taskOutput.textContent = taskArr[i].ToDo;
    taskRender.append(taskOutput);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete_btn");
    taskRender.append(deleteBtn);
    creationDiv.append(taskRender);
  }
}
