require("source-map-support").install();
module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _stringify = __webpack_require__(1);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  __webpack_require__(2);
  
  var _path = __webpack_require__(3);
  
  var _path2 = _interopRequireDefault(_path);
  
  var _express = __webpack_require__(4);
  
  var _express2 = _interopRequireDefault(_express);
  
  var _compression = __webpack_require__(5);
  
  var _compression2 = _interopRequireDefault(_compression);
  
  var _bodyParser = __webpack_require__(6);
  
  var _bodyParser2 = _interopRequireDefault(_bodyParser);
  
  var _config = __webpack_require__(7);
  
  var _serverMiddleWares = __webpack_require__(8);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  if (false) {
    // http://www.slideshare.net/denisizmaylov/isomorphic-react-applications-performance-and-scalability
    // https://github.com/facebook/react/issues/812#issuecomment-172929366
    process.env = JSON.parse((0, _stringify2.default)(process.env));
  }
  
  var app = (0, _express2.default)();
  
  //
  // Tell any CSS tooling (such as Material UI) to use all vendor prefixes if the
  // user agent is not known.
  // -----------------------------------------------------------------------------
  global.navigator = global.navigator || {};
  global.navigator.userAgent = global.navigator.userAgent || 'all';
  
  //
  // Register Node.js middleware
  // -----------------------------------------------------------------------------
  app.use((0, _compression2.default)());
  app.use(_express2.default.static(_path2.default.join(__dirname, 'public')));
  app.use(_bodyParser2.default.urlencoded({ extended: true }));
  app.use(_bodyParser2.default.json());
  
  //
  // Register server-side rendering middleware
  // -----------------------------------------------------------------------------
  (0, _serverMiddleWares.serverSideRender)(app);
  
  //
  // Error handling
  // -----------------------------------------------------------------------------
  
  app.use(function (err, req, res, next) {
    // eslint-disable-line no-unused-vars
    logger.error(err, { pid: process.pid, remoteAddress: req.connection.remoteAddress });
  
    var template = __webpack_require__(74); // eslint-disable-line global-require
    var statusCode = err.status || 500;
    res.status(statusCode);
    res.send(template({
      message: err.message,
      stack:  false ? '' : err.stack
    }));
  });
  
  //
  // Launch the server
  app.listen(_config.port, function () {
    console.log(("development") + ' The server is running at http://localhost:' + _config.port + '/');
  });

/***/ },
/* 1 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/json/stringify");

/***/ },
/* 2 */
/***/ function(module, exports) {

  module.exports = require("babel-polyfill");

/***/ },
/* 3 */
/***/ function(module, exports) {

  module.exports = require("path");

/***/ },
/* 4 */
/***/ function(module, exports) {

  module.exports = require("express");

/***/ },
/* 5 */
/***/ function(module, exports) {

  module.exports = require("compression");

/***/ },
/* 6 */
/***/ function(module, exports) {

  module.exports = require("body-parser");

/***/ },
/* 7 */
/***/ function(module, exports) {

  "use strict";
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var port = exports.port = process.env.PORT || 3111;
  var host = exports.host = process.env.WEBSITE_HOSTNAME || "localhost:" + port;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  exports.serverSideRender = undefined;
  
  var _serverSideRender = __webpack_require__(9);
  
  var _serverSideRender2 = _interopRequireDefault(_serverSideRender);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.serverSideRender = _serverSideRender2.default;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _typeof2 = __webpack_require__(10);
  
  var _typeof3 = _interopRequireDefault(_typeof2);
  
  var _regenerator = __webpack_require__(11);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _toConsumableArray2 = __webpack_require__(12);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _stringify = __webpack_require__(1);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _set = __webpack_require__(13);
  
  var _set2 = _interopRequireDefault(_set);
  
  var _asyncToGenerator2 = __webpack_require__(14);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _configureStore = __webpack_require__(15);
  
  var _configureStore2 = _interopRequireDefault(_configureStore);
  
  var _server = __webpack_require__(28);
  
  var _server2 = _interopRequireDefault(_server);
  
  var _universalRouter = __webpack_require__(29);
  
  var _routes = __webpack_require__(30);
  
  var _routes2 = _interopRequireDefault(_routes);
  
  var _assets = __webpack_require__(70);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _memoizee = __webpack_require__(52);
  
  var _memoizee2 = _interopRequireDefault(_memoizee);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var template = __webpack_require__(71); // eslint-disable-line global-require
  // eslint-disable-line import/no-unresolved
  // import logger from './logger';
  
  // import { setRuntimeVariable } from '../actions';
  var getTemplateData = function getTemplateData(path) {
    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    return data && template(data);
  };
  var memoized = (0, _memoizee2.default)(getTemplateData, { length: 1, maxAge: 20000 });
  var isProduction = ("development") === 'production';
  
  module.exports = function serverSideRender(app) {
    var _this = this;
  
    app.get('*', function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2(req, res, next) {
        var result, _ret;
  
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!isProduction) {
                  _context2.next = 6;
                  break;
                }
  
                result = memoized(req.path);
  
                if (!result) {
                  _context2.next = 5;
                  break;
                }
  
                res.status(200);
                return _context2.abrupt('return', res.send(result));
  
              case 5:
                memoized.delete(req.path, true);
  
              case 6:
                _context2.prev = 6;
                return _context2.delegateYield(_regenerator2.default.mark(function _callee() {
                  var css, statusCode, data, store;
                  return _regenerator2.default.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          css = new _set2.default();
                          statusCode = 200;
                          data = { title: '', description: '', keywords: '',
                            css: '', body: '', entry: _assets2.default.main.js };
                          store = (0, _configureStore2.default)({}, {
                            cookie: req.headers.cookie
                          });
                          _context.next = 6;
                          return (0, _universalRouter.match)(_routes2.default, {
                            path: req.path,
                            query: req.query,
                            context: {
                              store: store,
                              insertCss: function insertCss(styles) {
                                return css.add(styles._getCss());
                              },
                              setTitle: function setTitle(value) {
                                return data.title = value;
                              },
                              setMeta: function setMeta(key, value) {
                                return data[key] = value;
                              }
                            },
                            render: function render(component) {
                              var status = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;
  
                              css = new _set2.default();
                              statusCode = status;
                              data.state = (0, _stringify2.default)(store.getState());
                              data.body = _server2.default.renderToString(component);
                              data.css = [].concat((0, _toConsumableArray3.default)(css)).join('');
                              return true;
                            }
                          });
  
                        case 6:
                          res.status(statusCode);
                          return _context.abrupt('return', {
                            v: res.send(isProduction ? memoized(req.path, data) : template(data))
                          });
  
                        case 8:
                        case 'end':
                          return _context.stop();
                      }
                    }
                  }, _callee, _this);
                })(), 't0', 8);
  
              case 8:
                _ret = _context2.t0;
  
                if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {
                  _context2.next = 11;
                  break;
                }
  
                return _context2.abrupt('return', _ret.v);
  
              case 11:
                _context2.next = 16;
                break;
  
              case 13:
                _context2.prev = 13;
                _context2.t1 = _context2['catch'](6);
                return _context2.abrupt('return', next(_context2.t1));
  
              case 16:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, _this, [[6, 13]]);
      }));
  
      return function (_x2, _x3, _x4) {
        return _ref.apply(this, arguments);
      };
    }());
  };

