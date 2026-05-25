
let taskContainer = document.getElementById("taskContainer");
let taskInput = document.getElementById("taskInput");
let dueDateInput = document.getElementById("dueDate");

let taskArray = [];

function addTask(){
    let taskName = taskInput.value;
    let taskDate = dueDateInput.value;
    if(taskName===""){
        alert("Please fill in the task");
         return;
    }
    else if(taskDate===""){
         alert("Please fill in the due date");
         return;
    }

    let taskObject = {
        id: Date.now(),
        name: taskName,
        date: taskDate,
        completed: false
    };

taskArray.push(taskObject);

displayTask();
taskInput.value="";
dueDateInput.value="";
};


function displayTask(){
    taskContainer.innerHTML = "";
    taskArray.forEach(function(task){
        taskContainer.innerHTML +=`
        <div class="task">
        <h2>${task.name}</h2>
        <p>${task.date}</p>
        </div>`;
    });
}




let emailInput = document.getElementById("email");

function subscribe() {
    if (emailInput.value === "") {
        alert("Please enter your email");

    }
    else {
        alert("Thank you for subcribing to StudyFlow");
        emailInput.value = "";
    }
}
