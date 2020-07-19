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

var bsCustomFileInput = __webpack_require__(/*! bs-custom-file-input */ "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js");

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
  bsCustomFileInput.init();
  /*
  $('#form').find('input').each(function() {
  	
  	if ($(this).prop('type') == 'radio' && $(this).id == ) {
  		$(this).on('click', lineChecked);
  	}
  	
  });
  */
});

/***/ })

},[["./assets/js/form.js","runtime","vendors~app~automation~dashboard~document~form~login~project","vendors~app~document~form","vendors~document~form","vendors~form"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2Zvcm0uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZm9ybS5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImJzQ3VzdG9tRmlsZUlucHV0IiwiZG9jdW1lbnQiLCJyZWFkeSIsImVhY2giLCJkYXRlcGlja2VyIiwiZm9ybWF0Iiwid2Vla1N0YXJ0IiwibWF4Vmlld01vZGUiLCJsYW5ndWFnZSIsImRhdGEiLCJtdWx0aWRhdGUiLCJkYXlzT2ZXZWVrRGlzYWJsZWQiLCJhdXRvY2xvc2UiLCJjYWxlbmRhcldlZWtzIiwiY2xlYXJCdG4iLCJ0b2RheUJ0biIsInRvZGF5SGlnaGxpZ2h0IiwiaWQiLCJwcm9wIiwibWF0Y2giLCJvbiIsImV2ZW50IiwidmFsIiwibm90IiwiaGFzQ2xhc3MiLCJEYXRlIiwiYXR0ciIsImlzIiwiZmluZCIsImZpbHRlciIsInRyaWdnZXIiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFFQUEsbUJBQU8sQ0FBQyxnREFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLGlHQUFELENBQVA7O0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUdELG1CQUFPLENBQUMsOEZBQUQsQ0FBakM7O0FBQ0FBLG1CQUFPLENBQUMseUpBQUQsQ0FBUDs7QUFFQUQsQ0FBQyxDQUFDRyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBRTVCSixHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQkssSUFBcEIsQ0FBeUIsWUFBVztBQUNuQ0wsS0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRTSxVQUFSLENBQW1CO0FBQ2xCQyxZQUFNLEVBQUUsWUFEVTtBQUVaQyxlQUFTLEVBQUUsQ0FGQztBQUdaQyxpQkFBVyxFQUFFLENBSEQ7QUFJWkMsY0FBUSxFQUFFVixD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QUMsQ0FBQyxJQUFELENBQUQsQ0FBUVcsSUFBUixDQUFhLFVBQWIsQ0FBSixFQUE4QjtBQUM3QlgsT0FBQyxDQUFDLFlBQVlBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9CLElBQVIsQ0FBYSxJQUFiLENBQVosR0FBaUMsYUFBbEMsQ0FBRCxDQUFrRFcsTUFBbEQsQ0FBeUQsV0FBekQsRUFBc0VDLE9BQXRFLENBQThFLE9BQTlFO0FBQ0EsS0FGRCxNQUVPO0FBQ05oQyxPQUFDLENBQUMsWUFBWUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0IsSUFBUixDQUFhLElBQWIsQ0FBWixHQUFpQyxhQUFsQyxDQUFELENBQWtEVyxNQUFsRCxDQUF5RCxXQUF6RCxFQUFzRUMsT0FBdEUsQ0FBOEUsT0FBOUU7QUFDQTtBQUVELEdBUkQ7QUFVQTlCLG1CQUFpQixDQUFDK0IsSUFBbEI7QUFFQTs7Ozs7Ozs7O0FBU0EsQ0E1RkQsRSIsImZpbGUiOiJmb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxucmVxdWlyZSgnLi4vY3NzL2Zvcm0uc2NzcycpO1xyXG5yZXF1aXJlKCdib290c3RyYXAtZGF0ZXBpY2tlcicpO1xyXG5jb25zdCBic0N1c3RvbUZpbGVJbnB1dCA9IHJlcXVpcmUoJ2JzLWN1c3RvbS1maWxlLWlucHV0Jyk7XHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcC1kYXRlcGlja2VyL2Rpc3QvbG9jYWxlcy9ib290c3RyYXAtZGF0ZXBpY2tlci5mci5taW4uanMnKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdCQoJy5qcy1kYXRlcGlja2VyJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdCQodGhpcykuZGF0ZXBpY2tlcih7XHJcblx0XHRcdGZvcm1hdDogXCJkZC1tbS15eXl5XCIsXHJcblx0ICAgICAgICB3ZWVrU3RhcnQ6IDEsXHJcblx0ICAgICAgICBtYXhWaWV3TW9kZTogMyxcclxuXHQgICAgICAgIGxhbmd1YWdlOiAkKHRoaXMpLmRhdGEoJ2xvY2FsZScpLFxyXG5cdCAgICAgICAgbXVsdGlkYXRlOiBmYWxzZSxcclxuXHQgICAgICAgIGRheXNPZldlZWtEaXNhYmxlZDogXCIwLDZcIixcclxuXHQgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcclxuXHQgICAgICAgIGNhbGVuZGFyV2Vla3M6IHRydWUsXHJcblx0ICAgICAgICBjbGVhckJ0bjogdHJ1ZSxcclxuXHQgICAgICAgIHRvZGF5QnRuOiB0cnVlLFxyXG5cdCAgICAgICAgdG9kYXlIaWdobGlnaHQ6IHRydWUsXHJcblx0ICAgIH0pO1xyXG5cdH0pXHJcblxyXG5cdFxyXG5cdCQoXCJbbmFtZSQ9J19tdWx0aXBsZSddXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdHZhciBpZDtcclxuXHRcdGlmIChpZCA9ICQodGhpcykucHJvcCgnbmFtZScpLm1hdGNoKC8oXFxTKylfbXVsdGlwbGUkL3kpKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCQodGhpcykudmFsKCkgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQkKFwiW2lkXj0nXCIgKyBpZFsxXSArIFwiJ11cIikubm90KFwiW2lkKj0nbXVsdGlwbGUnXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnanMtZGF0ZXBpY2tlcicpKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kYXRlcGlja2VyKCdzZXREYXRlJywgbmV3IERhdGUoKSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ3JhZGlvJykge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAnY2hlY2tib3gnKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAndGV4dCcgfHwgJCh0aGlzKS5pcygnc2VsZWN0JykpIHtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnZhbChudWxsKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJyZXF1aXJlZFwiLCAkKHRoaXMpLmRhdGEoJ3JlcXVpcmVkJykpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQkKFwiW2lkXj0nXCIgKyBpZFsxXSArIFwiJ11cIikubm90KFwiW2lkKj0nbXVsdGlwbGUnXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnanMtZGF0ZXBpY2tlcicpKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kYXRlcGlja2VyKCdzZXREYXRlJywgbnVsbCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ3JhZGlvJykge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAnY2hlY2tib3gnKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICd0ZXh0JyB8fCAkKHRoaXMpLmlzKCdzZWxlY3QnKSkge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykudmFsKG51bGwpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCQoJyMnICsgaWRbMV0gKyAnX211bHRpcGxlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHQkKCdmb3JtJykuZmluZCgnZGl2LCBpbnB1dCwgc2VsZWN0JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcclxuXHRcdGlmICgkKHRoaXMpLmRhdGEoJ211bHRpcGxlJykpIHtcclxuXHRcdFx0JChcIltuYW1lPSdcIiArICQodGhpcykucHJvcCgnaWQnKSArIFwiX211bHRpcGxlJ11cIikuZmlsdGVyKCdbdmFsdWU9MV0nKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JChcIltuYW1lPSdcIiArICQodGhpcykucHJvcCgnaWQnKSArIFwiX211bHRpcGxlJ11cIikuZmlsdGVyKCdbdmFsdWU9MF0nKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSlcclxuXHRcclxuXHRic0N1c3RvbUZpbGVJbnB1dC5pbml0KCk7XHJcblx0XHJcblx0LypcclxuXHQkKCcjZm9ybScpLmZpbmQoJ2lucHV0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0aWYgKCQodGhpcykucHJvcCgndHlwZScpID09ICdyYWRpbycgJiYgJCh0aGlzKS5pZCA9PSApIHtcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBsaW5lQ2hlY2tlZCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9KTtcclxuXHQqL1xyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9