!function(a){var n={};function e(r){if(n[r])return n[r].exports;var s=n[r]={i:r,l:!1,exports:{}};return a[r].call(s.exports,s,s.exports,e),s.l=!0,s.exports}e.m=a,e.c=n,e.d=function(a,n,r){e.o(a,n)||Object.defineProperty(a,n,{enumerable:!0,get:r})},e.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},e.t=function(a,n){if(1&n&&(a=e(a)),8&n)return a;if(4&n&&"object"==typeof a&&a&&a.__esModule)return a;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:a}),2&n&&"string"!=typeof a)for(var s in a)e.d(r,s,function(n){return a[n]}.bind(null,s));return r},e.n=function(a){var n=a&&a.__esModule?function(){return a.default}:function(){return a};return e.d(n,"a",n),n},e.o=function(a,n){return Object.prototype.hasOwnProperty.call(a,n)},e.p="",e(e.s=0)}([function(a,n,e){"use strict";e.r(n);const r="https://bsaleapitest.herokuapp.com/api/";var s=async a=>{const n=a?`${r}${a}`:r;try{const a=await fetch(n);return await a.json()}catch(a){console.log("Fetch Error",a)}};var t=async()=>{const a=await s("productos/categorias");return`\n  <a class="header__homelink"  href=${window.location.origin}/BsaleTest><h1 class="header__title">Bsale Test</h1></a>\n \n    <form method="get" class="header__form" >\n      <input class="header__input" type="text" placeholder="Tienda" name="search">\n      \n      <button type="submit" class="header__searchbutton ">\n      <i class="header__searchicon fas fa-search"></i>\n      </button>    \n    </form>\n\n    <div class="header__form">\n      <select class="header__input" onchange="document.location.href = '?category=' + event.target.value;"\n        name="category">\n        <option> Elija una opción </option>\n      ${a.map(a=>`\n        <option value="${a.id}">${a.name}</option>\n      `).join("")}\n      </select>\n    \n    </div>\n  <a class="header__cartbutton" href="#"><i class="header__carticon fas fa-shopping-cart"></i></a> \n  `};var i=()=>{if(window.location.hash){return window.location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/"}if(window.location.search){return window.location.search.slice(1).toLocaleLowerCase()||"/"}};var c=a=>{if("/"===a){return"/"}if(a&&"search="==a.substring(0,7)){return"/search"}if(a&&"category="==a.substring(0,9)){return"/category"}return"/"};var o=()=>'\n    <div class="Error404">\n      <h2>Error 404</h2>\n    </div>\n  ';const d={"/":async()=>{const a=window.location.search.slice(1).split("&")[0].split("=")[1],n=await s("productos?page="+(a||1));return`\n    <div class="pagination"> \n    ${n.previous?`<a class="pagination__prev" href=${window.location.origin}/BsaleTest/?page=${n.previous.page}>Anterior</a>`:""}\n    ${a?`<div class="pagination__current">${a}</div>`:""}\n    ${n.next?`<a class="pagination__next" href= ${window.location.origin}/BsaleTest/?page=${n.next.page}>Siguiente</a>`:""}\n    </div>\n    ${n.results.map(a=>`\n    <div class="cards__card">\n      <div class="cards__image"><img src="${a.url_image}" alt="${a.name}"></div>\n      <div class="cards__title">${a.name}</div>\n      <div class="cards__price">$ ${a.price} ${a.discount>0?`<span class="cards__discount"> Oferta -${a.discount}%<span>`:""}</div>\n      <a class="cards__add" href="#"> <i class="cards__addicon fas fa-cart-plus"></i>  </a> \n    </div>`).join("")}\n  `},"/search":async()=>{const a=i();return`\n    ${(await s("productos/search?"+a)).map(a=>`\n    <div class="cards__card">\n      <div class="cards__image"><img src="${a.url_image}" alt="${a.name}"></div>\n      <div class="cards__title">${a.name}</div>\n      <div class="cards__price">$ ${a.price} ${a.discount>0?`<span class="cards__discount"> Oferta -${a.discount}%<span>`:""}</div>\n      <a class="cards__add" href="#"> <i class="cards__addicon fas fa-cart-plus"></i>  </a> \n    </div>`).join("")}\n  `},"/category":async()=>{const a=i();return`\n    ${(await s("productos/category?"+a)).map(a=>`\n    <div class="cards__card">\n      <div class="cards__image"><img src="${a.url_image}" alt="${a.name}"></div>\n      <div class="cards__title">${a.name}</div>\n      <div class="cards__price">$ ${a.price} ${a.discount>0?`<span class="cards__discount"> Oferta -${a.discount}%<span>`:""}</div>\n      <a class="cards__add" href="#"> <i class="cards__addicon fas fa-cart-plus"></i>  </a> \n    </div>`).join("")}\n  `}};var l=async()=>{const a=document.getElementById("header"),n=document.getElementById("cards");a.innerHTML="<h1>Cargando ...</h1>",a.innerHTML=await t();const e=i(),r=c(e),s=d[r]?d[r]:o;n.innerHTML="<h1> Cargando...</h1>",n.innerHTML=await s()};window.addEventListener("load",l),window.addEventListener("hashchange",l)}]);