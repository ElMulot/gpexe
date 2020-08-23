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

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

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
  reload: 'Relancer',
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
  information: '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-left-dots-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>' + '</svg>',
  exclamation: '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-diamond-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>' + '</svg>',
  loading: '<div class="d-flex justify-content-center mt-5">' + '<div class="spinner-border" role="status">' + '<span class="sr-only">' + text.loading + '</span>' + '</div>' + '</div>',
  close: '<button type="button" class="ml-2 mb-1 close ml-auto" data-dismiss="toast" aria-label=' + text.close + '>' + '<span aria-hidden="true">&times;</span>' + '</button>'
};
global.ajax = {
  fetch: function fetch(container) {
    var callBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.onSuccess.bind(this);
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
        that.set(target, url, undefined, undefined, add, callBack);
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

        that.set(target, url, method, data, add, callBack);
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
      that.set(target, url, undefined, undefined, add, callBack);
    });
  },
  set: function set(target, url) {
    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
    var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var add = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var callBack = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : this.onSuccess.bind(this);

    if (target && url) {
      //$(target).closest('.modal').modal('show');
      if (add === false) {
        $(target).show().empty().append(icon.loading);
      } else {
        $(target).show().find('[data-toggle="ajax"]').remove();
      }

      var that = this;
      $.ajax({
        url: url,
        type: method,
        data: data,
        contentType: data.constructor === FormData ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
        processData: data.constructor !== FormData,
        success: function success(result) {
          callBack(target, result);
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
  },
  onSuccess: function onSuccess() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
    var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var callBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.onSuccess.bind(this);
    $(target).find('.spinner-border').parent().remove();

    if (result) {
      $(target).html($(target).html() + result);
    } //---------------------
    // popover
    //---------------------


    $(target).find('[data-toggle="popover"]').popover(); //---------------------
    // Ajax
    //---------------------

    this.fetch(target, callBack); //---------------------
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
        'format': $.fn.datepicker.defaults.format
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
    $(target).find('form').find('div, input, select').each(function () {
      if ($(this).data('multiple')) {
        $("[name='" + $(this).prop('id') + "_multiple']").filter('[value=1]').trigger('click');
      } else {
        $("[name='" + $(this).prop('id') + "_multiple']").filter('[value=0]').trigger('click');
      }
    }); //---------------------
    // BsCustomFileInput
    //---------------------

    bsCustomFileInput.init();
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
  ajax.onSuccess();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJic0N1c3RvbUZpbGVJbnB1dCIsIlN0cmluZyIsInByb3RvdHlwZSIsInRvRGF0ZSIsInNwbGl0IiwiZGF5IiwibW9udGgiLCJ5ZWFyIiwiZCIsIkRhdGUiLCJpc05hTiIsImFkZERheXMiLCJkYXlzIiwiZGF0ZSIsInZhbHVlT2YiLCJzZXREYXRlIiwiZ2V0RGF0ZSIsImdsb2JhbCIsImNyZWF0ZSIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImEiLCJhZGRDbGFzcyIsInNwYW4iLCJmaWVsZHNldCIsImlucHV0IiwiYXR0ciIsImNoZWNrYm94Iiwic2VsZWN0Iiwib3B0aW9uIiwibGFiZWwiLCJtZW51QnV0dG9uIiwic21hbGxCdXR0b24iLCJ0ciIsInRkIiwidWwiLCJsaSIsInRleHQiLCJub25lU2VsZWN0ZWQiLCJtdWx0aXBsZVNlcGFyYXRvciIsInNlbGVjdEFsbCIsIm5vdEFwcGxpY2FibGUiLCJmaWx0ZXIiLCJsb2FkaW5nIiwiZGV0YWlscyIsImVycm9yIiwicmVsb2FkIiwiY2xvc2UiLCJhbGwiLCJmcm9tRGF0ZSIsImhpZ2hsaWdodCIsImljb24iLCJhcnJvd1VwIiwiYXJyb3dEb3duIiwiZnVubmVsIiwiZnVubmVsRmlsbCIsImluZm9ybWF0aW9uIiwiZXhjbGFtYXRpb24iLCJhamF4IiwiZmV0Y2giLCJjb250YWluZXIiLCJjYWxsQmFjayIsIm9uU3VjY2VzcyIsImJpbmQiLCJ0aGF0IiwiZmluZCIsIm5vdCIsImVhY2giLCJvbiIsImUiLCJwYXJlbnQiLCJoYXMiLCJyZW1vdmVDbGFzcyIsInVybCIsImRhdGEiLCJ0YXJnZXQiLCJhZGQiLCJzZXQiLCJ1bmRlZmluZWQiLCJoYXNDbGFzcyIsInRyaWdnZXIiLCIkZm9ybSIsImxlbmd0aCIsIm1ldGhvZCIsIkZvcm1EYXRhIiwiZ2V0Iiwic2VyaWFsaXplQXJyYXkiLCJzaG93IiwiZW1wdHkiLCJhcHBlbmQiLCJyZW1vdmUiLCJ0eXBlIiwiY29udGVudFR5cGUiLCJjb25zdHJ1Y3RvciIsInByb2Nlc3NEYXRhIiwic3VjY2VzcyIsInJlc3VsdCIsInhociIsInRocm93bkVycm9yIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsIm0iLCJleGVjIiwicmVzcG9uc2VUZXh0IiwiaHRtbCIsImJvZHkiLCJwb3BvdmVyIiwiYmx1ciIsIm1vZGFsIiwiZGF0ZXBpY2tlciIsImZuIiwiZGVmYXVsdHMiLCJmb3JtYXQiLCJpZCIsInByb3AiLCJtYXRjaCIsImV2ZW50IiwidmFsIiwiaXMiLCJpbml0IiwicmVhZHkiLCJ3ZWVrU3RhcnQiLCJtYXhWaWV3TW9kZSIsImxhbmd1YWdlIiwicmVwbGFjZSIsIm11bHRpZGF0ZSIsImRheXNPZldlZWtEaXNhYmxlZCIsImF1dG9jbG9zZSIsImNhbGVuZGFyV2Vla3MiLCJjbGVhckJ0biIsInRvZGF5QnRuIiwidG9kYXlIaWdobGlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFFQUEsbUJBQU8sQ0FBQyxnRUFBRCxDQUFQOztBQUNBQSxtQkFBTyxDQUFDLGlHQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMseUpBQUQsQ0FBUDs7QUFDQSxJQUFNQyxpQkFBaUIsR0FBR0QsbUJBQU8sQ0FBQyw4RkFBRCxDQUFqQzs7QUFDQUEsbUJBQU8sQ0FBQyxvREFBRCxDQUFQOztBQUVBRSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLE1BQWpCLEdBQTBCLFlBQVk7QUFBQSxvQkFDVixLQUFLQyxLQUFMLENBQVcsR0FBWCxDQURVO0FBQUE7QUFBQSxNQUM5QkMsR0FEOEI7QUFBQSxNQUN6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RCxVQUFMLENBQWdCRSxRQUFoQixDQUF5QmMsU0FBekIsR0FBcUMsS0FBckM7QUFDQWhJLEdBQUMsQ0FBQ2lILEVBQUYsQ0FBS0QsVUFBTCxDQUFnQkUsUUFBaEIsQ0FBeUJlLGtCQUF6QixHQUE4QyxLQUE5QztBQUNBakksR0FBQyxDQUFDaUgsRUFBRixDQUFLRCxVQUFMLENBQWdCRSxRQUFoQixDQUF5QmdCLFNBQXpCLEdBQXFDLElBQXJDO0FBQ0FsSSxHQUFDLENBQUNpSCxFQUFGLENBQUtELFVBQUwsQ0FBZ0JFLFFBQWhCLENBQXlCaUIsYUFBekIsR0FBeUMsSUFBekM7QUFDQW5JLEdBQUMsQ0FBQ2lILEVBQUYsQ0FBS0QsVUFBTCxDQUFnQkUsUUFBaEIsQ0FBeUJrQixRQUF6QixHQUFvQyxJQUFwQztBQUNBcEksR0FBQyxDQUFDaUgsRUFBRixDQUFLRCxVQUFMLENBQWdCRSxRQUFoQixDQUF5Qm1CLFFBQXpCLEdBQW9DLElBQXBDO0FBQ0FySSxHQUFDLENBQUNpSCxFQUFGLENBQUtELFVBQUwsQ0FBZ0JFLFFBQWhCLENBQXlCb0IsY0FBekIsR0FBMEMsSUFBMUM7QUFFR3pFLE1BQUksQ0FBQ0ksU0FBTDtBQUVILENBcEJELEUiLCJmaWxlIjoiYXBwfmRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcC1kYXRlcGlja2VyJyk7XHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcC1kYXRlcGlja2VyL2Rpc3QvbG9jYWxlcy9ib290c3RyYXAtZGF0ZXBpY2tlci5mci5taW4uanMnKTtcclxuY29uc3QgYnNDdXN0b21GaWxlSW5wdXQgPSByZXF1aXJlKCdicy1jdXN0b20tZmlsZS1pbnB1dCcpO1xyXG5yZXF1aXJlKCcuLi9jc3MvZ2xvYmFsLnNjc3MnKTtcclxuXHJcblN0cmluZy5wcm90b3R5cGUudG9EYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdGNvbnN0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IHRoaXMuc3BsaXQoXCItXCIpO1xyXG5cdGQgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XHJcblx0cmV0dXJuIChkIGluc3RhbmNlb2YgRGF0ZSAmJiBpc05hTihkKSA9PT0gZmFsc2UpP2Q6bnVsbDtcclxufTtcclxuXHJcbkRhdGUucHJvdG90eXBlLmFkZERheXMgPSBmdW5jdGlvbihkYXlzKSB7XHJcbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKHRoaXMudmFsdWVPZigpKTtcclxuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGRheXMpO1xyXG4gICAgcmV0dXJuIGRhdGU7XHJcbn1cclxuXHJcbmdsb2JhbC5jcmVhdGUgPSB7XHJcblx0ZGl2OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxyXG5cclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0biBidG4tc20gdGV4dC1ub3dyYXAnKVxyXG5cdH0sXHJcblx0XHJcblx0c3BhbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRmaWVsZHNldDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmaWVsZHNldCcpKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0aW5wdXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAndGV4dCcpXHJcblx0XHRcdC5hZGRDbGFzcygnZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbScpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRjaGVja2JveDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICdjaGVja2JveCcpXHJcblx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtaW5wdXQnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0c2VsZWN0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NlbGVjdCcpKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20nKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0b3B0aW9uOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpKVxyXG5cdFx0XHQuYXR0cigndmFsdWUnLCAnJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGxhYmVsOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpXHJcblx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtbGFiZWwgdy0xMDAgdGV4dC1ub3dyYXAnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0bWVudUJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcclxuXHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXNtIGJ0bi1wcmltYXJ5IHRleHQtbm93cmFwIHJvdW5kZWQtMCcpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRzbWFsbEJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcclxuXHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXNtIG14LTEgdGV4dC1ub3dyYXAnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dHI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0bGk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcbn07XHJcblxyXG5nbG9iYWwudGV4dCA9IHtcclxuICAgIG5vbmVTZWxlY3RlZDogJ05vbmUgc2VsZWN0ZWQnLFxyXG4gICAgbXVsdGlwbGVTZXBhcmF0b3I6ICcsICcsXHJcbiAgICBzZWxlY3RBbGw6ICdTZWxlY3QgYWxsJyxcclxuICAgIG5vdEFwcGxpY2FibGU6ICduL2EnLFxyXG4gICAgZmlsdGVyOiAnRmlsdGVyJyxcclxuICAgIGxvYWRpbmc6ICdMb2FkaW5nLi4uJyxcclxuICAgIGRldGFpbHM6ICdEZXRhaWxzJyxcclxuICAgIGVycm9yOiAnRXJldXInLFxyXG4gICAgcmVsb2FkOiAnUmVsYW5jZXInLFxyXG4gICAgY2xvc2U6ICdDbG9zZScsXHJcbiAgICBhbGw6ICdBbGwnLFxyXG4gICAgZnJvbURhdGU6ICdGcm9tIGRhdGUnLFxyXG4gICAgdG9EYXRlOiAnVG8gZGF0ZScsXHJcbiAgICBoaWdobGlnaHQ6ICdIaWdobGlnaHQnLFxyXG59O1xyXG5cclxuZ2xvYmFsLmljb24gPSB7XHJcblx0YXJyb3dVcDpcclxuXHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktYXJyb3ctYmFyLXVwXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjM1NCA1Ljg1NGEuNS41IDAgMDAwLS43MDhsLTMtM2EuNS41IDAgMDAtLjcwOCAwbC0zIDNhLjUuNSAwIDEwLjcwOC43MDhMOCAzLjIwN2wyLjY0NiAyLjY0N2EuNS41IDAgMDAuNzA4IDB6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggMTBhLjUuNSAwIDAwLjUtLjVWM2EuNS41IDAgMDAtMSAwdjYuNWEuNS41IDAgMDAuNS41em0tNC44IDEuNmMwLS4yMi4xOC0uNC40LS40aDguOGEuNC40IDAgMDEwIC44SDMuNmEuNC40IDAgMDEtLjQtLjR6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0YXJyb3dEb3duOlxyXG5cdFx0XHQnPHN2ZyBjbGFzcz1cImJpIGJpLWFycm93LWJhci1kb3duXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdCAgXHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS4zNTQgMTAuMTQ2YS41LjUgMCAwMTAgLjcwOGwtMyAzYS41LjUgMCAwMS0uNzA4IDBsLTMtM2EuNS41IDAgMDEuNzA4LS43MDhMOCAxMi43OTNsMi42NDYtMi42NDdhLjUuNSAwIDAxLjcwOCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCA2YS41LjUgMCAwMS41LjVWMTNhLjUuNSAwIDAxLTEgMFY2LjVBLjUuNSAwIDAxOCA2ek0yIDMuNWEuNS41IDAgMDEuNS0uNWgxMWEuNS41IDAgMDEwIDFoLTExYS41LjUgMCAwMS0uNS0uNXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQnPC9zdmc+JyxcclxuXHRcclxuXHRmdW5uZWw6XHJcblx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktZnVubmVsXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMS41IDEuNUEuNS41IDAgMDEyIDFoMTJhLjUuNSAwIDAxLjUuNXYyYS41LjUgMCAwMS0uMTI4LjMzNEwxMCA4LjY5MlYxMy41YS41LjUgMCAwMS0uMzQyLjQ3NGwtMyAxQS41LjUgMCAwMTYgMTQuNVY4LjY5MkwxLjYyOCAzLjgzNEEuNS41IDAgMDExLjUgMy41di0yem0xIC41djEuMzA4bDQuMzcyIDQuODU4QS41LjUgMCAwMTcgOC41djUuMzA2bDItLjY2NlY4LjVhLjUuNSAwIDAxLjEyOC0uMzM0TDEzLjUgMy4zMDhWMmgtMTF6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcdFxyXG5cdGZ1bm5lbEZpbGw6XHJcblx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktZnVubmVsLWZpbGxcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBkPVwiTTIgMy41di0yaDEydjJsLTQuNSA1djVsLTMgMXYtNkwyIDMuNXpcIi8+JyArXHJcblx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEuNSAxLjVBLjUuNSAwIDAxMiAxaDEyYS41LjUgMCAwMS41LjV2MmEuNS41IDAgMDEtLjEyOC4zMzRMMTAgOC42OTJWMTMuNWEuNS41IDAgMDEtLjM0Mi40NzRsLTMgMUEuNS41IDAgMDE2IDE0LjVWOC42OTJMMS42MjggMy44MzRBLjUuNSAwIDAxMS41IDMuNXYtMnptMSAuNXYxLjMwOGw0LjM3MiA0Ljg1OEEuNS41IDAgMDE3IDguNXY1LjMwNmwyLS42NjZWOC41YS41LjUgMCAwMS4xMjgtLjMzNEwxMy41IDMuMzA4VjJoLTExelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdCc8L3N2Zz4nLFxyXG5cdFxyXG5cdGluZm9ybWF0aW9uOlxyXG5cdFx0XHQnPHN2ZyB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBjbGFzcz1cImJpIGJpLWNoYXQtbGVmdC1kb3RzLWZpbGxcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0wIDJhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkg0LjQxNGExIDEgMCAwIDAtLjcwNy4yOTNMLjg1NCAxNS4xNDZBLjUuNSAwIDAgMSAwIDE0Ljc5M1Yyem01IDRhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwem00IDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwem0zIDFhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAyelwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHJcblx0ZXhjbGFtYXRpb246XHJcblx0XHRcdCc8c3ZnIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzPVwiYmkgYmktZXhjbGFtYXRpb24tZGlhbW9uZC1maWxsXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOS4wNS40MzVjLS41OC0uNTgtMS41Mi0uNTgtMi4xIDBMLjQzNiA2Ljk1Yy0uNTguNTgtLjU4IDEuNTE5IDAgMi4wOThsNi41MTYgNi41MTZjLjU4LjU4IDEuNTE5LjU4IDIuMDk4IDBsNi41MTYtNi41MTZjLjU4LS41OC41OC0xLjUxOSAwLTIuMDk4TDkuMDUuNDM1ek04IDRhLjkwNS45MDUgMCAwIDAtLjkuOTk1bC4zNSAzLjUwN2EuNTUyLjU1MiAwIDAgMCAxLjEgMGwuMzUtMy41MDdBLjkwNS45MDUgMCAwIDAgOCA0em0uMDAyIDZhMSAxIDAgMSAwIDAgMiAxIDEgMCAwIDAgMC0yelwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHJcblx0bG9hZGluZzpcclxuXHRcdCc8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNVwiPicgK1xyXG5cdFx0XHQnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPicgK1xyXG5cdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4nICsgdGV4dC5sb2FkaW5nICsgJzwvc3Bhbj4nICtcclxuXHRcdFx0JzwvZGl2PicgK1xyXG5cdFx0JzwvZGl2PicsXHJcblx0XHJcblx0Y2xvc2U6XHJcblx0ICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1sLTIgbWItMSBjbG9zZSBtbC1hdXRvXCIgZGF0YS1kaXNtaXNzPVwidG9hc3RcIiBhcmlhLWxhYmVsPScgKyB0ZXh0LmNsb3NlICsgJz4nICtcclxuXHQgICAgXHQnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj4nICtcclxuXHQgICAgJzwvYnV0dG9uPicsXHJcblx0XHJcbn07XHJcblxyXG5nbG9iYWwuYWpheCA9IHtcclxuXHRcdFxyXG5cdGZldGNoOiBmdW5jdGlvbihjb250YWluZXIsIGNhbGxCYWNrID0gdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSkge1xyXG5cdFx0XHJcblx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdhW2RhdGEtdG9nZ2xlPVwiYWpheFwiXSwgYnV0dG9uW2RhdGEtdG9nZ2xlPVwiYWpheFwiXScpLm5vdCgnW3R5cGU9XCJzdWJtaXRcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCQodGhpcykucGFyZW50KCkuaGFzKCcuYWN0aXZlJykpIHtcclxuXHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCB0aGlzO1xyXG5cdFx0XHRcdGxldCBhZGQgPSAkKHRoaXMpLmRhdGEoJ2FkZCcpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYWRkLCBjYWxsQmFjayk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdhW2RhdGEtdG9nZ2xlPVwiYWpheFwiXVt0eXBlPVwic3VibWl0XCJdLCBidXR0b25bZGF0YS10b2dnbGU9XCJhamF4XCJdW3R5cGU9XCJzdWJtaXRcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCgkZm9ybSA9ICQoJyMnICsgJCh0aGlzKS5hdHRyKCdmb3JtJykpKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xyXG5cdFx0XHRcdGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpIHx8IHRoaXM7XHJcblx0XHRcdFx0bGV0IGFkZCA9ICQodGhpcykuZGF0YSgnYWRkJyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHR2YXIgbWV0aG9kID0gJ1BPU1QnO1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm0uZ2V0KDApKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dmFyIG1ldGhvZCA9ICRmb3JtLmF0dHIoJ21ldGhvZCcpIHx8ICdHRVQnO1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSAkZm9ybS5zZXJpYWxpemVBcnJheSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCwgbWV0aG9kLCBkYXRhLCBhZGQsIGNhbGxCYWNrKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdkaXZbZGF0YS10b2dnbGU9XCJhamF4XCJdJykuZWFjaChmdW5jdGlvbihlKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCB0aGlzO1xyXG5cdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0bGV0IGFkZCA9ICQodGhpcykuZGF0YSgnYWRkJyk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGFkZCwgY2FsbEJhY2spO1xyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0fSxcclxuXHRcdFxyXG5cdHNldDogZnVuY3Rpb24gKHRhcmdldCwgdXJsLCBtZXRob2QgPSAnR0VUJywgZGF0YSA9IFtdLCBhZGQgPSBmYWxzZSwgY2FsbEJhY2sgPSB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpKSB7XHJcblx0XHRcclxuXHRcdGlmICh0YXJnZXQgJiYgdXJsKSB7XHJcblx0XHRcdC8vJCh0YXJnZXQpLmNsb3Nlc3QoJy5tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcblx0XHRcdGlmIChhZGQgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0JCh0YXJnZXQpXHJcblx0XHRcdFx0XHQuc2hvdygpXHJcblx0XHRcdFx0XHQuZW1wdHkoKVxyXG5cdFx0XHRcdFx0LmFwcGVuZChpY29uLmxvYWRpbmcpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQodGFyZ2V0KVxyXG5cdFx0XHRcdFx0LnNob3coKVxyXG5cdFx0XHRcdFx0LmZpbmQoJ1tkYXRhLXRvZ2dsZT1cImFqYXhcIl0nKS5yZW1vdmUoKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHQkLmFqYXgoe1xyXG5cdFx0XHRcdHVybCA6IHVybCxcclxuXHRcdFx0XHR0eXBlOiBtZXRob2QsXHJcblx0XHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0XHRjb250ZW50VHlwZTogKGRhdGEuY29uc3RydWN0b3IgPT09IEZvcm1EYXRhKT9mYWxzZTonYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04JyxcclxuXHRcdFx0XHRwcm9jZXNzRGF0YTogKGRhdGEuY29uc3RydWN0b3IgIT09IEZvcm1EYXRhKSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuXHRcdFx0XHRcdGNhbGxCYWNrKHRhcmdldCwgcmVzdWx0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbih4aHIsIHRocm93bkVycm9yKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChhZGQgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdGxldCByZXN1bHQgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPicgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCc8aDYgY2xhc3M9XCJhbGVydC1oZWFkaW5nIGZvbnQtd2VpZ2h0LWJvbGRcIj4nICsgdGV4dC5lcnJvciArICcgJyArIHhoci5zdGF0dXMgKyAnIDogJyArIHhoci5zdGF0dXNUZXh0ICsgJzwvaDY+JztcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmICgobSA9IC88dGl0bGU+KC4rKTxcXC90aXRsZT4vLmV4ZWMoeGhyLnJlc3BvbnNlVGV4dCkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzdWx0ICs9ICc8cD4nICsgbVsxXSArICc8L3A+JztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0cmVzdWx0ICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnlcIiBkYXRhLXRvZ2dsZT1cImFqYXhcIiBkYXRhLXVybD1cIicgKyB1cmwgKyAnXCIgZGF0YS10YXJnZXQ9XCInICsgdGFyZ2V0ICsgJ1wiPicgKyB0ZXh0LnJlbG9hZCArICc8L2J1dHRvbj4nICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0JzwvZGl2Pic7XHJcblx0XHRcdFx0XHRcdCQodGFyZ2V0KS5odG1sKHJlc3VsdCk7XHJcblx0XHRcdFx0XHRcdHRoYXQuZmV0Y2godGFyZ2V0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSxcclxuXHRcclxuXHRvblN1Y2Nlc3M6IGZ1bmN0aW9uICh0YXJnZXQgPSBkb2N1bWVudC5ib2R5LCByZXN1bHQgPSAnJywgY2FsbEJhY2sgPSB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpKSB7XHJcblx0XHRcclxuXHRcdCQodGFyZ2V0KS5maW5kKCcuc3Bpbm5lci1ib3JkZXInKS5wYXJlbnQoKS5yZW1vdmUoKTtcclxuXHRcdGlmIChyZXN1bHQpIHtcclxuXHRcdFx0JCh0YXJnZXQpLmh0bWwoJCh0YXJnZXQpLmh0bWwoKSArIHJlc3VsdCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBwb3BvdmVyXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcblx0XHQkKHRhcmdldCkuZmluZCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKTtcclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIEFqYXhcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHQgICAgdGhpcy5mZXRjaCh0YXJnZXQsIGNhbGxCYWNrKTtcclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIE1vZGFsICYgQ29sbGFwc2VcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0ICAgIFxyXG5cdFx0JCh0YXJnZXQpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1baHJlZj1cIiMnICsgJCh0aGlzKS5hdHRyKCdpZCcpICsgJ1wiXScpXHJcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG5cdFx0XHRcdC5ibHVyKClcclxuXHRcdFx0O1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQodGFyZ2V0KS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJykuYmx1cigpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQodGFyZ2V0KS5maW5kKCdidXR0b25bZGF0YS1kaXNtaXNzXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBCb290c3RyYXAgZGF0ZXBpY2tlclxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdFx0JCh0YXJnZXQpLmZpbmQoJy5kYXRlcGlja2VyJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5kYXRlcGlja2VyKHsnZm9ybWF0JzogJC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLmZvcm1hdH0pO1xyXG5cdFx0fSlcclxuXHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBGb3JtIG11bHRpcGxlXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcblx0XHQkKHRhcmdldCkuZmluZChcIltuYW1lJD0nX211bHRpcGxlJ11cIikuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBpZDtcclxuXHRcdFx0aWYgKGlkID0gJCh0aGlzKS5wcm9wKCduYW1lJykubWF0Y2goLyhcXFMrKV9tdWx0aXBsZSQveSkpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLnZhbCgpID09IDApIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdCQoXCJbaWRePSdcIiArIGlkWzFdICsgXCInXVwiKS5ub3QoXCJbaWQqPSdtdWx0aXBsZSddXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2RhdGVwaWNrZXInKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kYXRlcGlja2VyKCdzZXREYXRlJywgbmV3IERhdGUoKSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAncmFkaW8nKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAnY2hlY2tib3gnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAndGV4dCcgfHwgJCh0aGlzKS5pcygnc2VsZWN0JykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykudmFsKG51bGwpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykuYXR0cihcImRpc2FibGVkXCIsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJyZXF1aXJlZFwiLCAkKHRoaXMpLmRhdGEoJ3JlcXVpcmVkJykpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0JChcIltpZF49J1wiICsgaWRbMV0gKyBcIiddXCIpLm5vdChcIltpZCo9J211bHRpcGxlJ11cIikuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZGF0ZXBpY2tlcicpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRhdGVwaWNrZXIoJ3NldERhdGUnLCBudWxsKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICdyYWRpbycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICdjaGVja2JveCcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ3RleHQnIHx8ICQodGhpcykuaXMoJ3NlbGVjdCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnZhbChudWxsKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJkaXNhYmxlZFwiLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJyZXF1aXJlZFwiLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCQoJyMnICsgaWRbMV0gKyAnX211bHRpcGxlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JCh0YXJnZXQpLmZpbmQoJ2Zvcm0nKS5maW5kKCdkaXYsIGlucHV0LCBzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLmRhdGEoJ211bHRpcGxlJykpIHtcclxuXHRcdFx0XHQkKFwiW25hbWU9J1wiICsgJCh0aGlzKS5wcm9wKCdpZCcpICsgXCJfbXVsdGlwbGUnXVwiKS5maWx0ZXIoJ1t2YWx1ZT0xXScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JChcIltuYW1lPSdcIiArICQodGhpcykucHJvcCgnaWQnKSArIFwiX211bHRpcGxlJ11cIikuZmlsdGVyKCdbdmFsdWU9MF0nKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSlcclxuXHRcdFxyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gQnNDdXN0b21GaWxlSW5wdXRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHRcdGJzQ3VzdG9tRmlsZUlucHV0LmluaXQoKTtcclxuXHRcdFxyXG5cdFx0XHJcblx0fSxcclxufVxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBEZWZhdWx0cyBwYXJhbWV0ZXJzIGZvciBkYXRlcGlja2VyXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMuZm9ybWF0ID0gXCJkZC1tbS15eXl5XCI7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLndlZWtTdGFydCA9IDE7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLm1heFZpZXdNb2RlID0gMztcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMubGFuZ3VhZ2UgPSAkKGRvY3VtZW50LmJvZHkpLmRhdGEoJ2xvY2FsZScpLnJlcGxhY2UoL18vLCAnLScpO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5tdWx0aWRhdGUgPSBmYWxzZTtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMuZGF5c09mV2Vla0Rpc2FibGVkID0gXCIwLDZcIjtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMuYXV0b2Nsb3NlID0gdHJ1ZTtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMuY2FsZW5kYXJXZWVrcyA9IHRydWU7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLmNsZWFyQnRuID0gdHJ1ZTtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMudG9kYXlCdG4gPSB0cnVlO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy50b2RheUhpZ2hsaWdodCA9IHRydWU7XHJcblx0XHJcbiAgICBhamF4Lm9uU3VjY2VzcygpO1xyXG4gICAgXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=