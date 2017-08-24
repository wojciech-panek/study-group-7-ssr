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
/******/ 	return __webpack_require__(__webpack_require__.s = 68);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reduxsauce__ = __webpack_require__(11);
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

module.exports = require("immutable");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-intl");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("reselect");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaultsDeep__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_defaultsDeep___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_defaultsDeep__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__base__ = __webpack_require__(16);




var _default = __WEBPACK_IMPORTED_MODULE_0_lodash_defaultsDeep___default()({
  api: {
    serverUrl: 'http://localhost:4000/',
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
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return WeatherTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherActions; });
/* unused harmony export INITIAL_STATE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reduxsauce__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reduxsauce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reduxsauce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var _createActions = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reduxsauce__["createActions"])({
  getWeather: ['lat', 'lon'],
  getWeatherSuccess: ['data'],
  getWeatherFailure: ['error']
}, { prefix: 'WEATHER_' });

var WeatherTypes = _createActions.Types,
    WeatherActions = _createActions.Creators;



var CampaignRecord = new __WEBPACK_IMPORTED_MODULE_1_immutable__["Record"]({
  weather: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])()
});

var INITIAL_STATE = new CampaignRecord({});

var getWeatherSuccessHandler = function getWeatherSuccessHandler(state, action) {
  return state.merge({
    weather: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["fromJS"])(action.data)
  });
};

var reducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reduxsauce__["createReducer"])(INITIAL_STATE, _defineProperty({}, WeatherTypes.GET_WEATHER_SUCCESS, getWeatherSuccessHandler));
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(WeatherTypes, 'WeatherTypes', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/weather/weather.redux.js');

  __REACT_HOT_LOADER__.register(WeatherActions, 'WeatherActions', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/weather/weather.redux.js');

  __REACT_HOT_LOADER__.register(CampaignRecord, 'CampaignRecord', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/weather/weather.redux.js');

  __REACT_HOT_LOADER__.register(INITIAL_STATE, 'INITIAL_STATE', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/weather/weather.redux.js');

  __REACT_HOT_LOADER__.register(getWeatherSuccessHandler, 'getWeatherSuccessHandler', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/weather/weather.redux.js');

  __REACT_HOT_LOADER__.register(reducer, 'reducer', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/weather/weather.redux.js');
}();

;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("redux-saga/effects");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("reduxsauce");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("react-router-redux");

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderAppToStringAtLocation", function() { return renderAppToStringAtLocation; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_dom_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__modules_store__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__routes__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__htmlDocument__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_sagas__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_cache_cache__ = __webpack_require__(20);













function renderAppToString(store, url, context, userAgent) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
    __WEBPACK_IMPORTED_MODULE_2_react_redux__["Provider"],
    { store: store },
    __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(
      __WEBPACK_IMPORTED_MODULE_4_react_router__["StaticRouter"],
      {
        location: url,
        context: context
      },
      __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__routes__["a" /* default */], { userAgent: userAgent })
    )
  ));
}

function renderAppToStringAtLocation(url, _ref, callback) {
  var _ref$webpackDllNames = _ref.webpackDllNames,
      webpackDllNames = _ref$webpackDllNames === undefined ? [] : _ref$webpackDllNames,
      assets = _ref.assets,
      hostUrl = _ref.hostUrl,
      userAgent = _ref.userAgent;

  var context = {};
  var store = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__modules_store__["a" /* default */])();

  var cachedView = __WEBPACK_IMPORTED_MODULE_10__modules_cache_cache__["a" /* default */].getView(url);

  if (cachedView) {
    console.log('view cache hit', url);
    callback({ html: cachedView });
    return;
  }

  store.runSaga(__WEBPACK_IMPORTED_MODULE_9__modules_sagas__["a" /* default */]).done.then(function () {
    var state = store.getState().toJS();
    var appMarkup = renderAppToString(store, url, context, userAgent);

    var doc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_dom_server__["renderToString"])(__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__htmlDocument__["a" /* default */], {
      appMarkup: appMarkup,
      state: state,
      head: __WEBPACK_IMPORTED_MODULE_5_react_helmet___default.a.rewind(),
      assets: assets,
      webpackDllNames: webpackDllNames
    }));

    var html = '<!DOCTYPE html>\n' + doc;
    __WEBPACK_IMPORTED_MODULE_10__modules_cache_cache__["a" /* default */].setView(url, html);
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
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _default = {
  openweathermap: {
    apiUrl: 'http://api.openweathermap.org/data/2.5/weather',
    apiKey: '9901d7147c1af3a3b5cc0164969515c0'
  },
  viewCache: false,
  requestCache: true
};
/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/wpanek/Projects/study-group-7-ssr/app/environment/base.js');
}();

