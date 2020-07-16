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
  $('#tabs').on('show.bs.tab', function () {
    $('.collapse').collapse('show');
    $('#table_container').css('margin-top', '10em');
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
  });
  $('#tabs').on('hidden.bs.collapse', function (e) {
    $('#table_container').css('margin-top', '4em');
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

},[["./assets/js/document.js","runtime","vendors~app~automation~dashboard~document~form~login","vendors~app~document~form","vendors~app~document","vendors~document~form","vendors~document","app~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwidGFibGVIZWFkZXJzIiwiVXJsU2VhcmNoIiwiX3BhcmFtc0FycmF5IiwicHJvdG90eXBlIiwiaGFzIiwia2V5IiwiZ2V0IiwiZXhlYyIsImdldEFsbCIsInNldCIsInZhbHVlIiwiYXBwZW5kIiwic2V0RnJvbVVybCIsInBhcmFtc0FycmF5IiwidG9TdHJpbmciLCJ1cmxTZWFyY2giLCJmZXRjaCIsImVtcHR5IiwiaWNvbiIsImxvYWRpbmciLCJpbnNlcnRBZnRlciIsInRoYXQiLCJhamF4IiwidXJsIiwiZGF0YSIsInR5cGUiLCJzdWNjZXNzIiwicmVzdWx0Iiwic2VhcmNoVXJsIiwicGFyYW0iLCJxdWVyeSIsIm5leHQiLCJyZW1vdmUiLCJzaG93IiwiZmluZCIsImVhY2giLCJhdHRyIiwidGFibGVIZWFkZXIiLCJoaWRlIiwiaW5kZXgiLCJpbmRleE9mIiwiaWQiLCJhSGlkZSIsInRvZ2dsZUNsYXNzIiwiY2h4SGlkZSIsInByb3AiLCJidG5Ecm9wZG93biIsImlzRmlsdGVyZWQiLCJpc1NvcnRlZEFzYyIsImlzU29ydGVkRGVzYyIsInNlbGVjdHMiLCJzZWxlY3QiLCJuYW1lIiwiZnVubmVsRmlsbCIsImZ1bm5lbCIsImFycm93RG93biIsImFycm93VXAiLCJ2ZXJzaW9ucyIsInZlcnNpb24iLCJ0ciIsImNyZWF0ZSIsImNoaWxkcmVuIiwibGFzdCIsImRpdiIsInRkIiwiYWRkQ2xhc3MiLCJjaGVja2JveCIsInZhbCIsIm9uIiwibGluZUNoZWNrZWQiLCJsYWJlbCIsInVuZGVmaW5lZCIsImNvbCIsInRoIiwidGVzdCIsImRhdGFDbGFzcyIsInRleHQiLCJzbWFsbEJ1dHRvbiIsImRldGFpbFVybCIsImRldGFpbHMiLCJwYWdlTWF4IiwicGFnZSIsInBhZ2VNaW4iLCJNYXRoIiwibWF4IiwidWwiLCJsaSIsImEiLCJzcGFuIiwiaHRtbCIsImkiLCJtaW4iLCJjcmVhdGVUYWJsZUhlYWRlciIsImNsb3Nlc3QiLCJlcSIsInRpdGxlIiwic29ydCIsIm11bHRpcGxlQXR0ciIsInNsdCIsIm11bHRpcGxlIiwib3B0aW9ucyIsInB1c2giLCJsZW5ndGgiLCJkaXZEcm9wZG93bkdyb3VwIiwiZSIsImNsaWNrRXZlbnQiLCJjb250YWlucyIsInJlbGF0ZWRUYXJnZXQiLCJwYXJlbnROb2RlIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJkaXZEcm9wZG93bk1lbnUiLCJtZW51QnV0dG9uIiwiY3NzIiwiY3JlYXRlTWVudSIsImRpdkNvbnRlbnQiLCJkaXZGaWx0ZXIiLCJidG5Tb3J0RGVzYyIsInNvcnREZXNjIiwiZmlsdGVyIiwiYnRuU29ydEFzYyIsInNvcnRBc2MiLCJkaXZTZWFyY2giLCJpbnB1dCIsInNlYXJjaFZhbHVlIiwidG9Mb3dlckNhc2UiLCJkaXZTZWxlY3RBbGwiLCJvcHRpb24iLCJjaHgiLCJkaXZMaXN0IiwiY2h4U2VsZWN0QWxsIiwiY2hlY2tlZCIsImlzIiwic2VsZWN0QWxsIiwiaW5jbHVkZXMiLCJ1bmNoZWNrZWQiLCJsYmwiLCJkaXZVbmtub3duIiwiY2h4VW5rbm93biIsImRyb3Bkb3duIiwibm90QXBwbGljYWJsZSIsIm5vdCIsImZpbGxEaXNwbGF5Iiwic3BsaWNlIiwiZm9yRWFjaCIsImRvY3VtZW50IiwicmVhZHkiLCJldmVudCIsImxvY2F0aW9uIiwiYXNzaWduIiwiY29sbGFwc2UiLCJoYXNDbGFzcyIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInJlbW92ZUNsYXNzIiwiYmx1ciIsInBhcmVudCIsIndpbmRvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FD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anMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJyZXF1aXJlKCcuLi9qcy9hcHAuanMnKTtcclxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5jb25zdCBwb3BwZXIgPSByZXF1aXJlKCdwb3BwZXIuanMnKTtcclxucmVxdWlyZSgnc3RpY2t5LXRhYmxlLWhlYWRlcnMnKTtcclxucmVxdWlyZSgnLi4vY3NzL2RvY3VtZW50LnNjc3MnKTtcclxuY29uc3QgVVJMU2VhcmNoUGFyYW1zID0gcmVxdWlyZSgnQHVuZ2FwL3VybC1zZWFyY2gtcGFyYW1zL2NqcycpO1xyXG5cclxuXHJcblxyXG52YXIgdGFibGVIZWFkZXJzID0gW107XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vL1VybFNlYXJjaFxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gVXJsU2VhcmNoICgpIHtcclxuXHR0aGlzLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxufVxyXG5cclxuVXJsU2VhcmNoLnByb3RvdHlwZSA9IHtcclxuXHJcblx0aGFzOiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdHJldHVybiB0aGlzLl9wYXJhbXNBcnJheS5oYXMoa2V5KTtcclxuXHR9LFxyXG5cdFxyXG5cdGdldDogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRpZiAoL1xcUytcXFtcXF0vZy5leGVjKGtleSkpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmdldEFsbChrZXkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmdldChrZXkpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0c2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRpZiAoa2V5ID09ICd2dWUnKSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7J3Z1ZSc6IHZhbHVlfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheS5zZXQoa2V5LCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRhcHBlbmQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHRcdGlmIChrZXkgPT0gJ3Z1ZScpIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsndnVlJzogdmFsdWV9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5LmFwcGVuZChrZXksIHZhbHVlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdGRlbGV0ZTogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHR0aGlzLl9wYXJhbXNBcnJheS5kZWxldGUoa2V5KTtcclxuXHR9LFxyXG5cdFxyXG5cdHNldEZyb21Vcmw6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRsZXQgcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHZhbHVlKTtcclxuXHRcdGlmIChwYXJhbXNBcnJheS5oYXMoJ3Z1ZScpKSB7XHJcblx0XHRcdHRoaXMuc2V0KCd2dWUnLCBwYXJhbXNBcnJheS5nZXQoJ3Z1ZScpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5ID0gcGFyYW1zQXJyYXk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHR0b1N0cmluZzogZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdXJsU2VhcmNoID0gdGhpcy5fcGFyYW1zQXJyYXkudG9TdHJpbmcoKTtcclxuXHRcdHJldHVybiAodXJsU2VhcmNoKT8nPycgKyB1cmxTZWFyY2g6Jyc7XHJcblx0fSxcclxuXHRcclxuXHRmZXRjaDogZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdCQoJyN0YWJsZSA+IHRib2R5JykuZW1wdHkoKTtcclxuXHRcdCQoaWNvbi5sb2FkaW5nKS5pbnNlcnRBZnRlcignI3RhYmxlJyk7XHJcblx0XHRcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFxyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsIDogJCgnI3RhYmxlJykuZGF0YSgndXJsJykgKyB0aGF0LnRvU3RyaW5nKCksXHJcblx0XHRcdHR5cGU6ICdHRVQnLFxyXG5cdFx0XHRcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IHNlYXJjaFVybCA9ICQucGFyYW0ocmVzdWx0LnF1ZXJ5KTtcclxuXHRcdFx0XHR0aGF0Ll9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoVXJsKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKCcjdGFibGUnKS5uZXh0KCkucmVtb3ZlKCk7XHJcblx0XHRcdFx0JCgnI3RhYmxlJykuc2hvdygpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vdnVlXHJcblx0XHRcdFx0JCgnI3Z1ZXMnKS5maW5kKCdidXR0b25bZGF0YS12YWx1ZV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuZGF0YSgndmFsdWUnKSA9PSB0aGF0LmdldCgndnVlJykpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtLTEnKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLXByaW1hcnkgbS0xJylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IgKGxldCB0YWJsZUhlYWRlciBvZiB0YWJsZUhlYWRlcnMpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly9oaWRlXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBoaWRlID0gdGhhdC5nZXQoJ2hpZGVbXScpO1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gaGlkZS5pbmRleE9mKHRhYmxlSGVhZGVyLmlkKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuYUhpZGVcclxuXHRcdFx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdidG4tcHJpbWFyeScsICEoaW5kZXggPT0gLTEpKVxyXG5cdFx0XHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknLCAoaW5kZXggPT0gLTEpKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuY2h4SGlkZS5wcm9wKCdjaGVja2VkJywgKGluZGV4ID09IC0xKSlcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly9oZWFkZXJzXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmVtcHR5KCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzU29ydGVkQXNjID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZERlc2MgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgc2VsZWN0IG9mIHRhYmxlSGVhZGVyLnNlbGVjdHMpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmICh0aGF0LmhhcyhzZWxlY3QubmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc0ZpbHRlcmVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZEFzYyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmICh0aGF0LmdldCgnc29ydERlc2MnKSA9PSBzZWxlY3QubmFtZSkge1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzU29ydGVkRGVzYyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmFwcGVuZCgodGFibGVIZWFkZXIuaXNGaWx0ZXJlZCk/aWNvbi5mdW5uZWxGaWxsOmljb24uZnVubmVsKTtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICh0YWJsZUhlYWRlci5pc1NvcnRlZEFzYykge1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoaWNvbi5hcnJvd0Rvd24pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjKSB7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmFwcGVuZChpY29uLmFycm93VXApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vdGJvZHlcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IgKGxldCB2ZXJzaW9uIG9mIHJlc3VsdC52ZXJzaW9ucykge1xyXG5cdFx0XHRcdFx0bGV0IHRyID0gJCgnI3RhYmxlID4gdGJvZHknKS5hcHBlbmQoY3JlYXRlLnRyKS5jaGlsZHJlbigpLmxhc3QoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGRpdiA9IHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCAnY18nICsgdmVyc2lvbi5pZClcclxuXHRcdFx0XHRcdFx0LnZhbCh2ZXJzaW9uLmlkKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgbGluZUNoZWNrZWQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgJ2NfJyArIHZlcnNpb24uaWQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgdGFibGVIZWFkZXIgb2YgdGFibGVIZWFkZXJzKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRkYXRhID0gdmVyc2lvblt0YWJsZUhlYWRlci5pZF07XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuY29sLnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci50aC5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmNvbC5hdHRyKCdjbGFzcycpID09ICd0eXBlLXN0YW5kYXJkJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKC9eWy0rXT9bMC05XSskLy50ZXN0KGRhdGEpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0eXBlLWludGVnZXInO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICgvXlstK10/WzAtOV0qXFxcXC4/WzAtOV0rJC8udGVzdChkYXRhKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndHlwZS1mbG9hdCc7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndHlwZS10ZXh0JztcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJyc7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoZGF0YUNsYXNzKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQoZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuY29sLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci50aC5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdidG4tc3VjY2VzcyB3LTEwMCcpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ21vZGFsJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS10YXJnZXQnLCAnI21vZGFsJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS11cmwnLCB2ZXJzaW9uLmRldGFpbFVybClcclxuXHRcdFx0XHRcdFx0XHQudGV4dCh0ZXh0LmRldGFpbHMpXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9wYWdpbmF0aW9uXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHJlc3VsdC5wYWdlTWF4ID4gMSkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuYWRkQ2xhc3MoJ21iLTQnKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IHBhZ2VNYXggPSByZXN1bHQucGFnZU1heDtcclxuXHRcdFx0XHRcdGxldCBwYWdlID0gdGhhdC5nZXQoJ3BhZ2UnKSB8fCAxO1xyXG5cdFx0XHRcdFx0bGV0IHBhZ2VNaW4gPSBNYXRoLm1heCgxLCBwYWdlIC0gMik7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHVsID0gJCgnI3BhZ2luYXRpb24nKS5hcHBlbmQoY3JlYXRlLnVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2luYXRpb24ganVzdGlmeS1jb250ZW50LWNlbnRlcicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSAxKT8nIGRpc2FibGVkJzonJykpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgTWF0aC5tYXgoMSwgcGFnZSAtIDEpKVxyXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0Lmh0bWwoJyZsYXF1bzsnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpPTA7IGk8NTsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdGlmIChwYWdlTWF4ID4gaSkge1xyXG5cdFx0XHRcdFx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gcGFnZU1pbiArIGkpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBwYWdlTWluKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudGV4dChwYWdlTWluICsgaSlcclxuXHRcdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IHBhZ2VNYXgpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBNYXRoLm1pbihwYWdlTWF4LCBwYWdlICsgMSkpXHJcblx0XHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpXHJcblx0XHRcdFx0XHRcdFx0XHQuaHRtbCgnJnJhcXVvOycpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8kKCd0YWJsZScpLnN0aWNreVRhYmxlSGVhZGVycygpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHRcclxuXHR9LFx0XHJcbn1cclxuXHJcbi8qXHJcbnZhciBkYXRhcyA9IHtcclxuXHRcclxuXHRnZXQgc2VhcmNoVXJsKCkge1xyXG5cdFx0XHJcblx0XHRsZXQgdXJsID0ge307XHJcblx0XHRcclxuXHRcdGlmIChwYXJhbXNBcnJheS5oYXMoJ2lkW10nKSkge1xyXG5cdFx0XHR1cmwuaWQgPSBwYXJhbXNBcnJheS5nZXRBbGwoJ2lkW10nKTtcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRsZXQgX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh0aGlzLl9zZWFyY2hVcmwpO1xyXG5cdFx0XHJcblx0XHRpZiAoX3BhcmFtc0FycmF5LmhhcygndnVlJykpIHtcclxuXHRcdFx0dXJsLnZ1ZSA9IF9wYXJhbXNBcnJheS5nZXQoJ3Z1ZScpO1xyXG5cdFx0XHRyZXR1cm4gJC5wYXJhbSh1cmwpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHBhcmFtc0FycmF5LnRvU3RyaW5nKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRzZXQgc2VhcmNoVXJsKHZhbHVlKSB7XHJcblx0XHRcclxuXHRcdGlmIChyID0gL1xcPyhcXFMqKS9nLmV4ZWModmFsdWUpKSB7IC8vZW5sw6h2ZSBsZSA/XHJcblx0XHRcdHRoaXMuX3NlYXJjaFVybCA9IHJbMV07XHJcblx0XHR9IGVsc2UgaWYgKHIgPSAvKFxcUys9XFxTKykrL2cuZXhlYyh2YWx1ZSkpIHtcclxuXHRcdFx0dGhpcy5fc2VhcmNoVXJsID0gclsxXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHBhcmFtc0FycmF5LmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdHRoaXMuX3NlYXJjaFVybCA9IHBhcmFtc0FycmF5LnRvU3RyaW5nKCk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRmZXRjaDogZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0XHQkKCcjdGFibGUgPiB0Ym9keScpLmVtcHR5KCk7XHJcblx0XHQkKGljb24ubG9hZGluZykuaW5zZXJ0QWZ0ZXIoJyN0YWJsZScpO1xyXG5cdFx0XHJcblx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybCA6ICQoJyN0YWJsZScpLmRhdGEoJ3VybCcpICsgJz8nICsgdGhpcy5fc2VhcmNoVXJsLFxyXG5cdFx0XHR0eXBlOiAnR0VUJyxcclxuXHRcdFx0XHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHBhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygkLnBhcmFtKHJlc3VsdC5xdWVyeSkpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCQoJyN0YWJsZScpLm5leHQoKS5yZW1vdmUoKTtcclxuXHRcdFx0XHQkKCcjdGFibGUnKS5zaG93KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly92dWVcclxuXHRcdFx0XHRpZiAocGFyYW1zQXJyYXkuaGFzKCd2dWUnKSkgdGhhdC5zZWFyY2hVcmwgPSAndnVlPScgKyBwYXJhbXNBcnJheS5nZXQoJ3Z1ZScpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCQoJyN2dWVzJykuZmluZCgnYnV0dG9uW2RhdGEtdmFsdWVdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmRhdGEoJ3ZhbHVlJykgPT0gcGFyYW1zQXJyYXkuZ2V0KCd2dWUnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tb3V0bGluZS1wcmltYXJ5IG0tMScpXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tcHJpbWFyeSBtLTEnKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAobGV0IHRhYmxlSGVhZGVyIG9mIHRhYmxlSGVhZGVycykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL2hpZGVcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGhpZGUgPSBwYXJhbXNBcnJheS5nZXRBbGwoJ2hpZGVbXScpO1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gaGlkZS5pbmRleE9mKHRhYmxlSGVhZGVyLmlkKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuYUhpZGVcclxuXHRcdFx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdidG4tcHJpbWFyeScsICEoaW5kZXggPT0gLTEpKVxyXG5cdFx0XHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknLCAoaW5kZXggPT0gLTEpKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuY2h4SGlkZS5wcm9wKCdjaGVja2VkJywgKGluZGV4ID09IC0xKSlcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly9oZWFkZXJzXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmVtcHR5KCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzU29ydGVkQXNjID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZERlc2MgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgc2VsZWN0IG9mIHRhYmxlSGVhZGVyLnNlbGVjdHMpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChwYXJhbXNBcnJheS5oYXMoc2VsZWN0Lm5hbWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNGaWx0ZXJlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChwYXJhbXNBcnJheS5nZXQoJ3NvcnRBc2MnKSA9PSBzZWxlY3QubmFtZSkge1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzU29ydGVkQXNjID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHBhcmFtc0FycmF5LmdldCgnc29ydERlc2MnKSA9PSBzZWxlY3QubmFtZSkge1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzU29ydGVkRGVzYyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmFwcGVuZCgodGFibGVIZWFkZXIuaXNGaWx0ZXJlZCk/aWNvbi5mdW5uZWxGaWxsOmljb24uZnVubmVsKTtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICh0YWJsZUhlYWRlci5pc1NvcnRlZEFzYykge1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoaWNvbi5hcnJvd0Rvd24pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjKSB7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmFwcGVuZChpY29uLmFycm93VXApO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vdGJvZHlcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IgKGxldCB2ZXJzaW9uIG9mIHJlc3VsdC52ZXJzaW9ucykge1xyXG5cdFx0XHRcdFx0bGV0IHRyID0gJCgnI3RhYmxlID4gdGJvZHknKS5hcHBlbmQoY3JlYXRlLnRyKS5jaGlsZHJlbigpLmxhc3QoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGRpdiA9IHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCAnY18nICsgdmVyc2lvbi5pZClcclxuXHRcdFx0XHRcdFx0LnZhbCh2ZXJzaW9uLmlkKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgbGluZUNoZWNrZWQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgJ2NfJyArIHZlcnNpb24uaWQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgdGFibGVIZWFkZXIgb2YgdGFibGVIZWFkZXJzKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRkYXRhID0gdmVyc2lvblt0YWJsZUhlYWRlci5pZF07XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuY29sLnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci50aC5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmNvbC5hdHRyKCdjbGFzcycpID09ICd0eXBlLXN0YW5kYXJkJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKC9eWy0rXT9bMC05XSskLy50ZXN0KGRhdGEpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0eXBlLWludGVnZXInO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICgvXlstK10/WzAtOV0qXFxcXC4/WzAtOV0rJC8udGVzdChkYXRhKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndHlwZS1mbG9hdCc7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndHlwZS10ZXh0JztcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJyc7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoZGF0YUNsYXNzKVxyXG5cdFx0XHRcdFx0XHRcdFx0LnRleHQoZGF0YSk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuY29sLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci50aC5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdidG4tc3VjY2VzcyB3LTEwMCcpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ21vZGFsJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS10YXJnZXQnLCAnI21vZGFsJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS11cmwnLCB2ZXJzaW9uLmRldGFpbFVybClcclxuXHRcdFx0XHRcdFx0XHQudGV4dCh0ZXh0LmRldGFpbHMpXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9wYWdpbmF0aW9uXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHJlc3VsdC5wYWdlTWF4ID4gMSkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuYWRkQ2xhc3MoJ21iLTQnKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IHBhZ2VNYXggPSByZXN1bHQucGFnZU1heDtcclxuXHRcdFx0XHRcdGxldCBwYWdlID0gcGFyYW1zQXJyYXkuZ2V0KCdwYWdlJykgfHwgMTtcclxuXHRcdFx0XHRcdGxldCBwYWdlTWluID0gTWF0aC5tYXgoMSwgcGFnZSAtIDIpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR1bCA9ICQoJyNwYWdpbmF0aW9uJykuYXBwZW5kKGNyZWF0ZS51bCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdpbmF0aW9uIGp1c3RpZnktY29udGVudC1jZW50ZXInKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gMSk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIE1hdGgubWF4KDEsIHBhZ2UgLSAxKSlcclxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdC5odG1sKCcmbGFxdW87JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaT0wOyBpPDU7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRpZiAocGFnZU1heCA+IGkpIHtcclxuXHRcdFx0XHRcdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IHBhZ2VNaW4gKyBpKT8nIGRpc2FibGVkJzonJykpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgcGFnZU1pbilcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQocGFnZU1pbiArIGkpXHJcblx0XHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSBwYWdlTWF4KT8nIGRpc2FibGVkJzonJykpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgTWF0aC5taW4ocGFnZU1heCwgcGFnZSArIDEpKVxyXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0Lmh0bWwoJyZyYXF1bzsnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vJCgndGFibGUnKS5zdGlja3lUYWJsZUhlYWRlcnMoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdH0pO1x0XHJcblx0fVxyXG5cclxufTtcclxuKi9cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vLyB0YWJsZUhlYWRlclxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlVGFibGVIZWFkZXIodGhhdCkge1xyXG5cdFxyXG5cdHZhciB0YWJsZUhlYWRlciA9IHtcclxuXHRcdGNvbDogJCh0aGF0KS5jbG9zZXN0KCd0YWJsZScpLmZpbmQoJ2NvbCcpLmVxKCQodGhhdCkuaW5kZXgoKSksXHJcblx0XHR0aDogJCh0aGF0KSxcclxuXHRcdGlkOiAkKHRoYXQpLmF0dHIoJ2lkJyksXHJcblx0XHR0aXRsZTogJCh0aGF0KS5kYXRhKCd0aXRsZScpLFxyXG5cdFx0c29ydDogJCh0aGF0KS5kYXRhKCdzb3J0JyksXHJcblx0XHRpc0ZpbHRlcmVkOiBmYWxzZSxcclxuXHRcdGlzU29ydGVkQXNjOiBmYWxzZSxcclxuXHRcdGlzU29ydGVkRGVzYzogZmFsc2UsXHJcblx0XHRzZWxlY3RzOiBbXSxcclxuXHR9XHJcblx0XHJcblx0JCh0aGF0KS5maW5kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHR2YXIgbXVsdGlwbGVBdHRyID0gKHR5cGVvZiAkKHRoaXMpLmF0dHIoJ211bHRpcGxlJykgIT09IHR5cGVvZiB1bmRlZmluZWQgJiYgJCh0aGlzKS5hdHRyKCdtdWx0aXBsZScpICE9PSBmYWxzZSk7XHJcblx0XHR2YXIgbmFtZSA9ICQodGhpcykucHJvcCgnbmFtZScpICsgKChtdWx0aXBsZUF0dHIpPydbXSc6JycpO1xyXG5cdFx0XHJcblx0XHR2YXIgc2VsZWN0ID0ge1xyXG5cdFx0XHRcdHNsdDogJCh0aGlzKSxcclxuXHRcdFx0XHRpZDogJCh0aGlzKS5wcm9wKCdpZCcpLFxyXG5cdFx0XHRcdG5hbWU6IG5hbWUsXHJcblx0XHRcdFx0bXVsdGlwbGU6IG11bHRpcGxlQXR0cixcclxuXHRcdFx0XHR0aXRsZTogJCh0aGlzKS5kYXRhKCd0aXRsZScpLFxyXG5cdFx0XHRcdG9wdGlvbnM6IFtdLFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0JCh0aGlzKS5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzZWxlY3Qub3B0aW9ucy5wdXNoKHtcclxuXHRcdFx0XHR2YWx1ZTogJCh0aGlzKS5hdHRyKCd2YWx1ZScpLFxyXG5cdFx0XHRcdHRleHQ6ICQodGhpcykudGV4dCgpLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5zZWxlY3RzLnB1c2goc2VsZWN0KTtcclxuXHRcdFxyXG5cdH0pO1xyXG5cdFxyXG5cdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzLmxlbmd0aCkge1xyXG5cdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cCA9IHRhYmxlSGVhZGVyLnRoLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0bi1ncm91cCB3LTEwMCcpXHJcblx0XHRcdC5hdHRyKCdyb2xlJywgJ2dyb3VwJylcclxuXHRcdFx0Lm9uKCdoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZihlLmNsaWNrRXZlbnQgJiYgJC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQucGFyZW50Tm9kZSwgZS5jbGlja0V2ZW50LnRhcmdldCkpIHtcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUuZW1wdHkoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3ctMTAwJylcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LnRleHQodGFibGVIZWFkZXIudGl0bGUpXHJcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cyAmJiB0YWJsZUhlYWRlci5zb3J0KSB7XHJcblx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IHRhYmxlSGVhZGVyLnNlbGVjdHNbMF0ubmFtZSkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnREZXNjJywgdGFibGVIZWFkZXIuc2VsZWN0c1swXS5uYW1lKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnRBc2MnLCB0YWJsZUhlYWRlci5zZWxlY3RzWzBdLm5hbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFxyXG5cdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24gPSB0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdweC0wJylcclxuXHRcdFx0LmNzcygnd2lkdGgnLCAnM2VtJylcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LmF0dHIoJ2lkJywgJ2JfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHQuYXR0cignZGF0YS10b2dnbGUnLCAnZHJvcGRvd24nKVxyXG5cdFx0XHQuYXR0cignYXJpYS1oYXNwb3B1cCcsIHRydWUpXHJcblx0XHRcdC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXHJcblx0XHQ7XHJcblx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUgPSB0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2Ryb3Bkb3duLW1lbnUnKVxyXG5cdFx0XHQuYXR0cignYXJpYS1sYWJlbGxlZGJ5JywgJ2JfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdkLWZsZXggZmxleC1yb3cnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgY3JlYXRlTWVudSk7XHJcblx0XHJcblx0fSBlbHNlIHtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24gPSB0YWJsZUhlYWRlci50aC5hcHBlbmQoY3JlYXRlLm1lbnVCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygndy0xMDAnKVxyXG5cdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUuZW1wdHkoKTtcclxuXHRcdFxyXG5cdFx0Zm9yIChsZXQgc2VsZWN0IG9mIHRhYmxlSGVhZGVyLnNlbGVjdHMpIHtcclxuXHRcdFx0XHJcblx0XHRcdHNlbGVjdC5kaXZDb250ZW50ID0gdGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnbXgtMScpXHJcblx0XHRcdFx0LmNzcygnbWluLXdpZHRoJywgJzE1ZW0nKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoc2VsZWN0Lm11bHRpcGxlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdFx0c2VsZWN0LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItZGFyayBwYi0yIHB4LTEnKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKHNlbGVjdC50aXRsZSk7XHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZGaWx0ZXIgPSBzZWxlY3QuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgcC0xJylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0XHRcdHNlbGVjdC5idG5Tb3J0RGVzYyA9IHNlbGVjdC5kaXZGaWx0ZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChpY29uLmFycm93VXApXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSBzZWxlY3QubmFtZSk/J3B4LTIgYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOidweC0yIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIHNvcnREZXNjKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2RmlsdGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQudGV4dCh0ZXh0LmZpbHRlcilcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMyBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgZmlsdGVyKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRcdFx0c2VsZWN0LmJ0blNvcnRBc2MgPSBzZWxlY3QuZGl2RmlsdGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd0Rvd24pXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IHNlbGVjdC5uYW1lKT8ncHgtMiBidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J3B4LTIgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgc29ydEFzYylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdlNlYXJjaCA9IHNlbGVjdC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHAtMicpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZTZWFyY2guYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dmFyIHNlYXJjaFZhbHVlID0gJCh0aGlzKS52YWwoKS50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoc2VhcmNoVmFsdWUgPT0gJycpIHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsLnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb24udGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVmFsdWUpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5kaXYuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRzZWxlY3QuZGl2TGlzdCA9IHNlbGVjdC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncHgtMiBvdmVyZmxvdy1hdXRvICcgKyAoKHNlbGVjdC5tdWx0aXBsZSk/J3B0LTMnOidwdC0xJykpXHJcblx0XHRcdFx0LmNzcygnbWF4LWhlaWdodCcsICcyMGVtJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHNlbGVjdC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwgPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmNoeFNlbGVjdEFsbCA9IHNlbGVjdC5kaXZTZWxlY3RBbGwuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ19zZWxlY3RBbGwnKVxyXG5cdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHZhciBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfc2VsZWN0QWxsJylcclxuXHRcdFx0XHRcdC50ZXh0KHRleHQuc2VsZWN0QWxsKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0b3B0aW9uLmRpdiA9IHNlbGVjdC5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHQ7XHJcblxyXG5cdFx0XHRcdFx0b3B0aW9uLmNoeCA9IG9wdGlvbi5kaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdXJsU2VhcmNoLmdldChzZWxlY3QubmFtZSkuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGxldCBjaGVja2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0bGV0IHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCQob3B0aW9uLmNoeCkuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5jaHhTZWxlY3RBbGwucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5sYmwgPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LnRleHQob3B0aW9uLnRleHQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZVbmtub3duID0gc2VsZWN0LmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5jaHhVbmtub3duID0gc2VsZWN0LmRpdlVua25vd24uYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ19ub3RBcHBsaWNhYmxlJylcclxuXHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgIXVybFNlYXJjaC5oYXMoc2VsZWN0Lm5hbWUpKVxyXG5cdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHZhciBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZShzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2VW5rbm93bi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIHNlbGVjdC5uYW1lICsgJ19ub3RBcHBsaWNhYmxlJylcclxuXHRcdFx0XHRcdC50ZXh0KHRleHQubm90QXBwbGljYWJsZSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5kaXYgPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvcHRpb24uY2h4ID0gb3B0aW9uLmRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCB1cmxTZWFyY2guZ2V0KHNlbGVjdC5uYW1lKS5pbmNsdWRlcyhvcHRpb24udmFsdWUpKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0LmRpdkxpc3QuZmluZCgnaW5wdXQnKS5ub3QodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXNlbGVjdC5jaHhVbmtub3duLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbi5jaHguaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKHNlbGVjdC5uYW1lLCBvcHRpb24udmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5sYmwgPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LnRleHQob3B0aW9uLnRleHQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gc29ydEFzYygpIHtcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydEFzYycsIHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZmlsdGVyKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gZmlsdGVyKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdGlmICghc2VsZWN0LmNoeFNlbGVjdEFsbC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbi5jaHguaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKHNlbGVjdC5uYW1lLCBvcHRpb24udmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gc29ydERlc2MoKSB7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydEFzYycpO1xyXG5cdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0RGVzYycsIHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0XHRmaWx0ZXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiB0YWJsZUhlYWRlcjtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy8gZmlsbERpc3BsYXlcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGZpbGxEaXNwbGF5KCkge1xyXG5cdHZhciBjb2wgPSAkKCcjZGlzcGxheScpLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0LmFkZENsYXNzKCdyb3cgcHktMicpXHJcblx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnY29sJylcclxuXHQ7XHJcblx0XHJcblx0Zm9yIChsZXQgdGFibGVIZWFkZXIgb2YgdGFibGVIZWFkZXJzKSB7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmFIaWRlID0gY29sLmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5IGNvbC0yIG0tMSB0ZXh0LWxlZnQnKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuY2h4SGlkZS5wcm9wKCdjaGVja2VkJywgIXRhYmxlSGVhZGVyLmNoeEhpZGUuaXMoJzpjaGVja2VkJykpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCBoaWRlID0gdXJsU2VhcmNoLmdldCgnaGlkZVtdJyk7XHJcblx0XHRcdFx0bGV0IGluZGV4ID0gaGlkZS5pbmRleE9mKHRhYmxlSGVhZGVyLmlkKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuY2h4SGlkZS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0aWYgKGluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRcdFx0aGlkZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPT0gLTEgJiYgdGFibGVIZWFkZXIuaWQpIHtcclxuXHRcdFx0XHRcdFx0aGlkZS5wdXNoKHRhYmxlSGVhZGVyLmlkKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnaGlkZVtdJyk7XHJcblx0XHRcdFx0aGlkZS5mb3JFYWNoKGUgPT4gdXJsU2VhcmNoLmFwcGVuZCgnaGlkZVtdJywgZSkpO1xyXG5cdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0bGV0IGRpdiA9IHRhYmxlSGVhZGVyLmFIaWRlLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuY2h4SGlkZSA9IGRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXR0cignaWQnLCAnaF8nICsgdGFibGVIZWFkZXIuaWQpXHJcblx0XHRcdC5vbignY2hhbmdlIGNsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmF0dHIoJ2ZvcicsICdoXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0LnRleHQodGFibGVIZWFkZXIudGl0bGUpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxuXHRcclxufVx0XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vLyBsaW5lQ2hlY2tlZFxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gbGluZUNoZWNrZWQoKSB7XHJcblx0XHJcblx0dmFyIGNoZWNrZWQgPSBmYWxzZTtcclxuXHR2YXIgdW5jaGVja2VkID0gZmFsc2U7XHJcblxyXG5cdCQoJ3Rib2R5JykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0aWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR1bmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdHVybFNlYXJjaC5kZWxldGUoJ2lkW10nKTtcclxuXHRpZiAoY2hlY2tlZCkge1xyXG5cdFx0JCgndGFibGUnKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoJCh0aGlzKS5wcm9wKCdpZCcpICE9ICdjaGVja19hbGwnICYmICQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKCdpZFtdJywgJCh0aGlzKS52YWwoKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKCcjZG9jdW1lbnRfZWRpdCcpLnNob3coKTtcclxuXHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuc2hvdygpO1xyXG5cdFx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLnNob3coKTtcclxuXHRcdCQoJyN2ZXJzaW9uX21lbnUnKS5zaG93KCk7XHRcclxuXHR9IGVsc2UgaWYodW5jaGVja2VkKSB7XHJcblx0XHQkKCcjdmVyc2lvbicpLnZhbCgnJyk7XHJcblx0XHQkKCcjZG9jdW1lbnRfZWRpdCcpLmhpZGUoKTtcclxuXHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdFx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLmhpZGUoKTtcclxuXHRcdCQoJyN2ZXJzaW9uX21lbnUnKS5oaWRlKCk7XHRcclxuXHR9XHJcbn1cclxuXHJcbnZhciB1cmxTZWFyY2ggPSBuZXcgVXJsU2VhcmNoKCk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcclxuXHQkKCcjZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdDtcclxuXHRcdCQoZXZlbnQudGFyZ2V0KS5maW5kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoJCh0aGlzKS52YWwoKS50b1N0cmluZygpICA9PSAnJykge1xyXG5cdFx0XHRcdCQodGhpcykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcclxuXHRcclxuXHQkKCcjbW9kYWwnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGFqYXguc2V0KCcubW9kYWwtYm9keScsICQoZS5yZWxhdGVkVGFyZ2V0KS5kYXRhKCd1cmwnKSk7XHJcblx0fSk7XHJcblxyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9lZGl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfbW92ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3ZlcnNpb25fbmV3Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdmVyc2lvbl9lZGl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdmVyc2lvbl9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgdXJsU2VhcmNoLnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN0YWJzJykub24oJ3Nob3cuYnMudGFiJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcuY29sbGFwc2UnKS5jb2xsYXBzZSgnc2hvdycpO1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmNzcygnbWFyZ2luLXRvcCcsICcxMGVtJyk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3RhYnMgdWwgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkKHRoaXMpLmJsdXIoKTtcclxuXHRcdFx0JCh0aGlzKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xyXG5cdFx0XHQkKCcjJyArICQodGhpcykuYXR0cignYXJpYS1jb250cm9scycpKS5wYXJlbnQoKS5jb2xsYXBzZSgnaGlkZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG4gICAgXHJcblx0JCgnI3RhYnMnKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5jc3MoJ21hcmdpbi10b3AnLCAnMTBlbScpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN0YWJzJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5jc3MoJ21hcmdpbi10b3AnLCAnNGVtJyk7XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0LypcclxuXHQkKCcjdGFicyBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdCQoJyN0YWJzJykuY3NzKCdoZWlnaHQnLCAnM2VtJyk7XHJcblx0XHRcdFxyXG5cdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0JCh0aGlzKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKHRoaXMpO1xyXG5cdFx0XHQkKCcjJyArICQodGhpcykuYXR0cignYXJpYS1jb250cm9scycpKS5yZW1vdmVBdHRyKCdjbGFzcycpO1xyXG5cdFx0XHQvL2NvbnNvbGUubG9nKCQoJyMnICsgJCh0aGlzKS5hdHRyKCdhcmlhLWNvbnRyb2xzJykpWzBdKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJyN0YWJzJykuY3NzKCdoZWlnaHQnLCAnMTBlbScpO1xyXG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0JCh0aGlzKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgdHJ1ZSk7XHJcblx0XHRcdCQoJyMnICsgJCh0aGlzKS5hdHRyKCdhcmlhLWNvbnRyb2xzJykpLmF0dHIoJ2NsYXNzJywgJ3RhYi1wYW5lIGZhZGUgc2hvdyBhY3RpdmUnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0pO1xyXG5cdCovXHJcblx0XHJcblx0JCgnI2NoZWNrX2FsbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgndGJvZHknKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCAkKCcjY2hlY2tfYWxsJykuaXMoJzpjaGVja2VkJykpO1xyXG5cdFx0fSk7XHJcblx0XHRsaW5lQ2hlY2tlZCgpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJ3RhYmxlJykuZmluZCgndGhbaWRdW2RhdGEtdGl0bGVdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdHRhYmxlSGVhZGVycy5wdXNoKGNyZWF0ZVRhYmxlSGVhZGVyKHRoaXMpKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdnVlcycpLmZpbmQoJ2J1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0aWYgKCQodGhpcykuYXR0cignaWQnKSA9PSAndnVlX25ldycpIHtcclxuXHRcdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9TdHJpbmcoKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR1cmxTZWFyY2guc2V0KCd2dWUnLCAkKHRoaXMpLmRhdGEoJ3ZhbHVlJykpO1xyXG5cdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRcclxuXHRmaWxsRGlzcGxheSgpO1xyXG5cdHVybFNlYXJjaC5zZXRGcm9tVXJsKHdpbmRvdy5sb2NhdGlvbik7XHJcblx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=