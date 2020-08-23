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

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.map */ "./node_modules/core-js/modules/es.map.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.includes */ "./node_modules/core-js/modules/es.string.includes.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

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
      return this._paramsArray.getAll(key) || [];
    } else {
      return this._paramsArray.get(key) || '';
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
  toUrl: function toUrl() {
    var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var url = '';

    if (key == '') {
      url = this._paramsArray.toString();
    } else {
      values = this.get(key);

      for (i in values) {
        values[i] = key + '=' + values[i];
      }

      url = values.join('&');
    }

    return url ? '?' + url : '';
  },
  fetch: function fetch() {
    var url = $('#table').data('url') + this.toUrl();
    $('#table').hide();
    ajax.set('#spinner', url, 'GET', undefined, false, this.fillTable.bind(this));
  },
  fillTable: function fillTable(target) {
    var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    $('#spinner').empty();
    $('#table > tbody').empty();
    $('#table').show();
    if (result == false) return;
    console.log(result.query);
    var searchUrl = $.param(result.query);
    this._paramsArray = new URLSearchParams(searchUrl);
    this["delete"]('id[]');
    var that = this; //vue

    $('#vues').find('button[data-id]').each(function () {
      if ($(this).data('id') == that.get('vue')) {
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
        if (display = this.get('display[' + tableHeader.id + ']')) {
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

          var _iterator5 = _createForOfIteratorHelper(tableHeader.selects),
              _step5;

          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
              var _select = _step5.value;

              if (this.has(_select.name)) {
                tableHeader.isFiltered = true;
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }

          if (this.get('sortAsc') == tableHeader.id) {
            tableHeader.isSortedAsc = true;
          }

          if (this.get('sortDesc') == tableHeader.id) {
            tableHeader.isSortedDesc = true;
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

        var _div2 = tr.append(create.td).children().last().append(create.div).children().last().addClass('custom-control custom-checkbox');

        _div2.append(create.checkbox).children().last().attr('id', 'c_' + version.id).val(version.id).on('click', this.lineChecked.bind(this));

        _div2.append(create.label).children().last().attr('for', 'c_' + version.id);

        var _iterator6 = _createForOfIteratorHelper(tableHeaders),
            _step6;

        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _tableHeader = _step6.value;
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

              tr.append(create.td).children().last().addClass(dataClass).text(data); //highlight

              if (urlSearch.get('highlight') == _tableHeader.id) {
                if (data.toDate() !== null) {
                  if (data.toDate() < new Date()) {
                    tr.addClass('highlight-late');
                  } else if (data.toDate().addDays(-15) < new Date()) {
                    tr.addClass('highlight-15');
                  } else if (data.toDate().addDays(-30) < new Date()) {
                    tr.addClass('highlight-30');
                  } else {
                    tr.addClass('highlight-ok');
                  }
                }
              }
            } else {
              _tableHeader.col.hide();

              _tableHeader.th.hide();
            }
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }

        tr.append(create.td).children().last().append(create.smallButton).children().last().addClass('btn-success w-100').attr('data-url', version.detailUrl).text(text.details);
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }

    $('#table tbody button[data-url]').on('click', function () {
      $('#modal_detail').modal('show');
      ajax.set('#modal_detail .modal-body', $(this).data('url'), 'GET', undefined, false, that.showDetail.bind(that));
    }); //pagination

    $('#pagination').empty();
    $('#table_container').addClass('mb-4');
    var pageMax = result.pageMax;
    var page = parseInt(this.get('page')) || 1;
    page = Math.max(Math.min(page, pageMax), 1);
    div = $('#pagination').append(create.div).children().last().addClass('row m-0');
    div.append(create.div).children().last().addClass('col');
    ul = div.append(create.ul).children().last().addClass('pagination col justify-content-center');

    if (result.pageMax > 1) {
      ul.append(create.li).children().last().addClass('page-item' + (page == 1 ? ' disabled' : '')).on('click', function () {
        if (page > 1) {
          that.set('page', page - 1);
          that["delete"]('vue');
          that.fetch();
        }
      }).append(create.a).children().last().addClass('page-link').attr('data-value', Math.max(1, page - 1)).append(create.span).children().last().attr('aria-hidden', true).html('&laquo;');
      var pageStart = Math.min(Math.max(1, page - 2), Math.max(1, result.pageMax - 4));
      var pageEnd = Math.min(pageStart + 5, pageMax);

      var _loop = function _loop(_i) {
        ul.append(create.li).children().last().addClass('page-item' + (page == _i ? ' active' : '')).on('click', function () {
          that.set('page', _i);
          that["delete"]('vue');
          that.fetch();
        }).append(create.a).children().last().addClass('page-link').attr('data-value', _i).text(_i);
      };

      for (var _i = pageStart; _i <= pageEnd; _i++) {
        _loop(_i);
      }

      ul.append(create.li).children().last().addClass('page-item' + (page == pageMax ? ' disabled' : '')).on('click', function () {
        if (page < pageMax) {
          that.set('page', page + 1);
          that["delete"]('vue');
          that.fetch();
        }
      }).append(create.a).children().last().addClass('page-link').attr('data-value', Math.min(pageMax, page + 1)).append(create.span).children().last().attr('aria-hidden', true).html('&raquo;');
    }

    select = div.append(create.div).children().last().addClass('col d-flex justify-content-end mt-1 mr-5').append(create.select).children().last().addClass('form-control form-control-sm bg-dark border-secondary text-white').css('width', '150').on('change', function () {
      urlSearch.set('results_per_page', $(this).val());
      that["delete"]('vue');
      urlSearch.fetch();
    });
    var resultsPerPage = new Map([['10', 10], ['50', 50], ['100', 100], [text.all, '0']]);

    var _iterator3 = _createForOfIteratorHelper(resultsPerPage),
        _step3;

    try {
      for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
        var _step3$value = _slicedToArray(_step3.value, 2),
            _text = _step3$value[0],
            value = _step3$value[1];

        select.append(create.option).children().last().attr('value', value).attr('selected', urlSearch.get('results_per_page') == value).text(_text);
      } //flashes

    } catch (err) {
      _iterator3.e(err);
    } finally {
      _iterator3.f();
    }

    $('#toast').empty();

    for (var label in result.flash) {
      var _div = $('#toast').append(create.div).children().last().addClass('toast px-3').attr('role', 'alert').data('delay', 5000).attr('aria-live', 'assertive').attr('aria-atomic', true);

      var header = _div.append(create.div).children().last().addClass('toast-header').append(['danger', 'warning'].includes(label) ? icon.exclamation : icon.information).append(icon.close);

      ;

      var body = _div.append(create.ul).children().last().addClass('toast-body');

      if (result.flash[label].length > 1) {
        var _iterator4 = _createForOfIteratorHelper(result.flash[label]),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var message = _step4.value;
            body.append(create.li).children().last().text(message);
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      } else {
        body.text(result.flash[label][0]);
      }

      _div.toast('show');
    }

    this.lineChecked(); //$('table').stickyTableHeaders();
  },
  lineChecked: function lineChecked() {
    var checked = false;
    var unchecked = false;
    var that = this;
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
    that["delete"]('id[]');

    if (checked) {
      $('table').find('input[type="checkbox"]').each(function () {
        if ($(this).prop('id') != 'check_all' && $(this).is(':checked')) {
          that.append('id[]', $(this).val());
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
  },
  showDetail: function showDetail(target) {
    var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    $(target).find('.spinner-border').parent().remove();

    if (result) {
      $(target).html($(target).html() + result);
    } //---------------------
    // popover
    //---------------------


    $(target).find('[data-toggle="popover"]').popover(); //---------------------
    // Ajax
    //---------------------
    //ajax.fetch(target, this.showDetail.bind(this));

    var that = this;
    $('#version_tabs').find('a').each(function () {
      $(this).on('click', function (e) {
        if ($(this).parent().has('.active')) {
          $(this).parent().find('.active').removeClass('active');
          $(this).addClass('active');
        }

        ajax.set('#version_content', $(this).data('url'), 'GET', undefined, false, that.showContent.bind(that));
      });

      if ($(this).hasClass('active')) {
        $(this).trigger('click');
      }
    });
    $('#version_new_detail, #version_edit_detail, #version_remove_detail').on('click', function () {
      $('#modal').modal('show');
      ajax.set('#modal .modal-content', $(this).data('url') + '?id[]=' + $('#version_tabs>a.active').data('id'), 'GET', undefined, false, that.onDataEdited.bind(that));
    }); //---------------------
    // Modal & Collapse
    //---------------------

    $(target).on('hidden.bs.collapse', function () {
      $('[data-toggle="collapse"][href="#' + $(this).attr('id') + '"]').removeClass('active').blur();
    });
    $(target).on('hidden.bs.modal', function () {
      $('[data-toggle="modal"]').blur();
    });
    $(target).find('button[data-dismiss]').on('click', function () {
      $('#modal').modal('hide');
    }); //---------------------
    // Bootstrap datepicker
    //---------------------

    $(target).find('.datepicker').each(function () {
      $(this).datepicker();
    });
  },
  showContent: function showContent(target) {
    var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    ajax.onSuccess(target, result);
    var that = this;
    $('#save').on('click', function () {
      $('#modal').modal('show');
      ajax.set('#modal .modal-content', $(this).data('url'), 'GET', undefined, false, that.onDataEdited.bind(that));
    });
  },
  onDataEdited: function onDataEdited(target) {
    var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (result) {
      ajax.onSuccess(target, result, this.onDataEdited.bind(this));
    } else {
      var that = this;
      urlSearch.fetch();

      if ($('#modal_detail').hasClass('show')) {
        ajax.set('#modal_detail .modal-body', $('#menu').data('url'), 'GET', undefined, false, that.showDetail.bind(that));
      }

      $('#modal .modal-content').empty();
      $('#modal').modal('hide');
    }
  },
  onVueEdited: function onVueEdited(target) {
    var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

    if (result) {
      ajax.onSuccess(target, result, this.onVueEdited.bind(this));
    } else {
      location.assign(location.origin + location.pathname + urlSearch.toUrl());
    }
  }
}; //---------------
// tableHeader
//---------------

function createTableHeader(that) {
  var tableHeader = {
    col: $(that).closest('table').find('col').eq($(that).index()),
    th: $(that),
    id: $(that).attr('id'),
    name: $(that).attr('name'),
    title: $(that).data('title'),
    sort: $(that).data('sort'),
    type: $(that).attr('class'),
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

  if (tableHeader.selects.length || tableHeader.type == 'type-date') {
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

        urlSearch["delete"]('vue');
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
    if (tableHeader.selects.length) {
      tableHeader.divDropdownMenu.empty();

      var _iterator7 = _createForOfIteratorHelper(tableHeader.selects),
          _step7;

      try {
        var _loop2 = function _loop2() {
          var select = _step7.value;
          select.divContent = tableHeader.divDropdownMenu.append(create.div).children().last().addClass('mx-1').css('min-width', '15em');

          if (select.multiple) {
            if (tableHeader.selects.length > 1) {
              select.divContent.append(create.div).children().last().addClass('text-center border-bottom border-dark pb-2 px-1').append(select.title);
              ;
            }

            select.divFilter = select.divContent.append(create.div).children().last().addClass('text-center p-1');

            if (tableHeader.selects.length == 1) {
              select.btnSortDesc = select.divFilter.append(create.smallButton).children().last().append(icon.arrowUp).addClass(urlSearch.get('sortDesc') == tableHeader.id ? 'px-2 btn-outline-primary bg-dark text-white' : 'px-2 btn-primary').on('click', function () {
                urlSearch["delete"]('sortAsc');

                if (urlSearch.get('sortDesc') == tableHeader.id) {
                  urlSearch["delete"]('sortDesc');
                } else {
                  urlSearch.set('sortDesc', tableHeader.id);
                }

                select.btnFilter.trigger('click');
              });
            }

            select.btnFilter = select.divFilter.append(create.smallButton).children().last().text(text.filter).addClass('px-3 btn-primary').on('click', function () {
              var _iterator8 = _createForOfIteratorHelper(tableHeader.selects),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var _select2 = _step8.value;
                  urlSearch["delete"](_select2.name);

                  if (!_select2.chxSelectAll.is(':checked')) {
                    var _iterator9 = _createForOfIteratorHelper(_select2.options),
                        _step9;

                    try {
                      for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                        var option = _step9.value;

                        if (option.chx.is(':checked')) {
                          urlSearch.append(_select2.name, option.value);
                        }
                      }
                    } catch (err) {
                      _iterator9.e(err);
                    } finally {
                      _iterator9.f();
                    }
                  }
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              tableHeader.btnDropdown.dropdown('hide');
              urlSearch["delete"]('vue');
              urlSearch.fetch();
            });

            if (tableHeader.selects.length == 1) {
              select.btnSortAsc = select.divFilter.append(create.smallButton).children().last().append(icon.arrowDown).addClass(urlSearch.get('sortAsc') == tableHeader.id ? 'px-2 btn-outline-primary bg-dark text-white' : 'px-2 btn-primary').on('click', function () {
                urlSearch["delete"]('sortDesc');

                if (urlSearch.get('sortAsc') == tableHeader.id) {
                  urlSearch["delete"]('sortAsc');
                } else {
                  urlSearch.set('sortAsc', tableHeader.id);
                }

                select.btnFilter.trigger('click');
              });
            }

            select.divSearch = select.divContent.append(create.div).children().last().addClass('text-center border-bottom border-dark p-2');
            select.divSearch.append(create.input).children().last().on('input', function () {
              var searchValue = $(this).val().toLowerCase();

              if (searchValue == '') {
                select.divSelectAll.show();

                var _iterator10 = _createForOfIteratorHelper(select.options),
                    _step10;

                try {
                  for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                    var option = _step10.value;
                    option.div.show();
                    option.chx.prop('checked', false);
                  }
                } catch (err) {
                  _iterator10.e(err);
                } finally {
                  _iterator10.f();
                }
              } else {
                select.divSelectAll.hide();

                var _iterator11 = _createForOfIteratorHelper(select.options),
                    _step11;

                try {
                  for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                    var _option = _step11.value;

                    if (_option.text.toLowerCase().indexOf(searchValue) == -1) {
                      _option.div.hide();

                      _option.chx.prop('checked', false);
                    } else {
                      _option.div.show();

                      _option.chx.prop('checked', true);
                    }
                  }
                } catch (err) {
                  _iterator11.e(err);
                } finally {
                  _iterator11.f();
                }
              }
            });
          }

          select.divList = select.divContent.append(create.div).children().last().addClass('px-2 overflow-auto ' + (select.multiple ? 'pt-3' : 'pt-1')).css('max-height', '20em');

          if (select.multiple) {
            select.divSelectAll = select.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
            select.chxSelectAll = select.divSelectAll.append(create.checkbox).children().last().attr('id', select.name + '_selectAll').on('change', function () {
              var checked = $(this).is(':checked');

              var _iterator12 = _createForOfIteratorHelper(select.options),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var option = _step12.value;
                  option.chx.prop('checked', checked);
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            });
            select.divSelectAll.append(create.label).children().last().attr('for', select.name + '_selectAll').text(text.selectAll);

            var _iterator13 = _createForOfIteratorHelper(select.options),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var option = _step13.value;
                option.div = select.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
                option.chx = option.div.append(create.checkbox).children().last().attr('id', select.name + '_' + option.value).attr('checked', urlSearch.get(select.name).includes(option.value)).on('click', function () {
                  var checked = false;
                  var unchecked = false;

                  var _iterator14 = _createForOfIteratorHelper(select.options),
                      _step14;

                  try {
                    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                      var _option2 = _step14.value;

                      if ($(_option2.chx).is(':checked')) {
                        checked = true;
                      } else {
                        unchecked = true;
                      }
                    }
                  } catch (err) {
                    _iterator14.e(err);
                  } finally {
                    _iterator14.f();
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
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }
          } else {
            select.divUnknown = select.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
            select.chxUnknown = select.divUnknown.append(create.checkbox).children().last().attr('id', select.name + '_notApplicable').attr('checked', !urlSearch.has(select.name)).on('click', function () {
              var checked = $(this).is(':checked');

              var _iterator15 = _createForOfIteratorHelper(select.options),
                  _step15;

              try {
                for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                  var _option3 = _step15.value;

                  _option3.chx.prop('checked', false);
                }
              } catch (err) {
                _iterator15.e(err);
              } finally {
                _iterator15.f();
              }

              urlSearch["delete"](select.name);
              tableHeader.btnDropdown.dropdown('hide');
              urlSearch["delete"]('vue');
              urlSearch.fetch();
            });
            select.divUnknown.append(create.label).children().last().attr('for', select.name + '_notApplicable').text(text.notApplicable);

            var _iterator16 = _createForOfIteratorHelper(select.options),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var _option4 = _step16.value;
                _option4.div = select.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
                _option4.chx = _option4.div.append(create.checkbox).children().last().attr('id', select.name + '_' + _option4.value).attr('checked', urlSearch.get(select.name).includes(_option4.value)).on('click', function () {
                  select.divList.find('input').not(this).prop('checked', false);
                  urlSearch["delete"](select.name);

                  if (!select.chxUnknown.is(':checked')) {
                    var _iterator17 = _createForOfIteratorHelper(select.options),
                        _step17;

                    try {
                      for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                        var _option5 = _step17.value;

                        if (_option5.chx.is(':checked')) {
                          urlSearch.append(select.name, _option5.value);
                        }
                      }
                    } catch (err) {
                      _iterator17.e(err);
                    } finally {
                      _iterator17.f();
                    }
                  }

                  tableHeader.btnDropdown.dropdown('hide');
                  urlSearch["delete"]('vue');
                  urlSearch.fetch();
                });
                _option4.lbl = _option4.div.append(create.label).children().last().attr('for', select.name + '_' + _option4.value).text(_option4.text);
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
            }
          }
        };

        for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
          _loop2();
        }
      } catch (err) {
        _iterator7.e(err);
      } finally {
        _iterator7.f();
      }
    } else if (tableHeader.type == 'type-date') {
      if ((result = />(\d{2}-\d{2}-\d{4})/.exec(urlSearch.get(tableHeader.name + '[]').toString())) !== null) {
        var valueInf = result[1];
      } else {
        var valueInf = '';
      }

      if ((result = /<(\d{2}-\d{2}-\d{4})/.exec(urlSearch.get(tableHeader.name + '[]').toString())) !== null) {
        var valueSup = result[1];
      } else {
        var valueSup = '';
      }

      var highlight = urlSearch.get('highlight').toString() == tableHeader.id;
      tableHeader.divContent = tableHeader.divDropdownMenu.append(create.div).children().last().addClass('mx-1').css('min-width', '15em');
      tableHeader.divFilter = tableHeader.divContent.append(create.div).children().last().addClass('text-center p-1');
      tableHeader.btnSortDesc = tableHeader.divFilter.append(create.smallButton).children().last().append(icon.arrowUp).addClass(urlSearch.get('sortDesc') == tableHeader.id ? 'px-2 btn-outline-primary bg-dark text-white' : 'px-2 btn-primary').on('click', function () {
        urlSearch["delete"]('sortAsc');

        if (urlSearch.get('sortDesc') == tableHeader.id) {
          urlSearch["delete"]('sortDesc');
        } else {
          urlSearch.set('sortDesc', tableHeader.id);
        }

        tableHeader.btnFilter.trigger('click');
      });
      tableHeader.btnFilter = tableHeader.divFilter.append(create.smallButton).children().last().text(text.filter).addClass('px-3 btn-primary').on('click', function () {
        urlSearch["delete"](tableHeader.name + '[]');

        if (tableHeader.chxInf.is(':checked') && (result = /^≥\s(\d{2}-\d{2}-\d{4})/.exec(tableHeader.inputInf.val()))) {
          urlSearch.append(tableHeader.name + '[]', '>' + result[1]);
        }

        if (tableHeader.chxSup.is(':checked') && (result = /^≤\s(\d{2}-\d{2}-\d{4})/.exec(tableHeader.inputSup.val()))) {
          urlSearch.append(tableHeader.name + '[]', '<' + result[1]);
        }

        if (tableHeader.chxHighlight.is(':checked')) {
          urlSearch.set('highlight', tableHeader.id);
        } else if (urlSearch.get('highlight').toString() == tableHeader.id) {
          urlSearch["delete"]('highlight');
        }

        tableHeader.btnDropdown.dropdown('hide');
        urlSearch["delete"]('vue');
        urlSearch.fetch();
      });
      tableHeader.btnSortAsc = tableHeader.divFilter.append(create.smallButton).children().last().append(icon.arrowDown).addClass(urlSearch.get('sortAsc') == tableHeader.id ? 'px-2 btn-outline-primary bg-dark text-white' : 'px-2 btn-primary').on('click', function () {
        urlSearch["delete"]('sortDesc');

        if (urlSearch.get('sortAsc') == tableHeader.id) {
          urlSearch["delete"]('sortAsc');
        } else {
          urlSearch.set('sortAsc', tableHeader.id);
        }

        tableHeader.btnFilter.trigger('click');
      });
      tableHeader.divList = tableHeader.divContent.append(create.div).children().last().addClass('px-2 overflow-auto ' + (tableHeader.multiple ? 'pt-3' : 'pt-1'));
      tableHeader.divInf = tableHeader.divList.append(create.div).children().last().addClass('custom-control custom-checkbox mt-2');
      tableHeader.chxInf = tableHeader.divInf.append(create.checkbox).children().last().attr('id', tableHeader.id + '_inf').attr('checked', valueInf != '').on('change', function () {
        var checked = $(this).is(':checked');

        if (checked) {
          if (/^≥\s\d{2}-\d{2}-\d{4}/.test(tableHeader.inputInf.val()) === false) {
            tableHeader.inputInf.val('');
          }
        } else {
          tableHeader.inputInf.val(text.fromDate);
        }

        tableHeader.inputInf.attr('readonly', checked === false);
      });
      tableHeader.labelInf = tableHeader.divInf.append(create.label).children().last().attr('for', tableHeader.id + '_inf');
      tableHeader.inputInf = tableHeader.labelInf.append(create.input).children().last().addClass('form-control datepicker').val(valueInf ? '≥ ' + valueInf : text.fromDate).attr('readonly', valueInf == '').datepicker({
        'format': '≥ dd-mm-yyyy'
      }).on('click', function () {
        tableHeader.chxInf.prop('checked', true);
        tableHeader.chxInf.trigger('change');
      }).on('show.bs.dropdown hide.bs.dropdown', function (e) {
        e.stopPropagation();
      });
      tableHeader.divSup = tableHeader.divList.append(create.div).children().last().addClass('custom-control custom-checkbox mt-2');
      tableHeader.chxSup = tableHeader.divSup.append(create.checkbox).children().last().attr('id', tableHeader.id + '_sup').attr('checked', valueSup != '').on('change', function () {
        var checked = $(this).is(':checked');

        if (checked) {
          if (/^≤\s\d{2}-\d{2}-\d{4}/.test(tableHeader.inputSup.val()) === false) {
            tableHeader.inputSup.val('');
          }
        } else {
          tableHeader.inputSup.val(text.toDate);
        }

        tableHeader.inputSup.attr('readonly', checked === false);
      });
      tableHeader.labelSup = tableHeader.divSup.append(create.label).children().last().attr('for', tableHeader.id + '_sup');
      tableHeader.inputSup = tableHeader.labelSup.append(create.input).children().last().addClass('form-control datepicker').val(valueSup ? '≤ ' + valueSup : text.toDate).attr('readonly', valueSup == '').datepicker({
        'format': "≤ dd-mm-yyyy"
      }).on('click', function () {
        tableHeader.chxSup.prop('checked', true);
        tableHeader.chxSup.trigger('change');
      }).on('show.bs.dropdown hide.bs.dropdown', function (e) {
        e.stopPropagation();
      });
      tableHeader.divHighlight = tableHeader.divList.append(create.div).children().last().addClass('custom-control custom-checkbox mt-2');
      tableHeader.chxHighlight = tableHeader.divHighlight.append(create.checkbox).children().last().attr('id', tableHeader.id + '_highlight').attr('name', 'highlight').val(tableHeader.id).attr('checked', highlight);
      tableHeader.labelHighlight = tableHeader.divHighlight.append(create.label).children().last().attr('for', tableHeader.id + '_highlight').text(text.highlight);
    }
  }

  return tableHeader;
} //---------------
// fillDisplay
//---------------


