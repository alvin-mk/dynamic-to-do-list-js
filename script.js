document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('task-input');
  const addTaskButton = document.getElementById('add-task-btn');
  const taskList = document.getElementById('task-list');

  const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
      alert('Please enter a task');
      return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;

    const removeButton = document.createElement('button');
    removeButton.classList.add('remove-btn');
    removeButton.textContent = 'Remove';

    removeButton.addEventListener('click', () => {
      taskList.removeChild(listItem);
    });

    listItem.appendChild(removeButton);
    taskList.appendChild(listItem);
    taskInput.value = '';
  };

  addTaskButton.addEventListener('click', addTask);
  taskInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
      addTask();
    }
  });
});
