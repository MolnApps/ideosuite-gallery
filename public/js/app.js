/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/GridFactory.js":
/*!*******************************!*\
  !*** ./src/js/GridFactory.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var GridFactory = /*#__PURE__*/function () {
  function GridFactory(selector) {
    _classCallCheck(this, GridFactory);
    this.gridSizerMarkup = '<div class="masonry-grid-sizer"></div><div class="masonry-gutter-sizer"></div>';
    this.selector = selector ? selector : '[data-js="grid"]';
    this.hydrators = [];
  }
  _createClass(GridFactory, [{
    key: "make",
    value: function make(projects, template) {
      this.hydrators = template.getHydrators();
      var items = this.hydrateAll(projects);
      document.querySelector(this.selector).innerHTML = this.getMarkup(items);
    }
  }, {
    key: "hydrateAll",
    value: function hydrateAll(items) {
      this.hydrators.forEach(function (hydrator) {
        items = hydrator.hydrateAll(items);
      });
      return items;
    }
  }, {
    key: "getMarkup",
    value: function getMarkup(items) {
      var markup = items.map(function (item) {
        return item.html;
      });
      markup.unshift(this.gridSizerMarkup);
      return markup.join('');
    }
  }]);
  return GridFactory;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GridFactory);

/***/ }),

/***/ "./src/js/Hydrators/ClientLogoHtmlHydrator.js":
/*!****************************************************!*\
  !*** ./src/js/Hydrators/ClientLogoHtmlHydrator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hydrator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hydrator */ "./src/js/Hydrators/Hydrator.js");
/* harmony import */ var _ReplaceTokensHydrator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReplaceTokensHydrator */ "./src/js/Hydrators/ReplaceTokensHydrator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var ClientLogoHtmlHydrator = /*#__PURE__*/function (_Hydrator) {
  _inherits(ClientLogoHtmlHydrator, _Hydrator);
  var _super = _createSuper(ClientLogoHtmlHydrator);
  function ClientLogoHtmlHydrator() {
    var _this;
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'html';
    _classCallCheck(this, ClientLogoHtmlHydrator);
    _this = _super.call(this);
    _this.key = key;
    return _this;
  }
  _createClass(ClientLogoHtmlHydrator, [{
    key: "hydrate",
    value: function hydrate(item) {
      item[this.key] = this.hasClient(item) ? this.getHtml() : this.getEmptyHtml();
      new _ReplaceTokensHydrator__WEBPACK_IMPORTED_MODULE_1__["default"](this.key).hydrate(item);
      return item;
    }
  }, {
    key: "getHtml",
    value: function getHtml() {
      return "<div class=\"logo\">\n            <img \n                src=\"{client:logo:src}\" \n                alt=\"{client:title}\" \n                width=\"{client:logo:width}\" \n                height=\"{client:logo:height}\" \n            />\n        </div>";
    }
  }, {
    key: "getEmptyHtml",
    value: function getEmptyHtml() {
      return '<div></div>';
    }
  }, {
    key: "hasClient",
    value: function hasClient(item) {
      return Object.keys(item).includes('client:title');
    }
  }]);
  return ClientLogoHtmlHydrator;
}(_Hydrator__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientLogoHtmlHydrator);

/***/ }),

/***/ "./src/js/Hydrators/ClientLogoSizeHydrator.js":
/*!****************************************************!*\
  !*** ./src/js/Hydrators/ClientLogoSizeHydrator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hydrator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hydrator */ "./src/js/Hydrators/Hydrator.js");
/* harmony import */ var _clients__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../clients */ "./src/js/clients.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


