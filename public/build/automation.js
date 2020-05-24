(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["automation"],{

/***/ "./assets/css/automation.scss":
/*!************************************!*\
  !*** ./assets/css/automation.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/automation.js":
/*!*********************************!*\
  !*** ./assets/js/automation.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var CodeMirror = __webpack_require__(/*! codemirror */ "./node_modules/codemirror/lib/codemirror.js");

__webpack_require__(/*! codemirror/mode/yaml/yaml */ "./node_modules/codemirror/mode/yaml/yaml.js");

__webpack_require__(/*! ../css/automation.scss */ "./assets/css/automation.scss");

$(document).ready(function () {
  var cm = CodeMirror.fromTextArea($('textarea').get(0), {
    theme: 'abcdef',
    lineNumbers: true,
    indentUnit: 4,
    styleActiveLine: true,
    styleActiveSelected: true,
    matchBrackets: true,
    indentWithTabs: true,
    mode: 'yaml',
    extraKeys: {
      "Tab": function Tab(cm) {
        var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");
        cm.replaceSelection(spaces);
      }
    }
  }).setSize('100%');
});

/***/ })

},[["./assets/js/automation.js","runtime","vendors~app~automation~console~document~form~login","vendors~automation~console~document~form","vendors~automation"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2F1dG9tYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXV0b21hdGlvbi5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsIkNvZGVNaXJyb3IiLCJkb2N1bWVudCIsInJlYWR5IiwiY20iLCJmcm9tVGV4dEFyZWEiLCJnZXQiLCJ0aGVtZSIsImxpbmVOdW1iZXJzIiwiaW5kZW50VW5pdCIsInN0eWxlQWN0aXZlTGluZSIsInN0eWxlQWN0aXZlU2VsZWN0ZWQiLCJtYXRjaEJyYWNrZXRzIiwiaW5kZW50V2l0aFRhYnMiLCJtb2RlIiwiZXh0cmFLZXlzIiwic3BhY2VzIiwiQXJyYXkiLCJnZXRPcHRpb24iLCJqb2luIiwicmVwbGFjZVNlbGVjdGlvbiIsInNldFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBLElBQU1DLFVBQVUsR0FBR0QsbUJBQU8sQ0FBQywrREFBRCxDQUExQjs7QUFDQUEsbUJBQU8sQ0FBQyw4RUFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDREQUFELENBQVA7O0FBRUFELENBQUMsQ0FBQ0csUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUM1QixNQUFJQyxFQUFFLEdBQUdILFVBQVUsQ0FBQ0ksWUFBWCxDQUF3Qk4sQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjTyxHQUFkLENBQWtCLENBQWxCLENBQXhCLEVBQThDO0FBQ3REQyxTQUFLLEVBQUUsUUFEK0M7QUFFdERDLGVBQVcsRUFBRSxJQUZ5QztBQUd0REMsY0FBVSxFQUFFLENBSDBDO0FBSW5EQyxtQkFBZSxFQUFFLElBSmtDO0FBS25EQyx1QkFBbUIsRUFBRSxJQUw4QjtBQU1uREMsaUJBQWEsRUFBRSxJQU5vQztBQU9uREMsa0JBQWMsRUFBRSxJQVBtQztBQVFuREMsUUFBSSxFQUFFLE1BUjZDO0FBU2hEQyxhQUFTLEVBQUU7QUFDVixhQUFPLGFBQVNYLEVBQVQsRUFBWTtBQUNmLFlBQUlZLE1BQU0sR0FBR0MsS0FBSyxDQUFDYixFQUFFLENBQUNjLFNBQUgsQ0FBYSxZQUFiLElBQTZCLENBQTlCLENBQUwsQ0FBc0NDLElBQXRDLENBQTJDLEdBQTNDLENBQWI7QUFDQWYsVUFBRSxDQUFDZ0IsZ0JBQUgsQ0FBb0JKLE1BQXBCO0FBQ0E7QUFKTTtBQVRxQyxHQUE5QyxFQWVOSyxPQWZNLENBZUUsTUFmRixDQUFUO0FBZ0JBLENBakJELEUiLCJmaWxlIjoiYXV0b21hdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuY29uc3QgQ29kZU1pcnJvciA9IHJlcXVpcmUoJ2NvZGVtaXJyb3InKTtcclxucmVxdWlyZSgnY29kZW1pcnJvci9tb2RlL3lhbWwveWFtbCcpO1xyXG5yZXF1aXJlKCcuLi9jc3MvYXV0b21hdGlvbi5zY3NzJyk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHR2YXIgY20gPSBDb2RlTWlycm9yLmZyb21UZXh0QXJlYSgkKCd0ZXh0YXJlYScpLmdldCgwKSwge1xyXG5cdFx0dGhlbWU6ICdhYmNkZWYnLFxyXG5cdFx0bGluZU51bWJlcnM6IHRydWUsXHJcblx0XHRpbmRlbnRVbml0OiA0LFxyXG5cdCAgICBzdHlsZUFjdGl2ZUxpbmU6IHRydWUsXHJcblx0ICAgIHN0eWxlQWN0aXZlU2VsZWN0ZWQ6IHRydWUsXHJcblx0ICAgIG1hdGNoQnJhY2tldHM6IHRydWUsXHJcblx0ICAgIGluZGVudFdpdGhUYWJzOiB0cnVlLFxyXG5cdCAgICBtb2RlOiAneWFtbCcsXHJcbiAgICAgICAgZXh0cmFLZXlzOiB7XHJcbiAgICAgICAgXHRcIlRhYlwiOiBmdW5jdGlvbihjbSl7XHJcbiAgICAgICAgXHQgICAgdmFyIHNwYWNlcyA9IEFycmF5KGNtLmdldE9wdGlvbihcImluZGVudFVuaXRcIikgKyAxKS5qb2luKFwiIFwiKTtcclxuICAgICAgICBcdCAgICBjbS5yZXBsYWNlU2VsZWN0aW9uKHNwYWNlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblx0fSkuc2V0U2l6ZSgnMTAwJScpO1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9