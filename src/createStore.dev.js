"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createStore = createStore;

function createStore(rootReducer, initialState) {
  var state = rootReducer(initialState, {
    type: "__INIT__"
  });
  var subscribers = [];
  return {
    dispatch: function dispatch(action) {
      state = rootReducer(state, action);
      subscribers.forEach(function (sub) {
        return sub();
      });
    },
    subscribe: function subscribe(callback) {
      subscribers.push(callback);
    },
    getState: function getState() {
      return state;
    }
  };
}