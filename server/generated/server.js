module.exports =
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 55);
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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_LOCALE; });
/* unused harmony export LocalesTypes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LocalesActions; });
/* unused harmony export INITIAL_STATE */
/* unused harmony export setLanguageHandler */
/* unused harmony export HANDLERS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reduxsauce__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reduxsauce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reduxsauce__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var DEFAULT_LOCALE = 'en';

var _createActions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reduxsauce__["createActions"])({
  setLanguage: ['language']
}, { prefix: 'LOCALES_' });

var LocalesTypes = _createActions.Types,
    LocalesActions = _createActions.Creators;



var LocalesRecord = new __WEBPACK_IMPORTED_MODULE_0_immutable__["Record"]({
  language: null
});

var INITIAL_STATE = new LocalesRecord({});

var setLanguageHandler = function setLanguageHandler() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];
  return state.set('language', action.language);
};

var HANDLERS = _defineProperty({}, LocalesTypes.SET_LANGUAGE, setLanguageHandler);

var reducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reduxsauce__["createReducer"])(INITIAL_STATE, HANDLERS);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(DEFAULT_LOCALE, 'DEFAULT_LOCALE', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/locales/locales.redux.js');

  __REACT_HOT_LOADER__.register(LocalesTypes, 'LocalesTypes', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/locales/locales.redux.js');

  __REACT_HOT_LOADER__.register(LocalesActions, 'LocalesActions', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/locales/locales.redux.js');

  __REACT_HOT_LOADER__.register(LocalesRecord, 'LocalesRecord', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/locales/locales.redux.js');

  __REACT_HOT_LOADER__.register(INITIAL_STATE, 'INITIAL_STATE', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/locales/locales.redux.js');

  __REACT_HOT_LOADER__.register(setLanguageHandler, 'setLanguageHandler', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/locales/locales.redux.js');

  __REACT_HOT_LOADER__.register(HANDLERS, 'HANDLERS', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/locales/locales.redux.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/locales/locales.redux.js');
}();

;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return MaintainersTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintainersActions; });
/* unused harmony export INITIAL_STATE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reduxsauce__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reduxsauce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reduxsauce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _createActions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reduxsauce__["createActions"])({
  fetch: ['language'],
  fetchSuccess: ['data'],
  fetchError: ['payload']
}, { prefix: 'MAINTAINERS_' });

var MaintainersTypes = _createActions.Types,
    MaintainersActions = _createActions.Creators;



var MaintainersRecord = new __WEBPACK_IMPORTED_MODULE_1_immutable__["Record"]({
  items: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])()
});

var INITIAL_STATE = new MaintainersRecord({});

var getSuccessHandler = function getSuccessHandler() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];
  return state.set('items', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])(action.data));
};

var reducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reduxsauce__["createReducer"])(INITIAL_STATE, _defineProperty({}, MaintainersTypes.FETCH_SUCCESS, getSuccessHandler));
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MaintainersTypes, 'MaintainersTypes', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/maintainers/maintainers.redux.js');

  __REACT_HOT_LOADER__.register(MaintainersActions, 'MaintainersActions', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/maintainers/maintainers.redux.js');

  __REACT_HOT_LOADER__.register(MaintainersRecord, 'MaintainersRecord', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/maintainers/maintainers.redux.js');

  __REACT_HOT_LOADER__.register(INITIAL_STATE, 'INITIAL_STATE', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/maintainers/maintainers.redux.js');

  __REACT_HOT_LOADER__.register(getSuccessHandler, 'getSuccessHandler', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/maintainers/maintainers.redux.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/maintainers/maintainers.redux.js');
}();

;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("reduxsauce");

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaultsDeep__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaultsDeep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_defaultsDeep__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(18);




var _default = __WEBPACK_IMPORTED_MODULE_0_lodash_defaultsDeep___default()({
  api: {
    serverUrl: 'http://localhost:3000/',
    clientUrl: ''
  },
  name: 'development'
}, __WEBPACK_IMPORTED_MODULE_1__base__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/wpanek/Projects/study-group-7-ssr/app/environment/development.js');
}();

;

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appLocales; });
/* unused harmony export formatTranslationMessages */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return translationMessages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_intl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_intl_locale_data_en__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_intl_locale_data_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_intl_locale_data_en__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_intl_locale_data_de__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_intl_locale_data_de___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_intl_locale_data_de__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_modules_locales_locales_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translations_en_json__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translations_en_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__translations_en_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__translations_de_json__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__translations_de_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__translations_de_json__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_intl__["addLocaleData"])(__WEBPACK_IMPORTED_MODULE_1_react_intl_locale_data_en___default.a);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_intl__["addLocaleData"])(__WEBPACK_IMPORTED_MODULE_2_react_intl_locale_data_de___default.a);

