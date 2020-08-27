(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

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

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.replace */ "./node_modules/core-js/modules/es.string.replace.js");

__webpack_require__(/*! core-js/modules/es.string.split */ "./node_modules/core-js/modules/es.string.split.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! bootstrap-datepicker */ "./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js");

__webpack_require__(/*! bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js */ "./node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js");

var bsCustomFileInput = __webpack_require__(/*! bs-custom-file-input */ "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js");

__webpack_require__(/*! ../css/global.scss */ "./assets/css/global.scss");

String.prototype.toDate = function () {
  var _this$split = this.split("-"),
      _this$split2 = _slicedToArray(_this$split, 3),
      day = _this$split2[0],
      month = _this$split2[1],
      year = _this$split2[2];

  d = new Date(year, month - 1, day);
  return d instanceof Date && isNaN(d) === false ? d : null;
};

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
};

$.fn.exist = function () {
  return this.length !== 0 && this;
};

global.create = {
  div: function div() {
    return $(document.createElement('div'));
  },
  a: function a() {
    return $(document.createElement('a')); //.addClass('btn btn-sm text-nowrap')
  },
  span: function span() {
    return $(document.createElement('span'));
  },
  fieldset: function fieldset() {
    return $(document.createElement('fieldset'));
  },
  input: function input() {
    return $(document.createElement('input')).attr('type', 'text').addClass('form-control form-control-sm');
  },
  checkbox: function checkbox() {
    return $(document.createElement('input')).attr('type', 'checkbox').addClass('custom-control-input');
  },
  select: function select() {
    return $(document.createElement('select')).addClass('form-control form-control-sm');
  },
  option: function option() {
    return $(document.createElement('option')).attr('value', '');
  },
  label: function label() {
    return $(document.createElement('label')).addClass('custom-control-label w-100 text-nowrap');
  },
  button: function button() {
    return $(document.createElement('button')).attr('type', 'button').addClass('btn');
  },
  menuButton: function menuButton() {
    return $(document.createElement('button')).attr('type', 'button').addClass('btn btn-sm btn-primary text-nowrap rounded-0');
  },
  smallButton: function smallButton() {
    return $(document.createElement('button')).attr('type', 'button').addClass('btn btn-sm mx-1 text-nowrap');
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
  reload: 'Relancer',
  edit: 'Edit',
  "delete": 'Delete',
  close: 'Close',
  all: 'All',
  fromDate: 'From date',
  toDate: 'To date',
  highlight: 'Highlight'
};
global.icon = {
  arrowUp: '<svg class="bi bi-arrow-bar-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 5.854a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L8 3.207l2.646 2.647a.5.5 0 00.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 10a.5.5 0 00.5-.5V3a.5.5 0 00-1 0v6.5a.5.5 0 00.5.5zm-4.8 1.6c0-.22.18-.4.4-.4h8.8a.4.4 0 010 .8H3.6a.4.4 0 01-.4-.4z" clip-rule="evenodd"/>' + '</svg>',
  arrowDown: '<svg class="bi bi-arrow-bar-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 10.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L8 12.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 6a.5.5 0 01.5.5V13a.5.5 0 01-1 0V6.5A.5.5 0 018 6zM2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>' + '</svg>',
  funnel: '<svg class="bi bi-funnel" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clip-rule="evenodd"/>' + '</svg>',
  funnelFill: '<svg class="bi bi-funnel-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path d="M2 3.5v-2h12v2l-4.5 5v5l-3 1v-6L2 3.5z"/>' + '<path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clip-rule="evenodd"/>' + '</svg>',
  success: '<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-check-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>' + '</svg>',
  warning: '<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-info-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>' + '</svg>',
  danger: '<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-exclamation-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>' + '</svg>',
  loading: '<div class="d-flex justify-content-center mt-4">' + '<div class="spinner-border" role="status">' + '<span class="sr-only">' + text.loading + '</span>' + '</div>' + '</div>',
  close: '<button type="button" class="ml-2 mb-1 close ml-auto" data-dismiss="toast" aria-label=' + text.close + '>' + '<span aria-hidden="true">&times;</span>' + '</button>'
};
global.ajax = {
  fetch: function fetch(container) {
    var that = this;
    $(container).find('a[data-toggle*="ajax"], button[data-toggle*="ajax"]').not('[type="submit"]').each(function () {
      $(this).on('click', function (e) {
        if ($(this).parent().has('.active')) {
          $(this).parent().find('.active').removeClass('active');
          $(this).addClass('active');
        }

        var url = $(this).data('url');
        var target = $(this).data('target') || this;
        that.set(target, url, {
          from: this
        });
        return false;
      });

      if ($(this).hasClass('active')) {
        $(this).trigger('click');
      }
    });
    $(container).find('a[data-toggle*="ajax"], button[data-toggle*="ajax"]').filter('[type="submit"]').each(function () {
      if (($form = $('#' + $(this).attr('form'))) === false) {
        return false;
      }

      $form.on('submit', function (e) {
        return false;
      });
      $(this).on('click', function (e) {
        var url = $(this).data('url');
        var target = $(this).data('target') || this;

        if ($form.find('input[type="file"]').exist()) {
          var method = 'POST';
          var data = new FormData($form.get(0));
        } else {
          var method = $form.attr('method') || 'GET';
          var data = $form.serializeArray();
        }

        that.set(target, url, {
          method: method,
          from: this,
          data: data
        });
        return false;
      });

      if ($(this).hasClass('active')) {
        $(this).trigger('click');
      }
    });
    $(container).find('div[data-toggle*="ajax"]').each(function (e) {
      var target = $(this).data('target') || this;
      var url = $(this).data('url');
      that.set(target, url, {
        from: this
      });
    });
  },
  set: function set(target, url) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

    if (target && url) {
      if (options.modal === true || options.from && $(options.from).is('[data-toggle*="modal"]')) {
        if ($(target).is('.modal')) {
          $(target).modal('show');
        } else {
          $(target).parents('.modal').modal('show');
        }
      }

      var method = options.method || 'GET';
      var data = options.data || [];
      var that = this;
      $.ajax({
        url: url,
        type: method,
        data: data,
        contentType: data.constructor === FormData ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
        processData: data.constructor !== FormData,
        beforeSend: function beforeSend(jqXHR, settings) {
          jqXHR.settings = settings;
          jqXHR.from = $(options.from);
          $(target).trigger('ajax.beforeSend', [jqXHR, settings]);
        },
        success: function success(result, textStatus, jqXHR) {
          jqXHR.from = $(options.from);
          $(target).trigger('ajax.success', [result, textStatus, jqXHR]);
          $(target).trigger('ajax.completed', [result, textStatus, jqXHR]);
        },
        error: function error(jqXHR, textStatus, errorThrown) {
          jqXHR.from = $(options.from);
          $(target).trigger('ajax.error', [jqXHR, textStatus, errorThrown]);
        }
      });
    }
  }
};
$(document).ready(function () {
  //---------------------
  // Defaults parameters for datepicker
  //---------------------
  $.fn.datepicker.defaults.format = "dd-mm-yyyy";
  $.fn.datepicker.defaults.weekStart = 1;
  $.fn.datepicker.defaults.maxViewMode = 3;
  $.fn.datepicker.defaults.language = $(document.body).data('locale').replace(/_/, '-');
  $.fn.datepicker.defaults.multidate = false;
  $.fn.datepicker.defaults.daysOfWeekDisabled = "0,6";
  $.fn.datepicker.defaults.autoclose = true;
  $.fn.datepicker.defaults.calendarWeeks = true;
  $.fn.datepicker.defaults.clearBtn = true;
  $.fn.datepicker.defaults.todayBtn = true;
  $.fn.datepicker.defaults.todayHighlight = true;
  $(document).on('ajax.beforeSend', function (e, jqXHR, settings) {
    $(e.target).show().empty().append(icon.loading);
  });
  $(document).on('ajax.success', function (e, result, textStatus, jqXHR) {
    $(e.target).find('.spinner-border').parent().remove();

    if (result) {
      $(e.target).html($(e.target).html() + result);
    } //---------------------
    // popover
    //---------------------


    $(e.target).find('[data-toggle="popover"]').popover(); //---------------------
    // Ajax
    //---------------------

    global.ajax.fetch(e.target); //---------------------
    // Modal & Collapse
    //---------------------

    $(e.target).on('hidden.bs.collapse', function () {
      $('[data-toggle="collapse"][href="#' + $(this).attr('id') + '"]').removeClass('active').blur();
    });
    $(e.target).on('hidden.bs.modal', function () {
      $('[data-toggle="modal"]').blur();
    });
    $(e.target).find('button[data-dismiss]').on('click', function () {
      $('#modal').modal('hide');
    }); //---------------------
    // Bootstrap datepicker
    //---------------------

    $(e.target).find('.datepicker').each(function () {
      $(this).datepicker({
        'format': $.fn.datepicker.defaults.format
      });
    }); //---------------------
    // Form multiple
    //---------------------

    $(e.target).find("[name$='_multiple']").each(function () {
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
    $(e.target).find('form').find('div, input, select').each(function () {
      if ($(this).data('multiple')) {
        $("[name='" + $(this).prop('id') + "_multiple']").filter('[value=1]').trigger('click');
      } else {
        $("[name='" + $(this).prop('id') + "_multiple']").filter('[value=0]').trigger('click');
      }
    }); //---------------------
    // BsCustomFileInput
    //---------------------

    bsCustomFileInput.init();
  });
  $(document).on('ajax.error', function (e, jqXHR, textStatus, errorThrown) {
    var result = '<div class="alert alert-danger">' + '<h6 class="alert-heading font-weight-bold">' + text.error + ' ' + jqXHR.status + ' : ' + jqXHR.statusText + '</h6>';

    if ((m = /<title>(.+)<\/title>/.exec(jqXHR.responseText)) !== null) {
      result += '<p>' + m[1] + '</p>';
    }

    result += '<button type="button" class="btn btn-sm btn-primary" >' + text.reload + '</button>' + '</div>';
    $(e.target).html(result);
    $(e.target).find('button').on('click', function () {
      global.ajax.set(e.target, jqXHR.settings.url, {
        data: jqXHR.settings.data
      });
    });
  });
  $(document).trigger('ajax.success');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

},[["./assets/js/app.js","runtime","vendors~app~automation~dashboard~document~login","vendors~app~dashboard~document","vendors~app~document","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJic0N1c3RvbUZpbGVJbnB1dCIsIlN0cmluZyIsInByb3RvdHlwZSIsInRvRGF0ZSIsInNwbGl0IiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZCIsIkRhdGUiLCJpc05hTiIsImFkZERheXMiLCJkYXlzIiwiZGF0ZSIsInZhbHVlT2YiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImZuIiwiZXhpc3QiLCJsZW5ndGgiLCJnbG9iYWwiLCJjcmVhdGUiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhIiwic3BhbiIsImZpZWxkc2V0IiwiaW5wdXQiLCJhdHRyIiwiYWRkQ2xhc3MiLCJjaGVja2JveCIsInNlbGVjdCIsIm9wdGlvbiIsImxhYmVsIiwiYnV0dG9uIiwibWVudUJ1dHRvbiIsInNtYWxsQnV0dG9uIiwidHIiLCJ0ZCIsInVsIiwibGkiLCJ0ZXh0Iiwibm9uZVNlbGVjdGVkIiwibXVsdGlwbGVTZXBhcmF0b3IiLCJzZWxlY3RBbGwiLCJub3RBcHBsaWNhYmxlIiwiZmlsdGVyIiwibG9hZGluZyIsImRldGFpbHMiLCJlcnJvciIsInJlbG9hZCIsImVkaXQiLCJjbG9zZSIsImFsbCIsImZyb21EYXRlIiwiaGlnaGxpZ2h0IiwiaWNvbiIsImFycm93VXAiLCJhcnJvd0Rvd24iLCJmdW5uZWwiLCJmdW5uZWxGaWxsIiwic3VjY2VzcyIsIndhcm5pbmciLCJkYW5nZXIiLCJhamF4IiwiZmV0Y2giLCJjb250YWluZXIiLCJ0aGF0IiwiZmluZCIsIm5vdCIsImVhY2giLCJvbiIsImUiLCJwYXJlbnQiLCJoYXMiLCJyZW1vdmVDbGFzcyIsInVybCIsImRhdGEiLCJ0YXJnZXQiLCJzZXQiLCJmcm9tIiwiaGFzQ2xhc3MiLCJ0cmlnZ2VyIiwiJGZvcm0iLCJtZXRob2QiLCJGb3JtRGF0YSIsImdldCIsInNlcmlhbGl6ZUFycmF5Iiwib3B0aW9ucyIsIm1vZGFsIiwiaXMiLCJwYXJlbnRzIiwidHlwZSIsImNvbnRlbnRUeXBlIiwiY29uc3RydWN0b3IiLCJwcm9jZXNzRGF0YSIsImJlZm9yZVNlbmQiLCJqcVhIUiIsInNldHRpbmdzIiwicmVzdWx0IiwidGV4dFN0YXR1cyIsImVycm9yVGhyb3duIiwicmVhZHkiLCJkYXRlcGlja2VyIiwiZGVmYXVsdHMiLCJmb3JtYXQiLCJ3ZWVrU3RhcnQiLCJtYXhWaWV3TW9kZSIsImxhbmd1YWdlIiwiYm9keSIsInJlcGxhY2UiLCJtdWx0aWRhdGUiLCJkYXlzT2ZXZWVrRGlzYWJsZWQiLCJhdXRvY2xvc2UiLCJjYWxlbmRhcldlZWtzIiwiY2xlYXJCdG4iLCJ0b2RheUJ0biIsInRvZGF5SGlnaGxpZ2h0Iiwic2hvdyIsImVtcHR5IiwiYXBwZW5kIiwicmVtb3ZlIiwiaHRtbCIsInBvcG92ZXIiLCJibHVyIiwiaWQiLCJwcm9wIiwibWF0Y2giLCJldmVudCIsInZhbCIsImluaXQiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwibSIsImV4ZWMiLCJyZXNwb25zZVRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakI7O0FBRUFBLG1CQUFPLENBQUMsZ0VBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxpR0FBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLHlKQUFELENBQVA7O0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUdELG1CQUFPLENBQUMsOEZBQUQsQ0FBakM7O0FBQ0FBLG1CQUFPLENBQUMsb0RBQUQsQ0FBUDs7QUFFQUUsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxNQUFqQixHQUEwQixZQUFZO0FBQUEsb0JBQ1YsS0FBS0MsS0FBTCxDQUFXLEdBQVgsQ0FEVTtBQUFBO0FBQUEsTUFDOUJDLEdBRDhCO0FBQUEsTUFDekJDLEtBRHlCO0FBQUEsTUFDbEJDLElBRGtCOztBQUVyQ0MsR0FBQyxHQUFHLElBQUlDLElBQUosQ0FBU0YsSUFBVCxFQUFlRCxLQUFLLEdBQUcsQ0FBdkIsRUFBMEJELEdBQTFCLENBQUo7QUFDQSxTQUFRRyxDQUFDLFlBQVlDLElBQWIsSUFBcUJDLEtBQUssQ0FBQ0YsQ0FBRCxDQUFMLEtBQWEsS0FBbkMsR0FBMENBLENBQTFDLEdBQTRDLElBQW5EO0FBQ0EsQ0FKRDs7QUFNQUMsSUFBSSxDQUFDUCxTQUFMLENBQWVTLE9BQWYsR0FBeUIsVUFBU0MsSUFBVCxFQUFlO0FBQ3BDLE1BQUlDLElBQUksR0FBRyxJQUFJSixJQUFKLENBQVMsS0FBS0ssT0FBTCxFQUFULENBQVg7QUFDQUQsTUFBSSxDQUFDRSxPQUFMLENBQWFGLElBQUksQ0FBQ0csT0FBTCxLQUFpQkosSUFBOUI7QUFDQSxTQUFPQyxJQUFQO0FBQ0gsQ0FKRDs7QUFNQWYsQ0FBQyxDQUFDbUIsRUFBRixDQUFLQyxLQUFMLEdBQWEsWUFBWTtBQUN4QixTQUFPLEtBQUtDLE1BQUwsS0FBZ0IsQ0FBaEIsSUFBcUIsSUFBNUI7QUFDQSxDQUZEOztBQUlBQyxNQUFNLENBQUNDLE1BQVAsR0FBZ0I7QUFDZkMsS0FBRyxFQUFFLGVBQVc7QUFDZixXQUFPeEIsQ0FBQyxDQUFDeUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQUQsQ0FBUjtBQUdBLEdBTGM7QUFPZkMsR0FBQyxFQUFFLGFBQVc7QUFDYixXQUFPM0IsQ0FBQyxDQUFDeUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQUQsQ0FBUixDQURhLENBRVo7QUFDRCxHQVZjO0FBWWZFLE1BQUksRUFBRSxnQkFBVztBQUNoQixXQUFPNUIsQ0FBQyxDQUFDeUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQUQsQ0FBUjtBQUVBLEdBZmM7QUFpQmZHLFVBQVEsRUFBRSxvQkFBVztBQUNwQixXQUFPN0IsQ0FBQyxDQUFDeUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQUQsQ0FBUjtBQUVBLEdBcEJjO0FBc0JmSSxPQUFLLEVBQUUsaUJBQVc7QUFDakIsV0FBTzlCLENBQUMsQ0FBQ3lCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFELENBQUQsQ0FDTEssSUFESyxDQUNBLE1BREEsRUFDUSxNQURSLEVBRUxDLFFBRkssQ0FFSSw4QkFGSixDQUFQO0FBSUEsR0EzQmM7QUE2QmZDLFVBQVEsRUFBRSxvQkFBVztBQUNwQixXQUFPakMsQ0FBQyxDQUFDeUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQUQsQ0FBRCxDQUNMSyxJQURLLENBQ0EsTUFEQSxFQUNRLFVBRFIsRUFFTEMsUUFGSyxDQUVJLHNCQUZKLENBQVA7QUFJQSxHQWxDYztBQW9DZkUsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLFdBQU9sQyxDQUFDLENBQUN5QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBRCxDQUFELENBQ0xNLFFBREssQ0FDSSw4QkFESixDQUFQO0FBR0EsR0F4Q2M7QUEwQ2ZHLFFBQU0sRUFBRSxrQkFBVztBQUNsQixXQUFPbkMsQ0FBQyxDQUFDeUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQUQsQ0FBRCxDQUNMSyxJQURLLENBQ0EsT0FEQSxFQUNTLEVBRFQsQ0FBUDtBQUdBLEdBOUNjO0FBZ0RmSyxPQUFLLEVBQUUsaUJBQVc7QUFDakIsV0FBT3BDLENBQUMsQ0FBQ3lCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFELENBQUQsQ0FDTE0sUUFESyxDQUNJLHdDQURKLENBQVA7QUFHQSxHQXBEYztBQXNEZkssUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLFdBQU9yQyxDQUFDLENBQUN5QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBRCxDQUFELENBQ0xLLElBREssQ0FDQSxNQURBLEVBQ1EsUUFEUixFQUVMQyxRQUZLLENBRUksS0FGSixDQUFQO0FBSUEsR0EzRGM7QUE2RGZNLFlBQVUsRUFBRSxzQkFBVztBQUN0QixXQUFPdEMsQ0FBQyxDQUFDeUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQUQsQ0FBRCxDQUNMSyxJQURLLENBQ0EsTUFEQSxFQUNRLFFBRFIsRUFFTEMsUUFGSyxDQUVJLDhDQUZKLENBQVA7QUFJQSxHQWxFYztBQW9FZk8sYUFBVyxFQUFFLHVCQUFXO0FBQ3ZCLFdBQU92QyxDQUFDLENBQUN5QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBRCxDQUFELENBQ0xLLElBREssQ0FDQSxNQURBLEVBQ1EsUUFEUixFQUVMQyxRQUZLLENBRUksNkJBRkosQ0FBUDtBQUlBLEdBekVjO0FBMkVmUSxJQUFFLEVBQUUsY0FBVztBQUNkLFdBQU94QyxDQUFDLENBQUN5QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBRCxDQUFSO0FBR0EsR0EvRWM7QUFpRmZlLElBQUUsRUFBRSxjQUFXO0FBQ2QsV0FBT3pDLENBQUMsQ0FBQ3lCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFELENBQVI7QUFHQSxHQXJGYztBQXVGZmdCLElBQUUsRUFBRSxjQUFXO0FBQ2QsV0FBTzFDLENBQUMsQ0FBQ3lCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFELENBQVI7QUFHQSxHQTNGYztBQTZGZmlCLElBQUUsRUFBRSxjQUFXO0FBQ2QsV0FBTzNDLENBQUMsQ0FBQ3lCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFELENBQVI7QUFHQTtBQWpHYyxDQUFoQjtBQXFHQUosTUFBTSxDQUFDc0IsSUFBUCxHQUFjO0FBQ1ZDLGNBQVksRUFBRSxlQURKO0FBRVZDLG1CQUFpQixFQUFFLElBRlQ7QUFHVkMsV0FBUyxFQUFFLFlBSEQ7QUFJVkMsZUFBYSxFQUFFLEtBSkw7QUFLVkMsUUFBTSxFQUFFLFFBTEU7QUFNVkMsU0FBTyxFQUFFLFlBTkM7QUFPVkMsU0FBTyxFQUFFLFNBUEM7QUFRVkMsT0FBSyxFQUFFLE9BUkc7QUFTVkMsUUFBTSxFQUFFLFVBVEU7QUFVVkMsTUFBSSxFQUFFLE1BVkk7QUFXVixZQUFRLFFBWEU7QUFZVkMsT0FBSyxFQUFFLE9BWkc7QUFhVkMsS0FBRyxFQUFFLEtBYks7QUFjVkMsVUFBUSxFQUFFLFdBZEE7QUFlVnBELFFBQU0sRUFBRSxTQWZFO0FBZ0JWcUQsV0FBUyxFQUFFO0FBaEJELENBQWQ7QUFtQkFwQyxNQUFNLENBQUNxQyxJQUFQLEdBQWM7QUFDYkMsU0FBTyxFQUNOLHlJQUNDLHFLQURELEdBRUMsOEtBRkQsR0FHQSxRQUxZO0FBT2JDLFdBQVMsRUFDUCwySUFDRyx3S0FESCxHQUVHLHFLQUZILEdBR0EsUUFYVztBQWFiQyxRQUFNLEVBQ0osbUlBQ0MsMFNBREQsR0FFQSxRQWhCVztBQWtCYkMsWUFBVSxFQUNSLHdJQUNDLG9EQURELEdBRUMsMFNBRkQsR0FHQSxRQXRCVztBQXdCYkMsU0FBTyxFQUNMLGtKQUNDLDZQQURELEdBRUEsUUEzQlc7QUE2QmJDLFNBQU8sRUFDTCxpSkFDQyx5VkFERCxHQUVBLFFBaENXO0FBa0NiQyxRQUFNLEVBQ0osd0pBQ0Msb09BREQsR0FFQSxRQXJDVztBQXVDYmhCLFNBQU8sRUFDTixxREFDQyw0Q0FERCxHQUVFLHdCQUZGLEdBRTZCTixJQUFJLENBQUNNLE9BRmxDLEdBRTRDLFNBRjVDLEdBR0MsUUFIRCxHQUlBLFFBNUNZO0FBOENiSyxPQUFLLEVBQ0QsMkZBQTJGWCxJQUFJLENBQUNXLEtBQWhHLEdBQXdHLEdBQXhHLEdBQ0MseUNBREQsR0FFQTtBQWpEUyxDQUFkO0FBcURBakMsTUFBTSxDQUFDNkMsSUFBUCxHQUFjO0FBRWJDLE9BQUssRUFBRSxlQUFTQyxTQUFULEVBQW9CO0FBRTFCLFFBQUlDLElBQUksR0FBRyxJQUFYO0FBRUF0RSxLQUFDLENBQUNxRSxTQUFELENBQUQsQ0FBYUUsSUFBYixDQUFrQixxREFBbEIsRUFBeUVDLEdBQXpFLENBQTZFLGlCQUE3RSxFQUFnR0MsSUFBaEcsQ0FBcUcsWUFBVztBQUUvR3pFLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTBFLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFVBQVNDLENBQVQsRUFBWTtBQUUvQixZQUFJM0UsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEUsTUFBUixHQUFpQkMsR0FBakIsQ0FBcUIsU0FBckIsQ0FBSixFQUFxQztBQUNwQzdFLFdBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRFLE1BQVIsR0FBaUJMLElBQWpCLENBQXNCLFNBQXRCLEVBQWlDTyxXQUFqQyxDQUE2QyxRQUE3QztBQUNBOUUsV0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0MsUUFBUixDQUFpQixRQUFqQjtBQUNBOztBQUVELFlBQUkrQyxHQUFHLEdBQUcvRSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnRixJQUFSLENBQWEsS0FBYixDQUFWO0FBQ0EsWUFBSUMsTUFBTSxHQUFHakYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0YsSUFBUixDQUFhLFFBQWIsS0FBMEIsSUFBdkM7QUFFQVYsWUFBSSxDQUFDWSxHQUFMLENBQVNELE1BQVQsRUFBaUJGLEdBQWpCLEVBQXNCO0FBQUNJLGNBQUksRUFBRTtBQUFQLFNBQXRCO0FBQ0EsZUFBTyxLQUFQO0FBQ0EsT0FaRDs7QUFjQSxVQUFJbkYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0YsUUFBUixDQUFpQixRQUFqQixDQUFKLEVBQWdDO0FBQy9CcEYsU0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUYsT0FBUixDQUFnQixPQUFoQjtBQUNBO0FBRUQsS0FwQkQ7QUFzQkFyRixLQUFDLENBQUNxRSxTQUFELENBQUQsQ0FBYUUsSUFBYixDQUFrQixxREFBbEIsRUFBeUV0QixNQUF6RSxDQUFnRixpQkFBaEYsRUFBbUd3QixJQUFuRyxDQUF3RyxZQUFXO0FBRWxILFVBQUksQ0FBQ2EsS0FBSyxHQUFHdEYsQ0FBQyxDQUFDLE1BQU1BLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUStCLElBQVIsQ0FBYSxNQUFiLENBQVAsQ0FBVixNQUE0QyxLQUFoRCxFQUF1RDtBQUN0RCxlQUFPLEtBQVA7QUFDQTs7QUFFRHVELFdBQUssQ0FBQ1osRUFBTixDQUFTLFFBQVQsRUFBbUIsVUFBU0MsQ0FBVCxFQUFZO0FBQzlCLGVBQU8sS0FBUDtBQUNBLE9BRkQ7QUFJQTNFLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTBFLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFVBQVNDLENBQVQsRUFBWTtBQUUvQixZQUFJSSxHQUFHLEdBQUcvRSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnRixJQUFSLENBQWEsS0FBYixDQUFWO0FBQ0EsWUFBSUMsTUFBTSxHQUFHakYsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0YsSUFBUixDQUFhLFFBQWIsS0FBMEIsSUFBdkM7O0FBRUEsWUFBSU0sS0FBSyxDQUFDZixJQUFOLENBQVcsb0JBQVgsRUFBaUNuRCxLQUFqQyxFQUFKLEVBQThDO0FBQzdDLGNBQUltRSxNQUFNLEdBQUcsTUFBYjtBQUNBLGNBQUlQLElBQUksR0FBRyxJQUFJUSxRQUFKLENBQWFGLEtBQUssQ0FBQ0csR0FBTixDQUFVLENBQVYsQ0FBYixDQUFYO0FBQ0EsU0FIRCxNQUdPO0FBQ04sY0FBSUYsTUFBTSxHQUFHRCxLQUFLLENBQUN2RCxJQUFOLENBQVcsUUFBWCxLQUF3QixLQUFyQztBQUNBLGNBQUlpRCxJQUFJLEdBQUdNLEtBQUssQ0FBQ0ksY0FBTixFQUFYO0FBQ0E7O0FBRURwQixZQUFJLENBQUNZLEdBQUwsQ0FBU0QsTUFBVCxFQUFpQkYsR0FBakIsRUFBc0I7QUFBQ1EsZ0JBQU0sRUFBRUEsTUFBVDtBQUFpQkosY0FBSSxFQUFFLElBQXZCO0FBQTZCSCxjQUFJLEVBQUVBO0FBQW5DLFNBQXRCO0FBQ0EsZUFBTyxLQUFQO0FBRUEsT0FoQkQ7O0FBa0JBLFVBQUloRixDQUFDLENBQUMsSUFBRCxDQUFELENBQVFvRixRQUFSLENBQWlCLFFBQWpCLENBQUosRUFBZ0M7QUFDL0JwRixTQUFDLENBQUMsSUFBRCxDQUFELENBQVFxRixPQUFSLENBQWdCLE9BQWhCO0FBQ0E7QUFFRCxLQWhDRDtBQWtDQXJGLEtBQUMsQ0FBQ3FFLFNBQUQsQ0FBRCxDQUFhRSxJQUFiLENBQWtCLDBCQUFsQixFQUE4Q0UsSUFBOUMsQ0FBbUQsVUFBU0UsQ0FBVCxFQUFZO0FBQzlELFVBQUlNLE1BQU0sR0FBR2pGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdGLElBQVIsQ0FBYSxRQUFiLEtBQTBCLElBQXZDO0FBQ0EsVUFBSUQsR0FBRyxHQUFHL0UsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0YsSUFBUixDQUFhLEtBQWIsQ0FBVjtBQUVBVixVQUFJLENBQUNZLEdBQUwsQ0FBU0QsTUFBVCxFQUFpQkYsR0FBakIsRUFBc0I7QUFBQ0ksWUFBSSxFQUFFO0FBQVAsT0FBdEI7QUFDQSxLQUxEO0FBT0EsR0FyRVk7QUF1RWJELEtBQUcsRUFBRSxhQUFVRCxNQUFWLEVBQWtCRixHQUFsQixFQUFxQztBQUFBLFFBQWRZLE9BQWMsdUVBQUosRUFBSTs7QUFFekMsUUFBSVYsTUFBTSxJQUFJRixHQUFkLEVBQW1CO0FBRWxCLFVBQUlZLE9BQU8sQ0FBQ0MsS0FBUixLQUFrQixJQUFsQixJQUEyQkQsT0FBTyxDQUFDUixJQUFSLElBQWdCbkYsQ0FBQyxDQUFDMkYsT0FBTyxDQUFDUixJQUFULENBQUQsQ0FBZ0JVLEVBQWhCLENBQW1CLHdCQUFuQixDQUEvQyxFQUE4RjtBQUM3RixZQUFJN0YsQ0FBQyxDQUFDaUYsTUFBRCxDQUFELENBQVVZLEVBQVYsQ0FBYSxRQUFiLENBQUosRUFBNEI7QUFDM0I3RixXQUFDLENBQUNpRixNQUFELENBQUQsQ0FBVVcsS0FBVixDQUFnQixNQUFoQjtBQUNBLFNBRkQsTUFFTztBQUNONUYsV0FBQyxDQUFDaUYsTUFBRCxDQUFELENBQVVhLE9BQVYsQ0FBa0IsUUFBbEIsRUFBNEJGLEtBQTVCLENBQWtDLE1BQWxDO0FBQ0E7QUFDRDs7QUFFRCxVQUFJTCxNQUFNLEdBQUdJLE9BQU8sQ0FBQ0osTUFBUixJQUFrQixLQUEvQjtBQUNBLFVBQUlQLElBQUksR0FBR1csT0FBTyxDQUFDWCxJQUFSLElBQWdCLEVBQTNCO0FBRUEsVUFBSVYsSUFBSSxHQUFHLElBQVg7QUFDQXRFLE9BQUMsQ0FBQ21FLElBQUYsQ0FBTztBQUNOWSxXQUFHLEVBQUdBLEdBREE7QUFFTmdCLFlBQUksRUFBRVIsTUFGQTtBQUdOUCxZQUFJLEVBQUVBLElBSEE7QUFJTmdCLG1CQUFXLEVBQUdoQixJQUFJLENBQUNpQixXQUFMLEtBQXFCVCxRQUF0QixHQUFnQyxLQUFoQyxHQUFzQyxrREFKN0M7QUFLTlUsbUJBQVcsRUFBR2xCLElBQUksQ0FBQ2lCLFdBQUwsS0FBcUJULFFBTDdCO0FBT05XLGtCQUFVLEVBQUUsb0JBQVNDLEtBQVQsRUFBZ0JDLFFBQWhCLEVBQTBCO0FBQ3JDRCxlQUFLLENBQUNDLFFBQU4sR0FBaUJBLFFBQWpCO0FBQ0FELGVBQUssQ0FBQ2pCLElBQU4sR0FBYW5GLENBQUMsQ0FBQzJGLE9BQU8sQ0FBQ1IsSUFBVCxDQUFkO0FBQ0FuRixXQUFDLENBQUNpRixNQUFELENBQUQsQ0FBVUksT0FBVixDQUFrQixpQkFBbEIsRUFBcUMsQ0FBQ2UsS0FBRCxFQUFRQyxRQUFSLENBQXJDO0FBQ0EsU0FYSztBQWFOckMsZUFBTyxFQUFFLGlCQUFTc0MsTUFBVCxFQUFpQkMsVUFBakIsRUFBNkJILEtBQTdCLEVBQW9DO0FBQzVDQSxlQUFLLENBQUNqQixJQUFOLEdBQWFuRixDQUFDLENBQUMyRixPQUFPLENBQUNSLElBQVQsQ0FBZDtBQUNBbkYsV0FBQyxDQUFDaUYsTUFBRCxDQUFELENBQVVJLE9BQVYsQ0FBa0IsY0FBbEIsRUFBa0MsQ0FBQ2lCLE1BQUQsRUFBU0MsVUFBVCxFQUFxQkgsS0FBckIsQ0FBbEM7QUFDQXBHLFdBQUMsQ0FBQ2lGLE1BQUQsQ0FBRCxDQUFVSSxPQUFWLENBQWtCLGdCQUFsQixFQUFvQyxDQUFDaUIsTUFBRCxFQUFTQyxVQUFULEVBQXFCSCxLQUFyQixDQUFwQztBQUNBLFNBakJLO0FBbUJOaEQsYUFBSyxFQUFFLGVBQVNnRCxLQUFULEVBQWdCRyxVQUFoQixFQUE0QkMsV0FBNUIsRUFBeUM7QUFDL0NKLGVBQUssQ0FBQ2pCLElBQU4sR0FBYW5GLENBQUMsQ0FBQzJGLE9BQU8sQ0FBQ1IsSUFBVCxDQUFkO0FBQ0FuRixXQUFDLENBQUNpRixNQUFELENBQUQsQ0FBVUksT0FBVixDQUFrQixZQUFsQixFQUFnQyxDQUFDZSxLQUFELEVBQVFHLFVBQVIsRUFBb0JDLFdBQXBCLENBQWhDO0FBQ0E7QUF0QkssT0FBUDtBQXdCQTtBQUVEO0FBakhZLENBQWQ7QUFvSEF4RyxDQUFDLENBQUN5QixRQUFELENBQUQsQ0FBWWdGLEtBQVosQ0FBa0IsWUFBVztBQUU1QjtBQUNBO0FBQ0E7QUFFQXpHLEdBQUMsQ0FBQ21CLEVBQUYsQ0FBS3VGLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCQyxNQUF6QixHQUFrQyxZQUFsQztBQUNBNUcsR0FBQyxDQUFDbUIsRUFBRixDQUFLdUYsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUJFLFNBQXpCLEdBQXFDLENBQXJDO0FBQ0E3RyxHQUFDLENBQUNtQixFQUFGLENBQUt1RixVQUFMLENBQWdCQyxRQUFoQixDQUF5QkcsV0FBekIsR0FBdUMsQ0FBdkM7QUFDQTlHLEdBQUMsQ0FBQ21CLEVBQUYsQ0FBS3VGLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCSSxRQUF6QixHQUFvQy9HLENBQUMsQ0FBQ3lCLFFBQVEsQ0FBQ3VGLElBQVYsQ0FBRCxDQUFpQmhDLElBQWpCLENBQXNCLFFBQXRCLEVBQWdDaUMsT0FBaEMsQ0FBd0MsR0FBeEMsRUFBNkMsR0FBN0MsQ0FBcEM7QUFDQWpILEdBQUMsQ0FBQ21CLEVBQUYsQ0FBS3VGLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCTyxTQUF6QixHQUFxQyxLQUFyQztBQUNBbEgsR0FBQyxDQUFDbUIsRUFBRixDQUFLdUYsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUJRLGtCQUF6QixHQUE4QyxLQUE5QztBQUNBbkgsR0FBQyxDQUFDbUIsRUFBRixDQUFLdUYsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUJTLFNBQXpCLEdBQXFDLElBQXJDO0FBQ0FwSCxHQUFDLENBQUNtQixFQUFGLENBQUt1RixVQUFMLENBQWdCQyxRQUFoQixDQUF5QlUsYUFBekIsR0FBeUMsSUFBekM7QUFDQXJILEdBQUMsQ0FBQ21CLEVBQUYsQ0FBS3VGLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCVyxRQUF6QixHQUFvQyxJQUFwQztBQUNBdEgsR0FBQyxDQUFDbUIsRUFBRixDQUFLdUYsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUJZLFFBQXpCLEdBQW9DLElBQXBDO0FBQ0F2SCxHQUFDLENBQUNtQixFQUFGLENBQUt1RixVQUFMLENBQWdCQyxRQUFoQixDQUF5QmEsY0FBekIsR0FBMEMsSUFBMUM7QUFJR3hILEdBQUMsQ0FBQ3lCLFFBQUQsQ0FBRCxDQUFZaUQsRUFBWixDQUFlLGlCQUFmLEVBQWtDLFVBQVNDLENBQVQsRUFBWXlCLEtBQVosRUFBbUJDLFFBQW5CLEVBQTZCO0FBQzlEckcsS0FBQyxDQUFDMkUsQ0FBQyxDQUFDTSxNQUFILENBQUQsQ0FDRHdDLElBREMsR0FFREMsS0FGQyxHQUdEQyxNQUhDLENBR01oRSxJQUFJLENBQUNULE9BSFg7QUFLQSxHQU5EO0FBUUFsRCxHQUFDLENBQUN5QixRQUFELENBQUQsQ0FBWWlELEVBQVosQ0FBZSxjQUFmLEVBQStCLFVBQVNDLENBQVQsRUFBWTJCLE1BQVosRUFBb0JDLFVBQXBCLEVBQWdDSCxLQUFoQyxFQUF1QztBQUV4RXBHLEtBQUMsQ0FBQzJFLENBQUMsQ0FBQ00sTUFBSCxDQUFELENBQVlWLElBQVosQ0FBaUIsaUJBQWpCLEVBQW9DSyxNQUFwQyxHQUE2Q2dELE1BQTdDOztBQUNBLFFBQUl0QixNQUFKLEVBQVk7QUFDWHRHLE9BQUMsQ0FBQzJFLENBQUMsQ0FBQ00sTUFBSCxDQUFELENBQVk0QyxJQUFaLENBQWlCN0gsQ0FBQyxDQUFDMkUsQ0FBQyxDQUFDTSxNQUFILENBQUQsQ0FBWTRDLElBQVosS0FBcUJ2QixNQUF0QztBQUNBLEtBTHVFLENBT3hFO0FBQ0E7QUFDQTs7O0FBRUF0RyxLQUFDLENBQUMyRSxDQUFDLENBQUNNLE1BQUgsQ0FBRCxDQUFZVixJQUFaLENBQWlCLHlCQUFqQixFQUE0Q3VELE9BQTVDLEdBWHdFLENBYXhFO0FBQ0E7QUFDQTs7QUFFR3hHLFVBQU0sQ0FBQzZDLElBQVAsQ0FBWUMsS0FBWixDQUFrQk8sQ0FBQyxDQUFDTSxNQUFwQixFQWpCcUUsQ0FtQnhFO0FBQ0E7QUFDQTs7QUFFQWpGLEtBQUMsQ0FBQzJFLENBQUMsQ0FBQ00sTUFBSCxDQUFELENBQVlQLEVBQVosQ0FBZSxvQkFBZixFQUFxQyxZQUFXO0FBQy9DMUUsT0FBQyxDQUFDLHFDQUFxQ0EsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0IsSUFBUixDQUFhLElBQWIsQ0FBckMsR0FBMEQsSUFBM0QsQ0FBRCxDQUNFK0MsV0FERixDQUNjLFFBRGQsRUFFRWlELElBRkY7QUFJQSxLQUxEO0FBT0EvSCxLQUFDLENBQUMyRSxDQUFDLENBQUNNLE1BQUgsQ0FBRCxDQUFZUCxFQUFaLENBQWUsaUJBQWYsRUFBa0MsWUFBVztBQUM1QzFFLE9BQUMsQ0FBQyx1QkFBRCxDQUFELENBQTJCK0gsSUFBM0I7QUFDQSxLQUZEO0FBSUEvSCxLQUFDLENBQUMyRSxDQUFDLENBQUNNLE1BQUgsQ0FBRCxDQUFZVixJQUFaLENBQWlCLHNCQUFqQixFQUF5Q0csRUFBekMsQ0FBNEMsT0FBNUMsRUFBcUQsWUFBVztBQUMvRDFFLE9BQUMsQ0FBQyxRQUFELENBQUQsQ0FBWTRGLEtBQVosQ0FBa0IsTUFBbEI7QUFDQSxLQUZELEVBbEN3RSxDQXNDeEU7QUFDQTtBQUNBOztBQUVBNUYsS0FBQyxDQUFDMkUsQ0FBQyxDQUFDTSxNQUFILENBQUQsQ0FBWVYsSUFBWixDQUFpQixhQUFqQixFQUFnQ0UsSUFBaEMsQ0FBcUMsWUFBVztBQUMvQ3pFLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTBHLFVBQVIsQ0FBbUI7QUFBQyxrQkFBVTFHLENBQUMsQ0FBQ21CLEVBQUYsQ0FBS3VGLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCQztBQUFwQyxPQUFuQjtBQUNBLEtBRkQsRUExQ3dFLENBK0N4RTtBQUNBO0FBQ0E7O0FBRUE1RyxLQUFDLENBQUMyRSxDQUFDLENBQUNNLE1BQUgsQ0FBRCxDQUFZVixJQUFaLENBQWlCLHFCQUFqQixFQUF3Q0UsSUFBeEMsQ0FBNkMsWUFBVztBQUV2RCxVQUFJdUQsRUFBSjs7QUFDQSxVQUFJQSxFQUFFLEdBQUdoSSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFpSSxJQUFSLENBQWEsTUFBYixFQUFxQkMsS0FBckIscUNBQVQsRUFBeUQ7QUFFeERsSSxTQUFDLENBQUMsSUFBRCxDQUFELENBQVEwRSxFQUFSLENBQVcsT0FBWCxFQUFvQixVQUFTeUQsS0FBVCxFQUFnQjtBQUVuQyxjQUFJbkksQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0ksR0FBUixNQUFpQixDQUFyQixFQUF3QjtBQUV2QnBJLGFBQUMsQ0FBQyxXQUFXZ0ksRUFBRSxDQUFDLENBQUQsQ0FBYixHQUFtQixJQUFwQixDQUFELENBQTJCeEQsR0FBM0IsQ0FBK0Isa0JBQS9CLEVBQW1EQyxJQUFuRCxDQUF3RCxZQUFXO0FBQ2xFLGtCQUFJekUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0YsUUFBUixDQUFpQixZQUFqQixDQUFKLEVBQW9DO0FBQ25DcEYsaUJBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTBHLFVBQVIsQ0FBbUIsU0FBbkIsRUFBOEIsSUFBSS9GLElBQUosRUFBOUI7QUFDQSxlQUZELE1BRU8sSUFBSVgsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0IsSUFBUixDQUFhLE1BQWIsS0FBd0IsT0FBNUIsRUFBcUM7QUFDM0MvQixpQkFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUksSUFBUixDQUFhLFNBQWIsRUFBd0IsS0FBeEI7QUFDQSxlQUZNLE1BRUEsSUFBSWpJLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUStCLElBQVIsQ0FBYSxNQUFiLEtBQXdCLFVBQTVCLEVBQXdDO0FBQzlDL0IsaUJBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWlJLElBQVIsQ0FBYSxTQUFiLEVBQXdCLEtBQXhCO0FBQ0FqSSxpQkFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUksSUFBUixDQUFhLGVBQWIsRUFBOEIsS0FBOUI7QUFDQSxlQUhNLE1BR0EsSUFBSWpJLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUStCLElBQVIsQ0FBYSxNQUFiLEtBQXdCLE1BQXhCLElBQWtDL0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNkYsRUFBUixDQUFXLFFBQVgsQ0FBdEMsRUFBNEQ7QUFDbEU3RixpQkFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRb0ksR0FBUixDQUFZLElBQVo7QUFDQSxlQUZNLE1BRUE7QUFDTjtBQUNBOztBQUNEcEksZUFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0IsSUFBUixDQUFhLFVBQWIsRUFBeUIsS0FBekI7QUFDQS9CLGVBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUStCLElBQVIsQ0FBYSxVQUFiLEVBQXlCL0IsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0YsSUFBUixDQUFhLFVBQWIsQ0FBekI7QUFDQSxhQWZEO0FBaUJBLFdBbkJELE1BbUJPO0FBRU5oRixhQUFDLENBQUMsV0FBV2dJLEVBQUUsQ0FBQyxDQUFELENBQWIsR0FBbUIsSUFBcEIsQ0FBRCxDQUEyQnhELEdBQTNCLENBQStCLGtCQUEvQixFQUFtREMsSUFBbkQsQ0FBd0QsWUFBVztBQUNsRSxrQkFBSXpFLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9GLFFBQVIsQ0FBaUIsWUFBakIsQ0FBSixFQUFvQztBQUNuQ3BGLGlCQUFDLENBQUMsSUFBRCxDQUFELENBQVEwRyxVQUFSLENBQW1CLFNBQW5CLEVBQThCLElBQTlCO0FBQ0EsZUFGRCxNQUVPLElBQUkxRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVErQixJQUFSLENBQWEsTUFBYixLQUF3QixPQUE1QixFQUFxQztBQUMzQy9CLGlCQUFDLENBQUMsSUFBRCxDQUFELENBQVFpSSxJQUFSLENBQWEsU0FBYixFQUF3QixLQUF4QjtBQUNBLGVBRk0sTUFFQSxJQUFJakksQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0IsSUFBUixDQUFhLE1BQWIsS0FBd0IsVUFBNUIsRUFBd0M7QUFDOUMvQixpQkFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRaUksSUFBUixDQUFhLFNBQWIsRUFBd0IsS0FBeEI7QUFDQWpJLGlCQUFDLENBQUMsSUFBRCxDQUFELENBQVFpSSxJQUFSLENBQWEsZUFBYixFQUE4QixJQUE5QjtBQUNBLGVBSE0sTUFHQSxJQUFJakksQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0IsSUFBUixDQUFhLE1BQWIsS0FBd0IsTUFBeEIsSUFBa0MvQixDQUFDLENBQUMsSUFBRCxDQUFELENBQVE2RixFQUFSLENBQVcsUUFBWCxDQUF0QyxFQUE0RDtBQUNsRTdGLGlCQUFDLENBQUMsSUFBRCxDQUFELENBQVFvSSxHQUFSLENBQVksSUFBWjtBQUNBLGVBRk0sTUFFQTtBQUNOO0FBQ0E7O0FBQ0RwSSxlQUFDLENBQUMsSUFBRCxDQUFELENBQVErQixJQUFSLENBQWEsVUFBYixFQUF5QixJQUF6QjtBQUNBL0IsZUFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRK0IsSUFBUixDQUFhLFVBQWIsRUFBeUIsS0FBekI7QUFDQSxhQWZEO0FBaUJBOztBQUVEL0IsV0FBQyxDQUFDLE1BQU1nSSxFQUFFLENBQUMsQ0FBRCxDQUFSLEdBQWMsV0FBZixDQUFELENBQTZCSSxHQUE3QixDQUFpQ3BJLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUW9JLEdBQVIsRUFBakM7QUFDQSxTQTNDRDtBQTRDQTtBQUNELEtBbEREO0FBb0RBcEksS0FBQyxDQUFDMkUsQ0FBQyxDQUFDTSxNQUFILENBQUQsQ0FBWVYsSUFBWixDQUFpQixNQUFqQixFQUF5QkEsSUFBekIsQ0FBOEIsb0JBQTlCLEVBQW9ERSxJQUFwRCxDQUF5RCxZQUFZO0FBRXBFLFVBQUl6RSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnRixJQUFSLENBQWEsVUFBYixDQUFKLEVBQThCO0FBQzdCaEYsU0FBQyxDQUFDLFlBQVlBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWlJLElBQVIsQ0FBYSxJQUFiLENBQVosR0FBaUMsYUFBbEMsQ0FBRCxDQUFrRGhGLE1BQWxELENBQXlELFdBQXpELEVBQXNFb0MsT0FBdEUsQ0FBOEUsT0FBOUU7QUFDQSxPQUZELE1BRU87QUFDTnJGLFNBQUMsQ0FBQyxZQUFZQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFpSSxJQUFSLENBQWEsSUFBYixDQUFaLEdBQWlDLGFBQWxDLENBQUQsQ0FBa0RoRixNQUFsRCxDQUF5RCxXQUF6RCxFQUFzRW9DLE9BQXRFLENBQThFLE9BQTlFO0FBQ0E7QUFFRCxLQVJELEVBdkd3RSxDQWtIeEU7QUFDQTtBQUNBOztBQUVBbkYscUJBQWlCLENBQUNtSSxJQUFsQjtBQUNHLEdBdkhEO0FBeUhBckksR0FBQyxDQUFDeUIsUUFBRCxDQUFELENBQVlpRCxFQUFaLENBQWUsWUFBZixFQUE2QixVQUFTQyxDQUFULEVBQVl5QixLQUFaLEVBQW1CRyxVQUFuQixFQUErQkMsV0FBL0IsRUFBNEM7QUFFeEUsUUFBSUYsTUFBTSxHQUFHLHFDQUNaLDZDQURZLEdBQ29DMUQsSUFBSSxDQUFDUSxLQUR6QyxHQUNpRCxHQURqRCxHQUN1RGdELEtBQUssQ0FBQ2tDLE1BRDdELEdBQ3NFLEtBRHRFLEdBQzhFbEMsS0FBSyxDQUFDbUMsVUFEcEYsR0FDaUcsT0FEOUc7O0FBR0gsUUFBSSxDQUFDQyxDQUFDLEdBQUcsdUJBQXVCQyxJQUF2QixDQUE0QnJDLEtBQUssQ0FBQ3NDLFlBQWxDLENBQUwsTUFBMEQsSUFBOUQsRUFBb0U7QUFDbkVwQyxZQUFNLElBQUksUUFBUWtDLENBQUMsQ0FBQyxDQUFELENBQVQsR0FBZSxNQUF6QjtBQUNBOztBQUVEbEMsVUFBTSxJQUFJLDJEQUEyRDFELElBQUksQ0FBQ1MsTUFBaEUsR0FBeUUsV0FBekUsR0FDUCxRQURIO0FBRUFyRCxLQUFDLENBQUMyRSxDQUFDLENBQUNNLE1BQUgsQ0FBRCxDQUFZNEMsSUFBWixDQUFpQnZCLE1BQWpCO0FBRUF0RyxLQUFDLENBQUMyRSxDQUFDLENBQUNNLE1BQUgsQ0FBRCxDQUFZVixJQUFaLENBQWlCLFFBQWpCLEVBQTJCRyxFQUEzQixDQUE4QixPQUE5QixFQUF1QyxZQUFXO0FBQ2pEcEQsWUFBTSxDQUFDNkMsSUFBUCxDQUFZZSxHQUFaLENBQWdCUCxDQUFDLENBQUNNLE1BQWxCLEVBQTBCbUIsS0FBSyxDQUFDQyxRQUFOLENBQWV0QixHQUF6QyxFQUE4QztBQUFDQyxZQUFJLEVBQUVvQixLQUFLLENBQUNDLFFBQU4sQ0FBZXJCO0FBQXRCLE9BQTlDO0FBQ0EsS0FGRDtBQUdHLEdBaEJEO0FBa0JBaEYsR0FBQyxDQUFDeUIsUUFBRCxDQUFELENBQVk0RCxPQUFaLENBQW9CLGNBQXBCO0FBRUgsQ0F6S0QsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG5yZXF1aXJlKCdib290c3RyYXAnKTtcclxucmVxdWlyZSgnYm9vdHN0cmFwLWRhdGVwaWNrZXInKTtcclxucmVxdWlyZSgnYm9vdHN0cmFwLWRhdGVwaWNrZXIvZGlzdC9sb2NhbGVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmZyLm1pbi5qcycpO1xyXG5jb25zdCBic0N1c3RvbUZpbGVJbnB1dCA9IHJlcXVpcmUoJ2JzLWN1c3RvbS1maWxlLWlucHV0Jyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9nbG9iYWwuc2NzcycpO1xyXG5cclxuU3RyaW5nLnByb3RvdHlwZS50b0RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgW2RheSwgbW9udGgsIHllYXJdID0gdGhpcy5zcGxpdChcIi1cIik7XHJcblx0ZCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcclxuXHRyZXR1cm4gKGQgaW5zdGFuY2VvZiBEYXRlICYmIGlzTmFOKGQpID09PSBmYWxzZSk/ZDpudWxsO1xyXG59O1xyXG5cclxuRGF0ZS5wcm90b3R5cGUuYWRkRGF5cyA9IGZ1bmN0aW9uKGRheXMpIHtcclxuICAgIHZhciBkYXRlID0gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpO1xyXG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGF5cyk7XHJcbiAgICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxuJC5mbi5leGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5sZW5ndGggIT09IDAgJiYgdGhpcztcclxufVxyXG5cclxuZ2xvYmFsLmNyZWF0ZSA9IHtcclxuXHRkaXY6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXHJcblxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpO1xyXG5cdFx0XHQvLy5hZGRDbGFzcygnYnRuIGJ0bi1zbSB0ZXh0LW5vd3JhcCcpXHJcblx0fSxcclxuXHRcclxuXHRzcGFuOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSlcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGZpZWxkc2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JykpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRpbnB1dDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICd0ZXh0JylcclxuXHRcdFx0LmFkZENsYXNzKCdmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGNoZWNrYm94OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JylcclxuXHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1pbnB1dCcpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRzZWxlY3Q6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JykpXHJcblx0XHRcdC5hZGRDbGFzcygnZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbScpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRvcHRpb246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJykpXHJcblx0XHRcdC5hdHRyKCd2YWx1ZScsICcnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0bGFiZWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSlcclxuXHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1sYWJlbCB3LTEwMCB0ZXh0LW5vd3JhcCcpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRidXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdG1lbnVCdXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSB0ZXh0LW5vd3JhcCByb3VuZGVkLTAnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0c21hbGxCdXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBteC0xIHRleHQtbm93cmFwJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRyOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHVsOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGxpOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG59O1xyXG5cclxuZ2xvYmFsLnRleHQgPSB7XHJcbiAgICBub25lU2VsZWN0ZWQ6ICdOb25lIHNlbGVjdGVkJyxcclxuICAgIG11bHRpcGxlU2VwYXJhdG9yOiAnLCAnLFxyXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0IGFsbCcsXHJcbiAgICBub3RBcHBsaWNhYmxlOiAnbi9hJyxcclxuICAgIGZpbHRlcjogJ0ZpbHRlcicsXHJcbiAgICBsb2FkaW5nOiAnTG9hZGluZy4uLicsXHJcbiAgICBkZXRhaWxzOiAnRGV0YWlscycsXHJcbiAgICBlcnJvcjogJ0VyZXVyJyxcclxuICAgIHJlbG9hZDogJ1JlbGFuY2VyJyxcclxuICAgIGVkaXQ6ICdFZGl0JyxcclxuICAgIGRlbGV0ZTogJ0RlbGV0ZScsXHJcbiAgICBjbG9zZTogJ0Nsb3NlJyxcclxuICAgIGFsbDogJ0FsbCcsXHJcbiAgICBmcm9tRGF0ZTogJ0Zyb20gZGF0ZScsXHJcbiAgICB0b0RhdGU6ICdUbyBkYXRlJyxcclxuICAgIGhpZ2hsaWdodDogJ0hpZ2hsaWdodCcsXHJcbn07XHJcblxyXG5nbG9iYWwuaWNvbiA9IHtcclxuXHRhcnJvd1VwOlxyXG5cdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1hcnJvdy1iYXItdXBcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuMzU0IDUuODU0YS41LjUgMCAwMDAtLjcwOGwtMy0zYS41LjUgMCAwMC0uNzA4IDBsLTMgM2EuNS41IDAgMTAuNzA4LjcwOEw4IDMuMjA3bDIuNjQ2IDIuNjQ3YS41LjUgMCAwMC43MDggMHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCAxMGEuNS41IDAgMDAuNS0uNVYzYS41LjUgMCAwMC0xIDB2Ni41YS41LjUgMCAwMC41LjV6bS00LjggMS42YzAtLjIyLjE4LS40LjQtLjRoOC44YS40LjQgMCAwMTAgLjhIMy42YS40LjQgMCAwMS0uNC0uNHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0Jzwvc3ZnPicsXHJcblx0XHRcclxuXHRhcnJvd0Rvd246XHJcblx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktYXJyb3ctYmFyLWRvd25cIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0ICBcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjM1NCAxMC4xNDZhLjUuNSAwIDAxMCAuNzA4bC0zIDNhLjUuNSAwIDAxLS43MDggMGwtMy0zYS41LjUgMCAwMS43MDgtLjcwOEw4IDEyLjc5M2wyLjY0Ni0yLjY0N2EuNS41IDAgMDEuNzA4IDB6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdCAgXHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04IDZhLjUuNSAwIDAxLjUuNVYxM2EuNS41IDAgMDEtMSAwVjYuNUEuNS41IDAgMDE4IDZ6TTIgMy41YS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMTAgMWgtMTFhLjUuNSAwIDAxLS41LS41elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdCc8L3N2Zz4nLFxyXG5cdFxyXG5cdGZ1bm5lbDpcclxuXHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1mdW5uZWxcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xLjUgMS41QS41LjUgMCAwMTIgMWgxMmEuNS41IDAgMDEuNS41djJhLjUuNSAwIDAxLS4xMjguMzM0TDEwIDguNjkyVjEzLjVhLjUuNSAwIDAxLS4zNDIuNDc0bC0zIDFBLjUuNSAwIDAxNiAxNC41VjguNjkyTDEuNjI4IDMuODM0QS41LjUgMCAwMTEuNSAzLjV2LTJ6bTEgLjV2MS4zMDhsNC4zNzIgNC44NThBLjUuNSAwIDAxNyA4LjV2NS4zMDZsMi0uNjY2VjguNWEuNS41IDAgMDEuMTI4LS4zMzRMMTMuNSAzLjMwOFYyaC0xMXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQnPC9zdmc+JyxcclxuXHRcdFx0XHJcblx0ZnVubmVsRmlsbDpcclxuXHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1mdW5uZWwtZmlsbFwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXHJcblx0XHRcdFx0JzxwYXRoIGQ9XCJNMiAzLjV2LTJoMTJ2MmwtNC41IDV2NWwtMyAxdi02TDIgMy41elwiLz4nICtcclxuXHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMS41IDEuNUEuNS41IDAgMDEyIDFoMTJhLjUuNSAwIDAxLjUuNXYyYS41LjUgMCAwMS0uMTI4LjMzNEwxMCA4LjY5MlYxMy41YS41LjUgMCAwMS0uMzQyLjQ3NGwtMyAxQS41LjUgMCAwMTYgMTQuNVY4LjY5MkwxLjYyOCAzLjgzNEEuNS41IDAgMDExLjUgMy41di0yem0xIC41djEuMzA4bDQuMzcyIDQuODU4QS41LjUgMCAwMTcgOC41djUuMzA2bDItLjY2NlY4LjVhLjUuNSAwIDAxLjEyOC0uMzM0TDEzLjUgMy4zMDhWMmgtMTF6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHJcblx0c3VjY2VzczpcclxuXHRcdFx0Jzxzdmcgd2lkdGg9XCIxLjVlbVwiIGhlaWdodD1cIjEuNWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzPVwiYmkgYmktY2hlY2stc3F1YXJlLWZpbGxcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yIDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0ySDJ6bTEwLjAzIDQuOTdhLjc1Ljc1IDAgMCAwLTEuMDguMDIyTDcuNDc3IDkuNDE3IDUuMzg0IDcuMzIzYS43NS43NSAwIDAgMC0xLjA2IDEuMDZMNi45NyAxMS4wM2EuNzUuNzUgMCAwIDAgMS4wNzktLjAybDMuOTkyLTQuOTlhLjc1Ljc1IDAgMCAwLS4wMS0xLjA1elwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHJcblx0d2FybmluZzpcclxuXHRcdFx0Jzxzdmcgd2lkdGg9XCIxLjVlbVwiIGhlaWdodD1cIjEuNWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzPVwiYmkgYmktaW5mby1zcXVhcmUtZmlsbFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXHJcblx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTAgMmEyIDIgMCAwIDEgMi0yaDEyYTIgMiAwIDAgMSAyIDJ2MTJhMiAyIDAgMCAxLTIgMkgyYTIgMiAwIDAgMS0yLTJWMnptOC45MyA0LjU4OGwtMi4yOS4yODctLjA4Mi4zOC40NS4wODNjLjI5NC4wNy4zNTIuMTc2LjI4OC40NjlsLS43MzggMy40NjhjLS4xOTQuODk3LjEwNSAxLjMxOS44MDggMS4zMTkuNTQ1IDAgMS4xNzgtLjI1MiAxLjQ2NS0uNTk4bC4wODgtLjQxNmMtLjIuMTc2LS40OTIuMjQ2LS42ODYuMjQ2LS4yNzUgMC0uMzc1LS4xOTMtLjMwNC0uNTMzTDguOTMgNi41ODh6TTggNS41YTEgMSAwIDEgMCAwLTIgMSAxIDAgMCAwIDAgMnpcIi8+JyArXHJcblx0XHRcdCc8L3N2Zz4nLFxyXG5cdFxyXG5cdGRhbmdlcjpcclxuXHRcdFx0Jzxzdmcgd2lkdGg9XCIxLjVlbVwiIGhlaWdodD1cIjEuNWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzPVwiYmkgYmktZXhjbGFtYXRpb24tc3F1YXJlLWZpbGxcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yIDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0ySDJ6bTYgNGEuOTA1LjkwNSAwIDAgMC0uOS45OTVsLjM1IDMuNTA3YS41NTIuNTUyIDAgMCAwIDEuMSAwbC4zNS0zLjUwN0EuOTA1LjkwNSAwIDAgMCA4IDR6bS4wMDIgNmExIDEgMCAxIDAgMCAyIDEgMSAwIDAgMCAwLTJ6XCIvPicgK1xyXG5cdFx0XHQnPC9zdmc+JyxcclxuXHRcclxuXHRsb2FkaW5nOlxyXG5cdFx0JzxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlciBtdC00XCI+JyArXHJcblx0XHRcdCc8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+JyArXHJcblx0XHRcdFx0JzxzcGFuIGNsYXNzPVwic3Itb25seVwiPicgKyB0ZXh0LmxvYWRpbmcgKyAnPC9zcGFuPicgK1xyXG5cdFx0XHQnPC9kaXY+JyArXHJcblx0XHQnPC9kaXY+JyxcclxuXHRcclxuXHRjbG9zZTpcclxuXHQgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWwtMiBtYi0xIGNsb3NlIG1sLWF1dG9cIiBkYXRhLWRpc21pc3M9XCJ0b2FzdFwiIGFyaWEtbGFiZWw9JyArIHRleHQuY2xvc2UgKyAnPicgK1xyXG5cdCAgICBcdCc8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPicgK1xyXG5cdCAgICAnPC9idXR0b24+JyxcclxuXHRcclxufTtcclxuXHJcbmdsb2JhbC5hamF4ID0ge1xyXG5cdFx0XHJcblx0ZmV0Y2g6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xyXG5cdFx0XHJcblx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdhW2RhdGEtdG9nZ2xlKj1cImFqYXhcIl0sIGJ1dHRvbltkYXRhLXRvZ2dsZSo9XCJhamF4XCJdJykubm90KCdbdHlwZT1cInN1Ym1pdFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5wYXJlbnQoKS5oYXMoJy5hY3RpdmUnKSkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xyXG5cdFx0XHRcdGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpIHx8IHRoaXM7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhhdC5zZXQodGFyZ2V0LCB1cmwsIHtmcm9tOiB0aGlzfSk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdCQodGhpcykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKGNvbnRhaW5lcikuZmluZCgnYVtkYXRhLXRvZ2dsZSo9XCJhamF4XCJdLCBidXR0b25bZGF0YS10b2dnbGUqPVwiYWpheFwiXScpLmZpbHRlcignW3R5cGU9XCJzdWJtaXRcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCgkZm9ybSA9ICQoJyMnICsgJCh0aGlzKS5hdHRyKCdmb3JtJykpKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xyXG5cdFx0XHRcdGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpIHx8IHRoaXM7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykuZXhpc3QoKSkge1xyXG5cdFx0XHRcdFx0dmFyIG1ldGhvZCA9ICdQT1NUJztcclxuXHRcdFx0XHRcdHZhciBkYXRhID0gbmV3IEZvcm1EYXRhKCRmb3JtLmdldCgwKSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHZhciBtZXRob2QgPSAkZm9ybS5hdHRyKCdtZXRob2QnKSB8fCAnR0VUJztcclxuXHRcdFx0XHRcdHZhciBkYXRhID0gJGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhhdC5zZXQodGFyZ2V0LCB1cmwsIHttZXRob2Q6IG1ldGhvZCwgZnJvbTogdGhpcywgZGF0YTogZGF0YX0pO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JChjb250YWluZXIpLmZpbmQoJ2RpdltkYXRhLXRvZ2dsZSo9XCJhamF4XCJdJykuZWFjaChmdW5jdGlvbihlKSB7XHJcblx0XHRcdGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpIHx8IHRoaXM7XHJcblx0XHRcdGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhhdC5zZXQodGFyZ2V0LCB1cmwsIHtmcm9tOiB0aGlzfSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH0sXHJcblx0XHRcclxuXHRzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHVybCwgb3B0aW9ucyA9IHt9KSB7XHJcblx0XHRcclxuXHRcdGlmICh0YXJnZXQgJiYgdXJsKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAob3B0aW9ucy5tb2RhbCA9PT0gdHJ1ZSB8fCAob3B0aW9ucy5mcm9tICYmICQob3B0aW9ucy5mcm9tKS5pcygnW2RhdGEtdG9nZ2xlKj1cIm1vZGFsXCJdJykpKSB7XHJcblx0XHRcdFx0aWYgKCQodGFyZ2V0KS5pcygnLm1vZGFsJykpIHtcclxuXHRcdFx0XHRcdCQodGFyZ2V0KS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkKHRhcmdldCkucGFyZW50cygnLm1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGxldCBtZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCAnR0VUJztcclxuXHRcdFx0bGV0IGRhdGEgPSBvcHRpb25zLmRhdGEgfHwgW107XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0dXJsIDogdXJsLFxyXG5cdFx0XHRcdHR5cGU6IG1ldGhvZCxcclxuXHRcdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHRcdGNvbnRlbnRUeXBlOiAoZGF0YS5jb25zdHJ1Y3RvciA9PT0gRm9ybURhdGEpP2ZhbHNlOidhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnLFxyXG5cdFx0XHRcdHByb2Nlc3NEYXRhOiAoZGF0YS5jb25zdHJ1Y3RvciAhPT0gRm9ybURhdGEpLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKGpxWEhSLCBzZXR0aW5ncykge1xyXG5cdFx0XHRcdFx0anFYSFIuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuXHRcdFx0XHRcdGpxWEhSLmZyb20gPSAkKG9wdGlvbnMuZnJvbSk7XHJcblx0XHRcdFx0XHQkKHRhcmdldCkudHJpZ2dlcignYWpheC5iZWZvcmVTZW5kJywgW2pxWEhSLCBzZXR0aW5nc10pO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHRcdFx0anFYSFIuZnJvbSA9ICQob3B0aW9ucy5mcm9tKTtcclxuXHRcdFx0XHRcdCQodGFyZ2V0KS50cmlnZ2VyKCdhamF4LnN1Y2Nlc3MnLCBbcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUl0pO1xyXG5cdFx0XHRcdFx0JCh0YXJnZXQpLnRyaWdnZXIoJ2FqYXguY29tcGxldGVkJywgW3Jlc3VsdCwgdGV4dFN0YXR1cywganFYSFJdKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuXHRcdFx0XHRcdGpxWEhSLmZyb20gPSAkKG9wdGlvbnMuZnJvbSk7XHJcblx0XHRcdFx0XHQkKHRhcmdldCkudHJpZ2dlcignYWpheC5lcnJvcicsIFtqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd25dKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sXHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gRGVmYXVsdHMgcGFyYW1ldGVycyBmb3IgZGF0ZXBpY2tlclxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLmZvcm1hdCA9IFwiZGQtbW0teXl5eVwiO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy53ZWVrU3RhcnQgPSAxO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5tYXhWaWV3TW9kZSA9IDM7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLmxhbmd1YWdlID0gJChkb2N1bWVudC5ib2R5KS5kYXRhKCdsb2NhbGUnKS5yZXBsYWNlKC9fLywgJy0nKTtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMubXVsdGlkYXRlID0gZmFsc2U7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLmRheXNPZldlZWtEaXNhYmxlZCA9IFwiMCw2XCI7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLmF1dG9jbG9zZSA9IHRydWU7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLmNhbGVuZGFyV2Vla3MgPSB0cnVlO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5jbGVhckJ0biA9IHRydWU7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLnRvZGF5QnRuID0gdHJ1ZTtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMudG9kYXlIaWdobGlnaHQgPSB0cnVlO1xyXG4gICAgXHJcblx0XHJcblx0XHJcbiAgICAkKGRvY3VtZW50KS5vbignYWpheC5iZWZvcmVTZW5kJywgZnVuY3Rpb24oZSwganFYSFIsIHNldHRpbmdzKSB7XHJcbiAgICBcdCQoZS50YXJnZXQpXHJcblx0XHRcdC5zaG93KClcclxuXHRcdFx0LmVtcHR5KClcclxuXHRcdFx0LmFwcGVuZChpY29uLmxvYWRpbmcpXHJcblx0XHQ7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkub24oJ2FqYXguc3VjY2VzcycsIGZ1bmN0aW9uKGUsIHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcclxuICAgIFx0XHJcblx0XHQkKGUudGFyZ2V0KS5maW5kKCcuc3Bpbm5lci1ib3JkZXInKS5wYXJlbnQoKS5yZW1vdmUoKTtcclxuXHRcdGlmIChyZXN1bHQpIHtcclxuXHRcdFx0JChlLnRhcmdldCkuaHRtbCgkKGUudGFyZ2V0KS5odG1sKCkgKyByZXN1bHQpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gcG9wb3ZlclxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdFx0JChlLnRhcmdldCkuZmluZCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKTtcclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIEFqYXhcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHQgICAgZ2xvYmFsLmFqYXguZmV0Y2goZS50YXJnZXQpO1xyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gTW9kYWwgJiBDb2xsYXBzZVxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQgICAgXHJcblx0XHQkKGUudGFyZ2V0KS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2hyZWY9XCIjJyArICQodGhpcykuYXR0cignaWQnKSArICdcIl0nKVxyXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuXHRcdFx0XHQuYmx1cigpXHJcblx0XHRcdDtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKGUudGFyZ2V0KS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJykuYmx1cigpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJ2J1dHRvbltkYXRhLWRpc21pc3NdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJyNtb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIEJvb3RzdHJhcCBkYXRlcGlja2VyXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcblx0XHQkKGUudGFyZ2V0KS5maW5kKCcuZGF0ZXBpY2tlcicpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQodGhpcykuZGF0ZXBpY2tlcih7J2Zvcm1hdCc6ICQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5mb3JtYXR9KTtcclxuXHRcdH0pXHJcblxyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gRm9ybSBtdWx0aXBsZVxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdFx0JChlLnRhcmdldCkuZmluZChcIltuYW1lJD0nX211bHRpcGxlJ11cIikuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBpZDtcclxuXHRcdFx0aWYgKGlkID0gJCh0aGlzKS5wcm9wKCduYW1lJykubWF0Y2goLyhcXFMrKV9tdWx0aXBsZSQveSkpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLnZhbCgpID09IDApIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdCQoXCJbaWRePSdcIiArIGlkWzFdICsgXCInXVwiKS5ub3QoXCJbaWQqPSdtdWx0aXBsZSddXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2RhdGVwaWNrZXInKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kYXRlcGlja2VyKCdzZXREYXRlJywgbmV3IERhdGUoKSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAncmFkaW8nKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAnY2hlY2tib3gnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAndGV4dCcgfHwgJCh0aGlzKS5pcygnc2VsZWN0JykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykudmFsKG51bGwpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJyZXF1aXJlZFwiLCAkKHRoaXMpLmRhdGEoJ3JlcXVpcmVkJykpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0JChcIltpZF49J1wiICsgaWRbMV0gKyBcIiddXCIpLm5vdChcIltpZCo9J211bHRpcGxlJ11cIikuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZGF0ZXBpY2tlcicpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRhdGVwaWNrZXIoJ3NldERhdGUnLCBudWxsKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICdyYWRpbycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICdjaGVja2JveCcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ3RleHQnIHx8ICQodGhpcykuaXMoJ3NlbGVjdCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnZhbChudWxsKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCQoJyMnICsgaWRbMV0gKyAnX211bHRpcGxlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JChlLnRhcmdldCkuZmluZCgnZm9ybScpLmZpbmQoJ2RpdiwgaW5wdXQsIHNlbGVjdCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuZGF0YSgnbXVsdGlwbGUnKSkge1xyXG5cdFx0XHRcdCQoXCJbbmFtZT0nXCIgKyAkKHRoaXMpLnByb3AoJ2lkJykgKyBcIl9tdWx0aXBsZSddXCIpLmZpbHRlcignW3ZhbHVlPTFdJykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKFwiW25hbWU9J1wiICsgJCh0aGlzKS5wcm9wKCdpZCcpICsgXCJfbXVsdGlwbGUnXVwiKS5maWx0ZXIoJ1t2YWx1ZT0wXScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KVxyXG5cdFx0XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBCc0N1c3RvbUZpbGVJbnB1dFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdFx0YnNDdXN0b21GaWxlSW5wdXQuaW5pdCgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdhamF4LmVycm9yJywgZnVuY3Rpb24oZSwganFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcblx0XHRcclxuICAgIFx0bGV0IHJlc3VsdCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JyArXHJcblx0XHRcdFx0XHRcdCc8aDYgY2xhc3M9XCJhbGVydC1oZWFkaW5nIGZvbnQtd2VpZ2h0LWJvbGRcIj4nICsgdGV4dC5lcnJvciArICcgJyArIGpxWEhSLnN0YXR1cyArICcgOiAnICsganFYSFIuc3RhdHVzVGV4dCArICc8L2g2Pic7XHJcblx0XHRcclxuXHRcdGlmICgobSA9IC88dGl0bGU+KC4rKTxcXC90aXRsZT4vLmV4ZWMoanFYSFIucmVzcG9uc2VUZXh0KSkgIT09IG51bGwpIHtcclxuXHRcdFx0cmVzdWx0ICs9ICc8cD4nICsgbVsxXSArICc8L3A+JztcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmVzdWx0ICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnlcIiA+JyArIHRleHQucmVsb2FkICsgJzwvYnV0dG9uPicgK1xyXG5cdFx0XHRcdFx0JzwvZGl2Pic7XHJcblx0XHQkKGUudGFyZ2V0KS5odG1sKHJlc3VsdCk7XHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJ2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRnbG9iYWwuYWpheC5zZXQoZS50YXJnZXQsIGpxWEhSLnNldHRpbmdzLnVybCwge2RhdGE6IGpxWEhSLnNldHRpbmdzLmRhdGF9KVxyXG5cdFx0fSk7XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkudHJpZ2dlcignYWpheC5zdWNjZXNzJyk7XHJcbiAgICBcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==