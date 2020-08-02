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

__webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.includes */ "./node_modules/core-js/modules/es.array.includes.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

__webpack_require__(/*! ../js/app.js */ "./assets/js/app.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

__webpack_require__(/*! sticky-table-headers */ "./node_modules/sticky-table-headers/js/jquery.stickytableheaders.js"); //const tableDragger = require('table-dragger');
//require('jquery-resizable-columns');


__webpack_require__(/*! ../css/document.scss */ "./assets/css/document.scss");

var URLSearchParams = __webpack_require__(/*! @ungap/url-search-params/cjs */ "./node_modules/@ungap/url-search-params/cjs/index.js");

var tableHeaders = []; //---------------
//UrlSearch
//---------------

function UrlSearch() {
  this._paramsArray = new URLSearchParams();
}

UrlSearch.prototype = {
  has: function has(key) {
    return this._paramsArray.has(key);
  },
  get: function get(key) {
    if (/\S+\[\]/g.exec(key)) {
      return this._paramsArray.getAll(key);
    } else {
      return this._paramsArray.get(key);
    }
  },
  set: function set(key, value) {
    if (key == 'vue') {
      this._paramsArray = new URLSearchParams({
        'vue': value
      });
    } else {
      this._paramsArray.set(key, value);
    }
  },
  append: function append(key, value) {
    if (key == 'vue') {
      this._paramsArray = new URLSearchParams({
        'vue': value
      });
    } else {
      this._paramsArray.append(key, value);
    }
  },
  "delete": function _delete(key) {
    this._paramsArray["delete"](key);
  },
  setFromUrl: function setFromUrl(value) {
    var paramsArray = new URLSearchParams(value);

    if (paramsArray.has('vue')) {
      this.set('vue', paramsArray.get('vue'));
    } else {
      this._paramsArray = paramsArray;
    }
  },
  toString: function toString() {
    var urlSearch = this._paramsArray.toString();

    return urlSearch ? '?' + urlSearch : '';
  },
  fetch: function fetch() {
    $('#table > tbody').empty();
    $(icon.loading).insertAfter('#table');
    var that = this;
    $.ajax({
      url: $('#table').data('url') + that.toString(),
      type: 'GET',
      success: function success(result) {
        var searchUrl = $.param(result.query);
        that._paramsArray = new URLSearchParams(searchUrl);
        $('#table').next().remove();
        $('#table').show(); //vue

        $('#vues').find('button[data-value]').each(function () {
          if ($(this).data('value') == that.get('vue')) {
            $(this).attr('class', 'btn btn-outline-primary');
            $(this).parent().find('div > button').attr('class', 'btn btn-outline-primary dropdown-toggle');
          } else {
            $(this).attr('class', 'btn btn-primary');
            $(this).parent().find('div > button').attr('class', 'btn btn-primary dropdown-toggle');
          }
        });

        var _iterator = _createForOfIteratorHelper(tableHeaders),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var tableHeader = _step.value;

            //display
            if (display = that.get('display[' + tableHeader.id + ']')) {
              tableHeader.aDisplay.addClass('btn-outline-primary');
              tableHeader.aDisplay.removeClass('btn-primary');
              tableHeader.chxDisplay.prop('checked', true);
              tableHeader.col.css('width', display + 'em');
              tableHeader.col.show();
              tableHeader.th.show(); //headers

              tableHeader.btnDropdown.empty();
              tableHeader.isFiltered = false;
              tableHeader.isSortedAsc = false;
              tableHeader.isSortedDesc = false;

              var _iterator3 = _createForOfIteratorHelper(tableHeader.selects),
                  _step3;

              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                  var select = _step3.value;

                  if (that.has(select.name)) {
                    tableHeader.isFiltered = true;
                  }

                  if (that.get('sortAsc') == select.name) {
                    tableHeader.isSortedAsc = true;
                  }

                  if (that.get('sortDesc') == select.name) {
                    tableHeader.isSortedDesc = true;
                  }
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }

              tableHeader.btnDropdown.append(tableHeader.isFiltered ? icon.funnelFill : icon.funnel);

              if (tableHeader.isSortedAsc) {
                tableHeader.btnDropdown.append(icon.arrowDown);
              }

              if (tableHeader.isSortedDesc) {
                tableHeader.btnDropdown.append(icon.arrowUp);
              }
            } else {
              tableHeader.aDisplay.addClass('btn-primary');
              tableHeader.aDisplay.removeClass('btn-outline-primary');
              tableHeader.chxDisplay.prop('checked', false);
              tableHeader.col.hide();
              tableHeader.th.hide();
            }
          } //tbody

        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        var _iterator2 = _createForOfIteratorHelper(result.versions),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var version = _step2.value;
            var tr = $('#table > tbody').append(create.tr).children().last();
            var div = tr.append(create.td).children().last().append(create.div).children().last().addClass('custom-control custom-checkbox');
            div.append(create.checkbox).children().last().attr('id', 'c_' + version.id).val(version.id).on('click', lineChecked);
            div.append(create.label).children().last().attr('for', 'c_' + version.id);

            var _iterator4 = _createForOfIteratorHelper(tableHeaders),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _tableHeader = _step4.value;
                data = version[_tableHeader.id];

                if (data !== undefined) {
                  switch (_tableHeader.col.attr('class')) {
                    case 'type-boolean':
                      if (data == 0) data = 'No';
                      if (data == 1) data = 'Yes';

                    case 'type-version':
                    case 'type-date':
                      dataClass = 'text-center';
                      break;

                    case 'type-reference':
                    case 'type-name':
                      dataClass = 'text-left';
                      break;

                    default:
                      dataClass = '';
                  }

                  tr.append(create.td).children().last().addClass(dataClass).text(data);
                } else {
                  _tableHeader.col.hide();

                  _tableHeader.th.hide();
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
            }

            tr.append(create.td).children().last().append(create.smallButton).children().last().addClass('btn-success w-100').attr('data-toggle', 'modal').attr('data-target', '#modal').attr('data-url', version.detailUrl).text(text.details);
          } //pagination

        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        if (result.pageMax > 1) {
          $('#table_container').addClass('mb-4');
          var pageMax = result.pageMax;
          var page = that.get('page') || 1;
          var pageMin = Math.max(1, page - 2);
          ul = $('#pagination').append(create.ul).children().last().addClass('pagination justify-content-center');
          ul.append(create.li).children().last().addClass('page-item' + (page == 1 ? ' disabled' : '')).append(create.a).children().last().addClass('page-link').attr('data-value', Math.max(1, page - 1)).append(create.span).children().last().attr('aria-hidden', true).html('&laquo;');

          for (var i = 0; i < 5; i++) {
            if (pageMax > i) {
              ul.append(create.li).children().last().addClass('page-item' + (page == pageMin + i ? ' disabled' : '')).append(create.a).children().last().addClass('page-link').attr('data-value', pageMin).text(pageMin + i);
            }
          }

          ul.append(create.li).children().last().addClass('page-item' + (page == pageMax ? ' disabled' : '')).append(create.a).children().last().addClass('page-link').attr('data-value', Math.min(pageMax, page + 1)).append(create.span).children().last().attr('aria-hidden', true).html('&raquo;');
        } //$('table').stickyTableHeaders();

      }
    });
  }
}; //---------------
// tableHeader
//---------------

