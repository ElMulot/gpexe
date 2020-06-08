(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard"],{

/***/ "./assets/css/dashboard.scss":
/*!***********************************!*\
  !*** ./assets/css/dashboard.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/dashboard.js":
/*!********************************!*\
  !*** ./assets/js/dashboard.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/web.timers */ "./node_modules/core-js/modules/web.timers.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! ../css/dashboard.scss */ "./assets/css/dashboard.scss");

var refreshConsole;
$(document).ready(function () {});
$(document).ajaxSend(function (e, jqxhr, settings) {
  if (settings.url == $('#output').data('url')) {
    $('#console').empty();
    refreshConsole = true;
    updateConsole();
  }
});
$(document).ajaxComplete(function (e, jqxhr, settings) {
  if (settings.url == $('#console').data('url') && refreshConsole) {
    setTimeout(updateConsole(), 1000);
  } else {
    refreshConsole = false;
  }
});

function updateConsole() {
  $.ajax({
    url: $('#console').data('url'),
    type: 'GET',
    success: function success(result) {
      $('#console').html($('#console').html() + result);
    }
  });
}

/***/ }),

/***/ "./node_modules/core-js/internals/engine-user-agent.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/engine-user-agent.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getBuiltIn = __webpack_require__(/*! ../internals/get-built-in */ "./node_modules/core-js/internals/get-built-in.js");

module.exports = getBuiltIn('navigator', 'userAgent') || '';


/***/ }),

/***/ "./node_modules/core-js/modules/web.timers.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/web.timers.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var global = __webpack_require__(/*! ../internals/global */ "./node_modules/core-js/internals/global.js");
var userAgent = __webpack_require__(/*! ../internals/engine-user-agent */ "./node_modules/core-js/internals/engine-user-agent.js");

var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check

var wrap = function (scheduler) {
  return function (handler, timeout /* , ...arguments */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : undefined;
    return scheduler(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof handler == 'function' ? handler : Function(handler)).apply(this, args);
    } : handler, timeout);
  };
};

// ie9- setTimeout & setInterval additional parameters fix
// https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers
$({ global: true, bind: true, forced: MSIE }, {
  // `setTimeout` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-settimeout
  setTimeout: wrap(global.setTimeout),
  // `setInterval` method
  // https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#dom-setinterval
  setInterval: wrap(global.setInterval)
});