var ClientLogoSizeHydrator = /*#__PURE__*/function (_Hydrator) {
  _inherits(ClientLogoSizeHydrator, _Hydrator);
  var _super = _createSuper(ClientLogoSizeHydrator);
  function ClientLogoSizeHydrator() {
    var _this;
    var expectedArea = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    _classCallCheck(this, ClientLogoSizeHydrator);
    _this = _super.call(this);
    _this.expectedArea = expectedArea ? expectedArea : 75 * 75;
    return _this;
  }
  _createClass(ClientLogoSizeHydrator, [{
    key: "hydrate",
    value: function hydrate(item) {
      var client = this.isProject(item) ? this.findClientForProject(item) : item;
      if (!client) {
        return item;
      }
      item['client:title'] = client.title;
      item['client:logo:src'] = client.logo.src;
      item['client:logo:width'] = Math.round(Math.sqrt(this.expectedArea * client.logo.width / client.logo.height));
      item['client:logo:height'] = Math.round(Math.sqrt(this.expectedArea * client.logo.height / client.logo.width));
      return item;
    }
  }, {
    key: "findClientForProject",
    value: function findClientForProject(item) {
      return _clients__WEBPACK_IMPORTED_MODULE_1__["default"].find(function (client) {
        return client.slug == item.client;
      });
    }
  }, {
    key: "isProject",
    value: function isProject(item) {
      return Object.keys(item).includes('client');
    }
  }]);
  return ClientLogoSizeHydrator;
}(_Hydrator__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientLogoSizeHydrator);

/***/ }),

/***/ "./src/js/Hydrators/DefaultAttributesHydrator.js":
/*!*******************************************************!*\
  !*** ./src/js/Hydrators/DefaultAttributesHydrator.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hydrator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hydrator */ "./src/js/Hydrators/Hydrator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var DefaultAttributesHydrator = /*#__PURE__*/function (_Hydrator) {
  _inherits(DefaultAttributesHydrator, _Hydrator);
  var _super = _createSuper(DefaultAttributesHydrator);
  function DefaultAttributesHydrator() {
    _classCallCheck(this, DefaultAttributesHydrator);
    return _super.apply(this, arguments);
  }
  _createClass(DefaultAttributesHydrator, [{
    key: "hydrate",
    value: function hydrate(item) {
      return Object.assign(this.getDefaultAttributes(), item);
    }
  }, {
    key: "getDefaultAttributes",
    value: function getDefaultAttributes() {
      return {
        animated: ''
      };
    }
  }]);
  return DefaultAttributesHydrator;
}(_Hydrator__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DefaultAttributesHydrator);

/***/ }),

/***/ "./src/js/Hydrators/FormatHydrator.js":
/*!********************************************!*\
  !*** ./src/js/Hydrators/FormatHydrator.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hydrator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hydrator */ "./src/js/Hydrators/Hydrator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var FormatHydrator = /*#__PURE__*/function (_Hydrator) {
  _inherits(FormatHydrator, _Hydrator);
  var _super = _createSuper(FormatHydrator);
  function FormatHydrator(formats) {
    var _this;
    _classCallCheck(this, FormatHydrator);
    _this = _super.call(this);
    _this.formats = Array.isArray(formats) ? formats : [formats];
    _this.currentFormat = 0;
    return _this;
  }
  _createClass(FormatHydrator, [{
    key: "hydrate",
    value: function hydrate(item) {
      item.format = this.formats[this.currentFormat];
      this.currentFormat++;
      if (this.currentFormat == this.formats.length) {
        this.currentFormat = 0;
      }
      return item;
    }
  }]);
  return FormatHydrator;
}(_Hydrator__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (FormatHydrator);

/***/ }),

/***/ "./src/js/Hydrators/Hydrator.js":
/*!**************************************!*\
  !*** ./src/js/Hydrators/Hydrator.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var Hydrator = /*#__PURE__*/function () {
  function Hydrator() {
    _classCallCheck(this, Hydrator);
  }
  _createClass(Hydrator, [{
    key: "hydrateAll",
    value: function hydrateAll(items) {
      return items.map(this.hydrate.bind(this));
    }
  }, {
    key: "hydrate",
    value: function hydrate(item) {
      return item;
    }
  }]);
  return Hydrator;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hydrator);

/***/ }),

/***/ "./src/js/Hydrators/PreviewsHydrator.js":
/*!**********************************************!*\
  !*** ./src/js/Hydrators/PreviewsHydrator.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hydrator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hydrator */ "./src/js/Hydrators/Hydrator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var PreviewsHydrator = /*#__PURE__*/function (_Hydrator) {
  _inherits(PreviewsHydrator, _Hydrator);
  var _super = _createSuper(PreviewsHydrator);
  function PreviewsHydrator() {
    var _this;
    _classCallCheck(this, PreviewsHydrator);
    _this = _super.call(this);
    _this.videoFactor = 3;
    _this.currentVideo = Math.floor(Math.random() * _this.videoFactor);
    return _this;
  }
  _createClass(PreviewsHydrator, [{
    key: "hydrate",
    value: function hydrate(item) {
      item['previews:json'] = encodeURIComponent(JSON.stringify(item.previews));
      item['previews:static:src'] = item.previews[0].src;
      return item;
    }
  }]);
  return PreviewsHydrator;
}(_Hydrator__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PreviewsHydrator);

