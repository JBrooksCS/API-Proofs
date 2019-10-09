"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint-disable */

var debounce = function debounce(callback, timeout) {
  var d = void 0,
      e = void 0;
  return function () {
    function helper() {
      d = null, e = callback.apply(thisRef, argumentsRef);
    }
    var thisRef = this,
        argumentsRef = arguments;
    return clearTimeout(d), d = setTimeout(helper, timeout), !d && (e = callback.apply(thisRef, argumentsRef)), e;
  };
};

exports.default = debounce;