"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.increment = increment;
exports.decrement = decrement;
exports.enableButtons = enableButtons;
exports.disableButtons = disableButtons;
exports.changeTheme = changeTheme;
exports.asyncIncrement = asyncIncrement;

var _types = require("./types");

function increment() {
  return {
    type: _types.INCREMENT
  };
}

function decrement() {
  return {
    type: _types.DECREMENT
  };
}

function enableButtons() {
  return {
    type: _types.ENABLE_BUTTONS
  };
}

function disableButtons() {
  return {
    type: _types.DISABLE_BUTTONS
  };
}

function changeTheme(newTheme) {
  return {
    type: _types.CHANGE_THEME,
    payload: newTheme
  };
}

function asyncIncrement() {
  return function (dispatch) {
    dispatch(disableButtons());
    setTimeout(function () {
      dispatch(increment());
      dispatch(enableButtons());
    }, 1500);
  };
}