/***/ }),

/***/ "./src/js/Hydrators/ProjectHtmlHydrator.js":
/*!*************************************************!*\
  !*** ./src/js/Hydrators/ProjectHtmlHydrator.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hydrator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hydrator */ "./src/js/Hydrators/Hydrator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ProjectHtmlHydrator = /*#__PURE__*/function (_Hydrator) {
  _inherits(ProjectHtmlHydrator, _Hydrator);
  var _super = _createSuper(ProjectHtmlHydrator);
  function ProjectHtmlHydrator() {
    _classCallCheck(this, ProjectHtmlHydrator);
    return _super.apply(this, arguments);
  }
  _createClass(ProjectHtmlHydrator, [{
    key: "hydrate",
    value: function hydrate(item) {
      item['html'] = this.getHtml();
      return item;
    }
  }, {
    key: "getHtml",
    value: function getHtml() {
      return "<div class=\"masonry-grid-item\" data-js=\"project\" data-js-previews=\"{previews:json}\">\n            <div class=\"image-box\">\n                <div class=\"preview preview--{format}\">\n                    <img src=\"{previews:static:src}\" alt=\"\" class=\"picture\">\n                </div>\n                <div class=\"image-box-overlay\">\n                    {html:logo}\n                    <div class=\"details\">\n                        <h3 class=\"title\">{title}</h3>\n                        <span class=\"client\">{client:title}</span>\n                    </div>\n                    <p class=\"description\">{description}</p>\n                    <a href=\"{url}\" class=\"link\">\n                        <span>View Project</span>\n                    </a>\n                </div>\n            </div>\n        </div>";
    }
  }]);
  return ProjectHtmlHydrator;
}(_Hydrator__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectHtmlHydrator);

/***/ }),

/***/ "./src/js/Hydrators/ReplaceTokensHydrator.js":
/*!***************************************************!*\
  !*** ./src/js/Hydrators/ReplaceTokensHydrator.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hydrator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Hydrator */ "./src/js/Hydrators/Hydrator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var ReplaceTokensHydrator = /*#__PURE__*/function (_Hydrator) {
  _inherits(ReplaceTokensHydrator, _Hydrator);
  var _super = _createSuper(ReplaceTokensHydrator);
  function ReplaceTokensHydrator() {
    var _this;
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'html';
    _classCallCheck(this, ReplaceTokensHydrator);
    _this = _super.call(this);
    _this.key = key;
    return _this;
  }
  _createClass(ReplaceTokensHydrator, [{
    key: "hydrate",
    value: function hydrate(item) {
      var tokens = Object.keys(item);
      for (var i = 0; i < tokens.length; i++) {
        item[this.key] = item[this.key].replaceAll("{".concat(tokens[i], "}"), item[tokens[i]]);
      }
      return item;
    }
  }]);
  return ReplaceTokensHydrator;
}(_Hydrator__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ReplaceTokensHydrator);

/***/ }),

/***/ "./src/js/Templates/ClientsGrid.js":
/*!*****************************************!*\
  !*** ./src/js/Templates/ClientsGrid.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hydrators_ClientLogoHtmlHydrator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Hydrators/ClientLogoHtmlHydrator */ "./src/js/Hydrators/ClientLogoHtmlHydrator.js");
