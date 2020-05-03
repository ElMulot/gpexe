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

__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js"); //require('bootstrap-table');
//require('sticky-table-headers');


__webpack_require__(/*! ../css/document.scss */ "./assets/css/document.scss");

__webpack_require__(/*! ./multiselect/multiselect.js */ "./assets/js/multiselect/multiselect.js");

__webpack_require__(/*! ./multiselect/fr_FR.js */ "./assets/js/multiselect/fr_FR.js");

$(document).ready(function () {
  $("select").multiselect(); //$("table").stickyTableHeaders();

  $('#document_edit').hide();
  $('#document_move').hide();
  $('#document_delete').hide();
  $('#version_menu').hide();
  var checkboxes = [];
  console.log($('#display').find('input'));
  $('#display').find('input').on('click', function () {
    console.log('ok');
    var data = [];

    if ($('#hide').val()) {
      data = JSON.parse($('#hide').val());
    }

    var index = data.indexOf($(this).data('value'));

    if ($(this).is(':checked')) {
      if (index > -1) {
        data.splice(index, 1);
      }
    } else {
      if (index == -1) {
        data.push($(this).data('value'));
      }
    }

    $('#hide').val(JSON.stringify(data));
    $('#form').submit();
  });
  $('table').find('input').each(function () {
    if ($(this).prop('type') == 'checkbox') {
      $(this).prop('checked', false);
      $(this).on('click', lineChecked);

      if ($(this).prop('id') != 'check_all') {
        checkboxes.push($(this));
      }
    }
  });
  $('#detail').on('show.bs.modal', function (event) {
    $('.modal-body').empty().append('<div class="d-flex justify-content-center">' + '<div class="spinner-border" role="status">' + '<span class="sr-only">Loading...</span>' + '</div>' + '</div>');
    $.ajax({
      url: $(event.relatedTarget).data('url'),
      type: 'GET',
      success: function success(result) {
        $('.modal-body').empty();
        $('.modal-body').html(result);
        $('#version_tabs').find('a').each(function () {
          $(this).on('click', function (event) {
            getDetail(event.target);
          });

          if ($(this).hasClass('active')) {
            $(this).trigger('click');
          }
        });
      }
    });
  });

  function getDetail(that) {
    $(that).parent().find('a.active').removeClass('active');
    $(that).addClass('active');
    $('#version').empty().append('<div class="d-flex justify-content-center">' + '<div class="spinner-border" role="status">' + '<span class="sr-only">Loading...</span>' + '</div>' + '</div>');
    $.ajax({
      url: $(that).data('url'),
      type: 'GET',
      success: function success(result) {
        $('#version').empty();
        $('#version').html(result);
        $('#review_tabs').find('a').each(function () {
          $(this).on('click', function (event) {
            getReview(event.target);
          });
          /*
          $(this).on('show.bs.tab', function(event) {
          	event.target.trigger('click');
          });
          */

          if ($(this).hasClass('active')) {
            $(this).trigger('click');
          }
        });
      }
    });
  }

  function getReview(that) {
    $(that).parent().find('a.active').removeClass('active');
    $(that).addClass('active');
    var url = $(that).data('url');
    var method = $('form[name="review"]').attr('method') || 'GET';
    var data = $('form[name="review"]').serializeArray();
    $('#review').empty().append('<div class="d-flex justify-content-center">' + '<div class="spinner-border spinner-border-sm" role="status">' + '<span class="sr-only">Loading...</span>' + '</div>' + '</div>');
    $.ajax({
      url: url,
      type: method,
      data: data,
      success: function success(result) {
        $('#review').empty();
        $('#review').html(result);
        $('#review').find('button').on('click', function () {
          getReview(this);
        });
      }
    });
  }

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
      var array = [];

      var _iterator = _createForOfIteratorHelper(checkboxes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var checkbox = _step.value;

          if (checkbox.is(':checked')) {
            array.push(checkbox.val());
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      $('#versions').val(JSON.stringify(array));
      $('#document_edit').show();
      $('#document_move').show();
      $('#document_delete').show();
      $('#version_menu').show();
    } else if (unchecked) {
      $('#version').val('');
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

/***/ }),

/***/ "./assets/js/multiselect/fr_FR.js":
/*!****************************************!*\
  !*** ./assets/js/multiselect/fr_FR.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;

  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (a0) {
      return factory(a0);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (jQuery) {
  (function ($) {
    /*
    $.fn.multiselect.defaults = {
        noneSelectedText: 'Aucune sélection',
        noneResultsText: 'Aucun résultat pour {0}',
        multipleSeparator: ', ',
        selectAllText: 'Tout sélectionner',
        filterText: 'Filtrer'
    };
    */
  })(jQuery);
});

/***/ }),

