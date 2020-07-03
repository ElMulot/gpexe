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

__webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.array.splice */ "./node_modules/core-js/modules/es.array.splice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.for-each */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

__webpack_require__(/*! ../js/app.js */ "./assets/js/app.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

__webpack_require__(/*! sticky-table-headers */ "./node_modules/sticky-table-headers/js/jquery.stickytableheaders.js");

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
            $(this).attr('class', 'btn btn-outline-primary m-1');
          } else {
            $(this).attr('class', 'btn btn-primary m-1');
          }
        });

        var _iterator = _createForOfIteratorHelper(tableHeaders),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var tableHeader = _step.value;
            //hide
            var hide = that.get('hide[]');
            var index = hide.indexOf(tableHeader.id);
            tableHeader.aHide.toggleClass('btn-primary', !(index == -1)).toggleClass('btn-outline-primary', index == -1);
            tableHeader.chxHide.prop('checked', index == -1); //headers

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
					
					tableHeader.aHide
						.toggleClass('btn-primary', !(index == -1))
						.toggleClass('btn-outline-primary', (index == -1))
					;
					tableHeader.chxHide.prop('checked', (index == -1))
					
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
      tableHeader.aHide = col.append(create.a).children().last().addClass('btn-outline-primary col-2 m-1 text-left').on('click', function () {
        tableHeader.chxHide.prop('checked', !tableHeader.chxHide.is(':checked'));
        var hide = urlSearch.get('hide[]');
        var index = hide.indexOf(tableHeader.id);

        if (tableHeader.chxHide.is(':checked')) {
          if (index > -1) {
            hide.splice(index, 1);
          }
        } else {
          if (index == -1 && tableHeader.id) {
            hide.push(tableHeader.id);
          }
        }

        urlSearch["delete"]('hide[]');
        hide.forEach(function (e) {
          return urlSearch.append('hide[]', e);
        });
        urlSearch.fetch();
        return false;
      });
      var div = tableHeader.aHide.append(create.div).children().last().addClass('custom-control custom-checkbox');
      tableHeader.chxHide = div.append(create.checkbox).children().last().attr('id', 'h_' + tableHeader.id).on('change click', function () {
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
  $('#form').on('submit', function (event) {
    event.preventDefault;
    $(event.target).find('select').each(function () {
      if ($(this).val().toString() == '') {
        $(this).attr('disabled', 'disabled');
      }
    });
    return true;
  });
  $('#document_edit').hide();
  $('#document_move').hide();
  $('#document_delete').hide();
  $('#version_menu').hide();
  $('#modal').on('show.bs.modal', function (e) {
    ajax.set('.modal-body', $(e.relatedTarget).data('url'));
  });
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
  });
  /*
  $('#tabs a').on('click', function(e) {
  	if ($(this).hasClass('active')) {
  		$('#tabs').css('height', '3em');
  		
  		$(this).removeClass('active');
  		$(this).attr('aria-selected', false);
  		//console.log(this);
  		$('#' + $(this).attr('aria-controls')).removeAttr('class');
  		//console.log($('#' + $(this).attr('aria-controls'))[0]);
  	} else {
  		$('#tabs').css('height', '10em');
  		$(this).addClass('active');
  		$(this).attr('aria-selected', true);
  		$('#' + $(this).attr('aria-controls')).attr('class', 'tab-pane fade show active');
  	}
  	
  });
  */

  $('#check_all').on('click', function () {
    $('tbody').find('input[type="checkbox"]').each(function () {
      $(this).prop('checked', $('#check_all').is(':checked'));
    });
    lineChecked();
  });
  $('table').find('th[id][data-title]').each(function () {
    tableHeaders.push(createTableHeader(this));
  });
  $('#vues').find('button').on('click', function () {
    if ($(this).attr('id') == 'vue_new') {
      location.assign($(this).data('url') + urlSearch.toString());
    } else {
      urlSearch.set('vue', $(this).data('value'));
      urlSearch.fetch();
    }
  });
  fillDisplay();
  urlSearch.setFromUrl(window.location);
  urlSearch.fetch();
});

