!function(){var e={492:function(){document.addEventListener("DOMContentLoaded",(function(){window.matchMedia("(min-width: 0px) and (max-width: 767px)").matches&&(swiper=new Swiper(".mySwiper",{pagination:{el:".swiper-pagination"},breakpoints:{320:{slidesPerView:2},480:{slidesPerView:3},640:{slidesPerView:4}}}))}))},184:function(){function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n=document.querySelector(".brands__list--expand"),r=document.querySelector(".brands__list--hidden"),o=document.querySelector(".tech__list--expand"),i=document.querySelector(".tech__list--hidden"),l=e(document.querySelectorAll(".brands__list--slider:nth-child(n+7)")),c=e(document.querySelectorAll(".tech__list--slider:nth-child(n+7)")),s=e(document.querySelectorAll(".buttons_group")),a=document.querySelector(".information__continue"),d=document.querySelector(".information__description--text:nth-child(2)"),u=document.querySelector(".information__continue--hidden");document.querySelector(".overlay"),document.querySelector(".modal_window"),document.querySelector(".menu--overlay"),document.querySelector(".nav__menu"),a.addEventListener("click",(function(){d.style.display="block",a.style.display="none",u.style.display="block"})),u.addEventListener("click",(function(){d.style.display="none",a.style.display="block",u.style.display="none"})),s.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.closest(".brands__list--expand"),o=e.target.closest(".brands__list--hidden");e.target&&this.contains(t)&&l.forEach((function(e){e.style.display="flex",n.style.display="none",r.style.display="block"})),e.target&&this.contains(o)&&l.forEach((function(e){e.style.display="none",n.style.display="block",r.style.display="none"}))}))})),s.forEach((function(e){e.addEventListener("click",(function(e){var t=e.target.closest(".tech__list--expand"),n=e.target.closest(".tech__list--hidden");e.target&&this.contains(t)&&c.forEach((function(e){e.style.display="flex",o.style.display="none",i.style.display="block"})),e.target&&this.contains(n)&&c.forEach((function(e){e.style.display="none",o.style.display="block",i.style.display="none"}))}))}))}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){"use strict";n(492),n(184),console.log("Works!")}()}();
//# sourceMappingURL=bundle.js.map