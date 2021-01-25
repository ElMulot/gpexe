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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2xvY2FsZXMgc3luYyBeXFwuXFwvLipcXC5qc29uJCJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsImJzQ3VzdG9tRmlsZUlucHV0IiwiU3RyaW5nIiwicHJvdG90eXBlIiwidG9EYXRlIiwicyIsImV4ZWMiLCJzcGxpdCIsImRheSIsIm1vbnRoIiwieWVhciIsImQiLCJEYXRlIiwiaXNOYU4iLCJodG1sRGVjb2RlIiwiaHRtbCIsInRleHQiLCJmb3JtYXQiLCJnZXREYXRlIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsImpvaW4iLCJhZGREYXlzIiwiZGF5cyIsImRhdGUiLCJ2YWx1ZU9mIiwic2V0RGF0ZSIsIkFycmF5IiwiaGFzIiwidmFsdWUiLCJzb21lIiwidiIsImZuIiwiZXhpc3QiLCJsZW5ndGgiLCJkcmFncyIsIm9wdCIsImV4dGVuZCIsImhhbmRsZSIsImN1cnNvciIsIiRlbCIsImZpbmQiLCJjc3MiLCJvbiIsImUiLCIkZHJhZyIsImFkZENsYXNzIiwicGFyZW50Iiwiel9pZHgiLCJkcmdfaCIsIm91dGVySGVpZ2h0IiwiZHJnX3ciLCJvdXRlcldpZHRoIiwicG9zX3kiLCJvZmZzZXQiLCJ0b3AiLCJwYWdlWSIsInBvc194IiwibGVmdCIsInBhZ2VYIiwicGFyZW50cyIsInJlbW92ZUNsYXNzIiwicHJldmVudERlZmF1bHQiLCJnbG9iYWwiLCJyZW1Ub1B4IiwiaSIsInBhcnNlRmxvYXQiLCJnZXRDb21wdXRlZFN0eWxlIiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJmb250U2l6ZSIsInB4VG9SZW0iLCJjcmVhdGUiLCJkaXYiLCJjcmVhdGVFbGVtZW50IiwiYSIsInNwYW4iLCJmaWVsZHNldCIsImlucHV0IiwiYXR0ciIsImNoZWNrYm94Iiwic2VsZWN0Iiwib3B0aW9uIiwibGFiZWwiLCJidXR0b24iLCJtZW51QnV0dG9uIiwic21hbGxCdXR0b24iLCJ0aGVhZCIsInRoIiwidGJvZHkiLCJ0ciIsInRkIiwidWwiLCJsaSIsImFqYXgiLCJmZXRjaCIsImNvbnRhaW5lciIsInRoYXQiLCJub3QiLCJlYWNoIiwidXJsIiwiZGF0YSIsInRhcmdldCIsInNldCIsImZyb20iLCJoYXNDbGFzcyIsInRyaWdnZXIiLCJmaWx0ZXIiLCIkZm9ybSIsIm1ldGhvZCIsIkZvcm1EYXRhIiwiZ2V0Iiwic2VyaWFsaXplQXJyYXkiLCJvcHRpb25zIiwibW9kYWwiLCJpcyIsInR5cGUiLCJjb250ZW50VHlwZSIsImNvbnN0cnVjdG9yIiwicHJvY2Vzc0RhdGEiLCJiZWZvcmVTZW5kIiwianFYSFIiLCJzZXR0aW5ncyIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJ0ZXh0U3RhdHVzIiwiZXJyb3IiLCJlcnJvclRocm93biIsInJlYWR5IiwibG9jYWxlIiwiaTE4biIsImxvYWQiLCJpY29uIiwiYXJyb3dVcCIsImFycm93RG93biIsImZ1bm5lbCIsImZ1bm5lbEZpbGwiLCJ3YXJuaW5nIiwiZGFuZ2VyIiwibG9hZGluZyIsImNsb3NlIiwiZGF0ZXBpY2tlciIsImRlZmF1bHRzIiwid2Vla1N0YXJ0IiwibWF4Vmlld01vZGUiLCJsYW5ndWFnZSIsInJlcGxhY2UiLCJtdWx0aWRhdGUiLCJkYXlzT2ZXZWVrRGlzYWJsZWQiLCJhdXRvY2xvc2UiLCJjYWxlbmRhcldlZWtzIiwiY2xlYXJCdG4iLCJ0b2RheUJ0biIsInRvZGF5SGlnaGxpZ2h0Iiwic2hvdyIsImVtcHR5IiwiYXBwZW5kIiwicmVtb3ZlIiwicG9wb3ZlciIsImJsdXIiLCJyZW1vdmVBdHRyIiwiY2xvc2VzdCIsImlkIiwicHJvcCIsIm1hdGNoIiwiZGVmaW5lZCIsInZhbCIsImluaXQiLCJtIiwicmVzcG9uc2VUZXh0IiwidGl0bGUiLCJjaGlsZHJlbiIsImxhc3QiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwicCIsInJlc3VsdFdpbmRv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OlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcC1kYXRlcGlja2VyJyk7XHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcC1kYXRlcGlja2VyL2Rpc3QvbG9jYWxlcy9ib290c3RyYXAtZGF0ZXBpY2tlci5mci5taW4uanMnKTtcclxuY29uc3QgYnNDdXN0b21GaWxlSW5wdXQgPSByZXF1aXJlKCdicy1jdXN0b20tZmlsZS1pbnB1dCcpO1xyXG5yZXF1aXJlICgnQHdpa2ltZWRpYS9qcXVlcnkuaTE4bi9zcmMvanF1ZXJ5LmkxOG4uanMnKTtcclxucmVxdWlyZSAoJ0B3aWtpbWVkaWEvanF1ZXJ5LmkxOG4vc3JjL2pxdWVyeS5pMThuLm1lc3NhZ2VzdG9yZS5qcycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvZ2xvYmFsLnNjc3MnKTtcclxuXHJcblN0cmluZy5wcm90b3R5cGUudG9EYXRlID0gZnVuY3Rpb24gKCkge1xyXG5cdGlmIChzID0gL1xcZHsyfS1cXGR7Mn0tXFxkezR9L2cuZXhlYyh0aGlzKSkge1xyXG5cdFx0Y29uc3QgW2RheSwgbW9udGgsIHllYXJdID0gc1swXS5zcGxpdChcIi1cIik7XHJcblx0XHRkID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xyXG5cdFx0cmV0dXJuIChkIGluc3RhbmNlb2YgRGF0ZSAmJiBpc05hTihkKSA9PT0gZmFsc2UpP2Q6bnVsbDtcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn07XHJcblxyXG5TdHJpbmcucHJvdG90eXBlLmh0bWxEZWNvZGUgPSBmdW5jdGlvbiAoKSB7XHJcblx0cmV0dXJuICQoXCI8ZGl2Lz5cIikuaHRtbCh0aGlzKS50ZXh0KCk7XHJcbn1cclxuXHJcbkRhdGUucHJvdG90eXBlLmZvcm1hdCA9IGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdGRheSA9IHRoaXMuZ2V0RGF0ZSgpO1xyXG5cdG1vbnRoID0gdGhpcy5nZXRNb250aCgpICsgMTtcclxuXHR5ZWFyID0gdGhpcy5nZXRGdWxsWWVhcigpO1xyXG5cdFxyXG5cdGlmIChtb250aCA8IDEwKSBtb250aCA9ICcwJyArIG1vbnRoO1xyXG5cdGlmIChkYXkgPCAxMCkgZGF5ID0gJzAnICsgZGF5O1xyXG5cdFxyXG5cdHJldHVybiBbZGF5LCBtb250aCwgeWVhcl0uam9pbignLScpO1xyXG5cdFxyXG59XHJcblxyXG5EYXRlLnByb3RvdHlwZS5hZGREYXlzID0gZnVuY3Rpb24oZGF5cykge1xyXG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSk7XHJcbiAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBkYXlzKTtcclxuICAgIHJldHVybiBkYXRlO1xyXG59XHJcblxyXG5BcnJheS5wcm90b3R5cGUuaGFzID0gZnVuY3Rpb24odmFsdWUpIHtcclxuXHRyZXR1cm4gdGhpcy5zb21lKHYgPT4gU3RyaW5nKHYpID09PSBTdHJpbmcodmFsdWUpKVxyXG59XHJcblxyXG4kLmZuLmV4aXN0ID0gZnVuY3Rpb24gKCkge1xyXG5cdHJldHVybiB0aGlzLmxlbmd0aCAhPT0gMCAmJiB0aGlzO1xyXG59XHJcblxyXG4kLmZuLmRyYWdzID0gZnVuY3Rpb24ob3B0KSB7XHJcblxyXG4gICAgb3B0ID0gJC5leHRlbmQoe2hhbmRsZTpcIlwiLGN1cnNvcjpcIm1vdmVcIn0sIG9wdCk7XHJcblxyXG4gICAgaWYob3B0LmhhbmRsZSA9PT0gXCJcIikge1xyXG4gICAgICAgIHZhciAkZWwgPSB0aGlzO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICB2YXIgJGVsID0gdGhpcy5maW5kKG9wdC5oYW5kbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAkZWwuY3NzKCdjdXJzb3InLCBvcHQuY3Vyc29yKS5vbihcIm1vdXNlZG93blwiLCBmdW5jdGlvbihlKSB7XHJcbiAgICAgICAgaWYob3B0LmhhbmRsZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICB2YXIgJGRyYWcgPSAkKHRoaXMpLmFkZENsYXNzKCdkcmFnZ2FibGUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgJGRyYWcgPSAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtaGFuZGxlJykucGFyZW50KCkuYWRkQ2xhc3MoJ2RyYWdnYWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgel9pZHggPSAkZHJhZy5jc3MoJ3otaW5kZXgnKSxcclxuICAgICAgICAgICAgZHJnX2ggPSAkZHJhZy5vdXRlckhlaWdodCgpLFxyXG4gICAgICAgICAgICBkcmdfdyA9ICRkcmFnLm91dGVyV2lkdGgoKSxcclxuICAgICAgICAgICAgcG9zX3kgPSAkZHJhZy5vZmZzZXQoKS50b3AgKyBkcmdfaCAtIGUucGFnZVksXHJcbiAgICAgICAgICAgIHBvc194ID0gJGRyYWcub2Zmc2V0KCkubGVmdCArIGRyZ193IC0gZS5wYWdlWDtcclxuICAgICAgICAkZHJhZy5jc3MoJ3otaW5kZXgnLCAxMDAwKS5wYXJlbnRzKCkub24oXCJtb3VzZW1vdmVcIiwgZnVuY3Rpb24oZSkge1xyXG4gICAgICAgICAgICAkKCcuZHJhZ2dhYmxlJykub2Zmc2V0KHtcclxuICAgICAgICAgICAgICAgIHRvcDplLnBhZ2VZICsgcG9zX3kgLSBkcmdfaCxcclxuICAgICAgICAgICAgICAgIGxlZnQ6ZS5wYWdlWCArIHBvc194IC0gZHJnX3dcclxuICAgICAgICAgICAgfSkub24oXCJtb3VzZXVwXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZHJhZ2dhYmxlJykuY3NzKCd6LWluZGV4Jywgel9pZHgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIGRpc2FibGUgc2VsZWN0aW9uXHJcbiAgICB9KS5vbihcIm1vdXNldXBcIiwgZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgaWYob3B0LmhhbmRsZSA9PT0gXCJcIikge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdkcmFnZ2FibGUnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUtaGFuZGxlJykucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ2RyYWdnYWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxufVxyXG5cclxuZ2xvYmFsLnJlbVRvUHggPSBmdW5jdGlvbihpKSB7XHJcblx0cmV0dXJuIGkgKiBwYXJzZUZsb2F0KGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5mb250U2l6ZSk7XHJcbn1cclxuXHJcbmdsb2JhbC5weFRvUmVtID0gZnVuY3Rpb24oaSkge1xyXG5cdHJldHVybiBpIC8gcGFyc2VGbG9hdChnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZm9udFNpemUpO1xyXG59XHJcblxyXG5nbG9iYWwuY3JlYXRlID0ge1xyXG5cdGRpdjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcclxuXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRhOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKSk7XHJcblx0XHRcdC8vLmFkZENsYXNzKCdidG4gYnRuLXNtIHRleHQtbm93cmFwJylcclxuXHR9LFxyXG5cdFxyXG5cdHNwYW46IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0ZmllbGRzZXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZmllbGRzZXQnKSlcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGlucHV0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ3RleHQnKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20nKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0Y2hlY2tib3g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWlucHV0JylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHNlbGVjdDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSlcclxuXHRcdFx0LmFkZENsYXNzKCdmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdG9wdGlvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSlcclxuXHRcdFx0LmF0dHIoJ3ZhbHVlJywgJycpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRsYWJlbDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWxhYmVsIHctMTAwIHRleHQtbm93cmFwJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LmFkZENsYXNzKCdidG4nKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0bWVudUJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXNtIGJ0bi1wcmltYXJ5IHRleHQtbm93cmFwIHJvdW5kZWQtMCcpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRzbWFsbEJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXNtIG14LTEgdGV4dC1ub3dyYXAnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dGhlYWQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGhlYWQnKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dGg6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGgnKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dGJvZHk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGJvZHknKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dHI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0bGk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcbn07XHJcblxyXG5nbG9iYWwuYWpheCA9IHtcclxuXHRcdFxyXG5cdGZldGNoOiBmdW5jdGlvbihjb250YWluZXIpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQkKGNvbnRhaW5lcikuZmluZCgnYVtkYXRhLXRvZ2dsZSo9XCJhamF4XCJdLCBidXR0b25bZGF0YS10b2dnbGUqPVwiYWpheFwiXScpLm5vdCgnW3R5cGU9XCJzdWJtaXRcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCQodGhpcykucGFyZW50KCkuaGFzKCcuYWN0aXZlJykpIHtcclxuXHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCB0aGlzO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsLCB7ZnJvbTogdGhpc30pO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JChjb250YWluZXIpLmZpbmQoJ2FbZGF0YS10b2dnbGUqPVwiYWpheFwiXSwgYnV0dG9uW2RhdGEtdG9nZ2xlKj1cImFqYXhcIl0nKS5maWx0ZXIoJ1t0eXBlPVwic3VibWl0XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgoJGZvcm0gPSAkKCcjJyArICQodGhpcykuYXR0cignZm9ybScpKSkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQkZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCB0aGlzO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICgkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmV4aXN0KCkpIHtcclxuXHRcdFx0XHRcdHZhciBtZXRob2QgPSAnUE9TVCc7XHJcblx0XHRcdFx0XHR2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybS5nZXQoMCkpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR2YXIgbWV0aG9kID0gJGZvcm0uYXR0cignbWV0aG9kJykgfHwgJ0dFVCc7XHJcblx0XHRcdFx0XHR2YXIgZGF0YSA9ICRmb3JtLnNlcmlhbGl6ZUFycmF5KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsLCB7bWV0aG9kOiBtZXRob2QsIGZyb206IHRoaXMsIGRhdGE6IGRhdGF9KTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdmb3JtW2RhdGEtdG9nZ2xlKj1cImFqYXhcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0JCh0aGlzKS5vbignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xyXG5cdFx0XHRcdGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpIHx8ICQodGhpcykucGFyZW50KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCQodGhpcykuZmluZCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5leGlzdCgpKSB7XHJcblx0XHRcdFx0XHR2YXIgbWV0aG9kID0gJ1BPU1QnO1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoJCh0aGlzKS5nZXQoMCkpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR2YXIgbWV0aG9kID0gJCh0aGlzKS5hdHRyKCdtZXRob2QnKSB8fCAnR0VUJztcclxuXHRcdFx0XHRcdHZhciBkYXRhID0gJCh0aGlzKS5zZXJpYWxpemVBcnJheSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCwge21ldGhvZDogbWV0aG9kLCBmcm9tOiB0aGlzLCBkYXRhOiBkYXRhfSk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdCQodGhpcykudHJpZ2dlcignc3VibWl0Jyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JChjb250YWluZXIpLmZpbmQoJ2RpdltkYXRhLXRvZ2dsZSo9XCJhamF4XCJdJykuZWFjaChmdW5jdGlvbihlKSB7XHJcblx0XHRcdGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpIHx8IHRoaXM7XHJcblx0XHRcdGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xyXG5cdFx0XHRcclxuXHRcdFx0dGhhdC5zZXQodGFyZ2V0LCB1cmwsIHtmcm9tOiB0aGlzfSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH0sXHJcblx0XHRcclxuXHRzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHVybCwgb3B0aW9ucyA9IHt9KSB7XHJcblx0XHRcclxuXHRcdGlmICh0YXJnZXQgJiYgdXJsKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAob3B0aW9ucy5tb2RhbCA9PT0gdHJ1ZSB8fCAob3B0aW9ucy5mcm9tICYmICQob3B0aW9ucy5mcm9tKS5pcygnW2RhdGEtdG9nZ2xlKj1cIm1vZGFsXCJdJykpKSB7XHJcblx0XHRcdFx0aWYgKCQodGFyZ2V0KS5pcygnLm1vZGFsJykpIHtcclxuXHRcdFx0XHRcdCQodGFyZ2V0KS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHQkKHRhcmdldCkucGFyZW50cygnLm1vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGxldCBtZXRob2QgPSBvcHRpb25zLm1ldGhvZCB8fCAnR0VUJztcclxuXHRcdFx0bGV0IGRhdGEgPSBvcHRpb25zLmRhdGEgfHwgW107XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0dXJsIDogdXJsLFxyXG5cdFx0XHRcdHR5cGU6IG1ldGhvZCxcclxuXHRcdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHRcdGNvbnRlbnRUeXBlOiAoZGF0YS5jb25zdHJ1Y3RvciA9PT0gRm9ybURhdGEpP2ZhbHNlOidhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnLFxyXG5cdFx0XHRcdHByb2Nlc3NEYXRhOiAoZGF0YS5jb25zdHJ1Y3RvciAhPT0gRm9ybURhdGEpLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGJlZm9yZVNlbmQ6IGZ1bmN0aW9uKGpxWEhSLCBzZXR0aW5ncykge1xyXG5cdFx0XHRcdFx0anFYSFIuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuXHRcdFx0XHRcdGpxWEhSLmZyb20gPSAkKG9wdGlvbnMuZnJvbSk7XHJcblx0XHRcdFx0XHQkKHRhcmdldCkudHJpZ2dlcignYWpheC5iZWZvcmVTZW5kJywgW2pxWEhSLCBzZXR0aW5nc10pO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHRcdFx0anFYSFIuZnJvbSA9ICQob3B0aW9ucy5mcm9tKTtcclxuXHRcdFx0XHRcdCQodGFyZ2V0KS50cmlnZ2VyKCdhamF4LnN1Y2Nlc3MnLCBbcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUl0pO1xyXG5cdFx0XHRcdFx0JCh0YXJnZXQpLnRyaWdnZXIoJ2FqYXguY29tcGxldGVkJywgW3Jlc3VsdCwgdGV4dFN0YXR1cywganFYSFJdKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbihqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuXHRcdFx0XHRcdGpxWEhSLmZyb20gPSAkKG9wdGlvbnMuZnJvbSk7XHJcblx0XHRcdFx0XHQkKHRhcmdldCkudHJpZ2dlcignYWpheC5lcnJvcicsIFtqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd25dKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sXHJcbn1cclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gVHJhbnNsYXRvclxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdGxldCBsb2NhbGUgPSAkKCdodG1sJykuYXR0cignbGFuZycpO1xyXG5cdFxyXG5cdCQuaTE4bigpLmxvYWQoe1xyXG5cdFx0bG9jYWxlOiByZXF1aXJlKCcuL2xvY2FsZXMvJyArIGxvY2FsZSArICcuanNvbicpXHJcblx0fSk7XHJcblx0XHJcblx0JC5pMThuKHtcclxuXHRcdGxvY2FsZTogJ2xvY2FsZScsXHJcblx0fSk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBHbG9iYWwgaWNvbnNcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdGdsb2JhbC5pY29uID0ge1xyXG5cdFx0YXJyb3dVcDpcclxuXHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1hcnJvdy1iYXItdXBcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS4zNTQgNS44NTRhLjUuNSAwIDAwMC0uNzA4bC0zLTNhLjUuNSAwIDAwLS43MDggMGwtMyAzYS41LjUgMCAxMC43MDguNzA4TDggMy4yMDdsMi42NDYgMi42NDdhLjUuNSAwIDAwLjcwOCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggMTBhLjUuNSAwIDAwLjUtLjVWM2EuNS41IDAgMDAtMSAwdjYuNWEuNS41IDAgMDAuNS41em0tNC44IDEuNmMwLS4yMi4xOC0uNC40LS40aDguOGEuNC40IDAgMDEwIC44SDMuNmEuNC40IDAgMDEtLjQtLjR6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcdFxyXG5cdFx0YXJyb3dEb3duOlxyXG5cdFx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktYXJyb3ctYmFyLWRvd25cIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuMzU0IDEwLjE0NmEuNS41IDAgMDEwIC43MDhsLTMgM2EuNS41IDAgMDEtLjcwOCAwbC0zLTNhLjUuNSAwIDAxLjcwOC0uNzA4TDggMTIuNzkzbDIuNjQ2LTIuNjQ3YS41LjUgMCAwMS43MDggMHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCA2YS41LjUgMCAwMS41LjVWMTNhLjUuNSAwIDAxLTEgMFY2LjVBLjUuNSAwIDAxOCA2ek0yIDMuNWEuNS41IDAgMDEuNS0uNWgxMWEuNS41IDAgMDEwIDFoLTExYS41LjUgMCAwMS0uNS0uNXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0XHRmdW5uZWw6XHJcblx0XHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1mdW5uZWxcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEuNSAxLjVBLjUuNSAwIDAxMiAxaDEyYS41LjUgMCAwMS41LjV2MmEuNS41IDAgMDEtLjEyOC4zMzRMMTAgOC42OTJWMTMuNWEuNS41IDAgMDEtLjM0Mi40NzRsLTMgMUEuNS41IDAgMDE2IDE0LjVWOC42OTJMMS42MjggMy44MzRBLjUuNSAwIDAxMS41IDMuNXYtMnptMSAuNXYxLjMwOGw0LjM3MiA0Ljg1OEEuNS41IDAgMDE3IDguNXY1LjMwNmwyLS42NjZWOC41YS41LjUgMCAwMS4xMjgtLjMzNEwxMy41IDMuMzA4VjJoLTExelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcdFx0XHJcblx0XHRmdW5uZWxGaWxsOlxyXG5cdFx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktZnVubmVsLWZpbGxcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdFx0JzxwYXRoIGQ9XCJNMiAzLjV2LTJoMTJ2MmwtNC41IDV2NWwtMyAxdi02TDIgMy41elwiLz4nICtcclxuXHRcdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xLjUgMS41QS41LjUgMCAwMTIgMWgxMmEuNS41IDAgMDEuNS41djJhLjUuNSAwIDAxLS4xMjguMzM0TDEwIDguNjkyVjEzLjVhLjUuNSAwIDAxLS4zNDIuNDc0bC0zIDFBLjUuNSAwIDAxNiAxNC41VjguNjkyTDEuNjI4IDMuODM0QS41LjUgMCAwMTEuNSAzLjV2LTJ6bTEgLjV2MS4zMDhsNC4zNzIgNC44NThBLjUuNSAwIDAxNyA4LjV2NS4zMDZsMi0uNjY2VjguNWEuNS41IDAgMDEuMTI4LS4zMzRMMTMuNSAzLjMwOFYyaC0xMXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0XHRzdWNjZXNzOlxyXG5cdFx0XHRcdCc8c3ZnIHdpZHRoPVwiMS41ZW1cIiBoZWlnaHQ9XCIxLjVlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBjbGFzcz1cImJpIGJpLWNoZWNrLXNxdWFyZS1maWxsXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0yIDBhMiAyIDAgMCAwLTIgMnYxMmEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWMmEyIDIgMCAwIDAtMi0ySDJ6bTEwLjAzIDQuOTdhLjc1Ljc1IDAgMCAwLTEuMDguMDIyTDcuNDc3IDkuNDE3IDUuMzg0IDcuMzIzYS43NS43NSAwIDAgMC0xLjA2IDEuMDZMNi45NyAxMS4wM2EuNzUuNzUgMCAwIDAgMS4wNzktLjAybDMuOTkyLTQuOTlhLjc1Ljc1IDAgMCAwLS4wMS0xLjA1elwiLz4nICtcclxuXHRcdFx0XHQnPC9zdmc+JyxcclxuXHRcdFxyXG5cdFx0d2FybmluZzpcclxuXHRcdFx0XHQnPHN2ZyB3aWR0aD1cIjEuNWVtXCIgaGVpZ2h0PVwiMS41ZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgY2xhc3M9XCJiaSBiaS1pbmZvLXNxdWFyZS1maWxsXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0wIDJhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjEyYTIgMiAwIDAgMS0yIDJIMmEyIDIgMCAwIDEtMi0yVjJ6bTguOTMgNC41ODhsLTIuMjkuMjg3LS4wODIuMzguNDUuMDgzYy4yOTQuMDcuMzUyLjE3Ni4yODguNDY5bC0uNzM4IDMuNDY4Yy0uMTk0Ljg5Ny4xMDUgMS4zMTkuODA4IDEuMzE5LjU0NSAwIDEuMTc4LS4yNTIgMS40NjUtLjU5OGwuMDg4LS40MTZjLS4yLjE3Ni0uNDkyLjI0Ni0uNjg2LjI0Ni0uMjc1IDAtLjM3NS0uMTkzLS4zMDQtLjUzM0w4LjkzIDYuNTg4ek04IDUuNWExIDEgMCAxIDAgMC0yIDEgMSAwIDAgMCAwIDJ6XCIvPicgK1xyXG5cdFx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0XHRkYW5nZXI6XHJcblx0XHRcdFx0Jzxzdmcgd2lkdGg9XCIxLjVlbVwiIGhlaWdodD1cIjEuNWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzPVwiYmkgYmktZXhjbGFtYXRpb24tc3F1YXJlLWZpbGxcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTIgMGEyIDIgMCAwIDAtMiAydjEyYTIgMiAwIDAgMCAyIDJoMTJhMiAyIDAgMCAwIDItMlYyYTIgMiAwIDAgMC0yLTJIMnptNiA0YS45MDUuOTA1IDAgMCAwLS45Ljk5NWwuMzUgMy41MDdhLjU1Mi41NTIgMCAwIDAgMS4xIDBsLjM1LTMuNTA3QS45MDUuOTA1IDAgMCAwIDggNHptLjAwMiA2YTEgMSAwIDEgMCAwIDIgMSAxIDAgMCAwIDAtMnpcIi8+JyArXHJcblx0XHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcclxuXHRcdGxvYWRpbmc6XHJcblx0XHRcdCc8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNFwiPicgK1xyXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+JyArXHJcblx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+JyArICQuaTE4bignbG9hZGluZycpICsgJzwvc3Bhbj4nICtcclxuXHRcdFx0XHQnPC9kaXY+JyArXHJcblx0XHRcdCc8L2Rpdj4nLFxyXG5cdFx0XHJcblx0XHRjbG9zZTpcclxuXHRcdCAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJtbC0yIG1iLTEgY2xvc2UgbWwtYXV0b1wiIGRhdGEtZGlzbWlzcz1cInRvYXN0XCIgYXJpYS1sYWJlbD0nICsgJC5pMThuKCdjbG9zZScpICsgJz4nICtcclxuXHRcdCAgICBcdCc8c3BhbiBhcmlhLWhpZGRlbj1cInRydWVcIj4mdGltZXM7PC9zcGFuPicgK1xyXG5cdFx0ICAgICc8L2J1dHRvbj4nLFxyXG5cdFx0XHJcblx0fTtcclxuXHRcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIERlZmF1bHRzIHBhcmFtZXRlcnMgZm9yIGRhdGVwaWNrZXJcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5mb3JtYXQgPSBcImRkLW1tLXl5eXlcIjtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMud2Vla1N0YXJ0ID0gMTtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMubWF4Vmlld01vZGUgPSAzO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5sYW5ndWFnZSA9IGxvY2FsZS5yZXBsYWNlKC9fLywgJy0nKTtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMubXVsdGlkYXRlID0gZmFsc2U7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLmRheXNPZldlZWtEaXNhYmxlZCA9IFwiMCw2XCI7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLmF1dG9jbG9zZSA9IHRydWU7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLmNhbGVuZGFyV2Vla3MgPSB0cnVlO1xyXG5cdCQuZm4uZGF0ZXBpY2tlci5kZWZhdWx0cy5jbGVhckJ0biA9IHRydWU7XHJcblx0JC5mbi5kYXRlcGlja2VyLmRlZmF1bHRzLnRvZGF5QnRuID0gdHJ1ZTtcclxuXHQkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMudG9kYXlIaWdobGlnaHQgPSB0cnVlO1xyXG4gICAgXHJcblx0XHJcblx0XHJcbiAgICAkKGRvY3VtZW50KS5vbignYWpheC5iZWZvcmVTZW5kJywgZnVuY3Rpb24oZSwganFYSFIsIHNldHRpbmdzKSB7XHJcbiAgICBcdCQoZS50YXJnZXQpXHJcblx0XHRcdC5zaG93KClcclxuXHRcdFx0LmVtcHR5KClcclxuXHRcdFx0LmFwcGVuZChnbG9iYWwuaWNvbi5sb2FkaW5nKVxyXG5cdFx0O1xyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLm9uKCdhamF4LnN1Y2Nlc3MnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcbiAgICBcdFxyXG5cdFx0JChlLnRhcmdldCkuZmluZCgnLnNwaW5uZXItYm9yZGVyJykucGFyZW50KCkucmVtb3ZlKCk7XHJcblx0XHRpZiAocmVzdWx0KSB7XHJcblx0XHRcdCQoZS50YXJnZXQpLmh0bWwoJChlLnRhcmdldCkuaHRtbCgpICsgcmVzdWx0KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIHBvcG92ZXJcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBBamF4XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcblx0ICAgIGdsb2JhbC5hamF4LmZldGNoKGUudGFyZ2V0KTtcclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIE1vZGFsICYgQ29sbGFwc2VcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0ICAgIFxyXG5cdFx0JChlLnRhcmdldCkub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS10b2dnbGU9XCJjb2xsYXBzZVwiXVtocmVmPVwiIycgKyAkKHRoaXMpLmF0dHIoJ2lkJykgKyAnXCJdJylcclxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHRcdFx0LmJsdXIoKVxyXG5cdFx0XHQ7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JChlLnRhcmdldCkub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0JCgnW2RhdGEtdG9nZ2xlPVwibW9kYWxcIl0nKS5ibHVyKCk7XHJcblx0XHRcdCQoZS50YXJnZXQpLmZpbmQoJy5tb2RhbC1jb250ZW50JykucmVtb3ZlQXR0cignc3R5bGUnKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKGUudGFyZ2V0KS5maW5kKCdidXR0b25bZGF0YS1kaXNtaXNzXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJy5tb2RhbC1oZWFkZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoaXMpLmNsb3Nlc3QoJy5tb2RhbC1kaWFsb2cnKS5kcmFncyh7aGFuZGxlOicubW9kYWwtaGVhZGVyJ30pO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBCb290c3RyYXAgZGF0ZXBpY2tlclxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdFx0JChlLnRhcmdldCkuZmluZCgnLmRhdGVwaWNrZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoaXMpLmRhdGVwaWNrZXIoeydmb3JtYXQnOiAkLmZuLmRhdGVwaWNrZXIuZGVmYXVsdHMuZm9ybWF0fSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBGb3JtIG11bHRpcGxlXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcblx0XHQkKGUudGFyZ2V0KS5maW5kKFwiW25hbWUkPSdfbXVsdGlwbGUnXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGlkO1xyXG5cdFx0XHRpZiAoaWQgPSAkKHRoaXMpLnByb3AoJ25hbWUnKS5tYXRjaCgvKFxcUyspX211bHRpcGxlJC95KSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBkZWZpbmVkID0gKCQodGhpcykudmFsKCkgIT0gMCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCQoXCJbaWRePSdcIiArIGlkWzFdICsgXCInXVwiKS5ub3QoXCJbaWQkPSdtdWx0aXBsZV8wJ11cIikubm90KFwiW2lkJD0nbXVsdGlwbGVfMSddXCIpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdkYXRlcGlja2VyJykpIHtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRhdGVwaWNrZXIoJ3NldERhdGUnLCBuZXcgRGF0ZSgpKTtcclxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAncmFkaW8nKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICdjaGVja2JveCcpIHtcclxuXHRcdFx0XHRcdFx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICd0ZXh0JyB8fCAkKHRoaXMpLmlzKCdzZWxlY3QnKSB8fCAkKHRoaXMpLmlzKCd0ZXh0YXJlYScpKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS52YWwobnVsbCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYXR0cihcImRpc2FibGVkXCIsIGRlZmluZWQpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoXCJyZXF1aXJlZFwiLCAkKHRoaXMpLmRhdGEoJ3JlcXVpcmVkJykgJiYgZGVmaW5lZCA9PT0gZmFsc2UpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCQoJyMnICsgaWRbMV0gKyAnX211bHRpcGxlJykudmFsKCQodGhpcykudmFsKCkpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JChlLnRhcmdldCkuZmluZCgnZm9ybScpLmZpbmQoJ2RpdiwgaW5wdXQsIHNlbGVjdCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuZGF0YSgnbXVsdGlwbGUnKSkge1xyXG5cdFx0XHRcdCQoXCJbbmFtZT0nXCIgKyAkKHRoaXMpLnByb3AoJ2lkJykgKyBcIl9tdWx0aXBsZSddXCIpLmZpbHRlcignW3ZhbHVlPTFdJykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKFwiW25hbWU9J1wiICsgJCh0aGlzKS5wcm9wKCdpZCcpICsgXCJfbXVsdGlwbGUnXVwiKS5maWx0ZXIoJ1t2YWx1ZT0wXScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KVxyXG5cdFx0XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBCc0N1c3RvbUZpbGVJbnB1dFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdFx0YnNDdXN0b21GaWxlSW5wdXQuaW5pdCgpO1xyXG5cdFx0XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgJChkb2N1bWVudCkub24oJ2FqYXguZXJyb3InLCBmdW5jdGlvbihlLCBqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcclxuICAgIFx0XHJcblx0XHRpZiAoKG0gPSAvPCEtLVxccyguKylcXHMtLT4vLmV4ZWMoanFYSFIucmVzcG9uc2VUZXh0KSkgIT09IG51bGwpIHtcclxuXHRcdFx0dGl0bGUgPSBtWzFdLmh0bWxEZWNvZGUoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRpdGxlID0gJC5pMThuKCdlcnJvcicpO1xyXG5cdFx0fVxyXG5cdFx0XHJcbiAgICBcdGxldCBkaXYgPSAkKGUudGFyZ2V0KS5hcHBlbmQoZ2xvYmFsLmNyZWF0ZS5kaXYoKSkuY2hpbGRyZW4oKS5sYXN0KClcclxuICAgIFx0XHQuYWRkQ2xhc3MoJ2FsZXJ0IGFsZXJ0LWRhbmdlcicpXHJcbiAgICBcdDtcclxuICAgIFx0XHJcbiAgICBcdGRpdi5hcHBlbmQoZ2xvYmFsLmNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcbiAgICBcdFx0LmFkZENsYXNzKCdhbGVydC1oZWFkaW5nIGZvbnQtd2VpZ2h0LWJvbGQnKVxyXG4gICAgXHRcdC50ZXh0KCQuaTE4bignZXJyb3InKSArICcgJyArIGpxWEhSLnN0YXR1cyArICcgOiAnICsganFYSFIuc3RhdHVzVGV4dClcclxuICAgIFx0O1xyXG5cdFx0XHJcbiAgICBcdGRpdi5hcHBlbmQoZ2xvYmFsLmNyZWF0ZS5wKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQudGV4dCh0aXRsZSlcclxuXHRcdDtcclxuICAgIFx0XHJcbiAgICBcdGRpdi5hcHBlbmQoZ2xvYmFsLmNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdidG4tcHJpbWFyeSBtdC0yJylcclxuXHRcdFx0LnRleHQoJC5pMThuKCdyZWxvYWQnKSlcclxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGdsb2JhbC5hamF4LnNldChlLnRhcmdldCwganFYSFIuc2V0dGluZ3MudXJsLCB7ZGF0YToganFYSFIuc2V0dGluZ3MuZGF0YX0pXHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcbiAgICBcdFxyXG4gICAgXHRkaXYuYXBwZW5kKGdsb2JhbC5jcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuLXByaW1hcnkgbXQtMicpXHJcblx0XHRcdC50ZXh0KCQuaTE4bignZGV0YWlscycpKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0bGV0IHJlc3VsdFdpbmRvdyA9IHdpbmRvdy5vcGVuKCcnLCAnX2JsYW5rJywgJ3dpZHRoPTgwMCxoZWlnaHQ9NjAwLHNjcm9sbGJhcnM9eWVzLHJlc2l6YWJsZT15ZXMnKTtcclxuXHRcdFx0XHRpZiAoKG0gPSAvPGhlYWQ+KC4rPyk8XFwvaGVhZD4vcy5leGVjKGpxWEhSLnJlc3BvbnNlVGV4dCkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHQkKHJlc3VsdFdpbmRvdy5kb2N1bWVudC5oZWFkKS5hcHBlbmQobVsxXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmICgobSA9IC88Ym9keT4oLis/KTxcXC9ib2R5Pi9zLmV4ZWMoanFYSFIucmVzcG9uc2VUZXh0KSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdCQocmVzdWx0V2luZG93LmRvY3VtZW50LmJvZHkpLmFwcGVuZChtWzFdKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcbiAgICBcdFxyXG4gICAgfSk7XHJcbiAgICBcclxuICAgICQoZG9jdW1lbnQpLnRyaWdnZXIoJ2FqYXguc3VjY2VzcycpO1xyXG4gICAgXHJcbn0pOyIsInZhciBtYXAgPSB7XG5cdFwiLi9lbl9HQi5qc29uXCI6IFwiLi9hc3NldHMvanMvbG9jYWxlcy9lbl9HQi5qc29uXCIsXG5cdFwiLi9mcl9GUi5qc29uXCI6IFwiLi9hc3NldHMvanMvbG9jYWxlcy9mcl9GUi5qc29uXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2pzL2xvY2FsZXMgc3luYyByZWN1cnNpdmUgXlxcXFwuXFxcXC8uKlxcXFwuanNvbiRcIjsiXSwic291cmNlUm9vdCI6IiJ9