;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_htmlescape__ = __webpack_require__(49);
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
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('link', { rel: 'icon', type: 'image/png', href: __webpack_require__(39) }),
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
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return appLocales; });
/* unused harmony export formatTranslationMessages */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return translationMessages; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_intl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_intl_locale_data_en__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_intl_locale_data_en___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_intl_locale_data_en__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_intl_locale_data_de__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_intl_locale_data_de___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_intl_locale_data_de__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_modules_locales_locales_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translations_en_json__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__translations_en_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__translations_en_json__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__translations_de_json__ = __webpack_require__(46);
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
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export parseJSON */
/* unused harmony export requestSaga */
/* harmony export (immutable) */ __webpack_exports__["a"] = get;
/* unused harmony export post */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_env_config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_query_string__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__cache_cache__ = __webpack_require__(20);
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
  var headers, cachedResponse, response, parsedResponse;
  return regeneratorRuntime.wrap(function requestSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          headers = {
            'Content-Type': 'application/json'
          };
          cachedResponse = __WEBPACK_IMPORTED_MODULE_4__cache_cache__["a" /* default */].getRequest(url);

          if (!cachedResponse) {
            _context.next = 5;
            break;
          }

          console.log('request cache hit', url);
          return _context.abrupt('return', cachedResponse);

        case 5:
          _context.prev = 5;
          _context.next = 8;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(fetch, url, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_lodash__["assign"])({ headers: headers }, options));

        case 8:
          response = _context.sent;
          _context.next = 11;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(parseJSON, response);

        case 11:
          parsedResponse = _context.sent;

          __WEBPACK_IMPORTED_MODULE_4__cache_cache__["a" /* default */].setRequest(url, parsedResponse);
          return _context.abrupt('return', parsedResponse);

        case 16:
          _context.prev = 16;
          _context.t0 = _context['catch'](5);
          _context.next = 20;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux_saga_effects__["call"])(parseJSON, _context.t0);

        case 20:
          return _context.abrupt('return', _context.sent);

        case 21:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[5, 16]]);
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
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_cache__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_node_cache___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_node_cache__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_env_config__ = __webpack_require__(6);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var Cache = function () {
  function Cache() {
    _classCallCheck(this, Cache);

    this.viewCache = new __WEBPACK_IMPORTED_MODULE_0_node_cache___default.a({ stdTTL: 60 * 10 });
    this.requestCache = new __WEBPACK_IMPORTED_MODULE_0_node_cache___default.a({ stdTTL: 60 * 10 });
  }

  _createClass(Cache, [{
    key: 'shouldUseViewCache',
    value: function shouldUseViewCache() {
      return true && __WEBPACK_IMPORTED_MODULE_1_env_config__["a" /* default */].viewCache;
    }
  }, {
    key: 'shouldUseRequestCache',
    value: function shouldUseRequestCache() {
      return true && __WEBPACK_IMPORTED_MODULE_1_env_config__["a" /* default */].requestCache;
    }
  }, {
    key: 'setView',
    value: function setView(key, data) {
      if (this.shouldUseViewCache()) {
        this.viewCache.set(key, data);
      }
    }
  }, {
    key: 'getView',
    value: function getView(key) {
      return this.viewCache.get(key);
    }
  }, {
    key: 'setRequest',
    value: function setRequest(key, data) {
      if (this.shouldUseRequestCache()) {
        this.requestCache.set(key, data);
      }
    }
  }, {
    key: 'getRequest',
    value: function getRequest(key) {
      return this.requestCache.get(key);
    }
  }]);

  return Cache;
}();

