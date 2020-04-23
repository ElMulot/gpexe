(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["serie"],{

/***/ "./assets/css/serie.scss":
/*!*******************************!*\
  !*** ./assets/css/serie.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/serie.js":
/*!****************************!*\
  !*** ./assets/js/serie.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function($) {__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! ../css/serie.scss */ "./assets/css/serie.scss");

__webpack_require__(/*! bootstrap-select */ "./node_modules/bootstrap-select/dist/js/bootstrap-select.js");

__webpack_require__(/*! bootstrap-select/dist/js/i18n/defaults-fr_FR.js */ "./node_modules/bootstrap-select/dist/js/i18n/defaults-fr_FR.js");

$(document).ready(function () {
  $.fn.selectpicker.Constructor.BootstrapVersion = '4'; //$('#version_menu').hide();

  $('#form').find('input, select').each(function () {
    if ($(this).prop('type') == 'checkbox') {
      $(this).on('click', lineChecked);
    }
  });

  function lineChecked() {
    if ($(this).prop('id') == 'check_all') {
      $('table').find('input').each(function () {
        $(this).prop('checked', $('#check_all').is(':checked'));
      });
    } else {
      var checked = false;
      var unchecked = false;
      $('table').find('input').each(function () {
        if ($(this).prop('id') != 'check_all') {
          if ($(this).is(':checked')) {
            checked = true;
          } else {
            unchecked = true;
          }

          if (checked && unchecked) {
            $('#check_all').prop('indeterminate', true);
          } else {
            $('#check_all').prop('indeterminate', false);
            $('#check_all').prop('checked', checked);
          }
        }
      });
    }

    if (checked) {
      $('#version_menu').show();
    } else if (unchecked) {
      $('#version_menu').hide();
    }
  }

  $('#version_new').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('link'));
    $('#form').submit();
  });
  $('#version_edit').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('link'));
    $('#form').submit();
  });
  $('#version_move').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('link'));
    $('#form').submit();
  });
  $('#version_delete').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('link'));
    $('#form').submit();
  }); //ne fonctionne pas, mais ne génère pas d'erreurs.
  //$('#test').selectpicker({ language:'fr_FR' });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")))

