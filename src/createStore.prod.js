"use strict";function createStore(t,e){var r=t(e,{type:"__INIT__"}),n=[];return{dispatch:function(e){r=t(r,e),n.forEach(function(e){return e()})},subscribe:function(e){n.push(e)},getState:function(){return r}}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createStore=createStore;