var _default = new Cache();

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Cache, 'Cache', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/cache/cache.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/cache/cache.js');
}();

;

/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createReducer;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_immutable__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__router_router_redux__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__locales_locales_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__weather_weather_redux__ = __webpack_require__(7);






function createReducer() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_immutable__["combineReducers"])({
    route: __WEBPACK_IMPORTED_MODULE_1__router_router_redux__["a" /* reducer */],
    locales: __WEBPACK_IMPORTED_MODULE_2__locales_locales_redux__["a" /* reducer */],
    weather: __WEBPACK_IMPORTED_MODULE_3__weather_weather_redux__["c" /* reducer */]
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
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export INITIAL_STATE */
/* unused harmony export locationChangeHandler */
/* unused harmony export HANDLERS */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return reducer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reduxsauce__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_reduxsauce___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_reduxsauce__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_router_redux__ = __webpack_require__(14);
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
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rootSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__weather_weather_sagas__ = __webpack_require__(27);
var _marked = [rootSaga].map(regeneratorRuntime.mark);





function rootSaga() {
  return regeneratorRuntime.wrap(function rootSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["all"])([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__weather_weather_sagas__["a" /* default */])()]);

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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = configureStore;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_router_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_saga__ = __webpack_require__(67);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_saga___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_saga__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers__ = __webpack_require__(22);







var sagaMiddleware = __WEBPACK_IMPORTED_MODULE_4_redux_saga___default()();

function configureStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var history = arguments[1];

  var middlewares = [sagaMiddleware, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react_router_redux__["routerMiddleware"])(history)];

  var enhancers = [];

  if (true) {
    var _require = __webpack_require__(64),
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
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return weatherIconMaker; });
var iconMapping = {
  '200': {
    'label': 'thunderstorm with light rain',
    'icon': 'storm-showers'
  },
  '201': {
    'label': 'thunderstorm with rain',
    'icon': 'storm-showers'
  },
  '202': {
    'label': 'thunderstorm with heavy rain',
    'icon': 'storm-showers'
  },
  '210': {
    'label': 'light thunderstorm',
    'icon': 'storm-showers'
  },
  '211': {
    'label': 'thunderstorm',
    'icon': 'thunderstorm'
  },
  '212': {
    'label': 'heavy thunderstorm',
    'icon': 'thunderstorm'
  },
  '221': {
    'label': 'ragged thunderstorm',
    'icon': 'thunderstorm'
  },
  '230': {
    'label': 'thunderstorm with light drizzle',
    'icon': 'storm-showers'
  },
  '231': {
    'label': 'thunderstorm with drizzle',
    'icon': 'storm-showers'
  },
  '232': {
    'label': 'thunderstorm with heavy drizzle',
    'icon': 'storm-showers'
  },
  '300': {
    'label': 'light intensity drizzle',
    'icon': 'sprinkle'
  },
  '301': {
    'label': 'drizzle',
    'icon': 'sprinkle'
  },
  '302': {
    'label': 'heavy intensity drizzle',
    'icon': 'sprinkle'
  },
  '310': {
    'label': 'light intensity drizzle rain',
    'icon': 'sprinkle'
  },
  '311': {
    'label': 'drizzle rain',
    'icon': 'sprinkle'
  },
  '312': {
    'label': 'heavy intensity drizzle rain',
    'icon': 'sprinkle'
  },
  '313': {
    'label': 'shower rain and drizzle',
    'icon': 'sprinkle'
  },
  '314': {
    'label': 'heavy shower rain and drizzle',
    'icon': 'sprinkle'
  },
  '321': {
    'label': 'shower drizzle',
    'icon': 'sprinkle'
  },
  '500': {
    'label': 'light rain',
    'icon': 'rain'
  },
  '501': {
    'label': 'moderate rain',
    'icon': 'rain'
  },
  '502': {
    'label': 'heavy intensity rain',
    'icon': 'rain'
  },
  '503': {
    'label': 'very heavy rain',
    'icon': 'rain'
  },
  '504': {
    'label': 'extreme rain',
    'icon': 'rain'
  },
  '511': {
    'label': 'freezing rain',
    'icon': 'rain-mix'
  },
  '520': {
    'label': 'light intensity shower rain',
    'icon': 'showers'
  },
  '521': {
    'label': 'shower rain',
    'icon': 'showers'
  },
  '522': {
    'label': 'heavy intensity shower rain',
    'icon': 'showers'
  },
  '531': {
    'label': 'ragged shower rain',
    'icon': 'showers'
  },
  '600': {
    'label': 'light snow',
    'icon': 'snow'
  },
  '601': {
    'label': 'snow',
    'icon': 'snow'
  },
  '602': {
    'label': 'heavy snow',
    'icon': 'snow'
  },
  '611': {
    'label': 'sleet',
    'icon': 'sleet'
  },
  '612': {
    'label': 'shower sleet',
    'icon': 'sleet'
  },
  '615': {
    'label': 'light rain and snow',
    'icon': 'rain-mix'
  },
  '616': {
    'label': 'rain and snow',
    'icon': 'rain-mix'
  },
  '620': {
    'label': 'light shower snow',
    'icon': 'rain-mix'
  },
  '621': {
    'label': 'shower snow',
    'icon': 'rain-mix'
  },
  '622': {
    'label': 'heavy shower snow',
    'icon': 'rain-mix'
  },
  '701': {
    'label': 'mist',
    'icon': 'sprinkle'
  },
  '711': {
    'label': 'smoke',
    'icon': 'smoke'
  },
  '721': {
    'label': 'haze',
    'icon': 'day-haze'
  },
  '731': {
    'label': 'sand, dust whirls',
    'icon': 'cloudy-gusts'
  },
  '741': {
    'label': 'fog',
    'icon': 'fog'
  },
  '751': {
    'label': 'sand',
    'icon': 'cloudy-gusts'
  },
  '761': {
    'label': 'dust',
    'icon': 'dust'
  },
  '762': {
    'label': 'volcanic ash',
    'icon': 'smog'
  },
  '771': {
    'label': 'squalls',
    'icon': 'day-windy'
  },
  '781': {
    'label': 'tornado',
    'icon': 'tornado'
  },
  '800': {
    'label': 'clear sky',
    'icon': 'sunny'
  },
  '801': {
    'label': 'few clouds',
    'icon': 'cloudy'
  },
  '802': {
    'label': 'scattered clouds',
    'icon': 'cloudy'
  },
  '803': {
    'label': 'broken clouds',
    'icon': 'cloudy'
  },
  '804': {
    'label': 'overcast clouds',
    'icon': 'cloudy'
  },
  '900': {
    'label': 'tornado',
    'icon': 'tornado'
  },
  '901': {
    'label': 'tropical storm',
    'icon': 'hurricane'
  },
  '902': {
    'label': 'hurricane',
    'icon': 'hurricane'
  },
  '903': {
    'label': 'cold',
    'icon': 'snowflake-cold'
  },
  '904': {
    'label': 'hot',
    'icon': 'hot'
  },
  '905': {
    'label': 'windy',
    'icon': 'windy'
  },
  '906': {
    'label': 'hail',
    'icon': 'hail'
  },
  '951': {
    'label': 'calm',
    'icon': 'sunny'
  },
  '952': {
    'label': 'light breeze',
    'icon': 'cloudy-gusts'
  },
  '953': {
    'label': 'gentle breeze',
    'icon': 'cloudy-gusts'
  },
  '954': {
    'label': 'moderate breeze',
    'icon': 'cloudy-gusts'
  },
  '955': {
    'label': 'fresh breeze',
    'icon': 'cloudy-gusts'
  },
  '956': {
    'label': 'strong breeze',
    'icon': 'cloudy-gusts'
  },
  '957': {
    'label': 'high wind, near gale',
    'icon': 'cloudy-gusts'
  },
  '958': {
    'label': 'gale',
    'icon': 'cloudy-gusts'
  },
  '959': {
    'label': 'severe gale',
    'icon': 'cloudy-gusts'
  },
  '960': {
    'label': 'storm',
    'icon': 'thunderstorm'
  },
  '961': {
    'label': 'violent storm',
    'icon': 'thunderstorm'
  },
  '962': {
    'label': 'hurricane',
    'icon': 'cloudy-gusts'
  }
};

