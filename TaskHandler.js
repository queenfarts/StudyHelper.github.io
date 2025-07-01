function CreateTask() {
    const NewTaskList = document.createElement("li");
    const NewTask = document.createElement("div");
    const DeleteButton = document.createElement("button")

    const TaskList = document.getElementById("tasklist");
    const InputBox = document.getElementById("tasknameinput");

    const maxChars = 35;

    if (InputBox.value.trim().length > maxChars) {
        alert('Maximum 35 characters!')
        InputBox.value = "";
        return
    }

    if (InputBox.value.trim() === "") {  
        alert('Please put text into the input box!');      
        return
    }

    const TaskName = InputBox.value.trim();

    InputBox.value = "";

    NewTask.innerHTML = TaskName;
    NewTask.style.color = 'white';
    NewTask.style.fontFamily = "Verdana, Geneva, Tahoma, sans-serif";

    DeleteButton.innerText = 'X'
    DeleteButton.addEventListener('click', function() {
    DeleteBox(DeleteButton);
});

    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();

    let ClockHours

    if (hours > 12) {
        hours = hours - 12
        ClockHours = "PM"
    } else {
        ClockHours = "AM"
    }

    if (minutes < 10) {
        minutes = "0" + minutes
    }

    const TimeAdded = document.createElement('p');
    TimeAdded.innerText = "Time created: " + hours + ":" + minutes + ClockHours
    
    NewTaskList.appendChild(NewTask);
    NewTask.appendChild(DeleteButton);
    NewTask.appendChild(TimeAdded);
    TaskList.appendChild(NewTaskList);
}

function DeleteBox(element) {
    element.parentElement.parentElement.remove();
}

function ClearAllTasks() {
    document.getElementById("tasklist").innerHTML = ""
}