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
  if (s = /\d{2}-\d{2}-\d{4}/g.exec(this)) {
    var _s$0$split = s[0].split("-"),
        _s$0$split2 = _slicedToArray(_s$0$split, 3),
        _day = _s$0$split2[0],
        _month = _s$0$split2[1],
        _year = _s$0$split2[2];

    d = new Date(_year, _month - 1, _day);
    return d instanceof Date && isNaN(d) === false ? d : null;
  }

  return null;
};

String.prototype.htmlDecode = function () {
  return $("<div/>").html(this).text();
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

global.pxToRem = function (i) {
  return i / parseFloat(getComputedStyle(document.documentElement).fontSize);
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
  table: function table() {
    return $(document.createElement('table'));
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
    if ((m = /<!--\s(.+)\s-->/.exec(jqXHR.responseText)) !== null) {
      title = m[1].htmlDecode();
    } else {
      title = $.i18n('error');
    }

    var div = $(e.target).append(global.create.div()).children().last().addClass('alert alert-danger');
    div.append(global.create.div).children().last().addClass('alert-heading font-weight-bold').text($.i18n('error') + ' ' + jqXHR.status + ' : ' + jqXHR.statusText);
    div.append(global.create.p).children().last().text(title);
    div.append(global.create.smallButton).children().last().addClass('btn-primary mt-2').text($.i18n('reload')).on('click', function () {
      global.ajax.set(e.target, jqXHR.settings.url, {
        data: jqXHR.settings.data
      });
    });
    div.append(global.create.smallButton).children().last().addClass('btn-primary mt-2').text($.i18n('details')).on('click', function () {
      var resultWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');

      if ((m = /<head>([\s\S]+?)<\/head>/.exec(jqXHR.responseText)) !== null) {
        $(resultWindow.document.head).append(m[1]);
      }

      if ((m = /<body>([\s\S]+?)<\/body>/.exec(jqXHR.responseText)) !== null) {
        $(resultWindow.document.body).append(m[1]);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xvY2FsZXMgc3luYyBeXFwuXFwvLipcXC5qc29uJCJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImJzQ3VzdG9tRmlsZUlucHV0IiwiU3RyaW5nIiwicHJvdG90eXBlIiwidG9EYXRlIiwicyIsImV4ZWMiLCJzcGxpdCIsImRheSIsIm1vbnRoIiwieWVhciIsImQiLCJEYXRlIiwiaXNOYU4iLCJodG1sRGVjb2RlIiwiaHRtbCIsInRleHQiLCJmb3JtYXQiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImpvaW4iLCJhZGREYXlzIiwiZGF5cyIsImRhdGUiLCJ2YWx1ZU9mIiwic2V0RGF0ZSIsIkFycmF5IiwiaGFzIiwidmFsdWUiLCJzb21lIiwidiIsImZuIiwiZXhpc3QiLCJsZW5ndGgiLCJkcmFncyIsIm9wdCIsImV4dGVuZCIsImhhbmRsZSIsImN1cnNvciIsIiRlbCIsImZpbmQiLCJjc3MiLCJvbiIsImUiLCIkZHJhZyIsImFkZENsYXNzIiwicGFyZW50Iiwiel9pZHgiLCJkcmdfaCIsIm91dGVySGVpZ2h0IiwiZHJnX3ciLCJvdXRlcldpZHRoIiwicG9zX3kiLCJvZmZzZXQiLCJ0b3AiLCJwYWdlWSIsInBvc194IiwibGVmdCIsInBhZ2VYIiwicGFyZW50cyIsInJlbW92ZUNsYXNzIiwicHJldmVudERlZmF1bHQiLCJnbG9iYWwiLCJyZW1Ub1B4IiwiaSIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJmb250U2l6ZSIsInB4VG9SZW0iLCJjcmVhdGUiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiYSIsInNwYW4iLCJmaWVsZHNldCIsImlucHV0IiwiYXR0ciIsImNoZWNrYm94Iiwic2VsZWN0Iiwib3B0aW9uIiwibGFiZWwiLCJidXR0b24iLCJtZW51QnV0dG9uIiwic21hbGxCdXR0b24iLCJ0YWJsZSIsInRoZWFkIiwidGgiLCJ0Ym9keSIsInRyIiwidGQiLCJ1bCIsImxpIiwiYWpheCIsImZldGNoIiwiY29udGFpbmVyIiwidGhhdCIsIm5vdCIsImVhY2giLCJ1cmwiLCJkYXRhIiwidGFyZ2V0Iiwic2V0IiwiZnJvbSIsImhhc0NsYXNzIiwidHJpZ2dlciIsImZpbHRlciIsIiRmb3JtIiwibWV0aG9kIiwiRm9ybURhdGEiLCJnZXQiLCJzZXJpYWxpemVBcnJheSIsIm9wdGlvbnMiLCJtb2RhbCIsImlzIiwidHlwZSIsImNvbnRlbnRUeXBlIiwiY29uc3RydWN0b3IiLCJwcm9jZXNzRGF0YSIsImJlZm9yZVNlbmQiLCJqcVhIUiIsInNldHRpbmdzIiwic3VjY2VzcyIsInJlc3VsdCIsInRleHRTdGF0dXMiLCJlcnJvciIsImVycm9yVGhyb3duIiwicmVhZHkiLCJsb2NhbGUiLCJpMThuIiwibG9hZCIsImljb24iLCJhcnJvd1VwIiwiYXJyb3dEb3duIiwiZnVubmVsIiwiZnVubmVsRmlsbCIsIndhcm5pbmciLCJkYW5nZXIiLCJsb2FkaW5nIiwiY2xvc2UiLCJkYXRlcGlja2VyIiwiZGVmYXVsdHMiLCJ3ZWVrU3RhcnQiLCJtYXhWaWV3TW9kZSIsImxhbmd1YWdlIiwicmVwbGFjZSIsIm11bHRpZGF0ZSIsImRheXNPZldlZWtEaXNhYmxlZCIsImF1dG9jbG9zZSIsImNhbGVuZGFyV2Vla3MiLCJjbGVhckJ0biIsInRvZGF5QnRuIiwidG9kYXlIaWdobGlnaHQiLCJzaG93IiwiZW1wdHkiLCJhcHBlbmQiLCJyZW1vdmUiLCJwb3BvdmVyIiwiYmx1ciIsInJlbW92ZUF0dHIiLCJjbG9zZXN0IiwiaWQiLCJwcm9wIiwibWF0Y2giLCJkZWZpbmVkIiwidmFsIiwiaW5pdCIsIm0iLCJyZXNwb25zZVRleHQiLCJ0aXRsZSIsImNoaWxkcmVuIiwibGFzdCIsInN0YXR1cyIsInN0YXR1c1RleHQiLCJwIiwicmVzdWx0V2luZG93Iiwid2luZG93Iiwib3BlbiIsImhlYWQiLCJib2R5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUVBQSxtQkFBTyxDQUFDLGdFQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsaUdBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx5SkFBRCxDQUFQOztBQUNBLElBQU1DLGlCQUFpQixHQUFHRCxtQkFBTyxDQUFDLDhGQUFELENBQWpDOztBQUNBQSxtQkFBTyxDQUFFLDJHQUFGLENBQVA7O0FBQ0FBLG1CQUFPLENBQUUscUlBQUYsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxvREFBRCxDQUFQOztBQUVBRSxNQUFNLENBQUNDLFNBQVAsQ0FBaUJDLE1BQWpCLEdBQTBCLFlBQVk7QUFDckMsTUFBSUMsQ0FBQyxHQUFHLHFCQUFxQkMsSUFBckIsQ0FBMEIsSUFBMUIsQ0FBUixFQUF5QztBQUFBLHFCQUNiRCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUtFLEtBQUwsQ0FBVyxHQUFYLENBRGE7QUFBQTtBQUFBLFFBQ2pDQyxJQURpQztBQUFBLFFBQzVCQyxNQUQ0QjtBQUFBLFFBQ3JCQyxLQURxQjs7QUFFeENDLEtBQUMsR0FBRyxJQUFJQyxJQUFKLENBQVNGLEtBQVQsRUFBZUQsTUFBSyxHQUFHLENBQXZCLEVBQTBCRCxJQUExQixDQUFKO0FBQ0EsV0FBUUcsQ0FBQyxZQUFZQyxJQUFiLElBQXFCQyxLQUFLLENBQUNGLENBQUQsQ0FBTCxLQUFhLEtBQW5DLEdBQTBDQSxDQUExQyxHQUE0QyxJQUFuRDtBQUNBOztBQUNELFNBQU8sSUFBUDtBQUNBLENBUEQ7O0FBU0FULE1BQU0sQ0FBQ0MsU0FBUCxDQUFpQlcsVUFBakIsR0FBOEIsWUFBWTtBQUN6QyxTQUFPZixDQUFDLENBQUMsUUFBRCxDQUFELENBQVlnQixJQUFaLENBQWlCLElBQWpCLEVBQXVCQyxJQUF2QixFQUFQO0FBQ0EsQ0FGRDs7QUFJQUosSUFBSSxDQUFDVCxTQUFMLENBQWVjLE1BQWYsR0FBd0IsWUFBVztBQUVsQ1QsS0FBRyxHQUFHLEtBQUtVLE9BQUwsRUFBTjtBQUNBVCxPQUFLLEdBQUcsS0FBS1UsUUFBTCxLQUFrQixDQUExQjtBQUNBVCxNQUFJLEdBQUcsS0FBS1UsV0FBTCxFQUFQO0FBRUEsTUFBSVgsS0FBSyxHQUFHLEVBQVosRUFBZ0JBLEtBQUssR0FBRyxNQUFNQSxLQUFkO0FBQ2hCLE1BQUlELEdBQUcsR0FBRyxFQUFWLEVBQWNBLEdBQUcsR0FBRyxNQUFNQSxHQUFaO0FBRWQsU0FBTyxDQUFDQSxHQUFELEVBQU1DLEtBQU4sRUFBYUMsSUFBYixFQUFtQlcsSUFBbkIsQ0FBd0IsR0FBeEIsQ0FBUDtBQUVBLENBWEQ7O0FBYUFULElBQUksQ0FBQ1QsU0FBTCxDQUFlbUIsT0FBZixHQUF5QixVQUFTQyxJQUFULEVBQWU7QUFDcEMsTUFBSUMsSUFBSSxHQUFHLElBQUlaLElBQUosQ0FBUyxLQUFLYSxPQUFMLEVBQVQsQ0FBWDtBQUNBRCxNQUFJLENBQUNFLE9BQUwsQ0FBYUYsSUFBSSxDQUFDTixPQUFMLEtBQWlCSyxJQUE5QjtBQUNBLFNBQU9DLElBQVA7QUFDSCxDQUpEOztBQU1BRyxLQUFLLENBQUN4QixTQUFOLENBQWdCeUIsR0FBaEIsR0FBc0IsVUFBU0MsS0FBVCxFQUFnQjtBQUNyQyxTQUFPLEtBQUtDLElBQUwsQ0FBVSxVQUFBQyxDQUFDO0FBQUEsV0FBSTdCLE1BQU0sQ0FBQzZCLENBQUQsQ0FBTixLQUFjN0IsTUFBTSxDQUFDMkIsS0FBRCxDQUF4QjtBQUFBLEdBQVgsQ0FBUDtBQUNBLENBRkQ7O0FBSUE5QixDQUFDLENBQUNpQyxFQUFGLENBQUtDLEtBQUwsR0FBYSxZQUFZO0FBQ3hCLFNBQU8sS0FBS0MsTUFBTCxLQUFnQixDQUFoQixJQUFxQixJQUE1QjtBQUNBLENBRkQ7O0FBSUFuQyxDQUFDLENBQUNpQyxFQUFGLENBQUtHLEtBQUwsR0FBYSxVQUFTQyxHQUFULEVBQWM7QUFFdkJBLEtBQUcsR0FBR3JDLENBQUMsQ0FBQ3NDLE1BQUYsQ0FBUztBQUFDQyxVQUFNLEVBQUMsRUFBUjtBQUFXQyxVQUFNLEVBQUM7QUFBbEIsR0FBVCxFQUFvQ0gsR0FBcEMsQ0FBTjs7QUFFQSxNQUFHQSxHQUFHLENBQUNFLE1BQUosS0FBZSxFQUFsQixFQUFzQjtBQUNsQixRQUFJRSxHQUFHLEdBQUcsSUFBVjtBQUNILEdBRkQsTUFFTztBQUNILFFBQUlBLEdBQUcsR0FBRyxLQUFLQyxJQUFMLENBQVVMLEdBQUcsQ0FBQ0UsTUFBZCxDQUFWO0FBQ0g7O0FBRUQsU0FBT0UsR0FBRyxDQUFDRSxHQUFKLENBQVEsUUFBUixFQUFrQk4sR0FBRyxDQUFDRyxNQUF0QixFQUE4QkksRUFBOUIsQ0FBaUMsV0FBakMsRUFBOEMsVUFBU0MsQ0FBVCxFQUFZO0FBQzdELFFBQUdSLEdBQUcsQ0FBQ0UsTUFBSixLQUFlLEVBQWxCLEVBQXNCO0FBQ2xCLFVBQUlPLEtBQUssR0FBRzlDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUStDLFFBQVIsQ0FBaUIsV0FBakIsQ0FBWjtBQUNILEtBRkQsTUFFTztBQUNILFVBQUlELEtBQUssR0FBRzlDLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUStDLFFBQVIsQ0FBaUIsZUFBakIsRUFBa0NDLE1BQWxDLEdBQTJDRCxRQUEzQyxDQUFvRCxXQUFwRCxDQUFaO0FBQ0g7O0FBQ0QsUUFBSUUsS0FBSyxHQUFHSCxLQUFLLENBQUNILEdBQU4sQ0FBVSxTQUFWLENBQVo7QUFBQSxRQUNJTyxLQUFLLEdBQUdKLEtBQUssQ0FBQ0ssV0FBTixFQURaO0FBQUEsUUFFSUMsS0FBSyxHQUFHTixLQUFLLENBQUNPLFVBQU4sRUFGWjtBQUFBLFFBR0lDLEtBQUssR0FBR1IsS0FBSyxDQUFDUyxNQUFOLEdBQWVDLEdBQWYsR0FBcUJOLEtBQXJCLEdBQTZCTCxDQUFDLENBQUNZLEtBSDNDO0FBQUEsUUFJSUMsS0FBSyxHQUFHWixLQUFLLENBQUNTLE1BQU4sR0FBZUksSUFBZixHQUFzQlAsS0FBdEIsR0FBOEJQLENBQUMsQ0FBQ2UsS0FKNUM7QUFLQWQsU0FBSyxDQUFDSCxHQUFOLENBQVUsU0FBVixFQUFxQixJQUFyQixFQUEyQmtCLE9BQTNCLEdBQXFDakIsRUFBckMsQ0FBd0MsV0FBeEMsRUFBcUQsVUFBU0MsQ0FBVCxFQUFZO0FBQzdEN0MsT0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnVELE1BQWhCLENBQXVCO0FBQ25CQyxXQUFHLEVBQUNYLENBQUMsQ0FBQ1ksS0FBRixHQUFVSCxLQUFWLEdBQWtCSixLQURIO0FBRW5CUyxZQUFJLEVBQUNkLENBQUMsQ0FBQ2UsS0FBRixHQUFVRixLQUFWLEdBQWtCTjtBQUZKLE9BQXZCLEVBR0dSLEVBSEgsQ0FHTSxTQUhOLEVBR2lCLFlBQVc7QUFDeEI1QyxTQUFDLENBQUMsSUFBRCxDQUFELENBQVE4RCxXQUFSLENBQW9CLFdBQXBCLEVBQWlDbkIsR0FBakMsQ0FBcUMsU0FBckMsRUFBZ0RNLEtBQWhEO0FBQ0gsT0FMRDtBQU1ILEtBUEQ7QUFRQUosS0FBQyxDQUFDa0IsY0FBRixHQW5CNkQsQ0FtQnpDO0FBQ3ZCLEdBcEJNLEVBb0JKbkIsRUFwQkksQ0FvQkQsU0FwQkMsRUFvQlUsWUFBVztBQUN4QixRQUFHUCxHQUFHLENBQUNFLE1BQUosS0FBZSxFQUFsQixFQUFzQjtBQUNsQnZDLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUThELFdBQVIsQ0FBb0IsV0FBcEI7QUFDSCxLQUZELE1BRU87QUFDSDlELE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUThELFdBQVIsQ0FBb0IsZUFBcEIsRUFBcUNkLE1BQXJDLEdBQThDYyxXQUE5QyxDQUEwRCxXQUExRDtBQUNIO0FBQ0osR0ExQk0sQ0FBUDtBQTRCSCxDQXRDRDs7QUF3Q0FFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQixVQUFTQyxDQUFULEVBQVk7QUFDNUIsU0FBT0EsQ0FBQyxHQUFHQyxVQUFVLENBQUNDLGdCQUFnQixDQUFDQyxRQUFRLENBQUNDLGVBQVYsQ0FBaEIsQ0FBMkNDLFFBQTVDLENBQXJCO0FBQ0EsQ0FGRDs7QUFJQVAsTUFBTSxDQUFDUSxPQUFQLEdBQWlCLFVBQVNOLENBQVQsRUFBWTtBQUM1QixTQUFPQSxDQUFDLEdBQUdDLFVBQVUsQ0FBQ0MsZ0JBQWdCLENBQUNDLFFBQVEsQ0FBQ0MsZUFBVixDQUFoQixDQUEyQ0MsUUFBNUMsQ0FBckI7QUFDQSxDQUZEOztBQUlBUCxNQUFNLENBQUNTLE1BQVAsR0FBZ0I7QUFDZkMsS0FBRyxFQUFFLGVBQVc7QUFDZixXQUFPMUUsQ0FBQyxDQUFDcUUsUUFBUSxDQUFDTSxhQUFULENBQXVCLEtBQXZCLENBQUQsQ0FBUjtBQUdBLEdBTGM7QUFPZkMsR0FBQyxFQUFFLGFBQVc7QUFDYixXQUFPNUUsQ0FBQyxDQUFDcUUsUUFBUSxDQUFDTSxhQUFULENBQXVCLEdBQXZCLENBQUQsQ0FBUixDQURhLENBRVo7QUFDRCxHQVZjO0FBWWZFLE1BQUksRUFBRSxnQkFBVztBQUNoQixXQUFPN0UsQ0FBQyxDQUFDcUUsUUFBUSxDQUFDTSxhQUFULENBQXVCLE1BQXZCLENBQUQsQ0FBUjtBQUVBLEdBZmM7QUFpQmZHLFVBQVEsRUFBRSxvQkFBVztBQUNwQixXQUFPOUUsQ0FBQyxDQUFDcUUsUUFBUSxDQUFDTSxhQUFULENBQXVCLFVBQXZCLENBQUQsQ0FBUjtBQUVBLEdBcEJjO0FBc0JmSSxPQUFLLEVBQUUsaUJBQVc7QUFDakIsV0FBTy9FLENBQUMsQ0FBQ3FFLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixPQUF2QixDQUFELENBQUQsQ0FDTEssSUFESyxDQUNBLE1BREEsRUFDUSxNQURSLEVBRUxqQyxRQUZLLENBRUksOEJBRkosQ0FBUDtBQUlBLEdBM0JjO0FBNkJma0MsVUFBUSxFQUFFLG9CQUFXO0FBQ3BCLFdBQU9qRixDQUFDLENBQUNxRSxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBRCxDQUFELENBQ0xLLElBREssQ0FDQSxNQURBLEVBQ1EsVUFEUixFQUVMakMsUUFGSyxDQUVJLHNCQUZKLENBQVA7QUFJQSxHQWxDYztBQW9DZm1DLFFBQU0sRUFBRSxrQkFBVztBQUNsQixXQUFPbEYsQ0FBQyxDQUFDcUUsUUFBUSxDQUFDTSxhQUFULENBQXVCLFFBQXZCLENBQUQsQ0FBRCxDQUNMNUIsUUFESyxDQUNJLDhCQURKLENBQVA7QUFHQSxHQXhDYztBQTBDZm9DLFFBQU0sRUFBRSxrQkFBVztBQUNsQixXQUFPbkYsQ0FBQyxDQUFDcUUsUUFBUSxDQUFDTSxhQUFULENBQXVCLFFBQXZCLENBQUQsQ0FBRCxDQUNMSyxJQURLLENBQ0EsT0FEQSxFQUNTLEVBRFQsQ0FBUDtBQUdBLEdBOUNjO0FBZ0RmSSxPQUFLLEVBQUUsaUJBQVc7QUFDakIsV0FBT3BGLENBQUMsQ0FBQ3FFLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixPQUF2QixDQUFELENBQUQsQ0FDTDVCLFFBREssQ0FDSSx3Q0FESixDQUFQO0FBR0EsR0FwRGM7QUFzRGZzQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsV0FBT3JGLENBQUMsQ0FBQ3FFLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixRQUF2QixDQUFELENBQUQsQ0FDTEssSUFESyxDQUNBLE1BREEsRUFDUSxRQURSLEVBRUxqQyxRQUZLLENBRUksS0FGSixDQUFQO0FBSUEsR0EzRGM7QUE2RGZ1QyxZQUFVLEVBQUUsc0JBQVc7QUFDdEIsV0FBT3RGLENBQUMsQ0FBQ3FFLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixRQUF2QixDQUFELENBQUQsQ0FDTEssSUFESyxDQUNBLE1BREEsRUFDUSxRQURSLEVBRUxqQyxRQUZLLENBRUksOENBRkosQ0FBUDtBQUlBLEdBbEVjO0FBb0Vmd0MsYUFBVyxFQUFFLHVCQUFXO0FBQ3ZCLFdBQU92RixDQUFDLENBQUNxRSxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBRCxDQUFELENBQ0xLLElBREssQ0FDQSxNQURBLEVBQ1EsUUFEUixFQUVMakMsUUFGSyxDQUVJLDZCQUZKLENBQVA7QUFJQSxHQXpFYztBQTJFZnlDLE9BQUssRUFBRSxpQkFBVztBQUNqQixXQUFPeEYsQ0FBQyxDQUFDcUUsUUFBUSxDQUFDTSxhQUFULENBQXVCLE9BQXZCLENBQUQsQ0FBUjtBQUdBLEdBL0VjO0FBaUZmYyxPQUFLLEVBQUUsaUJBQVc7QUFDakIsV0FBT3pGLENBQUMsQ0FBQ3FFLFFBQVEsQ0FBQ00sYUFBVCxDQUF1QixPQUF2QixDQUFELENBQVI7QUFHQSxHQXJGYztBQXVGZmUsSUFBRSxFQUFFLGNBQVc7QUFDZCxXQUFPMUYsQ0FBQyxDQUFDcUUsUUFBUSxDQUFDTSxhQUFULENBQXVCLElBQXZCLENBQUQsQ0FBUjtBQUdBLEdBM0ZjO0FBNkZmZ0IsT0FBSyxFQUFFLGlCQUFXO0FBQ2pCLFdBQU8zRixDQUFDLENBQUNxRSxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBRCxDQUFSO0FBR0EsR0FqR2M7QUFtR2ZpQixJQUFFLEVBQUUsY0FBVztBQUNkLFdBQU81RixDQUFDLENBQUNxRSxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBRCxDQUFSO0FBR0EsR0F2R2M7QUF5R2ZrQixJQUFFLEVBQUUsY0FBVztBQUNkLFdBQU83RixDQUFDLENBQUNxRSxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBRCxDQUFSO0FBR0EsR0E3R2M7QUErR2ZtQixJQUFFLEVBQUUsY0FBVztBQUNkLFdBQU85RixDQUFDLENBQUNxRSxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBRCxDQUFSO0FBR0EsR0FuSGM7QUFxSGZvQixJQUFFLEVBQUUsY0FBVztBQUNkLFdBQU8vRixDQUFDLENBQUNxRSxRQUFRLENBQUNNLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBRCxDQUFSO0FBR0E7QUF6SGMsQ0FBaEI7QUE2SEFYLE1BQU0sQ0FBQ2dDLElBQVAsR0FBYztBQUViQyxPQUFLLEVBQUUsZUFBU0MsU0FBVCxFQUFvQjtBQUUxQixRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUVBbkcsS0FBQyxDQUFDa0csU0FBRCxDQUFELENBQWF4RCxJQUFiLENBQWtCLHFEQUFsQixFQUF5RTBELEdBQXpFLENBQTZFLGlCQUE3RSxFQUFnR0MsSUFBaEcsQ0FBcUcsWUFBVztBQUUvR3JHLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFVBQVNDLENBQVQsRUFBWTtBQUUvQixZQUFJN0MsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0QsTUFBUixHQUFpQm5CLEdBQWpCLENBQXFCLFNBQXJCLENBQUosRUFBcUM7QUFDcEM3QixXQUFDLENBQUMsSUFBRCxDQUFELENBQVFnRCxNQUFSLEdBQWlCTixJQUFqQixDQUFzQixTQUF0QixFQUFpQ29CLFdBQWpDLENBQTZDLFFBQTdDO0FBQ0E5RCxXQUFDLENBQUMsSUFBRCxDQUFELENBQVErQyxRQUFSLENBQWlCLFFBQWpCO0FBQ0E7O0FBRUQsWUFBSXVELEdBQUcsR0FBR3RHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVHLElBQVIsQ0FBYSxLQUFiLENBQVY7QUFDQSxZQUFJQyxNQUFNLEdBQUd4RyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF1RyxJQUFSLENBQWEsUUFBYixLQUEwQixJQUF2QztBQUVBSixZQUFJLENBQUNNLEdBQUwsQ0FBU0QsTUFBVCxFQUFpQkYsR0FBakIsRUFBc0I7QUFBQ0ksY0FBSSxFQUFFO0FBQVAsU0FBdEI7QUFDQSxlQUFPLEtBQVA7QUFDQSxPQVpEOztBQWNBLFVBQUkxRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEyRyxRQUFSLENBQWlCLFFBQWpCLENBQUosRUFBZ0M7QUFDL0IzRyxTQUFDLENBQUMsSUFBRCxDQUFELENBQVE0RyxPQUFSLENBQWdCLE9BQWhCO0FBQ0E7QUFFRCxLQXBCRDtBQXNCQTVHLEtBQUMsQ0FBQ2tHLFNBQUQsQ0FBRCxDQUFheEQsSUFBYixDQUFrQixxREFBbEIsRUFBeUVtRSxNQUF6RSxDQUFnRixpQkFBaEYsRUFBbUdSLElBQW5HLENBQXdHLFlBQVc7QUFFbEgsVUFBSSxDQUFDUyxLQUFLLEdBQUc5RyxDQUFDLENBQUMsTUFBTUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRZ0YsSUFBUixDQUFhLE1BQWIsQ0FBUCxDQUFWLE1BQTRDLEtBQWhELEVBQXVEO0FBQ3RELGVBQU8sS0FBUDtBQUNBOztBQUVEOEIsV0FBSyxDQUFDbEUsRUFBTixDQUFTLFFBQVQsRUFBbUIsVUFBU0MsQ0FBVCxFQUFZO0FBQzlCLGVBQU8sS0FBUDtBQUNBLE9BRkQ7QUFJQTdDLE9BQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFVBQVNDLENBQVQsRUFBWTtBQUUvQixZQUFJeUQsR0FBRyxHQUFHdEcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUcsSUFBUixDQUFhLEtBQWIsQ0FBVjtBQUNBLFlBQUlDLE1BQU0sR0FBR3hHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVHLElBQVIsQ0FBYSxRQUFiLEtBQTBCLElBQXZDOztBQUVBLFlBQUlPLEtBQUssQ0FBQ3BFLElBQU4sQ0FBVyxvQkFBWCxFQUFpQ1IsS0FBakMsRUFBSixFQUE4QztBQUM3QyxjQUFJNkUsTUFBTSxHQUFHLE1BQWI7QUFDQSxjQUFJUixJQUFJLEdBQUcsSUFBSVMsUUFBSixDQUFhRixLQUFLLENBQUNHLEdBQU4sQ0FBVSxDQUFWLENBQWIsQ0FBWDtBQUNBLFNBSEQsTUFHTztBQUNOLGNBQUlGLE1BQU0sR0FBR0QsS0FBSyxDQUFDOUIsSUFBTixDQUFXLFFBQVgsS0FBd0IsS0FBckM7QUFDQSxjQUFJdUIsSUFBSSxHQUFHTyxLQUFLLENBQUNJLGNBQU4sRUFBWDtBQUNBOztBQUVEZixZQUFJLENBQUNNLEdBQUwsQ0FBU0QsTUFBVCxFQUFpQkYsR0FBakIsRUFBc0I7QUFBQ1MsZ0JBQU0sRUFBRUEsTUFBVDtBQUFpQkwsY0FBSSxFQUFFLElBQXZCO0FBQTZCSCxjQUFJLEVBQUVBO0FBQW5DLFNBQXRCO0FBQ0EsZUFBTyxLQUFQO0FBRUEsT0FoQkQ7O0FBa0JBLFVBQUl2RyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEyRyxRQUFSLENBQWlCLFFBQWpCLENBQUosRUFBZ0M7QUFDL0IzRyxTQUFDLENBQUMsSUFBRCxDQUFELENBQVE0RyxPQUFSLENBQWdCLE9BQWhCO0FBQ0E7QUFFRCxLQWhDRDtBQWtDQTVHLEtBQUMsQ0FBQ2tHLFNBQUQsQ0FBRCxDQUFheEQsSUFBYixDQUFrQiwyQkFBbEIsRUFBK0MyRCxJQUEvQyxDQUFvRCxZQUFXO0FBRTlEckcsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRNEMsRUFBUixDQUFXLFFBQVgsRUFBcUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ2hDLFlBQUl5RCxHQUFHLEdBQUd0RyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF1RyxJQUFSLENBQWEsS0FBYixDQUFWO0FBQ0EsWUFBSUMsTUFBTSxHQUFHeEcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUcsSUFBUixDQUFhLFFBQWIsS0FBMEJ2RyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnRCxNQUFSLEVBQXZDOztBQUVBLFlBQUloRCxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEwQyxJQUFSLENBQWEsb0JBQWIsRUFBbUNSLEtBQW5DLEVBQUosRUFBZ0Q7QUFDL0MsY0FBSTZFLE1BQU0sR0FBRyxNQUFiO0FBQ0EsY0FBSVIsSUFBSSxHQUFHLElBQUlTLFFBQUosQ0FBYWhILENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWlILEdBQVIsQ0FBWSxDQUFaLENBQWIsQ0FBWDtBQUNBLFNBSEQsTUFHTztBQUNOLGNBQUlGLE1BQU0sR0FBRy9HLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdGLElBQVIsQ0FBYSxRQUFiLEtBQTBCLEtBQXZDO0FBQ0EsY0FBSXVCLElBQUksR0FBR3ZHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWtILGNBQVIsRUFBWDtBQUNBOztBQUVEZixZQUFJLENBQUNNLEdBQUwsQ0FBU0QsTUFBVCxFQUFpQkYsR0FBakIsRUFBc0I7QUFBQ1MsZ0JBQU0sRUFBRUEsTUFBVDtBQUFpQkwsY0FBSSxFQUFFLElBQXZCO0FBQTZCSCxjQUFJLEVBQUVBO0FBQW5DLFNBQXRCO0FBQ0EsZUFBTyxLQUFQO0FBQ0EsT0FkRDs7QUFnQkEsVUFBSXZHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTJHLFFBQVIsQ0FBaUIsUUFBakIsQ0FBSixFQUFnQztBQUMvQjNHLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRHLE9BQVIsQ0FBZ0IsUUFBaEI7QUFDQTtBQUVELEtBdEJEO0FBd0JBNUcsS0FBQyxDQUFDa0csU0FBRCxDQUFELENBQWF4RCxJQUFiLENBQWtCLDBCQUFsQixFQUE4QzJELElBQTlDLENBQW1ELFVBQVN4RCxDQUFULEVBQVk7QUFDOUQsVUFBSTJELE1BQU0sR0FBR3hHLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVHLElBQVIsQ0FBYSxRQUFiLEtBQTBCLElBQXZDO0FBQ0EsVUFBSUQsR0FBRyxHQUFHdEcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUcsSUFBUixDQUFhLEtBQWIsQ0FBVjtBQUVBSixVQUFJLENBQUNNLEdBQUwsQ0FBU0QsTUFBVCxFQUFpQkYsR0FBakIsRUFBc0I7QUFBQ0ksWUFBSSxFQUFFO0FBQVAsT0FBdEI7QUFDQSxLQUxEO0FBT0EsR0E3Rlk7QUErRmJELEtBQUcsRUFBRSxhQUFVRCxNQUFWLEVBQWtCRixHQUFsQixFQUFxQztBQUFBLFFBQWRhLE9BQWMsdUVBQUosRUFBSTs7QUFFekMsUUFBSVgsTUFBTSxJQUFJRixHQUFkLEVBQW1CO0FBRWxCLFVBQUlhLE9BQU8sQ0FBQ0MsS0FBUixLQUFrQixJQUFsQixJQUEyQkQsT0FBTyxDQUFDVCxJQUFSLElBQWdCMUcsQ0FBQyxDQUFDbUgsT0FBTyxDQUFDVCxJQUFULENBQUQsQ0FBZ0JXLEVBQWhCLENBQW1CLHdCQUFuQixDQUEvQyxFQUE4RjtBQUM3RixZQUFJckgsQ0FBQyxDQUFDd0csTUFBRCxDQUFELENBQVVhLEVBQVYsQ0FBYSxRQUFiLENBQUosRUFBNEI7QUFDM0JySCxXQUFDLENBQUN3RyxNQUFELENBQUQsQ0FBVVksS0FBVixDQUFnQixNQUFoQjtBQUNBLFNBRkQsTUFFTztBQUNOcEgsV0FBQyxDQUFDd0csTUFBRCxDQUFELENBQVUzQyxPQUFWLENBQWtCLFFBQWxCLEVBQTRCdUQsS0FBNUIsQ0FBa0MsTUFBbEM7QUFDQTtBQUNEOztBQUVELFVBQUlMLE1BQU0sR0FBR0ksT0FBTyxDQUFDSixNQUFSLElBQWtCLEtBQS9CO0FBQ0EsVUFBSVIsSUFBSSxHQUFHWSxPQUFPLENBQUNaLElBQVIsSUFBZ0IsRUFBM0I7QUFFQSxVQUFJSixJQUFJLEdBQUcsSUFBWDtBQUNBbkcsT0FBQyxDQUFDZ0csSUFBRixDQUFPO0FBQ05NLFdBQUcsRUFBR0EsR0FEQTtBQUVOZ0IsWUFBSSxFQUFFUCxNQUZBO0FBR05SLFlBQUksRUFBRUEsSUFIQTtBQUlOZ0IsbUJBQVcsRUFBR2hCLElBQUksQ0FBQ2lCLFdBQUwsS0FBcUJSLFFBQXRCLEdBQWdDLEtBQWhDLEdBQXNDLGtEQUo3QztBQUtOUyxtQkFBVyxFQUFHbEIsSUFBSSxDQUFDaUIsV0FBTCxLQUFxQlIsUUFMN0I7QUFPTlUsa0JBQVUsRUFBRSxvQkFBU0MsS0FBVCxFQUFnQkMsUUFBaEIsRUFBMEI7QUFDckNELGVBQUssQ0FBQ0MsUUFBTixHQUFpQkEsUUFBakI7QUFDQUQsZUFBSyxDQUFDakIsSUFBTixHQUFhMUcsQ0FBQyxDQUFDbUgsT0FBTyxDQUFDVCxJQUFULENBQWQ7QUFDQTFHLFdBQUMsQ0FBQ3dHLE1BQUQsQ0FBRCxDQUFVSSxPQUFWLENBQWtCLGlCQUFsQixFQUFxQyxDQUFDZSxLQUFELEVBQVFDLFFBQVIsQ0FBckM7QUFDQSxTQVhLO0FBYU5DLGVBQU8sRUFBRSxpQkFBU0MsTUFBVCxFQUFpQkMsVUFBakIsRUFBNkJKLEtBQTdCLEVBQW9DO0FBQzVDQSxlQUFLLENBQUNqQixJQUFOLEdBQWExRyxDQUFDLENBQUNtSCxPQUFPLENBQUNULElBQVQsQ0FBZDtBQUNBMUcsV0FBQyxDQUFDd0csTUFBRCxDQUFELENBQVVJLE9BQVYsQ0FBa0IsY0FBbEIsRUFBa0MsQ0FBQ2tCLE1BQUQsRUFBU0MsVUFBVCxFQUFxQkosS0FBckIsQ0FBbEM7QUFDQTNILFdBQUMsQ0FBQ3dHLE1BQUQsQ0FBRCxDQUFVSSxPQUFWLENBQWtCLGdCQUFsQixFQUFvQyxDQUFDa0IsTUFBRCxFQUFTQyxVQUFULEVBQXFCSixLQUFyQixDQUFwQztBQUNBLFNBakJLO0FBbUJOSyxhQUFLLEVBQUUsZUFBU0wsS0FBVCxFQUFnQkksVUFBaEIsRUFBNEJFLFdBQTVCLEVBQXlDO0FBQy9DTixlQUFLLENBQUNqQixJQUFOLEdBQWExRyxDQUFDLENBQUNtSCxPQUFPLENBQUNULElBQVQsQ0FBZDtBQUNBMUcsV0FBQyxDQUFDd0csTUFBRCxDQUFELENBQVVJLE9BQVYsQ0FBa0IsWUFBbEIsRUFBZ0MsQ0FBQ2UsS0FBRCxFQUFRSSxVQUFSLEVBQW9CRSxXQUFwQixDQUFoQztBQUNBO0FBdEJLLE9BQVA7QUF3QkE7QUFFRDtBQXpJWSxDQUFkO0FBNElBakksQ0FBQyxDQUFDcUUsUUFBRCxDQUFELENBQVk2RCxLQUFaLENBQWtCLFlBQVc7QUFFNUI7QUFDQTtBQUNBO0FBRUEsTUFBSUMsTUFBTSxHQUFHbkksQ0FBQyxDQUFDLE1BQUQsQ0FBRCxDQUFVZ0YsSUFBVixDQUFlLE1BQWYsQ0FBYjtBQUVBaEYsR0FBQyxDQUFDb0ksSUFBRixHQUFTQyxJQUFULENBQWM7QUFDYkYsVUFBTSxFQUFFbEksNEVBQVEsSUFBWSxHQUFHa0ksTUFBZixHQUF3QixPQUF6QjtBQURGLEdBQWQ7QUFJQW5JLEdBQUMsQ0FBQ29JLElBQUYsQ0FBTztBQUNORCxVQUFNLEVBQUU7QUFERixHQUFQLEVBWjRCLENBZ0I1QjtBQUNBO0FBQ0E7O0FBRUFuRSxRQUFNLENBQUNzRSxJQUFQLEdBQWM7QUFDYkMsV0FBTyxFQUNOLHlJQUNDLHFLQURELEdBRUMsOEtBRkQsR0FHQSxRQUxZO0FBT2JDLGFBQVMsRUFDUCwySUFDRyx3S0FESCxHQUVHLHFLQUZILEdBR0EsUUFYVztBQWFiQyxVQUFNLEVBQ0osbUlBQ0MsMFNBREQsR0FFQSxRQWhCVztBQWtCYkMsY0FBVSxFQUNSLHdJQUNDLG9EQURELEdBRUMsMFNBRkQsR0FHQSxRQXRCVztBQXdCYmIsV0FBTyxFQUNMLGtKQUNDLDZQQURELEdBRUEsUUEzQlc7QUE2QmJjLFdBQU8sRUFDTCxpSkFDQyx5VkFERCxHQUVBLFFBaENXO0FBa0NiQyxVQUFNLEVBQ0osd0pBQ0Msb09BREQsR0FFQSxRQXJDVztBQXVDYkMsV0FBTyxFQUNOLHFEQUNDLDRDQURELEdBRUUsd0JBRkYsR0FFNkI3SSxDQUFDLENBQUNvSSxJQUFGLENBQU8sU0FBUCxDQUY3QixHQUVpRCxTQUZqRCxHQUdDLFFBSEQsR0FJQSxRQTVDWTtBQThDYlUsU0FBSyxFQUNELDJGQUEyRjlJLENBQUMsQ0FBQ29JLElBQUYsQ0FBTyxPQUFQLENBQTNGLEdBQTZHLEdBQTdHLEdBQ0MseUNBREQsR0FFQTtBQWpEUyxHQUFkLENBcEI0QixDQTBFNUI7QUFDQTtBQUNBOztBQUVBcEksR0FBQyxDQUFDaUMsRUFBRixDQUFLOEcsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUI5SCxNQUF6QixHQUFrQyxZQUFsQztBQUNBbEIsR0FBQyxDQUFDaUMsRUFBRixDQUFLOEcsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUJDLFNBQXpCLEdBQXFDLENBQXJDO0FBQ0FqSixHQUFDLENBQUNpQyxFQUFGLENBQUs4RyxVQUFMLENBQWdCQyxRQUFoQixDQUF5QkUsV0FBekIsR0FBdUMsQ0FBdkM7QUFDQWxKLEdBQUMsQ0FBQ2lDLEVBQUYsQ0FBSzhHLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCRyxRQUF6QixHQUFvQ2hCLE1BQU0sQ0FBQ2lCLE9BQVAsQ0FBZSxHQUFmLEVBQW9CLEdBQXBCLENBQXBDO0FBQ0FwSixHQUFDLENBQUNpQyxFQUFGLENBQUs4RyxVQUFMLENBQWdCQyxRQUFoQixDQUF5QkssU0FBekIsR0FBcUMsS0FBckM7QUFDQXJKLEdBQUMsQ0FBQ2lDLEVBQUYsQ0FBSzhHLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCTSxrQkFBekIsR0FBOEMsS0FBOUM7QUFDQXRKLEdBQUMsQ0FBQ2lDLEVBQUYsQ0FBSzhHLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCTyxTQUF6QixHQUFxQyxJQUFyQztBQUNBdkosR0FBQyxDQUFDaUMsRUFBRixDQUFLOEcsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUJRLGFBQXpCLEdBQXlDLElBQXpDO0FBQ0F4SixHQUFDLENBQUNpQyxFQUFGLENBQUs4RyxVQUFMLENBQWdCQyxRQUFoQixDQUF5QlMsUUFBekIsR0FBb0MsSUFBcEM7QUFDQXpKLEdBQUMsQ0FBQ2lDLEVBQUYsQ0FBSzhHLFVBQUwsQ0FBZ0JDLFFBQWhCLENBQXlCVSxRQUF6QixHQUFvQyxJQUFwQztBQUNBMUosR0FBQyxDQUFDaUMsRUFBRixDQUFLOEcsVUFBTCxDQUFnQkMsUUFBaEIsQ0FBeUJXLGNBQXpCLEdBQTBDLElBQTFDO0FBSUczSixHQUFDLENBQUNxRSxRQUFELENBQUQsQ0FBWXpCLEVBQVosQ0FBZSxpQkFBZixFQUFrQyxVQUFTQyxDQUFULEVBQVk4RSxLQUFaLEVBQW1CQyxRQUFuQixFQUE2QjtBQUM5RDVILEtBQUMsQ0FBQzZDLENBQUMsQ0FBQzJELE1BQUgsQ0FBRCxDQUNEb0QsSUFEQyxHQUVEQyxLQUZDLEdBR0RDLE1BSEMsQ0FHTTlGLE1BQU0sQ0FBQ3NFLElBQVAsQ0FBWU8sT0FIbEI7QUFLQSxHQU5EO0FBUUE3SSxHQUFDLENBQUNxRSxRQUFELENBQUQsQ0FBWXpCLEVBQVosQ0FBZSxjQUFmLEVBQStCLFVBQVNDLENBQVQsRUFBWWlGLE1BQVosRUFBb0JDLFVBQXBCLEVBQWdDSixLQUFoQyxFQUF1QztBQUV4RTNILEtBQUMsQ0FBQzZDLENBQUMsQ0FBQzJELE1BQUgsQ0FBRCxDQUFZOUQsSUFBWixDQUFpQixpQkFBakIsRUFBb0NNLE1BQXBDLEdBQTZDK0csTUFBN0M7O0FBQ0EsUUFBSWpDLE1BQUosRUFBWTtBQUNYOUgsT0FBQyxDQUFDNkMsQ0FBQyxDQUFDMkQsTUFBSCxDQUFELENBQVl4RixJQUFaLENBQWlCaEIsQ0FBQyxDQUFDNkMsQ0FBQyxDQUFDMkQsTUFBSCxDQUFELENBQVl4RixJQUFaLEtBQXFCOEcsTUFBdEM7QUFDQSxLQUx1RSxDQU94RTtBQUNBO0FBQ0E7OztBQUVBOUgsS0FBQyxDQUFDNkMsQ0FBQyxDQUFDMkQsTUFBSCxDQUFELENBQVk5RCxJQUFaLENBQWlCLHlCQUFqQixFQUE0Q3NILE9BQTVDLEdBWHdFLENBYXhFO0FBQ0E7QUFDQTs7QUFFR2hHLFVBQU0sQ0FBQ2dDLElBQVAsQ0FBWUMsS0FBWixDQUFrQnBELENBQUMsQ0FBQzJELE1BQXBCLEVBakJxRSxDQW1CeEU7QUFDQTtBQUNBOztBQUVBeEcsS0FBQyxDQUFDNkMsQ0FBQyxDQUFDMkQsTUFBSCxDQUFELENBQVk1RCxFQUFaLENBQWUsb0JBQWYsRUFBcUMsWUFBVztBQUMvQzVDLE9BQUMsQ0FBQyxxQ0FBcUNBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdGLElBQVIsQ0FBYSxJQUFiLENBQXJDLEdBQTBELElBQTNELENBQUQsQ0FDRWxCLFdBREYsQ0FDYyxRQURkLEVBRUVtRyxJQUZGO0FBSUEsS0FMRDtBQU9BakssS0FBQyxDQUFDNkMsQ0FBQyxDQUFDMkQsTUFBSCxDQUFELENBQVk1RCxFQUFaLENBQWUsaUJBQWYsRUFBa0MsVUFBU0MsQ0FBVCxFQUFZO0FBQzdDN0MsT0FBQyxDQUFDLHVCQUFELENBQUQsQ0FBMkJpSyxJQUEzQjtBQUNBakssT0FBQyxDQUFDNkMsQ0FBQyxDQUFDMkQsTUFBSCxDQUFELENBQVk5RCxJQUFaLENBQWlCLGdCQUFqQixFQUFtQ3dILFVBQW5DLENBQThDLE9BQTlDO0FBQ0EsS0FIRDtBQUtBbEssS0FBQyxDQUFDNkMsQ0FBQyxDQUFDMkQsTUFBSCxDQUFELENBQVk5RCxJQUFaLENBQWlCLHNCQUFqQixFQUF5Q0UsRUFBekMsQ0FBNEMsT0FBNUMsRUFBcUQsWUFBVztBQUMvRDVDLE9BQUMsQ0FBQyxRQUFELENBQUQsQ0FBWW9ILEtBQVosQ0FBa0IsTUFBbEI7QUFDQSxLQUZEO0FBSUFwSCxLQUFDLENBQUM2QyxDQUFDLENBQUMyRCxNQUFILENBQUQsQ0FBWTlELElBQVosQ0FBaUIsZUFBakIsRUFBa0MyRCxJQUFsQyxDQUF1QyxZQUFXO0FBQ2pEckcsT0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRbUssT0FBUixDQUFnQixlQUFoQixFQUFpQy9ILEtBQWpDLENBQXVDO0FBQUNHLGNBQU0sRUFBQztBQUFSLE9BQXZDO0FBQ0EsS0FGRCxFQXZDd0UsQ0EyQ3hFO0FBQ0E7QUFDQTs7QUFFQXZDLEtBQUMsQ0FBQzZDLENBQUMsQ0FBQzJELE1BQUgsQ0FBRCxDQUFZOUQsSUFBWixDQUFpQixhQUFqQixFQUFnQzJELElBQWhDLENBQXFDLFlBQVc7QUFDL0NyRyxPQUFDLENBQUMsSUFBRCxDQUFELENBQVErSSxVQUFSLENBQW1CO0FBQUMsa0JBQVUvSSxDQUFDLENBQUNpQyxFQUFGLENBQUs4RyxVQUFMLENBQWdCQyxRQUFoQixDQUF5QjlIO0FBQXBDLE9BQW5CO0FBQ0EsS0FGRCxFQS9Dd0UsQ0FvRHhFO0FBQ0E7QUFDQTs7QUFFQWxCLEtBQUMsQ0FBQzZDLENBQUMsQ0FBQzJELE1BQUgsQ0FBRCxDQUFZOUQsSUFBWixDQUFpQixxQkFBakIsRUFBd0MyRCxJQUF4QyxDQUE2QyxZQUFXO0FBRXZELFVBQUkrRCxFQUFKOztBQUNBLFVBQUlBLEVBQUUsR0FBR3BLLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFLLElBQVIsQ0FBYSxNQUFiLEVBQXFCQyxLQUFyQixxQ0FBVCxFQUF5RDtBQUV4RHRLLFNBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTRDLEVBQVIsQ0FBVyxPQUFYLEVBQW9CLFlBQVc7QUFFOUIsY0FBSTJILE9BQU8sR0FBSXZLLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXdLLEdBQVIsTUFBaUIsQ0FBaEM7QUFFQXhLLFdBQUMsQ0FBQyxXQUFXb0ssRUFBRSxDQUFDLENBQUQsQ0FBYixHQUFtQixJQUFwQixDQUFELENBQTJCaEUsR0FBM0IsQ0FBK0Isb0JBQS9CLEVBQXFEQSxHQUFyRCxDQUF5RCxvQkFBekQsRUFBK0VDLElBQS9FLENBQW9GLFlBQVc7QUFDOUYsZ0JBQUlyRyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVEyRyxRQUFSLENBQWlCLFlBQWpCLENBQUosRUFBb0M7QUFDbkMzRyxlQUFDLENBQUMsSUFBRCxDQUFELENBQVErSSxVQUFSLENBQW1CLFNBQW5CLEVBQThCLElBQUlsSSxJQUFKLEVBQTlCO0FBQ0EsYUFGRCxNQUVPLElBQUliLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdGLElBQVIsQ0FBYSxNQUFiLEtBQXdCLE9BQTVCLEVBQXFDO0FBQzNDaEYsZUFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUssSUFBUixDQUFhLFNBQWIsRUFBd0IsS0FBeEI7QUFDQSxhQUZNLE1BRUEsSUFBSXJLLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUWdGLElBQVIsQ0FBYSxNQUFiLEtBQXdCLFVBQTVCLEVBQXdDO0FBQzlDaEYsZUFBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUssSUFBUixDQUFhLFNBQWIsRUFBd0IsS0FBeEI7QUFDQXJLLGVBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFLLElBQVIsQ0FBYSxlQUFiLEVBQThCLEtBQTlCO0FBQ0EsYUFITSxNQUdBLElBQUlySyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFnRixJQUFSLENBQWEsTUFBYixLQUF3QixNQUF4QixJQUFrQ2hGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXFILEVBQVIsQ0FBVyxRQUFYLENBQWxDLElBQTBEckgsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRcUgsRUFBUixDQUFXLFVBQVgsQ0FBOUQsRUFBc0Y7QUFDNUZySCxlQUFDLENBQUMsSUFBRCxDQUFELENBQVF3SyxHQUFSLENBQVksSUFBWjtBQUNBLGFBRk0sTUFFQTtBQUNOO0FBQ0E7O0FBQ0R4SyxhQUFDLENBQUMsSUFBRCxDQUFELENBQVFnRixJQUFSLENBQWEsVUFBYixFQUF5QnVGLE9BQXpCO0FBQ0F2SyxhQUFDLENBQUMsSUFBRCxDQUFELENBQVFnRixJQUFSLENBQWEsVUFBYixFQUF5QmhGLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUXVHLElBQVIsQ0FBYSxVQUFiLEtBQTRCZ0UsT0FBTyxLQUFLLEtBQWpFO0FBQ0EsV0FmRDtBQWlCQXZLLFdBQUMsQ0FBQyxNQUFNb0ssRUFBRSxDQUFDLENBQUQsQ0FBUixHQUFjLFdBQWYsQ0FBRCxDQUE2QkksR0FBN0IsQ0FBaUN4SyxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF3SyxHQUFSLEVBQWpDO0FBQ0EsU0F0QkQ7QUF1QkE7QUFDRCxLQTdCRDtBQStCQXhLLEtBQUMsQ0FBQzZDLENBQUMsQ0FBQzJELE1BQUgsQ0FBRCxDQUFZOUQsSUFBWixDQUFpQixNQUFqQixFQUF5QkEsSUFBekIsQ0FBOEIsb0JBQTlCLEVBQW9EMkQsSUFBcEQsQ0FBeUQsWUFBWTtBQUVwRSxVQUFJckcsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUcsSUFBUixDQUFhLFVBQWIsQ0FBSixFQUE4QjtBQUM3QnZHLFNBQUMsQ0FBQyxZQUFZQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFxSyxJQUFSLENBQWEsSUFBYixDQUFaLEdBQWlDLGFBQWxDLENBQUQsQ0FBa0R4RCxNQUFsRCxDQUF5RCxXQUF6RCxFQUFzRUQsT0FBdEUsQ0FBOEUsT0FBOUU7QUFDQSxPQUZELE1BRU87QUFDTjVHLFNBQUMsQ0FBQyxZQUFZQSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVFxSyxJQUFSLENBQWEsSUFBYixDQUFaLEdBQWlDLGFBQWxDLENBQUQsQ0FBa0R4RCxNQUFsRCxDQUF5RCxXQUF6RCxFQUFzRUQsT0FBdEUsQ0FBOEUsT0FBOUU7QUFDQTtBQUVELEtBUkQsRUF2RndFLENBa0d4RTtBQUNBO0FBQ0E7O0FBRUExRyxxQkFBaUIsQ0FBQ3VLLElBQWxCO0FBRUcsR0F4R0Q7QUEwR0F6SyxHQUFDLENBQUNxRSxRQUFELENBQUQsQ0FBWXpCLEVBQVosQ0FBZSxZQUFmLEVBQTZCLFVBQVNDLENBQVQsRUFBWThFLEtBQVosRUFBbUJJLFVBQW5CLEVBQStCRSxXQUEvQixFQUE0QztBQUUzRSxRQUFJLENBQUN5QyxDQUFDLEdBQUcsa0JBQWtCbkssSUFBbEIsQ0FBdUJvSCxLQUFLLENBQUNnRCxZQUE3QixDQUFMLE1BQXFELElBQXpELEVBQStEO0FBQzlEQyxXQUFLLEdBQUdGLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSzNKLFVBQUwsRUFBUjtBQUNBLEtBRkQsTUFFTztBQUNONkosV0FBSyxHQUFHNUssQ0FBQyxDQUFDb0ksSUFBRixDQUFPLE9BQVAsQ0FBUjtBQUNBOztBQUVFLFFBQUkxRCxHQUFHLEdBQUcxRSxDQUFDLENBQUM2QyxDQUFDLENBQUMyRCxNQUFILENBQUQsQ0FBWXNELE1BQVosQ0FBbUI5RixNQUFNLENBQUNTLE1BQVAsQ0FBY0MsR0FBZCxFQUFuQixFQUF3Q21HLFFBQXhDLEdBQW1EQyxJQUFuRCxHQUNSL0gsUUFEUSxDQUNDLG9CQURELENBQVY7QUFJQTJCLE9BQUcsQ0FBQ29GLE1BQUosQ0FBVzlGLE1BQU0sQ0FBQ1MsTUFBUCxDQUFjQyxHQUF6QixFQUE4Qm1HLFFBQTlCLEdBQXlDQyxJQUF6QyxHQUNFL0gsUUFERixDQUNXLGdDQURYLEVBRUU5QixJQUZGLENBRU9qQixDQUFDLENBQUNvSSxJQUFGLENBQU8sT0FBUCxJQUFrQixHQUFsQixHQUF3QlQsS0FBSyxDQUFDb0QsTUFBOUIsR0FBdUMsS0FBdkMsR0FBK0NwRCxLQUFLLENBQUNxRCxVQUY1RDtBQUtBdEcsT0FBRyxDQUFDb0YsTUFBSixDQUFXOUYsTUFBTSxDQUFDUyxNQUFQLENBQWN3RyxDQUF6QixFQUE0QkosUUFBNUIsR0FBdUNDLElBQXZDLEdBQ0Q3SixJQURDLENBQ0kySixLQURKO0FBSUFsRyxPQUFHLENBQUNvRixNQUFKLENBQVc5RixNQUFNLENBQUNTLE1BQVAsQ0FBY2MsV0FBekIsRUFBc0NzRixRQUF0QyxHQUFpREMsSUFBakQsR0FDRC9ILFFBREMsQ0FDUSxrQkFEUixFQUVEOUIsSUFGQyxDQUVJakIsQ0FBQyxDQUFDb0ksSUFBRixDQUFPLFFBQVAsQ0FGSixFQUdEeEYsRUFIQyxDQUdFLE9BSEYsRUFHVyxZQUFXO0FBQ3ZCb0IsWUFBTSxDQUFDZ0MsSUFBUCxDQUFZUyxHQUFaLENBQWdCNUQsQ0FBQyxDQUFDMkQsTUFBbEIsRUFBMEJtQixLQUFLLENBQUNDLFFBQU4sQ0FBZXRCLEdBQXpDLEVBQThDO0FBQUNDLFlBQUksRUFBRW9CLEtBQUssQ0FBQ0MsUUFBTixDQUFlckI7QUFBdEIsT0FBOUM7QUFDQSxLQUxDO0FBUUE3QixPQUFHLENBQUNvRixNQUFKLENBQVc5RixNQUFNLENBQUNTLE1BQVAsQ0FBY2MsV0FBekIsRUFBc0NzRixRQUF0QyxHQUFpREMsSUFBakQsR0FDRC9ILFFBREMsQ0FDUSxrQkFEUixFQUVEOUIsSUFGQyxDQUVJakIsQ0FBQyxDQUFDb0ksSUFBRixDQUFPLFNBQVAsQ0FGSixFQUdEeEYsRUFIQyxDQUdFLE9BSEYsRUFHVyxZQUFXO0FBQ3ZCLFVBQUlzSSxZQUFZLEdBQUdDLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLEVBQVosRUFBZ0IsUUFBaEIsRUFBMEIsbURBQTFCLENBQW5COztBQUNBLFVBQUksQ0FBQ1YsQ0FBQyxHQUFHLDJCQUF1Qm5LLElBQXZCLENBQTRCb0gsS0FBSyxDQUFDZ0QsWUFBbEMsQ0FBTCxNQUEwRCxJQUE5RCxFQUFvRTtBQUNuRTNLLFNBQUMsQ0FBQ2tMLFlBQVksQ0FBQzdHLFFBQWIsQ0FBc0JnSCxJQUF2QixDQUFELENBQThCdkIsTUFBOUIsQ0FBcUNZLENBQUMsQ0FBQyxDQUFELENBQXRDO0FBQ0E7O0FBQ0QsVUFBSSxDQUFDQSxDQUFDLEdBQUcsMkJBQXVCbkssSUFBdkIsQ0FBNEJvSCxLQUFLLENBQUNnRCxZQUFsQyxDQUFMLE1BQTBELElBQTlELEVBQW9FO0FBQ25FM0ssU0FBQyxDQUFDa0wsWUFBWSxDQUFDN0csUUFBYixDQUFzQmlILElBQXZCLENBQUQsQ0FBOEJ4QixNQUE5QixDQUFxQ1ksQ0FBQyxDQUFDLENBQUQsQ0FBdEM7QUFDQTtBQUNELEtBWEM7QUFjQSxHQTNDRDtBQTZDQTFLLEdBQUMsQ0FBQ3FFLFFBQUQsQ0FBRCxDQUFZdUMsT0FBWixDQUFvQixjQUFwQjtBQUVILENBN1BELEU7Ozs7Ozs7Ozs7OztBQzNXQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG5yZXF1aXJlKCdib290c3RyYXAtZGF0ZXBpY2tlcicpO1xyXG5yZXF1aXJlKCdib290c3RyYXAtZGF0ZXBpY2tlci9kaXN0L2xvY2FsZXMvYm9vdHN0cmFwLWRhdGVwaWNrZXIuZnIubWluLmpzJyk7XHJcbmNvbnN0IGJzQ3VzdG9tRmlsZUlucHV0ID0gcmVxdWlyZSgnYnMtY3VzdG9tLWZpbGUtaW5wdXQnKTtcclxucmVxdWlyZSAoJ0B3aWtpbWVkaWEvanF1ZXJ5LmkxOG4vc3JjL2pxdWVyeS5pMThuLmpzJyk7XHJcbnJlcXVpcmUgKCdAd2lraW1lZGlhL2pxdWVyeS5pMThuL3NyYy9qcXVlcnkuaTE4bi5tZXNzYWdlc3RvcmUuanMnKTtcclxucmVxdWlyZSgnLi4vY3NzL2dsb2JhbC5zY3NzJyk7XHJcblxyXG5TdHJpbmcucHJvdG90eXBlLnRvRGF0ZSA9IGZ1bmN0aW9uICgpIHtcclxuXHRpZiAocyA9IC9cXGR7Mn0tXFxkezJ9LVxcZHs0fS9nLmV4ZWModGhpcykpIHtcclxuXHRcdGNvbnN0IFtkYXksIG1vbnRoLCB5ZWFyXSA9IHNbMF0uc3BsaXQoXCItXCIpO1xyXG5cdFx0ZCA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5KTtcclxuXHRcdHJldHVybiAoZCBpbnN0YW5jZW9mIERhdGUgJiYgaXNOYU4oZCkgPT09IGZhbHNlKT9kOm51bGw7XHJcblx0fVxyXG5cdHJldHVybiBudWxsO1xyXG59O1xyXG5cclxuU3RyaW5nLnByb3RvdHlwZS5odG1sRGVjb2RlID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiAkKFwiPGRpdi8+XCIpLmh0bWwodGhpcykudGV4dCgpO1xyXG59XHJcblxyXG5EYXRlLnByb3RvdHlwZS5mb3JtYXQgPSBmdW5jdGlvbigpIHtcclxuXHRcclxuXHRkYXkgPSB0aGlzLmdldERhdGUoKTtcclxuXHRtb250aCA9IHRoaXMuZ2V0TW9udGgoKSArIDE7XHJcblx0eWVhciA9IHRoaXMuZ2V0RnVsbFllYXIoKTtcclxuXHRcclxuXHRpZiAobW9udGggPCAxMCkgbW9udGggPSAnMCcgKyBtb250aDtcclxuXHRpZiAoZGF5IDwgMTApIGRheSA9ICcwJyArIGRheTtcclxuXHRcclxuXHRyZXR1cm4gW2RheSwgbW9udGgsIHllYXJdLmpvaW4oJy0nKTtcclxuXHRcclxufVxyXG5cclxuRGF0ZS5wcm90b3R5cGUuYWRkRGF5cyA9IGZ1bmN0aW9uKGRheXMpIHtcclxuICAgIHZhciBkYXRlID0gbmV3IERhdGUodGhpcy52YWx1ZU9mKCkpO1xyXG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGF5cyk7XHJcbiAgICByZXR1cm4gZGF0ZTtcclxufVxyXG5cclxuQXJyYXkucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0cmV0dXJuIHRoaXMuc29tZSh2ID0+IFN0cmluZyh2KSA9PT0gU3RyaW5nKHZhbHVlKSlcclxufVxyXG5cclxuJC5mbi5leGlzdCA9IGZ1bmN0aW9uICgpIHtcclxuXHRyZXR1cm4gdGhpcy5sZW5ndGggIT09IDAgJiYgdGhpcztcclxufVxyXG5cclxuJC5mbi5kcmFncyA9IGZ1bmN0aW9uKG9wdCkge1xyXG5cclxuICAgIG9wdCA9ICQuZXh0ZW5kKHtoYW5kbGU6XCJcIixjdXJzb3I6XCJtb3ZlXCJ9LCBvcHQpO1xyXG5cclxuICAgIGlmKG9wdC5oYW5kbGUgPT09IFwiXCIpIHtcclxuICAgICAgICB2YXIgJGVsID0gdGhpcztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdmFyICRlbCA9IHRoaXMuZmluZChvcHQuaGFuZGxlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gJGVsLmNzcygnY3Vyc29yJywgb3B0LmN1cnNvcikub24oXCJtb3VzZWRvd25cIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmKG9wdC5oYW5kbGUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgdmFyICRkcmFnID0gJCh0aGlzKS5hZGRDbGFzcygnZHJhZ2dhYmxlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyICRkcmFnID0gJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWhhbmRsZScpLnBhcmVudCgpLmFkZENsYXNzKCdkcmFnZ2FibGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHpfaWR4ID0gJGRyYWcuY3NzKCd6LWluZGV4JyksXHJcbiAgICAgICAgICAgIGRyZ19oID0gJGRyYWcub3V0ZXJIZWlnaHQoKSxcclxuICAgICAgICAgICAgZHJnX3cgPSAkZHJhZy5vdXRlcldpZHRoKCksXHJcbiAgICAgICAgICAgIHBvc195ID0gJGRyYWcub2Zmc2V0KCkudG9wICsgZHJnX2ggLSBlLnBhZ2VZLFxyXG4gICAgICAgICAgICBwb3NfeCA9ICRkcmFnLm9mZnNldCgpLmxlZnQgKyBkcmdfdyAtIGUucGFnZVg7XHJcbiAgICAgICAgJGRyYWcuY3NzKCd6LWluZGV4JywgMTAwMCkucGFyZW50cygpLm9uKFwibW91c2Vtb3ZlXCIsIGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICAgICAgJCgnLmRyYWdnYWJsZScpLm9mZnNldCh7XHJcbiAgICAgICAgICAgICAgICB0b3A6ZS5wYWdlWSArIHBvc195IC0gZHJnX2gsXHJcbiAgICAgICAgICAgICAgICBsZWZ0OmUucGFnZVggKyBwb3NfeCAtIGRyZ193XHJcbiAgICAgICAgICAgIH0pLm9uKFwibW91c2V1cFwiLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2RyYWdnYWJsZScpLmNzcygnei1pbmRleCcsIHpfaWR4KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBkaXNhYmxlIHNlbGVjdGlvblxyXG4gICAgfSkub24oXCJtb3VzZXVwXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmKG9wdC5oYW5kbGUgPT09IFwiXCIpIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZHJhZ2dhYmxlJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlLWhhbmRsZScpLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdkcmFnZ2FibGUnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbn1cclxuXHJcbmdsb2JhbC5yZW1Ub1B4ID0gZnVuY3Rpb24oaSkge1xyXG5cdHJldHVybiBpICogcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZm9udFNpemUpO1xyXG59XHJcblxyXG5nbG9iYWwucHhUb1JlbSA9IGZ1bmN0aW9uKGkpIHtcclxuXHRyZXR1cm4gaSAvIHBhcnNlRmxvYXQoZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmZvbnRTaXplKTtcclxufVxyXG5cclxuZ2xvYmFsLmNyZWF0ZSA9IHtcclxuXHRkaXY6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXHJcblxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpO1xyXG5cdFx0XHQvLy5hZGRDbGFzcygnYnRuIGJ0bi1zbSB0ZXh0LW5vd3JhcCcpXHJcblx0fSxcclxuXHRcclxuXHRzcGFuOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSlcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGZpZWxkc2V0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ZpZWxkc2V0JykpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRpbnB1dDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICd0ZXh0JylcclxuXHRcdFx0LmFkZENsYXNzKCdmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGNoZWNrYm94OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JylcclxuXHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1pbnB1dCcpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRzZWxlY3Q6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2VsZWN0JykpXHJcblx0XHRcdC5hZGRDbGFzcygnZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbScpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRvcHRpb246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJykpXHJcblx0XHRcdC5hdHRyKCd2YWx1ZScsICcnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0bGFiZWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSlcclxuXHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1sYWJlbCB3LTEwMCB0ZXh0LW5vd3JhcCcpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRidXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdG1lbnVCdXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSB0ZXh0LW5vd3JhcCByb3VuZGVkLTAnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0c21hbGxCdXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBteC0xIHRleHQtbm93cmFwJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRhYmxlOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RhYmxlJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRoZWFkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoZWFkJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRoOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RoJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRib2R5OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Rib2R5JykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRyOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHVsOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGxpOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG59O1xyXG5cclxuZ2xvYmFsLmFqYXggPSB7XHJcblx0XHRcclxuXHRmZXRjaDogZnVuY3Rpb24oY29udGFpbmVyKSB7XHJcblx0XHRcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFxyXG5cdFx0JChjb250YWluZXIpLmZpbmQoJ2FbZGF0YS10b2dnbGUqPVwiYWpheFwiXSwgYnV0dG9uW2RhdGEtdG9nZ2xlKj1cImFqYXhcIl0nKS5ub3QoJ1t0eXBlPVwic3VibWl0XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLnBhcmVudCgpLmhhcygnLmFjdGl2ZScpKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IHVybCA9ICQodGhpcykuZGF0YSgndXJsJyk7XHJcblx0XHRcdFx0bGV0IHRhcmdldCA9ICQodGhpcykuZGF0YSgndGFyZ2V0JykgfHwgdGhpcztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCwge2Zyb206IHRoaXN9KTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdhW2RhdGEtdG9nZ2xlKj1cImFqYXhcIl0sIGJ1dHRvbltkYXRhLXRvZ2dsZSo9XCJhamF4XCJdJykuZmlsdGVyKCdbdHlwZT1cInN1Ym1pdFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoKCRmb3JtID0gJCgnIycgKyAkKHRoaXMpLmF0dHIoJ2Zvcm0nKSkpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0JGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IHVybCA9ICQodGhpcykuZGF0YSgndXJsJyk7XHJcblx0XHRcdFx0bGV0IHRhcmdldCA9ICQodGhpcykuZGF0YSgndGFyZ2V0JykgfHwgdGhpcztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5leGlzdCgpKSB7XHJcblx0XHRcdFx0XHR2YXIgbWV0aG9kID0gJ1BPU1QnO1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm0uZ2V0KDApKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dmFyIG1ldGhvZCA9ICRmb3JtLmF0dHIoJ21ldGhvZCcpIHx8ICdHRVQnO1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSAkZm9ybS5zZXJpYWxpemVBcnJheSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCwge21ldGhvZDogbWV0aG9kLCBmcm9tOiB0aGlzLCBkYXRhOiBkYXRhfSk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdCQodGhpcykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKGNvbnRhaW5lcikuZmluZCgnZm9ybVtkYXRhLXRvZ2dsZSo9XCJhamF4XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdCQodGhpcykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCAkKHRoaXMpLnBhcmVudCgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykuZXhpc3QoKSkge1xyXG5cdFx0XHRcdFx0dmFyIG1ldGhvZCA9ICdQT1NUJztcclxuXHRcdFx0XHRcdHZhciBkYXRhID0gbmV3IEZvcm1EYXRhKCQodGhpcykuZ2V0KDApKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dmFyIG1ldGhvZCA9ICQodGhpcykuYXR0cignbWV0aG9kJykgfHwgJ0dFVCc7XHJcblx0XHRcdFx0XHR2YXIgZGF0YSA9ICQodGhpcykuc2VyaWFsaXplQXJyYXkoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhhdC5zZXQodGFyZ2V0LCB1cmwsIHttZXRob2Q6IG1ldGhvZCwgZnJvbTogdGhpcywgZGF0YTogZGF0YX0pO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnRyaWdnZXIoJ3N1Ym1pdCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdkaXZbZGF0YS10b2dnbGUqPVwiYWpheFwiXScpLmVhY2goZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCB0aGlzO1xyXG5cdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0XHJcblx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsLCB7ZnJvbTogdGhpc30pO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHR9LFxyXG5cdFx0XHJcblx0c2V0OiBmdW5jdGlvbiAodGFyZ2V0LCB1cmwsIG9wdGlvbnMgPSB7fSkge1xyXG5cdFx0XHJcblx0XHRpZiAodGFyZ2V0ICYmIHVybCkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKG9wdGlvbnMubW9kYWwgPT09IHRydWUgfHwgKG9wdGlvbnMuZnJvbSAmJiAkKG9wdGlvbnMuZnJvbSkuaXMoJ1tkYXRhLXRvZ2dsZSo9XCJtb2RhbFwiXScpKSkge1xyXG5cdFx0XHRcdGlmICgkKHRhcmdldCkuaXMoJy5tb2RhbCcpKSB7XHJcblx0XHRcdFx0XHQkKHRhcmdldCkubW9kYWwoJ3Nob3cnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0JCh0YXJnZXQpLnBhcmVudHMoJy5tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgbWV0aG9kID0gb3B0aW9ucy5tZXRob2QgfHwgJ0dFVCc7XHJcblx0XHRcdGxldCBkYXRhID0gb3B0aW9ucy5kYXRhIHx8IFtdO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHQkLmFqYXgoe1xyXG5cdFx0XHRcdHVybCA6IHVybCxcclxuXHRcdFx0XHR0eXBlOiBtZXRob2QsXHJcblx0XHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0XHRjb250ZW50VHlwZTogKGRhdGEuY29uc3RydWN0b3IgPT09IEZvcm1EYXRhKT9mYWxzZTonYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04JyxcclxuXHRcdFx0XHRwcm9jZXNzRGF0YTogKGRhdGEuY29uc3RydWN0b3IgIT09IEZvcm1EYXRhKSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRiZWZvcmVTZW5kOiBmdW5jdGlvbihqcVhIUiwgc2V0dGluZ3MpIHtcclxuXHRcdFx0XHRcdGpxWEhSLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcblx0XHRcdFx0XHRqcVhIUi5mcm9tID0gJChvcHRpb25zLmZyb20pO1xyXG5cdFx0XHRcdFx0JCh0YXJnZXQpLnRyaWdnZXIoJ2FqYXguYmVmb3JlU2VuZCcsIFtqcVhIUiwgc2V0dGluZ3NdKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcclxuXHRcdFx0XHRcdGpxWEhSLmZyb20gPSAkKG9wdGlvbnMuZnJvbSk7XHJcblx0XHRcdFx0XHQkKHRhcmdldCkudHJpZ2dlcignYWpheC5zdWNjZXNzJywgW3Jlc3VsdCwgdGV4dFN0YXR1cywganFYSFJdKTtcclxuXHRcdFx0XHRcdCQodGFyZ2V0KS50cmlnZ2VyKCdhamF4LmNvbXBsZXRlZCcsIFtyZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSXSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcblx0XHRcdFx0XHRqcVhIUi5mcm9tID0gJChvcHRpb25zLmZyb20pO1xyXG5cdFx0XHRcdFx0JCh0YXJnZXQpLnRyaWdnZXIoJ2FqYXguZXJyb3InLCBbanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duXSk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9LFxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFRyYW5zbGF0b3JcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHRsZXQgbG9jYWxlID0gJCgnaHRtbCcpLmF0dHIoJ2xhbmcnKTtcclxuXHRcclxuXHQkLmkxOG4oKS5sb2FkKHtcclxuXHRcdGxvY2FsZTogcmVxdWlyZSgnLi9sb2NhbGVzLycgKyBsb2NhbGUgKyAnLmpzb24nKVxyXG5cdH0pO1xyXG5cdFxyXG5cdCQuaTE4bih7XHJcblx0XHRsb2NhbGU6ICdsb2NhbGUnLFxyXG5cdH0pO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gR2xvYmFsIGljb25zXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHRnbG9iYWwuaWNvbiA9IHtcclxuXHRcdGFycm93VXA6XHJcblx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktYXJyb3ctYmFyLXVwXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuMzU0IDUuODU0YS41LjUgMCAwMDAtLjcwOGwtMy0zYS41LjUgMCAwMC0uNzA4IDBsLTMgM2EuNS41IDAgMTAuNzA4LjcwOEw4IDMuMjA3bDIuNjQ2IDIuNjQ3YS41LjUgMCAwMC43MDggMHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04IDEwYS41LjUgMCAwMC41LS41VjNhLjUuNSAwIDAwLTEgMHY2LjVhLjUuNSAwIDAwLjUuNXptLTQuOCAxLjZjMC0uMjIuMTgtLjQuNC0uNGg4LjhhLjQuNCAwIDAxMCAuOEgzLjZhLjQuNCAwIDAxLS40LS40elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHRcclxuXHRcdGFycm93RG93bjpcclxuXHRcdFx0XHQnPHN2ZyBjbGFzcz1cImJpIGJpLWFycm93LWJhci1kb3duXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0ICBcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjM1NCAxMC4xNDZhLjUuNSAwIDAxMCAuNzA4bC0zIDNhLjUuNSAwIDAxLS43MDggMGwtMy0zYS41LjUgMCAwMS43MDgtLjcwOEw4IDEyLjc5M2wyLjY0Ni0yLjY0N2EuNS41IDAgMDEuNzA4IDB6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0ICBcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggNmEuNS41IDAgMDEuNS41VjEzYS41LjUgMCAwMS0xIDBWNi41QS41LjUgMCAwMTggNnpNMiAzLjVhLjUuNSAwIDAxLjUtLjVoMTFhLjUuNSAwIDAxMCAxaC0xMWEuNS41IDAgMDEtLjUtLjV6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0XHQnPC9zdmc+JyxcclxuXHRcdFxyXG5cdFx0ZnVubmVsOlxyXG5cdFx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktZnVubmVsXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xLjUgMS41QS41LjUgMCAwMTIgMWgxMmEuNS41IDAgMDEuNS41djJhLjUuNSAwIDAxLS4xMjguMzM0TDEwIDguNjkyVjEzLjVhLjUuNSAwIDAxLS4zNDIuNDc0bC0zIDFBLjUuNSAwIDAxNiAxNC41VjguNjkyTDEuNjI4IDMuODM0QS41LjUgMCAwMTEuNSAzLjV2LTJ6bTEgLjV2MS4zMDhsNC4zNzIgNC44NThBLjUuNSAwIDAxNyA4LjV2NS4zMDZsMi0uNjY2VjguNWEuNS41IDAgMDEuMTI4LS4zMzRMMTMuNSAzLjMwOFYyaC0xMXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHRcdFxyXG5cdFx0ZnVubmVsRmlsbDpcclxuXHRcdFx0XHQnPHN2ZyBjbGFzcz1cImJpIGJpLWZ1bm5lbC1maWxsXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHRcdCc8cGF0aCBkPVwiTTIgMy41di0yaDEydjJsLTQuNSA1djVsLTMgMXYtNkwyIDMuNXpcIi8+JyArXHJcblx0XHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMS41IDEuNUEuNS41IDAgMDEyIDFoMTJhLjUuNSAwIDAxLjUuNXYyYS41LjUgMCAwMS0uMTI4LjMzNEwxMCA4LjY5MlYxMy41YS41LjUgMCAwMS0uMzQyLjQ3NGwtMyAxQS41LjUgMCAwMTYgMTQuNVY4LjY5MkwxLjYyOCAzLjgzNEEuNS41IDAgMDExLjUgMy41di0yem0xIC41djEuMzA4bDQuMzcyIDQuODU4QS41LjUgMCAwMTcgOC41djUuMzA2bDItLjY2NlY4LjVhLjUuNSAwIDAxLjEyOC0uMzM0TDEzLjUgMy4zMDhWMmgtMTF6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0XHQnPC9zdmc+JyxcclxuXHRcdFxyXG5cdFx0c3VjY2VzczpcclxuXHRcdFx0XHQnPHN2ZyB3aWR0aD1cIjEuNWVtXCIgaGVpZ2h0PVwiMS41ZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgY2xhc3M9XCJiaSBiaS1jaGVjay1zcXVhcmUtZmlsbFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXHJcblx0XHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMiAwYTIgMiAwIDAgMC0yIDJ2MTJhMiAyIDAgMCAwIDIgMmgxMmEyIDIgMCAwIDAgMi0yVjJhMiAyIDAgMCAwLTItMkgyem0xMC4wMyA0Ljk3YS43NS43NSAwIDAgMC0xLjA4LjAyMkw3LjQ3NyA5LjQxNyA1LjM4NCA3LjMyM2EuNzUuNzUgMCAwIDAtMS4wNiAxLjA2TDYuOTcgMTEuMDNhLjc1Ljc1IDAgMCAwIDEuMDc5LS4wMmwzLjk5Mi00Ljk5YS43NS43NSAwIDAgMC0uMDEtMS4wNXpcIi8+JyArXHJcblx0XHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcclxuXHRcdHdhcm5pbmc6XHJcblx0XHRcdFx0Jzxzdmcgd2lkdGg9XCIxLjVlbVwiIGhlaWdodD1cIjEuNWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzPVwiYmkgYmktaW5mby1zcXVhcmUtZmlsbFwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXHJcblx0XHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMCAyYTIgMiAwIDAgMSAyLTJoMTJhMiAyIDAgMCAxIDIgMnYxMmEyIDIgMCAwIDEtMiAySDJhMiAyIDAgMCAxLTItMlYyem04LjkzIDQuNTg4bC0yLjI5LjI4Ny0uMDgyLjM4LjQ1LjA4M2MuMjk0LjA3LjM1Mi4xNzYuMjg4LjQ2OWwtLjczOCAzLjQ2OGMtLjE5NC44OTcuMTA1IDEuMzE5LjgwOCAxLjMxOS41NDUgMCAxLjE3OC0uMjUyIDEuNDY1LS41OThsLjA4OC0uNDE2Yy0uMi4xNzYtLjQ5Mi4yNDYtLjY4Ni4yNDYtLjI3NSAwLS4zNzUtLjE5My0uMzA0LS41MzNMOC45MyA2LjU4OHpNOCA1LjVhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAyelwiLz4nICtcclxuXHRcdFx0XHQnPC9zdmc+JyxcclxuXHRcdFxyXG5cdFx0ZGFuZ2VyOlxyXG5cdFx0XHRcdCc8c3ZnIHdpZHRoPVwiMS41ZW1cIiBoZWlnaHQ9XCIxLjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBjbGFzcz1cImJpIGJpLWV4Y2xhbWF0aW9uLXNxdWFyZS1maWxsXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yIDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0ySDJ6bTYgNGEuOTA1LjkwNSAwIDAgMC0uOS45OTVsLjM1IDMuNTA3YS41NTIuNTUyIDAgMCAwIDEuMSAwbC4zNS0zLjUwN0EuOTA1LjkwNSAwIDAgMCA4IDR6bS4wMDIgNmExIDEgMCAxIDAgMCAyIDEgMSAwIDAgMCAwLTJ6XCIvPicgK1xyXG5cdFx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0XHRsb2FkaW5nOlxyXG5cdFx0XHQnPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIG10LTRcIj4nICtcclxuXHRcdFx0XHQnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPicgK1xyXG5cdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwic3Itb25seVwiPicgKyAkLmkxOG4oJ2xvYWRpbmcnKSArICc8L3NwYW4+JyArXHJcblx0XHRcdFx0JzwvZGl2PicgK1xyXG5cdFx0XHQnPC9kaXY+JyxcclxuXHRcdFxyXG5cdFx0Y2xvc2U6XHJcblx0XHQgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwibWwtMiBtYi0xIGNsb3NlIG1sLWF1dG9cIiBkYXRhLWRpc21pc3M9XCJ0b2FzdFwiIGFyaWEtbGFiZWw9JyArICQuaTE4bignY2xvc2UnKSArICc+JyArXHJcblx0XHQgICAgXHQnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj4nICtcclxuXHRcdCAgICAnPC9idXR0b24+JyxcclxuXHRcdFxyXG5cdH07XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBEZWZhdWx0cyBwYXJhbWV0ZXJzIGZvciBkYXRlcGlja2VyXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMuZm9ybWF0ID0gXCJkZC1tbS15eXl5XCI7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLndlZWtTdGFydCA9IDE7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLm1heFZpZXdNb2RlID0gMztcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMubGFuZ3VhZ2UgPSBsb2NhbGUucmVwbGFjZSgvXy8sICctJyk7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLm11bHRpZGF0ZSA9IGZhbHNlO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5kYXlzT2ZXZWVrRGlzYWJsZWQgPSBcIjAsNlwiO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5hdXRvY2xvc2UgPSB0cnVlO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5jYWxlbmRhcldlZWtzID0gdHJ1ZTtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMuY2xlYXJCdG4gPSB0cnVlO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy50b2RheUJ0biA9IHRydWU7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLnRvZGF5SGlnaGxpZ2h0ID0gdHJ1ZTtcclxuICAgIFxyXG5cdFxyXG5cdFxyXG4gICAgJChkb2N1bWVudCkub24oJ2FqYXguYmVmb3JlU2VuZCcsIGZ1bmN0aW9uKGUsIGpxWEhSLCBzZXR0aW5ncykge1xyXG4gICAgXHQkKGUudGFyZ2V0KVxyXG5cdFx0XHQuc2hvdygpXHJcblx0XHRcdC5lbXB0eSgpXHJcblx0XHRcdC5hcHBlbmQoZ2xvYmFsLmljb24ubG9hZGluZylcclxuXHRcdDtcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS5vbignYWpheC5zdWNjZXNzJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG4gICAgXHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJy5zcGlubmVyLWJvcmRlcicpLnBhcmVudCgpLnJlbW92ZSgpO1xyXG5cdFx0aWYgKHJlc3VsdCkge1xyXG5cdFx0XHQkKGUudGFyZ2V0KS5odG1sKCQoZS50YXJnZXQpLmh0bWwoKSArIHJlc3VsdCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBwb3BvdmVyXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcblx0XHQkKGUudGFyZ2V0KS5maW5kKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpO1xyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gQWpheFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdCAgICBnbG9iYWwuYWpheC5mZXRjaChlLnRhcmdldCk7XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBNb2RhbCAmIENvbGxhcHNlXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCAgICBcclxuXHRcdCQoZS50YXJnZXQpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1baHJlZj1cIiMnICsgJCh0aGlzKS5hdHRyKCdpZCcpICsgJ1wiXScpXHJcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG5cdFx0XHRcdC5ibHVyKClcclxuXHRcdFx0O1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJykuYmx1cigpO1xyXG5cdFx0XHQkKGUudGFyZ2V0KS5maW5kKCcubW9kYWwtY29udGVudCcpLnJlbW92ZUF0dHIoJ3N0eWxlJyk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JChlLnRhcmdldCkuZmluZCgnYnV0dG9uW2RhdGEtZGlzbWlzc10nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnI21vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKGUudGFyZ2V0KS5maW5kKCcubW9kYWwtaGVhZGVyJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5jbG9zZXN0KCcubW9kYWwtZGlhbG9nJykuZHJhZ3Moe2hhbmRsZTonLm1vZGFsLWhlYWRlcid9KTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gQm9vdHN0cmFwIGRhdGVwaWNrZXJcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJy5kYXRlcGlja2VyJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5kYXRlcGlja2VyKHsnZm9ybWF0JzogJC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLmZvcm1hdH0pO1xyXG5cdFx0fSk7XHJcblxyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gRm9ybSBtdWx0aXBsZVxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdFx0JChlLnRhcmdldCkuZmluZChcIltuYW1lJD0nX211bHRpcGxlJ11cIikuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBpZDtcclxuXHRcdFx0aWYgKGlkID0gJCh0aGlzKS5wcm9wKCduYW1lJykubWF0Y2goLyhcXFMrKV9tdWx0aXBsZSQveSkpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZGVmaW5lZCA9ICgkKHRoaXMpLnZhbCgpICE9IDApO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQkKFwiW2lkXj0nXCIgKyBpZFsxXSArIFwiJ11cIikubm90KFwiW2lkJD0nbXVsdGlwbGVfMCddXCIpLm5vdChcIltpZCQ9J211bHRpcGxlXzEnXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZGF0ZXBpY2tlcicpKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5kYXRlcGlja2VyKCdzZXREYXRlJywgbmV3IERhdGUoKSk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ3JhZGlvJykge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAnY2hlY2tib3gnKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAndGV4dCcgfHwgJCh0aGlzKS5pcygnc2VsZWN0JykgfHwgJCh0aGlzKS5pcygndGV4dGFyZWEnKSkge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykudmFsKG51bGwpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJkaXNhYmxlZFwiLCBkZWZpbmVkKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKFwicmVxdWlyZWRcIiwgJCh0aGlzKS5kYXRhKCdyZXF1aXJlZCcpICYmIGRlZmluZWQgPT09IGZhbHNlKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQkKCcjJyArIGlkWzFdICsgJ19tdWx0aXBsZScpLnZhbCgkKHRoaXMpLnZhbCgpKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJ2Zvcm0nKS5maW5kKCdkaXYsIGlucHV0LCBzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLmRhdGEoJ211bHRpcGxlJykpIHtcclxuXHRcdFx0XHQkKFwiW25hbWU9J1wiICsgJCh0aGlzKS5wcm9wKCdpZCcpICsgXCJfbXVsdGlwbGUnXVwiKS5maWx0ZXIoJ1t2YWx1ZT0xXScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JChcIltuYW1lPSdcIiArICQodGhpcykucHJvcCgnaWQnKSArIFwiX211bHRpcGxlJ11cIikuZmlsdGVyKCdbdmFsdWU9MF0nKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSlcclxuXHRcdFxyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gQnNDdXN0b21GaWxlSW5wdXRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHRcdGJzQ3VzdG9tRmlsZUlucHV0LmluaXQoKTtcclxuXHRcdFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdhamF4LmVycm9yJywgZnVuY3Rpb24oZSwganFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XHJcbiAgICBcdFxyXG5cdFx0aWYgKChtID0gLzwhLS1cXHMoLispXFxzLS0+Ly5leGVjKGpxWEhSLnJlc3BvbnNlVGV4dCkpICE9PSBudWxsKSB7XHJcblx0XHRcdHRpdGxlID0gbVsxXS5odG1sRGVjb2RlKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aXRsZSA9ICQuaTE4bignZXJyb3InKTtcclxuXHRcdH1cclxuXHRcdFxyXG4gICAgXHRsZXQgZGl2ID0gJChlLnRhcmdldCkuYXBwZW5kKGdsb2JhbC5jcmVhdGUuZGl2KCkpLmNoaWxkcmVuKCkubGFzdCgpXHJcbiAgICBcdFx0LmFkZENsYXNzKCdhbGVydCBhbGVydC1kYW5nZXInKVxyXG4gICAgXHQ7XHJcbiAgICBcdFxyXG4gICAgXHRkaXYuYXBwZW5kKGdsb2JhbC5jcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG4gICAgXHRcdC5hZGRDbGFzcygnYWxlcnQtaGVhZGluZyBmb250LXdlaWdodC1ib2xkJylcclxuICAgIFx0XHQudGV4dCgkLmkxOG4oJ2Vycm9yJykgKyAnICcgKyBqcVhIUi5zdGF0dXMgKyAnIDogJyArIGpxWEhSLnN0YXR1c1RleHQpXHJcbiAgICBcdDtcclxuXHRcdFxyXG4gICAgXHRkaXYuYXBwZW5kKGdsb2JhbC5jcmVhdGUucCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LnRleHQodGl0bGUpXHJcblx0XHQ7XHJcbiAgICBcdFxyXG4gICAgXHRkaXYuYXBwZW5kKGdsb2JhbC5jcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuLXByaW1hcnkgbXQtMicpXHJcblx0XHRcdC50ZXh0KCQuaTE4bigncmVsb2FkJykpXHJcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRnbG9iYWwuYWpheC5zZXQoZS50YXJnZXQsIGpxWEhSLnNldHRpbmdzLnVybCwge2RhdGE6IGpxWEhSLnNldHRpbmdzLmRhdGF9KVxyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG4gICAgXHRcclxuICAgIFx0ZGl2LmFwcGVuZChnbG9iYWwuY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5IG10LTInKVxyXG5cdFx0XHQudGV4dCgkLmkxOG4oJ2RldGFpbHMnKSlcclxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGxldCByZXN1bHRXaW5kb3cgPSB3aW5kb3cub3BlbignJywgJ19ibGFuaycsICd3aWR0aD04MDAsaGVpZ2h0PTYwMCxzY3JvbGxiYXJzPXllcyxyZXNpemFibGU9eWVzJyk7XHJcblx0XHRcdFx0aWYgKChtID0gLzxoZWFkPiguKz8pPFxcL2hlYWQ+L3MuZXhlYyhqcVhIUi5yZXNwb25zZVRleHQpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0JChyZXN1bHRXaW5kb3cuZG9jdW1lbnQuaGVhZCkuYXBwZW5kKG1bMV0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRpZiAoKG0gPSAvPGJvZHk+KC4rPyk8XFwvYm9keT4vcy5leGVjKGpxWEhSLnJlc3BvbnNlVGV4dCkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHQkKHJlc3VsdFdpbmRvdy5kb2N1bWVudC5ib2R5KS5hcHBlbmQobVsxXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG4gICAgXHRcclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAkKGRvY3VtZW50KS50cmlnZ2VyKCdhamF4LnN1Y2Nlc3MnKTtcclxuICAgIFxyXG59KTsiLCJ2YXIgbWFwID0ge1xuXHRcIi4vZW5fR0IuanNvblwiOiBcIi4vYXNzZXRzL2pzL2xvY2FsZXMvZW5fR0IuanNvblwiLFxuXHRcIi4vZnJfRlIuanNvblwiOiBcIi4vYXNzZXRzL2pzL2xvY2FsZXMvZnJfRlIuanNvblwiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL2Fzc2V0cy9qcy9sb2NhbGVzIHN5bmMgcmVjdXJzaXZlIF5cXFxcLlxcXFwvLipcXFxcLmpzb24kXCI7Il0sInNvdXJjZVJvb3QiOiIifQ==