/***/ })

},[["./assets/js/serie.js","runtime","vendors~app~form~serie","vendors~form~login~serie","vendors~form~serie","vendors~serie"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL3NlcmllLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3NlcmllLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwiZG9jdW1lbnQiLCJyZWFkeSIsImZuIiwic2VsZWN0cGlja2VyIiwiQ29uc3RydWN0b3IiLCJCb290c3RyYXBWZXJzaW9uIiwiZmluZCIsImVhY2giLCJwcm9wIiwib24iLCJsaW5lQ2hlY2tlZCIsImlzIiwiY2hlY2tlZCIsInVuY2hlY2tlZCIsInNob3ciLCJoaWRlIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJzdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7O0FDQUFBLG1CQUFPLENBQUMsa0RBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxxRkFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLHVIQUFELENBQVA7O0FBR0FDLENBQUMsQ0FBQ0MsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUU1QkYsR0FBQyxDQUFDRyxFQUFGLENBQUtDLFlBQUwsQ0FBa0JDLFdBQWxCLENBQThCQyxnQkFBOUIsR0FBaUQsR0FBakQsQ0FGNEIsQ0FJNUI7O0FBRUFOLEdBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV08sSUFBWCxDQUFnQixlQUFoQixFQUFpQ0MsSUFBakMsQ0FBc0MsWUFBVztBQUVoRCxRQUFJUixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFTLElBQVIsQ0FBYSxNQUFiLEtBQXdCLFVBQTVCLEVBQXdDO0FBQ3ZDVCxPQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLEVBQVIsQ0FBVyxPQUFYLEVBQW9CQyxXQUFwQjtBQUNBO0FBRUQsR0FORDs7QUFRQSxXQUFTQSxXQUFULEdBQXVCO0FBRXRCLFFBQUlYLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVMsSUFBUixDQUFhLElBQWIsS0FBc0IsV0FBMUIsRUFBdUM7QUFFdENULE9B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Q0FBQyxPQUFELENBQUQsQ0FBV1MsSUFBWCxDQUFnQixRQUFoQixFQUEwQlQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUIsSUFBUixDQUFhLE1BQWIsQ0FBMUI7QUFDQW5CLEtBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV29CLE1BQVg7QUFDQSxHQUpELEVBdkU0QixDQTZFNUI7QUFDQTtBQUNBLENBL0VELEUiLCJmaWxlIjoic2VyaWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJyZXF1aXJlKCcuLi9jc3Mvc2VyaWUuc2NzcycpO1xyXG5yZXF1aXJlKCdib290c3RyYXAtc2VsZWN0Jyk7XHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcC1zZWxlY3QvZGlzdC9qcy9pMThuL2RlZmF1bHRzLWZyX0ZSLmpzJyk7XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0JC5mbi5zZWxlY3RwaWNrZXIuQ29uc3RydWN0b3IuQm9vdHN0cmFwVmVyc2lvbiA9ICc0JztcclxuXHRcclxuXHQvLyQoJyN2ZXJzaW9uX21lbnUnKS5oaWRlKCk7XHJcblx0XHJcblx0JCgnI2Zvcm0nKS5maW5kKCdpbnB1dCwgc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0aWYgKCQodGhpcykucHJvcCgndHlwZScpID09ICdjaGVja2JveCcpIHtcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBsaW5lQ2hlY2tlZCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9KTtcclxuXHRcclxuXHRmdW5jdGlvbiBsaW5lQ2hlY2tlZCgpIHtcclxuXHRcdFxyXG5cdFx0aWYgKCQodGhpcykucHJvcCgnaWQnKSA9PSAnY2hlY2tfYWxsJykge1xyXG5cdFx0XHRcclxuXHRcdFx0JCgndGFibGUnKS5maW5kKCdpbnB1dCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgJCgnI2NoZWNrX2FsbCcpLmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBjaGVja2VkID0gZmFsc2U7XHJcblx0XHRcdHZhciB1bmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHJcblx0XHRcdCQoJ3RhYmxlJykuZmluZCgnaW5wdXQnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLnByb3AoJ2lkJykgIT0gJ2NoZWNrX2FsbCcpIHtcclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdGNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dW5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKGNoZWNrZWQgJiYgdW5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdpbmRldGVybWluYXRlJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAoY2hlY2tlZCkge1xyXG5cdFx0XHQkKCcjdmVyc2lvbl9tZW51Jykuc2hvdygpO1xyXG5cdFx0fSBlbHNlIGlmKHVuY2hlY2tlZCkge1xyXG5cdFx0XHQkKCcjdmVyc2lvbl9tZW51JykuaGlkZSgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQkKCcjdmVyc2lvbl9uZXcnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJyNmb3JtJykucHJvcCgnYWN0aW9uJywgJCh0aGlzKS5kYXRhKCdsaW5rJykpO1xyXG5cdFx0JCgnI2Zvcm0nKS5zdWJtaXQoKVxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2ZXJzaW9uX2VkaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJyNmb3JtJykucHJvcCgnYWN0aW9uJywgJCh0aGlzKS5kYXRhKCdsaW5rJykpO1xyXG5cdFx0JCgnI2Zvcm0nKS5zdWJtaXQoKVxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2ZXJzaW9uX21vdmUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJyNmb3JtJykucHJvcCgnYWN0aW9uJywgJCh0aGlzKS5kYXRhKCdsaW5rJykpO1xyXG5cdFx0JCgnI2Zvcm0nKS5zdWJtaXQoKVxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2ZXJzaW9uX2RlbGV0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnI2Zvcm0nKS5wcm9wKCdhY3Rpb24nLCAkKHRoaXMpLmRhdGEoJ2xpbmsnKSk7XHJcblx0XHQkKCcjZm9ybScpLnN1Ym1pdCgpXHJcblx0fSk7XHJcblx0XHJcblx0Ly9uZSBmb25jdGlvbm5lIHBhcywgbWFpcyBuZSBnw6luw6hyZSBwYXMgZCdlcnJldXJzLlxyXG5cdC8vJCgnI3Rlc3QnKS5zZWxlY3RwaWNrZXIoeyBsYW5ndWFnZTonZnJfRlInIH0pO1xyXG59KTtcclxuXHJcblxyXG5cclxuICAgIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9