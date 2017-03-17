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
  
  var _assets = __webpack_require__(69);
  
  var _assets2 = _interopRequireDefault(_assets);
  
  var _memoizee = __webpack_require__(70);
  
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
  exports.imageList = imageList;
  
  var _constants = __webpack_require__(21);
  
  function imageList() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];
    var type = action.type,
        payload = action.payload;
  
    switch (type) {
      default:
        return state;
    }
  }

/***/ },
/* 20 */,
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
  
  var _error = __webpack_require__(61);
  
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
  
  var _regenerator = __webpack_require__(11);
  
  var _regenerator2 = _interopRequireDefault(_regenerator);
  
  var _typeof2 = __webpack_require__(10);
  
  var _typeof3 = _interopRequireDefault(_typeof2);
  
  var _promise = __webpack_require__(50);
  
  var _promise2 = _interopRequireDefault(_promise);
  
  var _asyncToGenerator2 = __webpack_require__(14);
  
  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);
  
  var _react = __webpack_require__(31);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _itemData = __webpack_require__(51);
  
  var _itemData2 = _interopRequireDefault(_itemData);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  function getHomePageData() {
    return _itemData2.default;
  }
  
  exports.default = {
  
    path: '/:c*',
    action: function action(_ref, _ref2) {
      var _this = this;
  
      var path = _ref.path;
      var c = _ref2.c;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _ret;
  
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
  
                _ret = function () {
                  var homePageData = getHomePageData(c);
                  return {
                    v: new _promise2.default(function (resolve) {
                      if (false) {
                        require.ensure(['./Home'], function (require) {
                          var Home = require('./Home').default; // eslint-disable-line global-require
                          resolve(_react2.default.createElement(Home, { data: homePageData, path: path }));
                        }, 'Home');
                      } else {
                        var Home = __webpack_require__(52).default; // eslint-disable-line
                        resolve(_react2.default.createElement(Home, { data: homePageData, path: path }));
                      }
                    })
                  };
                }();
  
                if (!((typeof _ret === 'undefined' ? 'undefined' : (0, _typeof3.default)(_ret)) === "object")) {
                  _context.next = 4;
                  break;
                }
  
                return _context.abrupt('return', _ret.v);
  
              case 4:
                _context.next = 9;
                break;
  
              case 6:
                _context.prev = 6;
                _context.t0 = _context['catch'](0);
  
                console.log(_context.t0);
  
              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this, [[0, 6]]);
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

  module.exports = {
  	"CatalogEntryView": [
  		{
  			"CustomerReview": [
  				{
  					"Con": [
  						{
  							"RatableAttributes": [
  								{
  									"description": "easy_to_use",
  									"name": "EASY_TO_USE",
  									"value": "4"
  								},
  								{
  									"description": "quality",
  									"name": "QUALITY",
  									"value": "1"
  								},
  								{
  									"description": "value",
  									"name": "VALUE",
  									"value": "1"
  								}
  							],
  							"datePosted": "Mon Mar 11 13:13:55 UTC 2013",
  							"overallRating": "1",
  							"review": "Less than 2 months after purchase it completely stopped working. First it wouldn't detect the pitcher when trying to blend a significant amount, a couple weeks later it wouldn't detect the single serve cup. ",
  							"reviewKey": "b326b0d6-e6ae-4ec5-8080-720f0ad741af",
  							"screenName": "New York",
  							"title": "Very unhappy"
  						}
  					],
  					"ConsolidatedRatableAttributes": [
  						{
  							"description": "Quality",
  							"name": "QUALITY",
  							"value": "4"
  						},
  						{
  							"description": "Easy to Use",
  							"name": "EASY_TO_USE",
  							"value": "4.5"
  						},
  						{
  							"description": "Value",
  							"name": "VALUE",
  							"value": "3.5"
  						}
  					],
  					"Pro": [
  						{
  							"RatableAttributes": [
  								{
  									"description": "easy_to_use",
  									"name": "EASY_TO_USE",
  									"value": "5"
  								},
  								{
  									"description": "quality",
  									"name": "QUALITY",
  									"value": "5"
  								},
  								{
  									"description": "value",
  									"name": "VALUE",
  									"value": "5"
  								}
  							],
  							"datePosted": "Thu Apr 18 19:42:19 UTC 2013",
  							"overallRating": "5",
  							"review": "This blender works amazingly, and blends within seconds.  The single serve cups also work really well for smoothies or protein shakes!",
  							"reviewKey": "d602bcdf-53be-4769-94da-3b3fd2517d21",
  							"screenName": "Eric",
  							"title": "Fantastic Blender"
  						}
  					],
  					"Reviews": [
  						{
  							"RatableAttributes": [
  								{
  									"description": "easy_to_use",
  									"name": "EASY_TO_USE",
  									"value": "4"
  								},
  								{
  									"description": "quality",
  									"name": "QUALITY",
  									"value": "1"
  								},
  								{
  									"description": "value",
  									"name": "VALUE",
  									"value": "1"
  								}
  							],
  							"city": "NYC",
  							"customerId": "110657105",
  							"datePosted": "Mon Mar 11 13:13:55 UTC 2013",
  							"helpfulVotes": "39",
  							"overallRating": "1",
  							"review": "Less than 2 months after purchase it completely stopped working. First it wouldn't detect the pitcher when trying to blend a significant amount, a couple weeks later it wouldn't detect the single serve cup. ",
  							"reviewKey": "b326b0d6-e6ae-4ec5-8080-720f0ad741af",
  							"screenName": "New York",
  							"state": "NY",
  							"title": "Very unhappy",
  							"totalComments": "0",
  							"totalVotes": "52"
  						},
  						{
  							"Comments": [
  								{
  									"city": "",
  									"commentKey": "CommentKey:ffcefb66-381a-4985-b869-9fcfdd26e7cc",
  									"commentText": "Separating the men from the boys,  separating the amateurs from the professionals when it comes to blenders, when you revealed to us that, -It doesn&#x27;t pulverize seeds-.I really need a good blender, but there is No way that I would buy this blender now. Thank you so much, Jon",
  									"postedDate": "Thu Oct 10 04:17:50 UTC 2013",
  									"screenName": "JON",
  									"userKey": "118863321",
  									"userTier": "Trusted"
  								}
  							],
  							"RatableAttributes": [
  								{
  									"description": "quality",
  									"name": "QUALITY",
  									"value": "2"
  								},
  								{
  									"description": "easy_to_use",
  									"name": "EASY_TO_USE",
  									"value": "3"
  								},
  								{
  									"description": "value",
  									"name": "VALUE",
  									"value": "2"
  								}
  							],
  							"city": "Idaho Falls",
  							"customerId": "116317693",
  							"datePosted": "Sun Sep 01 03:18:11 UTC 2013",
  							"helpfulVotes": "16",
  							"overallRating": "2",
  							"review": "This blender is not superior to other smoothie blenders, It doesn't pulverize seeds and leaves green smoothies chunky with a lot of pulp. The single serve concept is amazing, however, my single serve cup began to break right from the start. The prongs became chipped because of the difficulty of screwing it in and out of the base. It won't blend for more than a minute without smelling like burned rubber. While the single serve seemed to blend more smoothly, it didn't hold much, especially when adding ice. I was very disappointed and so I returned it,",
  							"reviewKey": "399853f3-4451-40a8-bcd6-bda2d814d9f4",
  							"screenName": "London",
  							"state": "ID",
  							"title": "Very Disappointed",
  							"totalComments": "1",
  							"totalVotes": "21"
  						},
  						{
  							"RatableAttributes": [
  								{
  									"description": "easy_to_use",
  									"name": "EASY_TO_USE",
  									"value": "5"
  								},
  								{
  									"description": "quality",
  									"name": "QUALITY",
  									"value": "5"
  								},
  								{
  									"description": "value",
  									"name": "VALUE",
  									"value": "5"
  								}
  							],
  							"city": "Oakland",
  							"customerId": "100025104",
  							"datePosted": "Thu Apr 18 19:42:19 UTC 2013",
  							"helpfulVotes": "10",
  							"overallRating": "5",
  							"review": "This blender works amazingly, and blends within seconds.  The single serve cups also work really well for smoothies or protein shakes!",
  							"reviewKey": "d602bcdf-53be-4769-94da-3b3fd2517d21",
  							"screenName": "Eric",
  							"state": "CA",
  							"title": "Fantastic Blender",
  							"totalComments": "0",
  							"totalVotes": "10"
  						},
  						{
  							"RatableAttributes": [
  								{
  									"description": "quality",
  									"name": "QUALITY",
  									"value": "5"
  								},
  								{
  									"description": "easy_to_use",
  									"name": "EASY_TO_USE",
  									"value": "5"
  								},
  								{
  									"description": "value",
  									"name": "VALUE",
  									"value": "5"
  								}
  							],
  							"city": "Cambridge",
  							"customerId": "172227",
  							"datePosted": "Sat Jan 18 01:20:36 UTC 2014",
  							"helpfulVotes": "9",
  							"overallRating": "5",
  							"review": "I am blown away by this blender. It obliterates ice and frozen fruit - and blends fresh fruits to smooth perfection. It even makes quick work of fresh ginger and tough greens. I did a ton of research before settling on the Ninja. This was a splurge for me - and I spent the extra money to get the single serve cups, thinking I'd take my smoothie to work every morning. But my husband is totally hooked on smoothies now too, so the big pitcher is getting regular use. Tried it out for margaritas tonight... half a lime, half a lemon, half an orange with tequila, honey and ice... unbelievably good. Haven't tried it for soup or sauce yet, but can hardly wait.\n\nI'm impressed by features such as the suction cup feet, the snap-seal lid, and the sensor that prevents the machine from being turned on without the top in place. It cleans up nicely too. \n\nBottom line: I can't stop raving about this thing and have recommended it to all my friends and family.",
  							"reviewKey": "d8e9ac59-6c3a-47be-8b87-f912715ccd18",
  							"screenName": "E",
  							"state": "MA",
  							"title": "Couldn't be happier",
  							"totalComments": "0",
  							"totalVotes": "9"
  						},
  						{
  							"Comments": [
  								{
  									"city": "",
  									"commentKey": "CommentKey:a5b92fc8-ec2a-4772-b4ea-3cf4d473015b",
  									"commentText": "THANK YOU, THANK YOU&#x21;&#x21;&#x21;&#x21;&#x21; YOU JUST GAVE ME THE BEST REASON TO -- NOT BUY -- THIS THING &#x21; THANK YOU, JON",
  									"postedDate": "Thu Oct 10 03:44:47 UTC 2013",
  									"screenName": "JON",
  									"userKey": "118863321",
  									"userTier": "Trusted"
  								}
  							],
  							"RatableAttributes": [
  								{
  									"description": "quality",
  									"name": "QUALITY",
  									"value": "1"
  								},
  								{
  									"description": "easy_to_use",
  									"name": "EASY_TO_USE",
  									"value": "1"
  								},
  								{
  									"description": "value",
  									"name": "VALUE",
  									"value": "1"
  								}
  							],
  							"city": "new york",
  							"customerId": "116426870",
  							"datePosted": "Thu Jun 06 04:49:37 UTC 2013",
  							"helpfulVotes": "38",
  							"overallRating": "1",
  							"review": " Upon using this blender  it turns out that the food gets into a deep hole at the bottom of the blade assembly , which fits on top of the rotating spindle, which cannot be cleaned.  No amount of rinsing or dish washer washing can get to it. A special thin and long brush would be required. Such food deposits can quickly become a place for bacteria growth and accumulate soap from dishwasher etc. A radical design change and going back to the drawing board is required, which Ninja would be unwilling to do.  Very poor and harmful product",
  							"reviewKey": "49add669-1256-4894-9fce-9e0464342887",
  							"screenName": "gourmet",
  							"state": "NY",
  							"title": "bacteria hazard",
  							"totalComments": "1",
  							"totalVotes": "69"
  						},
  						{
  							"RatableAttributes": [
  								{
  									"description": "quality",
  									"name": "QUALITY",
  									"value": "5"
  								},
  								{
  									"description": "easy_to_use",
  									"name": "EASY_TO_USE",
  									"value": "5"
  								},
  								{
  									"description": "value",
  									"name": "VALUE",
  									"value": "5"
  								}
  							],
  							"city": "Wilmington ",
  							"customerId": "115016455",
  							"datePosted": "Sun Mar 16 13:54:36 UTC 2014",
  							"helpfulVotes": "5",
  							"overallRating": "5",
  							"review": "Right out of the box I love this thing. You have to read the instructions: it indicates you must pulse several times THEN blend in order to get the smooth consistency. I'm going now to google soups to make. I'll add on to my review once I've tried more stuff. I know some folks had problems, I can say with total confidence that Ninja backs up what they make. I have a vacuum, steamer and iron and I broke the vacuum and they still fixed it for free. Easy peasy. Be sure to register your purchase. Peace. ",
  							"reviewKey": "bf2283a9-37a1-46e2-b9b4-3edb757d5375",
  							"screenName": "Sandra",
  							"state": "DE",
  							"title": "Great Blender",
  							"totalComments": "0",
  							"totalVotes": "5"
  						},
  						{
  							"RatableAttributes": [
  								{
  									"description": "quality",
  									"name": "QUALITY",
  									"value": "5"
  								},
  								{
  									"description": "easy_to_use",
  									"name": "EASY_TO_USE",
  									"value": "5"
  								},
  								{
  									"description": "value",
  									"name": "VALUE",
  									"value": "5"
  								}
  							],
  							"city": "Tucson",
  							"customerId": "119946555",
  							"datePosted": "Thu Jan 30 18:50:22 UTC 2014",
  							"helpfulVotes": "6",
  							"overallRating": "5",
  							"review": "My daughter received this Ninja blender and she absolutely loves it. My grandson has Autisim and has very sensitive taste buds. With the Ninja my daughter is able to puree his homemade soups, &amp; refried beans. Life is a little easier for my daughter &amp; him. She is in heaven. \n",
  							"reviewKey": "7c7ef8c0-e227-45a5-86cd-c29adeb0bd2a",
  							"screenName": "Flora",
  							"state": "AZ",
  							"title": "Ninja Blender",
  							"totalComments": "0",
  							"totalVotes": "7"
  						},
  						{
  							"RatableAttributes": [
  								{
  									"description": "quality",
  									"name": "QUALITY",
  									"value": "4"
  								},
  								{
  									"description": "easy_to_use",
  									"name": "EASY_TO_USE",
  									"value": "5"
  								},
  								{
  									"description": "value",
  									"name": "VALUE",
  									"value": "5"
  								}
  							],
  							"city": "Minneapolis",
  							"customerId": "109690154",
  							"datePosted": "Sun Jan 12 17:41:43 UTC 2014",
  							"helpfulVotes": "4",
  							"overallRating": "5",
  							"review": "I have to assume that the negative reviewers received an unfortunate &quot;lemon&quot; blender... that, or they didn't read the instruction manual, because I love my Ninja and definitely recommend it.\n\nI've had this blender for over a year and it still works as wonderfully as the day I bought it. I use it primarily for making smoothies, everything from green monsters to peanut butter protein shakes to frozen fruit &amp; yogurt smoothies with chia seeds on top.\n\nIt's like having Jamba Juice in my kitchen, but without the long line of snap-chatting teenagers.\n\nI frequently use the to-go cups to blend and take with me in the car. If you are in the camp lamenting that it doesn't hold enough, you probably also expect that once blended, it will be as full as you originally (over)stuffed it.\n\nRespect the max fill line, people, or use the full-size blender if you are going for NYC Big Gulp size.\n\nI will say, that if you are looking to seriously juice, this is not the blender for you. \n\nIt might take a little experimentation to get the right ratio of liquid to solid/frozen for a perfectly smooth blend, but once you figure out what works for you, it's easy!",
  							"reviewKey": "9e0322d2-256e-46a5-80dc-b4468e58359b",
  							"screenName": "Kari",
  							"state": "MN",
  							"title": "Love this blender!",
  							"totalComments": "0",
  							"totalVotes": "4"
  						},
  						{
  							"RatableAttributes": [
  								{
  									"description": "quality",
  									"name": "QUALITY",
  									"value": "5"
  								},
  								{
  									"description": "easy_to_use",
  									"name": "EASY_TO_USE",
  									"value": "5"
  								},
  								{
  									"description": "value",
  									"name": "VALUE",
  									"value": "5"
  								}
  							],
  							"city": "Houston",
  							"customerId": "116412794",
  							"datePosted": "Wed Jun 05 14:26:21 UTC 2013",
  							"helpfulVotes": "5",
  							"overallRating": "5",
  							"review": "[...]\nAll the parts are well made and good quality. The only thing that seems a little flimsy would be the drinking tops for the single serve cups, but those don't even matter because all you are doing is drinking from the tops.  All the rest of the machine is top notch.\n\nThis blender is powerful, quiet and very easy to clean.   \n\n[...]\nYou will not regret buying this machine.  ",
  							"reviewKey": "4cc67e87-6754-4cab-8eb7-fb3bd738c16c",
  							"screenName": "Te-Ann",
  							"state": "TX",
  							"title": "LOVE LOVE LOVE!!!!",
  							"totalComments": "0",
  							"totalVotes": "6"
  						},
  						{
  							"RatableAttributes": [
  								{
  									"description": "quality",
  									"name": "QUALITY",
  									"value": "5"
  								},
  								{
  									"description": "easy_to_use",
  									"name": "EASY_TO_USE",
  									"value": "5"
  								},
  								{
  									"description": "value",
  									"name": "VALUE",
  									"value": "4"
  								}
  							],
  							"city": "CENTREVILLE",
  							"customerId": "102170259",
  							"datePosted": "Thu Jan 30 05:33:15 UTC 2014",
  							"helpfulVotes": "3",
  							"overallRating": "5",
  							"review": "I'm not sure why there are so many negative reviews about this blender on Target's website, but it's a great blender.  The first blender I've own that actually crushes the ice completely! Perfect for shakes!",
  							"reviewKey": "3e810dba-638f-4146-aee8-190a741d86d5",
  							"screenName": "SL",
  							"state": "VA",
  							"title": "Fantastic blender!!",
  							"totalComments": "0",
  							"totalVotes": "3"
  						}
  					],
  					"consolidatedOverallRating": "4",
  					"totalPages": "2",
  					"totalReviews": "14"
  				}
  			],
  			"DPCI": "072-04-1840",
  			"Images": [
  				{
  					"AlternateImages": [
  						{
  							"image": "http://target.scene7.com/is/image/Target/14263758_Alt01"
  						},
  						{
  							"image": "http://target.scene7.com/is/image/Target/14263758_Alt02"
  						},
  						{
  							"image": "http://target.scene7.com/is/image/Target/14263758_Alt03"
  						},
  						{
  							"image": "http://target.scene7.com/is/image/Target/14263758_Alt04"
  						},
  						{
  							"image": "http://target.scene7.com/is/image/Target/14263758_Alt05"
  						},
  						{
  							"image": "http://target.scene7.com/is/image/Target/14263758_Alt06"
  						},
  						{
  							"image": "http://target.scene7.com/is/image/Target/14263758_Alt07"
  						}
  					],
  					"PrimaryImage": [
  						{
  							"image": "http://target.scene7.com/is/image/Target/14263758"
  						}
  					],
  					"imageCount": "8",
  					"source": "internal"
  				}
  			],
  			"ItemDescription": [
  				{
  					"features": [
  						"<strong>Wattage Output:</strong> 1100 Watts",
  						"<strong>Number of Speeds:</strong> 3 ",
  						"<strong>Capacity (volume):</strong> 72.0 Oz.",
  						"<strong>Appliance Capabilities:</strong> Blends",
  						"<strong>Includes:</strong> Travel Lid",
  						"<strong>Material:</strong> Plastic",
  						"<strong>Finish:</strong> Painted",
  						"<strong>Metal Finish:</strong> Chrome",
  						"<strong>Safety and Security Features:</strong> Non-Slip Base",
  						"<strong>Care and Cleaning:</strong> Easy-To-Clean, Dishwasher Safe Parts"
  					]
  				}
  			],
  			"Offers": [
  				{
  					"OfferPrice": [
  						{
  							"currencyCode": "USD",
  							"formattedPriceValue": "$139.99",
  							"priceQualifier": "Online Price",
  							"priceValue": "13999"
  						}
  					]
  				}
  			],
  			"POBoxProhibited": "We regret that this item cannot be shipped to PO Boxes.",
  			"PackageDimension": [
  				{
  					"name": "length",
  					"unit": "IN",
  					"value": "17.4"
  				},
  				{
  					"name": "width",
  					"unit": "IN",
  					"value": "12.4"
  				},
  				{
  					"name": "height",
  					"unit": "IN",
  					"value": "9.9"
  				},
  				{
  					"name": "weight",
  					"unit": "LB",
  					"value": "10.85"
  				}
  			],
  			"Promotions": [
  				{
  					"Description": [
  						{
  							"legalDisclaimer": "Offer available online only. Offer applies to purchases of $50 or more of eligible items across all categories. Look for the &quot;SPEND $50: SHIPS FREE&quot; logo on eligible items. Some exclusions apply. Items that are not eligible are subject to shipping charges. $50 purchase is based on eligible merchandise subtotal. Items that are not eligible, GiftCards, e-GiftCards, gift wrap, tax and shipping and handling charges will not be included in determining merchandise subtotal. Offer valid for orders shipping within the 48 contiguous states, as well as APO/FPO and for Standard and To the Door shipping methods only. Not valid on previous orders.",
  							"shortDescription": "SPEND $50, GET FREE SHIPPING"
  						}
  					],
  					"endDate": "2014-05-25 06:59:00.001",
  					"promotionIdentifier": "10736506",
  					"promotionType": "Buy catalog entries from category X, get shipping at a fixed price",
  					"startDate": "2014-05-18 07:00:00.001"
  				},
  				{
  					"Description": [
  						{
  							"legalDisclaimer": "Receive a $25 gift card when you buy a Ninja Professional Blender with single serve blending cups or a Ninja MEGA Kitchen System. Not valid on previous orders. On your order summary, the item subtotal will reflect the price of the qualifying item plus the amount of the free gift card, followed by a discount given for the amount of the free gift card. &nbsp;Your price on the order summary will be the price of the qualifying item (the total charges for the qualifying item and gift card). &nbsp;Your account will actually be charged the amount of the qualifying item reduced by the amount of the gift card, and a separate charge for the amount of the gift card. The gift card will be sent to the same address as your order and will ship separately. If you want to return the item you purchased to a Target Store, you may either keep the gift card and just return the qualifying item (you will be refunded the amount of the qualifying item reduced by the amount of the gift card), or you can return the qualifying item and the gift card &nbsp;for a full refund using the online receipt. If you return the item you purchased by mail, keep the gift card; you will be refunded the amount of the qualifying item reduced by the amount of the gift card. Offer expires 05/24/14 at 11:59pm PST.",
  							"shortDescription": "$25 gift card with purchase of a select Ninja Blender"
  						}
  					],
  					"endDate": "2014-05-25 06:59:00.001",
  					"promotionIdentifier": "10730501",
  					"promotionType": "Multiple Items Free Gift",
  					"startDate": "2014-05-11 07:00:00.001"
  				}
  			],
  			"ReturnPolicy": [
  				{
  					"ReturnPolicyDetails": [
  						{
  							"guestMessage": "View our return policy",
  							"policyDays": "100",
  							"user": "Regular Guest"
  						},
  						{
  							"guestMessage": "View our return policy",
  							"policyDays": "120",
  							"user": "Best Guest"
  						}
  					],
  					"legalCopy": "refund/exchange policy<br/><br/><p style=\"font-size:13px;\">Most unopened items in new condition returned within 90 days will receive a refund or exchange. Some items have a modified return policy that is less than 90 days.&nbsp;Those items will either show a \"return by\" date or \"return within\" day range under the item on your receipt or packing slip and in the \"Item details, shipping\" tab if purchased on Target.com. Items that are opened or damaged or do not have a packing slip or receipt may be denied a refund or exchange. All bundled items must be returned with all components for a full refund. Bundle components may not all have the same return policy; please check your packing slip for details.&nbsp; Some items, such as gift cards, digital items&nbsp;are never returnable.&nbsp;<br /><br />See the <a href=\"http://www.target.com/HelpContent?help=/sites/html/TargetOnline/help/returns_and_refunds/returns_and_refunds.html\">Target return policy</a> for complete information.</p><br/>"
  				}
  			],
  			"UPC": "622356532099",
  			"applyCouponLink": "false",
  			"buyable": "true",
  			"callOutMsg": "FREE $25 GIFT CARD",
  			"catEntryId": "205273068",
  			"classId": "04",
  			"department": "072",
  			"eligibleFor": "ADD_TO_CART",
  			"inventoryCode": "0",
  			"inventoryStatus": "Online",
  			"itemId": "1840",
  			"itemType": "ItemBean",
  			"manufacturer": "Euro Pro",
  			"manufacturerPartNumber": "BL660",
  			"packageQuantity": "null ",
  			"partNumber": "14263758",
  			"purchasingChannel": "Sold Online + in Stores",
  			"purchasingChannelCode": "0",
  			"shortDescription": "For the first time EVER - you get the same professional performance power in the Single Serve as well as the XL 72 oz pitcher! The Ninja™ Professional Blender with Single Serve Blending Cups allow you to crush ice into snow, blend whole fruits and vegetables into nutritious beverages, and create resort style blended drinks! Full size blender performance now in individual cups.",
  			"title": "Ninja™ Professional Blender with Single Serve Blending Cups",
  			"webclass": "Small Appliances"
  		}
  	]
  };

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _slicedToArray2 = __webpack_require__(47);
  
  var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);
  
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
  
  var _includes2 = __webpack_require__(77);
  
  var _includes3 = _interopRequireDefault(_includes2);
  
  var _map2 = __webpack_require__(53);
  
  var _map3 = _interopRequireDefault(_map2);
  
  var _at6 = __webpack_require__(75);
  
  var _at7 = _interopRequireDefault(_at6);
  
  var _get2 = __webpack_require__(76);
  
  var _get3 = _interopRequireDefault(_get2);
  
  var _react = __webpack_require__(31);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _Home = __webpack_require__(54);
  
  var _Home2 = _interopRequireDefault(_Home);
  
  var _ComponentsSlider = __webpack_require__(56);
  
  var _ComponentsSlider2 = _interopRequireDefault(_ComponentsSlider);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  var Home = function (_Component) {
      (0, _inherits3.default)(Home, _Component);
  
      function Home() {
          var _ref;
  
          var _temp, _this, _ret;
  
          (0, _classCallCheck3.default)(this, Home);
  
          for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
          }
  
          return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).call.apply(_ref, [this].concat(args))), _this), _this.state = { selectedIndex: 0 }, _this.onChangeHandler = function (selectedIndex) {
              _this.setState({ selectedIndex: selectedIndex });
          }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
      } // eslint-disable-line react/prefer-stateless-function
  
  
      (0, _createClass3.default)(Home, [{
          key: 'render',
          value: function render() {
              var _this2 = this;
  
              var selectedIndex = this.state.selectedIndex;
              var data = this.props.data;
              var imageList = (0, _get3.default)(data, 'CatalogEntryView[0].Images[0].AlternateImages', []).map(function (i) {
                  return (0, _get3.default)(i, 'image');
              });
              var CatalogEntryView = (0, _get3.default)(data, 'CatalogEntryView[0]');
  
              var _at2 = (0, _at7.default)(CatalogEntryView, ['ItemDescription[0].features', 'Offers[0].OfferPrice[0]', 'PackageDimension', 'Promotions', 'purchasingChannelCode', 'inventoryStatus', 'title', 'ReturnPolicy[0].legalCopy']),
                  _at3 = (0, _slicedToArray3.default)(_at2, 8),
                  _at3$ = _at3[0],
                  ItemDescription = _at3$ === undefined ? [] : _at3$,
                  OfferPrice = _at3[1],
                  PackageDimension = _at3[2],
                  Promotions = _at3[3],
                  purchasingChannelCode = _at3[4],
                  inventoryStatus = _at3[5],
                  title = _at3[6],
                  legalCopy = _at3[7];
  
              var _at4 = (0, _at7.default)(OfferPrice, ['currencyCode', 'formattedPriceValue', 'priceQualifier', 'priceValue']),
                  _at5 = (0, _slicedToArray3.default)(_at4, 4),
                  currencyCode = _at5[0],
                  formattedPriceValue = _at5[1],
                  priceQualifier = _at5[2],
                  priceValue = _at5[3];
  
              return _react2.default.createElement(
                  'div',
                  { className: _Home2.default.container },
                  _react2.default.createElement(
                      'div',
                      null,
                      _react2.default.createElement(
                          'h1',
                          null,
                          title
                      ),
                      _react2.default.createElement(
                          _ComponentsSlider2.default,
                          {
                              isCircular: true,
                              autoplay: false,
                              onChangeHandler: this.onChangeHandler,
                              index: selectedIndex
                          },
                          (0, _map3.default)(imageList, function (imgSrc, i) {
                              return _react2.default.createElement(
                                  'div',
                                  { key: i, className: _Home2.default.preview },
                                  _react2.default.createElement('img', {
                                      role: 'presentation',
                                      src: imgSrc })
                              );
                          })
                      ),
                      _react2.default.createElement(
                          'div',
                          { className: _Home2.default.row },
                          _react2.default.createElement(
                              _ComponentsSlider2.default,
                              {
                                  isCircular: false,
                                  autoplay: false,
                                  noOfSlidesShown: 3
                              },
                              (0, _map3.default)(imageList, function (imgSrc, i) {
                                  return _react2.default.createElement(
                                      'div',
                                      { key: i, className: _Home2.default.cell, onClick: function onClick() {
                                              return _this2.onChangeHandler(i);
                                          } },
                                      _react2.default.createElement('img', {
                                          role: 'presentation',
                                          src: imgSrc })
                                  );
                              })
                          )
                      )
                  ),
                  _react2.default.createElement(
                      'div',
                      { className: _Home2.default.right },
                      _react2.default.createElement(
                          'div',
                          null,
                          formattedPriceValue,
                          _react2.default.createElement(
                              'sub',
                              null,
                              priceQualifier
                          )
                      ),
                      _react2.default.createElement(
                          'div',
                          null,
                          (0, _map3.default)(Promotions, function (p, i) {
                              return _react2.default.createElement(
                                  'div',
                                  { key: i },
                                  (0, _get3.default)(p, 'Description[0].shortDescription')
                              );
                          })
                      ),
                      _react2.default.createElement('input', { type: 'number', min: 1 }),
                      _react2.default.createElement(
                          'div',
                          { className: _Home2.default.buttonGroup },
                          (0, _includes3.default)(['0', '1'], purchasingChannelCode) && _react2.default.createElement(
                              'button',
                              null,
                              'ADD TO CART'
                          ),
                          (0, _includes3.default)(['0', '2'], purchasingChannelCode) && _react2.default.createElement(
                              'button',
                              null,
                              'PICK UP IN STORE'
                          )
                      ),
                      _react2.default.createElement(
                          'div',
                          null,
                          _react2.default.createElement(
                              'div',
                              { className: _Home2.default.verticalSeparator },
                              'Returns'
                          ),
                          _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: '<p>' + legalCopy + '</p>' } })
                      ),
                      _react2.default.createElement(
                          'h2',
                          null,
                          'Product highlights'
                      ),
                      _react2.default.createElement(
                          'ul',
                          null,
                          (0, _map3.default)(ItemDescription, function (des, i) {
                              return _react2.default.createElement('li', { key: i, dangerouslySetInnerHTML: { __html: des } });
                          })
                      )
                  )
              );
          }
      }]);
      return Home;
  }(_react.Component);
  
  exports.default = (0, _withStyles2.default)(_Home2.default)(Home);

