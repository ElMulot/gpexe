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
  }).setSize('100%', '100%');
});

/***/ })

},[["./assets/js/automation.js","runtime","vendors~app~automation~dashboard~document~form~login","vendors~app~automation~dashboard~document~form","vendors~automation"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2F1dG9tYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXV0b21hdGlvbi5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsIkNvZGVNaXJyb3IiLCJkb2N1bWVudCIsInJlYWR5IiwiY20iLCJmcm9tVGV4dEFyZWEiLCJnZXQiLCJ0aGVtZSIsImxpbmVOdW1iZXJzIiwiaW5kZW50VW5pdCIsInN0eWxlQWN0aXZlTGluZSIsInN0eWxlQWN0aXZlU2VsZWN0ZWQiLCJtYXRjaEJyYWNrZXRzIiwiaW5kZW50V2l0aFRhYnMiLCJtb2RlIiwiZXh0cmFLZXlzIiwic3BhY2VzIiwiQXJyYXkiLCJnZXRPcHRpb24iLCJqb2luIiwicmVwbGFjZVNlbGVjdGlvbiIsInNldFNpemUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBLElBQU1DLFVBQVUsR0FBR0QsbUJBQU8sQ0FBQywrREFBRCxDQUExQjs7QUFDQUEsbUJBQU8sQ0FBQyw4RUFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLDREQUFELENBQVA7O0FBRUFELENBQUMsQ0FBQ0csUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUM1QixNQUFJQyxFQUFFLEdBQUdILFVBQVUsQ0FBQ0ksWUFBWCxDQUF3Qk4sQ0FBQyxDQUFDLFVBQUQsQ0FBRCxDQUFjTyxHQUFkLENBQWtCLENBQWxCLENBQXhCLEVBQThDO0FBQ3REQyxTQUFLLEVBQUUsUUFEK0M7QUFFdERDLGVBQVcsRUFBRSxJQUZ5QztBQUd0REMsY0FBVSxFQUFFLENBSDBDO0FBSW5EQyxtQkFBZSxFQUFFLElBSmtDO0FBS25EQyx1QkFBbUIsRUFBRSxJQUw4QjtBQU1uREMsaUJBQWEsRUFBRSxJQU5vQztBQU9uREMsa0JBQWMsRUFBRSxJQVBtQztBQVFuREMsUUFBSSxFQUFFLE1BUjZDO0FBU2hEQyxhQUFTLEVBQUU7QUFDVixhQUFPLGFBQVNYLEVBQVQsRUFBWTtBQUNmLFlBQUlZLE1BQU0sR0FBR0MsS0FBSyxDQUFDYixFQUFFLENBQUNjLFNBQUgsQ0FBYSxZQUFiLElBQTZCLENBQTlCLENBQUwsQ0FBc0NDLElBQXRDLENBQTJDLEdBQTNDLENBQWI7QUFDQWYsVUFBRSxDQUFDZ0IsZ0JBQUgsQ0FBb0JKLE1BQXBCO0FBQ0E7QUFKTTtBQVRxQyxHQUE5QyxFQWVOSyxPQWZNLENBZUUsTUFmRixFQWVTLE1BZlQsQ0FBVDtBQWdCQSxDQWpCRCxFIiwiZmlsZSI6ImF1dG9tYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbmNvbnN0IENvZGVNaXJyb3IgPSByZXF1aXJlKCdjb2RlbWlycm9yJyk7XHJcbnJlcXVpcmUoJ2NvZGVtaXJyb3IvbW9kZS95YW1sL3lhbWwnKTtcclxucmVxdWlyZSgnLi4vY3NzL2F1dG9tYXRpb24uc2NzcycpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0dmFyIGNtID0gQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEoJCgndGV4dGFyZWEnKS5nZXQoMCksIHtcclxuXHRcdHRoZW1lOiAnYWJjZGVmJyxcclxuXHRcdGxpbmVOdW1iZXJzOiB0cnVlLFxyXG5cdFx0aW5kZW50VW5pdDogNCxcclxuXHQgICAgc3R5bGVBY3RpdmVMaW5lOiB0cnVlLFxyXG5cdCAgICBzdHlsZUFjdGl2ZVNlbGVjdGVkOiB0cnVlLFxyXG5cdCAgICBtYXRjaEJyYWNrZXRzOiB0cnVlLFxyXG5cdCAgICBpbmRlbnRXaXRoVGFiczogdHJ1ZSxcclxuXHQgICAgbW9kZTogJ3lhbWwnLFxyXG4gICAgICAgIGV4dHJhS2V5czoge1xyXG4gICAgICAgIFx0XCJUYWJcIjogZnVuY3Rpb24oY20pe1xyXG4gICAgICAgIFx0ICAgIHZhciBzcGFjZXMgPSBBcnJheShjbS5nZXRPcHRpb24oXCJpbmRlbnRVbml0XCIpICsgMSkuam9pbihcIiBcIik7XHJcbiAgICAgICAgXHQgICAgY20ucmVwbGFjZVNlbGVjdGlvbihzcGFjZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cdH0pLnNldFNpemUoJzEwMCUnLCcxMDAlJyk7XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=