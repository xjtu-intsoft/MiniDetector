var g = require("./global.js");

g ? (g.Promise || (g.Promise = require("./../promise-polyfill/promise.js")), g.regeneratorRuntime || (g.regeneratorRuntime = require("./../regenerator-runtime/runtime.js"))) : console.warn('请确认关闭小程序选项 "关闭ES6转ES5"');