var weatherIconMaker = function weatherIconMaker(code) {
  var iconMap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : iconMapping;

  var prefix = 'wi wi-';
  var icon = iconMap[code].icon;

  // If we are not in the ranges mentioned above, add a day/night prefix.
  if (!(code > 699 && code < 800) && !(code > 899 && code < 1000)) {
    icon = 'day-' + icon;
  }

  // Finally tack on the prefix.
  return prefix + icon;
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(iconMapping, 'iconMapping', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/weather/weather.icon.helper.js');

  __REACT_HOT_LOADER__.register(weatherIconMaker, 'weatherIconMaker', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/weather/weather.icon.helper.js');
}();

;

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getWeatherSaga */
/* harmony export (immutable) */ __webpack_exports__["a"] = weatherSaga;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_redux_saga_effects___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_env_config__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__weather_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__api_api_sagas__ = __webpack_require__(19);
var _marked = [getWeatherSaga, weatherSaga].map(regeneratorRuntime.mark);







function getWeatherSaga(_ref) {
  var lat = _ref.lat,
      lon = _ref.lon;
  var data;
  return regeneratorRuntime.wrap(function getWeatherSaga$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["call"])(__WEBPACK_IMPORTED_MODULE_3__api_api_sagas__["a" /* get */], 'api/openweathermap/', {
            lat: lat,
            lon: lon,
            appid: __WEBPACK_IMPORTED_MODULE_1_env_config__["a" /* default */].openweathermap.apiKey
          });

        case 3:
          data = _context.sent;
          _context.next = 6;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__weather_redux__["a" /* WeatherActions */].getWeatherSuccess(data));

        case 6:
          _context.next = 12;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context['catch'](0);
          _context.next = 12;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["put"])(__WEBPACK_IMPORTED_MODULE_2__weather_redux__["a" /* WeatherActions */].getWeatherFailure(_context.t0));

        case 12:
        case 'end':
          return _context.stop();
      }
    }
  }, _marked[0], this, [[0, 8]]);
}

