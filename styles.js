// Retrieve the necessary elements from the DOM
const taskInput = document.getElementById('m_task');
const priorityInput = document.getElementById('m_priority');
const dateInput = document.getElementById('m_date');
const taskList = document.getElementById('m_taskList');

// Function to add a new task
function addTask() {
  // Get the input values
  const task = taskInput.value;
  const priority = priorityInput.value;
  const date = dateInput.value;

  // Create a task object
  const newTask = {
    task: task,
    priority: priority,
    date: date
  };

  // Retrieve existing tasks from local storage
  let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Add the new task to the array
  tasks.push(newTask);

  // Save the updated tasks in local storage
  localStorage.setItem('tasks', JSON.stringify(tasks));

  // Clear the input fields
  taskInput.value = '';
  priorityInput.value = 'Viktigt';
  dateInput.value = '';

  // Display the tasks in the taskList
  displayTasks();
}

// Function to display the tasks in the taskList
function displayTasks() {
  // Clear the taskList
  taskList.innerHTML = '';

  // Retrieve tasks from local storage
  const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

  // Loop through the tasks and create list items
  tasks.forEach(task => {
    const listItem = document.createElement('li');
    listItem.textContent = `${task.task} - ${task.priority} - ${task.date}`;
    taskList.appendChild(listItem);
  });
}

// Add click event listener to the "Lägg till" button
const addButton = document.querySelector('button[addtask()]');
addButton.addEventListener('click', addTask);

// Display the tasks on page load
displayTasks();
