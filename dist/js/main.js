/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/common/header/header.js":
/*!****************************************************!*\
  !*** ./src/blocks/modules/common/header/header.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {$(document).ready(function () {
  $('.burger').on('click', function () {
    $(this).toggleClass('open');
    $('.header__main').toggleClass('open');
    $('header').toggleClass('open'); // var innerHeaderHeight = $('header').innerHeight()
    // $('.mobile-menu').toggleClass('open').css({
    //     'top': innerHeaderHeight+'px'
    // })

    $('html').toggleClass('hidden');
  }); //закрыть при клике вне

  $(document).on('click', function (e) {
    var div = $(".burger, .header__main"); //класс элемента вне которого клик

    if (!div.is(e.target) && div.has(e.target).length === 0) {
      //закрыть popup
      if ($('.burger').hasClass('open')) {
        $('.burger').trigger('click');
      }
    }
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ }),

/***/ "./src/blocks/modules/home/home-clients/home-clients.js":
/*!**************************************************************!*\
  !*** ./src/blocks/modules/home/home-clients/home-clients.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_0__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_0__["Navigation"]]); //data-swiper="clients"

var clients = new swiper__WEBPACK_IMPORTED_MODULE_0__["default"]('[data-swiper="clients"]', {
  slidesPerView: 8,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: '[data-swiper-next="clients"]',
    prevEl: '[data-swiper-prev="clients"]'
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
      slidesPerColumn: 3,
      slidesPerColumnFill: 'row'
    },
    580: {
      slidesPerView: 4,
      slidesPerColumn: 2,
      slidesPerColumnFill: 'row'
    },
    940: {
      slidesPerView: 6
    },
    1025: {
      slidesPerView: 8
    }
  }
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

//import "%components%/tabs/tabs";
//import "%components%/form/form";
//import "%components%/select/select";
//// import "%components%/mobile-menu/mobile-menu"; 
//import "%components%/video/video";

/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_common_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/common/header/header */ "./src/blocks/modules/common/header/header.js");
/* harmony import */ var _modules_common_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_common_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_home_home_clients_home_clients_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/home/home-clients/home-clients.js */ "./src/blocks/modules/home/home-clients/home-clients.js");
 // import "%modules%/main-menu/main-menu";
// import "%modules%/video/video";
// import "%modules%/catalog/minicard/minicard";
// import "%modules%/card/card-slider/card-slider";
// import "%modules%/card/card-advantages/card-advantages";
// import "%modules%/card/card-similar/card-similar";
// import "%modules%/card/card-mortgage/card-mortgage";
// import "%modules%/jk/jk-mini-gallery/jk-mini-gallery";
// import "%modules%/catalog/footer-link/footer-link.js";



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/svg4everybody/dist/svg4everybody.js */ "./node_modules/svg4everybody/dist/svg4everybody.js");
/* harmony import */ var _node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ "./node_modules/swiper/swiper.esm.js");
/* harmony import */ var _fancyapps_ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fancyapps/ui */ "./node_modules/@fancyapps/ui/dist/fancybox.esm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






/* custom select */

