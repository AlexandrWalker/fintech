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

/* Accordion */
var accordionItem = document.querySelectorAll('.accordion__title'),
  active = document.getElementsByClassName('accordion__active');

Array.from(accordionItem).forEach(function (item, i, accordionItem) {
  item.addEventListener('click', function (e) {
    if (active.length > 0 && active[0] !== this)
      active[0].classList.remove('accordion__active');

    this.classList.toggle('accordion__active');
  });
});

/* Валидация формы */