function createTableHeader(that) {
  var tableHeader = {
    col: $(that).closest('table').find('col').eq($(that).index()),
    th: $(that),
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
      slt: $(this),
      id: $(this).prop('id'),
      name: name,
      multiple: multipleAttr,
      title: $(this).data('title'),
      options: []
    };
    $(this).find('option').each(function () {
      select.options.push({
        value: $(this).attr('value'),
        text: $(this).text()
      });
    });
    tableHeader.selects.push(select);
  });

  if (tableHeader.selects.length) {
    tableHeader.divDropdownGroup = tableHeader.th.append(create.div).children().last().addClass('btn-group w-100').attr('role', 'group').on('hide.bs.dropdown', function (e) {
      if (e.clickEvent && $.contains(e.relatedTarget.parentNode, e.clickEvent.target)) {
        e.preventDefault();
      } else {
        tableHeader.divDropdownMenu.empty();
      }
    });
    tableHeader.divDropdownGroup.append(create.menuButton).children().last().addClass('w-100').attr('type', 'button').text(tableHeader.title).on('click', function () {
      if (tableHeader.selects && tableHeader.sort) {
        if (urlSearch.get('sortAsc') == tableHeader.selects[0].name) {
          urlSearch["delete"]('sortAsc');
          urlSearch.set('sortDesc', tableHeader.selects[0].name);
        } else {
          urlSearch["delete"]('sortDesc');
          urlSearch.set('sortAsc', tableHeader.selects[0].name);
        }

        urlSearch.fetch();
      }
    });
    tableHeader.btnDropdown = tableHeader.divDropdownGroup.append(create.menuButton).children().last().addClass('px-0').css('width', '3em').attr('type', 'button').attr('id', 'b_' + tableHeader.id).attr('data-toggle', 'dropdown').attr('aria-haspopup', true).attr('aria-expanded', false);
    tableHeader.divDropdownMenu = tableHeader.divDropdownGroup.append(create.div).children().last().addClass('dropdown-menu').attr('aria-labelledby', 'b_' + tableHeader.id).append(create.div).children().last().addClass('d-flex flex-row');
    tableHeader.divDropdownGroup.on('show.bs.dropdown', createMenu);
  } else {
    tableHeader.btnDropdown = tableHeader.th.append(create.menuButton).children().last().addClass('w-100').text(tableHeader.title).children().last().append(create.div);
  }

  function createMenu() {
    tableHeader.divDropdownMenu.empty();

    var _iterator5 = _createForOfIteratorHelper(tableHeader.selects),
        _step5;

    try {
      var _loop = function _loop() {
        var select = _step5.value;
        select.divContent = tableHeader.divDropdownMenu.append(create.div).children().last().addClass('mx-1').css('min-width', '15em');

        if (select.multiple) {
          if (tableHeader.selects.length > 1) {
            select.divContent.append(create.div).children().last().addClass('text-center border-bottom border-dark pb-2 px-1').append(select.title);
            ;
          }

          select.divFilter = select.divContent.append(create.div).children().last().addClass('text-center p-1');

          if (tableHeader.selects.length == 1) {
            select.btnSortDesc = select.divFilter.append(create.smallButton).children().last().append(icon.arrowUp).addClass(urlSearch.get('sortDesc') == select.name ? 'px-2 btn-outline-primary bg-dark text-white' : 'px-2 btn-primary').on('click', sortDesc);
          }

          select.divFilter.append(create.smallButton).children().last().text(text.filter).addClass('px-3 btn-primary').on('click', filter);

          if (tableHeader.selects.length == 1) {
            select.btnSortAsc = select.divFilter.append(create.smallButton).children().last().append(icon.arrowDown).addClass(urlSearch.get('sortAsc') == select.name ? 'px-2 btn-outline-primary bg-dark text-white' : 'px-2 btn-primary').on('click', sortAsc);
          }

          select.divSearch = select.divContent.append(create.div).children().last().addClass('text-center border-bottom border-dark p-2');
          select.divSearch.append(create.input).children().last().on('input', function () {
            var searchValue = $(this).val().toLowerCase();

            if (searchValue == '') {
              select.divSelectAll.show();

              var _iterator6 = _createForOfIteratorHelper(select.options),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var option = _step6.value;
                  option.div.show();
                  option.chx.prop('checked', false);
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            } else {
              select.divSelectAll.hide();

              var _iterator7 = _createForOfIteratorHelper(select.options),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var _option = _step7.value;

                  if (_option.text.toLowerCase().indexOf(searchValue) == -1) {
                    _option.div.hide();

                    _option.chx.prop('checked', false);
                  } else {
                    _option.div.show();

                    _option.chx.prop('checked', true);
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          });
        }

        select.divList = select.divContent.append(create.div).children().last().addClass('px-2 overflow-auto ' + (select.multiple ? 'pt-3' : 'pt-1')).css('max-height', '20em');

        if (select.multiple) {
          select.divSelectAll = select.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
          select.chxSelectAll = select.divSelectAll.append(create.checkbox).children().last().attr('id', select.name + '_selectAll').on('change', function () {
            var checked = $(this).is(':checked');

            var _iterator8 = _createForOfIteratorHelper(select.options),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var option = _step8.value;
                option.chx.prop('checked', checked);
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }
          });
          select.divSelectAll.append(create.label).children().last().attr('for', select.name + '_selectAll').text(text.selectAll);

          var _iterator9 = _createForOfIteratorHelper(select.options),
              _step9;

          try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              var option = _step9.value;
              option.div = select.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
              option.chx = option.div.append(create.checkbox).children().last().attr('id', select.name + '_' + option.value).attr('checked', urlSearch.get(select.name).includes(option.value)).on('click', function () {
                var checked = false;
                var unchecked = false;

                var _iterator10 = _createForOfIteratorHelper(select.options),
                    _step10;

                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    var _option2 = _step10.value;

                    if ($(_option2.chx).is(':checked')) {
                      checked = true;
                    } else {
                      unchecked = true;
                    }
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }

                if (checked && unchecked) {
                  select.chxSelectAll.prop('indeterminate', true);
                } else {
                  select.chxSelectAll.prop('indeterminate', false);
                  select.chxSelectAll.prop('checked', checked);
                }
              });
              option.lbl = option.div.append(create.label).children().last().attr('for', select.name + '_' + option.value).text(option.text);
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }
        } else {
          select.divUnknown = select.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
          select.chxUnknown = select.divUnknown.append(create.checkbox).children().last().attr('id', select.name + '_notApplicable').attr('checked', !urlSearch.has(select.name)).on('change', function () {
            var checked = $(this).is(':checked');

            var _iterator11 = _createForOfIteratorHelper(select.options),
                _step11;

            try {
              for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var _option3 = _step11.value;

                _option3.chx.prop('checked', false);
              }
            } catch (err) {
              _iterator11.e(err);
            } finally {
              _iterator11.f();
            }

            urlSearch["delete"](select.name);
            tableHeader.btnDropdown.dropdown('hide');
            urlSearch.fetch();
          });
          select.divUnknown.append(create.label).children().last().attr('for', select.name + '_notApplicable').text(text.notApplicable);

          var _iterator12 = _createForOfIteratorHelper(select.options),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var _option4 = _step12.value;
              _option4.div = select.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
              _option4.chx = _option4.div.append(create.checkbox).children().last().attr('id', select.name + '_' + _option4.value).attr('checked', urlSearch.get(select.name).includes(_option4.value)).on('click', function () {
                select.divList.find('input').not(this).prop('checked', false);
                urlSearch["delete"](select.name);

                if (!select.chxUnknown.is(':checked')) {
                  var _iterator13 = _createForOfIteratorHelper(select.options),
                      _step13;

                  try {
                    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                      var _option5 = _step13.value;

                      if (_option5.chx.is(':checked')) {
                        urlSearch.append(select.name, _option5.value);
                      }
                    }
                  } catch (err) {
                    _iterator13.e(err);
                  } finally {
                    _iterator13.f();
                  }
                }

                tableHeader.btnDropdown.dropdown('hide');
                urlSearch.fetch();
              });
              _option4.lbl = _option4.div.append(create.label).children().last().attr('for', select.name + '_' + _option4.value).text(_option4.text);
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        }

        function sortAsc() {
          urlSearch["delete"]('sortDesc');

          if (urlSearch.get('sortAsc') == select.name) {
            urlSearch["delete"]('sortAsc');
          } else {
            urlSearch.set('sortAsc', select.name);
          }

          filter();
        }

        function filter() {
          urlSearch["delete"](select.name);

          if (!select.chxSelectAll.is(':checked')) {
            var _iterator14 = _createForOfIteratorHelper(select.options),
                _step14;

            try {
              for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                var _option6 = _step14.value;

                if (_option6.chx.is(':checked')) {
                  urlSearch.append(select.name, _option6.value);
                }
              }
            } catch (err) {
              _iterator14.e(err);
            } finally {
              _iterator14.f();
            }
          }

          tableHeader.btnDropdown.dropdown('hide');
          urlSearch.fetch();
        }

        function sortDesc() {
          urlSearch["delete"]('sortAsc');

          if (urlSearch.get('sortDesc') == select.name) {
            urlSearch["delete"]('sortDesc');
          } else {
            urlSearch.set('sortDesc', select.name);
          }

          filter();
        }
      };

      for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
        _loop();
      }
    } catch (err) {
      _iterator5.e(err);
    } finally {
      _iterator5.f();
    }
  }

  return tableHeader;
} //---------------
// fillDisplay
//---------------


