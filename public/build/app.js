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

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

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

Date.prototype.format = function () {
  day = this.getDate();
  month = this.getMonth() + 1;
  year = this.getFullYear();
  if (month < 10) month = '0' + month;
  if (day < 10) day = '0' + day;
  return [day, month, year].join('-');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJic0N1c3RvbUZpbGVJbnB1dCIsIlN0cmluZyIsInByb3RvdHlwZSIsInRvRGF0ZSIsInNwbGl0IiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZCIsIkRhdGUiLCJpc05hTiIsImZvcm1hdCIsImdldERhdGUiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwiam9pbiIsImFkZERheXMiLCJkYXlzIiwiZGF0ZSIsInZhbHVlT2YiLCJzZXREYXRlIiwiZm4iLCJleGlzdCIsImxlbmd0aCIsImdsb2JhbCIsImNyZWF0ZSIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImEiLCJzcGFuIiwiZmllbGRzZXQiLCJpbnB1dCIsImF0dHIiLCJhZGRDbGFzcyIsImNoZWNrYm94Iiwic2VsZWN0Iiwib3B0aW9uIiwibGFiZWwiLCJidXR0b24iLCJtZW51QnV0dG9uIiwic21hbGxCdXR0b24iLCJ0ciIsInRkIiwidWwiLCJsaSIsInRleHQiLCJub25lU2VsZWN0ZWQiLCJtdWx0aXBsZVNlcGFyYXRvciIsInNlbGVjdEFsbCIsIm5vdEFwcGxpY2FibGUiLCJmaWx0ZXIiLCJsb2FkaW5nIiwiZGV0YWlscyIsImVycm9yIiwicmVsb2FkIiwiZWRpdCIsImNsb3NlIiwiYWxsIiwiZnJvbURhdGUiLCJoaWdobGlnaHQiLCJpY29uIiwiYXJyb3dVcCIsImFycm93RG93biIsImZ1bm5lbCIsImZ1bm5lbEZpbGwiLCJzdWNjZXNzIiwid2FybmluZyIsImRhbmdlciIsImFqYXgiLCJmZXRjaCIsImNvbnRhaW5lciIsInRoYXQiLCJmaW5kIiwibm90IiwiZWFjaCIsIm9uIiwiZSIsInBhcmVudCIsImhhcyIsInJlbW92ZUNsYXNzIiwidXJsIiwiZGF0YSIsInRhcmdldCIsInNldCIsImZyb20iLCJoYXNDbGFzcyIsInRyaWdnZXIiLCIkZm9ybSIsIm1ldGhvZCIsIkZvcm1EYXRhIiwiZ2V0Iiwic2VyaWFsaXplQXJyYXkiLCJvcHRpb25zIiwibW9kYWwiLCJpcyIsInBhcmVudHMiLCJ0eXBlIiwiY29udGVudFR5cGUiLCJjb25zdHJ1Y3RvciIsInByb2Nlc3NEYXRhIiwiYmVmb3JlU2VuZCIsImpxWEhSIiwic2V0dGluZ3MiLCJyZXN1bHQiLCJ0ZXh0U3RhdHVzIiwiZXJyb3JUaHJvd24iLCJyZWFkeSIsImRhdGVwaWNrZXIiLCJkZWZhdWx0cyIsIndlZWtTdGFydCIsIm1heFZpZXdNb2RlIiwibGFuZ3VhZ2UiLCJib2R5IiwicmVwbGFjZSIsIm11bHRpZGF0ZSIsImRheXNPZldlZWtEaXNhYmxlZCIsImF1dG9jbG9zZSIsImNhbGVuZGFyV2Vla3MiLCJjbGVhckJ0biIsInRvZGF5QnRuIiwidG9kYXlIaWdobGlnaHQiLCJzaG93IiwiZW1wdHkiLCJhcHBlbmQiLCJyZW1vdmUiLCJodG1sIiwicG9wb3ZlciIsImJsdXIiLCJpZCIsInByb3AiLCJtYXRjaCIsImV2ZW50IiwidmFsIiwiaW5pdCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJtIiwiZXhlYyIsInJlc3BvbnNlVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUVBQSxtQkFBTyxDQUFDLGdFQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsaUdBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx5SkFBRCxDQUFQOztBQUNBLElBQU1DLGlCQUFpQixHQUFHRCxtQkFBTyxDQUFDLDhGQUFELENBQWpDOztBQUNBQSxtQkFBTyxDQUFDLG9EQUFELENBQVA7O0FBRUFFLE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQkMsTUFBakIsR0FBMEIsWUFBWTtBQUFB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Q3NFLEtBRHRFLEdBQzhFakMsS0FBSyxDQUFDa0MsVUFEcEYsR0FDaUcsT0FEOUc7O0FBR0gsUUFBSSxDQUFDQyxDQUFDLEdBQUcsdUJBQXVCQyxJQUF2QixDQUE0QnBDLEtBQUssQ0FBQ3FDLFlBQWxDLENBQUwsTUFBMEQsSUFBOUQsRUFBb0U7QUFDbkVuQyxZQUFNLElBQUksUUFBUWlDLENBQUMsQ0FBQyxDQUFELENBQVQsR0FBZSxNQUF6QjtBQUNBOztBQUVEakMsVUFBTSxJQUFJLDJEQUEyRDFELElBQUksQ0FBQ1MsTUFBaEUsR0FBeUUsV0FBekUsR0FDUCxRQURIO0FBRUF6RCxLQUFDLENBQUMrRSxDQUFDLENBQUNNLE1BQUgsQ0FBRCxDQUFZMkMsSUFBWixDQUFpQnRCLE1BQWpCO0FBRUExRyxLQUFDLENBQUMrRSxDQUFDLENBQUNNLE1BQUgsQ0FBRCxDQUFZVixJQUFaLENBQWlCLFFBQWpCLEVBQTJCRyxFQUEzQixDQUE4QixPQUE5QixFQUF1QyxZQUFXO0FBQ2pEcEQsWUFBTSxDQUFDNkMsSUFBUCxDQUFZZSxHQUFaLENBQWdCUCxDQUFDLENBQUNNLE1BQWxCLEVBQTBCbUIsS0FBSyxDQUFDQyxRQUFOLENBQWV0QixHQUF6QyxFQUE4QztBQUFDQyxZQUFJLEVBQUVvQixLQUFLLENBQUNDLFFBQU4sQ0FBZXJCO0FBQXRCLE9BQTlDO0FBQ0EsS0FGRDtBQUdHLEdBaEJEO0FBa0JBcEYsR0FBQyxDQUFDNkIsUUFBRCxDQUFELENBQVk0RCxPQUFaLENBQW9CLGNBQXBCO0FBRUgsQ0F6S0QsRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG5yZXF1aXJlKCdib290c3RyYXAnKTtcclxucmVxdWlyZSgnYm9vdHN0cmFwLWRhdGVwaWNrZXInKTtcclxucmVxdWlyZSgnYm9vdHN0cmFwLWRhdGVwaWNrZXIvZGlzdC9sb2NhbGVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmZyLm1pbi5qcycpO1xyXG5jb25zdCBic0N1c3RvbUZpbGVJbnB1dCA9IHJlcXVpcmUoJ2JzLWN1c3RvbS1maWxlLWlucHV0Jyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9nbG9iYWwuc2NzcycpO1xyXG5cclxuU3RyaW5nLnByb3RvdHlwZS50b0RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0Y29uc3QgW2RheSwgbW9udGgsIHllYXJdID0gdGhpcy5zcGxpdChcIi1cIik7XHJcblx0ZCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcclxuXHRyZXR1cm4gKGQgaW5zdGFuY2VvZiBEYXRlICYmIGlzTmFOKGQpID09PSBmYWxzZSk/ZDpudWxsO1xyXG59O1xyXG5cclxuRGF0ZS5wcm90b3R5cGUuZm9ybWF0ID0gZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0ZGF5ID0gdGhpcy5nZXREYXRlKCk7XHJcblx0bW9udGggPSB0aGlzLmdldE1vbnRoKCkgKyAxO1xyXG5cdHllYXIgPSB0aGlzLmdldEZ1bGxZZWFyKCk7XHJcblx0XHJcblx0aWYgKG1vbnRoIDwgMTApIG1vbnRoID0gJzAnICsgbW9udGg7XHJcblx0aWYgKGRheSA8IDEwKSBkYXkgPSAnMCcgKyBkYXk7XHJcblx0XHJcblx0cmV0dXJuIFtkYXksIG1vbnRoLCB5ZWFyXS5qb2luKCctJyk7XHJcblx0XHJcbn1cclxuXHJcbkRhdGUucHJvdG90eXBlLmFkZERheXMgPSBmdW5jdGlvbihkYXlzKSB7XHJcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKTtcclxuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGRheXMpO1xyXG4gICAgcmV0dXJuIGRhdGU7XHJcbn1cclxuXHJcbiQuZm4uZXhpc3QgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuIHRoaXMubGVuZ3RoICE9PSAwICYmIHRoaXM7XHJcbn1cclxuXHJcbmdsb2JhbC5jcmVhdGUgPSB7XHJcblx0ZGl2OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxyXG5cclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKTtcclxuXHRcdFx0Ly8uYWRkQ2xhc3MoJ2J0biBidG4tc20gdGV4dC1ub3dyYXAnKVxyXG5cdH0sXHJcblx0XHJcblx0c3BhbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRmaWVsZHNldDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0aW5wdXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAndGV4dCcpXHJcblx0XHRcdC5hZGRDbGFzcygnZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbScpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRjaGVja2JveDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICdjaGVja2JveCcpXHJcblx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtaW5wdXQnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0c2VsZWN0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20nKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0b3B0aW9uOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpKVxyXG5cdFx0XHQuYXR0cigndmFsdWUnLCAnJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGxhYmVsOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpXHJcblx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtbGFiZWwgdy0xMDAgdGV4dC1ub3dyYXAnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0YnV0dG9uOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0bicpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRtZW51QnV0dG9uOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0biBidG4tc20gYnRuLXByaW1hcnkgdGV4dC1ub3dyYXAgcm91bmRlZC0wJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHNtYWxsQnV0dG9uOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0biBidG4tc20gbXgtMSB0ZXh0LW5vd3JhcCcpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHR0cjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0cicpKVxyXG5cdFx0XHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHR0ZDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZCcpKVxyXG5cdFx0XHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHR1bDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpKVxyXG5cdFx0XHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRsaTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpKVxyXG5cdFx0XHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxufTtcclxuXHJcbmdsb2JhbC50ZXh0ID0ge1xyXG4gICAgbm9uZVNlbGVjdGVkOiAnTm9uZSBzZWxlY3RlZCcsXHJcbiAgICBtdWx0aXBsZVNlcGFyYXRvcjogJywgJyxcclxuICAgIHNlbGVjdEFsbDogJ1NlbGVjdCBhbGwnLFxyXG4gICAgbm90QXBwbGljYWJsZTogJ24vYScsXHJcbiAgICBmaWx0ZXI6ICdGaWx0ZXInLFxyXG4gICAgbG9hZGluZzogJ0xvYWRpbmcuLi4nLFxyXG4gICAgZGV0YWlsczogJ0RldGFpbHMnLFxyXG4gICAgZXJyb3I6ICdFcmV1cicsXHJcbiAgICByZWxvYWQ6ICdSZWxhbmNlcicsXHJcbiAgICBlZGl0OiAnRWRpdCcsXHJcbiAgICBkZWxldGU6ICdEZWxldGUnLFxyXG4gICAgY2xvc2U6ICdDbG9zZScsXHJcbiAgICBhbGw6ICdBbGwnLFxyXG4gICAgZnJvbURhdGU6ICdGcm9tIGRhdGUnLFxyXG4gICAgdG9EYXRlOiAnVG8gZGF0ZScsXHJcbiAgICBoaWdobGlnaHQ6ICdIaWdobGlnaHQnLFxyXG59O1xyXG5cclxuZ2xvYmFsLmljb24gPSB7XHJcblx0YXJyb3dVcDpcclxuXHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktYXJyb3ctYmFyLXVwXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjM1NCA1Ljg1NGEuNS41IDAgMDAwLS43MDhsLTMtM2EuNS41IDAgMDAtLjcwOCAwbC0zIDNhLjUuNSAwIDEwLjcwOC43MDhMOCAzLjIwN2wyLjY0NiAyLjY0N2EuNS41IDAgMDAuNzA4IDB6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggMTBhLjUuNSAwIDAwLjUtLjVWM2EuNS41IDAgMDAtMSAwdjYuNWEuNS41IDAgMDAuNS41em0tNC44IDEuNmMwLS4yMi4xOC0uNC40LS40aDguOGEuNC40IDAgMDEwIC44SDMuNmEuNC40IDAgMDEtLjQtLjR6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0YXJyb3dEb3duOlxyXG5cdFx0XHQnPHN2ZyBjbGFzcz1cImJpIGJpLWFycm93LWJhci1kb3duXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdCAgXHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS4zNTQgMTAuMTQ2YS41LjUgMCAwMTAgLjcwOGwtMyAzYS41LjUgMCAwMS0uNzA4IDBsLTMtM2EuNS41IDAgMDEuNzA4LS43MDhMOCAxMi43OTNsMi42NDYtMi42NDdhLjUuNSAwIDAxLjcwOCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCA2YS41LjUgMCAwMS41LjVWMTNhLjUuNSAwIDAxLTEgMFY2LjVBLjUuNSAwIDAxOCA2ek0yIDMuNWEuNS41IDAgMDEuNS0uNWgxMWEuNS41IDAgMDEwIDFoLTExYS41LjUgMCAwMS0uNS0uNXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQnPC9zdmc+JyxcclxuXHRcclxuXHRmdW5uZWw6XHJcblx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktZnVubmVsXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMS41IDEuNUEuNS41IDAgMDEyIDFoMTJhLjUuNSAwIDAxLjUuNXYyYS41LjUgMCAwMS0uMTI4LjMzNEwxMCA4LjY5MlYxMy41YS41LjUgMCAwMS0uMzQyLjQ3NGwtMyAxQS41LjUgMCAwMTYgMTQuNVY4LjY5MkwxLjYyOCAzLjgzNEEuNS41IDAgMDExLjUgMy41di0yem0xIC41djEuMzA4bDQuMzcyIDQuODU4QS41LjUgMCAwMTcgOC41djUuMzA2bDItLjY2NlY4LjVhLjUuNSAwIDAxLjEyOC0uMzM0TDEzLjUgMy4zMDhWMmgtMTF6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcdFxyXG5cdGZ1bm5lbEZpbGw6XHJcblx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktZnVubmVsLWZpbGxcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBkPVwiTTIgMy41di0yaDEydjJsLTQuNSA1djVsLTMgMXYtNkwyIDMuNXpcIi8+JyArXHJcblx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEuNSAxLjVBLjUuNSAwIDAxMiAxaDEyYS41LjUgMCAwMS41LjV2MmEuNS41IDAgMDEtLjEyOC4zMzRMMTAgOC42OTJWMTMuNWEuNS41IDAgMDEtLjM0Mi40NzRsLTMgMUEuNS41IDAgMDE2IDE0LjVWOC42OTJMMS42MjggMy44MzRBLjUuNSAwIDAxMS41IDMuNXYtMnptMSAuNXYxLjMwOGw0LjM3MiA0Ljg1OEEuNS41IDAgMDE3IDguNXY1LjMwNmwyLS42NjZWOC41YS41LjUgMCAwMS4xMjgtLjMzNEwxMy41IDMuMzA4VjJoLTExelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdCc8L3N2Zz4nLFxyXG5cdFxyXG5cdHN1Y2Nlc3M6XHJcblx0XHRcdCc8c3ZnIHdpZHRoPVwiMS41ZW1cIiBoZWlnaHQ9XCIxLjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBjbGFzcz1cImJpIGJpLWNoZWNrLXNxdWFyZS1maWxsXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMkgyem0xMC4wMyA0Ljk3YS43NS43NSAwIDAgMC0xLjA4LjAyMkw3LjQ3NyA5LjQxNyA1LjM4NCA3LjMyM2EuNzUuNzUgMCAwIDAtMS4wNiAxLjA2TDYuOTcgMTEuMDNhLjc1Ljc1IDAgMCAwIDEuMDc5LS4wMmwzLjk5Mi00Ljk5YS43NS43NSAwIDAgMC0uMDEtMS4wNXpcIi8+JyArXHJcblx0XHRcdCc8L3N2Zz4nLFxyXG5cdFxyXG5cdHdhcm5pbmc6XHJcblx0XHRcdCc8c3ZnIHdpZHRoPVwiMS41ZW1cIiBoZWlnaHQ9XCIxLjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBjbGFzcz1cImJpIGJpLWluZm8tc3F1YXJlLWZpbGxcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0wIDJhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjJ6bTguOTMgNC41ODhsLTIuMjkuMjg3LS4wODIuMzguNDUuMDgzYy4yOTQuMDcuMzUyLjE3Ni4yODguNDY5bC0uNzM4IDMuNDY4Yy0uMTk0Ljg5Ny4xMDUgMS4zMTkuODA4IDEuMzE5LjU0NSAwIDEuMTc4LS4yNTIgMS40NjUtLjU5OGwuMDg4LS40MTZjLS4yLjE3Ni0uNDkyLjI0Ni0uNjg2LjI0Ni0uMjc1IDAtLjM3NS0uMTkzLS4zMDQtLjUzM0w4LjkzIDYuNTg4ek04IDUuNWExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDJ6XCIvPicgK1xyXG5cdFx0XHQnPC9zdmc+JyxcclxuXHRcclxuXHRkYW5nZXI6XHJcblx0XHRcdCc8c3ZnIHdpZHRoPVwiMS41ZW1cIiBoZWlnaHQ9XCIxLjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBjbGFzcz1cImJpIGJpLWV4Y2xhbWF0aW9uLXNxdWFyZS1maWxsXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMkgyem02IDRhLjkwNS45MDUgMCAwIDAtLjkuOTk1bC4zNSAzLjUwN2EuNTUyLjU1MiAwIDAgMCAxLjEgMGwuMzUtMy41MDdBLjkwNS45MDUgMCAwIDAgOCA0em0uMDAyIDZhMSAxIDAgMSAwIDAgMiAxIDEgMCAwIDAgMC0yelwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHJcblx0bG9hZGluZzpcclxuXHRcdCc8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNFwiPicgK1xyXG5cdFx0XHQnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPicgK1xyXG5cdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4nICsgdGV4dC5sb2FkaW5nICsgJzwvc3Bhbj4nICtcclxuXHRcdFx0JzwvZGl2PicgK1xyXG5cdFx0JzwvZGl2PicsXHJcblx0XHJcblx0Y2xvc2U6XHJcblx0ICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1sLTIgbWItMSBjbG9zZSBtbC1hdXRvXCIgZGF0YS1kaXNtaXNzPVwidG9hc3RcIiBhcmlhLWxhYmVsPScgKyB0ZXh0LmNsb3NlICsgJz4nICtcclxuXHQgICAgXHQnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj4nICtcclxuXHQgICAgJzwvYnV0dG9uPicsXHJcblx0XHJcbn07XHJcblxyXG5nbG9iYWwuYWpheCA9IHtcclxuXHRcdFxyXG5cdGZldGNoOiBmdW5jdGlvbihjb250YWluZXIpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQkKGNvbnRhaW5lcikuZmluZCgnYVtkYXRhLXRvZ2dsZSo9XCJhamF4XCJdLCBidXR0b25bZGF0YS10b2dnbGUqPVwiYWpheFwiXScpLm5vdCgnW3R5cGU9XCJzdWJtaXRcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCQodGhpcykucGFyZW50KCkuaGFzKCcuYWN0aXZlJykpIHtcclxuXHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCB0aGlzO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsLCB7ZnJvbTogdGhpc30pO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JChjb250YWluZXIpLmZpbmQoJ2FbZGF0YS10b2dnbGUqPVwiYWpheFwiXSwgYnV0dG9uW2RhdGEtdG9nZ2xlKj1cImFqYXhcIl0nKS5maWx0ZXIoJ1t0eXBlPVwic3VibWl0XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgoJGZvcm0gPSAkKCcjJyArICQodGhpcykuYXR0cignZm9ybScpKSkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQkZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCB0aGlzO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICgkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmV4aXN0KCkpIHtcclxuXHRcdFx0XHRcdHZhciBtZXRob2QgPSAnUE9TVCc7XHJcblx0XHRcdFx0XHR2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybS5nZXQoMCkpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR2YXIgbWV0aG9kID0gJGZvcm0uYXR0cignbWV0aG9kJykgfHwgJ0dFVCc7XHJcblx0XHRcdFx0XHR2YXIgZGF0YSA9ICRmb3JtLnNlcmlhbGl6ZUFycmF5KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsLCB7bWV0aG9kOiBtZXRob2QsIGZyb206IHRoaXMsIGRhdGE6IGRhdGF9KTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdkaXZbZGF0YS10b2dnbGUqPVwiYWpheFwiXScpLmVhY2goZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCB0aGlzO1xyXG5cdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0XHJcblx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsLCB7ZnJvbTogdGhpc30pO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHR9LFxyXG5cdFx0XHJcblx0c2V0OiBmdW5jdGlvbiAodGFyZ2V0LCB1cmwsIG9wdGlvbnMgPSB7fSkge1xyXG5cdFx0XHJcblx0XHRpZiAodGFyZ2V0ICYmIHVybCkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKG9wdGlvbnMubW9kYWwgPT09IHRydWUgfHwgKG9wdGlvbnMuZnJvbSAmJiAkKG9wdGlvbnMuZnJvbSkuaXMoJ1tkYXRhLXRvZ2dsZSo9XCJtb2RhbFwiXScpKSkge1xyXG5cdFx0XHRcdGlmICgkKHRhcmdldCkuaXMoJy5tb2RhbCcpKSB7XHJcblx0XHRcdFx0XHQkKHRhcmdldCkubW9kYWwoJ3Nob3cnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JCh0YXJnZXQpLnBhcmVudHMoJy5tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgbWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgJ0dFVCc7XHJcblx0XHRcdGxldCBkYXRhID0gb3B0aW9ucy5kYXRhIHx8IFtdO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHQkLmFqYXgoe1xyXG5cdFx0XHRcdHVybCA6IHVybCxcclxuXHRcdFx0XHR0eXBlOiBtZXRob2QsXHJcblx0XHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0XHRjb250ZW50VHlwZTogKGRhdGEuY29uc3RydWN0b3IgPT09IEZvcm1EYXRhKT9mYWxzZTonYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04JyxcclxuXHRcdFx0XHRwcm9jZXNzRGF0YTogKGRhdGEuY29uc3RydWN0b3IgIT09IEZvcm1EYXRhKSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRiZWZvcmVTZW5kOiBmdW5jdGlvbihqcVhIUiwgc2V0dGluZ3MpIHtcclxuXHRcdFx0XHRcdGpxWEhSLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcblx0XHRcdFx0XHRqcVhIUi5mcm9tID0gJChvcHRpb25zLmZyb20pO1xyXG5cdFx0XHRcdFx0JCh0YXJnZXQpLnRyaWdnZXIoJ2FqYXguYmVmb3JlU2VuZCcsIFtqcVhIUiwgc2V0dGluZ3NdKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcclxuXHRcdFx0XHRcdGpxWEhSLmZyb20gPSAkKG9wdGlvbnMuZnJvbSk7XHJcblx0XHRcdFx0XHQkKHRhcmdldCkudHJpZ2dlcignYWpheC5zdWNjZXNzJywgW3Jlc3VsdCwgdGV4dFN0YXR1cywganFYSFJdKTtcclxuXHRcdFx0XHRcdCQodGFyZ2V0KS50cmlnZ2VyKCdhamF4LmNvbXBsZXRlZCcsIFtyZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSXSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcblx0XHRcdFx0XHRqcVhIUi5mcm9tID0gJChvcHRpb25zLmZyb20pO1xyXG5cdFx0XHRcdFx0JCh0YXJnZXQpLnRyaWdnZXIoJ2FqYXguZXJyb3InLCBbanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duXSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9LFxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIERlZmF1bHRzIHBhcmFtZXRlcnMgZm9yIGRhdGVwaWNrZXJcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5mb3JtYXQgPSBcImRkLW1tLXl5eXlcIjtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMud2Vla1N0YXJ0ID0gMTtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMubWF4Vmlld01vZGUgPSAzO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5sYW5ndWFnZSA9ICQoZG9jdW1lbnQuYm9keSkuZGF0YSgnbG9jYWxlJykucmVwbGFjZSgvXy8sICctJyk7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLm11bHRpZGF0ZSA9IGZhbHNlO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5kYXlzT2ZXZWVrRGlzYWJsZWQgPSBcIjAsNlwiO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5hdXRvY2xvc2UgPSB0cnVlO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5jYWxlbmRhcldlZWtzID0gdHJ1ZTtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMuY2xlYXJCdG4gPSB0cnVlO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy50b2RheUJ0biA9IHRydWU7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLnRvZGF5SGlnaGxpZ2h0ID0gdHJ1ZTtcclxuICAgIFxyXG5cdFxyXG5cdFxyXG4gICAgJChkb2N1bWVudCkub24oJ2FqYXguYmVmb3JlU2VuZCcsIGZ1bmN0aW9uKGUsIGpxWEhSLCBzZXR0aW5ncykge1xyXG4gICAgXHQkKGUudGFyZ2V0KVxyXG5cdFx0XHQuc2hvdygpXHJcblx0XHRcdC5lbXB0eSgpXHJcblx0XHRcdC5hcHBlbmQoaWNvbi5sb2FkaW5nKVxyXG5cdFx0O1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdhamF4LnN1Y2Nlc3MnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcbiAgICBcdFxyXG5cdFx0JChlLnRhcmdldCkuZmluZCgnLnNwaW5uZXItYm9yZGVyJykucGFyZW50KCkucmVtb3ZlKCk7XHJcblx0XHRpZiAocmVzdWx0KSB7XHJcblx0XHRcdCQoZS50YXJnZXQpLmh0bWwoJChlLnRhcmdldCkuaHRtbCgpICsgcmVzdWx0KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIHBvcG92ZXJcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBBamF4XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcblx0ICAgIGdsb2JhbC5hamF4LmZldGNoKGUudGFyZ2V0KTtcclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIE1vZGFsICYgQ29sbGFwc2VcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0ICAgIFxyXG5cdFx0JChlLnRhcmdldCkub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtocmVmPVwiIycgKyAkKHRoaXMpLmF0dHIoJ2lkJykgKyAnXCJdJylcclxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHRcdFx0LmJsdXIoKVxyXG5cdFx0XHQ7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JChlLnRhcmdldCkub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScpLmJsdXIoKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKGUudGFyZ2V0KS5maW5kKCdidXR0b25bZGF0YS1kaXNtaXNzXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBCb290c3RyYXAgZGF0ZXBpY2tlclxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdFx0JChlLnRhcmdldCkuZmluZCgnLmRhdGVwaWNrZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoaXMpLmRhdGVwaWNrZXIoeydmb3JtYXQnOiAkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMuZm9ybWF0fSk7XHJcblx0XHR9KVxyXG5cclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIEZvcm0gbXVsdGlwbGVcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoXCJbbmFtZSQ9J19tdWx0aXBsZSddXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgaWQ7XHJcblx0XHRcdGlmIChpZCA9ICQodGhpcykucHJvcCgnbmFtZScpLm1hdGNoKC8oXFxTKylfbXVsdGlwbGUkL3kpKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS52YWwoKSA9PSAwKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQkKFwiW2lkXj0nXCIgKyBpZFsxXSArIFwiJ11cIikubm90KFwiW2lkKj0nbXVsdGlwbGUnXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdkYXRlcGlja2VyJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykuZGF0ZXBpY2tlcignc2V0RGF0ZScsIG5ldyBEYXRlKCkpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ3JhZGlvJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ2NoZWNrYm94Jykge1xyXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ3RleHQnIHx8ICQodGhpcykuaXMoJ3NlbGVjdCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnZhbChudWxsKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJkaXNhYmxlZFwiLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKFwicmVxdWlyZWRcIiwgJCh0aGlzKS5kYXRhKCdyZXF1aXJlZCcpKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdCQoXCJbaWRePSdcIiArIGlkWzFdICsgXCInXVwiKS5ub3QoXCJbaWQqPSdtdWx0aXBsZSddXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2RhdGVwaWNrZXInKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kYXRlcGlja2VyKCdzZXREYXRlJywgbnVsbCk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAncmFkaW8nKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAnY2hlY2tib3gnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICd0ZXh0JyB8fCAkKHRoaXMpLmlzKCdzZWxlY3QnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS52YWwobnVsbCk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKFwiZGlzYWJsZWRcIiwgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKFwicmVxdWlyZWRcIiwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQkKCcjJyArIGlkWzFdICsgJ19tdWx0aXBsZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJ2Zvcm0nKS5maW5kKCdkaXYsIGlucHV0LCBzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLmRhdGEoJ211bHRpcGxlJykpIHtcclxuXHRcdFx0XHQkKFwiW25hbWU9J1wiICsgJCh0aGlzKS5wcm9wKCdpZCcpICsgXCJfbXVsdGlwbGUnXVwiKS5maWx0ZXIoJ1t2YWx1ZT0xXScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JChcIltuYW1lPSdcIiArICQodGhpcykucHJvcCgnaWQnKSArIFwiX211bHRpcGxlJ11cIikuZmlsdGVyKCdbdmFsdWU9MF0nKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSlcclxuXHRcdFxyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gQnNDdXN0b21GaWxlSW5wdXRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHRcdGJzQ3VzdG9tRmlsZUlucHV0LmluaXQoKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS5vbignYWpheC5lcnJvcicsIGZ1bmN0aW9uKGUsIGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG5cdFx0XHJcbiAgICBcdGxldCByZXN1bHQgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPicgK1xyXG5cdFx0XHRcdFx0XHQnPGg2IGNsYXNzPVwiYWxlcnQtaGVhZGluZyBmb250LXdlaWdodC1ib2xkXCI+JyArIHRleHQuZXJyb3IgKyAnICcgKyBqcVhIUi5zdGF0dXMgKyAnIDogJyArIGpxWEhSLnN0YXR1c1RleHQgKyAnPC9oNj4nO1xyXG5cdFx0XHJcblx0XHRpZiAoKG0gPSAvPHRpdGxlPiguKyk8XFwvdGl0bGU+Ly5leGVjKGpxWEhSLnJlc3BvbnNlVGV4dCkpICE9PSBudWxsKSB7XHJcblx0XHRcdHJlc3VsdCArPSAnPHA+JyArIG1bMV0gKyAnPC9wPic7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHJlc3VsdCArPSAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNtIGJ0bi1wcmltYXJ5XCIgPicgKyB0ZXh0LnJlbG9hZCArICc8L2J1dHRvbj4nICtcclxuXHRcdFx0XHRcdCc8L2Rpdj4nO1xyXG5cdFx0JChlLnRhcmdldCkuaHRtbChyZXN1bHQpO1xyXG5cdFx0XHJcblx0XHQkKGUudGFyZ2V0KS5maW5kKCdidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0Z2xvYmFsLmFqYXguc2V0KGUudGFyZ2V0LCBqcVhIUi5zZXR0aW5ncy51cmwsIHtkYXRhOiBqcVhIUi5zZXR0aW5ncy5kYXRhfSlcclxuXHRcdH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2FqYXguc3VjY2VzcycpO1xyXG4gICAgXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=