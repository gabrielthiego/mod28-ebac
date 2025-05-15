/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./data/usuarios.json":
/*!****************************!*\
  !*** ./data/usuarios.json ***!
  \****************************/
/***/ ((module) => {

eval("module.exports = /*#__PURE__*/JSON.parse('{\"usuarioOK\":{\"user\":\"admin\",\"pass\":\"admin\"}}');\n\n//# sourceURL=webpack://k6-ebac-test/./data/usuarios.json?");

/***/ }),

/***/ "./request/login.request.js":
/*!**********************************!*\
  !*** ./request/login.request.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nvar _http = _interopRequireDefault(__webpack_require__(/*! k6/http */ \"k6/http\"));\nvar _utils = _interopRequireWildcard(__webpack_require__(/*! ../utils/utils */ \"./utils/utils.js\"));\nvar Utils = _utils;\nfunction _interopRequireWildcard(e, t) { if (\"function\" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, \"default\": e }; if (null === e || \"object\" != _typeof(e) && \"function\" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) \"default\" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { \"default\": e }; }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _classPrivateFieldInitSpec(e, t, a) { _checkPrivateRedeclaration(e, t), t.set(e, a); }\nfunction _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); }\nfunction _classPrivateFieldGet(s, a) { return s.get(_assertClassBrand(s, a)); }\nfunction _classPrivateFieldSet(s, a, r) { return s.set(_assertClassBrand(s, a), r), r; }\nfunction _assertClassBrand(e, t, n) { if (\"function\" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError(\"Private element is not present on this object\"); }\nvar _token = /*#__PURE__*/new WeakMap();\nvar Login = exports[\"default\"] = /*#__PURE__*/function () {\n  function Login() {\n    _classCallCheck(this, Login);\n    _classPrivateFieldInitSpec(this, _token, void 0);\n  }\n  return _createClass(Login, [{\n    key: \"access\",\n    value: function access(user, pass) {\n      var response = _http[\"default\"].post(\"\".concat(Utils.getBaseUrl(), \"/login\"), JSON.stringify({\n        username: user,\n        password: pass\n      }), {\n        headers: {\n          \"Content-Type\": \"application/json\",\n          \"Accept\": \"application/json\"\n        }\n      });\n      _classPrivateFieldSet(_token, this, response.json('accessToken'));\n      (0, _utils.check)(response, {\n        \"is status 201\": function is_status_201(r) {\n          return r.status === 201;\n        }\n      });\n    }\n  }, {\n    key: \"getToken\",\n    value: function getToken() {\n      return _classPrivateFieldGet(_token, this);\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://k6-ebac-test/./request/login.request.js?");

/***/ }),

/***/ "./simulations/user.test.js":
/*!**********************************!*\
  !*** ./simulations/user.test.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = _default;\nvar _http = _interopRequireDefault(__webpack_require__(/*! k6/http */ \"k6/http\"));\nvar _k = __webpack_require__(/*! k6 */ \"k6\");\nvar _login = _interopRequireDefault(__webpack_require__(/*! ../request/login.request */ \"./request/login.request.js\"));\nvar _usuarios = _interopRequireDefault(__webpack_require__(/*! ../data/usuarios.json */ \"./data/usuarios.json\"));\nfunction _interopRequireDefault(e) { return e && e.__esModule ? e : { \"default\": e }; }\nfunction _default() {\n  var loginInstance = new _login[\"default\"](); // Renomeado para evitar conflito com a importação\n\n  (0, _k.group)('login and get token', function () {\n    loginInstance.access(_usuarios[\"default\"].usuarioOK.user, _usuarios[\"default\"].usuarioOK.pass);\n  });\n  (0, _k.group)('list users', function () {\n    // Implemente o teste para listar usuários aqui\n  });\n}\n\n//# sourceURL=webpack://k6-ebac-test/./simulations/user.test.js?");

/***/ }),

/***/ "./utils/utils.js":
/*!************************!*\
  !*** ./utils/utils.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\n\nObject.defineProperty(exports, \"__esModule\", ({\n  value: true\n}));\nexports[\"default\"] = void 0;\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == _typeof(i) ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != _typeof(i)) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nvar Utils = exports[\"default\"] = /*#__PURE__*/function () {\n  function Utils() {\n    _classCallCheck(this, Utils);\n  }\n  return _createClass(Utils, null, [{\n    key: \"getBaseUrl\",\n    value: function getBaseUrl() {\n      return 'http://http://localhost:3000/api';\n    }\n  }]);\n}();\n\n//# sourceURL=webpack://k6-ebac-test/./utils/utils.js?");

/***/ }),

/***/ "k6":
/*!*********************!*\
  !*** external "k6" ***!
  \*********************/
/***/ ((module) => {

module.exports = k6;

/***/ }),

/***/ "k6/http":
/*!**************************!*\
  !*** external "k6/http" ***!
  \**************************/
/***/ ((module) => {

module.exports = k6/http;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./simulations/user.test.js");
/******/ 	
/******/ })()
;