var appLocales = ['en', 'de'];

var formatTranslationMessages = function formatTranslationMessages(locale, messages) {
  var defaultFormattedMessages = locale !== __WEBPACK_IMPORTED_MODULE_3__app_modules_locales_locales_redux__["b" /* DEFAULT_LOCALE */] ? formatTranslationMessages(__WEBPACK_IMPORTED_MODULE_3__app_modules_locales_locales_redux__["b" /* DEFAULT_LOCALE */], __WEBPACK_IMPORTED_MODULE_4__translations_en_json___default.a) : {};
  return Object.keys(messages).reduce(function (formattedMessages, key) {
    var formattedMessage = !messages[key] && locale !== __WEBPACK_IMPORTED_MODULE_3__app_modules_locales_locales_redux__["b" /* DEFAULT_LOCALE */] ? defaultFormattedMessages[key] : messages[key];
    return Object.assign(formattedMessages, _defineProperty({}, key, formattedMessage));
  }, {});
};

var translationMessages = {
  en: formatTranslationMessages('en', __WEBPACK_IMPORTED_MODULE_4__translations_en_json___default.a),
  de: formatTranslationMessages('de', __WEBPACK_IMPORTED_MODULE_5__translations_de_json___default.a)
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(appLocales, 'appLocales', '/Users/wpanek/Projects/study-group-7-ssr/app/i18n.js');

  __REACT_HOT_LOADER__.register(formatTranslationMessages, 'formatTranslationMessages', '/Users/wpanek/Projects/study-group-7-ssr/app/i18n.js');

  __REACT_HOT_LOADER__.register(translationMessages, 'translationMessages', '/Users/wpanek/Projects/study-group-7-ssr/app/i18n.js');
}();

;

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectLocalesLanguage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);


var selectLocalesDomain = function selectLocalesDomain(state) {
  return state.get('locales');
};

var selectLocalesLanguage = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(selectLocalesDomain, function (state) {
  return state.get('language');
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(selectLocalesDomain, 'selectLocalesDomain', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/locales/locales.selectors.js');

  __REACT_HOT_LOADER__.register(selectLocalesLanguage, 'selectLocalesLanguage', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/locales/locales.selectors.js');
}();

;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAppToStringAtLocation", function() { return renderAppToStringAtLocation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_store__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__htmlDocument__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_sagas__ = __webpack_require__(25);












function renderAppToString(store, url, context) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"],
    { store: store },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_react_router__["StaticRouter"],
      {
        location: url,
        context: context
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__routes__["a" /* default */], null)
    )
  ));
}