function fillDisplay() {
  var col = $('#display').append(create.div).children().last().addClass('row py-2').append(create.div).children().last().addClass('col');

  var _iterator15 = _createForOfIteratorHelper(tableHeaders),
      _step15;

  try {
    var _loop2 = function _loop2() {
      var tableHeader = _step15.value;
      tableHeader.aDisplay = col.append(create.a).children().last().addClass('btn-outline-primary col-2 m-1 text-left').on('click', function () {
        tableHeader.chxDisplay.prop('checked', !tableHeader.chxDisplay.is(':checked'));
        var display = urlSearch.get('display[' + tableHeader.id + ']');
        urlSearch["delete"]('display[' + tableHeader.id + ']');

        if (tableHeader.chxDisplay.is(':checked')) {
          if (display == null) {
            urlSearch.append('display[' + tableHeader.id + ']', 10);
          }
        }

        urlSearch.fetch();
        return false;
      });
      var div = tableHeader.aDisplay.append(create.div).children().last().addClass('custom-control custom-checkbox');
      tableHeader.chxDisplay = div.append(create.checkbox).children().last().attr('id', 'h_' + tableHeader.id).on('change click', function () {
        return false;
      });
      div.append(create.label).children().last().attr('for', 'h_' + tableHeader.id).text(tableHeader.title);
    };

    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator15.e(err);
  } finally {
    _iterator15.f();
  }
} //---------------
// lineChecked
//---------------


