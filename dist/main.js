!function(a){var e={};function r(n){if(e[n])return e[n].exports;var t=e[n]={i:n,l:!1,exports:{}};return a[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=a,r.c=e,r.d=function(a,e,n){r.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:n})},r.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},r.t=function(a,e){if(1&e&&(a=r(a)),8&e)return a;if(4&e&&"object"==typeof a&&a&&a.__esModule)return a;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var t in a)r.d(n,t,function(e){return a[e]}.bind(null,t));return n},r.n=function(a){var e=a&&a.__esModule?function(){return a.default}:function(){return a};return r.d(e,"a",e),e},r.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},r.p="",r(r.s=0)}([function(a,e,r){"use strict";r.r(e);var n=()=>'\n  <h1 class="header__title">Bsale Test</h1>\n    <form method="get" class="header__form" >\n      <input class="header__input" type="text" placeholder="Tienda" name="search">\n      <button type="submit" class="header__searchbutton ">\n          <i class="header__searchicon fas fa-search"></i>\n      </button>    \n    </form>\n  <a class="header__cartbutton" href="#"><i class="header__carticon fas fa-shopping-cart"></i></a> \n  ';const t="http://localhost:3000/api/productos/";var s=async a=>{const e=a?`${t}${a}`:t;try{const a=await fetch(e);return await a.json()}catch(a){console.log("Fetch Error",a)}};var c=()=>{if(location.hash){return location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/"}if(location.search){return location.search.slice(1).toLocaleLowerCase()||"/"}};var i=a=>{if("/"===a){return"/"}if(a&&"search="==a.substring(0,7)){return"/search"}return"/"};var o=()=>'\n    <div class="Error404">\n      <h2>Error 404</h2>\n    </div>\n  ';const d={"/":async()=>`\n    ${(await s("all")).map(a=>`\n    <div class="cards__card">\n      <div class="cards__image"><img src="${a.url_image}" alt="${a.name}"></div>\n      <div class="cards__title">${a.name}</div>\n      <div class="cards__price">$ ${a.price}</div>\n      <a class="cards__add" href="#"> <i class="cards__addicon fas fa-cart-plus"></i>  </a> \n    </div>`).join("")}\n  `,"/search":async()=>{const a=c();return`\n    ${(await s("/search?"+a)).map(a=>`\n    <div class="cards__card">\n      <div class="cards__image"><img src="${a.url_image}" alt="${a.name}"></div>\n      <div class="cards__title">${a.name}</div>\n      <div class="cards__price">$ ${a.price}</div>\n      <a class="cards__add" href="#"> <i class="cards__addicon fas fa-cart-plus"></i>  </a> \n    </div>`).join("")}\n  `}};var l=async()=>{const a=document.getElementById("header"),e=document.getElementById("cards");a.innerHTML=await n();let r=c(),t=await i(r),s=d[t]?d[t]:o;e.innerHTML=await s()};window.addEventListener("load",l),window.addEventListener("hashchange",l)}]);