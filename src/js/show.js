document.addEventListener("DOMContentLoaded", function (e) {
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
    slider = [...document.querySelectorAll(".slider")],

    buttons_group = [...document.querySelectorAll(".buttons-group")];

  const information__continue = document.querySelector(".information__continue"),
    text = document.querySelector(".information__text:nth-child(2)"),
    information__hidden = document.querySelector(".information__hidden");

  const overlay = document.querySelector(".overlay");

  const menu = document.querySelector(".menu"),
    call = document.querySelector(".call"),
    feedback = document.querySelector(".feedback");

  const button_menu = document.querySelector(".nav__menu"),
    button_call = document.querySelectorAll(".call-button"),
    button_feedback = document.querySelectorAll(".feedback-button");

  const modalClose = document.querySelectorAll(".modal-close");
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

  overlay.addEventListener("click", (e) => {
    document.querySelector(".active").classList.remove("active");
    overlay.classList.remove("active");
  });

  modalClose.forEach(modalClose => {
    modalClose.addEventListener("click", (e) => {
      document.querySelector(".active").classList.remove("active");
      overlay.classList.remove("active");
    })
  })

  // Раскрытие/скрытие списков

  const fadeIn = (slider, timeout, display) => {
    slider.style.opacity = '0';
    slider.style.display = display || 'flex';
    slider.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
      slider.style.opacity = 1;
    }, 10);
  };

  const fadeOut = (slider__brand, timeout) => {
    slider__brand.style.opacity = 1;
    slider__brand.style.transition = `opacity ${timeout}ms`;
    slider__brand.style.opacity = 0;
    setTimeout(() => {
      slider__brand.style.display = 'none';
    }, timeout);
  };

  information__continue.addEventListener("click", (e) => {
    fadeIn(text, 1000, 'block');
    information__continue.style.display = "none";
    information__hidden.style.display = "block";
  });

  information__hidden.addEventListener("click", (e) => {
    fadeOut(text, 1000, 'none');
    information__continue.style.display = "block";
    information__hidden.style.display = "none";
  });

  buttons_group.forEach((buttons_group) => {
    buttons_group.addEventListener("click", function (event) {
      let button_expand = event.target.closest(".brands__expand");
      let button_hidden = event.target.closest(".brands__hidden");

      if (event.target && this.contains(button_expand)) {
        slider__brand.forEach((slider__brand) => {
          fadeIn(slider__brand, 1000, 'flex');
          open__brand.style.display = "none";
          close__brand.style.display = "block";
        });
      }
      if (event.target && this.contains(button_hidden)) {
        slider__brand.forEach((slider__brand) => {
          fadeOut(slider__brand, 1000, 'flex');
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
          fadeIn(slider__tech, 1000, 'flex');
          open__tech.style.display = "none";
          close__tech.style.display = "block";
        });
      }
      if (event.target && this.contains(button_hidden)) {
        slider__tech.forEach((slider__tech) => {
          fadeOut(slider__tech, 1000, 'flex');
          open__tech.style.display = "block";
          close__tech.style.display = "none";
        });
      }
    });
  });
});
