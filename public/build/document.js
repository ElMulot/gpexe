(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["document"],{

/***/ "./assets/css/document.scss":
/*!**********************************!*\
  !*** ./assets/css/document.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/document.js":
/*!*******************************!*\
  !*** ./assets/js/document.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! ../css/document.scss */ "./assets/css/document.scss");

__webpack_require__(/*! bootstrap-select */ "./node_modules/bootstrap-select/dist/js/bootstrap-select.js");

__webpack_require__(/*! bootstrap-select/dist/js/i18n/defaults-fr_FR.js */ "./node_modules/bootstrap-select/dist/js/i18n/defaults-fr_FR.js");

$(document).ready(function () {
  $.fn.selectpicker.Constructor.BootstrapVersion = '4';
  $('#document_edit').hide();
  $('#document_move').hide();
  $('#document_delete').hide();
  $('#version_menu').hide();
  $('#form').find('input, select').each(function () {
    if ($(this).prop('type') == 'checkbox') {
      $(this).on('click', lineChecked);
    }
  });

  function lineChecked() {
    var checked = false;
    var unchecked = false;

    if ($(this).prop('id') == 'check_all') {
      $('table').find('input').each(function () {
        checked = $('#check_all').is(':checked');
        unchecked = !checked;
        $(this).prop('checked', checked);
      });
    } else {
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
      $('#document_edit').show();
      $('#document_move').show();
      $('#document_delete').show();
      $('#version_menu').show();
    } else if (unchecked) {
      $('#document_edit').hide();
      $('#document_move').hide();
      $('#document_delete').hide();
      $('#version_menu').hide();
    }
  }

  $('#document_edit').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('link'));
    $('#form').submit();
  });
  $('#document_move').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('link'));
    $('#form').submit();
  });
  $('#document_delete').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('link'));
    $('#form').submit();
  });
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
  $('#version_delete').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('link'));
    $('#form').submit();
  });
});