function renderAppToStringAtLocation(url, _ref, callback) {
  var _ref$webpackDllNames = _ref.webpackDllNames,
      webpackDllNames = _ref$webpackDllNames === undefined ? [] : _ref$webpackDllNames,
      assets = _ref.assets,
      hostUrl = _ref.hostUrl;

  var context = {};
  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__modules_store__["a" /* default */])();

  store.runSaga(__WEBPACK_IMPORTED_MODULE_9__modules_sagas__["a" /* default */]).done.then(function () {
    var state = store.getState().toJS();
    var appMarkup = renderAppToString(store, url, context);

    var doc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__htmlDocument__["a" /* default */], {
      appMarkup: appMarkup,
      state: state,
      head: __WEBPACK_IMPORTED_MODULE_5_react_helmet___default.a.rewind(),
      assets: assets,
      webpackDllNames: webpackDllNames
    }));

    var html = '<!DOCTYPE html>\n' + doc;
    callback({ html: html });
  }).catch(function (e) {
    callback({ error: e });
  });

  renderAppToString(store, url, context);

  if (context.url) {
    callback({ redirectLocation: context.url });
  } else {
    store.close();
  }
}


;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(renderAppToString, 'renderAppToString', '/Users/wpanek/Projects/study-group-7-ssr/app/server.js');

  __REACT_HOT_LOADER__.register(renderAppToStringAtLocation, 'renderAppToStringAtLocation', '/Users/wpanek/Projects/study-group-7-ssr/app/server.js');
}();

;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _default = {};
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, "default", "/Users/wpanek/Projects/study-group-7-ssr/app/environment/base.js");
}();

;

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_htmlescape__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_htmlescape___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_htmlescape__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint react/no-danger: 0 */




var HtmlDocument = function (_PureComponent) {
  _inherits(HtmlDocument, _PureComponent);

  function HtmlDocument() {
    _classCallCheck(this, HtmlDocument);

    return _possibleConstructorReturn(this, (HtmlDocument.__proto__ || Object.getPrototypeOf(HtmlDocument)).apply(this, arguments));
  }

  _createClass(HtmlDocument, [{
    key: 'addDLLsWhenIsDevelop',
    value: function addDLLsWhenIsDevelop(webpackDllNames) {
      if ("development" === 'development' && !!webpackDllNames) {
        return webpackDllNames.map(function (dllName) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { 'data-dll': true, key: dllName, src: '/' + dllName + '.dll.js' });
        });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          head = _props.head,
          appMarkup = _props.appMarkup,
          state = _props.state,
          assets = _props.assets,
          webpackDllNames = _props.webpackDllNames;

      var attrs = head.htmlAttributes.toComponent();

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'html',
        _extends({ lang: 'en' }, attrs),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'head',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { charSet: 'utf-8' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('meta', { name: 'mobile-web-app-capable', content: 'yes' }),
          head.title.toComponent(),
          head.meta.toComponent(),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', href: __webpack_require__(40) }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Open+Sans:400,700', rel: 'stylesheet' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { href: assets.main.css, rel: 'stylesheet' })
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'body',
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: appMarkup } }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { dangerouslySetInnerHTML: { __html: 'APP_STATE = ' + __WEBPACK_IMPORTED_MODULE_1_htmlescape___default()(state) } }),
          this.addDLLsWhenIsDevelop(webpackDllNames),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('script', { type: 'text/javascript', src: assets.main.js })
        )
      );
    }
  }]);

  return HtmlDocument;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

HtmlDocument.propTypes = {
  head: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
  appMarkup: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  state: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
  assets: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
    main: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].shape({
      js: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
    }).isRequired
  }).isRequired,
  webpackDllNames: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].arrayOf(__WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string)
};
var _default = HtmlDocument;
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(HtmlDocument, 'HtmlDocument', '/Users/wpanek/Projects/study-group-7-ssr/app/htmlDocument.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/wpanek/Projects/study-group-7-ssr/app/htmlDocument.js');
}();

;

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseJSON */
/* unused harmony export requestSaga */
/* harmony export (immutable) */ __webpack_exports__["a"] = get;
/* unused harmony export post */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_env_config__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_query_string__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_query_string__);
var _marked = [requestSaga, get, post].map(regeneratorRuntime.mark);