/***/ })

},[["./assets/js/document.js","runtime","vendors~app~automation~dashboard~document~form~login","vendors~app~automation~dashboard~document~form","vendors~app~document~form","vendors~app~document","vendors~document~form","vendors~document","app~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwidGFibGVIZWFkZXJzIiwiVXJsU2VhcmNoIiwiX3BhcmFtc0FycmF5IiwicHJvdG90eXBlIiwiaGFzIiwia2V5IiwiZ2V0IiwiZXhlYyIsImdldEFsbCIsInNldCIsInZhbHVlIiwiYXBwZW5kIiwic2V0RnJvbVVybCIsInBhcmFtc0FycmF5IiwidG9TdHJpbmciLCJ1cmxTZWFyY2giLCJmZXRjaCIsImVtcHR5IiwiaWNvbiIsImxvYWRpbmciLCJpbnNlcnRBZnRlciIsInRoYXQiLCJhamF4IiwidXJsIiwiZGF0YSIsInR5cGUiLCJzdWNjZXNzIiwicmVzdWx0Iiwic2VhcmNoVXJsIiwicGFyYW0iLCJxdWVyeSIsIm5leHQiLCJyZW1vdmUiLCJzaG93IiwiZmluZCIsImVhY2giLCJhdHRyIiwidGFibGVIZWFkZXIiLCJoaWRlIiwiaW5kZXgiLCJpbmRleE9mIiwiaWQiLCJhSGlkZSIsInRvZ2dsZUNsYXNzIiwiY2h4SGlkZSIsInByb3AiLCJidG5Ecm9wZG93biIsImlzRmlsdGVyZWQiLCJpc1NvcnRlZEFzYyIsImlzU29ydGVkRGVzYyIsInNlbGVjdHMiLCJzZWxlY3QiLCJuYW1lIiwiZnVubmVsRmlsbCIsImZ1bm5lbCIsImFycm93RG93biIsImFycm93VXAiLCJ2ZXJzaW9ucyIsInZlcnNpb24iLCJ0ciIsImNyZWF0ZSIsImNoaWxkcmVuIiwibGFzdCIsImRpdiIsInRkIiwiYWRkQ2xhc3MiLCJjaGVja2JveCIsInZhbCIsIm9uIiwibGluZUNoZWNrZWQiLCJsYWJlbCIsInVuZGVmaW5lZCIsImNvbCIsInRoIiwidGVzdCIsImRhdGFDbGFzcyIsInRleHQiLCJzbWFsbEJ1dHRvbiIsImRldGFpbFVybCIsImRldGFpbHMiLCJwYWdlTWF4IiwicGFnZSIsInBhZ2VNaW4iLCJNYXRoIiwibWF4IiwidWwiLCJsaSIsImEiLCJzcGFuIiwiaHRtbCIsImkiLCJtaW4iLCJjcmVhdGVUYWJsZUhlYWRlciIsImNsb3Nlc3QiLCJlcSIsInRpdGxlIiwic29ydCIsIm11bHRpcGxlQXR0ciIsInNsdCIsIm11bHRpcGxlIiwib3B0aW9ucyIsInB1c2giLCJsZW5ndGgiLCJkaXZEcm9wZG93bkdyb3VwIiwiZSIsImNsaWNrRXZlbnQiLCJjb250YWlucyIsInJlbGF0ZWRUYXJnZXQiLCJwYXJlbnROb2RlIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJkaXZEcm9wZG93bk1lbnUiLCJtZW51QnV0dG9uIiwiY3NzIiwiY3JlYXRlTWVudSIsImRpdkNvbnRlbnQiLCJkaXZGaWx0ZXIiLCJidG5Tb3J0RGVzYyIsInNvcnREZXNjIiwiZmlsdGVyIiwiYnRuU29ydEFzYyIsInNvcnRBc2MiLCJkaXZTZWFyY2giLCJpbnB1dCIsInNlYXJjaFZhbHVlIiwidG9Mb3dlckNhc2UiLCJkaXZTZWxlY3RBbGwiLCJvcHRpb24iLCJjaHgiLCJkaXZMaXN0IiwiY2h4U2VsZWN0QWxsIiwiY2hlY2tlZCIsImlzIiwic2VsZWN0QWxsIiwiaW5jbHVkZXMiLCJ1bmNoZWNrZWQiLCJsYmwiLCJkaXZVbmtub3duIiwiY2h4VW5rbm93biIsImRyb3Bkb3duIiwibm90QXBwbGljYWJsZSIsIm5vdCIsImZpbGxEaXNwbGF5Iiwic3BsaWNlIiwiZm9yRWFjaCIsImRvY3VtZW50IiwicmVhZHkiLCJldmVudCIsImxvY2F0aW9uIiwiYXNzaWduIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQUEsbUJBQU8sQ0FBQyx3Q0FBRCxDQUFQOztBQUNBLElBQU1DLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQSxJ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Q0FBUWdELElBQVIsQ0FBYSxTQUFiLEVBQXdCaEQsQ0FBQyxDQUFDLFlBQUQsQ0FBRCxDQUFnQnVJLEVBQWhCLENBQW1CLFVBQW5CLENBQXhCO0FBQ0EsS0FGRDtBQUdBL0QsZUFBVztBQUNYLEdBTEQ7QUFPQXhFLEdBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV3FDLElBQVgsQ0FBZ0Isb0JBQWhCLEVBQXNDQyxJQUF0QyxDQUEyQyxZQUFXO0FBQ3JEbkMsZ0JBQVksQ0FBQ3FHLElBQWIsQ0FBa0JULGlCQUFpQixDQUFDLElBQUQsQ0FBbkM7QUFDQSxHQUZEO0FBSUEvRixHQUFDLENBQUMsT0FBRCxDQUFELENBQVdxQyxJQUFYLENBQWdCLFFBQWhCLEVBQTBCa0MsRUFBMUIsQ0FBNkIsT0FBN0IsRUFBc0MsWUFBVztBQUNoRCxRQUFJdkUsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRdUMsSUFBUixDQUFhLElBQWIsS0FBc0IsU0FBMUIsRUFBcUM7QUFDcENnSCxjQUFRLENBQUNDLE1BQVQsQ0FBZ0J4SixDQUFDLENBQUMsSUFBRCxDQUFELENBQVEyQixJQUFSLENBQWEsS0FBYixJQUFzQlQsU0FBUyxDQUFDRCxRQUFWLEVBQXRDO0FBQ0EsS0FGRCxNQUVPO0FBQ05DLGVBQVMsQ0FBQ04sR0FBVixDQUFjLEtBQWQsRUFBcUJaLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTJCLElBQVIsQ0FBYSxPQUFiLENBQXJCO0FBQ0FULGVBQVMsQ0FBQ0MsS0FBVjtBQUNBO0FBQ0QsR0FQRDtBQWNBOEgsYUFBVztBQUNYL0gsV0FBUyxDQUFDSCxVQUFWLENBQXFCMEksTUFBTSxDQUFDRixRQUE1QjtBQUNBckksV0FBUyxDQUFDQyxLQUFWO0FBRUEsQ0F2R0QsRSIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsInJlcXVpcmUoJy4uL2pzL2FwcC5qcycpO1xyXG5jb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbmNvbnN0IHBvcHBlciA9IHJlcXVpcmUoJ3BvcHBlci5qcycpO1xyXG5yZXF1aXJlKCdzdGlja3ktdGFibGUtaGVhZGVycycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvZG9jdW1lbnQuc2NzcycpO1xyXG5jb25zdCBVUkxTZWFyY2hQYXJhbXMgPSByZXF1aXJlKCdAdW5nYXAvdXJsLXNlYXJjaC1wYXJhbXMvY2pzJyk7XHJcblxyXG5cclxuXHJcbnZhciB0YWJsZUhlYWRlcnMgPSBbXTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vVXJsU2VhcmNoXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBVcmxTZWFyY2ggKCkge1xyXG5cdHRoaXMuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG59XHJcblxyXG5VcmxTZWFyY2gucHJvdG90eXBlID0ge1xyXG5cclxuXHRoYXM6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmhhcyhrZXkpO1xyXG5cdH0sXHJcblx0XHJcblx0Z2V0OiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdGlmICgvXFxTK1xcW1xcXS9nLmV4ZWMoa2V5KSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGFyYW1zQXJyYXkuZ2V0QWxsKGtleSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGFyYW1zQXJyYXkuZ2V0KGtleSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHRcdGlmIChrZXkgPT0gJ3Z1ZScpIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsndnVlJzogdmFsdWV9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5LnNldChrZXksIHZhbHVlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdGFwcGVuZDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG5cdFx0aWYgKGtleSA9PSAndnVlJykge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoeyd2dWUnOiB2YWx1ZX0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkuYXBwZW5kKGtleSwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0ZGVsZXRlOiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdHRoaXMuX3BhcmFtc0FycmF5LmRlbGV0ZShrZXkpO1xyXG5cdH0sXHJcblx0XHJcblx0c2V0RnJvbVVybDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGxldCBwYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXModmFsdWUpO1xyXG5cdFx0aWYgKHBhcmFtc0FycmF5LmhhcygndnVlJykpIHtcclxuXHRcdFx0dGhpcy5zZXQoJ3Z1ZScsIHBhcmFtc0FycmF5LmdldCgndnVlJykpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBwYXJhbXNBcnJheTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcclxuXHRcdGxldCB1cmxTZWFyY2ggPSB0aGlzLl9wYXJhbXNBcnJheS50b1N0cmluZygpO1xyXG5cdFx0cmV0dXJuICh1cmxTZWFyY2gpPyc/JyArIHVybFNlYXJjaDonJztcclxuXHR9LFxyXG5cdFxyXG5cdGZldGNoOiBmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0JCgnI3RhYmxlID4gdGJvZHknKS5lbXB0eSgpO1xyXG5cdFx0JChpY29uLmxvYWRpbmcpLmluc2VydEFmdGVyKCcjdGFibGUnKTtcclxuXHRcdFxyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR1cmwgOiAkKCcjdGFibGUnKS5kYXRhKCd1cmwnKSArIHRoYXQudG9TdHJpbmcoKSxcclxuXHRcdFx0dHlwZTogJ0dFVCcsXHJcblx0XHRcdFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgc2VhcmNoVXJsID0gJC5wYXJhbShyZXN1bHQucXVlcnkpO1xyXG5cdFx0XHRcdHRoYXQuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2hVcmwpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCQoJyN0YWJsZScpLm5leHQoKS5yZW1vdmUoKTtcclxuXHRcdFx0XHQkKCcjdGFibGUnKS5zaG93KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly92dWVcclxuXHRcdFx0XHQkKCcjdnVlcycpLmZpbmQoJ2J1dHRvbltkYXRhLXZhbHVlXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5kYXRhKCd2YWx1ZScpID09IHRoYXQuZ2V0KCd2dWUnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tb3V0bGluZS1wcmltYXJ5IG0tMScpXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tcHJpbWFyeSBtLTEnKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAobGV0IHRhYmxlSGVhZGVyIG9mIHRhYmxlSGVhZGVycykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL2hpZGVcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGhpZGUgPSB0aGF0LmdldCgnaGlkZVtdJyk7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBoaWRlLmluZGV4T2YodGFibGVIZWFkZXIuaWQpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5hSGlkZVxyXG5cdFx0XHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ2J0bi1wcmltYXJ5JywgIShpbmRleCA9PSAtMSkpXHJcblx0XHRcdFx0XHRcdC50b2dnbGVDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeScsIChpbmRleCA9PSAtMSkpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5jaHhIaWRlLnByb3AoJ2NoZWNrZWQnLCAoaW5kZXggPT0gLTEpKVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL2hlYWRlcnNcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uZW1wdHkoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNGaWx0ZXJlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzU29ydGVkRGVzYyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCBzZWxlY3Qgb2YgdGFibGVIZWFkZXIuc2VsZWN0cykge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuaGFzKHNlbGVjdC5uYW1lKSkge1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC5nZXQoJ3NvcnRBc2MnKSA9PSBzZWxlY3QubmFtZSkge1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzU29ydGVkQXNjID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuZ2V0KCdzb3J0RGVzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKCh0YWJsZUhlYWRlci5pc0ZpbHRlcmVkKT9pY29uLmZ1bm5lbEZpbGw6aWNvbi5mdW5uZWwpO1x0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmlzU29ydGVkQXNjKSB7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmFwcGVuZChpY29uLmFycm93RG93bik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICh0YWJsZUhlYWRlci5pc1NvcnRlZERlc2MpIHtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGljb24uYXJyb3dVcCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly90Ym9keVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAobGV0IHZlcnNpb24gb2YgcmVzdWx0LnZlcnNpb25zKSB7XHJcblx0XHRcdFx0XHRsZXQgdHIgPSAkKCcjdGFibGUgPiB0Ym9keScpLmFwcGVuZChjcmVhdGUudHIpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZGl2ID0gdHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsICdjXycgKyB2ZXJzaW9uLmlkKVxyXG5cdFx0XHRcdFx0XHQudmFsKHZlcnNpb24uaWQpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBsaW5lQ2hlY2tlZClcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCAnY18nICsgdmVyc2lvbi5pZClcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCB0YWJsZUhlYWRlciBvZiB0YWJsZUhlYWRlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGRhdGEgPSB2ZXJzaW9uW3RhYmxlSGVhZGVyLmlkXTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5jb2wuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLnRoLnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuY29sLmF0dHIoJ2NsYXNzJykgPT0gJ3R5cGUtc3RhbmRhcmQnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoL15bLStdP1swLTldKyQvLnRlc3QoZGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3R5cGUtaW50ZWdlcic7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKC9eWy0rXT9bMC05XSpcXFxcLj9bMC05XSskLy50ZXN0KGRhdGEpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0eXBlLWZsb2F0JztcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0eXBlLXRleHQnO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAnJztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcyhkYXRhQ2xhc3MpXHJcblx0XHRcdFx0XHRcdFx0XHQudGV4dChkYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5jb2wuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLnRoLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2J0bi1zdWNjZXNzIHctMTAwJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS10b2dnbGUnLCAnbW9kYWwnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXRhcmdldCcsICcjbW9kYWwnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXVybCcsIHZlcnNpb24uZGV0YWlsVXJsKVxyXG5cdFx0XHRcdFx0XHRcdC50ZXh0KHRleHQuZGV0YWlscylcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL3BhZ2luYXRpb25cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAocmVzdWx0LnBhZ2VNYXggPiAxKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5hZGRDbGFzcygnbWItNCcpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgcGFnZU1heCA9IHJlc3VsdC5wYWdlTWF4O1xyXG5cdFx0XHRcdFx0bGV0IHBhZ2UgPSB0aGF0LmdldCgncGFnZScpIHx8IDE7XHJcblx0XHRcdFx0XHRsZXQgcGFnZU1pbiA9IE1hdGgubWF4KDEsIHBhZ2UgLSAyKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dWwgPSAkKCcjcGFnaW5hdGlvbicpLmFwcGVuZChjcmVhdGUudWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnaW5hdGlvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IDEpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBNYXRoLm1heCgxLCBwYWdlIC0gMSkpXHJcblx0XHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpXHJcblx0XHRcdFx0XHRcdFx0XHQuaHRtbCgnJmxhcXVvOycpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IGk9MDsgaTw1OyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKHBhZ2VNYXggPiBpKSB7XHJcblx0XHRcdFx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSBwYWdlTWluICsgaSk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIHBhZ2VNaW4pXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50ZXh0KHBhZ2VNaW4gKyBpKVxyXG5cdFx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gcGFnZU1heCk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIE1hdGgubWluKHBhZ2VNYXgsIHBhZ2UgKyAxKSlcclxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdC5odG1sKCcmcmFxdW87JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyQoJ3RhYmxlJykuc3RpY2t5VGFibGVIZWFkZXJzKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcdFxyXG5cdH0sXHRcclxufVxyXG5cclxuLypcclxudmFyIGRhdGFzID0ge1xyXG5cdFxyXG5cdGdldCBzZWFyY2hVcmwoKSB7XHJcblx0XHRcclxuXHRcdGxldCB1cmwgPSB7fTtcclxuXHRcdFxyXG5cdFx0aWYgKHBhcmFtc0FycmF5LmhhcygnaWRbXScpKSB7XHJcblx0XHRcdHVybC5pZCA9IHBhcmFtc0FycmF5LmdldEFsbCgnaWRbXScpO1x0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGxldCBfcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHRoaXMuX3NlYXJjaFVybCk7XHJcblx0XHRcclxuXHRcdGlmIChfcGFyYW1zQXJyYXkuaGFzKCd2dWUnKSkge1xyXG5cdFx0XHR1cmwudnVlID0gX3BhcmFtc0FycmF5LmdldCgndnVlJyk7XHJcblx0XHRcdHJldHVybiAkLnBhcmFtKHVybCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gcGFyYW1zQXJyYXkudG9TdHJpbmcoKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdHNldCBzZWFyY2hVcmwodmFsdWUpIHtcclxuXHRcdFxyXG5cdFx0aWYgKHIgPSAvXFw/KFxcUyopL2cuZXhlYyh2YWx1ZSkpIHsgLy9lbmzDqHZlIGxlID9cclxuXHRcdFx0dGhpcy5fc2VhcmNoVXJsID0gclsxXTtcclxuXHRcdH0gZWxzZSBpZiAociA9IC8oXFxTKz1cXFMrKSsvZy5leGVjKHZhbHVlKSkge1xyXG5cdFx0XHR0aGlzLl9zZWFyY2hVcmwgPSByWzFdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cGFyYW1zQXJyYXkuZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0dGhpcy5fc2VhcmNoVXJsID0gcGFyYW1zQXJyYXkudG9TdHJpbmcoKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdGZldGNoOiBmdW5jdGlvbigpIHtcclxuXHRcclxuXHRcdCQoJyN0YWJsZSA+IHRib2R5JykuZW1wdHkoKTtcclxuXHRcdCQoaWNvbi5sb2FkaW5nKS5pbnNlcnRBZnRlcignI3RhYmxlJyk7XHJcblx0XHRcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFxyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsIDogJCgnI3RhYmxlJykuZGF0YSgndXJsJykgKyAnPycgKyB0aGlzLl9zZWFyY2hVcmwsXHJcblx0XHRcdHR5cGU6ICdHRVQnLFxyXG5cdFx0XHRcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0cGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCQucGFyYW0ocmVzdWx0LnF1ZXJ5KSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0JCgnI3RhYmxlJykubmV4dCgpLnJlbW92ZSgpO1xyXG5cdFx0XHRcdCQoJyN0YWJsZScpLnNob3coKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL3Z1ZVxyXG5cdFx0XHRcdGlmIChwYXJhbXNBcnJheS5oYXMoJ3Z1ZScpKSB0aGF0LnNlYXJjaFVybCA9ICd2dWU9JyArIHBhcmFtc0FycmF5LmdldCgndnVlJyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0JCgnI3Z1ZXMnKS5maW5kKCdidXR0b25bZGF0YS12YWx1ZV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuZGF0YSgndmFsdWUnKSA9PSBwYXJhbXNBcnJheS5nZXQoJ3Z1ZScpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbS0xJylcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1wcmltYXJ5IG0tMScpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgdGFibGVIZWFkZXIgb2YgdGFibGVIZWFkZXJzKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vaGlkZVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgaGlkZSA9IHBhcmFtc0FycmF5LmdldEFsbCgnaGlkZVtdJyk7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBoaWRlLmluZGV4T2YodGFibGVIZWFkZXIuaWQpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5hSGlkZVxyXG5cdFx0XHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ2J0bi1wcmltYXJ5JywgIShpbmRleCA9PSAtMSkpXHJcblx0XHRcdFx0XHRcdC50b2dnbGVDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeScsIChpbmRleCA9PSAtMSkpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5jaHhIaWRlLnByb3AoJ2NoZWNrZWQnLCAoaW5kZXggPT0gLTEpKVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL2hlYWRlcnNcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uZW1wdHkoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNGaWx0ZXJlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzU29ydGVkRGVzYyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCBzZWxlY3Qgb2YgdGFibGVIZWFkZXIuc2VsZWN0cykge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHBhcmFtc0FycmF5LmhhcyhzZWxlY3QubmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc0ZpbHRlcmVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHBhcmFtc0FycmF5LmdldCgnc29ydEFzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAocGFyYW1zQXJyYXkuZ2V0KCdzb3J0RGVzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKCh0YWJsZUhlYWRlci5pc0ZpbHRlcmVkKT9pY29uLmZ1bm5lbEZpbGw6aWNvbi5mdW5uZWwpO1x0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmlzU29ydGVkQXNjKSB7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmFwcGVuZChpY29uLmFycm93RG93bik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICh0YWJsZUhlYWRlci5pc1NvcnRlZERlc2MpIHtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGljb24uYXJyb3dVcCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly90Ym9keVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAobGV0IHZlcnNpb24gb2YgcmVzdWx0LnZlcnNpb25zKSB7XHJcblx0XHRcdFx0XHRsZXQgdHIgPSAkKCcjdGFibGUgPiB0Ym9keScpLmFwcGVuZChjcmVhdGUudHIpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZGl2ID0gdHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsICdjXycgKyB2ZXJzaW9uLmlkKVxyXG5cdFx0XHRcdFx0XHQudmFsKHZlcnNpb24uaWQpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBsaW5lQ2hlY2tlZClcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCAnY18nICsgdmVyc2lvbi5pZClcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCB0YWJsZUhlYWRlciBvZiB0YWJsZUhlYWRlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGRhdGEgPSB2ZXJzaW9uW3RhYmxlSGVhZGVyLmlkXTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5jb2wuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLnRoLnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuY29sLmF0dHIoJ2NsYXNzJykgPT0gJ3R5cGUtc3RhbmRhcmQnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoL15bLStdP1swLTldKyQvLnRlc3QoZGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3R5cGUtaW50ZWdlcic7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKC9eWy0rXT9bMC05XSpcXFxcLj9bMC05XSskLy50ZXN0KGRhdGEpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0eXBlLWZsb2F0JztcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0eXBlLXRleHQnO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAnJztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcyhkYXRhQ2xhc3MpXHJcblx0XHRcdFx0XHRcdFx0XHQudGV4dChkYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5jb2wuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLnRoLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2J0bi1zdWNjZXNzIHctMTAwJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS10b2dnbGUnLCAnbW9kYWwnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXRhcmdldCcsICcjbW9kYWwnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXVybCcsIHZlcnNpb24uZGV0YWlsVXJsKVxyXG5cdFx0XHRcdFx0XHRcdC50ZXh0KHRleHQuZGV0YWlscylcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL3BhZ2luYXRpb25cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAocmVzdWx0LnBhZ2VNYXggPiAxKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5hZGRDbGFzcygnbWItNCcpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgcGFnZU1heCA9IHJlc3VsdC5wYWdlTWF4O1xyXG5cdFx0XHRcdFx0bGV0IHBhZ2UgPSBwYXJhbXNBcnJheS5nZXQoJ3BhZ2UnKSB8fCAxO1xyXG5cdFx0XHRcdFx0bGV0IHBhZ2VNaW4gPSBNYXRoLm1heCgxLCBwYWdlIC0gMik7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHVsID0gJCgnI3BhZ2luYXRpb24nKS5hcHBlbmQoY3JlYXRlLnVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2luYXRpb24ganVzdGlmeS1jb250ZW50LWNlbnRlcicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSAxKT8nIGRpc2FibGVkJzonJykpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgTWF0aC5tYXgoMSwgcGFnZSAtIDEpKVxyXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0Lmh0bWwoJyZsYXF1bzsnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpPTA7IGk8NTsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdGlmIChwYWdlTWF4ID4gaSkge1xyXG5cdFx0XHRcdFx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gcGFnZU1pbiArIGkpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBwYWdlTWluKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudGV4dChwYWdlTWluICsgaSlcclxuXHRcdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IHBhZ2VNYXgpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBNYXRoLm1pbihwYWdlTWF4LCBwYWdlICsgMSkpXHJcblx0XHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpXHJcblx0XHRcdFx0XHRcdFx0XHQuaHRtbCgnJnJhcXVvOycpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8kKCd0YWJsZScpLnN0aWNreVRhYmxlSGVhZGVycygpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHRcclxuXHR9XHJcblxyXG59O1xyXG4qL1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vIHRhYmxlSGVhZGVyXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYWJsZUhlYWRlcih0aGF0KSB7XHJcblx0XHJcblx0dmFyIHRhYmxlSGVhZGVyID0ge1xyXG5cdFx0Y29sOiAkKHRoYXQpLmNsb3Nlc3QoJ3RhYmxlJykuZmluZCgnY29sJykuZXEoJCh0aGF0KS5pbmRleCgpKSxcclxuXHRcdHRoOiAkKHRoYXQpLFxyXG5cdFx0aWQ6ICQodGhhdCkuYXR0cignaWQnKSxcclxuXHRcdHRpdGxlOiAkKHRoYXQpLmRhdGEoJ3RpdGxlJyksXHJcblx0XHRzb3J0OiAkKHRoYXQpLmRhdGEoJ3NvcnQnKSxcclxuXHRcdGlzRmlsdGVyZWQ6IGZhbHNlLFxyXG5cdFx0aXNTb3J0ZWRBc2M6IGZhbHNlLFxyXG5cdFx0aXNTb3J0ZWREZXNjOiBmYWxzZSxcclxuXHRcdHNlbGVjdHM6IFtdLFxyXG5cdH1cclxuXHRcclxuXHQkKHRoYXQpLmZpbmQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdHZhciBtdWx0aXBsZUF0dHIgPSAodHlwZW9mICQodGhpcykuYXR0cignbXVsdGlwbGUnKSAhPT0gdHlwZW9mIHVuZGVmaW5lZCAmJiAkKHRoaXMpLmF0dHIoJ211bHRpcGxlJykgIT09IGZhbHNlKTtcclxuXHRcdHZhciBuYW1lID0gJCh0aGlzKS5wcm9wKCduYW1lJykgKyAoKG11bHRpcGxlQXR0cik/J1tdJzonJyk7XHJcblx0XHRcclxuXHRcdHZhciBzZWxlY3QgPSB7XHJcblx0XHRcdFx0c2x0OiAkKHRoaXMpLFxyXG5cdFx0XHRcdGlkOiAkKHRoaXMpLnByb3AoJ2lkJyksXHJcblx0XHRcdFx0bmFtZTogbmFtZSxcclxuXHRcdFx0XHRtdWx0aXBsZTogbXVsdGlwbGVBdHRyLFxyXG5cdFx0XHRcdHRpdGxlOiAkKHRoaXMpLmRhdGEoJ3RpdGxlJyksXHJcblx0XHRcdFx0b3B0aW9uczogW10sXHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQkKHRoaXMpLmZpbmQoJ29wdGlvbicpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHNlbGVjdC5vcHRpb25zLnB1c2goe1xyXG5cdFx0XHRcdHZhbHVlOiAkKHRoaXMpLmF0dHIoJ3ZhbHVlJyksXHJcblx0XHRcdFx0dGV4dDogJCh0aGlzKS50ZXh0KCksXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLnNlbGVjdHMucHVzaChzZWxlY3QpO1xyXG5cdFx0XHJcblx0fSk7XHJcblx0XHJcblx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoKSB7XHJcblx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwID0gdGFibGVIZWFkZXIudGguYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuLWdyb3VwIHctMTAwJylcclxuXHRcdFx0LmF0dHIoJ3JvbGUnLCAnZ3JvdXAnKVxyXG5cdFx0XHQub24oJ2hpZGUuYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKGUuY2xpY2tFdmVudCAmJiAkLmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldC5wYXJlbnROb2RlLCBlLmNsaWNrRXZlbnQudGFyZ2V0KSkge1xyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duTWVudS5lbXB0eSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cC5hcHBlbmQoY3JlYXRlLm1lbnVCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygndy0xMDAnKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSlcclxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzICYmIHRhYmxlSGVhZGVyLnNvcnQpIHtcclxuXHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gdGFibGVIZWFkZXIuc2VsZWN0c1swXS5uYW1lKSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydERlc2MnLCB0YWJsZUhlYWRlci5zZWxlY3RzWzBdLm5hbWUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydEFzYycsIHRhYmxlSGVhZGVyLnNlbGVjdHNbMF0ubmFtZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHJcblx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93biA9IHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3B4LTAnKVxyXG5cdFx0XHQuY3NzKCd3aWR0aCcsICczZW0nKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHQuYXR0cignaWQnLCAnYl8nICsgdGFibGVIZWFkZXIuaWQpXHJcblx0XHRcdC5hdHRyKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpXHJcblx0XHRcdC5hdHRyKCdhcmlhLWhhc3BvcHVwJywgdHJ1ZSlcclxuXHRcdFx0LmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcclxuXHRcdDtcclxuXHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duTWVudSA9IHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnZHJvcGRvd24tbWVudScpXHJcblx0XHRcdC5hdHRyKCdhcmlhLWxhYmVsbGVkYnknLCAnYl8nICsgdGFibGVIZWFkZXIuaWQpXHJcblx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2QtZmxleCBmbGV4LXJvdycpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBjcmVhdGVNZW51KTtcclxuXHRcclxuXHR9IGVsc2Uge1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93biA9IHRhYmxlSGVhZGVyLnRoLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCd3LTEwMCcpXHJcblx0XHRcdC50ZXh0KHRhYmxlSGVhZGVyLnRpdGxlKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpXHJcblx0XHQ7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duTWVudS5lbXB0eSgpO1xyXG5cdFx0XHJcblx0XHRmb3IgKGxldCBzZWxlY3Qgb2YgdGFibGVIZWFkZXIuc2VsZWN0cykge1xyXG5cdFx0XHRcclxuXHRcdFx0c2VsZWN0LmRpdkNvbnRlbnQgPSB0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdteC0xJylcclxuXHRcdFx0XHQuY3NzKCdtaW4td2lkdGgnLCAnMTVlbScpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChzZWxlY3QubXVsdGlwbGUpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0XHRzZWxlY3QuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHBiLTIgcHgtMScpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoc2VsZWN0LnRpdGxlKTtcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdkZpbHRlciA9IHNlbGVjdC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBwLTEnKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRcdFx0c2VsZWN0LmJ0blNvcnREZXNjID0gc2VsZWN0LmRpdkZpbHRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGljb24uYXJyb3dVcClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IHNlbGVjdC5uYW1lKT8ncHgtMiBidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J3B4LTIgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgc29ydERlc2MpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZGaWx0ZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC50ZXh0KHRleHQuZmlsdGVyKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdweC0zIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHRcdC5vbignY2xpY2snLCBmaWx0ZXIpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdFx0XHRzZWxlY3QuYnRuU29ydEFzYyA9IHNlbGVjdC5kaXZGaWx0ZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChpY29uLmFycm93RG93bilcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWUpPydweC0yIGJ0bi1vdXRsaW5lLXByaW1hcnkgYmctZGFyayB0ZXh0LXdoaXRlJzoncHgtMiBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBzb3J0QXNjKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2U2VhcmNoID0gc2VsZWN0LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtY2VudGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLWRhcmsgcC0yJylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdlNlYXJjaC5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgc2VhcmNoVmFsdWUgPSAkKHRoaXMpLnZhbCgpLnRvTG93ZXJDYXNlKClcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChzZWFyY2hWYWx1ZSA9PSAnJykge1xyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmRpdi5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbi50ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hWYWx1ZSkgPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmRpdi5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5jaHgucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHNlbGVjdC5kaXZMaXN0ID0gc2VsZWN0LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdweC0yIG92ZXJmbG93LWF1dG8gJyArICgoc2VsZWN0Lm11bHRpcGxlKT8ncHQtMyc6J3B0LTEnKSlcclxuXHRcdFx0XHQuY3NzKCdtYXgtaGVpZ2h0JywgJzIwZW0nKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoc2VsZWN0Lm11bHRpcGxlKSB7XHJcblx0XHRcdFx0c2VsZWN0LmRpdlNlbGVjdEFsbCA9IHNlbGVjdC5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsID0gc2VsZWN0LmRpdlNlbGVjdEFsbC5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnX3NlbGVjdEFsbCcpXHJcblx0XHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dmFyIGNoZWNrZWQgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcdFxyXG5cdFx0XHRcdFx0XHRcdG9wdGlvbi5jaHgucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdlNlbGVjdEFsbC5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIHNlbGVjdC5uYW1lICsgJ19zZWxlY3RBbGwnKVxyXG5cdFx0XHRcdFx0LnRleHQodGV4dC5zZWxlY3RBbGwpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvcHRpb24uZGl2ID0gc2VsZWN0LmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdDtcclxuXHJcblx0XHRcdFx0XHRvcHRpb24uY2h4ID0gb3B0aW9uLmRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCB1cmxTZWFyY2guZ2V0KHNlbGVjdC5uYW1lKS5pbmNsdWRlcyhvcHRpb24udmFsdWUpKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0bGV0IGNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRsZXQgdW5jaGVja2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoJChvcHRpb24uY2h4KS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmIChjaGVja2VkICYmIHVuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LmNoeFNlbGVjdEFsbC5wcm9wKCdpbmRldGVybWluYXRlJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5jaHhTZWxlY3RBbGwucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5jaHhTZWxlY3RBbGwucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0b3B0aW9uLmxibCA9IG9wdGlvbi5kaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIHNlbGVjdC5uYW1lICsgJ18nICsgb3B0aW9uLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHQudGV4dChvcHRpb24udGV4dClcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdlVua25vd24gPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmNoeFVua25vd24gPSBzZWxlY3QuZGl2VW5rbm93bi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnX25vdEFwcGxpY2FibGUnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCAhdXJsU2VhcmNoLmhhcyhzZWxlY3QubmFtZSkpXHJcblx0XHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dmFyIGNoZWNrZWQgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcdFxyXG5cdFx0XHRcdFx0XHRcdG9wdGlvbi5jaHgucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZVbmtub3duLmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnX25vdEFwcGxpY2FibGUnKVxyXG5cdFx0XHRcdFx0LnRleHQodGV4dC5ub3RBcHBsaWNhYmxlKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0b3B0aW9uLmRpdiA9IHNlbGVjdC5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5jaHggPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ18nICsgb3B0aW9uLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsIHVybFNlYXJjaC5nZXQoc2VsZWN0Lm5hbWUpLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3QuZGl2TGlzdC5maW5kKCdpbnB1dCcpLm5vdCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmICghc2VsZWN0LmNoeFVua25vd24uaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9uLmNoeC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5hcHBlbmQoc2VsZWN0Lm5hbWUsIG9wdGlvbi52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uZHJvcGRvd24oJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0b3B0aW9uLmxibCA9IG9wdGlvbi5kaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIHNlbGVjdC5uYW1lICsgJ18nICsgb3B0aW9uLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHQudGV4dChvcHRpb24udGV4dClcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFxyXG5cdFx0XHRmdW5jdGlvbiBzb3J0QXNjKCkge1xyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdFx0aWYgKHVybFNlYXJjaC5nZXQoJ3NvcnRBc2MnKSA9PSBzZWxlY3QubmFtZSkge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydEFzYycpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0QXNjJywgc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRmaWx0ZXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRmdW5jdGlvbiBmaWx0ZXIoKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZShzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0aWYgKCFzZWxlY3QuY2h4U2VsZWN0QWxsLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRpZiAob3B0aW9uLmNoeC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5hcHBlbmQoc2VsZWN0Lm5hbWUsIG9wdGlvbi52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uZHJvcGRvd24oJ2hpZGUnKTtcclxuXHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRmdW5jdGlvbiBzb3J0RGVzYygpIHtcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0aWYgKHVybFNlYXJjaC5nZXQoJ3NvcnREZXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnREZXNjJywgc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdH1cdFxyXG5cdFx0XHRcdGZpbHRlcigpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0cmV0dXJuIHRhYmxlSGVhZGVyO1xyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vLyBmaWxsRGlzcGxheVxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gZmlsbERpc3BsYXkoKSB7XHJcblx0dmFyIGNvbCA9ICQoJyNkaXNwbGF5JykuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHQuYWRkQ2xhc3MoJ3JvdyBweS0yJylcclxuXHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdjb2wnKVxyXG5cdDtcclxuXHRcclxuXHRmb3IgKGxldCB0YWJsZUhlYWRlciBvZiB0YWJsZUhlYWRlcnMpIHtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuYUhpZGUgPSBjb2wuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnkgY29sLTIgbS0xIHRleHQtbGVmdCcpXHJcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5jaHhIaWRlLnByb3AoJ2NoZWNrZWQnLCAhdGFibGVIZWFkZXIuY2h4SGlkZS5pcygnOmNoZWNrZWQnKSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IGhpZGUgPSB1cmxTZWFyY2guZ2V0KCdoaWRlW10nKTtcclxuXHRcdFx0XHRsZXQgaW5kZXggPSBoaWRlLmluZGV4T2YodGFibGVIZWFkZXIuaWQpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0YWJsZUhlYWRlci5jaHhIaWRlLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPiAtMSkge1xyXG5cdFx0XHRcdFx0XHRoaWRlLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA9PSAtMSAmJiB0YWJsZUhlYWRlci5pZCkge1xyXG5cdFx0XHRcdFx0XHRoaWRlLnB1c2godGFibGVIZWFkZXIuaWQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdoaWRlW10nKTtcclxuXHRcdFx0XHRoaWRlLmZvckVhY2goZSA9PiB1cmxTZWFyY2guYXBwZW5kKCdoaWRlW10nLCBlKSk7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRsZXQgZGl2ID0gdGFibGVIZWFkZXIuYUhpZGUuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5jaHhIaWRlID0gZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hdHRyKCdpZCcsICdoXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0Lm9uKCdjaGFuZ2UgY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXR0cignZm9yJywgJ2hfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG59XHRcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGxpbmVDaGVja2VkXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBsaW5lQ2hlY2tlZCgpIHtcclxuXHRcclxuXHR2YXIgY2hlY2tlZCA9IGZhbHNlO1xyXG5cdHZhciB1bmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0JCgndGJvZHknKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHRpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHVuY2hlY2tlZCA9IHRydWU7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmIChjaGVja2VkICYmIHVuY2hlY2tlZCkge1xyXG5cdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0dXJsU2VhcmNoLmRlbGV0ZSgnaWRbXScpO1xyXG5cdGlmIChjaGVja2VkKSB7XHJcblx0XHQkKCd0YWJsZScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICgkKHRoaXMpLnByb3AoJ2lkJykgIT0gJ2NoZWNrX2FsbCcgJiYgJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdHVybFNlYXJjaC5hcHBlbmQoJ2lkW10nLCAkKHRoaXMpLnZhbCgpKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoJyNkb2N1bWVudF9lZGl0Jykuc2hvdygpO1xyXG5cdFx0JCgnI2RvY3VtZW50X21vdmUnKS5zaG93KCk7XHJcblx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuc2hvdygpO1xyXG5cdFx0JCgnI3ZlcnNpb25fbWVudScpLnNob3coKTtcdFxyXG5cdH0gZWxzZSBpZih1bmNoZWNrZWQpIHtcclxuXHRcdCQoJyN2ZXJzaW9uJykudmFsKCcnKTtcclxuXHRcdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdFx0JCgnI2RvY3VtZW50X21vdmUnKS5oaWRlKCk7XHJcblx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdFx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcdFxyXG5cdH1cclxufVxyXG5cclxudmFyIHVybFNlYXJjaCA9IG5ldyBVcmxTZWFyY2goKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdCQoJyNmb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0O1xyXG5cdFx0JChldmVudC50YXJnZXQpLmZpbmQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICgkKHRoaXMpLnZhbCgpLnRvU3RyaW5nKCkgID09ICcnKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5hdHRyKCdkaXNhYmxlZCcsICdkaXNhYmxlZCcpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI2RvY3VtZW50X2VkaXQnKS5oaWRlKCk7XHJcblx0JCgnI2RvY3VtZW50X21vdmUnKS5oaWRlKCk7XHJcblx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLmhpZGUoKTtcclxuXHQkKCcjdmVyc2lvbl9tZW51JykuaGlkZSgpO1xyXG5cdFxyXG5cdCQoJyNtb2RhbCcpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0YWpheC5zZXQoJy5tb2RhbC1ib2R5JywgJChlLnJlbGF0ZWRUYXJnZXQpLmRhdGEoJ3VybCcpKTtcclxuXHR9KTtcclxuXHJcblx0XHJcblx0JCgnI2RvY3VtZW50X2VkaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgdXJsU2VhcmNoLnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfZGVsZXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdmVyc2lvbl9uZXcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgdXJsU2VhcmNoLnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2ZXJzaW9uX2VkaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgdXJsU2VhcmNoLnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2ZXJzaW9uX2RlbGV0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0LypcclxuXHQkKCcjdGFicyBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdCQoJyN0YWJzJykuY3NzKCdoZWlnaHQnLCAnM2VtJyk7XHJcblx0XHRcdFxyXG5cdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0JCh0aGlzKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKHRoaXMpO1xyXG5cdFx0XHQkKCcjJyArICQodGhpcykuYXR0cignYXJpYS1jb250cm9scycpKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKCQoJyMnICsgJCh0aGlzKS5hdHRyKCdhcmlhLWNvbnRyb2xzJykpWzBdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJyN0YWJzJykuY3NzKCdoZWlnaHQnLCAnMTBlbScpO1xyXG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0JCh0aGlzKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSk7XHJcblx0XHRcdCQoJyMnICsgJCh0aGlzKS5hdHRyKCdhcmlhLWNvbnRyb2xzJykpLmF0dHIoJ2NsYXNzJywgJ3RhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmUnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0pO1xyXG5cdCovXHJcblx0XHJcblx0JCgnI2NoZWNrX2FsbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgndGJvZHknKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCAkKCcjY2hlY2tfYWxsJykuaXMoJzpjaGVja2VkJykpO1xyXG5cdFx0fSk7XHJcblx0XHRsaW5lQ2hlY2tlZCgpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJ3RhYmxlJykuZmluZCgndGhbaWRdW2RhdGEtdGl0bGVdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdHRhYmxlSGVhZGVycy5wdXNoKGNyZWF0ZVRhYmxlSGVhZGVyKHRoaXMpKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdnVlcycpLmZpbmQoJ2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCQodGhpcykuYXR0cignaWQnKSA9PSAndnVlX25ldycpIHtcclxuXHRcdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9TdHJpbmcoKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR1cmxTZWFyY2guc2V0KCd2dWUnLCAkKHRoaXMpLmRhdGEoJ3ZhbHVlJykpO1xyXG5cdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRmaWxsRGlzcGxheSgpO1xyXG5cdHVybFNlYXJjaC5zZXRGcm9tVXJsKHdpbmRvdy5sb2NhdGlvbik7XHJcblx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=