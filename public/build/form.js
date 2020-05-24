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
              console.log(this);
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

},[["./assets/js/form.js","runtime","vendors~app~automation~console~document~form~login","vendors~automation~console~document~form","vendors~console~document~form","vendors~document~form","vendors~form"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2Zvcm0uc2NzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvZm9ybS5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImRvY3VtZW50IiwicmVhZHkiLCJlYWNoIiwiZGF0ZXBpY2tlciIsImZvcm1hdCIsIndlZWtTdGFydCIsIm1heFZpZXdNb2RlIiwibGFuZ3VhZ2UiLCJkYXRhIiwibXVsdGlkYXRlIiwiZGF5c09mV2Vla0Rpc2FibGVkIiwiYXV0b2Nsb3NlIiwiY2FsZW5kYXJXZWVrcyIsImNsZWFyQnRuIiwidG9kYXlCdG4iLCJ0b2RheUhpZ2hsaWdodCIsImlkIiwicHJvcCIsIm1hdGNoIiwib24iLCJldmVudCIsInZhbCIsIm5vdCIsImhhc0NsYXNzIiwiRGF0ZSIsImF0dHIiLCJpcyIsImNvbnNvbGUiLCJsb2ciLCJmaW5kIiwiZmlsdGVyIiwidHJpZ2dlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakI7O0FBRUFBLG1CQUFPLENBQUMsZ0RBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxpR0FBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLHlKQUFELENBQVA7O0FBRUFELENBQUMsQ0FBQ0UsUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUU1QkgsR0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JJLElBQXBCLENBQXlCLFlBQVc7QUFDbkNKLEtBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUUssVUFBUixDQUFtQjtBQUNsQkMsWUFBTSxFQUFFLFlBRFU7QUFFWkMsZUFBUyxFQUFFLENBRkM7QUFHWkMsaUJBQVcsRUFBRSxDQUhEO0FBSVpDLGNBQVEsRUFBRVQsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVSxJQUFSLENBQWEsUUFBYixDQUpFO0FBS1pDLGVBQVMsRUFB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QUFSLENBQWEsVUFBYixDQUFKLEVBQThCO0FBQzdCVixPQUFDLENBQUMsWUFBWUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUIsSUFBUixDQUFhLElBQWIsQ0FBWixHQUFpQyxhQUFsQyxDQUFELENBQWtEYSxNQUFsRCxDQUF5RCxXQUF6RCxFQUFzRUMsT0FBdEUsQ0FBOEUsT0FBOUU7QUFDQSxLQUZELE1BRU87QUFDTmpDLE9BQUMsQ0FBQyxZQUFZQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFtQixJQUFSLENBQWEsSUFBYixDQUFaLEdBQWlDLGFBQWxDLENBQUQsQ0FBa0RhLE1BQWxELENBQXlELFdBQXpELEVBQXNFQyxPQUF0RSxDQUE4RSxPQUE5RTtBQUNBO0FBRUQsR0FSRDtBQVVBOzs7Ozs7Ozs7QUFTQSxDQTNGRCxFIiwiZmlsZSI6ImZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG5yZXF1aXJlKCcuLi9jc3MvZm9ybS5zY3NzJyk7XHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcC1kYXRlcGlja2VyJyk7XHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcC1kYXRlcGlja2VyL2Rpc3QvbG9jYWxlcy9ib290c3RyYXAtZGF0ZXBpY2tlci5mci5taW4uanMnKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdCQoJy5qcy1kYXRlcGlja2VyJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdCQodGhpcykuZGF0ZXBpY2tlcih7XHJcblx0XHRcdGZvcm1hdDogXCJkZC1tbS15eXl5XCIsXHJcblx0ICAgICAgICB3ZWVrU3RhcnQ6IDEsXHJcblx0ICAgICAgICBtYXhWaWV3TW9kZTogMyxcclxuXHQgICAgICAgIGxhbmd1YWdlOiAkKHRoaXMpLmRhdGEoJ2xvY2FsZScpLFxyXG5cdCAgICAgICAgbXVsdGlkYXRlOiBmYWxzZSxcclxuXHQgICAgICAgIGRheXNPZldlZWtEaXNhYmxlZDogXCIwLDZcIixcclxuXHQgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcclxuXHQgICAgICAgIGNhbGVuZGFyV2Vla3M6IHRydWUsXHJcblx0ICAgICAgICBjbGVhckJ0bjogdHJ1ZSxcclxuXHQgICAgICAgIHRvZGF5QnRuOiB0cnVlLFxyXG5cdCAgICAgICAgdG9kYXlIaWdobGlnaHQ6IHRydWUsXHJcblx0ICAgIH0pO1xyXG5cdH0pXHJcblxyXG5cdFxyXG5cdCQoXCJbbmFtZSQ9J19tdWx0aXBsZSddXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdHZhciBpZDtcclxuXHRcdGlmIChpZCA9ICQodGhpcykucHJvcCgnbmFtZScpLm1hdGNoKC8oXFxTKylfbXVsdGlwbGUkL3kpKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCQodGhpcykudmFsKCkgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQkKFwiW2lkXj0nXCIgKyBpZFsxXSArIFwiJ11cIikubm90KFwiW2lkKj0nbXVsdGlwbGUnXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnanMtZGF0ZXBpY2tlcicpKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kYXRlcGlja2VyKCdzZXREYXRlJywgbmV3IERhdGUoKSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ3JhZGlvJykge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAnY2hlY2tib3gnKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAndGV4dCcgfHwgJCh0aGlzKS5pcygnc2VsZWN0JykpIHtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnZhbChudWxsKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJyZXF1aXJlZFwiLCAkKHRoaXMpLmRhdGEoJ3JlcXVpcmVkJykpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQkKFwiW2lkXj0nXCIgKyBpZFsxXSArIFwiJ11cIikubm90KFwiW2lkKj0nbXVsdGlwbGUnXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnanMtZGF0ZXBpY2tlcicpKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kYXRlcGlja2VyKCdzZXREYXRlJywgbnVsbCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ3JhZGlvJykge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMpO1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAnY2hlY2tib3gnKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICd0ZXh0JyB8fCAkKHRoaXMpLmlzKCdzZWxlY3QnKSkge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykudmFsKG51bGwpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCQoJyMnICsgaWRbMV0gKyAnX211bHRpcGxlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHQkKCdmb3JtJykuZmluZCgnZGl2LCBpbnB1dCwgc2VsZWN0JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcclxuXHRcdGlmICgkKHRoaXMpLmRhdGEoJ211bHRpcGxlJykpIHtcclxuXHRcdFx0JChcIltuYW1lPSdcIiArICQodGhpcykucHJvcCgnaWQnKSArIFwiX211bHRpcGxlJ11cIikuZmlsdGVyKCdbdmFsdWU9MV0nKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JChcIltuYW1lPSdcIiArICQodGhpcykucHJvcCgnaWQnKSArIFwiX211bHRpcGxlJ11cIikuZmlsdGVyKCdbdmFsdWU9MF0nKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSlcclxuXHRcclxuXHQvKlxyXG5cdCQoJyNmb3JtJykuZmluZCgnaW5wdXQnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHRpZiAoJCh0aGlzKS5wcm9wKCd0eXBlJykgPT0gJ3JhZGlvJyAmJiAkKHRoaXMpLmlkID09ICkge1xyXG5cdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGxpbmVDaGVja2VkKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0pO1xyXG5cdCovXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=