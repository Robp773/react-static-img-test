(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 18);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _reach_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reach_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Link"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "b", function() { return _reach_router__WEBPACK_IMPORTED_MODULE_0__["Router"]; });


void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\src\\components\\Router.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\src\\components\\Router.js");
  }
}();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-static");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@reach/router");

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "react-static"
var external_react_static_ = __webpack_require__(2);

// EXTERNAL MODULE: C:/Users/robpe/web-dev/statictest/src/components/Router.js
var Router = __webpack_require__(1);

// CONCATENATED MODULE: C:/Users/robpe/web-dev/statictest/src/containers/Dynamic.js
var _jsxFileName = "C:\\Users\\robpe\\web-dev\\statictest\\src\\containers\\Dynamic.js";

/* harmony default export */ var Dynamic = (function () {
  return external_react_default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, "This is a dynamic page! It will not be statically exported, but is available at runtime");
});
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\src\\containers\\Dynamic.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\src\\containers\\Dynamic.js");
  }
}();
// EXTERNAL MODULE: C:/Users/robpe/web-dev/statictest/src/app.css
var app = __webpack_require__(34);

// CONCATENATED MODULE: C:/Users/robpe/web-dev/statictest/src/App.js
var App_jsxFileName = "C:\\Users\\robpe\\web-dev\\statictest\\src\\App.js";

 //



 // Any routes that start with 'dynamic' will be treated as non-static routes

Object(external_react_static_["addPrefetchExcludes"])(['dynamic']);

function App() {
  return external_react_default.a.createElement(external_react_static_["Root"], {
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, external_react_default.a.createElement("nav", {
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/",
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, "Home"), external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/about",
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "About"), external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/blog",
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, "Blog"), external_react_default.a.createElement(Router["a" /* Link */], {
    to: "/dynamic",
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, "Dynamic")), external_react_default.a.createElement("div", {
    className: "content",
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, external_react_default.a.createElement(external_react_default.a.Suspense, {
    fallback: external_react_default.a.createElement("em", {
      __source: {
        fileName: App_jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, "Loading..."),
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, external_react_default.a.createElement(Router["b" /* Router */], {
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, external_react_default.a.createElement(Dynamic, {
    path: "dynamic",
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 24
    },
    __self: this
  }), external_react_default.a.createElement(external_react_static_["Routes"], {
    path: "*",
    __source: {
      fileName: App_jsxFileName,
      lineNumber: 25
    },
    __self: this
  })))));
}

/* harmony default export */ var src_App = __webpack_exports__["a"] = (App);
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\src\\App.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\src\\App.js");
  }
}();

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\node_modules\\webpack\\buildin\\module.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\node_modules\\webpack\\buildin\\module.js");
  }
}();

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_robpe_web_dev_statictest_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var C_Users_robpe_web_dev_statictest_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_robpe_web_dev_statictest_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports
 // Plugins

var plugins = [{
  location: "C:/Users/robpe/web-dev/statictest/node_modules/react-static-plugin-source-filesystem",
  plugins: [],
  hooks: {}
}, {
  location: "C:/Users/robpe/web-dev/statictest/node_modules/react-static-plugin-reach-router",
  plugins: [],
  hooks: C_Users_robpe_web_dev_statictest_node_modules_react_static_plugin_reach_router_browser_api_js__WEBPACK_IMPORTED_MODULE_0___default()({})
}, {
  location: "C:/Users/robpe/web-dev/statictest/node_modules/react-static-plugin-sitemap/dist",
  plugins: [],
  hooks: {}
}, {
  location: "C:/Users/robpe/web-dev/statictest",
  plugins: [],
  hooks: {}
}]; // Export em!

/* harmony default export */ __webpack_exports__["default"] = (plugins);
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\artifacts\\react-static-browser-plugins.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\artifacts\\react-static-browser-plugins.js");
  }
}();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\robpe\\web-dev\\statictest\\node_modules\\react-static\\lib\\browser");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notFoundTemplate", function() { return notFoundTemplate; });
// Template Map
/* harmony default export */ __webpack_exports__["default"] = ({
  'C:/Users/robpe/web-dev/statictest/src/pages/404.js': __webpack_require__(21)["default"],
  'C:/Users/robpe/web-dev/statictest/src/pages/about.js': __webpack_require__(22)["default"],
  'C:/Users/robpe/web-dev/statictest/src/pages/blog.js': __webpack_require__(23)["default"],
  'C:/Users/robpe/web-dev/statictest/src/pages/index.js': __webpack_require__(24)["default"],
  'C:/Users/robpe/web-dev/statictest/src/containers/Post': __webpack_require__(25)["default"]
});
var notFoundTemplate = 'C:/Users/robpe/web-dev/statictest/src/pages/404.js';
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\artifacts\\react-static-templates.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\artifacts\\react-static-templates.js");
  }
}();

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(__webpack_require__(0));

