const loginModal = document.getElementById("j-login-modal");
const $simpleCarousel = document.querySelector(".js-carousel--simple");

//modal login
function toggleModal() {
  console.log("toggle modal");
  loginModal.classList.toggle("open-modal");
}
function closeModal() {
  console.log("close modal");
  loginModal.classList.remove("open-modal");
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

window.onscroll = closeModal;