/***/ })

},[["./assets/js/document.js","runtime","vendors~app~document~form~login","vendors~document~form","vendors~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiZG9jdW1lbnQiLCJyZWFkeSIsImZuIiwic2VsZWN0cGlja2VyIiwiQ29uc3RydWN0b3IiLCJCb290c3RyYXBWZXJzaW9uIiwiaGlkZSIsImZpbmQiLCJlYWNoIiwicHJvcCIsIm9uIiwibGluZUNoZWNrZWQiLCJjaGVja2VkIiwidW5jaGVja2VkIiwiaXMiLCJzaG93IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImRhdGEiLCJzdWJtaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUVBQSxtQkFBTyxDQUFDLHdEQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMscUZBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx1SEFBRCxDQUFQOztBQUdBRCxDQUFDLENBQUNFLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFFNUJILEdBQUMsQ0FBQ0ksRUFBRixDQUFLQyxZQUFMLENBQWtCQyxXQUFsQixDQUE4QkMsZ0JBQTlCLEdBQWlELEdBQWpEO0FBRUFQLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CUSxJQUFwQjtBQUNBUixHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQlEsSUFBcEI7QUFDQVIsR0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JRLElBQXRCO0FBQ0FSLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJRLElBQW5CO0FBRUFSLEdBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV1MsSUFBWCxDQUFnQixlQUFoQixFQUFpQ0MsSUFBakMsQ0FBc0MsWUFBVztBQUVoRCxRQUFJVixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFXLElBQVIsQ0FBYSxNQUFiLEtBQXdCLFVBQTVCLEVBQXdDO0FBQ3ZDWCxPQUFDLENBQUMsSUFBRCxDQUFELENBQVFZLEVBQVIsQ0FBVyxPQUFYLEVBQW9CQyxXQUFwQjtBQUNBO0FBRUQsR0FORDs7QUFRQSxXQUFTQSxXQUFULEdBQXVCO0FBRXRCLFFBQUlDLE9BQU8sR0FBRyxLQUFkO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLEtBQWhCOztBQUVBLFFBQUlmLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVcsSUFBUixDQUFhLElBQWIsS0FBc0IsV0FBMUIsRUFBdUM7QUFFdENYLE9BQUMsQ0FBQyxPQUFELENBQUQsQ0FBV1MsSUFBWCxDQUFnQixPQUFoQixFQUF5QkMsSUFBekIsQ0FBOEIsWUFBVztBQUN4Q0ksZUFBTyxHQUFHZCxDQUFDLENBQUMsWUFBRCxDQUFELENBQWdCZ0IsRUFBaEIsQ0FBbUIsVUFBbkIsQ0FBVjtBQUNBRCxpQkFBUyxHQUFHLENBQUNELE9BQWI7QUFDQWQsU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRVyxJQUFSLENBQWEsU0FBYixFQUF3QkcsT0FBeEI7QUFDQSxPQUpEO0FBTUEsS0FSRCxNQVFPO0FBRU5kLE9BQUMsQ0FBQyxPQUFELENBQUQsQ0FBV1MsSUFBWCxDQUFnQixPQUFoQixFQUF5QkMsSUFBekIsQ0FBOEIsWUFBVztBQUV4QyxZQUFJVixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFXLElBQVIsQ0FBYSxJQUFiLEtBQXNCLFdBQTFCLEVBQXVDO0FBQ3RDLGNBQUlYLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdCLEVBQVIsQ0FBVyxVQUFYLENBQUosRUFBNEI7QUFDM0JGLG1CQUFPLEdBQUcsSUFBVjtBQUNBLFdBRkQsTUFFTztBQUNOQyxxQkFBUyxHQUFHLElBQVo7QUFDQTs7QUFFRCxjQUFJRCxPQUFPLElBQUlDLFNBQWYsRUFBMEI7QUFDekJmLGFBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JXLElBQWhCLENBQXFCLGVBQXJCLEVBQXNDLElBQXRDO0FBQ0EsV0FGRCxNQUVPO0FBQ05YLGFBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JXLElBQWhCLENBQXFCLGVBQXJCLEVBQXNDLEtBQXRDO0FBQ0FYLGFBQUMsQ0FBQyxZQUFELENBQUQsQ0FBZ0JXLElBQWhCLENBQXFCLFNBQXJCLEVBQWdDRyxPQUFoQztBQUNBO0FBQ0Q7QUFDRCxPQWhCRDtBQWlCQTs7QUFFRCxRQUFJQSxPQUFKLEVBQWE7QUFDWmQsT0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JpQixJQUFwQjtBQUNBakIsT0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JpQixJQUFwQjtBQUNBakIsT0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JpQixJQUF0QjtBQUNBakIsT0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQmlCLElBQW5CO0FBQ0EsS0FMRCxNQUtPLElBQUdGLFNBQUgsRUFBYztBQUNwQmYsT0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JRLElBQXBCO0FBQ0FSLE9BQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CUSxJQUFwQjtBQUNBUixPQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQlEsSUFBdEI7QUFDQVIsT0FBQyxDQUFDLGVBQUQsQ0FBRCxDQUFtQlEsSUFBbkI7QUFDQTtBQUNEOztBQUVEUixHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQlksRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsVUFBU00sS0FBVCxFQUFnQjtBQUMvQ0EsU0FBSyxDQUFDQyxjQUFOO0FBQ0FuQixLQUFDLENBQUMsT0FBRCxDQUFELENBQVdXLElBQVgsQ0FBZ0IsUUFBaEIsRUFBMEJYLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9CLElBQVIsQ0FBYSxNQUFiLENBQTFCO0FBQ0FwQixLQUFDLENBQUMsT0FBRCxDQUFELENBQVdxQixNQUFYO0FBQ0EsR0FKRDtBQU1BckIsR0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JZLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFVBQVNNLEtBQVQsRUFBZ0I7QUFDL0NBLFNBQUssQ0FBQ0MsY0FBTjtBQUNBbkIsS0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXVyxJQUFYLENBQWdCLFFBQWhCLEVBQTBCWCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvQixJQUFSLENBQWEsTUFBYixDQUExQjtBQUNBcEIsS0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXcUIsTUFBWDtBQUNBLEdBSkQ7QUFNQXJCLEdBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCWSxFQUF0QixDQUF5QixPQUF6QixFQUFrQyxVQUFTTSxLQUFULEVBQWdCO0FBQ2pEQSxTQUFLLENBQUNDLGNBQU47QUFDQW5CLEtBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV1csSUFBWCxDQUFnQixRQUFoQixFQUEwQlgsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0IsSUFBUixDQUFhLE1BQWIsQ0FBMUI7QUFDQXBCLEtBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV3FCLE1BQVg7QUFDQSxHQUpEO0FBTUFyQixHQUFDLENBQUMsY0FBRCxDQUFELENBQWtCWSxFQUFsQixDQUFxQixPQUFyQixFQUE4QixVQUFTTSxLQUFULEVBQWdCO0FBQzdDQSxTQUFLLENBQUNDLGNBQU47QUFDQW5CLEtBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV1csSUFBWCxDQUFnQixRQUFoQixFQUEwQlgsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0IsSUFBUixDQUFhLE1BQWIsQ0FBMUI7QUFDQXBCLEtBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV3FCLE1BQVg7QUFDQSxHQUpEO0FBTUFyQixHQUFDLENBQUMsZUFBRCxDQUFELENBQW1CWSxFQUFuQixDQUFzQixPQUF0QixFQUErQixVQUFTTSxLQUFULEVBQWdCO0FBQzlDQSxTQUFLLENBQUNDLGNBQU47QUFDQW5CLEtBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV1csSUFBWCxDQUFnQixRQUFoQixFQUEwQlgsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0IsSUFBUixDQUFhLE1BQWIsQ0FBMUI7QUFDQXBCLEtBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV3FCLE1BQVg7QUFDQSxHQUpEO0FBTUFyQixHQUFDLENBQUMsaUJBQUQsQ0FBRCxDQUFxQlksRUFBckIsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBU00sS0FBVCxFQUFnQjtBQUNoREEsU0FBSyxDQUFDQyxjQUFOO0FBQ0FuQixLQUFDLENBQUMsT0FBRCxDQUFELENBQVdXLElBQVgsQ0FBZ0IsUUFBaEIsRUFBMEJYLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9CLElBQVIsQ0FBYSxNQUFiLENBQTFCO0FBQ0FwQixLQUFDLENBQUMsT0FBRCxDQUFELENBQVdxQixNQUFYO0FBQ0EsR0FKRDtBQU1BLENBcEdELEUiLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG5yZXF1aXJlKCcuLi9jc3MvZG9jdW1lbnQuc2NzcycpO1xyXG5yZXF1aXJlKCdib290c3RyYXAtc2VsZWN0Jyk7XHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcC1zZWxlY3QvZGlzdC9qcy9pMThuL2RlZmF1bHRzLWZyX0ZSLmpzJyk7XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0JC5mbi5zZWxlY3RwaWNrZXIuQ29uc3RydWN0b3IuQm9vdHN0cmFwVmVyc2lvbiA9ICc0JztcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfZWRpdCcpLmhpZGUoKTtcclxuXHQkKCcjZG9jdW1lbnRfbW92ZScpLmhpZGUoKTtcclxuXHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdCQoJyN2ZXJzaW9uX21lbnUnKS5oaWRlKCk7XHRcclxuXHRcclxuXHQkKCcjZm9ybScpLmZpbmQoJ2lucHV0LCBzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHRpZiAoJCh0aGlzKS5wcm9wKCd0eXBlJykgPT0gJ2NoZWNrYm94Jykge1xyXG5cdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGxpbmVDaGVja2VkKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0pO1xyXG5cdFxyXG5cdGZ1bmN0aW9uIGxpbmVDaGVja2VkKCkge1xyXG5cdFx0XHJcblx0XHR2YXIgY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0dmFyIHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHJcblx0XHRpZiAoJCh0aGlzKS5wcm9wKCdpZCcpID09ICdjaGVja19hbGwnKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQkKCd0YWJsZScpLmZpbmQoJ2lucHV0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjaGVja2VkID0gJCgnI2NoZWNrX2FsbCcpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdHVuY2hlY2tlZCA9ICFjaGVja2VkO1xyXG5cdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcclxuXHRcdFx0JCgndGFibGUnKS5maW5kKCdpbnB1dCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCQodGhpcykucHJvcCgnaWQnKSAhPSAnY2hlY2tfYWxsJykge1xyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1bmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmIChjaGVja2VkKSB7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9lZGl0Jykuc2hvdygpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfbW92ZScpLnNob3coKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLnNob3coKTtcclxuXHRcdFx0JCgnI3ZlcnNpb25fbWVudScpLnNob3coKTtcdFxyXG5cdFx0fSBlbHNlIGlmKHVuY2hlY2tlZCkge1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZWRpdCcpLmhpZGUoKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X21vdmUnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyN2ZXJzaW9uX21lbnUnKS5oaWRlKCk7XHRcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0JCgnI2RvY3VtZW50X2VkaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJyNmb3JtJykucHJvcCgnYWN0aW9uJywgJCh0aGlzKS5kYXRhKCdsaW5rJykpO1xyXG5cdFx0JCgnI2Zvcm0nKS5zdWJtaXQoKVxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKCcjZm9ybScpLnByb3AoJ2FjdGlvbicsICQodGhpcykuZGF0YSgnbGluaycpKTtcclxuXHRcdCQoJyNmb3JtJykuc3VibWl0KClcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfZGVsZXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKCcjZm9ybScpLnByb3AoJ2FjdGlvbicsICQodGhpcykuZGF0YSgnbGluaycpKTtcclxuXHRcdCQoJyNmb3JtJykuc3VibWl0KClcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdmVyc2lvbl9uZXcnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJyNmb3JtJykucHJvcCgnYWN0aW9uJywgJCh0aGlzKS5kYXRhKCdsaW5rJykpO1xyXG5cdFx0JCgnI2Zvcm0nKS5zdWJtaXQoKVxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2ZXJzaW9uX2VkaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJyNmb3JtJykucHJvcCgnYWN0aW9uJywgJCh0aGlzKS5kYXRhKCdsaW5rJykpO1xyXG5cdFx0JCgnI2Zvcm0nKS5zdWJtaXQoKVxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2ZXJzaW9uX2RlbGV0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnI2Zvcm0nKS5wcm9wKCdhY3Rpb24nLCAkKHRoaXMpLmRhdGEoJ2xpbmsnKSk7XHJcblx0XHQkKCcjZm9ybScpLnN1Ym1pdCgpXHJcblx0fSk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuICAgIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9