function parseJSON(response) {
  return response.json();
}

function getUrl(url) {
  if (false) {
    return envConfig.api.clientUrl + url;
  }
  if (true) {
    return __WEBPACK_IMPORTED_MODULE_0_env_config__["a" /* default */].api.serverUrl + url;
  }
  return null;
}

function requestSaga(url, options) {
  var headers, response;
  return regeneratorRuntime.wrap(function requestSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          headers = {
            'Content-Type': 'application/json'
          };
          _context.prev = 1;
          _context.next = 4;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(fetch, url, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["assign"])({ headers: headers }, options));

        case 4:
          response = _context.sent;
          _context.next = 7;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(parseJSON, response);

        case 7:
          return _context.abrupt('return', _context.sent);

        case 10:
          _context.prev = 10;
          _context.t0 = _context['catch'](1);
          _context.next = 14;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(parseJSON, _context.t0);

        case 14:
          return _context.abrupt('return', _context.sent);

        case 15:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[1, 10]]);
}

function get(url) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return regeneratorRuntime.wrap(function get$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(requestSaga, getUrl(url) + '?' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_query_string__["stringify"])(body), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["assign"])({ method: 'GET' }, options));

        case 2:
          return _context2.abrupt('return', _context2.sent);

        case 3:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}

function post(url) {
  var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  return regeneratorRuntime.wrap(function post$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(requestSaga, url, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["assign"])({ method: 'POST', body: body }, options));

        case 2:
          return _context3.abrupt('return', _context3.sent);

        case 3:
        case 'end':
          return _context3.stop();
      }
    }
  }, _marked[2], this);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(parseJSON, 'parseJSON', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/api/api.sagas.js');

  __REACT_HOT_LOADER__.register(getUrl, 'getUrl', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/api/api.sagas.js');

  __REACT_HOT_LOADER__.register(requestSaga, 'requestSaga', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/api/api.sagas.js');

  __REACT_HOT_LOADER__.register(get, 'get', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/api/api.sagas.js');

  __REACT_HOT_LOADER__.register(post, 'post', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/api/api.sagas.js');
}();

;

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export fetchMaintainersSaga */
/* harmony export (immutable) */ __webpack_exports__["a"] = maintainersSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api_sagas__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maintainers_redux__ = __webpack_require__(6);
var _marked = [fetchMaintainersSaga, maintainersSaga].map(regeneratorRuntime.mark);






function fetchMaintainersSaga(_ref) {
  var language = _ref.language;
  var data;
  return regeneratorRuntime.wrap(function fetchMaintainersSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_1__api_api_sagas__["a" /* get */], '/fixtures/maintainers.json', { language: language });

        case 3:
          data = _context.sent;
          _context.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__maintainers_redux__["a" /* MaintainersActions */].fetchSuccess(data));

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__maintainers_redux__["a" /* MaintainersActions */].fetchError(_context.t0));

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[0, 8]]);
}

function maintainersSaga() {
  return regeneratorRuntime.wrap(function maintainersSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["all"])([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_2__maintainers_redux__["b" /* MaintainersTypes */].FETCH, fetchMaintainersSaga)]);

        case 2:
        case 'end':
          return _context2.stop();
      }
    }
  }, _marked[1], this);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(fetchMaintainersSaga, 'fetchMaintainersSaga', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/maintainers/maintainers.sagas.js');

  __REACT_HOT_LOADER__.register(maintainersSaga, 'maintainersSaga', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/maintainers/maintainers.sagas.js');
}();

;

/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectMaintainersItems; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);


var selectMaintainersDomain = function selectMaintainersDomain(state) {
  return state.get('maintainers');
};

