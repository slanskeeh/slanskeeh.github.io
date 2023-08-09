const hamburger = document.querySelector(".mobile__hamburger");

hamburger.addEventListener("click", () => {
  document
    .querySelector(".mobile__menu")
    .classList.toggle("mobile__menu_active");

  hamburger.classList.toggle("mobile__hamburger_active");

  document
    .querySelector(".mobile__overlay")
    .classList.toggle("mobile__overlay_active");
});

const modalClose = document.querySelector(".modal__form__close");

modalClose.addEventListener("click", () => {
  document.querySelector(".modal").classList.remove("modal_active");
});

const reserveBtn = document.querySelector(".hero__button");

reserveBtn.addEventListener("click", () => {
  document.querySelector(".modal").classList.add("modal_active");
});

const submitBtn = document.querySelector(".modal__form__button");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const inputValue = document.querySelector(".modal__form__input").value;

  fetch("http://someserver.ru", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputValue),
  });
});

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
