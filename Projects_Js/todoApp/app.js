document.addEventListener("DOMContentLoaded", () => {
    const input_container = document.querySelector(".input-container");
    const btn = document.querySelector(".btn");
    const todo_ul = document.querySelector(".todo-ul");

    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => renderTasks(task));

    btn.addEventListener("click", () => {
        const tasksText = input_container.value.trim();
        if (tasksText === "") return;

        const newTask = {
            id: Date.now(),
            text: tasksText,
            completed: false
        };
        tasks.push(newTask);
        saveTasks();
        renderTasks(newTask);
        input_container.value = ""; // clear the input field
        console.log(tasks);
    });

    function renderTasks(task) {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);
        li.innerHTML = `
        <span class="task">${task.text}</span>
        <button class="delete-btn">Delete</button>`;

        li.addEventListener('click', (e) => {
            if (e.target.tagName === 'BUTTON') return;
            task.completed = !task.completed;
            li.classList.toggle("completed");
            saveTasks();
        });

        
        const deleteBtn = li.querySelector(".delete-btn");
        deleteBtn.addEventListener("click", () => {
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
            todo_ul.removeChild(li);

        });

        todo_ul.appendChild(li);
    }

    function saveTasks() {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
});