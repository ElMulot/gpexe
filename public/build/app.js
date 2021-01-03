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

__webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.some */ "./node_modules/core-js/modules/es.array.some.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-float */ "./node_modules/core-js/modules/es.parse-float.js");

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

__webpack_require__(/*! @wikimedia/jquery.i18n/src/jquery.i18n.js */ "./node_modules/@wikimedia/jquery.i18n/src/jquery.i18n.js");

__webpack_require__(/*! @wikimedia/jquery.i18n/src/jquery.i18n.messagestore.js */ "./node_modules/@wikimedia/jquery.i18n/src/jquery.i18n.messagestore.js");

__webpack_require__(/*! ../css/global.scss */ "./assets/css/global.scss");

String.prototype.toDate = function () {
  if (s = /\d{4}-\d{2}-\d{2}/g.exec(this)) {
    var _s$0$split = s[0].split("-"),
        _s$0$split2 = _slicedToArray(_s$0$split, 3),
        _year = _s$0$split2[0],
        _month = _s$0$split2[1],
        _day = _s$0$split2[2];

    d = new Date(_year, _month - 1, _day);
    return d instanceof Date && isNaN(d) === false ? d : null;
  }

  return null;
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

Array.prototype.has = function (value) {
  return this.some(function (v) {
    return String(v) === String(value);
  });
};

$.fn.exist = function () {
  return this.length !== 0 && this;
};

$.fn.drags = function (opt) {
  opt = $.extend({
    handle: "",
    cursor: "move"
  }, opt);

  if (opt.handle === "") {
    var $el = this;
  } else {
    var $el = this.find(opt.handle);
  }

  return $el.css('cursor', opt.cursor).on("mousedown", function (e) {
    if (opt.handle === "") {
      var $drag = $(this).addClass('draggable');
    } else {
      var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
    }

    var z_idx = $drag.css('z-index'),
        drg_h = $drag.outerHeight(),
        drg_w = $drag.outerWidth(),
        pos_y = $drag.offset().top + drg_h - e.pageY,
        pos_x = $drag.offset().left + drg_w - e.pageX;
    $drag.css('z-index', 1000).parents().on("mousemove", function (e) {
      $('.draggable').offset({
        top: e.pageY + pos_y - drg_h,
        left: e.pageX + pos_x - drg_w
      }).on("mouseup", function () {
        $(this).removeClass('draggable').css('z-index', z_idx);
      });
    });
    e.preventDefault(); // disable selection
  }).on("mouseup", function () {
    if (opt.handle === "") {
      $(this).removeClass('draggable');
    } else {
      $(this).removeClass('active-handle').parent().removeClass('draggable');
    }
  });
};

global.remToPx = function (i) {
  return i * parseFloat(getComputedStyle(document.documentElement).fontSize);
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
  thead: function thead() {
    return $(document.createElement('thead'));
  },
  th: function th() {
    return $(document.createElement('th'));
  },
  tbody: function tbody() {
    return $(document.createElement('tbody'));
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
    $(container).find('form[data-toggle*="ajax"]').each(function () {
      $(this).on('submit', function (e) {
        var url = $(this).data('url');
        var target = $(this).data('target') || $(this).parent();

        if ($(this).find('input[type="file"]').exist()) {
          var method = 'POST';
          var data = new FormData($(this).get(0));
        } else {
          var method = $(this).attr('method') || 'GET';
          var data = $(this).serializeArray();
        }

        that.set(target, url, {
          method: method,
          from: this,
          data: data
        });
        return false;
      });

      if ($(this).hasClass('active')) {
        $(this).trigger('submit');
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
  // Translator
  //---------------------
  var locale = $('html').attr('lang');
  $.i18n().load({
    locale: __webpack_require__("./assets/js/locales sync recursive ^\\.\\/.*\\.json$")("./" + locale + ".json")
  });
  $.i18n({
    locale: 'locale'
  }); //---------------------
  // Global icons
  //---------------------

  global.icon = {
    arrowUp: '<svg class="bi bi-arrow-bar-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 5.854a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L8 3.207l2.646 2.647a.5.5 0 00.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 10a.5.5 0 00.5-.5V3a.5.5 0 00-1 0v6.5a.5.5 0 00.5.5zm-4.8 1.6c0-.22.18-.4.4-.4h8.8a.4.4 0 010 .8H3.6a.4.4 0 01-.4-.4z" clip-rule="evenodd"/>' + '</svg>',
    arrowDown: '<svg class="bi bi-arrow-bar-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 10.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L8 12.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 6a.5.5 0 01.5.5V13a.5.5 0 01-1 0V6.5A.5.5 0 018 6zM2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>' + '</svg>',
    funnel: '<svg class="bi bi-funnel" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clip-rule="evenodd"/>' + '</svg>',
    funnelFill: '<svg class="bi bi-funnel-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path d="M2 3.5v-2h12v2l-4.5 5v5l-3 1v-6L2 3.5z"/>' + '<path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clip-rule="evenodd"/>' + '</svg>',
    success: '<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-check-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>' + '</svg>',
    warning: '<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-info-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>' + '</svg>',
    danger: '<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-exclamation-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>' + '</svg>',
    loading: '<div class="d-flex justify-content-center mt-4">' + '<div class="spinner-border" role="status">' + '<span class="sr-only">' + $.i18n('loading') + '</span>' + '</div>' + '</div>',
    close: '<button type="button" class="ml-2 mb-1 close ml-auto" data-dismiss="toast" aria-label=' + $.i18n('close') + '>' + '<span aria-hidden="true">&times;</span>' + '</button>'
  }; //---------------------
  // Defaults parameters for datepicker
  //---------------------

  $.fn.datepicker.defaults.format = "dd-mm-yyyy";
  $.fn.datepicker.defaults.weekStart = 1;
  $.fn.datepicker.defaults.maxViewMode = 3;
  $.fn.datepicker.defaults.language = locale.replace(/_/, '-');
  $.fn.datepicker.defaults.multidate = false;
  $.fn.datepicker.defaults.daysOfWeekDisabled = "0,6";
  $.fn.datepicker.defaults.autoclose = true;
  $.fn.datepicker.defaults.calendarWeeks = true;
  $.fn.datepicker.defaults.clearBtn = true;
  $.fn.datepicker.defaults.todayBtn = true;
  $.fn.datepicker.defaults.todayHighlight = true;
  $(document).on('ajax.beforeSend', function (e, jqXHR, settings) {
    $(e.target).show().empty().append(global.icon.loading);
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
    $(e.target).on('hidden.bs.modal', function (e) {
      $('[data-toggle="modal"]').blur();
      $(e.target).find('.modal-content').removeAttr('style');
    });
    $(e.target).find('button[data-dismiss]').on('click', function () {
      $('#modal').modal('hide');
    });
    $(e.target).find('.modal-header').each(function () {
      $(this).closest('.modal-dialog').drags({
        handle: '.modal-header'
      });
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
        $(this).on('click', function () {
          var defined = $(this).val() != 0;
          $("[id^='" + id[1] + "']").not("[id$='multiple_0']").not("[id$='multiple_1']").each(function () {
            if ($(this).hasClass('datepicker')) {
              $(this).datepicker('setDate', new Date());
            } else if ($(this).attr('type') == 'radio') {
              $(this).prop('checked', false);
            } else if ($(this).attr('type') == 'checkbox') {
              $(this).prop('checked', false);
              $(this).prop('indeterminate', false);
            } else if ($(this).attr('type') == 'text' || $(this).is('select') || $(this).is('textarea')) {
              $(this).val(null);
            } else {
              return;
            }

            $(this).attr("disabled", defined);
            $(this).attr("required", $(this).data('required') && defined === false);
          });
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
    var result = '<div class="alert alert-danger">' + '<h6 class="alert-heading font-weight-bold">' + $.i18n('error') + ' ' + jqXHR.status + ' : ' + jqXHR.statusText + '</h6>';

    if ((m = /<title>(.+)<\/title>/.exec(jqXHR.responseText)) !== null) {
      result += '<p>' + m[1] + '</p>';
    }

    result += '<button type="button" class="btn btn-sm btn-primary" >' + $.i18n('reload') + '</button>' + '</div>';
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

/***/ }),

/***/ "./assets/js/locales sync recursive ^\\.\\/.*\\.json$":
/*!***********************************************!*\
  !*** ./assets/js/locales sync ^\.\/.*\.json$ ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./en_GB.json": "./assets/js/locales/en_GB.json",
	"./fr_FR.json": "./assets/js/locales/fr_FR.json"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/js/locales sync recursive ^\\.\\/.*\\.json$";

/***/ }),

/***/ "./assets/js/locales/en_GB.json":
/*!**************************************!*\
  !*** ./assets/js/locales/en_GB.json ***!
  \**************************************/
/*! exports provided: @metadata, yes, no, noneSelected, multipleSeparator, selectAll, notApplicable, filter, loading, details, error, reload, edit, delete, close, all, fromDate, toDate, highlight, date, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"@metadata\":{\"authors\":[\"Mulot\"],\"last-updated\":\"2020-10-14\",\"locale\":\"en_GB\",\"message-documentation\":\"\",\"AnotherMetadata\":\"Translation file for locale en_GB\"},\"yes\":\"Yes\",\"no\":\"No\",\"noneSelected\":\"None selected\",\"multipleSeparator\":\",\",\"selectAll\":\"Select all\",\"notApplicable\":\"n/a\",\"filter\":\"Filter\",\"loading\":\"Loading...\",\"details\":\"Details\",\"error\":\"Error\",\"reload\":\"Reload\",\"edit\":\"Edit\",\"delete\":\"Delete\",\"close\":\"Close\",\"all\":\"All\",\"fromDate\":\"From date\",\"toDate\":\"To date\",\"highlight\":\"Highlight\",\"date\":\"Date\"}");

/***/ }),

/***/ "./assets/js/locales/fr_FR.json":
/*!**************************************!*\
  !*** ./assets/js/locales/fr_FR.json ***!
  \**************************************/
/*! exports provided: @metadata, yes, no, noneSelected, multipleSeparator, selectAll, notApplicable, filter, loading, details, error, reload, edit, delete, close, all, fromDate, toDate, highlight, date, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"@metadata\":{\"authors\":[\"Mulot\"],\"last-updated\":\"2020-10-14\",\"locale\":\"fr_FR\",\"message-documentation\":\"\",\"AnotherMetadata\":\"Translation file for locale fr_FR\"},\"yes\":\"Oui\",\"no\":\"Non\",\"noneSelected\":\"Aucun sélectionné\",\"multipleSeparator\":\" \",\"selectAll\":\"Sectionner tout\",\"notApplicable\":\"n/a\",\"filter\":\"Filtrer\",\"loading\":\"Chargement...\",\"details\":\"Détails\",\"error\":\"Erreur\",\"reload\":\"Relancer\",\"edit\":\"Editer\",\"delete\":\"Supprimer\",\"close\":\"Fermer\",\"all\":\"Tout\",\"fromDate\":\"De\",\"toDate\":\"A\",\"highlight\":\"Surligner\",\"date\":\"Date\"}");

/***/ })

},[["./assets/js/app.js","runtime","vendors~app~dashboard~document~program","vendors~app~dashboard~document","vendors~app~document","vendors~app"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xvY2FsZXMgc3luYyBeXFwuXFwvLipcXC5qc29uJCJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImJzQ3VzdG9tRmlsZUlucHV0IiwiU3RyaW5nIiwicHJvdG90eXBlIiwidG9EYXRlIiwicyIsImV4ZWMiLCJzcGxpdCIsInllYXIiLCJtb250aCIsImRheSIsImQiLCJEYXRlIiwiaXNOYU4iLCJmb3JtYXQiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImpvaW4iLCJhZGREYXlzIiwiZGF5cyIsImRhdGUiLCJ2YWx1ZU9mIiwic2V0RGF0ZSIsIkFycmF5IiwiaGFzIiwidmFsdWUiLCJzb21lIiwidiIsImZuIiwiZXhpc3QiLCJsZW5ndGgiLCJkcmFncyIsIm9wdCIsImV4dGVuZCIsImhhbmRsZSIsImN1cnNvciIsIiRlbCIsImZpbmQiLCJjc3MiLCJvbiIsImUiLCIkZHJhZyIsImFkZENsYXNzIiwicGFyZW50Iiwiel9pZHgiLCJkcmdfaCIsIm91dGVySGVpZ2h0IiwiZHJnX3ciLCJvdXRlcldpZHRoIiwicG9zX3kiLCJvZmZzZXQiLCJ0b3AiLCJwYWdlWSIsInBvc194IiwibGVmdCIsInBhZ2VYIiwicGFyZW50cyIsInJlbW92ZUNsYXNzIiwicHJldmVudERlZmF1bHQiLCJnbG9iYWwiLCJyZW1Ub1B4IiwiaSIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJmb250U2l6ZSIsImNyZWF0ZSIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJhIiwic3BhbiIsImZpZWxkc2V0IiwiaW5wdXQiLCJhdHRyIiwiY2hlY2tib3giLCJzZWxlY3QiLCJvcHRpb24iLCJsYWJlbCIsImJ1dHRvbiIsIm1lbnVCdXR0b24iLCJzbWFsbEJ1dHRvbiIsInRoZWFkIiwidGgiLCJ0Ym9keSIsInRyIiwidGQiLCJ1bCIsImxpIiwiYWpheCIsImZldGNoIiwiY29udGFpbmVyIiwidGhhdCIsIm5vdCIsImVhY2giLCJ1cmwiLCJkYXRhIiwidGFyZ2V0Iiwic2V0IiwiZnJvbSIsImhhc0NsYXNzIiwidHJpZ2dlciIsImZpbHRlciIsIiRmb3JtIiwibWV0aG9kIiwiRm9ybURhdGEiLCJnZXQiLCJzZXJpYWxpemVBcnJheSIsIm9wdGlvbnMiLCJtb2RhbCIsImlzIiwidHlwZSIsImNvbnRlbnRUeXBlIiwiY29uc3RydWN0b3IiLCJwcm9jZXNzRGF0YSIsImJlZm9yZVNlbmQiLCJqcVhIUiIsInNldHRpbmdzIiwic3VjY2VzcyIsInJlc3VsdCIsInRleHRTdGF0dXMiLCJlcnJvciIsImVycm9yVGhyb3duIiwicmVhZHkiLCJsb2NhbGUiLCJpMThuIiwibG9hZCIsImljb24iLCJhcnJvd1VwIiwiYXJyb3dEb3duIiwiZnVubmVsIiwiZnVubmVsRmlsbCIsIndhcm5pbmciLCJkYW5nZXIiLCJsb2FkaW5nIiwiY2xvc2UiLCJkYXRlcGlja2VyIiwiZGVmYXVsdHMiLCJ3ZWVrU3RhcnQiLCJtYXhWaWV3TW9kZSIsImxhbmd1YWdlIiwicmVwbGFjZSIsIm11bHRpZGF0ZSIsImRheXNPZldlZWtEaXNhYmxlZCIsImF1dG9jbG9zZSIsImNhbGVuZGFyV2Vla3MiLCJjbGVhckJ0biIsInRvZGF5QnRuIiwidG9kYXlIaWdobGlnaHQiLCJzaG93IiwiZW1wdHkiLCJhcHBlbmQiLCJyZW1vdmUiLCJodG1sIiwicG9wb3ZlciIsImJsdXIiLCJyZW1vdmVBdHRyIiwiY2xvc2VzdCIsImlkIiwicHJvcCIsIm1hdGNoIiwiZGVmaW5lZCIsInZhbCIsImluaXQiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwibSIsInJlc3BvbnNlVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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TSxDQUFDOEIsSUFBUCxDQUFZUyxHQUFaLENBQWdCMUQsQ0FBQyxDQUFDeUQsTUFBbEIsRUFBMEJtQixLQUFLLENBQUNDLFFBQU4sQ0FBZXRCLEdBQXpDLEVBQThDO0FBQUNDLFlBQUksRUFBRW9CLEtBQUssQ0FBQ0MsUUFBTixDQUFlckI7QUFBdEIsT0FBOUM7QUFDQSxLQUZEO0FBR0csR0FoQkQ7QUFrQkFsRyxHQUFDLENBQUNrRSxRQUFELENBQUQsQ0FBWXFDLE9BQVosQ0FBb0IsY0FBcEI7QUFFSCxDQWpPRCxFOzs7Ozs7Ozs7Ozs7QUM3VkE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyRSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG5yZXF1aXJlKCdib290c3RyYXAnKTtcclxucmVxdWlyZSgnYm9vdHN0cmFwLWRhdGVwaWNrZXInKTtcclxucmVxdWlyZSgnYm9vdHN0cmFwLWRhdGVwaWNrZXIvZGlzdC9sb2NhbGVzL2Jvb3RzdHJhcC1kYXRlcGlja2VyLmZyLm1pbi5qcycpO1xyXG5jb25zdCBic0N1c3RvbUZpbGVJbnB1dCA9IHJlcXVpcmUoJ2JzLWN1c3RvbS1maWxlLWlucHV0Jyk7XHJcbnJlcXVpcmUgKCdAd2lraW1lZGlhL2pxdWVyeS5pMThuL3NyYy9qcXVlcnkuaTE4bi5qcycpO1xyXG5yZXF1aXJlICgnQHdpa2ltZWRpYS9qcXVlcnkuaTE4bi9zcmMvanF1ZXJ5LmkxOG4ubWVzc2FnZXN0b3JlLmpzJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9nbG9iYWwuc2NzcycpO1xyXG5cclxuU3RyaW5nLnByb3RvdHlwZS50b0RhdGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0aWYgKHMgPSAvXFxkezR9LVxcZHsyfS1cXGR7Mn0vZy5leGVjKHRoaXMpKSB7XHJcblx0XHRjb25zdCBbeWVhciwgbW9udGgsIGRheV0gPSBzWzBdLnNwbGl0KFwiLVwiKTtcclxuXHRcdGQgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRheSk7XHJcblx0XHRyZXR1cm4gKGQgaW5zdGFuY2VvZiBEYXRlICYmIGlzTmFOKGQpID09PSBmYWxzZSk/ZDpudWxsO1xyXG5cdH1cclxuXHRyZXR1cm4gbnVsbDtcclxufTtcclxuXHJcbkRhdGUucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdGRheSA9IHRoaXMuZ2V0RGF0ZSgpO1xyXG5cdG1vbnRoID0gdGhpcy5nZXRNb250aCgpICsgMTtcclxuXHR5ZWFyID0gdGhpcy5nZXRGdWxsWWVhcigpO1xyXG5cdFxyXG5cdGlmIChtb250aCA8IDEwKSBtb250aCA9ICcwJyArIG1vbnRoO1xyXG5cdGlmIChkYXkgPCAxMCkgZGF5ID0gJzAnICsgZGF5O1xyXG5cdFxyXG5cdHJldHVybiBbZGF5LCBtb250aCwgeWVhcl0uam9pbignLScpO1xyXG5cdFxyXG59XHJcblxyXG5EYXRlLnByb3RvdHlwZS5hZGREYXlzID0gZnVuY3Rpb24oZGF5cykge1xyXG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSk7XHJcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBkYXlzKTtcclxuICAgIHJldHVybiBkYXRlO1xyXG59XHJcblxyXG5BcnJheS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24odmFsdWUpIHtcclxuXHRyZXR1cm4gdGhpcy5zb21lKHYgPT4gU3RyaW5nKHYpID09PSBTdHJpbmcodmFsdWUpKVxyXG59XHJcblxyXG4kLmZuLmV4aXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB0aGlzLmxlbmd0aCAhPT0gMCAmJiB0aGlzO1xyXG59XHJcblxyXG4kLmZuLmRyYWdzID0gZnVuY3Rpb24ob3B0KSB7XHJcblxyXG4gICAgb3B0ID0gJC5leHRlbmQoe2hhbmRsZTpcIlwiLGN1cnNvcjpcIm1vdmVcIn0sIG9wdCk7XHJcblxyXG4gICAgaWYob3B0LmhhbmRsZSA9PT0gXCJcIikge1xyXG4gICAgICAgIHZhciAkZWwgPSB0aGlzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgJGVsID0gdGhpcy5maW5kKG9wdC5oYW5kbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAkZWwuY3NzKCdjdXJzb3InLCBvcHQuY3Vyc29yKS5vbihcIm1vdXNlZG93blwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYob3B0LmhhbmRsZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICB2YXIgJGRyYWcgPSAkKHRoaXMpLmFkZENsYXNzKCdkcmFnZ2FibGUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgJGRyYWcgPSAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtaGFuZGxlJykucGFyZW50KCkuYWRkQ2xhc3MoJ2RyYWdnYWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgel9pZHggPSAkZHJhZy5jc3MoJ3otaW5kZXgnKSxcclxuICAgICAgICAgICAgZHJnX2ggPSAkZHJhZy5vdXRlckhlaWdodCgpLFxyXG4gICAgICAgICAgICBkcmdfdyA9ICRkcmFnLm91dGVyV2lkdGgoKSxcclxuICAgICAgICAgICAgcG9zX3kgPSAkZHJhZy5vZmZzZXQoKS50b3AgKyBkcmdfaCAtIGUucGFnZVksXHJcbiAgICAgICAgICAgIHBvc194ID0gJGRyYWcub2Zmc2V0KCkubGVmdCArIGRyZ193IC0gZS5wYWdlWDtcclxuICAgICAgICAkZHJhZy5jc3MoJ3otaW5kZXgnLCAxMDAwKS5wYXJlbnRzKCkub24oXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAkKCcuZHJhZ2dhYmxlJykub2Zmc2V0KHtcclxuICAgICAgICAgICAgICAgIHRvcDplLnBhZ2VZICsgcG9zX3kgLSBkcmdfaCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6ZS5wYWdlWCArIHBvc194IC0gZHJnX3dcclxuICAgICAgICAgICAgfSkub24oXCJtb3VzZXVwXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZHJhZ2dhYmxlJykuY3NzKCd6LWluZGV4Jywgel9pZHgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIGRpc2FibGUgc2VsZWN0aW9uXHJcbiAgICB9KS5vbihcIm1vdXNldXBcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYob3B0LmhhbmRsZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdkcmFnZ2FibGUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUtaGFuZGxlJykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2RyYWdnYWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuZ2xvYmFsLnJlbVRvUHggPSBmdW5jdGlvbiAoaSkge1xyXG5cdHJldHVybiBpICogcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZm9udFNpemUpO1xyXG59XHJcblxyXG5nbG9iYWwuY3JlYXRlID0ge1xyXG5cdGRpdjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcclxuXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRhOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSk7XHJcblx0XHRcdC8vLmFkZENsYXNzKCdidG4gYnRuLXNtIHRleHQtbm93cmFwJylcclxuXHR9LFxyXG5cdFxyXG5cdHNwYW46IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0ZmllbGRzZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKSlcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGlucHV0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ3RleHQnKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20nKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0Y2hlY2tib3g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWlucHV0JylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHNlbGVjdDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSlcclxuXHRcdFx0LmFkZENsYXNzKCdmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdG9wdGlvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSlcclxuXHRcdFx0LmF0dHIoJ3ZhbHVlJywgJycpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRsYWJlbDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWxhYmVsIHctMTAwIHRleHQtbm93cmFwJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LmFkZENsYXNzKCdidG4nKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0bWVudUJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXNtIGJ0bi1wcmltYXJ5IHRleHQtbm93cmFwIHJvdW5kZWQtMCcpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRzbWFsbEJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXNtIG14LTEgdGV4dC1ub3dyYXAnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dGhlYWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dGg6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dGJvZHk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dHI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0bGk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcbn07XHJcblxyXG5nbG9iYWwuYWpheCA9IHtcclxuXHRcdFxyXG5cdGZldGNoOiBmdW5jdGlvbihjb250YWluZXIpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQkKGNvbnRhaW5lcikuZmluZCgnYVtkYXRhLXRvZ2dsZSo9XCJhamF4XCJdLCBidXR0b25bZGF0YS10b2dnbGUqPVwiYWpheFwiXScpLm5vdCgnW3R5cGU9XCJzdWJtaXRcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCQodGhpcykucGFyZW50KCkuaGFzKCcuYWN0aXZlJykpIHtcclxuXHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCB0aGlzO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsLCB7ZnJvbTogdGhpc30pO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JChjb250YWluZXIpLmZpbmQoJ2FbZGF0YS10b2dnbGUqPVwiYWpheFwiXSwgYnV0dG9uW2RhdGEtdG9nZ2xlKj1cImFqYXhcIl0nKS5maWx0ZXIoJ1t0eXBlPVwic3VibWl0XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgoJGZvcm0gPSAkKCcjJyArICQodGhpcykuYXR0cignZm9ybScpKSkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQkZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCB0aGlzO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICgkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmV4aXN0KCkpIHtcclxuXHRcdFx0XHRcdHZhciBtZXRob2QgPSAnUE9TVCc7XHJcblx0XHRcdFx0XHR2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybS5nZXQoMCkpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR2YXIgbWV0aG9kID0gJGZvcm0uYXR0cignbWV0aG9kJykgfHwgJ0dFVCc7XHJcblx0XHRcdFx0XHR2YXIgZGF0YSA9ICRmb3JtLnNlcmlhbGl6ZUFycmF5KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsLCB7bWV0aG9kOiBtZXRob2QsIGZyb206IHRoaXMsIGRhdGE6IGRhdGF9KTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdmb3JtW2RhdGEtdG9nZ2xlKj1cImFqYXhcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0JCh0aGlzKS5vbignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xyXG5cdFx0XHRcdGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpIHx8ICQodGhpcykucGFyZW50KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5leGlzdCgpKSB7XHJcblx0XHRcdFx0XHR2YXIgbWV0aG9kID0gJ1BPU1QnO1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKS5nZXQoMCkpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR2YXIgbWV0aG9kID0gJCh0aGlzKS5hdHRyKCdtZXRob2QnKSB8fCAnR0VUJztcclxuXHRcdFx0XHRcdHZhciBkYXRhID0gJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCwge21ldGhvZDogbWV0aG9kLCBmcm9tOiB0aGlzLCBkYXRhOiBkYXRhfSk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdCQodGhpcykudHJpZ2dlcignc3VibWl0Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JChjb250YWluZXIpLmZpbmQoJ2RpdltkYXRhLXRvZ2dsZSo9XCJhamF4XCJdJykuZWFjaChmdW5jdGlvbihlKSB7XHJcblx0XHRcdGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpIHx8IHRoaXM7XHJcblx0XHRcdGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhhdC5zZXQodGFyZ2V0LCB1cmwsIHtmcm9tOiB0aGlzfSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH0sXHJcblx0XHRcclxuXHRzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHVybCwgb3B0aW9ucyA9IHt9KSB7XHJcblx0XHRcclxuXHRcdGlmICh0YXJnZXQgJiYgdXJsKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAob3B0aW9ucy5tb2RhbCA9PT0gdHJ1ZSB8fCAob3B0aW9ucy5mcm9tICYmICQob3B0aW9ucy5mcm9tKS5pcygnW2RhdGEtdG9nZ2xlKj1cIm1vZGFsXCJdJykpKSB7XHJcblx0XHRcdFx0aWYgKCQodGFyZ2V0KS5pcygnLm1vZGFsJykpIHtcclxuXHRcdFx0XHRcdCQodGFyZ2V0KS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkKHRhcmdldCkucGFyZW50cygnLm1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGxldCBtZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCAnR0VUJztcclxuXHRcdFx0bGV0IGRhdGEgPSBvcHRpb25zLmRhdGEgfHwgW107XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0dXJsIDogdXJsLFxyXG5cdFx0XHRcdHR5cGU6IG1ldGhvZCxcclxuXHRcdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHRcdGNvbnRlbnRUeXBlOiAoZGF0YS5jb25zdHJ1Y3RvciA9PT0gRm9ybURhdGEpP2ZhbHNlOidhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnLFxyXG5cdFx0XHRcdHByb2Nlc3NEYXRhOiAoZGF0YS5jb25zdHJ1Y3RvciAhPT0gRm9ybURhdGEpLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKGpxWEhSLCBzZXR0aW5ncykge1xyXG5cdFx0XHRcdFx0anFYSFIuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuXHRcdFx0XHRcdGpxWEhSLmZyb20gPSAkKG9wdGlvbnMuZnJvbSk7XHJcblx0XHRcdFx0XHQkKHRhcmdldCkudHJpZ2dlcignYWpheC5iZWZvcmVTZW5kJywgW2pxWEhSLCBzZXR0aW5nc10pO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHRcdFx0anFYSFIuZnJvbSA9ICQob3B0aW9ucy5mcm9tKTtcclxuXHRcdFx0XHRcdCQodGFyZ2V0KS50cmlnZ2VyKCdhamF4LnN1Y2Nlc3MnLCBbcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUl0pO1xyXG5cdFx0XHRcdFx0JCh0YXJnZXQpLnRyaWdnZXIoJ2FqYXguY29tcGxldGVkJywgW3Jlc3VsdCwgdGV4dFN0YXR1cywganFYSFJdKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuXHRcdFx0XHRcdGpxWEhSLmZyb20gPSAkKG9wdGlvbnMuZnJvbSk7XHJcblx0XHRcdFx0XHQkKHRhcmdldCkudHJpZ2dlcignYWpheC5lcnJvcicsIFtqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd25dKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sXHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gVHJhbnNsYXRvclxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdGxldCBsb2NhbGUgPSAkKCdodG1sJykuYXR0cignbGFuZycpO1xyXG5cdFxyXG5cdCQuaTE4bigpLmxvYWQoe1xyXG5cdFx0bG9jYWxlOiByZXF1aXJlKCcuL2xvY2FsZXMvJyArIGxvY2FsZSArICcuanNvbicpXHJcblx0fSk7XHJcblx0XHJcblx0JC5pMThuKHtcclxuXHRcdGxvY2FsZTogJ2xvY2FsZScsXHJcblx0fSk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBHbG9iYWwgaWNvbnNcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdGdsb2JhbC5pY29uID0ge1xyXG5cdFx0YXJyb3dVcDpcclxuXHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1hcnJvdy1iYXItdXBcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS4zNTQgNS44NTRhLjUuNSAwIDAwMC0uNzA4bC0zLTNhLjUuNSAwIDAwLS43MDggMGwtMyAzYS41LjUgMCAxMC43MDguNzA4TDggMy4yMDdsMi42NDYgMi42NDdhLjUuNSAwIDAwLjcwOCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggMTBhLjUuNSAwIDAwLjUtLjVWM2EuNS41IDAgMDAtMSAwdjYuNWEuNS41IDAgMDAuNS41em0tNC44IDEuNmMwLS4yMi4xOC0uNC40LS40aDguOGEuNC40IDAgMDEwIC44SDMuNmEuNC40IDAgMDEtLjQtLjR6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcdFxyXG5cdFx0YXJyb3dEb3duOlxyXG5cdFx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktYXJyb3ctYmFyLWRvd25cIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuMzU0IDEwLjE0NmEuNS41IDAgMDEwIC43MDhsLTMgM2EuNS41IDAgMDEtLjcwOCAwbC0zLTNhLjUuNSAwIDAxLjcwOC0uNzA4TDggMTIuNzkzbDIuNjQ2LTIuNjQ3YS41LjUgMCAwMS43MDggMHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCA2YS41LjUgMCAwMS41LjVWMTNhLjUuNSAwIDAxLTEgMFY2LjVBLjUuNSAwIDAxOCA2ek0yIDMuNWEuNS41IDAgMDEuNS0uNWgxMWEuNS41IDAgMDEwIDFoLTExYS41LjUgMCAwMS0uNS0uNXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0XHRmdW5uZWw6XHJcblx0XHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1mdW5uZWxcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEuNSAxLjVBLjUuNSAwIDAxMiAxaDEyYS41LjUgMCAwMS41LjV2MmEuNS41IDAgMDEtLjEyOC4zMzRMMTAgOC42OTJWMTMuNWEuNS41IDAgMDEtLjM0Mi40NzRsLTMgMUEuNS41IDAgMDE2IDE0LjVWOC42OTJMMS42MjggMy44MzRBLjUuNSAwIDAxMS41IDMuNXYtMnptMSAuNXYxLjMwOGw0LjM3MiA0Ljg1OEEuNS41IDAgMDE3IDguNXY1LjMwNmwyLS42NjZWOC41YS41LjUgMCAwMS4xMjgtLjMzNEwxMy41IDMuMzA4VjJoLTExelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcdFx0XHJcblx0XHRmdW5uZWxGaWxsOlxyXG5cdFx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktZnVubmVsLWZpbGxcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdFx0JzxwYXRoIGQ9XCJNMiAzLjV2LTJoMTJ2MmwtNC41IDV2NWwtMyAxdi02TDIgMy41elwiLz4nICtcclxuXHRcdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xLjUgMS41QS41LjUgMCAwMTIgMWgxMmEuNS41IDAgMDEuNS41djJhLjUuNSAwIDAxLS4xMjguMzM0TDEwIDguNjkyVjEzLjVhLjUuNSAwIDAxLS4zNDIuNDc0bC0zIDFBLjUuNSAwIDAxNiAxNC41VjguNjkyTDEuNjI4IDMuODM0QS41LjUgMCAwMTEuNSAzLjV2LTJ6bTEgLjV2MS4zMDhsNC4zNzIgNC44NThBLjUuNSAwIDAxNyA4LjV2NS4zMDZsMi0uNjY2VjguNWEuNS41IDAgMDEuMTI4LS4zMzRMMTMuNSAzLjMwOFYyaC0xMXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0XHRzdWNjZXNzOlxyXG5cdFx0XHRcdCc8c3ZnIHdpZHRoPVwiMS41ZW1cIiBoZWlnaHQ9XCIxLjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBjbGFzcz1cImJpIGJpLWNoZWNrLXNxdWFyZS1maWxsXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yIDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0ySDJ6bTEwLjAzIDQuOTdhLjc1Ljc1IDAgMCAwLTEuMDguMDIyTDcuNDc3IDkuNDE3IDUuMzg0IDcuMzIzYS43NS43NSAwIDAgMC0xLjA2IDEuMDZMNi45NyAxMS4wM2EuNzUuNzUgMCAwIDAgMS4wNzktLjAybDMuOTkyLTQuOTlhLjc1Ljc1IDAgMCAwLS4wMS0xLjA1elwiLz4nICtcclxuXHRcdFx0XHQnPC9zdmc+JyxcclxuXHRcdFxyXG5cdFx0d2FybmluZzpcclxuXHRcdFx0XHQnPHN2ZyB3aWR0aD1cIjEuNWVtXCIgaGVpZ2h0PVwiMS41ZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgY2xhc3M9XCJiaSBiaS1pbmZvLXNxdWFyZS1maWxsXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0wIDJhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjJ6bTguOTMgNC41ODhsLTIuMjkuMjg3LS4wODIuMzguNDUuMDgzYy4yOTQuMDcuMzUyLjE3Ni4yODguNDY5bC0uNzM4IDMuNDY4Yy0uMTk0Ljg5Ny4xMDUgMS4zMTkuODA4IDEuMzE5LjU0NSAwIDEuMTc4LS4yNTIgMS40NjUtLjU5OGwuMDg4LS40MTZjLS4yLjE3Ni0uNDkyLjI0Ni0uNjg2LjI0Ni0uMjc1IDAtLjM3NS0uMTkzLS4zMDQtLjUzM0w4LjkzIDYuNTg4ek04IDUuNWExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDJ6XCIvPicgK1xyXG5cdFx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0XHRkYW5nZXI6XHJcblx0XHRcdFx0Jzxzdmcgd2lkdGg9XCIxLjVlbVwiIGhlaWdodD1cIjEuNWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzPVwiYmkgYmktZXhjbGFtYXRpb24tc3F1YXJlLWZpbGxcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIgMGEyIDIgMCAwIDAtMiAydjEyYTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJIMnptNiA0YS45MDUuOTA1IDAgMCAwLS45Ljk5NWwuMzUgMy41MDdhLjU1Mi41NTIgMCAwIDAgMS4xIDBsLjM1LTMuNTA3QS45MDUuOTA1IDAgMCAwIDggNHptLjAwMiA2YTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMnpcIi8+JyArXHJcblx0XHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcclxuXHRcdGxvYWRpbmc6XHJcblx0XHRcdCc8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNFwiPicgK1xyXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+JyArXHJcblx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+JyArICQuaTE4bignbG9hZGluZycpICsgJzwvc3Bhbj4nICtcclxuXHRcdFx0XHQnPC9kaXY+JyArXHJcblx0XHRcdCc8L2Rpdj4nLFxyXG5cdFx0XHJcblx0XHRjbG9zZTpcclxuXHRcdCAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtbC0yIG1iLTEgY2xvc2UgbWwtYXV0b1wiIGRhdGEtZGlzbWlzcz1cInRvYXN0XCIgYXJpYS1sYWJlbD0nICsgJC5pMThuKCdjbG9zZScpICsgJz4nICtcclxuXHRcdCAgICBcdCc8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPicgK1xyXG5cdFx0ICAgICc8L2J1dHRvbj4nLFxyXG5cdFx0XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIERlZmF1bHRzIHBhcmFtZXRlcnMgZm9yIGRhdGVwaWNrZXJcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5mb3JtYXQgPSBcImRkLW1tLXl5eXlcIjtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMud2Vla1N0YXJ0ID0gMTtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMubWF4Vmlld01vZGUgPSAzO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5sYW5ndWFnZSA9IGxvY2FsZS5yZXBsYWNlKC9fLywgJy0nKTtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMubXVsdGlkYXRlID0gZmFsc2U7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLmRheXNPZldlZWtEaXNhYmxlZCA9IFwiMCw2XCI7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLmF1dG9jbG9zZSA9IHRydWU7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLmNhbGVuZGFyV2Vla3MgPSB0cnVlO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5jbGVhckJ0biA9IHRydWU7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLnRvZGF5QnRuID0gdHJ1ZTtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMudG9kYXlIaWdobGlnaHQgPSB0cnVlO1xyXG4gICAgXHJcblx0XHJcblx0XHJcbiAgICAkKGRvY3VtZW50KS5vbignYWpheC5iZWZvcmVTZW5kJywgZnVuY3Rpb24oZSwganFYSFIsIHNldHRpbmdzKSB7XHJcbiAgICBcdCQoZS50YXJnZXQpXHJcblx0XHRcdC5zaG93KClcclxuXHRcdFx0LmVtcHR5KClcclxuXHRcdFx0LmFwcGVuZChnbG9iYWwuaWNvbi5sb2FkaW5nKVxyXG5cdFx0O1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdhamF4LnN1Y2Nlc3MnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcbiAgICBcdFxyXG5cdFx0JChlLnRhcmdldCkuZmluZCgnLnNwaW5uZXItYm9yZGVyJykucGFyZW50KCkucmVtb3ZlKCk7XHJcblx0XHRpZiAocmVzdWx0KSB7XHJcblx0XHRcdCQoZS50YXJnZXQpLmh0bWwoJChlLnRhcmdldCkuaHRtbCgpICsgcmVzdWx0KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIHBvcG92ZXJcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBBamF4XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcblx0ICAgIGdsb2JhbC5hamF4LmZldGNoKGUudGFyZ2V0KTtcclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIE1vZGFsICYgQ29sbGFwc2VcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0ICAgIFxyXG5cdFx0JChlLnRhcmdldCkub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtocmVmPVwiIycgKyAkKHRoaXMpLmF0dHIoJ2lkJykgKyAnXCJdJylcclxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHRcdFx0LmJsdXIoKVxyXG5cdFx0XHQ7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JChlLnRhcmdldCkub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0JCgnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nKS5ibHVyKCk7XHJcblx0XHRcdCQoZS50YXJnZXQpLmZpbmQoJy5tb2RhbC1jb250ZW50JykucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKGUudGFyZ2V0KS5maW5kKCdidXR0b25bZGF0YS1kaXNtaXNzXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJy5tb2RhbC1oZWFkZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5tb2RhbC1kaWFsb2cnKS5kcmFncyh7aGFuZGxlOicubW9kYWwtaGVhZGVyJ30pO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBCb290c3RyYXAgZGF0ZXBpY2tlclxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdFx0JChlLnRhcmdldCkuZmluZCgnLmRhdGVwaWNrZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoaXMpLmRhdGVwaWNrZXIoeydmb3JtYXQnOiAkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMuZm9ybWF0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBGb3JtIG11bHRpcGxlXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcblx0XHQkKGUudGFyZ2V0KS5maW5kKFwiW25hbWUkPSdfbXVsdGlwbGUnXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGlkO1xyXG5cdFx0XHRpZiAoaWQgPSAkKHRoaXMpLnByb3AoJ25hbWUnKS5tYXRjaCgvKFxcUyspX211bHRpcGxlJC95KSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBkZWZpbmVkID0gKCQodGhpcykudmFsKCkgIT0gMCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCQoXCJbaWRePSdcIiArIGlkWzFdICsgXCInXVwiKS5ub3QoXCJbaWQkPSdtdWx0aXBsZV8wJ11cIikubm90KFwiW2lkJD0nbXVsdGlwbGVfMSddXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdkYXRlcGlja2VyJykpIHtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRhdGVwaWNrZXIoJ3NldERhdGUnLCBuZXcgRGF0ZSgpKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAncmFkaW8nKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICdjaGVja2JveCcpIHtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICd0ZXh0JyB8fCAkKHRoaXMpLmlzKCdzZWxlY3QnKSB8fCAkKHRoaXMpLmlzKCd0ZXh0YXJlYScpKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS52YWwobnVsbCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYXR0cihcImRpc2FibGVkXCIsIGRlZmluZWQpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJyZXF1aXJlZFwiLCAkKHRoaXMpLmRhdGEoJ3JlcXVpcmVkJykgJiYgZGVmaW5lZCA9PT0gZmFsc2UpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCQoJyMnICsgaWRbMV0gKyAnX211bHRpcGxlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JChlLnRhcmdldCkuZmluZCgnZm9ybScpLmZpbmQoJ2RpdiwgaW5wdXQsIHNlbGVjdCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuZGF0YSgnbXVsdGlwbGUnKSkge1xyXG5cdFx0XHRcdCQoXCJbbmFtZT0nXCIgKyAkKHRoaXMpLnByb3AoJ2lkJykgKyBcIl9tdWx0aXBsZSddXCIpLmZpbHRlcignW3ZhbHVlPTFdJykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKFwiW25hbWU9J1wiICsgJCh0aGlzKS5wcm9wKCdpZCcpICsgXCJfbXVsdGlwbGUnXVwiKS5maWx0ZXIoJ1t2YWx1ZT0wXScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KVxyXG5cdFx0XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBCc0N1c3RvbUZpbGVJbnB1dFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdFx0YnNDdXN0b21GaWxlSW5wdXQuaW5pdCgpO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdhamF4LmVycm9yJywgZnVuY3Rpb24oZSwganFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcblx0XHRcclxuICAgIFx0bGV0IHJlc3VsdCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JyArXHJcblx0XHRcdFx0XHRcdCc8aDYgY2xhc3M9XCJhbGVydC1oZWFkaW5nIGZvbnQtd2VpZ2h0LWJvbGRcIj4nICsgJC5pMThuKCdlcnJvcicpICsgJyAnICsganFYSFIuc3RhdHVzICsgJyA6ICcgKyBqcVhIUi5zdGF0dXNUZXh0ICsgJzwvaDY+JztcclxuXHRcdFxyXG5cdFx0aWYgKChtID0gLzx0aXRsZT4oLispPFxcL3RpdGxlPi8uZXhlYyhqcVhIUi5yZXNwb25zZVRleHQpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRyZXN1bHQgKz0gJzxwPicgKyBtWzFdICsgJzwvcD4nO1xyXG5cdFx0fVxyXG4gICAgXHRcdFx0XHJcblx0XHRyZXN1bHQgKz0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiID4nICsgJC5pMThuKCdyZWxvYWQnKSArICc8L2J1dHRvbj4nICtcclxuXHRcdFx0XHRcdCc8L2Rpdj4nO1xyXG5cdFx0JChlLnRhcmdldCkuaHRtbChyZXN1bHQpO1xyXG5cdFx0XHJcblx0XHQkKGUudGFyZ2V0KS5maW5kKCdidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0Z2xvYmFsLmFqYXguc2V0KGUudGFyZ2V0LCBqcVhIUi5zZXR0aW5ncy51cmwsIHtkYXRhOiBqcVhIUi5zZXR0aW5ncy5kYXRhfSlcclxuXHRcdH0pO1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2FqYXguc3VjY2VzcycpO1xyXG4gICAgXHJcbn0pOyIsInZhciBtYXAgPSB7XG5cdFwiLi9lbl9HQi5qc29uXCI6IFwiLi9hc3NldHMvanMvbG9jYWxlcy9lbl9HQi5qc29uXCIsXG5cdFwiLi9mcl9GUi5qc29uXCI6IFwiLi9hc3NldHMvanMvbG9jYWxlcy9mcl9GUi5qc29uXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2pzL2xvY2FsZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwuanNvbiRcIjsiXSwic291cmNlUm9vdCI6IiJ9