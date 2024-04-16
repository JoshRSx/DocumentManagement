
/*
****************************************************************************************************************************************
Nombre: checklist.js
Fecha Creacion: 13/03/2024
Autor: Ronald German Quispe
Descripcion: Procedimiento almacenado para evaluar los resultados de tomas de muestras ambientales. 
             Determina si los valores exceden los límites establecidos en base a la normativa legal aplicable.

Llamado por: El componente taskList que agregarán tareas dinámicamente. 
              <ul class="list-group list-group-flush" id="taskList">
              <!-- Las tareas se agregarán dinámicamente aquí --> 
              </ul>
Tablas afectadas: (NO POSEE CONECCION CON TABLAS)

Uso: Imbocado por el id="taskList" para realizar agregar las tareas
****************************************************************************************************************************************
RESUMEN DE CAMBIOS
Fecha(aaaa-mm-dd)       Autor                  Comentarios
------------------      -----------------      --------------------------------------------------------
[Fecha de Cambio]       [Autor del Cambio]     [Descripción del cambio realizado]

Añadir aquí las entradas de cambios subsiguientes...
****************************************************************************************************************************************
*/
document.addEventListener('DOMContentLoaded', function() {
    // Añade tareas iniciales si es necesario.
    addTask('Actualizar la versión del Apache de la 7 a Apache-9');
    addTask('Modificar los entity transformarlos a Sequence');
    // ... Añadir otras tareas iniciales.
  });
  
  function addTask(taskText = null) {
    const taskList = document.getElementById('taskList');
    const newTaskInput = document.getElementById('newTask');
    const taskContent = taskText || newTaskInput.value.trim();
    
    if (taskContent) {
      const listItem = document.createElement('li');
      listItem.classList.add('list-group-item');
      listItem.innerHTML = `
        <input type="checkbox" onchange="toggleTask(this)" /> ${taskContent}
        <button class="btn btn-sm btn-outline-danger float-right" onclick="removeTask(this)">X</button>
      `;
      taskList.appendChild(listItem);
      newTaskInput.value = ''; // Clear the input field.
    }
  }
  
  function toggleTask(checkboxElem) {
    if (checkboxElem.checked) {
      checkboxElem.parentElement.classList.add('completed');
    } else {
      checkboxElem.parentElement.classList.remove('completed');
    }
  }
  
  function toggleCompleted() {
    document.querySelectorAll('#taskList .completed').forEach(task => {
      task.style.display = task.style.display === 'none' ? '' : 'none';
    });
  }
  
  function removeTask(buttonElem) {
    buttonElem.parentElement.remove();
  }
  
  function removeCompleted() {
    document.querySelectorAll('#taskList .completed').forEach(task => {
      task.remove();
    });
  }
  