function weatherSaga() {
  return regeneratorRuntime.wrap(function weatherSaga$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_redux_saga_effects__["takeLatest"])(__WEBPACK_IMPORTED_MODULE_2__weather_redux__["b" /* WeatherTypes */].GET_WEATHER, getWeatherSaga);

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

  __REACT_HOT_LOADER__.register(getWeatherSaga, 'getWeatherSaga', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/weather/weather.sagas.js');

  __REACT_HOT_LOADER__.register(weatherSaga, 'weatherSaga', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/weather/weather.sagas.js');
}();

;

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectWeather; });
/* unused harmony export selectClouds */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_immutable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_immutable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_kelvin_to_celsius__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_kelvin_to_celsius___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_kelvin_to_celsius__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__weather_icon_helper__ = __webpack_require__(26);





var selectWeatherDomain = function selectWeatherDomain(state) {
  return state.get('weather');
};

var selectWeather = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(selectWeatherDomain, function (state) {
  var temp = parseInt(__WEBPACK_IMPORTED_MODULE_2_kelvin_to_celsius___default()(parseInt(state.getIn(['weather', 'main', 'temp']), 10)), 10);
  var pressure = state.getIn(['weather', 'main', 'pressure']);
  var humidity = state.getIn(['weather', 'main', 'humidity']);
  var localization = state.getIn(['weather', 'name']);
  var clouds = state.getIn(['weather', 'clouds', 'all']);
  return state.getIn(['weather', 'weather'], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_immutable__["List"])()).map(function (weather) {
    var modernIcon = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__weather_icon_helper__["a" /* weatherIconMaker */])(weather.get('id'));
    var description = '' + weather.get('main');

    return weather.merge({
      description: '' + description,
      temp: temp + ' \u2103',
      pressure: pressure + ' hPa',
      humidity: '' + humidity,
      modernIcon: '' + modernIcon,
      localization: '' + localization,
      clouds: '' + clouds
    });
  });
});

