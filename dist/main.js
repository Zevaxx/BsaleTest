/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n\nwindow.addEventListener('load', _routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\nwindow.addEventListener('hashchange', _routes__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/pages/Error404.js":
/*!*******************************!*\
  !*** ./src/pages/Error404.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Error404 = () => {\n  const view = `\n    <div class=\"Error404\">\n      <h2>Error 404</h2>\n    </div>\n  `;\n  return view;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Error404);\n\n//# sourceURL=webpack:///./src/pages/Error404.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.js\");\n\n\nconst Home = async () => {\n  const productos = await Object(_utils_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('all');\n  const view = `\n    ${productos.map(producto => `\n    <div class=\"cards__card\">\n      <div class=\"cards__image\"><img src=\"${producto.url_image}\" alt=\"${producto.name}\"></div>\n      <div class=\"cards__title\">${producto.name}</div>\n      <div class=\"cards__price\">$ ${producto.price}</div>\n      <a class=\"cards__add\" href=\"#\"> <i class=\"cards__addicon fas fa-cart-plus\"></i>  </a> \n    </div>`).join('')}\n  `;\n  return view;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Home);\n\n//# sourceURL=webpack:///./src/pages/Home.js?");

/***/ }),

/***/ "./src/pages/Search.js":
/*!*****************************!*\
  !*** ./src/pages/Search.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utils_getData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getData */ \"./src/utils/getData.js\");\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n\n\n\nconst Search = async () => {\n  const busqueda = Object(_utils_getHash__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  const productos = await Object(_utils_getData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(`/search?${busqueda}`);\n  debugger;\n  const view = `\n    ${productos.map(producto => `\n    <div class=\"cards__card\">\n      <div class=\"cards__image\"><img src=\"${producto.url_image}\" alt=\"${producto.name}\"></div>\n      <div class=\"cards__title\">${producto.name}</div>\n      <div class=\"cards__price\">$ ${producto.price}</div>\n      <a class=\"cards__add\" href=\"#\"> <i class=\"cards__addicon fas fa-cart-plus\"></i>  </a> \n    </div>`).join('')}\n  `;\n  return view;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\n//# sourceURL=webpack:///./src/pages/Search.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _templates_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../templates/Header */ \"./src/templates/Header.js\");\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/resolveRoutes */ \"./src/utils/resolveRoutes.js\");\n/* harmony import */ var _pages_Error404__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/Error404 */ \"./src/pages/Error404.js\");\n/* harmony import */ var _pages_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Search */ \"./src/pages/Search.js\");\n\n\n\n\n\n\nconst routes = {\n  '/': _pages_Home__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  '/search': _pages_Search__WEBPACK_IMPORTED_MODULE_5__[\"default\"]\n};\n\nconst router = async () => {\n  const header =  false || document.getElementById('header');\n  const content =  false || document.getElementById('cards');\n  header.innerHTML = await Object(_templates_Header__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  let hash = Object(_utils_getHash__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  let route = await Object(_utils_resolveRoutes__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(hash);\n  let render = routes[route] ? routes[route] : _pages_Error404__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n  content.innerHTML = await render();\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (router);\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/templates/Header.js":
/*!*********************************!*\
  !*** ./src/templates/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst Header = () => {\n  const view = `\n  <h1 class=\"header__title\">Bsale Test</h1>\n    <form method=\"get\" class=\"header__form\" >\n      <input class=\"header__input\" type=\"text\" placeholder=\"Tienda\" name=\"search\">\n      <button type=\"submit\" class=\"header__searchbutton \">\n          <i class=\"header__searchicon fas fa-search\"></i>\n      </button>    \n    </form>\n  <a class=\"header__cartbutton\" href=\"#\"><i class=\"header__carticon fas fa-shopping-cart\"></i></a> \n  `;\n  return view;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/templates/Header.js?");

/***/ }),

/***/ "./src/utils/getData.js":
/*!******************************!*\
  !*** ./src/utils/getData.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst API = 'https://bsaletestzevaxx.herokuapp.com/api/productos/';\n\nconst getData = async id => {\n  const apiURl = id ? `${API}${id}` : API;\n\n  try {\n    const response = await fetch(apiURl);\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.log('Fetch Error', error);\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getData);\n\n//# sourceURL=webpack:///./src/utils/getData.js?");

/***/ }),

/***/ "./src/utils/getHash.js":
/*!******************************!*\
  !*** ./src/utils/getHash.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst getHash = () => {\n  if (location.hash) {\n    const hash = location.hash.slice(1).toLocaleLowerCase().split('/')[1] || '/';\n    return hash;\n  } else if (location.search) {\n    const hash = location.search.slice(1).toLocaleLowerCase() || '/';\n    return hash;\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (getHash);\n\n//# sourceURL=webpack:///./src/utils/getHash.js?");

/***/ }),

/***/ "./src/utils/resolveRoutes.js":
/*!************************************!*\
  !*** ./src/utils/resolveRoutes.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst resolveRoutes = route => {\n  if (route === '/') {\n    let validRoute = '/';\n    return validRoute;\n  } else if (route && route.substring(0, 7) == 'search=') {\n    let validRoute = '/search';\n    return validRoute;\n  }\n\n  return `/`;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (resolveRoutes);\n\n//# sourceURL=webpack:///./src/utils/resolveRoutes.js?");

/***/ })

/******/ });