!function(){var e={492:function(){document.addEventListener("DOMContentLoaded",(function(){window.matchMedia("(min-width: 0px) and (max-width: 767px)").matches&&(swiper=new Swiper(".mySwiper",{pagination:{el:".swiper-pagination"},breakpoints:{320:{slidesPerView:2},480:{slidesPerView:3},640:{slidesPerView:4}}}))}))},184:function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,o=new Array(t);n<t;n++)o[n]=e[n];return o}document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelector(".brands__expand"),n=document.querySelector(".brands__hidden"),o=document.querySelector(".tech__expand"),r=document.querySelector(".tech__hidden"),c=e(document.querySelectorAll(".brands__slider:nth-child(n+7)")),i=e(document.querySelectorAll(".tech__slider:nth-child(n+7)")),a=e(document.querySelectorAll(".buttons-group")),l=document.querySelector(".information__continue"),s=document.querySelector(".information__text:nth-child(2)"),d=document.querySelector(".information__hidden"),u=document.querySelector(".overlay"),y=document.querySelector(".menu"),f=document.querySelector(".call"),m=document.querySelector(".feedback"),p=document.querySelector(".nav__menu"),v=document.querySelectorAll(".call-button"),h=document.querySelectorAll(".feedback-button"),b=document.querySelectorAll(".modal-close");h.forEach((function(e){e.addEventListener("click",(function(e){m.classList.add("active"),u.classList.add("active")}))})),v.forEach((function(e){e.addEventListener("click",(function(e){f.classList.add("active"),u.classList.add("active")}))})),p.addEventListener("click",(function(){y.classList.add("active"),u.classList.add("active")})),u.addEventListener("click",(function(){document.querySelector(".active").classList.remove("active"),u.classList.remove("active")})),b.forEach((function(e){e.addEventListener("click",(function(){document.querySelector(".active").classList.remove("active"),u.classList.remove("active")}))})),l.addEventListener("click",(function(){s.style.display="block",l.style.display="none",d.style.display="block"})),d.addEventListener("click",(function(){s.style.display="none",l.style.display="block",d.style.display="none"})),a.forEach((function(e){e.addEventListener("click",(function(e){var o=e.target.closest(".brands__expand"),r=e.target.closest(".brands__hidden");e.target&&this.contains(o)&&c.forEach((function(e){e.style.display="flex",t.style.display="none",n.style.display="block"})),e.target&&this.contains(r)&&c.forEach((function(e){e.style.display="none",t.style.display="block",n.style.display="none"}))}))})),a.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.closest(".tech__expand"),n=e.target.closest(".tech__hidden");e.target&&this.contains(t)&&i.forEach((function(e){e.style.display="flex",o.style.display="none",r.style.display="block"})),e.target&&this.contains(n)&&i.forEach((function(e){e.style.display="none",o.style.display="block",r.style.display="none"}))}))}))}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var c=t[o]={exports:{}};return e[o](c,c.exports,n),c.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(492),n(184),console.log("Works!")}()}();
//# sourceMappingURL=bundle.js.map