var customSelect = /*#__PURE__*/function () {
  function customSelect(option) {
    _classCallCheck(this, customSelect);

    this.selector = option.selector;
    this.selectAll = document.querySelectorAll(this.selector);
  }

  _createClass(customSelect, [{
    key: "init",
    value: function init() {
      this.renderTemplate();
      this.clickEventOut();
    }
  }, {
    key: "renderTemplate",
    value: function renderTemplate() {
      var _this = this;

      this.selectAll.forEach(function (item, index) {
        item.classList.add('select-hidden');
        var wrapper = document.createElement('div');
        wrapper.classList.add('af-select');
        wrapper.innerHTML = item.outerHTML;
        item.parentNode.replaceChild(wrapper, item);
      });
      document.querySelectorAll('.af-select').forEach(function (item, index) {
        var styledSelect = document.createElement('div');
        styledSelect.classList.add('select-styled');
        styledSelect.innerHTML = '<span>Выберите</span>';
        var styledOptions = document.createElement('ul');
        styledOptions.classList.add('select-options');
        item.appendChild(styledSelect);
        item.appendChild(styledOptions);

        _this.clickEventOpenSelect(item); //====


        item.querySelectorAll('select > option').forEach(function (item, index) {
          if (index == 0) styledSelect.innerHTML = '<span>' + item.innerText + '</span>';
          var li = document.createElement('li');
          li.innerHTML = item.innerText;
          li.setAttribute('rel', item.value);
          styledOptions.appendChild(li);

          _this.clickEventListItem(li);
        });
      });
    }
  }, {
    key: "openSelect",
    value: function openSelect(elem) {
      elem.style.width = elem.offsetWidth + 'px';
      elem.querySelector('.select-styled').classList.toggle('active');
      elem.querySelector('.select-options').classList.toggle('active');
      document.querySelector('body').classList.add('af-select-open');
    }
  }, {
    key: "closeSelect",
    value: function closeSelect() {
      if (!document.querySelector('.select-styled.active')) return false;
      document.querySelector('.select-styled.active').classList.remove('active');
      document.querySelector('.select-options.active').classList.remove('active');
      document.querySelector('body').classList.remove('af-select-open');
    }
  }, {
    key: "clickEventOut",
    value: function clickEventOut() {
      var _this = this;

      document.addEventListener('click', function () {
        _this.closeSelect();
      });
    }
  }, {
    key: "clickEventListItem",
    value: function clickEventListItem(elem) {
      var parentElem = elem.parentNode.parentNode.parentNode;

      var _this = this;

      elem.addEventListener('click', function (event) {
        event.stopPropagation();
        event.preventDefault();
        if (parentElem.querySelector('.select-options li.active')) parentElem.querySelector('.select-options li.active').classList.remove('active');
        this.classList.add('active');
        parentElem.querySelector('.select-styled span').innerHTML = this.innerHTML;
        parentElem.querySelector('select').value = this.getAttribute('rel');

        _this.closeSelect();
      });
    }
  }, {
    key: "clickEventOpenSelect",
    value: function clickEventOpenSelect(elem) {
      var _this = this;

      elem.addEventListener('click', function (event) {
        event.stopPropagation();
        event.preventDefault();

        _this.openSelect(this);
      });
    }
  }]);

  return customSelect;
}();

_node_modules_svg4everybody_dist_svg4everybody_js__WEBPACK_IMPORTED_MODULE_2___default()();
swiper__WEBPACK_IMPORTED_MODULE_3__["default"].use([swiper__WEBPACK_IMPORTED_MODULE_3__["Pagination"], swiper__WEBPACK_IMPORTED_MODULE_3__["Navigation"]]);
document.addEventListener("DOMContentLoaded", function () {
  /* ===================================================== */

  /* ===================================================== */
  //data-swiper="homenews"
  var homenews = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('[data-swiper="homenews"]', {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: '[data-swiper-next="homenews"]',
      prevEl: '[data-swiper-prev="homenews"]'
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      580: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      1025: {
        slidesPerView: 3
      }
    }
  }); //data-swiper="hometournay"

  var hometournay = new swiper__WEBPACK_IMPORTED_MODULE_3__["default"]('[data-swiper="hometournay"]', {
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    navigation: {
      nextEl: '[data-swiper-next="hometournay"]',
      prevEl: '[data-swiper-prev="hometournay"]'
    },
    breakpoints: {
      0: {
        slidesPerView: 1
      },
      580: {
        slidesPerView: 1.5,
        spaceBetween: 10
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 25
      },
      1025: {
        slidesPerView: 3
      }
    }
  });
  var selectCustom = new customSelect({
    selector: 'select'
  });
  selectCustom.init();
}); //ready

/***/ })

/******/ });
//# sourceMappingURL=main.js.map