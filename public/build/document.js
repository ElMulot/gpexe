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

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

__webpack_require__(/*! sticky-table-headers */ "./node_modules/sticky-table-headers/js/jquery.stickytableheaders.js");

__webpack_require__(/*! ../css/document.scss */ "./assets/css/document.scss");

var URLSearchParams = __webpack_require__(/*! @ungap/url-search-params/cjs */ "./node_modules/@ungap/url-search-params/cjs/index.js");

$(document).ready(function () {
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
  };
  var paramsArray = new URLSearchParams();
  var tableHeaders = [];
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
  /*
  $('#modal').on('show.bs.modal', function(event) {
  	
  	$('.modal-body')
  		.empty()
  		.append(icon.loading);
  
  	$.ajax({
  		url : $(event.relatedTarget).data('url'),
  		type: 'GET',
  		
  		success: function(result) {
  			$('.modal-body').empty();
  			$('.modal-body').html(result);
  			
  			$('#modal').find('#version_tabs a').each(function() {
  		    	$(this).on('click', function(event) {
  		    		getDetail(event.target);
  		    	});
  		    	
  		    	if ($(this).hasClass('active')) {
  		    		$(this).trigger('click');
  		    	}
  		    });
  			
  		},
  	});
  });
  */

  $('#modal').on('show.bs.modal', function (e) {
    ajax.set('.modal-body', $(e.relatedTarget).data('url'));
  });
  $('#document_edit').on('click', function () {
    location.assign($(this).data('url') + '?' + datas.searchUrl);
    return false;
  });
  $('#document_move').on('click', function (event) {
    location.assign($(this).data('url') + '?' + datas.searchUrl);
    return false;
  });
  $('#document_delete').on('click', function (event) {
    location.assign($(this).data('url') + '?' + datas.searchUrl);
    return false;
  });
  $('#version_new').on('click', function (event) {
    location.assign($(this).data('url') + '?' + datas.searchUrl);
    return false;
  });
  $('#version_edit').on('click', function (event) {
    location.assign($(this).data('url') + '?' + datas.searchUrl);
    return false;
  });
  $('#version_delete').on('click', function (event) {
    location.assign($(this).data('url') + '?' + datas.searchUrl);
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
      var search = datas.searchUrl;
      if (search) window.location = $(this).data('url') + '?' + search;
    } else {
      datas.searchUrl = 'vue=' + $(this).data('value');
      datas.fetch();
    }
  }); //---------------
  // fillDisplay
  //---------------

  function fillDisplay() {
    var col = $('#display').append(create.div).children().last().addClass('row py-2').append(create.div).children().last().addClass('col');

    var _loop = function _loop() {
      var tableHeader = _tableHeaders[_i];
      tableHeader.aHide = col.append(create.a).children().last().addClass('btn-outline-primary col-2 m-1 text-left').on('click', function () {
        tableHeader.chxHide.prop('checked', !tableHeader.chxHide.is(':checked'));
        var hide = paramsArray.getAll('hide[]');
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

        paramsArray["delete"]('hide[]');
        hide.forEach(function (e) {
          return paramsArray.append('hide[]', e);
        });
        datas.searchUrl = '';
        datas.fetch();
        return false;
      });
      var div = tableHeader.aHide.append(create.div).children().last().addClass('custom-control custom-checkbox');
      tableHeader.chxHide = div.append(create.checkbox).children().last().attr('id', 'h_' + tableHeader.id).on('change click', function () {
        return false;
      });
      div.append(create.label).children().last().attr('for', 'h_' + tableHeader.id).text(tableHeader.title);
    };

    for (var _i = 0, _tableHeaders = tableHeaders; _i < _tableHeaders.length; _i++) {
      _loop();
    }
  } //---------------
  // datas
  //---------------


  var datas = {
    get searchUrl() {
      var url = {};

      if (paramsArray.has('id[]')) {
        url.id = paramsArray.getAll('id[]');
      }

      var _paramsArray = new URLSearchParams(this._searchUrl);

      if (_paramsArray.has('vue')) {
        url.vue = _paramsArray.get('vue');
        return $.param(url);
      } else {
        return paramsArray.toString();
      }
    },

    set searchUrl(value) {
      if (r = /\?(\S*)/g.exec(value)) {
        this._searchUrl = r[1];
      } else if (r = /(\S+=\S+)+/g.exec(value)) {
        this._searchUrl = r[1];
      } else {
        paramsArray["delete"]('vue');
        this._searchUrl = paramsArray.toString();
      }
    },

    fetch: function fetch() {
      $('#table > tbody').empty();
      $(icon.loading).insertAfter('#table');
      var that = this;
      $.ajax({
        url: $('#table').data('url') + '?' + this._searchUrl,
        type: 'GET',
        success: function success(result) {
          paramsArray = new URLSearchParams($.param(result.query));
          $('#table').next().remove();
          $('#table').show(); //vue

          if (paramsArray.has('vue')) that.searchUrl = 'vue=' + paramsArray.get('vue');
          $('#vues').find('button[data-value]').each(function () {
            if ($(this).data('value') == paramsArray.get('vue')) {
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
              var hide = paramsArray.getAll('hide[]');
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
            var page = paramsArray.get('page') || 1;
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
  // getDetail
  //---------------

  /*
  function getDetail(that) {
  	$(that).parent().find('a.active').removeClass('active');
  	$(that).addClass('active');
  	
  	$('#version')
  		.empty()
  		.append(icon.loading)
  		;
  	
  	$.ajax({
  		url : $(that).data('url'),
  		type: 'GET',
  		
  		success: function(result) {
  			$('#version').empty();
  			$('#version').html(result);
  			$('#review_tabs').find('a').each(function() {
  				$(this).on('click', function(event) {
  					getReview(event.target);
  				});
  				
  				if ($(this).hasClass('active')) {
  					$(this).trigger('click');
  				}
  			});
  			
  
  		},
  	});
  }
  
  
  //---------------
  // getReview
  //---------------
  
  function getReview(that) {
  	$(that).parent().find('a.active').removeClass('active');
  	$(that).addClass('active');
  	
  	var url = $(that).data('url');
  	var method = $('form[name="review"]').attr('method') || 'GET';
  	var data = $('form[name="review"]').serializeArray()
  	
  	$('#review')
  		.empty()
  		.append(icon.loading);
  	
  	$.ajax({
  		url : url,
  		type: method,
  		data: data,
  		
  		success: function(result) {
  			$('#review').empty();
  			$('#review').html(result);
  			$('#review').find('button').on('click', function() {
  				getReview(this)
  			});
  
  		},
  	});
  }
  */
  //---------------
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
          if (paramsArray.get('sortAsc') == tableHeader.selects[0].name) {
            paramsArray["delete"]('sortAsc');
            paramsArray.set('sortDesc', tableHeader.selects[0].name);
          } else {
            paramsArray["delete"]('sortDesc');
            paramsArray.set('sortAsc', tableHeader.selects[0].name);
          }

          datas.searchUrl = '';
          datas.fetch();
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
        var _loop2 = function _loop2() {
          var select = _step5.value;
          select.divContent = tableHeader.divDropdownMenu.append(create.div).children().last().addClass('mx-1').css('min-width', '15em');

          if (select.multiple) {
            if (tableHeader.selects.length > 1) {
              select.divContent.append(create.div).children().last().addClass('text-center border-bottom border-dark pb-2 px-1').append(select.title);
              ;
            }

            select.divFilter = select.divContent.append(create.div).children().last().addClass('text-center p-1');

            if (tableHeader.selects.length == 1) {
              select.btnSortDesc = select.divFilter.append(create.smallButton).children().last().append(icon.arrowUp).addClass(paramsArray.get('sortDesc') == select.name ? 'px-2 btn-outline-primary bg-dark text-white' : 'px-2 btn-primary').on('click', sortDesc);
            }

            select.divFilter.append(create.smallButton).children().last().text(text.filter).addClass('px-3 btn-primary').on('click', filter);

            if (tableHeader.selects.length == 1) {
              select.btnSortAsc = select.divFilter.append(create.smallButton).children().last().append(icon.arrowDown).addClass(paramsArray.get('sortAsc') == select.name ? 'px-2 btn-outline-primary bg-dark text-white' : 'px-2 btn-primary').on('click', sortAsc);
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
                option.chx = option.div.append(create.checkbox).children().last().attr('id', select.name + '_' + option.value).attr('checked', paramsArray.getAll(select.name).includes(option.value)).on('click', function () {
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
            select.chxUnknown = select.divUnknown.append(create.checkbox).children().last().attr('id', select.name + '_notApplicable').attr('checked', !paramsArray.has(select.name)).on('change', function () {
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

              paramsArray["delete"](select.name);
              tableHeader.btnDropdown.dropdown('hide');
              datas.searchUrl = '';
              datas.fetch();
            });
            select.divUnknown.append(create.label).children().last().attr('for', select.name + '_notApplicable').text(text.notApplicable);

            var _iterator12 = _createForOfIteratorHelper(select.options),
                _step12;

            try {
              for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _option4 = _step12.value;
                _option4.div = select.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
                _option4.chx = _option4.div.append(create.checkbox).children().last().attr('id', select.name + '_' + _option4.value).attr('checked', paramsArray.getAll(select.name).includes(_option4.value)).on('click', function () {
                  select.divList.find('input').not(this).prop('checked', false);
                  paramsArray["delete"](select.name);

                  if (!select.chxUnknown.is(':checked')) {
                    var _iterator13 = _createForOfIteratorHelper(select.options),
                        _step13;

                    try {
                      for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                        var _option5 = _step13.value;

                        if (_option5.chx.is(':checked')) {
                          paramsArray.append(select.name, _option5.value);
                        }
                      }
                    } catch (err) {
                      _iterator13.e(err);
                    } finally {
                      _iterator13.f();
                    }
                  }

                  tableHeader.btnDropdown.dropdown('hide');
                  datas.searchUrl = '';
                  datas.fetch();
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

            if (!select.chxSelectAll.is(':checked')) {
              var _iterator14 = _createForOfIteratorHelper(select.options),
                  _step14;

              try {
                for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                  var _option6 = _step14.value;

                  if (_option6.chx.is(':checked')) {
                    paramsArray.append(select.name, _option6.value);
                  }
                }
              } catch (err) {
                _iterator14.e(err);
              } finally {
                _iterator14.f();
              }
            }

            tableHeader.btnDropdown.dropdown('hide');
            datas.searchUrl = '';
            datas.fetch();
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

        for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator5.e(err);
      } finally {
        _iterator5.f();
      }
    }

    return tableHeader;
  }

  fillDisplay();
  datas.searchUrl = window.location;
  datas.fetch();
});
var create = {
  div: function div() {
    return $(document.createElement('div'));
  },
  a: function a() {
    return $(document.createElement('a')).addClass('btn btn-sm text-nowrap');
  },
  span: function span() {
    return $(document.createElement('span'));
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
    return $(document.createElement('button')).addClass('btn btn-sm mx-1 text-nowrap');
  },
  tr: function tr() {
    return $(document.createElement('tr'));
  },
  td: function td() {
    return $(document.createElement('td'));
  },
  ul: function ul() {
    return $(document.createElement('ul'));
  },
  li: function li() {
    return $(document.createElement('li'));
  }
};
var text = {
  noneSelected: 'None selected',
  multipleSeparator: ', ',
  selectAll: 'Select all',
  notApplicable: 'n/a',
  filter: 'Filter',
  loading: 'Loading...',
  details: 'Details'
};
var icon = {
  arrowUp: '<svg class="bi bi-arrow-bar-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 5.854a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L8 3.207l2.646 2.647a.5.5 0 00.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 10a.5.5 0 00.5-.5V3a.5.5 0 00-1 0v6.5a.5.5 0 00.5.5zm-4.8 1.6c0-.22.18-.4.4-.4h8.8a.4.4 0 010 .8H3.6a.4.4 0 01-.4-.4z" clip-rule="evenodd"/>' + '</svg>',
  arrowDown: '<svg class="bi bi-arrow-bar-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 10.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L8 12.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 6a.5.5 0 01.5.5V13a.5.5 0 01-1 0V6.5A.5.5 0 018 6zM2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>' + '</svg>',
  funnel: '<svg class="bi bi-funnel" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clip-rule="evenodd"/>' + '</svg>',
  funnelFill: '<svg class="bi bi-funnel-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path d="M2 3.5v-2h12v2l-4.5 5v5l-3 1v-6L2 3.5z"/>' + '<path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clip-rule="evenodd"/>' + '</svg>',
  loading: '<div class="d-flex justify-content-center">' + '<div class="spinner-border" role="status">' + '<span class="sr-only">' + text.loading + '</span>' + '</div>' + '</div>'
};

/***/ })

},[["./assets/js/document.js","runtime","vendors~app~automation~console~document~form~login","vendors~automation~console~document~form","vendors~console~document~form","vendors~app~document","vendors~document~form","vendors~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwiZG9jdW1lbnQiLCJyZWFkeSIsImFqYXgiLCJmZXRjaCIsImNvbnRhaW5lciIsInRoYXQiLCJmaW5kIiwibm90IiwiZWFjaCIsIm9uIiwiZSIsInBhcmVudCIsImhhcyIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJ1cmwiLCJkYXRhIiwidGFyZ2V0Iiwic2V0IiwiaGFzQ2xhc3MiLCJ0cmlnZ2VyIiwiJGZvcm0iLCJwYXJlbnRzIiwiZmlyc3QiLCJsZW5ndGgiLCJtZXRob2QiLCJGb3JtRGF0YSIsImdldCIsImF0dHIiLCJzZXJpYWxpemVBcnJheSIsImVtcHR5IiwiYXBwZW5kIiwiaWNvbiIsImxvYWRpbmciLCJ0eXBlIiwiY29udGVudFR5cGUiLCJjb25zdHJ1Y3RvciIsInByb2Nlc3NEYXRhIiwic3VjY2VzcyIsInJlc3VsdCIsImh0bWwiLCJwYXJhbXNBcnJheSIsInRhYmxlSGVhZGVycyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJ2YWwiLCJ0b1N0cmluZyIsImhpZGUiLCJyZWxhdGVkVGFyZ2V0IiwibG9jYXRpb24iLCJhc3NpZ24iLCJkYXRhcyIsInNlYXJjaFVybCIsInByb3AiLCJpcyIsImxpbmVDaGVja2VkIiwicHVzaCIsImNyZWF0ZVRhYmxlSGVhZGVyIiwic2VhcmNoIiwid2luZG93IiwiZmlsbERpc3BsYXkiLCJjb2wiLCJjcmVhdGUiLCJkaXYiLCJjaGlsZHJlbiIsImxhc3QiLCJ0YWJsZUhlYWRlciIsImFIaWRlIiwiYSIsImNoeEhpZGUiLCJnZXRBbGwiLCJpbmRleCIsImluZGV4T2YiLCJpZCIsInNwbGljZSIsImZvckVhY2giLCJjaGVja2JveCIsImxhYmVsIiwidGV4dCIsInRpdGxlIiwiX3BhcmFtc0FycmF5IiwiX3NlYXJjaFVybCIsInZ1ZSIsInBhcmFtIiwidmFsdWUiLCJyIiwiZXhlYyIsImluc2VydEFmdGVyIiwicXVlcnkiLCJuZXh0IiwicmVtb3ZlIiwic2hvdyIsInRvZ2dsZUNsYXNzIiwiYnRuRHJvcGRvd24iLCJpc0ZpbHRlcmVkIiwiaXNTb3J0ZWRBc2MiLCJpc1NvcnRlZERlc2MiLCJzZWxlY3RzIiwic2VsZWN0IiwibmFtZSIsImZ1bm5lbEZpbGwiLCJmdW5uZWwiLCJhcnJvd0Rvd24iLCJhcnJvd1VwIiwidmVyc2lvbnMiLCJ2ZXJzaW9uIiwidHIiLCJ0ZCIsInVuZGVmaW5lZCIsInRoIiwidGVzdCIsImRhdGFDbGFzcyIsInNtYWxsQnV0dG9uIiwiZGV0YWlsVXJsIiwiZGV0YWlscyIsInBhZ2VNYXgiLCJwYWdlIiwicGFnZU1pbiIsIk1hdGgiLCJtYXgiLCJ1bCIsImxpIiwic3BhbiIsImkiLCJtaW4iLCJjaGVja2VkIiwidW5jaGVja2VkIiwiY2xvc2VzdCIsImVxIiwic29ydCIsIm11bHRpcGxlQXR0ciIsInNsdCIsIm11bHRpcGxlIiwib3B0aW9ucyIsImRpdkRyb3Bkb3duR3JvdXAiLCJjbGlja0V2ZW50IiwiY29udGFpbnMiLCJwYXJlbnROb2RlIiwiZGl2RHJvcGRvd25NZW51IiwibWVudUJ1dHRvbiIsImNzcyIsImNyZWF0ZU1lbnUiLCJkaXZDb250ZW50IiwiZGl2RmlsdGVyIiwiYnRuU29ydERlc2MiLCJzb3J0RGVzYyIsImZpbHRlciIsImJ0blNvcnRBc2MiLCJzb3J0QXNjIiwiZGl2U2VhcmNoIiwiaW5wdXQiLCJzZWFyY2hWYWx1ZSIsInRvTG93ZXJDYXNlIiwiZGl2U2VsZWN0QWxsIiwib3B0aW9uIiwiY2h4IiwiZGl2TGlzdCIsImNoeFNlbGVjdEFsbCIsInNlbGVjdEFsbCIsImluY2x1ZGVzIiwibGJsIiwiZGl2VW5rbm93biIsImNoeFVua25vd24iLCJkcm9wZG93biIsIm5vdEFwcGxpY2FibGUiLCJjcmVhdGVFbGVtZW50Iiwibm9uZVNlbGVjdGVk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bEMsR0FFNEMsU0FGNUMsR0FHQyxRQUhELEdBSUE7QUE3QlMsQ0FBWCxDIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5jb25zdCBwb3BwZXIgPSByZXF1aXJlKCdwb3BwZXIuanMnKTtcclxucmVxdWlyZSgnc3RpY2t5LXRhYmxlLWhlYWRlcnMnKTtcclxucmVxdWlyZSgnLi4vY3NzL2RvY3VtZW50LnNjc3MnKTtcclxuY29uc3QgVVJMU2VhcmNoUGFyYW1zID0gcmVxdWlyZSgnQHVuZ2FwL3VybC1zZWFyY2gtcGFyYW1zL2NqcycpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0bGV0IGFqYXggPSB7XHJcblx0XHRcclxuXHRcdGZldGNoOiBmdW5jdGlvbihjb250YWluZXIpIHtcclxuXHRcdFx0XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHJcblx0XHRcdCQoY29udGFpbmVyKS5maW5kKCdhW2RhdGEtdG9nZ2xlPVwiYWpheFwiXSwgYnV0dG9uW2RhdGEtdG9nZ2xlPVwiYWpheFwiXScpLm5vdCgnW3R5cGU9XCJzdWJtaXRcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5wYXJlbnQoKS5oYXMoJy5hY3RpdmUnKSkge1xyXG5cdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0XHRcdGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpIHx8IHRoaXM7XHJcblx0XHRcdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHRcdCQodGhpcykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0JChjb250YWluZXIpLmZpbmQoJ2FbZGF0YS10b2dnbGU9XCJhamF4XCJdW3R5cGU9XCJzdWJtaXRcIl0sIGJ1dHRvbltkYXRhLXRvZ2dsZT1cImFqYXhcIl1bdHlwZT1cInN1Ym1pdFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCRmb3JtID0gJCh0aGlzKS5wYXJlbnRzKCdmb3JtJykuZmlyc3QoKSkge1xyXG5cdFx0XHRcdFx0JGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0XHRcdGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpIHx8IHRoaXM7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICgkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgbWV0aG9kID0gJ1BPU1QnO1xyXG5cdFx0XHRcdFx0XHR2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybS5nZXQoMCkpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dmFyIG1ldGhvZCA9ICRmb3JtLmF0dHIoJ21ldGhvZCcpIHx8ICdHRVQnO1xyXG5cdFx0XHRcdFx0XHR2YXIgZGF0YSA9ICRmb3JtLnNlcmlhbGl6ZUFycmF5KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsLCBtZXRob2QsIGRhdGEpO1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0JChjb250YWluZXIpLmZpbmQoJ2RpdltkYXRhLXRvZ2dsZT1cImFqYXhcIl0nKS5lYWNoKGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCB0aGlzO1xyXG5cdFx0XHRcdGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xyXG5cdFx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0fSxcclxuXHRcdFx0XHJcblx0XHRzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHVybCwgbWV0aG9kPSdHRVQnLCBkYXRhKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAodGFyZ2V0ICYmIHVybCkge1xyXG5cdFx0XHRcdCQodGFyZ2V0KVxyXG5cdFx0XHRcdFx0LmVtcHR5KClcclxuXHRcdFx0XHRcdC5hcHBlbmQoaWNvbi5sb2FkaW5nKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHRcdHVybCA6IHVybCxcclxuXHRcdFx0XHRcdHR5cGU6IG1ldGhvZCxcclxuXHRcdFx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdFx0XHRjb250ZW50VHlwZTogKGRhdGEuY29uc3RydWN0b3IgPT09IEZvcm1EYXRhKT9mYWxzZTonYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04JyxcclxuXHRcdFx0XHRcdHByb2Nlc3NEYXRhOiAoZGF0YS5jb25zdHJ1Y3RvciAhPT0gRm9ybURhdGEpLFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuXHRcdFx0XHRcdFx0JCh0YXJnZXQpXHJcblx0XHRcdFx0XHRcdFx0LmVtcHR5KClcclxuXHRcdFx0XHRcdFx0XHQuaHRtbChyZXN1bHQpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dGhhdC5mZXRjaCh0YXJnZXQpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHZhciBwYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuXHR2YXIgdGFibGVIZWFkZXJzID0gW107XHJcblx0XHJcblx0JCgnI2Zvcm0nKS5vbignc3VibWl0JywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFxyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQ7XHJcblx0XHQkKGV2ZW50LnRhcmdldCkuZmluZCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCQodGhpcykudmFsKCkudG9TdHJpbmcoKSAgPT0gJycpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2Rpc2FibGVkJywgJ2Rpc2FibGVkJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfZWRpdCcpLmhpZGUoKTtcclxuXHQkKCcjZG9jdW1lbnRfbW92ZScpLmhpZGUoKTtcclxuXHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdCQoJyN2ZXJzaW9uX21lbnUnKS5oaWRlKCk7XHJcblx0XHJcblx0LypcclxuXHQkKCcjbW9kYWwnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRcclxuXHRcdCQoJy5tb2RhbC1ib2R5JylcclxuXHRcdFx0LmVtcHR5KClcclxuXHRcdFx0LmFwcGVuZChpY29uLmxvYWRpbmcpO1xyXG5cdFxyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsIDogJChldmVudC5yZWxhdGVkVGFyZ2V0KS5kYXRhKCd1cmwnKSxcclxuXHRcdFx0dHlwZTogJ0dFVCcsXHJcblx0XHRcdFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuXHRcdFx0XHQkKCcubW9kYWwtYm9keScpLmVtcHR5KCk7XHJcblx0XHRcdFx0JCgnLm1vZGFsLWJvZHknKS5odG1sKHJlc3VsdCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0JCgnI21vZGFsJykuZmluZCgnI3ZlcnNpb25fdGFicyBhJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0ICAgIFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHQgICAgXHRcdGdldERldGFpbChldmVudC50YXJnZXQpO1xyXG5cdFx0XHQgICAgXHR9KTtcclxuXHRcdFx0ICAgIFx0XHJcblx0XHRcdCAgICBcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHQgICAgXHRcdCQodGhpcykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0ICAgIFx0fVxyXG5cdFx0XHQgICAgfSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0sXHJcblx0XHR9KTtcclxuXHR9KTtcclxuXHQqL1xyXG5cdFxyXG5cdCQoJyNtb2RhbCcpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0YWpheC5zZXQoJy5tb2RhbC1ib2R5JywgJChlLnJlbGF0ZWRUYXJnZXQpLmRhdGEoJ3VybCcpKTtcclxuXHR9KTtcclxuXHJcblx0XHJcblx0JCgnI2RvY3VtZW50X2VkaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgJz8nICsgZGF0YXMuc2VhcmNoVXJsKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfbW92ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArICc/JyArIGRhdGFzLnNlYXJjaFVybCk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRsb2NhdGlvbi5hc3NpZ24oJCh0aGlzKS5kYXRhKCd1cmwnKSArICc/JyArIGRhdGFzLnNlYXJjaFVybCk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3ZlcnNpb25fbmV3Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgJz8nICsgZGF0YXMuc2VhcmNoVXJsKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdmVyc2lvbl9lZGl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGxvY2F0aW9uLmFzc2lnbigkKHRoaXMpLmRhdGEoJ3VybCcpICsgJz8nICsgZGF0YXMuc2VhcmNoVXJsKTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdmVyc2lvbl9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0bG9jYXRpb24uYXNzaWduKCQodGhpcykuZGF0YSgndXJsJykgKyAnPycgKyBkYXRhcy5zZWFyY2hVcmwpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNjaGVja19hbGwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJ3Rib2R5JykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgJCgnI2NoZWNrX2FsbCcpLmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdH0pO1xyXG5cdFx0bGluZUNoZWNrZWQoKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCd0YWJsZScpLmZpbmQoJ3RoW2lkXVtkYXRhLXRpdGxlXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHR0YWJsZUhlYWRlcnMucHVzaChjcmVhdGVUYWJsZUhlYWRlcih0aGlzKSk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3Z1ZXMnKS5maW5kKCdidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGlmICgkKHRoaXMpLmF0dHIoJ2lkJykgPT0gJ3Z1ZV9uZXcnKSB7XHJcblx0XHRcdGxldCBzZWFyY2ggPSBkYXRhcy5zZWFyY2hVcmw7XHJcblx0XHRcdGlmIChzZWFyY2gpIHdpbmRvdy5sb2NhdGlvbiA9ICQodGhpcykuZGF0YSgndXJsJykgKyAnPycgKyBzZWFyY2g7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRkYXRhcy5zZWFyY2hVcmwgPSAndnVlPScgKyAkKHRoaXMpLmRhdGEoJ3ZhbHVlJyk7XHJcblx0XHRcdGRhdGFzLmZldGNoKCk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBmaWxsRGlzcGxheVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0ZnVuY3Rpb24gZmlsbERpc3BsYXkoKSB7XHJcblx0XHR2YXIgY29sID0gJCgnI2Rpc3BsYXknKS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdyb3cgcHktMicpXHJcblx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2NvbCcpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGZvciAobGV0IHRhYmxlSGVhZGVyIG9mIHRhYmxlSGVhZGVycykge1xyXG5cdFx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuYUhpZGUgPSBjb2wuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeSBjb2wtMiBtLTEgdGV4dC1sZWZ0JylcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNoeEhpZGUucHJvcCgnY2hlY2tlZCcsICF0YWJsZUhlYWRlci5jaHhIaWRlLmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGhpZGUgPSBwYXJhbXNBcnJheS5nZXRBbGwoJ2hpZGVbXScpO1xyXG5cdFx0XHRcdFx0bGV0IGluZGV4ID0gaGlkZS5pbmRleE9mKHRhYmxlSGVhZGVyLmlkKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmNoeEhpZGUuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGluZGV4ID4gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRoaWRlLnNwbGljZShpbmRleCwgMSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGlmIChpbmRleCA9PSAtMSAmJiB0YWJsZUhlYWRlci5pZCkge1xyXG5cdFx0XHRcdFx0XHRcdGhpZGUucHVzaCh0YWJsZUhlYWRlci5pZCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cGFyYW1zQXJyYXkuZGVsZXRlKCdoaWRlW10nKTtcclxuXHRcdFx0XHRcdGhpZGUuZm9yRWFjaChlID0+IHBhcmFtc0FycmF5LmFwcGVuZCgnaGlkZVtdJywgZSkpO1xyXG5cdFx0XHRcdFx0ZGF0YXMuc2VhcmNoVXJsID0gJyc7XHJcblx0XHRcdFx0XHRkYXRhcy5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGRpdiA9IHRhYmxlSGVhZGVyLmFIaWRlLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5jaHhIaWRlID0gZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ2hfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHRcdC5vbignY2hhbmdlIGNsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ2ZvcicsICdoXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHRcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIGRhdGFzXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHR2YXIgZGF0YXMgPSB7XHJcblx0XHRcclxuXHRcdGdldCBzZWFyY2hVcmwoKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgdXJsID0ge307XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAocGFyYW1zQXJyYXkuaGFzKCdpZFtdJykpIHtcclxuXHRcdFx0XHR1cmwuaWQgPSBwYXJhbXNBcnJheS5nZXRBbGwoJ2lkW10nKTtcdFxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh0aGlzLl9zZWFyY2hVcmwpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKF9wYXJhbXNBcnJheS5oYXMoJ3Z1ZScpKSB7XHJcblx0XHRcdFx0dXJsLnZ1ZSA9IF9wYXJhbXNBcnJheS5nZXQoJ3Z1ZScpO1xyXG5cdFx0XHRcdHJldHVybiAkLnBhcmFtKHVybCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmV0dXJuIHBhcmFtc0FycmF5LnRvU3RyaW5nKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdHNldCBzZWFyY2hVcmwodmFsdWUpIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChyID0gL1xcPyhcXFMqKS9nLmV4ZWModmFsdWUpKSB7XHJcblx0XHRcdFx0dGhpcy5fc2VhcmNoVXJsID0gclsxXTtcclxuXHRcdFx0fSBlbHNlIGlmIChyID0gLyhcXFMrPVxcUyspKy9nLmV4ZWModmFsdWUpKSB7XHJcblx0XHRcdFx0dGhpcy5fc2VhcmNoVXJsID0gclsxXTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRwYXJhbXNBcnJheS5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdHRoaXMuX3NlYXJjaFVybCA9IHBhcmFtc0FycmF5LnRvU3RyaW5nKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdFxyXG5cdFx0XHJcblx0XHRmZXRjaDogZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdFx0JCgnI3RhYmxlID4gdGJvZHknKS5lbXB0eSgpO1xyXG5cdFx0XHQkKGljb24ubG9hZGluZykuaW5zZXJ0QWZ0ZXIoJyN0YWJsZScpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcclxuXHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHR1cmwgOiAkKCcjdGFibGUnKS5kYXRhKCd1cmwnKSArICc/JyArIHRoaXMuX3NlYXJjaFVybCxcclxuXHRcdFx0XHR0eXBlOiAnR0VUJyxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0cGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCQucGFyYW0ocmVzdWx0LnF1ZXJ5KSk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCQoJyN0YWJsZScpLm5leHQoKS5yZW1vdmUoKTtcclxuXHRcdFx0XHRcdCQoJyN0YWJsZScpLnNob3coKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly92dWVcclxuXHRcdFx0XHRcdGlmIChwYXJhbXNBcnJheS5oYXMoJ3Z1ZScpKSB0aGF0LnNlYXJjaFVybCA9ICd2dWU9JyArIHBhcmFtc0FycmF5LmdldCgndnVlJyk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCQoJyN2dWVzJykuZmluZCgnYnV0dG9uW2RhdGEtdmFsdWVdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0aWYgKCQodGhpcykuZGF0YSgndmFsdWUnKSA9PSBwYXJhbXNBcnJheS5nZXQoJ3Z1ZScpKSB7XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtLTEnKVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1wcmltYXJ5IG0tMScpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCB0YWJsZUhlYWRlciBvZiB0YWJsZUhlYWRlcnMpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdC8vaGlkZVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0bGV0IGhpZGUgPSBwYXJhbXNBcnJheS5nZXRBbGwoJ2hpZGVbXScpO1xyXG5cdFx0XHRcdFx0XHRsZXQgaW5kZXggPSBoaWRlLmluZGV4T2YodGFibGVIZWFkZXIuaWQpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYUhpZGVcclxuXHRcdFx0XHRcdFx0XHQudG9nZ2xlQ2xhc3MoJ2J0bi1wcmltYXJ5JywgIShpbmRleCA9PSAtMSkpXHJcblx0XHRcdFx0XHRcdFx0LnRvZ2dsZUNsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5JywgKGluZGV4ID09IC0xKSlcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5jaHhIaWRlLnByb3AoJ2NoZWNrZWQnLCAoaW5kZXggPT0gLTEpKVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Ly9oZWFkZXJzXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5lbXB0eSgpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNGaWx0ZXJlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZEFzYyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZERlc2MgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IHNlbGVjdCBvZiB0YWJsZUhlYWRlci5zZWxlY3RzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKHBhcmFtc0FycmF5LmhhcyhzZWxlY3QubmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAocGFyYW1zQXJyYXkuZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzU29ydGVkQXNjID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKHBhcmFtc0FycmF5LmdldCgnc29ydERlc2MnKSA9PSBzZWxlY3QubmFtZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmFwcGVuZCgodGFibGVIZWFkZXIuaXNGaWx0ZXJlZCk/aWNvbi5mdW5uZWxGaWxsOmljb24uZnVubmVsKTtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoaWNvbi5hcnJvd0Rvd24pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjKSB7XHJcblx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGljb24uYXJyb3dVcCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vdGJvZHlcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgdmVyc2lvbiBvZiByZXN1bHQudmVyc2lvbnMpIHtcclxuXHRcdFx0XHRcdFx0bGV0IHRyID0gJCgnI3RhYmxlID4gdGJvZHknKS5hcHBlbmQoY3JlYXRlLnRyKS5jaGlsZHJlbigpLmxhc3QoKTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGxldCBkaXYgPSB0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgJ2NfJyArIHZlcnNpb24uaWQpXHJcblx0XHRcdFx0XHRcdFx0LnZhbCh2ZXJzaW9uLmlkKVxyXG5cdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBsaW5lQ2hlY2tlZClcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsICdjXycgKyB2ZXJzaW9uLmlkKVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgdGFibGVIZWFkZXIgb2YgdGFibGVIZWFkZXJzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0ZGF0YSA9IHZlcnNpb25bdGFibGVIZWFkZXIuaWRdO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNvbC5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci50aC5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuY29sLmF0dHIoJ2NsYXNzJykgPT0gJ3R5cGUtc3RhbmRhcmQnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICgvXlstK10/WzAtOV0rJC8udGVzdChkYXRhKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0eXBlLWludGVnZXInO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKC9eWy0rXT9bMC05XSpcXFxcLj9bMC05XSskLy50ZXN0KGRhdGEpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3R5cGUtZmxvYXQnO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0eXBlLXRleHQnO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAnJztcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcyhkYXRhQ2xhc3MpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC50ZXh0KGRhdGEpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuY29sLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLnRoLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuLXN1Y2Nlc3Mgdy0xMDAnKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ21vZGFsJylcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXRhcmdldCcsICcjbW9kYWwnKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdXJsJywgdmVyc2lvbi5kZXRhaWxVcmwpXHJcblx0XHRcdFx0XHRcdFx0XHQudGV4dCh0ZXh0LmRldGFpbHMpXHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Ly9wYWdpbmF0aW9uXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChyZXN1bHQucGFnZU1heCA+IDEpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5hZGRDbGFzcygnbWItNCcpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0bGV0IHBhZ2VNYXggPSByZXN1bHQucGFnZU1heDtcclxuXHRcdFx0XHRcdFx0bGV0IHBhZ2UgPSBwYXJhbXNBcnJheS5nZXQoJ3BhZ2UnKSB8fCAxO1xyXG5cdFx0XHRcdFx0XHRsZXQgcGFnZU1pbiA9IE1hdGgubWF4KDEsIHBhZ2UgLSAyKTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHVsID0gJCgnI3BhZ2luYXRpb24nKS5hcHBlbmQoY3JlYXRlLnVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnaW5hdGlvbiBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJylcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gMSk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIE1hdGgubWF4KDEsIHBhZ2UgLSAxKSlcclxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5odG1sKCcmbGFxdW87JylcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgaT0wOyBpPDU7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChwYWdlTWF4ID4gaSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IHBhZ2VNaW4gKyBpKT8nIGRpc2FibGVkJzonJykpXHJcblx0XHRcdFx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgcGFnZU1pbilcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQudGV4dChwYWdlTWluICsgaSlcclxuXHRcdFx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IHBhZ2VNYXgpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBNYXRoLm1pbihwYWdlTWF4LCBwYWdlICsgMSkpXHJcblx0XHRcdFx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQuaHRtbCgnJnJhcXVvOycpXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vJCgndGFibGUnKS5zdGlja3lUYWJsZUhlYWRlcnMoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdH0pO1x0XHJcblx0XHR9XHJcblx0XHJcblx0fTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIGdldERldGFpbFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tXHJcblx0LypcclxuXHRmdW5jdGlvbiBnZXREZXRhaWwodGhhdCkge1xyXG5cdFx0JCh0aGF0KS5wYXJlbnQoKS5maW5kKCdhLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdCQodGhhdCkuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHJcblx0XHQkKCcjdmVyc2lvbicpXHJcblx0XHRcdC5lbXB0eSgpXHJcblx0XHRcdC5hcHBlbmQoaWNvbi5sb2FkaW5nKVxyXG5cdFx0XHQ7XHJcblx0XHRcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybCA6ICQodGhhdCkuZGF0YSgndXJsJyksXHJcblx0XHRcdHR5cGU6ICdHRVQnLFxyXG5cdFx0XHRcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0JCgnI3ZlcnNpb24nKS5lbXB0eSgpO1xyXG5cdFx0XHRcdCQoJyN2ZXJzaW9uJykuaHRtbChyZXN1bHQpO1xyXG5cdFx0XHRcdCQoJyNyZXZpZXdfdGFicycpLmZpbmQoJ2EnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRcdFx0XHRnZXRSZXZpZXcoZXZlbnQudGFyZ2V0KTtcclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFxyXG5cclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIGdldFJldmlld1xyXG5cdC8vLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0ZnVuY3Rpb24gZ2V0UmV2aWV3KHRoYXQpIHtcclxuXHRcdCQodGhhdCkucGFyZW50KCkuZmluZCgnYS5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHQkKHRoYXQpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFxyXG5cdFx0dmFyIHVybCA9ICQodGhhdCkuZGF0YSgndXJsJyk7XHJcblx0XHR2YXIgbWV0aG9kID0gJCgnZm9ybVtuYW1lPVwicmV2aWV3XCJdJykuYXR0cignbWV0aG9kJykgfHwgJ0dFVCc7XHJcblx0XHR2YXIgZGF0YSA9ICQoJ2Zvcm1bbmFtZT1cInJldmlld1wiXScpLnNlcmlhbGl6ZUFycmF5KClcclxuXHRcdFxyXG5cdFx0JCgnI3JldmlldycpXHJcblx0XHRcdC5lbXB0eSgpXHJcblx0XHRcdC5hcHBlbmQoaWNvbi5sb2FkaW5nKTtcclxuXHRcdFxyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dXJsIDogdXJsLFxyXG5cdFx0XHR0eXBlOiBtZXRob2QsXHJcblx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdFxyXG5cdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuXHRcdFx0XHQkKCcjcmV2aWV3JykuZW1wdHkoKTtcclxuXHRcdFx0XHQkKCcjcmV2aWV3JykuaHRtbChyZXN1bHQpO1xyXG5cdFx0XHRcdCQoJyNyZXZpZXcnKS5maW5kKCdidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGdldFJldmlldyh0aGlzKVxyXG5cdFx0XHRcdH0pO1xyXG5cclxuXHRcdFx0fSxcclxuXHRcdH0pO1xyXG5cdH1cclxuXHQqL1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gbGluZUNoZWNrZWRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGxpbmVDaGVja2VkKCkge1xyXG5cdFx0XHJcblx0XHR2YXIgY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0dmFyIHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cclxuXHRcdCQoJ3Rib2R5JykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dW5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGNoZWNrZWQgJiYgdW5jaGVja2VkKSB7XHJcblx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0cGFyYW1zQXJyYXkuZGVsZXRlKCdpZFtdJyk7XHJcblx0XHRpZiAoY2hlY2tlZCkge1xyXG5cdFx0XHQkKCd0YWJsZScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKCQodGhpcykucHJvcCgnaWQnKSAhPSAnY2hlY2tfYWxsJyAmJiAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRwYXJhbXNBcnJheS5hcHBlbmQoJ2lkW10nLCAkKHRoaXMpLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5zaG93KCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuc2hvdygpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuc2hvdygpO1xyXG5cdFx0XHQkKCcjdmVyc2lvbl9tZW51Jykuc2hvdygpO1x0XHJcblx0XHR9IGVsc2UgaWYodW5jaGVja2VkKSB7XHJcblx0XHRcdCQoJyN2ZXJzaW9uJykudmFsKCcnKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjdmVyc2lvbl9tZW51JykuaGlkZSgpO1x0XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gdGFibGVIZWFkZXJcclxuXHQvLy0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGNyZWF0ZVRhYmxlSGVhZGVyKHRoYXQpIHtcclxuXHRcdFxyXG5cdFx0dmFyIHRhYmxlSGVhZGVyID0ge1xyXG5cdFx0XHRjb2w6ICQodGhhdCkuY2xvc2VzdCgndGFibGUnKS5maW5kKCdjb2wnKS5lcSgkKHRoYXQpLmluZGV4KCkpLFxyXG5cdFx0XHR0aDogJCh0aGF0KSxcclxuXHRcdFx0aWQ6ICQodGhhdCkuYXR0cignaWQnKSxcclxuXHRcdFx0dGl0bGU6ICQodGhhdCkuZGF0YSgndGl0bGUnKSxcclxuXHRcdFx0c29ydDogJCh0aGF0KS5kYXRhKCdzb3J0JyksXHJcblx0XHRcdGlzRmlsdGVyZWQ6IGZhbHNlLFxyXG5cdFx0XHRpc1NvcnRlZEFzYzogZmFsc2UsXHJcblx0XHRcdGlzU29ydGVkRGVzYzogZmFsc2UsXHJcblx0XHRcdHNlbGVjdHM6IFtdLFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQkKHRoYXQpLmZpbmQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgbXVsdGlwbGVBdHRyID0gKHR5cGVvZiAkKHRoaXMpLmF0dHIoJ211bHRpcGxlJykgIT09IHR5cGVvZiB1bmRlZmluZWQgJiYgJCh0aGlzKS5hdHRyKCdtdWx0aXBsZScpICE9PSBmYWxzZSk7XHJcblx0XHRcdHZhciBuYW1lID0gJCh0aGlzKS5wcm9wKCduYW1lJykgKyAoKG11bHRpcGxlQXR0cik/J1tdJzonJyk7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgc2VsZWN0ID0ge1xyXG5cdFx0XHRcdFx0c2x0OiAkKHRoaXMpLFxyXG5cdFx0XHRcdFx0aWQ6ICQodGhpcykucHJvcCgnaWQnKSxcclxuXHRcdFx0XHRcdG5hbWU6IG5hbWUsXHJcblx0XHRcdFx0XHRtdWx0aXBsZTogbXVsdGlwbGVBdHRyLFxyXG5cdFx0XHRcdFx0dGl0bGU6ICQodGhpcykuZGF0YSgndGl0bGUnKSxcclxuXHRcdFx0XHRcdG9wdGlvbnM6IFtdLFxyXG5cdFx0XHR9O1xyXG5cdFx0XHRcclxuXHRcdFx0JCh0aGlzKS5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHNlbGVjdC5vcHRpb25zLnB1c2goe1xyXG5cdFx0XHRcdFx0dmFsdWU6ICQodGhpcykuYXR0cigndmFsdWUnKSxcclxuXHRcdFx0XHRcdHRleHQ6ICQodGhpcykudGV4dCgpLFxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLnNlbGVjdHMucHVzaChzZWxlY3QpO1xyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGgpIHtcclxuXHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwID0gdGFibGVIZWFkZXIudGguYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdidG4tZ3JvdXAgdy0xMDAnKVxyXG5cdFx0XHRcdC5hdHRyKCdyb2xlJywgJ2dyb3VwJylcclxuXHRcdFx0XHQub24oJ2hpZGUuYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZihlLmNsaWNrRXZlbnQgJiYgJC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQucGFyZW50Tm9kZSwgZS5jbGlja0V2ZW50LnRhcmdldCkpIHtcclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUuZW1wdHkoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3ctMTAwJylcclxuXHRcdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHRcdC50ZXh0KHRhYmxlSGVhZGVyLnRpdGxlKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzICYmIHRhYmxlSGVhZGVyLnNvcnQpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHBhcmFtc0FycmF5LmdldCgnc29ydEFzYycpID09IHRhYmxlSGVhZGVyLnNlbGVjdHNbMF0ubmFtZSkge1xyXG5cdFx0XHRcdFx0XHRcdHBhcmFtc0FycmF5LmRlbGV0ZSgnc29ydEFzYycpO1xyXG5cdFx0XHRcdFx0XHRcdHBhcmFtc0FycmF5LnNldCgnc29ydERlc2MnLCB0YWJsZUhlYWRlci5zZWxlY3RzWzBdLm5hbWUpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHBhcmFtc0FycmF5LmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRcdFx0XHRwYXJhbXNBcnJheS5zZXQoJ3NvcnRBc2MnLCB0YWJsZUhlYWRlci5zZWxlY3RzWzBdLm5hbWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGRhdGFzLnNlYXJjaFVybCA9ICcnO1xyXG5cdFx0XHRcdFx0XHRkYXRhcy5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdDtcclxuXHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93biA9IHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncHgtMCcpXHJcblx0XHRcdFx0LmNzcygnd2lkdGgnLCAnM2VtJylcclxuXHRcdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHRcdC5hdHRyKCdpZCcsICdiXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0XHQuYXR0cignZGF0YS10b2dnbGUnLCAnZHJvcGRvd24nKVxyXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWhhc3BvcHVwJywgdHJ1ZSlcclxuXHRcdFx0XHQuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxyXG5cdFx0XHQ7XHJcblx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51ID0gdGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2Ryb3Bkb3duLW1lbnUnKVxyXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWxhYmVsbGVkYnknLCAnYl8nICsgdGFibGVIZWFkZXIuaWQpXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdkLWZsZXggZmxleC1yb3cnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgY3JlYXRlTWVudSk7XHJcblx0XHRcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93biA9IHRhYmxlSGVhZGVyLnRoLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3ctMTAwJylcclxuXHRcdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHJcblx0XHRmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG5cdFx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRmb3IgKGxldCBzZWxlY3Qgb2YgdGFibGVIZWFkZXIuc2VsZWN0cykge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZDb250ZW50ID0gdGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdteC0xJylcclxuXHRcdFx0XHRcdC5jc3MoJ21pbi13aWR0aCcsICcxNWVtJylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHNlbGVjdC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0XHRcdHNlbGVjdC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItZGFyayBwYi0yIHB4LTEnKVxyXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoc2VsZWN0LnRpdGxlKTtcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3QuZGl2RmlsdGVyID0gc2VsZWN0LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgcC0xJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0XHRcdFx0c2VsZWN0LmJ0blNvcnREZXNjID0gc2VsZWN0LmRpdkZpbHRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd1VwKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygocGFyYW1zQXJyYXkuZ2V0KCdzb3J0RGVzYycpID09IHNlbGVjdC5uYW1lKT8ncHgtMiBidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J3B4LTIgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBzb3J0RGVzYylcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3QuZGl2RmlsdGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC50ZXh0KHRleHQuZmlsdGVyKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTMgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZmlsdGVyKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRzZWxlY3QuYnRuU29ydEFzYyA9IHNlbGVjdC5kaXZGaWx0ZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKGljb24uYXJyb3dEb3duKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygocGFyYW1zQXJyYXkuZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWUpPydweC0yIGJ0bi1vdXRsaW5lLXByaW1hcnkgYmctZGFyayB0ZXh0LXdoaXRlJzoncHgtMiBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIHNvcnRBc2MpXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0c2VsZWN0LmRpdlNlYXJjaCA9IHNlbGVjdC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtY2VudGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLWRhcmsgcC0yJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0c2VsZWN0LmRpdlNlYXJjaC5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHNlYXJjaFZhbHVlID0gJCh0aGlzKS52YWwoKS50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKHNlYXJjaFZhbHVlID09ICcnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsLnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9uLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5kaXYuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5jaHgucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2TGlzdCA9IHNlbGVjdC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdweC0yICcgKyAoKHNlbGVjdC5tdWx0aXBsZSk/J3B0LTMnOidwdC0xJykpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChzZWxlY3QubXVsdGlwbGUpIHtcclxuXHRcdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwgPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsID0gc2VsZWN0LmRpdlNlbGVjdEFsbC5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfc2VsZWN0QWxsJylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR2YXIgY2hlY2tlZCA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5jaHgucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0c2VsZWN0LmRpdlNlbGVjdEFsbC5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnX3NlbGVjdEFsbCcpXHJcblx0XHRcdFx0XHRcdC50ZXh0KHRleHQuc2VsZWN0QWxsKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdG9wdGlvbi5kaXYgPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHRcdDtcclxuXHJcblx0XHRcdFx0XHRcdG9wdGlvbi5jaHggPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCBwYXJhbXNBcnJheS5nZXRBbGwoc2VsZWN0Lm5hbWUpLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpXHJcblx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCQob3B0aW9uLmNoeCkuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1bmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChjaGVja2VkICYmIHVuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5jaHhTZWxlY3RBbGwucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0LmNoeFNlbGVjdEFsbC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRvcHRpb24ubGJsID0gb3B0aW9uLmRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHQudGV4dChvcHRpb24udGV4dClcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0c2VsZWN0LmRpdlVua25vd24gPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3QuY2h4VW5rbm93biA9IHNlbGVjdC5kaXZVbmtub3duLmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ19ub3RBcHBsaWNhYmxlJylcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCAhcGFyYW1zQXJyYXkuaGFzKHNlbGVjdC5uYW1lKSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR2YXIgY2hlY2tlZCA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5jaHgucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0cGFyYW1zQXJyYXkuZGVsZXRlKHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRcdGRhdGFzLnNlYXJjaFVybCA9ICcnO1xyXG5cdFx0XHRcdFx0XHRcdGRhdGFzLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3QuZGl2VW5rbm93bi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnX25vdEFwcGxpY2FibGUnKVxyXG5cdFx0XHRcdFx0XHQudGV4dCh0ZXh0Lm5vdEFwcGxpY2FibGUpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0b3B0aW9uLmRpdiA9IHNlbGVjdC5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0b3B0aW9uLmNoeCA9IG9wdGlvbi5kaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsIHBhcmFtc0FycmF5LmdldEFsbChzZWxlY3QubmFtZSkuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSlcclxuXHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5kaXZMaXN0LmZpbmQoJ2lucHV0Jykubm90KHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJhbXNBcnJheS5kZWxldGUoc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXNlbGVjdC5jaHhVbmtub3duLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb24uY2h4LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRwYXJhbXNBcnJheS5hcHBlbmQoc2VsZWN0Lm5hbWUsIG9wdGlvbi52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRkYXRhcy5zZWFyY2hVcmwgPSAnJztcclxuXHRcdFx0XHRcdFx0XHRcdGRhdGFzLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0b3B0aW9uLmxibCA9IG9wdGlvbi5kaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0LnRleHQob3B0aW9uLnRleHQpXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRcdGZ1bmN0aW9uIHNvcnRBc2MoKSB7XHJcblx0XHRcdFx0XHRwYXJhbXNBcnJheS5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdFx0XHRpZiAocGFyYW1zQXJyYXkuZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0cGFyYW1zQXJyYXkuZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRwYXJhbXNBcnJheS5zZXQoJ3NvcnRBc2MnLCBzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRmaWx0ZXIoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRmdW5jdGlvbiBmaWx0ZXIoKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHBhcmFtc0FycmF5LmRlbGV0ZShzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0XHRpZiAoIXNlbGVjdC5jaHhTZWxlY3RBbGwuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChvcHRpb24uY2h4LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRwYXJhbXNBcnJheS5hcHBlbmQoc2VsZWN0Lm5hbWUsIG9wdGlvbi52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0ZGF0YXMuc2VhcmNoVXJsID0gJyc7XHJcblx0XHRcdFx0XHRkYXRhcy5mZXRjaCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGZ1bmN0aW9uIHNvcnREZXNjKCkge1xyXG5cdFx0XHRcdFx0cGFyYW1zQXJyYXkuZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0XHRpZiAocGFyYW1zQXJyYXkuZ2V0KCdzb3J0RGVzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHRcdHBhcmFtc0FycmF5LmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHBhcmFtc0FycmF5LnNldCgnc29ydERlc2MnLCBzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdGZpbHRlcigpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0cmV0dXJuIHRhYmxlSGVhZGVyO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHRmaWxsRGlzcGxheSgpO1xyXG5cdGRhdGFzLnNlYXJjaFVybCA9IHdpbmRvdy5sb2NhdGlvbjtcclxuXHRkYXRhcy5mZXRjaCgpO1xyXG5cdFxyXG59KTtcclxuXHJcbnZhciBjcmVhdGUgPSB7XHJcblx0ZGl2OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxyXG5cclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0biBidG4tc20gdGV4dC1ub3dyYXAnKVxyXG5cdH0sXHJcblx0XHJcblx0c3BhbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGlucHV0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ3RleHQnKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20nKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0Y2hlY2tib3g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWlucHV0JylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdG9wdGlvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSlcclxuXHRcdFx0LmF0dHIoJ3ZhbHVlJywgJycpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRsYWJlbDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWxhYmVsIHctMTAwIHRleHQtbm93cmFwJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdG1lbnVCdXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSB0ZXh0LW5vd3JhcCByb3VuZGVkLTAnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0c21hbGxCdXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBteC0xIHRleHQtbm93cmFwJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRyOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHVsOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGxpOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG59O1xyXG5cclxudmFyIHRleHQgPSB7XHJcbiAgICBub25lU2VsZWN0ZWQ6ICdOb25lIHNlbGVjdGVkJyxcclxuICAgIG11bHRpcGxlU2VwYXJhdG9yOiAnLCAnLFxyXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0IGFsbCcsXHJcbiAgICBub3RBcHBsaWNhYmxlOiAnbi9hJyxcclxuICAgIGZpbHRlcjogJ0ZpbHRlcicsXHJcbiAgICBsb2FkaW5nOiAnTG9hZGluZy4uLicsXHJcbiAgICBkZXRhaWxzOiAnRGV0YWlscycsXHJcbn07XHJcblxyXG52YXIgaWNvbiA9IHtcclxuXHRhcnJvd1VwOlxyXG5cdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1hcnJvdy1iYXItdXBcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuMzU0IDUuODU0YS41LjUgMCAwMDAtLjcwOGwtMy0zYS41LjUgMCAwMC0uNzA4IDBsLTMgM2EuNS41IDAgMTAuNzA4LjcwOEw4IDMuMjA3bDIuNjQ2IDIuNjQ3YS41LjUgMCAwMC43MDggMHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCAxMGEuNS41IDAgMDAuNS0uNVYzYS41LjUgMCAwMC0xIDB2Ni41YS41LjUgMCAwMC41LjV6bS00LjggMS42YzAtLjIyLjE4LS40LjQtLjRoOC44YS40LjQgMCAwMTAgLjhIMy42YS40LjQgMCAwMS0uNC0uNHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0Jzwvc3ZnPicsXHJcblx0XHRcclxuXHRhcnJvd0Rvd246XHJcblx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktYXJyb3ctYmFyLWRvd25cIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0ICBcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjM1NCAxMC4xNDZhLjUuNSAwIDAxMCAuNzA4bC0zIDNhLjUuNSAwIDAxLS43MDggMGwtMy0zYS41LjUgMCAwMS43MDgtLjcwOEw4IDEyLjc5M2wyLjY0Ni0yLjY0N2EuNS41IDAgMDEuNzA4IDB6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdCAgXHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04IDZhLjUuNSAwIDAxLjUuNVYxM2EuNS41IDAgMDEtMSAwVjYuNUEuNS41IDAgMDE4IDZ6TTIgMy41YS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMTAgMWgtMTFhLjUuNSAwIDAxLS41LS41elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdCc8L3N2Zz4nLFxyXG5cdFxyXG5cdGZ1bm5lbDpcclxuXHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1mdW5uZWxcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xLjUgMS41QS41LjUgMCAwMTIgMWgxMmEuNS41IDAgMDEuNS41djJhLjUuNSAwIDAxLS4xMjguMzM0TDEwIDguNjkyVjEzLjVhLjUuNSAwIDAxLS4zNDIuNDc0bC0zIDFBLjUuNSAwIDAxNiAxNC41VjguNjkyTDEuNjI4IDMuODM0QS41LjUgMCAwMTEuNSAzLjV2LTJ6bTEgLjV2MS4zMDhsNC4zNzIgNC44NThBLjUuNSAwIDAxNyA4LjV2NS4zMDZsMi0uNjY2VjguNWEuNS41IDAgMDEuMTI4LS4zMzRMMTMuNSAzLjMwOFYyaC0xMXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQnPC9zdmc+JyxcclxuXHRcdFx0XHJcblx0ZnVubmVsRmlsbDpcclxuXHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1mdW5uZWwtZmlsbFwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXHJcblx0XHRcdFx0JzxwYXRoIGQ9XCJNMiAzLjV2LTJoMTJ2MmwtNC41IDV2NWwtMyAxdi02TDIgMy41elwiLz4nICtcclxuXHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMS41IDEuNUEuNS41IDAgMDEyIDFoMTJhLjUuNSAwIDAxLjUuNXYyYS41LjUgMCAwMS0uMTI4LjMzNEwxMCA4LjY5MlYxMy41YS41LjUgMCAwMS0uMzQyLjQ3NGwtMyAxQS41LjUgMCAwMTYgMTQuNVY4LjY5MkwxLjYyOCAzLjgzNEEuNS41IDAgMDExLjUgMy41di0yem0xIC41djEuMzA4bDQuMzcyIDQuODU4QS41LjUgMCAwMTcgOC41djUuMzA2bDItLjY2NlY4LjVhLjUuNSAwIDAxLjEyOC0uMzM0TDEzLjUgMy4zMDhWMmgtMTF6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHJcblx0bG9hZGluZzpcclxuXHRcdCc8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj4nICtcclxuXHRcdFx0JzxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj4nICtcclxuXHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+JyArIHRleHQubG9hZGluZyArICc8L3NwYW4+JyArXHJcblx0XHRcdCc8L2Rpdj4nICtcclxuXHRcdCc8L2Rpdj4nLFxyXG5cdFxyXG59OyJdLCJzb3VyY2VSb290IjoiIn0=