var selectClouds = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_reselect__["createSelector"])(selectWeatherDomain, function (state) {
  return state.getIn(['weather', 'clouds', 'all']) > 50;
});
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(selectWeatherDomain, 'selectWeatherDomain', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/weather/weather.selectors.js');

  __REACT_HOT_LOADER__.register(selectWeather, 'selectWeather', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/weather/weather.selectors.js');

  __REACT_HOT_LOADER__.register(selectClouds, 'selectClouds', '/Users/wpanek/Projects/study-group-7-ssr/app/modules/weather/weather.selectors.js');
}();

;

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AppComponent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return App; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_intl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_intl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_styles_MuiThemeProvider__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_material_ui_styles_MuiThemeProvider___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_material_ui_styles_MuiThemeProvider__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles_getMuiTheme__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_material_ui_styles_getMuiTheme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_material_ui_styles_getMuiTheme__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles_colors__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_material_ui_styles_colors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_material_ui_styles_colors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__i18n__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modules_locales_locales_redux__ = __webpack_require__(1);
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
      var language = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_lodash__["get"])(this.props.match, 'params.lang', __WEBPACK_IMPORTED_MODULE_10__modules_locales_locales_redux__["b" /* DEFAULT_LOCALE */]);
      if (!__WEBPACK_IMPORTED_MODULE_9__i18n__["a" /* appLocales */].includes(language)) {
        this.props.history.push('/404');
      }

      this.props.setLanguage(language);
    }
  }, {
    key: 'render',
    value: function render() {
      var language = this.props.language || __WEBPACK_IMPORTED_MODULE_10__modules_locales_locales_redux__["b" /* DEFAULT_LOCALE */];
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'app' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, {
          titleTemplate: '%s - React-Redux Exercise',
          defaultTitle: 'React-Redux Exercise'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_react_intl__["IntlProvider"],
          {
            locale: language,
            messages: __WEBPACK_IMPORTED_MODULE_9__i18n__["b" /* translationMessages */][language]
          },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_6_material_ui_styles_MuiThemeProvider___default.a,
            { muiTheme: this.muiTheme },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'app__content' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_material_ui_AppBar___default.a, {
                title: 'with SSR',
                showMenuIconButton: false
              }),
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.only(this.props.children)
            )
          )
        )
      );
    }
  }, {
    key: 'muiTheme',
    get: function get() {
      return __WEBPACK_IMPORTED_MODULE_7_material_ui_styles_getMuiTheme___default()({
        palette: {
          primary1Color: __WEBPACK_IMPORTED_MODULE_8_material_ui_styles_colors__["green500"],
          primary2Color: __WEBPACK_IMPORTED_MODULE_8_material_ui_styles_colors__["green700"],
          accent1Color: __WEBPACK_IMPORTED_MODULE_8_material_ui_styles_colors__["amber800"],
          pickerHeaderColor: __WEBPACK_IMPORTED_MODULE_8_material_ui_styles_colors__["green500"]
        },
        userAgent: this.props.userAgent
      });
    }
  }]);

  return AppComponent;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);