var selectMaintainersItems = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(selectMaintainersDomain, function (state) {
  return state.get('items');
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(selectMaintainersDomain, 'selectMaintainersDomain', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/maintainers/maintainers.selectors.js');

  __REACT_HOT_LOADER__.register(selectMaintainersItems, 'selectMaintainersItems', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/maintainers/maintainers.selectors.js');
}();

;

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_immutable__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_router_redux__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locales_locales_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__maintainers_maintainers_redux__ = __webpack_require__(6);






function createReducer() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_immutable__["combineReducers"])({
    route: __WEBPACK_IMPORTED_MODULE_1__router_router_redux__["a" /* reducer */],
    maintainers: __WEBPACK_IMPORTED_MODULE_3__maintainers_maintainers_redux__["c" /* reducer */],
    locales: __WEBPACK_IMPORTED_MODULE_2__locales_locales_redux__["a" /* reducer */]
  });
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(createReducer, 'createReducer', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/reducers.js');
}();

;

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export INITIAL_STATE */
/* unused harmony export locationChangeHandler */
/* unused harmony export HANDLERS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reduxsauce__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reduxsauce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reduxsauce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_router_redux__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var RouterRecord = new __WEBPACK_IMPORTED_MODULE_0_immutable__["Record"]({
  locationBeforeTransitions: null
});

var INITIAL_STATE = new RouterRecord({});

var locationChangeHandler = function locationChangeHandler() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;
  var action = arguments[1];
  return state.merge({
    locationBeforeTransitions: action.payload
  });
};

var HANDLERS = _defineProperty({}, __WEBPACK_IMPORTED_MODULE_2_react_router_redux__["LOCATION_CHANGE"], locationChangeHandler);

var reducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_reduxsauce__["createReducer"])(INITIAL_STATE, HANDLERS);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RouterRecord, 'RouterRecord', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/router/router.redux.js');

  __REACT_HOT_LOADER__.register(INITIAL_STATE, 'INITIAL_STATE', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/router/router.redux.js');

  __REACT_HOT_LOADER__.register(locationChangeHandler, 'locationChangeHandler', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/router/router.redux.js');

  __REACT_HOT_LOADER__.register(HANDLERS, 'HANDLERS', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/router/router.redux.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/router/router.redux.js');
}();

;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rootSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__maintainers_maintainers_sagas__ = __webpack_require__(21);
var _marked = [rootSaga].map(regeneratorRuntime.mark);




function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["all"])([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["fork"])(__WEBPACK_IMPORTED_MODULE_1__maintainers_maintainers_sagas__["a" /* default */])]);

        case 2:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this);
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(rootSaga, 'rootSaga', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/sagas.js');
}();

;

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_saga__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers__ = __webpack_require__(23);







