const form = document.getElementById("form");
const addTask = document.getElementById("task");

// Validate for empty inputs and prevent default behaviour

form.addEventListener("submit", (e) => {
  e.target.preventDefault();
});

function nullInput() {
  addTask.addEventListener("input", function () {
    if (addTask.contains()) {
    } else {
    }
  });
}
