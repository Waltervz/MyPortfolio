const openNavButton = document.getElementById('openNav');
const openMainButton = document.getElementById('openMain');
const modal_container = document.getElementById('modal_container');
const close = document.getElementById('close');

openNavButton.addEventListener('click', () => {
  modal_container.classList.add('show');
});

openMainButton.addEventListener('click', () => {
  modal_container.classList.add('show');
});

close.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

modal_container.addEventListener('click', (event) => {
  if (event.target === modal_container) {
    modal_container.classList.remove('show');
  }
});


const translateButton = document.getElementById("translateButton");
const modalContent = document.querySelector(".modal p");

const originalText = modalContent.textContent.trim();
const translatedText = `
Hola, soy Walter, un apasionado desarrollador web de Argentina. Me encanta combinar la creatividad con la funcionalidad en el desarrollo web, ya sea en proyectos innovadores o soluciones corporativas. Mi portafolio refleja mi enfoque versátil. Actualmente estoy cursando mi carrera en UX/UI. ¡Conectemos y creemos juntos en el mundo del desarrollo web!
`;

let isTranslated = false;

// Función para cambiar el contenido entre original y traducido
function toggleTranslation() {
    isTranslated = !isTranslated;
    modalContent.textContent = isTranslated ? translatedText : originalText;
    translateButton.textContent = isTranslated ? "Back to Original" : "Translate to Spanish";
}

// Evento de clic en el botón de traducción
translateButton.addEventListener("click", toggleTranslation);
function toggleTranslation() {
  isTranslated = !isTranslated;
  modalContent.textContent = isTranslated ? translatedText : originalText;
  translateButton.textContent = isTranslated ? "Back to Original" : "Translate to Spanish";

  // Cambiar etiquetas del formulario
  nameField.placeholder = isTranslated ? "Nombre" : "Name";
  emailField.placeholder = isTranslated ? "Correo electrónico" : "Email";
  messageField.placeholder = isTranslated ? "Mensaje" : "Message";

  // Cambiar texto del botón "Send"
  sendButton.textContent = isTranslated ? "Enviar" : "Send";
}

