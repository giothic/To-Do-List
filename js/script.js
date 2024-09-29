let taskIdCounter = 0;


function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();
    
    if (taskText !== "") {
        const newTask = document.createElement("li");
        newTask.textContent = taskText;
        newTask.draggable = true;
        newTask.id = `task-${taskIdCounter++}`;
        newTask.ondragstart = drag;
        
        document.getElementById("geral").appendChild(newTask);
        taskInput.value = ""; 
        closeModal(); 
    }
}


function allowDrop(event) {
    event.preventDefault();
}

function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
}

function drop(event) {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    const taskElement = document.getElementById(data);
    const targetList = event.target.closest("ul");
    
    if (targetList) {
        targetList.appendChild(taskElement);

        if (targetList.id === "progresso") {
            taskElement.style.backgroundColor = "orange";
        } else if (targetList.id === "revisao") {
            taskElement.style.backgroundColor = "purple";
        } else if (targetList.id === "concluido") {
            taskElement.style.backgroundColor = "green";
        } else {
            taskElement.style.backgroundColor = ""; 
        }
    }
}


function openModal() {
    document.getElementById("modal").style.display = "block";
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
}

let isDarkMode = true;

function toggleTheme() {
    const themeStyle = document.getElementById("theme-style");
    const themeToggleButton = document.getElementById("theme-toggle");
    
    if (isDarkMode) {
        themeStyle.href = "/styles/light-theme.css"; 
        themeToggleButton.textContent = "Modo Escuro";
    } else {
        themeStyle.href = "/styles/styles.css"; 
        themeToggleButton.textContent = "Modo Claro";
    }
    
    isDarkMode = !isDarkMode;
}
