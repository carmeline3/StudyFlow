let taskInput = document.getElementById("taskInput");
let dueDateInput = document.getElementById("dueDate");
let taskContainer = document.getElementById("taskContainer");

let emailInput = document.getElementById("email");

let taskArray = [];


/* ADD TASK */

function addTask(){

let taskName = taskInput.value;
let taskDate = dueDateInput.value;

if(taskName === "" || taskDate === ""){
alert("Please fill in all fields");
return;
}

let taskObject = {
id:Date.now(),
name:taskName,
date:taskDate,
completed:false
};

taskArray.push(taskObject);

displayTasks();

taskInput.value = "";
dueDateInput.value = "";

}


/* COMPLETE TASK */

function completeTask(id){

taskArray = taskArray.map(function(task){

if(task.id === id){
task.completed = !task.completed;
}

return task;

});

displayTasks();

}


/* DELETE TASK */

function deleteTask(id){

taskArray = taskArray.filter(function(task){

return task.id !== id;

});

displayTasks();

}


/* DISPLAY TASKS */

function displayTasks(){

taskContainer.innerHTML = "";

taskArray.forEach(function(task){

let taskDiv = document.createElement("div");

taskDiv.classList.add("task");

if(task.completed === true){

taskDiv.style.opacity = "0.6";
taskDiv.style.textDecoration = "line-through";

}

taskDiv.innerHTML = `

<h3>${task.name}</h3>

<p>${task.date}</p>

<div class="task-buttons">

<button onclick="completeTask(${task.id})">

${task.completed ? "Undo" : "Complete"}

</button>

<button onclick="deleteTask(${task.id})">
Delete
</button>

</div>

`;

taskContainer.appendChild(taskDiv);

});

}


