"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rootReducer = void 0;

var _redux = require("redux");

var _types = require("./types");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function counterReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  if (action.type === _types.INCREMENT) {
    return state + 1;
  } else if (action.type === _types.DECREMENT) {
    return state - 1;
  }

  return state;
}

var initialThemeState = {
  value: "light",
  disabled: false
};

function themeReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialThemeState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case _types.CHANGE_THEME:
      return _objectSpread({}, state, {
        value: action.payload
      });

    case _types.ENABLE_BUTTONS:
      return _objectSpread({}, state, {
        disabled: false
      });

    case _types.DISABLE_BUTTONS:
      return _objectSpread({}, state, {
        disabled: true
      });

    default:
      return state;
  }
}

var rootReducer = (0, _redux.combineReducers)({
  counter: counterReducer,
  theme: themeReducer
});
exports.rootReducer = rootReducer;