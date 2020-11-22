"use strict";

var _redux = require("redux");

var _reduxDevtoolsExtension = require("redux-devtools-extension");

var _reduxLogger = _interopRequireDefault(require("redux-logger"));

var _reduxThunk = _interopRequireDefault(require("redux-thunk"));

var _actions = require("./redux/actions");

var _rootReducer = require("./redux/rootReducer");

require("./styles.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var counter = document.getElementById("counter");
var addBtn = document.getElementById("add");
var subBtn = document.getElementById("sub");
var asyncBtn = document.getElementById("async");
var themeBtn = document.getElementById("theme"); // function logger(state) {
//   return function(next) {
//     return function(action) {
//       console.log('Prev State', state.getState())
//       console.log('Action', action)
//       const newState = next(action)
//       console.log('New State', newState)
//       return newState
//     }
//   }
// }
// const store = createStore(
//   rootReducer,
//   compose(
//     applyMiddleware(thunk, logger),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// )

var store = (0, _redux.createStore)(_rootReducer.rootReducer, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk["default"], _reduxLogger["default"])));
addBtn.addEventListener("click", function () {
  store.dispatch((0, _actions.increment)());
});
subBtn.addEventListener("click", function () {
  store.dispatch((0, _actions.decrement)());
});
asyncBtn.addEventListener("click", function () {
  store.dispatch((0, _actions.asyncIncrement)());
});
themeBtn.addEventListener("click", function () {
  var newTheme = document.body.classList.contains("light") ? "dark" : "light";
  store.dispatch((0, _actions.changeTheme)(newTheme));
});
store.subscribe(function () {
  var state = store.getState();
  counter.textContent = state.counter;
  document.body.className = state.theme.value;
  [addBtn, subBtn, themeBtn, asyncBtn].forEach(function (btn) {
    btn.disabled = state.theme.disabled;
  });
});
store.dispatch({
  type: "INIT_APPLICATION"
});