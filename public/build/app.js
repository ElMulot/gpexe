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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xvY2FsZXMgc3luYyBeXFwuXFwvLipcXC5qc29uJCJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImJzQ3VzdG9tRmlsZUlucHV0IiwiU3RyaW5nIiwicHJvdG90eXBlIiwidG9EYXRlIiwicyIsImV4ZWMiLCJzcGxpdCIsInllYXIiLCJtb250aCIsImRheSIsImQiLCJEYXRlIiwiaXNOYU4iLCJmb3JtYXQiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImpvaW4iLCJhZGREYXlzIiwiZGF5cyIsImRhdGUiLCJ2YWx1ZU9mIiwic2V0RGF0ZSIsIkFycmF5IiwiaGFzIiwidmFsdWUiLCJzb21lIiwidiIsImZuIiwiZXhpc3QiLCJsZW5ndGgiLCJkcmFncyIsIm9wdCIsImV4dGVuZCIsImhhbmRsZSIsImN1cnNvciIsIiRlbCIsImZpbmQiLCJjc3MiLCJvbiIsImUiLCIkZHJhZyIsImFkZENsYXNzIiwicGFyZW50Iiwiel9pZHgiLCJkcmdfaCIsIm91dGVySGVpZ2h0IiwiZHJnX3ciLCJvdXRlcldpZHRoIiwicG9zX3kiLCJvZmZzZXQiLCJ0b3AiLCJwYWdlWSIsInBvc194IiwibGVmdCIsInBhZ2VYIiwicGFyZW50cyIsInJlbW92ZUNsYXNzIiwicHJldmVudERlZmF1bHQiLCJnbG9iYWwiLCJyZW1Ub1B4IiwiaSIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJmb250U2l6ZSIsImNyZWF0ZSIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJhIiwic3BhbiIsImZpZWxkc2V0IiwiaW5wdXQiLCJhdHRyIiwiY2hlY2tib3giLCJzZWxlY3QiLCJvcHRpb24iLCJsYWJlbCIsImJ1dHRvbiIsIm1lbnVCdXR0b24iLCJzbWFsbEJ1dHRvbiIsInRoZWFkIiwidGgiLCJ0Ym9keSIsInRyIiwidGQiLCJ1bCIsImxpIiwiYWpheCIsImZldGNoIiwiY29udGFpbmVyIiwidGhhdCIsIm5vdCIsImVhY2giLCJ1cmwiLCJkYXRhIiwidGFyZ2V0Iiwic2V0IiwiZnJvbSIsImhhc0NsYXNzIiwidHJpZ2dlciIsImZpbHRlciIsIiRmb3JtIiwibWV0aG9kIiwiRm9ybURhdGEiLCJnZXQiLCJzZXJpYWxpemVBcnJheSIsIm9wdGlvbnMiLCJtb2RhbCIsImlzIiwidHlwZSIsImNvbnRlbnRUeXBlIiwiY29uc3RydWN0b3IiLCJwcm9jZXNzRGF0YSIsImJlZm9yZVNlbmQiLCJqcVhIUiIsInNldHRpbmdzIiwic3VjY2VzcyIsInJlc3VsdCIsInRleHRTdGF0dXMiLCJlcnJvciIsImVycm9yVGhyb3duIiwicmVhZHkiLCJsb2NhbGUiLCJpMThuIiwibG9hZCIsImljb24iLCJhcnJvd1VwIiwiYXJyb3dEb3duIiwiZnVubmVsIiwiZnVubmVsRmlsbCIsIndhcm5pbmciLCJkYW5nZXIiLCJsb2FkaW5nIiwiY2xvc2UiLCJkYXRlcGlja2VyIiwiZGVmYXVsdHMiLCJ3ZWVrU3RhcnQiLCJtYXhWaWV3TW9kZSIsImxhbmd1YWdlIiwicmVwbGFjZSIsIm11bHRpZGF0ZSIsImRheXNPZldlZWtEaXNhYmxlZCIsImF1dG9jbG9zZSIsImNhbGVuZGFyV2Vla3MiLCJjbGVhckJ0biIsInRvZGF5QnRuIiwidG9kYXlIaWdobGlnaHQiLCJzaG93IiwiZW1wdHkiLCJhcHBlbmQiLCJyZW1vdmUiLCJodG1sIiwicG9wb3ZlciIsImJsdXIiLCJyZW1vdmVBdHRyIiwiY2xvc2VzdCIsImlkIiwicHJvcCIsIm1hdGNoIiwiZGVmaW5lZCIsInZhbCIsImluaXQiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwibSIsInJlc3BvbnNlVGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUF6QyxFQUE4QztBQUFDQyxZQUFJLEVBQUVvQixLQUFLLENBQUNDLFFBQU4sQ0FBZXJCO0FBQXRCLE9BQTlDO0FBQ0EsS0FGRDtBQUdHLEdBaEJEO0FBa0JBbEcsR0FBQyxDQUFDa0UsUUFBRCxDQUFELENBQVlxQyxPQUFaLENBQW9CLGNBQXBCO0FBRUgsQ0FqT0QsRTs7Ozs7Ozs7Ozs7O0FDdFVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkUiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcC1kYXRlcGlja2VyJyk7XHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcC1kYXRlcGlja2VyL2Rpc3QvbG9jYWxlcy9ib290c3RyYXAtZGF0ZXBpY2tlci5mci5taW4uanMnKTtcclxuY29uc3QgYnNDdXN0b21GaWxlSW5wdXQgPSByZXF1aXJlKCdicy1jdXN0b20tZmlsZS1pbnB1dCcpO1xyXG5yZXF1aXJlICgnQHdpa2ltZWRpYS9qcXVlcnkuaTE4bi9zcmMvanF1ZXJ5LmkxOG4uanMnKTtcclxucmVxdWlyZSAoJ0B3aWtpbWVkaWEvanF1ZXJ5LmkxOG4vc3JjL2pxdWVyeS5pMThuLm1lc3NhZ2VzdG9yZS5qcycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvZ2xvYmFsLnNjc3MnKTtcclxuXHJcblN0cmluZy5wcm90b3R5cGUudG9EYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdGlmIChzID0gL1xcZHs0fS1cXGR7Mn0tXFxkezJ9L2cuZXhlYyh0aGlzKSkge1xyXG5cdFx0Y29uc3QgW3llYXIsIG1vbnRoLCBkYXldID0gc1swXS5zcGxpdChcIi1cIik7XHJcblx0XHRkID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xyXG5cdFx0cmV0dXJuIChkIGluc3RhbmNlb2YgRGF0ZSAmJiBpc05hTihkKSA9PT0gZmFsc2UpP2Q6bnVsbDtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5EYXRlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcclxuXHRcclxuXHRkYXkgPSB0aGlzLmdldERhdGUoKTtcclxuXHRtb250aCA9IHRoaXMuZ2V0TW9udGgoKSArIDE7XHJcblx0eWVhciA9IHRoaXMuZ2V0RnVsbFllYXIoKTtcclxuXHRcclxuXHRpZiAobW9udGggPCAxMCkgbW9udGggPSAnMCcgKyBtb250aDtcclxuXHRpZiAoZGF5IDwgMTApIGRheSA9ICcwJyArIGRheTtcclxuXHRcclxuXHRyZXR1cm4gW2RheSwgbW9udGgsIHllYXJdLmpvaW4oJy0nKTtcclxuXHRcclxufVxyXG5cclxuRGF0ZS5wcm90b3R5cGUuYWRkRGF5cyA9IGZ1bmN0aW9uKGRheXMpIHtcclxuICAgIHZhciBkYXRlID0gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpO1xyXG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGF5cyk7XHJcbiAgICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxuQXJyYXkucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0cmV0dXJuIHRoaXMuc29tZSh2ID0+IFN0cmluZyh2KSA9PT0gU3RyaW5nKHZhbHVlKSlcclxufVxyXG5cclxuJC5mbi5leGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5sZW5ndGggIT09IDAgJiYgdGhpcztcclxufVxyXG5cclxuJC5mbi5kcmFncyA9IGZ1bmN0aW9uKG9wdCkge1xyXG5cclxuICAgIG9wdCA9ICQuZXh0ZW5kKHtoYW5kbGU6XCJcIixjdXJzb3I6XCJtb3ZlXCJ9LCBvcHQpO1xyXG5cclxuICAgIGlmKG9wdC5oYW5kbGUgPT09IFwiXCIpIHtcclxuICAgICAgICB2YXIgJGVsID0gdGhpcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyICRlbCA9IHRoaXMuZmluZChvcHQuaGFuZGxlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJGVsLmNzcygnY3Vyc29yJywgb3B0LmN1cnNvcikub24oXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmKG9wdC5oYW5kbGUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdmFyICRkcmFnID0gJCh0aGlzKS5hZGRDbGFzcygnZHJhZ2dhYmxlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyICRkcmFnID0gJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWhhbmRsZScpLnBhcmVudCgpLmFkZENsYXNzKCdkcmFnZ2FibGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHpfaWR4ID0gJGRyYWcuY3NzKCd6LWluZGV4JyksXHJcbiAgICAgICAgICAgIGRyZ19oID0gJGRyYWcub3V0ZXJIZWlnaHQoKSxcclxuICAgICAgICAgICAgZHJnX3cgPSAkZHJhZy5vdXRlcldpZHRoKCksXHJcbiAgICAgICAgICAgIHBvc195ID0gJGRyYWcub2Zmc2V0KCkudG9wICsgZHJnX2ggLSBlLnBhZ2VZLFxyXG4gICAgICAgICAgICBwb3NfeCA9ICRkcmFnLm9mZnNldCgpLmxlZnQgKyBkcmdfdyAtIGUucGFnZVg7XHJcbiAgICAgICAgJGRyYWcuY3NzKCd6LWluZGV4JywgMTAwMCkucGFyZW50cygpLm9uKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgJCgnLmRyYWdnYWJsZScpLm9mZnNldCh7XHJcbiAgICAgICAgICAgICAgICB0b3A6ZS5wYWdlWSArIHBvc195IC0gZHJnX2gsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OmUucGFnZVggKyBwb3NfeCAtIGRyZ193XHJcbiAgICAgICAgICAgIH0pLm9uKFwibW91c2V1cFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2RyYWdnYWJsZScpLmNzcygnei1pbmRleCcsIHpfaWR4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBkaXNhYmxlIHNlbGVjdGlvblxyXG4gICAgfSkub24oXCJtb3VzZXVwXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKG9wdC5oYW5kbGUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZHJhZ2dhYmxlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlLWhhbmRsZScpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdkcmFnZ2FibGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmdsb2JhbC5yZW1Ub1B4ID0gZnVuY3Rpb24gKGkpIHtcclxuXHRyZXR1cm4gaSAqIHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmZvbnRTaXplKTtcclxufVxyXG5cclxuZ2xvYmFsLmNyZWF0ZSA9IHtcclxuXHRkaXY6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXHJcblxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpO1xyXG5cdFx0XHQvLy5hZGRDbGFzcygnYnRuIGJ0bi1zbSB0ZXh0LW5vd3JhcCcpXHJcblx0fSxcclxuXHRcclxuXHRzcGFuOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSlcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGZpZWxkc2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JykpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRpbnB1dDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICd0ZXh0JylcclxuXHRcdFx0LmFkZENsYXNzKCdmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGNoZWNrYm94OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JylcclxuXHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1pbnB1dCcpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRzZWxlY3Q6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JykpXHJcblx0XHRcdC5hZGRDbGFzcygnZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbScpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRvcHRpb246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJykpXHJcblx0XHRcdC5hdHRyKCd2YWx1ZScsICcnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0bGFiZWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSlcclxuXHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1sYWJlbCB3LTEwMCB0ZXh0LW5vd3JhcCcpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRidXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdG1lbnVCdXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSB0ZXh0LW5vd3JhcCByb3VuZGVkLTAnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0c21hbGxCdXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBteC0xIHRleHQtbm93cmFwJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRoZWFkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRoOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRib2R5OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5JykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRyOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHVsOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGxpOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG59O1xyXG5cclxuZ2xvYmFsLmFqYXggPSB7XHJcblx0XHRcclxuXHRmZXRjaDogZnVuY3Rpb24oY29udGFpbmVyKSB7XHJcblx0XHRcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFxyXG5cdFx0JChjb250YWluZXIpLmZpbmQoJ2FbZGF0YS10b2dnbGUqPVwiYWpheFwiXSwgYnV0dG9uW2RhdGEtdG9nZ2xlKj1cImFqYXhcIl0nKS5ub3QoJ1t0eXBlPVwic3VibWl0XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLnBhcmVudCgpLmhhcygnLmFjdGl2ZScpKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IHVybCA9ICQodGhpcykuZGF0YSgndXJsJyk7XHJcblx0XHRcdFx0bGV0IHRhcmdldCA9ICQodGhpcykuZGF0YSgndGFyZ2V0JykgfHwgdGhpcztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCwge2Zyb206IHRoaXN9KTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdhW2RhdGEtdG9nZ2xlKj1cImFqYXhcIl0sIGJ1dHRvbltkYXRhLXRvZ2dsZSo9XCJhamF4XCJdJykuZmlsdGVyKCdbdHlwZT1cInN1Ym1pdFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoKCRmb3JtID0gJCgnIycgKyAkKHRoaXMpLmF0dHIoJ2Zvcm0nKSkpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0JGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IHVybCA9ICQodGhpcykuZGF0YSgndXJsJyk7XHJcblx0XHRcdFx0bGV0IHRhcmdldCA9ICQodGhpcykuZGF0YSgndGFyZ2V0JykgfHwgdGhpcztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5leGlzdCgpKSB7XHJcblx0XHRcdFx0XHR2YXIgbWV0aG9kID0gJ1BPU1QnO1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm0uZ2V0KDApKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dmFyIG1ldGhvZCA9ICRmb3JtLmF0dHIoJ21ldGhvZCcpIHx8ICdHRVQnO1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSAkZm9ybS5zZXJpYWxpemVBcnJheSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCwge21ldGhvZDogbWV0aG9kLCBmcm9tOiB0aGlzLCBkYXRhOiBkYXRhfSk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdCQodGhpcykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKGNvbnRhaW5lcikuZmluZCgnZGl2W2RhdGEtdG9nZ2xlKj1cImFqYXhcIl0nKS5lYWNoKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0bGV0IHRhcmdldCA9ICQodGhpcykuZGF0YSgndGFyZ2V0JykgfHwgdGhpcztcclxuXHRcdFx0bGV0IHVybCA9ICQodGhpcykuZGF0YSgndXJsJyk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCwge2Zyb206IHRoaXN9KTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0fSxcclxuXHRcdFxyXG5cdHNldDogZnVuY3Rpb24gKHRhcmdldCwgdXJsLCBvcHRpb25zID0ge30pIHtcclxuXHRcdFxyXG5cdFx0aWYgKHRhcmdldCAmJiB1cmwpIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChvcHRpb25zLm1vZGFsID09PSB0cnVlIHx8IChvcHRpb25zLmZyb20gJiYgJChvcHRpb25zLmZyb20pLmlzKCdbZGF0YS10b2dnbGUqPVwibW9kYWxcIl0nKSkpIHtcclxuXHRcdFx0XHRpZiAoJCh0YXJnZXQpLmlzKCcubW9kYWwnKSkge1xyXG5cdFx0XHRcdFx0JCh0YXJnZXQpLm1vZGFsKCdzaG93Jyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdCQodGFyZ2V0KS5wYXJlbnRzKCcubW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0bGV0IG1ldGhvZCA9IG9wdGlvbnMubWV0aG9kIHx8ICdHRVQnO1xyXG5cdFx0XHRsZXQgZGF0YSA9IG9wdGlvbnMuZGF0YSB8fCBbXTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHR1cmwgOiB1cmwsXHJcblx0XHRcdFx0dHlwZTogbWV0aG9kLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdFx0Y29udGVudFR5cGU6IChkYXRhLmNvbnN0cnVjdG9yID09PSBGb3JtRGF0YSk/ZmFsc2U6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcsXHJcblx0XHRcdFx0cHJvY2Vzc0RhdGE6IChkYXRhLmNvbnN0cnVjdG9yICE9PSBGb3JtRGF0YSksXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YmVmb3JlU2VuZDogZnVuY3Rpb24oanFYSFIsIHNldHRpbmdzKSB7XHJcblx0XHRcdFx0XHRqcVhIUi5zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG5cdFx0XHRcdFx0anFYSFIuZnJvbSA9ICQob3B0aW9ucy5mcm9tKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0JCh0YXJnZXQpLnRyaWdnZXIoJ2FqYXguYmVmb3JlU2VuZCcsIFtqcVhIUiwgc2V0dGluZ3NdKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcclxuXHRcdFx0XHRcdGpxWEhSLmZyb20gPSAkKG9wdGlvbnMuZnJvbSk7XHJcblx0XHRcdFx0XHQkKHRhcmdldCkudHJpZ2dlcignYWpheC5zdWNjZXNzJywgW3Jlc3VsdCwgdGV4dFN0YXR1cywganFYSFJdKTtcclxuXHRcdFx0XHRcdCQodGFyZ2V0KS50cmlnZ2VyKCdhamF4LmNvbXBsZXRlZCcsIFtyZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSXSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcblx0XHRcdFx0XHRqcVhIUi5mcm9tID0gJChvcHRpb25zLmZyb20pO1xyXG5cdFx0XHRcdFx0JCh0YXJnZXQpLnRyaWdnZXIoJ2FqYXguZXJyb3InLCBbanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duXSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9LFxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFRyYW5zbGF0b3JcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRsZXQgbG9jYWxlID0gJCgnaHRtbCcpLmF0dHIoJ2xhbmcnKTtcclxuXHRcclxuXHQkLmkxOG4oKS5sb2FkKHtcclxuXHRcdGxvY2FsZTogcmVxdWlyZSgnLi9sb2NhbGVzLycgKyBsb2NhbGUgKyAnLmpzb24nKVxyXG5cdH0pO1xyXG5cdFxyXG5cdCQuaTE4bih7XHJcblx0XHRsb2NhbGU6ICdsb2NhbGUnLFxyXG5cdH0pO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gR2xvYmFsIGljb25zXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHRnbG9iYWwuaWNvbiA9IHtcclxuXHRcdGFycm93VXA6XHJcblx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktYXJyb3ctYmFyLXVwXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuMzU0IDUuODU0YS41LjUgMCAwMDAtLjcwOGwtMy0zYS41LjUgMCAwMC0uNzA4IDBsLTMgM2EuNS41IDAgMTAuNzA4LjcwOEw4IDMuMjA3bDIuNjQ2IDIuNjQ3YS41LjUgMCAwMC43MDggMHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04IDEwYS41LjUgMCAwMC41LS41VjNhLjUuNSAwIDAwLTEgMHY2LjVhLjUuNSAwIDAwLjUuNXptLTQuOCAxLjZjMC0uMjIuMTgtLjQuNC0uNGg4LjhhLjQuNCAwIDAxMCAuOEgzLjZhLjQuNCAwIDAxLS40LS40elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHRcclxuXHRcdGFycm93RG93bjpcclxuXHRcdFx0XHQnPHN2ZyBjbGFzcz1cImJpIGJpLWFycm93LWJhci1kb3duXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0ICBcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjM1NCAxMC4xNDZhLjUuNSAwIDAxMCAuNzA4bC0zIDNhLjUuNSAwIDAxLS43MDggMGwtMy0zYS41LjUgMCAwMS43MDgtLjcwOEw4IDEyLjc5M2wyLjY0Ni0yLjY0N2EuNS41IDAgMDEuNzA4IDB6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0ICBcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggNmEuNS41IDAgMDEuNS41VjEzYS41LjUgMCAwMS0xIDBWNi41QS41LjUgMCAwMTggNnpNMiAzLjVhLjUuNSAwIDAxLjUtLjVoMTFhLjUuNSAwIDAxMCAxaC0xMWEuNS41IDAgMDEtLjUtLjV6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0XHQnPC9zdmc+JyxcclxuXHRcdFxyXG5cdFx0ZnVubmVsOlxyXG5cdFx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktZnVubmVsXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xLjUgMS41QS41LjUgMCAwMTIgMWgxMmEuNS41IDAgMDEuNS41djJhLjUuNSAwIDAxLS4xMjguMzM0TDEwIDguNjkyVjEzLjVhLjUuNSAwIDAxLS4zNDIuNDc0bC0zIDFBLjUuNSAwIDAxNiAxNC41VjguNjkyTDEuNjI4IDMuODM0QS41LjUgMCAwMTEuNSAzLjV2LTJ6bTEgLjV2MS4zMDhsNC4zNzIgNC44NThBLjUuNSAwIDAxNyA4LjV2NS4zMDZsMi0uNjY2VjguNWEuNS41IDAgMDEuMTI4LS4zMzRMMTMuNSAzLjMwOFYyaC0xMXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHRcdFxyXG5cdFx0ZnVubmVsRmlsbDpcclxuXHRcdFx0XHQnPHN2ZyBjbGFzcz1cImJpIGJpLWZ1bm5lbC1maWxsXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHRcdCc8cGF0aCBkPVwiTTIgMy41di0yaDEydjJsLTQuNSA1djVsLTMgMXYtNkwyIDMuNXpcIi8+JyArXHJcblx0XHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMS41IDEuNUEuNS41IDAgMDEyIDFoMTJhLjUuNSAwIDAxLjUuNXYyYS41LjUgMCAwMS0uMTI4LjMzNEwxMCA4LjY5MlYxMy41YS41LjUgMCAwMS0uMzQyLjQ3NGwtMyAxQS41LjUgMCAwMTYgMTQuNVY4LjY5MkwxLjYyOCAzLjgzNEEuNS41IDAgMDExLjUgMy41di0yem0xIC41djEuMzA4bDQuMzcyIDQuODU4QS41LjUgMCAwMTcgOC41djUuMzA2bDItLjY2NlY4LjVhLjUuNSAwIDAxLjEyOC0uMzM0TDEzLjUgMy4zMDhWMmgtMTF6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0XHQnPC9zdmc+JyxcclxuXHRcdFxyXG5cdFx0c3VjY2VzczpcclxuXHRcdFx0XHQnPHN2ZyB3aWR0aD1cIjEuNWVtXCIgaGVpZ2h0PVwiMS41ZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgY2xhc3M9XCJiaSBiaS1jaGVjay1zcXVhcmUtZmlsbFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXHJcblx0XHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMkgyem0xMC4wMyA0Ljk3YS43NS43NSAwIDAgMC0xLjA4LjAyMkw3LjQ3NyA5LjQxNyA1LjM4NCA3LjMyM2EuNzUuNzUgMCAwIDAtMS4wNiAxLjA2TDYuOTcgMTEuMDNhLjc1Ljc1IDAgMCAwIDEuMDc5LS4wMmwzLjk5Mi00Ljk5YS43NS43NSAwIDAgMC0uMDEtMS4wNXpcIi8+JyArXHJcblx0XHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcclxuXHRcdHdhcm5pbmc6XHJcblx0XHRcdFx0Jzxzdmcgd2lkdGg9XCIxLjVlbVwiIGhlaWdodD1cIjEuNWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzPVwiYmkgYmktaW5mby1zcXVhcmUtZmlsbFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXHJcblx0XHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMCAyYTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYyem04LjkzIDQuNTg4bC0yLjI5LjI4Ny0uMDgyLjM4LjQ1LjA4M2MuMjk0LjA3LjM1Mi4xNzYuMjg4LjQ2OWwtLjczOCAzLjQ2OGMtLjE5NC44OTcuMTA1IDEuMzE5LjgwOCAxLjMxOS41NDUgMCAxLjE3OC0uMjUyIDEuNDY1LS41OThsLjA4OC0uNDE2Yy0uMi4xNzYtLjQ5Mi4yNDYtLjY4Ni4yNDYtLjI3NSAwLS4zNzUtLjE5My0uMzA0LS41MzNMOC45MyA2LjU4OHpNOCA1LjVhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAyelwiLz4nICtcclxuXHRcdFx0XHQnPC9zdmc+JyxcclxuXHRcdFxyXG5cdFx0ZGFuZ2VyOlxyXG5cdFx0XHRcdCc8c3ZnIHdpZHRoPVwiMS41ZW1cIiBoZWlnaHQ9XCIxLjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBjbGFzcz1cImJpIGJpLWV4Y2xhbWF0aW9uLXNxdWFyZS1maWxsXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yIDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0ySDJ6bTYgNGEuOTA1LjkwNSAwIDAgMC0uOS45OTVsLjM1IDMuNTA3YS41NTIuNTUyIDAgMCAwIDEuMSAwbC4zNS0zLjUwN0EuOTA1LjkwNSAwIDAgMCA4IDR6bS4wMDIgNmExIDEgMCAxIDAgMCAyIDEgMSAwIDAgMCAwLTJ6XCIvPicgK1xyXG5cdFx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0XHRsb2FkaW5nOlxyXG5cdFx0XHQnPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTRcIj4nICtcclxuXHRcdFx0XHQnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPicgK1xyXG5cdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwic3Itb25seVwiPicgKyAkLmkxOG4oJ2xvYWRpbmcnKSArICc8L3NwYW4+JyArXHJcblx0XHRcdFx0JzwvZGl2PicgK1xyXG5cdFx0XHQnPC9kaXY+JyxcclxuXHRcdFxyXG5cdFx0Y2xvc2U6XHJcblx0XHQgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWwtMiBtYi0xIGNsb3NlIG1sLWF1dG9cIiBkYXRhLWRpc21pc3M9XCJ0b2FzdFwiIGFyaWEtbGFiZWw9JyArICQuaTE4bignY2xvc2UnKSArICc+JyArXHJcblx0XHQgICAgXHQnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj4nICtcclxuXHRcdCAgICAnPC9idXR0b24+JyxcclxuXHRcdFxyXG5cdH07XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBEZWZhdWx0cyBwYXJhbWV0ZXJzIGZvciBkYXRlcGlja2VyXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMuZm9ybWF0ID0gXCJkZC1tbS15eXl5XCI7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLndlZWtTdGFydCA9IDE7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLm1heFZpZXdNb2RlID0gMztcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMubGFuZ3VhZ2UgPSBsb2NhbGUucmVwbGFjZSgvXy8sICctJyk7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLm11bHRpZGF0ZSA9IGZhbHNlO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5kYXlzT2ZXZWVrRGlzYWJsZWQgPSBcIjAsNlwiO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5hdXRvY2xvc2UgPSB0cnVlO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5jYWxlbmRhcldlZWtzID0gdHJ1ZTtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMuY2xlYXJCdG4gPSB0cnVlO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy50b2RheUJ0biA9IHRydWU7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLnRvZGF5SGlnaGxpZ2h0ID0gdHJ1ZTtcclxuICAgIFxyXG5cdFxyXG5cdFxyXG4gICAgJChkb2N1bWVudCkub24oJ2FqYXguYmVmb3JlU2VuZCcsIGZ1bmN0aW9uKGUsIGpxWEhSLCBzZXR0aW5ncykge1xyXG4gICAgXHQkKGUudGFyZ2V0KVxyXG5cdFx0XHQuc2hvdygpXHJcblx0XHRcdC5lbXB0eSgpXHJcblx0XHRcdC5hcHBlbmQoZ2xvYmFsLmljb24ubG9hZGluZylcclxuXHRcdDtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS5vbignYWpheC5zdWNjZXNzJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG4gICAgXHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJy5zcGlubmVyLWJvcmRlcicpLnBhcmVudCgpLnJlbW92ZSgpO1xyXG5cdFx0aWYgKHJlc3VsdCkge1xyXG5cdFx0XHQkKGUudGFyZ2V0KS5odG1sKCQoZS50YXJnZXQpLmh0bWwoKSArIHJlc3VsdCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBwb3BvdmVyXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcblx0XHQkKGUudGFyZ2V0KS5maW5kKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpO1xyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gQWpheFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdCAgICBnbG9iYWwuYWpheC5mZXRjaChlLnRhcmdldCk7XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBNb2RhbCAmIENvbGxhcHNlXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCAgICBcclxuXHRcdCQoZS50YXJnZXQpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1baHJlZj1cIiMnICsgJCh0aGlzKS5hdHRyKCdpZCcpICsgJ1wiXScpXHJcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG5cdFx0XHRcdC5ibHVyKClcclxuXHRcdFx0O1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJykuYmx1cigpO1xyXG5cdFx0XHQkKGUudGFyZ2V0KS5maW5kKCcubW9kYWwtY29udGVudCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JChlLnRhcmdldCkuZmluZCgnYnV0dG9uW2RhdGEtZGlzbWlzc10nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnI21vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKGUudGFyZ2V0KS5maW5kKCcubW9kYWwtaGVhZGVyJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5jbG9zZXN0KCcubW9kYWwtZGlhbG9nJykuZHJhZ3Moe2hhbmRsZTonLm1vZGFsLWhlYWRlcid9KTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gQm9vdHN0cmFwIGRhdGVwaWNrZXJcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJy5kYXRlcGlja2VyJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5kYXRlcGlja2VyKHsnZm9ybWF0JzogJC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLmZvcm1hdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gRm9ybSBtdWx0aXBsZVxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdFx0JChlLnRhcmdldCkuZmluZChcIltuYW1lJD0nX211bHRpcGxlJ11cIikuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBpZDtcclxuXHRcdFx0aWYgKGlkID0gJCh0aGlzKS5wcm9wKCduYW1lJykubWF0Y2goLyhcXFMrKV9tdWx0aXBsZSQveSkpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZGVmaW5lZCA9ICgkKHRoaXMpLnZhbCgpICE9IDApO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQkKFwiW2lkXj0nXCIgKyBpZFsxXSArIFwiJ11cIikubm90KFwiW2lkJD0nbXVsdGlwbGVfMCddXCIpLm5vdChcIltpZCQ9J211bHRpcGxlXzEnXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZGF0ZXBpY2tlcicpKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kYXRlcGlja2VyKCdzZXREYXRlJywgbmV3IERhdGUoKSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ3JhZGlvJykge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAnY2hlY2tib3gnKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAndGV4dCcgfHwgJCh0aGlzKS5pcygnc2VsZWN0JykgfHwgJCh0aGlzKS5pcygndGV4dGFyZWEnKSkge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykudmFsKG51bGwpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJkaXNhYmxlZFwiLCBkZWZpbmVkKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKFwicmVxdWlyZWRcIiwgJCh0aGlzKS5kYXRhKCdyZXF1aXJlZCcpICYmIGRlZmluZWQgPT09IGZhbHNlKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQkKCcjJyArIGlkWzFdICsgJ19tdWx0aXBsZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJ2Zvcm0nKS5maW5kKCdkaXYsIGlucHV0LCBzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLmRhdGEoJ211bHRpcGxlJykpIHtcclxuXHRcdFx0XHQkKFwiW25hbWU9J1wiICsgJCh0aGlzKS5wcm9wKCdpZCcpICsgXCJfbXVsdGlwbGUnXVwiKS5maWx0ZXIoJ1t2YWx1ZT0xXScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JChcIltuYW1lPSdcIiArICQodGhpcykucHJvcCgnaWQnKSArIFwiX211bHRpcGxlJ11cIikuZmlsdGVyKCdbdmFsdWU9MF0nKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSlcclxuXHRcdFxyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gQnNDdXN0b21GaWxlSW5wdXRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHRcdGJzQ3VzdG9tRmlsZUlucHV0LmluaXQoKTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS5vbignYWpheC5lcnJvcicsIGZ1bmN0aW9uKGUsIGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xyXG5cdFx0XHJcbiAgICBcdGxldCByZXN1bHQgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPicgK1xyXG5cdFx0XHRcdFx0XHQnPGg2IGNsYXNzPVwiYWxlcnQtaGVhZGluZyBmb250LXdlaWdodC1ib2xkXCI+JyArICQuaTE4bignZXJyb3InKSArICcgJyArIGpxWEhSLnN0YXR1cyArICcgOiAnICsganFYSFIuc3RhdHVzVGV4dCArICc8L2g2Pic7XHJcblx0XHRcclxuXHRcdGlmICgobSA9IC88dGl0bGU+KC4rKTxcXC90aXRsZT4vLmV4ZWMoanFYSFIucmVzcG9uc2VUZXh0KSkgIT09IG51bGwpIHtcclxuXHRcdFx0cmVzdWx0ICs9ICc8cD4nICsgbVsxXSArICc8L3A+JztcclxuXHRcdH1cclxuICAgIFx0XHRcdFxyXG5cdFx0cmVzdWx0ICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnlcIiA+JyArICQuaTE4bigncmVsb2FkJykgKyAnPC9idXR0b24+JyArXHJcblx0XHRcdFx0XHQnPC9kaXY+JztcclxuXHRcdCQoZS50YXJnZXQpLmh0bWwocmVzdWx0KTtcclxuXHRcdFxyXG5cdFx0JChlLnRhcmdldCkuZmluZCgnYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGdsb2JhbC5hamF4LnNldChlLnRhcmdldCwganFYSFIuc2V0dGluZ3MudXJsLCB7ZGF0YToganFYSFIuc2V0dGluZ3MuZGF0YX0pXHJcblx0XHR9KTtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdhamF4LnN1Y2Nlc3MnKTtcclxuICAgIFxyXG59KTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZW5fR0IuanNvblwiOiBcIi4vYXNzZXRzL2pzL2xvY2FsZXMvZW5fR0IuanNvblwiLFxuXHRcIi4vZnJfRlIuanNvblwiOiBcIi4vYXNzZXRzL2pzL2xvY2FsZXMvZnJfRlIuanNvblwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9qcy9sb2NhbGVzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmpzb24kXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==