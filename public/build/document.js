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
            var display = that.get('display[' + tableHeader.id + ']');
            tableHeader.aDisplay.toggleClass('btn-primary', !display).toggleClass('btn-outline-primary', display);
            tableHeader.chxDisplay.prop('checked', display);
            if (display) tableHeader.col.css('width', display + 'em'); //headers

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
                  _tableHeader.col.show();

                  _tableHeader.th.show();

                  if (_tableHeader.col.attr('class') == 'type-standard') {
                    if (/^[-+]?[0-9]+$/.test(data)) {
                      dataClass = 'type-integer';
                    } else if (/^[-+]?[0-9]*\\.?[0-9]+$/.test(data)) {
                      dataClass = 'type-float';
                    } else {
                      dataClass = 'type-text';
                    }
                  } else {
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
};
/*
var datas = {
	
	get searchUrl() {
		
		let url = {};
		
		if (paramsArray.has('id[]')) {
			url.id = paramsArray.getAll('id[]');	
		}
		
		let _paramsArray = new URLSearchParams(this._searchUrl);
		
		if (_paramsArray.has('vue')) {
			url.vue = _paramsArray.get('vue');
			return $.param(url);
		} else {
			return paramsArray.toString();
		}
	},
	
	set searchUrl(value) {
		
		if (r = /\?(\S*)/g.exec(value)) { //enlève le ?
			this._searchUrl = r[1];
		} else if (r = /(\S+=\S+)+/g.exec(value)) {
			this._searchUrl = r[1];
		} else {
			paramsArray.delete('vue');
			this._searchUrl = paramsArray.toString();
		}
	},
	
	fetch: function() {
	
		$('#table > tbody').empty();
		$(icon.loading).insertAfter('#table');
		
		let that = this;
		
		$.ajax({
			url : $('#table').data('url') + '?' + this._searchUrl,
			type: 'GET',
			
			success: function(result) {
				
				paramsArray = new URLSearchParams($.param(result.query));
				
				$('#table').next().remove();
				$('#table').show();
				
				//vue
				if (paramsArray.has('vue')) that.searchUrl = 'vue=' + paramsArray.get('vue');
				
				$('#vues').find('button[data-value]').each(function() {
					if ($(this).data('value') == paramsArray.get('vue')) {
						$(this).attr('class', 'btn btn-outline-primary m-1')
					} else {
						$(this).attr('class', 'btn btn-primary m-1')
					}
				});
				
				for (let tableHeader of tableHeaders) {
					
					//hide
					
					let hide = paramsArray.getAll('hide[]');
					let index = hide.indexOf(tableHeader.id);
					
					tableHeader.aDisplay
						.toggleClass('btn-primary', !(index == -1))
						.toggleClass('btn-outline-primary', (index == -1))
					;
					tableHeader.chxDisplay.prop('checked', (index == -1))
					
					//headers
					
					tableHeader.btnDropdown.empty();
					
					tableHeader.isFiltered = false;
					tableHeader.isSortedAsc = false;
					tableHeader.isSortedDesc = false;
					
					for (let select of tableHeader.selects) {
						
						if (paramsArray.has(select.name)) {
							tableHeader.isFiltered = true;
						}
						
						if (paramsArray.get('sortAsc') == select.name) {
							tableHeader.isSortedAsc = true;
						}
						
						if (paramsArray.get('sortDesc') == select.name) {
							tableHeader.isSortedDesc = true;
						}
						
					}
					
					tableHeader.btnDropdown.append((tableHeader.isFiltered)?icon.funnelFill:icon.funnel);					
					
					if (tableHeader.isSortedAsc) {
						tableHeader.btnDropdown.append(icon.arrowDown);
					}
					
					if (tableHeader.isSortedDesc) {
						tableHeader.btnDropdown.append(icon.arrowUp);
					}
					
				}
				
				//tbody
				
				for (let version of result.versions) {
					let tr = $('#table > tbody').append(create.tr).children().last();
					
					let div = tr.append(create.td).children().last()
						.append(create.div).children().last()
							.addClass('custom-control custom-checkbox')
					;
					
					div.append(create.checkbox).children().last()
						.attr('id', 'c_' + version.id)
						.val(version.id)
						.on('click', lineChecked)
					;
					
					div.append(create.label).children().last()
						.attr('for', 'c_' + version.id)
					;
					
					
					for (let tableHeader of tableHeaders) {
						
						data = version[tableHeader.id];
						
						if (data !== undefined) {
							tableHeader.col.show();
							tableHeader.th.show();
							if (tableHeader.col.attr('class') == 'type-standard') {
								if (/^[-+]?[0-9]+$/.test(data)) {
									dataClass = 'type-integer';
								} else if (/^[-+]?[0-9]*\\.?[0-9]+$/.test(data)) {
									dataClass = 'type-float';
								} else {
									dataClass = 'type-text';
								}
							} else {
								dataClass = '';
							}
							tr.append(create.td).children().last()
								.addClass(dataClass)
								.text(data);
							
						} else {
							
							tableHeader.col.hide();
							tableHeader.th.hide();
							
						}
					}
					
					tr.append(create.td).children().last()
						.append(create.smallButton).children().last()
							.addClass('btn-success w-100')
							.attr('data-toggle', 'modal')
							.attr('data-target', '#modal')
							.attr('data-url', version.detailUrl)
							.text(text.details)
							
					;
					
				}
				
				//pagination
				
				if (result.pageMax > 1) {
					
					$('#table_container').addClass('mb-4');
					
					let pageMax = result.pageMax;
					let page = paramsArray.get('page') || 1;
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
				
				//$('table').stickyTableHeaders();
				
			},
		});	
	}

};
*/
//---------------
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
  $('#form').on('submit', function (e) {
    e.preventDefault;
    $(e.target).find('select').each(function () {
      if ($(this).val().toString() == '') {
        $(this).attr('disabled', 'disabled');
      }
    });
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

},[["./assets/js/document.js","runtime","vendors~app~automation~dashboard~document~form~login~project","vendors~app~document~form","vendors~app~document","vendors~document~form","vendors~document","app~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwidGFibGVIZWFkZXJzIiwiVXJsU2VhcmNoIiwiX3BhcmFtc0FycmF5IiwicHJvdG90eXBlIiwiaGFzIiwia2V5IiwiZ2V0IiwiZXhlYyIsImdldEFsbCIsInNldCIsInZhbHVlIiwiYXBwZW5kIiwic2V0RnJvbVVybCIsInBhcmFtc0FycmF5IiwidG9TdHJpbmciLCJ1cmxTZWFyY2giLCJmZXRjaCIsImVtcHR5IiwiaWNvbiIsImxvYWRpbmciLCJpbnNlcnRBZnRlciIsInRoYXQiLCJhamF4IiwidXJsIiwiZGF0YSIsInR5cGUiLCJzdWNjZXNzIiwicmVzdWx0Iiwic2VhcmNoVXJsIiwicGFyYW0iLCJxdWVyeSIsIm5leHQiLCJyZW1vdmUiLCJzaG93IiwiZmluZCIsImVhY2giLCJhdHRyIiwicGFyZW50IiwidGFibGVIZWFkZXIiLCJkaXNwbGF5IiwiaWQiLCJhRGlzcGxheSIsInRvZ2dsZUNsYXNzIiwiY2h4RGlzcGxheSIsInByb3AiLCJjb2wiLCJjc3MiLCJidG5Ecm9wZG93biIsImlzRmlsdGVyZWQiLCJpc1NvcnRlZEFzYyIsImlzU29ydGVkRGVzYyIsInNlbGVjdHMiLCJzZWxlY3QiLCJuYW1lIiwiZnVubmVsRmlsbCIsImZ1bm5lbCIsImFycm93RG93biIsImFycm93VXAiLCJ2ZXJzaW9ucyIsInZlcnNpb24iLCJ0ciIsImNyZWF0ZSIsImNoaWxkcmVuIiwibGFzdCIsImRpdiIsInRkIiwiYWRkQ2xhc3MiLCJjaGVja2JveCIsInZhbCIsIm9uIiwibGluZUNoZWNrZWQiLCJsYWJlbCIsInVuZGVmaW5lZCIsInRoIiwidGVzdCIsImRhdGFDbGFzcyIsInRleHQiLCJoaWRlIiwic21hbGxCdXR0b24iLCJkZXRhaWxVcmwiLCJkZXRhaWxzIiwicGFnZU1heCIsInBhZ2UiLCJwYWdlTWluIiwiTWF0aCIsIm1heCIsInVsIiwibGkiLCJhIiwic3BhbiIsImh0bWwiLCJpIiwibWluIiwiY3JlYXRlVGFibGVIZWFkZXIiLCJjbG9zZXN0IiwiZXEiLCJpbmRleCIsInRpdGxlIiwic29ydCIsIm11bHRpcGxlQXR0ciIsInNsdCIsIm11bHRpcGxlIiwib3B0aW9ucyIsInB1c2giLCJsZW5ndGgiLCJkaXZEcm9wZG93bkdyb3VwIiwiZSIsImNsaWNrRXZlbnQiLCJjb250YWlucyIsInJlbGF0ZWRUYXJnZXQiLCJwYXJlbnROb2RlIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJkaXZEcm9wZG93bk1lbnUiLCJtZW51QnV0dG9uIiwiY3JlYXRlTWVudSIsImRpdkNvbnRlbnQiLCJkaXZGaWx0ZXIiLCJidG5Tb3J0RGVzYyIsInNvcnREZXNjIiwiZmlsdGVyIiwiYnRuU29ydEFzYyIsInNvcnRBc2MiLCJkaXZTZWFyY2giLCJpbnB1dCIsInNlYXJjaFZhbHVlIiwidG9Mb3dlckNhc2UiLCJkaXZTZWxlY3RBbGwiLCJvcHRpb24iLCJjaHgiLCJpbmRleE9mIiwiZGl2TGlzdCIsImNoeFNlbGVjdEFsbCIsImNoZWNrZWQiLCJpcyIsInNlbGVjdEFsbCIsImluY2x1ZGVzIiwidW5jaGVja2VkIiwibGJsIiwiZGl2VW5rbm93biIsImNoeFVua25vd24iLCJkcm9wZG93biIsIm5vdEFwcGxpY2FibGUiLCJub3QiLCJmaWxsRGlzcGxheSIsImRvY3VtZW50IiwicmVhZHkiLCJsb2NhdGlvbiIsImFzc2lnbiIsImNvbGxhcHNlIiwiaGFzQ2xhc3MiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJyZW1vdmVDbGFzcyIsImJsdXIiLCJkZWxldGVBdHRyIiwid2luZG93Iiwic2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUExQixFQUFxQztBQUNwQytHLGNBQVEsQ0FBQ0MsTUFBVCxDQUFnQnZKLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTJCLElBQVIsQ0FBYSxLQUFiLElBQXNCVCxTQUFTLENBQUNELFFBQVYsRUFBdEM7QUFDQSxLQUZELE1BRU87QUFDTkMsZUFBUyxDQUFDTixHQUFWLENBQWMsS0FBZCxFQUFxQlosQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMkIsSUFBUixDQUFhLE9BQWIsQ0FBckI7QUFDQVQsZUFBUyxDQUFDQyxLQUFWO0FBQ0E7QUFDRCxHQVBEO0FBY0FnSSxhQUFXO0FBQ1hqSSxXQUFTLENBQUNILFVBQVYsQ0FBcUIrSSxNQUFNLENBQUNSLFFBQVAsQ0FBZ0JTLE1BQXJDO0FBQ0E3SSxXQUFTLENBQUNDLEtBQVY7QUFFQSxDQXhKRCxFIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwicmVxdWlyZSgnLi4vanMvYXBwLmpzJyk7XHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuY29uc3QgcG9wcGVyID0gcmVxdWlyZSgncG9wcGVyLmpzJyk7XHJcbnJlcXVpcmUoJ3N0aWNreS10YWJsZS1oZWFkZXJzJyk7XHJcbi8vY29uc3QgdGFibGVEcmFnZ2VyID0gcmVxdWlyZSgndGFibGUtZHJhZ2dlcicpO1xyXG4vL3JlcXVpcmUoJ2pxdWVyeS1yZXNpemFibGUtY29sdW1ucycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvZG9jdW1lbnQuc2NzcycpO1xyXG5jb25zdCBVUkxTZWFyY2hQYXJhbXMgPSByZXF1aXJlKCdAdW5nYXAvdXJsLXNlYXJjaC1wYXJhbXMvY2pzJyk7XHJcblxyXG52YXIgdGFibGVIZWFkZXJzID0gW107XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vL1VybFNlYXJjaFxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gVXJsU2VhcmNoICgpIHtcclxuXHR0aGlzLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxufVxyXG5cclxuVXJsU2VhcmNoLnByb3RvdHlwZSA9IHtcclxuXHJcblx0aGFzOiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdHJldHVybiB0aGlzLl9wYXJhbXNBcnJheS5oYXMoa2V5KTtcclxuXHR9LFxyXG5cdFxyXG5cdGdldDogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRpZiAoL1xcUytcXFtcXF0vZy5leGVjKGtleSkpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmdldEFsbChrZXkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmdldChrZXkpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0c2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRpZiAoa2V5ID09ICd2dWUnKSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7J3Z1ZSc6IHZhbHVlfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheS5zZXQoa2V5LCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRhcHBlbmQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHRcdGlmIChrZXkgPT0gJ3Z1ZScpIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsndnVlJzogdmFsdWV9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5LmFwcGVuZChrZXksIHZhbHVlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdGRlbGV0ZTogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHR0aGlzLl9wYXJhbXNBcnJheS5kZWxldGUoa2V5KTtcclxuXHR9LFxyXG5cdFxyXG5cdHNldEZyb21Vcmw6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRsZXQgcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHZhbHVlKTtcclxuXHRcdGlmIChwYXJhbXNBcnJheS5oYXMoJ3Z1ZScpKSB7XHJcblx0XHRcdHRoaXMuc2V0KCd2dWUnLCBwYXJhbXNBcnJheS5nZXQoJ3Z1ZScpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5ID0gcGFyYW1zQXJyYXk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHR0b1N0cmluZzogZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdXJsU2VhcmNoID0gdGhpcy5fcGFyYW1zQXJyYXkudG9TdHJpbmcoKTtcclxuXHRcdHJldHVybiAodXJsU2VhcmNoKT8nPycgKyB1cmxTZWFyY2g6Jyc7XHJcblx0fSxcclxuXHRcclxuXHRmZXRjaDogZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdCQoJyN0YWJsZSA+IHRib2R5JykuZW1wdHkoKTtcclxuXHRcdCQoaWNvbi5sb2FkaW5nKS5pbnNlcnRBZnRlcignI3RhYmxlJyk7XHJcblx0XHRcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFxyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsIDogJCgnI3RhYmxlJykuZGF0YSgndXJsJykgKyB0aGF0LnRvU3RyaW5nKCksXHJcblx0XHRcdHR5cGU6ICdHRVQnLFxyXG5cdFx0XHRcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IHNlYXJjaFVybCA9ICQucGFyYW0ocmVzdWx0LnF1ZXJ5KTtcclxuXHRcdFx0XHR0aGF0Ll9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoVXJsKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKCcjdGFibGUnKS5uZXh0KCkucmVtb3ZlKCk7XHJcblx0XHRcdFx0JCgnI3RhYmxlJykuc2hvdygpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vdnVlXHJcblx0XHRcdFx0JCgnI3Z1ZXMnKS5maW5kKCdidXR0b25bZGF0YS12YWx1ZV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuZGF0YSgndmFsdWUnKSA9PSB0aGF0LmdldCgndnVlJykpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLW91dGxpbmUtcHJpbWFyeScpO1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ2RpdiA+IGJ1dHRvbicpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tb3V0bGluZS1wcmltYXJ5IGRyb3Bkb3duLXRvZ2dsZScpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLXByaW1hcnknKTtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCdkaXYgPiBidXR0b24nKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlJyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgdGFibGVIZWFkZXIgb2YgdGFibGVIZWFkZXJzKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vZGlzcGxheVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZGlzcGxheSA9IHRoYXQuZ2V0KCdkaXNwbGF5WycgKyB0YWJsZUhlYWRlci5pZCArICddJyk7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5hRGlzcGxheVxyXG5cdFx0XHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ2J0bi1wcmltYXJ5JywgIShkaXNwbGF5KSlcclxuXHRcdFx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5JywgKGRpc3BsYXkpKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuY2h4RGlzcGxheS5wcm9wKCdjaGVja2VkJywgKGRpc3BsYXkpKVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoZGlzcGxheSkgdGFibGVIZWFkZXIuY29sLmNzcygnd2lkdGgnLCBkaXNwbGF5ICsgJ2VtJyk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vaGVhZGVyc1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5lbXB0eSgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc0ZpbHRlcmVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZEFzYyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IHNlbGVjdCBvZiB0YWJsZUhlYWRlci5zZWxlY3RzKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC5oYXMoc2VsZWN0Lm5hbWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNGaWx0ZXJlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmICh0aGF0LmdldCgnc29ydEFzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC5nZXQoJ3NvcnREZXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZERlc2MgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoKHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQpP2ljb24uZnVubmVsRmlsbDppY29uLmZ1bm5lbCk7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MpIHtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGljb24uYXJyb3dEb3duKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmlzU29ydGVkRGVzYykge1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoaWNvbi5hcnJvd1VwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL3Rib2R5XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgdmVyc2lvbiBvZiByZXN1bHQudmVyc2lvbnMpIHtcclxuXHRcdFx0XHRcdGxldCB0ciA9ICQoJyN0YWJsZSA+IHRib2R5JykuYXBwZW5kKGNyZWF0ZS50cikuY2hpbGRyZW4oKS5sYXN0KCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBkaXYgPSB0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgJ2NfJyArIHZlcnNpb24uaWQpXHJcblx0XHRcdFx0XHRcdC52YWwodmVyc2lvbi5pZClcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGxpbmVDaGVja2VkKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsICdjXycgKyB2ZXJzaW9uLmlkKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IHRhYmxlSGVhZGVyIG9mIHRhYmxlSGVhZGVycykge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0ZGF0YSA9IHZlcnNpb25bdGFibGVIZWFkZXIuaWRdO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNvbC5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIudGguc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0YWJsZUhlYWRlci5jb2wuYXR0cignY2xhc3MnKSA9PSAndHlwZS1zdGFuZGFyZCcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICgvXlstK10/WzAtOV0rJC8udGVzdChkYXRhKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndHlwZS1pbnRlZ2VyJztcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoL15bLStdP1swLTldKlxcXFwuP1swLTldKyQvLnRlc3QoZGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3R5cGUtZmxvYXQnO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3R5cGUtdGV4dCc7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICcnO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKGRhdGFDbGFzcylcclxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KGRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNvbC5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIudGguaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuLXN1Y2Nlc3Mgdy0xMDAnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXRvZ2dsZScsICdtb2RhbCcpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdGFyZ2V0JywgJyNtb2RhbCcpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdXJsJywgdmVyc2lvbi5kZXRhaWxVcmwpXHJcblx0XHRcdFx0XHRcdFx0LnRleHQodGV4dC5kZXRhaWxzKVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vcGFnaW5hdGlvblxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChyZXN1bHQucGFnZU1heCA+IDEpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCdtYi00Jyk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBwYWdlTWF4ID0gcmVzdWx0LnBhZ2VNYXg7XHJcblx0XHRcdFx0XHRsZXQgcGFnZSA9IHRoYXQuZ2V0KCdwYWdlJykgfHwgMTtcclxuXHRcdFx0XHRcdGxldCBwYWdlTWluID0gTWF0aC5tYXgoMSwgcGFnZSAtIDIpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR1bCA9ICQoJyNwYWdpbmF0aW9uJykuYXBwZW5kKGNyZWF0ZS51bCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdpbmF0aW9uIGp1c3RpZnktY29udGVudC1jZW50ZXInKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gMSk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIE1hdGgubWF4KDEsIHBhZ2UgLSAxKSlcclxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdC5odG1sKCcmbGFxdW87JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaT0wOyBpPDU7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRpZiAocGFnZU1heCA+IGkpIHtcclxuXHRcdFx0XHRcdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IHBhZ2VNaW4gKyBpKT8nIGRpc2FibGVkJzonJykpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgcGFnZU1pbilcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQocGFnZU1pbiArIGkpXHJcblx0XHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSBwYWdlTWF4KT8nIGRpc2FibGVkJzonJykpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgTWF0aC5taW4ocGFnZU1heCwgcGFnZSArIDEpKVxyXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0Lmh0bWwoJyZyYXF1bzsnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vJCgndGFibGUnKS5zdGlja3lUYWJsZUhlYWRlcnMoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdH0pO1x0XHJcblx0fSxcdFxyXG59XHJcblxyXG4vKlxyXG52YXIgZGF0YXMgPSB7XHJcblx0XHJcblx0Z2V0IHNlYXJjaFVybCgpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHVybCA9IHt9O1xyXG5cdFx0XHJcblx0XHRpZiAocGFyYW1zQXJyYXkuaGFzKCdpZFtdJykpIHtcclxuXHRcdFx0dXJsLmlkID0gcGFyYW1zQXJyYXkuZ2V0QWxsKCdpZFtdJyk7XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0bGV0IF9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXModGhpcy5fc2VhcmNoVXJsKTtcclxuXHRcdFxyXG5cdFx0aWYgKF9wYXJhbXNBcnJheS5oYXMoJ3Z1ZScpKSB7XHJcblx0XHRcdHVybC52dWUgPSBfcGFyYW1zQXJyYXkuZ2V0KCd2dWUnKTtcclxuXHRcdFx0cmV0dXJuICQucGFyYW0odXJsKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBwYXJhbXNBcnJheS50b1N0cmluZygpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0c2V0IHNlYXJjaFVybCh2YWx1ZSkge1xyXG5cdFx0XHJcblx0XHRpZiAociA9IC9cXD8oXFxTKikvZy5leGVjKHZhbHVlKSkgeyAvL2VubMOodmUgbGUgP1xyXG5cdFx0XHR0aGlzLl9zZWFyY2hVcmwgPSByWzFdO1xyXG5cdFx0fSBlbHNlIGlmIChyID0gLyhcXFMrPVxcUyspKy9nLmV4ZWModmFsdWUpKSB7XHJcblx0XHRcdHRoaXMuX3NlYXJjaFVybCA9IHJbMV07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRwYXJhbXNBcnJheS5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHR0aGlzLl9zZWFyY2hVcmwgPSBwYXJhbXNBcnJheS50b1N0cmluZygpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0ZmV0Y2g6IGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdFx0JCgnI3RhYmxlID4gdGJvZHknKS5lbXB0eSgpO1xyXG5cdFx0JChpY29uLmxvYWRpbmcpLmluc2VydEFmdGVyKCcjdGFibGUnKTtcclxuXHRcdFxyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR1cmwgOiAkKCcjdGFibGUnKS5kYXRhKCd1cmwnKSArICc/JyArIHRoaXMuX3NlYXJjaFVybCxcclxuXHRcdFx0dHlwZTogJ0dFVCcsXHJcblx0XHRcdFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRwYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoJC5wYXJhbShyZXN1bHQucXVlcnkpKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKCcjdGFibGUnKS5uZXh0KCkucmVtb3ZlKCk7XHJcblx0XHRcdFx0JCgnI3RhYmxlJykuc2hvdygpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vdnVlXHJcblx0XHRcdFx0aWYgKHBhcmFtc0FycmF5LmhhcygndnVlJykpIHRoYXQuc2VhcmNoVXJsID0gJ3Z1ZT0nICsgcGFyYW1zQXJyYXkuZ2V0KCd2dWUnKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKCcjdnVlcycpLmZpbmQoJ2J1dHRvbltkYXRhLXZhbHVlXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5kYXRhKCd2YWx1ZScpID09IHBhcmFtc0FycmF5LmdldCgndnVlJykpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtLTEnKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLXByaW1hcnkgbS0xJylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IgKGxldCB0YWJsZUhlYWRlciBvZiB0YWJsZUhlYWRlcnMpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly9oaWRlXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBoaWRlID0gcGFyYW1zQXJyYXkuZ2V0QWxsKCdoaWRlW10nKTtcclxuXHRcdFx0XHRcdGxldCBpbmRleCA9IGhpZGUuaW5kZXhPZih0YWJsZUhlYWRlci5pZCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmFEaXNwbGF5XHJcblx0XHRcdFx0XHRcdC50b2dnbGVDbGFzcygnYnRuLXByaW1hcnknLCAhKGluZGV4ID09IC0xKSlcclxuXHRcdFx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5JywgKGluZGV4ID09IC0xKSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNoeERpc3BsYXkucHJvcCgnY2hlY2tlZCcsIChpbmRleCA9PSAtMSkpXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vaGVhZGVyc1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5lbXB0eSgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc0ZpbHRlcmVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZEFzYyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IHNlbGVjdCBvZiB0YWJsZUhlYWRlci5zZWxlY3RzKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAocGFyYW1zQXJyYXkuaGFzKHNlbGVjdC5uYW1lKSkge1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAocGFyYW1zQXJyYXkuZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZEFzYyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChwYXJhbXNBcnJheS5nZXQoJ3NvcnREZXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZERlc2MgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoKHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQpP2ljb24uZnVubmVsRmlsbDppY29uLmZ1bm5lbCk7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MpIHtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGljb24uYXJyb3dEb3duKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmlzU29ydGVkRGVzYykge1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoaWNvbi5hcnJvd1VwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL3Rib2R5XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgdmVyc2lvbiBvZiByZXN1bHQudmVyc2lvbnMpIHtcclxuXHRcdFx0XHRcdGxldCB0ciA9ICQoJyN0YWJsZSA+IHRib2R5JykuYXBwZW5kKGNyZWF0ZS50cikuY2hpbGRyZW4oKS5sYXN0KCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBkaXYgPSB0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgJ2NfJyArIHZlcnNpb24uaWQpXHJcblx0XHRcdFx0XHRcdC52YWwodmVyc2lvbi5pZClcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGxpbmVDaGVja2VkKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsICdjXycgKyB2ZXJzaW9uLmlkKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IHRhYmxlSGVhZGVyIG9mIHRhYmxlSGVhZGVycykge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0ZGF0YSA9IHZlcnNpb25bdGFibGVIZWFkZXIuaWRdO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNvbC5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIudGguc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0YWJsZUhlYWRlci5jb2wuYXR0cignY2xhc3MnKSA9PSAndHlwZS1zdGFuZGFyZCcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICgvXlstK10/WzAtOV0rJC8udGVzdChkYXRhKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndHlwZS1pbnRlZ2VyJztcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoL15bLStdP1swLTldKlxcXFwuP1swLTldKyQvLnRlc3QoZGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3R5cGUtZmxvYXQnO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3R5cGUtdGV4dCc7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICcnO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKGRhdGFDbGFzcylcclxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KGRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNvbC5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIudGguaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuLXN1Y2Nlc3Mgdy0xMDAnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXRvZ2dsZScsICdtb2RhbCcpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdGFyZ2V0JywgJyNtb2RhbCcpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdXJsJywgdmVyc2lvbi5kZXRhaWxVcmwpXHJcblx0XHRcdFx0XHRcdFx0LnRleHQodGV4dC5kZXRhaWxzKVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vcGFnaW5hdGlvblxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChyZXN1bHQucGFnZU1heCA+IDEpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCdtYi00Jyk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBwYWdlTWF4ID0gcmVzdWx0LnBhZ2VNYXg7XHJcblx0XHRcdFx0XHRsZXQgcGFnZSA9IHBhcmFtc0FycmF5LmdldCgncGFnZScpIHx8IDE7XHJcblx0XHRcdFx0XHRsZXQgcGFnZU1pbiA9IE1hdGgubWF4KDEsIHBhZ2UgLSAyKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dWwgPSAkKCcjcGFnaW5hdGlvbicpLmFwcGVuZChjcmVhdGUudWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnaW5hdGlvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IDEpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBNYXRoLm1heCgxLCBwYWdlIC0gMSkpXHJcblx0XHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpXHJcblx0XHRcdFx0XHRcdFx0XHQuaHRtbCgnJmxhcXVvOycpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IGk9MDsgaTw1OyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKHBhZ2VNYXggPiBpKSB7XHJcblx0XHRcdFx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSBwYWdlTWluICsgaSk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIHBhZ2VNaW4pXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50ZXh0KHBhZ2VNaW4gKyBpKVxyXG5cdFx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gcGFnZU1heCk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIE1hdGgubWluKHBhZ2VNYXgsIHBhZ2UgKyAxKSlcclxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdC5odG1sKCcmcmFxdW87JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyQoJ3RhYmxlJykuc3RpY2t5VGFibGVIZWFkZXJzKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcdFxyXG5cdH1cclxuXHJcbn07XHJcbiovXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy8gdGFibGVIZWFkZXJcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlSGVhZGVyKHRoYXQpIHtcclxuXHRcclxuXHR2YXIgdGFibGVIZWFkZXIgPSB7XHJcblx0XHRjb2w6ICQodGhhdCkuY2xvc2VzdCgndGFibGUnKS5maW5kKCdjb2wnKS5lcSgkKHRoYXQpLmluZGV4KCkpLFxyXG5cdFx0dGg6ICQodGhhdCksXHJcblx0XHRpZDogJCh0aGF0KS5hdHRyKCdpZCcpLFxyXG5cdFx0dGl0bGU6ICQodGhhdCkuZGF0YSgndGl0bGUnKSxcclxuXHRcdHNvcnQ6ICQodGhhdCkuZGF0YSgnc29ydCcpLFxyXG5cdFx0aXNGaWx0ZXJlZDogZmFsc2UsXHJcblx0XHRpc1NvcnRlZEFzYzogZmFsc2UsXHJcblx0XHRpc1NvcnRlZERlc2M6IGZhbHNlLFxyXG5cdFx0c2VsZWN0czogW10sXHJcblx0fVxyXG5cdFxyXG5cdCQodGhhdCkuZmluZCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0dmFyIG11bHRpcGxlQXR0ciA9ICh0eXBlb2YgJCh0aGlzKS5hdHRyKCdtdWx0aXBsZScpICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmICQodGhpcykuYXR0cignbXVsdGlwbGUnKSAhPT0gZmFsc2UpO1xyXG5cdFx0dmFyIG5hbWUgPSAkKHRoaXMpLnByb3AoJ25hbWUnKSArICgobXVsdGlwbGVBdHRyKT8nW10nOicnKTtcclxuXHRcdFxyXG5cdFx0dmFyIHNlbGVjdCA9IHtcclxuXHRcdFx0XHRzbHQ6ICQodGhpcyksXHJcblx0XHRcdFx0aWQ6ICQodGhpcykucHJvcCgnaWQnKSxcclxuXHRcdFx0XHRuYW1lOiBuYW1lLFxyXG5cdFx0XHRcdG11bHRpcGxlOiBtdWx0aXBsZUF0dHIsXHJcblx0XHRcdFx0dGl0bGU6ICQodGhpcykuZGF0YSgndGl0bGUnKSxcclxuXHRcdFx0XHRvcHRpb25zOiBbXSxcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdCQodGhpcykuZmluZCgnb3B0aW9uJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0c2VsZWN0Lm9wdGlvbnMucHVzaCh7XHJcblx0XHRcdFx0dmFsdWU6ICQodGhpcykuYXR0cigndmFsdWUnKSxcclxuXHRcdFx0XHR0ZXh0OiAkKHRoaXMpLnRleHQoKSxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuc2VsZWN0cy5wdXNoKHNlbGVjdCk7XHJcblx0XHRcclxuXHR9KTtcclxuXHRcclxuXHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGgpIHtcclxuXHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAgPSB0YWJsZUhlYWRlci50aC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdidG4tZ3JvdXAgdy0xMDAnKVxyXG5cdFx0XHQuYXR0cigncm9sZScsICdncm91cCcpXHJcblx0XHRcdC5vbignaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYoZS5jbGlja0V2ZW50ICYmICQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0LnBhcmVudE5vZGUsIGUuY2xpY2tFdmVudC50YXJnZXQpKSB7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCd3LTEwMCcpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdC50ZXh0KHRhYmxlSGVhZGVyLnRpdGxlKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMgJiYgdGFibGVIZWFkZXIuc29ydCkge1xyXG5cdFx0XHRcdFx0aWYgKHVybFNlYXJjaC5nZXQoJ3NvcnRBc2MnKSA9PSB0YWJsZUhlYWRlci5zZWxlY3RzWzBdLm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydEFzYycpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0RGVzYycsIHRhYmxlSGVhZGVyLnNlbGVjdHNbMF0ubmFtZSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0QXNjJywgdGFibGVIZWFkZXIuc2VsZWN0c1swXS5uYW1lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcclxuXHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duID0gdGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cC5hcHBlbmQoY3JlYXRlLm1lbnVCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygncHgtMCcpXHJcblx0XHRcdC5jc3MoJ3dpZHRoJywgJzNlbScpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdC5hdHRyKCdpZCcsICdiXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0LmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ2Ryb3Bkb3duJylcclxuXHRcdFx0LmF0dHIoJ2FyaWEtaGFzcG9wdXAnLCB0cnVlKVxyXG5cdFx0XHQuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxyXG5cdFx0O1xyXG5cdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51ID0gdGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdkcm9wZG93bi1tZW51JylcclxuXHRcdFx0LmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsICdiXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnZC1mbGV4IGZsZXgtcm93JylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cC5vbignc2hvdy5icy5kcm9wZG93bicsIGNyZWF0ZU1lbnUpO1xyXG5cdFxyXG5cdH0gZWxzZSB7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duID0gdGFibGVIZWFkZXIudGguYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3ctMTAwJylcclxuXHRcdFx0LnRleHQodGFibGVIZWFkZXIudGl0bGUpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdilcclxuXHRcdDtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcclxuXHRcdGZvciAobGV0IHNlbGVjdCBvZiB0YWJsZUhlYWRlci5zZWxlY3RzKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRzZWxlY3QuZGl2Q29udGVudCA9IHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duTWVudS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ214LTEnKVxyXG5cdFx0XHRcdC5jc3MoJ21pbi13aWR0aCcsICcxNWVtJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHNlbGVjdC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRcdHNlbGVjdC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtY2VudGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLWRhcmsgcGItMiBweC0xJylcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChzZWxlY3QudGl0bGUpO1xyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2RmlsdGVyID0gc2VsZWN0LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtY2VudGVyIHAtMScpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdFx0XHRzZWxlY3QuYnRuU29ydERlc2MgPSBzZWxlY3QuZGl2RmlsdGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd1VwKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoKHVybFNlYXJjaC5nZXQoJ3NvcnREZXNjJykgPT0gc2VsZWN0Lm5hbWUpPydweC0yIGJ0bi1vdXRsaW5lLXByaW1hcnkgYmctZGFyayB0ZXh0LXdoaXRlJzoncHgtMiBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBzb3J0RGVzYylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdkZpbHRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LnRleHQodGV4dC5maWx0ZXIpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTMgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZpbHRlcilcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0XHRcdHNlbGVjdC5idG5Tb3J0QXNjID0gc2VsZWN0LmRpdkZpbHRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGljb24uYXJyb3dEb3duKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoKHVybFNlYXJjaC5nZXQoJ3NvcnRBc2MnKSA9PSBzZWxlY3QubmFtZSk/J3B4LTIgYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOidweC0yIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIHNvcnRBc2MpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZTZWFyY2ggPSBzZWxlY3QuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItZGFyayBwLTInKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2U2VhcmNoLmFwcGVuZChjcmVhdGUuaW5wdXQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHZhciBzZWFyY2hWYWx1ZSA9ICQodGhpcykudmFsKCkudG9Mb3dlckNhc2UoKVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHNlYXJjaFZhbHVlID09ICcnKSB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0LmRpdlNlbGVjdEFsbC5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb24uZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5jaHgucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0LmRpdlNlbGVjdEFsbC5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9uLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uZGl2LmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmRpdi5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5jaHgucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0c2VsZWN0LmRpdkxpc3QgPSBzZWxlY3QuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTIgb3ZlcmZsb3ctYXV0byAnICsgKChzZWxlY3QubXVsdGlwbGUpPydwdC0zJzoncHQtMScpKVxyXG5cdFx0XHRcdC5jc3MoJ21heC1oZWlnaHQnLCAnMjBlbScpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChzZWxlY3QubXVsdGlwbGUpIHtcclxuXHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsID0gc2VsZWN0LmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5jaHhTZWxlY3RBbGwgPSBzZWxlY3QuZGl2U2VsZWN0QWxsLmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfc2VsZWN0QWxsJylcclxuXHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR2YXIgY2hlY2tlZCA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1x0XHJcblx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsLmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnX3NlbGVjdEFsbCcpXHJcblx0XHRcdFx0XHQudGV4dCh0ZXh0LnNlbGVjdEFsbClcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5kaXYgPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cclxuXHRcdFx0XHRcdG9wdGlvbi5jaHggPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ18nICsgb3B0aW9uLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsIHVybFNlYXJjaC5nZXQoc2VsZWN0Lm5hbWUpLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRsZXQgY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdGxldCB1bmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICgkKG9wdGlvbi5jaHgpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKGNoZWNrZWQgJiYgdW5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LmNoeFNlbGVjdEFsbC5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LmNoeFNlbGVjdEFsbC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvcHRpb24ubGJsID0gb3B0aW9uLmRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdC50ZXh0KG9wdGlvbi50ZXh0KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2VW5rbm93biA9IHNlbGVjdC5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuY2h4VW5rbm93biA9IHNlbGVjdC5kaXZVbmtub3duLmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfbm90QXBwbGljYWJsZScpXHJcblx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsICF1cmxTZWFyY2guaGFzKHNlbGVjdC5uYW1lKSlcclxuXHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR2YXIgY2hlY2tlZCA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1x0XHJcblx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uZHJvcGRvd24oJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdlVua25vd24uYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfbm90QXBwbGljYWJsZScpXHJcblx0XHRcdFx0XHQudGV4dCh0ZXh0Lm5vdEFwcGxpY2FibGUpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvcHRpb24uZGl2ID0gc2VsZWN0LmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0b3B0aW9uLmNoeCA9IG9wdGlvbi5kaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdXJsU2VhcmNoLmdldChzZWxlY3QubmFtZSkuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdC5kaXZMaXN0LmZpbmQoJ2lucHV0Jykubm90KHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZShzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFzZWxlY3QuY2h4VW5rbm93bi5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb24uY2h4LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZChzZWxlY3QubmFtZSwgb3B0aW9uLnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvcHRpb24ubGJsID0gb3B0aW9uLmRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdC50ZXh0KG9wdGlvbi50ZXh0KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHRcdGZ1bmN0aW9uIHNvcnRBc2MoKSB7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnRBc2MnLCBzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZpbHRlcigpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdGZ1bmN0aW9uIGZpbHRlcigpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHRpZiAoIXNlbGVjdC5jaHhTZWxlY3RBbGwuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdGlmIChvcHRpb24uY2h4LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZChzZWxlY3QubmFtZSwgb3B0aW9uLnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdGZ1bmN0aW9uIHNvcnREZXNjKCkge1xyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSBzZWxlY3QubmFtZSkge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydERlc2MnLCBzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0fVx0XHJcblx0XHRcdFx0ZmlsdGVyKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gdGFibGVIZWFkZXI7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGZpbGxEaXNwbGF5XHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBmaWxsRGlzcGxheSgpIHtcclxuXHR2YXIgY29sID0gJCgnI2Rpc3BsYXknKS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdC5hZGRDbGFzcygncm93IHB5LTInKVxyXG5cdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbCcpXHJcblx0O1xyXG5cdFxyXG5cdGZvciAobGV0IHRhYmxlSGVhZGVyIG9mIHRhYmxlSGVhZGVycykge1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5hRGlzcGxheSA9IGNvbC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeSBjb2wtMiBtLTEgdGV4dC1sZWZ0JylcclxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmNoeERpc3BsYXkucHJvcCgnY2hlY2tlZCcsICF0YWJsZUhlYWRlci5jaHhEaXNwbGF5LmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgZGlzcGxheSA9IHVybFNlYXJjaC5nZXQoJ2Rpc3BsYXlbJyArIHRhYmxlSGVhZGVyLmlkICsgJ10nKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdkaXNwbGF5WycgKyB0YWJsZUhlYWRlci5pZCArICddJyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmNoeERpc3BsYXkuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdGlmIChkaXNwbGF5ID09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZCgnZGlzcGxheVsnICsgdGFibGVIZWFkZXIuaWQgKyAnXScsIDEwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRsZXQgZGl2ID0gdGFibGVIZWFkZXIuYURpc3BsYXkuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5jaHhEaXNwbGF5ID0gZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hdHRyKCdpZCcsICdoXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0Lm9uKCdjaGFuZ2UgY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXR0cignZm9yJywgJ2hfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG59XHRcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGxpbmVDaGVja2VkXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBsaW5lQ2hlY2tlZCgpIHtcclxuXHRcclxuXHR2YXIgY2hlY2tlZCA9IGZhbHNlO1xyXG5cdHZhciB1bmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0JCgndGJvZHknKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHRpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHVuY2hlY2tlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmIChjaGVja2VkICYmIHVuY2hlY2tlZCkge1xyXG5cdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0dXJsU2VhcmNoLmRlbGV0ZSgnaWRbXScpO1xyXG5cdGlmIChjaGVja2VkKSB7XHJcblx0XHQkKCd0YWJsZScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICgkKHRoaXMpLnByb3AoJ2lkJykgIT0gJ2NoZWNrX2FsbCcgJiYgJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdHVybFNlYXJjaC5hcHBlbmQoJ2lkW10nLCAkKHRoaXMpLnZhbCgpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoJyNkb2N1bWVudF9lZGl0Jykuc2hvdygpO1xyXG5cdFx0JCgnI2RvY3VtZW50X21vdmUnKS5zaG93KCk7XHJcblx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuc2hvdygpO1xyXG5cdFx0JCgnI3ZlcnNpb25fbWVudScpLnNob3coKTtcdFxyXG5cdH0gZWxzZSBpZih1bmNoZWNrZWQpIHtcclxuXHRcdCQoJyN2ZXJzaW9uJykudmFsKCcnKTtcclxuXHRcdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdFx0JCgnI2RvY3VtZW50X21vdmUnKS5oaWRlKCk7XHJcblx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdFx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcdFxyXG5cdH1cclxufVxyXG5cclxudmFyIHVybFNlYXJjaCA9IG5ldyBVcmxTZWFyY2goKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gU2VhcmNoIGZvcm1cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyNmb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFxyXG5cdFx0ZS5wcmV2ZW50RGVmYXVsdDtcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICgkKHRoaXMpLnZhbCgpLnRvU3RyaW5nKCkgID09ICcnKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBNb2RhbFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI21vZGFsJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRhamF4LnNldCgnLm1vZGFsLWJvZHknLCAkKGUucmVsYXRlZFRhcmdldCkuZGF0YSgndXJsJykpO1xyXG5cdH0pO1xyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIE1lbnUgZGlzcGxheVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfZWRpdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI2RvY3VtZW50X21vdmUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgdXJsU2VhcmNoLnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgdXJsU2VhcmNoLnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2ZXJzaW9uX25ldycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3ZlcnNpb25fZWRpdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3ZlcnNpb25fZGVsZXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFRhYiBjb2xsYXBzZVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3RhYnMnKS5vbignc2hvdy5icy50YWInLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5jb2xsYXBzZScpLmNvbGxhcHNlKCdzaG93Jyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuY3NzKCdtYXJnaW4tdG9wJywgJzEwZW0nKTtcclxuXHRcdCQoJyN0YWJzID4gZGl2JykuY3NzKCdoZWlnaHQnLCAnNmVtJyk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3RhYnMgdWwgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkKHRoaXMpLmJsdXIoKTtcclxuXHRcdFx0JCh0aGlzKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xyXG5cdFx0XHQkKCcjJyArICQodGhpcykuYXR0cignYXJpYS1jb250cm9scycpKS5wYXJlbnQoKS5jb2xsYXBzZSgnaGlkZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG4gICAgXHJcblx0JCgnI3RhYnMnKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5jc3MoJ21hcmdpbi10b3AnLCAnMTBlbScpO1xyXG5cdFx0JCgnI3RhYnMgPiBkaXYnKS5jc3MoJ2hlaWdodCcsICc2ZW0nKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdGFicycpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuY3NzKCdtYXJnaW4tdG9wJywgJzRlbScpO1xyXG5cdFx0JCgnI3RhYnMgPiBkaXYnKS5kZWxldGVBdHRyKCdzdHlsZScpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gQ2hlY2sgYWxsIGNoZWNrYm94ZXNcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyNjaGVja19hbGwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJ3Rib2R5JykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgJCgnI2NoZWNrX2FsbCcpLmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdH0pO1xyXG5cdFx0bGluZUNoZWNrZWQoKTtcclxuXHR9KTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIEpxdWVyeSBSZXNpemFibGUgQ29sdW1uc1xyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0Ly8kKCd0YWJsZScpLnJlc2l6YWJsZUNvbHVtbnMoKTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIERyYWd0YWJsZVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0LypcclxuXHR2YXIgZHJhZ2dlciA9IHRhYmxlRHJhZ2dlci5kZWZhdWx0KCQoJ3RhYmxlJykuZ2V0KDApLCB7XHJcbiAgICAgICAgbW9kZTogJ2NvbHVtbicsXHJcblx0fSk7XHJcblx0Ki9cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFRhYmxlIGhlYWRlcnNcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJ3RhYmxlJykuZmluZCgndGhbaWRdW2RhdGEtdGl0bGVdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdHRhYmxlSGVhZGVycy5wdXNoKGNyZWF0ZVRhYmxlSGVhZGVyKHRoaXMpKTtcclxuXHR9KTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFZ1ZXNcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyN2dWVzJykuZmluZCgnYnV0dG9uW2RhdGEtdmFsdWVdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09ICd2dWVfbmV3Jykge1xyXG5cdFx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1N0cmluZygpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHVybFNlYXJjaC5zZXQoJ3Z1ZScsICQodGhpcykuZGF0YSgndmFsdWUnKSk7XHJcblx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdGZpbGxEaXNwbGF5KCk7XHJcblx0dXJsU2VhcmNoLnNldEZyb21Vcmwod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=