/***/ },
/* 10 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/typeof");

/***/ },
/* 11 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/regenerator");

/***/ },
/* 12 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/toConsumableArray");

/***/ },
/* 13 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/set");

/***/ },
/* 14 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.default = configureStore;
  
  var _redux = __webpack_require__(16);
  
  var _reduxThunk = __webpack_require__(17);
  
  var _reduxThunk2 = _interopRequireDefault(_reduxThunk);
  
  var _reducers = __webpack_require__(18);
  
  var _reducers2 = _interopRequireDefault(_reducers);
  
  var _createHelpers = __webpack_require__(22);
  
  var _createHelpers2 = _interopRequireDefault(_createHelpers);
  
  var _reduxLogger = __webpack_require__(27);
  
  var _reduxLogger2 = _interopRequireDefault(_reduxLogger);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function configureStore(initialState, helpersConfig) {
    var helpers = (0, _createHelpers2.default)(helpersConfig);
    var middleware = [_reduxThunk2.default.withExtraArgument(helpers)];
  
    var enhancer = void 0;
  
    if (true) {
      if (false) {
        var createLogger = _reduxLogger2.default;
        middleware.push(createLogger({
          collapsed: true
        }));
      } else {
        // Server side redux action logger
        middleware.push(function (store) {
          return function (next) {
            return function (action) {
              // eslint-disable-line no-unused-vars
              return next(action);
            };
          };
        });
      }
  
      // https://github.com/zalmoxisus/redux-devtools-extension#redux-devtools-extension
      var devToolsExtension = function devToolsExtension(f) {
        return f;
      };
      if (false) {
        devToolsExtension = window.devToolsExtension();
      }
  
      enhancer = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware), devToolsExtension);
    } else {
      enhancer = _redux.applyMiddleware.apply(undefined, middleware);
    }
  
    // See https://github.com/rackt/redux/releases/tag/v3.1.0
    var store = (0, _redux.createStore)(_reducers2.default, initialState, enhancer);
  
    // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
    if (false) {
      module.hot.accept('../reducers', function () {
        return store.replaceReducer(_reducers2.default.default);
      });
    }
  
    return store;
  }

/***/ },
/* 16 */
/***/ function(module, exports) {

  module.exports = require("redux");

/***/ },
/* 17 */
/***/ function(module, exports) {

  module.exports = require("redux-thunk");

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _redux = __webpack_require__(16);
  
  var _imageList = __webpack_require__(19);
  
  exports.default = (0, _redux.combineReducers)({
      imageList: _imageList.imageList
  });

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _toConsumableArray2 = __webpack_require__(12);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _reject2 = __webpack_require__(20);
  
  var _reject3 = _interopRequireDefault(_reject2);
  
  exports.imageList = imageList;
  
  var _constants = __webpack_require__(21);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function imageList() {
      var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var action = arguments[1];
      var type = action.type,
          payload = action.payload;
  
      switch (type) {
          case _constants.ADD_IMAGE:
              return [].concat((0, _toConsumableArray3.default)(state), [payload]);
          case _constants.REMOVE_IMAGE:
              return (0, _reject3.default)(state, function (el) {
                  return el === payload;
              });
          default:
              return state;
      }
  }

/***/ },
/* 20 */
/***/ function(module, exports) {

  module.exports = require("lodash/reject");

/***/ },
/* 21 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  // Action constants
  var ADD_IMAGE = exports.ADD_IMAGE = 'ADD_IMAGE';
  var REMOVE_IMAGE = exports.REMOVE_IMAGE = 'REMOVE_IMAGE';

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(23);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  exports.default = createHelpers;
  
  var _fetch = __webpack_require__(24);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function createFetchKnowingCookie(_ref) {
    var cookie = _ref.cookie;
  
    if (true) {
      return function (url) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  
        var isLocalUrl = /^\/($|[^\/])/.test(url);
  
        // pass cookie only for itself.
        // We can't know cookies for other sites BTW
        if (isLocalUrl && options.credentials === 'include') {
          var headers = (0, _extends3.default)({}, options.headers, {
            cookie: cookie
          });
          return (0, _fetch2.default)(url, (0, _extends3.default)({}, options, { headers: headers }));
        }
  
        return (0, _fetch2.default)(url, options);
      };
    }
  
    return _fetch2.default;
  }
  
  function createHelpers(config) {
    var fetchKnowingCookie = createFetchKnowingCookie(config);
  
    return {
      fetch: fetchKnowingCookie
    };
  }

/***/ },
/* 23 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/extends");

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Response = exports.Headers = exports.Request = exports.default = undefined;
  
  var _bluebird = __webpack_require__(25);
  
  var _bluebird2 = _interopRequireDefault(_bluebird);
  
  var _nodeFetch = __webpack_require__(26);
  
  var _nodeFetch2 = _interopRequireDefault(_nodeFetch);
  
  var _config = __webpack_require__(7);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  _nodeFetch2.default.Promise = _bluebird2.default; /**
                                                     * React Starter Kit (https://www.reactstarterkit.com/)
                                                     *
                                                     * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
                                                     *
                                                     * This source code is licensed under the MIT license found in the
                                                     * LICENSE.txt file in the root directory of this source tree.
                                                     */
  
  _nodeFetch.Response.Promise = _bluebird2.default;
  
  function localUrl(url) {
    if (url.startsWith('//')) {
      return 'https:' + url;
    }
  
    if (url.startsWith('http')) {
      return url;
    }
  
    return 'http://' + _config.host + url;
  }
  
  function localFetch(url, options) {
    return (0, _nodeFetch2.default)(localUrl(url), options);
  }
  
  exports.default = localFetch;
  exports.Request = _nodeFetch.Request;
  exports.Headers = _nodeFetch.Headers;
  exports.Response = _nodeFetch.Response;

/***/ },
/* 25 */
/***/ function(module, exports) {

  module.exports = require("bluebird");

/***/ },
/* 26 */
/***/ function(module, exports) {

  module.exports = require("node-fetch");

/***/ },
/* 27 */
/***/ function(module, exports) {

  module.exports = require("redux-logger");

/***/ },
/* 28 */
/***/ function(module, exports) {

  module.exports = require("react-dom/server");

/***/ },
/* 29 */
/***/ function(module, exports) {

  module.exports = require("universal-router");

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _regenerator = __webpack_require__(11);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(14);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(31);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(32);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _home = __webpack_require__(49);
  
  var _home2 = _interopRequireDefault(_home);
  
  var _error = __webpack_require__(63);
  
  var _error2 = _interopRequireDefault(_error);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // Child routes
  exports.default = {
  
    path: '/',
  
    children: [_home2.default, _error2.default],
  
    action: function action(_ref) {
      var _this = this;
  
      var next = _ref.next,
          render = _ref.render,
          context = _ref.context;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var component;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();
  
              case 2:
                component = _context.sent;
  
                if (!(component === undefined)) {
                  _context.next = 5;
                  break;
                }
  
                return _context.abrupt('return', component);
  
              case 5:
                return _context.abrupt('return', render(_react2.default.createElement(
                  _App2.default,
                  { context: context },
                  component
                )));
  
              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
  };

/***/ },
/* 31 */
/***/ function(module, exports) {

  module.exports = require("react");

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(33);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(34);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(35);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(36);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(37);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(31);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _emptyFunction = __webpack_require__(38);
  
  var _emptyFunction2 = _interopRequireDefault(_emptyFunction);
  
  var _reactRedux = __webpack_require__(39);
  
  var _AppContainer = __webpack_require__(40);
  
  var _AppContainer2 = _interopRequireDefault(_AppContainer);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var App = function (_Component) {
    (0, _inherits3.default)(App, _Component);
  
    function App() {
      (0, _classCallCheck3.default)(this, App);
      return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(App, [{
      key: 'getChildContext',
      value: function getChildContext() {
        var context = this.props.context;
        return {
          insertCss: context.insertCss || _emptyFunction2.default,
          setTitle: context.setTitle || _emptyFunction2.default,
          setMeta: context.setMeta || _emptyFunction2.default
        };
      }
    }, {
      key: 'render',
      value: function render() {
        var store = this.props.context.store;
        return _react2.default.createElement(
          _reactRedux.Provider,
          { store: store },
          _react2.default.createElement(_AppContainer2.default, { children: this.props.children })
        );
      }
    }]);
    return App;
  }(_react.Component);
  
  App.propTypes = {
    context: _react.PropTypes.shape({
      store: _react.PropTypes.object.isRequired,
      insertCss: _react.PropTypes.func,
      setTitle: _react.PropTypes.func,
      setMeta: _react.PropTypes.func
    }).isRequired,
    children: _react.PropTypes.element.isRequired,
    error: _react.PropTypes.object
  };
  App.childContextTypes = {
    insertCss: _react.PropTypes.func.isRequired,
    setTitle: _react.PropTypes.func.isRequired,
    setMeta: _react.PropTypes.func.isRequired
  };
  exports.default = App;

/***/ },
/* 33 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ },
/* 34 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ },
/* 35 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/createClass");

/***/ },
/* 36 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ },
/* 37 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/inherits");

/***/ },
/* 38 */
/***/ function(module, exports) {

  module.exports = require("fbjs/lib/emptyFunction");

/***/ },
/* 39 */
/***/ function(module, exports) {

  module.exports = require("react-redux");

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _getPrototypeOf = __webpack_require__(33);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(34);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(35);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(36);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(37);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(31);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _AppContainer = __webpack_require__(42);
  
  var _AppContainer2 = _interopRequireDefault(_AppContainer);
  
  var _reactRedux = __webpack_require__(39);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var AppContainer = function (_Component) {
    (0, _inherits3.default)(AppContainer, _Component);
  
    function AppContainer() {
      (0, _classCallCheck3.default)(this, AppContainer);
      return (0, _possibleConstructorReturn3.default)(this, (AppContainer.__proto__ || (0, _getPrototypeOf2.default)(AppContainer)).apply(this, arguments));
    }
  
    (0, _createClass3.default)(AppContainer, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: _AppContainer2.default.childContainer },
            this.props.children
          )
        );
      }
    }]);
    return AppContainer;
  }(_react.Component);
  
  AppContainer.propTypes = {};
  
  exports.default = (0, _withStyles2.default)(_AppContainer2.default)((0, _reactRedux.connect)(function () {
    return {};
  }, {})(AppContainer));

