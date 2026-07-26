const form = document.getElementById("form");
const addTask = document.getElementById("task");
const tskBtn = document.querySelector(".add_btn");
const creationDiv = document.querySelector(".task_section");
const taskArr = [];

// Validate for empty inputs and prevent default behaviour
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
const renderTask = () => {
  // Create Elements and append them to the DOM
  const taskObj = JSON.parse(localStorage.getItem("taskObj"));

  for (let i = 0; i < taskObj.length; i++) {
    creationDiv.textContent = "";

    const taskRender = document.createElement("div");
    taskRender.classList.add("wrap");

    const input = document.createElement("input");
    input.type = "checkbox";
    input.classList.add("input");
    taskRender.append(input);

    const taskOutput = document.createElement("p");
    taskOutput.classList.add("taskOutput");
    taskOutput.textContent = taskObj[i].ToDo;
    taskRender.append(taskOutput);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete_btn");
    taskRender.append(deleteBtn);
    creationDiv.append(taskRender);
  }
};