/* harmony import */ var _Hydrators_ClientLogoSizeHydrator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Hydrators/ClientLogoSizeHydrator */ "./src/js/Hydrators/ClientLogoSizeHydrator.js");
/* harmony import */ var _Hydrators_ReplaceTokensHydrator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Hydrators/ReplaceTokensHydrator */ "./src/js/Hydrators/ReplaceTokensHydrator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var ClientsGrid = /*#__PURE__*/function () {
  function ClientsGrid() {
    _classCallCheck(this, ClientsGrid);
    this.hydrators = [new _Hydrators_ClientLogoSizeHydrator__WEBPACK_IMPORTED_MODULE_1__["default"](), new _Hydrators_ClientLogoHtmlHydrator__WEBPACK_IMPORTED_MODULE_0__["default"](), new _Hydrators_ReplaceTokensHydrator__WEBPACK_IMPORTED_MODULE_2__["default"]()];
  }
  _createClass(ClientsGrid, [{
    key: "getHydrators",
    value: function getHydrators() {
      return this.hydrators;
    }
  }]);
  return ClientsGrid;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ClientsGrid);

/***/ }),

/***/ "./src/js/Templates/PortfolioGrid.js":
/*!*******************************************!*\
  !*** ./src/js/Templates/PortfolioGrid.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Hydrators_DefaultAttributesHydrator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Hydrators/DefaultAttributesHydrator */ "./src/js/Hydrators/DefaultAttributesHydrator.js");
/* harmony import */ var _Hydrators_ClientLogoHtmlHydrator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Hydrators/ClientLogoHtmlHydrator */ "./src/js/Hydrators/ClientLogoHtmlHydrator.js");
/* harmony import */ var _Hydrators_ClientLogoSizeHydrator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Hydrators/ClientLogoSizeHydrator */ "./src/js/Hydrators/ClientLogoSizeHydrator.js");
/* harmony import */ var _Hydrators_FormatHydrator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Hydrators/FormatHydrator */ "./src/js/Hydrators/FormatHydrator.js");
/* harmony import */ var _Hydrators_PreviewsHydrator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Hydrators/PreviewsHydrator */ "./src/js/Hydrators/PreviewsHydrator.js");
/* harmony import */ var _Hydrators_ProjectHtmlHydrator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Hydrators/ProjectHtmlHydrator */ "./src/js/Hydrators/ProjectHtmlHydrator.js");
/* harmony import */ var _Hydrators_ReplaceTokensHydrator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Hydrators/ReplaceTokensHydrator */ "./src/js/Hydrators/ReplaceTokensHydrator.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }







var PortfolioGrid = /*#__PURE__*/function () {
  function PortfolioGrid(formats) {
    _classCallCheck(this, PortfolioGrid);
    this.hydrators = [new _Hydrators_DefaultAttributesHydrator__WEBPACK_IMPORTED_MODULE_0__["default"](), new _Hydrators_FormatHydrator__WEBPACK_IMPORTED_MODULE_3__["default"](formats), new _Hydrators_PreviewsHydrator__WEBPACK_IMPORTED_MODULE_4__["default"](), new _Hydrators_ClientLogoSizeHydrator__WEBPACK_IMPORTED_MODULE_2__["default"](50 * 50), new _Hydrators_ClientLogoHtmlHydrator__WEBPACK_IMPORTED_MODULE_1__["default"]('html:logo'), new _Hydrators_ProjectHtmlHydrator__WEBPACK_IMPORTED_MODULE_5__["default"](), new _Hydrators_ReplaceTokensHydrator__WEBPACK_IMPORTED_MODULE_6__["default"]()];
  }
  _createClass(PortfolioGrid, [{
    key: "getHydrators",
    value: function getHydrators() {
      return this.hydrators;
    }
  }]);
  return PortfolioGrid;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PortfolioGrid);

/***/ }),

