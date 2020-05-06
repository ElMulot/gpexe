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

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.for-each */ "./node_modules/core-js/modules/es.array.for-each.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

__webpack_require__(/*! sticky-table-headers */ "./node_modules/sticky-table-headers/js/jquery.stickytableheaders.js");

__webpack_require__(/*! ../css/document.scss */ "./assets/css/document.scss"); //require('./multiselect/multiselect.js');


__webpack_require__(/*! ./multiselect/fr_FR.js */ "./assets/js/multiselect/fr_FR.js");

var URLSearchParams = __webpack_require__(/*! @ungap/url-search-params/cjs */ "./node_modules/@ungap/url-search-params/cjs/index.js");

$(document).ready(function () {
  var paramsArray = new URLSearchParams(decodeURIComponent(window.location.search.slice(1)));
  $('#form').on('submit', function (event) {
    event.preventDefault;
    $(event.target).find('select').each(function () {
      var _$$val;

      if ($(this).val() == '' || !((_$$val = $(this).val()) === null || _$$val === void 0 ? void 0 : _$$val.length)) {
        $(this).attr('disabled', 'disabled');
      }
    });
    return true;
  });
  $('#form').find('select').each(function () {
    createMultiselect(this);
  });
  $('table').stickyTableHeaders();
  $('#document_edit').hide();
  $('#document_move').hide();
  $('#document_delete').hide();
  $('#version_menu').hide();
  $('#display').find('a').on('click', function (event) {
    if (input = $(event.delegateTarget).find('input')) {
      input.attr('checked', !input.is(':checked'));
      var hide = paramsArray.getAll('hide[]');
      var index = hide.indexOf(input.data('value'));

      if (input.is(':checked')) {
        if (index > -1) {
          hide.splice(index, 1);
        }
      } else {
        if (index == -1 && input.data('value')) {
          hide.push(input.data('value'));
        }
      }

      paramsArray["delete"]('hide[]');
      hide.forEach(function (e) {
        return paramsArray.append('hide[]', e);
      });
      location.assign(location.origin + location.pathname + '?' + paramsArray.toString());
    }

    return false;
  });
  $('#display').not('a').on('change click', function (event) {
    return false;
  });
  var checkboxes = [];
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
  $('#document_edit').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('url'));
    $('#form').submit();
  });
  $('#document_move').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('url'));
    $('#form').submit();
  });
  $('#document_delete').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('url'));
    $('#form').submit();
  });
  $('#version_new').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('url'));
    $('#form').submit();
  });
  $('#version_edit').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('url'));
    $('#form').submit();
  });
  $('#version_delete').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('url'));
    $('#form').submit();
  }); //---------------
  // getDetail
  //---------------

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
  } //---------------
  // getReview
  //---------------


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
  } //---------------
  // lineChecked
  //---------------


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
  } //---------------
  // multiSelect
  //---------------


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
      select.dropdownMenu.css('zIndex', 1);
      select.dropdownMenu.empty();

      if (select.multiple) {
        var header = select.dropdownMenu.append(create.div).children().last().addClass('text-center border-bottom border-dark pb-2 px-1');

        if (select.fullHeader) {
          header.append(create.smallButton).children().last().append(icon.arrowUp).addClass('px-2 ' + (paramsArray.get('sortAsc') == select.name ? 'btn-outline-primary bg-dark text-white' : 'btn-primary')).on('click', sortAsc);
          header.append(create.smallButton).children().last().text(text.filter).addClass('px-3 btn-primary').on('click', filter);
          header.append(create.smallButton).children().last().append(icon.arrowDown).addClass('px-2 ' + (paramsArray.get('sortDesc') == select.name ? 'btn-outline-primary bg-dark text-white' : 'btn-primary')).on('click', sortDesc);
        } else {
          header.text(select.title);
        }

        var search = select.dropdownMenu.append(create.div).children().last().addClass('text-center border-bottom border-dark p-2');
        search.append(create.input).children().last().on('input', function () {
          var searchValue = $(this).val().toLowerCase();

          if (searchValue == '') {
            select.selectAllDiv.show();

            var _iterator2 = _createForOfIteratorHelper(select.options),
                _step2;

            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                var o = _step2.value;
                o.div.show();
                o.checkbox.prop('checked', false);
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
          } else {
            select.selectAllDiv.hide();

            var _iterator3 = _createForOfIteratorHelper(select.options),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _o = _step3.value;

                if (_o.text.toLowerCase().indexOf(searchValue) == -1) {
                  _o.div.hide();

                  _o.checkbox.prop('checked', false);
                } else {
                  _o.div.show();

                  _o.checkbox.prop('checked', true);
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
            }
          }
        });

        if (!select.fullHeader) {
          search.addClass('d-flex flex-row');
          search.append(create.smallButton).children().last().text(text.filter).addClass('px-3 btn-primary').on('click', filter);
        }
      }

      var body = select.dropdownMenu.append(create.div).children().last().addClass('px-2' + (select.multiple ? ' pt-3' : ''));

      if (select.multiple) {
        select.selectAllDiv = body.append(create.div).children().last().addClass('custom-control custom-checkbox');
        select.selectAllCheckbox = select.selectAllDiv.append(create.checkbox).children().last().attr('id', select.name + '_selectAll').on('change', function () {
          var checked = $(this).is(':checked');

          var _iterator4 = _createForOfIteratorHelper(select.options),
              _step4;

          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var o = _step4.value;
              o.checkbox.prop('checked', checked);
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        });
        select.selectAllLabel = select.selectAllDiv.append(create.label).children().last().attr('for', select.name + '_selectAll').text(text.selectAll);

        var _iterator5 = _createForOfIteratorHelper(select.options),
            _step5;

        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var o = _step5.value;
            o.div = body.append(create.div).children().last().addClass('custom-control custom-checkbox');
            o.checkbox = o.div.append(create.checkbox).children().last().attr('id', select.name + '_' + o.value).attr('checked', o.selected).on('change', function () {
              var checked;
              var unchecked;

              var _iterator6 = _createForOfIteratorHelper(select.options),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var _o2 = _step6.value;

                  if ($(_o2.checkbox).is(':checked')) {
                    checked = true;
                  } else {
                    unchecked = true;
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
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
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
      } else {
        var _iterator7 = _createForOfIteratorHelper(select.options),
            _step7;

        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _o3 = _step7.value;
            _o3.div = body.append(create.div).children().last().addClass('custom-control custom-checkbox');
            _o3.checkbox = _o3.div.append(create.checkbox).children().last().attr('id', select.name + '_' + _o3.value).attr('checked', _o3.selected).on('change', function () {
              var _iterator8 = _createForOfIteratorHelper(select.options),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _o4 = _step8.value;

                  _o4.element.prop('selected', _o4.checkbox.is(':checked'));
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              $('#form').submit();
            });
            _o3.label = _o3.div.append(create.label).children().last().attr('for', select.name + '_' + _o3.value).text(_o3.text);
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    }

    function sortAsc() {
      paramsArray["delete"]('sortDesc');
      paramsArray.set('sortAsc', select.name);
      location.assign(location.origin + location.pathname + '?' + paramsArray.toString());
    }

    function filter() {
      var _iterator9 = _createForOfIteratorHelper(select.options),
          _step9;

      try {
        for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
          var o = _step9.value;
          o.element.attr('selected', o.checkbox.is(':checked'));
        }
      } catch (err) {
        _iterator9.e(err);
      } finally {
        _iterator9.f();
      }

      $('#form').submit();
    }

    function sortDesc() {
      paramsArray["delete"]('sortAsc');
      paramsArray.set('sortDesc', select.name);
      location.assign(location.origin + location.pathname + '?' + paramsArray.toString());
    }

    select.dropDownButton.on('hide.bs.dropdown', function (e) {
      if (e.clickEvent && $.contains(e.relatedTarget.parentNode, e.clickEvent.target)) {
        e.preventDefault();
      } else {
        select.dropdownMenu.empty();
      }
    });
  }
});
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
    return $(document.createElement('button')).addClass('btn btn-sm mx-1');
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

