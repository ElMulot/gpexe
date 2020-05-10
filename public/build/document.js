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

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! sticky-table-headers */ "./node_modules/sticky-table-headers/js/jquery.stickytableheaders.js");

__webpack_require__(/*! ../css/document.scss */ "./assets/css/document.scss"); //require('./multiselect/multiselect.js');
//require('./multiselect/fr_FR.js');


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
  $('td').find('input[type="checkbox"]').each(function () {
    $(this).prop('checked', false);
    $(this).on('click', lineChecked);
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
  $('#document_edit').on('click', function () {
    location.assign($(this).data('url') + '?' + paramsArray.toString());
    return false;
  });
  $('#document_move').on('click', function (event) {
    location.assign($(this).data('url') + '?' + paramsArray.toString());
    return false;
  });
  $('#document_delete').on('click', function (event) {
    location.assign($(this).data('url') + '?' + paramsArray.toString());
    return false;
  });
  $('#version_new').on('click', function (event) {
    location.assign($(this).data('url') + '?' + paramsArray.toString());
    return false;
  });
  $('#version_edit').on('click', function (event) {
    location.assign($(this).data('url') + '?' + paramsArray.toString());
    return false;
  });
  $('#version_delete').on('click', function (event) {
    location.assign($(this).data('url') + '?' + paramsArray.toString());
    return false;
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
      $('table').find('input[type="checkbox"]').each(function () {
        checked = $('#check_all').is(':checked');
        unchecked = !checked;
        $(this).prop('checked', checked);
      });
    } else {
      $('table').find('input[type="checkbox"]').each(function () {
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

    paramsArray["delete"]('id[]');

    if (checked) {
      $('table').find('input[type="checkbox"]').each(function () {
        if ($(this).prop('id') != 'check_all' && $(this).is(':checked')) {
          paramsArray.append('id[]', $(this).val());
        }
      });
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
      $(that).prepend(create.option).children().first().text(text.notApplicable);

      if ($(that).find('option[selected]').length === 0) {
        $(that).children().first().attr('selected', true);
      }
    }

    var select = {
      element: $(that),
      name: name,
      multiple: multipleAttr,
      title: $(that).data('title'),
      locale: $(that).data('locale'),
      target: $(that).data('target'),
      fullHeader: $(that).data('full-header') || false,
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
          search.append(create.smallButton).children().last().text(text.filter).addClass('px-3 btn-primary').on('click', filter);
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
            _o3.checkbox = _o3.div.append(create.checkbox).children().last().attr('id', select.name + '_' + _o3.value).attr('checked', _o3.selected).on('click', function () {
              body.find('input').not(this).prop('checked', false);

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
              return true;
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
      paramsArray["delete"]('sortDesc');
      paramsArray.set('sortAsc', select.name);
      location.assign(location.origin + location.pathname + '?' + paramsArray.toString());
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
  option: function option() {
    return $(document.createElement('option')).attr('value', '');
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
  notApplicable: 'n/a',
  filter: 'Filter'
};
var icon = {
  arrowUp: '<svg class="bi bi-arrow-bar-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 5.854a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L8 3.207l2.646 2.647a.5.5 0 00.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 10a.5.5 0 00.5-.5V3a.5.5 0 00-1 0v6.5a.5.5 0 00.5.5zm-4.8 1.6c0-.22.18-.4.4-.4h8.8a.4.4 0 010 .8H3.6a.4.4 0 01-.4-.4z" clip-rule="evenodd"/>' + '</svg>',
  arrowDown: '<svg class="bi bi-arrow-bar-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 10.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L8 12.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 6a.5.5 0 01.5.5V13a.5.5 0 01-1 0V6.5A.5.5 0 018 6zM2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>' + '</svg>'
};

/***/ })

},[["./assets/js/document.js","runtime","vendors~app~document~form~login","vendors~document~form","vendors~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiVVJMU2VhcmNoUGFyYW1zIiwiZG9jdW1lbnQiLCJyZWFkeSIsInBhcmFtc0FycmF5IiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzbGljZSIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImZpbmQiLCJlYWNoIiwidmFsIiwibGVuZ3RoIiwiYXR0ciIsImNyZWF0ZU11bHRpc2VsZWN0Iiwic3RpY2t5VGFibGVIZWFkZXJzIiwiaGlkZSIsImlucHV0IiwiZGVsZWdhdGVUYXJnZXQiLCJpcyIsImdldEFsbCIsImluZGV4IiwiaW5kZXhPZiIsImRhdGEiLCJzcGxpY2UiLCJwdXNoIiwiZm9yRWFjaCIsImUiLCJhcHBlbmQiLCJhc3NpZ24iLCJvcmlnaW4iLCJwYXRobmFtZSIsInRvU3RyaW5nIiwibm90IiwicHJvcCIsImxpbmVDaGVja2VkIiwiZW1wdHkiLCJhamF4IiwidXJsIiwicmVsYXRlZFRhcmdldCIsInR5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwiaHRtbCIsImdldERldGFpbCIsImhhc0NsYXNzIiwidHJpZ2dlciIsInRoYXQiLCJwYXJlbnQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZ2V0UmV2aWV3IiwibWV0aG9kIiwic2VyaWFsaXplQXJyYXkiLCJjaGVja2VkIiwidW5jaGVja2VkIiwic2hvdyIsIm11bHRpcGxlQXR0ciIsIm4iLCJtYXRjaCIsIm5hbWUiLCJwcmVwZW5kIiwiY3JlYXRlIiwib3B0aW9uIiwiY2hpbGRyZW4iLCJmaXJzdCIsInRleHQiLCJub3RBcHBsaWNhYmxlIiwic2VsZWN0IiwiZWxlbWVudCIsIm11bHRpcGxlIiwidGl0bGUiLCJsb2NhbGUiLCJmdWxsSGVhZGVyIiwib3B0aW9ucyIsInZhbHVlIiwic2VsZWN0ZWQiLCJkcm9wZG93bk1lbnUiLCJkaXYiLCJsYXN0IiwiY3NzIiwiZHJvcERvd25CdXR0b24iLCJjcmVhdGVNZW51IiwiaGVhZGVyIiwic21hbGxCdXR0b24iLCJpY29uIiwiYXJyb3dVcCIsImdldCIsInNvcnRBc2MiLCJmaWx0ZXIiLCJhcnJvd0Rvd24iLCJzb3J0RGVzYyIsInNlYXJjaFZhbHVlIiwidG9Mb3dlckNhc2UiLCJzZWxlY3RBbGxEaXYiLCJvIiwiY2hlY2tib3giLCJib2R5Iiwic2VsZWN0QWxsQ2hlY2tib3giLCJzZWxlY3RBbGxMYWJlbCIsImxhYmVsIiwic2VsZWN0QWxsIiwic3VibWl0Iiwic2V0IiwiY2xpY2tFdmVudCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsImNyZWF0ZUVsZW1lbnQiLCJidXR0b24iLCJub25lU2VsZWN0ZWQiLCJtdWx0aXBsZVNlcGFyYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQUEsbUJBQU8sQ0FBQyxpR0FBRCxDQUFQOztBQUVBQSxtQkFBTyxDQUFDLHdEQUFELENBQVAsQyxDQUVBO0FBQ0E7OztBQUVBLElBQU1DLGVBQWUsR0FBR0QsbUJBQU8sQ0FBQywwRkFBRCxDQUEvQjs7QUFFQUQsQ0FBQyxDQUFDRyxRQUFELENBQUQsQ0FBWUMsS0FBWixDQUFrQixZQUFXO0FBRTVCLE1BQUlDLFdBQVcsR0FBRyxJQUFJSCxlQUFKLENBQW9CSSxrQkFBa0IsQ0FBQ0MsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFoQixDQUF1QkMsS0FBdkIsQ0FBNkIsQ0FBN0IsQ0FBRCxDQUF0QyxDQUFsQjtBQUVBVixHQUFDLENBQUMsT0FBRCxDQUFELENBQVdXLEVBQVgsQ0FBYyxRQUFkLEVBQXdCLFVB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TDlGLElBREssQ0FDQSxPQURBLEVBQ1MsRUFEVCxDQUFQO0FBR0EsR0F6Qlc7QUEyQlp1RixPQUFLLEVBQUUsaUJBQVc7QUFDakIsV0FBTzFHLENBQUMsQ0FBQ0csUUFBUSxDQUFDOEcsYUFBVCxDQUF1QixPQUF2QixDQUFELENBQUQsQ0FDTHpELFFBREssQ0FDSSx3Q0FESixDQUFQO0FBR0EsR0EvQlc7QUFpQ1owRCxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsV0FBT2xILENBQUMsQ0FBQ0csUUFBUSxDQUFDOEcsYUFBVCxDQUF1QixRQUF2QixDQUFELENBQUQsQ0FDTHpELFFBREssQ0FDSSxpQkFESixDQUFQO0FBR0EsR0FyQ1c7QUF1Q1prQyxhQUFXLEVBQUUsdUJBQVc7QUFDdkIsV0FBTzFGLENBQUMsQ0FBQ0csUUFBUSxDQUFDOEcsYUFBVCxDQUF1QixRQUF2QixDQUFELENBQUQsQ0FDTHpELFFBREssQ0FDSSxpQkFESixDQUFQO0FBR0E7QUEzQ1csQ0FBYjtBQStDQSxJQUFJZ0IsSUFBSSxHQUFHO0FBQ1AyQyxjQUFZLEVBQUUsZUFEUDtBQUVQQyxtQkFBaUIsRUFBRSxJQUZaO0FBR1BULFdBQVMsRUFBRSxZQUhKO0FBSVBsQyxlQUFhLEVBQUUsS0FKUjtBQUtQc0IsUUFBTSxFQUFFO0FBTEQsQ0FBWDtBQVFBLElBQUlKLElBQUksR0FBRztBQUNWQyxTQUFPLEVBQ04seUlBQ0MscUtBREQsR0FFQyw4S0FGRCxHQUdBLFFBTFM7QUFPVkksV0FBUyxFQUNQLDJJQUNHLHdLQURILEdBRUcscUtBRkgsR0FHQTtBQVhRLENBQVgsQyIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxucmVxdWlyZSgnc3RpY2t5LXRhYmxlLWhlYWRlcnMnKTtcclxuXHJcbnJlcXVpcmUoJy4uL2Nzcy9kb2N1bWVudC5zY3NzJyk7XHJcblxyXG4vL3JlcXVpcmUoJy4vbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QuanMnKTtcclxuLy9yZXF1aXJlKCcuL211bHRpc2VsZWN0L2ZyX0ZSLmpzJyk7XHJcblxyXG5jb25zdCBVUkxTZWFyY2hQYXJhbXMgPSByZXF1aXJlKCdAdW5nYXAvdXJsLXNlYXJjaC1wYXJhbXMvY2pzJyk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcclxuXHR2YXIgcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpKSk7XHJcblx0XHJcblx0JCgnI2Zvcm0nKS5vbignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0O1xyXG5cdFx0JChldmVudC50YXJnZXQpLmZpbmQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICgkKHRoaXMpLnZhbCgpICA9PSAnJyB8fCAhJCh0aGlzKS52YWwoKT8ubGVuZ3RoKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI2Zvcm0nKS5maW5kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0Y3JlYXRlTXVsdGlzZWxlY3QodGhpcyk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgndGFibGUnKS5zdGlja3lUYWJsZUhlYWRlcnMoKTtcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfZWRpdCcpLmhpZGUoKTtcclxuXHQkKCcjZG9jdW1lbnRfbW92ZScpLmhpZGUoKTtcclxuXHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdCQoJyN2ZXJzaW9uX21lbnUnKS5oaWRlKCk7XHJcblx0XHJcblx0JCgnI2Rpc3BsYXknKS5maW5kKCdhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFxyXG5cdFx0aWYgKGlucHV0ID0gJChldmVudC5kZWxlZ2F0ZVRhcmdldCkuZmluZCgnaW5wdXQnKSkge1xyXG5cdFx0XHRpbnB1dC5hdHRyKCdjaGVja2VkJywgIWlucHV0LmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdFx0dmFyIGhpZGUgPSBwYXJhbXNBcnJheS5nZXRBbGwoJ2hpZGVbXScpO1xyXG5cdFx0XHR2YXIgaW5kZXggPSBoaWRlLmluZGV4T2YoaW5wdXQuZGF0YSgndmFsdWUnKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoaW5wdXQuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRpZiAoaW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdFx0aGlkZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRpZiAoaW5kZXggPT0gLTEgJiYgaW5wdXQuZGF0YSgndmFsdWUnKSkge1xyXG5cdFx0XHRcdFx0aGlkZS5wdXNoKGlucHV0LmRhdGEoJ3ZhbHVlJykpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRwYXJhbXNBcnJheS5kZWxldGUoJ2hpZGVbXScpO1xyXG5cdFx0XHRoaWRlLmZvckVhY2goZSA9PiBwYXJhbXNBcnJheS5hcHBlbmQoJ2hpZGVbXScsIGUpKTtcclxuXHRcdFx0bG9jYXRpb24uYXNzaWduKGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lICsgJz8nICsgcGFyYW1zQXJyYXkudG9TdHJpbmcoKSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI2Rpc3BsYXknKS5ub3QoJ2EnKS5vbignY2hhbmdlIGNsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCd0ZCcpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGxpbmVDaGVja2VkKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZGV0YWlsJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHJcblx0XHQkKCcubW9kYWwtYm9keScpXHJcblx0XHRcdC5lbXB0eSgpXHJcblx0XHRcdC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPicgK1xyXG5cdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPicgK1xyXG5cdFx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPicgK1xyXG5cdFx0XHRcdFx0XHQnPC9kaXY+JyArXHJcblx0XHRcdFx0XHQnPC9kaXY+Jyk7XHJcblx0XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR1cmwgOiAkKGV2ZW50LnJlbGF0ZWRUYXJnZXQpLmRhdGEoJ3VybCcpLFxyXG5cdFx0XHR0eXBlOiAnR0VUJyxcclxuXHRcdFx0XHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG5cdFx0XHRcdCQoJy5tb2RhbC1ib2R5JykuZW1wdHkoKTtcclxuXHRcdFx0XHQkKCcubW9kYWwtYm9keScpLmh0bWwocmVzdWx0KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKCcjdmVyc2lvbl90YWJzJykuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdGdldERldGFpbChldmVudC50YXJnZXQpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfZWRpdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyAnPycgKyBwYXJhbXNBcnJheS50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfbW92ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArICc/JyArIHBhcmFtc0FycmF5LnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyAnPycgKyBwYXJhbXNBcnJheS50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdmVyc2lvbl9uZXcnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyAnPycgKyBwYXJhbXNBcnJheS50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdmVyc2lvbl9lZGl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgJz8nICsgcGFyYW1zQXJyYXkudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3ZlcnNpb25fZGVsZXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgJz8nICsgcGFyYW1zQXJyYXkudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBnZXREZXRhaWxcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGdldERldGFpbCh0aGF0KSB7XHJcblx0XHQkKHRoYXQpLnBhcmVudCgpLmZpbmQoJ2EuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCh0aGF0KS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcclxuXHRcdCQoJyN2ZXJzaW9uJylcclxuXHRcdFx0LmVtcHR5KClcclxuXHRcdFx0LmFwcGVuZCgnPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+JyArXHJcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPicgK1xyXG5cdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj4nICtcclxuXHRcdFx0XHRcdCc8L2Rpdj4nICtcclxuXHRcdFx0XHQnPC9kaXY+Jyk7XHJcblx0XHRcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybCA6ICQodGhhdCkuZGF0YSgndXJsJyksXHJcblx0XHRcdHR5cGU6ICdHRVQnLFxyXG5cdFx0XHRcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0JCgnI3ZlcnNpb24nKS5lbXB0eSgpO1xyXG5cdFx0XHRcdCQoJyN2ZXJzaW9uJykuaHRtbChyZXN1bHQpO1xyXG5cdFx0XHRcdCQoJyNyZXZpZXdfdGFicycpLmZpbmQoJ2EnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHRnZXRSZXZpZXcoZXZlbnQudGFyZ2V0KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvKlxyXG5cdFx0XHRcdFx0JCh0aGlzKS5vbignc2hvdy5icy50YWInLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHRldmVudC50YXJnZXQudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Ki9cclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gZ2V0UmV2aWV3XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHRmdW5jdGlvbiBnZXRSZXZpZXcodGhhdCkge1xyXG5cdFx0JCh0aGF0KS5wYXJlbnQoKS5maW5kKCdhLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQodGhhdCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHJcblx0XHR2YXIgdXJsID0gJCh0aGF0KS5kYXRhKCd1cmwnKTtcclxuXHRcdHZhciBtZXRob2QgPSAkKCdmb3JtW25hbWU9XCJyZXZpZXdcIl0nKS5hdHRyKCdtZXRob2QnKSB8fCAnR0VUJztcclxuXHRcdHZhciBkYXRhID0gJCgnZm9ybVtuYW1lPVwicmV2aWV3XCJdJykuc2VyaWFsaXplQXJyYXkoKVxyXG5cdFx0XHJcblx0XHQkKCcjcmV2aWV3JylcclxuXHRcdFx0LmVtcHR5KClcclxuXHRcdFx0LmFwcGVuZCgnPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+JyArXHJcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtXCIgcm9sZT1cInN0YXR1c1wiPicgK1xyXG5cdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj4nICtcclxuXHRcdFx0XHRcdCc8L2Rpdj4nICtcclxuXHRcdFx0XHQnPC9kaXY+Jyk7XHJcblx0XHRcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybCA6IHVybCxcclxuXHRcdFx0dHlwZTogbWV0aG9kLFxyXG5cdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHRcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0JCgnI3JldmlldycpLmVtcHR5KCk7XHJcblx0XHRcdFx0JCgnI3JldmlldycpLmh0bWwocmVzdWx0KTtcclxuXHRcdFx0XHQkKCcjcmV2aWV3JykuZmluZCgnYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRnZXRSZXZpZXcodGhpcylcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBsaW5lQ2hlY2tlZFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0ZnVuY3Rpb24gbGluZUNoZWNrZWQoKSB7XHJcblx0XHRcclxuXHRcdHZhciBjaGVja2VkID0gZmFsc2U7XHJcblx0XHR2YXIgdW5jaGVja2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHJcblx0XHRpZiAoJCh0aGlzKS5wcm9wKCdpZCcpID09ICdjaGVja19hbGwnKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQkKCd0YWJsZScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y2hlY2tlZCA9ICQoJyNjaGVja19hbGwnKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHR1bmNoZWNrZWQgPSAhY2hlY2tlZDtcclxuXHRcdFx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0XHJcblx0XHRcdCQoJ3RhYmxlJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5wcm9wKCdpZCcpICE9ICdjaGVja19hbGwnKSB7XHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChjaGVja2VkICYmIHVuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cGFyYW1zQXJyYXkuZGVsZXRlKCdpZFtdJyk7XHJcblx0XHRpZiAoY2hlY2tlZCkge1xyXG5cdFx0XHQkKCd0YWJsZScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKCQodGhpcykucHJvcCgnaWQnKSAhPSAnY2hlY2tfYWxsJyAmJiAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRwYXJhbXNBcnJheS5hcHBlbmQoJ2lkW10nLCAkKHRoaXMpLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5zaG93KCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuc2hvdygpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuc2hvdygpO1xyXG5cdFx0XHQkKCcjdmVyc2lvbl9tZW51Jykuc2hvdygpO1x0XHJcblx0XHR9IGVsc2UgaWYodW5jaGVja2VkKSB7XHJcblx0XHRcdCQoJyN2ZXJzaW9uJykudmFsKCcnKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjdmVyc2lvbl9tZW51JykuaGlkZSgpO1x0XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gbXVsdGlTZWxlY3RcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGNyZWF0ZU11bHRpc2VsZWN0KHRoYXQpIHtcclxuXHRcdFxyXG5cdFx0dmFyIG11bHRpcGxlQXR0ciA9ICh0eXBlb2YgJCh0aGF0KS5hdHRyKCdtdWx0aXBsZScpICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmICQodGhhdCkuYXR0cignbXVsdGlwbGUnKSAhPT0gZmFsc2UpO1xyXG5cdFx0XHJcblx0XHRpZihtdWx0aXBsZUF0dHIpIHtcclxuXHRcdFx0aWYgKG4gPSAkKHRoYXQpLnByb3AoJ25hbWUnKS5tYXRjaCgvKC4rKVxcW1xcXSQvaSkpIHtcclxuXHRcdFx0XHR2YXIgbmFtZSA9IG5bMV07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgbmFtZSA9ICQodGhhdCkucHJvcCgnbmFtZScpO1xyXG5cdFx0XHRcclxuXHRcdFx0JCh0aGF0KS5wcmVwZW5kKGNyZWF0ZS5vcHRpb24pLmNoaWxkcmVuKCkuZmlyc3QoKVxyXG5cdFx0XHRcdC50ZXh0KHRleHQubm90QXBwbGljYWJsZSlcclxuXHRcdFx0O1xyXG5cdFx0XHRpZiAoJCh0aGF0KS5maW5kKCdvcHRpb25bc2VsZWN0ZWRdJykubGVuZ3RoID09PSAwKSB7XHJcblx0XHRcdFx0JCh0aGF0KS5jaGlsZHJlbigpLmZpcnN0KCkuYXR0cignc2VsZWN0ZWQnLCB0cnVlKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR2YXIgc2VsZWN0ID0ge1xyXG5cdFx0XHRcdGVsZW1lbnQ6ICQodGhhdCksXHJcblx0XHRcdFx0bmFtZTogbmFtZSxcclxuXHRcdFx0XHRtdWx0aXBsZTogbXVsdGlwbGVBdHRyLFxyXG5cdFx0XHRcdHRpdGxlOiAkKHRoYXQpLmRhdGEoJ3RpdGxlJyksXHJcblx0XHRcdFx0bG9jYWxlOiAkKHRoYXQpLmRhdGEoJ2xvY2FsZScpLFxyXG5cdFx0XHRcdHRhcmdldDogJCh0aGF0KS5kYXRhKCd0YXJnZXQnKSxcclxuXHRcdFx0XHRmdWxsSGVhZGVyOiAkKHRoYXQpLmRhdGEoJ2Z1bGwtaGVhZGVyJykgfHwgZmFsc2UsXHJcblx0XHRcdFx0b3B0aW9uczogW10sXHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQkKHRoYXQpLmZpbmQoJ29wdGlvbicpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHNlbGVjdC5vcHRpb25zLnB1c2goe1xyXG5cdFx0XHRcdGVsZW1lbnQ6ICQodGhpcyksXHJcblx0XHRcdFx0dmFsdWU6ICQodGhpcykuYXR0cigndmFsdWUnKSxcclxuXHRcdFx0XHR0ZXh0OiAkKHRoaXMpLnRleHQoKSxcclxuXHRcdFx0XHRzZWxlY3RlZDogJCh0aGlzKS5hdHRyKCdzZWxlY3RlZCcpLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRzZWxlY3QuZHJvcGRvd25NZW51ID0gJCgnIycgKyBzZWxlY3QudGFyZ2V0KS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdteC0xJylcclxuXHRcdFx0LmNzcygnbWluLXdpZHRoJywgJzE1ZW0nKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRzZWxlY3QuZHJvcERvd25CdXR0b24gPSAkKCcjJyArIHNlbGVjdC50YXJnZXQpLnBhcmVudCgpLnBhcmVudCgpO1xyXG5cdFx0XHJcblx0XHRzZWxlY3QuZHJvcERvd25CdXR0b24ub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBjcmVhdGVNZW51KTtcclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuXHRcdFx0XHJcblx0XHRcdHNlbGVjdC5kcm9wZG93bk1lbnUuY3NzKCd6SW5kZXgnLCAxKTtcclxuXHRcdFx0c2VsZWN0LmRyb3Bkb3duTWVudS5lbXB0eSgpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHNlbGVjdC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdHZhciBoZWFkZXIgPSBzZWxlY3QuZHJvcGRvd25NZW51LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHBiLTIgcHgtMScpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0XHRpZiAoc2VsZWN0LmZ1bGxIZWFkZXIpIHtcclxuXHRcdFx0XHRcdGhlYWRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGljb24uYXJyb3dVcClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdweC0yICcgKyAocGFyYW1zQXJyYXkuZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWU/J2J0bi1vdXRsaW5lLXByaW1hcnkgYmctZGFyayB0ZXh0LXdoaXRlJzonYnRuLXByaW1hcnknKSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIHNvcnRBc2MpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGhlYWRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQudGV4dCh0ZXh0LmZpbHRlcilcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdweC0zIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZpbHRlcilcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aGVhZGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd0Rvd24pXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMiAnICsgKHBhcmFtc0FycmF5LmdldCgnc29ydERlc2MnKSA9PSBzZWxlY3QubmFtZT8nYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOididG4tcHJpbWFyeScpKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgc29ydERlc2MpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGhlYWRlci50ZXh0KHNlbGVjdC50aXRsZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0XHR2YXIgc2VhcmNoID0gc2VsZWN0LmRyb3Bkb3duTWVudS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItZGFyayBwLTInKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWFyY2guYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dmFyIHNlYXJjaFZhbHVlID0gJCh0aGlzKS52YWwoKS50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoc2VhcmNoVmFsdWUgPT0gJycpIHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsRGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdG8uZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdG8uY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0LnNlbGVjdEFsbERpdi5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBvIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoby50ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hWYWx1ZSkgPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0by5kaXYuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvLmNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvLmRpdi5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG8uY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoIXNlbGVjdC5mdWxsSGVhZGVyKSB7XHJcblx0XHRcdFx0XHRzZWFyY2guYWRkQ2xhc3MoJ2QtZmxleCBmbGV4LXJvdycpO1xyXG5cdFx0XHRcdFx0c2VhcmNoLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC50ZXh0KHRleHQuZmlsdGVyKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTMgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZmlsdGVyKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGJvZHkgPSBzZWxlY3QuZHJvcGRvd25NZW51LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncHgtMicgKyAoKHNlbGVjdC5tdWx0aXBsZSk/JyBwdC0zJzonJykpXHJcblx0XHRcdDtcclxuXHJcblx0XHRcdGlmIChzZWxlY3QubXVsdGlwbGUpIHtcclxuXHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsRGl2ID0gYm9keS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LnNlbGVjdEFsbENoZWNrYm94ID0gc2VsZWN0LnNlbGVjdEFsbERpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnX3NlbGVjdEFsbCcpXHJcblx0XHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dmFyIGNoZWNrZWQgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcdFxyXG5cdFx0XHRcdFx0XHRcdG8uY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5zZWxlY3RBbGxMYWJlbCA9IHNlbGVjdC5zZWxlY3RBbGxEaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfc2VsZWN0QWxsJylcclxuXHRcdFx0XHRcdC50ZXh0KHRleHQuc2VsZWN0QWxsKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0by5kaXYgPSBib2R5LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG8uY2hlY2tib3ggPSBvLmRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfJyArIG8udmFsdWUpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgby5zZWxlY3RlZClcclxuXHRcdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR2YXIgY2hlY2tlZDtcclxuXHRcdFx0XHRcdFx0XHR2YXIgdW5jaGVja2VkO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCQoby5jaGVja2JveCkuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5zZWxlY3RBbGxDaGVja2JveC5wcm9wKCdpbmRldGVybWluYXRlJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5zZWxlY3RBbGxDaGVja2JveC5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LnNlbGVjdEFsbENoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG8ubGFiZWwgPSBvLmRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHQudGV4dChvLnRleHQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvLmRpdiA9IGJvZHkuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0by5jaGVja2JveCA9IG8uZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ18nICsgby52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCBvLnNlbGVjdGVkKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Ym9keS5maW5kKCdpbnB1dCcpLm5vdCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0by5lbGVtZW50LnByb3AoJ3NlbGVjdGVkJywgby5jaGVja2JveC5pcygnOmNoZWNrZWQnKSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdCQoJyNmb3JtJykuc3VibWl0KCk7XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG8ubGFiZWwgPSBvLmRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHQudGV4dChvLnRleHQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHRcdCBcclxuXHRcdGZ1bmN0aW9uIHNvcnRBc2MoKSB7XHJcblx0XHRcdHBhcmFtc0FycmF5LmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0cGFyYW1zQXJyYXkuc2V0KCdzb3J0QXNjJywgc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRsb2NhdGlvbi5hc3NpZ24obG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWUgKyAnPycgKyBwYXJhbXNBcnJheS50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHRcdFx0XHJcblx0XHRmdW5jdGlvbiBmaWx0ZXIoKSB7XHJcblx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdG8uZWxlbWVudC5hdHRyKCdzZWxlY3RlZCcsIG8uY2hlY2tib3guaXMoJzpjaGVja2VkJykpO1xyXG5cdFx0XHR9XHJcblx0XHRcdCQoJyNmb3JtJykuc3VibWl0KCk7XHJcblx0XHR9XHJcblx0XHRcdFxyXG5cdFx0ZnVuY3Rpb24gc29ydERlc2MoKSB7XHJcblx0XHRcdHBhcmFtc0FycmF5LmRlbGV0ZSgnc29ydEFzYycpO1xyXG5cdFx0XHRwYXJhbXNBcnJheS5zZXQoJ3NvcnREZXNjJywgc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRsb2NhdGlvbi5hc3NpZ24obG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWUgKyAnPycgKyBwYXJhbXNBcnJheS50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c2VsZWN0LmRyb3BEb3duQnV0dG9uLm9uKCdoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmKGUuY2xpY2tFdmVudCAmJiAkLmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldC5wYXJlbnROb2RlLCBlLmNsaWNrRXZlbnQudGFyZ2V0KSkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNlbGVjdC5kcm9wZG93bk1lbnUuZW1wdHkoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0XHJcbn0pO1xyXG5cclxuXHR2YXIgY3JlYXRlID0ge1xyXG5cdFx0ZGl2OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXHJcblx0XHRcdFxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRpbnB1dDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpXHJcblx0XHRcdFx0LmF0dHIoJ3R5cGUnLCAndGV4dCcpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtJylcclxuXHRcdFx0O1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0Y2hlY2tib3g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKVxyXG5cdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2NoZWNrYm94JylcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWlucHV0JylcclxuXHRcdFx0O1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0b3B0aW9uOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJykpXHJcblx0XHRcdFx0LmF0dHIoJ3ZhbHVlJywgJycpXHJcblx0XHRcdDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGxhYmVsOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKSlcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWxhYmVsIHctMTAwIHRleHQtbm93cmFwJylcclxuXHRcdFx0O1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0YnV0dG9uOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXByaW1hcnknKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRzbWFsbEJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBteC0xJylcclxuXHRcdFx0O1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdH07XHJcblx0XHJcblx0dmFyIHRleHQgPSB7XHJcblx0ICAgIG5vbmVTZWxlY3RlZDogJ05vbmUgc2VsZWN0ZWQnLFxyXG5cdCAgICBtdWx0aXBsZVNlcGFyYXRvcjogJywgJyxcclxuXHQgICAgc2VsZWN0QWxsOiAnU2VsZWN0IGFsbCcsXHJcblx0ICAgIG5vdEFwcGxpY2FibGU6ICduL2EnLFxyXG5cdCAgICBmaWx0ZXI6ICdGaWx0ZXInXHJcblx0fTtcclxuXHRcclxuXHR2YXIgaWNvbiA9IHtcclxuXHRcdGFycm93VXA6XHJcblx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktYXJyb3ctYmFyLXVwXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuMzU0IDUuODU0YS41LjUgMCAwMDAtLjcwOGwtMy0zYS41LjUgMCAwMC0uNzA4IDBsLTMgM2EuNS41IDAgMTAuNzA4LjcwOEw4IDMuMjA3bDIuNjQ2IDIuNjQ3YS41LjUgMCAwMC43MDggMHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04IDEwYS41LjUgMCAwMC41LS41VjNhLjUuNSAwIDAwLTEgMHY2LjVhLjUuNSAwIDAwLjUuNXptLTQuOCAxLjZjMC0uMjIuMTgtLjQuNC0uNGg4LjhhLjQuNCAwIDAxMCAuOEgzLjZhLjQuNCAwIDAxLS40LS40elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHRcclxuXHRcdGFycm93RG93bjpcclxuXHRcdFx0XHQnPHN2ZyBjbGFzcz1cImJpIGJpLWFycm93LWJhci1kb3duXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0ICBcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjM1NCAxMC4xNDZhLjUuNSAwIDAxMCAuNzA4bC0zIDNhLjUuNSAwIDAxLS43MDggMGwtMy0zYS41LjUgMCAwMS43MDgtLjcwOEw4IDEyLjc5M2wyLjY0Ni0yLjY0N2EuNS41IDAgMDEuNzA4IDB6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0ICBcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggNmEuNS41IDAgMDEuNS41VjEzYS41LjUgMCAwMS0xIDBWNi41QS41LjUgMCAwMTggNnpNMiAzLjVhLjUuNSAwIDAxLjUtLjVoMTFhLjUuNSAwIDAxMCAxaC0xMWEuNS41IDAgMDEtLjUtLjV6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0XHQnPC9zdmc+JyxcclxuXHRcdFxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==