/***/ "./src/js/VideoGrid.js":
/*!*****************************!*\
  !*** ./src/js/VideoGrid.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var VideoGrid = /*#__PURE__*/function () {
  function VideoGrid(selector) {
    _classCallCheck(this, VideoGrid);
    this.selector = selector;
    this.videoHtml = "<video autoplay loop muted controls=\"false\" class=\"picture\">\n            <source src=\"{src}\" type=\"video/mp4\">\n        </video>";
    this.videoEvery = 2;
    this.currentVideo = 0;
  }
  _createClass(VideoGrid, [{
    key: "attach",
    value: function attach() {
      var _this = this;
      var allItems = document.querySelectorAll(this.selector);
      this.videoEvery = this.calculateVideoFrequency(allItems);
      this.currentVideo = Math.floor(Math.random() * this.videoEvery);
      allItems.forEach(function (item) {
        if (_this.hasAnimatedPreview(item) && _this.shouldActivateVideo()) {
          _this.replaceImageWithVideo(item);
        }
        _this.tallyCurrentVideo();
      });
    }
  }, {
    key: "replaceImageWithVideo",
    value: function replaceImageWithVideo(item) {
      var image = item.querySelector('img');
      image.outerHTML = this.videoHtml.replace('{src}', this.getAnimatedPreview(item).src);
    }
  }, {
    key: "calculateVideoFrequency",
    value: function calculateVideoFrequency(allItems) {
      var animatedItems = _toConsumableArray(allItems).filter(this.hasAnimatedPreview.bind(this));
      var animatedToStaticRatio = animatedItems.length / allItems.length;
      return Math.round(1 / animatedToStaticRatio);
    }
  }, {
    key: "shouldActivateVideo",
    value: function shouldActivateVideo() {
      return this.currentVideo == 0;
    }
  }, {
    key: "tallyCurrentVideo",
    value: function tallyCurrentVideo() {
      this.currentVideo++;
      if (this.currentVideo >= this.videoEvery) {
        this.currentVideo = 0;
      }
    }
  }, {
    key: "hasAnimatedPreview",
    value: function hasAnimatedPreview(item) {
      return this.getAnimatedPreview(item) !== undefined;
    }
  }, {
    key: "getAnimatedPreview",
    value: function getAnimatedPreview(item) {
      return this.getPreviews(item).find(this.extensionIsMp4);
    }
  }, {
    key: "getPreviews",
    value: function getPreviews(item) {
      return JSON.parse(decodeURIComponent(item.getAttribute('data-js-previews')));
    }
  }, {
    key: "extensionIsMp4",
    value: function extensionIsMp4(preview) {
      return preview.src.includes('.mp4');
    }
  }]);
  return VideoGrid;
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VideoGrid);

/***/ }),

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _GridFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GridFactory */ "./src/js/GridFactory.js");
/* harmony import */ var _Templates_PortfolioGrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Templates/PortfolioGrid */ "./src/js/Templates/PortfolioGrid.js");
/* harmony import */ var _Templates_ClientsGrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Templates/ClientsGrid */ "./src/js/Templates/ClientsGrid.js");
/* harmony import */ var _VideoGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VideoGrid */ "./src/js/VideoGrid.js");
/* harmony import */ var _selectedClients__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./selectedClients */ "./src/js/selectedClients.js");
/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects */ "./src/js/projects.js");






new _GridFactory__WEBPACK_IMPORTED_MODULE_0__["default"]('[data-js="projects"]').make(_projects__WEBPACK_IMPORTED_MODULE_5__["default"], new _Templates_PortfolioGrid__WEBPACK_IMPORTED_MODULE_1__["default"](['square', 'portrait']));
new _GridFactory__WEBPACK_IMPORTED_MODULE_0__["default"]('[data-js="clients"]').make(_selectedClients__WEBPACK_IMPORTED_MODULE_4__["default"], new _Templates_ClientsGrid__WEBPACK_IMPORTED_MODULE_2__["default"]());
new Masonry('[data-js="projects"]', {
  itemSelector: '.masonry-grid-item',
  columnWidth: '.masonry-grid-sizer',
  gutter: '.masonry-gutter-sizer'
});
new _VideoGrid__WEBPACK_IMPORTED_MODULE_3__["default"]('[data-js="project"]').attach();

/***/ }),

