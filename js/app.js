/* Swiper */
var swiper = new Swiper(".team-slider", {
  slidesPerView: 1.15,
  spaceBetween: 24,
  centeredSlides: false,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    disabledClass: "swiper-button-enabled",
  },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    520: {
      slidesPerView: 2.15,
    },
    // when window width is >= 480px
    820: {
      slidesPerView: 3.15,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        disabledClass: "swiper-button-enabled",
      },
    },
    // when window width is >= 640px
    1100: {
      slidesPerView: 4,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        disabledClass: "swiper-button-enabled",
      },
    }
  }
});

var swiper = new Swiper(".tarif-slider", {
  slidesPerView: 3,
  spaceBetween: 24,
  autoHeight: true,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    disabledClass: "swiper-button-enabled",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".cases-slider", {
  slidesPerView: 1,
  spaceBetween: 24,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    disabledClass: "swiper-button-enabled",
  },
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

/* Lazy Loaded */
(async () => {
  if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll("img.lazyload");
    images.forEach(img => {
      img.src = img.dataset.src;
    });
  } else {
    // Динамический импорт библиотеки LazySizes
    const lazySizesLib = await import('../libs/lazysizes.min.js');
    // Инициализация LazySizes (чтение data-src & class=lazyload)
    lazySizes.init(); // lazySizes применяется при обработке изображений, находящихся на странице.
  }
})();


/* Burger */
let nav = document.querySelector('#nav');
let burgerBtn = document.querySelector('#burgerBtn');

burgerBtn.onclick = function () {
  nav.classList.toggle('show');
  burgerBtn.classList.toggle('active');
};

/* Валидация формы */
console.log('Init!');
// inputmask
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);

const validation = new JustValidate('.form');

validation
  .addField('.input-name', [
    {
      rule: 'required',
      value: true,
      errorMessage: ' '
    }
  ])
  .addField('.input-mail', [
    {
      rule: 'required',
      value: true,
      errorMessage: ' ',
      // errorMessage: 'Email обязателен',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: ' ',
      // errorMessage: 'Введите корректный Email',
    },
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: ' ',
      // errorMessage: 'Телефон обязателен',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: ' ',
      // errorMessage: 'Введите корректный телефон',
    },
  ]).onSuccess((event) => {
    console.log('Validation passes and form submitted', event);

    let formData = new FormData(event.target);

    console.log(...formData);

    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          console.log('Отправлено');
        }
      }
    }

    xhr.open('POST', 'mail.php', true);
    xhr.send(formData);

    event.target.reset();
  });