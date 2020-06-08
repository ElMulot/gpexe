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

        select.divList = select.divContent.append(create.div).children().last().addClass('px-2 ' + (select.multiple ? 'pt-3' : 'pt-1'));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwidGFibGVIZWFkZXJzIiwiVXJsU2VhcmNoIiwiX3BhcmFtc0FycmF5IiwicHJvdG90eXBlIiwiaGFzIiwia2V5IiwiZ2V0IiwiZXhlYyIsImdldEFsbCIsInNldCIsInZhbHVlIiwiYXBwZW5kIiwic2V0RnJvbVVybCIsInBhcmFtc0FycmF5IiwidG9TdHJpbmciLCJ1cmxTZWFyY2giLCJmZXRjaCIsImVtcHR5IiwiaWNvbiIsImxvYWRpbmciLCJpbnNlcnRBZnRlciIsInRoYXQiLCJhamF4IiwidXJsIiwiZGF0YSIsInR5cGUiLCJzdWNjZXNzIiwicmVzdWx0Iiwic2VhcmNoVXJsIiwicGFyYW0iLCJxdWVyeSIsIm5leHQiLCJyZW1vdmUiLCJzaG93IiwiZmluZCIsImVhY2giLCJhdHRyIiwidGFibGVIZWFkZXIiLCJoaWRlIiwiaW5kZXgiLCJpbmRleE9mIiwiaWQiLCJhSGlkZSIsInRvZ2dsZUNsYXNzIiwiY2h4SGlkZSIsInByb3AiLCJidG5Ecm9wZG93biIsImlzRmlsdGVyZWQiLCJpc1NvcnRlZEFzYyIsImlzU29ydGVkRGVzYyIsInNlbGVjdHMiLCJzZWxlY3QiLCJuYW1lIiwiZnVubmVsRmlsbCIsImZ1bm5lbCIsImFycm93RG93biIsImFycm93VXAiLCJ2ZXJzaW9ucyIsInZlcnNpb24iLCJ0ciIsImNyZWF0ZSIsImNoaWxkcmVuIiwibGFzdCIsImRpdiIsInRkIiwiYWRkQ2xhc3MiLCJjaGVja2JveCIsInZhbCIsIm9uIiwibGluZUNoZWNrZWQiLCJsYWJlbCIsInVuZGVmaW5lZCIsImNvbCIsInRoIiwidGVzdCIsImRhdGFDbGFzcyIsInRleHQiLCJzbWFsbEJ1dHRvbiIsImRldGFpbFVybCIsImRldGFpbHMiLCJwYWdlTWF4IiwicGFnZSIsInBhZ2VNaW4iLCJNYXRoIiwibWF4IiwidWwiLCJsaSIsImEiLCJzcGFuIiwiaHRtbCIsImkiLCJtaW4iLCJjcmVhdGVUYWJsZUhlYWRlciIsImNsb3Nlc3QiLCJlcSIsInRpdGxlIiwic29ydCIsIm11bHRpcGxlQXR0ciIsInNsdCIsIm11bHRpcGxlIiwib3B0aW9ucyIsInB1c2giLCJsZW5ndGgiLCJkaXZEcm9wZG93bkdyb3VwIiwiZSIsImNsaWNrRXZlbnQiLCJjb250YWlucyIsInJlbGF0ZWRUYXJnZXQiLCJwYXJlbnROb2RlIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJkaXZEcm9wZG93bk1lbnUiLCJtZW51QnV0dG9uIiwiY3NzIiwiY3JlYXRlTWVudSIsImRpdkNvbnRlbnQiLCJkaXZGaWx0ZXIiLCJidG5Tb3J0RGVzYyIsInNvcnREZXNjIiwiZmlsdGVyIiwiYnRuU29ydEFzYyIsInNvcnRBc2MiLCJkaXZTZWFyY2giLCJpbnB1dCIsInNlYXJjaFZhbHVlIiwidG9Mb3dlckNhc2UiLCJkaXZTZWxlY3RBbGwiLCJvcHRpb24iLCJjaHgiLCJkaXZMaXN0IiwiY2h4U2VsZWN0QWxsIiwiY2hlY2tlZCIsImlzIiwic2VsZWN0QWxsIiwiaW5jbHVkZXMiLCJ1bmNoZWNrZWQiLCJsYmwiLCJkaXZVbmtub3duIiwiY2h4VW5rbm93biIsImRyb3Bkb3duIiwibm90QXBwbGljYWJsZSIsIm5vdCIsImZpbGxEaXNwbGF5Iiwic3BsaWNlIiwiZm9yRWFjaCIsImRvY3VtZW50IiwicmVhZHkiLCJldmVudCIsImxvY2F0aW9uIiwiYXNzaWduIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQUEsbUJBQU8sQ0FBQyx3Q0FBRCxDQUFQOztBQUNBLElBQU1DLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQSxJ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RUFBaEIsQ0FBbUIsVUFBbkIsQ0FBeEI7QUFDQSxLQUZEO0FBR0EvRCxlQUFXO0FBQ1gsR0FMRDtBQU9BeEUsR0FBQyxDQUFDLE9BQUQsQ0FBRCxDQUFXcUMsSUFBWCxDQUFnQixvQkFBaEIsRUFBc0NDLElBQXRDLENBQTJDLFlBQVc7QUFDckRuQyxnQkFBWSxDQUFDcUcsSUFBYixDQUFrQlQsaUJBQWlCLENBQUMsSUFBRCxDQUFuQztBQUNBLEdBRkQ7QUFJQS9GLEdBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV3FDLElBQVgsQ0FBZ0IsUUFBaEIsRUFBMEJrQyxFQUExQixDQUE2QixPQUE3QixFQUFzQyxZQUFXO0FBQ2hELFFBQUl2RSxDQUFDLENBQUMsSUFBRCxDQUFELENBQVF1QyxJQUFSLENBQWEsSUFBYixLQUFzQixTQUExQixFQUFxQztBQUNwQ2dILGNBQVEsQ0FBQ0MsTUFBVCxDQUFnQnhKLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTJCLElBQVIsQ0FBYSxLQUFiLElBQXNCVCxTQUFTLENBQUNELFFBQVYsRUFBdEM7QUFDQSxLQUZELE1BRU87QUFDTkMsZUFBUyxDQUFDTixHQUFWLENBQWMsS0FBZCxFQUFxQlosQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMkIsSUFBUixDQUFhLE9BQWIsQ0FBckI7QUFDQVQsZUFBUyxDQUFDQyxLQUFWO0FBQ0E7QUFDRCxHQVBEO0FBY0E4SCxhQUFXO0FBQ1gvSCxXQUFTLENBQUNILFVBQVYsQ0FBcUIwSSxNQUFNLENBQUNGLFFBQTVCO0FBQ0FySSxXQUFTLENBQUNDLEtBQVY7QUFFQSxDQW5GRCxFIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwicmVxdWlyZSgnLi4vanMvYXBwLmpzJyk7XHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuY29uc3QgcG9wcGVyID0gcmVxdWlyZSgncG9wcGVyLmpzJyk7XHJcbnJlcXVpcmUoJ3N0aWNreS10YWJsZS1oZWFkZXJzJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9kb2N1bWVudC5zY3NzJyk7XHJcbmNvbnN0IFVSTFNlYXJjaFBhcmFtcyA9IHJlcXVpcmUoJ0B1bmdhcC91cmwtc2VhcmNoLXBhcmFtcy9janMnKTtcclxuXHJcblxyXG5cclxudmFyIHRhYmxlSGVhZGVycyA9IFtdO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy9VcmxTZWFyY2hcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIFVybFNlYXJjaCAoKSB7XHJcblx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbn1cclxuXHJcblVybFNlYXJjaC5wcm90b3R5cGUgPSB7XHJcblxyXG5cdGhhczogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcGFyYW1zQXJyYXkuaGFzKGtleSk7XHJcblx0fSxcclxuXHRcclxuXHRnZXQ6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0aWYgKC9cXFMrXFxbXFxdL2cuZXhlYyhrZXkpKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLl9wYXJhbXNBcnJheS5nZXRBbGwoa2V5KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB0aGlzLl9wYXJhbXNBcnJheS5nZXQoa2V5KTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG5cdFx0aWYgKGtleSA9PSAndnVlJykge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoeyd2dWUnOiB2YWx1ZX0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkuc2V0KGtleSwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0YXBwZW5kOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRpZiAoa2V5ID09ICd2dWUnKSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7J3Z1ZSc6IHZhbHVlfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheS5hcHBlbmQoa2V5LCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRkZWxldGU6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0dGhpcy5fcGFyYW1zQXJyYXkuZGVsZXRlKGtleSk7XHJcblx0fSxcclxuXHRcclxuXHRzZXRGcm9tVXJsOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0bGV0IHBhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh2YWx1ZSk7XHJcblx0XHRpZiAocGFyYW1zQXJyYXkuaGFzKCd2dWUnKSkge1xyXG5cdFx0XHR0aGlzLnNldCgndnVlJywgcGFyYW1zQXJyYXkuZ2V0KCd2dWUnKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheSA9IHBhcmFtc0FycmF5O1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0dG9TdHJpbmc6IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHVybFNlYXJjaCA9IHRoaXMuX3BhcmFtc0FycmF5LnRvU3RyaW5nKCk7XHJcblx0XHRyZXR1cm4gKHVybFNlYXJjaCk/Jz8nICsgdXJsU2VhcmNoOicnO1xyXG5cdH0sXHJcblx0XHJcblx0ZmV0Y2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHQkKCcjdGFibGUgPiB0Ym9keScpLmVtcHR5KCk7XHJcblx0XHQkKGljb24ubG9hZGluZykuaW5zZXJ0QWZ0ZXIoJyN0YWJsZScpO1xyXG5cdFx0XHJcblx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybCA6ICQoJyN0YWJsZScpLmRhdGEoJ3VybCcpICsgdGhhdC50b1N0cmluZygpLFxyXG5cdFx0XHR0eXBlOiAnR0VUJyxcclxuXHRcdFx0XHJcblx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCBzZWFyY2hVcmwgPSAkLnBhcmFtKHJlc3VsdC5xdWVyeSk7XHJcblx0XHRcdFx0dGhhdC5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFVybCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0JCgnI3RhYmxlJykubmV4dCgpLnJlbW92ZSgpO1xyXG5cdFx0XHRcdCQoJyN0YWJsZScpLnNob3coKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL3Z1ZVxyXG5cdFx0XHRcdCQoJyN2dWVzJykuZmluZCgnYnV0dG9uW2RhdGEtdmFsdWVdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICgkKHRoaXMpLmRhdGEoJ3ZhbHVlJykgPT0gdGhhdC5nZXQoJ3Z1ZScpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbS0xJylcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1wcmltYXJ5IG0tMScpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgdGFibGVIZWFkZXIgb2YgdGFibGVIZWFkZXJzKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vaGlkZVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgaGlkZSA9IHRoYXQuZ2V0KCdoaWRlW10nKTtcclxuXHRcdFx0XHRcdGxldCBpbmRleCA9IGhpZGUuaW5kZXhPZih0YWJsZUhlYWRlci5pZCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmFIaWRlXHJcblx0XHRcdFx0XHRcdC50b2dnbGVDbGFzcygnYnRuLXByaW1hcnknLCAhKGluZGV4ID09IC0xKSlcclxuXHRcdFx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5JywgKGluZGV4ID09IC0xKSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNoeEhpZGUucHJvcCgnY2hlY2tlZCcsIChpbmRleCA9PSAtMSkpXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vaGVhZGVyc1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5lbXB0eSgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc0ZpbHRlcmVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZEFzYyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IHNlbGVjdCBvZiB0YWJsZUhlYWRlci5zZWxlY3RzKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC5oYXMoc2VsZWN0Lm5hbWUpKSB7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNGaWx0ZXJlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmICh0aGF0LmdldCgnc29ydEFzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC5nZXQoJ3NvcnREZXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZERlc2MgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoKHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQpP2ljb24uZnVubmVsRmlsbDppY29uLmZ1bm5lbCk7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MpIHtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGljb24uYXJyb3dEb3duKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmlzU29ydGVkRGVzYykge1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoaWNvbi5hcnJvd1VwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL3Rib2R5XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgdmVyc2lvbiBvZiByZXN1bHQudmVyc2lvbnMpIHtcclxuXHRcdFx0XHRcdGxldCB0ciA9ICQoJyN0YWJsZSA+IHRib2R5JykuYXBwZW5kKGNyZWF0ZS50cikuY2hpbGRyZW4oKS5sYXN0KCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBkaXYgPSB0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgJ2NfJyArIHZlcnNpb24uaWQpXHJcblx0XHRcdFx0XHRcdC52YWwodmVyc2lvbi5pZClcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGxpbmVDaGVja2VkKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsICdjXycgKyB2ZXJzaW9uLmlkKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IHRhYmxlSGVhZGVyIG9mIHRhYmxlSGVhZGVycykge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0ZGF0YSA9IHZlcnNpb25bdGFibGVIZWFkZXIuaWRdO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNvbC5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIudGguc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0YWJsZUhlYWRlci5jb2wuYXR0cignY2xhc3MnKSA9PSAndHlwZS1zdGFuZGFyZCcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICgvXlstK10/WzAtOV0rJC8udGVzdChkYXRhKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndHlwZS1pbnRlZ2VyJztcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoL15bLStdP1swLTldKlxcXFwuP1swLTldKyQvLnRlc3QoZGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3R5cGUtZmxvYXQnO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3R5cGUtdGV4dCc7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICcnO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKGRhdGFDbGFzcylcclxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KGRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNvbC5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIudGguaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuLXN1Y2Nlc3Mgdy0xMDAnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXRvZ2dsZScsICdtb2RhbCcpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdGFyZ2V0JywgJyNtb2RhbCcpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdXJsJywgdmVyc2lvbi5kZXRhaWxVcmwpXHJcblx0XHRcdFx0XHRcdFx0LnRleHQodGV4dC5kZXRhaWxzKVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vcGFnaW5hdGlvblxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChyZXN1bHQucGFnZU1heCA+IDEpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCdtYi00Jyk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBwYWdlTWF4ID0gcmVzdWx0LnBhZ2VNYXg7XHJcblx0XHRcdFx0XHRsZXQgcGFnZSA9IHRoYXQuZ2V0KCdwYWdlJykgfHwgMTtcclxuXHRcdFx0XHRcdGxldCBwYWdlTWluID0gTWF0aC5tYXgoMSwgcGFnZSAtIDIpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR1bCA9ICQoJyNwYWdpbmF0aW9uJykuYXBwZW5kKGNyZWF0ZS51bCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdpbmF0aW9uIGp1c3RpZnktY29udGVudC1jZW50ZXInKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gMSk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIE1hdGgubWF4KDEsIHBhZ2UgLSAxKSlcclxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdC5odG1sKCcmbGFxdW87JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaT0wOyBpPDU7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRpZiAocGFnZU1heCA+IGkpIHtcclxuXHRcdFx0XHRcdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IHBhZ2VNaW4gKyBpKT8nIGRpc2FibGVkJzonJykpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgcGFnZU1pbilcclxuXHRcdFx0XHRcdFx0XHRcdFx0LnRleHQocGFnZU1pbiArIGkpXHJcblx0XHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSBwYWdlTWF4KT8nIGRpc2FibGVkJzonJykpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgTWF0aC5taW4ocGFnZU1heCwgcGFnZSArIDEpKVxyXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0Lmh0bWwoJyZyYXF1bzsnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vJCgndGFibGUnKS5zdGlja3lUYWJsZUhlYWRlcnMoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fSxcclxuXHRcdH0pO1x0XHJcblx0fSxcdFxyXG59XHJcblxyXG4vKlxyXG52YXIgZGF0YXMgPSB7XHJcblx0XHJcblx0Z2V0IHNlYXJjaFVybCgpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHVybCA9IHt9O1xyXG5cdFx0XHJcblx0XHRpZiAocGFyYW1zQXJyYXkuaGFzKCdpZFtdJykpIHtcclxuXHRcdFx0dXJsLmlkID0gcGFyYW1zQXJyYXkuZ2V0QWxsKCdpZFtdJyk7XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0bGV0IF9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXModGhpcy5fc2VhcmNoVXJsKTtcclxuXHRcdFxyXG5cdFx0aWYgKF9wYXJhbXNBcnJheS5oYXMoJ3Z1ZScpKSB7XHJcblx0XHRcdHVybC52dWUgPSBfcGFyYW1zQXJyYXkuZ2V0KCd2dWUnKTtcclxuXHRcdFx0cmV0dXJuICQucGFyYW0odXJsKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiBwYXJhbXNBcnJheS50b1N0cmluZygpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0c2V0IHNlYXJjaFVybCh2YWx1ZSkge1xyXG5cdFx0XHJcblx0XHRpZiAociA9IC9cXD8oXFxTKikvZy5leGVjKHZhbHVlKSkgeyAvL2VubMOodmUgbGUgP1xyXG5cdFx0XHR0aGlzLl9zZWFyY2hVcmwgPSByWzFdO1xyXG5cdFx0fSBlbHNlIGlmIChyID0gLyhcXFMrPVxcUyspKy9nLmV4ZWModmFsdWUpKSB7XHJcblx0XHRcdHRoaXMuX3NlYXJjaFVybCA9IHJbMV07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRwYXJhbXNBcnJheS5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHR0aGlzLl9zZWFyY2hVcmwgPSBwYXJhbXNBcnJheS50b1N0cmluZygpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0ZmV0Y2g6IGZ1bmN0aW9uKCkge1xyXG5cdFxyXG5cdFx0JCgnI3RhYmxlID4gdGJvZHknKS5lbXB0eSgpO1xyXG5cdFx0JChpY29uLmxvYWRpbmcpLmluc2VydEFmdGVyKCcjdGFibGUnKTtcclxuXHRcdFxyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR1cmwgOiAkKCcjdGFibGUnKS5kYXRhKCd1cmwnKSArICc/JyArIHRoaXMuX3NlYXJjaFVybCxcclxuXHRcdFx0dHlwZTogJ0dFVCcsXHJcblx0XHRcdFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRwYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoJC5wYXJhbShyZXN1bHQucXVlcnkpKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKCcjdGFibGUnKS5uZXh0KCkucmVtb3ZlKCk7XHJcblx0XHRcdFx0JCgnI3RhYmxlJykuc2hvdygpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vdnVlXHJcblx0XHRcdFx0aWYgKHBhcmFtc0FycmF5LmhhcygndnVlJykpIHRoYXQuc2VhcmNoVXJsID0gJ3Z1ZT0nICsgcGFyYW1zQXJyYXkuZ2V0KCd2dWUnKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQkKCcjdnVlcycpLmZpbmQoJ2J1dHRvbltkYXRhLXZhbHVlXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5kYXRhKCd2YWx1ZScpID09IHBhcmFtc0FycmF5LmdldCgndnVlJykpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtLTEnKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLXByaW1hcnkgbS0xJylcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IgKGxldCB0YWJsZUhlYWRlciBvZiB0YWJsZUhlYWRlcnMpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly9oaWRlXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBoaWRlID0gcGFyYW1zQXJyYXkuZ2V0QWxsKCdoaWRlW10nKTtcclxuXHRcdFx0XHRcdGxldCBpbmRleCA9IGhpZGUuaW5kZXhPZih0YWJsZUhlYWRlci5pZCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmFIaWRlXHJcblx0XHRcdFx0XHRcdC50b2dnbGVDbGFzcygnYnRuLXByaW1hcnknLCAhKGluZGV4ID09IC0xKSlcclxuXHRcdFx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5JywgKGluZGV4ID09IC0xKSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNoeEhpZGUucHJvcCgnY2hlY2tlZCcsIChpbmRleCA9PSAtMSkpXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vaGVhZGVyc1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5lbXB0eSgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc0ZpbHRlcmVkID0gZmFsc2U7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZEFzYyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IHNlbGVjdCBvZiB0YWJsZUhlYWRlci5zZWxlY3RzKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAocGFyYW1zQXJyYXkuaGFzKHNlbGVjdC5uYW1lKSkge1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAocGFyYW1zQXJyYXkuZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZEFzYyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChwYXJhbXNBcnJheS5nZXQoJ3NvcnREZXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZERlc2MgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoKHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQpP2ljb24uZnVubmVsRmlsbDppY29uLmZ1bm5lbCk7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MpIHtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGljb24uYXJyb3dEb3duKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmlzU29ydGVkRGVzYykge1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoaWNvbi5hcnJvd1VwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL3Rib2R5XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgdmVyc2lvbiBvZiByZXN1bHQudmVyc2lvbnMpIHtcclxuXHRcdFx0XHRcdGxldCB0ciA9ICQoJyN0YWJsZSA+IHRib2R5JykuYXBwZW5kKGNyZWF0ZS50cikuY2hpbGRyZW4oKS5sYXN0KCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBkaXYgPSB0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgJ2NfJyArIHZlcnNpb24uaWQpXHJcblx0XHRcdFx0XHRcdC52YWwodmVyc2lvbi5pZClcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGxpbmVDaGVja2VkKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsICdjXycgKyB2ZXJzaW9uLmlkKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IHRhYmxlSGVhZGVyIG9mIHRhYmxlSGVhZGVycykge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0ZGF0YSA9IHZlcnNpb25bdGFibGVIZWFkZXIuaWRdO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNvbC5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIudGguc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdGlmICh0YWJsZUhlYWRlci5jb2wuYXR0cignY2xhc3MnKSA9PSAndHlwZS1zdGFuZGFyZCcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICgvXlstK10/WzAtOV0rJC8udGVzdChkYXRhKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndHlwZS1pbnRlZ2VyJztcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoL15bLStdP1swLTldKlxcXFwuP1swLTldKyQvLnRlc3QoZGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3R5cGUtZmxvYXQnO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3R5cGUtdGV4dCc7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICcnO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKGRhdGFDbGFzcylcclxuXHRcdFx0XHRcdFx0XHRcdC50ZXh0KGRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNvbC5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIudGguaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuLXN1Y2Nlc3Mgdy0xMDAnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXRvZ2dsZScsICdtb2RhbCcpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdGFyZ2V0JywgJyNtb2RhbCcpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdXJsJywgdmVyc2lvbi5kZXRhaWxVcmwpXHJcblx0XHRcdFx0XHRcdFx0LnRleHQodGV4dC5kZXRhaWxzKVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vcGFnaW5hdGlvblxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChyZXN1bHQucGFnZU1heCA+IDEpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCdtYi00Jyk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBwYWdlTWF4ID0gcmVzdWx0LnBhZ2VNYXg7XHJcblx0XHRcdFx0XHRsZXQgcGFnZSA9IHBhcmFtc0FycmF5LmdldCgncGFnZScpIHx8IDE7XHJcblx0XHRcdFx0XHRsZXQgcGFnZU1pbiA9IE1hdGgubWF4KDEsIHBhZ2UgLSAyKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dWwgPSAkKCcjcGFnaW5hdGlvbicpLmFwcGVuZChjcmVhdGUudWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnaW5hdGlvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IDEpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBNYXRoLm1heCgxLCBwYWdlIC0gMSkpXHJcblx0XHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpXHJcblx0XHRcdFx0XHRcdFx0XHQuaHRtbCgnJmxhcXVvOycpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IGk9MDsgaTw1OyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKHBhZ2VNYXggPiBpKSB7XHJcblx0XHRcdFx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSBwYWdlTWluICsgaSk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIHBhZ2VNaW4pXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50ZXh0KHBhZ2VNaW4gKyBpKVxyXG5cdFx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gcGFnZU1heCk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIE1hdGgubWluKHBhZ2VNYXgsIHBhZ2UgKyAxKSlcclxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdC5odG1sKCcmcmFxdW87JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyQoJ3RhYmxlJykuc3RpY2t5VGFibGVIZWFkZXJzKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcdFxyXG5cdH1cclxuXHJcbn07XHJcbiovXHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy8gdGFibGVIZWFkZXJcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlSGVhZGVyKHRoYXQpIHtcclxuXHRcclxuXHR2YXIgdGFibGVIZWFkZXIgPSB7XHJcblx0XHRjb2w6ICQodGhhdCkuY2xvc2VzdCgndGFibGUnKS5maW5kKCdjb2wnKS5lcSgkKHRoYXQpLmluZGV4KCkpLFxyXG5cdFx0dGg6ICQodGhhdCksXHJcblx0XHRpZDogJCh0aGF0KS5hdHRyKCdpZCcpLFxyXG5cdFx0dGl0bGU6ICQodGhhdCkuZGF0YSgndGl0bGUnKSxcclxuXHRcdHNvcnQ6ICQodGhhdCkuZGF0YSgnc29ydCcpLFxyXG5cdFx0aXNGaWx0ZXJlZDogZmFsc2UsXHJcblx0XHRpc1NvcnRlZEFzYzogZmFsc2UsXHJcblx0XHRpc1NvcnRlZERlc2M6IGZhbHNlLFxyXG5cdFx0c2VsZWN0czogW10sXHJcblx0fVxyXG5cdFxyXG5cdCQodGhhdCkuZmluZCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0dmFyIG11bHRpcGxlQXR0ciA9ICh0eXBlb2YgJCh0aGlzKS5hdHRyKCdtdWx0aXBsZScpICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmICQodGhpcykuYXR0cignbXVsdGlwbGUnKSAhPT0gZmFsc2UpO1xyXG5cdFx0dmFyIG5hbWUgPSAkKHRoaXMpLnByb3AoJ25hbWUnKSArICgobXVsdGlwbGVBdHRyKT8nW10nOicnKTtcclxuXHRcdFxyXG5cdFx0dmFyIHNlbGVjdCA9IHtcclxuXHRcdFx0XHRzbHQ6ICQodGhpcyksXHJcblx0XHRcdFx0aWQ6ICQodGhpcykucHJvcCgnaWQnKSxcclxuXHRcdFx0XHRuYW1lOiBuYW1lLFxyXG5cdFx0XHRcdG11bHRpcGxlOiBtdWx0aXBsZUF0dHIsXHJcblx0XHRcdFx0dGl0bGU6ICQodGhpcykuZGF0YSgndGl0bGUnKSxcclxuXHRcdFx0XHRvcHRpb25zOiBbXSxcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdCQodGhpcykuZmluZCgnb3B0aW9uJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0c2VsZWN0Lm9wdGlvbnMucHVzaCh7XHJcblx0XHRcdFx0dmFsdWU6ICQodGhpcykuYXR0cigndmFsdWUnKSxcclxuXHRcdFx0XHR0ZXh0OiAkKHRoaXMpLnRleHQoKSxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuc2VsZWN0cy5wdXNoKHNlbGVjdCk7XHJcblx0XHRcclxuXHR9KTtcclxuXHRcclxuXHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGgpIHtcclxuXHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAgPSB0YWJsZUhlYWRlci50aC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdidG4tZ3JvdXAgdy0xMDAnKVxyXG5cdFx0XHQuYXR0cigncm9sZScsICdncm91cCcpXHJcblx0XHRcdC5vbignaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYoZS5jbGlja0V2ZW50ICYmICQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0LnBhcmVudE5vZGUsIGUuY2xpY2tFdmVudC50YXJnZXQpKSB7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCd3LTEwMCcpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdC50ZXh0KHRhYmxlSGVhZGVyLnRpdGxlKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMgJiYgdGFibGVIZWFkZXIuc29ydCkge1xyXG5cdFx0XHRcdFx0aWYgKHVybFNlYXJjaC5nZXQoJ3NvcnRBc2MnKSA9PSB0YWJsZUhlYWRlci5zZWxlY3RzWzBdLm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydEFzYycpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0RGVzYycsIHRhYmxlSGVhZGVyLnNlbGVjdHNbMF0ubmFtZSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0QXNjJywgdGFibGVIZWFkZXIuc2VsZWN0c1swXS5uYW1lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcclxuXHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duID0gdGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cC5hcHBlbmQoY3JlYXRlLm1lbnVCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygncHgtMCcpXHJcblx0XHRcdC5jc3MoJ3dpZHRoJywgJzNlbScpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdC5hdHRyKCdpZCcsICdiXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0LmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ2Ryb3Bkb3duJylcclxuXHRcdFx0LmF0dHIoJ2FyaWEtaGFzcG9wdXAnLCB0cnVlKVxyXG5cdFx0XHQuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxyXG5cdFx0O1xyXG5cdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51ID0gdGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdkcm9wZG93bi1tZW51JylcclxuXHRcdFx0LmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsICdiXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnZC1mbGV4IGZsZXgtcm93JylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cC5vbignc2hvdy5icy5kcm9wZG93bicsIGNyZWF0ZU1lbnUpO1xyXG5cdFxyXG5cdH0gZWxzZSB7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duID0gdGFibGVIZWFkZXIudGguYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3ctMTAwJylcclxuXHRcdFx0LnRleHQodGFibGVIZWFkZXIudGl0bGUpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdilcclxuXHRcdDtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcclxuXHRcdGZvciAobGV0IHNlbGVjdCBvZiB0YWJsZUhlYWRlci5zZWxlY3RzKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRzZWxlY3QuZGl2Q29udGVudCA9IHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duTWVudS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ214LTEnKVxyXG5cdFx0XHRcdC5jc3MoJ21pbi13aWR0aCcsICcxNWVtJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHNlbGVjdC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRcdHNlbGVjdC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtY2VudGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLWRhcmsgcGItMiBweC0xJylcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChzZWxlY3QudGl0bGUpO1xyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2RmlsdGVyID0gc2VsZWN0LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtY2VudGVyIHAtMScpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdFx0XHRzZWxlY3QuYnRuU29ydERlc2MgPSBzZWxlY3QuZGl2RmlsdGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd1VwKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoKHVybFNlYXJjaC5nZXQoJ3NvcnREZXNjJykgPT0gc2VsZWN0Lm5hbWUpPydweC0yIGJ0bi1vdXRsaW5lLXByaW1hcnkgYmctZGFyayB0ZXh0LXdoaXRlJzoncHgtMiBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBzb3J0RGVzYylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdkZpbHRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LnRleHQodGV4dC5maWx0ZXIpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTMgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZpbHRlcilcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0XHRcdHNlbGVjdC5idG5Tb3J0QXNjID0gc2VsZWN0LmRpdkZpbHRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGljb24uYXJyb3dEb3duKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoKHVybFNlYXJjaC5nZXQoJ3NvcnRBc2MnKSA9PSBzZWxlY3QubmFtZSk/J3B4LTIgYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOidweC0yIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIHNvcnRBc2MpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZTZWFyY2ggPSBzZWxlY3QuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItZGFyayBwLTInKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2U2VhcmNoLmFwcGVuZChjcmVhdGUuaW5wdXQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHZhciBzZWFyY2hWYWx1ZSA9ICQodGhpcykudmFsKCkudG9Mb3dlckNhc2UoKVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHNlYXJjaFZhbHVlID09ICcnKSB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0LmRpdlNlbGVjdEFsbC5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb24uZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5jaHgucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0LmRpdlNlbGVjdEFsbC5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9uLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uZGl2LmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmRpdi5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5jaHgucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0c2VsZWN0LmRpdkxpc3QgPSBzZWxlY3QuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTIgJyArICgoc2VsZWN0Lm11bHRpcGxlKT8ncHQtMyc6J3B0LTEnKSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHNlbGVjdC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwgPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmNoeFNlbGVjdEFsbCA9IHNlbGVjdC5kaXZTZWxlY3RBbGwuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ19zZWxlY3RBbGwnKVxyXG5cdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHZhciBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfc2VsZWN0QWxsJylcclxuXHRcdFx0XHRcdC50ZXh0KHRleHQuc2VsZWN0QWxsKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0b3B0aW9uLmRpdiA9IHNlbGVjdC5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHQ7XHJcblxyXG5cdFx0XHRcdFx0b3B0aW9uLmNoeCA9IG9wdGlvbi5kaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdXJsU2VhcmNoLmdldChzZWxlY3QubmFtZSkuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGxldCBjaGVja2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0bGV0IHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCQob3B0aW9uLmNoeCkuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5jaHhTZWxlY3RBbGwucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5sYmwgPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LnRleHQob3B0aW9uLnRleHQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZVbmtub3duID0gc2VsZWN0LmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5jaHhVbmtub3duID0gc2VsZWN0LmRpdlVua25vd24uYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ19ub3RBcHBsaWNhYmxlJylcclxuXHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgIXVybFNlYXJjaC5oYXMoc2VsZWN0Lm5hbWUpKVxyXG5cdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHZhciBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZShzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2VW5rbm93bi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIHNlbGVjdC5uYW1lICsgJ19ub3RBcHBsaWNhYmxlJylcclxuXHRcdFx0XHRcdC50ZXh0KHRleHQubm90QXBwbGljYWJsZSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5kaXYgPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvcHRpb24uY2h4ID0gb3B0aW9uLmRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCB1cmxTZWFyY2guZ2V0KHNlbGVjdC5uYW1lKS5pbmNsdWRlcyhvcHRpb24udmFsdWUpKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0LmRpdkxpc3QuZmluZCgnaW5wdXQnKS5ub3QodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXNlbGVjdC5jaHhVbmtub3duLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbi5jaHguaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKHNlbGVjdC5uYW1lLCBvcHRpb24udmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5sYmwgPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LnRleHQob3B0aW9uLnRleHQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gc29ydEFzYygpIHtcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydEFzYycsIHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZmlsdGVyKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gZmlsdGVyKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdGlmICghc2VsZWN0LmNoeFNlbGVjdEFsbC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbi5jaHguaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKHNlbGVjdC5uYW1lLCBvcHRpb24udmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gc29ydERlc2MoKSB7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydEFzYycpO1xyXG5cdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0RGVzYycsIHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0XHRmaWx0ZXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiB0YWJsZUhlYWRlcjtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy8gZmlsbERpc3BsYXlcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGZpbGxEaXNwbGF5KCkge1xyXG5cdHZhciBjb2wgPSAkKCcjZGlzcGxheScpLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0LmFkZENsYXNzKCdyb3cgcHktMicpXHJcblx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnY29sJylcclxuXHQ7XHJcblx0XHJcblx0Zm9yIChsZXQgdGFibGVIZWFkZXIgb2YgdGFibGVIZWFkZXJzKSB7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmFIaWRlID0gY29sLmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5IGNvbC0yIG0tMSB0ZXh0LWxlZnQnKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuY2h4SGlkZS5wcm9wKCdjaGVja2VkJywgIXRhYmxlSGVhZGVyLmNoeEhpZGUuaXMoJzpjaGVja2VkJykpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCBoaWRlID0gdXJsU2VhcmNoLmdldCgnaGlkZVtdJyk7XHJcblx0XHRcdFx0bGV0IGluZGV4ID0gaGlkZS5pbmRleE9mKHRhYmxlSGVhZGVyLmlkKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuY2h4SGlkZS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0aWYgKGluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRcdFx0aGlkZS5zcGxpY2UoaW5kZXgsIDEpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXggPT0gLTEgJiYgdGFibGVIZWFkZXIuaWQpIHtcclxuXHRcdFx0XHRcdFx0aGlkZS5wdXNoKHRhYmxlSGVhZGVyLmlkKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnaGlkZVtdJyk7XHJcblx0XHRcdFx0aGlkZS5mb3JFYWNoKGUgPT4gdXJsU2VhcmNoLmFwcGVuZCgnaGlkZVtdJywgZSkpO1xyXG5cdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0bGV0IGRpdiA9IHRhYmxlSGVhZGVyLmFIaWRlLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuY2h4SGlkZSA9IGRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXR0cignaWQnLCAnaF8nICsgdGFibGVIZWFkZXIuaWQpXHJcblx0XHRcdC5vbignY2hhbmdlIGNsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmF0dHIoJ2ZvcicsICdoXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0LnRleHQodGFibGVIZWFkZXIudGl0bGUpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxuXHRcclxufVx0XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vLyBsaW5lQ2hlY2tlZFxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gbGluZUNoZWNrZWQoKSB7XHJcblx0XHJcblx0dmFyIGNoZWNrZWQgPSBmYWxzZTtcclxuXHR2YXIgdW5jaGVja2VkID0gZmFsc2U7XHJcblxyXG5cdCQoJ3Rib2R5JykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0aWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR1bmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdHVybFNlYXJjaC5kZWxldGUoJ2lkW10nKTtcclxuXHRpZiAoY2hlY2tlZCkge1xyXG5cdFx0JCgndGFibGUnKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoJCh0aGlzKS5wcm9wKCdpZCcpICE9ICdjaGVja19hbGwnICYmICQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKCdpZFtdJywgJCh0aGlzKS52YWwoKSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKCcjZG9jdW1lbnRfZWRpdCcpLnNob3coKTtcclxuXHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuc2hvdygpO1xyXG5cdFx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLnNob3coKTtcclxuXHRcdCQoJyN2ZXJzaW9uX21lbnUnKS5zaG93KCk7XHRcclxuXHR9IGVsc2UgaWYodW5jaGVja2VkKSB7XHJcblx0XHQkKCcjdmVyc2lvbicpLnZhbCgnJyk7XHJcblx0XHQkKCcjZG9jdW1lbnRfZWRpdCcpLmhpZGUoKTtcclxuXHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdFx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLmhpZGUoKTtcclxuXHRcdCQoJyN2ZXJzaW9uX21lbnUnKS5oaWRlKCk7XHRcclxuXHR9XHJcbn1cclxuXHJcbnZhciB1cmxTZWFyY2ggPSBuZXcgVXJsU2VhcmNoKCk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcclxuXHQkKCcjZm9ybScpLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdDtcclxuXHRcdCQoZXZlbnQudGFyZ2V0KS5maW5kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoJCh0aGlzKS52YWwoKS50b1N0cmluZygpICA9PSAnJykge1xyXG5cdFx0XHRcdCQodGhpcykuYXR0cignZGlzYWJsZWQnLCAnZGlzYWJsZWQnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcclxuXHRcclxuXHQkKCcjbW9kYWwnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGFqYXguc2V0KCcubW9kYWwtYm9keScsICQoZS5yZWxhdGVkVGFyZ2V0KS5kYXRhKCd1cmwnKSk7XHJcblx0fSk7XHJcblxyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9lZGl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfbW92ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3ZlcnNpb25fbmV3Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdmVyc2lvbl9lZGl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdmVyc2lvbl9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgdXJsU2VhcmNoLnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNjaGVja19hbGwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJ3Rib2R5JykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgJCgnI2NoZWNrX2FsbCcpLmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdH0pO1xyXG5cdFx0bGluZUNoZWNrZWQoKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCd0YWJsZScpLmZpbmQoJ3RoW2lkXVtkYXRhLXRpdGxlXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHR0YWJsZUhlYWRlcnMucHVzaChjcmVhdGVUYWJsZUhlYWRlcih0aGlzKSk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3Z1ZXMnKS5maW5kKCdidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gJ3Z1ZV9uZXcnKSB7XHJcblx0XHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgdXJsU2VhcmNoLnRvU3RyaW5nKCkpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dXJsU2VhcmNoLnNldCgndnVlJywgJCh0aGlzKS5kYXRhKCd2YWx1ZScpKTtcclxuXHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0XHJcblx0ZmlsbERpc3BsYXkoKTtcclxuXHR1cmxTZWFyY2guc2V0RnJvbVVybCh3aW5kb3cubG9jYXRpb24pO1xyXG5cdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9