// const expand = [...document.querySelectorAll(".expand")];
// const hidden = [...document.querySelectorAll(".hidden")];
// const slider = [...document.querySelectorAll(".slider:nth-child(n+7)")];

const open__brand = document.querySelector(".brands__list--expand");
const close__brand = document.querySelector(".brands__list--hidden");

const open__tech = document.querySelector(".tech__list--expand");
const close__tech = document.querySelector(".tech__list--hidden");

const slider__brand = [
  ...document.querySelectorAll(".brands__list--slider:nth-child(n+7)"),
];
const slider__tech = [
  ...document.querySelectorAll(".tech__list--slider:nth-child(n+7)"),
];
const buttons_group = [...document.querySelectorAll(".buttons_group")];


const information = document.querySelector(".information__continue");
const text = document.querySelector(
  ".information__description--text:nth-child(2)"
);
const information__hidden = document.querySelector(
  ".information__continue--hidden"
);


const overlay = document.querySelector(".overlay");
const modal_window = document.querySelector(".modal_window");
const menu = document.querySelector(".menu--overlay");
const nav_menu = document.querySelector(".nav__menu");


information.addEventListener("click", () =>  {
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
    let button_expand = event.target.closest(".brands__list--expand");
    let button_hidden = event.target.closest(".brands__list--hidden");

    if (event.target && this.contains(button_expand)) {
      slider__brand.forEach( slider__brand => {
        slider__brand.style.display = "flex";
        open__brand.style.display = "none";
        close__brand.style.display = "block";
      })
  }
  if (event.target && this.contains(button_hidden)) {
    slider__brand.forEach(slider__brand => {
      slider__brand.style.display = "none";
        open__brand.style.display = "block";
        close__brand.style.display = 'none';
    })
}})
})

buttons_group.forEach((buttons_group) => {
  buttons_group.addEventListener("click", function (event) {
    let button_expand = event.target.closest(".tech__list--expand");
    let button_hidden = event.target.closest(".tech__list--hidden");

    if (event.target && this.contains(button_expand)) {
      slider__tech.forEach( slider__tech => {
        slider__tech.style.display = "flex";
        open__tech.style.display = "none";
        close__tech.style.display = "block";
      })
  }
  if (event.target && this.contains(button_hidden)) {
    slider__tech.forEach(slider__tech => {
      slider__tech.style.display = "none";
        open__tech.style.display = "block";
        close__tech.style.display = 'none';
    })
}})
})

// document.addEventListener('mousedown', function(e){
//     if(e.target.closest('.menu--overlay') === null){
//         menu.style.display = 'none';
//     }
// });
