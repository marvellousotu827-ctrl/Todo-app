const form = document.getElementById("form");
const addTask = document.getElementById("task");
const tskBtn = document.querySelector("add_btn");
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
    taskArr.push(task);
    localStorage.setItem("task", JSON.stringify(taskArr));
    console.log(taskArr);
    document.getElementById("err").textContent = "";
  }
});

// Function to render tasks
const renderTask = () => {
  //
};