function fillDisplay() {
  var col = $('#display').append(create.div).children().last().addClass('row py-2').append(create.div).children().last().addClass('col');

  var _iterator18 = _createForOfIteratorHelper(tableHeaders),
      _step18;

  try {
    var _loop3 = function _loop3() {
      var tableHeader = _step18.value;
      tableHeader.aDisplay = col.append(create.a).children().last().addClass('btn-outline-primary col-2 m-1 text-left').on('click', function () {
        tableHeader.chxDisplay.prop('checked', !tableHeader.chxDisplay.is(':checked'));
        var display = urlSearch.get('display[' + tableHeader.id + ']');
        urlSearch["delete"]('display[' + tableHeader.id + ']');

        if (tableHeader.chxDisplay.is(':checked')) {
          if (display == false) {
            urlSearch.append('display[' + tableHeader.id + ']', 10);
          }
        }

        urlSearch["delete"]('vue');
        urlSearch.fetch();
        return false;
      });
      var div = tableHeader.aDisplay.append(create.div).children().last().addClass('custom-control custom-checkbox');
      tableHeader.chxDisplay = div.append(create.checkbox).children().last().attr('id', 'h_' + tableHeader.id).on('change click', function () {
        return false;
      });
      div.append(create.label).children().last().attr('for', 'h_' + tableHeader.id).text(tableHeader.title);
    };

    for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
      _loop3();
    }
  } catch (err) {
    _iterator18.e(err);
  } finally {
    _iterator18.f();
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
  	ajax.set('#modal .modal-content', $(e.relatedTarget).data('url') + urlSearch.toUrl());
  });
  */

  $('#document_new, #document_edit, #document_move, #document_delete, #version_new, #version_edit, #version_delete').on('click', function () {
    $('#modal').modal('show');
    ajax.set('#modal .modal-content', $(this).data('url') + urlSearch.toUrl('id[]'), 'GET', undefined, false, urlSearch.onDataEdited.bind(urlSearch));
  }); //---------------------
  // Modal_detail
  //---------------------

  /*
  $(document).ajaxComplete(function(e, xhr) {
  	if (xhr.responseText === '') {
  		//urlSearch.fetch();
  		$('#modal').modal('hide');
  		ajax.set('#toast', $('#toast').data('url'));
  	}
  });
  */
  //---------------------
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
    urlSearch.lineChecked();
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

  $('#vues').find('button[data-id]').on('click', function () {
    urlSearch.set('vue', $(this).data('id'));
    urlSearch.fetch();
  });
  $('#vues').find('a[data-url]').on('click', function () {
    $('#modal').modal('show');
    ajax.set('#modal .modal-content', $(this).data('url') + urlSearch.toUrl(), 'GET', undefined, false, urlSearch.onVueEdited.bind(urlSearch));
  });
  $('#vue_new').on('click', function () {
    $('#modal').modal('show');
    ajax.set('#modal .modal-content', $(this).data('url') + urlSearch.toUrl(), 'GET', undefined, false, urlSearch.onVueEdited.bind(urlSearch));
  });
  fillDisplay();
  urlSearch.setFromUrl(window.location.search);
  urlSearch.fetch();
});