var _reactStatic = __webpack_require__(2);

var _router = __webpack_require__(3);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var _default = function _default(_ref) {
  var _ref$RouterProps = _ref.RouterProps,
      userRouterProps = _ref$RouterProps === void 0 ? {} : _ref$RouterProps;
  return {
    Root: function Root(PreviousRoot) {
      return function (_ref2) {
        var children = _ref2.children,
            rest = _objectWithoutProperties(_ref2, ["children"]);

        var basepath = (0, _reactStatic.useBasepath)();
        var staticInfo = (0, _reactStatic.useStaticInfo)();

        var RouteHandler = function RouteHandler(props) {
          return _react["default"].createElement(PreviousRoot, _extends({}, rest, props), children);
        };

        var renderedChildren = // Place a top-level router inside the root
        // This will give proper context to Link and other reach components
        _react["default"].createElement(_router.Router, _extends({}, basepath ? {
          basepath: basepath
        } : {}, userRouterProps), _react["default"].createElement(RouteHandler, {
          path: "/*"
        })); // If we're in SSR, use a manual server location


        return typeof document === 'undefined' ? _react["default"].createElement(_router.ServerLocation, {
          url: (0, _reactStatic.makePathAbsolute)("".concat(basepath, "/").concat(staticInfo.path))
        }, renderedChildren) : renderedChildren;
      };
    },
    Routes: function Routes(PreviousRoutes) {
      return function (props) {
        return (// Wrap Routes in location
          _react["default"].createElement(_router.Location, null, function (location) {
            return _react["default"].createElement(PreviousRoutes, _extends({
              path: "/*"
            }, props, {
              location: location
            }));
          })
        );
      };
    }
  };
};

exports["default"] = _default;
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\node_modules\\react-static-plugin-reach-router\\browser.api.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\node_modules\\react-static-plugin-reach-router\\browser.api.js");
  }
}();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "8f3faed436eb02a8c167557ea79a85ee.png";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f0f31728908dd235c231201c2ee653a9.png";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "2d840c83ccc8f8bfe7286c7d2ed12dbf.jpg";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "f8f9d0d13415124ad2f2ff7c2398b252.png";

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjBQoCHBOaFGR1AAADOElEQVRo3u2ZTUhUURSAv/dmnPFvHBkVLA1/wCwLTLTQTRCRhG6KoEWrNm2jIOg/WgS1aVO0iJZtRFoUCZpGi6I2QY1CGqmp9K/GNI4zzrNxXpvB9N074s/7yfDM7tzz7vnmnHPvPe8+gDwuESSGbuMvRpCL+ADy6SFMgqStAEkShOnG7+I8R/ChomCnKKh4KCKp8I5qXLY6/ytzDCjE8TrkHnQ0Bd0x9wCozrrfAPgHANxSbZIpRpkgjpsAlRRYByoDSPCZZ3TQR4hMttFKC5V4rEIQt8kxrpK/wELhBEMkLNqUBcVv7rPZAKlyj5A1AGJuv9HLV6EmuvhuTQJEgBDjErtRonYBeKRnQ7ZVB5YIUMJWydpoIGAXQC6NHDDoKjhMsTUAsmU4TQ+HFqz7Jh4Rtqo3kh/HUT7SzwBhMtnODqrJsapjStcPJIkTQsNNwDrnSwHYJu61T7FI4kwwThSdLPIpJXs1AEO8Ysag208ZGQB84DXThtF9lONhgj76GF4AUEYlTVQsdZbKAPq4zqRBV0hxCuAtN/lkGL3DJkbopIM3hBboXZTTQjN78aWrIxmAxk8BQJuvFY2QZHSAdtr4YtDPMcxtXnCaVgJyBHNqYJyndDKRZjTIFTI5SJ5ZAOI/eUyQ8BJPjHGLEvakkrhIVt5qyQL5fEn3AC/p4odswJxeT0+hufGQkWbODgZle87KU6Ck3Rf97GQLEfoZkbjq5T27yV07gFxUjnOKGlzAJG1cEwKuM8A3qsQHVy6yCJzkXMo9FHCUC5KZB2W9ljk1UMMxKuZ7JoVCGmkQrCaFHXRVALIaaKZ0UTJViqgXrCJoVkWgikyDJosSwSpqHUCO0LJ6KRSsEsyZA6AsYxaX5CCWdh7m7IQyq2XO7Pjr+coBdHObuHUYAccBNlKA0xEw+UVmXUZgowgdBjA5BbKmtJbLxAy6XfNXV/WcZcowWic0JF7quGHQ5VArOpPdD2hMC1ofntRBHCdG0jCai9dwTOvMEhF85Yo3cI5fUKzDIvz/AOIOVoFOXGVYqGn7JMmQygOiDsVAJ0o7+Ol26OP1L56Q50LjIbMU4cdt2wdsnRn6ucsZIn8AWKkNt586dk8AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDUtMTBUMDA6Mjg6MTkrMDI6MDDVvi8FAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA1LTEwVDAwOjI4OjE5KzAyOjAwpOOXuQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
__webpack_require__(20);
module.exports = __webpack_require__(26);


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var plugins = __webpack_require__(7)["default"];

