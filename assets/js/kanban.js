document.querySelectorAll('.kanban-card').forEach(card => {
    card.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', e.target.id);
    });
});

document.querySelectorAll('.kanban-column').forEach(column => {
    column.addEventListener('dragover', e => {
        e.preventDefault();
    });

    column.addEventListener('drop', e => {
        const id = e.dataTransfer.getData('text/plain');
        const card = document.getElementById(id);
        e.target.appendChild(card);
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    let draggedElement = null; // Elemento que se está arrastrando

    // Evento al comenzar a arrastrar
    document.querySelectorAll('.kanban-card').forEach(element => {
        element.addEventListener('dragstart', e => {
            draggedElement = e.target; // Guardar la referencia del elemento arrastrado
            e.dataTransfer.effectAllowed = "move";
        });
    });

    // Eventos para las columnas
    document.querySelectorAll('.kanban-column').forEach(column => {
        column.addEventListener('dragover', e => {
            e.preventDefault(); // Necesario para permitir soltar el elemento
            e.dataTransfer.dropEffect = "move";
        });

        column.addEventListener('drop', e => {
            e.preventDefault();
            if (e.target.classList.contains('kanban-column') || e.target.closest('.kanban-column')) {
                // Agregar el elemento arrastrado a la columna donde se suelta
                e.target.appendChild(draggedElement);
            }
        });
    });
});