/***/ },
/* 41 */
/***/ function(module, exports) {

  module.exports = require("isomorphic-style-loader/lib/withStyles");

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(43);
      var insertCss = __webpack_require__(45);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=sass!./../../../node_modules/sass-loader/index.js!./AppContainer.scss", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=sass!./../../../node_modules/sass-loader/index.js!./AppContainer.scss");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, "/*\nWebsite to find color names corresponding to hash code\nhttp://chir.ag/projects/name-that-color/\nhttp://www.color-hex.com/color/da70d6\n */\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n", "", {"version":3,"sources":["/./components/AppContainer/AppContainer.scss"],"names":[],"mappings":"AAAA;;;;GAIG;AACH;EACE,UAAU;EACV,WAAW;EACX,sBAAsB,EAAE","file":"AppContainer.scss","sourcesContent":["/*\nWebsite to find color names corresponding to hash code\nhttp://chir.ag/projects/name-that-color/\nhttp://www.color-hex.com/color/da70d6\n */\nul {\n  margin: 0;\n  padding: 0;\n  list-style-type: none; }\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 44 */
/***/ function(module, exports) {

  /*
  	MIT License http://www.opensource.org/licenses/mit-license.php
  	Author Tobias Koppers @sokra
  */
  // css base code, injected by the css-loader
  module.exports = function() {
  	var list = [];
  
  	// return the list of modules as css string
  	list.toString = function toString() {
  		var result = [];
  		for(var i = 0; i < this.length; i++) {
  			var item = this[i];
  			if(item[2]) {
  				result.push("@media " + item[2] + "{" + item[1] + "}");
  			} else {
  				result.push(item[1]);
  			}
  		}
  		return result.join("");
  	};
  
  	// import a list of modules into the list
  	list.i = function(modules, mediaQuery) {
  		if(typeof modules === "string")
  			modules = [[null, modules, ""]];
  		var alreadyImportedModules = {};
  		for(var i = 0; i < this.length; i++) {
  			var id = this[i][0];
  			if(typeof id === "number")
  				alreadyImportedModules[id] = true;
  		}
  		for(i = 0; i < modules.length; i++) {
  			var item = modules[i];
  			// skip already imported module
  			// this implementation is not 100% perfect for weird media query combinations
  			//  when a module is imported multiple times with different media queries.
  			//  I hope this will never occur (Hey this way we have smaller bundles)
  			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
  				if(mediaQuery && !item[2]) {
  					item[2] = mediaQuery;
  				} else if(mediaQuery) {
  					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
  				}
  				list.push(item);
  			}
  		}
  	};
  	return list;
  };


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  var _assign = __webpack_require__(46);
  
  var _assign2 = _interopRequireDefault(_assign);
  
  var _stringify = __webpack_require__(1);
  
  var _stringify2 = _interopRequireDefault(_stringify);
  
  var _slicedToArray2 = __webpack_require__(47);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
  var _getIterator2 = __webpack_require__(48);
  
  var _getIterator3 = _interopRequireDefault(_getIterator2);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * Isomorphic CSS style loader for Webpack
   *
   * Copyright © 2015-2016 Kriasoft, LLC. All rights reserved.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE.txt file in the root directory of this source tree.
   */
  
  var prefix = 's';
  var inserted = {};
  
  // Base64 encoding and decoding - The "Unicode Problem"
  // https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#The_Unicode_Problem
  function b64EncodeUnicode(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
      return String.fromCharCode('0x' + p1);
    }));
  }
  
  /**
   * Remove style/link elements for specified node IDs
   * if they are no longer referenced by UI components.
   */
  function removeCss(ids) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
  
    try {
      for (var _iterator = (0, _getIterator3.default)(ids), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var id = _step.value;
  
        if (--inserted[id] <= 0) {
          var elem = document.getElementById(prefix + id);
          if (elem) {
            elem.parentNode.removeChild(elem);
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }
  
  /**
   * Example:
   *   // Insert CSS styles object generated by `css-loader` into DOM
   *   var removeCss = insertCss([[1, 'body { color: red; }']]);
   *
   *   // Remove it from the DOM
   *   removeCss();
   */
  function insertCss(styles, options) {
    var _Object$assign = (0, _assign2.default)({
      replace: false,
      prepend: false
    }, options);
  
    var replace = _Object$assign.replace;
    var prepend = _Object$assign.prepend;
  
  
    var ids = [];
    for (var i = 0; i < styles.length; i++) {
      var _styles$i = (0, _slicedToArray3.default)(styles[i], 4);
  
      var moduleId = _styles$i[0];
      var css = _styles$i[1];
      var media = _styles$i[2];
      var sourceMap = _styles$i[3];
  
      var id = moduleId + '-' + i;
  
      ids.push(id);
  
      if (inserted[id]) {
        if (!replace) {
          inserted[id]++;
          continue;
        }
      }
  
      inserted[id] = 1;
  
      var elem = document.getElementById(prefix + id);
      var create = false;
  
      if (!elem) {
        create = true;
  
        elem = document.createElement('style');
        elem.setAttribute('type', 'text/css');
        elem.id = prefix + id;
  
        if (media) {
          elem.setAttribute('media', media);
        }
      }
  
      var cssText = css;
      if (sourceMap) {
        cssText += '\n/*# sourceMappingURL=data:application/json;base64,' + b64EncodeUnicode((0, _stringify2.default)(sourceMap)) + '*/';
        cssText += '\n/*# sourceURL=' + sourceMap.file + '*/';
      }
  
      if ('textContent' in elem) {
        elem.textContent = cssText;
      } else {
        elem.styleSheet.cssText = cssText;
      }
  
      if (create) {
        if (prepend) {
          document.head.insertBefore(elem, document.head.childNodes[0]);
        } else {
          document.head.appendChild(elem);
        }
      }
    }
  
    return removeCss.bind(null, ids);
  }
  
  module.exports = insertCss;

/***/ },
/* 46 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/assign");

/***/ },
/* 47 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/helpers/slicedToArray");

/***/ },
/* 48 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _typeof2 = __webpack_require__(10);
  
  var _typeof3 = _interopRequireDefault(_typeof2);
  
  var _promise = __webpack_require__(50);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  var _regenerator = __webpack_require__(11);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _asyncToGenerator2 = __webpack_require__(14);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var getHomePageData = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(searchedWord) {
      var data, json;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _fetch2.default)(_urls.fbSearchUrl + '?type=place&q=' + searchedWord + '&access_token=1007663462664319|k4JAh0W2aPAFHjjN-2AvZCy7gmo');
  
            case 2:
              data = _context.sent;
              _context.next = 5;
              return data.json();
  
            case 5:
              json = _context.sent;
              _context.next = 8;
              return json;
  
            case 8:
              return _context.abrupt('return', _context.sent);
  
            case 9:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
  
    return function getHomePageData(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  
  var _react = __webpack_require__(31);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _fetch = __webpack_require__(24);
  
  var _fetch2 = _interopRequireDefault(_fetch);
  
  var _urls = __webpack_require__(51);
  
  var _memoizee = __webpack_require__(52);
  
  var _memoizee2 = _interopRequireDefault(_memoizee);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/:c*',
    action: function action(_ref2, _ref3) {
      var _this = this;
  
      var path = _ref2.path;
      var c = _ref3.c;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee3() {
        var _ret;
  
        return _regenerator2.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                return _context3.delegateYield(_regenerator2.default.mark(function _callee2() {
                  var homePageData;
                  return _regenerator2.default.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return getHomePageData(c);
  
                        case 2:
                          homePageData = _context2.sent;
                          return _context2.abrupt('return', {
                            v: new _promise2.default(function (resolve) {
                              if (false) {
                                require.ensure(['./Home'], function (require) {
                                  var Home = require('./Home').default; // eslint-disable-line global-require
                                  resolve(_react2.default.createElement(Home, { data: homePageData, path: path }));
                                }, 'Home');
                              } else {
                                var Home = __webpack_require__(53).default; // eslint-disable-line
                                resolve(_react2.default.createElement(Home, { data: homePageData, path: path }));
                              }
                            })
                          });
  
                        case 4:
                        case 'end':
                          return _context2.stop();
                      }
                    }
                  }, _callee2, _this);
                })(), 't0', 2);
  
              case 2:
                _ret = _context3.t0;
  
                if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {
                  _context3.next = 5;
                  break;
                }
  
                return _context3.abrupt('return', _ret.v);
  
              case 5:
                _context3.next = 10;
                break;
  
              case 7:
                _context3.prev = 7;
                _context3.t1 = _context3['catch'](0);
  
                console.log(_context3.t1);
  
              case 10:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, _this, [[0, 7]]);
      }))();
    }
  };

/***/ },
/* 50 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/promise");

/***/ },
/* 51 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var fbSearchUrl = exports.fbSearchUrl = 'https://graph.facebook.com/search';

/***/ },
/* 52 */
/***/ function(module, exports) {

  module.exports = require("memoizee");

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _getPrototypeOf = __webpack_require__(33);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(34);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(35);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(36);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(37);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _map2 = __webpack_require__(54);
  
  var _map3 = _interopRequireDefault(_map2);
  
  var _react = __webpack_require__(31);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Home = __webpack_require__(55);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _ComponentsSlider = __webpack_require__(57);
  
  var _ComponentsSlider2 = _interopRequireDefault(_ComponentsSlider);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Home = function (_Component) {
      (0, _inherits3.default)(Home, _Component);
  
      function Home() {
          (0, _classCallCheck3.default)(this, Home);
          return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
      }
  
      (0, _createClass3.default)(Home, [{
          key: 'render',
          // eslint-disable-line react/prefer-stateless-function
  
  
          value: function render() {
              var imageList = ['https://www.familydollar.com/content/dam/familydollar/products-services/products-module-image.jpg', 'http://w3.siemens.com/mcms/automation/en/product-lifecycle-management-plm/plm-products/PublishingImages/plm-products.jpg', 'http://d152j5tfobgaot.cloudfront.net/wp-content/uploads/2016/08/125-fall-in-love.png', 'http://img.businessdictionary.com/share-social/terms/product.png'];
              return _react2.default.createElement(
                  _ComponentsSlider2.default,
                  {
                      isCircular: false,
                      autoplay: false
                  },
                  (0, _map3.default)(imageList, function (imgSrc, i) {
                      return _react2.default.createElement(
                          'div',
                          { key: i },
                          _react2.default.createElement('img', {
                              role: 'presentation',
                              src: imgSrc })
                      );
                  })
              );
          }
      }]);
      return Home;
  }(_react.Component);
  
  Home.contextTypes = {};
  
  exports.default = (0, _withStyles2.default)(_Home2.default)(Home);

/***/ },
/* 54 */
/***/ function(module, exports) {

  module.exports = require("lodash/map");

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(56);
      var insertCss = __webpack_require__(45);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=sass!./../../../node_modules/sass-loader/index.js!./Home.scss", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=sass!./../../../node_modules/sass-loader/index.js!./Home.scss");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, ".Home_input_3MJ {\n  height: 2em;\n  font-size: 2em;\n  border: 1px solid green; }\n", "", {"version":3,"sources":["/./routes/home/Home.scss"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB,EAAE","file":"Home.scss","sourcesContent":[".input {\n  height: 2em;\n  font-size: 2em;\n  border: 1px solid green; }\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"input": "Home_input_3MJ"
  };

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(23);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _toConsumableArray2 = __webpack_require__(12);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _react = __webpack_require__(31);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ComponentsSlider = __webpack_require__(58);
  
  var _ComponentsSlider2 = _interopRequireDefault(_ComponentsSlider);
  
  var _Slider = __webpack_require__(60);
  
  var _Slider2 = _interopRequireDefault(_Slider);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var defaultClassNames = {
    slider: _ComponentsSlider2.default.slider,
    icon: _ComponentsSlider2.default.icon,
    sliderContainer: _ComponentsSlider2.default.sliderContainer,
    'slider-next': _ComponentsSlider2.default['slider-next'],
    'slider-prev': _ComponentsSlider2.default['slider-prev'],
    'slider-next-pos': _ComponentsSlider2.default['slider-next-pos'],
    'slider-prev-pos': _ComponentsSlider2.default['slider-prev-pos'],
    'transition--0': _ComponentsSlider2.default['transition--0'],
    slide: _ComponentsSlider2.default.slide,
    'slider-list': _ComponentsSlider2.default['slider-list'],
    'slider-track': _ComponentsSlider2.default['slider-track'],
    'image-container': _ComponentsSlider2.default['image-container']
  };
  
  /**
   *
   * @param noOfSlidesShown: only these will be download and shown on first fold else
   * all will be lazily loaded
   * @param autoplay
   * @param items: These are array of components
   * @param classNames:  ClassNames are configurable
   * @param selectedIndex: used to send force selection from top on each component
   * update. Will not cause animation in the process
   * @param isCircular: to make slider circulate without jerk
   * @returns {XML}
   * @constructor
   */
  
  var ComponentsSlider = function ComponentsSlider(_ref) {
    var noOfSlidesShown = _ref.noOfSlidesShown,
        autoplay = _ref.autoplay,
        items = _ref.children,
        classNames = _ref.classNames,
        isCircular = _ref.isCircular,
        onChangeHandler = _ref.onChangeHandler,
        selectedIndex = _ref.selectedIndex;
  
    var circularLength = Math.ceil(items.length / noOfSlidesShown) * noOfSlidesShown;
    var paddingArr = new Array(circularLength - items.length);
    var circularItems = [].concat((0, _toConsumableArray3.default)(items), paddingArr);
    // for making the slider look circular without jerk
    if (isCircular) {
      circularItems = [].concat((0, _toConsumableArray3.default)(circularItems.slice(circularItems.length - noOfSlidesShown, circularItems.length)), (0, _toConsumableArray3.default)(circularItems), (0, _toConsumableArray3.default)(circularItems.slice(0, noOfSlidesShown)));
    }
    return _react2.default.createElement(_Slider2.default, {
      autoplay: autoplay,
      circularItems: circularItems,
      classNames: (0, _extends3.default)({}, defaultClassNames, classNames),
      noOfSlidesShown: noOfSlidesShown,
      boundryIndexes: [1, circularItems.length - 1],
      incrementTranslationUnits: noOfSlidesShown,
      isCircular: isCircular,
      onChangeHandler: onChangeHandler,
      selectedIndex: selectedIndex
    });
  };
  ComponentsSlider.propTypes = {
    autoplay: _react.PropTypes.bool,
    noOfSlidesShown: _react.PropTypes.number,
    children: _react.PropTypes.array.isRequired,
    classNames: _react.PropTypes.object,
    selectedIndex: _react.PropTypes.number,
    isCircular: _react.PropTypes.bool,
    onChangeHandler: _react.PropTypes.func
  };
  ComponentsSlider.defaultProps = {
    autoplay: false,
    noOfSlidesShown: 1,
    classNames: defaultClassNames,
    selectedIndex: 0,
    isCircular: true,
    onChangeHandler: function onChangeHandler() {}
  };
  exports.default = (0, _withStyles2.default)(_ComponentsSlider2.default)(ComponentsSlider);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(59);
      var insertCss = __webpack_require__(45);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=sass!./../../../node_modules/sass-loader/index.js!./ComponentsSlider.scss", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=sass!./../../../node_modules/sass-loader/index.js!./ComponentsSlider.scss");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, "/*\nWebsite to find color names corresponding to hash code\nhttp://chir.ag/projects/name-that-color/\nhttp://www.color-hex.com/color/da70d6\n */\n.ComponentsSlider_sliderContainer_3U5 {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: initial; }\n\n.ComponentsSlider_slider_1Z9 {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: visible; }\n  .ComponentsSlider_slider_1Z9 .ComponentsSlider_icon_16b.ComponentsSlider_slider-next_2xa,\n  .ComponentsSlider_slider_1Z9 .ComponentsSlider_icon_16b.ComponentsSlider_slider-prev_2aR {\n    opacity: 0; }\n  .ComponentsSlider_slider_1Z9:hover .ComponentsSlider_icon_16b.ComponentsSlider_slider-next_2xa,\n  .ComponentsSlider_slider_1Z9:hover .ComponentsSlider_icon_16b.ComponentsSlider_slider-prev_2aR {\n    opacity: 1; }\n\nimg {\n  max-width: 100%; }\n\n.ComponentsSlider_icon_16b {\n  width: 36px;\n  height: 36px;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n       -o-transform: translateY(-50%);\n          transform: translateY(-50%);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: #fff;\n  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);\n          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n  border-radius: 18px;\n  z-index: 2;\n  opacity: 0;\n  cursor: pointer;\n  color: #666666; }\n\n.ComponentsSlider_icon_16b.ComponentsSlider_slider-next_2xa img {\n  max-width: 100%;\n  width: 10px; }\n\n.ComponentsSlider_icon_16b.ComponentsSlider_slider-prev_2aR img {\n  max-width: 100%;\n  width: 10px; }\n\n.ComponentsSlider_slider-prev-pos_7Su {\n  left: -18px; }\n\n.ComponentsSlider_slider-next-pos_HSR {\n  right: -18px; }\n\n.ComponentsSlider_icon_16b.ComponentsSlider_slider-next_2xa span::before {\n  content: '\\276F';\n  font-size: 20px;\n  line-height: 9px;\n  font-family: monospace; }\n\n.ComponentsSlider_icon_16b.ComponentsSlider_slider-prev_2aR span::before {\n  content: '\\276E';\n  font-size: 20px;\n  line-height: 9px;\n  font-family: monospace; }\n\n.ComponentsSlider_slide_2EK {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  width: initial !important; }\n\n.ComponentsSlider_slider-list_3sJ {\n  height: 100%;\n  overflow: hidden; }\n\n.ComponentsSlider_slider-track_IAN {\n  height: 100%;\n  position: relative; }\n\n.ComponentsSlider_image-container_3vQ {\n  width: 100%;\n  height: 100%;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box; }\n  .ComponentsSlider_image-container_3vQ a {\n    width: 100%; }\n\n.ComponentsSlider_transition--0_3xN {\n  -webkit-transition: none !important;\n  -o-transition: none !important;\n  transition: none !important; }\n", "", {"version":3,"sources":["/./components/ComponentsSlider/ComponentsSlider.scss"],"names":[],"mappings":"AAAA;;;;GAIG;AACH;EACE,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,kBAAkB,EAAE;;AAEtB;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB,EAAE;EACpB;;IAEE,WAAW,EAAE;EACf;;IAEE,WAAW,EAAE;;AAEjB;EACE,gBAAgB,EAAE;;AAEpB;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,oCAA4B;MAA5B,gCAA4B;OAA5B,+BAA4B;UAA5B,4BAA4B;EAC5B,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAAoB;EAApB,4BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,yBAAwB;EAAxB,gCAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,iBAAiB;EACjB,mDAA2C;UAA3C,2CAA2C;EAC3C,6BAAqB;EAArB,wBAAqB;EAArB,qBAAqB;EACrB,oBAAoB;EACpB,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,eAAe,EAAE;;AAEnB;EACE,gBAAgB;EAChB,YAAY,EAAE;;AAEhB;EACE,gBAAgB;EAChB,YAAY,EAAE;;AAEhB;EACE,YAAY,EAAE;;AAEhB;EACE,aAAa,EAAE;;AAEjB;EACE,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB,EAAE;;AAE3B;EACE,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB,EAAE;;AAE3B;EACE,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,0BAA0B,EAAE;;AAE9B;EACE,aAAa;EACb,iBAAiB,EAAE;;AAErB;EACE,aAAa;EACb,mBAAmB,EAAE;;AAEvB;EACE,YAAY;EACZ,aAAa;EACb,+BAAuB;UAAvB,uBAAuB,EAAE;EACzB;IACE,YAAY,EAAE;;AAElB;EACE,oCAA4B;EAA5B,+BAA4B;EAA5B,4BAA4B,EAAE","file":"ComponentsSlider.scss","sourcesContent":["/*\nWebsite to find color names corresponding to hash code\nhttp://chir.ag/projects/name-that-color/\nhttp://www.color-hex.com/color/da70d6\n */\n.sliderContainer {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  overflow: initial; }\n\n.slider {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: visible; }\n  .slider .icon.slider-next,\n  .slider .icon.slider-prev {\n    opacity: 0; }\n  .slider:hover .icon.slider-next,\n  .slider:hover .icon.slider-prev {\n    opacity: 1; }\n\nimg {\n  max-width: 100%; }\n\n.icon {\n  width: 36px;\n  height: 36px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);\n  transition: all 0.3s;\n  border-radius: 18px;\n  z-index: 2;\n  opacity: 0;\n  cursor: pointer;\n  color: #666666; }\n\n.icon.slider-next img {\n  max-width: 100%;\n  width: 10px; }\n\n.icon.slider-prev img {\n  max-width: 100%;\n  width: 10px; }\n\n.slider-prev-pos {\n  left: -18px; }\n\n.slider-next-pos {\n  right: -18px; }\n\n.icon.slider-next span::before {\n  content: '\\276F';\n  font-size: 20px;\n  line-height: 9px;\n  font-family: monospace; }\n\n.icon.slider-prev span::before {\n  content: '\\276E';\n  font-size: 20px;\n  line-height: 9px;\n  font-family: monospace; }\n\n.slide {\n  float: left;\n  height: 100%;\n  min-height: 1px;\n  width: initial !important; }\n\n.slider-list {\n  height: 100%;\n  overflow: hidden; }\n\n.slider-track {\n  height: 100%;\n  position: relative; }\n\n.image-container {\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box; }\n  .image-container a {\n    width: 100%; }\n\n.transition--0 {\n  transition: none !important; }\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"sliderContainer": "ComponentsSlider_sliderContainer_3U5",
  	"slider": "ComponentsSlider_slider_1Z9",
  	"icon": "ComponentsSlider_icon_16b",
  	"slider-next": "ComponentsSlider_slider-next_2xa",
  	"slider-prev": "ComponentsSlider_slider-prev_2aR",
  	"slider-prev-pos": "ComponentsSlider_slider-prev-pos_7Su",
  	"slider-next-pos": "ComponentsSlider_slider-next-pos_HSR",
  	"slide": "ComponentsSlider_slide_2EK",
  	"slider-list": "ComponentsSlider_slider-list_3sJ",
  	"slider-track": "ComponentsSlider_slider-track_IAN",
  	"image-container": "ComponentsSlider_image-container_3vQ",
  	"transition--0": "ComponentsSlider_transition--0_3xN"
  };

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _extends2 = __webpack_require__(23);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _getPrototypeOf = __webpack_require__(33);
  
  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);
  
  var _classCallCheck2 = __webpack_require__(34);
  
  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);
  
  var _createClass2 = __webpack_require__(35);
  
  var _createClass3 = _interopRequireDefault(_createClass2);
  
  var _possibleConstructorReturn2 = __webpack_require__(36);
  
  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);
  
  var _inherits2 = __webpack_require__(37);
  
  var _inherits3 = _interopRequireDefault(_inherits2);
  
  var _react = __webpack_require__(31);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _Slide = __webpack_require__(61);
  
  var _Slide2 = _interopRequireDefault(_Slide);
  
  var _classnames = __webpack_require__(62);
  
  var _classnames2 = _interopRequireDefault(_classnames);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Slider = function (_Component) {
    (0, _inherits3.default)(Slider, _Component);
  
    /**
     *
     * @param props
     */
    function Slider(props) {
      (0, _classCallCheck3.default)(this, Slider);
  
      var _this = (0, _possibleConstructorReturn3.default)(this, (Slider.__proto__ || (0, _getPrototypeOf2.default)(Slider)).call(this, props));
  
      _initialiseProps.call(_this);
  
      var _this$props = _this.props,
          circularItems = _this$props.circularItems,
          selectedIndex = _this$props.selectedIndex;
  
      var sliderLength = circularItems.length;
      // On slide we will first load empty object in slider
      // then load images in them
      _this.itemsToRender = new Array(sliderLength).fill(null);
      _this.translateLeft = 0;
      _this.leftOffset = 0;
      if (props.isCircular) {
        _this.leftOffset++;
      }
      _this.updateItems(selectedIndex);
      return _this;
    }
  
    (0, _createClass3.default)(Slider, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
  
        if (this.props.autoplay) {
          this.interval = setInterval(function () {
            _this2.onClick(false);
          }, 10000);
        }
      }
    }, {
      key: 'componentWillReceiveProps',
  
  
      // This handles change in isVisible that comes from the parent. will not be called for others
      // because two separate arrays are maintained and the one showing is not coming from props.
      value: function componentWillReceiveProps(nextProps) {
        var selectedIndex = nextProps.selectedIndex;
        var leftIndex = this.state.leftIndex;
  
  
        if (selectedIndex !== leftIndex) {
          leftIndex = selectedIndex + 1;
          this.setState({ leftIndex: selectedIndex });
        }
        this.updateItems(leftIndex, nextProps);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        var onChangeHandler = this.props.onChangeHandler;
        var _state = this.state,
            isAnimation = _state.isAnimation,
            leftIndex = _state.leftIndex;
  
  
        onChangeHandler(leftIndex);
  
        if (isAnimation) {
          this.sliderTrack.addEventListener('transitionend', this.onTransitionEnd, false);
        }
      }
    }, {
      key: 'onClick',
      value: function onClick(isLeft) {
        if (!this.state.isAnimation) {
          var _props = this.props,
              circularItems = _props.circularItems,
              noOfSlidesShown = _props.noOfSlidesShown;
  
          var sliderLength = circularItems.length;
          var sliderItemWidth = 100 / sliderLength;
          // multiplier -1 means element is sliding to left
          var multiplier = -1;
          if (isLeft) {
            multiplier = 1;
          }
          if (!this.props.isCircular) {
            noOfSlidesShown = this.getNumberShown(isLeft, this.state.leftIndex);
          }
          this.translateLeft = multiplier * noOfSlidesShown * sliderItemWidth;
          this.updateItems(this.state.leftIndex - multiplier);
          this.setState({
            isAnimation: true,
            isLeft: isLeft
          });
        }
      }
    }, {
      key: 'getNumberShown',
  
  
      // function to get the number of items to be shifted
      value: function getNumberShown(isLeft, index) {
        var _props2 = this.props,
            circularItems = _props2.circularItems,
            noOfSlidesShown = _props2.noOfSlidesShown;
  
        var idx = index;
        var sliderLength = circularItems.length;
        if (idx === sliderLength / noOfSlidesShown - 2 - this.leftOffset && !isLeft || idx === sliderLength / noOfSlidesShown - 1 - this.leftOffset && isLeft) {
          if (!isLeft) {
            idx += 1;
          }
          // get the count of valid elements i.e. not undefined/null
          var count = 0;
          for (var startIndex = idx * noOfSlidesShown; startIndex < (idx + 1) * noOfSlidesShown; startIndex++) {
            if (circularItems[startIndex]) {
              count++;
            }
          }
          return count;
        }
        return noOfSlidesShown;
      }
  
      // function to get the left pos of the carousel
  
    }, {
      key: 'getLeft',
      value: function getLeft() {
        var _state2 = this.state,
            isLeft = _state2.isLeft,
            isAnimation = _state2.isAnimation;
        var leftIndex = this.state.leftIndex;
        var noOfSlidesShown = this.props.noOfSlidesShown;
  
        if (!this.props.isCircular && !this.props.sliderWrap) {
          var slidesShown = noOfSlidesShown;
          // we have to shift only when move right and animation is false
          // or move left and animation is true
          if (!isLeft && !isAnimation) {
            slidesShown = this.getNumberShown(false, leftIndex - 1);
          } else if (isLeft && isAnimation) {
            slidesShown = this.getNumberShown(isLeft, leftIndex);
          }
          // this shift will depend on clides to be shifted
          return (leftIndex - 1 + slidesShown / noOfSlidesShown) * -100;
        }
        // default shift
        return leftIndex * -100;
      }
  
      // This will update itemsToRender according to the index of the frame which needs to be shown
  
    }, {
      key: 'updateItems',
      value: function updateItems(index, props) {
        var noOfSlidesShown = this.props.noOfSlidesShown;
        var circularItems = this.props.circularItems;
  
        if (props) {
          circularItems = props.circularItems;
        }
        var indexOffset = noOfSlidesShown - this.getNumberShown(false, index - 1);
        for (var startIndex = index * noOfSlidesShown - indexOffset; startIndex < (index + 1) * noOfSlidesShown - indexOffset; startIndex++) {
          this.itemsToRender[startIndex] = circularItems[startIndex];
        }
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        if (this.props.autoplay) {
          clearInterval(this.interval);
        }
      }
    }, {
      key: 'render',
      value: function render() {
        var _this3 = this;
  
        var _props3 = this.props,
            circularItems = _props3.circularItems,
            noOfSlidesShown = _props3.noOfSlidesShown,
            s = _props3.classNames,
            isCircular = _props3.isCircular;
  
        var sliderLength = circularItems.length;
        var leftVal = this.getLeft();
        var sliderTrackWidth = sliderLength / noOfSlidesShown * 100 + '%';
        var _state3 = this.state,
            isAnimation = _state3.isAnimation,
            leftIndex = _state3.leftIndex;
  
        var sliderActualLength = sliderLength / noOfSlidesShown - 1;
        var sliderTrackStyle = {
          width: sliderTrackWidth,
          left: leftIndex * -100 + '%'
        };
        if (isAnimation) {
          sliderTrackStyle = (0, _extends3.default)({}, sliderTrackStyle, {
            transform: 'translate3d(' + this.translateLeft + '%,0px,0px)',
            transition: 'transform 0.7s ease-in-out'
          });
        }
        return _react2.default.createElement(
          'div',
          { className: s.slider },
          (isCircular || this.state.leftIndex < sliderActualLength) && this.renderButton({
            isLeft: false,
            className: (0, _classnames2.default)(s['slider-next'], s['slider-next-pos']),
            classNames: s
          }),
          (isCircular || this.state.leftIndex > 0) && this.renderButton({
            isLeft: true,
            className: (0, _classnames2.default)(s['slider-prev'], s['slider-prev-pos']),
            classNames: s
          }),
          _react2.default.createElement(
            'div',
            { className: s['slider-list'] },
            _react2.default.createElement(
              'div',
              {
                className: s['slider-track'],
                style: sliderTrackStyle,
                ref: function ref(c) {
                  _this3.sliderTrack = c;
                }
              },
              this.itemsToRender.map(function (component, i) {
                return (isCircular || component) && _react2.default.createElement(
                  _Slide2.default,
                  {
                    classNames: s, key: 'image-' + i,
                    sliderLength: sliderLength
                  },
                  component
                );
              })
            )
          )
        );
      }
    }]);
    return Slider;
  }(_react.Component);
  
  var _initialiseProps = function _initialiseProps() {
    var _this4 = this;
  
    this.state = {
      leftIndex: this.props.selectedIndex,
      isAnimation: false
    };
  
    this.onTransitionEnd = function () {
      var leftIndex = _this4.state.leftIndex;
      var _props4 = _this4.props,
          circularItems = _props4.circularItems,
          noOfSlidesShown = _props4.noOfSlidesShown,
          onChangeHandler = _props4.onChangeHandler;
  
      var sliderLength = circularItems.length;
      if (_this4.state.isLeft) {
        leftIndex -= 1;
        if (leftIndex <= -1 + _this4.leftOffset) {
          leftIndex = sliderLength / noOfSlidesShown - 1 - _this4.leftOffset;
        }
      } else {
        leftIndex += 1;
        if ((leftIndex + _this4.leftOffset) * noOfSlidesShown >= sliderLength) {
          leftIndex = _this4.leftOffset;
        }
      }
      onChangeHandler((leftIndex - _this4.leftOffset) * noOfSlidesShown);
      _this4.sliderTrack.removeEventListener('transitionend', _this4.onTransitionEnd);
      _this4.updateItems(leftIndex);
      _this4.setState({
        isAnimation: false,
        leftIndex: leftIndex
      });
    };
  
    this.renderButton = function (_ref) {
      var isLeft = _ref.isLeft,
          className = _ref.className,
          s = _ref.classNames;
  
      return _react2.default.createElement(
        'div',
        {
          className: className + ' ' + s.icon,
          onClick: function onClick() {
            _this4.onClick(isLeft);
          }
        },
        _react2.default.createElement('span', null)
      );
    };
  };
  
  Slider.propTypes = {
    circularItems: _react.PropTypes.array,
    noOfSlidesShown: _react.PropTypes.number,
    isCircular: _react.PropTypes.bool,
    autoplay: _react.PropTypes.bool,
    classNames: _react.PropTypes.object,
    selectedIndex: _react.PropTypes.number,
    onChangeHandler: _react.PropTypes.func
  };
  Slider.defaultProps = {
    circularItems: [],
    noOfSlidesShown: 3,
    isCircular: false,
    autoplay: false,
    selectedIndex: 1,
    onChangeHandler: function onChangeHandler() {}
  };
  exports.default = Slider;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(31);
  
  var _react2 = _interopRequireDefault(_react);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   *
   * @param sliderLength
   * @param s
   * @param children
   * @returns {XML}
   * @constructor
   */
  var Slide = function Slide(_ref) {
    var sliderLength = _ref.sliderLength,
        s = _ref.classNames,
        children = _ref.children;
  
    var sliderItemWidth = 100 / sliderLength;
    var slideStyle = {
      width: sliderItemWidth + '%'
    };
    return _react2.default.createElement(
      'div',
      { className: s.slide, style: slideStyle },
      _react2.default.createElement(
        'div',
        { className: s['image-container'] },
        children
      )
    );
  };
  
  Slide.propTypes = {
    sliderLength: _react.PropTypes.number,
    classNames: _react.PropTypes.object,
    children: _react.PropTypes.object
  };
  
  exports.default = Slide;

