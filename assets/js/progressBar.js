console.log('Script loaded');
// Este código debe ir en tu archivo script.js
let totalTasks = 0;
let completedTasks = 0;

document.addEventListener('DOMContentLoaded', function() {
  // Aquí puedes llamar a cualquier inicialización necesaria
  updateProgressBar();
});

function addTask() {
  console.log('Añadir tarea iniciado'); // Debug

  const taskList = document.getElementById('taskList');
  const newTaskInput = document.getElementById('newTask');
  const taskContent = newTaskInput.value.trim();

  if (taskContent) {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');

      const checkBox = document.createElement('input');
      checkBox.type = 'checkbox';
      checkBox.classList.add('task-checkbox');
      checkBox.onchange = function() {
          if (this.checked) {
              console.log('tarea completa'); //debugg
              completedTasks += 1;
              listItem.classList.add('completed');
          } else {
              completedTasks -= 1;
              listItem.classList.remove('completed');
          }
          updateProgressBar();
      };

      const button = document.createElement('button');
      button.classList.add('btn', 'btn-sm', 'btn-outline-danger', 'float-right');
      button.textContent = 'X';
      button.onclick = function() {
          if (listItem.classList.contains('completed')) {
              console.log('Eliminando tarea'); //debugg
              completedTasks -= 1; // Ajustar el conteo si se elimina una tarea completada
          }
          listItem.remove();
          totalTasks -= 1;
          updateProgressBar();
      };

      listItem.appendChild(checkBox);
      listItem.append(` ${taskContent}`);
      listItem.appendChild(button);
      taskList.appendChild(listItem);

      newTaskInput.value = ''; // Limpiar el campo de entrada
      totalTasks += 1;
      updateProgressBar();
  }
}
  /*
  function toggleTask(checkboxElem) {
    console.log('Actualiza Checkbox'); //debugg
    checkboxElem.parentElement.classList.toggle('completed');
    updateProgressBar();
  }
  */

  /*FUNCIÓN QUE ACTUALIZA LA BARRA DE PROGRESO */
  function updateProgressBar() {
    console.log('Actualiza la Barra de Progreso'); //debugg
    const progressBar = document.getElementById('progressBar');
    const percentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
    progressBar.style.width = percentage + '%';
    progressBar.textContent = percentage.toFixed(0) + '%';
  }
  /*
  function removeTask(buttonElem) {
    //console.log('Eliminando tarea'); //debugg

    buttonElem.closest('li').remove();
    updateProgressBar();
  }
  */
 /*
  function removeCompleted() {
    document.querySelectorAll('#taskList .completed').forEach(task => {
      task.remove();
    });
    updateProgressBar();
  }
  */
 /*
  function toggleCompleted() {
    const completedTasks = document.querySelectorAll('#taskList .completed');
    completedTasks.forEach(task => {
      task.classList.toggle('hide');
    });
  }
  */
  

