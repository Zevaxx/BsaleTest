!function(e){var a={};function r(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=e,r.c=a,r.d=function(e,a,n){r.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,a){if(1&a&&(e=r(e)),8&a)return e;if(4&a&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var t in e)r.d(n,t,function(a){return e[a]}.bind(null,t));return n},r.n=function(e){var a=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(a,"a",a),a},r.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},r.p="",r(r.s=0)}([function(e,a,r){"use strict";r.r(a);var n=()=>'\n  <h1 class="header__title">Bsale Test</h1>\n    <form method="get" class="header__form" >\n      <input class="header__input" type="text" placeholder="Tienda" name="search">\n      <button type="submit" class="header__searchbutton ">\n          <i class="header__searchicon fas fa-search"></i>\n      </button>    \n    </form>\n  <a class="header__cartbutton" href="#"><i class="header__carticon fas fa-shopping-cart"></i></a> \n  ';const t="https://bsaletestzevaxx.herokuapp.com/api/productos/";var s=async e=>{const a=e?`${t}${e}`:t;try{const e=await fetch(a);return await e.json()}catch(e){console.log("Fetch Error",e)}};var c=()=>{if(location.hash){return location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/"}if(location.search){return location.search.slice(1).toLocaleLowerCase()||"/"}};var i=e=>{if("/"===e){return"/"}if(e&&"search="==e.substring(0,7)){return"/search"}return"/"};var o=()=>'\n    <div class="Error404">\n      <h2>Error 404</h2>\n    </div>\n  ';const d={"/":async()=>`\n    ${(await s("all")).map(e=>`\n    <div class="cards__card">\n      <div class="cards__image"><img src="${e.url_image}" alt="${e.name}"></div>\n      <div class="cards__title">${e.name}</div>\n      <div class="cards__price">$ ${e.price}</div>\n      <a class="cards__add" href="#"> <i class="cards__addicon fas fa-cart-plus"></i>  </a> \n    </div>`).join("")}\n  `,"/search":async()=>{const e=c();return`\n    ${(await s("/search?"+e)).map(e=>`\n    <div class="cards__card">\n      <div class="cards__image"><img src="${e.url_image}" alt="${e.name}"></div>\n      <div class="cards__title">${e.name}</div>\n      <div class="cards__price">$ ${e.price}</div>\n      <a class="cards__add" href="#"> <i class="cards__addicon fas fa-cart-plus"></i>  </a> \n    </div>`).join("")}\n  `}};var l=async()=>{const e=document.getElementById("header"),a=document.getElementById("cards");e.innerHTML=await n();let r=c(),t=await i(r),s=d[t]?d[t]:o;a.innerHTML=await s()};window.addEventListener("load",l),window.addEventListener("hashchange",l)}]);