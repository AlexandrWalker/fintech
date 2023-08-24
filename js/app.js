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
  breakpoints: {
    // when window width is >= 520px
    520: {
      slidesPerView: 2.15,
    },
    // when window width is >= 820px
    820: {
      slidesPerView: 3.15,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        disabledClass: "swiper-button-enabled",
      },
    },
    // when window width is >= 1100px
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
  slidesPerView: 1,
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
  breakpoints: {
    // when window width is >= 375px
    375: {
      slidesPerView: 1.2,
    },
    // when window width is >= 820px
    820: {
      slidesPerView: 2,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        disabledClass: "swiper-button-enabled",
      },
    },
    // when window width is >= 1100px
    1100: {
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        disabledClass: "swiper-button-enabled",
      },
    }
  }
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

/* Cases */
var caseItem = document.querySelectorAll('.case__body-link'),
  active = document.getElementsByClassName('case__item-active');

Array.from(caseItem).forEach(function (item, i, caseItem) {
  item.addEventListener('click', function (e) {
    if (active.length > 0 && active[0] !== this)
      active[0].classList.remove('case__item-active');

    this.classList.toggle('case__item-active');
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
  document.body.classList.toggle('no-scroll');
};

/* Anchor */
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()

    const blockID = anchor.getAttribute('href').substr(1)

    nav.classList.remove('show');
    burgerBtn.classList.remove('active');
    document.body.classList.remove('no-scroll');

    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
}

/* Валидация формы */
console.log('Init!');

// inputmask
const form = document.querySelector('.form');
const telSelector = form.querySelector('input[type="tel"]');
const inputMask = new Inputmask('+7 (999) 999-99-99');
inputMask.mask(telSelector);
const validation = new JustValidate('.form');

const form2 = document.querySelector('.form2');
const telSelector2 = form2.querySelector('input[type="tel"]');
const inputMask2 = new Inputmask('+7 (999) 999-99-99');
inputMask2.mask(telSelector2);
const validation2 = new JustValidate('.form2');
const thanx2 = document.getElementById('#calculator-finish');

const form3 = document.querySelector('.form3');
const telSelector3 = form3.querySelector('input[type="tel"]');
const inputMask3 = new Inputmask('+7 (999) 999-99-99');
inputMask3.mask(telSelector3);
const validation3 = new JustValidate('.form3');

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
    },
    {
      rule: 'email',
      value: true,
      errorMessage: ' ',
    },
  ])
  .addField('.input-tel', [
    {
      rule: 'required',
      value: true,
      errorMessage: ' ',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: ' ',
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


validation2
  .addField('.input-name2', [
    {
      rule: 'required',
      value: true,
      errorMessage: ' '
    }
  ])
  .addField('.input-mail2', [
    {
      rule: 'required',
      value: true,
      errorMessage: ' ',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: ' ',
    },
  ])
  .addField('.input-tel2', [
    {
      rule: 'required',
      value: true,
      errorMessage: ' ',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = telSelector2.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: ' ',
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


validation3
  .addField('.input-name3', [
    {
      rule: 'required',
      value: true,
      errorMessage: ' '
    }
  ])
  .addField('.input-mail3', [
    {
      rule: 'required',
      value: true,
      errorMessage: ' ',
    },
    {
      rule: 'email',
      value: true,
      errorMessage: ' ',
    },
  ])
  .addField('.input-tel3', [
    {
      rule: 'required',
      value: true,
      errorMessage: ' ',
    },
    {
      rule: 'function',
      validator: function () {
        const phone = telSelector.inputmask.unmaskedvalue();
        return phone.length === 10;
      },
      errorMessage: ' ',
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