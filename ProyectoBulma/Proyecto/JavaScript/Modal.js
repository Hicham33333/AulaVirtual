document.addEventListener('DOMContentLoaded', () => {
  // Función para abrir el modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  // Función para cerrar el modal
  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  // Función para cerrar todos los modales
  function closeAllModals() {
    document.querySelectorAll('.modal').forEach(($modal) => {
      closeModal($modal);
    });
  }
  document.querySelectorAll(".seleccion").forEach(e=>{
    e.addEventListener("click",()=>{
    seleccion= e.target.dataset.seleccion
    console.log(seleccion);
    
    })
    
    
    })

  // Agregar evento a todos los elementos con la clase 'js-modal-trigger'
  document.querySelectorAll('.js-modal-trigger').forEach(($trigger) => {
    const modalId = $trigger.dataset.target;
    const $modal = document.getElementById(modalId);

    if ($modal) {
      $trigger.addEventListener('click', () => {
        openModal($modal);
      });
    }
  });

  // Cerrar modal cuando se hace clic en el fondo o en el botón de cerrar
  document.querySelectorAll('.modal-background, .buttonCancelar')
    .forEach(($close) => {
      const $modal = $close.closest('.modal');

      $close.addEventListener('click', () => {
        closeModal($modal);
      });
    });

  // Cerrar modal con la tecla "Escape"
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeAllModals();
    }
  });

  // Función para cambiar el color de fondo y actualizar el título
  function completeTask(taskCard, taskTitle) {
    taskCard.classList.add('has-background-success'); 
    taskTitle.textContent = '¡Tarea completada!'; 
  }

  // Eventos para los botones "Enviar"
  document.querySelector('.buttonEnviar').addEventListener('click', () => {
    const taskCard = document.querySelector('.jaja');
    const taskTitle = taskCard.querySelector('h3');
    completeTask(taskCard, taskTitle);
    closeAllModals();
  });

  document.querySelector('.buttonEnviar2').addEventListener('click', () => {
    const taskCard = document.querySelector('.jaja2');
    const taskTitle = taskCard.querySelector('h3');
    completeTask(taskCard, taskTitle);
    closeAllModals();
  });

  document.querySelector('.buttonEnviar3').addEventListener('click', () => {
    const taskCard = document.querySelector('.jaja3');
    const taskTitle = taskCard.querySelector('h3');
    completeTask(taskCard, taskTitle);
    closeAllModals();
  });
});
