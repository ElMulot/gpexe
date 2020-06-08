(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["form"],{

/***/ "./assets/css/form.scss":
/*!******************************!*\
  !*** ./assets/css/form.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/form.js":
/*!***************************!*\
  !*** ./assets/js/form.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! ../css/form.scss */ "./assets/css/form.scss");

__webpack_require__(/*! bootstrap-datepicker */ "./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js");

__webpack_require__(/*! bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js */ "./node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js");

$(document).ready(function () {
  $('.js-datepicker').each(function () {
    $(this).datepicker({
      format: "dd-mm-yyyy",
      weekStart: 1,
      maxViewMode: 3,
      language: $(this).data('locale'),
      multidate: false,
      daysOfWeekDisabled: "0,6",
      autoclose: true,
      calendarWeeks: true,
      clearBtn: true,
      todayBtn: true,
      todayHighlight: true
    });
  });
  $("[name$='_multiple']").each(function () {
    var id;

    if (id = $(this).prop('name').match(new RegExp("(\\S+)_multiple$", "y"))) {
      $(this).on('click', function (event) {
        if ($(this).val() == 0) {
          $("[id^='" + id[1] + "']").not("[id*='multiple']").each(function () {
            if ($(this).hasClass('js-datepicker')) {
              $(this).datepicker('setDate', new Date());
            } else if ($(this).attr('type') == 'radio') {
              $(this).prop('checked', false);
            } else if ($(this).attr('type') == 'checkbox') {
              $(this).prop('checked', false);
              $(this).prop('indeterminate', false);
            } else if ($(this).attr('type') == 'text' || $(this).is('select')) {
              $(this).val(null);
            } else {
              return;
            }

            $(this).attr("disabled", false);
            $(this).attr("required", $(this).data('required'));
          });
        } else {
          $("[id^='" + id[1] + "']").not("[id*='multiple']").each(function () {
            if ($(this).hasClass('js-datepicker')) {
              $(this).datepicker('setDate', null);
            } else if ($(this).attr('type') == 'radio') {
              $(this).prop('checked', false);
            } else if ($(this).attr('type') == 'checkbox') {
              $(this).prop('checked', false);
              $(this).prop('indeterminate', true);
            } else if ($(this).attr('type') == 'text' || $(this).is('select')) {
              $(this).val(null);
            } else {
              return;
            }

            $(this).attr("disabled", true);
            $(this).attr("required", false);
          });
        }

        $('#' + id[1] + '_multiple').val($(this).val());
      });
    }
  });
  $('form').find('div, input, select').each(function () {
    if ($(this).data('multiple')) {
      $("[name='" + $(this).prop('id') + "_multiple']").filter('[value=1]').trigger('click');
    } else {
      $("[name='" + $(this).prop('id') + "_multiple']").filter('[value=0]').trigger('click');
    }
  });
  /*
  $('#form').find('input').each(function() {
  	
  	if ($(this).prop('type') == 'radio' && $(this).id == ) {
  		$(this).on('click', lineChecked);
  	}
  	
  });
  */
});

/***/ })

},[["./assets/js/form.js","runtime","vendors~app~automation~dashboard~document~form~login","vendors~app~automation~dashboard~document~form","vendors~app~document~form","vendors~document~form","vendors~form"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2Zvcm0uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZm9ybS5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImRvY3VtZW50IiwicmVhZHkiLCJlYWNoIiwiZGF0ZXBpY2tlciIsImZvcm1hdCIsIndlZWtTdGFydCIsIm1heFZpZXdNb2RlIiwibGFuZ3VhZ2UiLCJkYXRhIiwibXVsdGlkYXRlIiwiZGF5c09mV2Vla0Rpc2FibGVkIiwiYXV0b2Nsb3NlIiwiY2FsZW5kYXJXZWVrcyIsImNsZWFyQnRuIiwidG9kYXlCdG4iLCJ0b2RheUhpZ2hsaWdodCIsImlkIiwicHJvcCIsIm1hdGNoIiwib24iLCJldmVudCIsInZhbCIsIm5vdCIsImhhc0NsYXNzIiwiRGF0ZSIsImF0dHIiLCJpcyIsImZpbmQiLCJmaWx0ZXIiLCJ0cmlnZ2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFFQUEsbUJBQU8sQ0FBQyxnREFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLGlHQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMseUpBQUQsQ0FBUDs7QUFFQUQsQ0FBQyxDQUFDRSxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBRTVCSCxHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkksSUFBcEIsQ0FBeUIsWUFBVztBQUNuQ0osS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRSyxVQUFSLENBQW1CO0FBQ2xCQyxZQUFNLEVBQUUsWUFEVTtBQUVaQyxlQUFTLEVBQUUsQ0FGQztBQUdaQyxpQkFBVyxFQUFFLENBSEQ7QUFJWkMsY0FBUSxFQUFFVCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFVLElBQVIsQ0FBYSxRQUFiLENBSkU7QUFLWkMsZUFBUyxFQUFFLEtBTEM7QUFNWkMsd0JB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QUMsQ0FBQyxJQUFELENBQUQsQ0FBUW1CLElBQVIsQ0FBYSxJQUFiLENBQVosR0FBaUMsYUFBbEMsQ0FBRCxDQUFrRFcsTUFBbEQsQ0FBeUQsV0FBekQsRUFBc0VDLE9BQXRFLENBQThFLE9BQTlFO0FBQ0EsS0FGRCxNQUVPO0FBQ04vQixPQUFDLENBQUMsWUFBWUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUIsSUFBUixDQUFhLElBQWIsQ0FBWixHQUFpQyxhQUFsQyxDQUFELENBQWtEVyxNQUFsRCxDQUF5RCxXQUF6RCxFQUFzRUMsT0FBdEUsQ0FBOEUsT0FBOUU7QUFDQTtBQUVELEdBUkQ7QUFVQTs7Ozs7Ozs7O0FBU0EsQ0ExRkQsRSIsImZpbGUiOiJmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxucmVxdWlyZSgnLi4vY3NzL2Zvcm0uc2NzcycpO1xyXG5yZXF1aXJlKCdib290c3RyYXAtZGF0ZXBpY2tlcicpO1xyXG5yZXF1aXJlKCdib290c3RyYXAtZGF0ZXBpY2tlci9kaXN0L2xvY2FsZXMvYm9vdHN0cmFwLWRhdGVwaWNrZXIuZnIubWluLmpzJyk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcclxuXHQkKCcuanMtZGF0ZXBpY2tlcicpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLmRhdGVwaWNrZXIoe1xyXG5cdFx0XHRmb3JtYXQ6IFwiZGQtbW0teXl5eVwiLFxyXG5cdCAgICAgICAgd2Vla1N0YXJ0OiAxLFxyXG5cdCAgICAgICAgbWF4Vmlld01vZGU6IDMsXHJcblx0ICAgICAgICBsYW5ndWFnZTogJCh0aGlzKS5kYXRhKCdsb2NhbGUnKSxcclxuXHQgICAgICAgIG11bHRpZGF0ZTogZmFsc2UsXHJcblx0ICAgICAgICBkYXlzT2ZXZWVrRGlzYWJsZWQ6IFwiMCw2XCIsXHJcblx0ICAgICAgICBhdXRvY2xvc2U6IHRydWUsXHJcblx0ICAgICAgICBjYWxlbmRhcldlZWtzOiB0cnVlLFxyXG5cdCAgICAgICAgY2xlYXJCdG46IHRydWUsXHJcblx0ICAgICAgICB0b2RheUJ0bjogdHJ1ZSxcclxuXHQgICAgICAgIHRvZGF5SGlnaGxpZ2h0OiB0cnVlLFxyXG5cdCAgICB9KTtcclxuXHR9KVxyXG5cclxuXHRcclxuXHQkKFwiW25hbWUkPSdfbXVsdGlwbGUnXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHR2YXIgaWQ7XHJcblx0XHRpZiAoaWQgPSAkKHRoaXMpLnByb3AoJ25hbWUnKS5tYXRjaCgvKFxcUyspX211bHRpcGxlJC95KSkge1xyXG5cdFx0XHRcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLnZhbCgpID09IDApIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0JChcIltpZF49J1wiICsgaWRbMV0gKyBcIiddXCIpLm5vdChcIltpZCo9J211bHRpcGxlJ11cIikuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2pzLWRhdGVwaWNrZXInKSkge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykuZGF0ZXBpY2tlcignc2V0RGF0ZScsIG5ldyBEYXRlKCkpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICdyYWRpbycpIHtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ2NoZWNrYm94Jykge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ3RleHQnIHx8ICQodGhpcykuaXMoJ3NlbGVjdCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS52YWwobnVsbCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKFwicmVxdWlyZWRcIiwgJCh0aGlzKS5kYXRhKCdyZXF1aXJlZCcpKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0JChcIltpZF49J1wiICsgaWRbMV0gKyBcIiddXCIpLm5vdChcIltpZCo9J211bHRpcGxlJ11cIikuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2pzLWRhdGVwaWNrZXInKSkge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykuZGF0ZXBpY2tlcignc2V0RGF0ZScsIG51bGwpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICdyYWRpbycpIHtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ2NoZWNrYm94Jykge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAndGV4dCcgfHwgJCh0aGlzKS5pcygnc2VsZWN0JykpIHtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnZhbChudWxsKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKCcjJyArIGlkWzFdICsgJ19tdWx0aXBsZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0JCgnZm9ybScpLmZpbmQoJ2RpdiwgaW5wdXQsIHNlbGVjdCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHJcblx0XHRpZiAoJCh0aGlzKS5kYXRhKCdtdWx0aXBsZScpKSB7XHJcblx0XHRcdCQoXCJbbmFtZT0nXCIgKyAkKHRoaXMpLnByb3AoJ2lkJykgKyBcIl9tdWx0aXBsZSddXCIpLmZpbHRlcignW3ZhbHVlPTFdJykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoXCJbbmFtZT0nXCIgKyAkKHRoaXMpLnByb3AoJ2lkJykgKyBcIl9tdWx0aXBsZSddXCIpLmZpbHRlcignW3ZhbHVlPTBdJykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0pXHJcblx0XHJcblx0LypcclxuXHQkKCcjZm9ybScpLmZpbmQoJ2lucHV0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0aWYgKCQodGhpcykucHJvcCgndHlwZScpID09ICdyYWRpbycgJiYgJCh0aGlzKS5pZCA9PSApIHtcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBsaW5lQ2hlY2tlZCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9KTtcclxuXHQqL1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9