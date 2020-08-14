(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~document"],{

/***/ "./assets/css/global.scss":
/*!********************************!*\
  !*** ./assets/css/global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! bootstrap-datepicker */ "./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js");

__webpack_require__(/*! bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js */ "./node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js");

var bsCustomFileInput = __webpack_require__(/*! bs-custom-file-input */ "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js");

__webpack_require__(/*! ../css/global.scss */ "./assets/css/global.scss");

init = function init(target) {
  //---------------------
  // popover
  //---------------------
  $(target).find('[data-toggle="popover"]').popover(); //---------------------
  // Ajax
  //---------------------

  ajax.fetch(target); //---------------------
  // Modal & Collapse
  //---------------------

  $(target).on('hidden.bs.collapse', function () {
    $('[data-toggle="collapse"][href="#' + $(this).attr('id') + '"]').removeClass('active').blur();
  });
  $(target).on('hidden.bs.modal', function () {
    $('[data-toggle="modal"]').blur();
  });
  $(target).find('button[data-dismiss]').on('click', function () {
    $('#modal').modal('hide');
  }); //---------------------
  // Bootstrap datepicker
  //---------------------

  $(target).find('.datepicker').each(function () {
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
  }); //---------------------
  // Form multiple
  //---------------------

  $(target).find("[name$='_multiple']").each(function () {
    var id;

    if (id = $(this).prop('name').match(new RegExp("(\\S+)_multiple$", "y"))) {
      $(this).on('click', function (event) {
        if ($(this).val() == 0) {
          $("[id^='" + id[1] + "']").not("[id*='multiple']").each(function () {
            if ($(this).hasClass('datepicker')) {
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
            if ($(this).hasClass('datepicker')) {
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
  }); //---------------------
  // BsCustomFileInput
  //---------------------

  bsCustomFileInput.init();
};

global.create = {
  div: function div() {
    return $(document.createElement('div'));
  },
  a: function a() {
    return $(document.createElement('a')).addClass('btn btn-sm text-nowrap');
  },
  span: function span() {
    return $(document.createElement('span'));
  },
  input: function input() {
    return $(document.createElement('input')).attr('type', 'text').addClass('form-control form-control-sm');
  },
  checkbox: function checkbox() {
    return $(document.createElement('input')).attr('type', 'checkbox').addClass('custom-control-input');
  },
  option: function option() {
    return $(document.createElement('option')).attr('value', '');
  },
  label: function label() {
    return $(document.createElement('label')).addClass('custom-control-label w-100 text-nowrap');
  },
  menuButton: function menuButton() {
    return $(document.createElement('button')).addClass('btn btn-sm btn-primary text-nowrap rounded-0');
  },
  smallButton: function smallButton() {
    return $(document.createElement('button')).addClass('btn btn-sm mx-1 text-nowrap');
  },
  tr: function tr() {
    return $(document.createElement('tr'));
  },
  td: function td() {
    return $(document.createElement('td'));
  },
  ul: function ul() {
    return $(document.createElement('ul'));
  },
  li: function li() {
    return $(document.createElement('li'));
  }
};
global.text = {
  noneSelected: 'None selected',
  multipleSeparator: ', ',
  selectAll: 'Select all',
  notApplicable: 'n/a',
  filter: 'Filter',
  loading: 'Loading...',
  details: 'Details',
  error: 'Ereur',
  reload: 'Relancer'
};
global.icon = {
  arrowUp: '<svg class="bi bi-arrow-bar-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 5.854a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L8 3.207l2.646 2.647a.5.5 0 00.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 10a.5.5 0 00.5-.5V3a.5.5 0 00-1 0v6.5a.5.5 0 00.5.5zm-4.8 1.6c0-.22.18-.4.4-.4h8.8a.4.4 0 010 .8H3.6a.4.4 0 01-.4-.4z" clip-rule="evenodd"/>' + '</svg>',
  arrowDown: '<svg class="bi bi-arrow-bar-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 10.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L8 12.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 6a.5.5 0 01.5.5V13a.5.5 0 01-1 0V6.5A.5.5 0 018 6zM2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>' + '</svg>',
  funnel: '<svg class="bi bi-funnel" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clip-rule="evenodd"/>' + '</svg>',
  funnelFill: '<svg class="bi bi-funnel-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path d="M2 3.5v-2h12v2l-4.5 5v5l-3 1v-6L2 3.5z"/>' + '<path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clip-rule="evenodd"/>' + '</svg>',
  loading: '<div class="d-flex justify-content-center">' + '<div class="spinner-border" role="status">' + '<span class="sr-only">' + text.loading + '</span>' + '</div>' + '</div>'
};
global.ajax = {
  fetch: function fetch(container) {
    var that = this;
    $(container).find('a[data-toggle="ajax"], button[data-toggle="ajax"]').not('[type="submit"]').each(function () {
      $(this).on('click', function (e) {
        if ($(this).parent().has('.active')) {
          $(this).parent().find('.active').removeClass('active');
          $(this).addClass('active');
        }

        var url = $(this).data('url');
        var target = $(this).data('target') || this;
        var add = $(this).data('add');
        that.set(target, url, undefined, undefined, add);
      });

      if ($(this).hasClass('active')) {
        $(this).trigger('click');
      }
    });
    $(container).find('a[data-toggle="ajax"][type="submit"], button[data-toggle="ajax"][type="submit"]').each(function () {
      if (($form = $('#' + $(this).attr('form'))) === false) {
        return false;
      }

      $form.on('submit', function (e) {
        return false;
      });
      $(this).on('click', function (e) {
        var url = $(this).data('url');
        var target = $(this).data('target') || this;
        var add = $(this).data('add');

        if ($form.find('input[type="file"]').length) {
          var method = 'POST';
          var data = new FormData($form.get(0));
        } else {
          var method = $form.attr('method') || 'GET';
          var data = $form.serializeArray();
        }

        that.set(target, url, method, data, add);
        return false;
      });

      if ($(this).hasClass('active')) {
        $(this).trigger('click');
      }
    });
    $(container).find('div[data-toggle="ajax"]').each(function (e) {
      var target = $(this).data('target') || this;
      var url = $(this).data('url');
      var add = $(this).data('add');
      that.set(target, url, undefined, undefined, add);
    });
  },
  set: function set(target, url) {
    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
    var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var add = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    if (target && url) {
      if (add === false) {
        $(target).empty().append(icon.loading);
      }

      var that = this;
      $.ajax({
        url: url,
        type: method,
        data: data,
        contentType: data.constructor === FormData ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
        processData: data.constructor !== FormData,
        success: function success(result) {
          if (add) {
            $(target).find('[data-toggle="ajax"]').remove();
            $(target).html($(target).html() + result);
          } else {
            $(target).html(result);
          }

          init(target);
        },
        error: function error(xhr, thrownError) {
          if (add === false) {
            var result = '<div class="alert alert-danger">' + '<h6 class="alert-heading font-weight-bold">' + text.error + ' ' + xhr.status + ' : ' + xhr.statusText + '</h6>';

            if ((m = /<title>(.+)<\/title>/.exec(xhr.responseText)) !== null) {
              result += '<p>' + m[1] + '</p>';
            }

            result += '<button type="button" class="btn btn-sm btn-primary" data-toggle="ajax" data-url="' + url + '" data-target="' + target + '">' + text.reload + '</button>' + '</div>';
            $(target).html(result);
            that.fetch(target);
          }
        }
      });
    }
  }
};

global.rem = function () {
  return parseInt($('html').css('font-size'));
};

$(document).ready(function () {
  init(document);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJic0N1c3RvbUZpbGVJbnB1dCIsImluaXQiLCJ0YXJnZXQiLCJmaW5kIiwicG9wb3ZlciIsImFqYXgiLCJmZXRjaCIsIm9uIiwiYXR0ciIsInJlbW92ZUNsYXNzIiwiYmx1ciIsIm1vZGFsIiwiZWFjaCIsImRhdGVwaWNrZXIiLCJmb3JtYXQiLCJ3ZWVrU3RhcnQiLCJtYXhWaWV3TW9kZSIsImxhbmd1YWdlIiwiZGF0YSIsIm11bHRpZGF0ZSIsImRheXNPZldlZWtEaXNhYmxlZCIsImF1dG9jbG9zZSIsImNhbGVuZGFyV2Vla3MiLCJjbGVhckJ0biIsInRvZGF5QnRuIiwidG9kYXlIaWdobGlnaHQiLCJpZCIsInByb3AiLCJtYXRjaCIsImV2ZW50IiwidmFsIiwibm90IiwiaGFzQ2xhc3MiLCJEYXRlIiwiaXMiLCJmaWx0ZXIiLCJ0cmlnZ2VyIiwiZ2xvYmFsIiwiY3JlYXRlIiwiZGl2IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYSIsImFkZENsYXNzIiwic3BhbiIsImlucHV0IiwiY2hlY2tib3giLCJvcHRpb24iLCJsYWJlbCIsIm1lbnVCdXR0b24iLCJzbWFsbEJ1dHRvbiIsInRyIiwidGQiLCJ1bCIsImxpIiwidGV4dCIsIm5vbmVTZWxlY3RlZCIsIm11bHRpcGxlU2VwYXJhdG9yIiwic2VsZWN0QWxsIiwibm90QXBwbGljYWJsZSIsImxvYWRpbmciLCJkZXRhaWxzIiwiZXJyb3IiLCJyZWxvYWQiLCJpY29uIiwiYXJyb3dVcCIsImFycm93RG93biIsImZ1bm5lbCIsImZ1bm5lbEZpbGwiLCJjb250YWluZXIiLCJ0aGF0IiwiZSIsInBhcmVudCIsImhhcyIsInVybCIsImFkZCIsInNldCIsInVuZGVmaW5lZCIsIiRmb3JtIiwibGVuZ3RoIiwibWV0aG9kIiwiRm9ybURhdGEiLCJnZXQiLCJzZXJpYWxpemVBcnJheSIsImVtcHR5IiwiYXBwZW5kIiwidHlwZSIsImNvbnRlbnRUeXBlIiwiY29uc3RydWN0b3IiLCJwcm9jZXNzRGF0YSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJyZW1vdmUiLCJodG1sIiwieGhyIiwidGhyb3duRXJyb3IiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwibSIsImV4ZWMiLCJyZXNwb25zZVRleHQiLCJyZW0iLCJwYXJzZUludCIsImNzcyIsInJlYWR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUVBQSxtQkFBTyxDQUFDLGdFQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsaUdBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx5SkFBRCxDQUFQOztBQUNBLElBQU1DLGlCQUFpQixHQUFHRCxtQkFBTyxDQUFDLDhGQUFELENBQWpDOztBQUNBQSxtQkFBTyxDQUFDLG9EQUFELENBQVA7O0FBRUFFLElBQUksR0FBRyxjQUFTQyxNQUFULEVBQWlCO0FBR3ZCO0FBQ0E7QUFDQTtBQUVBSixHQUFDLENBQUNJLE1BQUQsQ0FBRCxDQUFVQyxJQUFWLENBQWUseUJBQWYsRUFBMENDLE9BQTFDLEdBUHVCLENBU3ZCO0FBQ0E7QUFDQTs7QUFFR0MsTUFBSSxDQUFDQyxLQUFMLENBQVdKLE1BQVgsRUFib0IsQ0FnQnZCO0FBQ0E7QUFDQTs7QUFFQUosR0FBQyxDQUFDSSxNQUFELENBQUQsQ0FBVUssRUFBVixDQUFhLG9CQUFiLEVBQW1DLFlBQVc7QUFDN0NULEtBQUMsQ0FBQyxxQ0FBcUNBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUVUsSUFBUixDQUFhLElBQWIsQ0FBckMsR0FBMEQsSUFBM0QsQ0FBRCxDQUNFQyxXQURGLENBQ2MsUUFEZCxFQUVFQyxJQUZGO0FBSUEsR0FMRDtBQU9BWixHQUFDLENBQUNJLE1BQUQsQ0FBRCxD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ImFwcH5kb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG5yZXF1aXJlKCdib290c3RyYXAtZGF0ZXBpY2tlcicpO1xyXG5yZXF1aXJlKCdib290c3RyYXAtZGF0ZXBpY2tlci9kaXN0L2xvY2FsZXMvYm9vdHN0cmFwLWRhdGVwaWNrZXIuZnIubWluLmpzJyk7XHJcbmNvbnN0IGJzQ3VzdG9tRmlsZUlucHV0ID0gcmVxdWlyZSgnYnMtY3VzdG9tLWZpbGUtaW5wdXQnKTtcclxucmVxdWlyZSgnLi4vY3NzL2dsb2JhbC5zY3NzJyk7XHJcblxyXG5pbml0ID0gZnVuY3Rpb24odGFyZ2V0KSB7XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBwb3BvdmVyXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKHRhcmdldCkuZmluZCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIEFqYXhcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG4gICAgYWpheC5mZXRjaCh0YXJnZXQpO1xyXG5cdFxyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gTW9kYWwgJiBDb2xsYXBzZVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgICBcclxuXHQkKHRhcmdldCkub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1baHJlZj1cIiMnICsgJCh0aGlzKS5hdHRyKCdpZCcpICsgJ1wiXScpXHJcblx0XHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuXHRcdFx0LmJsdXIoKVxyXG5cdFx0O1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQodGFyZ2V0KS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScpLmJsdXIoKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKHRhcmdldCkuZmluZCgnYnV0dG9uW2RhdGEtZGlzbWlzc10nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJyNtb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBCb290c3RyYXAgZGF0ZXBpY2tlclxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCh0YXJnZXQpLmZpbmQoJy5kYXRlcGlja2VyJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdCQodGhpcykuZGF0ZXBpY2tlcih7XHJcblx0XHRcdGZvcm1hdDogXCJkZC1tbS15eXl5XCIsXHJcblx0ICAgICAgICB3ZWVrU3RhcnQ6IDEsXHJcblx0ICAgICAgICBtYXhWaWV3TW9kZTogMyxcclxuXHQgICAgICAgIGxhbmd1YWdlOiAkKHRoaXMpLmRhdGEoJ2xvY2FsZScpLFxyXG5cdCAgICAgICAgbXVsdGlkYXRlOiBmYWxzZSxcclxuXHQgICAgICAgIGRheXNPZldlZWtEaXNhYmxlZDogXCIwLDZcIixcclxuXHQgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcclxuXHQgICAgICAgIGNhbGVuZGFyV2Vla3M6IHRydWUsXHJcblx0ICAgICAgICBjbGVhckJ0bjogdHJ1ZSxcclxuXHQgICAgICAgIHRvZGF5QnRuOiB0cnVlLFxyXG5cdCAgICAgICAgdG9kYXlIaWdobGlnaHQ6IHRydWUsXHJcblx0ICAgIH0pO1xyXG5cdH0pXHJcblxyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gRm9ybSBtdWx0aXBsZVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCh0YXJnZXQpLmZpbmQoXCJbbmFtZSQ9J19tdWx0aXBsZSddXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdHZhciBpZDtcclxuXHRcdGlmIChpZCA9ICQodGhpcykucHJvcCgnbmFtZScpLm1hdGNoKC8oXFxTKylfbXVsdGlwbGUkL3kpKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCQodGhpcykudmFsKCkgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQkKFwiW2lkXj0nXCIgKyBpZFsxXSArIFwiJ11cIikubm90KFwiW2lkKj0nbXVsdGlwbGUnXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZGF0ZXBpY2tlcicpKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kYXRlcGlja2VyKCdzZXREYXRlJywgbmV3IERhdGUoKSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ3JhZGlvJykge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAnY2hlY2tib3gnKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAndGV4dCcgfHwgJCh0aGlzKS5pcygnc2VsZWN0JykpIHtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnZhbChudWxsKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJyZXF1aXJlZFwiLCAkKHRoaXMpLmRhdGEoJ3JlcXVpcmVkJykpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQkKFwiW2lkXj0nXCIgKyBpZFsxXSArIFwiJ11cIikubm90KFwiW2lkKj0nbXVsdGlwbGUnXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZGF0ZXBpY2tlcicpKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kYXRlcGlja2VyKCdzZXREYXRlJywgbnVsbCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ3JhZGlvJykge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAnY2hlY2tib3gnKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICd0ZXh0JyB8fCAkKHRoaXMpLmlzKCdzZWxlY3QnKSkge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykudmFsKG51bGwpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCQoJyMnICsgaWRbMV0gKyAnX211bHRpcGxlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHQkKCdmb3JtJykuZmluZCgnZGl2LCBpbnB1dCwgc2VsZWN0JykuZWFjaChmdW5jdGlvbiAoKSB7XHJcblx0XHRcclxuXHRcdGlmICgkKHRoaXMpLmRhdGEoJ211bHRpcGxlJykpIHtcclxuXHRcdFx0JChcIltuYW1lPSdcIiArICQodGhpcykucHJvcCgnaWQnKSArIFwiX211bHRpcGxlJ11cIikuZmlsdGVyKCdbdmFsdWU9MV0nKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JChcIltuYW1lPSdcIiArICQodGhpcykucHJvcCgnaWQnKSArIFwiX211bHRpcGxlJ11cIikuZmlsdGVyKCdbdmFsdWU9MF0nKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSlcclxuXHRcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIEJzQ3VzdG9tRmlsZUlucHV0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHRic0N1c3RvbUZpbGVJbnB1dC5pbml0KCk7XHJcblx0XHJcbn1cclxuXHJcbmdsb2JhbC5jcmVhdGUgPSB7XHJcblx0ZGl2OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxyXG5cclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0biBidG4tc20gdGV4dC1ub3dyYXAnKVxyXG5cdH0sXHJcblx0XHJcblx0c3BhbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGlucHV0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ3RleHQnKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20nKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0Y2hlY2tib3g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWlucHV0JylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdG9wdGlvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSlcclxuXHRcdFx0LmF0dHIoJ3ZhbHVlJywgJycpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRsYWJlbDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWxhYmVsIHctMTAwIHRleHQtbm93cmFwJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdG1lbnVCdXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSB0ZXh0LW5vd3JhcCByb3VuZGVkLTAnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0c21hbGxCdXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBteC0xIHRleHQtbm93cmFwJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRyOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHVsOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGxpOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG59O1xyXG5cclxuZ2xvYmFsLnRleHQgPSB7XHJcbiAgICBub25lU2VsZWN0ZWQ6ICdOb25lIHNlbGVjdGVkJyxcclxuICAgIG11bHRpcGxlU2VwYXJhdG9yOiAnLCAnLFxyXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0IGFsbCcsXHJcbiAgICBub3RBcHBsaWNhYmxlOiAnbi9hJyxcclxuICAgIGZpbHRlcjogJ0ZpbHRlcicsXHJcbiAgICBsb2FkaW5nOiAnTG9hZGluZy4uLicsXHJcbiAgICBkZXRhaWxzOiAnRGV0YWlscycsXHJcbiAgICBlcnJvcjogJ0VyZXVyJyxcclxuICAgIHJlbG9hZDogJ1JlbGFuY2VyJyxcclxufTtcclxuXHJcbmdsb2JhbC5pY29uID0ge1xyXG5cdGFycm93VXA6XHJcblx0XHQnPHN2ZyBjbGFzcz1cImJpIGJpLWFycm93LWJhci11cFwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXHJcblx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS4zNTQgNS44NTRhLjUuNSAwIDAwMC0uNzA4bC0zLTNhLjUuNSAwIDAwLS43MDggMGwtMyAzYS41LjUgMCAxMC43MDguNzA4TDggMy4yMDdsMi42NDYgMi42NDdhLjUuNSAwIDAwLjcwOCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04IDEwYS41LjUgMCAwMC41LS41VjNhLjUuNSAwIDAwLTEgMHY2LjVhLjUuNSAwIDAwLjUuNXptLTQuOCAxLjZjMC0uMjIuMTgtLjQuNC0uNGg4LjhhLjQuNCAwIDAxMCAuOEgzLjZhLjQuNCAwIDAxLS40LS40elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHQnPC9zdmc+JyxcclxuXHRcdFxyXG5cdGFycm93RG93bjpcclxuXHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1hcnJvdy1iYXItZG93blwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXHJcblx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuMzU0IDEwLjE0NmEuNS41IDAgMDEwIC43MDhsLTMgM2EuNS41IDAgMDEtLjcwOCAwbC0zLTNhLjUuNSAwIDAxLjcwOC0uNzA4TDggMTIuNzkzbDIuNjQ2LTIuNjQ3YS41LjUgMCAwMS43MDggMHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0ICBcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggNmEuNS41IDAgMDEuNS41VjEzYS41LjUgMCAwMS0xIDBWNi41QS41LjUgMCAwMTggNnpNMiAzLjVhLjUuNSAwIDAxLjUtLjVoMTFhLjUuNSAwIDAxMCAxaC0xMWEuNS41IDAgMDEtLjUtLjV6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHJcblx0ZnVubmVsOlxyXG5cdFx0XHQnPHN2ZyBjbGFzcz1cImJpIGJpLWZ1bm5lbFwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXHJcblx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEuNSAxLjVBLjUuNSAwIDAxMiAxaDEyYS41LjUgMCAwMS41LjV2MmEuNS41IDAgMDEtLjEyOC4zMzRMMTAgOC42OTJWMTMuNWEuNS41IDAgMDEtLjM0Mi40NzRsLTMgMUEuNS41IDAgMDE2IDE0LjVWOC42OTJMMS42MjggMy44MzRBLjUuNSAwIDAxMS41IDMuNXYtMnptMSAuNXYxLjMwOGw0LjM3MiA0Ljg1OEEuNS41IDAgMDE3IDguNXY1LjMwNmwyLS42NjZWOC41YS41LjUgMCAwMS4xMjgtLjMzNEwxMy41IDMuMzA4VjJoLTExelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHRcclxuXHRmdW5uZWxGaWxsOlxyXG5cdFx0XHQnPHN2ZyBjbGFzcz1cImJpIGJpLWZ1bm5lbC1maWxsXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHQnPHBhdGggZD1cIk0yIDMuNXYtMmgxMnYybC00LjUgNXY1bC0zIDF2LTZMMiAzLjV6XCIvPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xLjUgMS41QS41LjUgMCAwMTIgMWgxMmEuNS41IDAgMDEuNS41djJhLjUuNSAwIDAxLS4xMjguMzM0TDEwIDguNjkyVjEzLjVhLjUuNSAwIDAxLS4zNDIuNDc0bC0zIDFBLjUuNSAwIDAxNiAxNC41VjguNjkyTDEuNjI4IDMuODM0QS41LjUgMCAwMTEuNSAzLjV2LTJ6bTEgLjV2MS4zMDhsNC4zNzIgNC44NThBLjUuNSAwIDAxNyA4LjV2NS4zMDZsMi0uNjY2VjguNWEuNS41IDAgMDEuMTI4LS4zMzRMMTMuNSAzLjMwOFYyaC0xMXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQnPC9zdmc+JyxcclxuXHRcclxuXHRsb2FkaW5nOlxyXG5cdFx0JzxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPicgK1xyXG5cdFx0XHQnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPicgK1xyXG5cdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4nICsgdGV4dC5sb2FkaW5nICsgJzwvc3Bhbj4nICtcclxuXHRcdFx0JzwvZGl2PicgK1xyXG5cdFx0JzwvZGl2PicsXHJcblx0XHJcbn07XHJcblxyXG5nbG9iYWwuYWpheCA9IHtcclxuXHRcdFxyXG5cdGZldGNoOiBmdW5jdGlvbihjb250YWluZXIpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQkKGNvbnRhaW5lcikuZmluZCgnYVtkYXRhLXRvZ2dsZT1cImFqYXhcIl0sIGJ1dHRvbltkYXRhLXRvZ2dsZT1cImFqYXhcIl0nKS5ub3QoJ1t0eXBlPVwic3VibWl0XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLnBhcmVudCgpLmhhcygnLmFjdGl2ZScpKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IHVybCA9ICQodGhpcykuZGF0YSgndXJsJyk7XHJcblx0XHRcdFx0bGV0IHRhcmdldCA9ICQodGhpcykuZGF0YSgndGFyZ2V0JykgfHwgdGhpcztcclxuXHRcdFx0XHRsZXQgYWRkID0gJCh0aGlzKS5kYXRhKCdhZGQnKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGFkZCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdhW2RhdGEtdG9nZ2xlPVwiYWpheFwiXVt0eXBlPVwic3VibWl0XCJdLCBidXR0b25bZGF0YS10b2dnbGU9XCJhamF4XCJdW3R5cGU9XCJzdWJtaXRcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCgkZm9ybSA9ICQoJyMnICsgJCh0aGlzKS5hdHRyKCdmb3JtJykpKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xyXG5cdFx0XHRcdGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpIHx8IHRoaXM7XHJcblx0XHRcdFx0bGV0IGFkZCA9ICQodGhpcykuZGF0YSgnYWRkJyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHR2YXIgbWV0aG9kID0gJ1BPU1QnO1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm0uZ2V0KDApKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dmFyIG1ldGhvZCA9ICRmb3JtLmF0dHIoJ21ldGhvZCcpIHx8ICdHRVQnO1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSAkZm9ybS5zZXJpYWxpemVBcnJheSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCwgbWV0aG9kLCBkYXRhLCBhZGQpO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JChjb250YWluZXIpLmZpbmQoJ2RpdltkYXRhLXRvZ2dsZT1cImFqYXhcIl0nKS5lYWNoKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHJcblx0XHRcdGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpIHx8IHRoaXM7XHJcblx0XHRcdGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xyXG5cdFx0XHRsZXQgYWRkID0gJCh0aGlzKS5kYXRhKCdhZGQnKTtcclxuXHRcdFx0XHJcblx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYWRkKTtcclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH0sXHJcblx0XHRcclxuXHRzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHVybCwgbWV0aG9kPSdHRVQnLCBkYXRhPVtdLCBhZGQ9ZmFsc2UpIHtcclxuXHRcdFxyXG5cdFx0aWYgKHRhcmdldCAmJiB1cmwpIHtcclxuXHRcdFx0aWYgKGFkZCA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHQkKHRhcmdldClcclxuXHRcdFx0XHRcdC5lbXB0eSgpXHJcblx0XHRcdFx0XHQuYXBwZW5kKGljb24ubG9hZGluZylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHR1cmwgOiB1cmwsXHJcblx0XHRcdFx0dHlwZTogbWV0aG9kLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdFx0Y29udGVudFR5cGU6IChkYXRhLmNvbnN0cnVjdG9yID09PSBGb3JtRGF0YSk/ZmFsc2U6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcsXHJcblx0XHRcdFx0cHJvY2Vzc0RhdGE6IChkYXRhLmNvbnN0cnVjdG9yICE9PSBGb3JtRGF0YSksXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0XHRpZiAoYWRkKSB7XHJcblx0XHRcdFx0XHRcdCQodGFyZ2V0KS5maW5kKCdbZGF0YS10b2dnbGU9XCJhamF4XCJdJykucmVtb3ZlKCk7XHJcblx0XHRcdFx0XHRcdCQodGFyZ2V0KS5odG1sKCQodGFyZ2V0KS5odG1sKCkgKyByZXN1bHQpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0JCh0YXJnZXQpLmh0bWwocmVzdWx0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGluaXQodGFyZ2V0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbih4aHIsIHRocm93bkVycm9yKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChhZGQgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdGxldCByZXN1bHQgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPicgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCc8aDYgY2xhc3M9XCJhbGVydC1oZWFkaW5nIGZvbnQtd2VpZ2h0LWJvbGRcIj4nICsgdGV4dC5lcnJvciArICcgJyArIHhoci5zdGF0dXMgKyAnIDogJyArIHhoci5zdGF0dXNUZXh0ICsgJzwvaDY+JztcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmICgobSA9IC88dGl0bGU+KC4rKTxcXC90aXRsZT4vLmV4ZWMoeGhyLnJlc3BvbnNlVGV4dCkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzdWx0ICs9ICc8cD4nICsgbVsxXSArICc8L3A+JztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0cmVzdWx0ICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnlcIiBkYXRhLXRvZ2dsZT1cImFqYXhcIiBkYXRhLXVybD1cIicgKyB1cmwgKyAnXCIgZGF0YS10YXJnZXQ9XCInICsgdGFyZ2V0ICsgJ1wiPicgKyB0ZXh0LnJlbG9hZCArICc8L2J1dHRvbj4nICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0JzwvZGl2Pic7XHJcblx0XHRcdFx0XHRcdCQodGFyZ2V0KS5odG1sKHJlc3VsdCk7XHJcblx0XHRcdFx0XHRcdHRoYXQuZmV0Y2godGFyZ2V0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG59XHJcblxyXG5nbG9iYWwucmVtID0gZnVuY3Rpb24oKSB7XHJcblx0cmV0dXJuIHBhcnNlSW50KCQoJ2h0bWwnKS5jc3MoJ2ZvbnQtc2l6ZScpKTtcclxufVxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFxyXG4gICAgaW5pdChkb2N1bWVudCk7XHJcbiAgICBcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==