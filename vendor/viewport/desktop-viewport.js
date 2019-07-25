/*! 🗜 desktop-viewport 🗜 – https://github.com/walaura/desktop-viewport */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["desktopViewport"] = factory();
	else
		root["desktopViewport"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


(function (document, promise) {
  if (true) module.exports = promise;else document.ready = promise;
})(window.document, function (chainVal) {
  'use strict';

  var d = document,
      w = window,
      loaded = /^loaded|^i|^c/.test(d.readyState),
      DOMContentLoaded = 'DOMContentLoaded',
      load = 'load';

  return new Promise(function (resolve) {
    if (loaded) return resolve(chainVal);

    function onReady() {
      resolve(chainVal);
      d.removeEventListener(DOMContentLoaded, onReady);
      w.removeEventListener(load, onReady);
    }

    d.addEventListener(DOMContentLoaded, onReady);
    w.addEventListener(load, onReady);
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	defaults: {
		container: '#container',
		viewport: 'viewport',
		autoLoad: true,
		extraOptimization: false
	}
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _config = __webpack_require__(1);

var _config2 = _interopRequireDefault(_config);

var _documentReadyPromise = __webpack_require__(0);

var _documentReadyPromise2 = _interopRequireDefault(_documentReadyPromise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function start(settings) {

	if (!settings) {
		settings = window.desktopViewportSettings ? window.desktopViewportSettings : {};
	}
	try {
		settings = _extends({}, _config2.default.defaults, settings);
	} catch (e) {
		console.error(e);
		settings = _config2.default.defaults;
	}

	if (settings.viewport === 'viewport') {
		var viewportWidth = document.querySelector('meta[name=viewport]').content.split(',').map(function (prop) {
			return prop.trim().split('=');
		}).filter(function (prop) {
			return prop[0] === 'width';
		})[0];
		if (viewportWidth && viewportWidth[1] && !isNaN(parseInt(viewportWidth[1]))) {
			settings.viewport = parseInt(viewportWidth[1]);
		} else {
			settings.viewport = 960;
		}
	}

	var $container = document.querySelector(settings.container);
	var $body = document.querySelector('body');

	var bound = false;

	var bind = function bind() {

		/*this device is already scaling natively*/
		if (document.body.clientWidth === settings.viewport) {
			var recheck = function recheck() {
				window.removeEventListener('resize', recheck, false);
				bind();
			};
			window.addEventListener('resize', recheck, false);
			return;
		}

		rescale();

		if (!bound) {
			$body.style.overflowX = 'hidden';
			if (settings.extraOptimization) {
				$body.style.willChange = 'transform';
				$body.style.height = '100%';
			}

			$container.style.transformOrigin = '0 0';

			window.addEventListener('resize', function () {
				var originalScroll = window.scrollY / exportable.scaleMultiplier;
				exportable.scaleMultiplier = window.innerWidth / settings.viewport;
				$container.style.transform = 'scale(' + exportable.scaleMultiplier + ')';
				window.scrollTo(window.scrollX, originalScroll * exportable.scaleMultiplier);
			}, true);
			window.dispatchEvent(new Event('resize'));
		}
		bound = true;
	};

	var rescale = function rescale() {
		var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : settings.viewport;

		settings.viewport = width;
		$container.style.width = settings.viewport + 'px';
		$container.style.height = 'auto';
		$container.style.position = 'static';
		var finishUp = function finishUp() {
			if (document.readyState === 'complete') {
				$container.style.height = $container.offsetHeight + 'px';
				$container.style.position = 'absolute';
				$container.style.overflow = 'hidden';
				window.dispatchEvent(new Event('resize'));
			}
		};
		finishUp();
		window.document.addEventListener('readystatechange', finishUp, false);
	};

	var exportable = {
		scaleMultiplier: window.innerWidth / settings.viewport,
		bind: bind,
		rescale: rescale
	};

	if (settings.autoLoad) {
		(0, _documentReadyPromise2.default)().then(bind);
	}

	return exportable;
}

module.exports = start;

/***/ })
/******/ ]);
});if(window.desktopViewport && typeof window.desktopViewport === 'function'){window.desktopViewport = window.desktopViewport()}
//# sourceMappingURL=desktop-viewport.js.map