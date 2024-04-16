let totalTasks = 0;
let completedTasks = 0;

function updateProgressBar() {
    console.log('Actualiza la Barra de Progreso'); // Debug
    const progressBar = document.getElementById('progressBar');
    const percentage = totalTasks === 0 ? 0 : (completedTasks / totalTasks) * 100;
    progressBar.style.width = percentage + '%';
    progressBar.textContent = percentage.toFixed(0) + '%';
}

function createTaskItem(taskContent) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-group-item');
    return listItem;
}

function configureCheckBox(listItem, taskContent) {
    const checkBox = document.createElement('input');
    checkBox.type = 'checkbox';
    checkBox.classList.add('task-checkbox');
    checkBox.onchange = function() {
        if (this.checked) {
            console.log('tarea completa'); // Debug
            completedTasks += 1;
            listItem.classList.add('completed');
        } else {
            completedTasks -= 1;
            listItem.classList.remove('completed');
        }
        updateProgressBar();
    };

    // Crear un span para contener el texto de la tarea
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = ` ${taskContent}`;

    // Agregar el checkbox y el texto al listItem en el orden correcto
    listItem.appendChild(checkBox);
    listItem.appendChild(taskTextSpan);
}

function configureDeleteButton(listItem) {
    const button = document.createElement('button');
    button.classList.add('btn', 'btn-sm', 'btn-outline-danger', 'float-right');
    button.textContent = 'X';
    button.onclick = function() {
        if (listItem.classList.contains('completed')) {
            console.log('Eliminando tarea'); // Debug
            completedTasks -= 1;
        }
        listItem.remove();
        totalTasks -= 1;
        updateProgressBar();
    };
    listItem.appendChild(button);
}

function addTaskToList(listItem) {
    const taskList = document.getElementById('taskList');
    taskList.appendChild(listItem);
}

function clearNewTaskInput() {
    const newTaskInput = document.getElementById('newTask');
    newTaskInput.value = '';
}

function incrementTotalTasks() {
    totalTasks += 1;
}

function addTask() {
    console.log('Añadir tarea iniciado'); // Debug
    const newTaskInput = document.getElementById('newTask');
    const taskContent = newTaskInput.value.trim();

    if (taskContent) {
        const listItem = createTaskItem(taskContent);
        configureCheckBox(listItem, taskContent); // Se pasó taskContent como argumento pero no se usa en esta función, podría ser eliminado
        configureDeleteButton(listItem);
        addTaskToList(listItem);
        clearNewTaskInput();
        incrementTotalTasks();
        updateProgressBar();
    }
}

/* INTEGACION DE LAS FUNCIONES QUE CONECTAN CON LOS BOTONES OCULTAR ELEMENTOS Y ELIMINAR */

function toggleCompleted() {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(task => {
        task.style.display = task.style.display === 'none' ? '' : 'none';
    });
}

function removeCompleted() {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(task => {
        task.remove();
        // Asegúrate de actualizar el conteo de tareas totales y completadas después de remover una tarea.
        totalTasks -= 1;
        completedTasks -= 1;
    });
    updateProgressBar(); // Actualizar la barra de progreso después de eliminar las tareas completadas.
}

document.addEventListener('DOMContentLoaded', function() {
    updateProgressBar();
});
