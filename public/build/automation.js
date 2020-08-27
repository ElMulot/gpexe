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
    mode: 'yaml'
  });
  cm.setSize('100%', '100%');
  $('button[type="button"]').on('click', function () {
    var text = '[' + $(this).text() + ']';
    var doc = cm.getDoc();
    var fromCursor = cm.getCursor('from');
    var toCursor = cm.getCursor('to');
    doc.replaceRange(text, fromCursor, toCursor);
    cm.focus();
    fromCursor.ch += text.length;
    cm.setCursor(fromCursor);
  });
});

/***/ })

},[["./assets/js/automation.js","runtime","vendors~app~automation~dashboard~document~login","vendors~automation"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2F1dG9tYXRpb24uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXV0b21hdGlvbi5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsIkNvZGVNaXJyb3IiLCJkb2N1bWVudCIsInJlYWR5IiwiY20iLCJmcm9tVGV4dEFyZWEiLCJnZXQiLCJ0aGVtZSIsImxpbmVOdW1iZXJzIiwiaW5kZW50VW5pdCIsInN0eWxlQWN0aXZlTGluZSIsInN0eWxlQWN0aXZlU2VsZWN0ZWQiLCJtYXRjaEJyYWNrZXRzIiwiaW5kZW50V2l0aFRhYnMiLCJtb2RlIiwic2V0U2l6ZSIsIm9uIiwidGV4dCIsImRvYyIsImdldERvYyIsImZyb21DdXJzb3IiLCJnZXRDdXJzb3IiLCJ0b0N1cnNvciIsInJlcGxhY2VSYW5nZSIsImZvY3VzIiwiY2giLCJsZW5ndGgiLCJzZXRDdXJzb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7OztBQ0FBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQSxJQUFNQyxVQUFVLEdBQUdELG1CQUFPLENBQUMsK0RBQUQsQ0FBMUI7O0FBQ0FBLG1CQUFPLENBQUMsOEVBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyw0REFBRCxDQUFQOztBQUVBRCxDQUFDLENBQUNHLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDNUIsTUFBSUMsRUFBRSxHQUFHSCxVQUFVLENBQUNJLFlBQVgsQ0FBd0JOLENBQUMsQ0FBQyxVQUFELENBQUQsQ0FBY08sR0FBZCxDQUFrQixDQUFsQixDQUF4QixFQUE4QztBQUN0REMsU0FBSyxFQUFFLFFBRCtDO0FBRXREQyxlQUFXLEVBQUUsSUFGeUM7QUFHdERDLGNBQVUsRUFBRSxDQUgwQztBQUluREMsbUJBQWUsRUFBRSxJQUprQztBQUtuREMsdUJBQW1CLEVBQUUsSUFMOEI7QUFNbkRDLGlCQUFhLEVBQUUsSUFOb0M7QUFPbkRDLGtCQUFjLEVBQUUsSUFQbUM7QUFRbkRDLFFBQUksRUFBRTtBQVI2QyxHQUE5QyxDQUFUO0FBVUFWLElBQUUsQ0FBQ1csT0FBSCxDQUFXLE1BQVgsRUFBa0IsTUFBbEI7QUFFQWhCLEdBQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCaUIsRUFBM0IsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBVztBQUNqRCxRQUFJQyxJQUFJLEdBQUcsTUFBTWxCLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtCLElBQVIsRUFBTixHQUF1QixHQUFsQztBQUNBLFFBQU1DLEdBQUcsR0FBR2QsRUFBRSxDQUFDZSxNQUFILEVBQVo7QUFDRyxRQUFNQyxVQUFVLEdBQUdoQixFQUFFLENBQUNpQixTQUFILENBQWEsTUFBYixDQUFuQjtBQUNBLFFBQU1DLFFBQVEsR0FBR2xCLEVBQUUsQ0FBQ2lCLFNBQUgsQ0FBYSxJQUFiLENBQWpCO0FBQ0FILE9BQUcsQ0FBQ0ssWUFBSixDQUFpQk4sSUFBakIsRUFBdUJHLFVBQXZCLEVBQW1DRSxRQUFuQztBQUNBbEIsTUFBRSxDQUFDb0IsS0FBSDtBQUNBSixjQUFVLENBQUNLLEVBQVgsSUFBaUJSLElBQUksQ0FBQ1MsTUFBdEI7QUFDQXRCLE1BQUUsQ0FBQ3VCLFNBQUgsQ0FBYVAsVUFBYjtBQUNILEdBVEQ7QUFVQSxDQXZCRCxFIiwiZmlsZSI6ImF1dG9tYXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbmNvbnN0IENvZGVNaXJyb3IgPSByZXF1aXJlKCdjb2RlbWlycm9yJyk7XHJcbnJlcXVpcmUoJ2NvZGVtaXJyb3IvbW9kZS95YW1sL3lhbWwnKTtcclxucmVxdWlyZSgnLi4vY3NzL2F1dG9tYXRpb24uc2NzcycpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0dmFyIGNtID0gQ29kZU1pcnJvci5mcm9tVGV4dEFyZWEoJCgndGV4dGFyZWEnKS5nZXQoMCksIHtcclxuXHRcdHRoZW1lOiAnYWJjZGVmJyxcclxuXHRcdGxpbmVOdW1iZXJzOiB0cnVlLFxyXG5cdFx0aW5kZW50VW5pdDogNCxcclxuXHQgICAgc3R5bGVBY3RpdmVMaW5lOiB0cnVlLFxyXG5cdCAgICBzdHlsZUFjdGl2ZVNlbGVjdGVkOiB0cnVlLFxyXG5cdCAgICBtYXRjaEJyYWNrZXRzOiB0cnVlLFxyXG5cdCAgICBpbmRlbnRXaXRoVGFiczogdHJ1ZSxcclxuXHQgICAgbW9kZTogJ3lhbWwnLFxyXG5cdH0pO1xyXG5cdGNtLnNldFNpemUoJzEwMCUnLCcxMDAlJyk7XHJcblx0XHJcblx0JCgnYnV0dG9uW3R5cGU9XCJidXR0b25cIl0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGxldCB0ZXh0ID0gJ1snICsgJCh0aGlzKS50ZXh0KCkgKyAnXSc7XHJcblx0XHRjb25zdCBkb2MgPSBjbS5nZXREb2MoKTtcclxuXHQgICAgY29uc3QgZnJvbUN1cnNvciA9IGNtLmdldEN1cnNvcignZnJvbScpO1xyXG5cdCAgICBjb25zdCB0b0N1cnNvciA9IGNtLmdldEN1cnNvcigndG8nKTtcclxuXHQgICAgZG9jLnJlcGxhY2VSYW5nZSh0ZXh0LCBmcm9tQ3Vyc29yLCB0b0N1cnNvcik7XHJcblx0ICAgIGNtLmZvY3VzKCk7XHJcblx0ICAgIGZyb21DdXJzb3IuY2ggKz0gdGV4dC5sZW5ndGg7XHJcblx0ICAgIGNtLnNldEN1cnNvcihmcm9tQ3Vyc29yKTtcclxuXHR9KTtcclxufSk7XHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9