function lineChecked() {
  var checked = false;
  var unchecked = false;
  $('tbody').find('input[type="checkbox"]').each(function () {
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
  });
  urlSearch["delete"]('id[]');

  if (checked) {
    $('table').find('input[type="checkbox"]').each(function () {
      if ($(this).prop('id') != 'check_all' && $(this).is(':checked')) {
        urlSearch.append('id[]', $(this).val());
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
}

var urlSearch = new UrlSearch();
$(document).ready(function () {
  //---------------------
  // Search form
  //---------------------
  $('#search button').on('click', function () {
    urlSearch.set('search', $('#search input').val());
    urlSearch.fetch();
    return true;
  });
  $('#search a').on('click', function () {
    $('#search input').val('');

    if (urlSearch.has('search')) {
      urlSearch["delete"]('search');
      urlSearch.fetch();
    }

    return true;
  }); //---------------------
  // Modal
  //---------------------

  $('#modal').on('show.bs.modal', function (e) {
    ajax.set('.modal-body', $(e.relatedTarget).data('url'));
  }); //---------------------
  // Menu display
  //---------------------

  $('#document_edit').hide();
  $('#document_move').hide();
  $('#document_delete').hide();
  $('#version_menu').hide();
  $('#document_edit').on('click', function () {
    location.assign($(this).data('url') + urlSearch.toString());
    return false;
  });
  $('#document_move').on('click', function () {
    location.assign($(this).data('url') + urlSearch.toString());
    return false;
  });
  $('#document_delete').on('click', function () {
    location.assign($(this).data('url') + urlSearch.toString());
    return false;
  });
  $('#version_new').on('click', function () {
    location.assign($(this).data('url') + urlSearch.toString());
    return false;
  });
  $('#version_edit').on('click', function () {
    location.assign($(this).data('url') + urlSearch.toString());
    return false;
  });
  $('#version_delete').on('click', function () {
    location.assign($(this).data('url') + urlSearch.toString());
    return false;
  }); //---------------------
  // Tab collapse
  //---------------------

  $('#tabs').on('show.bs.tab', function () {
    $('.collapse').collapse('show');
    $('#table_container').css('margin-top', '10em');
    $('#tabs > div').css('height', '6em');
  });
  $('#tabs ul li a').on('click', function (e) {
    if ($(this).hasClass('active')) {
      e.preventDefault();
      e.stopImmediatePropagation();
      $(this).removeClass('active');
      $(this).blur();
      $(this).attr('aria-selected', false);
      $('#' + $(this).attr('aria-controls')).parent().collapse('hide');
    }
  });
  $('#tabs').on('shown.bs.collapse', function () {
    $('#table_container').css('margin-top', '10em');
    $('#tabs > div').css('height', '6em');
  });
  $('#tabs').on('hidden.bs.collapse', function (e) {
    $('#table_container').css('margin-top', '4em');
    $('#tabs > div').deleteAttr('style');
  }); //---------------------
  // Check all checkboxes
  //---------------------

  $('#check_all').on('click', function () {
    $('tbody').find('input[type="checkbox"]').each(function () {
      $(this).prop('checked', $('#check_all').is(':checked'));
    });
    lineChecked();
  }); //---------------------
  // Jquery Resizable Columns
  //---------------------
  //$('table').resizableColumns();
  //---------------------
  // Dragtable
  //---------------------

  /*
  var dragger = tableDragger.default($('table').get(0), {
         mode: 'column',
  });
  */
  //---------------------
  // Table headers
  //---------------------

  $('table').find('th[id][data-title]').each(function () {
    tableHeaders.push(createTableHeader(this));
  }); //---------------------
  // Vues
  //---------------------

  $('#vues').find('button[data-value]').on('click', function () {
    if ($(this).attr('id') == 'vue_new') {
      location.assign($(this).data('url') + urlSearch.toString());
    } else {
      urlSearch.set('vue', $(this).data('value'));
      urlSearch.fetch();
    }
  });
  fillDisplay();
  urlSearch.setFromUrl(window.location.search);
  urlSearch.fetch();
});

/***/ })

},[["./assets/js/document.js","runtime","vendors~app~automation~dashboard~document~form~login","vendors~app~document~form","vendors~app~document","vendors~document~form","vendors~document","app~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwidGFibGVIZWFkZXJzIiwiVXJsU2VhcmNoIiwiX3BhcmFtc0FycmF5IiwicHJvdG90eXBlIiwiaGFzIiwia2V5IiwiZ2V0IiwiZXhlYyIsImdldEFsbCIsInNldCIsInZhbHVlIiwiYXBwZW5kIiwic2V0RnJvbVVybCIsInBhcmFtc0FycmF5IiwidG9TdHJpbmciLCJ1cmxTZWFyY2giLCJmZXRjaCIsImVtcHR5IiwiaWNvbiIsImxvYWRpbmciLCJpbnNlcnRBZnRlciIsInRoYXQiLCJhamF4IiwidXJsIiwiZGF0YSIsInR5cGUiLCJzdWNjZXNzIiwicmVzdWx0Iiwic2VhcmNoVXJsIiwicGFyYW0iLCJxdWVyeSIsIm5leHQiLCJyZW1vdmUiLCJzaG93IiwiZmluZCIsImVhY2giLCJhdHRyIiwicGFyZW50IiwidGFibGVIZWFkZXIiLCJkaXNwbGF5IiwiaWQiLCJhRGlzcGxheSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjaHhEaXNwbGF5IiwicHJvcCIsImNvbCIsImNzcyIsInRoIiwiYnRuRHJvcGRvd24iLCJpc0ZpbHRlcmVkIiwiaXNTb3J0ZWRBc2MiLCJpc1NvcnRlZERlc2MiLCJzZWxlY3RzIiwic2VsZWN0IiwibmFtZSIsImZ1bm5lbEZpbGwiLCJmdW5uZWwiLCJhcnJvd0Rvd24iLCJhcnJvd1VwIiwiaGlkZSIsInZlcnNpb25zIiwidmVyc2lvbiIsInRyIiwiY3JlYXRlIiwiY2hpbGRyZW4iLCJsYXN0IiwiZGl2IiwidGQiLCJjaGVja2JveCIsInZhbCIsIm9uIiwibGluZUNoZWNrZWQiLCJsYWJlbCIsInVuZGVmaW5lZCIsImRhdGFDbGFzcyIsInRleHQiLCJzbWFsbEJ1dHRvbiIsImRldGFpbFVybCIsImRldGFpbHMiLCJwYWdlTWF4IiwicGFnZSIsInBhZ2VNaW4iLCJNYXRoIiwibWF4IiwidWwiLCJsaSIsImEiLCJzcGFuIiwiaHRtbCIsImkiLCJtaW4iLCJjcmVhdGVUYWJsZUhlYWRlciIsImNsb3Nlc3QiLCJlcSIsImluZGV4IiwidGl0bGUiLCJzb3J0IiwibXVsdGlwbGVBdHRyIiwic2x0IiwibXVsdGlwbGUiLCJvcHRpb25zIiwicHVzaCIsImxlbmd0aCIsImRpdkRyb3Bkb3duR3JvdXAiLCJlIiwiY2xpY2tFdmVudCIsImNvbnRhaW5zIiwicmVsYXRlZFRhcmdldCIsInBhcmVudE5vZGUiLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdkRyb3Bkb3duTWVudSIsIm1lbnVCdXR0b24iLCJjcmVhdGVNZW51IiwiZGl2Q29udGVudCIsImRpdkZpbHRlciIsImJ0blNvcnREZXNjIiwic29ydERlc2MiLCJmaWx0ZXIiLCJidG5Tb3J0QXNjIiwic29ydEFzYyIsImRpdlNlYXJjaCIsImlucHV0Iiwic2VhcmNoVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImRpdlNlbGVjdEFsbCIsIm9wdGlvbiIsImNoeCIsImluZGV4T2YiLCJkaXZMaXN0IiwiY2h4U2VsZWN0QWxsIiwiY2hlY2tlZCIsImlzIiwic2VsZWN0QWxsIiwiaW5jbHVkZXMiLCJ1bmNoZWNrZWQiLCJsYmwiLCJkaXZVbmtub3duIiwiY2h4VW5rbm93biIsImRyb3Bkb3duIiwibm90QXBwbGljYWJsZSIsIm5vdCIsImZpbGxEaXNwbGF5IiwiZG9jdW1lbnQiLCJyZWFkeSIsImxvY2F0aW9uIiwiYXNzaWduIiwiY29sbGFwc2UiLCJoYXNDbGFzcyIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImJsdXIiLCJkZWxldGVBdHRyIiwid2luZG93Iiwic2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBQSxtQkFBTyxDQUFD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RUFBdEMsQ0FBeUMsT0FBekMsRUFBa0QsWUFBVztBQUM1RCxRQUFJMUUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUMsSUFBUixDQUFhLElBQWIsS0FBc0IsU0FBMUIsRUFBcUM7QUFDcEM4RyxjQUFRLENBQUNDLE1BQVQsQ0FBZ0J0SixDQUFDLENBQUMsSUFBRCxDQUFELENBQVEyQixJQUFSLENBQWEsS0FBYixJQUFzQlQsU0FBUyxDQUFDRCxRQUFWLEVBQXRDO0FBQ0EsS0FGRCxNQUVPO0FBQ05DLGVBQVMsQ0FBQ04sR0FBVixDQUFjLEtBQWQsRUFBcUJaLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTJCLElBQVIsQ0FBYSxPQUFiLENBQXJCO0FBQ0FULGVBQVMsQ0FBQ0MsS0FBVjtBQUNBO0FBQ0QsR0FQRDtBQWNBK0gsYUFBVztBQUNYaEksV0FBUyxDQUFDSCxVQUFWLENBQXFCNkksTUFBTSxDQUFDUCxRQUFQLENBQWdCUSxNQUFyQztBQUNBM0ksV0FBUyxDQUFDQyxLQUFWO0FBRUEsQ0FqS0QsRSIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInJlcXVpcmUoJy4uL2pzL2FwcC5qcycpO1xyXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbmNvbnN0IHBvcHBlciA9IHJlcXVpcmUoJ3BvcHBlci5qcycpO1xyXG5yZXF1aXJlKCdzdGlja3ktdGFibGUtaGVhZGVycycpO1xyXG4vL2NvbnN0IHRhYmxlRHJhZ2dlciA9IHJlcXVpcmUoJ3RhYmxlLWRyYWdnZXInKTtcclxuLy9yZXF1aXJlKCdqcXVlcnktcmVzaXphYmxlLWNvbHVtbnMnKTtcclxucmVxdWlyZSgnLi4vY3NzL2RvY3VtZW50LnNjc3MnKTtcclxuY29uc3QgVVJMU2VhcmNoUGFyYW1zID0gcmVxdWlyZSgnQHVuZ2FwL3VybC1zZWFyY2gtcGFyYW1zL2NqcycpO1xyXG5cclxudmFyIHRhYmxlSGVhZGVycyA9IFtdO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy9VcmxTZWFyY2hcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIFVybFNlYXJjaCAoKSB7XHJcblx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbn1cclxuXHJcblVybFNlYXJjaC5wcm90b3R5cGUgPSB7XHJcblxyXG5cdGhhczogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcGFyYW1zQXJyYXkuaGFzKGtleSk7XHJcblx0fSxcclxuXHRcclxuXHRnZXQ6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0aWYgKC9cXFMrXFxbXFxdL2cuZXhlYyhrZXkpKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLl9wYXJhbXNBcnJheS5nZXRBbGwoa2V5KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB0aGlzLl9wYXJhbXNBcnJheS5nZXQoa2V5KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG5cdFx0aWYgKGtleSA9PSAndnVlJykge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoeyd2dWUnOiB2YWx1ZX0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkuc2V0KGtleSwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0YXBwZW5kOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRpZiAoa2V5ID09ICd2dWUnKSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7J3Z1ZSc6IHZhbHVlfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheS5hcHBlbmQoa2V5LCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRkZWxldGU6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0dGhpcy5fcGFyYW1zQXJyYXkuZGVsZXRlKGtleSk7XHJcblx0fSxcclxuXHRcclxuXHRzZXRGcm9tVXJsOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0bGV0IHBhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh2YWx1ZSk7XHJcblx0XHRpZiAocGFyYW1zQXJyYXkuaGFzKCd2dWUnKSkge1xyXG5cdFx0XHR0aGlzLnNldCgndnVlJywgcGFyYW1zQXJyYXkuZ2V0KCd2dWUnKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheSA9IHBhcmFtc0FycmF5O1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0dG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHVybFNlYXJjaCA9IHRoaXMuX3BhcmFtc0FycmF5LnRvU3RyaW5nKCk7XHJcblx0XHRyZXR1cm4gKHVybFNlYXJjaCk/Jz8nICsgdXJsU2VhcmNoOicnO1xyXG5cdH0sXHJcblx0XHJcblx0ZmV0Y2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHQkKCcjdGFibGUgPiB0Ym9keScpLmVtcHR5KCk7XHJcblx0XHQkKGljb24ubG9hZGluZykuaW5zZXJ0QWZ0ZXIoJyN0YWJsZScpO1xyXG5cdFx0XHJcblx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybCA6ICQoJyN0YWJsZScpLmRhdGEoJ3VybCcpICsgdGhhdC50b1N0cmluZygpLFxyXG5cdFx0XHR0eXBlOiAnR0VUJyxcclxuXHRcdFx0XHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCBzZWFyY2hVcmwgPSAkLnBhcmFtKHJlc3VsdC5xdWVyeSk7XHJcblx0XHRcdFx0dGhhdC5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFVybCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0JCgnI3RhYmxlJykubmV4dCgpLnJlbW92ZSgpO1xyXG5cdFx0XHRcdCQoJyN0YWJsZScpLnNob3coKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL3Z1ZVxyXG5cdFx0XHRcdCQoJyN2dWVzJykuZmluZCgnYnV0dG9uW2RhdGEtdmFsdWVdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmRhdGEoJ3ZhbHVlJykgPT0gdGhhdC5nZXQoJ3Z1ZScpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCdkaXYgPiBidXR0b24nKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBkcm9wZG93bi10b2dnbGUnKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnZGl2ID4gYnV0dG9uJykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1wcmltYXJ5IGRyb3Bkb3duLXRvZ2dsZScpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAobGV0IHRhYmxlSGVhZGVyIG9mIHRhYmxlSGVhZGVycykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL2Rpc3BsYXlcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKGRpc3BsYXkgPSB0aGF0LmdldCgnZGlzcGxheVsnICsgdGFibGVIZWFkZXIuaWQgKyAnXScpKSB7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmFEaXNwbGF5LmFkZENsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmFEaXNwbGF5LnJlbW92ZUNsYXNzKCdidG4tcHJpbWFyeScpO1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5jaHhEaXNwbGF5LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuY29sLmNzcygnd2lkdGgnLCBkaXNwbGF5ICsgJ2VtJyk7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNvbC5zaG93KCk7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLnRoLnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdC8vaGVhZGVyc1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uZW1wdHkoKTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBzZWxlY3Qgb2YgdGFibGVIZWFkZXIuc2VsZWN0cykge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGF0LmhhcyhzZWxlY3QubmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhhdC5nZXQoJ3NvcnRBc2MnKSA9PSBzZWxlY3QubmFtZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAodGhhdC5nZXQoJ3NvcnREZXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzU29ydGVkRGVzYyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoKHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQpP2ljb24uZnVubmVsRmlsbDppY29uLmZ1bm5lbCk7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmlzU29ydGVkQXNjKSB7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGljb24uYXJyb3dEb3duKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmlzU29ydGVkRGVzYykge1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmFwcGVuZChpY29uLmFycm93VXApO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYURpc3BsYXkuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmFEaXNwbGF5LnJlbW92ZUNsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNoeERpc3BsYXkucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuY29sLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIudGguaGlkZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vdGJvZHlcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IgKGxldCB2ZXJzaW9uIG9mIHJlc3VsdC52ZXJzaW9ucykge1xyXG5cdFx0XHRcdFx0bGV0IHRyID0gJCgnI3RhYmxlID4gdGJvZHknKS5hcHBlbmQoY3JlYXRlLnRyKS5jaGlsZHJlbigpLmxhc3QoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGRpdiA9IHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCAnY18nICsgdmVyc2lvbi5pZClcclxuXHRcdFx0XHRcdFx0LnZhbCh2ZXJzaW9uLmlkKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgbGluZUNoZWNrZWQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgJ2NfJyArIHZlcnNpb24uaWQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgdGFibGVIZWFkZXIgb2YgdGFibGVIZWFkZXJzKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRkYXRhID0gdmVyc2lvblt0YWJsZUhlYWRlci5pZF07XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0c3dpdGNoICh0YWJsZUhlYWRlci5jb2wuYXR0cignY2xhc3MnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAndHlwZS1ib29sZWFuJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGRhdGEgPT0gMCkgZGF0YSA9ICdObyc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChkYXRhID09IDEpIGRhdGEgPSAnWWVzJztcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3R5cGUtdmVyc2lvbic6XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICd0eXBlLWRhdGUnOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndGV4dC1jZW50ZXInO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3R5cGUtcmVmZXJlbmNlJzpcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3R5cGUtbmFtZSc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0ZXh0LWxlZnQnO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICcnO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKGRhdGFDbGFzcylcclxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KGRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNvbC5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIudGguaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuLXN1Y2Nlc3Mgdy0xMDAnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXRvZ2dsZScsICdtb2RhbCcpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdGFyZ2V0JywgJyNtb2RhbCcpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdXJsJywgdmVyc2lvbi5kZXRhaWxVcmwpXHJcblx0XHRcdFx0XHRcdFx0LnRleHQodGV4dC5kZXRhaWxzKVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vcGFnaW5hdGlvblxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChyZXN1bHQucGFnZU1heCA+IDEpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCdtYi00Jyk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBwYWdlTWF4ID0gcmVzdWx0LnBhZ2VNYXg7XHJcblx0XHRcdFx0XHRsZXQgcGFnZSA9IHRoYXQuZ2V0KCdwYWdlJykgfHwgMTtcclxuXHRcdFx0XHRcdGxldCBwYWdlTWluID0gTWF0aC5tYXgoMSwgcGFnZSAtIDIpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR1bCA9ICQoJyNwYWdpbmF0aW9uJykuYXBwZW5kKGNyZWF0ZS51bCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdpbmF0aW9uIGp1c3RpZnktY29udGVudC1jZW50ZXInKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gMSk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIE1hdGgubWF4KDEsIHBhZ2UgLSAxKSlcclxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdC5odG1sKCcmbGFxdW87JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaT0wOyBpPDU7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRpZiAocGFnZU1heCA+IGkpIHtcclxuXHRcdFx0XHRcdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IHBhZ2VNaW4gKyBpKT8nIGRpc2FibGVkJzonJykpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgcGFnZU1pbilcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQocGFnZU1pbiArIGkpXHJcblx0XHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSBwYWdlTWF4KT8nIGRpc2FibGVkJzonJykpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgTWF0aC5taW4ocGFnZU1heCwgcGFnZSArIDEpKVxyXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0Lmh0bWwoJyZyYXF1bzsnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vJCgndGFibGUnKS5zdGlja3lUYWJsZUhlYWRlcnMoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdH0pO1x0XHJcblx0fSxcdFxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vLyB0YWJsZUhlYWRlclxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFibGVIZWFkZXIodGhhdCkge1xyXG5cdFxyXG5cdHZhciB0YWJsZUhlYWRlciA9IHtcclxuXHRcdGNvbDogJCh0aGF0KS5jbG9zZXN0KCd0YWJsZScpLmZpbmQoJ2NvbCcpLmVxKCQodGhhdCkuaW5kZXgoKSksXHJcblx0XHR0aDogJCh0aGF0KSxcclxuXHRcdGlkOiAkKHRoYXQpLmF0dHIoJ2lkJyksXHJcblx0XHR0aXRsZTogJCh0aGF0KS5kYXRhKCd0aXRsZScpLFxyXG5cdFx0c29ydDogJCh0aGF0KS5kYXRhKCdzb3J0JyksXHJcblx0XHRpc0ZpbHRlcmVkOiBmYWxzZSxcclxuXHRcdGlzU29ydGVkQXNjOiBmYWxzZSxcclxuXHRcdGlzU29ydGVkRGVzYzogZmFsc2UsXHJcblx0XHRzZWxlY3RzOiBbXSxcclxuXHR9XHJcblx0XHJcblx0JCh0aGF0KS5maW5kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHR2YXIgbXVsdGlwbGVBdHRyID0gKHR5cGVvZiAkKHRoaXMpLmF0dHIoJ211bHRpcGxlJykgIT09IHR5cGVvZiB1bmRlZmluZWQgJiYgJCh0aGlzKS5hdHRyKCdtdWx0aXBsZScpICE9PSBmYWxzZSk7XHJcblx0XHR2YXIgbmFtZSA9ICQodGhpcykucHJvcCgnbmFtZScpICsgKChtdWx0aXBsZUF0dHIpPydbXSc6JycpO1xyXG5cdFx0XHJcblx0XHR2YXIgc2VsZWN0ID0ge1xyXG5cdFx0XHRcdHNsdDogJCh0aGlzKSxcclxuXHRcdFx0XHRpZDogJCh0aGlzKS5wcm9wKCdpZCcpLFxyXG5cdFx0XHRcdG5hbWU6IG5hbWUsXHJcblx0XHRcdFx0bXVsdGlwbGU6IG11bHRpcGxlQXR0cixcclxuXHRcdFx0XHR0aXRsZTogJCh0aGlzKS5kYXRhKCd0aXRsZScpLFxyXG5cdFx0XHRcdG9wdGlvbnM6IFtdLFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0JCh0aGlzKS5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzZWxlY3Qub3B0aW9ucy5wdXNoKHtcclxuXHRcdFx0XHR2YWx1ZTogJCh0aGlzKS5hdHRyKCd2YWx1ZScpLFxyXG5cdFx0XHRcdHRleHQ6ICQodGhpcykudGV4dCgpLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5zZWxlY3RzLnB1c2goc2VsZWN0KTtcclxuXHRcdFxyXG5cdH0pO1xyXG5cdFxyXG5cdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzLmxlbmd0aCkge1xyXG5cdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cCA9IHRhYmxlSGVhZGVyLnRoLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0bi1ncm91cCB3LTEwMCcpXHJcblx0XHRcdC5hdHRyKCdyb2xlJywgJ2dyb3VwJylcclxuXHRcdFx0Lm9uKCdoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZihlLmNsaWNrRXZlbnQgJiYgJC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQucGFyZW50Tm9kZSwgZS5jbGlja0V2ZW50LnRhcmdldCkpIHtcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUuZW1wdHkoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3ctMTAwJylcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LnRleHQodGFibGVIZWFkZXIudGl0bGUpXHJcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cyAmJiB0YWJsZUhlYWRlci5zb3J0KSB7XHJcblx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IHRhYmxlSGVhZGVyLnNlbGVjdHNbMF0ubmFtZSkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnREZXNjJywgdGFibGVIZWFkZXIuc2VsZWN0c1swXS5uYW1lKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnRBc2MnLCB0YWJsZUhlYWRlci5zZWxlY3RzWzBdLm5hbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFxyXG5cdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24gPSB0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdweC0wJylcclxuXHRcdFx0LmNzcygnd2lkdGgnLCAnM2VtJylcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LmF0dHIoJ2lkJywgJ2JfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHQuYXR0cignZGF0YS10b2dnbGUnLCAnZHJvcGRvd24nKVxyXG5cdFx0XHQuYXR0cignYXJpYS1oYXNwb3B1cCcsIHRydWUpXHJcblx0XHRcdC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXHJcblx0XHQ7XHJcblx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUgPSB0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2Ryb3Bkb3duLW1lbnUnKVxyXG5cdFx0XHQuYXR0cignYXJpYS1sYWJlbGxlZGJ5JywgJ2JfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdkLWZsZXggZmxleC1yb3cnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgY3JlYXRlTWVudSk7XHJcblx0XHJcblx0fSBlbHNlIHtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24gPSB0YWJsZUhlYWRlci50aC5hcHBlbmQoY3JlYXRlLm1lbnVCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygndy0xMDAnKVxyXG5cdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUuZW1wdHkoKTtcclxuXHRcdFxyXG5cdFx0Zm9yIChsZXQgc2VsZWN0IG9mIHRhYmxlSGVhZGVyLnNlbGVjdHMpIHtcclxuXHRcdFx0XHJcblx0XHRcdHNlbGVjdC5kaXZDb250ZW50ID0gdGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnbXgtMScpXHJcblx0XHRcdFx0LmNzcygnbWluLXdpZHRoJywgJzE1ZW0nKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoc2VsZWN0Lm11bHRpcGxlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdFx0c2VsZWN0LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItZGFyayBwYi0yIHB4LTEnKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKHNlbGVjdC50aXRsZSk7XHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZGaWx0ZXIgPSBzZWxlY3QuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgcC0xJylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0XHRcdHNlbGVjdC5idG5Tb3J0RGVzYyA9IHNlbGVjdC5kaXZGaWx0ZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChpY29uLmFycm93VXApXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSBzZWxlY3QubmFtZSk/J3B4LTIgYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOidweC0yIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIHNvcnREZXNjKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2RmlsdGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQudGV4dCh0ZXh0LmZpbHRlcilcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMyBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgZmlsdGVyKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRcdFx0c2VsZWN0LmJ0blNvcnRBc2MgPSBzZWxlY3QuZGl2RmlsdGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd0Rvd24pXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IHNlbGVjdC5uYW1lKT8ncHgtMiBidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J3B4LTIgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgc29ydEFzYylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdlNlYXJjaCA9IHNlbGVjdC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHAtMicpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZTZWFyY2guYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dmFyIHNlYXJjaFZhbHVlID0gJCh0aGlzKS52YWwoKS50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoc2VhcmNoVmFsdWUgPT0gJycpIHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsLnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb24udGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVmFsdWUpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5kaXYuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRzZWxlY3QuZGl2TGlzdCA9IHNlbGVjdC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncHgtMiBvdmVyZmxvdy1hdXRvICcgKyAoKHNlbGVjdC5tdWx0aXBsZSk/J3B0LTMnOidwdC0xJykpXHJcblx0XHRcdFx0LmNzcygnbWF4LWhlaWdodCcsICcyMGVtJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHNlbGVjdC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwgPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmNoeFNlbGVjdEFsbCA9IHNlbGVjdC5kaXZTZWxlY3RBbGwuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ19zZWxlY3RBbGwnKVxyXG5cdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHZhciBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfc2VsZWN0QWxsJylcclxuXHRcdFx0XHRcdC50ZXh0KHRleHQuc2VsZWN0QWxsKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0b3B0aW9uLmRpdiA9IHNlbGVjdC5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHQ7XHJcblxyXG5cdFx0XHRcdFx0b3B0aW9uLmNoeCA9IG9wdGlvbi5kaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdXJsU2VhcmNoLmdldChzZWxlY3QubmFtZSkuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGxldCBjaGVja2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0bGV0IHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCQob3B0aW9uLmNoeCkuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5jaHhTZWxlY3RBbGwucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5sYmwgPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LnRleHQob3B0aW9uLnRleHQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZVbmtub3duID0gc2VsZWN0LmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5jaHhVbmtub3duID0gc2VsZWN0LmRpdlVua25vd24uYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ19ub3RBcHBsaWNhYmxlJylcclxuXHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgIXVybFNlYXJjaC5oYXMoc2VsZWN0Lm5hbWUpKVxyXG5cdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHZhciBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZShzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2VW5rbm93bi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIHNlbGVjdC5uYW1lICsgJ19ub3RBcHBsaWNhYmxlJylcclxuXHRcdFx0XHRcdC50ZXh0KHRleHQubm90QXBwbGljYWJsZSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5kaXYgPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvcHRpb24uY2h4ID0gb3B0aW9uLmRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCB1cmxTZWFyY2guZ2V0KHNlbGVjdC5uYW1lKS5pbmNsdWRlcyhvcHRpb24udmFsdWUpKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0LmRpdkxpc3QuZmluZCgnaW5wdXQnKS5ub3QodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXNlbGVjdC5jaHhVbmtub3duLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbi5jaHguaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKHNlbGVjdC5uYW1lLCBvcHRpb24udmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5sYmwgPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LnRleHQob3B0aW9uLnRleHQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gc29ydEFzYygpIHtcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydEFzYycsIHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZmlsdGVyKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gZmlsdGVyKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdGlmICghc2VsZWN0LmNoeFNlbGVjdEFsbC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbi5jaHguaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKHNlbGVjdC5uYW1lLCBvcHRpb24udmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gc29ydERlc2MoKSB7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydEFzYycpO1xyXG5cdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0RGVzYycsIHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0XHRmaWx0ZXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiB0YWJsZUhlYWRlcjtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy8gZmlsbERpc3BsYXlcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGZpbGxEaXNwbGF5KCkge1xyXG5cdHZhciBjb2wgPSAkKCcjZGlzcGxheScpLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0LmFkZENsYXNzKCdyb3cgcHktMicpXHJcblx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnY29sJylcclxuXHQ7XHJcblx0XHJcblx0Zm9yIChsZXQgdGFibGVIZWFkZXIgb2YgdGFibGVIZWFkZXJzKSB7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmFEaXNwbGF5ID0gY29sLmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5IGNvbC0yIG0tMSB0ZXh0LWxlZnQnKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuY2h4RGlzcGxheS5wcm9wKCdjaGVja2VkJywgIXRhYmxlSGVhZGVyLmNoeERpc3BsYXkuaXMoJzpjaGVja2VkJykpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCBkaXNwbGF5ID0gdXJsU2VhcmNoLmdldCgnZGlzcGxheVsnICsgdGFibGVIZWFkZXIuaWQgKyAnXScpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ2Rpc3BsYXlbJyArIHRhYmxlSGVhZGVyLmlkICsgJ10nKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuY2h4RGlzcGxheS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0aWYgKGRpc3BsYXkgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKCdkaXNwbGF5WycgKyB0YWJsZUhlYWRlci5pZCArICddJywgMTApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGxldCBkaXYgPSB0YWJsZUhlYWRlci5hRGlzcGxheS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmNoeERpc3BsYXkgPSBkaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmF0dHIoJ2lkJywgJ2hfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHQub24oJ2NoYW5nZSBjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hdHRyKCdmb3InLCAnaF8nICsgdGFibGVIZWFkZXIuaWQpXHJcblx0XHRcdC50ZXh0KHRhYmxlSGVhZGVyLnRpdGxlKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRcclxuXHR9XHJcblx0XHJcbn1cdFxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy8gbGluZUNoZWNrZWRcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGxpbmVDaGVja2VkKCkge1xyXG5cdFxyXG5cdHZhciBjaGVja2VkID0gZmFsc2U7XHJcblx0dmFyIHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuXHQkKCd0Ym9keScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdGNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dW5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKGNoZWNrZWQgJiYgdW5jaGVja2VkKSB7XHJcblx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdpbmRldGVybWluYXRlJywgdHJ1ZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHR1cmxTZWFyY2guZGVsZXRlKCdpZFtdJyk7XHJcblx0aWYgKGNoZWNrZWQpIHtcclxuXHRcdCQoJ3RhYmxlJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCQodGhpcykucHJvcCgnaWQnKSAhPSAnY2hlY2tfYWxsJyAmJiAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZCgnaWRbXScsICQodGhpcykudmFsKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5zaG93KCk7XHJcblx0XHQkKCcjZG9jdW1lbnRfbW92ZScpLnNob3coKTtcclxuXHRcdCQoJyNkb2N1bWVudF9kZWxldGUnKS5zaG93KCk7XHJcblx0XHQkKCcjdmVyc2lvbl9tZW51Jykuc2hvdygpO1x0XHJcblx0fSBlbHNlIGlmKHVuY2hlY2tlZCkge1xyXG5cdFx0JCgnI3ZlcnNpb24nKS52YWwoJycpO1xyXG5cdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5oaWRlKCk7XHJcblx0XHQkKCcjZG9jdW1lbnRfbW92ZScpLmhpZGUoKTtcclxuXHRcdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0XHQkKCcjdmVyc2lvbl9tZW51JykuaGlkZSgpO1x0XHJcblx0fVxyXG59XHJcblxyXG52YXIgdXJsU2VhcmNoID0gbmV3IFVybFNlYXJjaCgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBTZWFyY2ggZm9ybVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3NlYXJjaCBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0dXJsU2VhcmNoLnNldCgnc2VhcmNoJywgJCgnI3NlYXJjaCBpbnB1dCcpLnZhbCgpKTtcclxuXHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNzZWFyY2ggYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHQkKCcjc2VhcmNoIGlucHV0JykudmFsKCcnKTtcclxuXHRcdFxyXG5cdFx0aWYgKHVybFNlYXJjaC5oYXMoJ3NlYXJjaCcpKSB7XHJcblx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NlYXJjaCcpO1xyXG5cdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHJcblx0fSk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBNb2RhbFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI21vZGFsJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRhamF4LnNldCgnLm1vZGFsLWJvZHknLCAkKGUucmVsYXRlZFRhcmdldCkuZGF0YSgndXJsJykpO1xyXG5cdH0pO1xyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIE1lbnUgZGlzcGxheVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfZWRpdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI2RvY3VtZW50X21vdmUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgdXJsU2VhcmNoLnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgdXJsU2VhcmNoLnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2ZXJzaW9uX25ldycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3ZlcnNpb25fZWRpdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3ZlcnNpb25fZGVsZXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFRhYiBjb2xsYXBzZVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3RhYnMnKS5vbignc2hvdy5icy50YWInLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5jb2xsYXBzZScpLmNvbGxhcHNlKCdzaG93Jyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuY3NzKCdtYXJnaW4tdG9wJywgJzEwZW0nKTtcclxuXHRcdCQoJyN0YWJzID4gZGl2JykuY3NzKCdoZWlnaHQnLCAnNmVtJyk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3RhYnMgdWwgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkKHRoaXMpLmJsdXIoKTtcclxuXHRcdFx0JCh0aGlzKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xyXG5cdFx0XHQkKCcjJyArICQodGhpcykuYXR0cignYXJpYS1jb250cm9scycpKS5wYXJlbnQoKS5jb2xsYXBzZSgnaGlkZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG4gICAgXHJcblx0JCgnI3RhYnMnKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5jc3MoJ21hcmdpbi10b3AnLCAnMTBlbScpO1xyXG5cdFx0JCgnI3RhYnMgPiBkaXYnKS5jc3MoJ2hlaWdodCcsICc2ZW0nKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdGFicycpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuY3NzKCdtYXJnaW4tdG9wJywgJzRlbScpO1xyXG5cdFx0JCgnI3RhYnMgPiBkaXYnKS5kZWxldGVBdHRyKCdzdHlsZScpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gQ2hlY2sgYWxsIGNoZWNrYm94ZXNcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyNjaGVja19hbGwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJ3Rib2R5JykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgJCgnI2NoZWNrX2FsbCcpLmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdH0pO1xyXG5cdFx0bGluZUNoZWNrZWQoKTtcclxuXHR9KTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIEpxdWVyeSBSZXNpemFibGUgQ29sdW1uc1xyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0Ly8kKCd0YWJsZScpLnJlc2l6YWJsZUNvbHVtbnMoKTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIERyYWd0YWJsZVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0LypcclxuXHR2YXIgZHJhZ2dlciA9IHRhYmxlRHJhZ2dlci5kZWZhdWx0KCQoJ3RhYmxlJykuZ2V0KDApLCB7XHJcbiAgICAgICAgbW9kZTogJ2NvbHVtbicsXHJcblx0fSk7XHJcblx0Ki9cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFRhYmxlIGhlYWRlcnNcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJ3RhYmxlJykuZmluZCgndGhbaWRdW2RhdGEtdGl0bGVdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdHRhYmxlSGVhZGVycy5wdXNoKGNyZWF0ZVRhYmxlSGVhZGVyKHRoaXMpKTtcclxuXHR9KTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFZ1ZXNcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyN2dWVzJykuZmluZCgnYnV0dG9uW2RhdGEtdmFsdWVdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09ICd2dWVfbmV3Jykge1xyXG5cdFx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1N0cmluZygpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHVybFNlYXJjaC5zZXQoJ3Z1ZScsICQodGhpcykuZGF0YSgndmFsdWUnKSk7XHJcblx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdGZpbGxEaXNwbGF5KCk7XHJcblx0dXJsU2VhcmNoLnNldEZyb21Vcmwod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=