var _require = __webpack_require__(8),
    registerPlugins = _require.registerPlugins;

registerPlugins(plugins);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("C:\\Users\\robpe\\web-dev\\statictest\\artifacts\\react-static-browser-plugins.js", function () {
    registerPlugins(__webpack_require__(7)["default"]);
  });
}

void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\node_modules\\react-static\\lib\\bootstrapPlugins.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\node_modules\\react-static\\lib\\bootstrapPlugins.js");
  }
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {
/* eslint-disable import/no-dynamic-require */

var _require = __webpack_require__(8),
    registerTemplates = _require.registerTemplates;

var _require2 = __webpack_require__(9),
    templates = _require2["default"],
    notFoundTemplate = _require2.notFoundTemplate;

registerTemplates(templates, notFoundTemplate);

if (typeof document !== 'undefined' && module && module.hot) {
  module.hot.accept("C:\\Users\\robpe\\web-dev\\statictest\\artifacts\\react-static-templates.js", function () {
    var _require3 = __webpack_require__(9),
        templates = _require3["default"],
        notFoundTemplate = _require3.notFoundTemplate;

    registerTemplates(templates, notFoundTemplate);
  });
}

void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\node_modules\\react-static\\lib\\bootstrapTemplates.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\node_modules\\react-static\\lib\\bootstrapTemplates.js");
  }
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(6)(module)))

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\robpe\\web-dev\\statictest\\src\\pages\\404.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "404 - Oh no's! We couldn't find that page :("));
});
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\src\\pages\\404.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\src\\pages\\404.js");
  }
}();

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "C:\\Users\\robpe\\web-dev\\statictest\\src\\pages\\about.js";

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, "React Static is a progressive static site generator for React."));
});
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\src\\pages\\about.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\src\\pages\\about.js");
  }
}();

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Blog; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
var _jsxFileName = "C:\\Users\\robpe\\web-dev\\statictest\\src\\pages\\blog.js";

 //


function Blog() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      posts = _useRouteData.posts;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "It's blog time."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#bottom",
    id: "top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Scroll to bottom!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), "All Posts:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }, posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: post.id,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
      to: "/blog/post/".concat(post.id, "/"),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, post.title));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#top",
    id: "bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, "Scroll to top!"));
}
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\src\\pages\\blog.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\src\\pages\\blog.js");
  }
}();

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_img_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _images_img_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_img_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_img2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _images_img2_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_img2_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_vsmall_logo_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);
/* harmony import */ var _images_vsmall_logo_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_vsmall_logo_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_transparent_logo_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(14);
/* harmony import */ var _images_transparent_logo_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_transparent_logo_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_linkedin_logo_large_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(15);
/* harmony import */ var _images_linkedin_logo_large_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_linkedin_logo_large_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_linkedin_logo_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(16);
/* harmony import */ var _images_linkedin_logo_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_linkedin_logo_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "C:\\Users\\robpe\\web-dev\\statictest\\src\\pages\\index.js";







/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      textAlign: "center"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Welcome to React-Static"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, "Missing"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img",
    src: _images_img_png__WEBPACK_IMPORTED_MODULE_1___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img",
    src: _images_img2_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img",
    src: _images_vsmall_logo_jpg__WEBPACK_IMPORTED_MODULE_3___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img",
    src: _images_linkedin_logo_large_png__WEBPACK_IMPORTED_MODULE_5___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Working"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img",
    src: _images_transparent_logo_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "img",
    src: _images_linkedin_logo_png__WEBPACK_IMPORTED_MODULE_6___default.a,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  })));
});
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\src\\pages\\index.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\src\\pages\\index.js");
  }
}();

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Post; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var react_static__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_static__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var components_Router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
var _jsxFileName = "C:\\Users\\robpe\\web-dev\\statictest\\src\\containers\\Post.js";

 //


function Post() {
  var _useRouteData = Object(react_static__WEBPACK_IMPORTED_MODULE_1__["useRouteData"])(),
      post = _useRouteData.post;

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(components_Router__WEBPACK_IMPORTED_MODULE_2__[/* Link */ "a"], {
    to: "/blog/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, '<', " Back"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, post.title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, post.body));
}
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\src\\containers\\Post.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\src\\containers\\Post.js");
  }
}();

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(27);

