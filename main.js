const loginModal = document.getElementById("j-login-modal");
const $simpleCarousel = document.querySelector(".js-carousel--simple");
const cadastroModal = document.getElementById("modal-cadastro-overlay");
const criarContaButton = document.getElementById("criar-conta");
const buttonCloseCadastroModal = document.getElementById(
  "close-cadastro-modal-button"
);
//modal login
function toggleModal() {
  console.log("toggle modal");
  loginModal.classList.toggle("open-modal");
}
function closeModal() {
  console.log("close modal");
  loginModal.classList.remove("open-modal");
}
function toggleCadastro() {
  console.log("toggle cadastro");
  cadastroModal.classList.toggle("display-none");
  buttonCloseCadastroModal.classList.toggle("display-none");
}

//carousel

new Glider($simpleCarousel, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: ".js-carousel--simple-dots",
  arrows: {
    prev: ".js-carousel--simple-prev",
    next: ".js-carousel--simple-next",
  },
});

//events
criarContaButton.addEventListener("click", toggleCadastro);
buttonCloseCadastroModal.addEventListener("click", toggleCadastro);
window.onscroll = closeModal;