AppComponent.propTypes = {
  language: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string,
  children: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].node,
  setLanguage: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired,
  match: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
  history: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
  userAgent: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
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
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mapDispatchToProps */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reselect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__modules_locales_locales_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_locales_locales_selectors__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(29);








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
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeatherWidget; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_intl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_intl__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_material_ui_Card___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_material_ui_Card__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_CircularProgress__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_material_ui_CircularProgress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_material_ui_CircularProgress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__weather_0_jpg__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__weather_0_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__weather_0_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__weather_20_jpg__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__weather_20_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__weather_20_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__weather_40_jpg__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__weather_40_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__weather_40_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__weather_60_jpg__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__weather_60_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__weather_60_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__weather_80_jpg__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__weather_80_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__weather_80_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__weather_100_jpg__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__weather_100_jpg___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__weather_100_jpg__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__weatherWidget_messages__ = __webpack_require__(33);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }












var weatherBackgroundMap = {
  0: __WEBPACK_IMPORTED_MODULE_4__weather_0_jpg___default.a,
  20: __WEBPACK_IMPORTED_MODULE_5__weather_20_jpg___default.a,
  40: __WEBPACK_IMPORTED_MODULE_6__weather_40_jpg___default.a,
  60: __WEBPACK_IMPORTED_MODULE_7__weather_60_jpg___default.a,
  80: __WEBPACK_IMPORTED_MODULE_8__weather_80_jpg___default.a,
  100: __WEBPACK_IMPORTED_MODULE_9__weather_100_jpg___default.a
};


var WeatherWidget = function (_PureComponent) {
  _inherits(WeatherWidget, _PureComponent);

  function WeatherWidget() {
    _classCallCheck(this, WeatherWidget);

    return _possibleConstructorReturn(this, (WeatherWidget.__proto__ || Object.getPrototypeOf(WeatherWidget)).apply(this, arguments));
  }

  _createClass(WeatherWidget, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      if (this.props.weather.size === 0) {
        this.props.getWeather(52.414265, 16.9179619);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var weather = this.props.weather.get(0);
      var weatherBg = function weatherBg(cloudsStr) {
        var clouds = parseInt(cloudsStr, 10);
        if (clouds >= 90) {
          return 100;
        }
        if (clouds >= 70) {
          return 80;
        }
        if (clouds >= 50) {
          return 60;
        }
        if (clouds >= 30) {
          return 40;
        }
        if (clouds >= 10) {
          return 20;
        }
        return 0;
      };

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'weather-widget' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["Card"],
          null,
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["CardHeader"], {
            title: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_intl__["FormattedMessage"], __WEBPACK_IMPORTED_MODULE_10__weatherWidget_messages__["a" /* default */].title)
          }),
          !weather || !weather.size ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'flickr-photos__loader' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_material_ui_CircularProgress___default.a, { size: 80, thickness: 5 })
          ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            __WEBPACK_IMPORTED_MODULE_2_material_ui_Card__["CardMedia"],
            { key: weather.get('id') },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
              'div',
              { className: 'weather-box' },
              __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'weather-box__right' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('i', { className: weather.get('modernIcon') }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'weather-box__temp' },
                  weather.get('temp')
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'weather-box__localization' },
                  weather.get('localization')
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                  'span',
                  { className: 'weather-box__pressure' },
                  weather.get('pressure')
                )
              )
            ),
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('img', { className: '', src: weatherBackgroundMap[weatherBg(weather.get('clouds'))], alt: '' })
          )
        )
      );
    }
  }]);

  return WeatherWidget;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);