var sagaMiddleware = __WEBPACK_IMPORTED_MODULE_4_redux_saga___default()();

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var history = arguments[1];

  var middlewares = [sagaMiddleware, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__["routerMiddleware"])(history)];

  var enhancers = [];

  if (true) {
    var _require = __webpack_require__(51),
        persistState = _require.persistState;

    var stateTransformer = function stateTransformer(state) {
      if (__WEBPACK_IMPORTED_MODULE_2_immutable__["Iterable"].isIterable(state)) {
        return state.toJS();
      }
      return state;
    };

    if (false) {
      middlewares.push(createLogger({ stateTransformer: stateTransformer }));
      var getDebugSessionKey = function getDebugSessionKey() {
        var matches = window.location.href.match(/[?&]debug_session=([^&#]+)\b/);
        return matches && matches.length > 0 ? matches[1] : null;
      };

      Array.prototype.push.apply(enhancers, [require('../utils/devtools.component').default.instrument(), persistState(getDebugSessionKey(), function (state) {
        return fromJS(state);
      })]);
    }
  }

  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux__["createStore"])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__reducers__["a" /* default */])(), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_immutable__["fromJS"])(initialState), __WEBPACK_IMPORTED_MODULE_0_redux__["compose"].apply(undefined, [__WEBPACK_IMPORTED_MODULE_0_redux__["applyMiddleware"].apply(undefined, middlewares)].concat(enhancers)));

  store.runSaga = sagaMiddleware.run;
  store.close = function () {
    return store.dispatch(__WEBPACK_IMPORTED_MODULE_4_redux_saga__["END"]);
  };
  if (false) {
    module.hot.accept('./reducers', function () {
      var createReducers = require('./reducers').default;
      var nextReducers = createReducers(store.asyncReducers);

      store.replaceReducer(nextReducers);
    });
  }

  return store;
}
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(sagaMiddleware, 'sagaMiddleware', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/store.js');

  __REACT_HOT_LOADER__.register(configureStore, 'configureStore', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/store.js');
}();

;

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_intl__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_intl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__i18n__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_locales_locales_redux__ = __webpack_require__(1);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var AppComponent = function (_PureComponent) {
  _inherits(AppComponent, _PureComponent);

  function AppComponent() {
    _classCallCheck(this, AppComponent);

    return _possibleConstructorReturn(this, (AppComponent.__proto__ || Object.getPrototypeOf(AppComponent)).apply(this, arguments));
  }

  _createClass(AppComponent, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      var language = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash__["get"])(this.props.match, 'params.lang', __WEBPACK_IMPORTED_MODULE_6__modules_locales_locales_redux__["b" /* DEFAULT_LOCALE */]);
      if (!__WEBPACK_IMPORTED_MODULE_5__i18n__["a" /* appLocales */].includes(language)) {
        this.props.history.push('/404');
      }

      this.props.setLanguage(language);
    }
  }, {
    key: 'render',
    value: function render() {
      var language = this.props.language || __WEBPACK_IMPORTED_MODULE_6__modules_locales_locales_redux__["b" /* DEFAULT_LOCALE */];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'app' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, {
          titleTemplate: '%s - Apptension React Boilerplate',
          defaultTitle: 'Apptension React Boilerplate',
          meta: [{ name: 'description', content: 'Apptension React Boilerplate application' }]
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_intl__["IntlProvider"],
          {
            locale: language,
            messages: __WEBPACK_IMPORTED_MODULE_5__i18n__["b" /* translationMessages */][language]
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children)
        )
      );
    }
  }]);

  return AppComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

AppComponent.propTypes = {
  language: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node,
  setLanguage: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  match: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
  history: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired
};
var App = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["withRouter"])(AppComponent);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(AppComponent, 'AppComponent', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/app.component.js');

  __REACT_HOT_LOADER__.register(App, 'App', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/app.component.js');
}();

;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mapDispatchToProps */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reselect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_locales_locales_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_locales_locales_selectors__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(27);








var mapStateToProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_reselect__["createStructuredSelector"])({
  language: __WEBPACK_IMPORTED_MODULE_4__modules_locales_locales_selectors__["a" /* selectLocalesLanguage */]
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])({
    setLanguage: __WEBPACK_IMPORTED_MODULE_3__modules_locales_locales_redux__["c" /* LocalesActions */].setLanguage
  }, dispatch);
};

var _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* App */]);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/app.container.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/app.container.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/app.container.js');
}();

;

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_intl__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_intl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_env_config__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_messages__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__maintainerList_maintainerList_component__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__languageSelector_languageSelector_component__ = __webpack_require__(33);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }










var Home = function (_PureComponent) {
  _inherits(Home, _PureComponent);

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      this.props.fetchMaintainers(this.props.language);
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.language !== this.props.language) {
        this.props.fetchMaintainers(nextProps.language);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'home' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, {
          title: 'Homepage'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          { className: 'home__title' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: 'home__title-logo' }),
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_react_intl__["FormattedMessage"], __WEBPACK_IMPORTED_MODULE_4__home_messages__["a" /* default */].welcome)
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          null,
          'Environment: ',
          __WEBPACK_IMPORTED_MODULE_3_env_config__["a" /* default */].name
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__maintainerList_maintainerList_component__["a" /* MaintainerList */], { items: this.props.items }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__languageSelector_languageSelector_component__["a" /* LanguageSelector */], {
          language: this.props.language,
          setLanguage: this.props.setLanguage,
          history: this.props.history,
          location: this.props.location
        })
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);
Home.propTypes = {
  items: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object,
  language: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  fetchMaintainers: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  setLanguage: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  history: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/home/home.component.js');
}();