/***/ },
/* 53 */
/***/ function(module, exports) {

  module.exports = require("lodash/map");

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(55);
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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, "/*\nWebsite to find color names corresponding to hash code\nhttp://chir.ag/projects/name-that-color/\nhttp://www.color-hex.com/color/da70d6\n */\n.Home_row_tWR, .Home_container_1N8 {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: row;\n      -ms-flex-direction: row;\n          flex-direction: row; }\n\n.Home_column_2Dc, .Home_right_2lI {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n  -webkit-flex-direction: column;\n      -ms-flex-direction: column;\n          flex-direction: column; }\n\n.Home_container_1N8 {\n  height: 700px;\n  -webkit-box-pack: justify;\n  -webkit-justify-content: space-between;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  -webkit-flex-wrap: wrap;\n      -ms-flex-wrap: wrap;\n          flex-wrap: wrap;\n  margin: 2rem; }\n  .Home_container_1N8 > div {\n    width: 400px; }\n  .Home_container_1N8 button {\n    background: #01b9f5; }\n\n.Home_preview_pvO {\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  .Home_preview_pvO img {\n    width: 300px;\n    height: 300px; }\n\n.Home_cell_bus {\n  width: 100px;\n  height: 100px; }\n  .Home_cell_bus img {\n    width: 100%; }\n\n.Home_right_2lI {\n  line-height: 1.4em; }\n\n.Home_buttonGroup_A3H {\n  /*@extend .row;*/ }\n", "", {"version":3,"sources":["/./routes/home/Home.scss"],"names":[],"mappings":"AAAA;;;;GAIG;AACH;EACE,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;EAApB,4BAAoB;MAApB,wBAAoB;UAApB,oBAAoB,EAAE;;AAExB;EACE,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,6BAAuB;EAAvB,8BAAuB;EAAvB,+BAAuB;MAAvB,2BAAuB;UAAvB,uBAAuB,EAAE;;AAE3B;EACE,cAAc;EACd,0BAA+B;EAA/B,uCAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;EAC/B,wBAAgB;MAAhB,oBAAgB;UAAhB,gBAAgB;EAChB,aAAa,EAAE;EACf;IACE,aAAa,EAAE;EACjB;IACE,oBAAoB,EAAE;;AAE1B;EACE,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,yBAAwB;EAAxB,gCAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB,EAAE;EAC1B;IACE,aAAa;IACb,cAAc,EAAE;;AAEpB;EACE,aAAa;EACb,cAAc,EAAE;EAChB;IACE,YAAY,EAAE;;AAElB;EACE,mBAAmB,EAAE;;AAEvB;EACE,iBAAiB,EAAE","file":"Home.scss","sourcesContent":["/*\nWebsite to find color names corresponding to hash code\nhttp://chir.ag/projects/name-that-color/\nhttp://www.color-hex.com/color/da70d6\n */\n.row, .container {\n  display: flex;\n  flex-direction: row; }\n\n.column, .right {\n  display: flex;\n  flex-direction: column; }\n\n.container {\n  height: 700px;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  margin: 2rem; }\n  .container > div {\n    width: 400px; }\n  .container button {\n    background: #01b9f5; }\n\n.preview {\n  display: flex;\n  justify-content: center; }\n  .preview img {\n    width: 300px;\n    height: 300px; }\n\n.cell {\n  width: 100px;\n  height: 100px; }\n  .cell img {\n    width: 100%; }\n\n.right {\n  line-height: 1.4em; }\n\n.buttonGroup {\n  /*@extend .row;*/ }\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"row": "Home_row_tWR",
  	"container": "Home_container_1N8",
  	"column": "Home_column_2Dc",
  	"right": "Home_right_2lI",
  	"preview": "Home_preview_pvO",
  	"cell": "Home_cell_bus",
  	"buttonGroup": "Home_buttonGroup_A3H"
  };

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _toConsumableArray2 = __webpack_require__(12);
  
  var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);
  
  var _react = __webpack_require__(31);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ComponentsSlider = __webpack_require__(57);
  
  var _ComponentsSlider2 = _interopRequireDefault(_ComponentsSlider);
  
  var _Slider = __webpack_require__(59);
  
  var _Slider2 = _interopRequireDefault(_Slider);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   *
   * @param noOfSlidesShown
   * @param autoplay
   * @param children
   * @param classNames
   * @param onChangeHandler: fires when we click on slider left or right
   * @returns {XML}
   * @constructor
   */
  var ComponentsSlider = function ComponentsSlider(_ref) {
    var noOfSlidesShown = _ref.noOfSlidesShown,
        autoplay = _ref.autoplay,
        sliderWrap = _ref.sliderWrap,
        isCircular = _ref.isCircular,
        styles = _ref.styles,
        index = _ref.index,
        items = _ref.children,
        onChangeHandler = _ref.onChangeHandler;
  
    var classNames = {
      slider: _ComponentsSlider2.default.slider,
      icon: _ComponentsSlider2.default.icon,
      mySlider: _ComponentsSlider2.default.mySlider,
      'slider-next': _ComponentsSlider2.default['slider-next'],
      'slider-prev': _ComponentsSlider2.default['slider-prev'],
      'transition--0': _ComponentsSlider2.default['transition--0'],
      slide: _ComponentsSlider2.default.slide,
      'slider-list': _ComponentsSlider2.default['slider-list'],
      'slider-track': _ComponentsSlider2.default['slider-track'],
      'image-container': _ComponentsSlider2.default['image-container']
    };
  
    // if item length 6 , we need to show 5 , then circularLength is 10.
    var circularLength = Math.ceil(items.length / noOfSlidesShown) * noOfSlidesShown;
    var paddingArr = new Array(circularLength - items.length);
    var circularItems = [].concat((0, _toConsumableArray3.default)(items), paddingArr);
    if (isCircular) {
      circularItems = [].concat((0, _toConsumableArray3.default)(circularItems.slice(circularItems.length - noOfSlidesShown, circularItems.length)), (0, _toConsumableArray3.default)(circularItems), (0, _toConsumableArray3.default)(circularItems.slice(0, noOfSlidesShown)));
    }
    if (styles) {
      classNames['slider-next'] = styles['slider-next'];
      classNames['slider-prev'] = styles['slider-prev'];
    }
    return _react2.default.createElement(_Slider2.default, {
      autoplay: autoplay,
      circularItems: circularItems,
      className: _ComponentsSlider2.default.mySlider,
      classNames: classNames,
      noOfSlidesShown: noOfSlidesShown,
      boundryIndexes: [1, circularItems.length - 1],
      incrementTranslationUnits: noOfSlidesShown,
      onChangeHandler: onChangeHandler,
      sliderWrap: sliderWrap,
      isCircular: isCircular,
      index: index
    });
  };
  ComponentsSlider.propTypes = {
    autoplay: _react.PropTypes.bool,
    noOfSlidesShown: _react.PropTypes.number,
    children: _react.PropTypes.array.isRequired,
    styles: _react.PropTypes.object,
    onChangeHandler: _react.PropTypes.func,
    sliderWrap: _react.PropTypes.bool,
    isCircular: _react.PropTypes.bool,
    index: _react.PropTypes.number
  };
  ComponentsSlider.defaultProps = {
    autoplay: false,
    noOfSlidesShown: 1,
    sliderWrap: true,
    isCircular: false,
    index: 0,
    onChangeHandler: function onChangeHandler() {}
  };
  exports.default = (0, _withStyles2.default)(_ComponentsSlider2.default)(ComponentsSlider);

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(58);
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, "/*\nWebsite to find color names corresponding to hash code\nhttp://chir.ag/projects/name-that-color/\nhttp://www.color-hex.com/color/da70d6\n */\n.ComponentsSlider_mySlider_1lr {\n  position: relative;\n  width: 100%; }\n\n.ComponentsSlider_icon_16b {\n  width: 36px;\n  height: 36px;\n  position: absolute;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n      -ms-transform: translateY(-50%);\n       -o-transform: translateY(-50%);\n          transform: translateY(-50%);\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  background: #fff;\n  -webkit-box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);\n          box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);\n  -webkit-transition: all 0.3s;\n  -o-transition: all 0.3s;\n  transition: all 0.3s;\n  border-radius: 18px;\n  z-index: 5;\n  opacity: 1;\n  cursor: pointer;\n  color: #909090; }\n\n.ComponentsSlider_icon_16b.ComponentsSlider_slider-next_2xa img {\n  max-width: 100%;\n  width: 10px; }\n\n.ComponentsSlider_icon_16b.ComponentsSlider_slider-prev_2aR img {\n  max-width: 100%;\n  width: 10px; }\n\n.ComponentsSlider_icon_16b.ComponentsSlider_slider-next_2xa {\n  right: -26px; }\n  .ComponentsSlider_icon_16b.ComponentsSlider_slider-next_2xa span::before {\n    content: '\\203A';\n    font-size: 30px;\n    line-height: 20px; }\n\n.ComponentsSlider_icon_16b.ComponentsSlider_slider-prev_2aR {\n  left: -26px; }\n  .ComponentsSlider_icon_16b.ComponentsSlider_slider-prev_2aR span::before {\n    content: '\\2039';\n    font-size: 30px;\n    line-height: 18px; }\n\n.ComponentsSlider_slide_2EK {\n  display: inline-block;\n  height: 100%;\n  min-height: 1px;\n  vertical-align: bottom; }\n\n.ComponentsSlider_slider-list_3sJ {\n  height: 100%;\n  overflow: hidden; }\n\n.ComponentsSlider_slider_1Z9 {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: visible; }\n  .ComponentsSlider_slider_1Z9 .ComponentsSlider_icon_16b.ComponentsSlider_slider-next_2xa,\n  .ComponentsSlider_slider_1Z9 .ComponentsSlider_icon_16b.ComponentsSlider_slider-prev_2aR {\n    opacity: 1; }\n\n.ComponentsSlider_slider-track_IAN {\n  height: 100%;\n  position: relative;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex; }\n", "", {"version":3,"sources":["/./components/ComponentsSlider/ComponentsSlider.scss"],"names":[],"mappings":"AAAA;;;;GAIG;AACH;EACE,mBAAmB;EACnB,YAAY,EAAE;;AAEhB;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,oCAA4B;MAA5B,gCAA4B;OAA5B,+BAA4B;UAA5B,4BAA4B;EAC5B,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,0BAAoB;EAApB,4BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,yBAAwB;EAAxB,gCAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,iBAAiB;EACjB,mDAA2C;UAA3C,2CAA2C;EAC3C,6BAAqB;EAArB,wBAAqB;EAArB,qBAAqB;EACrB,oBAAoB;EACpB,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,eAAe,EAAE;;AAEnB;EACE,gBAAgB;EAChB,YAAY,EAAE;;AAEhB;EACE,gBAAgB;EAChB,YAAY,EAAE;;AAEhB;EACE,aAAa,EAAE;EACf;IACE,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB,EAAE;;AAExB;EACE,YAAY,EAAE;EACd;IACE,iBAAiB;IACjB,gBAAgB;IAChB,kBAAkB,EAAE;;AAExB;EACE,sBAAsB;EACtB,aAAa;EACb,gBAAgB;EAChB,uBAAuB,EAAE;;AAE3B;EACE,aAAa;EACb,iBAAiB,EAAE;;AAErB;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,kBAAkB,EAAE;EACpB;;IAEE,WAAW,EAAE;;AAEjB;EACE,aAAa;EACb,mBAAmB;EACnB,qBAAc;EAAd,sBAAc;EAAd,qBAAc;EAAd,cAAc,EAAE","file":"ComponentsSlider.scss","sourcesContent":["/*\nWebsite to find color names corresponding to hash code\nhttp://chir.ag/projects/name-that-color/\nhttp://www.color-hex.com/color/da70d6\n */\n.mySlider {\n  position: relative;\n  width: 100%; }\n\n.icon {\n  width: 36px;\n  height: 36px;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #fff;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.08);\n  transition: all 0.3s;\n  border-radius: 18px;\n  z-index: 5;\n  opacity: 1;\n  cursor: pointer;\n  color: #909090; }\n\n.icon.slider-next img {\n  max-width: 100%;\n  width: 10px; }\n\n.icon.slider-prev img {\n  max-width: 100%;\n  width: 10px; }\n\n.icon.slider-next {\n  right: -26px; }\n  .icon.slider-next span::before {\n    content: '\\203A';\n    font-size: 30px;\n    line-height: 20px; }\n\n.icon.slider-prev {\n  left: -26px; }\n  .icon.slider-prev span::before {\n    content: '\\2039';\n    font-size: 30px;\n    line-height: 18px; }\n\n.slide {\n  display: inline-block;\n  height: 100%;\n  min-height: 1px;\n  vertical-align: bottom; }\n\n.slider-list {\n  height: 100%;\n  overflow: hidden; }\n\n.slider {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  overflow: visible; }\n  .slider .icon.slider-next,\n  .slider .icon.slider-prev {\n    opacity: 1; }\n\n.slider-track {\n  height: 100%;\n  position: relative;\n  display: flex; }\n"],"sourceRoot":"webpack://"}]);
  
  // exports
  exports.locals = {
  	"mySlider": "ComponentsSlider_mySlider_1lr",
  	"icon": "ComponentsSlider_icon_16b",
  	"slider-next": "ComponentsSlider_slider-next_2xa",
  	"slider-prev": "ComponentsSlider_slider-prev_2aR",
  	"slide": "ComponentsSlider_slide_2EK",
  	"slider-list": "ComponentsSlider_slider-list_3sJ",
  	"slider": "ComponentsSlider_slider_1Z9",
  	"slider-track": "ComponentsSlider_slider-track_IAN"
  };

