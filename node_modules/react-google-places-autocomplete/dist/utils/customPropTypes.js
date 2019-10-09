'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suggestionStylesType = exports.suggestionClassNamesType = exports.autocompletionRequestType = undefined;

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var latLngBoundsType = function latLngBoundsType(props, propName, componentName) {
  var prop = props[propName];

  if (!prop) {
    return null;
  }

  if (Array.isArray(prop) && prop.length === 2 && prop.every(function (value) {
    return Object.keys(value).length === 2 && value.hasOwnProperty('lat') && value.hasOwnProperty('lng') // eslint-disable-line no-prototype-builtins
    && Number.isInteger(value.lat) && Number.isInteger(value.lng);
  })) {
    return null;
  }

  return new Error('Invalid prop `' + propName + '` supplied to `' + componentName + '`. Validation failed.');
};

var componentRestrictionsType = _propTypes2.default.shape({
  country: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.arrayOf(_propTypes2.default.string)])
});

var latLngType = _propTypes2.default.shape({
  lat: _propTypes2.default.number,
  lng: _propTypes2.default.number
});

var autocompletionRequestType = exports.autocompletionRequestType = _propTypes2.default.shape({
  bounds: latLngBoundsType,
  componentRestrictions: componentRestrictionsType,
  location: latLngType,
  offset: _propTypes2.default.number,
  radius: _propTypes2.default.number,
  types: _propTypes2.default.arrayOf(_propTypes2.default.string)
});

var suggestionClassNamesType = exports.suggestionClassNamesType = _propTypes2.default.shape({
  container: _propTypes2.default.string,
  suggestion: _propTypes2.default.string,
  suggestionActive: _propTypes2.default.string
});

var suggestionStylesType = exports.suggestionStylesType = _propTypes2.default.shape({
  container: _propTypes2.default.object,
  suggestion: _propTypes2.default.object
});