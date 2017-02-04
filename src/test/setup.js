process.env.NODE_ENV = 'test';

function noop() {
  return null;
}

require.extensions['.css'] = noop;
require.extensions['.scss'] = noop;
require.extensions['.md'] = noop;
require.extensions['.png'] = noop;
require.extensions['.svg'] = noop;
require.extensions['.jpg'] = noop;
require.extensions['.jpeg'] = noop;
require.extensions['.gif'] = noop;

require('babel-register')();

var mockCssModules = require('mock-css-modules');
mockCssModules.register(['.scss', '.css']);

var jsdom = require('jsdom');
var documentRef;
var exposedProperties = ['window', 'navigator', 'document', '__DEV__'];

global.jsdom = jsdom;
global.document = jsdom.jsdom('');
global.window = document.defaultView;

global.__DEV__ = false;
global.localStorage = {};
global.window.sessionStorage = {};
global.window.dataLayer = [];
process.env.BROWSER = true;

// react-visibility-sensor is giving errors without this
global.Element = global.document.Element;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
documentRef = document;