;

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mapDispatchToProps */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reselect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_component__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_maintainers_maintainers_redux__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_maintainers_maintainers_selectors__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_locales_locales_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_locales_locales_selectors__ = __webpack_require__(13);










var mapStateToProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_reselect__["createStructuredSelector"])({
  items: __WEBPACK_IMPORTED_MODULE_5__modules_maintainers_maintainers_selectors__["a" /* selectMaintainersItems */],
  language: __WEBPACK_IMPORTED_MODULE_7__modules_locales_locales_selectors__["a" /* selectLocalesLanguage */]
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])({
    fetchMaintainers: __WEBPACK_IMPORTED_MODULE_4__modules_maintainers_maintainers_redux__["a" /* MaintainersActions */].fetch,
    setLanguage: __WEBPACK_IMPORTED_MODULE_6__modules_locales_locales_redux__["c" /* LocalesActions */].setLanguage
  }, dispatch);
};

var _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_3__home_component__["a" /* Home */]);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/home/home.container.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/home/home.container.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/home/home.container.js');
}();

;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_intl__);



var _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_intl__["defineMessages"])({
  welcome: {
    id: 'home.welcome',
    defaultMessage: 'Hello World!'
  }
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/home/home.messages.js');
}();

;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_container__ = __webpack_require__(30);


var _default = __WEBPACK_IMPORTED_MODULE_0__home_container__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/home/index.js');
}();

;

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguageSelector; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__i18n__ = __webpack_require__(12);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }





var LanguageSelector = function (_PureComponent) {
  _inherits(LanguageSelector, _PureComponent);

  function LanguageSelector() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LanguageSelector);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LanguageSelector.__proto__ || Object.getPrototypeOf(LanguageSelector)).call.apply(_ref, [this].concat(args))), _this), _this.handleLanguageChange = function () {
      var _this2;

      return (_this2 = _this).__handleLanguageChange__REACT_HOT_LOADER__.apply(_this2, arguments);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LanguageSelector, [{
    key: '__handleLanguageChange__REACT_HOT_LOADER__',
    value: function __handleLanguageChange__REACT_HOT_LOADER__(_ref2) {
      var value = _ref2.target.value;

      this.props.setLanguage(value);

      var targetUrl = this.props.location.pathname.replace('/' + this.props.language, '/' + value);
      this.props.history.push(targetUrl);
    }
  }, {
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'select',
        { className: 'language-selector', value: this.props.language, onChange: this.handleLanguageChange },
        __WEBPACK_IMPORTED_MODULE_1__i18n__["a" /* appLocales */].map(function (locale, index) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'option',
            { key: index, value: locale },
            locale
          );
        })
      );
    }
  }]);

  return LanguageSelector;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);
LanguageSelector.propTypes = {
  language: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired,
  setLanguage: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  history: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
  location: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired
};
;

var _temp2 = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(LanguageSelector, 'LanguageSelector', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/home/languageSelector/languageSelector.component.js');
}();

;

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Maintainer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var Maintainer = function (_PureComponent) {
  _inherits(Maintainer, _PureComponent);

  function Maintainer() {
    _classCallCheck(this, Maintainer);

    return _possibleConstructorReturn(this, (Maintainer.__proto__ || Object.getPrototypeOf(Maintainer)).apply(this, arguments));
  }

  _createClass(Maintainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'li',
        { className: 'maintainer' },
        this.props.data.get('firstName'),
        ' ',
        this.props.data.get('lastName'),
        ' <',
        this.props.data.get('email'),
        '>'
      );
    }
  }]);

  return Maintainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);