/***/ "./src/js/clients.js":
/*!***************************!*\
  !*** ./src/js/clients.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var clients = [{
  slug: 'confidential',
  title: 'Confidential',
  category: 'confidential',
  logo: {
    src: 'clients/confidential.svg',
    width: 204,
    height: 35
  }
}, {
  slug: 'azimut-yachts',
  title: 'Azimut Yachts',
  category: 'luxury',
  logo: {
    src: 'clients/azimut-yacht.svg',
    width: 347,
    height: 79
  }
}, {
  slug: 'gianvito-rossi',
  title: 'Gianvito Rossi Milano',
  category: 'luxury',
  logo: {
    src: 'clients/gianvito-rossi-milano.svg',
    width: 276,
    height: 42
  }
}, {
  slug: 'moncler',
  title: 'Moncler',
  category: 'luxury',
  logo: {
    src: 'clients/moncler.svg',
    width: 732,
    height: 324
  }
}, {
  slug: 'wellness-holding',
  title: 'Wellness Holding',
  category: 'institutional',
  logo: {
    src: 'clients/wellness-holding.svg',
    width: 231,
    height: 40
  }
}, {
  slug: 'the-world-bank',
  title: 'The World Bank',
  category: 'institutional',
  logo: {
    src: 'clients/the-world-bank.svg',
    width: 180,
    height: 36
  }
}, {
  slug: 'cucchiaio-d-argento',
  title: 'Cucchiaio D\'Argento',
  category: 'editorial',
  logo: {
    src: 'clients/cucchiaio-d-argento.svg',
    width: 142,
    height: 40
  }
}, {
  slug: 'domus',
  title: 'Domus',
  category: 'editorial',
  logo: {
    src: 'clients/domus.svg',
    width: 314,
    height: 77
  }
}, {
  slug: 'everseen',
  title: 'Everseen',
  category: 'tech',
  logo: {
    src: 'clients/everseen.svg',
    width: 690,
    height: 100
  }
}, {
  slug: 'mtv',
  title: 'MTV',
  category: 'entertainment',
  logo: {
    src: 'clients/mtv.svg',
    width: 400,
    height: 247
  }
}, {
  slug: 'discovery',
  title: 'Discovery',
  category: 'entertainment',
  logo: {
    src: 'clients/discovery.svg',
    width: 134,
    height: 90
  }
}, {
  slug: 'paramount-channel',
  title: 'Paramount Channel',
  category: 'entertainment',
  logo: {
    src: 'clients/paramount-channel.svg',
    width: 410,
    height: 410
  }
}, {
  slug: 'comedy-central',
  title: 'Comedy Central',
  category: 'entertainment',
  logo: {
    src: 'clients/comedy-central.svg',
    width: 49,
    height: 70
  }
}, {
  slug: 'sky',
  title: 'Sky',
  category: 'entertainment',
  logo: {
    src: 'clients/sky.svg',
    width: 817,
    height: 500
  }
}, {
  slug: 'eni-plenitude',
  title: 'Plenitude',
  category: 'energy',
  logo: {
    src: 'clients/eni-plenitude.svg',
    width: 592,
    height: 581
  }
}, {
  slug: 'gazprom-media',
  title: 'Gazprom Media',
  category: 'entertainment',
  logo: {
    src: 'clients/gazprom-media.svg',
    width: 720,
    height: 93
  }
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clients);

/***/ }),