/***/ "./assets/js/multiselect/multiselect.js":
/*!**********************************************!*\
  !*** ./assets/js/multiselect/multiselect.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

(function () {
  var create = {
    div: function div() {
      return $(document.createElement('div'));
    },
    input: function input() {
      return $(document.createElement('input')).attr('type', 'text').addClass('form-control form-control-sm');
    },
    checkbox: function checkbox() {
      return $(document.createElement('input')).attr('type', 'checkbox').addClass('custom-control-input');
    },
    radio: function radio() {
      return $(document.createElement('input')).attr('type', 'radio').addClass('custom-control-input');
    },
    label: function label() {
      return $(document.createElement('label')).addClass('custom-control-label w-100 text-nowrap');
    },
    button: function button() {
      return $(document.createElement('button')).addClass('btn btn-primary');
    },
    smallButton: function smallButton() {
      return $(document.createElement('button')).addClass('btn btn-sm btn-primary mx-1');
    }
  };
  var text = {
    noneSelected: 'None selected',
    multipleSeparator: ', ',
    selectAll: 'Select all',
    filter: 'Filter'
  };
  var icon = {
    arrowUp: '<svg class="bi bi-arrow-bar-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 5.854a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L8 3.207l2.646 2.647a.5.5 0 00.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 10a.5.5 0 00.5-.5V3a.5.5 0 00-1 0v6.5a.5.5 0 00.5.5zm-4.8 1.6c0-.22.18-.4.4-.4h8.8a.4.4 0 010 .8H3.6a.4.4 0 01-.4-.4z" clip-rule="evenodd"/>' + '</svg>',
    arrowDown: '<svg class="bi bi-arrow-bar-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 10.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L8 12.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 6a.5.5 0 01.5.5V13a.5.5 0 01-1 0V6.5A.5.5 0 018 6zM2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>' + '</svg>'
  };
  $.fn.extend({
    multiselect: function multiselect() {
      $(this).each(function () {
        createMultiselect(this);
      });
    }
  });

  function createMultiselect(that) {
    var multipleAttr = _typeof($(that).attr('multiple')) !== ( true ? "undefined" : undefined) && $(that).attr('multiple') !== false;

    if (multipleAttr) {
      if (n = $(that).prop('name').match(/(.+)\[\]$/i)) {
        var name = n[1];
      } else {
        return false;
      }
    } else {
      var name = $(that).prop('name');
    }

    var select = {
      element: $(that),
      name: name,
      multiple: multipleAttr,
      title: $(that).data('title'),
      locale: $(that).data('locale'),
      target: $(that).data('target'),
      fullHeader: $(that).data('full_header'),
      options: []
    };
    $(that).find('option').each(function () {
      select.options.push({
        element: $(this),
        value: $(this).attr('value'),
        text: $(this).text(),
        selected: $(this).attr('selected')
      });
    });
    select.dropdownMenu = $('#' + select.target).append(create.div).children().last().addClass('mx-1').css('min-width', '15em');
    select.dropDownButton = $('#' + select.target).parent().parent();
    select.dropDownButton.on('show.bs.dropdown', createMenu);

    function createMenu() {
      select.dropdownMenu.empty();

      if (select.multiple) {
        var header = select.dropdownMenu.append(create.div).children().last().addClass('text-center border-bottom border-dark pb-2 px-1');

        if (select.fullHeader) {
          header.append(create.smallButton).children().last().append(icon.arrowUp).addClass('px-2 ' + ($('#sortAsc').val() == select.name ? 'btn-outline-primary bg-dark text-white' : 'btn-primary')).on('click', sortAsc);
          header.append(create.smallButton).children().last().text(text.filter).addClass('px-3').on('click', filter);
          header.append(create.smallButton).children().last().append(icon.arrowDown).addClass('px-2 ' + ($('#sortDesc').val() == select.name ? 'btn-outline-primary bg-dark text-white' : 'btn-primary')).on('click', sortDesc);
        } else {
          header.text(select.title);
        }

        var search = select.dropdownMenu.append(create.div).children().last().addClass('text-center border-bottom border-dark p-2');
        search.append(create.input).children().last().on('input', function () {
          var searchValue = $(this).val().toLowerCase();

          if (searchValue == '') {
            select.selectAllDiv.show();

            var _iterator = _createForOfIteratorHelper(select.options),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var o = _step.value;
                o.div.show();
                o.checkbox.prop('checked', false);
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }
          } else {
            select.selectAllDiv.hide();

            var _iterator2 = _createForOfIteratorHelper(select.options),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var _o = _step2.value;

                if (_o.text.toLowerCase().indexOf(searchValue) == -1) {
                  _o.div.hide();

                  _o.checkbox.prop('checked', false);
                } else {
                  _o.div.show();

                  _o.checkbox.prop('checked', true);
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          }
        });

        if (!select.fullHeader) {
          search.addClass('d-flex flex-row');
          search.append(create.smallButton).children().last().text(text.filter).addClass('px-3').on('click', filter);
        }
      }

      var body = select.dropdownMenu.append(create.div).children().last().addClass('px-2' + (select.multiple ? ' pt-3' : ''));

      if (select.multiple) {
        select.selectAllDiv = body.append(create.div).children().last().addClass('custom-control custom-checkbox');
        select.selectAllCheckbox = select.selectAllDiv.append(create.checkbox).children().last().attr('id', select.name + '_selectAll').on('change', function () {
          var checked = $(this).is(':checked');

          var _iterator3 = _createForOfIteratorHelper(select.options),
              _step3;

          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              var o = _step3.value;
              o.checkbox.prop('checked', checked);
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        });
        select.selectAllLabel = select.selectAllDiv.append(create.label).children().last().attr('for', select.name + '_selectAll').text(text.selectAll);

        var _iterator4 = _createForOfIteratorHelper(select.options),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var o = _step4.value;
            o.div = body.append(create.div).children().last().addClass('custom-control custom-checkbox');
            o.checkbox = o.div.append(create.checkbox).children().last().attr('id', select.name + '_' + o.value).attr('checked', o.selected).on('change', function () {
              var checked;
              var unchecked;

              var _iterator5 = _createForOfIteratorHelper(select.options),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var _o2 = _step5.value;

                  if ($(_o2.checkbox).is(':checked')) {
                    checked = true;
                  } else {
                    unchecked = true;
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }

              if (checked && unchecked) {
                select.selectAllCheckbox.prop('indeterminate', true);
              } else {
                select.selectAllCheckbox.prop('indeterminate', false);
                select.selectAllCheckbox.prop('checked', checked);
              }
            });
            o.label = o.div.append(create.label).children().last().attr('for', select.name + '_' + o.value).text(o.text);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } else {
        var _iterator6 = _createForOfIteratorHelper(select.options),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _o3 = _step6.value;
            _o3.div = body.append(create.div).children().last().addClass('custom-control custom-checkbox');
            _o3.checkbox = _o3.div.append(create.checkbox).children().last().attr('id', select.name + '_' + _o3.value).attr('checked', _o3.selected).on('change', function () {
              var _iterator7 = _createForOfIteratorHelper(select.options),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _o4 = _step7.value;

                  _o4.element.prop('selected', _o4.checkbox.is(':checked'));
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }

              $('#form').submit();
            });
            _o3.label = _o3.div.append(create.label).children().last().attr('for', select.name + '_' + _o3.value).text(_o3.text);
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
      }
    }

    function sortAsc() {
      $('#sortAsc').val(select.name);
      $('#sortDesc').val('');
      filter();
    }

    function filter() {
      var _iterator8 = _createForOfIteratorHelper(select.options),
          _step8;

      try {
        for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
          var o = _step8.value;
          o.element.attr('selected', o.checkbox.is(':checked'));
        }
      } catch (err) {
        _iterator8.e(err);
      } finally {
        _iterator8.f();
      }

      $('#form').submit();
    }

    function sortDesc() {
      $('#sortDesc').val(select.name);
      $('#sortAsc').val('');
      filter();
    }

    select.dropDownButton.on('hide.bs.dropdown', function (e) {
      if (e.clickEvent && $.contains(e.relatedTarget.parentNode, e.clickEvent.target)) {
        e.preventDefault();
      } else {
        select.dropdownMenu.empty();
      }
    });
  }
})($);

/***/ })

},[["./assets/js/document.js","runtime","vendors~app~document~form~login","vendors~app~document","vendors~document~form","vendors~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tdWx0aXNlbGVjdC9mcl9GUi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJQb3BwZXIiLCJkb2N1bWVudCIsInJlYWR5IiwibXVsdGlzZWxlY3QiLCJoaWRlIiwiY2hlY2tib3hlcyIsImNvbnNvbGUiLCJsb2ciLCJmaW5kIiwib24iLCJkYXRhIiwidmFsIiwiSlNPTiIsInBhcnNlIiwiaW5kZXgiLCJpbmRleE9mIiwiaXMiLCJzcGxpY2UiLCJwdXNoIiwic3RyaW5naWZ5Iiwic3VibWl0IiwiZWFjaCIsInByb3AiLCJsaW5lQ2hlY2tlZCIsImV2ZW50IiwiZW1wdHkiLCJhcHBlbmQiLCJhamF4IiwidXJsIiwicmVsYXRlZFRhcmdldCIsInR5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwiaHRtbCIsImdldERldGFpbCIsInRhcmdldCIsImhhc0NsYXNzIiwidHJpZ2dlciIsInRoYXQiLCJwYXJlbnQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZ2V0UmV2aWV3IiwibWV0aG9kIiwiYXR0ciIsInNlcmlhbGl6ZUFycmF5IiwiY2hlY2tlZCIsInVuY2hlY2tlZCIsImFycmF5IiwiY2hlY2tib3giLCJzaG93IiwicHJldmVudERlZmF1bHQiLCJyb290IiwiZmFjdG9yeSIsInVuZGVmaW5lZCIsIndpbmRvdyIsImRlZmluZSIsImEwIiwialF1ZXJ5IiwiY3JlYXRlIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlucHV0IiwicmFkaW8iLCJsYWJlbCIsImJ1dHRvbiIsInNtYWxsQnV0dG9uIiwidGV4dCIsIm5vbmVTZWxlY3RlZCIsIm11bHRpcGxlU2VwYXJhdG9yIiwic2VsZWN0QWxsIiwiZmlsdGVyIiwiaWNvbiIsImFycm93VXAiLCJhcnJvd0Rvd24iLCJmbiIsImV4dGVuZCIsImNyZWF0ZU11bHRpc2VsZWN0IiwibXVsdGlwbGVBdHRyIiwibiIsIm1hdGNoIiwibmFtZSIsInNlbGVjdCIsImVsZW1lbnQiLCJtdWx0aXBsZSIsInRpdGxlIiwibG9jYWxlIiwiZnVsbEhlYWRlciIsIm9wdGlvbnMiLCJ2YWx1ZSIsInNlbGVjdGVkIiwiZHJvcGRvd25NZW51IiwiY2hpbGRyZW4iLCJsYXN0IiwiY3NzIiwiZHJvcERvd25CdXR0b24iLCJjcmVhdGVNZW51IiwiaGVhZGVyIiwic29ydEFzYyIsInNvcnREZXNjIiwic2VhcmNoIiwic2VhcmNoVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsInNlbGVjdEFsbERpdiIsIm8iLCJib2R5Iiwic2VsZWN0QWxsQ2hlY2tib3giLCJzZWxlY3RBbGxMYWJlbCIsImUiLCJjbGlja0V2ZW50IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsOERBQUQsQ0FBdEIsQyxDQUNBO0FBQ0E7OztBQUVBQSxtQkFBTyxDQUFDLHdEQUFELENBQVA7O0FBRUFBLG1CQUFPLENBQUMsNEVBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxnRUFBRCxDQUFQOztBQUVBRCxDQUFDLENBQUNHLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFFNUJKLEdBQUMsQ0FBQyxRQUFELENBQUQsQ0FBWUssV0FBWixHQUY0QixDQUc1Qjs7QUFFQUwsR0FBQyxDQUFDLGdCQUFELENBQUQsQ0FBb0JNLElBQXBCO0FBQ0FOLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CTSxJQUFwQjtBQUNBTixHQUFDLENB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RixDQUFDLENBQUMvRSxhQUFGLENBQWdCa0YsVUFBM0IsRUFBdUNILENBQUMsQ0FBQ0MsVUFBRixDQUFhMUUsTUFBcEQsQ0FBbkIsRUFBZ0Y7QUFDL0V5RSxTQUFDLENBQUN6RCxjQUFGO0FBQ0EsT0FGRCxNQUVPO0FBQ04rQixjQUFNLENBQUNTLFlBQVAsQ0FBb0JsRSxLQUFwQjtBQUNBO0FBQ0QsS0FQRDtBQVNBO0FBRUQsQ0FqVUQsRUFpVUczQixDQWpVSCxFIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5jb25zdCBQb3BwZXIgPSByZXF1aXJlKCdwb3BwZXIuanMnKTtcclxuLy9yZXF1aXJlKCdib290c3RyYXAtdGFibGUnKTtcclxuLy9yZXF1aXJlKCdzdGlja3ktdGFibGUtaGVhZGVycycpO1xyXG5cclxucmVxdWlyZSgnLi4vY3NzL2RvY3VtZW50LnNjc3MnKTtcclxuXHJcbnJlcXVpcmUoJy4vbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QuanMnKTtcclxucmVxdWlyZSgnLi9tdWx0aXNlbGVjdC9mcl9GUi5qcycpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0JChcInNlbGVjdFwiKS5tdWx0aXNlbGVjdCgpO1xyXG5cdC8vJChcInRhYmxlXCIpLnN0aWNreVRhYmxlSGVhZGVycygpO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcdFx0XHJcblx0XHJcblx0dmFyIGNoZWNrYm94ZXMgPSBbXTtcclxuXHRjb25zb2xlLmxvZygkKCcjZGlzcGxheScpLmZpbmQoJ2lucHV0JykpO1xyXG5cdCQoJyNkaXNwbGF5JykuZmluZCgnaW5wdXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGNvbnNvbGUubG9nKCdvaycpO1xyXG5cdFx0dmFyIGRhdGEgPSBbXTtcclxuXHRcdGlmICgkKCcjaGlkZScpLnZhbCgpKSB7XHJcblx0XHRcdGRhdGEgPSBKU09OLnBhcnNlKCQoJyNoaWRlJykudmFsKCkpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR2YXIgaW5kZXggPSBkYXRhLmluZGV4T2YoJCh0aGlzKS5kYXRhKCd2YWx1ZScpKTtcclxuXHRcdFxyXG5cdFx0aWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0aWYgKGluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRkYXRhLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGlmIChpbmRleCA9PSAtMSkge1xyXG5cdFx0XHRcdGRhdGEucHVzaCgkKHRoaXMpLmRhdGEoJ3ZhbHVlJykpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdCQoJyNoaWRlJykudmFsKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcclxuXHRcdCQoJyNmb3JtJykuc3VibWl0KCk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgndGFibGUnKS5maW5kKCdpbnB1dCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdGlmICgkKHRoaXMpLnByb3AoJ3R5cGUnKSA9PSAnY2hlY2tib3gnKSB7XHJcblx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBsaW5lQ2hlY2tlZCk7XHJcblx0XHRcdGlmICgkKHRoaXMpLnByb3AoJ2lkJykgIT0gJ2NoZWNrX2FsbCcpIHtcclxuXHRcdFx0XHRjaGVja2JveGVzLnB1c2goJCh0aGlzKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZGV0YWlsJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHJcblx0XHQkKCcubW9kYWwtYm9keScpXHJcblx0XHRcdC5lbXB0eSgpXHJcblx0XHRcdC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPicgK1xyXG5cdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPicgK1xyXG5cdFx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPicgK1xyXG5cdFx0XHRcdFx0XHQnPC9kaXY+JyArXHJcblx0XHRcdFx0XHQnPC9kaXY+Jyk7XHJcblx0XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR1cmwgOiAkKGV2ZW50LnJlbGF0ZWRUYXJnZXQpLmRhdGEoJ3VybCcpLFxyXG5cdFx0XHR0eXBlOiAnR0VUJyxcclxuXHRcdFx0XHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG5cdFx0XHRcdCQoJy5tb2RhbC1ib2R5JykuZW1wdHkoKTtcclxuXHRcdFx0XHQkKCcubW9kYWwtYm9keScpLmh0bWwocmVzdWx0KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKCcjdmVyc2lvbl90YWJzJykuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdGdldERldGFpbChldmVudC50YXJnZXQpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHRcclxuXHRmdW5jdGlvbiBnZXREZXRhaWwodGhhdCkge1xyXG5cdFx0JCh0aGF0KS5wYXJlbnQoKS5maW5kKCdhLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQodGhhdCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHJcblx0XHQkKCcjdmVyc2lvbicpXHJcblx0XHRcdC5lbXB0eSgpXHJcblx0XHRcdC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPicgK1xyXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj4nICtcclxuXHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+JyArXHJcblx0XHRcdFx0XHQnPC9kaXY+JyArXHJcblx0XHRcdFx0JzwvZGl2PicpO1xyXG5cdFx0XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR1cmwgOiAkKHRoYXQpLmRhdGEoJ3VybCcpLFxyXG5cdFx0XHR0eXBlOiAnR0VUJyxcclxuXHRcdFx0XHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG5cdFx0XHRcdCQoJyN2ZXJzaW9uJykuZW1wdHkoKTtcclxuXHRcdFx0XHQkKCcjdmVyc2lvbicpLmh0bWwocmVzdWx0KTtcclxuXHRcdFx0XHQkKCcjcmV2aWV3X3RhYnMnKS5maW5kKCdhJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0Z2V0UmV2aWV3KGV2ZW50LnRhcmdldCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0LypcclxuXHRcdFx0XHRcdCQodGhpcykub24oJ3Nob3cuYnMudGFiJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0ZXZlbnQudGFyZ2V0LnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdCovXHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFxyXG5cclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBnZXRSZXZpZXcodGhhdCkge1xyXG5cdFx0JCh0aGF0KS5wYXJlbnQoKS5maW5kKCdhLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQodGhhdCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHJcblx0XHR2YXIgdXJsID0gJCh0aGF0KS5kYXRhKCd1cmwnKTtcclxuXHRcdHZhciBtZXRob2QgPSAkKCdmb3JtW25hbWU9XCJyZXZpZXdcIl0nKS5hdHRyKCdtZXRob2QnKSB8fCAnR0VUJztcclxuXHRcdHZhciBkYXRhID0gJCgnZm9ybVtuYW1lPVwicmV2aWV3XCJdJykuc2VyaWFsaXplQXJyYXkoKVxyXG5cdFx0XHJcblx0XHQkKCcjcmV2aWV3JylcclxuXHRcdFx0LmVtcHR5KClcclxuXHRcdFx0LmFwcGVuZCgnPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+JyArXHJcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtXCIgcm9sZT1cInN0YXR1c1wiPicgK1xyXG5cdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj4nICtcclxuXHRcdFx0XHRcdCc8L2Rpdj4nICtcclxuXHRcdFx0XHQnPC9kaXY+Jyk7XHJcblx0XHRcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybCA6IHVybCxcclxuXHRcdFx0dHlwZTogbWV0aG9kLFxyXG5cdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHRcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0JCgnI3JldmlldycpLmVtcHR5KCk7XHJcblx0XHRcdFx0JCgnI3JldmlldycpLmh0bWwocmVzdWx0KTtcclxuXHRcdFx0XHQkKCcjcmV2aWV3JykuZmluZCgnYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRnZXRSZXZpZXcodGhpcylcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gbGluZUNoZWNrZWQoKSB7XHJcblx0XHRcclxuXHRcdHZhciBjaGVja2VkID0gZmFsc2U7XHJcblx0XHR2YXIgdW5jaGVja2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHJcblx0XHRpZiAoJCh0aGlzKS5wcm9wKCdpZCcpID09ICdjaGVja19hbGwnKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQkKCd0YWJsZScpLmZpbmQoJ2lucHV0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjaGVja2VkID0gJCgnI2NoZWNrX2FsbCcpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdHVuY2hlY2tlZCA9ICFjaGVja2VkO1xyXG5cdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcclxuXHRcdFx0JCgndGFibGUnKS5maW5kKCdpbnB1dCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCQodGhpcykucHJvcCgnaWQnKSAhPSAnY2hlY2tfYWxsJykge1xyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1bmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmIChjaGVja2VkKSB7XHJcblx0XHRcdHZhciBhcnJheSA9IFtdO1xyXG5cdFx0XHRmb3IgKGNvbnN0IGNoZWNrYm94IG9mIGNoZWNrYm94ZXMpIHtcclxuXHRcdFx0XHRpZiAoY2hlY2tib3guaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdGFycmF5LnB1c2goY2hlY2tib3gudmFsKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQkKCcjdmVyc2lvbnMnKS52YWwoSlNPTi5zdHJpbmdpZnkoYXJyYXkpKTtcclxuXHRcdFx0XHJcblx0XHRcdCQoJyNkb2N1bWVudF9lZGl0Jykuc2hvdygpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfbW92ZScpLnNob3coKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLnNob3coKTtcclxuXHRcdFx0JCgnI3ZlcnNpb25fbWVudScpLnNob3coKTtcdFxyXG5cdFx0fSBlbHNlIGlmKHVuY2hlY2tlZCkge1xyXG5cdFx0XHQkKCcjdmVyc2lvbicpLnZhbCgnJyk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfbW92ZScpLmhpZGUoKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLmhpZGUoKTtcclxuXHRcdFx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfZWRpdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnI2Zvcm0nKS5wcm9wKCdhY3Rpb24nLCAkKHRoaXMpLmRhdGEoJ2xpbmsnKSk7XHJcblx0XHQkKCcjZm9ybScpLnN1Ym1pdCgpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKCcjZm9ybScpLnByb3AoJ2FjdGlvbicsICQodGhpcykuZGF0YSgnbGluaycpKTtcclxuXHRcdCQoJyNmb3JtJykuc3VibWl0KCk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnI2Zvcm0nKS5wcm9wKCdhY3Rpb24nLCAkKHRoaXMpLmRhdGEoJ2xpbmsnKSk7XHJcblx0XHQkKCcjZm9ybScpLnN1Ym1pdCgpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2ZXJzaW9uX25ldycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnI2Zvcm0nKS5wcm9wKCdhY3Rpb24nLCAkKHRoaXMpLmRhdGEoJ2xpbmsnKSk7XHJcblx0XHQkKCcjZm9ybScpLnN1Ym1pdCgpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2ZXJzaW9uX2VkaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJyNmb3JtJykucHJvcCgnYWN0aW9uJywgJCh0aGlzKS5kYXRhKCdsaW5rJykpO1xyXG5cdFx0JCgnI2Zvcm0nKS5zdWJtaXQoKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdmVyc2lvbl9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJyNmb3JtJykucHJvcCgnYWN0aW9uJywgJCh0aGlzKS5kYXRhKCdsaW5rJykpO1xyXG5cdFx0JCgnI2Zvcm0nKS5zdWJtaXQoKTtcclxuXHR9KTtcclxufSk7XHJcblxyXG5cclxuXHJcblx0XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuIiwiKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XHJcblx0aWYgKHJvb3QgPT09IHVuZGVmaW5lZCAmJiB3aW5kb3cgIT09IHVuZGVmaW5lZCkgcm9vdCA9IHdpbmRvdztcclxuXHRpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XHJcblx0XHQvLyBBTUQuIFJlZ2lzdGVyIGFzIGFuIGFub255bW91cyBtb2R1bGUgdW5sZXNzIGFtZE1vZHVsZUlkIGlzIHNldFxyXG5cdFx0ZGVmaW5lKFtcImpxdWVyeVwiXSwgZnVuY3Rpb24gKGEwKSB7XHJcblx0XHRcdHJldHVybiAoZmFjdG9yeShhMCkpO1xyXG5cdFx0fSk7XHJcblx0fSBlbHNlIGlmICh0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0JyAmJiBtb2R1bGUuZXhwb3J0cykge1xyXG5cdFx0Ly8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XHJcblx0XHQvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcclxuXHRcdC8vIGxpa2UgTm9kZS5cclxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKFwianF1ZXJ5XCIpKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0ZmFjdG9yeShyb290W1wialF1ZXJ5XCJdKTtcclxuXHR9XHJcbn0odGhpcywgZnVuY3Rpb24gKGpRdWVyeSkge1xyXG5cdFxyXG5cdChmdW5jdGlvbiAoJCkge1xyXG5cdFx0LypcclxuXHRcdCQuZm4ubXVsdGlzZWxlY3QuZGVmYXVsdHMgPSB7XHJcblx0XHQgICAgbm9uZVNlbGVjdGVkVGV4dDogJ0F1Y3VuZSBzw6lsZWN0aW9uJyxcclxuXHRcdCAgICBub25lUmVzdWx0c1RleHQ6ICdBdWN1biByw6lzdWx0YXQgcG91ciB7MH0nLFxyXG5cdFx0ICAgIG11bHRpcGxlU2VwYXJhdG9yOiAnLCAnLFxyXG5cdFx0ICAgIHNlbGVjdEFsbFRleHQ6ICdUb3V0IHPDqWxlY3Rpb25uZXInLFxyXG5cdFx0ICAgIGZpbHRlclRleHQ6ICdGaWx0cmVyJ1xyXG5cdFx0fTtcclxuXHRcdCovXHJcblx0fSkoalF1ZXJ5KTtcclxuXHRcclxufSkpOyIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuXHJcbihmdW5jdGlvbiAoKSB7XHJcblx0XHJcblx0dmFyIGNyZWF0ZSA9IHtcclxuXHRcdGRpdjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxyXG5cdFx0XHRcclxuXHRcdFx0O1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0aW5wdXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKVxyXG5cdFx0XHRcdC5hdHRyKCd0eXBlJywgJ3RleHQnKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbScpXHJcblx0XHRcdDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGNoZWNrYm94OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0XHQuYXR0cigndHlwZScsICdjaGVja2JveCcpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1pbnB1dCcpXHJcblx0XHRcdDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdHJhZGlvOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0XHQuYXR0cigndHlwZScsICdyYWRpbycpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1pbnB1dCcpXHJcblx0XHRcdDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGxhYmVsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSlcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWxhYmVsIHctMTAwIHRleHQtbm93cmFwJylcclxuXHRcdFx0O1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0YnV0dG9uOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXByaW1hcnknKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRzbWFsbEJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSBteC0xJylcclxuXHRcdFx0O1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdH07XHJcblx0XHJcblx0dmFyIHRleHQgPSB7XHJcblx0ICAgIG5vbmVTZWxlY3RlZDogJ05vbmUgc2VsZWN0ZWQnLFxyXG5cdCAgICBtdWx0aXBsZVNlcGFyYXRvcjogJywgJyxcclxuXHQgICAgc2VsZWN0QWxsOiAnU2VsZWN0IGFsbCcsXHJcblx0ICAgIGZpbHRlcjogJ0ZpbHRlcidcclxuXHR9O1xyXG5cdFxyXG5cdHZhciBpY29uID0ge1xyXG5cdFx0YXJyb3dVcDpcclxuXHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1hcnJvdy1iYXItdXBcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS4zNTQgNS44NTRhLjUuNSAwIDAwMC0uNzA4bC0zLTNhLjUuNSAwIDAwLS43MDggMGwtMyAzYS41LjUgMCAxMC43MDguNzA4TDggMy4yMDdsMi42NDYgMi42NDdhLjUuNSAwIDAwLjcwOCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggMTBhLjUuNSAwIDAwLjUtLjVWM2EuNS41IDAgMDAtMSAwdjYuNWEuNS41IDAgMDAuNS41em0tNC44IDEuNmMwLS4yMi4xOC0uNC40LS40aDguOGEuNC40IDAgMDEwIC44SDMuNmEuNC40IDAgMDEtLjQtLjR6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcdFxyXG5cdFx0YXJyb3dEb3duOlxyXG5cdFx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktYXJyb3ctYmFyLWRvd25cIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuMzU0IDEwLjE0NmEuNS41IDAgMDEwIC43MDhsLTMgM2EuNS41IDAgMDEtLjcwOCAwbC0zLTNhLjUuNSAwIDAxLjcwOC0uNzA4TDggMTIuNzkzbDIuNjQ2LTIuNjQ3YS41LjUgMCAwMS43MDggMHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCA2YS41LjUgMCAwMS41LjVWMTNhLjUuNSAwIDAxLTEgMFY2LjVBLjUuNSAwIDAxOCA2ek0yIDMuNWEuNS41IDAgMDEuNS0uNWgxMWEuNS41IDAgMDEwIDFoLTExYS41LjUgMCAwMS0uNS0uNXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0fTtcclxuXHRcclxuXHQkLmZuLmV4dGVuZCh7XHJcblx0XHRtdWx0aXNlbGVjdDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQkKHRoaXMpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y3JlYXRlTXVsdGlzZWxlY3QodGhpcyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFxyXG5cdFxyXG5cdH0pO1xyXG5cdFx0XHJcblx0ZnVuY3Rpb24gY3JlYXRlTXVsdGlzZWxlY3QodGhhdCkge1xyXG5cdFx0XHJcblx0XHR2YXIgbXVsdGlwbGVBdHRyID0gKHR5cGVvZiAkKHRoYXQpLmF0dHIoJ211bHRpcGxlJykgIT09IHR5cGVvZiB1bmRlZmluZWQgJiYgJCh0aGF0KS5hdHRyKCdtdWx0aXBsZScpICE9PSBmYWxzZSk7XHJcblx0XHRcclxuXHRcdGlmKG11bHRpcGxlQXR0cikge1xyXG5cdFx0XHRpZiAobiA9ICQodGhhdCkucHJvcCgnbmFtZScpLm1hdGNoKC8oLispXFxbXFxdJC9pKSkge1xyXG5cdFx0XHRcdHZhciBuYW1lID0gblsxXTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciBuYW1lID0gJCh0aGF0KS5wcm9wKCduYW1lJyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHZhciBzZWxlY3QgPSB7XHJcblx0XHRcdFx0ZWxlbWVudDogJCh0aGF0KSxcclxuXHRcdFx0XHRuYW1lOiBuYW1lLFxyXG5cdFx0XHRcdG11bHRpcGxlOiBtdWx0aXBsZUF0dHIsXHJcblx0XHRcdFx0dGl0bGU6ICQodGhhdCkuZGF0YSgndGl0bGUnKSxcclxuXHRcdFx0XHRsb2NhbGU6ICQodGhhdCkuZGF0YSgnbG9jYWxlJyksXHJcblx0XHRcdFx0dGFyZ2V0OiAkKHRoYXQpLmRhdGEoJ3RhcmdldCcpLFxyXG5cdFx0XHRcdGZ1bGxIZWFkZXI6ICQodGhhdCkuZGF0YSgnZnVsbF9oZWFkZXInKSxcclxuXHRcdFx0XHRvcHRpb25zOiBbXSxcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdCQodGhhdCkuZmluZCgnb3B0aW9uJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0c2VsZWN0Lm9wdGlvbnMucHVzaCh7XHJcblx0XHRcdFx0ZWxlbWVudDogJCh0aGlzKSxcclxuXHRcdFx0XHR2YWx1ZTogJCh0aGlzKS5hdHRyKCd2YWx1ZScpLFxyXG5cdFx0XHRcdHRleHQ6ICQodGhpcykudGV4dCgpLFxyXG5cdFx0XHRcdHNlbGVjdGVkOiAkKHRoaXMpLmF0dHIoJ3NlbGVjdGVkJyksXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHNlbGVjdC5kcm9wZG93bk1lbnUgPSAkKCcjJyArIHNlbGVjdC50YXJnZXQpLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ214LTEnKVxyXG5cdFx0XHQuY3NzKCdtaW4td2lkdGgnLCAnMTVlbScpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHNlbGVjdC5kcm9wRG93bkJ1dHRvbiA9ICQoJyMnICsgc2VsZWN0LnRhcmdldCkucGFyZW50KCkucGFyZW50KCk7XHJcblx0XHRcclxuXHRcdHNlbGVjdC5kcm9wRG93bkJ1dHRvbi5vbignc2hvdy5icy5kcm9wZG93bicsIGNyZWF0ZU1lbnUpO1xyXG5cclxuXHRcdGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRzZWxlY3QuZHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoc2VsZWN0Lm11bHRpcGxlKSB7XHJcblx0XHRcdFx0dmFyIGhlYWRlciA9IHNlbGVjdC5kcm9wZG93bk1lbnUuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtY2VudGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLWRhcmsgcGItMiBweC0xJylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRcdGlmIChzZWxlY3QuZnVsbEhlYWRlcikge1xyXG5cdFx0XHRcdFx0aGVhZGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd1VwKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTIgJyArICgkKCcjc29ydEFzYycpLnZhbCgpID09IHNlbGVjdC5uYW1lPydidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J2J0bi1wcmltYXJ5JykpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBzb3J0QXNjKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRoZWFkZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LnRleHQodGV4dC5maWx0ZXIpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMycpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmaWx0ZXIpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGhlYWRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGljb24uYXJyb3dEb3duKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTIgJyArICgkKCcjc29ydERlc2MnKS52YWwoKSA9PSBzZWxlY3QubmFtZT8nYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOididG4tcHJpbWFyeScpKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgc29ydERlc2MpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGhlYWRlci50ZXh0KHNlbGVjdC50aXRsZSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRcdHZhciBzZWFyY2ggPSBzZWxlY3QuZHJvcGRvd25NZW51LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHAtMicpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlYXJjaC5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgc2VhcmNoVmFsdWUgPSAkKHRoaXMpLnZhbCgpLnRvTG93ZXJDYXNlKClcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChzZWFyY2hWYWx1ZSA9PSAnJykge1xyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdC5zZWxlY3RBbGxEaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0by5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0by5jaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsRGl2LmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChvLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvLmRpdi5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG8uY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG8uZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0by5jaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICghc2VsZWN0LmZ1bGxIZWFkZXIpIHtcclxuXHRcdFx0XHRcdHNlYXJjaC5hZGRDbGFzcygnZC1mbGV4IGZsZXgtcm93Jyk7XHJcblx0XHRcdFx0XHRzZWFyY2guYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LnRleHQodGV4dC5maWx0ZXIpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMycpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmaWx0ZXIpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgYm9keSA9IHNlbGVjdC5kcm9wZG93bk1lbnUuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdweC0yJyArICgoc2VsZWN0Lm11bHRpcGxlKT8nIHB0LTMnOicnKSlcclxuXHRcdFx0O1xyXG5cclxuXHRcdFx0aWYgKHNlbGVjdC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdHNlbGVjdC5zZWxlY3RBbGxEaXYgPSBib2R5LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsQ2hlY2tib3ggPSBzZWxlY3Quc2VsZWN0QWxsRGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfc2VsZWN0QWxsJylcclxuXHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR2YXIgY2hlY2tlZCA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XHJcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1x0XHJcblx0XHRcdFx0XHRcdFx0by5jaGVja2JveC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LnNlbGVjdEFsbExhYmVsID0gc2VsZWN0LnNlbGVjdEFsbERpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIHNlbGVjdC5uYW1lICsgJ19zZWxlY3RBbGwnKVxyXG5cdFx0XHRcdFx0LnRleHQodGV4dC5zZWxlY3RBbGwpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvLmRpdiA9IGJvZHkuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0by5jaGVja2JveCA9IG8uZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ18nICsgby52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCBvLnNlbGVjdGVkKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHZhciBjaGVja2VkO1xyXG5cdFx0XHRcdFx0XHRcdHZhciB1bmNoZWNrZWQ7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBvIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoJChvLmNoZWNrYm94KS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmIChjaGVja2VkICYmIHVuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LnNlbGVjdEFsbENoZWNrYm94LnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LnNlbGVjdEFsbENoZWNrYm94LnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsQ2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0by5sYWJlbCA9IG8uZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfJyArIG8udmFsdWUpXHJcblx0XHRcdFx0XHRcdC50ZXh0KG8udGV4dClcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChjb25zdCBvIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG8uZGl2ID0gYm9keS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvLmNoZWNrYm94ID0gby5kaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsIG8uc2VsZWN0ZWQpXHJcblx0XHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBvIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRvLmVsZW1lbnQucHJvcCgnc2VsZWN0ZWQnLCBvLmNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0JCgnI2Zvcm0nKS5zdWJtaXQoKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0by5sYWJlbCA9IG8uZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfJyArIG8udmFsdWUpXHJcblx0XHRcdFx0XHRcdC50ZXh0KG8udGV4dClcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcdFx0IFxyXG5cdFx0ZnVuY3Rpb24gc29ydEFzYygpIHtcclxuXHRcdFx0JCgnI3NvcnRBc2MnKS52YWwoc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHQkKCcjc29ydERlc2MnKS52YWwoJycpO1xyXG5cdFx0XHRmaWx0ZXIoKTtcclxuXHRcdH1cclxuXHRcdFx0XHJcblx0XHRmdW5jdGlvbiBmaWx0ZXIoKSB7XHJcblx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdG8uZWxlbWVudC5hdHRyKCdzZWxlY3RlZCcsIG8uY2hlY2tib3guaXMoJzpjaGVja2VkJykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdCQoJyNmb3JtJykuc3VibWl0KCk7XHJcblx0XHR9XHJcblx0XHRcdFxyXG5cdFx0ZnVuY3Rpb24gc29ydERlc2MoKSB7XHJcblx0XHRcdCQoJyNzb3J0RGVzYycpLnZhbChzZWxlY3QubmFtZSk7XHJcblx0XHRcdCQoJyNzb3J0QXNjJykudmFsKCcnKTtcclxuXHRcdFx0ZmlsdGVyKCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHNlbGVjdC5kcm9wRG93bkJ1dHRvbi5vbignaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZihlLmNsaWNrRXZlbnQgJiYgJC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQucGFyZW50Tm9kZSwgZS5jbGlja0V2ZW50LnRhcmdldCkpIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZWxlY3QuZHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG59KSgkKTsiXSwic291cmNlUm9vdCI6IiJ9