// State variables
let tasks = [
    { id: 1, text: "SIH PROJECT", completed: false } // Default task you requested
];
let currentFilter = 'all';

const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const totalTasksEl = document.getElementById('totalTasks');
const completedTasksEl = document.getElementById('completedTasks');
const pendingTasksEl = document.getElementById('pendingTasks');
const filterBtns = document.querySelectorAll('.filter-btn');

// Initialize
renderTasks();

// Event Listeners
addTaskBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Update active class
        filterBtns.forEach(b => b.classList.remove('active'));
        e.target.classList.add('active');
        
        // Update filter state and re-render
        currentFilter = e.target.getAttribute('data-filter');
        renderTasks();
    });
});

// Functions
function addTask() {
    const text = taskInput.value.trim();
    if (text !== "") {
        const newTask = {
            id: Date.now(),
            text: text,
            completed: false
        };
        tasks.push(newTask);
        taskInput.value = "";
        renderTasks();
    }
}

function toggleTask(id) {
    tasks = tasks.map(task => {
        if (task.id === id) {
            return { ...task, completed: !task.completed };
        }
        return task;
    });
    renderTasks();
}

function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    renderTasks();
}

function updateStats() {
    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    totalTasksEl.textContent = total;
    completedTasksEl.textContent = completed;
    pendingTasksEl.textContent = pending;
}

function renderTasks() {
    // Filter tasks based on current filter state
    let filteredTasks = tasks;
    if (currentFilter === 'pending') {
        filteredTasks = tasks.filter(task => !task.completed);
    } else if (currentFilter === 'completed') {
        filteredTasks = tasks.filter(task => task.completed);
    }

    // Clear current list
    taskList.innerHTML = "";

    // Render filtered tasks
    filteredTasks.forEach(task => {
        const li = document.createElement('li');
        li.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
            <div class="task-left">
                <input type="checkbox" class="task-checkbox" 
                    ${task.completed ? 'checked' : ''} 
                    onclick="toggleTask(${task.id})">
                <span class="task-text">${task.text}</span>
            </div>
            <button class="delete-btn" onclick="deleteTask(${task.id})">delete</button>
        `;
        
        taskList.appendChild(li);
    });

    // Update the statistics numbers
    updateStats();
}