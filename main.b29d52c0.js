parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";new Swiper(".slider__container",{pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},autoHeight:!0,slidesPerView:1,loop:!0,keybord:{enabled:!0,onlyInViewport:!0},breakpoints:{768:{slidesPerView:2,spaceBetween:20},1280:{enabled:!1}}}),document.querySelector(".subscribe__button").onclick=function(e){document.querySelector(".subscribe__input").value=""};var e=document.getElementById("form"),t=document.getElementById("message");e.addEventListener("submit",function(n){if(n.preventDefault(),e.checkValidity()){var o=new FormData(e),c=new XMLHttpRequest;c.open("POST","url/to/server"),c.onload=function(){t.textContent="Форма успішно відправлена"},c.onerror=function(){t.textContent="Сталась помилка при відправленні форми"},c.send(o)}else t.textContent="Будь ласка, введіть правильний email"});var n=document.getElementById("nav"),o=document.querySelector(".header__burger"),c=document.querySelector(".nav__close-button");o.addEventListener("click",function(e){n.classList.toggle("active"),document.body.classList.toggle("no-scroll")}),c.addEventListener("click",function(e){n.classList.toggle("active"),document.body.classList.toggle("no-scroll")});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.b29d52c0.js.map