WeatherWidget.propTypes = {
  weather: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].object.isRequired,
  getWeather: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].func.isRequired
};
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(weatherBackgroundMap, 'weatherBackgroundMap', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/home/components/weatherWidget/weatherWidget.component.js');

  __REACT_HOT_LOADER__.register(WeatherWidget, 'WeatherWidget', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/home/components/weatherWidget/weatherWidget.component.js');
}();

;

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mapDispatchToProps */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_redux___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_redux__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reselect__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_reselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_reselect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__weatherWidget_component__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__modules_weather_weather_redux__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__modules_weather_weather_selectors__ = __webpack_require__(28);








var mapStateToProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_reselect__["createStructuredSelector"])({
  weather: __WEBPACK_IMPORTED_MODULE_5__modules_weather_weather_selectors__["a" /* selectWeather */]
});

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_redux__["bindActionCreators"])({
    getWeather: __WEBPACK_IMPORTED_MODULE_4__modules_weather_weather_redux__["a" /* WeatherActions */].getWeather
  }, dispatch);
};

var _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_redux__["connect"])(mapStateToProps, mapDispatchToProps)(__WEBPACK_IMPORTED_MODULE_3__weatherWidget_component__["a" /* WeatherWidget */]);

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(mapStateToProps, 'mapStateToProps', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/home/components/weatherWidget/weatherWidget.container.js');

  __REACT_HOT_LOADER__.register(mapDispatchToProps, 'mapDispatchToProps', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/home/components/weatherWidget/weatherWidget.container.js');

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/home/components/weatherWidget/weatherWidget.container.js');
}();

;

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_intl___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_intl__);


var _default = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react_intl__["defineMessages"])({
  title: {
    id: 'weatherWidget.title',
    defaultMessage: 'Current weather'
  }
});

/* harmony default export */ __webpack_exports__["a"] = (_default);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(_default, 'default', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/home/components/weatherWidget/weatherWidget.messages.js');
}();

;

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_weatherWidget_weatherWidget_container__ = __webpack_require__(32);
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
    key: 'render',
    value: function render() {
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        { className: 'home' },
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_helmet___default.a, {
          title: 'Homepage'
        }),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
          'div',
          { className: 'home__weather' },
          __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_weatherWidget_weatherWidget_container__["a" /* default */], null)
        )
      );
    }
  }]);

  return Home;
}(__WEBPACK_IMPORTED_MODULE_0_react__["PureComponent"]);
;

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(Home, 'Home', '/Users/wpanek/Projects/study-group-7-ssr/app/routes/home/home.component.js');
}();

;

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__(34);


var _default = __WEBPACK_IMPORTED_MODULE_0__home_component__["a" /* Home */];
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
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RootContainer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_router_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modules_locales_locales_redux__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_container__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__notFound__ = __webpack_require__(37);
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
      var userAgent = this.props.userAgent;


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
            { userAgent: userAgent },
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

RootContainer.propTypes = {
  userAgent: __WEBPACK_IMPORTED_MODULE_0_react__["PropTypes"].string.isRequired
};

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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__notFound_component__ = __webpack_require__(38);


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
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFound; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_helmet__ = __webpack_require__(3);
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "341f1a9d5f26b591f5ada657d4cf91c6.png";

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "dff18a96f9b0b8967aba07291ef383c6.jpg";

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "424ce35f293cdf2e3ac3b184484556bd.jpg";

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "11489cea47fd823de01833a7fd8e3dd7.jpg";

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "aa67211b7eb27046e6bddd81406d6e46.jpg";

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b4237a9671b1aa7a08f5fcca46411b44.jpg";

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "b156ec7bc8e1018b487b14ddda98dd94.jpg";

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = {
	"weatherWidget.title": "Aktuelle Wetterlage"
};

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = {
	"weatherWidget.title": "Current weather"
};

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = require("htmlescape");

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = require("kelvin-to-celsius");

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = require("lodash/defaultsDeep");

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = require("material-ui/AppBar");

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Card");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("material-ui/CircularProgress");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/MuiThemeProvider");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/colors");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("material-ui/styles/getMuiTheme");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("node-cache");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/de");

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = require("react-intl/locale-data/en");

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("redux-devtools");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("redux-immutable");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("redux-logger");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("redux-saga");

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ })
/******/ ]);