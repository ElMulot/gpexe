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

            tr.append(create.td).children().last().append(create.smallButton).children().last().addClass('btn-success w-100').attr('data-toggle', 'modal').attr('data-target', '#modal_detail').attr('data-url', version.detailUrl).text(text.details);
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        $('button[data-toggle="modal"][data-target="#modal_detail"]').on('click', function () {
          ajax.set('#modal_detail .modal-body', $(this).data('url'));
        }); //pagination

        $('#pagination').empty();
        /*
        if (result.pageMax > 1) {
        	
        	$('#table_container').addClass('mb-4');
        	
        	let pageMax = result.pageMax;
        	let page = that.get('page') || 1;
        	let pageMin = Math.max(1, page - 2);
        	
        	ul = $('#pagination').append(create.ul).children().last()
        		.addClass('pagination justify-content-center')
        	;
        	
        	ul.append(create.li).children().last()
        		.addClass('page-item' + ((page == 1)?' disabled':''))
        		.append(create.a).children().last()
        			.addClass('page-link')
        			.attr('data-value', Math.max(1, page - 1))
        			.append(create.span).children().last()
        				.attr('aria-hidden', true)
        				.html('&laquo;')
        	;
        	
        	for (let i=0; i<5; i++) {
        		if (pageMax > i) {
        			ul.append(create.li).children().last()
        				.addClass('page-item' + ((page == pageMin + i)?' disabled':''))
        				.append(create.a).children().last()
        					.addClass('page-link')
        					.attr('data-value', pageMin)
        					.text(pageMin + i)
        			;
        		}
        	}
        	
        	ul.append(create.li).children().last()
        		.addClass('page-item' + ((page == pageMax)?' disabled':''))
        		.append(create.a).children().last()
        			.addClass('page-link')
        			.attr('data-value', Math.min(pageMax, page + 1))
        			.append(create.span).children().last()
        				.attr('aria-hidden', true)
        				.html('&raquo;')
        	;
        	
        }
        */
        //$('table').stickyTableHeaders();
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

  /*
  $('#modal').on('show.bs.modal', function(e) {
  	ajax.set('#modal .modal-content', $(e.relatedTarget).data('url') + urlSearch.toString());
  });
  */

  $('#document_new, #document_edit, #document_move, #document_delete, #version_new, #version_edit, #version_delete').on('click', function () {
    ajax.set('#modal .modal-content', $(this).data('url') + urlSearch.toString());
  }); //---------------------
  // Modal_detail
  //---------------------

  $(document).ajaxComplete(function (e, xhr) {
    if (xhr.responseText === '') {
      //urlSearch.fetch();
      $('#modal').modal('hide');
      ajax.set('#toast', $('#toast').data('url'));
    }
  }); //---------------------
  // Menu display
  //---------------------

  $('#document_edit').hide();
  $('#document_move').hide();
  $('#document_delete').hide();
  $('#version_menu').hide(); //---------------------
  // Tab collapse
  //---------------------

  $('#tabs').on('show.bs.tab', function () {
    $('.collapse').collapse('show');
    $('#table_container').removeClass('tabs_hidden');
    $('#table_container').addClass('tabs_showed');
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
    $('#table_container').removeClass('tabs_hidden');
    $('#table_container').addClass('tabs_showed');
  });
  $('#tabs').on('hidden.bs.collapse', function (e) {
    $('#table_container').removeClass('tabs_showed');
    $('#table_container').addClass('tabs_hidden');
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

  $('#tabs').trigger('show.bs.tab');
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

},[["./assets/js/document.js","runtime","vendors~app~automation~dashboard~document~login","vendors~app~document","vendors~document","app~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwidGFibGVIZWFkZXJzIiwiVXJsU2VhcmNoIiwiX3BhcmFtc0FycmF5IiwicHJvdG90eXBlIiwiaGFzIiwia2V5IiwiZ2V0IiwiZXhlYyIsImdldEFsbCIsInNldCIsInZhbHVlIiwiYXBwZW5kIiwic2V0RnJvbVVybCIsInBhcmFtc0FycmF5IiwidG9TdHJpbmciLCJ1cmxTZWFyY2giLCJmZXRjaCIsImVtcHR5IiwiaWNvbiIsImxvYWRpbmciLCJpbnNlcnRBZnRlciIsInRoYXQiLCJhamF4IiwidXJsIiwiZGF0YSIsInR5cGUiLCJzdWNjZXNzIiwicmVzdWx0Iiwic2VhcmNoVXJsIiwicGFyYW0iLCJxdWVyeSIsIm5leHQiLCJyZW1vdmUiLCJzaG93IiwiZmluZCIsImVhY2giLCJhdHRyIiwicGFyZW50IiwidGFibGVIZWFkZXIiLCJkaXNwbGF5IiwiaWQiLCJhRGlzcGxheSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjaHhEaXNwbGF5IiwicHJvcCIsImNvbCIsImNzcyIsInRoIiwiYnRuRHJvcGRvd24iLCJpc0ZpbHRlcmVkIiwiaXNTb3J0ZWRBc2MiLCJpc1NvcnRlZERlc2MiLCJzZWxlY3RzIiwic2VsZWN0IiwibmFtZSIsImZ1bm5lbEZpbGwiLCJmdW5uZWwiLCJhcnJvd0Rvd24iLCJhcnJvd1VwIiwiaGlkZSIsInZlcnNpb25zIiwidmVyc2lvbiIsInRyIiwiY3JlYXRlIiwiY2hpbGRyZW4iLCJsYXN0IiwiZGl2IiwidGQiLCJjaGVja2JveCIsInZhbCIsIm9uIiwibGluZUNoZWNrZWQiLCJsYWJlbCIsInVuZGVmaW5lZCIsImRhdGFDbGFzcyIsInRleHQiLCJzbWFsbEJ1dHRvbiIsImRldGFpbFVybCIsImRldGFpbHMiLCJjcmVhdGVUYWJsZUhlYWRlciIsImNsb3Nlc3QiLCJlcSIsImluZGV4IiwidGl0bGUiLCJzb3J0IiwibXVsdGlwbGVBdHRyIiwic2x0IiwibXVsdGlwbGUiLCJvcHRpb25zIiwicHVzaCIsImxlbmd0aCIsImRpdkRyb3Bkb3duR3JvdXAiLCJlIiwiY2xpY2tFdmVudCIsImNvbnRhaW5zIiwicmVsYXRlZFRhcmdldCIsInBhcmVudE5vZGUiLCJ0YXJnZXQiLCJwcmV2ZW50RGVmYXVsdCIsImRpdkRyb3Bkb3duTWVudSIsIm1lbnVCdXR0b24iLCJjcmVhdGVNZW51IiwiZGl2Q29udGVudCIsImRpdkZpbHRlciIsImJ0blNvcnREZXNjIiwic29ydERlc2MiLCJmaWx0ZXIiLCJidG5Tb3J0QXNjIiwic29ydEFzYyIsImRpdlNlYXJjaCIsImlucHV0Iiwic2VhcmNoVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImRpdlNlbGVjdEFsbCIsIm9wdGlvbiIsImNoeCIsImluZGV4T2YiLCJkaXZMaXN0IiwiY2h4U2VsZWN0QWxsIiwiY2hlY2tlZCIsImlzIiwic2VsZWN0QWxsIiwiaW5jbHVkZXMiLCJ1bmNoZWNrZWQiLCJsYmwiLCJkaXZVbmtub3duIiwiY2h4VW5rbm93biIsImRyb3Bkb3duIiwibm90QXBwbGljYWJsZSIsIm5vdCIsImZpbGxEaXNwbGF5IiwiYSIsImRvY3VtZW50IiwicmVhZHkiLCJhamF4Q29tcGxldGUiLCJ4aHIiLCJyZXNwb25zZVRleHQiLCJtb2RhbCIsImNvbGxhcHNlIiwiaGFzQ2xhc3MiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJibHVyIiwidHJpZ2dlciIsImxvY2F0aW9uIiwiYXNzaWduIiwid2luZG93Iiwic2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBQSxtQkFBTyxDQUFDLHdDQUFELENBQVA7O0FBQ0EsSUFBTUMsQ0FBQyxHQUFH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QWxHNEIsQ0F5RzVCO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBO0FBQ0E7QUFDQTs7QUFFQTNFLEdBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV2tKLE9BQVgsQ0FBbUIsYUFBbkI7QUFFQWxKLEdBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV3FDLElBQVgsQ0FBZ0Isb0JBQWhCLEVBQXNDQyxJQUF0QyxDQUEyQyxZQUFXO0FBQ3JEbkMsZ0JBQVksQ0FBQzBGLElBQWIsQ0FBa0JWLGlCQUFpQixDQUFDLElBQUQsQ0FBbkM7QUFDQSxHQUZELEVBOUg0QixDQWtJNUI7QUFDQTtBQUNBOztBQUVBbkYsR0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXcUMsSUFBWCxDQUFnQixvQkFBaEIsRUFBc0NxQyxFQUF0QyxDQUF5QyxPQUF6QyxFQUFrRCxZQUFXO0FBQzVELFFBQUkxRSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF1QyxJQUFSLENBQWEsSUFBYixLQUFzQixTQUExQixFQUFxQztBQUNwQzRHLGNBQVEsQ0FBQ0MsTUFBVCxDQUFnQnBKLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTJCLElBQVIsQ0FBYSxLQUFiLElBQXNCVCxTQUFTLENBQUNELFFBQVYsRUFBdEM7QUFDQSxLQUZELE1BRU87QUFDTkMsZUFBUyxDQUFDTixHQUFWLENBQWMsS0FBZCxFQUFxQlosQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMkIsSUFBUixDQUFhLE9BQWIsQ0FBckI7QUFDQVQsZUFBUyxDQUFDQyxLQUFWO0FBQ0E7QUFDRCxHQVBEO0FBU0FtSCxhQUFXO0FBQ1hwSCxXQUFTLENBQUNILFVBQVYsQ0FBcUJzSSxNQUFNLENBQUNGLFFBQVAsQ0FBZ0JHLE1BQXJDO0FBQ0FwSSxXQUFTLENBQUNDLEtBQVY7QUFFQSxDQW5KRCxFIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwicmVxdWlyZSgnLi4vanMvYXBwLmpzJyk7XHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuY29uc3QgcG9wcGVyID0gcmVxdWlyZSgncG9wcGVyLmpzJyk7XHJcbnJlcXVpcmUoJ3N0aWNreS10YWJsZS1oZWFkZXJzJyk7XHJcbi8vY29uc3QgdGFibGVEcmFnZ2VyID0gcmVxdWlyZSgndGFibGUtZHJhZ2dlcicpO1xyXG4vL3JlcXVpcmUoJ2pxdWVyeS1yZXNpemFibGUtY29sdW1ucycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvZG9jdW1lbnQuc2NzcycpO1xyXG5jb25zdCBVUkxTZWFyY2hQYXJhbXMgPSByZXF1aXJlKCdAdW5nYXAvdXJsLXNlYXJjaC1wYXJhbXMvY2pzJyk7XHJcblxyXG52YXIgdGFibGVIZWFkZXJzID0gW107XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vL1VybFNlYXJjaFxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gVXJsU2VhcmNoICgpIHtcclxuXHR0aGlzLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxufVxyXG5cclxuVXJsU2VhcmNoLnByb3RvdHlwZSA9IHtcclxuXHJcblx0aGFzOiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdHJldHVybiB0aGlzLl9wYXJhbXNBcnJheS5oYXMoa2V5KTtcclxuXHR9LFxyXG5cdFxyXG5cdGdldDogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRpZiAoL1xcUytcXFtcXF0vZy5leGVjKGtleSkpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmdldEFsbChrZXkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmdldChrZXkpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0c2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRpZiAoa2V5ID09ICd2dWUnKSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7J3Z1ZSc6IHZhbHVlfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheS5zZXQoa2V5LCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRhcHBlbmQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHRcdGlmIChrZXkgPT0gJ3Z1ZScpIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsndnVlJzogdmFsdWV9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5LmFwcGVuZChrZXksIHZhbHVlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdGRlbGV0ZTogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHR0aGlzLl9wYXJhbXNBcnJheS5kZWxldGUoa2V5KTtcclxuXHR9LFxyXG5cdFxyXG5cdHNldEZyb21Vcmw6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRsZXQgcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHZhbHVlKTtcclxuXHRcdGlmIChwYXJhbXNBcnJheS5oYXMoJ3Z1ZScpKSB7XHJcblx0XHRcdHRoaXMuc2V0KCd2dWUnLCBwYXJhbXNBcnJheS5nZXQoJ3Z1ZScpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5ID0gcGFyYW1zQXJyYXk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHR0b1N0cmluZzogZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdXJsU2VhcmNoID0gdGhpcy5fcGFyYW1zQXJyYXkudG9TdHJpbmcoKTtcclxuXHRcdHJldHVybiAodXJsU2VhcmNoKT8nPycgKyB1cmxTZWFyY2g6Jyc7XHJcblx0fSxcclxuXHRcclxuXHRmZXRjaDogZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdCQoJyN0YWJsZSA+IHRib2R5JykuZW1wdHkoKTtcclxuXHRcdCQoaWNvbi5sb2FkaW5nKS5pbnNlcnRBZnRlcignI3RhYmxlJyk7XHJcblx0XHRcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFxyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsIDogJCgnI3RhYmxlJykuZGF0YSgndXJsJykgKyB0aGF0LnRvU3RyaW5nKCksXHJcblx0XHRcdHR5cGU6ICdHRVQnLFxyXG5cdFx0XHRcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IHNlYXJjaFVybCA9ICQucGFyYW0ocmVzdWx0LnF1ZXJ5KTtcclxuXHRcdFx0XHR0aGF0Ll9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoVXJsKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKCcjdGFibGUnKS5uZXh0KCkucmVtb3ZlKCk7XHJcblx0XHRcdFx0JCgnI3RhYmxlJykuc2hvdygpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vdnVlXHJcblx0XHRcdFx0JCgnI3Z1ZXMnKS5maW5kKCdidXR0b25bZGF0YS12YWx1ZV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuZGF0YSgndmFsdWUnKSA9PSB0aGF0LmdldCgndnVlJykpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLW91dGxpbmUtcHJpbWFyeScpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ2RpdiA+IGJ1dHRvbicpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tb3V0bGluZS1wcmltYXJ5IGRyb3Bkb3duLXRvZ2dsZScpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLXByaW1hcnknKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCdkaXYgPiBidXR0b24nKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgdGFibGVIZWFkZXIgb2YgdGFibGVIZWFkZXJzKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vZGlzcGxheVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoZGlzcGxheSA9IHRoYXQuZ2V0KCdkaXNwbGF5WycgKyB0YWJsZUhlYWRlci5pZCArICddJykpIHtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYURpc3BsYXkuYWRkQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYURpc3BsYXkucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNoeERpc3BsYXkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5jb2wuY3NzKCd3aWR0aCcsIGRpc3BsYXkgKyAnZW0nKTtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuY29sLnNob3coKTtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIudGguc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Ly9oZWFkZXJzXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5lbXB0eSgpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNGaWx0ZXJlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZEFzYyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZERlc2MgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IHNlbGVjdCBvZiB0YWJsZUhlYWRlci5zZWxlY3RzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRoYXQuaGFzKHNlbGVjdC5uYW1lKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNGaWx0ZXJlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGF0LmdldCgnc29ydEFzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZEFzYyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmICh0aGF0LmdldCgnc29ydERlc2MnKSA9PSBzZWxlY3QubmFtZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmFwcGVuZCgodGFibGVIZWFkZXIuaXNGaWx0ZXJlZCk/aWNvbi5mdW5uZWxGaWxsOmljb24uZnVubmVsKTtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoaWNvbi5hcnJvd0Rvd24pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjKSB7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGljb24uYXJyb3dVcCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5hRGlzcGxheS5hZGRDbGFzcygnYnRuLXByaW1hcnknKTtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYURpc3BsYXkucmVtb3ZlQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuY2h4RGlzcGxheS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5jb2wuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci50aC5oaWRlKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly90Ym9keVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAobGV0IHZlcnNpb24gb2YgcmVzdWx0LnZlcnNpb25zKSB7XHJcblx0XHRcdFx0XHRsZXQgdHIgPSAkKCcjdGFibGUgPiB0Ym9keScpLmFwcGVuZChjcmVhdGUudHIpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZGl2ID0gdHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsICdjXycgKyB2ZXJzaW9uLmlkKVxyXG5cdFx0XHRcdFx0XHQudmFsKHZlcnNpb24uaWQpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBsaW5lQ2hlY2tlZClcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCAnY18nICsgdmVyc2lvbi5pZClcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCB0YWJsZUhlYWRlciBvZiB0YWJsZUhlYWRlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGRhdGEgPSB2ZXJzaW9uW3RhYmxlSGVhZGVyLmlkXTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHRhYmxlSGVhZGVyLmNvbC5hdHRyKCdjbGFzcycpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICd0eXBlLWJvb2xlYW4nOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZGF0YSA9PSAwKSBkYXRhID0gJ05vJztcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGRhdGEgPT0gMSkgZGF0YSA9ICdZZXMnO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAndHlwZS12ZXJzaW9uJzpcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ3R5cGUtZGF0ZSc6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0ZXh0LWNlbnRlcic7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAndHlwZS1yZWZlcmVuY2UnOlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAndHlwZS1uYW1lJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3RleHQtbGVmdCc7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJyc7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoZGF0YUNsYXNzKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQoZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuY29sLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci50aC5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdidG4tc3VjY2VzcyB3LTEwMCcpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ21vZGFsJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS10YXJnZXQnLCAnI21vZGFsX2RldGFpbCcpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdXJsJywgdmVyc2lvbi5kZXRhaWxVcmwpXHJcblx0XHRcdFx0XHRcdFx0LnRleHQodGV4dC5kZXRhaWxzKVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCQoJ2J1dHRvbltkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdW2RhdGEtdGFyZ2V0PVwiI21vZGFsX2RldGFpbFwiXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0YWpheC5zZXQoJyNtb2RhbF9kZXRhaWwgLm1vZGFsLWJvZHknLCAkKHRoaXMpLmRhdGEoJ3VybCcpKTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL3BhZ2luYXRpb25cclxuXHRcdFx0XHQkKCcjcGFnaW5hdGlvbicpLmVtcHR5KCk7XHJcblx0XHRcdFx0LypcclxuXHRcdFx0XHRpZiAocmVzdWx0LnBhZ2VNYXggPiAxKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5hZGRDbGFzcygnbWItNCcpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgcGFnZU1heCA9IHJlc3VsdC5wYWdlTWF4O1xyXG5cdFx0XHRcdFx0bGV0IHBhZ2UgPSB0aGF0LmdldCgncGFnZScpIHx8IDE7XHJcblx0XHRcdFx0XHRsZXQgcGFnZU1pbiA9IE1hdGgubWF4KDEsIHBhZ2UgLSAyKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dWwgPSAkKCcjcGFnaW5hdGlvbicpLmFwcGVuZChjcmVhdGUudWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnaW5hdGlvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IDEpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBNYXRoLm1heCgxLCBwYWdlIC0gMSkpXHJcblx0XHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpXHJcblx0XHRcdFx0XHRcdFx0XHQuaHRtbCgnJmxhcXVvOycpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IGk9MDsgaTw1OyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKHBhZ2VNYXggPiBpKSB7XHJcblx0XHRcdFx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSBwYWdlTWluICsgaSk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIHBhZ2VNaW4pXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50ZXh0KHBhZ2VNaW4gKyBpKVxyXG5cdFx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gcGFnZU1heCk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIE1hdGgubWluKHBhZ2VNYXgsIHBhZ2UgKyAxKSlcclxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdC5odG1sKCcmcmFxdW87JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQqL1xyXG5cdFx0XHRcdC8vJCgndGFibGUnKS5zdGlja3lUYWJsZUhlYWRlcnMoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdH0pO1x0XHJcblx0fSxcdFxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vLyB0YWJsZUhlYWRlclxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFibGVIZWFkZXIodGhhdCkge1xyXG5cdFxyXG5cdHZhciB0YWJsZUhlYWRlciA9IHtcclxuXHRcdGNvbDogJCh0aGF0KS5jbG9zZXN0KCd0YWJsZScpLmZpbmQoJ2NvbCcpLmVxKCQodGhhdCkuaW5kZXgoKSksXHJcblx0XHR0aDogJCh0aGF0KSxcclxuXHRcdGlkOiAkKHRoYXQpLmF0dHIoJ2lkJyksXHJcblx0XHR0aXRsZTogJCh0aGF0KS5kYXRhKCd0aXRsZScpLFxyXG5cdFx0c29ydDogJCh0aGF0KS5kYXRhKCdzb3J0JyksXHJcblx0XHRpc0ZpbHRlcmVkOiBmYWxzZSxcclxuXHRcdGlzU29ydGVkQXNjOiBmYWxzZSxcclxuXHRcdGlzU29ydGVkRGVzYzogZmFsc2UsXHJcblx0XHRzZWxlY3RzOiBbXSxcclxuXHR9XHJcblx0XHJcblx0JCh0aGF0KS5maW5kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHR2YXIgbXVsdGlwbGVBdHRyID0gKHR5cGVvZiAkKHRoaXMpLmF0dHIoJ211bHRpcGxlJykgIT09IHR5cGVvZiB1bmRlZmluZWQgJiYgJCh0aGlzKS5hdHRyKCdtdWx0aXBsZScpICE9PSBmYWxzZSk7XHJcblx0XHR2YXIgbmFtZSA9ICQodGhpcykucHJvcCgnbmFtZScpICsgKChtdWx0aXBsZUF0dHIpPydbXSc6JycpO1xyXG5cdFx0XHJcblx0XHR2YXIgc2VsZWN0ID0ge1xyXG5cdFx0XHRcdHNsdDogJCh0aGlzKSxcclxuXHRcdFx0XHRpZDogJCh0aGlzKS5wcm9wKCdpZCcpLFxyXG5cdFx0XHRcdG5hbWU6IG5hbWUsXHJcblx0XHRcdFx0bXVsdGlwbGU6IG11bHRpcGxlQXR0cixcclxuXHRcdFx0XHR0aXRsZTogJCh0aGlzKS5kYXRhKCd0aXRsZScpLFxyXG5cdFx0XHRcdG9wdGlvbnM6IFtdLFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0JCh0aGlzKS5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzZWxlY3Qub3B0aW9ucy5wdXNoKHtcclxuXHRcdFx0XHR2YWx1ZTogJCh0aGlzKS5hdHRyKCd2YWx1ZScpLFxyXG5cdFx0XHRcdHRleHQ6ICQodGhpcykudGV4dCgpLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5zZWxlY3RzLnB1c2goc2VsZWN0KTtcclxuXHRcdFxyXG5cdH0pO1xyXG5cdFxyXG5cdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzLmxlbmd0aCkge1xyXG5cdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cCA9IHRhYmxlSGVhZGVyLnRoLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0bi1ncm91cCB3LTEwMCcpXHJcblx0XHRcdC5hdHRyKCdyb2xlJywgJ2dyb3VwJylcclxuXHRcdFx0Lm9uKCdoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZihlLmNsaWNrRXZlbnQgJiYgJC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQucGFyZW50Tm9kZSwgZS5jbGlja0V2ZW50LnRhcmdldCkpIHtcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUuZW1wdHkoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3ctMTAwJylcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LnRleHQodGFibGVIZWFkZXIudGl0bGUpXHJcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cyAmJiB0YWJsZUhlYWRlci5zb3J0KSB7XHJcblx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IHRhYmxlSGVhZGVyLnNlbGVjdHNbMF0ubmFtZSkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnREZXNjJywgdGFibGVIZWFkZXIuc2VsZWN0c1swXS5uYW1lKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnRBc2MnLCB0YWJsZUhlYWRlci5zZWxlY3RzWzBdLm5hbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFxyXG5cdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24gPSB0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdweC0wJylcclxuXHRcdFx0LmNzcygnd2lkdGgnLCAnM2VtJylcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LmF0dHIoJ2lkJywgJ2JfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHQuYXR0cignZGF0YS10b2dnbGUnLCAnZHJvcGRvd24nKVxyXG5cdFx0XHQuYXR0cignYXJpYS1oYXNwb3B1cCcsIHRydWUpXHJcblx0XHRcdC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXHJcblx0XHQ7XHJcblx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUgPSB0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2Ryb3Bkb3duLW1lbnUnKVxyXG5cdFx0XHQuYXR0cignYXJpYS1sYWJlbGxlZGJ5JywgJ2JfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdkLWZsZXggZmxleC1yb3cnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgY3JlYXRlTWVudSk7XHJcblx0XHJcblx0fSBlbHNlIHtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24gPSB0YWJsZUhlYWRlci50aC5hcHBlbmQoY3JlYXRlLm1lbnVCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygndy0xMDAnKVxyXG5cdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUuZW1wdHkoKTtcclxuXHRcdFxyXG5cdFx0Zm9yIChsZXQgc2VsZWN0IG9mIHRhYmxlSGVhZGVyLnNlbGVjdHMpIHtcclxuXHRcdFx0XHJcblx0XHRcdHNlbGVjdC5kaXZDb250ZW50ID0gdGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnbXgtMScpXHJcblx0XHRcdFx0LmNzcygnbWluLXdpZHRoJywgJzE1ZW0nKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoc2VsZWN0Lm11bHRpcGxlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdFx0c2VsZWN0LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItZGFyayBwYi0yIHB4LTEnKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKHNlbGVjdC50aXRsZSk7XHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZGaWx0ZXIgPSBzZWxlY3QuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgcC0xJylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0XHRcdHNlbGVjdC5idG5Tb3J0RGVzYyA9IHNlbGVjdC5kaXZGaWx0ZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChpY29uLmFycm93VXApXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSBzZWxlY3QubmFtZSk/J3B4LTIgYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOidweC0yIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIHNvcnREZXNjKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2RmlsdGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQudGV4dCh0ZXh0LmZpbHRlcilcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMyBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgZmlsdGVyKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRcdFx0c2VsZWN0LmJ0blNvcnRBc2MgPSBzZWxlY3QuZGl2RmlsdGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd0Rvd24pXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IHNlbGVjdC5uYW1lKT8ncHgtMiBidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J3B4LTIgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgc29ydEFzYylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdlNlYXJjaCA9IHNlbGVjdC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHAtMicpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZTZWFyY2guYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dmFyIHNlYXJjaFZhbHVlID0gJCh0aGlzKS52YWwoKS50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoc2VhcmNoVmFsdWUgPT0gJycpIHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsLnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb24udGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVmFsdWUpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5kaXYuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRzZWxlY3QuZGl2TGlzdCA9IHNlbGVjdC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncHgtMiBvdmVyZmxvdy1hdXRvICcgKyAoKHNlbGVjdC5tdWx0aXBsZSk/J3B0LTMnOidwdC0xJykpXHJcblx0XHRcdFx0LmNzcygnbWF4LWhlaWdodCcsICcyMGVtJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHNlbGVjdC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwgPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmNoeFNlbGVjdEFsbCA9IHNlbGVjdC5kaXZTZWxlY3RBbGwuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ19zZWxlY3RBbGwnKVxyXG5cdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHZhciBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfc2VsZWN0QWxsJylcclxuXHRcdFx0XHRcdC50ZXh0KHRleHQuc2VsZWN0QWxsKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0b3B0aW9uLmRpdiA9IHNlbGVjdC5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHQ7XHJcblxyXG5cdFx0XHRcdFx0b3B0aW9uLmNoeCA9IG9wdGlvbi5kaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdXJsU2VhcmNoLmdldChzZWxlY3QubmFtZSkuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGxldCBjaGVja2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0bGV0IHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCQob3B0aW9uLmNoeCkuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5jaHhTZWxlY3RBbGwucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5sYmwgPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LnRleHQob3B0aW9uLnRleHQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZVbmtub3duID0gc2VsZWN0LmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5jaHhVbmtub3duID0gc2VsZWN0LmRpdlVua25vd24uYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ19ub3RBcHBsaWNhYmxlJylcclxuXHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgIXVybFNlYXJjaC5oYXMoc2VsZWN0Lm5hbWUpKVxyXG5cdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHZhciBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZShzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2VW5rbm93bi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIHNlbGVjdC5uYW1lICsgJ19ub3RBcHBsaWNhYmxlJylcclxuXHRcdFx0XHRcdC50ZXh0KHRleHQubm90QXBwbGljYWJsZSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5kaXYgPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvcHRpb24uY2h4ID0gb3B0aW9uLmRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCB1cmxTZWFyY2guZ2V0KHNlbGVjdC5uYW1lKS5pbmNsdWRlcyhvcHRpb24udmFsdWUpKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0LmRpdkxpc3QuZmluZCgnaW5wdXQnKS5ub3QodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXNlbGVjdC5jaHhVbmtub3duLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbi5jaHguaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKHNlbGVjdC5uYW1lLCBvcHRpb24udmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5sYmwgPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LnRleHQob3B0aW9uLnRleHQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gc29ydEFzYygpIHtcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydEFzYycsIHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZmlsdGVyKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gZmlsdGVyKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdGlmICghc2VsZWN0LmNoeFNlbGVjdEFsbC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbi5jaHguaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKHNlbGVjdC5uYW1lLCBvcHRpb24udmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gc29ydERlc2MoKSB7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydEFzYycpO1xyXG5cdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0RGVzYycsIHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0XHRmaWx0ZXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiB0YWJsZUhlYWRlcjtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy8gZmlsbERpc3BsYXlcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGZpbGxEaXNwbGF5KCkge1xyXG5cdHZhciBjb2wgPSAkKCcjZGlzcGxheScpLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0LmFkZENsYXNzKCdyb3cgcHktMicpXHJcblx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnY29sJylcclxuXHQ7XHJcblx0XHJcblx0Zm9yIChsZXQgdGFibGVIZWFkZXIgb2YgdGFibGVIZWFkZXJzKSB7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmFEaXNwbGF5ID0gY29sLmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5IGNvbC0yIG0tMSB0ZXh0LWxlZnQnKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuY2h4RGlzcGxheS5wcm9wKCdjaGVja2VkJywgIXRhYmxlSGVhZGVyLmNoeERpc3BsYXkuaXMoJzpjaGVja2VkJykpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCBkaXNwbGF5ID0gdXJsU2VhcmNoLmdldCgnZGlzcGxheVsnICsgdGFibGVIZWFkZXIuaWQgKyAnXScpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ2Rpc3BsYXlbJyArIHRhYmxlSGVhZGVyLmlkICsgJ10nKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuY2h4RGlzcGxheS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0aWYgKGRpc3BsYXkgPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKCdkaXNwbGF5WycgKyB0YWJsZUhlYWRlci5pZCArICddJywgMTApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGxldCBkaXYgPSB0YWJsZUhlYWRlci5hRGlzcGxheS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmNoeERpc3BsYXkgPSBkaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmF0dHIoJ2lkJywgJ2hfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHQub24oJ2NoYW5nZSBjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hdHRyKCdmb3InLCAnaF8nICsgdGFibGVIZWFkZXIuaWQpXHJcblx0XHRcdC50ZXh0KHRhYmxlSGVhZGVyLnRpdGxlKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRcclxuXHR9XHJcblx0XHJcbn1cdFxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy8gbGluZUNoZWNrZWRcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGxpbmVDaGVja2VkKCkge1xyXG5cdFxyXG5cdHZhciBjaGVja2VkID0gZmFsc2U7XHJcblx0dmFyIHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuXHQkKCd0Ym9keScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdGNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dW5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKGNoZWNrZWQgJiYgdW5jaGVja2VkKSB7XHJcblx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdpbmRldGVybWluYXRlJywgdHJ1ZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHR1cmxTZWFyY2guZGVsZXRlKCdpZFtdJyk7XHJcblx0aWYgKGNoZWNrZWQpIHtcclxuXHRcdCQoJ3RhYmxlJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCQodGhpcykucHJvcCgnaWQnKSAhPSAnY2hlY2tfYWxsJyAmJiAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZCgnaWRbXScsICQodGhpcykudmFsKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5zaG93KCk7XHJcblx0XHQkKCcjZG9jdW1lbnRfbW92ZScpLnNob3coKTtcclxuXHRcdCQoJyNkb2N1bWVudF9kZWxldGUnKS5zaG93KCk7XHJcblx0XHQkKCcjdmVyc2lvbl9tZW51Jykuc2hvdygpO1xyXG5cdH0gZWxzZSBpZih1bmNoZWNrZWQpIHtcclxuXHRcdCQoJyN2ZXJzaW9uJykudmFsKCcnKTtcclxuXHRcdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdFx0JCgnI2RvY3VtZW50X21vdmUnKS5oaWRlKCk7XHJcblx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdFx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcclxuXHR9XHJcbn1cclxuXHJcbnZhciB1cmxTZWFyY2ggPSBuZXcgVXJsU2VhcmNoKCk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFNlYXJjaCBmb3JtXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjc2VhcmNoIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHR1cmxTZWFyY2guc2V0KCdzZWFyY2gnLCAkKCcjc2VhcmNoIGlucHV0JykudmFsKCkpO1xyXG5cdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3NlYXJjaCBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdCQoJyNzZWFyY2ggaW5wdXQnKS52YWwoJycpO1xyXG5cdFx0XHJcblx0XHRpZiAodXJsU2VhcmNoLmhhcygnc2VhcmNoJykpIHtcclxuXHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc2VhcmNoJyk7XHJcblx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcclxuXHR9KTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIE1vZGFsXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQvKlxyXG5cdCQoJyNtb2RhbCcpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0YWpheC5zZXQoJyNtb2RhbCAubW9kYWwtY29udGVudCcsICQoZS5yZWxhdGVkVGFyZ2V0KS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1N0cmluZygpKTtcclxuXHR9KTtcclxuXHQqL1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9uZXcsICNkb2N1bWVudF9lZGl0LCAjZG9jdW1lbnRfbW92ZSwgI2RvY3VtZW50X2RlbGV0ZSwgI3ZlcnNpb25fbmV3LCAjdmVyc2lvbl9lZGl0LCAjdmVyc2lvbl9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGFqYXguc2V0KCcjbW9kYWwgLm1vZGFsLWNvbnRlbnQnLCAkKHRoaXMpLmRhdGEoJ3VybCcpICsgdXJsU2VhcmNoLnRvU3RyaW5nKCkpO1xyXG5cdH0pXHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBNb2RhbF9kZXRhaWxcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoZG9jdW1lbnQpLmFqYXhDb21wbGV0ZShmdW5jdGlvbihlLCB4aHIpIHtcclxuXHRcdGlmICh4aHIucmVzcG9uc2VUZXh0ID09PSAnJykge1xyXG5cdFx0XHQvL3VybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0XHRhamF4LnNldCgnI3RvYXN0JywgJCgnI3RvYXN0JykuZGF0YSgndXJsJykpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIE1lbnUgZGlzcGxheVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFRhYiBjb2xsYXBzZVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3RhYnMnKS5vbignc2hvdy5icy50YWInLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5jb2xsYXBzZScpLmNvbGxhcHNlKCdzaG93Jyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3RhYnNfaGlkZGVuJyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuYWRkQ2xhc3MoJ3RhYnNfc2hvd2VkJyk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3RhYnMgdWwgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkKHRoaXMpLmJsdXIoKTtcclxuXHRcdFx0JCh0aGlzKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xyXG5cdFx0XHQkKCcjJyArICQodGhpcykuYXR0cignYXJpYS1jb250cm9scycpKS5wYXJlbnQoKS5jb2xsYXBzZSgnaGlkZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG4gICAgXHJcblx0JCgnI3RhYnMnKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5yZW1vdmVDbGFzcygndGFic19oaWRkZW4nKTtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5hZGRDbGFzcygndGFic19zaG93ZWQnKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdGFicycpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3RhYnNfc2hvd2VkJyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuYWRkQ2xhc3MoJ3RhYnNfaGlkZGVuJyk7XHJcblx0fSk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBDaGVjayBhbGwgY2hlY2tib3hlc1xyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI2NoZWNrX2FsbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgndGJvZHknKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCAkKCcjY2hlY2tfYWxsJykuaXMoJzpjaGVja2VkJykpO1xyXG5cdFx0fSk7XHJcblx0XHRsaW5lQ2hlY2tlZCgpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gSnF1ZXJ5IFJlc2l6YWJsZSBDb2x1bW5zXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQvLyQoJ3RhYmxlJykucmVzaXphYmxlQ29sdW1ucygpO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gRHJhZ3RhYmxlXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQvKlxyXG5cdHZhciBkcmFnZ2VyID0gdGFibGVEcmFnZ2VyLmRlZmF1bHQoJCgndGFibGUnKS5nZXQoMCksIHtcclxuICAgICAgICBtb2RlOiAnY29sdW1uJyxcclxuXHR9KTtcclxuXHQqL1xyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gVGFibGUgaGVhZGVyc1xyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3RhYnMnKS50cmlnZ2VyKCdzaG93LmJzLnRhYicpO1xyXG5cdFxyXG5cdCQoJ3RhYmxlJykuZmluZCgndGhbaWRdW2RhdGEtdGl0bGVdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdHRhYmxlSGVhZGVycy5wdXNoKGNyZWF0ZVRhYmxlSGVhZGVyKHRoaXMpKTtcclxuXHR9KTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFZ1ZXNcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyN2dWVzJykuZmluZCgnYnV0dG9uW2RhdGEtdmFsdWVdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09ICd2dWVfbmV3Jykge1xyXG5cdFx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1N0cmluZygpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHVybFNlYXJjaC5zZXQoJ3Z1ZScsICQodGhpcykuZGF0YSgndmFsdWUnKSk7XHJcblx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdGZpbGxEaXNwbGF5KCk7XHJcblx0dXJsU2VhcmNoLnNldEZyb21Vcmwod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=