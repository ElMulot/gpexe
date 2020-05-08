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
  $('table').find('input[type="checkbox"]').each(function () {
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

    paramsArray["delete"]('version[]');

    if (checked) {
      $('table').find('input[type="checkbox"]').each(function () {
        if ($(this).prop('id') != 'check_all') {
          paramsArray.append('version[]', $(this).val());
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

/***/ })

},[["./assets/js/document.js","runtime","vendors~app~document~form~login","vendors~document~form","vendors~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwiVVJMU2VhcmNoUGFyYW1zIiwiZG9jdW1lbnQiLCJyZWFkeSIsInBhcmFtc0FycmF5IiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzbGljZSIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImZpbmQiLCJlYWNoIiwidmFsIiwibGVuZ3RoIiwiYXR0ciIsImNyZWF0ZU11bHRpc2VsZWN0Iiwic3RpY2t5VGFibGVIZWFkZXJzIiwiaGlkZSIsImlucHV0IiwiZGVsZWdhdGVUYXJnZXQiLCJpcyIsImdldEFsbCIsImluZGV4IiwiaW5kZXhPZiIsImRhdGEiLCJzcGxpY2UiLCJwdXNoIiwiZm9yRWFjaCIsImUiLCJhcHBlbmQiLCJhc3NpZ24iLCJvcmlnaW4iLCJwYXRobmFtZSIsInRvU3RyaW5nIiwibm90IiwicHJvcCIsImxpbmVDaGVja2VkIiwiZW1wdHkiLCJhamF4IiwidXJsIiwicmVsYXRlZFRhcmdldCIsInR5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwiaHRtbCIsImdldERldGFpbCIsImhhc0NsYXNzIiwidHJpZ2dlciIsInRoYXQiLCJwYXJlbnQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZ2V0UmV2aWV3IiwibWV0aG9kIiwic2VyaWFsaXplQXJyYXkiLCJjaGVja2VkIiwidW5jaGVja2VkIiwic2hvdyIsIm11bHRpcGxlQXR0ciIsIm4iLCJtYXRjaCIsIm5hbWUiLCJzZWxlY3QiLCJlbGVtZW50IiwibXVsdGlwbGUiLCJ0aXRsZSIsImxvY2FsZSIsImZ1bGxIZWFkZXIiLCJvcHRpb25zIiwidmFsdWUiLCJ0ZXh0Iiwic2VsZWN0ZWQiLCJkcm9wZG93bk1lbnUiLCJjcmVhdGUiLCJkaXYiLCJjaGlsZHJlbiIsImxhc3QiLCJjc3MiLCJkcm9wRG93bkJ1dHRvbiIsImNyZWF0ZU1lbnUiLCJoZWFkZXIiLCJzbWFsbEJ1dHRvbiIsImljb24iLCJhcnJvd1VwIiwiZ2V0Iiwic29ydEFzYyIsImZpbHRlciIsImFycm93RG93biIsInNvcnREZXNjIiwic2VhcmNoVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsInNlbGVjdEFsbERpdiIsIm8iLCJjaGVja2JveCIsImJvZHkiLCJzZWxlY3RBbGxDaGVja2JveCIsInNlbGVjdEFsbExhYmVsIiwibGFiZWwiLCJzZWxlY3RBbGwiLCJzdWJtaXQiLCJzZXQiLCJjbGlja0V2ZW50IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiY3JlYXRlRWxlbWVudCIsInJhZGlvIiwiYnV0dG9uIiwibm9uZVNlbGVjdGVkIiwibXVsdGlwbGVTZXBhcmF0b3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakI7O0FBQ0FBLG1CQUFPLENBQUMsaUdBQUQsQ0FBUDs7QUFFQUEsbUJBQU8sQ0FBQyx3REFBRCxDQUFQLEMsQ0FFQTtBQUNBOzs7QUFFQSxJQUFNQyxlQUFlLEdBQUdELG1CQUFPLENBQUMsMEZBQUQsQ0FBL0I7O0FBRUFELENBQUMsQ0FBQ0csUUFBRCxDQUFELENBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUU1QixNQUFJQyxXQUFXLEdBQUcsSUFBSUgsZUFBSixDQUFvQkksa0JBQWtCLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUJDLEtBQXZCLENBQTZCLENBQTdCLENBQUQsQ0FBdEMsQ0FBbEI7QUFFQVYsR0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXVyxFQUFYLENBQWMsUUFBZCxFQUF3QixVQUFTQyxLQUFULEVBQWdCO0FBQ3ZDQSxTQUFLLENBQUNDLGNB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QUlQWixRQUFNLEVBQUU7QUFKRCxDQUFYO0FBT0EsSUFBSUosSUFBSSxHQUFHO0FBQ1ZDLFNBQU8sRUFDTix5SUFDQyxxS0FERCxHQUVDLDhLQUZELEdBR0EsUUFMUztBQU9WSSxXQUFTLEVBQ1AsMklBQ0csd0tBREgsR0FFRyxxS0FGSCxHQUdBO0FBWFEsQ0FBWCxDIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5yZXF1aXJlKCdzdGlja3ktdGFibGUtaGVhZGVycycpO1xyXG5cclxucmVxdWlyZSgnLi4vY3NzL2RvY3VtZW50LnNjc3MnKTtcclxuXHJcbi8vcmVxdWlyZSgnLi9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5qcycpO1xyXG4vL3JlcXVpcmUoJy4vbXVsdGlzZWxlY3QvZnJfRlIuanMnKTtcclxuXHJcbmNvbnN0IFVSTFNlYXJjaFBhcmFtcyA9IHJlcXVpcmUoJ0B1bmdhcC91cmwtc2VhcmNoLXBhcmFtcy9janMnKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdHZhciBwYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc2xpY2UoMSkpKTtcclxuXHRcclxuXHQkKCcjZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQ7XHJcblx0XHQkKGV2ZW50LnRhcmdldCkuZmluZCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCQodGhpcykudmFsKCkgID09ICcnIHx8ICEkKHRoaXMpLnZhbCgpPy5sZW5ndGgpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZm9ybScpLmZpbmQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRjcmVhdGVNdWx0aXNlbGVjdCh0aGlzKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCd0YWJsZScpLnN0aWNreVRhYmxlSGVhZGVycygpO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcclxuXHRcclxuXHQkKCcjZGlzcGxheScpLmZpbmQoJ2EnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHJcblx0XHRpZiAoaW5wdXQgPSAkKGV2ZW50LmRlbGVnYXRlVGFyZ2V0KS5maW5kKCdpbnB1dCcpKSB7XHJcblx0XHRcdGlucHV0LmF0dHIoJ2NoZWNrZWQnLCAhaW5wdXQuaXMoJzpjaGVja2VkJykpO1xyXG5cdFx0XHR2YXIgaGlkZSA9IHBhcmFtc0FycmF5LmdldEFsbCgnaGlkZVtdJyk7XHJcblx0XHRcdHZhciBpbmRleCA9IGhpZGUuaW5kZXhPZihpbnB1dC5kYXRhKCd2YWx1ZScpKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChpbnB1dC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRoaWRlLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChpbmRleCA9PSAtMSAmJiBpbnB1dC5kYXRhKCd2YWx1ZScpKSB7XHJcblx0XHRcdFx0XHRoaWRlLnB1c2goaW5wdXQuZGF0YSgndmFsdWUnKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHBhcmFtc0FycmF5LmRlbGV0ZSgnaGlkZVtdJyk7XHJcblx0XHRcdGhpZGUuZm9yRWFjaChlID0+IHBhcmFtc0FycmF5LmFwcGVuZCgnaGlkZVtdJywgZSkpO1xyXG5cdFx0XHRsb2NhdGlvbi5hc3NpZ24obG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWUgKyAnPycgKyBwYXJhbXNBcnJheS50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZGlzcGxheScpLm5vdCgnYScpLm9uKCdjaGFuZ2UgY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJ3RhYmxlJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdCQodGhpcykub24oJ2NsaWNrJywgbGluZUNoZWNrZWQpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkZXRhaWwnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcclxuXHRcdCQoJy5tb2RhbC1ib2R5JylcclxuXHRcdFx0LmVtcHR5KClcclxuXHRcdFx0LmFwcGVuZCgnPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+JyArXHJcblx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+JyArXHJcblx0XHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+JyArXHJcblx0XHRcdFx0XHRcdCc8L2Rpdj4nICtcclxuXHRcdFx0XHRcdCc8L2Rpdj4nKTtcclxuXHRcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybCA6ICQoZXZlbnQucmVsYXRlZFRhcmdldCkuZGF0YSgndXJsJyksXHJcblx0XHRcdHR5cGU6ICdHRVQnLFxyXG5cdFx0XHRcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0JCgnLm1vZGFsLWJvZHknKS5lbXB0eSgpO1xyXG5cdFx0XHRcdCQoJy5tb2RhbC1ib2R5JykuaHRtbChyZXN1bHQpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCQoJyN2ZXJzaW9uX3RhYnMnKS5maW5kKCdhJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0Z2V0RGV0YWlsKGV2ZW50LnRhcmdldCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9lZGl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArICc/JyArIHBhcmFtc0FycmF5LnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgJz8nICsgcGFyYW1zQXJyYXkudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArICc/JyArIHBhcmFtc0FycmF5LnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2ZXJzaW9uX25ldycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArICc/JyArIHBhcmFtc0FycmF5LnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2ZXJzaW9uX2VkaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyAnPycgKyBwYXJhbXNBcnJheS50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdmVyc2lvbl9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyAnPycgKyBwYXJhbXNBcnJheS50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIGdldERldGFpbFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0ZnVuY3Rpb24gZ2V0RGV0YWlsKHRoYXQpIHtcclxuXHRcdCQodGhhdCkucGFyZW50KCkuZmluZCgnYS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKHRoYXQpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFxyXG5cdFx0JCgnI3ZlcnNpb24nKVxyXG5cdFx0XHQuZW1wdHkoKVxyXG5cdFx0XHQuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj4nICtcclxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+JyArXHJcblx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPicgK1xyXG5cdFx0XHRcdFx0JzwvZGl2PicgK1xyXG5cdFx0XHRcdCc8L2Rpdj4nKTtcclxuXHRcdFxyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsIDogJCh0aGF0KS5kYXRhKCd1cmwnKSxcclxuXHRcdFx0dHlwZTogJ0dFVCcsXHJcblx0XHRcdFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuXHRcdFx0XHQkKCcjdmVyc2lvbicpLmVtcHR5KCk7XHJcblx0XHRcdFx0JCgnI3ZlcnNpb24nKS5odG1sKHJlc3VsdCk7XHJcblx0XHRcdFx0JCgnI3Jldmlld190YWJzJykuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdGdldFJldmlldyhldmVudC50YXJnZXQpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8qXHJcblx0XHRcdFx0XHQkKHRoaXMpLm9uKCdzaG93LmJzLnRhYicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdGV2ZW50LnRhcmdldC50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHQqL1xyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBnZXRSZXZpZXdcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGdldFJldmlldyh0aGF0KSB7XHJcblx0XHQkKHRoYXQpLnBhcmVudCgpLmZpbmQoJ2EuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCh0aGF0KS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcclxuXHRcdHZhciB1cmwgPSAkKHRoYXQpLmRhdGEoJ3VybCcpO1xyXG5cdFx0dmFyIG1ldGhvZCA9ICQoJ2Zvcm1bbmFtZT1cInJldmlld1wiXScpLmF0dHIoJ21ldGhvZCcpIHx8ICdHRVQnO1xyXG5cdFx0dmFyIGRhdGEgPSAkKCdmb3JtW25hbWU9XCJyZXZpZXdcIl0nKS5zZXJpYWxpemVBcnJheSgpXHJcblx0XHRcclxuXHRcdCQoJyNyZXZpZXcnKVxyXG5cdFx0XHQuZW1wdHkoKVxyXG5cdFx0XHQuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj4nICtcclxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc21cIiByb2xlPVwic3RhdHVzXCI+JyArXHJcblx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPicgK1xyXG5cdFx0XHRcdFx0JzwvZGl2PicgK1xyXG5cdFx0XHRcdCc8L2Rpdj4nKTtcclxuXHRcdFxyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsIDogdXJsLFxyXG5cdFx0XHR0eXBlOiBtZXRob2QsXHJcblx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuXHRcdFx0XHQkKCcjcmV2aWV3JykuZW1wdHkoKTtcclxuXHRcdFx0XHQkKCcjcmV2aWV3JykuaHRtbChyZXN1bHQpO1xyXG5cdFx0XHRcdCQoJyNyZXZpZXcnKS5maW5kKCdidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGdldFJldmlldyh0aGlzKVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIGxpbmVDaGVja2VkXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHRmdW5jdGlvbiBsaW5lQ2hlY2tlZCgpIHtcclxuXHRcdFxyXG5cdFx0dmFyIGNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdHZhciB1bmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcclxuXHRcdGlmICgkKHRoaXMpLnByb3AoJ2lkJykgPT0gJ2NoZWNrX2FsbCcpIHtcclxuXHRcdFx0XHJcblx0XHRcdCQoJ3RhYmxlJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjaGVja2VkID0gJCgnI2NoZWNrX2FsbCcpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdHVuY2hlY2tlZCA9ICFjaGVja2VkO1xyXG5cdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcclxuXHRcdFx0JCgndGFibGUnKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLnByb3AoJ2lkJykgIT0gJ2NoZWNrX2FsbCcpIHtcclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdGNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dW5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKGNoZWNrZWQgJiYgdW5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdpbmRldGVybWluYXRlJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwYXJhbXNBcnJheS5kZWxldGUoJ3ZlcnNpb25bXScpO1xyXG5cdFx0aWYgKGNoZWNrZWQpIHtcclxuXHRcdFx0JCgndGFibGUnKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICgkKHRoaXMpLnByb3AoJ2lkJykgIT0gJ2NoZWNrX2FsbCcpIHtcclxuXHRcdFx0XHRcdHBhcmFtc0FycmF5LmFwcGVuZCgndmVyc2lvbltdJywgJCh0aGlzKS52YWwoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdCQoJyNkb2N1bWVudF9lZGl0Jykuc2hvdygpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfbW92ZScpLnNob3coKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLnNob3coKTtcclxuXHRcdFx0JCgnI3ZlcnNpb25fbWVudScpLnNob3coKTtcdFxyXG5cdFx0fSBlbHNlIGlmKHVuY2hlY2tlZCkge1xyXG5cdFx0XHQkKCcjdmVyc2lvbicpLnZhbCgnJyk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfbW92ZScpLmhpZGUoKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLmhpZGUoKTtcclxuXHRcdFx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIG11bHRpU2VsZWN0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHRmdW5jdGlvbiBjcmVhdGVNdWx0aXNlbGVjdCh0aGF0KSB7XHJcblx0XHRcclxuXHRcdHZhciBtdWx0aXBsZUF0dHIgPSAodHlwZW9mICQodGhhdCkuYXR0cignbXVsdGlwbGUnKSAhPT0gdHlwZW9mIHVuZGVmaW5lZCAmJiAkKHRoYXQpLmF0dHIoJ211bHRpcGxlJykgIT09IGZhbHNlKTtcclxuXHRcdFxyXG5cdFx0aWYobXVsdGlwbGVBdHRyKSB7XHJcblx0XHRcdGlmIChuID0gJCh0aGF0KS5wcm9wKCduYW1lJykubWF0Y2goLyguKylcXFtcXF0kL2kpKSB7XHJcblx0XHRcdFx0dmFyIG5hbWUgPSBuWzFdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fVxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFyIG5hbWUgPSAkKHRoYXQpLnByb3AoJ25hbWUnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dmFyIHNlbGVjdCA9IHtcclxuXHRcdFx0XHRlbGVtZW50OiAkKHRoYXQpLFxyXG5cdFx0XHRcdG5hbWU6IG5hbWUsXHJcblx0XHRcdFx0bXVsdGlwbGU6IG11bHRpcGxlQXR0cixcclxuXHRcdFx0XHR0aXRsZTogJCh0aGF0KS5kYXRhKCd0aXRsZScpLFxyXG5cdFx0XHRcdGxvY2FsZTogJCh0aGF0KS5kYXRhKCdsb2NhbGUnKSxcclxuXHRcdFx0XHR0YXJnZXQ6ICQodGhhdCkuZGF0YSgndGFyZ2V0JyksXHJcblx0XHRcdFx0ZnVsbEhlYWRlcjogJCh0aGF0KS5kYXRhKCdmdWxsX2hlYWRlcicpLFxyXG5cdFx0XHRcdG9wdGlvbnM6IFtdLFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0JCh0aGF0KS5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzZWxlY3Qub3B0aW9ucy5wdXNoKHtcclxuXHRcdFx0XHRlbGVtZW50OiAkKHRoaXMpLFxyXG5cdFx0XHRcdHZhbHVlOiAkKHRoaXMpLmF0dHIoJ3ZhbHVlJyksXHJcblx0XHRcdFx0dGV4dDogJCh0aGlzKS50ZXh0KCksXHJcblx0XHRcdFx0c2VsZWN0ZWQ6ICQodGhpcykuYXR0cignc2VsZWN0ZWQnKSxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0c2VsZWN0LmRyb3Bkb3duTWVudSA9ICQoJyMnICsgc2VsZWN0LnRhcmdldCkuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnbXgtMScpXHJcblx0XHRcdC5jc3MoJ21pbi13aWR0aCcsICcxNWVtJylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0c2VsZWN0LmRyb3BEb3duQnV0dG9uID0gJCgnIycgKyBzZWxlY3QudGFyZ2V0KS5wYXJlbnQoKS5wYXJlbnQoKTtcclxuXHRcdFxyXG5cdFx0c2VsZWN0LmRyb3BEb3duQnV0dG9uLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgY3JlYXRlTWVudSk7XHJcblxyXG5cdFx0ZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuXHRcdFx0XHJcblx0XHRcdHNlbGVjdC5kcm9wZG93bk1lbnUuY3NzKCd6SW5kZXgnLCAxKTtcclxuXHRcdFx0c2VsZWN0LmRyb3Bkb3duTWVudS5lbXB0eSgpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHNlbGVjdC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdHZhciBoZWFkZXIgPSBzZWxlY3QuZHJvcGRvd25NZW51LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHBiLTIgcHgtMScpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0XHRpZiAoc2VsZWN0LmZ1bGxIZWFkZXIpIHtcclxuXHRcdFx0XHRcdGhlYWRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGljb24uYXJyb3dVcClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdweC0yICcgKyAocGFyYW1zQXJyYXkuZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWU/J2J0bi1vdXRsaW5lLXByaW1hcnkgYmctZGFyayB0ZXh0LXdoaXRlJzonYnRuLXByaW1hcnknKSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIHNvcnRBc2MpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGhlYWRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQudGV4dCh0ZXh0LmZpbHRlcilcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdweC0zIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZpbHRlcilcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aGVhZGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd0Rvd24pXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMiAnICsgKHBhcmFtc0FycmF5LmdldCgnc29ydERlc2MnKSA9PSBzZWxlY3QubmFtZT8nYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOididG4tcHJpbWFyeScpKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgc29ydERlc2MpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGhlYWRlci50ZXh0KHNlbGVjdC50aXRsZSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRcdHZhciBzZWFyY2ggPSBzZWxlY3QuZHJvcGRvd25NZW51LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHAtMicpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlYXJjaC5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgc2VhcmNoVmFsdWUgPSAkKHRoaXMpLnZhbCgpLnRvTG93ZXJDYXNlKClcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChzZWFyY2hWYWx1ZSA9PSAnJykge1xyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdC5zZWxlY3RBbGxEaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0by5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0by5jaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsRGl2LmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChvLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvLmRpdi5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG8uY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG8uZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0by5jaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICghc2VsZWN0LmZ1bGxIZWFkZXIpIHtcclxuXHRcdFx0XHRcdHNlYXJjaC5hZGRDbGFzcygnZC1mbGV4IGZsZXgtcm93Jyk7XHJcblx0XHRcdFx0XHRzZWFyY2guYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LnRleHQodGV4dC5maWx0ZXIpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMyBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmaWx0ZXIpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgYm9keSA9IHNlbGVjdC5kcm9wZG93bk1lbnUuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdweC0yJyArICgoc2VsZWN0Lm11bHRpcGxlKT8nIHB0LTMnOicnKSlcclxuXHRcdFx0O1xyXG5cclxuXHRcdFx0aWYgKHNlbGVjdC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdHNlbGVjdC5zZWxlY3RBbGxEaXYgPSBib2R5LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsQ2hlY2tib3ggPSBzZWxlY3Quc2VsZWN0QWxsRGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfc2VsZWN0QWxsJylcclxuXHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR2YXIgY2hlY2tlZCA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XHJcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1x0XHJcblx0XHRcdFx0XHRcdFx0by5jaGVja2JveC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LnNlbGVjdEFsbExhYmVsID0gc2VsZWN0LnNlbGVjdEFsbERpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIHNlbGVjdC5uYW1lICsgJ19zZWxlY3RBbGwnKVxyXG5cdFx0XHRcdFx0LnRleHQodGV4dC5zZWxlY3RBbGwpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvLmRpdiA9IGJvZHkuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0by5jaGVja2JveCA9IG8uZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ18nICsgby52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCBvLnNlbGVjdGVkKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHZhciBjaGVja2VkO1xyXG5cdFx0XHRcdFx0XHRcdHZhciB1bmNoZWNrZWQ7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBvIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoJChvLmNoZWNrYm94KS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmIChjaGVja2VkICYmIHVuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LnNlbGVjdEFsbENoZWNrYm94LnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LnNlbGVjdEFsbENoZWNrYm94LnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsQ2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0by5sYWJlbCA9IG8uZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfJyArIG8udmFsdWUpXHJcblx0XHRcdFx0XHRcdC50ZXh0KG8udGV4dClcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChjb25zdCBvIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG8uZGl2ID0gYm9keS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvLmNoZWNrYm94ID0gby5kaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsIG8uc2VsZWN0ZWQpXHJcblx0XHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBvIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRvLmVsZW1lbnQucHJvcCgnc2VsZWN0ZWQnLCBvLmNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0JCgnI2Zvcm0nKS5zdWJtaXQoKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0by5sYWJlbCA9IG8uZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfJyArIG8udmFsdWUpXHJcblx0XHRcdFx0XHRcdC50ZXh0KG8udGV4dClcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcdFx0IFxyXG5cdFx0ZnVuY3Rpb24gc29ydEFzYygpIHtcclxuXHRcdFx0cGFyYW1zQXJyYXkuZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRwYXJhbXNBcnJheS5zZXQoJ3NvcnRBc2MnLCBzZWxlY3QubmFtZSk7XHJcblx0XHRcdGxvY2F0aW9uLmFzc2lnbihsb2NhdGlvbi5vcmlnaW4gKyBsb2NhdGlvbi5wYXRobmFtZSArICc/JyArIHBhcmFtc0FycmF5LnRvU3RyaW5nKCkpO1xyXG5cdFx0fVxyXG5cdFx0XHRcclxuXHRcdGZ1bmN0aW9uIGZpbHRlcigpIHtcclxuXHRcdFx0Zm9yIChjb25zdCBvIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0by5lbGVtZW50LmF0dHIoJ3NlbGVjdGVkJywgby5jaGVja2JveC5pcygnOmNoZWNrZWQnKSk7XHJcblx0XHRcdH1cclxuXHRcdFx0JCgnI2Zvcm0nKS5zdWJtaXQoKTtcclxuXHRcdH1cclxuXHRcdFx0XHJcblx0XHRmdW5jdGlvbiBzb3J0RGVzYygpIHtcclxuXHRcdFx0cGFyYW1zQXJyYXkuZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdHBhcmFtc0FycmF5LnNldCgnc29ydERlc2MnLCBzZWxlY3QubmFtZSk7XHJcblx0XHRcdGxvY2F0aW9uLmFzc2lnbihsb2NhdGlvbi5vcmlnaW4gKyBsb2NhdGlvbi5wYXRobmFtZSArICc/JyArIHBhcmFtc0FycmF5LnRvU3RyaW5nKCkpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRzZWxlY3QuZHJvcERvd25CdXR0b24ub24oJ2hpZGUuYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYoZS5jbGlja0V2ZW50ICYmICQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0LnBhcmVudE5vZGUsIGUuY2xpY2tFdmVudC50YXJnZXQpKSB7XHJcblx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2VsZWN0LmRyb3Bkb3duTWVudS5lbXB0eSgpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRcclxufSk7XHJcblxyXG5cdHZhciBjcmVhdGUgPSB7XHJcblx0XHRkaXY6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcclxuXHRcdFx0XHJcblx0XHRcdDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGlucHV0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0XHQuYXR0cigndHlwZScsICd0ZXh0JylcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20nKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRjaGVja2JveDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpXHJcblx0XHRcdFx0LmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtaW5wdXQnKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRyYWRpbzogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpXHJcblx0XHRcdFx0LmF0dHIoJ3R5cGUnLCAncmFkaW8nKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtaW5wdXQnKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRsYWJlbDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1sYWJlbCB3LTEwMCB0ZXh0LW5vd3JhcCcpXHJcblx0XHRcdDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0O1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0c21hbGxCdXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2J0biBidG4tc20gbXgtMScpXHJcblx0XHRcdDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHR9O1xyXG5cdFxyXG5cdHZhciB0ZXh0ID0ge1xyXG5cdCAgICBub25lU2VsZWN0ZWQ6ICdOb25lIHNlbGVjdGVkJyxcclxuXHQgICAgbXVsdGlwbGVTZXBhcmF0b3I6ICcsICcsXHJcblx0ICAgIHNlbGVjdEFsbDogJ1NlbGVjdCBhbGwnLFxyXG5cdCAgICBmaWx0ZXI6ICdGaWx0ZXInXHJcblx0fTtcclxuXHRcclxuXHR2YXIgaWNvbiA9IHtcclxuXHRcdGFycm93VXA6XHJcblx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktYXJyb3ctYmFyLXVwXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuMzU0IDUuODU0YS41LjUgMCAwMDAtLjcwOGwtMy0zYS41LjUgMCAwMC0uNzA4IDBsLTMgM2EuNS41IDAgMTAuNzA4LjcwOEw4IDMuMjA3bDIuNjQ2IDIuNjQ3YS41LjUgMCAwMC43MDggMHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04IDEwYS41LjUgMCAwMC41LS41VjNhLjUuNSAwIDAwLTEgMHY2LjVhLjUuNSAwIDAwLjUuNXptLTQuOCAxLjZjMC0uMjIuMTgtLjQuNC0uNGg4LjhhLjQuNCAwIDAxMCAuOEgzLjZhLjQuNCAwIDAxLS40LS40elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHRcclxuXHRcdGFycm93RG93bjpcclxuXHRcdFx0XHQnPHN2ZyBjbGFzcz1cImJpIGJpLWFycm93LWJhci1kb3duXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0ICBcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjM1NCAxMC4xNDZhLjUuNSAwIDAxMCAuNzA4bC0zIDNhLjUuNSAwIDAxLS43MDggMGwtMy0zYS41LjUgMCAwMS43MDgtLjcwOEw4IDEyLjc5M2wyLjY0Ni0yLjY0N2EuNS41IDAgMDEuNzA4IDB6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0ICBcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggNmEuNS41IDAgMDEuNS41VjEzYS41LjUgMCAwMS0xIDBWNi41QS41LjUgMCAwMTggNnpNMiAzLjVhLjUuNSAwIDAxLjUtLjVoMTFhLjUuNSAwIDAxMCAxaC0xMWEuNS41IDAgMDEtLjUtLjV6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0XHQnPC9zdmc+JyxcclxuXHRcdFxyXG5cdH07XHJcblxyXG5cclxuXHJcblx0XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==