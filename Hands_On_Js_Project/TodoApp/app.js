document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector('.btn');
    const input_container = document.querySelector('.input-container');
    const todo_ul = document.querySelector('#taskList');

    let tasks = JSON.parse(localStorage.getItem("task")) || [];

    tasks.forEach(task => renderTask(task));

    btn.addEventListener('click', () => {
        const input = input_container.value.trim();
        if (input === "") return;

        const newTask = {
            id: Date.now(),
            name: input,
            completed: false
        };
        tasks.push(newTask);
        saveTasks();
        renderTask(newTask);
        input_container.value = "";
        console.log(tasks);
    });

    function renderTask(task) {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);
        if (task.completed) {
            li.classList.add("completed");
        }
        li.innerHTML = `
            <span>${task.name}</span>
            <button class="delete">Delete</button>
            <button class="edit">Edit</button>
        `;

        li.querySelector('.delete').addEventListener('click', (e) => {
            e.stopPropagation();
            li.remove();
            tasks = tasks.filter(t => t.id !== task.id);
            saveTasks();
        });

        li.querySelector("span").addEventListener('click', () => {
            li.classList.toggle("completed");
            tasks = tasks.map(t => {
                if (t.id === task.id) {
                    return {
                        ...t,
                        completed: !t.completed
                    };
                }
                return t;
            });
            saveTasks();
        });

        li.querySelector('.edit').addEventListener('click', (e) => {
            e.stopPropagation();
            const newName = prompt("Edit your task:", task.name);
            if (newName !== null && newName.trim() !== "") {
                task.name = newName.trim();
                li.querySelector("span").textContent = task.name;
                saveTasks();
            }
        });

        todo_ul.appendChild(li);
    }

    function saveTasks() {
        localStorage.setItem("task", JSON.stringify(tasks));
    }
});
