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
    Saludos! Soy Walter, un apasionado Desarrollador Web de Argentina. Te invito a explorar mi enfoque ecléctico y versátil en el emocionante mundo del desarrollo web. Desde proyectos innovadores hasta soluciones corporativas, fusiono la innovación con la tradición, siempre con audacia y autenticidad.
    Mi portafolio es un testimonio de cómo combino la creatividad con la versatilidad para crear experiencias web únicas y funcionales. Si buscas una perspectiva equilibrada que capture tanto lo vanguardista como lo convencional, estoy aquí para colaborar contigo.
    Gracias por acompañarme en este viaje de exploración y creatividad en el desarrollo web.
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

