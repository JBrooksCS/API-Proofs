"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var autocompletionRequestBuilder = function autocompletionRequestBuilder(autocompletionRequest) {
  var res = _extends({}, autocompletionRequest);

  if (autocompletionRequest.bounds) {
    res.bounds = new (Function.prototype.bind.apply(google.maps.LatLngBounds, [null].concat(_toConsumableArray(autocompletionRequest.bounds))))();
  }

  if (autocompletionRequest.location) {
    res.location = new google.maps.LatLng(autocompletionRequest.location);
  }

  return res;
};

exports.default = autocompletionRequestBuilder;