var _interopRequireDefault = __webpack_require__(28);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(29));

var _objectWithoutProperties2 = _interopRequireDefault(__webpack_require__(30));

var React = _interopRequireWildcard(__webpack_require__(0));

var _useStaticInfo = __webpack_require__(31);
/* eslint-disable import/no-dynamic-require */


var OriginalSuspense = React.Suspense;

function Suspense(_ref) {
  var key = _ref.key,
      children = _ref.children,
      rest = (0, _objectWithoutProperties2["default"])(_ref, ["key", "children"]);
  return typeof document !== 'undefined' ? React.createElement(OriginalSuspense, (0, _extends2["default"])({
    key: key
  }, rest), children) : React.createElement(React.Fragment, {
    key: key
  }, children);
} // Override the suspense module to be our own


React.Suspense = Suspense;
React["default"].Suspense = Suspense;

var App = __webpack_require__(32)["default"];

var _default = function _default(staticInfo) {
  return function (props) {
    return React.createElement(_useStaticInfo.staticInfoContext.Provider, {
      value: staticInfo
    }, React.createElement(App, props));
  };
};

exports["default"] = _default;
void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\node_modules\\react-static\\lib\\bootstrapApp.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\node_modules\\react-static\\lib\\bootstrapApp.js");
  }
}();

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireWildcard");

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/interopRequireDefault");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/objectWithoutProperties");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("C:\\Users\\robpe\\web-dev\\statictest\\node_modules\\react-static\\lib\\browser\\hooks\\useStaticInfo");

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(17);
/* harmony import */ var react_hot_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
var _jsxFileName = "C:\\Users\\robpe\\web-dev\\statictest\\src\\index.js";


 // Your top level component

 // Export your top level component as JSX (for static rendering)

/* harmony default export */ __webpack_exports__["default"] = (_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Render your app

if (typeof document !== 'undefined') {
  var target = document.getElementById('root');
  var renderMethod = target.hasChildNodes() ? react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.hydrate : react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render;

  var render = function render(Comp) {
    renderMethod(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_hot_loader__WEBPACK_IMPORTED_MODULE_2__["AppContainer"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Comp, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    })), target);
  }; // Render!


  render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]); // Hot Module Replacement

  if (module && module.hot) {
    module.hot.accept('./App', function () {
      render(_App__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"]);
    });
  }
}

void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\src\\index.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\src\\index.js");
  }
}();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(33)(module)))

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = function (originalModule) {
  if (!originalModule.webpackPolyfill) {
    var module = Object.create(originalModule); // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function get() {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function get() {
        return module.i;
      }
    });
    Object.defineProperty(module, "exports", {
      enumerable: true
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\node_modules\\webpack\\buildin\\harmony-module.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\node_modules\\webpack\\buildin\\harmony-module.js");
  }
}();

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(35)(false);
// Module
exports.push([module.i, "* {\n  scroll-behavior: smooth;\n}\n\nbody {\n  font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',\n    Helvetica, Arial, 'Lucida Grande', sans-serif;\n  font-weight: 300;\n  font-size: 16px;\n  margin: 0;\n  padding: 0;\n}\n\na {\n  text-decoration: none;\n  color: #108db8;\n  font-weight: bold;\n}\n\nimg {\n  max-width: 100%;\n}\n\nnav {\n  width: 100%;\n  background: #108db8;\n}\n\nnav a {\n  color: white;\n  padding: 1rem;\n  display: inline-block;\n}\n\n.content {\n  padding: 1rem;\n}\n\n.img{\n  max-width: 50vw;\n}\n\n\n\n", ""]);



/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

void function register() {
  /* react-hot-loader/webpack */
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal["default"] : undefined;

  if (!reactHotLoader) {
    return;
  }
  /* eslint-disable camelcase, no-undef */


  var webpackExports = typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__ : exports;
  /* eslint-enable camelcase, no-undef */

  if (!webpackExports) {
    return;
  }

  if (typeof webpackExports === 'function') {
    reactHotLoader.register(webpackExports, 'module.exports', "C:\\Users\\robpe\\web-dev\\statictest\\node_modules\\css-loader\\dist\\runtime\\api.js");
    return;
  }
  /* eslint-disable no-restricted-syntax */


  for (var key in webpackExports) {
    /* eslint-enable no-restricted-syntax */
    if (!Object.prototype.hasOwnProperty.call(webpackExports, key)) {
      continue;
    }

    var namedExport = void 0;

    try {
      namedExport = webpackExports[key];
    } catch (err) {
      continue;
    }

    reactHotLoader.register(namedExport, key, "C:\\Users\\robpe\\web-dev\\statictest\\node_modules\\css-loader\\dist\\runtime\\api.js");
  }
}();

/***/ })
/******/ ]);
});