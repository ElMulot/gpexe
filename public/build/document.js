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
// ajax
//---------------

var ajax = {
  fetch: function fetch(container) {
    var that = this;
    $(container).find('a[data-toggle="ajax"], button[data-toggle="ajax"]').not('[type="submit"]').each(function () {
      $(this).on('click', function (e) {
        if ($(this).parent().has('.active')) {
          $(this).parent().find('.active').removeClass('active');
          $(this).addClass('active');
        }

        var url = $(this).data('url');
        var target = $(this).data('target') || this;
        that.set(target, url);
      });

      if ($(this).hasClass('active')) {
        $(this).trigger('click');
      }
    });
    $(container).find('a[data-toggle="ajax"][type="submit"], button[data-toggle="ajax"][type="submit"]').each(function () {
      if ($form = $(this).parents('form').first()) {
        $form.on('submit', function (e) {
          return false;
        });
      }

      $(this).on('click', function (e) {
        var url = $(this).data('url');
        var target = $(this).data('target') || this;

        if ($form.find('input[type="file"]').length) {
          var method = 'POST';
          var data = new FormData($form.get(0));
        } else {
          var method = $form.attr('method') || 'GET';
          var data = $form.serializeArray();
        }

        that.set(target, url, method, data);
        return false;
      });
    });
    $(container).find('div[data-toggle="ajax"]').each(function (e) {
      var target = $(this).data('target') || this;
      var url = $(this).data('url');
      that.set(target, url);
    });
  },
  set: function set(target, url) {
    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
    var data = arguments.length > 3 ? arguments[3] : undefined;

    if (target && url) {
      $(target).empty().append(icon.loading);
      var that = this;
      $.ajax({
        url: url,
        type: method,
        data: data,
        contentType: data.constructor === FormData ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
        processData: data.constructor !== FormData,
        success: function success(result) {
          $(target).empty().html(result);
          that.fetch(target);
        }
      });
    }
  }
}; //---------------
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

},[["./assets/js/document.js","runtime","vendors~app~automation~console~document~form~login","vendors~automation~console~document~form","vendors~console~document~form","vendors~app~document","vendors~document~form","vendors~document","app~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwidGFibGVIZWFkZXJzIiwiYWpheCIsImZldGNoIiwiY29udGFpbmVyIiwidGhhdCIsImZpbmQiLCJub3QiLCJlYWNoIiwib24iLCJlIiwicGFyZW50IiwiaGFzIiwicmVtb3ZlQ2xhc3MiLCJhZGRDbGFzcyIsInVybCIsImRhdGEiLCJ0YXJnZXQiLCJzZXQiLCJoYXNDbGFzcyIsInRyaWdnZXIiLCIkZm9ybSIsInBhcmVudHMiLCJmaXJzdCIsImxlbmd0aCIsIm1ldGhvZCIsIkZvcm1EYXRhIiwiZ2V0IiwiYXR0ciIsInNlcmlhbGl6ZUFycmF5IiwiZW1wdHkiLCJhcHBlbmQiLCJpY29uIiwibG9hZGluZyIsInR5cGUiLCJjb250ZW50VHlwZSIsImNvbnN0cnVjdG9yIiwicHJvY2Vzc0RhdGEiLCJzdWNjZXNzIiwicmVzdWx0IiwiaHRtbCIsIlVybFNlYXJjaCIsIl9wYXJhbXNBcnJheSIsInByb3RvdHlwZSIsImtleSIsImV4ZWMiLCJnZXRBbGwiLCJ2YWx1ZSIsInNldEZyb21VcmwiLCJwYXJhbXNBcnJheSIsInRvU3RyaW5nIiwidXJsU2VhcmNoIiwiaW5zZXJ0QWZ0ZXIiLCJzZWFyY2hVcmwiLCJwYXJhbSIsInF1ZXJ5IiwibmV4dCIsInJlbW92ZSIsInNob3ciLCJ0YWJsZUhlYWRlciIsImhpZGUiLCJpbmRleCIsImluZGV4T2YiLCJpZCIsImFIaWRlIiwidG9nZ2xlQ2xhc3MiLCJjaHhIaWRlIiwicHJvcCIsImJ0bkRyb3Bkb3duIiwiaXNGaWx0ZXJlZCIsImlzU29ydGVkQXNjIiwiaXNTb3J0ZWREZXNjIiwic2VsZWN0cyIsInNlbGVjdCIsIm5hbWUiLCJmdW5uZWxGaWxsIiwiZnVubmVsIiwiYXJyb3dEb3duIiwiYXJyb3dVcCIsInZlcnNpb25zIiwidmVyc2lvbiIsInRyIiwiY3JlYXRlIiwiY2hpbGRyZW4iLCJsYXN0IiwiZGl2IiwidGQiLCJjaGVja2JveCIsInZhbCIsImxpbmVDaGVja2VkIiwibGFiZWwiLCJ1bmRlZmluZWQiLCJjb2wiLCJ0aCIsInRlc3QiLCJkYXRhQ2xhc3MiLCJ0ZXh0Iiwic21hbGxCdXR0b24iLCJkZXRhaWxVcmwiLCJkZXRhaWxzIiwicGFnZU1heCIsInBhZ2UiLCJwYWdlTWluIiwiTWF0aCIsIm1heCIsInVsIiwibGkiLCJhIiwic3BhbiIsImkiLCJtaW4iLCJjcmVhdGVUYWJsZUhlYWRlciIsImNsb3Nlc3QiLCJlcSIsInRpdGxlIiwic29ydCIsIm11bHRpcGxlQXR0ciIsInNsdCIsIm11bHRpcGxlIiwib3B0aW9ucyIsInB1c2giLCJkaXZEcm9wZG93bkdyb3VwIiwiY2xpY2tFdmVudCIsImNvbnRhaW5zIiwicmVsYXRlZFRhcmdldCIsInBhcmVudE5vZGUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdkRyb3Bkb3duTWVudSIsIm1lbnVCdXR0b24iLCJjc3MiLCJjcmVhdGVNZW51IiwiZGl2Q29udGVudCIsImRpdkZpbHRlciIsImJ0blNvcnREZXNjIiwic29ydERlc2MiLCJmaWx0ZXIiLCJidG5Tb3J0QXNjIiwic29ydEFzYyIsImRpdlNlYXJjaCIsImlucHV0Iiwic2VhcmNoVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImRpdlNlbGVjdEFsbCIsIm9wdGlvbiIsImNoeCIsImRpdkxpc3QiLCJjaHhTZWxlY3RBbGwiLCJjaGVja2VkIiwiaXMiLCJzZWxlY3RBbGwiLCJpbmNsdWRlcyIsInVuY2hlY2tlZCIsImxibCIsImRpdlVua25vd24iLCJjaHhVbmtub3duIiwiZHJvcGRvd24iLCJub3RBcHBsaWNhYmxlIiwiZmlsbERpc3BsYXkiLCJzcGxpY2UiLCJmb3JFYWNoIiwiZG9jdW1lbnQiLCJyZWFkeSIsImV2ZW50IiwibG9jYXRpb24iLCJhc3NpZ24iLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7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LyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJyZXF1aXJlKCcuLi9qcy9hcHAuanMnKTtcclxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5jb25zdCBwb3BwZXIgPSByZXF1aXJlKCdwb3BwZXIuanMnKTtcclxucmVxdWlyZSgnc3RpY2t5LXRhYmxlLWhlYWRlcnMnKTtcclxucmVxdWlyZSgnLi4vY3NzL2RvY3VtZW50LnNjc3MnKTtcclxuY29uc3QgVVJMU2VhcmNoUGFyYW1zID0gcmVxdWlyZSgnQHVuZ2FwL3VybC1zZWFyY2gtcGFyYW1zL2NqcycpO1xyXG5cclxuXHJcblxyXG52YXIgdGFibGVIZWFkZXJzID0gW107XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vLyBhamF4XHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG52YXIgYWpheCA9IHtcclxuXHRcdFxyXG5cdGZldGNoOiBmdW5jdGlvbihjb250YWluZXIpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQkKGNvbnRhaW5lcikuZmluZCgnYVtkYXRhLXRvZ2dsZT1cImFqYXhcIl0sIGJ1dHRvbltkYXRhLXRvZ2dsZT1cImFqYXhcIl0nKS5ub3QoJ1t0eXBlPVwic3VibWl0XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLnBhcmVudCgpLmhhcygnLmFjdGl2ZScpKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IHVybCA9ICQodGhpcykuZGF0YSgndXJsJyk7XHJcblx0XHRcdFx0bGV0IHRhcmdldCA9ICQodGhpcykuZGF0YSgndGFyZ2V0JykgfHwgdGhpcztcclxuXHRcdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdhW2RhdGEtdG9nZ2xlPVwiYWpheFwiXVt0eXBlPVwic3VibWl0XCJdLCBidXR0b25bZGF0YS10b2dnbGU9XCJhamF4XCJdW3R5cGU9XCJzdWJtaXRcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCRmb3JtID0gJCh0aGlzKS5wYXJlbnRzKCdmb3JtJykuZmlyc3QoKSkge1xyXG5cdFx0XHRcdCRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xyXG5cdFx0XHRcdGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpIHx8IHRoaXM7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHR2YXIgbWV0aG9kID0gJ1BPU1QnO1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm0uZ2V0KDApKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dmFyIG1ldGhvZCA9ICRmb3JtLmF0dHIoJ21ldGhvZCcpIHx8ICdHRVQnO1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSAkZm9ybS5zZXJpYWxpemVBcnJheSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCwgbWV0aG9kLCBkYXRhKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKGNvbnRhaW5lcikuZmluZCgnZGl2W2RhdGEtdG9nZ2xlPVwiYWpheFwiXScpLmVhY2goZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHRhcmdldCA9ICQodGhpcykuZGF0YSgndGFyZ2V0JykgfHwgdGhpcztcclxuXHRcdFx0bGV0IHVybCA9ICQodGhpcykuZGF0YSgndXJsJyk7XHJcblx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsKTtcclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH0sXHJcblx0XHRcclxuXHRzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHVybCwgbWV0aG9kPSdHRVQnLCBkYXRhKSB7XHJcblx0XHRcclxuXHRcdGlmICh0YXJnZXQgJiYgdXJsKSB7XHJcblx0XHRcdCQodGFyZ2V0KVxyXG5cdFx0XHRcdC5lbXB0eSgpXHJcblx0XHRcdFx0LmFwcGVuZChpY29uLmxvYWRpbmcpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcclxuXHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHR1cmwgOiB1cmwsXHJcblx0XHRcdFx0dHlwZTogbWV0aG9kLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdFx0Y29udGVudFR5cGU6IChkYXRhLmNvbnN0cnVjdG9yID09PSBGb3JtRGF0YSk/ZmFsc2U6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcsXHJcblx0XHRcdFx0cHJvY2Vzc0RhdGE6IChkYXRhLmNvbnN0cnVjdG9yICE9PSBGb3JtRGF0YSksXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0XHQkKHRhcmdldClcclxuXHRcdFx0XHRcdFx0LmVtcHR5KClcclxuXHRcdFx0XHRcdFx0Lmh0bWwocmVzdWx0KTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGhhdC5mZXRjaCh0YXJnZXQpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vVXJsU2VhcmNoXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBVcmxTZWFyY2ggKCkge1xyXG5cdHRoaXMuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG59XHJcblxyXG5VcmxTZWFyY2gucHJvdG90eXBlID0ge1xyXG5cclxuXHRoYXM6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmhhcyhrZXkpO1xyXG5cdH0sXHJcblx0XHJcblx0Z2V0OiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdGlmICgvXFxTK1xcW1xcXS9nLmV4ZWMoa2V5KSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGFyYW1zQXJyYXkuZ2V0QWxsKGtleSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGFyYW1zQXJyYXkuZ2V0KGtleSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHRcdGlmIChrZXkgPT0gJ3Z1ZScpIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsndnVlJzogdmFsdWV9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5LnNldChrZXksIHZhbHVlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdGFwcGVuZDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG5cdFx0aWYgKGtleSA9PSAndnVlJykge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoeyd2dWUnOiB2YWx1ZX0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkuYXBwZW5kKGtleSwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0ZGVsZXRlOiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdHRoaXMuX3BhcmFtc0FycmF5LmRlbGV0ZShrZXkpO1xyXG5cdH0sXHJcblx0XHJcblx0c2V0RnJvbVVybDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGxldCBwYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXModmFsdWUpO1xyXG5cdFx0aWYgKHBhcmFtc0FycmF5LmhhcygndnVlJykpIHtcclxuXHRcdFx0dGhpcy5zZXQoJ3Z1ZScsIHBhcmFtc0FycmF5LmdldCgndnVlJykpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBwYXJhbXNBcnJheTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcclxuXHRcdGxldCB1cmxTZWFyY2ggPSB0aGlzLl9wYXJhbXNBcnJheS50b1N0cmluZygpO1xyXG5cdFx0cmV0dXJuICh1cmxTZWFyY2gpPyc/JyArIHVybFNlYXJjaDonJztcclxuXHR9LFxyXG5cdFxyXG5cdGZldGNoOiBmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0JCgnI3RhYmxlID4gdGJvZHknKS5lbXB0eSgpO1xyXG5cdFx0JChpY29uLmxvYWRpbmcpLmluc2VydEFmdGVyKCcjdGFibGUnKTtcclxuXHRcdFxyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR1cmwgOiAkKCcjdGFibGUnKS5kYXRhKCd1cmwnKSArIHRoYXQudG9TdHJpbmcoKSxcclxuXHRcdFx0dHlwZTogJ0dFVCcsXHJcblx0XHRcdFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgc2VhcmNoVXJsID0gJC5wYXJhbShyZXN1bHQucXVlcnkpO1xyXG5cdFx0XHRcdHRoYXQuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2hVcmwpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCQoJyN0YWJsZScpLm5leHQoKS5yZW1vdmUoKTtcclxuXHRcdFx0XHQkKCcjdGFibGUnKS5zaG93KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly92dWVcclxuXHRcdFx0XHQkKCcjdnVlcycpLmZpbmQoJ2J1dHRvbltkYXRhLXZhbHVlXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5kYXRhKCd2YWx1ZScpID09IHRoYXQuZ2V0KCd2dWUnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tb3V0bGluZS1wcmltYXJ5IG0tMScpXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tcHJpbWFyeSBtLTEnKVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAobGV0IHRhYmxlSGVhZGVyIG9mIHRhYmxlSGVhZGVycykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL2hpZGVcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGhpZGUgPSB0aGF0LmdldCgnaGlkZVtdJyk7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBoaWRlLmluZGV4T2YodGFibGVIZWFkZXIuaWQpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5hSGlkZVxyXG5cdFx0XHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ2J0bi1wcmltYXJ5JywgIShpbmRleCA9PSAtMSkpXHJcblx0XHRcdFx0XHRcdC50b2dnbGVDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeScsIChpbmRleCA9PSAtMSkpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5jaHhIaWRlLnByb3AoJ2NoZWNrZWQnLCAoaW5kZXggPT0gLTEpKVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL2hlYWRlcnNcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uZW1wdHkoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNGaWx0ZXJlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzU29ydGVkRGVzYyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCBzZWxlY3Qgb2YgdGFibGVIZWFkZXIuc2VsZWN0cykge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuaGFzKHNlbGVjdC5uYW1lKSkge1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAodGhhdC5nZXQoJ3NvcnRBc2MnKSA9PSBzZWxlY3QubmFtZSkge1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzU29ydGVkQXNjID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHRoYXQuZ2V0KCdzb3J0RGVzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKCh0YWJsZUhlYWRlci5pc0ZpbHRlcmVkKT9pY29uLmZ1bm5lbEZpbGw6aWNvbi5mdW5uZWwpO1x0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmlzU29ydGVkQXNjKSB7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmFwcGVuZChpY29uLmFycm93RG93bik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICh0YWJsZUhlYWRlci5pc1NvcnRlZERlc2MpIHtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGljb24uYXJyb3dVcCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly90Ym9keVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAobGV0IHZlcnNpb24gb2YgcmVzdWx0LnZlcnNpb25zKSB7XHJcblx0XHRcdFx0XHRsZXQgdHIgPSAkKCcjdGFibGUgPiB0Ym9keScpLmFwcGVuZChjcmVhdGUudHIpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZGl2ID0gdHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsICdjXycgKyB2ZXJzaW9uLmlkKVxyXG5cdFx0XHRcdFx0XHQudmFsKHZlcnNpb24uaWQpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBsaW5lQ2hlY2tlZClcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCAnY18nICsgdmVyc2lvbi5pZClcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCB0YWJsZUhlYWRlciBvZiB0YWJsZUhlYWRlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGRhdGEgPSB2ZXJzaW9uW3RhYmxlSGVhZGVyLmlkXTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5jb2wuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLnRoLnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuY29sLmF0dHIoJ2NsYXNzJykgPT0gJ3R5cGUtc3RhbmRhcmQnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoL15bLStdP1swLTldKyQvLnRlc3QoZGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3R5cGUtaW50ZWdlcic7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKC9eWy0rXT9bMC05XSpcXFxcLj9bMC05XSskLy50ZXN0KGRhdGEpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0eXBlLWZsb2F0JztcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0eXBlLXRleHQnO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAnJztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcyhkYXRhQ2xhc3MpXHJcblx0XHRcdFx0XHRcdFx0XHQudGV4dChkYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5jb2wuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLnRoLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2J0bi1zdWNjZXNzIHctMTAwJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS10b2dnbGUnLCAnbW9kYWwnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXRhcmdldCcsICcjbW9kYWwnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXVybCcsIHZlcnNpb24uZGV0YWlsVXJsKVxyXG5cdFx0XHRcdFx0XHRcdC50ZXh0KHRleHQuZGV0YWlscylcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL3BhZ2luYXRpb25cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAocmVzdWx0LnBhZ2VNYXggPiAxKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5hZGRDbGFzcygnbWItNCcpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgcGFnZU1heCA9IHJlc3VsdC5wYWdlTWF4O1xyXG5cdFx0XHRcdFx0bGV0IHBhZ2UgPSB0aGF0LmdldCgncGFnZScpIHx8IDE7XHJcblx0XHRcdFx0XHRsZXQgcGFnZU1pbiA9IE1hdGgubWF4KDEsIHBhZ2UgLSAyKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dWwgPSAkKCcjcGFnaW5hdGlvbicpLmFwcGVuZChjcmVhdGUudWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnaW5hdGlvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IDEpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBNYXRoLm1heCgxLCBwYWdlIC0gMSkpXHJcblx0XHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpXHJcblx0XHRcdFx0XHRcdFx0XHQuaHRtbCgnJmxhcXVvOycpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IGk9MDsgaTw1OyBpKyspIHtcclxuXHRcdFx0XHRcdFx0aWYgKHBhZ2VNYXggPiBpKSB7XHJcblx0XHRcdFx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSBwYWdlTWluICsgaSk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIHBhZ2VNaW4pXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50ZXh0KHBhZ2VNaW4gKyBpKVxyXG5cdFx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gcGFnZU1heCk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIE1hdGgubWluKHBhZ2VNYXgsIHBhZ2UgKyAxKSlcclxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdC5odG1sKCcmcmFxdW87JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvLyQoJ3RhYmxlJykuc3RpY2t5VGFibGVIZWFkZXJzKCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcdFxyXG5cdH0sXHRcclxufVxyXG5cclxuLypcclxudmFyIGRhdGFzID0ge1xyXG5cdFxyXG5cdGdldCBzZWFyY2hVcmwoKSB7XHJcblx0XHRcclxuXHRcdGxldCB1cmwgPSB7fTtcclxuXHRcdFxyXG5cdFx0aWYgKHBhcmFtc0FycmF5LmhhcygnaWRbXScpKSB7XHJcblx0XHRcdHVybC5pZCA9IHBhcmFtc0FycmF5LmdldEFsbCgnaWRbXScpO1x0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGxldCBfcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHRoaXMuX3NlYXJjaFVybCk7XHJcblx0XHRcclxuXHRcdGlmIChfcGFyYW1zQXJyYXkuaGFzKCd2dWUnKSkge1xyXG5cdFx0XHR1cmwudnVlID0gX3BhcmFtc0FycmF5LmdldCgndnVlJyk7XHJcblx0XHRcdHJldHVybiAkLnBhcmFtKHVybCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gcGFyYW1zQXJyYXkudG9TdHJpbmcoKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdHNldCBzZWFyY2hVcmwodmFsdWUpIHtcclxuXHRcdFxyXG5cdFx0aWYgKHIgPSAvXFw/KFxcUyopL2cuZXhlYyh2YWx1ZSkpIHsgLy9lbmzDqHZlIGxlID9cclxuXHRcdFx0dGhpcy5fc2VhcmNoVXJsID0gclsxXTtcclxuXHRcdH0gZWxzZSBpZiAociA9IC8oXFxTKz1cXFMrKSsvZy5leGVjKHZhbHVlKSkge1xyXG5cdFx0XHR0aGlzLl9zZWFyY2hVcmwgPSByWzFdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cGFyYW1zQXJyYXkuZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0dGhpcy5fc2VhcmNoVXJsID0gcGFyYW1zQXJyYXkudG9TdHJpbmcoKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdGZldGNoOiBmdW5jdGlvbigpIHtcclxuXHRcclxuXHRcdCQoJyN0YWJsZSA+IHRib2R5JykuZW1wdHkoKTtcclxuXHRcdCQoaWNvbi5sb2FkaW5nKS5pbnNlcnRBZnRlcignI3RhYmxlJyk7XHJcblx0XHRcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFxyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsIDogJCgnI3RhYmxlJykuZGF0YSgndXJsJykgKyAnPycgKyB0aGlzLl9zZWFyY2hVcmwsXHJcblx0XHRcdHR5cGU6ICdHRVQnLFxyXG5cdFx0XHRcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0cGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCQucGFyYW0ocmVzdWx0LnF1ZXJ5KSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0JCgnI3RhYmxlJykubmV4dCgpLnJlbW92ZSgpO1xyXG5cdFx0XHRcdCQoJyN0YWJsZScpLnNob3coKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL3Z1ZVxyXG5cdFx0XHRcdGlmIChwYXJhbXNBcnJheS5oYXMoJ3Z1ZScpKSB0aGF0LnNlYXJjaFVybCA9ICd2dWU9JyArIHBhcmFtc0FycmF5LmdldCgndnVlJyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0JCgnI3Z1ZXMnKS5maW5kKCdidXR0b25bZGF0YS12YWx1ZV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuZGF0YSgndmFsdWUnKSA9PSBwYXJhbXNBcnJheS5nZXQoJ3Z1ZScpKSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgbS0xJylcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1wcmltYXJ5IG0tMScpXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgdGFibGVIZWFkZXIgb2YgdGFibGVIZWFkZXJzKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vaGlkZVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgaGlkZSA9IHBhcmFtc0FycmF5LmdldEFsbCgnaGlkZVtdJyk7XHJcblx0XHRcdFx0XHRsZXQgaW5kZXggPSBoaWRlLmluZGV4T2YodGFibGVIZWFkZXIuaWQpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5hSGlkZVxyXG5cdFx0XHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ2J0bi1wcmltYXJ5JywgIShpbmRleCA9PSAtMSkpXHJcblx0XHRcdFx0XHRcdC50b2dnbGVDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeScsIChpbmRleCA9PSAtMSkpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5jaHhIaWRlLnByb3AoJ2NoZWNrZWQnLCAoaW5kZXggPT0gLTEpKVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL2hlYWRlcnNcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uZW1wdHkoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNGaWx0ZXJlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MgPSBmYWxzZTtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzU29ydGVkRGVzYyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCBzZWxlY3Qgb2YgdGFibGVIZWFkZXIuc2VsZWN0cykge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHBhcmFtc0FycmF5LmhhcyhzZWxlY3QubmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc0ZpbHRlcmVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHBhcmFtc0FycmF5LmdldCgnc29ydEFzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAocGFyYW1zQXJyYXkuZ2V0KCdzb3J0RGVzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKCh0YWJsZUhlYWRlci5pc0ZpbHRlcmVkKT9pY29uLmZ1bm5lbEZpbGw6aWNvbi5mdW5uZWwpO1x0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmlzU29ydGVkQXNjKSB7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmFwcGVuZChpY29uLmFycm93RG93bik7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICh0YWJsZUhlYWRlci5pc1NvcnRlZERlc2MpIHtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGljb24uYXJyb3dVcCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly90Ym9keVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAobGV0IHZlcnNpb24gb2YgcmVzdWx0LnZlcnNpb25zKSB7XHJcblx0XHRcdFx0XHRsZXQgdHIgPSAkKCcjdGFibGUgPiB0Ym9keScpLmFwcGVuZChjcmVhdGUudHIpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZGl2ID0gdHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsICdjXycgKyB2ZXJzaW9uLmlkKVxyXG5cdFx0XHRcdFx0XHQudmFsKHZlcnNpb24uaWQpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBsaW5lQ2hlY2tlZClcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCAnY18nICsgdmVyc2lvbi5pZClcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCB0YWJsZUhlYWRlciBvZiB0YWJsZUhlYWRlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGRhdGEgPSB2ZXJzaW9uW3RhYmxlSGVhZGVyLmlkXTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5jb2wuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLnRoLnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuY29sLmF0dHIoJ2NsYXNzJykgPT0gJ3R5cGUtc3RhbmRhcmQnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoL15bLStdP1swLTldKyQvLnRlc3QoZGF0YSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3R5cGUtaW50ZWdlcic7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKC9eWy0rXT9bMC05XSpcXFxcLj9bMC05XSskLy50ZXN0KGRhdGEpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0eXBlLWZsb2F0JztcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0eXBlLXRleHQnO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAnJztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0dHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcyhkYXRhQ2xhc3MpXHJcblx0XHRcdFx0XHRcdFx0XHQudGV4dChkYXRhKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5jb2wuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLnRoLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2J0bi1zdWNjZXNzIHctMTAwJylcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS10b2dnbGUnLCAnbW9kYWwnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXRhcmdldCcsICcjbW9kYWwnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXVybCcsIHZlcnNpb24uZGV0YWlsVXJsKVxyXG5cdFx0XHRcdFx0XHRcdC50ZXh0KHRleHQuZGV0YWlscylcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL3BhZ2luYXRpb25cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAocmVzdWx0LnBhZ2VNYXggPiAxKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5hZGRDbGFzcygnbWItNCcpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgcGFnZU1heCA9IHJlc3VsdC5wYWdlTWF4O1xyXG5cdFx0XHRcdFx0bGV0IHBhZ2UgPSBwYXJhbXNBcnJheS5nZXQoJ3BhZ2UnKSB8fCAxO1xyXG5cdFx0XHRcdFx0bGV0IHBhZ2VNaW4gPSBNYXRoLm1heCgxLCBwYWdlIC0gMik7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHVsID0gJCgnI3BhZ2luYXRpb24nKS5hcHBlbmQoY3JlYXRlLnVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2luYXRpb24ganVzdGlmeS1jb250ZW50LWNlbnRlcicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSAxKT8nIGRpc2FibGVkJzonJykpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgTWF0aC5tYXgoMSwgcGFnZSAtIDEpKVxyXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0Lmh0bWwoJyZsYXF1bzsnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCBpPTA7IGk8NTsgaSsrKSB7XHJcblx0XHRcdFx0XHRcdGlmIChwYWdlTWF4ID4gaSkge1xyXG5cdFx0XHRcdFx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gcGFnZU1pbiArIGkpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBwYWdlTWluKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQudGV4dChwYWdlTWluICsgaSlcclxuXHRcdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IHBhZ2VNYXgpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBNYXRoLm1pbihwYWdlTWF4LCBwYWdlICsgMSkpXHJcblx0XHRcdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpXHJcblx0XHRcdFx0XHRcdFx0XHQuaHRtbCgnJnJhcXVvOycpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly8kKCd0YWJsZScpLnN0aWNreVRhYmxlSGVhZGVycygpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHRcclxuXHR9XHJcblxyXG59O1xyXG4qL1xyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vIHRhYmxlSGVhZGVyXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYWJsZUhlYWRlcih0aGF0KSB7XHJcblx0XHJcblx0dmFyIHRhYmxlSGVhZGVyID0ge1xyXG5cdFx0Y29sOiAkKHRoYXQpLmNsb3Nlc3QoJ3RhYmxlJykuZmluZCgnY29sJykuZXEoJCh0aGF0KS5pbmRleCgpKSxcclxuXHRcdHRoOiAkKHRoYXQpLFxyXG5cdFx0aWQ6ICQodGhhdCkuYXR0cignaWQnKSxcclxuXHRcdHRpdGxlOiAkKHRoYXQpLmRhdGEoJ3RpdGxlJyksXHJcblx0XHRzb3J0OiAkKHRoYXQpLmRhdGEoJ3NvcnQnKSxcclxuXHRcdGlzRmlsdGVyZWQ6IGZhbHNlLFxyXG5cdFx0aXNTb3J0ZWRBc2M6IGZhbHNlLFxyXG5cdFx0aXNTb3J0ZWREZXNjOiBmYWxzZSxcclxuXHRcdHNlbGVjdHM6IFtdLFxyXG5cdH1cclxuXHRcclxuXHQkKHRoYXQpLmZpbmQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdHZhciBtdWx0aXBsZUF0dHIgPSAodHlwZW9mICQodGhpcykuYXR0cignbXVsdGlwbGUnKSAhPT0gdHlwZW9mIHVuZGVmaW5lZCAmJiAkKHRoaXMpLmF0dHIoJ211bHRpcGxlJykgIT09IGZhbHNlKTtcclxuXHRcdHZhciBuYW1lID0gJCh0aGlzKS5wcm9wKCduYW1lJykgKyAoKG11bHRpcGxlQXR0cik/J1tdJzonJyk7XHJcblx0XHRcclxuXHRcdHZhciBzZWxlY3QgPSB7XHJcblx0XHRcdFx0c2x0OiAkKHRoaXMpLFxyXG5cdFx0XHRcdGlkOiAkKHRoaXMpLnByb3AoJ2lkJyksXHJcblx0XHRcdFx0bmFtZTogbmFtZSxcclxuXHRcdFx0XHRtdWx0aXBsZTogbXVsdGlwbGVBdHRyLFxyXG5cdFx0XHRcdHRpdGxlOiAkKHRoaXMpLmRhdGEoJ3RpdGxlJyksXHJcblx0XHRcdFx0b3B0aW9uczogW10sXHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQkKHRoaXMpLmZpbmQoJ29wdGlvbicpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHNlbGVjdC5vcHRpb25zLnB1c2goe1xyXG5cdFx0XHRcdHZhbHVlOiAkKHRoaXMpLmF0dHIoJ3ZhbHVlJyksXHJcblx0XHRcdFx0dGV4dDogJCh0aGlzKS50ZXh0KCksXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLnNlbGVjdHMucHVzaChzZWxlY3QpO1xyXG5cdFx0XHJcblx0fSk7XHJcblx0XHJcblx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoKSB7XHJcblx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwID0gdGFibGVIZWFkZXIudGguYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuLWdyb3VwIHctMTAwJylcclxuXHRcdFx0LmF0dHIoJ3JvbGUnLCAnZ3JvdXAnKVxyXG5cdFx0XHQub24oJ2hpZGUuYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKGUuY2xpY2tFdmVudCAmJiAkLmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldC5wYXJlbnROb2RlLCBlLmNsaWNrRXZlbnQudGFyZ2V0KSkge1xyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duTWVudS5lbXB0eSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cC5hcHBlbmQoY3JlYXRlLm1lbnVCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygndy0xMDAnKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSlcclxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzICYmIHRhYmxlSGVhZGVyLnNvcnQpIHtcclxuXHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gdGFibGVIZWFkZXIuc2VsZWN0c1swXS5uYW1lKSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydERlc2MnLCB0YWJsZUhlYWRlci5zZWxlY3RzWzBdLm5hbWUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydEFzYycsIHRhYmxlSGVhZGVyLnNlbGVjdHNbMF0ubmFtZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHJcblx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93biA9IHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3B4LTAnKVxyXG5cdFx0XHQuY3NzKCd3aWR0aCcsICczZW0nKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHQuYXR0cignaWQnLCAnYl8nICsgdGFibGVIZWFkZXIuaWQpXHJcblx0XHRcdC5hdHRyKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpXHJcblx0XHRcdC5hdHRyKCdhcmlhLWhhc3BvcHVwJywgdHJ1ZSlcclxuXHRcdFx0LmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcclxuXHRcdDtcclxuXHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duTWVudSA9IHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnZHJvcGRvd24tbWVudScpXHJcblx0XHRcdC5hdHRyKCdhcmlhLWxhYmVsbGVkYnknLCAnYl8nICsgdGFibGVIZWFkZXIuaWQpXHJcblx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2QtZmxleCBmbGV4LXJvdycpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBjcmVhdGVNZW51KTtcclxuXHRcclxuXHR9IGVsc2Uge1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93biA9IHRhYmxlSGVhZGVyLnRoLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCd3LTEwMCcpXHJcblx0XHRcdC50ZXh0KHRhYmxlSGVhZGVyLnRpdGxlKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpXHJcblx0XHQ7XHJcblx0XHRcclxuXHR9XHJcblxyXG5cdGZ1bmN0aW9uIGNyZWF0ZU1lbnUoKSB7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duTWVudS5lbXB0eSgpO1xyXG5cdFx0XHJcblx0XHRmb3IgKGxldCBzZWxlY3Qgb2YgdGFibGVIZWFkZXIuc2VsZWN0cykge1xyXG5cdFx0XHRcclxuXHRcdFx0c2VsZWN0LmRpdkNvbnRlbnQgPSB0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdteC0xJylcclxuXHRcdFx0XHQuY3NzKCdtaW4td2lkdGgnLCAnMTVlbScpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChzZWxlY3QubXVsdGlwbGUpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0XHRzZWxlY3QuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHBiLTIgcHgtMScpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoc2VsZWN0LnRpdGxlKTtcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdkZpbHRlciA9IHNlbGVjdC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBwLTEnKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRcdFx0c2VsZWN0LmJ0blNvcnREZXNjID0gc2VsZWN0LmRpdkZpbHRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGljb24uYXJyb3dVcClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IHNlbGVjdC5uYW1lKT8ncHgtMiBidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J3B4LTIgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgc29ydERlc2MpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZGaWx0ZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC50ZXh0KHRleHQuZmlsdGVyKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdweC0zIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHRcdC5vbignY2xpY2snLCBmaWx0ZXIpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdFx0XHRzZWxlY3QuYnRuU29ydEFzYyA9IHNlbGVjdC5kaXZGaWx0ZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChpY29uLmFycm93RG93bilcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWUpPydweC0yIGJ0bi1vdXRsaW5lLXByaW1hcnkgYmctZGFyayB0ZXh0LXdoaXRlJzoncHgtMiBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBzb3J0QXNjKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2U2VhcmNoID0gc2VsZWN0LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtY2VudGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLWRhcmsgcC0yJylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdlNlYXJjaC5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgc2VhcmNoVmFsdWUgPSAkKHRoaXMpLnZhbCgpLnRvTG93ZXJDYXNlKClcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChzZWFyY2hWYWx1ZSA9PSAnJykge1xyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmRpdi5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbi50ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hWYWx1ZSkgPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmRpdi5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5jaHgucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHNlbGVjdC5kaXZMaXN0ID0gc2VsZWN0LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdweC0yICcgKyAoKHNlbGVjdC5tdWx0aXBsZSk/J3B0LTMnOidwdC0xJykpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChzZWxlY3QubXVsdGlwbGUpIHtcclxuXHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsID0gc2VsZWN0LmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5jaHhTZWxlY3RBbGwgPSBzZWxlY3QuZGl2U2VsZWN0QWxsLmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfc2VsZWN0QWxsJylcclxuXHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR2YXIgY2hlY2tlZCA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1x0XHJcblx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsLmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnX3NlbGVjdEFsbCcpXHJcblx0XHRcdFx0XHQudGV4dCh0ZXh0LnNlbGVjdEFsbClcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5kaXYgPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cclxuXHRcdFx0XHRcdG9wdGlvbi5jaHggPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ18nICsgb3B0aW9uLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsIHVybFNlYXJjaC5nZXQoc2VsZWN0Lm5hbWUpLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRsZXQgY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdGxldCB1bmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICgkKG9wdGlvbi5jaHgpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKGNoZWNrZWQgJiYgdW5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LmNoeFNlbGVjdEFsbC5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LmNoeFNlbGVjdEFsbC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvcHRpb24ubGJsID0gb3B0aW9uLmRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdC50ZXh0KG9wdGlvbi50ZXh0KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2VW5rbm93biA9IHNlbGVjdC5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuY2h4VW5rbm93biA9IHNlbGVjdC5kaXZVbmtub3duLmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfbm90QXBwbGljYWJsZScpXHJcblx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsICF1cmxTZWFyY2guaGFzKHNlbGVjdC5uYW1lKSlcclxuXHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR2YXIgY2hlY2tlZCA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1x0XHJcblx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uZHJvcGRvd24oJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdlVua25vd24uYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfbm90QXBwbGljYWJsZScpXHJcblx0XHRcdFx0XHQudGV4dCh0ZXh0Lm5vdEFwcGxpY2FibGUpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvcHRpb24uZGl2ID0gc2VsZWN0LmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0b3B0aW9uLmNoeCA9IG9wdGlvbi5kaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdXJsU2VhcmNoLmdldChzZWxlY3QubmFtZSkuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdC5kaXZMaXN0LmZpbmQoJ2lucHV0Jykubm90KHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZShzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFzZWxlY3QuY2h4VW5rbm93bi5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb24uY2h4LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZChzZWxlY3QubmFtZSwgb3B0aW9uLnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvcHRpb24ubGJsID0gb3B0aW9uLmRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdC50ZXh0KG9wdGlvbi50ZXh0KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHRcdGZ1bmN0aW9uIHNvcnRBc2MoKSB7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnRBc2MnLCBzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZpbHRlcigpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdGZ1bmN0aW9uIGZpbHRlcigpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHRpZiAoIXNlbGVjdC5jaHhTZWxlY3RBbGwuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdGlmIChvcHRpb24uY2h4LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZChzZWxlY3QubmFtZSwgb3B0aW9uLnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdGZ1bmN0aW9uIHNvcnREZXNjKCkge1xyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSBzZWxlY3QubmFtZSkge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydERlc2MnLCBzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0fVx0XHJcblx0XHRcdFx0ZmlsdGVyKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gdGFibGVIZWFkZXI7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGZpbGxEaXNwbGF5XHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBmaWxsRGlzcGxheSgpIHtcclxuXHR2YXIgY29sID0gJCgnI2Rpc3BsYXknKS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdC5hZGRDbGFzcygncm93IHB5LTInKVxyXG5cdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbCcpXHJcblx0O1xyXG5cdFxyXG5cdGZvciAobGV0IHRhYmxlSGVhZGVyIG9mIHRhYmxlSGVhZGVycykge1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5hSGlkZSA9IGNvbC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeSBjb2wtMiBtLTEgdGV4dC1sZWZ0JylcclxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmNoeEhpZGUucHJvcCgnY2hlY2tlZCcsICF0YWJsZUhlYWRlci5jaHhIaWRlLmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgaGlkZSA9IHVybFNlYXJjaC5nZXQoJ2hpZGVbXScpO1xyXG5cdFx0XHRcdGxldCBpbmRleCA9IGhpZGUuaW5kZXhPZih0YWJsZUhlYWRlci5pZCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmNoeEhpZGUuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdGlmIChpbmRleCA+IC0xKSB7XHJcblx0XHRcdFx0XHRcdGhpZGUuc3BsaWNlKGluZGV4LCAxKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0aWYgKGluZGV4ID09IC0xICYmIHRhYmxlSGVhZGVyLmlkKSB7XHJcblx0XHRcdFx0XHRcdGhpZGUucHVzaCh0YWJsZUhlYWRlci5pZCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ2hpZGVbXScpO1xyXG5cdFx0XHRcdGhpZGUuZm9yRWFjaChlID0+IHVybFNlYXJjaC5hcHBlbmQoJ2hpZGVbXScsIGUpKTtcclxuXHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGxldCBkaXYgPSB0YWJsZUhlYWRlci5hSGlkZS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmNoeEhpZGUgPSBkaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmF0dHIoJ2lkJywgJ2hfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHQub24oJ2NoYW5nZSBjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hdHRyKCdmb3InLCAnaF8nICsgdGFibGVIZWFkZXIuaWQpXHJcblx0XHRcdC50ZXh0KHRhYmxlSGVhZGVyLnRpdGxlKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRcclxuXHR9XHJcblx0XHJcbn1cdFxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy8gbGluZUNoZWNrZWRcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGxpbmVDaGVja2VkKCkge1xyXG5cdFxyXG5cdHZhciBjaGVja2VkID0gZmFsc2U7XHJcblx0dmFyIHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuXHQkKCd0Ym9keScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdGNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dW5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKGNoZWNrZWQgJiYgdW5jaGVja2VkKSB7XHJcblx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdpbmRldGVybWluYXRlJywgdHJ1ZSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHR1cmxTZWFyY2guZGVsZXRlKCdpZFtdJyk7XHJcblx0aWYgKGNoZWNrZWQpIHtcclxuXHRcdCQoJ3RhYmxlJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCQodGhpcykucHJvcCgnaWQnKSAhPSAnY2hlY2tfYWxsJyAmJiAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZCgnaWRbXScsICQodGhpcykudmFsKCkpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5zaG93KCk7XHJcblx0XHQkKCcjZG9jdW1lbnRfbW92ZScpLnNob3coKTtcclxuXHRcdCQoJyNkb2N1bWVudF9kZWxldGUnKS5zaG93KCk7XHJcblx0XHQkKCcjdmVyc2lvbl9tZW51Jykuc2hvdygpO1x0XHJcblx0fSBlbHNlIGlmKHVuY2hlY2tlZCkge1xyXG5cdFx0JCgnI3ZlcnNpb24nKS52YWwoJycpO1xyXG5cdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5oaWRlKCk7XHJcblx0XHQkKCcjZG9jdW1lbnRfbW92ZScpLmhpZGUoKTtcclxuXHRcdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0XHQkKCcjdmVyc2lvbl9tZW51JykuaGlkZSgpO1x0XHJcblx0fVxyXG59XHJcblxyXG52YXIgdXJsU2VhcmNoID0gbmV3IFVybFNlYXJjaCgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0JCgnI2Zvcm0nKS5vbignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQ7XHJcblx0XHQkKGV2ZW50LnRhcmdldCkuZmluZCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCQodGhpcykudmFsKCkudG9TdHJpbmcoKSAgPT0gJycpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfZWRpdCcpLmhpZGUoKTtcclxuXHQkKCcjZG9jdW1lbnRfbW92ZScpLmhpZGUoKTtcclxuXHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdCQoJyN2ZXJzaW9uX21lbnUnKS5oaWRlKCk7XHJcblx0XHJcblx0JCgnI21vZGFsJykub24oJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRhamF4LnNldCgnLm1vZGFsLWJvZHknLCAkKGUucmVsYXRlZFRhcmdldCkuZGF0YSgndXJsJykpO1xyXG5cdH0pO1xyXG5cclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfZWRpdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI2RvY3VtZW50X21vdmUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgdXJsU2VhcmNoLnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgdXJsU2VhcmNoLnRvU3RyaW5nKCkpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2ZXJzaW9uX25ldycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3ZlcnNpb25fZWRpdCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9TdHJpbmcoKSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3ZlcnNpb25fZGVsZXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1N0cmluZygpKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjY2hlY2tfYWxsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCd0Ym9keScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsICQoJyNjaGVja19hbGwnKS5pcygnOmNoZWNrZWQnKSk7XHJcblx0XHR9KTtcclxuXHRcdGxpbmVDaGVja2VkKCk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgndGFibGUnKS5maW5kKCd0aFtpZF1bZGF0YS10aXRsZV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0dGFibGVIZWFkZXJzLnB1c2goY3JlYXRlVGFibGVIZWFkZXIodGhpcykpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2dWVzJykuZmluZCgnYnV0dG9uJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoJCh0aGlzKS5hdHRyKCdpZCcpID09ICd2dWVfbmV3Jykge1xyXG5cdFx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1N0cmluZygpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHVybFNlYXJjaC5zZXQoJ3Z1ZScsICQodGhpcykuZGF0YSgndmFsdWUnKSk7XHJcblx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdFxyXG5cdGZpbGxEaXNwbGF5KCk7XHJcblx0dXJsU2VhcmNoLnNldEZyb21Vcmwod2luZG93LmxvY2F0aW9uKTtcclxuXHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==