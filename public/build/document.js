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

__webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

__webpack_require__(/*! sticky-table-headers */ "./node_modules/sticky-table-headers/js/jquery.stickytableheaders.js");

__webpack_require__(/*! ../css/document.scss */ "./assets/css/document.scss"); //require('./multiselect/multiselect.js');
//require('./multiselect/fr_FR.js');


var URLSearchParams = __webpack_require__(/*! @ungap/url-search-params/cjs */ "./node_modules/@ungap/url-search-params/cjs/index.js");

$(document).ready(function () {
  var paramsArray = new URLSearchParams(decodeURIComponent(window.location.search.slice(1)));
  $('#form').on('submit', function (event) {
    event.preventDefault;
    $(event.target).find('select').each(function () {
      if ($(this).val().toString() == '') {
        $(this).attr('disabled', 'disabled');
      }
    });
    return true;
  });
  $('table').find('th[data-title]').each(function () {
    createTableHeader(this);
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
  // tableHeader
  //---------------


  function createTableHeader(that) {
    var tableHeader = {
      element: $(that),
      id: $(that).attr('id'),
      title: $(that).data('title'),
      sort: $(that).data('sort'),
      isFiltered: false,
      isSortedAsc: false,
      isSortedDesc: false,
      selects: []
    };
    $(that).find('select').each(function () {
      var name = $(that).prop('name') + multipleAttr ? '[]' : '';
      var multipleAttr = _typeof($(that).attr('multiple')) !== ( true ? "undefined" : undefined) && $(that).attr('multiple') !== false;
      var select = {
        element: $(that),
        id: $(that).prop('id'),
        name: name,
        multiple: multipleAttr,
        title: $(that).data('title'),
        options: []
      };
      $(this).find('option').each(function () {
        select.options.push({
          value: $(this).attr('value'),
          text: $(this).text(),
          selected: paramsArray.getAll(name).indexOf($(this).attr('value'))
        });
      });
      tableHeader.selects.push(select);
      if (paramsArray.has(name)) tableHeader.isFiltered = true;
      if (paramsArray.get('sortDesc') == name) tableHeader.isSortedAsc = true;
      if (paramsArray.get('sortDesc') == name) tableHeader.isSortedDesc = true;
    });

    if (tableHeader.selects.length) {
      tableHeader.dropdownButton = tableHeader.element.append(create.div).children().last().addClass('btn-group w-100').attr('role', 'group').on('hide.bs.dropdown', function (e) {
        if (e.clickEvent && $.contains(e.relatedTarget.parentNode, e.clickEvent.target)) {
          e.preventDefault();
        } else {
          tableHeader.dropdownMenu.empty();
        }
      });
      tableHeader.dropdownButton.append(create.menuButton).children().last().addClass('w-100').attr('type', 'button').text(tableHeader.title);
      tableHeader.dropdownButton.append(create.menuButton).children().last().addClass('px-0').css('width', '3em').attr('type', 'button').attr('id', 'b_' + tableHeader.id).attr('data-toggle', 'dropdown').attr('aria-haspopup', true).attr('aria-expanded', false).append(tableHeader.isFiltered ? icon.funnelFill : icon.funnel).append(tableHeader.isSortedAsc ? icon.arrowUp : '').append(tableHeader.isSortedDesc ? icon.arrowDown : '');
      tableHeader.dropdownMenu = tableHeader.dropdownButton.append(create.div).children().last().addClass('dropdown-menu').attr('aria-labelledby', 'b_' + tableHeader.id).append(create.div).children().last().addClass('d-flex flex-row');
      tableHeader.dropdownButton.on('show.bs.dropdown', createMenu);
    } else {
      tableHeader.element.append(create.menuButton).children().last().addClass('w-100').text(tableHeader.title);
    }

    function createMenu() {
      //select.dropdownMenu.css('zIndex', 1);
      tableHeader.dropdownMenu.empty();

      var _iterator = _createForOfIteratorHelper(tableHeader.selects),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          select = _step.value;
          select.content = tableHeader.dropdownMenu.append(create.div).children().last().addClass('mx-1').css('min-width', '15em');

          if (select.multiple) {
            select.header = select.content.append(create.div).children().last().addClass('text-center border-bottom border-dark pb-2 px-1');
            select.header.append(create.smallButton).children().last().append(icon.arrowUp).addClass('px-2 ' + (paramsArray.get('sortAsc') == select.name ? 'btn-outline-primary bg-dark text-white' : 'btn-primary')).on('click', sortAsc);
            select.header.append(create.smallButton).children().last().text(text.filter).addClass('px-3 btn-primary').on('click', filter);
            select.header.append(create.smallButton).children().last().append(icon.arrowDown).addClass('px-2 ' + (paramsArray.get('sortDesc') == select.name ? 'btn-outline-primary bg-dark text-white' : 'btn-primary')).on('click', sortDesc);
            select.search = select.dropdownMenu.append(create.div).children().last().addClass('text-center border-bottom border-dark p-2');
            select.search.append(create.input).children().last().on('input', function () {
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
          }

          select.body = select.content.append(create.div).children().last().addClass('px-2' + (select.multiple ? ' pt-3' : ''));

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
            select.notApplicableDiv = select.body.append(create.div).children().last().addClass('custom-control custom-checkbox');
            select.notApplicableCheckbox = select.notApplicableDiv.append(create.checkbox).children().last().attr('id', select.name + '_notApplicable').on('change', function () {
              var checked = $(this).is(':checked');

              var _iterator7 = _createForOfIteratorHelper(select.options),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _o3 = _step7.value;

                  _o3.checkbox.prop('checked', false);
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }

              paramsArray["delete"](select.name);
              location.assign(location.origin + location.pathname + '?' + paramsArray.toString());
            });
            select.notApplicableLabel = select.notApplicableDiv.append(create.label).children().last().attr('for', select.name + '_notApplicable').text(text.notApplicable);

            var _iterator8 = _createForOfIteratorHelper(select.options),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var _o4 = _step8.value;
                _o4.div = select.body.append(create.div).children().last().addClass('custom-control custom-checkbox');
                _o4.checkbox = _o4.div.append(create.checkbox).children().last().attr('id', select.name + '_' + _o4.value).attr('checked', paramsArray.get(select.name) == _o4.value).on('click', function () {
                  body.find('input').not(this).prop('checked', false);
                  paramsArray["delete"](select.name);

                  if (!select.notApplicableCheckbox.is(':checked')) {
                    var _iterator9 = _createForOfIteratorHelper(select.options),
                        _step9;

                    try {
                      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                        var _o5 = _step9.value;

                        if (_o5.checkbox.is(':checked')) {
                          paramsArray.append(select.name, _o5.value);
                        }
                      }
                    } catch (err) {
                      _iterator9.e(err);
                    } finally {
                      _iterator9.f();
                    }
                  }

                  location.assign(location.origin + location.pathname + '?' + paramsArray.toString());
                });
                _o4.label = _o4.div.append(create.label).children().last().attr('for', select.name + '_' + _o4.value).text(_o4.text);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    }

    function sortAsc() {
      paramsArray["delete"]('sortDesc');

      if (paramsArray.get('sortAsc') == select.name) {
        paramsArray["delete"]('sortAsc');
      } else {
        paramsArray.set('sortAsc', select.name);
      }

      filter();
    }

    function filter() {
      paramsArray["delete"](select.name + '[]');

      if (!select.selectAllCheckbox.is(':checked')) {
        var _iterator10 = _createForOfIteratorHelper(select.options),
            _step10;

        try {
          for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
            var o = _step10.value;

            if (o.checkbox.is(':checked')) {
              paramsArray.append(select.name + '[]', o.value);
            }
          }
        } catch (err) {
          _iterator10.e(err);
        } finally {
          _iterator10.f();
        }
      }

      location.assign(location.origin + location.pathname + '?' + paramsArray.toString());
    }

    function sortDesc() {
      paramsArray["delete"]('sortAsc');

      if (paramsArray.get('sortDesc') == select.name) {
        paramsArray["delete"]('sortDesc');
      } else {
        paramsArray.set('sortDesc', select.name);
      }

      filter();
    }
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
  menuButton: function menuButton() {
    return $(document.createElement('button')).addClass('btn btn-sm btn-primary text-nowrap rounded-0');
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
  arrowDown: '<svg class="bi bi-arrow-bar-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 10.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L8 12.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 6a.5.5 0 01.5.5V13a.5.5 0 01-1 0V6.5A.5.5 0 018 6zM2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>' + '</svg>',
  funnel: '<svg class="bi bi-funnel" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clip-rule="evenodd"/>' + '</svg>',
  funnelFill: '<svg class="bi bi-funnel-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path d="M2 3.5v-2h12v2l-4.5 5v5l-3 1v-6L2 3.5z"/>' + '<path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clip-rule="evenodd"/>' + '</svg>'
};

/***/ })

},[["./assets/js/document.js","runtime","vendors~app~document~form~login","vendors~app~document","vendors~document~form","vendors~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwiZG9jdW1lbnQiLCJyZWFkeSIsInBhcmFtc0FycmF5IiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzbGljZSIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImZpbmQiLCJlYWNoIiwidmFsIiwidG9TdHJpbmciLCJhdHRyIiwiY3JlYXRlVGFibGVIZWFkZXIiLCJzdGlja3lUYWJsZUhlYWRlcnMiLCJoaWRlIiwiaW5wdXQiLCJkZWxlZ2F0ZVRhcmdldCIsImlzIiwiZ2V0QWxsIiwiaW5kZXgiLCJpbmRleE9mIiwiZGF0YSIsInNwbGljZSIsInB1c2giLCJmb3JFYWNoIiwiZSIsImFwcGVuZCIsImFzc2lnbiIsIm9yaWdpbiIsInBhdGhuYW1lIiwibm90IiwicHJvcCIsImxpbmVDaGVja2VkIiwiZW1wdHkiLCJhamF4IiwidXJsIiwicmVsYXRlZFRhcmdldCIsInR5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwiaHRtbCIsImdldERldGFpbCIsImhhc0NsYXNzIiwidHJpZ2dlciIsInRoYXQiLCJwYXJlbnQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZ2V0UmV2aWV3IiwibWV0aG9kIiwic2VyaWFsaXplQXJyYXkiLCJjaGVja2VkIiwidW5jaGVja2VkIiwic2hvdyIsInRhYmxlSGVhZGVyIiwiZWxlbWVudCIsImlkIiwidGl0bGUiLCJzb3J0IiwiaXNGaWx0ZXJlZCIsImlzU29ydGVkQXNjIiwiaXNTb3J0ZWREZXNjIiwic2VsZWN0cyIsIm5hbWUiLCJtdWx0aXBsZUF0dHIiLCJzZWxlY3QiLCJtdWx0aXBsZSIsIm9wdGlvbnMiLCJ2YWx1ZSIsInRleHQiLCJzZWxlY3RlZCIsImhhcyIsImdldCIsImxlbmd0aCIsImRyb3Bkb3duQnV0dG9uIiwiY3JlYXRlIiwiZGl2IiwiY2hpbGRyZW4iLCJsYXN0IiwiY2xpY2tFdmVudCIsImNvbnRhaW5zIiwicGFyZW50Tm9kZSIsImRyb3Bkb3duTWVudSIsIm1lbnVCdXR0b24iLCJjc3MiLCJpY29uIiwiZnVubmVsRmlsbCIsImZ1bm5lbCIsImFycm93VXAiLCJhcnJvd0Rvd24iLCJjcmVhdGVNZW51IiwiY29udGVudCIsImhlYWRlciIsInNtYWxsQnV0dG9uIiwic29ydEFzYyIsImZpbHRlciIsInNvcnREZXNjIiwic2VhcmNoVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsInNlbGVjdEFsbERpdiIsIm8iLCJjaGVja2JveCIsImJvZHkiLCJzZWxlY3RBbGxDaGVja2JveCIsInNlbGVjdEFsbExhYmVsIiwibGFiZWwiLCJzZWxlY3RBbGwiLCJub3RBcHBsaWNhYmxlRGl2Iiwibm90QXBwbGljYWJsZUNoZWNrYm94Iiwibm90QXBwbGljYWJsZUxhYmVsIiwibm90QXBwbGljYWJsZSIsInNldCIsImNyZWF0ZUVsZW1lbnQiLCJvcHRpb24iLCJub25lU2VsZWN0ZWQiLCJtdWx0aXBsZVNlcGFyYXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLDhEQUFELENBQXRCOztBQUNBQSxtQkFBTyxDQUFDLGlHQUFELENBQVA7O0FBRUFBLG1CQUFPLENBQUMsd0RBQUQsQ0FBUCxDLENBRUE7QUFDQTs7O0FBRUEsSUFBTUUsZUFBZSxHQUFHRixtQkFBTyxDQUFDLDBGQUFELENBQS9COztBQUVBRCxDQUFDLENBQUNJLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFF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UUFBTSxFQUNKLG1JQUNDLDBTQURELEdBRUEsUUFoQlE7QUFrQlZELFlBQVUsRUFDUix3SUFDQyxvREFERCxHQUVDLDBTQUZELEdBR0E7QUF0QlEsQ0FBWCxDIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5jb25zdCBwb3BwZXIgPSByZXF1aXJlKCdwb3BwZXIuanMnKTtcclxucmVxdWlyZSgnc3RpY2t5LXRhYmxlLWhlYWRlcnMnKTtcclxuXHJcbnJlcXVpcmUoJy4uL2Nzcy9kb2N1bWVudC5zY3NzJyk7XHJcblxyXG4vL3JlcXVpcmUoJy4vbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QuanMnKTtcclxuLy9yZXF1aXJlKCcuL211bHRpc2VsZWN0L2ZyX0ZSLmpzJyk7XHJcblxyXG5jb25zdCBVUkxTZWFyY2hQYXJhbXMgPSByZXF1aXJlKCdAdW5nYXAvdXJsLXNlYXJjaC1wYXJhbXMvY2pzJyk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcclxuXHR2YXIgcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKGRlY29kZVVSSUNvbXBvbmVudCh3aW5kb3cubG9jYXRpb24uc2VhcmNoLnNsaWNlKDEpKSk7XHJcblx0XHJcblx0JCgnI2Zvcm0nKS5vbignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0O1xyXG5cdFx0JChldmVudC50YXJnZXQpLmZpbmQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICgkKHRoaXMpLnZhbCgpLnRvU3RyaW5nKCkgID09ICcnKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSk7XHJcblx0XHJcblx0JCgndGFibGUnKS5maW5kKCd0aFtkYXRhLXRpdGxlXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRjcmVhdGVUYWJsZUhlYWRlcih0aGlzKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCd0YWJsZScpLnN0aWNreVRhYmxlSGVhZGVycygpO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcclxuXHRcclxuXHQkKCcjZGlzcGxheScpLmZpbmQoJ2EnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHJcblx0XHRpZiAoaW5wdXQgPSAkKGV2ZW50LmRlbGVnYXRlVGFyZ2V0KS5maW5kKCdpbnB1dCcpKSB7XHJcblx0XHRcdGlucHV0LmF0dHIoJ2NoZWNrZWQnLCAhaW5wdXQuaXMoJzpjaGVja2VkJykpO1xyXG5cdFx0XHR2YXIgaGlkZSA9IHBhcmFtc0FycmF5LmdldEFsbCgnaGlkZVtdJyk7XHJcblx0XHRcdHZhciBpbmRleCA9IGhpZGUuaW5kZXhPZihpbnB1dC5kYXRhKCd2YWx1ZScpKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChpbnB1dC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRoaWRlLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGlmIChpbmRleCA9PSAtMSAmJiBpbnB1dC5kYXRhKCd2YWx1ZScpKSB7XHJcblx0XHRcdFx0XHRoaWRlLnB1c2goaW5wdXQuZGF0YSgndmFsdWUnKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHBhcmFtc0FycmF5LmRlbGV0ZSgnaGlkZVtdJyk7XHJcblx0XHRcdGhpZGUuZm9yRWFjaChlID0+IHBhcmFtc0FycmF5LmFwcGVuZCgnaGlkZVtdJywgZSkpO1xyXG5cdFx0XHRcclxuXHRcdFx0bG9jYXRpb24uYXNzaWduKGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lICsgJz8nICsgcGFyYW1zQXJyYXkudG9TdHJpbmcoKSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI2Rpc3BsYXknKS5ub3QoJ2EnKS5vbignY2hhbmdlIGNsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCd0ZCcpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGxpbmVDaGVja2VkKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZGV0YWlsJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHJcblx0XHQkKCcubW9kYWwtYm9keScpXHJcblx0XHRcdC5lbXB0eSgpXHJcblx0XHRcdC5hcHBlbmQoJzxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPicgK1xyXG5cdFx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPicgK1xyXG5cdFx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPicgK1xyXG5cdFx0XHRcdFx0XHQnPC9kaXY+JyArXHJcblx0XHRcdFx0XHQnPC9kaXY+Jyk7XHJcblx0XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR1cmwgOiAkKGV2ZW50LnJlbGF0ZWRUYXJnZXQpLmRhdGEoJ3VybCcpLFxyXG5cdFx0XHR0eXBlOiAnR0VUJyxcclxuXHRcdFx0XHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG5cdFx0XHRcdCQoJy5tb2RhbC1ib2R5JykuZW1wdHkoKTtcclxuXHRcdFx0XHQkKCcubW9kYWwtYm9keScpLmh0bWwocmVzdWx0KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKCcjdmVyc2lvbl90YWJzJykuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdGdldERldGFpbChldmVudC50YXJnZXQpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfZWRpdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyAnPycgKyBwYXJhbXNBcnJheS50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfbW92ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArICc/JyArIHBhcmFtc0FycmF5LnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyAnPycgKyBwYXJhbXNBcnJheS50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdmVyc2lvbl9uZXcnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyAnPycgKyBwYXJhbXNBcnJheS50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdmVyc2lvbl9lZGl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgJz8nICsgcGFyYW1zQXJyYXkudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3ZlcnNpb25fZGVsZXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgJz8nICsgcGFyYW1zQXJyYXkudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBnZXREZXRhaWxcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGdldERldGFpbCh0aGF0KSB7XHJcblx0XHQkKHRoYXQpLnBhcmVudCgpLmZpbmQoJ2EuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCh0aGF0KS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcclxuXHRcdCQoJyN2ZXJzaW9uJylcclxuXHRcdFx0LmVtcHR5KClcclxuXHRcdFx0LmFwcGVuZCgnPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+JyArXHJcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPicgK1xyXG5cdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj4nICtcclxuXHRcdFx0XHRcdCc8L2Rpdj4nICtcclxuXHRcdFx0XHQnPC9kaXY+Jyk7XHJcblx0XHRcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybCA6ICQodGhhdCkuZGF0YSgndXJsJyksXHJcblx0XHRcdHR5cGU6ICdHRVQnLFxyXG5cdFx0XHRcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0JCgnI3ZlcnNpb24nKS5lbXB0eSgpO1xyXG5cdFx0XHRcdCQoJyN2ZXJzaW9uJykuaHRtbChyZXN1bHQpO1xyXG5cdFx0XHRcdCQoJyNyZXZpZXdfdGFicycpLmZpbmQoJ2EnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHRnZXRSZXZpZXcoZXZlbnQudGFyZ2V0KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvKlxyXG5cdFx0XHRcdFx0JCh0aGlzKS5vbignc2hvdy5icy50YWInLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHRldmVudC50YXJnZXQudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0Ki9cclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0fVxyXG5cdFxyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gZ2V0UmV2aWV3XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHRmdW5jdGlvbiBnZXRSZXZpZXcodGhhdCkge1xyXG5cdFx0JCh0aGF0KS5wYXJlbnQoKS5maW5kKCdhLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQodGhhdCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHJcblx0XHR2YXIgdXJsID0gJCh0aGF0KS5kYXRhKCd1cmwnKTtcclxuXHRcdHZhciBtZXRob2QgPSAkKCdmb3JtW25hbWU9XCJyZXZpZXdcIl0nKS5hdHRyKCdtZXRob2QnKSB8fCAnR0VUJztcclxuXHRcdHZhciBkYXRhID0gJCgnZm9ybVtuYW1lPVwicmV2aWV3XCJdJykuc2VyaWFsaXplQXJyYXkoKVxyXG5cdFx0XHJcblx0XHQkKCcjcmV2aWV3JylcclxuXHRcdFx0LmVtcHR5KClcclxuXHRcdFx0LmFwcGVuZCgnPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+JyArXHJcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyIHNwaW5uZXItYm9yZGVyLXNtXCIgcm9sZT1cInN0YXR1c1wiPicgK1xyXG5cdFx0XHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+TG9hZGluZy4uLjwvc3Bhbj4nICtcclxuXHRcdFx0XHRcdCc8L2Rpdj4nICtcclxuXHRcdFx0XHQnPC9kaXY+Jyk7XHJcblx0XHRcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybCA6IHVybCxcclxuXHRcdFx0dHlwZTogbWV0aG9kLFxyXG5cdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHRcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0JCgnI3JldmlldycpLmVtcHR5KCk7XHJcblx0XHRcdFx0JCgnI3JldmlldycpLmh0bWwocmVzdWx0KTtcclxuXHRcdFx0XHQkKCcjcmV2aWV3JykuZmluZCgnYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRnZXRSZXZpZXcodGhpcylcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBsaW5lQ2hlY2tlZFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0ZnVuY3Rpb24gbGluZUNoZWNrZWQoKSB7XHJcblx0XHRcclxuXHRcdHZhciBjaGVja2VkID0gZmFsc2U7XHJcblx0XHR2YXIgdW5jaGVja2VkID0gZmFsc2U7XHJcblxyXG5cdFx0XHJcblx0XHRpZiAoJCh0aGlzKS5wcm9wKCdpZCcpID09ICdjaGVja19hbGwnKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQkKCd0YWJsZScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y2hlY2tlZCA9ICQoJyNjaGVja19hbGwnKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHR1bmNoZWNrZWQgPSAhY2hlY2tlZDtcclxuXHRcdFx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0XHJcblx0XHRcdCQoJ3RhYmxlJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5wcm9wKCdpZCcpICE9ICdjaGVja19hbGwnKSB7XHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChjaGVja2VkICYmIHVuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cGFyYW1zQXJyYXkuZGVsZXRlKCdpZFtdJyk7XHJcblx0XHRpZiAoY2hlY2tlZCkge1xyXG5cdFx0XHQkKCd0YWJsZScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKCQodGhpcykucHJvcCgnaWQnKSAhPSAnY2hlY2tfYWxsJyAmJiAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRwYXJhbXNBcnJheS5hcHBlbmQoJ2lkW10nLCAkKHRoaXMpLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5zaG93KCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuc2hvdygpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuc2hvdygpO1xyXG5cdFx0XHQkKCcjdmVyc2lvbl9tZW51Jykuc2hvdygpO1x0XHJcblx0XHR9IGVsc2UgaWYodW5jaGVja2VkKSB7XHJcblx0XHRcdCQoJyN2ZXJzaW9uJykudmFsKCcnKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjdmVyc2lvbl9tZW51JykuaGlkZSgpO1x0XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gdGFibGVIZWFkZXJcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGNyZWF0ZVRhYmxlSGVhZGVyKHRoYXQpIHtcclxuXHRcdFxyXG5cdFx0dmFyIHRhYmxlSGVhZGVyID0ge1xyXG5cdFx0XHRlbGVtZW50OiAkKHRoYXQpLFxyXG5cdFx0XHRpZDogJCh0aGF0KS5hdHRyKCdpZCcpLFxyXG5cdFx0XHR0aXRsZTogJCh0aGF0KS5kYXRhKCd0aXRsZScpLFxyXG5cdFx0XHRzb3J0OiAkKHRoYXQpLmRhdGEoJ3NvcnQnKSxcclxuXHRcdFx0aXNGaWx0ZXJlZDogZmFsc2UsXHJcblx0XHRcdGlzU29ydGVkQXNjOiBmYWxzZSxcclxuXHRcdFx0aXNTb3J0ZWREZXNjOiBmYWxzZSxcclxuXHRcdFx0c2VsZWN0czogW10sXHJcblx0XHR9XHJcblx0XHRcclxuXHRcdCQodGhhdCkuZmluZCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdHZhciBuYW1lID0gJCh0aGF0KS5wcm9wKCduYW1lJykgKyAobXVsdGlwbGVBdHRyKT8nW10nOicnO1xyXG5cdFx0XHR2YXIgbXVsdGlwbGVBdHRyID0gKHR5cGVvZiAkKHRoYXQpLmF0dHIoJ211bHRpcGxlJykgIT09IHR5cGVvZiB1bmRlZmluZWQgJiYgJCh0aGF0KS5hdHRyKCdtdWx0aXBsZScpICE9PSBmYWxzZSk7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgc2VsZWN0ID0ge1xyXG5cdFx0XHRcdFx0ZWxlbWVudDogJCh0aGF0KSxcclxuXHRcdFx0XHRcdGlkOiAkKHRoYXQpLnByb3AoJ2lkJyksXHJcblx0XHRcdFx0XHRuYW1lOiBuYW1lLFxyXG5cdFx0XHRcdFx0bXVsdGlwbGU6IG11bHRpcGxlQXR0cixcclxuXHRcdFx0XHRcdHRpdGxlOiAkKHRoYXQpLmRhdGEoJ3RpdGxlJyksXHJcblx0XHRcdFx0XHRvcHRpb25zOiBbXSxcclxuXHRcdFx0fTtcclxuXHRcdFx0XHJcblx0XHRcdCQodGhpcykuZmluZCgnb3B0aW9uJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRzZWxlY3Qub3B0aW9ucy5wdXNoKHtcclxuXHRcdFx0XHRcdHZhbHVlOiAkKHRoaXMpLmF0dHIoJ3ZhbHVlJyksXHJcblx0XHRcdFx0XHR0ZXh0OiAkKHRoaXMpLnRleHQoKSxcclxuXHRcdFx0XHRcdHNlbGVjdGVkOiBwYXJhbXNBcnJheS5nZXRBbGwobmFtZSkuaW5kZXhPZigkKHRoaXMpLmF0dHIoJ3ZhbHVlJykpLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLnNlbGVjdHMucHVzaChzZWxlY3QpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHBhcmFtc0FycmF5LmhhcyhuYW1lKSkgdGFibGVIZWFkZXIuaXNGaWx0ZXJlZCA9IHRydWU7XHJcblx0XHRcdGlmIChwYXJhbXNBcnJheS5nZXQoJ3NvcnREZXNjJykgPT0gbmFtZSkgdGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MgPSB0cnVlO1xyXG5cdFx0XHRpZiAocGFyYW1zQXJyYXkuZ2V0KCdzb3J0RGVzYycpID09IG5hbWUpIHRhYmxlSGVhZGVyLmlzU29ydGVkRGVzYyA9IHRydWU7XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzLmxlbmd0aCkge1xyXG5cdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLmRyb3Bkb3duQnV0dG9uID0gdGFibGVIZWFkZXIuZWxlbWVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2J0bi1ncm91cCB3LTEwMCcpXHJcblx0XHRcdFx0LmF0dHIoJ3JvbGUnLCAnZ3JvdXAnKVxyXG5cdFx0XHRcdC5vbignaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmKGUuY2xpY2tFdmVudCAmJiAkLmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldC5wYXJlbnROb2RlLCBlLmNsaWNrRXZlbnQudGFyZ2V0KSkge1xyXG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmRyb3Bkb3duTWVudS5lbXB0eSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLmRyb3Bkb3duQnV0dG9uLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3ctMTAwJylcclxuXHRcdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHRcdC50ZXh0KHRhYmxlSGVhZGVyLnRpdGxlKVxyXG5cdFx0XHQ7XHJcblx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuZHJvcGRvd25CdXR0b24uYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncHgtMCcpXHJcblx0XHRcdFx0LmNzcygnd2lkdGgnLCAnM2VtJylcclxuXHRcdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHRcdC5hdHRyKCdpZCcsICdiXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0XHQuYXR0cignZGF0YS10b2dnbGUnLCAnZHJvcGRvd24nKVxyXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWhhc3BvcHVwJywgdHJ1ZSlcclxuXHRcdFx0XHQuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxyXG5cdFx0XHRcdC5hcHBlbmQodGFibGVIZWFkZXIuaXNGaWx0ZXJlZD9pY29uLmZ1bm5lbEZpbGw6aWNvbi5mdW5uZWwpXHJcblx0XHRcdFx0LmFwcGVuZCh0YWJsZUhlYWRlci5pc1NvcnRlZEFzYz9pY29uLmFycm93VXA6JycpXHJcblx0XHRcdFx0LmFwcGVuZCh0YWJsZUhlYWRlci5pc1NvcnRlZERlc2M/aWNvbi5hcnJvd0Rvd246JycpXHJcblx0XHRcdDtcclxuXHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5kcm9wZG93bk1lbnUgPSB0YWJsZUhlYWRlci5kcm9wZG93bkJ1dHRvbi5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2Ryb3Bkb3duLW1lbnUnKVxyXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWxhYmVsbGVkYnknLCAnYl8nICsgdGFibGVIZWFkZXIuaWQpXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdkLWZsZXggZmxleC1yb3cnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5kcm9wZG93bkJ1dHRvbi5vbignc2hvdy5icy5kcm9wZG93bicsIGNyZWF0ZU1lbnUpO1xyXG5cdFx0XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0YWJsZUhlYWRlci5lbGVtZW50LmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3ctMTAwJylcclxuXHRcdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSlcclxuXHRcdFx0O1xyXG5cdFx0fVxyXG5cdFxyXG5cdFx0ZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuXHRcdFx0XHJcblx0XHRcdC8vc2VsZWN0LmRyb3Bkb3duTWVudS5jc3MoJ3pJbmRleCcsIDEpO1xyXG5cdFx0XHR0YWJsZUhlYWRlci5kcm9wZG93bk1lbnUuZW1wdHkoKTtcclxuXHRcdFx0XHJcblx0XHRcdGZvciAoc2VsZWN0IG9mIHRhYmxlSGVhZGVyLnNlbGVjdHMpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuY29udGVudCA9IHRhYmxlSGVhZGVyLmRyb3Bkb3duTWVudS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnbXgtMScpXHJcblx0XHRcdFx0XHQuY3NzKCdtaW4td2lkdGgnLCAnMTVlbScpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChzZWxlY3QubXVsdGlwbGUpIHtcclxuXHRcdFx0XHRcdHNlbGVjdC5oZWFkZXIgPSBzZWxlY3QuY29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHBiLTIgcHgtMScpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHNlbGVjdC5oZWFkZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChpY29uLmFycm93VXApXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMiAnICsgKHBhcmFtc0FycmF5LmdldCgnc29ydEFzYycpID09IHNlbGVjdC5uYW1lPydidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J2J0bi1wcmltYXJ5JykpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBzb3J0QXNjKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3QuaGVhZGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC50ZXh0KHRleHQuZmlsdGVyKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTMgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZmlsdGVyKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3QuaGVhZGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd0Rvd24pXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMiAnICsgKHBhcmFtc0FycmF5LmdldCgnc29ydERlc2MnKSA9PSBzZWxlY3QubmFtZT8nYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOididG4tcHJpbWFyeScpKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgc29ydERlc2MpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3Quc2VhcmNoID0gc2VsZWN0LmRyb3Bkb3duTWVudS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHAtMicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHNlbGVjdC5zZWFyY2guYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBzZWFyY2hWYWx1ZSA9ICQodGhpcykudmFsKCkudG9Mb3dlckNhc2UoKVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmIChzZWFyY2hWYWx1ZSA9PSAnJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LnNlbGVjdEFsbERpdi5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0by5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvLmNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5zZWxlY3RBbGxEaXYuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBvIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG8uZGl2LmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvLmNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0by5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG8uY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5ib2R5ID0gc2VsZWN0LmNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTInICsgKChzZWxlY3QubXVsdGlwbGUpPycgcHQtMyc6JycpKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoc2VsZWN0Lm11bHRpcGxlKSB7XHJcblx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsRGl2ID0gYm9keS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsQ2hlY2tib3ggPSBzZWxlY3Quc2VsZWN0QWxsRGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ19zZWxlY3RBbGwnKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHZhciBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0by5jaGVja2JveC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0c2VsZWN0LnNlbGVjdEFsbExhYmVsID0gc2VsZWN0LnNlbGVjdEFsbERpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnX3NlbGVjdEFsbCcpXHJcblx0XHRcdFx0XHRcdC50ZXh0KHRleHQuc2VsZWN0QWxsKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdG8uZGl2ID0gYm9keS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdG8uY2hlY2tib3ggPSBvLmRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ18nICsgby52YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsIG8uc2VsZWN0ZWQpXHJcblx0XHRcdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGNoZWNrZWQ7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdW5jaGVja2VkO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCQoby5jaGVja2JveCkuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChjaGVja2VkICYmIHVuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsQ2hlY2tib3gucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0LnNlbGVjdEFsbENoZWNrYm94LnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5zZWxlY3RBbGxDaGVja2JveC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRvLmxhYmVsID0gby5kaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdC50ZXh0KG8udGV4dClcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0c2VsZWN0Lm5vdEFwcGxpY2FibGVEaXYgPSBzZWxlY3QuYm9keS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3Qubm90QXBwbGljYWJsZUNoZWNrYm94ID0gc2VsZWN0Lm5vdEFwcGxpY2FibGVEaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnX25vdEFwcGxpY2FibGUnKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHZhciBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0by5jaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRwYXJhbXNBcnJheS5kZWxldGUoc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdGxvY2F0aW9uLmFzc2lnbihsb2NhdGlvbi5vcmlnaW4gKyBsb2NhdGlvbi5wYXRobmFtZSArICc/JyArIHBhcmFtc0FycmF5LnRvU3RyaW5nKCkpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0c2VsZWN0Lm5vdEFwcGxpY2FibGVMYWJlbCA9IHNlbGVjdC5ub3RBcHBsaWNhYmxlRGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfbm90QXBwbGljYWJsZScpXHJcblx0XHRcdFx0XHRcdC50ZXh0KHRleHQubm90QXBwbGljYWJsZSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBvIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRvLmRpdiA9IHNlbGVjdC5ib2R5LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0by5jaGVja2JveCA9IG8uZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgcGFyYW1zQXJyYXkuZ2V0KHNlbGVjdC5uYW1lKSA9PSBvLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0Ym9keS5maW5kKCdpbnB1dCcpLm5vdCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyYW1zQXJyYXkuZGVsZXRlKHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzZWxlY3Qubm90QXBwbGljYWJsZUNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvLmNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXJhbXNBcnJheS5hcHBlbmQoc2VsZWN0Lm5hbWUsIG8udmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRsb2NhdGlvbi5hc3NpZ24obG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWUgKyAnPycgKyBwYXJhbXNBcnJheS50b1N0cmluZygpKTtcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRvLmxhYmVsID0gby5kaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdC50ZXh0KG8udGV4dClcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFx0XHQgXHJcblx0XHRmdW5jdGlvbiBzb3J0QXNjKCkge1xyXG5cdFx0XHRwYXJhbXNBcnJheS5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdGlmIChwYXJhbXNBcnJheS5nZXQoJ3NvcnRBc2MnKSA9PSBzZWxlY3QubmFtZSkge1xyXG5cdFx0XHRcdHBhcmFtc0FycmF5LmRlbGV0ZSgnc29ydEFzYycpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHBhcmFtc0FycmF5LnNldCgnc29ydEFzYycsIHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0fVx0XHJcblx0XHRcdGZpbHRlcigpO1xyXG5cdFx0fVxyXG5cdFx0XHRcclxuXHRcdGZ1bmN0aW9uIGZpbHRlcigpIHtcclxuXHRcdFx0XHJcblx0XHRcdHBhcmFtc0FycmF5LmRlbGV0ZShzZWxlY3QubmFtZSArICdbXScpO1xyXG5cdFx0XHRpZiAoIXNlbGVjdC5zZWxlY3RBbGxDaGVja2JveC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0aWYgKG8uY2hlY2tib3guaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0cGFyYW1zQXJyYXkuYXBwZW5kKHNlbGVjdC5uYW1lICsgJ1tdJywgby52YWx1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRsb2NhdGlvbi5hc3NpZ24obG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWUgKyAnPycgKyBwYXJhbXNBcnJheS50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHRcdFx0XHJcblx0XHRmdW5jdGlvbiBzb3J0RGVzYygpIHtcclxuXHRcdFx0cGFyYW1zQXJyYXkuZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdGlmIChwYXJhbXNBcnJheS5nZXQoJ3NvcnREZXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRwYXJhbXNBcnJheS5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cGFyYW1zQXJyYXkuc2V0KCdzb3J0RGVzYycsIHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0fVx0XHJcblx0XHRcdGZpbHRlcigpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRcclxufSk7XHJcblxyXG5cdHZhciBjcmVhdGUgPSB7XHJcblx0XHRkaXY6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcclxuXHRcdFx0XHJcblx0XHRcdDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGlucHV0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0XHQuYXR0cigndHlwZScsICd0ZXh0JylcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20nKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRjaGVja2JveDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpXHJcblx0XHRcdFx0LmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtaW5wdXQnKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRvcHRpb246IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSlcclxuXHRcdFx0XHQuYXR0cigndmFsdWUnLCAnJylcclxuXHRcdFx0O1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0bGFiZWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtbGFiZWwgdy0xMDAgdGV4dC1ub3dyYXAnKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRtZW51QnV0dG9uOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXNtIGJ0bi1wcmltYXJ5IHRleHQtbm93cmFwIHJvdW5kZWQtMCcpXHJcblx0XHRcdDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdHNtYWxsQnV0dG9uOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXNtIG14LTEnKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0fTtcclxuXHRcclxuXHR2YXIgdGV4dCA9IHtcclxuXHQgICAgbm9uZVNlbGVjdGVkOiAnTm9uZSBzZWxlY3RlZCcsXHJcblx0ICAgIG11bHRpcGxlU2VwYXJhdG9yOiAnLCAnLFxyXG5cdCAgICBzZWxlY3RBbGw6ICdTZWxlY3QgYWxsJyxcclxuXHQgICAgbm90QXBwbGljYWJsZTogJ24vYScsXHJcblx0ICAgIGZpbHRlcjogJ0ZpbHRlcidcclxuXHR9O1xyXG5cdFxyXG5cdHZhciBpY29uID0ge1xyXG5cdFx0YXJyb3dVcDpcclxuXHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1hcnJvdy1iYXItdXBcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS4zNTQgNS44NTRhLjUuNSAwIDAwMC0uNzA4bC0zLTNhLjUuNSAwIDAwLS43MDggMGwtMyAzYS41LjUgMCAxMC43MDguNzA4TDggMy4yMDdsMi42NDYgMi42NDdhLjUuNSAwIDAwLjcwOCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggMTBhLjUuNSAwIDAwLjUtLjVWM2EuNS41IDAgMDAtMSAwdjYuNWEuNS41IDAgMDAuNS41em0tNC44IDEuNmMwLS4yMi4xOC0uNC40LS40aDguOGEuNC40IDAgMDEwIC44SDMuNmEuNC40IDAgMDEtLjQtLjR6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcdFxyXG5cdFx0YXJyb3dEb3duOlxyXG5cdFx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktYXJyb3ctYmFyLWRvd25cIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuMzU0IDEwLjE0NmEuNS41IDAgMDEwIC43MDhsLTMgM2EuNS41IDAgMDEtLjcwOCAwbC0zLTNhLjUuNSAwIDAxLjcwOC0uNzA4TDggMTIuNzkzbDIuNjQ2LTIuNjQ3YS41LjUgMCAwMS43MDggMHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCA2YS41LjUgMCAwMS41LjVWMTNhLjUuNSAwIDAxLTEgMFY2LjVBLjUuNSAwIDAxOCA2ek0yIDMuNWEuNS41IDAgMDEuNS0uNWgxMWEuNS41IDAgMDEwIDFoLTExYS41LjUgMCAwMS0uNS0uNXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0XHRmdW5uZWw6XHJcblx0XHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1mdW5uZWxcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEuNSAxLjVBLjUuNSAwIDAxMiAxaDEyYS41LjUgMCAwMS41LjV2MmEuNS41IDAgMDEtLjEyOC4zMzRMMTAgOC42OTJWMTMuNWEuNS41IDAgMDEtLjM0Mi40NzRsLTMgMUEuNS41IDAgMDE2IDE0LjVWOC42OTJMMS42MjggMy44MzRBLjUuNSAwIDAxMS41IDMuNXYtMnptMSAuNXYxLjMwOGw0LjM3MiA0Ljg1OEEuNS41IDAgMDE3IDguNXY1LjMwNmwyLS42NjZWOC41YS41LjUgMCAwMS4xMjgtLjMzNEwxMy41IDMuMzA4VjJoLTExelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcdFx0XHJcblx0XHRmdW5uZWxGaWxsOlxyXG5cdFx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktZnVubmVsLWZpbGxcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdFx0JzxwYXRoIGQ9XCJNMiAzLjV2LTJoMTJ2MmwtNC41IDV2NWwtMyAxdi02TDIgMy41elwiLz4nICtcclxuXHRcdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xLjUgMS41QS41LjUgMCAwMTIgMWgxMmEuNS41IDAgMDEuNS41djJhLjUuNSAwIDAxLS4xMjguMzM0TDEwIDguNjkyVjEzLjVhLjUuNSAwIDAxLS4zNDIuNDc0bC0zIDFBLjUuNSAwIDAxNiAxNC41VjguNjkyTDEuNjI4IDMuODM0QS41LjUgMCAwMTEuNSAzLjV2LTJ6bTEgLjV2MS4zMDhsNC4zNzIgNC44NThBLjUuNSAwIDAxNyA4LjV2NS4zMDZsMi0uNjY2VjguNWEuNS41IDAgMDEuMTI4LS4zMzRMMTMuNSAzLjMwOFYyaC0xMXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9