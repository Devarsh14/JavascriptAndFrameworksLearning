document.querySelector("#push").addEventListener("click", function () {
  console.log("Button clicked");
  if (document.querySelector("#newtask input").value.length === 0) {
    alert("Please enter a task");
  } else {
    document.querySelector("#tasks").innerHTML += ` <div class="task">
        <span id="taskname">
        ${document.querySelector("#newtask input").value}
        </span>
        <button class="delete">
       delete
        </button>
        </div>`;

    document.querySelector("#task").value = "";
  }
});

// delete tasks
document.addEventListener("click", function (e) {
  if (e.target.className == "delete") {
    e.target.parentNode.remove();
  }
});

// complete tasks
document.addEventListener("click", function (e) {
  if (e.target.className == "task") {
    e.target.classList.toggle("completed");
  }
});
