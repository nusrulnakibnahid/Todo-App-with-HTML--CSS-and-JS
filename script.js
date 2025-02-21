document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTaskBtn");
    const taskList = document.getElementById("taskList");
    const completedList = document.getElementById("completedList");
    let editMode = false;
    let currentTask = null;

    addTaskBtn.addEventListener("click", () => {
        const taskText = taskInput.value.trim();
        if (!taskText) return;
        if (editMode) {
            currentTask.querySelector(".task-text").textContent = taskText;
            addTaskBtn.textContent = "Add Task";
            editMode = false;
            currentTask = null;
        } else {
            const li = document.createElement("li");
            li.innerHTML = `<span class='task-text'>${taskText}</span>
                            <button class='edit'>Edit</button>
                            <button class='complete'>Complete</button>`;
            taskList.appendChild(li);
        }
        taskInput.value = "";
    });

    taskList.addEventListener("click", (e) => {
        if (e.target.classList.contains("edit")) {
            taskInput.value = e.target.parentElement.querySelector(".task-text").textContent;
            addTaskBtn.textContent = "Update Task";
            editMode = true;
            currentTask = e.target.parentElement;
        } else if (e.target.classList.contains("complete")) {
            const li = e.target.parentElement;
            li.classList.add("completed");
            li.innerHTML = `<span>${li.querySelector(".task-text").textContent}</span>
                            <button class='delete'>Delete</button>`;
            completedList.appendChild(li);
        }
    });

    completedList.addEventListener("click", (e) => {
        if (e.target.classList.contains("delete")) {
            e.target.parentElement.remove();
        }
    });
});
