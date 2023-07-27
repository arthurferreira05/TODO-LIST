const taskList = document.getElementById('taskList');

function addTask() {
  const taskInput = document.getElementById('task');
  const dueDateInput = document.getElementById('due-date');

  const task = taskInput.value.trim();
  const dueDate = dueDateInput.value;

  if (task === '') {
    return;
  }

  const taskElement = createTaskElement(task, dueDate);
  taskList.appendChild(taskElement);

  taskInput.value = '';
  dueDateInput.value = '';
}

function createTaskElement(task, dueDate) {
  const taskElement = document.createElement('div');
  taskElement.classList.add('task');

  const taskTitle = document.createElement('span');
  taskTitle.textContent = task;
  taskElement.appendChild(taskTitle);

  const dueDateLabel = document.createElement('span');
  dueDateLabel.classList.add('task-label');
  dueDateLabel.textContent = `Due: ${dueDate}`;
  taskElement.appendChild(dueDateLabel);

  const tagsLabel = document.createElement('div');
  tagsLabel.classList.add('tags');
  tagsLabel.textContent = 'Tags: ';
  taskElement.appendChild(tagsLabel);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Excluir';
  deleteButton.onclick = () => {
    taskList.removeChild(taskElement);
  };
  taskElement.appendChild(deleteButton);

  return taskElement;
}