/***/ "./src/js/projects.js":
/*!****************************!*\
  !*** ./src/js/projects.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var projects = [{
  client: 'cucchiaio-d-argento',
  previews: [{
    src: 'images/cucchiaio-d-argento/02.jpg'
  }],
  title: 'Social Media Branding',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'gianvito-rossi',
  previews: [{
    src: 'images/gianvito-rossi-chinese-st-valentines/05.jpg'
  }, {
    src: 'images/gianvito-rossi-chinese-st-valentines/animated.mp4'
  }],
  title: 'Chinese St. Valentine\'s Day',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'moncler',
  previews: [{
    src: 'images/moncler-the-loop/03.jpg'
  }],
  title: 'The Loop',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'everseen',
  previews: [{
    src: 'images/everseen/11.jpg'
  }],
  title: 'Everseen Rebrand',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'wellness-holding',
  previews: [{
    src: 'images/wellness-holding/04.jpg'
  }, {
    src: 'images/wellness-holding/animated.mp4'
  }],
  title: 'Wellness Holding',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'confidential',
  previews: [{
    src: 'images/gc-confidential/01.png'
  }, {
    src: 'images/gc-confidential/animated.mp4'
  }],
  title: 'Confidential',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'mtv',
  previews: [{
    src: 'images/mtv-music-week-2022/01.png'
  }],
  title: 'MTV Music Week 2022',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'the-world-bank',
  previews: [{
    src: 'images/planet-be/04.jpg'
  }],
  title: 'Planet Be',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'azimut-yachts',
  previews: [{
    src: 'images/azimut/05.jpg'
  }, {
    src: 'images/azimut/animated.mp4'
  }],
  title: 'Dare to Amaze',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'gazprom-media',
  previews: [{
    src: 'https://www.ideosuite.com/images/tnt-mental/mockup-04.webp'
  }],
  title: 'Mental',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'gazprom-media',
  previews: [{
    src: 'https://www.ideosuite.com/images/tnt-2018/on-air-ids-2020-filter-batrudinov-02.webp'
  }, {
    src: 'images/tnt-design-2018-2021/animated.mp4'
  }],
  title: 'TNT Design 2018 — 2021',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'gazprom-media',
  previews: [{
    src: 'https://www.ideosuite.com/images/tnt-avatar/cg-01.webp'
  }, {
    src: '/images/tnt-avatar/animated.mp4'
  }],
  title: 'TNT Avatar',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'gazprom-media',
  previews: [{
    src: 'https://www.ideosuite.com/images/tnt-music/ids-pop-01.webp'
  }, {
    src: 'images/tnt-music/animated.mp4'
  }],
  title: 'TNT Music',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'gazprom-media',
  previews: [{
    src: 'https://www.ideosuite.com/images/premier/product-smartphones.webp'
  }],
  title: 'TNT Premier',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'discovery',
  previews: [{
    src: 'images/giallo-2017/01.jpg'
  }, {
    src: 'images/giallo-2017/animated.mp4'
  }],
  title: 'Giallo',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'discovery',
  previews: [{
    src: 'images/nove-2017/01.jpg'
  }, {
    src: 'images/nove-2017/animated.mp4'
  }],
  title: 'Nove',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'discovery',
  previews: [{
    src: 'images/realtime-2016/01.jpg'
  }],
  title: 'Real Time 2016',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'discovery',
  previews: [{
    src: 'images/discovery-italia-portfolio/01.jpg'
  }],
  title: 'Discovery Italia Portfolio',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'discovery',
  previews: [{
    src: 'images/realtime-2014/01.jpg'
  }],
  title: 'Real Time 2014',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'mtv',
  previews: [{
    src: 'images/mtv-international-rebrand-2013/02.jpg'
  }, {
    src: 'images/mtv-international-rebrand-2013/animated.mp4'
  }],
  title: 'MTV International Rebrand 2013',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'paramount-channel',
  previews: [{
    src: 'https://www.ideosuite.com/images/paramount-channel-branding-2012/hero.webp'
  }, {
    src: 'images/paramount-channel-branding-2012/animated.mp4'
  }],
  title: 'Paramount Channel',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'mtv',
  previews: [{
    src: 'images/mtv-hitlist-italia/01.jpg'
  }],
  title: 'MTV Hitlist Italia',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}, {
  client: 'mtv',
  previews: [{
    src: 'https://www.ideosuite.com/images/mtv-my-video/image2.jpg'
  }, {
    src: 'images/mtv-my-video/animated.mp4'
  }],
  title: 'MTV My Video',
  description: 'Lorem ipsum dolor sit amet',
  url: '#'
}];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (projects);

/***/ }),

/***/ "./src/js/selectedClients.js":
/*!***********************************!*\
  !*** ./src/js/selectedClients.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clients__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients */ "./src/js/clients.js");

var selectedClients = ['azimut-yachts', 'gianvito-rossi', 'moncler', 'wellness-holding', 'the-world-bank', 'cucchiaio-d-argento', 'domus', 'everseen', 'mtv', 'discovery', 'paramount-channel', 'comedy-central', 'sky', 'eni-plenitude'];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_clients__WEBPACK_IMPORTED_MODULE_0__["default"].filter(function (client) {
  return selectedClients.includes(client.slug);
}));

/***/ }),

/***/ "./src/css/app.css":
/*!*************************!*\
  !*** ./src/css/app.css ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/css/clients.css":
/*!*****************************!*\
  !*** ./src/css/clients.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/js/app": 0,
/******/ 			"css/app": 0,
/******/ 			"css/clients": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkideosuite_gallery"] = self["webpackChunkideosuite_gallery"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["css/app","css/clients"], () => (__webpack_require__("./src/js/app.js")))
/******/ 	__webpack_require__.O(undefined, ["css/app","css/clients"], () => (__webpack_require__("./src/css/app.css")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["css/app","css/clients"], () => (__webpack_require__("./src/css/clients.css")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;