/***/ })

},[["./assets/js/dashboard.js","runtime","vendors~app~automation~dashboard~document~form~login","vendors~app~automation~dashboard~document~form"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2Rhc2hib2FyZC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9kYXNoYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2VuZ2luZS11c2VyLWFnZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsInJlZnJlc2hDb25zb2xlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImFqYXhTZW5kIiwiZSIsImpxeGhyIiwic2V0dGluZ3MiLCJ1cmwiLCJkYXRhIiwiZW1wdHkiLCJ1cGRhdGVDb25zb2xlIiwiYWpheENvbXBsZXRlIiwic2V0VGltZW91dCIsImFqYXgiLCJ0eXBlIiwic3VjY2VzcyIsInJlc3VsdCIsImh0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBQSxtQkFBTyxDQUFDLDBEQUFELENBQVA7O0FBRUEsSUFBSUMsY0FBSjtBQUVBRixDQUFDLENBQUNHLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVcsQ0FJNUIsQ0FKRDtBQU1BSixDQUFDLENBQUNHLFFBQUQsQ0FBRCxDQUFZRSxRQUFaLENBQXFCLFVBQVNDLENBQVQsRUFBWUMsS0FBWixFQUFtQkMsUUFBbkIsRUFBNkI7QUFDakQsTUFBSUEsUUFBUSxDQUFDQyxHQUFULElBQWdCVCxDQUFDLENBQUMsU0FBRCxDQUFELENBQWFVLElBQWIsQ0FBa0IsS0FBbEIsQ0FBcEIsRUFBOEM7QUFDN0NWLEtBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY1csS0FBZDtBQUNBVCxrQkFBYyxHQUFHLElBQWpCO0FBQ0FVLGlCQUFhO0FBQ2I7QUFDRCxDQU5EO0FBUUFaLENBQUMsQ0FBQ0csUUFBRCxDQUFELENBQVlVLFlBQVosQ0FBeUIsVUFBU1AsQ0FBVCxFQUFZQyxLQUFaLEVBQW1CQyxRQUFuQixFQUE2QjtBQUVyRCxNQUFJQSxRQUFRLENBQUNDLEdBQVQsSUFBZ0JULENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY1UsSUFBZCxDQUFtQixLQUFuQixDQUFoQixJQUE2Q1IsY0FBakQsRUFBaUU7QUFDaEVZLGNBQVUsQ0FBQ0YsYUFBYSxFQUFkLEVBQWtCLElBQWxCLENBQVY7QUFDQSxHQUZELE1BRU87QUFDTlYsa0JBQWMsR0FBRyxLQUFqQjtBQUNBO0FBRUQsQ0FSRDs7QUFVQSxTQUFTVSxhQUFULEdBQXlCO0FBQ3hCWixHQUFDLENBQUNlLElBQUYsQ0FBTztBQUNOTixPQUFHLEVBQUdULENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY1UsSUFBZCxDQUFtQixLQUFuQixDQURBO0FBRU5NLFFBQUksRUFBRSxLQUZBO0FBSU5DLFdBQU8sRUFBRSxpQkFBU0MsTUFBVCxFQUFpQjtBQUN6QmxCLE9BQUMsQ0FBQyxVQUFELENBQUQsQ0FBY21CLElBQWQsQ0FBbUJuQixDQUFDLENBQUMsVUFBRCxDQUFELENBQWNtQixJQUFkLEtBQXVCRCxNQUExQztBQUNBO0FBTkssR0FBUDtBQVFBLEM7Ozs7Ozs7Ozs7O0FDdENELGlCQUFpQixtQkFBTyxDQUFDLG1GQUEyQjs7QUFFcEQ7Ozs7Ozs7Ozs7OztBQ0ZBLFFBQVEsbUJBQU8sQ0FBQyx1RUFBcUI7QUFDckMsYUFBYSxtQkFBTyxDQUFDLHVFQUFxQjtBQUMxQyxnQkFBZ0IsbUJBQU8sQ0FBQyw2RkFBZ0M7O0FBRXhEO0FBQ0Esc0NBQXNDOztBQUV0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHLHlDQUF5QztBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDIiwiZmlsZSI6ImRhc2hib2FyZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxucmVxdWlyZSgnLi4vY3NzL2Rhc2hib2FyZC5zY3NzJyk7XHJcblxyXG52YXIgcmVmcmVzaENvbnNvbGU7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcclxuXHRcclxuXHRcclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5hamF4U2VuZChmdW5jdGlvbihlLCBqcXhociwgc2V0dGluZ3MpIHtcclxuXHRpZiAoc2V0dGluZ3MudXJsID09ICQoJyNvdXRwdXQnKS5kYXRhKCd1cmwnKSkge1xyXG5cdFx0JCgnI2NvbnNvbGUnKS5lbXB0eSgpO1xyXG5cdFx0cmVmcmVzaENvbnNvbGUgPSB0cnVlO1xyXG5cdFx0dXBkYXRlQ29uc29sZSgpO1xyXG5cdH1cclxufSk7XHJcblxyXG4kKGRvY3VtZW50KS5hamF4Q29tcGxldGUoZnVuY3Rpb24oZSwganF4aHIsIHNldHRpbmdzKSB7XHJcblx0XHJcblx0aWYgKHNldHRpbmdzLnVybCA9PSAkKCcjY29uc29sZScpLmRhdGEoJ3VybCcpICYmIHJlZnJlc2hDb25zb2xlKSB7XHJcblx0XHRzZXRUaW1lb3V0KHVwZGF0ZUNvbnNvbGUoKSwgMTAwMCk7XHJcblx0fSBlbHNlIHtcclxuXHRcdHJlZnJlc2hDb25zb2xlID0gZmFsc2U7XHJcblx0fVxyXG5cdFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNvbnNvbGUoKSB7XHJcblx0JC5hamF4KHtcclxuXHRcdHVybCA6ICQoJyNjb25zb2xlJykuZGF0YSgndXJsJyksXHJcblx0XHR0eXBlOiAnR0VUJyxcclxuXHRcdFxyXG5cdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdCQoJyNjb25zb2xlJykuaHRtbCgkKCcjY29uc29sZScpLmh0bWwoKSArIHJlc3VsdCk7XHJcblx0XHR9LFxyXG5cdH0pO1xyXG59IiwidmFyIGdldEJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2V0LWJ1aWx0LWluJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0QnVpbHRJbignbmF2aWdhdG9yJywgJ3VzZXJBZ2VudCcpIHx8ICcnO1xuIiwidmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbCcpO1xudmFyIHVzZXJBZ2VudCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbmdpbmUtdXNlci1hZ2VudCcpO1xuXG52YXIgc2xpY2UgPSBbXS5zbGljZTtcbnZhciBNU0lFID0gL01TSUUgLlxcLi8udGVzdCh1c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG5cbnZhciB3cmFwID0gZnVuY3Rpb24gKHNjaGVkdWxlcikge1xuICByZXR1cm4gZnVuY3Rpb24gKGhhbmRsZXIsIHRpbWVvdXQgLyogLCAuLi5hcmd1bWVudHMgKi8pIHtcbiAgICB2YXIgYm91bmRBcmdzID0gYXJndW1lbnRzLmxlbmd0aCA+IDI7XG4gICAgdmFyIGFyZ3MgPSBib3VuZEFyZ3MgPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMikgOiB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHNjaGVkdWxlcihib3VuZEFyZ3MgPyBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgICh0eXBlb2YgaGFuZGxlciA9PSAnZnVuY3Rpb24nID8gaGFuZGxlciA6IEZ1bmN0aW9uKGhhbmRsZXIpKS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IDogaGFuZGxlciwgdGltZW91dCk7XG4gIH07XG59O1xuXG4vLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG4vLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI3RpbWVyc1xuJCh7IGdsb2JhbDogdHJ1ZSwgYmluZDogdHJ1ZSwgZm9yY2VkOiBNU0lFIH0sIHtcbiAgLy8gYHNldFRpbWVvdXRgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXR0aW1lb3V0XG4gIHNldFRpbWVvdXQ6IHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICAvLyBgc2V0SW50ZXJ2YWxgIG1ldGhvZFxuICAvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS90aW1lcnMtYW5kLXVzZXItcHJvbXB0cy5odG1sI2RvbS1zZXRpbnRlcnZhbFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=