/***/ })

},[["./assets/js/document.js","runtime","vendors~app~document~form~login","vendors~app~document","vendors~document~form","vendors~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tdWx0aXNlbGVjdC9mcl9GUi5qcyJdLCJuYW1lcyI6WyIkIiwicmVxdWlyZSIsIlBvcHBlciIsIlVSTFNlYXJjaFBhcmFtcyIsImRvY3VtZW50IiwicmVhZHkiLCJwYXJhbXNBcnJheSIsImRlY29kZVVSSUNvbXBvbmVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwic2xpY2UiLCJvbiIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ0YXJnZXQiLCJmaW5kIiwiZWFjaCIsInZhbCIsImxlbmd0aCIsImF0dHIiLCJjcmVhdGVNdWx0aXNlbGVjdCIsInN0aWNreVRhYmxlSGVhZGVycyIsImhpZGUiLCJpbnB1dCIsImRlbGVnYXRlVGFyZ2V0IiwiaXMiLCJnZXRBbGwiLCJpbmRleCIsImluZGV4T2YiLCJkYXRhIiwic3BsaWNlIiwicHVzaCIsImZvckVhY2giLCJlIiwiYXBwZW5kIiwiYXNzaWduIiwib3JpZ2luIiwicGF0aG5hbWUiLCJ0b1N0cmluZyIsIm5vdCIsImNoZWNrYm94ZXMiLCJwcm9wIiwibGluZUNoZWNrZWQiLCJlbXB0eSIsImFqYXgiLCJ1cmwiLCJyZWxhdGVkVGFyZ2V0IiwidHlwZSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJodG1sIiwiZ2V0RGV0YWlsIiwiaGFzQ2xhc3MiLCJ0cmlnZ2VyIiwic3VibWl0IiwidGhhdCIsInBhcmVudCIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJnZXRSZXZpZXciLCJtZXRob2QiLCJzZXJpYWxpemVBcnJheSIsImNoZWNrZWQiLCJ1bmNoZWNrZWQiLCJhcnJheSIsImNoZWNrYm94IiwiSlNPTiIsInN0cmluZ2lmeSIsInNob3ciLCJtdWx0aXBsZUF0dHIiLCJuIiwibWF0Y2giLCJuYW1lIiwic2VsZWN0IiwiZWxlbWVudCIsIm11bHRpcGxlIiwidGl0bGUiLCJsb2NhbGUiLCJmdWxsSGVhZGVyIiwib3B0aW9ucyIsInZhbHVlIiwidGV4dCIsInNlbGVjdGVkIiwiZHJvcGRvd25NZW51IiwiY3JlYXRlIiwiZGl2IiwiY2hpbGRyZW4iLCJsYXN0IiwiY3NzIiwiZHJvcERvd25CdXR0b24iLCJjcmVhdGVNZW51IiwiaGVhZGVyIiwic21hbGxCdXR0b24iLCJpY29uIiwiYXJyb3dVcCIsImdldCIsInNvcnRBc2MiLCJmaWx0ZXIiLCJhcnJvd0Rvd24iLCJzb3J0RGVzYyIsInNlYXJjaFZhbHVlIiwidG9Mb3dlckNhc2UiLCJzZWxlY3RBbGxEaXYiLCJvIiwiYm9keSIsInNlbGVjdEFsbENoZWNrYm94Iiwic2VsZWN0QWxsTGFiZWwiLCJsYWJlbCIsInNlbGVjdEFsbCIsInNldCIsImNsaWNrRXZlbnQiLCJjb250YWlucyIsInBhcmVudE5vZGUiLCJjcmVhdGVFbGVtZW50IiwicmFkaW8iLCJidXR0b24iLCJub25lU2VsZWN0ZWQiLCJtdWx0aXBsZVNlcGFyYXRvciIsInJvb3QiLCJmYWN0b3J5IiwidW5kZWZpbmVkIiwiZGVmaW5lIiwiYTAiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLDhEQUFELENBQXRCOztBQUNBQSxtQkFBTyxDQUFDLGlHQUFELENBQVA7O0FBRUFBLG1CQUFPLENBQUMsd0RBQUQsQ0FBUCxDLENBRUE7OztBQUNBQSxtQkFBTyxDQUFDLGdFQUFELENBQVA7O0FBRUEsSUFBTUUsZUFBZSxHQUFHRixtQkFBTyxDQUFDLDBGQUFELENBQS9COztBQUVBRCxDQUFDLENBQUNJLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlB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Ozs7Ozs7Ozs7OztBQzdrQkEsV0FBVW9CLElBQVYsRUFBZ0JDLE9BQWhCLEVBQXlCO0FBQ3pCLE1BQUlELElBQUksS0FBS0UsU0FBVCxJQUFzQmpILE1BQU0sS0FBS2lILFNBQXJDLEVBQWdERixJQUFJLEdBQUcvRyxNQUFQOztBQUNoRCxNQUFJLElBQUosRUFBZ0Q7QUFDL0M7QUFDQWtILHFDQUFPLENBQUMseUVBQUQsQ0FBRCxtQ0FBYSxVQUFVQyxFQUFWLEVBQWM7QUFDaEMsYUFBUUgsT0FBTyxDQUFDRyxFQUFELENBQWY7QUFDQSxLQUZLO0FBQUEsb0dBQU47QUFHQSxHQUxELE1BS08sRUFPTjtBQUNELENBZkEsRUFlQyxJQWZELEVBZU8sVUFBVUMsTUFBVixFQUFrQjtBQUV6QixHQUFDLFVBQVU1SCxDQUFWLEVBQWE7QUFDYjs7Ozs7Ozs7O0FBU0EsR0FWRCxFQVVHNEgsTUFWSDtBQVlBLENBN0JBLENBQUQsQyIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuY29uc3QgUG9wcGVyID0gcmVxdWlyZSgncG9wcGVyLmpzJyk7XHJcbnJlcXVpcmUoJ3N0aWNreS10YWJsZS1oZWFkZXJzJyk7XHJcblxyXG5yZXF1aXJlKCcuLi9jc3MvZG9jdW1lbnQuc2NzcycpO1xyXG5cclxuLy9yZXF1aXJlKCcuL211bHRpc2VsZWN0L211bHRpc2VsZWN0LmpzJyk7XHJcbnJlcXVpcmUoJy4vbXVsdGlzZWxlY3QvZnJfRlIuanMnKTtcclxuXHJcbmNvbnN0IFVSTFNlYXJjaFBhcmFtcyA9IHJlcXVpcmUoJ0B1bmdhcC91cmwtc2VhcmNoLXBhcmFtcy9janMnKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdHZhciBwYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc2xpY2UoMSkpKTtcclxuXHRcclxuXHQkKCcjZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQ7XHJcblx0XHQkKGV2ZW50LnRhcmdldCkuZmluZCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCQodGhpcykudmFsKCkgID09ICcnIHx8ICEkKHRoaXMpLnZhbCgpPy5sZW5ndGgpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZm9ybScpLmZpbmQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRjcmVhdGVNdWx0aXNlbGVjdCh0aGlzKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCd0YWJsZScpLnN0aWNreVRhYmxlSGVhZGVycygpO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcclxuXHRcclxuXHQkKCcjZGlzcGxheScpLmZpbmQoJ2EnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHJcblx0XHRpZiAoaW5wdXQgPSAkKGV2ZW50LmRlbGVnYXRlVGFyZ2V0KS5maW5kKCdpbnB1dCcpKSB7XHJcblx0XHRcdGlucHV0LmF0dHIoJ2NoZWNrZWQnLCAhaW5wdXQuaXMoJzpjaGVja2VkJykpO1xyXG5cdFx0XHR2YXIgaGlkZSA9IHBhcmFtc0FycmF5LmdldEFsbCgnaGlkZVtdJyk7XHJcblx0XHRcdHZhciBpbmRleCA9IGhpZGUuaW5kZXhPZihpbnB1dC5kYXRhKCd2YWx1ZScpKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChpbnB1dC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRoaWRlLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChpbmRleCA9PSAtMSAmJiBpbnB1dC5kYXRhKCd2YWx1ZScpKSB7XHJcblx0XHRcdFx0XHRoaWRlLnB1c2goaW5wdXQuZGF0YSgndmFsdWUnKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHBhcmFtc0FycmF5LmRlbGV0ZSgnaGlkZVtdJyk7XHJcblx0XHRcdGhpZGUuZm9yRWFjaChlID0+IHBhcmFtc0FycmF5LmFwcGVuZCgnaGlkZVtdJywgZSkpO1xyXG5cdFx0XHRsb2NhdGlvbi5hc3NpZ24obG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWUgKyAnPycgKyBwYXJhbXNBcnJheS50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZGlzcGxheScpLm5vdCgnYScpLm9uKCdjaGFuZ2UgY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdHZhciBjaGVja2JveGVzID0gW107XHJcblx0XHJcblx0JCgndGFibGUnKS5maW5kKCdpbnB1dCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdGlmICgkKHRoaXMpLnByb3AoJ3R5cGUnKSA9PSAnY2hlY2tib3gnKSB7XHJcblx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBsaW5lQ2hlY2tlZCk7XHJcblx0XHRcdGlmICgkKHRoaXMpLnByb3AoJ2lkJykgIT0gJ2NoZWNrX2FsbCcpIHtcclxuXHRcdFx0XHRjaGVja2JveGVzLnB1c2goJCh0aGlzKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZGV0YWlsJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHJcblx0XHQkKCcubW9kYWwtYm9keScpXHJcblx0XHRcdC5lbXB0eSgpXHJcblx0XHRcdC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPicgK1xyXG5cdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPicgK1xyXG5cdFx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPicgK1xyXG5cdFx0XHRcdFx0XHQnPC9kaXY+JyArXHJcblx0XHRcdFx0XHQnPC9kaXY+Jyk7XHJcblx0XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR1cmwgOiAkKGV2ZW50LnJlbGF0ZWRUYXJnZXQpLmRhdGEoJ3VybCcpLFxyXG5cdFx0XHR0eXBlOiAnR0VUJyxcclxuXHRcdFx0XHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG5cdFx0XHRcdCQoJy5tb2RhbC1ib2R5JykuZW1wdHkoKTtcclxuXHRcdFx0XHQkKCcubW9kYWwtYm9keScpLmh0bWwocmVzdWx0KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKCcjdmVyc2lvbl90YWJzJykuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdGdldERldGFpbChldmVudC50YXJnZXQpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfZWRpdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnI2Zvcm0nKS5wcm9wKCdhY3Rpb24nLCAkKHRoaXMpLmRhdGEoJ3VybCcpKTtcclxuXHRcdCQoJyNmb3JtJykuc3VibWl0KCk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI2RvY3VtZW50X21vdmUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJyNmb3JtJykucHJvcCgnYWN0aW9uJywgJCh0aGlzKS5kYXRhKCd1cmwnKSk7XHJcblx0XHQkKCcjZm9ybScpLnN1Ym1pdCgpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJyNmb3JtJykucHJvcCgnYWN0aW9uJywgJCh0aGlzKS5kYXRhKCd1cmwnKSk7XHJcblx0XHQkKCcjZm9ybScpLnN1Ym1pdCgpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2ZXJzaW9uX25ldycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnI2Zvcm0nKS5wcm9wKCdhY3Rpb24nLCAkKHRoaXMpLmRhdGEoJ3VybCcpKTtcclxuXHRcdCQoJyNmb3JtJykuc3VibWl0KCk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3ZlcnNpb25fZWRpdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnI2Zvcm0nKS5wcm9wKCdhY3Rpb24nLCAkKHRoaXMpLmRhdGEoJ3VybCcpKTtcclxuXHRcdCQoJyNmb3JtJykuc3VibWl0KCk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3ZlcnNpb25fZGVsZXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKCcjZm9ybScpLnByb3AoJ2FjdGlvbicsICQodGhpcykuZGF0YSgndXJsJykpO1xyXG5cdFx0JCgnI2Zvcm0nKS5zdWJtaXQoKTtcclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIGdldERldGFpbFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0ZnVuY3Rpb24gZ2V0RGV0YWlsKHRoYXQpIHtcclxuXHRcdCQodGhhdCkucGFyZW50KCkuZmluZCgnYS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKHRoYXQpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFxyXG5cdFx0JCgnI3ZlcnNpb24nKVxyXG5cdFx0XHQuZW1wdHkoKVxyXG5cdFx0XHQuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj4nICtcclxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+JyArXHJcblx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPicgK1xyXG5cdFx0XHRcdFx0JzwvZGl2PicgK1xyXG5cdFx0XHRcdCc8L2Rpdj4nKTtcclxuXHRcdFxyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsIDogJCh0aGF0KS5kYXRhKCd1cmwnKSxcclxuXHRcdFx0dHlwZTogJ0dFVCcsXHJcblx0XHRcdFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuXHRcdFx0XHQkKCcjdmVyc2lvbicpLmVtcHR5KCk7XHJcblx0XHRcdFx0JCgnI3ZlcnNpb24nKS5odG1sKHJlc3VsdCk7XHJcblx0XHRcdFx0JCgnI3Jldmlld190YWJzJykuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdGdldFJldmlldyhldmVudC50YXJnZXQpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8qXHJcblx0XHRcdFx0XHQkKHRoaXMpLm9uKCdzaG93LmJzLnRhYicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdGV2ZW50LnRhcmdldC50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHQqL1xyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBnZXRSZXZpZXdcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGdldFJldmlldyh0aGF0KSB7XHJcblx0XHQkKHRoYXQpLnBhcmVudCgpLmZpbmQoJ2EuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCh0aGF0KS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcclxuXHRcdHZhciB1cmwgPSAkKHRoYXQpLmRhdGEoJ3VybCcpO1xyXG5cdFx0dmFyIG1ldGhvZCA9ICQoJ2Zvcm1bbmFtZT1cInJldmlld1wiXScpLmF0dHIoJ21ldGhvZCcpIHx8ICdHRVQnO1xyXG5cdFx0dmFyIGRhdGEgPSAkKCdmb3JtW25hbWU9XCJyZXZpZXdcIl0nKS5zZXJpYWxpemVBcnJheSgpXHJcblx0XHRcclxuXHRcdCQoJyNyZXZpZXcnKVxyXG5cdFx0XHQuZW1wdHkoKVxyXG5cdFx0XHQuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj4nICtcclxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc21cIiByb2xlPVwic3RhdHVzXCI+JyArXHJcblx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPicgK1xyXG5cdFx0XHRcdFx0JzwvZGl2PicgK1xyXG5cdFx0XHRcdCc8L2Rpdj4nKTtcclxuXHRcdFxyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsIDogdXJsLFxyXG5cdFx0XHR0eXBlOiBtZXRob2QsXHJcblx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuXHRcdFx0XHQkKCcjcmV2aWV3JykuZW1wdHkoKTtcclxuXHRcdFx0XHQkKCcjcmV2aWV3JykuaHRtbChyZXN1bHQpO1xyXG5cdFx0XHRcdCQoJyNyZXZpZXcnKS5maW5kKCdidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGdldFJldmlldyh0aGlzKVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIGxpbmVDaGVja2VkXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHRmdW5jdGlvbiBsaW5lQ2hlY2tlZCgpIHtcclxuXHRcdFxyXG5cdFx0dmFyIGNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdHZhciB1bmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcclxuXHRcdGlmICgkKHRoaXMpLnByb3AoJ2lkJykgPT0gJ2NoZWNrX2FsbCcpIHtcclxuXHRcdFx0XHJcblx0XHRcdCQoJ3RhYmxlJykuZmluZCgnaW5wdXQnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNoZWNrZWQgPSAkKCcjY2hlY2tfYWxsJykuaXMoJzpjaGVja2VkJyk7XHJcblx0XHRcdFx0dW5jaGVja2VkID0gIWNoZWNrZWQ7XHJcblx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFxyXG5cdFx0XHQkKCd0YWJsZScpLmZpbmQoJ2lucHV0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5wcm9wKCdpZCcpICE9ICdjaGVja19hbGwnKSB7XHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChjaGVja2VkICYmIHVuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKGNoZWNrZWQpIHtcclxuXHRcdFx0dmFyIGFycmF5ID0gW107XHJcblx0XHRcdGZvciAoY29uc3QgY2hlY2tib3ggb2YgY2hlY2tib3hlcykge1xyXG5cdFx0XHRcdGlmIChjaGVja2JveC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0YXJyYXkucHVzaChjaGVja2JveC52YWwoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCQoJyN2ZXJzaW9ucycpLnZhbChKU09OLnN0cmluZ2lmeShhcnJheSkpO1xyXG5cdFx0XHRcclxuXHRcdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5zaG93KCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuc2hvdygpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuc2hvdygpO1xyXG5cdFx0XHQkKCcjdmVyc2lvbl9tZW51Jykuc2hvdygpO1x0XHJcblx0XHR9IGVsc2UgaWYodW5jaGVja2VkKSB7XHJcblx0XHRcdCQoJyN2ZXJzaW9uJykudmFsKCcnKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjdmVyc2lvbl9tZW51JykuaGlkZSgpO1x0XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gbXVsdGlTZWxlY3RcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGNyZWF0ZU11bHRpc2VsZWN0KHRoYXQpIHtcclxuXHRcdFxyXG5cdFx0dmFyIG11bHRpcGxlQXR0ciA9ICh0eXBlb2YgJCh0aGF0KS5hdHRyKCdtdWx0aXBsZScpICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmICQodGhhdCkuYXR0cignbXVsdGlwbGUnKSAhPT0gZmFsc2UpO1xyXG5cdFx0XHJcblx0XHRpZihtdWx0aXBsZUF0dHIpIHtcclxuXHRcdFx0aWYgKG4gPSAkKHRoYXQpLnByb3AoJ25hbWUnKS5tYXRjaCgvKC4rKVxcW1xcXSQvaSkpIHtcclxuXHRcdFx0XHR2YXIgbmFtZSA9IG5bMV07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgbmFtZSA9ICQodGhhdCkucHJvcCgnbmFtZScpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR2YXIgc2VsZWN0ID0ge1xyXG5cdFx0XHRcdGVsZW1lbnQ6ICQodGhhdCksXHJcblx0XHRcdFx0bmFtZTogbmFtZSxcclxuXHRcdFx0XHRtdWx0aXBsZTogbXVsdGlwbGVBdHRyLFxyXG5cdFx0XHRcdHRpdGxlOiAkKHRoYXQpLmRhdGEoJ3RpdGxlJyksXHJcblx0XHRcdFx0bG9jYWxlOiAkKHRoYXQpLmRhdGEoJ2xvY2FsZScpLFxyXG5cdFx0XHRcdHRhcmdldDogJCh0aGF0KS5kYXRhKCd0YXJnZXQnKSxcclxuXHRcdFx0XHRmdWxsSGVhZGVyOiAkKHRoYXQpLmRhdGEoJ2Z1bGxfaGVhZGVyJyksXHJcblx0XHRcdFx0b3B0aW9uczogW10sXHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQkKHRoYXQpLmZpbmQoJ29wdGlvbicpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHNlbGVjdC5vcHRpb25zLnB1c2goe1xyXG5cdFx0XHRcdGVsZW1lbnQ6ICQodGhpcyksXHJcblx0XHRcdFx0dmFsdWU6ICQodGhpcykuYXR0cigndmFsdWUnKSxcclxuXHRcdFx0XHR0ZXh0OiAkKHRoaXMpLnRleHQoKSxcclxuXHRcdFx0XHRzZWxlY3RlZDogJCh0aGlzKS5hdHRyKCdzZWxlY3RlZCcpLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRzZWxlY3QuZHJvcGRvd25NZW51ID0gJCgnIycgKyBzZWxlY3QudGFyZ2V0KS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdteC0xJylcclxuXHRcdFx0LmNzcygnbWluLXdpZHRoJywgJzE1ZW0nKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRzZWxlY3QuZHJvcERvd25CdXR0b24gPSAkKCcjJyArIHNlbGVjdC50YXJnZXQpLnBhcmVudCgpLnBhcmVudCgpO1xyXG5cdFx0XHJcblx0XHRzZWxlY3QuZHJvcERvd25CdXR0b24ub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBjcmVhdGVNZW51KTtcclxuXHJcblx0XHRmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG5cdFx0XHRcclxuXHRcdFx0c2VsZWN0LmRyb3Bkb3duTWVudS5jc3MoJ3pJbmRleCcsIDEpO1xyXG5cdFx0XHRzZWxlY3QuZHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoc2VsZWN0Lm11bHRpcGxlKSB7XHJcblx0XHRcdFx0dmFyIGhlYWRlciA9IHNlbGVjdC5kcm9wZG93bk1lbnUuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtY2VudGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLWRhcmsgcGItMiBweC0xJylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRcdGlmIChzZWxlY3QuZnVsbEhlYWRlcikge1xyXG5cdFx0XHRcdFx0aGVhZGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd1VwKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTIgJyArIChwYXJhbXNBcnJheS5nZXQoJ3NvcnRBc2MnKSA9PSBzZWxlY3QubmFtZT8nYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOididG4tcHJpbWFyeScpKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgc29ydEFzYylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aGVhZGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC50ZXh0KHRleHQuZmlsdGVyKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTMgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZmlsdGVyKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRoZWFkZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChpY29uLmFycm93RG93bilcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdweC0yICcgKyAocGFyYW1zQXJyYXkuZ2V0KCdzb3J0RGVzYycpID09IHNlbGVjdC5uYW1lPydidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J2J0bi1wcmltYXJ5JykpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBzb3J0RGVzYylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aGVhZGVyLnRleHQoc2VsZWN0LnRpdGxlKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdFx0dmFyIHNlYXJjaCA9IHNlbGVjdC5kcm9wZG93bk1lbnUuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtY2VudGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLWRhcmsgcC0yJylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VhcmNoLmFwcGVuZChjcmVhdGUuaW5wdXQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHZhciBzZWFyY2hWYWx1ZSA9ICQodGhpcykudmFsKCkudG9Mb3dlckNhc2UoKVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHNlYXJjaFZhbHVlID09ICcnKSB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0LnNlbGVjdEFsbERpdi5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBvIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRvLmRpdi5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRvLmNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdC5zZWxlY3RBbGxEaXYuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG8udGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVmFsdWUpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG8uZGl2LmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0by5jaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0by5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvLmNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCFzZWxlY3QuZnVsbEhlYWRlcikge1xyXG5cdFx0XHRcdFx0c2VhcmNoLmFkZENsYXNzKCdkLWZsZXggZmxleC1yb3cnKTtcclxuXHRcdFx0XHRcdHNlYXJjaC5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQudGV4dCh0ZXh0LmZpbHRlcilcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdweC0zIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZpbHRlcilcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHZhciBib2R5ID0gc2VsZWN0LmRyb3Bkb3duTWVudS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTInICsgKChzZWxlY3QubXVsdGlwbGUpPycgcHQtMyc6JycpKVxyXG5cdFx0XHQ7XHJcblxyXG5cdFx0XHRpZiAoc2VsZWN0Lm11bHRpcGxlKSB7XHJcblx0XHRcdFx0c2VsZWN0LnNlbGVjdEFsbERpdiA9IGJvZHkuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5zZWxlY3RBbGxDaGVja2JveCA9IHNlbGVjdC5zZWxlY3RBbGxEaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ19zZWxlY3RBbGwnKVxyXG5cdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHZhciBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBvIG9mIHNlbGVjdC5vcHRpb25zKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRvLmNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsTGFiZWwgPSBzZWxlY3Quc2VsZWN0QWxsRGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnX3NlbGVjdEFsbCcpXHJcblx0XHRcdFx0XHQudGV4dCh0ZXh0LnNlbGVjdEFsbClcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChjb25zdCBvIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG8uZGl2ID0gYm9keS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvLmNoZWNrYm94ID0gby5kaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsIG8uc2VsZWN0ZWQpXHJcblx0XHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0dmFyIGNoZWNrZWQ7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHVuY2hlY2tlZDtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICgkKG8uY2hlY2tib3gpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKGNoZWNrZWQgJiYgdW5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsQ2hlY2tib3gucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsQ2hlY2tib3gucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5zZWxlY3RBbGxDaGVja2JveC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvLmxhYmVsID0gby5kaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIHNlbGVjdC5uYW1lICsgJ18nICsgby52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LnRleHQoby50ZXh0KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0by5kaXYgPSBib2R5LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG8uY2hlY2tib3ggPSBvLmRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfJyArIG8udmFsdWUpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgby5zZWxlY3RlZClcclxuXHRcdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdG8uZWxlbWVudC5wcm9wKCdzZWxlY3RlZCcsIG8uY2hlY2tib3guaXMoJzpjaGVja2VkJykpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQkKCcjZm9ybScpLnN1Ym1pdCgpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvLmxhYmVsID0gby5kaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIHNlbGVjdC5uYW1lICsgJ18nICsgby52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LnRleHQoby50ZXh0KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFx0XHQgXHJcblx0XHRmdW5jdGlvbiBzb3J0QXNjKCkge1xyXG5cdFx0XHRwYXJhbXNBcnJheS5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdHBhcmFtc0FycmF5LnNldCgnc29ydEFzYycsIHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0bG9jYXRpb24uYXNzaWduKGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lICsgJz8nICsgcGFyYW1zQXJyYXkudG9TdHJpbmcoKSk7XHJcblx0XHR9XHJcblx0XHRcdFxyXG5cdFx0ZnVuY3Rpb24gZmlsdGVyKCkge1xyXG5cdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRvLmVsZW1lbnQuYXR0cignc2VsZWN0ZWQnLCBvLmNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQkKCcjZm9ybScpLnN1Ym1pdCgpO1xyXG5cdFx0fVxyXG5cdFx0XHRcclxuXHRcdGZ1bmN0aW9uIHNvcnREZXNjKCkge1xyXG5cdFx0XHRwYXJhbXNBcnJheS5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0cGFyYW1zQXJyYXkuc2V0KCdzb3J0RGVzYycsIHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0bG9jYXRpb24uYXNzaWduKGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lICsgJz8nICsgcGFyYW1zQXJyYXkudG9TdHJpbmcoKSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHNlbGVjdC5kcm9wRG93bkJ1dHRvbi5vbignaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZihlLmNsaWNrRXZlbnQgJiYgJC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQucGFyZW50Tm9kZSwgZS5jbGlja0V2ZW50LnRhcmdldCkpIHtcclxuXHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZWxlY3QuZHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdFxyXG59KTtcclxuXHJcblx0dmFyIGNyZWF0ZSA9IHtcclxuXHRcdGRpdjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxyXG5cdFx0XHRcclxuXHRcdFx0O1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0aW5wdXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKVxyXG5cdFx0XHRcdC5hdHRyKCd0eXBlJywgJ3RleHQnKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbScpXHJcblx0XHRcdDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGNoZWNrYm94OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0XHQuYXR0cigndHlwZScsICdjaGVja2JveCcpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1pbnB1dCcpXHJcblx0XHRcdDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdHJhZGlvOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0XHQuYXR0cigndHlwZScsICdyYWRpbycpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1pbnB1dCcpXHJcblx0XHRcdDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGxhYmVsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSlcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWxhYmVsIHctMTAwIHRleHQtbm93cmFwJylcclxuXHRcdFx0O1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0YnV0dG9uOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXByaW1hcnknKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRzbWFsbEJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBteC0xJylcclxuXHRcdFx0O1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdH07XHJcblx0XHJcblx0dmFyIHRleHQgPSB7XHJcblx0ICAgIG5vbmVTZWxlY3RlZDogJ05vbmUgc2VsZWN0ZWQnLFxyXG5cdCAgICBtdWx0aXBsZVNlcGFyYXRvcjogJywgJyxcclxuXHQgICAgc2VsZWN0QWxsOiAnU2VsZWN0IGFsbCcsXHJcblx0ICAgIGZpbHRlcjogJ0ZpbHRlcidcclxuXHR9O1xyXG5cdFxyXG5cdHZhciBpY29uID0ge1xyXG5cdFx0YXJyb3dVcDpcclxuXHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1hcnJvdy1iYXItdXBcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS4zNTQgNS44NTRhLjUuNSAwIDAwMC0uNzA4bC0zLTNhLjUuNSAwIDAwLS43MDggMGwtMyAzYS41LjUgMCAxMC43MDguNzA4TDggMy4yMDdsMi42NDYgMi42NDdhLjUuNSAwIDAwLjcwOCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggMTBhLjUuNSAwIDAwLjUtLjVWM2EuNS41IDAgMDAtMSAwdjYuNWEuNS41IDAgMDAuNS41em0tNC44IDEuNmMwLS4yMi4xOC0uNC40LS40aDguOGEuNC40IDAgMDEwIC44SDMuNmEuNC40IDAgMDEtLjQtLjR6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcdFxyXG5cdFx0YXJyb3dEb3duOlxyXG5cdFx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktYXJyb3ctYmFyLWRvd25cIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuMzU0IDEwLjE0NmEuNS41IDAgMDEwIC43MDhsLTMgM2EuNS41IDAgMDEtLjcwOCAwbC0zLTNhLjUuNSAwIDAxLjcwOC0uNzA4TDggMTIuNzkzbDIuNjQ2LTIuNjQ3YS41LjUgMCAwMS43MDggMHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCA2YS41LjUgMCAwMS41LjVWMTNhLjUuNSAwIDAxLTEgMFY2LjVBLjUuNSAwIDAxOCA2ek0yIDMuNWEuNS41IDAgMDEuNS0uNWgxMWEuNS41IDAgMDEwIDFoLTExYS41LjUgMCAwMS0uNS0uNXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4iLCIoZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcclxuXHRpZiAocm9vdCA9PT0gdW5kZWZpbmVkICYmIHdpbmRvdyAhPT0gdW5kZWZpbmVkKSByb290ID0gd2luZG93O1xyXG5cdGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcclxuXHRcdC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSB1bmxlc3MgYW1kTW9kdWxlSWQgaXMgc2V0XHJcblx0XHRkZWZpbmUoW1wianF1ZXJ5XCJdLCBmdW5jdGlvbiAoYTApIHtcclxuXHRcdFx0cmV0dXJuIChmYWN0b3J5KGEwKSk7XHJcblx0XHR9KTtcclxuXHR9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XHJcblx0XHQvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcclxuXHRcdC8vIG9ubHkgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgdGhhdCBzdXBwb3J0IG1vZHVsZS5leHBvcnRzLFxyXG5cdFx0Ly8gbGlrZSBOb2RlLlxyXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KHJlcXVpcmUoXCJqcXVlcnlcIikpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRmYWN0b3J5KHJvb3RbXCJqUXVlcnlcIl0pO1xyXG5cdH1cclxufSh0aGlzLCBmdW5jdGlvbiAoalF1ZXJ5KSB7XHJcblx0XHJcblx0KGZ1bmN0aW9uICgkKSB7XHJcblx0XHQvKlxyXG5cdFx0JC5mbi5tdWx0aXNlbGVjdC5kZWZhdWx0cyA9IHtcclxuXHRcdCAgICBub25lU2VsZWN0ZWRUZXh0OiAnQXVjdW5lIHPDqWxlY3Rpb24nLFxyXG5cdFx0ICAgIG5vbmVSZXN1bHRzVGV4dDogJ0F1Y3VuIHLDqXN1bHRhdCBwb3VyIHswfScsXHJcblx0XHQgICAgbXVsdGlwbGVTZXBhcmF0b3I6ICcsICcsXHJcblx0XHQgICAgc2VsZWN0QWxsVGV4dDogJ1RvdXQgc8OpbGVjdGlvbm5lcicsXHJcblx0XHQgICAgZmlsdGVyVGV4dDogJ0ZpbHRyZXInXHJcblx0XHR9O1xyXG5cdFx0Ki9cclxuXHR9KShqUXVlcnkpO1xyXG5cdFxyXG59KSk7Il0sInNvdXJjZVJvb3QiOiIifQ==