/***/ })

},[["./assets/js/document.js","runtime","vendors~app~automation~dashboard~document~login","vendors~app~document","vendors~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwidGFibGVIZWFkZXJzIiwiVXJsU2VhcmNoIiwiX3BhcmFtc0FycmF5IiwicHJvdG90eXBlIiwiaGFzIiwia2V5IiwiZ2V0IiwiZXhlYyIsImdldEFsbCIsInNldCIsInZhbHVlIiwiYXBwZW5kIiwic2V0RnJvbVVybCIsInBhcmFtc0FycmF5IiwidG9VcmwiLCJ1cmwiLCJ0b1N0cmluZyIsInZhbHVlcyIsImkiLCJqb2luIiwiZmV0Y2giLCJkYXRhIiwiaGlkZSIsImFqYXgiLCJ1bmRlZmluZWQiLCJmaWxsVGFibGUiLCJiaW5kIiwidGFyZ2V0IiwicmVzdWx0IiwiZW1wdHkiLCJzaG93IiwiY29uc29sZSIsImxvZyIsInF1ZXJ5Iiwic2VhcmNoVXJsIiwicGFyYW0iLCJ0aGF0IiwiZmluZCIsImVhY2giLCJhdHRyIiwicGFyZW50IiwidGFibGVIZWFkZXIiLCJkaXNwbGF5IiwiaWQiLCJhRGlzcGxheSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjaHhEaXNwbGF5IiwicHJvcCIsImNvbCIsImNzcyIsInRoIiwiYnRuRHJvcGRvd24iLCJpc0ZpbHRlcmVkIiwiaXNTb3J0ZWRBc2MiLCJpc1NvcnRlZERlc2MiLCJzZWxlY3RzIiwic2VsZWN0IiwibmFtZSIsImljb24iLCJmdW5uZWxGaWxsIiwiZnVubmVsIiwiYXJyb3dEb3duIiwiYXJyb3dVcCIsInZlcnNpb25zIiwidmVyc2lvbiIsInRyIiwiY3JlYXRlIiwiY2hpbGRyZW4iLCJsYXN0IiwiZGl2IiwidGQiLCJjaGVja2JveCIsInZhbCIsIm9uIiwibGluZUNoZWNrZWQiLCJsYWJlbCIsImRhdGFDbGFzcyIsInRleHQiLCJ1cmxTZWFyY2giLCJ0b0RhdGUiLCJEYXRlIiwiYWRkRGF5cyIsInNtYWxsQnV0dG9uIiwiZGV0YWlsVXJsIiwiZGV0YWlscyIsIm1vZGFsIiwic2hvd0RldGFpbCIsInBhZ2VNYXgiLCJwYWdlIiwicGFyc2VJbnQiLCJNYXRoIiwibWF4IiwibWluIiwidWwiLCJsaSIsImEiLCJzcGFuIiwiaHRtbCIsInBhZ2VTdGFydCIsInBhZ2VFbmQiLCJyZXN1bHRzUGVyUGFnZSIsIk1hcCIsImFsbCIsIm9wdGlvbiIsImZsYXNoIiwiaGVhZGVyIiwiaW5jbHVkZXMiLCJleGNsYW1hdGlvbiIsImluZm9ybWF0aW9uIiwiY2xvc2UiLCJib2R5IiwibGVuZ3RoIiwibWVzc2FnZSIsInRvYXN0IiwiY2hlY2tlZCIsInVuY2hlY2tlZCIsImlzIiwicmVtb3ZlIiwicG9wb3ZlciIsImUiLCJzaG93Q29udGVudCIsImhhc0NsYXNzIiwidHJpZ2dlciIsIm9uRGF0YUVkaXRlZCIsImJsdXIiLCJkYXRlcGlja2VyIiwib25TdWNjZXNzIiwib25WdWVFZGl0ZWQiLCJsb2NhdGlvbiIsImFzc2lnbiIsIm9yaWdpbiIsInBhdGhuYW1lIiwiY3JlYXRlVGFibGVIZWFkZXIiLCJjbG9zZXN0IiwiZXEiLCJpbmRleCIsInRpdGxlIiwic29ydCIsInR5cGUiLCJtdWx0aXBsZUF0dHIiLCJzbHQiLCJtdWx0aXBsZSIsIm9wdGlvbnMiLCJwdXNoIiwiZGl2RHJvcGRvd25Hcm91cCIsImNsaWNrRXZlbnQiLCJjb250YWlucyIsInJlbGF0ZWRUYXJnZXQiLCJwYXJlbnROb2RlIiwicHJldmVudERlZmF1bHQiLCJkaXZEcm9wZG93bk1lbnUiLCJtZW51QnV0dG9uIiwiY3JlYXRlTWVudSIsImRpdkNvbnRlbnQiLCJkaXZGaWx0ZXIiLCJidG5Tb3J0RGVzYyIsImJ0bkZpbHRlciIsImZpbHRlciIsImNoeFNlbGVjdEFsbCIsImNoeCIsImRyb3Bkb3duIiwiYnRuU29ydEFzYyIsImRpdlNlYXJjaCIsImlucHV0Iiwic2VhcmNoVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImRpdlNlbGVjdEFsbCIsImluZGV4T2YiLCJkaXZMaXN0Iiwic2VsZWN0QWxsIiwibGJsIiwiZGl2VW5rbm93biIsImNoeFVua25vd24iLCJub3RBcHBsaWNhYmxlIiwibm90IiwidmFsdWVJbmYiLCJ2YWx1ZVN1cCIsImhpZ2hsaWdodCIsImNoeEluZiIsImlucHV0SW5mIiwiY2h4U3VwIiwiaW5wdXRTdXAiLCJjaHhIaWdobGlnaHQiLCJkaXZJbmYiLCJ0ZXN0IiwiZnJvbURhdGUiLCJsYWJlbEluZiIsInN0b3BQcm9wYWdhdGlvbiIsImRpdlN1cCIsImxhYmVsU3VwIiwiZGl2SGlnaGxpZ2h0IiwibGFiZWxIaWdobGlnaHQiLCJmaWxsRGlzcGxheSIsImRvY3VtZW50IiwicmVhZHkiLCJjb2xsYXBzZSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsIndpbmRvdyIsInNlYXJjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBLElBQU1DLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyw4REFBRCxDQUF0Qjs7QUFDQUEsbUJBQU8sQ0FBQyxpR0FBRCxDQUFQLEMsQ0FDQTtBQUNBOzs7QUFDQUEsbUJBQU8sQ0FBQyx3REFBRCxDQUFQOztBQUNBLElBQU1FLGVBQWUsR0FBR0YsbUJBQU8sQ0FBQywwRkFBRCxDQUEvQjs7QUFFQSxJQUFJRyxZQUFZLEdBQUcsRUFBbkIsQyxDQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxTQUFULEdBQXNCO0FBQ3JCLE9BQUtDLFlBQUwsR0FBb0IsSUFBSUgsZUFBSixFQUFwQjtBQUNBOztBQUVERSxTQUFTLENBQUNFLFNBQVYsR0FBc0I7QUFFckJDLEtBQUcsRUFBRSxhQUFTQyxHQUFULEVBQWM7QUFDbEIsV0FBTyxLQUFLSCxZQUFMLENBQWtCRSxHQUFsQixDQUFz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LENBQUNuRSxVQUFWLENBQXFCMEwsTUFBTSxDQUFDckUsUUFBUCxDQUFnQnNFLE1BQXJDO0FBQ0F4SCxXQUFTLENBQUMzRCxLQUFWO0FBRUEsQ0E1SkQsRSIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuY29uc3QgcG9wcGVyID0gcmVxdWlyZSgncG9wcGVyLmpzJyk7XHJcbnJlcXVpcmUoJ3N0aWNreS10YWJsZS1oZWFkZXJzJyk7XHJcbi8vY29uc3QgdGFibGVEcmFnZ2VyID0gcmVxdWlyZSgndGFibGUtZHJhZ2dlcicpO1xyXG4vL3JlcXVpcmUoJ2pxdWVyeS1yZXNpemFibGUtY29sdW1ucycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvZG9jdW1lbnQuc2NzcycpO1xyXG5jb25zdCBVUkxTZWFyY2hQYXJhbXMgPSByZXF1aXJlKCdAdW5nYXAvdXJsLXNlYXJjaC1wYXJhbXMvY2pzJyk7XHJcblxyXG52YXIgdGFibGVIZWFkZXJzID0gW107XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vL1VybFNlYXJjaFxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gVXJsU2VhcmNoICgpIHtcclxuXHR0aGlzLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxufVxyXG5cclxuVXJsU2VhcmNoLnByb3RvdHlwZSA9IHtcclxuXHJcblx0aGFzOiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdHJldHVybiB0aGlzLl9wYXJhbXNBcnJheS5oYXMoa2V5KTtcclxuXHR9LFxyXG5cdFxyXG5cdGdldDogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRpZiAoL1xcUytcXFtcXF0vZy5leGVjKGtleSkpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmdldEFsbChrZXkpIHx8IFtdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmdldChrZXkpIHx8ICcnO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0c2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRpZiAoa2V5ID09ICd2dWUnKSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7J3Z1ZSc6IHZhbHVlfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheS5zZXQoa2V5LCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRhcHBlbmQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHRcdGlmIChrZXkgPT0gJ3Z1ZScpIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsndnVlJzogdmFsdWV9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5LmFwcGVuZChrZXksIHZhbHVlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdGRlbGV0ZTogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHR0aGlzLl9wYXJhbXNBcnJheS5kZWxldGUoa2V5KTtcclxuXHR9LFxyXG5cdFxyXG5cdHNldEZyb21Vcmw6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRsZXQgcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHZhbHVlKTtcclxuXHRcdGlmIChwYXJhbXNBcnJheS5oYXMoJ3Z1ZScpKSB7XHJcblx0XHRcdHRoaXMuc2V0KCd2dWUnLCBwYXJhbXNBcnJheS5nZXQoJ3Z1ZScpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5ID0gcGFyYW1zQXJyYXk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHR0b1VybDogZnVuY3Rpb24oa2V5ID0gJycpIHtcclxuXHRcdGxldCB1cmwgPSAnJztcclxuXHRcdGlmIChrZXkgPT0gJycpIHtcclxuXHRcdFx0dXJsID0gdGhpcy5fcGFyYW1zQXJyYXkudG9TdHJpbmcoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhbHVlcyA9IHRoaXMuZ2V0KGtleSk7XHJcblx0XHRcdGZvciAoaSBpbiB2YWx1ZXMpIHtcclxuXHRcdFx0XHR2YWx1ZXNbaV0gPSBrZXkgKyAnPScgKyB2YWx1ZXNbaV07XHJcblx0XHRcdH1cclxuXHRcdFx0dXJsID0gdmFsdWVzLmpvaW4oJyYnKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAodXJsKT8nPycgKyB1cmw6Jyc7XHJcblx0fSxcclxuXHRcclxuXHRmZXRjaDogZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdGxldCB1cmwgPSAkKCcjdGFibGUnKS5kYXRhKCd1cmwnKSArIHRoaXMudG9VcmwoKTtcclxuXHRcdCQoJyN0YWJsZScpLmhpZGUoKTtcclxuXHRcdGFqYXguc2V0KCcjc3Bpbm5lcicsIHVybCwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHRoaXMuZmlsbFRhYmxlLmJpbmQodGhpcykpO1xyXG5cdFx0XHJcblx0fSxcclxuXHRcclxuXHRmaWxsVGFibGU6IGZ1bmN0aW9uKHRhcmdldCwgcmVzdWx0ID0gJycpIHtcclxuXHRcdFxyXG5cdFx0JCgnI3NwaW5uZXInKS5lbXB0eSgpO1xyXG5cdFx0JCgnI3RhYmxlID4gdGJvZHknKS5lbXB0eSgpO1xyXG5cdFx0JCgnI3RhYmxlJykuc2hvdygpO1xyXG5cdFx0aWYgKHJlc3VsdCA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cdFx0XHJcblx0XHRjb25zb2xlLmxvZyhyZXN1bHQucXVlcnkpO1xyXG5cdFx0XHJcblx0XHRsZXQgc2VhcmNoVXJsID0gJC5wYXJhbShyZXN1bHQucXVlcnkpO1xyXG5cdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFVybCk7XHJcblx0XHR0aGlzLmRlbGV0ZSgnaWRbXScpO1xyXG5cdFx0XHJcblx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcclxuXHRcdC8vdnVlXHJcblx0XHQkKCcjdnVlcycpLmZpbmQoJ2J1dHRvbltkYXRhLWlkXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICgkKHRoaXMpLmRhdGEoJ2lkJykgPT0gdGhhdC5nZXQoJ3Z1ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLW91dGxpbmUtcHJpbWFyeScpO1xyXG5cdFx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnZGl2ID4gYnV0dG9uJykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLXByaW1hcnknKTtcclxuXHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ2RpdiA+IGJ1dHRvbicpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tcHJpbWFyeSBkcm9wZG93bi10b2dnbGUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdGZvciAobGV0IHRhYmxlSGVhZGVyIG9mIHRhYmxlSGVhZGVycykge1xyXG5cdFx0XHRcclxuXHRcdFx0Ly9kaXNwbGF5XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoZGlzcGxheSA9IHRoaXMuZ2V0KCdkaXNwbGF5WycgKyB0YWJsZUhlYWRlci5pZCArICddJykpIHtcclxuXHJcblx0XHRcdFx0dGFibGVIZWFkZXIuYURpc3BsYXkuYWRkQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5hRGlzcGxheS5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnknKTtcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5jaHhEaXNwbGF5LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5jb2wuY3NzKCd3aWR0aCcsIGRpc3BsYXkgKyAnZW0nKTtcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5jb2wuc2hvdygpO1xyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLnRoLnNob3coKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQvL2hlYWRlcnNcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5lbXB0eSgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQgPSBmYWxzZTtcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZEFzYyA9IGZhbHNlO1xyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmlzU29ydGVkRGVzYyA9IGZhbHNlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAobGV0IHNlbGVjdCBvZiB0YWJsZUhlYWRlci5zZWxlY3RzKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICh0aGlzLmhhcyhzZWxlY3QubmFtZSkpIHtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNGaWx0ZXJlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0aGlzLmdldCgnc29ydEFzYycpID09IHRhYmxlSGVhZGVyLmlkKSB7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZEFzYyA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0aGlzLmdldCgnc29ydERlc2MnKSA9PSB0YWJsZUhlYWRlci5pZCkge1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjID0gdHJ1ZTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKCh0YWJsZUhlYWRlci5pc0ZpbHRlcmVkKT9pY29uLmZ1bm5lbEZpbGw6aWNvbi5mdW5uZWwpO1x0XHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MpIHtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmFwcGVuZChpY29uLmFycm93RG93bik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0YWJsZUhlYWRlci5pc1NvcnRlZERlc2MpIHtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmFwcGVuZChpY29uLmFycm93VXApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5hRGlzcGxheS5hZGRDbGFzcygnYnRuLXByaW1hcnknKTtcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5hRGlzcGxheS5yZW1vdmVDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeScpO1xyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmNoeERpc3BsYXkucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5jb2wuaGlkZSgpO1xyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLnRoLmhpZGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly90Ym9keVxyXG5cdFx0Zm9yIChsZXQgdmVyc2lvbiBvZiByZXN1bHQudmVyc2lvbnMpIHtcclxuXHRcdFx0XHJcblx0XHRcdGxldCB0ciA9ICQoJyN0YWJsZSA+IHRib2R5JykuYXBwZW5kKGNyZWF0ZS50cikuY2hpbGRyZW4oKS5sYXN0KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgZGl2ID0gdHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hdHRyKCdpZCcsICdjXycgKyB2ZXJzaW9uLmlkKVxyXG5cdFx0XHRcdC52YWwodmVyc2lvbi5pZClcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgdGhpcy5saW5lQ2hlY2tlZC5iaW5kKHRoaXMpKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXR0cignZm9yJywgJ2NfJyArIHZlcnNpb24uaWQpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdFxyXG5cdFx0XHRmb3IgKGxldCB0YWJsZUhlYWRlciBvZiB0YWJsZUhlYWRlcnMpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRkYXRhID0gdmVyc2lvblt0YWJsZUhlYWRlci5pZF07XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKGRhdGEgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0c3dpdGNoICh0YWJsZUhlYWRlci5jb2wuYXR0cignY2xhc3MnKSkge1xyXG5cdFx0XHRcdFx0XHRjYXNlICd0eXBlLWJvb2xlYW4nOlxyXG5cdFx0XHRcdFx0XHRcdGlmIChkYXRhID09IDApIGRhdGEgPSAnTm8nO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChkYXRhID09IDEpIGRhdGEgPSAnWWVzJztcclxuXHRcdFx0XHRcdFx0Y2FzZSAndHlwZS12ZXJzaW9uJzpcclxuXHRcdFx0XHRcdFx0Y2FzZSAndHlwZS1kYXRlJzpcclxuXHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndGV4dC1jZW50ZXInO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlICd0eXBlLXJlZmVyZW5jZSc6XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3R5cGUtbmFtZSc6XHJcblx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3RleHQtbGVmdCc7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJyc7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcyhkYXRhQ2xhc3MpXHJcblx0XHRcdFx0XHRcdC50ZXh0KGRhdGEpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8vaGlnaGxpZ2h0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdoaWdobGlnaHQnKSA9PSB0YWJsZUhlYWRlci5pZCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoZGF0YS50b0RhdGUoKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChkYXRhLnRvRGF0ZSgpIDwgbmV3IERhdGUoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dHIuYWRkQ2xhc3MoJ2hpZ2hsaWdodC1sYXRlJyk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkYXRhLnRvRGF0ZSgpLmFkZERheXMoLTE1KSA8IG5ldyBEYXRlKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRyLmFkZENsYXNzKCdoaWdobGlnaHQtMTUnKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKGRhdGEudG9EYXRlKCkuYWRkRGF5cygtMzApIDwgbmV3IERhdGUoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dHIuYWRkQ2xhc3MoJ2hpZ2hsaWdodC0zMCcpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0ci5hZGRDbGFzcygnaGlnaGxpZ2h0LW9rJyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5jb2wuaGlkZSgpO1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIudGguaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdidG4tc3VjY2VzcyB3LTEwMCcpXHJcblx0XHRcdFx0XHQuYXR0cignZGF0YS11cmwnLCB2ZXJzaW9uLmRldGFpbFVybClcclxuXHRcdFx0XHRcdC50ZXh0KHRleHQuZGV0YWlscylcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQkKCcjdGFibGUgdGJvZHkgYnV0dG9uW2RhdGEtdXJsXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjbW9kYWxfZGV0YWlsJykubW9kYWwoJ3Nob3cnKTtcclxuXHRcdFx0YWpheC5zZXQoJyNtb2RhbF9kZXRhaWwgLm1vZGFsLWJvZHknLCAkKHRoaXMpLmRhdGEoJ3VybCcpLCAnR0VUJywgdW5kZWZpbmVkLCBmYWxzZSwgdGhhdC5zaG93RGV0YWlsLmJpbmQodGhhdCkpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdC8vcGFnaW5hdGlvblxyXG5cdFx0JCgnI3BhZ2luYXRpb24nKS5lbXB0eSgpO1xyXG5cdFx0XHRcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5hZGRDbGFzcygnbWItNCcpO1xyXG5cdFx0XHJcblx0XHRsZXQgcGFnZU1heCA9IHJlc3VsdC5wYWdlTWF4O1xyXG5cdFx0bGV0IHBhZ2UgPSBwYXJzZUludCh0aGlzLmdldCgncGFnZScpKSB8fCAxO1xyXG5cdFx0cGFnZSA9IE1hdGgubWF4KE1hdGgubWluKHBhZ2UsIHBhZ2VNYXgpLCAxKTtcclxuXHRcdFxyXG5cdFx0ZGl2ID0gJCgnI3BhZ2luYXRpb24nKS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdyb3cgbS0wJylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0ZGl2LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbCcpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHVsID0gZGl2LmFwcGVuZChjcmVhdGUudWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygncGFnaW5hdGlvbiBjb2wganVzdGlmeS1jb250ZW50LWNlbnRlcicpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGlmIChyZXN1bHQucGFnZU1heCA+IDEpIHtcclxuXHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gMSk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmIChwYWdlID4gMSkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNldCgncGFnZScsIHBhZ2UgLSAxKTtcclxuXHRcdFx0XHRcdFx0dGhhdC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LmZldGNoKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBNYXRoLm1heCgxLCBwYWdlIC0gMSkpXHJcblx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKVxyXG5cdFx0XHRcdFx0XHQuaHRtbCgnJmxhcXVvOycpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBwYWdlU3RhcnQgPSBNYXRoLm1pbihNYXRoLm1heCgxLCBwYWdlIC0gMiksIE1hdGgubWF4KDEsIHJlc3VsdC5wYWdlTWF4IC0gNCkpO1xyXG5cdFx0XHRsZXQgcGFnZUVuZCA9IE1hdGgubWluKHBhZ2VTdGFydCArIDUsIHBhZ2VNYXgpO1xyXG5cdFx0XHRcclxuXHRcdFx0Zm9yIChsZXQgaSA9IHBhZ2VTdGFydDsgaSA8PSBwYWdlRW5kOyBpKyspIHtcclxuXHRcdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IGkpPycgYWN0aXZlJzonJykpXHJcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuc2V0KCdwYWdlJywgaSk7XHJcblx0XHRcdFx0XHRcdHRoYXQuZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0dGhhdC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBpKVxyXG5cdFx0XHRcdFx0XHQudGV4dChpKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gcGFnZU1heCk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmIChwYWdlIDwgcGFnZU1heCkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNldCgncGFnZScsIHBhZ2UgKyAxKTtcclxuXHRcdFx0XHRcdFx0dGhhdC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LmZldGNoKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBNYXRoLm1pbihwYWdlTWF4LCBwYWdlICsgMSkpXHJcblx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKVxyXG5cdFx0XHRcdFx0XHQuaHRtbCgnJnJhcXVvOycpXHJcblx0XHRcdDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c2VsZWN0ID0gZGl2LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBtdC0xIG1yLTUnKVxyXG5cdFx0XHQuYXBwZW5kKGNyZWF0ZS5zZWxlY3QpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBiZy1kYXJrIGJvcmRlci1zZWNvbmRhcnkgdGV4dC13aGl0ZScpXHJcblx0XHRcdC5jc3MoJ3dpZHRoJywgJzE1MCcpXHJcblx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dXJsU2VhcmNoLnNldCgncmVzdWx0c19wZXJfcGFnZScsICQodGhpcykudmFsKCkpXHJcblx0XHRcdFx0dGhhdC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRsZXQgcmVzdWx0c1BlclBhZ2UgPSBuZXcgTWFwKFtbJzEwJywgMTBdLCBbJzUwJywgNTBdLCBbJzEwMCcsIDEwMF0sIFt0ZXh0LmFsbCwgJzAnXV0pO1xyXG5cdFx0Zm9yIChsZXQgW3RleHQsIHZhbHVlXSBvZiByZXN1bHRzUGVyUGFnZSkge1xyXG5cdFx0XHRzZWxlY3QuYXBwZW5kKGNyZWF0ZS5vcHRpb24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ3ZhbHVlJywgdmFsdWUpXHJcblx0XHRcdFx0LmF0dHIoJ3NlbGVjdGVkJywgdXJsU2VhcmNoLmdldCgncmVzdWx0c19wZXJfcGFnZScpID09IHZhbHVlKVxyXG5cdFx0XHRcdC50ZXh0KHRleHQpXHJcblx0XHRcdDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0XHQvL2ZsYXNoZXNcclxuXHRcdFxyXG5cdFx0JCgnI3RvYXN0JykuZW1wdHkoKTtcclxuXHRcdFxyXG5cdFx0Zm9yIChjb25zdCBsYWJlbCBpbiByZXN1bHQuZmxhc2gpIHtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBkaXYgPSAkKCcjdG9hc3QnKS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3RvYXN0IHB4LTMnKVxyXG5cdFx0XHRcdC5hdHRyKCdyb2xlJywgJ2FsZXJ0JylcclxuXHRcdFx0XHQuZGF0YSgnZGVsYXknLCA1MDAwKVxyXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWxpdmUnLCAnYXNzZXJ0aXZlJylcclxuXHRcdFx0XHQuYXR0cignYXJpYS1hdG9taWMnLCB0cnVlKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgaGVhZGVyID0gZGl2LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygndG9hc3QtaGVhZGVyJylcclxuXHRcdFx0XHQuYXBwZW5kKChbJ2RhbmdlcicsICd3YXJuaW5nJ10uaW5jbHVkZXMobGFiZWwpKT9pY29uLmV4Y2xhbWF0aW9uOmljb24uaW5mb3JtYXRpb24pXHJcblx0XHRcdFx0LmFwcGVuZChpY29uLmNsb3NlKTtcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGJvZHkgPSBkaXYuYXBwZW5kKGNyZWF0ZS51bCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3RvYXN0LWJvZHknKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAocmVzdWx0LmZsYXNoW2xhYmVsXS5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgbWVzc2FnZSBvZiByZXN1bHQuZmxhc2hbbGFiZWxdKSB7XHJcblx0XHRcdFx0XHRib2R5LmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC50ZXh0KG1lc3NhZ2UpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGJvZHkudGV4dChyZXN1bHQuZmxhc2hbbGFiZWxdWzBdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0ZGl2LnRvYXN0KCdzaG93Jyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMubGluZUNoZWNrZWQoKTtcclxuXHRcdFxyXG5cdFx0Ly8kKCd0YWJsZScpLnN0aWNreVRhYmxlSGVhZGVycygpO1xyXG5cdFx0XHJcblx0fSxcclxuXHRcclxuXHRsaW5lQ2hlY2tlZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHJcblx0XHR2YXIgY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0dmFyIHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuXHRcdCQoJ3Rib2R5JykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dW5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGNoZWNrZWQgJiYgdW5jaGVja2VkKSB7XHJcblx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0dGhhdC5kZWxldGUoJ2lkW10nKTtcclxuXHRcdFxyXG5cdFx0aWYgKGNoZWNrZWQpIHtcclxuXHRcdFx0JCgndGFibGUnKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICgkKHRoaXMpLnByb3AoJ2lkJykgIT0gJ2NoZWNrX2FsbCcgJiYgJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0dGhhdC5hcHBlbmQoJ2lkW10nLCAkKHRoaXMpLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5zaG93KCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuc2hvdygpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuc2hvdygpO1xyXG5cdFx0XHQkKCcjdmVyc2lvbl9tZW51Jykuc2hvdygpO1xyXG5cdFx0fSBlbHNlIGlmKHVuY2hlY2tlZCkge1xyXG5cdFx0XHQkKCcjdmVyc2lvbicpLnZhbCgnJyk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfbW92ZScpLmhpZGUoKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLmhpZGUoKTtcclxuXHRcdFx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdHNob3dEZXRhaWw6IGZ1bmN0aW9uKHRhcmdldCwgcmVzdWx0ID0gJycpIHtcclxuXHRcdCQodGFyZ2V0KS5maW5kKCcuc3Bpbm5lci1ib3JkZXInKS5wYXJlbnQoKS5yZW1vdmUoKTtcclxuXHRcdGlmIChyZXN1bHQpIHtcclxuXHRcdFx0JCh0YXJnZXQpLmh0bWwoJCh0YXJnZXQpLmh0bWwoKSArIHJlc3VsdCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBwb3BvdmVyXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcblx0XHQkKHRhcmdldCkuZmluZCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKTtcclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIEFqYXhcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHQgICAgLy9hamF4LmZldGNoKHRhcmdldCwgdGhpcy5zaG93RGV0YWlsLmJpbmQodGhpcykpO1xyXG5cdCAgICBcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFxyXG5cdFx0JCgnI3ZlcnNpb25fdGFicycpLmZpbmQoJ2EnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0aWYgKCQodGhpcykucGFyZW50KCkuaGFzKCcuYWN0aXZlJykpIHtcclxuXHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRhamF4LnNldCgnI3ZlcnNpb25fY29udGVudCcsICQodGhpcykuZGF0YSgndXJsJyksICdHRVQnLCB1bmRlZmluZWQsIGZhbHNlLCB0aGF0LnNob3dDb250ZW50LmJpbmQodGhhdCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdCQodGhpcykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoJyN2ZXJzaW9uX25ld19kZXRhaWwsICN2ZXJzaW9uX2VkaXRfZGV0YWlsLCAjdmVyc2lvbl9yZW1vdmVfZGV0YWlsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJyNtb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcblx0XHRcdGFqYXguc2V0KCcjbW9kYWwgLm1vZGFsLWNvbnRlbnQnLCAkKHRoaXMpLmRhdGEoJ3VybCcpICsgJz9pZFtdPScgKyAkKCcjdmVyc2lvbl90YWJzPmEuYWN0aXZlJykuZGF0YSgnaWQnKSwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHRoYXQub25EYXRhRWRpdGVkLmJpbmQodGhhdCkpO1xyXG5cdCAgICB9KTtcclxuXHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBNb2RhbCAmIENvbGxhcHNlXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCAgICBcclxuXHRcdCQodGFyZ2V0KS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2hyZWY9XCIjJyArICQodGhpcykuYXR0cignaWQnKSArICdcIl0nKVxyXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuXHRcdFx0XHQuYmx1cigpXHJcblx0XHRcdDtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKHRhcmdldCkub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScpLmJsdXIoKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKHRhcmdldCkuZmluZCgnYnV0dG9uW2RhdGEtZGlzbWlzc10nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnI21vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBCb290c3RyYXAgZGF0ZXBpY2tlclxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdFx0JCh0YXJnZXQpLmZpbmQoJy5kYXRlcGlja2VyJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5kYXRlcGlja2VyKCk7XHJcblx0XHR9KVxyXG5cdH0sXHJcblx0XHJcblx0c2hvd0NvbnRlbnQ6IGZ1bmN0aW9uKHRhcmdldCwgcmVzdWx0ID0gJycpIHtcclxuXHRcdFxyXG5cdFx0YWpheC5vblN1Y2Nlc3ModGFyZ2V0LCByZXN1bHQpO1xyXG5cclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFxyXG5cdFx0JCgnI3NhdmUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnI21vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuXHRcdFx0YWpheC5zZXQoJyNtb2RhbCAubW9kYWwtY29udGVudCcsICQodGhpcykuZGF0YSgndXJsJyksICdHRVQnLCB1bmRlZmluZWQsIGZhbHNlLCB0aGF0Lm9uRGF0YUVkaXRlZC5iaW5kKHRoYXQpKTtcclxuXHQgICAgfSk7XHJcblx0fSxcclxuXHRcclxuXHRvbkRhdGFFZGl0ZWQ6IGZ1bmN0aW9uKHRhcmdldCwgcmVzdWx0ID0gJycpIHtcclxuXHRcdFxyXG5cdFx0aWYgKHJlc3VsdCkge1xyXG5cdFx0XHRhamF4Lm9uU3VjY2Vzcyh0YXJnZXQsIHJlc3VsdCwgdGhpcy5vbkRhdGFFZGl0ZWQuYmluZCh0aGlzKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRpZiAoJCgnI21vZGFsX2RldGFpbCcpLmhhc0NsYXNzKCdzaG93JykpIHtcclxuXHRcdFx0XHRhamF4LnNldCgnI21vZGFsX2RldGFpbCAubW9kYWwtYm9keScsICQoJyNtZW51JykuZGF0YSgndXJsJyksICdHRVQnLCB1bmRlZmluZWQsIGZhbHNlLCB0aGF0LnNob3dEZXRhaWwuYmluZCh0aGF0KSk7XHJcblx0XHRcdH1cclxuXHRcdFx0JCgnI21vZGFsIC5tb2RhbC1jb250ZW50JykuZW1wdHkoKTtcclxuXHRcdFx0JCgnI21vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sXHJcblx0XHJcblx0b25WdWVFZGl0ZWQ6IGZ1bmN0aW9uKHRhcmdldCwgcmVzdWx0ID0gJycpIHtcclxuXHRcdFxyXG5cdFx0aWYgKHJlc3VsdCkge1xyXG5cdFx0XHRhamF4Lm9uU3VjY2Vzcyh0YXJnZXQsIHJlc3VsdCwgdGhpcy5vblZ1ZUVkaXRlZC5iaW5kKHRoaXMpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxvY2F0aW9uLmFzc2lnbihsb2NhdGlvbi5vcmlnaW4gKyBsb2NhdGlvbi5wYXRobmFtZSArIHVybFNlYXJjaC50b1VybCgpKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sXHJcblx0XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vIHRhYmxlSGVhZGVyXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYWJsZUhlYWRlcih0aGF0KSB7XHJcblx0XHJcblx0dmFyIHRhYmxlSGVhZGVyID0ge1xyXG5cdFx0Y29sOiAkKHRoYXQpLmNsb3Nlc3QoJ3RhYmxlJykuZmluZCgnY29sJykuZXEoJCh0aGF0KS5pbmRleCgpKSxcclxuXHRcdHRoOiAkKHRoYXQpLFxyXG5cdFx0aWQ6ICQodGhhdCkuYXR0cignaWQnKSxcclxuXHRcdG5hbWU6ICQodGhhdCkuYXR0cignbmFtZScpLFxyXG5cdFx0dGl0bGU6ICQodGhhdCkuZGF0YSgndGl0bGUnKSxcclxuXHRcdHNvcnQ6ICQodGhhdCkuZGF0YSgnc29ydCcpLFxyXG5cdFx0dHlwZTogJCh0aGF0KS5hdHRyKCdjbGFzcycpLFxyXG5cdFx0aXNGaWx0ZXJlZDogZmFsc2UsXHJcblx0XHRpc1NvcnRlZEFzYzogZmFsc2UsXHJcblx0XHRpc1NvcnRlZERlc2M6IGZhbHNlLFxyXG5cdFx0c2VsZWN0czogW10sXHJcblx0fVxyXG5cdFxyXG5cdCQodGhhdCkuZmluZCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0dmFyIG11bHRpcGxlQXR0ciA9ICh0eXBlb2YgJCh0aGlzKS5hdHRyKCdtdWx0aXBsZScpICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmICQodGhpcykuYXR0cignbXVsdGlwbGUnKSAhPT0gZmFsc2UpO1xyXG5cdFx0dmFyIG5hbWUgPSAkKHRoaXMpLnByb3AoJ25hbWUnKSArICgobXVsdGlwbGVBdHRyKT8nW10nOicnKTtcclxuXHRcdFxyXG5cdFx0dmFyIHNlbGVjdCA9IHtcclxuXHRcdFx0XHRzbHQ6ICQodGhpcyksXHJcblx0XHRcdFx0aWQ6ICQodGhpcykucHJvcCgnaWQnKSxcclxuXHRcdFx0XHRuYW1lOiBuYW1lLFxyXG5cdFx0XHRcdG11bHRpcGxlOiBtdWx0aXBsZUF0dHIsXHJcblx0XHRcdFx0dGl0bGU6ICQodGhpcykuZGF0YSgndGl0bGUnKSxcclxuXHRcdFx0XHRvcHRpb25zOiBbXSxcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdCQodGhpcykuZmluZCgnb3B0aW9uJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0c2VsZWN0Lm9wdGlvbnMucHVzaCh7XHJcblx0XHRcdFx0dmFsdWU6ICQodGhpcykuYXR0cigndmFsdWUnKSxcclxuXHRcdFx0XHR0ZXh0OiAkKHRoaXMpLnRleHQoKSxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuc2VsZWN0cy5wdXNoKHNlbGVjdCk7XHJcblx0XHRcclxuXHR9KTtcclxuXHRcclxuXHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGggfHwgdGFibGVIZWFkZXIudHlwZSA9PSAndHlwZS1kYXRlJykge1xyXG5cdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cCA9IHRhYmxlSGVhZGVyLnRoLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0bi1ncm91cCB3LTEwMCcpXHJcblx0XHRcdC5hdHRyKCdyb2xlJywgJ2dyb3VwJylcclxuXHRcdFx0Lm9uKCdoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZihlLmNsaWNrRXZlbnQgJiYgJC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQucGFyZW50Tm9kZSwgZS5jbGlja0V2ZW50LnRhcmdldCkpIHtcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUuZW1wdHkoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3ctMTAwJylcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LnRleHQodGFibGVIZWFkZXIudGl0bGUpXHJcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cyAmJiB0YWJsZUhlYWRlci5zb3J0KSB7XHJcblx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IHRhYmxlSGVhZGVyLnNlbGVjdHNbMF0ubmFtZSkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnREZXNjJywgdGFibGVIZWFkZXIuc2VsZWN0c1swXS5uYW1lKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnRBc2MnLCB0YWJsZUhlYWRlci5zZWxlY3RzWzBdLm5hbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHJcblx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93biA9IHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3B4LTAnKVxyXG5cdFx0XHQuY3NzKCd3aWR0aCcsICczZW0nKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHQuYXR0cignaWQnLCAnYl8nICsgdGFibGVIZWFkZXIuaWQpXHJcblx0XHRcdC5hdHRyKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpXHJcblx0XHRcdC5hdHRyKCdhcmlhLWhhc3BvcHVwJywgdHJ1ZSlcclxuXHRcdFx0LmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcclxuXHRcdDtcclxuXHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duTWVudSA9IHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnZHJvcGRvd24tbWVudScpXHJcblx0XHRcdC5hdHRyKCdhcmlhLWxhYmVsbGVkYnknLCAnYl8nICsgdGFibGVIZWFkZXIuaWQpXHJcblx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2QtZmxleCBmbGV4LXJvdycpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBjcmVhdGVNZW51KTtcclxuXHRcdFxyXG5cdH0gZWxzZSB7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duID0gdGFibGVIZWFkZXIudGguYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3ctMTAwJylcclxuXHRcdFx0LnRleHQodGFibGVIZWFkZXIudGl0bGUpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdilcclxuXHRcdDtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuXHRcdFxyXG5cdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoKSB7XHJcblx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRmb3IgKGxldCBzZWxlY3Qgb2YgdGFibGVIZWFkZXIuc2VsZWN0cykge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZDb250ZW50ID0gdGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdteC0xJylcclxuXHRcdFx0XHRcdC5jc3MoJ21pbi13aWR0aCcsICcxNWVtJylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHNlbGVjdC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0XHRcdHNlbGVjdC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItZGFyayBwYi0yIHB4LTEnKVxyXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoc2VsZWN0LnRpdGxlKTtcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3QuZGl2RmlsdGVyID0gc2VsZWN0LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgcC0xJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0XHRcdFx0c2VsZWN0LmJ0blNvcnREZXNjID0gc2VsZWN0LmRpdkZpbHRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd1VwKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSB0YWJsZUhlYWRlci5pZCk/J3B4LTIgYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOidweC0yIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSB0YWJsZUhlYWRlci5pZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydERlc2MnLCB0YWJsZUhlYWRlci5pZCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5idG5GaWx0ZXIudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHNlbGVjdC5idG5GaWx0ZXIgPSBzZWxlY3QuZGl2RmlsdGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC50ZXh0KHRleHQuZmlsdGVyKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTMgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgc2VsZWN0IG9mIHRhYmxlSGVhZGVyLnNlbGVjdHMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCFzZWxlY3QuY2h4U2VsZWN0QWxsLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb24uY2h4LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKHNlbGVjdC5uYW1lLCBvcHRpb24udmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRzZWxlY3QuYnRuU29ydEFzYyA9IHNlbGVjdC5kaXZGaWx0ZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKGljb24uYXJyb3dEb3duKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IHRhYmxlSGVhZGVyLmlkKT8ncHgtMiBidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J3B4LTIgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IHRhYmxlSGVhZGVyLmlkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnRBc2MnLCB0YWJsZUhlYWRlci5pZCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuYnRuRmlsdGVyLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3QuZGl2U2VhcmNoID0gc2VsZWN0LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItZGFyayBwLTInKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3QuZGl2U2VhcmNoLmFwcGVuZChjcmVhdGUuaW5wdXQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgc2VhcmNoVmFsdWUgPSAkKHRoaXMpLnZhbCgpLnRvTG93ZXJDYXNlKClcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoc2VhcmNoVmFsdWUgPT0gJycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb24udGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVmFsdWUpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmRpdi5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5jaHgucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZMaXN0ID0gc2VsZWN0LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTIgb3ZlcmZsb3ctYXV0byAnICsgKChzZWxlY3QubXVsdGlwbGUpPydwdC0zJzoncHQtMScpKVxyXG5cdFx0XHRcdFx0LmNzcygnbWF4LWhlaWdodCcsICcyMGVtJylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHNlbGVjdC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdFx0c2VsZWN0LmRpdlNlbGVjdEFsbCA9IHNlbGVjdC5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHNlbGVjdC5jaHhTZWxlY3RBbGwgPSBzZWxlY3QuZGl2U2VsZWN0QWxsLmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ19zZWxlY3RBbGwnKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHZhciBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsLmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfc2VsZWN0QWxsJylcclxuXHRcdFx0XHRcdFx0LnRleHQodGV4dC5zZWxlY3RBbGwpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0b3B0aW9uLmRpdiA9IHNlbGVjdC5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFxyXG5cdFx0XHRcdFx0XHRvcHRpb24uY2h4ID0gb3B0aW9uLmRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ18nICsgb3B0aW9uLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdXJsU2VhcmNoLmdldChzZWxlY3QubmFtZSkuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSlcclxuXHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBjaGVja2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgdW5jaGVja2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoJChvcHRpb24uY2h4KS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGNoZWNrZWQgJiYgdW5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5jaHhTZWxlY3RBbGwucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0LmNoeFNlbGVjdEFsbC5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdG9wdGlvbi5sYmwgPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIHNlbGVjdC5uYW1lICsgJ18nICsgb3B0aW9uLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdC50ZXh0KG9wdGlvbi50ZXh0KVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3QuZGl2VW5rbm93biA9IHNlbGVjdC5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHNlbGVjdC5jaHhVbmtub3duID0gc2VsZWN0LmRpdlVua25vd24uYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnX25vdEFwcGxpY2FibGUnKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsICF1cmxTZWFyY2guaGFzKHNlbGVjdC5uYW1lKSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHZhciBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdFx0c2VsZWN0LmRpdlVua25vd24uYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIHNlbGVjdC5uYW1lICsgJ19ub3RBcHBsaWNhYmxlJylcclxuXHRcdFx0XHRcdFx0LnRleHQodGV4dC5ub3RBcHBsaWNhYmxlKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdG9wdGlvbi5kaXYgPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdG9wdGlvbi5jaHggPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCB1cmxTZWFyY2guZ2V0KHNlbGVjdC5uYW1lKS5pbmNsdWRlcyhvcHRpb24udmFsdWUpKVxyXG5cdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LmRpdkxpc3QuZmluZCgnaW5wdXQnKS5ub3QodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXNlbGVjdC5jaHhVbmtub3duLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb24uY2h4LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKHNlbGVjdC5uYW1lLCBvcHRpb24udmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRvcHRpb24ubGJsID0gb3B0aW9uLmRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHQudGV4dChvcHRpb24udGV4dClcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH0gZWxzZSBpZiAodGFibGVIZWFkZXIudHlwZSA9PSAndHlwZS1kYXRlJykge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKChyZXN1bHQgPSAvPihcXGR7Mn0tXFxkezJ9LVxcZHs0fSkvLmV4ZWModXJsU2VhcmNoLmdldCh0YWJsZUhlYWRlci5uYW1lICsgJ1tdJykudG9TdHJpbmcoKSkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0dmFyIHZhbHVlSW5mID0gcmVzdWx0WzFdO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHZhciB2YWx1ZUluZiA9ICcnO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoKHJlc3VsdCA9IC88KFxcZHsyfS1cXGR7Mn0tXFxkezR9KS8uZXhlYyh1cmxTZWFyY2guZ2V0KHRhYmxlSGVhZGVyLm5hbWUgKyAnW10nKS50b1N0cmluZygpKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHR2YXIgdmFsdWVTdXAgPSByZXN1bHRbMV07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dmFyIHZhbHVlU3VwID0gJyc7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHZhciBoaWdobGlnaHQgPSAodXJsU2VhcmNoLmdldCgnaGlnaGxpZ2h0JykudG9TdHJpbmcoKSA9PSB0YWJsZUhlYWRlci5pZCk7XHJcblx0XHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5kaXZDb250ZW50ID0gdGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnbXgtMScpXHJcblx0XHRcdFx0LmNzcygnbWluLXdpZHRoJywgJzE1ZW0nKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5kaXZGaWx0ZXIgPSB0YWJsZUhlYWRlci5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgcC0xJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuYnRuU29ydERlc2MgPSB0YWJsZUhlYWRlci5kaXZGaWx0ZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXBwZW5kKGljb24uYXJyb3dVcClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoKHVybFNlYXJjaC5nZXQoJ3NvcnREZXNjJykgPT0gdGFibGVIZWFkZXIuaWQpPydweC0yIGJ0bi1vdXRsaW5lLXByaW1hcnkgYmctZGFyayB0ZXh0LXdoaXRlJzoncHgtMiBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydEFzYycpO1xyXG5cdFx0XHRcdFx0aWYgKHVybFNlYXJjaC5nZXQoJ3NvcnREZXNjJykgPT0gdGFibGVIZWFkZXIuaWQpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnREZXNjJywgdGFibGVIZWFkZXIuaWQpO1xyXG5cdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5GaWx0ZXIudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5idG5GaWx0ZXIgPSB0YWJsZUhlYWRlci5kaXZGaWx0ZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQudGV4dCh0ZXh0LmZpbHRlcilcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTMgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUodGFibGVIZWFkZXIubmFtZSArICdbXScpO1xyXG5cdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmNoeEluZi5pcygnOmNoZWNrZWQnKSAmJiAocmVzdWx0ID0gL17iiaVcXHMoXFxkezJ9LVxcZHsyfS1cXGR7NH0pLy5leGVjKHRhYmxlSGVhZGVyLmlucHV0SW5mLnZhbCgpKSkpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZCh0YWJsZUhlYWRlci5uYW1lICsgJ1tdJywgJz4nICsgcmVzdWx0WzFdKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmNoeFN1cC5pcygnOmNoZWNrZWQnKSAmJiAocmVzdWx0ID0gL17iiaRcXHMoXFxkezJ9LVxcZHsyfS1cXGR7NH0pLy5leGVjKHRhYmxlSGVhZGVyLmlucHV0U3VwLnZhbCgpKSkpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZCh0YWJsZUhlYWRlci5uYW1lICsgJ1tdJywgJzwnICsgcmVzdWx0WzFdKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmNoeEhpZ2hsaWdodC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdoaWdobGlnaHQnLCB0YWJsZUhlYWRlci5pZCk7XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYgKHVybFNlYXJjaC5nZXQoJ2hpZ2hsaWdodCcpLnRvU3RyaW5nKCkgPT0gdGFibGVIZWFkZXIuaWQpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnaGlnaGxpZ2h0Jyk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLmJ0blNvcnRBc2MgPSB0YWJsZUhlYWRlci5kaXZGaWx0ZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXBwZW5kKGljb24uYXJyb3dEb3duKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IHRhYmxlSGVhZGVyLmlkKT8ncHgtMiBidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J3B4LTIgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IHRhYmxlSGVhZGVyLmlkKSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnRBc2MnLCB0YWJsZUhlYWRlci5pZCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5GaWx0ZXIudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5kaXZMaXN0ID0gdGFibGVIZWFkZXIuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTIgb3ZlcmZsb3ctYXV0byAnICsgKCh0YWJsZUhlYWRlci5tdWx0aXBsZSk/J3B0LTMnOidwdC0xJykpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLmRpdkluZiA9IHRhYmxlSGVhZGVyLmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggbXQtMicpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLmNoeEluZiA9IHRhYmxlSGVhZGVyLmRpdkluZi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hdHRyKCdpZCcsIHRhYmxlSGVhZGVyLmlkICsgJ19pbmYnKVxyXG5cdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdmFsdWVJbmYgIT0gJycpXHJcblx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGxldCBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdGlmIChjaGVja2VkKSB7XHJcblx0XHRcdFx0XHRcdGlmICgvXuKJpVxcc1xcZHsyfS1cXGR7Mn0tXFxkezR9Ly50ZXN0KHRhYmxlSGVhZGVyLmlucHV0SW5mLnZhbCgpKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pbnB1dEluZi52YWwoJycpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pbnB1dEluZi52YWwodGV4dC5mcm9tRGF0ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5pbnB1dEluZi5hdHRyKCdyZWFkb25seScsIGNoZWNrZWQgPT09IGZhbHNlKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5sYWJlbEluZiA9IHRhYmxlSGVhZGVyLmRpdkluZi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hdHRyKCdmb3InLCB0YWJsZUhlYWRlci5pZCArICdfaW5mJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuaW5wdXRJbmYgPSB0YWJsZUhlYWRlci5sYWJlbEluZi5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnZm9ybS1jb250cm9sIGRhdGVwaWNrZXInKVxyXG5cdFx0XHRcdC52YWwoKHZhbHVlSW5mKT8oJ+KJpSAnICsgdmFsdWVJbmYpOnRleHQuZnJvbURhdGUpXHJcblx0XHRcdFx0LmF0dHIoJ3JlYWRvbmx5JywgdmFsdWVJbmYgPT0gJycpXHJcblx0XHRcdFx0LmRhdGVwaWNrZXIoeydmb3JtYXQnOiAn4omlIGRkLW1tLXl5eXknfSlcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5jaHhJbmYucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuY2h4SW5mLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdCAgICAub24oJ3Nob3cuYnMuZHJvcGRvd24gaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0ICAgIFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0ICAgIH0pXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLmRpdlN1cCA9IHRhYmxlSGVhZGVyLmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggbXQtMicpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLmNoeFN1cCA9IHRhYmxlSGVhZGVyLmRpdlN1cC5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hdHRyKCdpZCcsIHRhYmxlSGVhZGVyLmlkICsgJ19zdXAnKVxyXG5cdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdmFsdWVTdXAgIT0gJycpXHJcblx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGxldCBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdGlmIChjaGVja2VkKSB7XHJcblx0XHRcdFx0XHRcdGlmICgvXuKJpFxcc1xcZHsyfS1cXGR7Mn0tXFxkezR9Ly50ZXN0KHRhYmxlSGVhZGVyLmlucHV0U3VwLnZhbCgpKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pbnB1dFN1cC52YWwoJycpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pbnB1dFN1cC52YWwodGV4dC50b0RhdGUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuaW5wdXRTdXAuYXR0cigncmVhZG9ubHknLCBjaGVja2VkID09PSBmYWxzZSk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIubGFiZWxTdXAgPSB0YWJsZUhlYWRlci5kaXZTdXAuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXR0cignZm9yJywgdGFibGVIZWFkZXIuaWQgKyAnX3N1cCcpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLmlucHV0U3VwID0gdGFibGVIZWFkZXIubGFiZWxTdXAuYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBkYXRlcGlja2VyJylcclxuXHRcdFx0XHQudmFsKCh2YWx1ZVN1cCk/J+KJpCAnICsgdmFsdWVTdXA6dGV4dC50b0RhdGUpXHJcblx0XHRcdFx0LmF0dHIoJ3JlYWRvbmx5JywgdmFsdWVTdXAgPT0gJycpXHJcblx0XHRcdFx0LmRhdGVwaWNrZXIoeydmb3JtYXQnOiBcIuKJpCBkZC1tbS15eXl5XCJ9KVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNoeFN1cC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5jaHhTdXAudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0ICAgIC5vbignc2hvdy5icy5kcm9wZG93biBoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQgICAgXHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHQgICAgfSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuZGl2SGlnaGxpZ2h0ID0gdGFibGVIZWFkZXIuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCBtdC0yJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuY2h4SGlnaGxpZ2h0ID0gdGFibGVIZWFkZXIuZGl2SGlnaGxpZ2h0LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ2lkJywgdGFibGVIZWFkZXIuaWQgKyAnX2hpZ2hsaWdodCcpXHJcblx0XHRcdFx0LmF0dHIoJ25hbWUnLCAnaGlnaGxpZ2h0JylcclxuXHRcdFx0XHQudmFsKHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgaGlnaGxpZ2h0KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5sYWJlbEhpZ2hsaWdodCA9IHRhYmxlSGVhZGVyLmRpdkhpZ2hsaWdodC5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hdHRyKCdmb3InLCB0YWJsZUhlYWRlci5pZCArICdfaGlnaGxpZ2h0JylcclxuXHRcdFx0XHQudGV4dCh0ZXh0LmhpZ2hsaWdodClcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gdGFibGVIZWFkZXI7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGZpbGxEaXNwbGF5XHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBmaWxsRGlzcGxheSgpIHtcclxuXHR2YXIgY29sID0gJCgnI2Rpc3BsYXknKS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdC5hZGRDbGFzcygncm93IHB5LTInKVxyXG5cdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbCcpXHJcblx0O1xyXG5cdFxyXG5cdGZvciAobGV0IHRhYmxlSGVhZGVyIG9mIHRhYmxlSGVhZGVycykge1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5hRGlzcGxheSA9IGNvbC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeSBjb2wtMiBtLTEgdGV4dC1sZWZ0JylcclxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmNoeERpc3BsYXkucHJvcCgnY2hlY2tlZCcsICF0YWJsZUhlYWRlci5jaHhEaXNwbGF5LmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgZGlzcGxheSA9IHVybFNlYXJjaC5nZXQoJ2Rpc3BsYXlbJyArIHRhYmxlSGVhZGVyLmlkICsgJ10nKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdkaXNwbGF5WycgKyB0YWJsZUhlYWRlci5pZCArICddJyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmNoeERpc3BsYXkuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdGlmIChkaXNwbGF5ID09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5hcHBlbmQoJ2Rpc3BsYXlbJyArIHRhYmxlSGVhZGVyLmlkICsgJ10nLCAxMCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0bGV0IGRpdiA9IHRhYmxlSGVhZGVyLmFEaXNwbGF5LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuY2h4RGlzcGxheSA9IGRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXR0cignaWQnLCAnaF8nICsgdGFibGVIZWFkZXIuaWQpXHJcblx0XHRcdC5vbignY2hhbmdlIGNsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmF0dHIoJ2ZvcicsICdoXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0LnRleHQodGFibGVIZWFkZXIudGl0bGUpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxuXHRcclxufVx0XHJcblxyXG52YXIgdXJsU2VhcmNoID0gbmV3IFVybFNlYXJjaCgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBTZWFyY2ggZm9ybVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3NlYXJjaCBidXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0dXJsU2VhcmNoLnNldCgnc2VhcmNoJywgJCgnI3NlYXJjaCBpbnB1dCcpLnZhbCgpKTtcclxuXHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHJcblx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdFxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNzZWFyY2ggYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHQkKCcjc2VhcmNoIGlucHV0JykudmFsKCcnKTtcclxuXHRcdFxyXG5cdFx0aWYgKHVybFNlYXJjaC5oYXMoJ3NlYXJjaCcpKSB7XHJcblx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NlYXJjaCcpO1xyXG5cdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHJcblx0fSk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBNb2RhbFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0LypcclxuXHQkKCcjbW9kYWwnKS5vbignc2hvdy5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGFqYXguc2V0KCcjbW9kYWwgLm1vZGFsLWNvbnRlbnQnLCAkKGUucmVsYXRlZFRhcmdldCkuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9VcmwoKSk7XHJcblx0fSk7XHJcblx0Ki9cclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfbmV3LCAjZG9jdW1lbnRfZWRpdCwgI2RvY3VtZW50X21vdmUsICNkb2N1bWVudF9kZWxldGUsICN2ZXJzaW9uX25ldywgI3ZlcnNpb25fZWRpdCwgI3ZlcnNpb25fZGVsZXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0YWpheC5zZXQoJyNtb2RhbCAubW9kYWwtY29udGVudCcsICQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9VcmwoJ2lkW10nKSwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHVybFNlYXJjaC5vbkRhdGFFZGl0ZWQuYmluZCh1cmxTZWFyY2gpKTtcclxuXHR9KVxyXG5cdFxyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gTW9kYWxfZGV0YWlsXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQvKlxyXG5cdCQoZG9jdW1lbnQpLmFqYXhDb21wbGV0ZShmdW5jdGlvbihlLCB4aHIpIHtcclxuXHRcdGlmICh4aHIucmVzcG9uc2VUZXh0ID09PSAnJykge1xyXG5cdFx0XHQvL3VybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0XHRhamF4LnNldCgnI3RvYXN0JywgJCgnI3RvYXN0JykuZGF0YSgndXJsJykpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdCovXHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gTWVudSBkaXNwbGF5XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0JCgnI2RvY3VtZW50X2VkaXQnKS5oaWRlKCk7XHJcblx0JCgnI2RvY3VtZW50X21vdmUnKS5oaWRlKCk7XHJcblx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLmhpZGUoKTtcclxuXHQkKCcjdmVyc2lvbl9tZW51JykuaGlkZSgpO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gVGFiIGNvbGxhcHNlXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjdGFicycpLm9uKCdzaG93LmJzLnRhYicsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLmNvbGxhcHNlJykuY29sbGFwc2UoJ3Nob3cnKTtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5yZW1vdmVDbGFzcygndGFic19oaWRkZW4nKTtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5hZGRDbGFzcygndGFic19zaG93ZWQnKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdGFicyB1bCBsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdCQodGhpcykuYmx1cigpO1xyXG5cdFx0XHQkKHRoaXMpLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSk7XHJcblx0XHRcdCQoJyMnICsgJCh0aGlzKS5hdHRyKCdhcmlhLWNvbnRyb2xzJykpLnBhcmVudCgpLmNvbGxhcHNlKCdoaWRlJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcbiAgICBcclxuXHQkKCcjdGFicycpLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCd0YWJzX2hpZGRlbicpO1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCd0YWJzX3Nob3dlZCcpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN0YWJzJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5yZW1vdmVDbGFzcygndGFic19zaG93ZWQnKTtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5hZGRDbGFzcygndGFic19oaWRkZW4nKTtcclxuXHR9KTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIENoZWNrIGFsbCBjaGVja2JveGVzXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjY2hlY2tfYWxsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCd0Ym9keScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsICQoJyNjaGVja19hbGwnKS5pcygnOmNoZWNrZWQnKSk7XHJcblx0XHR9KTtcclxuXHRcdHVybFNlYXJjaC5saW5lQ2hlY2tlZCgpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gSnF1ZXJ5IFJlc2l6YWJsZSBDb2x1bW5zXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQvLyQoJ3RhYmxlJykucmVzaXphYmxlQ29sdW1ucygpO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gRHJhZ3RhYmxlXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQvKlxyXG5cdHZhciBkcmFnZ2VyID0gdGFibGVEcmFnZ2VyLmRlZmF1bHQoJCgndGFibGUnKS5nZXQoMCksIHtcclxuICAgICAgICBtb2RlOiAnY29sdW1uJyxcclxuXHR9KTtcclxuXHQqL1xyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gVGFibGUgaGVhZGVyc1xyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3RhYnMnKS50cmlnZ2VyKCdzaG93LmJzLnRhYicpO1xyXG5cdFxyXG5cdCQoJ3RhYmxlJykuZmluZCgndGhbaWRdW2RhdGEtdGl0bGVdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdHRhYmxlSGVhZGVycy5wdXNoKGNyZWF0ZVRhYmxlSGVhZGVyKHRoaXMpKTtcclxuXHR9KTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFZ1ZXNcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyN2dWVzJykuZmluZCgnYnV0dG9uW2RhdGEtaWRdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHR1cmxTZWFyY2guc2V0KCd2dWUnLCAkKHRoaXMpLmRhdGEoJ2lkJykpO1xyXG5cdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3Z1ZXMnKS5maW5kKCdhW2RhdGEtdXJsXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnI21vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuXHRcdGFqYXguc2V0KCcjbW9kYWwgLm1vZGFsLWNvbnRlbnQnLCAkKHRoaXMpLmRhdGEoJ3VybCcpICsgdXJsU2VhcmNoLnRvVXJsKCksICdHRVQnLCB1bmRlZmluZWQsIGZhbHNlLCB1cmxTZWFyY2gub25WdWVFZGl0ZWQuYmluZCh1cmxTZWFyY2gpKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdnVlX25ldycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnI21vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuXHRcdGFqYXguc2V0KCcjbW9kYWwgLm1vZGFsLWNvbnRlbnQnLCAkKHRoaXMpLmRhdGEoJ3VybCcpICsgdXJsU2VhcmNoLnRvVXJsKCksICdHRVQnLCB1bmRlZmluZWQsIGZhbHNlLCB1cmxTZWFyY2gub25WdWVFZGl0ZWQuYmluZCh1cmxTZWFyY2gpKTtcclxuXHR9KTtcclxuXHRcclxuXHRmaWxsRGlzcGxheSgpO1xyXG5cdHVybFNlYXJjaC5zZXRGcm9tVXJsKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9