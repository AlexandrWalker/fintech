/* Swiper */
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 24,
  loop: true,
  centeredSlides: false,
  grabCursor: true,
  freeMode: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* Dropdown */
var mainBtn = document.getElementById("mainBtn");
var mainToggle = document.getElementById("mainToggle");

mainBtn.addEventListener('click', function () {
  mainToggle.classList.toggle("show");
});

/* Валидация формы */