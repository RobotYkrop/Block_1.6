document.addEventListener("DOMContentLoaded", function () {
  const open__brand = document.querySelector(".brands__expand"),
    close__brand = document.querySelector(".brands__hidden"),
    open__tech = document.querySelector(".tech__expand"),
    close__tech = document.querySelector(".tech__hidden");

  const slider__brand = [
      ...document.querySelectorAll(".brands__slider:nth-child(n+7)"),
    ],
    slider__tech = [
      ...document.querySelectorAll(".tech__slider:nth-child(n+7)"),
    ],
    buttons_group = [...document.querySelectorAll(".buttons-group")];

  const information = document.querySelector(".information__continue"),
    text = document.querySelector(".information__text:nth-child(2)"),
    information__hidden = document.querySelector(".information__hidden");

  const overlay = document.querySelector(".overlay");

  const menu = document.querySelector(".menu"),
    call = document.querySelector(".call"),
    feedback = document.querySelector(".feedback");

  const button_menu = document.querySelector(".nav__menu"),
    button_call = document.querySelectorAll(".call-button"),
    button_feedback = document.querySelectorAll(".feedback-button");

  // Открытие и закрытие окон

  button_feedback.forEach((button_feedback) => {
    button_feedback.addEventListener("click", (e) => {
      feedback.classList.add("active");
      overlay.classList.add("active");
    });
  });
  button_call.forEach((button_call) => {
    button_call.addEventListener("click", (e) => {
      call.classList.add("active");
      overlay.classList.add("active");
    });
  });

  button_menu.addEventListener("click", (e) => {
    menu.classList.add("active");
    overlay.classList.add("active");
  });

  overlay.addEventListener("click", function () {
    document.querySelector(".active").classList.remove("active");
    this.classList.remove("active");
  });

  // Раскрытие/скрытие списков

  information.addEventListener("click", () => {
    text.style.display = "block";
    information.style.display = "none";
    information__hidden.style.display = "block";
  });

  information__hidden.addEventListener("click", () => {
    text.style.display = "none";
    information.style.display = "block";
    information__hidden.style.display = "none";
  });

  buttons_group.forEach((buttons_group) => {
    buttons_group.addEventListener("click", function (event) {
      let button_expand = event.target.closest(".brands__expand");
      let button_hidden = event.target.closest(".brands__hidden");

      if (event.target && this.contains(button_expand)) {
        slider__brand.forEach((slider__brand) => {
          slider__brand.style.display = "flex";
          open__brand.style.display = "none";
          close__brand.style.display = "block";
        });
      }
      if (event.target && this.contains(button_hidden)) {
        slider__brand.forEach((slider__brand) => {
          slider__brand.style.display = "none";
          open__brand.style.display = "block";
          close__brand.style.display = "none";
        });
      }
    });
  });

  buttons_group.forEach((buttons_group) => {
    buttons_group.addEventListener("click", function (event) {
      let button_expand = event.target.closest(".tech__expand");
      let button_hidden = event.target.closest(".tech__hidden");

      if (event.target && this.contains(button_expand)) {
        slider__tech.forEach((slider__tech) => {
          slider__tech.style.display = "flex";
          open__tech.style.display = "none";
          close__tech.style.display = "block";
        });
      }
      if (event.target && this.contains(button_hidden)) {
        slider__tech.forEach((slider__tech) => {
          slider__tech.style.display = "none";
          open__tech.style.display = "block";
          close__tech.style.display = "none";
        });
      }
    });
  });
});