/***/ },
/* 59 */
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
  
  var _Slide = __webpack_require__(60);
  
  var _Slide2 = _interopRequireDefault(_Slide);
  
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
  
      _this.onTransitionEnd = function () {
        var leftIndex = _this.state.leftIndex;
        var _this$props = _this.props,
            circularItems = _this$props.circularItems,
            noOfSlidesShown = _this$props.noOfSlidesShown,
            onChangeHandler = _this$props.onChangeHandler;
  
        var sliderLength = circularItems.length;
        if (_this.state.isLeft) {
          leftIndex -= 1;
          if (leftIndex <= -1 + _this.leftOffset) {
            leftIndex = sliderLength / noOfSlidesShown - 1 - _this.leftOffset;
          }
        } else {
          leftIndex += 1;
          if ((leftIndex + _this.leftOffset) * noOfSlidesShown >= sliderLength) {
            leftIndex = _this.leftOffset;
          }
        }
        onChangeHandler((leftIndex - _this.leftOffset) * noOfSlidesShown);
        _this.sliderTrack.removeEventListener('transitionend', _this.onTransitionEnd);
        _this.updateItems(leftIndex);
        _this.setState({
          isAnimation: false,
          leftIndex: leftIndex
        });
      };
  
      _this.renderButton = function (_ref) {
        var isLeft = _ref.isLeft,
            className = _ref.className,
            s = _ref.classNames;
  
        return _react2.default.createElement(
          'div',
          {
            className: s.icon + ' ' + className,
            onClick: function onClick() {
              _this.onClick(isLeft);
            }
          },
          _react2.default.createElement('span', null)
        );
      };
  
      _this.state = {
        leftIndex: props.index,
        isAnimation: false,
        isLeft: true
      };
      _this.leftOffset = 0;
      if (props.isCircular) {
        _this.state.leftIndex++;
        _this.leftOffset++;
      }
      return _this;
    }
  
    // For the first time, items to render needs to be updated
  
  
    (0, _createClass3.default)(Slider, [{
      key: 'componentWillMount',
      value: function componentWillMount() {
        var circularItems = this.props.circularItems;
  
        var sliderLength = circularItems.length;
        // On slide we will first load empty object in slider
        // then load images in them
        this.itemsToRender = new Array(sliderLength).fill(null);
        this.translateLeft = 0;
        this.updateItems(this.state.leftIndex);
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this2 = this;
  
        if (this.props.autoplay) {
          this.interval = setInterval(function () {
            _this2.onClick(false);
          }, 10000);
        }
      }
  
      // This handles change in isVisible that comes from the parent. will not be called for others
      // because two separate arrays are maintained and the one showing is not coming from props.
  
    }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
        var index = this.state.leftIndex;
        if (this.props.index !== nextProps.index) {
          index = nextProps.index + 1;
          this.setState({
            leftIndex: index
          });
        }
        this.updateItems(index, nextProps);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate() {
        if (this.state.isAnimation) {
          this.sliderTrack.addEventListener('transitionend', this.onTransitionEnd, false);
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
      key: 'onClick',
      value: function onClick(isLeft) {
        this.transitionDelay = false;
        if (!this.state.isAnimation) {
          var circularItems = this.props.circularItems;
          var noOfSlidesShown = this.props.noOfSlidesShown;
  
          var sliderLength = circularItems.length;
          var sliderItemWidth = 100 / sliderLength;
          // multiplier -1 means element is sliding to left
          var multiplier = -1;
          if (isLeft) {
            multiplier = 1;
          }
          if (!this.props.isCircular && !this.props.sliderWrap) {
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
        var _props = this.props,
            circularItems = _props.circularItems,
            noOfSlidesShown = _props.noOfSlidesShown;
  
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
        var _state = this.state,
            isLeft = _state.isLeft,
            isAnimation = _state.isAnimation;
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
      key: 'render',
      value: function render() {
        var _this3 = this;
  
        var _props2 = this.props,
            circularItems = _props2.circularItems,
            noOfSlidesShown = _props2.noOfSlidesShown,
            s = _props2.classNames,
            isCircular = _props2.isCircular;
  
        var sliderLength = circularItems.length;
        var leftVal = this.getLeft();
        var sliderTrackWidth = sliderLength / noOfSlidesShown * 100 + '%';
        var isAnimation = this.state.isAnimation;
  
        var sliderTrackStyle = {
          width: sliderTrackWidth,
          left: leftVal + '%'
        };
        if (isAnimation) {
          sliderTrackStyle = (0, _extends3.default)({}, sliderTrackStyle, {
            transform: 'translate3d(' + this.translateLeft + '%,0px,0px)',
            transitionDelay: this.transitionDelay ? '1.5s' : '0s',
            transition: 'transform 0.7s ease-out'
          });
        }
        return _react2.default.createElement(
          'div',
          { className: s.mySlider },
          _react2.default.createElement(
            'div',
            { className: s.slider },
            (isCircular || this.state.leftIndex < sliderLength / noOfSlidesShown - 1) && this.renderButton({
              isLeft: false,
              className: s['slider-next'],
              classNames: s
            }),
            (isCircular || this.state.leftIndex > 0) && this.renderButton({
              isLeft: true,
              className: s['slider-prev'],
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
          )
        );
      }
    }]);
    return Slider;
  }(_react.Component);
  
  Slider.propTypes = {
    circularItems: _react.PropTypes.array,
    noOfSlidesShown: _react.PropTypes.number,
    isCircular: _react.PropTypes.bool,
    autoplay: _react.PropTypes.bool,
    classNames: _react.PropTypes.object,
    onChangeHandler: _react.PropTypes.func,
    sliderWrap: _react.PropTypes.bool,
    index: _react.PropTypes.number
  };
  Slider.defaultProps = {
    circularItems: [],
    noOfSlidesShown: 3,
    onChangeHandler: function onChangeHandler() {}
  };
  exports.default = Slider;

/***/ },
/* 60 */
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
      children
    );
  };
  
  Slide.propTypes = {
    sliderLength: _react.PropTypes.number,
    classNames: _react.PropTypes.object,
    children: _react.PropTypes.object
  };
  
  exports.default = Slide;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _utils = __webpack_require__(62);
  
  var _react = __webpack_require__(31);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _App = __webpack_require__(32);
  
  var _App2 = _interopRequireDefault(_App);
  
  var _ErrorPage = __webpack_require__(66);
  
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.addExtraParams = exports.addParamToUrl = exports.getFormattedDate = undefined;
  
  var _extends2 = __webpack_require__(23);
  
  var _extends3 = _interopRequireDefault(_extends2);
  
  var _keys = __webpack_require__(63);
  
  var _keys2 = _interopRequireDefault(_keys);
  
  exports.stringifyQueryParams = stringifyQueryParams;
  exports.getParameterByName = getParameterByName;
  
  var _urls = __webpack_require__(64);
  
  var _qs = __webpack_require__(65);
  
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
/* 63 */
/***/ function(module, exports) {

  module.exports = require("babel-runtime/core-js/object/keys");

/***/ },
/* 64 */
/***/ function(module, exports) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var fbSearchUrl = exports.fbSearchUrl = 'https://graph.facebook.com/search';

/***/ },
/* 65 */
/***/ function(module, exports) {

  module.exports = require("qs");

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _react = __webpack_require__(31);
  
  var _react2 = _interopRequireDefault(_react);
  
  var _withStyles = __webpack_require__(41);
  
  var _withStyles2 = _interopRequireDefault(_withStyles);
  
  var _ErrorPage = __webpack_require__(67);
  
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(68);
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(44)();
  // imports
  
  
  // module
  exports.push([module.id, "h1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400; }\n\npre {\n  text-align: left;\n  margin-top: 2rem; }\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%; }\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em; } }\n", "", {"version":3,"sources":["/./routes/error/ErrorPage.scss"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,eAAe;EACf,iBAAiB,EAAE;;AAErB;EACE,iBAAiB;EACjB,iBAAiB,EAAE;;AAErB;EACE;;IAEE,WAAW,EAAE;EACf;IACE,iBAAiB;IACjB,kBAAkB,EAAE,EAAE","file":"ErrorPage.scss","sourcesContent":["h1 {\n  color: #555;\n  font-size: 2em;\n  font-weight: 400; }\n\npre {\n  text-align: left;\n  margin-top: 2rem; }\n\n@media only screen and (max-width: 280px) {\n  body,\n  p {\n    width: 95%; }\n  h1 {\n    font-size: 1.5em;\n    margin: 0 0 0.3em; } }\n"],"sourceRoot":"webpack://"}]);
  
  // exports


/***/ },
/* 69 */
/***/ function(module, exports) {

  module.exports = require("./assets");

/***/ },
/* 70 */
/***/ function(module, exports) {

  module.exports = require("memoizee");

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

/***/ },
/* 75 */
/***/ function(module, exports) {

  module.exports = require("lodash/at");

/***/ },
/* 76 */
/***/ function(module, exports) {

  module.exports = require("lodash/get");

/***/ },
/* 77 */
/***/ function(module, exports) {

  module.exports = require("lodash/includes");

/***/ }
/******/ ]);
//# sourceMappingURL=server.js.map