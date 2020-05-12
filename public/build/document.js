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

__webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");

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

__webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");

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
      var multipleAttr = _typeof($(this).attr('multiple')) !== ( true ? "undefined" : undefined) && $(this).attr('multiple') !== false;
      var name = $(this).prop('name') + (multipleAttr ? '[]' : '');
      var select = {
        element: $(this),
        id: $(this).prop('id'),
        name: name,
        multiple: multipleAttr,
        title: $(this).data('title'),
        options: []
      };
      $(this).find('option').each(function () {
        select.options.push({
          value: $(this).attr('value'),
          text: $(this).text(),
          selected: paramsArray.getAll(name).includes($(this).attr('value'))
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
        var _loop = function _loop() {
          var select = _step.value;
          select.content = tableHeader.dropdownMenu.append(create.div).children().last().addClass('mx-1').css('min-width', '15em');

          if (select.multiple) {
            select.header = select.content.append(create.div).children().last().addClass('text-center border-bottom border-dark pb-2 px-1');
            select.header.append(create.smallButton).children().last().append(icon.arrowUp).addClass('px-2 ' + (paramsArray.get('sortAsc') == select.name ? 'btn-outline-primary bg-dark text-white' : 'btn-primary')).on('click', sortAsc);
            select.header.append(create.smallButton).children().last().text(text.filter).addClass('px-3 btn-primary').on('click', filter);
            select.header.append(create.smallButton).children().last().append(icon.arrowDown).addClass('px-2 ' + (paramsArray.get('sortDesc') == select.name ? 'btn-outline-primary bg-dark text-white' : 'btn-primary')).on('click', sortDesc);
            select.search = select.header.append(create.div).children().last().addClass('text-center border-bottom border-dark p-2');
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
            select.selectAllDiv = select.body.append(create.div).children().last().addClass('custom-control custom-checkbox');
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
                o.div = select.body.append(create.div).children().last().addClass('custom-control custom-checkbox');
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
                  select.body.find('input').not(this).prop('checked', false);
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
            paramsArray["delete"](select.name);

            if (!select.selectAllCheckbox.is(':checked')) {
              var _iterator10 = _createForOfIteratorHelper(select.options),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var _o6 = _step10.value;

                  if (_o6.checkbox.is(':checked')) {
                    paramsArray.append(select.name, _o6.value);
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
        };

        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwiZG9jdW1lbnQiLCJyZWFkeSIsInBhcmFtc0FycmF5IiwiZGVjb2RlVVJJQ29tcG9uZW50Iiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJzbGljZSIsIm9uIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsImZpbmQiLCJlYWNoIiwidmFsIiwidG9TdHJpbmciLCJhdHRyIiwiY3JlYXRlVGFibGVIZWFkZXIiLCJzdGlja3lUYWJsZUhlYWRlcnMiLCJoaWRlIiwiaW5wdXQiLCJkZWxlZ2F0ZVRhcmdldCIsImlzIiwiZ2V0QWxsIiwiaW5kZXgiLCJpbmRleE9mIiwiZGF0YSIsInNwbGljZSIsInB1c2giLCJmb3JFYWNoIiwiZSIsImFwcGVuZCIsImFzc2lnbiIsIm9yaWdpbiIsInBhdGhuYW1lIiwibm90IiwicHJvcCIsImxpbmVDaGVja2VkIiwiZW1wdHkiLCJhamF4IiwidXJsIiwicmVsYXRlZFRhcmdldCIsInR5cGUiLCJzdWNjZXNzIiwicmVzdWx0IiwiaHRtbCIsImdldERldGFpbCIsImhhc0NsYXNzIiwidHJpZ2dlciIsInRoYXQiLCJwYXJlbnQiLCJyZW1vdmVDbGFzcyIsImFkZENsYXNzIiwiZ2V0UmV2aWV3IiwibWV0aG9kIiwic2VyaWFsaXplQXJyYXkiLCJjaGVja2VkIiwidW5jaGVja2VkIiwic2hvdyIsInRhYmxlSGVhZGVyIiwiZWxlbWVudCIsImlkIiwidGl0bGUiLCJzb3J0IiwiaXNGaWx0ZXJlZCIsImlzU29ydGVkQXNjIiwiaXNTb3J0ZWREZXNjIiwic2VsZWN0cyIsIm11bHRpcGxlQXR0ciIsIm5hbWUiLCJzZWxlY3QiLCJtdWx0aXBsZSIsIm9wdGlvbnMiLCJ2YWx1ZSIsInRleHQiLCJzZWxlY3RlZCIsImluY2x1ZGVzIiwiaGFzIiwiZ2V0IiwibGVuZ3RoIiwiZHJvcGRvd25CdXR0b24iLCJjcmVhdGUiLCJkaXYiLCJjaGlsZHJlbiIsImxhc3QiLCJjbGlja0V2ZW50IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiZHJvcGRvd25NZW51IiwibWVudUJ1dHRvbiIsImNzcyIsImljb24iLCJmdW5uZWxGaWxsIiwiZnVubmVsIiwiYXJyb3dVcCIsImFycm93RG93biIsImNyZWF0ZU1lbnUiLCJjb250ZW50IiwiaGVhZGVyIiwic21hbGxCdXR0b24iLCJzb3J0QXNjIiwiZmlsdGVyIiwic29ydERlc2MiLCJzZWFyY2hWYWx1ZSIsInRvTG93ZXJDYXNlIiwic2VsZWN0QWxsRGl2IiwibyIsImNoZWNrYm94IiwiYm9keSIsInNlbGVjdEFsbENoZWNrYm94Iiwic2VsZWN0QWxsTGFiZWwiLCJsYWJlbCIsInNlbGVjdEFsbCIsIm5vdEFwcGxpY2FibGVEaXYiLCJub3RBcHBsaWNhYmxlQ2hlY2tib3giLCJub3RBcHBsaWNhYmxlTGFiZWwiLCJub3RBcHBsaWNhYmxlIiwic2V0IiwiY3JlYXRlRWxlbWVudCIsIm9wdGlvbiIsIm5vbmVTZWxlY3RlZCIsIm11bHRpcGxlU2VwYXJhdG9yIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLDhEQUFELENBQXRCOztBQUNBQSxtQkFBTyxDQUFDLGlHQUFELENBQVA7O0FBRUFBLG1CQUFPLENBQUMsd0RBQUQsQ0FBUCxDLENBRUE7QUFDQTs7O0FBRUEsSUFBTUUsZUFBZSxHQUFHRixtQkFBTyxDQUFDLDBGQUFELENBQS9COztBQUVBRCxDQUFDLENBQUNJLFFBQUQsQ0FBRCxDQUFZQyxLQUFa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O0FBT1ZDLFdBQVMsRUFDUCwySUFDRyx3S0FESCxHQUVHLHFLQUZILEdBR0EsUUFYUTtBQWFWRixRQUFNLEVBQ0osbUlBQ0MsMFNBREQsR0FFQSxRQWhCUTtBQWtCVkQsWUFBVSxFQUNSLHdJQUNDLG9EQURELEdBRUMsMFNBRkQsR0FHQTtBQXRCUSxDQUFYLEMiLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbmNvbnN0IHBvcHBlciA9IHJlcXVpcmUoJ3BvcHBlci5qcycpO1xyXG5yZXF1aXJlKCdzdGlja3ktdGFibGUtaGVhZGVycycpO1xyXG5cclxucmVxdWlyZSgnLi4vY3NzL2RvY3VtZW50LnNjc3MnKTtcclxuXHJcbi8vcmVxdWlyZSgnLi9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5qcycpO1xyXG4vL3JlcXVpcmUoJy4vbXVsdGlzZWxlY3QvZnJfRlIuanMnKTtcclxuXHJcbmNvbnN0IFVSTFNlYXJjaFBhcmFtcyA9IHJlcXVpcmUoJ0B1bmdhcC91cmwtc2VhcmNoLXBhcmFtcy9janMnKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdHZhciBwYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoZGVjb2RlVVJJQ29tcG9uZW50KHdpbmRvdy5sb2NhdGlvbi5zZWFyY2guc2xpY2UoMSkpKTtcclxuXHRcclxuXHQkKCcjZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQ7XHJcblx0XHQkKGV2ZW50LnRhcmdldCkuZmluZCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCQodGhpcykudmFsKCkudG9TdHJpbmcoKSAgPT0gJycpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCd0YWJsZScpLmZpbmQoJ3RoW2RhdGEtdGl0bGVdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdGNyZWF0ZVRhYmxlSGVhZGVyKHRoaXMpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJ3RhYmxlJykuc3RpY2t5VGFibGVIZWFkZXJzKCk7XHJcblx0XHJcblx0JCgnI2RvY3VtZW50X2VkaXQnKS5oaWRlKCk7XHJcblx0JCgnI2RvY3VtZW50X21vdmUnKS5oaWRlKCk7XHJcblx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLmhpZGUoKTtcclxuXHQkKCcjdmVyc2lvbl9tZW51JykuaGlkZSgpO1xyXG5cdFxyXG5cdCQoJyNkaXNwbGF5JykuZmluZCgnYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcclxuXHRcdGlmIChpbnB1dCA9ICQoZXZlbnQuZGVsZWdhdGVUYXJnZXQpLmZpbmQoJ2lucHV0JykpIHtcclxuXHRcdFx0aW5wdXQuYXR0cignY2hlY2tlZCcsICFpbnB1dC5pcygnOmNoZWNrZWQnKSk7XHJcblx0XHRcdHZhciBoaWRlID0gcGFyYW1zQXJyYXkuZ2V0QWxsKCdoaWRlW10nKTtcclxuXHRcdFx0dmFyIGluZGV4ID0gaGlkZS5pbmRleE9mKGlucHV0LmRhdGEoJ3ZhbHVlJykpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGlucHV0LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0aWYgKGluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRcdGhpZGUuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0aWYgKGluZGV4ID09IC0xICYmIGlucHV0LmRhdGEoJ3ZhbHVlJykpIHtcclxuXHRcdFx0XHRcdGhpZGUucHVzaChpbnB1dC5kYXRhKCd2YWx1ZScpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0cGFyYW1zQXJyYXkuZGVsZXRlKCdoaWRlW10nKTtcclxuXHRcdFx0aGlkZS5mb3JFYWNoKGUgPT4gcGFyYW1zQXJyYXkuYXBwZW5kKCdoaWRlW10nLCBlKSk7XHJcblx0XHRcdFxyXG5cdFx0XHRsb2NhdGlvbi5hc3NpZ24obG9jYXRpb24ub3JpZ2luICsgbG9jYXRpb24ucGF0aG5hbWUgKyAnPycgKyBwYXJhbXNBcnJheS50b1N0cmluZygpKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZGlzcGxheScpLm5vdCgnYScpLm9uKCdjaGFuZ2UgY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJ3RkJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdCQodGhpcykub24oJ2NsaWNrJywgbGluZUNoZWNrZWQpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkZXRhaWwnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcclxuXHRcdCQoJy5tb2RhbC1ib2R5JylcclxuXHRcdFx0LmVtcHR5KClcclxuXHRcdFx0LmFwcGVuZCgnPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+JyArXHJcblx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+JyArXHJcblx0XHRcdFx0XHRcdFx0JzxzcGFuIGNsYXNzPVwic3Itb25seVwiPkxvYWRpbmcuLi48L3NwYW4+JyArXHJcblx0XHRcdFx0XHRcdCc8L2Rpdj4nICtcclxuXHRcdFx0XHRcdCc8L2Rpdj4nKTtcclxuXHRcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybCA6ICQoZXZlbnQucmVsYXRlZFRhcmdldCkuZGF0YSgndXJsJyksXHJcblx0XHRcdHR5cGU6ICdHRVQnLFxyXG5cdFx0XHRcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0JCgnLm1vZGFsLWJvZHknKS5lbXB0eSgpO1xyXG5cdFx0XHRcdCQoJy5tb2RhbC1ib2R5JykuaHRtbChyZXN1bHQpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCQoJyN2ZXJzaW9uX3RhYnMnKS5maW5kKCdhJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFx0Z2V0RGV0YWlsKGV2ZW50LnRhcmdldCk7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9lZGl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArICc/JyArIHBhcmFtc0FycmF5LnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgJz8nICsgcGFyYW1zQXJyYXkudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArICc/JyArIHBhcmFtc0FycmF5LnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2ZXJzaW9uX25ldycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArICc/JyArIHBhcmFtc0FycmF5LnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2ZXJzaW9uX2VkaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyAnPycgKyBwYXJhbXNBcnJheS50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdmVyc2lvbl9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyAnPycgKyBwYXJhbXNBcnJheS50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIGdldERldGFpbFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0ZnVuY3Rpb24gZ2V0RGV0YWlsKHRoYXQpIHtcclxuXHRcdCQodGhhdCkucGFyZW50KCkuZmluZCgnYS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKHRoYXQpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFxyXG5cdFx0JCgnI3ZlcnNpb24nKVxyXG5cdFx0XHQuZW1wdHkoKVxyXG5cdFx0XHQuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj4nICtcclxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+JyArXHJcblx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPicgK1xyXG5cdFx0XHRcdFx0JzwvZGl2PicgK1xyXG5cdFx0XHRcdCc8L2Rpdj4nKTtcclxuXHRcdFxyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsIDogJCh0aGF0KS5kYXRhKCd1cmwnKSxcclxuXHRcdFx0dHlwZTogJ0dFVCcsXHJcblx0XHRcdFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuXHRcdFx0XHQkKCcjdmVyc2lvbicpLmVtcHR5KCk7XHJcblx0XHRcdFx0JCgnI3ZlcnNpb24nKS5odG1sKHJlc3VsdCk7XHJcblx0XHRcdFx0JCgnI3Jldmlld190YWJzJykuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdGdldFJldmlldyhldmVudC50YXJnZXQpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8qXHJcblx0XHRcdFx0XHQkKHRoaXMpLm9uKCdzaG93LmJzLnRhYicsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcdFx0XHRcdGV2ZW50LnRhcmdldC50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHQqL1xyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBnZXRSZXZpZXdcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGdldFJldmlldyh0aGF0KSB7XHJcblx0XHQkKHRoYXQpLnBhcmVudCgpLmZpbmQoJ2EuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCh0aGF0KS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcclxuXHRcdHZhciB1cmwgPSAkKHRoYXQpLmRhdGEoJ3VybCcpO1xyXG5cdFx0dmFyIG1ldGhvZCA9ICQoJ2Zvcm1bbmFtZT1cInJldmlld1wiXScpLmF0dHIoJ21ldGhvZCcpIHx8ICdHRVQnO1xyXG5cdFx0dmFyIGRhdGEgPSAkKCdmb3JtW25hbWU9XCJyZXZpZXdcIl0nKS5zZXJpYWxpemVBcnJheSgpXHJcblx0XHRcclxuXHRcdCQoJyNyZXZpZXcnKVxyXG5cdFx0XHQuZW1wdHkoKVxyXG5cdFx0XHQuYXBwZW5kKCc8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj4nICtcclxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXIgc3Bpbm5lci1ib3JkZXItc21cIiByb2xlPVwic3RhdHVzXCI+JyArXHJcblx0XHRcdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj5Mb2FkaW5nLi4uPC9zcGFuPicgK1xyXG5cdFx0XHRcdFx0JzwvZGl2PicgK1xyXG5cdFx0XHRcdCc8L2Rpdj4nKTtcclxuXHRcdFxyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsIDogdXJsLFxyXG5cdFx0XHR0eXBlOiBtZXRob2QsXHJcblx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuXHRcdFx0XHQkKCcjcmV2aWV3JykuZW1wdHkoKTtcclxuXHRcdFx0XHQkKCcjcmV2aWV3JykuaHRtbChyZXN1bHQpO1xyXG5cdFx0XHRcdCQoJyNyZXZpZXcnKS5maW5kKCdidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGdldFJldmlldyh0aGlzKVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIGxpbmVDaGVja2VkXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHRmdW5jdGlvbiBsaW5lQ2hlY2tlZCgpIHtcclxuXHRcdFxyXG5cdFx0dmFyIGNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdHZhciB1bmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcclxuXHRcdGlmICgkKHRoaXMpLnByb3AoJ2lkJykgPT0gJ2NoZWNrX2FsbCcpIHtcclxuXHRcdFx0XHJcblx0XHRcdCQoJ3RhYmxlJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjaGVja2VkID0gJCgnI2NoZWNrX2FsbCcpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdHVuY2hlY2tlZCA9ICFjaGVja2VkO1xyXG5cdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcclxuXHRcdFx0JCgndGFibGUnKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLnByb3AoJ2lkJykgIT0gJ2NoZWNrX2FsbCcpIHtcclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdGNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dW5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKGNoZWNrZWQgJiYgdW5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdpbmRldGVybWluYXRlJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRwYXJhbXNBcnJheS5kZWxldGUoJ2lkW10nKTtcclxuXHRcdGlmIChjaGVja2VkKSB7XHJcblx0XHRcdCQoJ3RhYmxlJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5wcm9wKCdpZCcpICE9ICdjaGVja19hbGwnICYmICQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdHBhcmFtc0FycmF5LmFwcGVuZCgnaWRbXScsICQodGhpcykudmFsKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZWRpdCcpLnNob3coKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X21vdmUnKS5zaG93KCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9kZWxldGUnKS5zaG93KCk7XHJcblx0XHRcdCQoJyN2ZXJzaW9uX21lbnUnKS5zaG93KCk7XHRcclxuXHRcdH0gZWxzZSBpZih1bmNoZWNrZWQpIHtcclxuXHRcdFx0JCgnI3ZlcnNpb24nKS52YWwoJycpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZWRpdCcpLmhpZGUoKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X21vdmUnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyN2ZXJzaW9uX21lbnUnKS5oaWRlKCk7XHRcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyB0YWJsZUhlYWRlclxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0ZnVuY3Rpb24gY3JlYXRlVGFibGVIZWFkZXIodGhhdCkge1xyXG5cdFx0XHJcblx0XHR2YXIgdGFibGVIZWFkZXIgPSB7XHJcblx0XHRcdGVsZW1lbnQ6ICQodGhhdCksXHJcblx0XHRcdGlkOiAkKHRoYXQpLmF0dHIoJ2lkJyksXHJcblx0XHRcdHRpdGxlOiAkKHRoYXQpLmRhdGEoJ3RpdGxlJyksXHJcblx0XHRcdHNvcnQ6ICQodGhhdCkuZGF0YSgnc29ydCcpLFxyXG5cdFx0XHRpc0ZpbHRlcmVkOiBmYWxzZSxcclxuXHRcdFx0aXNTb3J0ZWRBc2M6IGZhbHNlLFxyXG5cdFx0XHRpc1NvcnRlZERlc2M6IGZhbHNlLFxyXG5cdFx0XHRzZWxlY3RzOiBbXSxcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0JCh0aGF0KS5maW5kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIG11bHRpcGxlQXR0ciA9ICh0eXBlb2YgJCh0aGlzKS5hdHRyKCdtdWx0aXBsZScpICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmICQodGhpcykuYXR0cignbXVsdGlwbGUnKSAhPT0gZmFsc2UpO1xyXG5cdFx0XHR2YXIgbmFtZSA9ICQodGhpcykucHJvcCgnbmFtZScpICsgKChtdWx0aXBsZUF0dHIpPydbXSc6JycpO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIHNlbGVjdCA9IHtcclxuXHRcdFx0XHRcdGVsZW1lbnQ6ICQodGhpcyksXHJcblx0XHRcdFx0XHRpZDogJCh0aGlzKS5wcm9wKCdpZCcpLFxyXG5cdFx0XHRcdFx0bmFtZTogbmFtZSxcclxuXHRcdFx0XHRcdG11bHRpcGxlOiBtdWx0aXBsZUF0dHIsXHJcblx0XHRcdFx0XHR0aXRsZTogJCh0aGlzKS5kYXRhKCd0aXRsZScpLFxyXG5cdFx0XHRcdFx0b3B0aW9uczogW10sXHJcblx0XHRcdH07XHJcblx0XHRcdFxyXG5cdFx0XHQkKHRoaXMpLmZpbmQoJ29wdGlvbicpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0c2VsZWN0Lm9wdGlvbnMucHVzaCh7XHJcblx0XHRcdFx0XHR2YWx1ZTogJCh0aGlzKS5hdHRyKCd2YWx1ZScpLFxyXG5cdFx0XHRcdFx0dGV4dDogJCh0aGlzKS50ZXh0KCksXHJcblx0XHRcdFx0XHRzZWxlY3RlZDogcGFyYW1zQXJyYXkuZ2V0QWxsKG5hbWUpLmluY2x1ZGVzKCQodGhpcykuYXR0cigndmFsdWUnKSksXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuc2VsZWN0cy5wdXNoKHNlbGVjdCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAocGFyYW1zQXJyYXkuaGFzKG5hbWUpKSB0YWJsZUhlYWRlci5pc0ZpbHRlcmVkID0gdHJ1ZTtcclxuXHRcdFx0aWYgKHBhcmFtc0FycmF5LmdldCgnc29ydERlc2MnKSA9PSBuYW1lKSB0YWJsZUhlYWRlci5pc1NvcnRlZEFzYyA9IHRydWU7XHJcblx0XHRcdGlmIChwYXJhbXNBcnJheS5nZXQoJ3NvcnREZXNjJykgPT0gbmFtZSkgdGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjID0gdHJ1ZTtcclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoKSB7XHJcblx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuZHJvcGRvd25CdXR0b24gPSB0YWJsZUhlYWRlci5lbGVtZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnYnRuLWdyb3VwIHctMTAwJylcclxuXHRcdFx0XHQuYXR0cigncm9sZScsICdncm91cCcpXHJcblx0XHRcdFx0Lm9uKCdoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYoZS5jbGlja0V2ZW50ICYmICQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0LnBhcmVudE5vZGUsIGUuY2xpY2tFdmVudC50YXJnZXQpKSB7XHJcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuZHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuZHJvcGRvd25CdXR0b24uYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygndy0xMDAnKVxyXG5cdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdFx0LnRleHQodGFibGVIZWFkZXIudGl0bGUpXHJcblx0XHRcdDtcclxuXHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5kcm9wZG93bkJ1dHRvbi5hcHBlbmQoY3JlYXRlLm1lbnVCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdweC0wJylcclxuXHRcdFx0XHQuY3NzKCd3aWR0aCcsICczZW0nKVxyXG5cdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ2JfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHRcdC5hdHRyKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpXHJcblx0XHRcdFx0LmF0dHIoJ2FyaWEtaGFzcG9wdXAnLCB0cnVlKVxyXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXHJcblx0XHRcdFx0LmFwcGVuZCh0YWJsZUhlYWRlci5pc0ZpbHRlcmVkP2ljb24uZnVubmVsRmlsbDppY29uLmZ1bm5lbClcclxuXHRcdFx0XHQuYXBwZW5kKHRhYmxlSGVhZGVyLmlzU29ydGVkQXNjP2ljb24uYXJyb3dVcDonJylcclxuXHRcdFx0XHQuYXBwZW5kKHRhYmxlSGVhZGVyLmlzU29ydGVkRGVzYz9pY29uLmFycm93RG93bjonJylcclxuXHRcdFx0O1xyXG5cdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLmRyb3Bkb3duTWVudSA9IHRhYmxlSGVhZGVyLmRyb3Bkb3duQnV0dG9uLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnZHJvcGRvd24tbWVudScpXHJcblx0XHRcdFx0LmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsICdiXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2QtZmxleCBmbGV4LXJvdycpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLmRyb3Bkb3duQnV0dG9uLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgY3JlYXRlTWVudSk7XHJcblx0XHRcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5lbGVtZW50LmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3ctMTAwJylcclxuXHRcdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcclxuXHRcdGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQvL3NlbGVjdC5kcm9wZG93bk1lbnUuY3NzKCd6SW5kZXgnLCAxKTtcclxuXHRcdFx0dGFibGVIZWFkZXIuZHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRmb3IgKGxldCBzZWxlY3Qgb2YgdGFibGVIZWFkZXIuc2VsZWN0cykge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5jb250ZW50ID0gdGFibGVIZWFkZXIuZHJvcGRvd25NZW51LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdteC0xJylcclxuXHRcdFx0XHRcdC5jc3MoJ21pbi13aWR0aCcsICcxNWVtJylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHNlbGVjdC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdFx0c2VsZWN0LmhlYWRlciA9IHNlbGVjdC5jb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtY2VudGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLWRhcmsgcGItMiBweC0xJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0c2VsZWN0LmhlYWRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGljb24uYXJyb3dVcClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdweC0yICcgKyAocGFyYW1zQXJyYXkuZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWU/J2J0bi1vdXRsaW5lLXByaW1hcnkgYmctZGFyayB0ZXh0LXdoaXRlJzonYnRuLXByaW1hcnknKSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIHNvcnRBc2MpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHNlbGVjdC5oZWFkZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LnRleHQodGV4dC5maWx0ZXIpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMyBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmaWx0ZXIpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHNlbGVjdC5oZWFkZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChpY29uLmFycm93RG93bilcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdweC0yICcgKyAocGFyYW1zQXJyYXkuZ2V0KCdzb3J0RGVzYycpID09IHNlbGVjdC5uYW1lPydidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J2J0bi1wcmltYXJ5JykpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBzb3J0RGVzYylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdHNlbGVjdC5zZWFyY2ggPSBzZWxlY3QuaGVhZGVyLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtY2VudGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLWRhcmsgcC0yJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0c2VsZWN0LnNlYXJjaC5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHNlYXJjaFZhbHVlID0gJCh0aGlzKS52YWwoKS50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKHNlYXJjaFZhbHVlID09ICcnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsRGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvLmRpdi5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG8uY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LnNlbGVjdEFsbERpdi5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG8udGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVmFsdWUpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0by5kaXYuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG8uY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvLmRpdi5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0by5jaGVja2JveC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmJvZHkgPSBzZWxlY3QuY29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMicgKyAoKHNlbGVjdC5tdWx0aXBsZSk/JyBwdC0zJzonJykpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChzZWxlY3QubXVsdGlwbGUpIHtcclxuXHRcdFx0XHRcdHNlbGVjdC5zZWxlY3RBbGxEaXYgPSBzZWxlY3QuYm9keS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsQ2hlY2tib3ggPSBzZWxlY3Quc2VsZWN0QWxsRGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ19zZWxlY3RBbGwnKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHZhciBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0by5jaGVja2JveC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsTGFiZWwgPSBzZWxlY3Quc2VsZWN0QWxsRGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfc2VsZWN0QWxsJylcclxuXHRcdFx0XHRcdFx0LnRleHQodGV4dC5zZWxlY3RBbGwpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0by5kaXYgPSBzZWxlY3QuYm9keS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdG8uY2hlY2tib3ggPSBvLmRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ18nICsgby52YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsIG8uc2VsZWN0ZWQpXHJcblx0XHRcdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFyIGNoZWNrZWQ7XHJcblx0XHRcdFx0XHRcdFx0XHR2YXIgdW5jaGVja2VkO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCQoby5jaGVja2JveCkuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChjaGVja2VkICYmIHVuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsQ2hlY2tib3gucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0LnNlbGVjdEFsbENoZWNrYm94LnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5zZWxlY3RBbGxDaGVja2JveC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRvLmxhYmVsID0gby5kaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdC50ZXh0KG8udGV4dClcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0c2VsZWN0Lm5vdEFwcGxpY2FibGVEaXYgPSBzZWxlY3QuYm9keS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3Qubm90QXBwbGljYWJsZUNoZWNrYm94ID0gc2VsZWN0Lm5vdEFwcGxpY2FibGVEaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnX25vdEFwcGxpY2FibGUnKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHZhciBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0by5jaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRwYXJhbXNBcnJheS5kZWxldGUoc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdGxvY2F0aW9uLmFzc2lnbihsb2NhdGlvbi5vcmlnaW4gKyBsb2NhdGlvbi5wYXRobmFtZSArICc/JyArIHBhcmFtc0FycmF5LnRvU3RyaW5nKCkpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0c2VsZWN0Lm5vdEFwcGxpY2FibGVMYWJlbCA9IHNlbGVjdC5ub3RBcHBsaWNhYmxlRGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfbm90QXBwbGljYWJsZScpXHJcblx0XHRcdFx0XHRcdC50ZXh0KHRleHQubm90QXBwbGljYWJsZSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChjb25zdCBvIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRvLmRpdiA9IHNlbGVjdC5ib2R5LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0by5jaGVja2JveCA9IG8uZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgcGFyYW1zQXJyYXkuZ2V0KHNlbGVjdC5uYW1lKSA9PSBvLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LmJvZHkuZmluZCgnaW5wdXQnKS5ub3QodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmFtc0FycmF5LmRlbGV0ZShzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc2VsZWN0Lm5vdEFwcGxpY2FibGVDaGVja2JveC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoby5jaGVja2JveC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cGFyYW1zQXJyYXkuYXBwZW5kKHNlbGVjdC5uYW1lLCBvLnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0bG9jYXRpb24uYXNzaWduKGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lICsgJz8nICsgcGFyYW1zQXJyYXkudG9TdHJpbmcoKSk7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0by5sYWJlbCA9IG8uZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIHNlbGVjdC5uYW1lICsgJ18nICsgby52YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHQudGV4dChvLnRleHQpXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRcdGZ1bmN0aW9uIHNvcnRBc2MoKSB7XHJcblx0XHRcdFx0XHRwYXJhbXNBcnJheS5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdFx0XHRpZiAocGFyYW1zQXJyYXkuZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0cGFyYW1zQXJyYXkuZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRwYXJhbXNBcnJheS5zZXQoJ3NvcnRBc2MnLCBzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdGZpbHRlcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGZ1bmN0aW9uIGZpbHRlcigpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cGFyYW1zQXJyYXkuZGVsZXRlKHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHRcdGlmICghc2VsZWN0LnNlbGVjdEFsbENoZWNrYm94LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoby5jaGVja2JveC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0cGFyYW1zQXJyYXkuYXBwZW5kKHNlbGVjdC5uYW1lLCBvLnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bG9jYXRpb24uYXNzaWduKGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lICsgJz8nICsgcGFyYW1zQXJyYXkudG9TdHJpbmcoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0ZnVuY3Rpb24gc29ydERlc2MoKSB7XHJcblx0XHRcdFx0XHRwYXJhbXNBcnJheS5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHRcdGlmIChwYXJhbXNBcnJheS5nZXQoJ3NvcnREZXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0cGFyYW1zQXJyYXkuZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cGFyYW1zQXJyYXkuc2V0KCdzb3J0RGVzYycsIHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0ZmlsdGVyKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRcclxufSk7XHJcblxyXG5cdHZhciBjcmVhdGUgPSB7XHJcblx0XHRkaXY6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcclxuXHRcdFx0XHJcblx0XHRcdDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGlucHV0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0XHQuYXR0cigndHlwZScsICd0ZXh0JylcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20nKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRjaGVja2JveDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpXHJcblx0XHRcdFx0LmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtaW5wdXQnKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRvcHRpb246IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSlcclxuXHRcdFx0XHQuYXR0cigndmFsdWUnLCAnJylcclxuXHRcdFx0O1xyXG5cdFx0fSxcclxuXHRcdFxyXG5cdFx0bGFiZWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtbGFiZWwgdy0xMDAgdGV4dC1ub3dyYXAnKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRtZW51QnV0dG9uOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXNtIGJ0bi1wcmltYXJ5IHRleHQtbm93cmFwIHJvdW5kZWQtMCcpXHJcblx0XHRcdDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdHNtYWxsQnV0dG9uOiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXNtIG14LTEnKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0fTtcclxuXHRcclxuXHR2YXIgdGV4dCA9IHtcclxuXHQgICAgbm9uZVNlbGVjdGVkOiAnTm9uZSBzZWxlY3RlZCcsXHJcblx0ICAgIG11bHRpcGxlU2VwYXJhdG9yOiAnLCAnLFxyXG5cdCAgICBzZWxlY3RBbGw6ICdTZWxlY3QgYWxsJyxcclxuXHQgICAgbm90QXBwbGljYWJsZTogJ24vYScsXHJcblx0ICAgIGZpbHRlcjogJ0ZpbHRlcidcclxuXHR9O1xyXG5cdFxyXG5cdHZhciBpY29uID0ge1xyXG5cdFx0YXJyb3dVcDpcclxuXHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1hcnJvdy1iYXItdXBcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS4zNTQgNS44NTRhLjUuNSAwIDAwMC0uNzA4bC0zLTNhLjUuNSAwIDAwLS43MDggMGwtMyAzYS41LjUgMCAxMC43MDguNzA4TDggMy4yMDdsMi42NDYgMi42NDdhLjUuNSAwIDAwLjcwOCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggMTBhLjUuNSAwIDAwLjUtLjVWM2EuNS41IDAgMDAtMSAwdjYuNWEuNS41IDAgMDAuNS41em0tNC44IDEuNmMwLS4yMi4xOC0uNC40LS40aDguOGEuNC40IDAgMDEwIC44SDMuNmEuNC40IDAgMDEtLjQtLjR6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcdFxyXG5cdFx0YXJyb3dEb3duOlxyXG5cdFx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktYXJyb3ctYmFyLWRvd25cIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuMzU0IDEwLjE0NmEuNS41IDAgMDEwIC43MDhsLTMgM2EuNS41IDAgMDEtLjcwOCAwbC0zLTNhLjUuNSAwIDAxLjcwOC0uNzA4TDggMTIuNzkzbDIuNjQ2LTIuNjQ3YS41LjUgMCAwMS43MDggMHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCA2YS41LjUgMCAwMS41LjVWMTNhLjUuNSAwIDAxLTEgMFY2LjVBLjUuNSAwIDAxOCA2ek0yIDMuNWEuNS41IDAgMDEuNS0uNWgxMWEuNS41IDAgMDEwIDFoLTExYS41LjUgMCAwMS0uNS0uNXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0XHRmdW5uZWw6XHJcblx0XHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1mdW5uZWxcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEuNSAxLjVBLjUuNSAwIDAxMiAxaDEyYS41LjUgMCAwMS41LjV2MmEuNS41IDAgMDEtLjEyOC4zMzRMMTAgOC42OTJWMTMuNWEuNS41IDAgMDEtLjM0Mi40NzRsLTMgMUEuNS41IDAgMDE2IDE0LjVWOC42OTJMMS42MjggMy44MzRBLjUuNSAwIDAxMS41IDMuNXYtMnptMSAuNXYxLjMwOGw0LjM3MiA0Ljg1OEEuNS41IDAgMDE3IDguNXY1LjMwNmwyLS42NjZWOC41YS41LjUgMCAwMS4xMjgtLjMzNEwxMy41IDMuMzA4VjJoLTExelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcdFx0XHJcblx0XHRmdW5uZWxGaWxsOlxyXG5cdFx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktZnVubmVsLWZpbGxcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdFx0JzxwYXRoIGQ9XCJNMiAzLjV2LTJoMTJ2MmwtNC41IDV2NWwtMyAxdi02TDIgMy41elwiLz4nICtcclxuXHRcdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xLjUgMS41QS41LjUgMCAwMTIgMWgxMmEuNS41IDAgMDEuNS41djJhLjUuNSAwIDAxLS4xMjguMzM0TDEwIDguNjkyVjEzLjVhLjUuNSAwIDAxLS4zNDIuNDc0bC0zIDFBLjUuNSAwIDAxNiAxNC41VjguNjkyTDEuNjI4IDMuODM0QS41LjUgMCAwMTEuNSAzLjV2LTJ6bTEgLjV2MS4zMDhsNC4zNzIgNC44NThBLjUuNSAwIDAxNyA4LjV2NS4zMDZsMi0uNjY2VjguNWEuNS41IDAgMDEuMTI4LS4zMzRMMTMuNSAzLjMwOFYyaC0xMXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0fTtcclxuXHJcblxyXG5cclxuXHRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIFxyXG4iXSwic291cmNlUm9vdCI6IiJ9