const form = document.getElementById("form");
const addTask = document.getElementById("task");
const tskBtn = document.querySelector(".add_btn");
const taskArr = [];

// Function to render tasks
const renderTask = () => {
  //
};

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