Maintainer.propTypes = {
  data: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Maintainer, 'Maintainer', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/home/maintainer/maintainer.component.js');
}();

;

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaintainerList; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_intl__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_intl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__maintainersList_messages__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__maintainer_maintainer_component__ = __webpack_require__(34);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var MaintainerList = function (_PureComponent) {
  _inherits(MaintainerList, _PureComponent);

  function MaintainerList() {
    _classCallCheck(this, MaintainerList);

    return _possibleConstructorReturn(this, (MaintainerList.__proto__ || Object.getPrototypeOf(MaintainerList)).apply(this, arguments));
  }

  _createClass(MaintainerList, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'maintainer-list' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h2',
          { className: 'maintainer-list__title' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_intl__["FormattedMessage"], __WEBPACK_IMPORTED_MODULE_2__maintainersList_messages__["a" /* default */].title),
          ':'
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'ul',
          null,
          this.props.items.toArray().map(function (item, key) {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__maintainer_maintainer_component__["a" /* Maintainer */], { key: key, data: item });
          })
        )
      );
    }
  }]);

  return MaintainerList;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);
MaintainerList.propTypes = {
  items: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(MaintainerList, 'MaintainerList', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/home/maintainerList/maintainerList.component.js');
}();

;

/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_intl__);


var _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_intl__["defineMessages"])({
  title: {
    id: 'home.maintainerList.title',
    defaultMessage: 'Maintainers'
  }
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/home/maintainerList/maintainersList.messages.js');
}();

;

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RootContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_locales_locales_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_container__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notFound__ = __webpack_require__(38);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var RootContainer = function (_PureComponent) {
  _inherits(RootContainer, _PureComponent);

  function RootContainer() {
    _classCallCheck(this, RootContainer);

    return _possibleConstructorReturn(this, (RootContainer.__proto__ || Object.getPrototypeOf(RootContainer)).apply(this, arguments));
  }

  _createClass(RootContainer, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/', render: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Redirect"], { to: __WEBPACK_IMPORTED_MODULE_2__modules_locales_locales_redux__["b" /* DEFAULT_LOCALE */] });
          } }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/404', component: __WEBPACK_IMPORTED_MODULE_5__notFound__["a" /* default */] }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"],
          { path: '/:lang' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_3__app_container__["a" /* default */],
            null,
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Switch"],
              null,
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { exact: true, path: '/:lang', component: __WEBPACK_IMPORTED_MODULE_4__home__["a" /* default */] }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["Route"], { component: __WEBPACK_IMPORTED_MODULE_5__notFound__["a" /* default */] })
            )
          )
        )
      );
    }
  }]);

  return RootContainer;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

var _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__["withRouter"])(RootContainer);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(RootContainer, 'RootContainer', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/index.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/index.js');
}();

;

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notFound_component__ = __webpack_require__(39);


var _default = __WEBPACK_IMPORTED_MODULE_0__notFound_component__["a" /* NotFound */];
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/notFound/index.js');
}();

;

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFound; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var NotFound = function (_PureComponent) {
  _inherits(NotFound, _PureComponent);

  function NotFound() {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'not-found' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, {
          title: 'Not Found'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'h1',
          null,
          '404'
        )
      );
    }
  }]);

  return NotFound;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(NotFound, 'NotFound', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/notFound/notFound.component.js');
}();

;

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "341f1a9d5f26b591f5ada657d4cf91c6.png";

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = {
	"home.maintainerList.title": "Maintainers",
	"home.welcome": "Hallo Welt!"
};

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = {
	"home.maintainerList.title": "Maintainers",
	"home.welcome": "Hello World!"
};

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = require("htmlescape");

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("lodash/defaultsDeep");

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/de");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(17);


/***/ })
/******/ ]);