/***/ },
/* 62 */
/***/ function(module, exports) {

  module.exports = require("classnames");

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _utils = __webpack_require__(64);
  
  var _react = __webpack_require__(31);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(32);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _ErrorPage = __webpack_require__(67);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  exports.default = {
  
    path: '/error',
  
    action: function action(_ref) {
      var render = _ref.render,
          context = _ref.context,
          error = _ref.error,
          path = _ref.path;
  
      if (false) {
        path = window.location.href; //eslint-disable-line
        var refreshedOnce = (0, _utils.getParameterByName)('refreshed', path);
        // Hard refresh the page only once if on error.
        // Stop from refreshing again and again on error.
        if (!refreshedOnce) {
          var refreshpath = (0, _utils.addParamToUrl)(path, { refreshed: 1 });
          window.location.href = refreshpath;
          return;
        }
      }
      render(_react2.default.createElement(
        _App2.default,
        { context: context, error: error },
        _react2.default.createElement(_ErrorPage2.default, { error: error })
      ), error.status || 500);
    }
  };

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.addExtraParams = exports.addParamToUrl = exports.getFormattedDate = undefined;
  
  var _extends2 = __webpack_require__(23);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _keys = __webpack_require__(65);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  exports.stringifyQueryParams = stringifyQueryParams;
  exports.getParameterByName = getParameterByName;
  
  var _urls = __webpack_require__(51);
  
  var _qs = __webpack_require__(66);
  
  var _qs2 = _interopRequireDefault(_qs);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /* Returns query string with object's key values pairs as
  ?key1=value1&key2=value2 and so-on */
  function stringifyQueryParams(obj) {
    var queryString = '';
    // To-Do  Please remove filter and map chaining , It can be done with
    // single iteration .
    (0, _keys2.default)(obj).filter(function (key) {
      return !!obj[key] !== false;
    }).map(function (key) {
      return queryString += key + '=' + obj[key] + '&';
    });
    return queryString.length ? '?' + queryString.substr(0, queryString.length - 1) : '';
  }
  
  function getParameterByName(names, urls) {
    var url = urls;
    var name = names;
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  
  // Todo - write in comments the accept and return format.
  var getFormattedDate = exports.getFormattedDate = function getFormattedDate(date) {
    var year = date.getFullYear();
    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return day + '/' + month + '/' + year;
  };
  
  var addParamToUrl = exports.addParamToUrl = function addParamToUrl(relativeUrl, queryParam) {
    var kvp = relativeUrl.split('?');
    var existing = {};
    if (kvp.length > 1) {
      existing = _qs2.default.parse(kvp[1]);
    }
    existing = (0, _extends3.default)({}, existing, queryParam);
    return kvp[0] + '?' + _qs2.default.stringify(existing);
  };
  
  var addExtraParams = exports.addExtraParams = function addExtraParams(url) {};

/***/ },
/* 65 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/keys");

/***/ },
/* 66 */
/***/ function(module, exports) {

  module.exports = require("qs");

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(31);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ErrorPage = __webpack_require__(68);
  
  var _ErrorPage2 = _interopRequireDefault(_ErrorPage);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function ErrorPage(_ref, context) {
    var error = _ref.error;
  
    var title = 'Error';
    var content = error.stack;
    var errorMessage = null;
  
    if (error.status === 404) {
      title = 'Page Not Found';
      content = 'Sorry, the page you were trying to view does not exist.';
    } else if (true) {
      errorMessage = _react2.default.createElement(
        'pre',
        null,
        error.stack
      );
    }
  
    context.setTitle(title);
  
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'h1',
        null,
        title
      ),
      _react2.default.createElement(
        'p',
        null,
        content
      ),
      errorMessage
    );
  }
  
  ErrorPage.propTypes = { error: _react.PropTypes.object.isRequired };
  ErrorPage.contextTypes = { setTitle: _react.PropTypes.func.isRequired };
  
  exports.default = (0, _withStyles2.default)(_ErrorPage2.default)(ErrorPage);

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(69);
      var insertCss = __webpack_require__(45);
  
      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }
  
      module.exports = content.locals || {};
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
    
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=sass!./../../../node_modules/sass-loader/index.js!./ErrorPage.scss", function() {
          content = require("!!./../../../node_modules/css-loader/index.js?{\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]_[local]_[hash:base64:3]\",\"minimize\":false}!./../../../node_modules/postcss-loader/index.js?pack=sass!./../../../node_modules/sass-loader/index.js!./ErrorPage.scss");
  
          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }
  
          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, "h1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400; }\n\npre {\n  text-align: left;\n  margin-top: 2rem; }\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%; }\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em; } }\n", "", {"version":3,"sources":["/./routes/error/ErrorPage.scss"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB,EAAE;;AAErB;EACE,iBAAiB;EACjB,iBAAiB,EAAE;;AAErB;EACE;;IAEE,WAAW,EAAE;EACf;IACE,iBAAiB;IACjB,kBAAkB,EAAE,EAAE","file":"ErrorPage.scss","sourcesContent":["h1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400; }\n\npre {\n  text-align: left;\n  margin-top: 2rem; }\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%; }\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em; } }\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 70 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

  var jade = __webpack_require__(72);
  
  module.exports = function template(locals) {
  var jade_debug = [ new jade.DebugItem( 1, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ) ];
  try {
  var buf = [];
  var jade_mixins = {};
  var jade_interp;
  ;var locals_for_with = (locals || {});(function (body, css, description, entry, keywords, state, title) {
  jade_debug.unshift(new jade.DebugItem( 0, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  jade_debug.unshift(new jade.DebugItem( 1, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<!DOCTYPE html>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 2, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<html lang=\"en\" class=\"no-js\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 3, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<head>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 4, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\">");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 5, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<meta http-equiv=\"Cache-Control\" content=\"no-cache, no-store, must-revalidate\">");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 6, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<meta http-equiv=\"Pragma\" content=\"no-cache\">");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 7, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<meta http-equiv=\"Expires\" content=\"0\">");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 8, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<meta name=\"p:domain_verify\" content=\"578fa68d1988f66b6eeb98681b6646ae\">");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 9, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<meta name=\"fragment\" content=\"!\">");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 10, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 11, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<title>" + (jade.escape(null == (jade_interp = title) ? "" : jade_interp)));
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.shift();
  buf.push("</title>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 12, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<meta name=\"title\"" + (jade.attr("content", title, true, true)) + ">");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 13, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<meta name=\"description\"" + (jade.attr("content", description, true, true)) + ">");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 14, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<meta name=\"keywords\"" + (jade.attr("content", keywords, true, true)) + ">");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 15, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<meta name=\"og_title\" property=\"og:title\" content=\"Project Title\">");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 16, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<meta name=\"og_site_name\" property=\"og:site_name\" content=\"Project Title\">");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 17, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<style id=\"css\">" + (null == (jade_interp = css) ? "" : jade_interp));
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.shift();
  buf.push("</style>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</head>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 18, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<body>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 19, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<div id=\"app\">" + (null == (jade_interp = body) ? "" : jade_interp));
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.shift();
  buf.push("</div>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 20, "/Users/shishirarora/Projects/file-upload/src/views/index.jade" ));
  buf.push("<script id=\"source\"" + (jade.attr("src", entry, true, true)) + (jade.attr("data-initial-state", state, true, true)) + ">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.shift();
  buf.push("</script>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</body>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</html>");
  jade_debug.shift();
  jade_debug.shift();}.call(this,"body" in locals_for_with?locals_for_with.body:typeof body!=="undefined"?body:undefined,"css" in locals_for_with?locals_for_with.css:typeof css!=="undefined"?css:undefined,"description" in locals_for_with?locals_for_with.description:typeof description!=="undefined"?description:undefined,"entry" in locals_for_with?locals_for_with.entry:typeof entry!=="undefined"?entry:undefined,"keywords" in locals_for_with?locals_for_with.keywords:typeof keywords!=="undefined"?keywords:undefined,"state" in locals_for_with?locals_for_with.state:typeof state!=="undefined"?state:undefined,"title" in locals_for_with?locals_for_with.title:typeof title!=="undefined"?title:undefined));;return buf.join("");
  } catch (err) {
    jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "doctype html\nhtml(class=\"no-js\", lang=\"en\")\n  head\n    meta(http-equiv='Content-Type', content='text/html; charset=utf-8')\n    meta(http-equiv='Cache-Control', content='no-cache, no-store, must-revalidate')\n    meta(http-equiv='Pragma', content='no-cache')\n    meta(http-equiv='Expires', content='0')\n    meta(name=\"p:domain_verify\", content=\"578fa68d1988f66b6eeb98681b6646ae\")\n    meta(name='fragment', content='!')\n    meta(name=\"viewport\", content=\"width=device-width, initial-scale=1.0\")\n    title= title\n    meta(name=\"title\", content=title)\n    meta(name=\"description\", content=description)\n    meta(name=\"keywords\", content=keywords)\n    meta(name=\"og_title\" property=\"og:title\", content=\"Project Title\")\n    meta(name=\"og_site_name\" property=\"og:site_name\" content=\"Project Title\")\n    style#css!= css\n  body\n    #app!= body\n    script#source(src=entry, data-initial-state=state)\n");
  }
  }

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  /**
   * Merge two attribute objects giving precedence
   * to values in object `b`. Classes are special-cased
   * allowing for arrays and merging/joining appropriately
   * resulting in a string.
   *
   * @param {Object} a
   * @param {Object} b
   * @return {Object} a
   * @api private
   */
  
  exports.merge = function merge(a, b) {
    if (arguments.length === 1) {
      var attrs = a[0];
      for (var i = 1; i < a.length; i++) {
        attrs = merge(attrs, a[i]);
      }
      return attrs;
    }
    var ac = a['class'];
    var bc = b['class'];
  
    if (ac || bc) {
      ac = ac || [];
      bc = bc || [];
      if (!Array.isArray(ac)) ac = [ac];
      if (!Array.isArray(bc)) bc = [bc];
      a['class'] = ac.concat(bc).filter(nulls);
    }
  
    for (var key in b) {
      if (key != 'class') {
        a[key] = b[key];
      }
    }
  
    return a;
  };
  
  /**
   * Filter null `val`s.
   *
   * @param {*} val
   * @return {Boolean}
   * @api private
   */
  
  function nulls(val) {
    return val != null && val !== '';
  }
  
  /**
   * join array as classes.
   *
   * @param {*} val
   * @return {String}
   */
  exports.joinClasses = joinClasses;
  function joinClasses(val) {
    return (Array.isArray(val) ? val.map(joinClasses) :
      (val && typeof val === 'object') ? Object.keys(val).filter(function (key) { return val[key]; }) :
      [val]).filter(nulls).join(' ');
  }
  
  /**
   * Render the given classes.
   *
   * @param {Array} classes
   * @param {Array.<Boolean>} escaped
   * @return {String}
   */
  exports.cls = function cls(classes, escaped) {
    var buf = [];
    for (var i = 0; i < classes.length; i++) {
      if (escaped && escaped[i]) {
        buf.push(exports.escape(joinClasses([classes[i]])));
      } else {
        buf.push(joinClasses(classes[i]));
      }
    }
    var text = joinClasses(buf);
    if (text.length) {
      return ' class="' + text + '"';
    } else {
      return '';
    }
  };
  
  
  exports.style = function (val) {
    if (val && typeof val === 'object') {
      return Object.keys(val).map(function (style) {
        return style + ':' + val[style];
      }).join(';');
    } else {
      return val;
    }
  };
  /**
   * Render the given attribute.
   *
   * @param {String} key
   * @param {String} val
   * @param {Boolean} escaped
   * @param {Boolean} terse
   * @return {String}
   */
  exports.attr = function attr(key, val, escaped, terse) {
    if (key === 'style') {
      val = exports.style(val);
    }
    if ('boolean' == typeof val || null == val) {
      if (val) {
        return ' ' + (terse ? key : key + '="' + key + '"');
      } else {
        return '';
      }
    } else if (0 == key.indexOf('data') && 'string' != typeof val) {
      if (JSON.stringify(val).indexOf('&') !== -1) {
        console.warn('Since Jade 2.0.0, ampersands (`&`) in data attributes ' +
                     'will be escaped to `&amp;`');
      };
      if (val && typeof val.toISOString === 'function') {
        console.warn('Jade will eliminate the double quotes around dates in ' +
                     'ISO form after 2.0.0');
      }
      return ' ' + key + "='" + JSON.stringify(val).replace(/'/g, '&apos;') + "'";
    } else if (escaped) {
      if (val && typeof val.toISOString === 'function') {
        console.warn('Jade will stringify dates in ISO form after 2.0.0');
      }
      return ' ' + key + '="' + exports.escape(val) + '"';
    } else {
      if (val && typeof val.toISOString === 'function') {
        console.warn('Jade will stringify dates in ISO form after 2.0.0');
      }
      return ' ' + key + '="' + val + '"';
    }
  };
  
  /**
   * Render the given attributes object.
   *
   * @param {Object} obj
   * @param {Object} escaped
   * @return {String}
   */
  exports.attrs = function attrs(obj, terse){
    var buf = [];
  
    var keys = Object.keys(obj);
  
    if (keys.length) {
      for (var i = 0; i < keys.length; ++i) {
        var key = keys[i]
          , val = obj[key];
  
        if ('class' == key) {
          if (val = joinClasses(val)) {
            buf.push(' ' + key + '="' + val + '"');
          }
        } else {
          buf.push(exports.attr(key, val, false, terse));
        }
      }
    }
  
    return buf.join('');
  };
  
  /**
   * Escape the given string of `html`.
   *
   * @param {String} html
   * @return {String}
   * @api private
   */
  
  var jade_encode_html_rules = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;'
  };
  var jade_match_html = /[&<>"]/g;
  
  function jade_encode_char(c) {
    return jade_encode_html_rules[c] || c;
  }
  
  exports.escape = jade_escape;
  function jade_escape(html){
    var result = String(html).replace(jade_match_html, jade_encode_char);
    if (result === '' + html) return html;
    else return result;
  };
  
  /**
   * Re-throw the given `err` in context to the
   * the jade in `filename` at the given `lineno`.
   *
   * @param {Error} err
   * @param {String} filename
   * @param {String} lineno
   * @api private
   */
  
  exports.rethrow = function rethrow(err, filename, lineno, str){
    if (!(err instanceof Error)) throw err;
    if ((typeof window != 'undefined' || !filename) && !str) {
      err.message += ' on line ' + lineno;
      throw err;
    }
    try {
      str = str || __webpack_require__(73).readFileSync(filename, 'utf8')
    } catch (ex) {
      rethrow(err, null, lineno)
    }
    var context = 3
      , lines = str.split('\n')
      , start = Math.max(lineno - context, 0)
      , end = Math.min(lines.length, lineno + context);
  
    // Error context
    var context = lines.slice(start, end).map(function(line, i){
      var curr = i + start + 1;
      return (curr == lineno ? '  > ' : '    ')
        + curr
        + '| '
        + line;
    }).join('\n');
  
    // Alter exception message
    err.path = filename;
    err.message = (filename || 'Jade') + ':' + lineno
      + '\n' + context + '\n\n' + err.message;
    throw err;
  };
  
  exports.DebugItem = function DebugItem(lineno, filename) {
    this.lineno = lineno;
    this.filename = filename;
  }


/***/ },
/* 73 */
/***/ function(module, exports) {

  module.exports = require("fs");

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

  var jade = __webpack_require__(72);
  
  module.exports = function template(locals) {
  var jade_debug = [ new jade.DebugItem( 1, "/Users/shishirarora/Projects/file-upload/src/views/error.jade" ) ];
  try {
  var buf = [];
  var jade_mixins = {};
  var jade_interp;
  ;var locals_for_with = (locals || {});(function (stack) {
  jade_debug.unshift(new jade.DebugItem( 0, "/Users/shishirarora/Projects/file-upload/src/views/error.jade" ));
  jade_debug.unshift(new jade.DebugItem( 1, "/Users/shishirarora/Projects/file-upload/src/views/error.jade" ));
  buf.push("<!DOCTYPE html>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 2, "/Users/shishirarora/Projects/file-upload/src/views/error.jade" ));
  buf.push("<html lang=\"en\">");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 3, "/Users/shishirarora/Projects/file-upload/src/views/error.jade" ));
  buf.push("<head>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 4, "/Users/shishirarora/Projects/file-upload/src/views/error.jade" ));
  buf.push("<meta charset=\"utf-8\">");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 5, "/Users/shishirarora/Projects/file-upload/src/views/error.jade" ));
  buf.push("<title>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 5, jade_debug[0].filename ));
  buf.push("Internal Server Error");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</title>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 6, "/Users/shishirarora/Projects/file-upload/src/views/error.jade" ));
  buf.push("<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 7, "/Users/shishirarora/Projects/file-upload/src/views/error.jade" ));
  buf.push("<style>");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("* {");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  line-height: 1.2;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  margin: 0;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("}");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("html {");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  color: #888;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  display: table;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  font-family: sans-serif;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  height: 100%;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  text-align: center;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  width: 100%;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("}");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("body {");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  display: table-cell;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  vertical-align: middle;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  margin: 2em auto;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("}");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("h1 {");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  color: #555;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  font-size: 2em;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  font-weight: 400;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("}");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("p {");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  margin: 0 auto;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  width: 280px;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("}");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("pre {");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  text-align: left;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  margin-top: 2rem;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("}");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("@media only screen and (max-width: 280px) {");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  body, p {");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("    width: 95%;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  }");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  h1 {");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("    font-size: 1.5em;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("    margin: 0 0 0.3em;");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("  }");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("}");
  jade_debug.shift();
  buf.push("\n");
  jade_debug.unshift(new jade.DebugItem( 56, jade_debug[0].filename ));
  buf.push("");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</style>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</head>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 57, "/Users/shishirarora/Projects/file-upload/src/views/error.jade" ));
  buf.push("<body>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 58, "/Users/shishirarora/Projects/file-upload/src/views/error.jade" ));
  buf.push("<h1>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 58, jade_debug[0].filename ));
  buf.push("Internal Server Error");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</h1>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 59, "/Users/shishirarora/Projects/file-upload/src/views/error.jade" ));
  buf.push("<p>");
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.unshift(new jade.DebugItem( 59, jade_debug[0].filename ));
  buf.push("Sorry, something went wrong.");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</p>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 60, "/Users/shishirarora/Projects/file-upload/src/views/error.jade" ));
  buf.push("<pre>" + (jade.escape(null == (jade_interp = stack) ? "" : jade_interp)));
  jade_debug.unshift(new jade.DebugItem( undefined, jade_debug[0].filename ));
  jade_debug.shift();
  buf.push("</pre>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</body>");
  jade_debug.shift();
  jade_debug.shift();
  buf.push("</html>");
  jade_debug.shift();
  jade_debug.unshift(new jade.DebugItem( 61, "/Users/shishirarora/Projects/file-upload/src/views/error.jade" ));
  buf.push("<!-- IE needs 512+ bytes: http://blogs.msdn.com/b/ieinternals/archive/2010/08/19/http-error-pages-in-internet-explorer.aspx-->");
  jade_debug.shift();
  jade_debug.shift();}.call(this,"stack" in locals_for_with?locals_for_with.stack:typeof stack!=="undefined"?stack:undefined));;return buf.join("");
  } catch (err) {
    jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "doctype html\nhtml(lang=\"en\")\n  head\n    meta(charset=\"utf-8\")\n    title Internal Server Error\n    meta(name=\"viewport\", content=\"width=device-width, initial-scale=1\")\n    style.\n      * {\n        line-height: 1.2;\n        margin: 0;\n      }\n\n      html {\n        color: #888;\n        display: table;\n        font-family: sans-serif;\n        height: 100%;\n        text-align: center;\n        width: 100%;\n      }\n\n      body {\n        display: table-cell;\n        vertical-align: middle;\n        margin: 2em auto;\n      }\n\n      h1 {\n        color: #555;\n        font-size: 2em;\n        font-weight: 400;\n      }\n\n      p {\n        margin: 0 auto;\n        width: 280px;\n      }\n\n      pre {\n        text-align: left;\n        margin-top: 2rem;\n      }\n\n      @media only screen and (max-width: 280px) {\n\n        body, p {\n          width: 95%;\n        }\n\n        h1 {\n          font-size: 1.5em;\n          margin: 0 0 0.3em;\n        }\n\n      }\n\n  body\n    h1 Internal Server Error\n    p Sorry, something went wrong.\n    pre= stack\n// IE needs 512+ bytes: http://blogs.msdn.com/b/ieinternals/archive/2010/08/19/http-error-pages-in-internet-explorer.aspx\n");
  }
  }

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map