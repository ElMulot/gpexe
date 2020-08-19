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
      return this._paramsArray.getAll(key) || [];
    } else {
      return this._paramsArray.get(key) || [];
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

              if (this.get('sortAsc') == _select.name) {
                tableHeader.isSortedAsc = true;
              }

              if (this.get('sortDesc') == _select.name) {
                tableHeader.isSortedDesc = true;
              }
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
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

              tr.append(create.td).children().last().addClass(dataClass).text(data);
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
    div = $('#pagination').append(create.div).children().last().addClass('row');
    div.append(create.div).children().last().addClass('col');
    ul = div.append(create.ul).children().last().addClass('pagination col justify-content-center');

    if (result.pageMax > 1) {
      ul.append(create.li).children().last().addClass('page-item' + (page == 1 ? ' disabled' : '')).on('click', function () {
        if (page > 1) {
          that.set('page', page - 1);
          that.fetch();
        }
      }).append(create.a).children().last().addClass('page-link').attr('data-value', Math.max(1, page - 1)).append(create.span).children().last().attr('aria-hidden', true).html('&laquo;');
      var pageStart = Math.min(Math.max(1, page - 2), Math.max(1, result.pageMax - 4));
      var pageEnd = Math.min(pageStart + 5, pageMax);

      var _loop = function _loop(_i) {
        ul.append(create.li).children().last().addClass('page-item' + (page == _i ? ' active' : '')).on('click', function () {
          that.set('page', _i);
          that.fetch();
        }).append(create.a).children().last().addClass('page-link').attr('data-value', _i).text(_i);
      };

      for (var _i = pageStart; _i <= pageEnd; _i++) {
        _loop(_i);
      }

      ul.append(create.li).children().last().addClass('page-item' + (page == pageMax ? ' disabled' : '')).on('click', function () {
        if (page < pageMax) {
          that.set('page', page + 1);
          that.fetch();
        }
      }).append(create.a).children().last().addClass('page-link').attr('data-value', Math.min(pageMax, page + 1)).append(create.span).children().last().attr('aria-hidden', true).html('&raquo;');
    }

    select = div.append(create.div).children().last().addClass('col d-flex justify-content-end mt-1 mr-5').append(create.select).children().last().addClass('form-control form-control-sm bg-dark border-secondary text-white').css('width', '150').on('change', function () {
      urlSearch.set('results_per_page', $(this).val());
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
      $(this).datepicker({
        format: "dd-mm-yyyy",
        weekStart: 1,
        maxViewMode: 3,
        language: $(this).data('locale'),
        multidate: false,
        daysOfWeekDisabled: "0,6",
        autoclose: true,
        calendarWeeks: true,
        clearBtn: true,
        todayBtn: true,
        todayHighlight: true
      });
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

              var _iterator8 = _createForOfIteratorHelper(select.options),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var option = _step8.value;
                  option.div.show();
                  option.chx.prop('checked', false);
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }
            } else {
              select.divSelectAll.hide();

              var _iterator9 = _createForOfIteratorHelper(select.options),
                  _step9;

              try {
                for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                  var _option = _step9.value;

                  if (_option.text.toLowerCase().indexOf(searchValue) == -1) {
                    _option.div.hide();

                    _option.chx.prop('checked', false);
                  } else {
                    _option.div.show();

                    _option.chx.prop('checked', true);
                  }
                }
              } catch (err) {
                _iterator9.e(err);
              } finally {
                _iterator9.f();
              }
            }
          });
        }

        select.divList = select.divContent.append(create.div).children().last().addClass('px-2 overflow-auto ' + (select.multiple ? 'pt-3' : 'pt-1')).css('max-height', '20em');

        if (select.multiple) {
          select.divSelectAll = select.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
          select.chxSelectAll = select.divSelectAll.append(create.checkbox).children().last().attr('id', select.name + '_selectAll').on('change', function () {
            var checked = $(this).is(':checked');

            var _iterator10 = _createForOfIteratorHelper(select.options),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var option = _step10.value;
                option.chx.prop('checked', checked);
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
            }
          });
          select.divSelectAll.append(create.label).children().last().attr('for', select.name + '_selectAll').text(text.selectAll);

          var _iterator11 = _createForOfIteratorHelper(select.options),
              _step11;

          try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
              var option = _step11.value;
              option.div = select.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
              option.chx = option.div.append(create.checkbox).children().last().attr('id', select.name + '_' + option.value).attr('checked', urlSearch.get(select.name).includes(option.value)).on('click', function () {
                var checked = false;
                var unchecked = false;

                var _iterator12 = _createForOfIteratorHelper(select.options),
                    _step12;

                try {
                  for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                    var _option2 = _step12.value;

                    if ($(_option2.chx).is(':checked')) {
                      checked = true;
                    } else {
                      unchecked = true;
                    }
                  }
                } catch (err) {
                  _iterator12.e(err);
                } finally {
                  _iterator12.f();
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
            _iterator11.e(err);
          } finally {
            _iterator11.f();
          }
        } else {
          select.divUnknown = select.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
          select.chxUnknown = select.divUnknown.append(create.checkbox).children().last().attr('id', select.name + '_notApplicable').attr('checked', !urlSearch.has(select.name)).on('change', function () {
            var checked = $(this).is(':checked');

            var _iterator13 = _createForOfIteratorHelper(select.options),
                _step13;

            try {
              for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                var _option3 = _step13.value;

                _option3.chx.prop('checked', false);
              }
            } catch (err) {
              _iterator13.e(err);
            } finally {
              _iterator13.f();
            }

            urlSearch["delete"](select.name);
            tableHeader.btnDropdown.dropdown('hide');
            urlSearch.fetch();
          });
          select.divUnknown.append(create.label).children().last().attr('for', select.name + '_notApplicable').text(text.notApplicable);

          var _iterator14 = _createForOfIteratorHelper(select.options),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var _option4 = _step14.value;
              _option4.div = select.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
              _option4.chx = _option4.div.append(create.checkbox).children().last().attr('id', select.name + '_' + _option4.value).attr('checked', urlSearch.get(select.name).includes(_option4.value)).on('click', function () {
                select.divList.find('input').not(this).prop('checked', false);
                urlSearch["delete"](select.name);

                if (!select.chxUnknown.is(':checked')) {
                  var _iterator15 = _createForOfIteratorHelper(select.options),
                      _step15;

                  try {
                    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                      var _option5 = _step15.value;

                      if (_option5.chx.is(':checked')) {
                        urlSearch.append(select.name, _option5.value);
                      }
                    }
                  } catch (err) {
                    _iterator15.e(err);
                  } finally {
                    _iterator15.f();
                  }
                }

                tableHeader.btnDropdown.dropdown('hide');
                urlSearch.fetch();
              });
              _option4.lbl = _option4.div.append(create.label).children().last().attr('for', select.name + '_' + _option4.value).text(_option4.text);
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
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
            var _iterator16 = _createForOfIteratorHelper(select.options),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                var _option6 = _step16.value;

                if (_option6.chx.is(':checked')) {
                  urlSearch.append(select.name, _option6.value);
                }
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
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

      for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
        _loop2();
      }
    } catch (err) {
      _iterator7.e(err);
    } finally {
      _iterator7.f();
    }
  }

  return tableHeader;
} //---------------
// fillDisplay
//---------------


function fillDisplay() {
  var col = $('#display').append(create.div).children().last().addClass('row py-2').append(create.div).children().last().addClass('col');

  var _iterator17 = _createForOfIteratorHelper(tableHeaders),
      _step17;

  try {
    var _loop3 = function _loop3() {
      var tableHeader = _step17.value;
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

    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
      _loop3();
    }
  } catch (err) {
    _iterator17.e(err);
  } finally {
    _iterator17.f();
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

},[["./assets/js/document.js","runtime","vendors~app~automation~dashboard~document~login","vendors~app~document","vendors~document","app~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwidGFibGVIZWFkZXJzIiwiVXJsU2VhcmNoIiwiX3BhcmFtc0FycmF5IiwicHJvdG90eXBlIiwiaGFzIiwia2V5IiwiZ2V0IiwiZXhlYyIsImdldEFsbCIsInNldCIsInZhbHVlIiwiYXBwZW5kIiwic2V0RnJvbVVybCIsInBhcmFtc0FycmF5IiwidG9VcmwiLCJ1cmwiLCJ0b1N0cmluZyIsInZhbHVlcyIsImkiLCJqb2luIiwiZmV0Y2giLCJkYXRhIiwiaGlkZSIsImFqYXgiLCJ1bmRlZmluZWQiLCJmaWxsVGFibGUiLCJiaW5kIiwidGFyZ2V0IiwicmVzdWx0IiwiZW1wdHkiLCJzaG93Iiwic2VhcmNoVXJsIiwicGFyYW0iLCJxdWVyeSIsInRoYXQiLCJmaW5kIiwiZWFjaCIsImF0dHIiLCJwYXJlbnQiLCJ0YWJsZUhlYWRlciIsImRpc3BsYXkiLCJpZCIsImFEaXNwbGF5IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNoeERpc3BsYXkiLCJwcm9wIiwiY29sIiwiY3NzIiwidGgiLCJidG5Ecm9wZG93biIsImlzRmlsdGVyZWQiLCJpc1NvcnRlZEFzYyIsImlzU29ydGVkRGVzYyIsInNlbGVjdHMiLCJzZWxlY3QiLCJuYW1lIiwiaWNvbiIsImZ1bm5lbEZpbGwiLCJmdW5uZWwiLCJhcnJvd0Rvd24iLCJhcnJvd1VwIiwidmVyc2lvbnMiLCJ2ZXJzaW9uIiwidHIiLCJjcmVhdGUiLCJjaGlsZHJlbiIsImxhc3QiLCJkaXYiLCJ0ZCIsImNoZWNrYm94IiwidmFsIiwib24iLCJsaW5lQ2hlY2tlZCIsImxhYmVsIiwiZGF0YUNsYXNzIiwidGV4dCIsInNtYWxsQnV0dG9uIiwiZGV0YWlsVXJsIiwiZGV0YWlscyIsIm1vZGFsIiwic2hvd0RldGFpbCIsInBhZ2VNYXgiLCJwYWdlIiwicGFyc2VJbnQiLCJNYXRoIiwibWF4IiwibWluIiwidWwiLCJsaSIsImEiLCJzcGFuIiwiaHRtbCIsInBhZ2VTdGFydCIsInBhZ2VFbmQiLCJ1cmxTZWFyY2giLCJyZXN1bHRzUGVyUGFnZSIsIk1hcCIsImFsbCIsIm9wdGlvbiIsImZsYXNoIiwiaGVhZGVyIiwiaW5jbHVkZXMiLCJleGNsYW1hdGlvbiIsImluZm9ybWF0aW9uIiwiY2xvc2UiLCJib2R5IiwibGVuZ3RoIiwibWVzc2FnZSIsInRvYXN0IiwiY2hlY2tlZCIsInVuY2hlY2tlZCIsImlzIiwicmVtb3ZlIiwicG9wb3ZlciIsImUiLCJzaG93Q29udGVudCIsImhhc0NsYXNzIiwidHJpZ2dlciIsIm9uRGF0YUVkaXRlZCIsImJsdXIiLCJkYXRlcGlja2VyIiwiZm9ybWF0Iiwid2Vla1N0YXJ0IiwibWF4Vmlld01vZGUiLCJsYW5ndWFnZSIsIm11bHRpZGF0ZSIsImRheXNPZldlZWtEaXNhYmxlZCIsImF1dG9jbG9zZSIsImNhbGVuZGFyV2Vla3MiLCJjbGVhckJ0biIsInRvZGF5QnRuIiwidG9kYXlIaWdobGlnaHQiLCJvblN1Y2Nlc3MiLCJvblZ1ZUVkaXRlZCIsImxvY2F0aW9uIiwiYXNzaWduIiwib3JpZ2luIiwicGF0aG5hbWUiLCJjcmVhdGVUYWJsZUhlYWRlciIsImNsb3Nlc3QiLCJlcSIsImluZGV4IiwidGl0bGUiLCJzb3J0IiwibXVsdGlwbGVBdHRyIiwic2x0IiwibXVsdGlwbGUiLCJvcHRpb25zIiwicHVzaCIsImRpdkRyb3Bkb3duR3JvdXAiLCJjbGlja0V2ZW50IiwiY29udGFpbnMiLCJyZWxhdGVkVGFyZ2V0IiwicGFyZW50Tm9kZSIsInByZXZlbnREZWZhdWx0IiwiZGl2RHJvcGRvd25NZW51IiwibWVudUJ1dHRvbiIsImNyZWF0ZU1lbnUiLCJkaXZDb250ZW50IiwiZGl2RmlsdGVyIiwiYnRuU29ydERlc2MiLCJzb3J0RGVzYyIsImZpbHRlciIsImJ0blNvcnRBc2MiLCJzb3J0QXNjIiwiZGl2U2VhcmNoIiwiaW5wdXQiLCJzZWFyY2hWYWx1ZSIsInRvTG93ZXJDYXNlIiwiZGl2U2VsZWN0QWxsIiwiY2h4IiwiaW5kZXhPZiIsImRpdkxpc3QiLCJjaHhTZWxlY3RBbGwiLCJzZWxlY3RBbGwiLCJsYmwiLCJkaXZVbmtub3duIiwiY2h4VW5rbm93biIsImRyb3Bkb3duIiwibm90QXBwbGljYWJsZSIsIm5vdCIsImZpbGxEaXNwbGF5IiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbGxhcHNlIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwid2luZG93Iiwic2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQUEsbUJBQU8sQ0FBQyx3Q0FBRCxDQUFQOztBQUNBLElBQU1DLENBQUMsR0FBR0QsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQSxJQUFNRSxNQUFNLEdBQUdGLG1CQUFPLENBQUMsOERBQUQsQ0FBdEI7O0FBQ0FBLG1CQUFPLENBQUMsaUdBQUQsQ0FBUCxDLENBQ0E7QUFDQTs7O0FBQ0FBLG1CQUFPLENBQUMsd0RBQUQsQ0FBUDs7QUFDQSxJQUFNRyxlQUFlLEdBQUdILG1CQUFPLENBQUMsMEZBQUQsQ0FBL0I7O0FBRUEsSUFBSUksWUFBWSxHQUFHLEVBQW5CLEMsQ0FFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0MsU0FBVCxHQUFzQjtBQUNyQixPQUFLQyxZQUFMLEdBQW9CLElBQUlILGVBQUosRUFBcEI7QUFDQTs7QUFFREUsU0FBUyxDQUFDRSxTQUFWLEdBQXNCO0FBRXJCQyxLQUFHLEVBQUUsYUFBU0MsR0FBVCxFQUFjO0FBQ2xCLFdBQU8sS0FBS0gsWUFBTCxDQUFrQkUsR0FBbEIsQ0FBc0JDLEdBQXRCLENBQVA7QUFDQSxHQUpvQjtBQU1yQkMsS0FBRyxFQUFFLGFBQVNELEdBQVQsRUFBYztBQUNs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LCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJyZXF1aXJlKCcuLi9qcy9hcHAuanMnKTtcclxuY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5jb25zdCBwb3BwZXIgPSByZXF1aXJlKCdwb3BwZXIuanMnKTtcclxucmVxdWlyZSgnc3RpY2t5LXRhYmxlLWhlYWRlcnMnKTtcclxuLy9jb25zdCB0YWJsZURyYWdnZXIgPSByZXF1aXJlKCd0YWJsZS1kcmFnZ2VyJyk7XHJcbi8vcmVxdWlyZSgnanF1ZXJ5LXJlc2l6YWJsZS1jb2x1bW5zJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9kb2N1bWVudC5zY3NzJyk7XHJcbmNvbnN0IFVSTFNlYXJjaFBhcmFtcyA9IHJlcXVpcmUoJ0B1bmdhcC91cmwtc2VhcmNoLXBhcmFtcy9janMnKTtcclxuXHJcbnZhciB0YWJsZUhlYWRlcnMgPSBbXTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vVXJsU2VhcmNoXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBVcmxTZWFyY2ggKCkge1xyXG5cdHRoaXMuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG59XHJcblxyXG5VcmxTZWFyY2gucHJvdG90eXBlID0ge1xyXG5cclxuXHRoYXM6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmhhcyhrZXkpO1xyXG5cdH0sXHJcblx0XHJcblx0Z2V0OiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdGlmICgvXFxTK1xcW1xcXS9nLmV4ZWMoa2V5KSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGFyYW1zQXJyYXkuZ2V0QWxsKGtleSkgfHwgW107XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGFyYW1zQXJyYXkuZ2V0KGtleSkgfHwgW107XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHRcdGlmIChrZXkgPT0gJ3Z1ZScpIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsndnVlJzogdmFsdWV9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5LnNldChrZXksIHZhbHVlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdGFwcGVuZDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG5cdFx0aWYgKGtleSA9PSAndnVlJykge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoeyd2dWUnOiB2YWx1ZX0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkuYXBwZW5kKGtleSwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0ZGVsZXRlOiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdHRoaXMuX3BhcmFtc0FycmF5LmRlbGV0ZShrZXkpO1xyXG5cdH0sXHJcblx0XHJcblx0c2V0RnJvbVVybDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGxldCBwYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXModmFsdWUpO1xyXG5cdFx0aWYgKHBhcmFtc0FycmF5LmhhcygndnVlJykpIHtcclxuXHRcdFx0dGhpcy5zZXQoJ3Z1ZScsIHBhcmFtc0FycmF5LmdldCgndnVlJykpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBwYXJhbXNBcnJheTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdHRvVXJsOiBmdW5jdGlvbihrZXkgPSAnJykge1xyXG5cdFx0bGV0IHVybCA9ICcnO1xyXG5cdFx0aWYgKGtleSA9PSAnJykge1xyXG5cdFx0XHR1cmwgPSB0aGlzLl9wYXJhbXNBcnJheS50b1N0cmluZygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFsdWVzID0gdGhpcy5nZXQoa2V5KTtcclxuXHRcdFx0Zm9yIChpIGluIHZhbHVlcykge1xyXG5cdFx0XHRcdHZhbHVlc1tpXSA9IGtleSArICc9JyArIHZhbHVlc1tpXTtcclxuXHRcdFx0fVxyXG5cdFx0XHR1cmwgPSB2YWx1ZXMuam9pbignJicpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICh1cmwpPyc/JyArIHVybDonJztcclxuXHR9LFxyXG5cdFxyXG5cdGZldGNoOiBmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHVybCA9ICQoJyN0YWJsZScpLmRhdGEoJ3VybCcpICsgdGhpcy50b1VybCgpO1xyXG5cdFx0JCgnI3RhYmxlJykuaGlkZSgpO1xyXG5cdFx0YWpheC5zZXQoJyNzcGlubmVyJywgdXJsLCAnR0VUJywgdW5kZWZpbmVkLCBmYWxzZSwgdGhpcy5maWxsVGFibGUuYmluZCh0aGlzKSk7XHJcblx0XHRcclxuXHR9LFxyXG5cdFxyXG5cdGZpbGxUYWJsZTogZnVuY3Rpb24odGFyZ2V0LCByZXN1bHQgPSAnJykge1xyXG5cdFx0XHJcblx0XHQkKCcjc3Bpbm5lcicpLmVtcHR5KCk7XHJcblx0XHQkKCcjdGFibGUgPiB0Ym9keScpLmVtcHR5KCk7XHJcblx0XHQkKCcjdGFibGUnKS5zaG93KCk7XHJcblx0XHRpZiAocmVzdWx0ID09IGZhbHNlKSByZXR1cm47XHJcblx0XHRcclxuXHRcdGxldCBzZWFyY2hVcmwgPSAkLnBhcmFtKHJlc3VsdC5xdWVyeSk7XHJcblx0XHR0aGlzLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoVXJsKTtcclxuXHRcdHRoaXMuZGVsZXRlKCdpZFtdJyk7XHJcblx0XHRcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFxyXG5cdFx0Ly92dWVcclxuXHRcdCQoJyN2dWVzJykuZmluZCgnYnV0dG9uW2RhdGEtaWRdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCQodGhpcykuZGF0YSgnaWQnKSA9PSB0aGF0LmdldCgndnVlJykpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tb3V0bGluZS1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCdkaXYgPiBidXR0b24nKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBkcm9wZG93bi10b2dnbGUnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tcHJpbWFyeScpO1xyXG5cdFx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnZGl2ID4gYnV0dG9uJykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1wcmltYXJ5IGRyb3Bkb3duLXRvZ2dsZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0Zm9yIChsZXQgdGFibGVIZWFkZXIgb2YgdGFibGVIZWFkZXJzKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQvL2Rpc3BsYXlcclxuXHRcdFx0XHJcblx0XHRcdGlmIChkaXNwbGF5ID0gdGhpcy5nZXQoJ2Rpc3BsYXlbJyArIHRhYmxlSGVhZGVyLmlkICsgJ10nKSkge1xyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmFEaXNwbGF5LmFkZENsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuYURpc3BsYXkucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuY2h4RGlzcGxheS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuY29sLmNzcygnd2lkdGgnLCBkaXNwbGF5ICsgJ2VtJyk7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuY29sLnNob3coKTtcclxuXHRcdFx0XHR0YWJsZUhlYWRlci50aC5zaG93KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9oZWFkZXJzXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uZW1wdHkoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5pc0ZpbHRlcmVkID0gZmFsc2U7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MgPSBmYWxzZTtcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZERlc2MgPSBmYWxzZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IgKGxldCBzZWxlY3Qgb2YgdGFibGVIZWFkZXIuc2VsZWN0cykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGhpcy5oYXMoc2VsZWN0Lm5hbWUpKSB7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGhpcy5nZXQoJ3NvcnRBc2MnKSA9PSBzZWxlY3QubmFtZSkge1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZEFzYyA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICh0aGlzLmdldCgnc29ydERlc2MnKSA9PSBzZWxlY3QubmFtZSkge1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZERlc2MgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmFwcGVuZCgodGFibGVIZWFkZXIuaXNGaWx0ZXJlZCk/aWNvbi5mdW5uZWxGaWxsOmljb24uZnVubmVsKTtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmlzU29ydGVkQXNjKSB7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoaWNvbi5hcnJvd0Rvd24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjKSB7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoaWNvbi5hcnJvd1VwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuYURpc3BsYXkuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuYURpc3BsYXkucmVtb3ZlQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5jaHhEaXNwbGF5LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuY29sLmhpZGUoKTtcclxuXHRcdFx0XHR0YWJsZUhlYWRlci50aC5oaWRlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vdGJvZHlcclxuXHRcdGZvciAobGV0IHZlcnNpb24gb2YgcmVzdWx0LnZlcnNpb25zKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgdHIgPSAkKCcjdGFibGUgPiB0Ym9keScpLmFwcGVuZChjcmVhdGUudHIpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGRpdiA9IHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXR0cignaWQnLCAnY18nICsgdmVyc2lvbi5pZClcclxuXHRcdFx0XHQudmFsKHZlcnNpb24uaWQpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIHRoaXMubGluZUNoZWNrZWQuYmluZCh0aGlzKSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ2ZvcicsICdjXycgKyB2ZXJzaW9uLmlkKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Zm9yIChsZXQgdGFibGVIZWFkZXIgb2YgdGFibGVIZWFkZXJzKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ZGF0YSA9IHZlcnNpb25bdGFibGVIZWFkZXIuaWRdO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdHN3aXRjaCAodGFibGVIZWFkZXIuY29sLmF0dHIoJ2NsYXNzJykpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSAndHlwZS1ib29sZWFuJzpcclxuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YSA9PSAwKSBkYXRhID0gJ05vJztcclxuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YSA9PSAxKSBkYXRhID0gJ1llcyc7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3R5cGUtdmVyc2lvbic6XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3R5cGUtZGF0ZSc6XHJcblx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3RleHQtY2VudGVyJztcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAndHlwZS1yZWZlcmVuY2UnOlxyXG5cdFx0XHRcdFx0XHRjYXNlICd0eXBlLW5hbWUnOlxyXG5cdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0ZXh0LWxlZnQnO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICcnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoZGF0YUNsYXNzKVxyXG5cdFx0XHRcdFx0XHQudGV4dChkYXRhKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuY29sLmhpZGUoKTtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLnRoLmhpZGUoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuLXN1Y2Nlc3Mgdy0xMDAnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdXJsJywgdmVyc2lvbi5kZXRhaWxVcmwpXHJcblx0XHRcdFx0XHQudGV4dCh0ZXh0LmRldGFpbHMpXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0JCgnI3RhYmxlIHRib2R5IGJ1dHRvbltkYXRhLXVybF0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnI21vZGFsX2RldGFpbCcpLm1vZGFsKCdzaG93Jyk7XHJcblx0XHRcdGFqYXguc2V0KCcjbW9kYWxfZGV0YWlsIC5tb2RhbC1ib2R5JywgJCh0aGlzKS5kYXRhKCd1cmwnKSwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHRoYXQuc2hvd0RldGFpbC5iaW5kKHRoYXQpKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQvL3BhZ2luYXRpb25cclxuXHRcdCQoJyNwYWdpbmF0aW9uJykuZW1wdHkoKTtcclxuXHRcdFx0XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuYWRkQ2xhc3MoJ21iLTQnKTtcclxuXHRcdFxyXG5cdFx0bGV0IHBhZ2VNYXggPSByZXN1bHQucGFnZU1heDtcclxuXHRcdGxldCBwYWdlID0gcGFyc2VJbnQodGhpcy5nZXQoJ3BhZ2UnKSkgfHwgMTtcclxuXHRcdHBhZ2UgPSBNYXRoLm1heChNYXRoLm1pbihwYWdlLCBwYWdlTWF4KSwgMSk7XHJcblx0XHRcclxuXHRcdGRpdiA9ICQoJyNwYWdpbmF0aW9uJykuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygncm93JylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0ZGl2LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbCcpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHVsID0gZGl2LmFwcGVuZChjcmVhdGUudWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygncGFnaW5hdGlvbiBjb2wganVzdGlmeS1jb250ZW50LWNlbnRlcicpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGlmIChyZXN1bHQucGFnZU1heCA+IDEpIHtcclxuXHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gMSk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmIChwYWdlID4gMSkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNldCgncGFnZScsIHBhZ2UgLSAxKTtcclxuXHRcdFx0XHRcdFx0dGhhdC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgTWF0aC5tYXgoMSwgcGFnZSAtIDEpKVxyXG5cdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0Lmh0bWwoJyZsYXF1bzsnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgcGFnZVN0YXJ0ID0gTWF0aC5taW4oTWF0aC5tYXgoMSwgcGFnZSAtIDIpLCBNYXRoLm1heCgxLCByZXN1bHQucGFnZU1heCAtIDQpKTtcclxuXHRcdFx0bGV0IHBhZ2VFbmQgPSBNYXRoLm1pbihwYWdlU3RhcnQgKyA1LCBwYWdlTWF4KTtcclxuXHRcdFx0XHJcblx0XHRcdGZvciAobGV0IGkgPSBwYWdlU3RhcnQ7IGkgPD0gcGFnZUVuZDsgaSsrKSB7XHJcblx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSBpKT8nIGFjdGl2ZSc6JycpKVxyXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNldCgncGFnZScsIGkpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LmZldGNoKCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIGkpXHJcblx0XHRcdFx0XHRcdC50ZXh0KGkpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSBwYWdlTWF4KT8nIGRpc2FibGVkJzonJykpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKHBhZ2UgPCBwYWdlTWF4KSB7XHJcblx0XHRcdFx0XHRcdHRoYXQuc2V0KCdwYWdlJywgcGFnZSArIDEpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LmZldGNoKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBNYXRoLm1pbihwYWdlTWF4LCBwYWdlICsgMSkpXHJcblx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKVxyXG5cdFx0XHRcdFx0XHQuaHRtbCgnJnJhcXVvOycpXHJcblx0XHRcdDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c2VsZWN0ID0gZGl2LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBtdC0xIG1yLTUnKVxyXG5cdFx0XHQuYXBwZW5kKGNyZWF0ZS5zZWxlY3QpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBiZy1kYXJrIGJvcmRlci1zZWNvbmRhcnkgdGV4dC13aGl0ZScpXHJcblx0XHRcdC5jc3MoJ3dpZHRoJywgJzE1MCcpXHJcblx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dXJsU2VhcmNoLnNldCgncmVzdWx0c19wZXJfcGFnZScsICQodGhpcykudmFsKCkpXHJcblx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGxldCByZXN1bHRzUGVyUGFnZSA9IG5ldyBNYXAoW1snMTAnLCAxMF0sIFsnNTAnLCA1MF0sIFsnMTAwJywgMTAwXSwgW3RleHQuYWxsLCAnMCddXSk7XHJcblx0XHRmb3IgKGxldCBbdGV4dCwgdmFsdWVdIG9mIHJlc3VsdHNQZXJQYWdlKSB7XHJcblx0XHRcdHNlbGVjdC5hcHBlbmQoY3JlYXRlLm9wdGlvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXR0cigndmFsdWUnLCB2YWx1ZSlcclxuXHRcdFx0XHQuYXR0cignc2VsZWN0ZWQnLCB1cmxTZWFyY2guZ2V0KCdyZXN1bHRzX3Blcl9wYWdlJykgPT0gdmFsdWUpXHJcblx0XHRcdFx0LnRleHQodGV4dClcclxuXHRcdFx0O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRcclxuXHRcdC8vZmxhc2hlc1xyXG5cdFx0XHJcblx0XHQkKCcjdG9hc3QnKS5lbXB0eSgpO1xyXG5cdFx0XHJcblx0XHRmb3IgKGNvbnN0IGxhYmVsIGluIHJlc3VsdC5mbGFzaCkge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGRpdiA9ICQoJyN0b2FzdCcpLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygndG9hc3QgcHgtMycpXHJcblx0XHRcdFx0LmF0dHIoJ3JvbGUnLCAnYWxlcnQnKVxyXG5cdFx0XHRcdC5kYXRhKCdkZWxheScsIDUwMDApXHJcblx0XHRcdFx0LmF0dHIoJ2FyaWEtbGl2ZScsICdhc3NlcnRpdmUnKVxyXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWF0b21pYycsIHRydWUpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBoZWFkZXIgPSBkaXYuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCd0b2FzdC1oZWFkZXInKVxyXG5cdFx0XHRcdC5hcHBlbmQoKFsnZGFuZ2VyJywgJ3dhcm5pbmcnXS5pbmNsdWRlcyhsYWJlbCkpP2ljb24uZXhjbGFtYXRpb246aWNvbi5pbmZvcm1hdGlvbilcclxuXHRcdFx0XHQuYXBwZW5kKGljb24uY2xvc2UpO1xyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgYm9keSA9IGRpdi5hcHBlbmQoY3JlYXRlLnVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygndG9hc3QtYm9keScpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChyZXN1bHQuZmxhc2hbbGFiZWxdLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRmb3IgKGxldCBtZXNzYWdlIG9mIHJlc3VsdC5mbGFzaFtsYWJlbF0pIHtcclxuXHRcdFx0XHRcdGJvZHkuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LnRleHQobWVzc2FnZSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ym9keS50ZXh0KHJlc3VsdC5mbGFzaFtsYWJlbF1bMF0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRkaXYudG9hc3QoJ3Nob3cnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dGhpcy5saW5lQ2hlY2tlZCgpO1xyXG5cdFx0XHJcblx0XHQvLyQoJ3RhYmxlJykuc3RpY2t5VGFibGVIZWFkZXJzKCk7XHJcblx0XHRcclxuXHR9LFxyXG5cdFxyXG5cdGxpbmVDaGVja2VkOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcclxuXHRcdHZhciBjaGVja2VkID0gZmFsc2U7XHJcblx0XHR2YXIgdW5jaGVja2VkID0gZmFsc2U7XHJcblx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG5cdFx0JCgndGJvZHknKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR1bmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHR0aGF0LmRlbGV0ZSgnaWRbXScpO1xyXG5cdFx0XHJcblx0XHRpZiAoY2hlY2tlZCkge1xyXG5cdFx0XHQkKCd0YWJsZScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKCQodGhpcykucHJvcCgnaWQnKSAhPSAnY2hlY2tfYWxsJyAmJiAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHR0aGF0LmFwcGVuZCgnaWRbXScsICQodGhpcykudmFsKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZWRpdCcpLnNob3coKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X21vdmUnKS5zaG93KCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9kZWxldGUnKS5zaG93KCk7XHJcblx0XHRcdCQoJyN2ZXJzaW9uX21lbnUnKS5zaG93KCk7XHJcblx0XHR9IGVsc2UgaWYodW5jaGVja2VkKSB7XHJcblx0XHRcdCQoJyN2ZXJzaW9uJykudmFsKCcnKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjdmVyc2lvbl9tZW51JykuaGlkZSgpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0c2hvd0RldGFpbDogZnVuY3Rpb24odGFyZ2V0LCByZXN1bHQgPSAnJykge1xyXG5cdFx0JCh0YXJnZXQpLmZpbmQoJy5zcGlubmVyLWJvcmRlcicpLnBhcmVudCgpLnJlbW92ZSgpO1xyXG5cdFx0aWYgKHJlc3VsdCkge1xyXG5cdFx0XHQkKHRhcmdldCkuaHRtbCgkKHRhcmdldCkuaHRtbCgpICsgcmVzdWx0KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIHBvcG92ZXJcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHRcdCQodGFyZ2V0KS5maW5kKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpO1xyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gQWpheFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdCAgICAvL2FqYXguZmV0Y2godGFyZ2V0LCB0aGlzLnNob3dEZXRhaWwuYmluZCh0aGlzKSk7XHJcblx0ICAgIFxyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQkKCcjdmVyc2lvbl90YWJzJykuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5wYXJlbnQoKS5oYXMoJy5hY3RpdmUnKSkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGFqYXguc2V0KCcjdmVyc2lvbl9jb250ZW50JywgJCh0aGlzKS5kYXRhKCd1cmwnKSwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHRoYXQuc2hvd0NvbnRlbnQuYmluZCh0aGF0KSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JCgnI3ZlcnNpb25fbmV3X2RldGFpbCwgI3ZlcnNpb25fZWRpdF9kZXRhaWwsICN2ZXJzaW9uX3JlbW92ZV9kZXRhaWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnI21vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuXHRcdFx0YWpheC5zZXQoJyNtb2RhbCAubW9kYWwtY29udGVudCcsICQodGhpcykuZGF0YSgndXJsJykgKyAnP2lkW109JyArICQoJyN2ZXJzaW9uX3RhYnM+YS5hY3RpdmUnKS5kYXRhKCdpZCcpLCAnR0VUJywgdW5kZWZpbmVkLCBmYWxzZSwgdGhhdC5vbkRhdGFFZGl0ZWQuYmluZCh0aGF0KSk7XHJcblx0ICAgIH0pO1xyXG5cclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIE1vZGFsICYgQ29sbGFwc2VcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0ICAgIFxyXG5cdFx0JCh0YXJnZXQpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1baHJlZj1cIiMnICsgJCh0aGlzKS5hdHRyKCdpZCcpICsgJ1wiXScpXHJcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG5cdFx0XHRcdC5ibHVyKClcclxuXHRcdFx0O1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQodGFyZ2V0KS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJykuYmx1cigpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQodGFyZ2V0KS5maW5kKCdidXR0b25bZGF0YS1kaXNtaXNzXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIEJvb3RzdHJhcCBkYXRlcGlja2VyXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcblx0XHQkKHRhcmdldCkuZmluZCgnLmRhdGVwaWNrZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoaXMpLmRhdGVwaWNrZXIoe1xyXG5cdFx0XHRcdGZvcm1hdDogXCJkZC1tbS15eXl5XCIsXHJcblx0XHQgICAgICAgIHdlZWtTdGFydDogMSxcclxuXHRcdCAgICAgICAgbWF4Vmlld01vZGU6IDMsXHJcblx0XHQgICAgICAgIGxhbmd1YWdlOiAkKHRoaXMpLmRhdGEoJ2xvY2FsZScpLFxyXG5cdFx0ICAgICAgICBtdWx0aWRhdGU6IGZhbHNlLFxyXG5cdFx0ICAgICAgICBkYXlzT2ZXZWVrRGlzYWJsZWQ6IFwiMCw2XCIsXHJcblx0XHQgICAgICAgIGF1dG9jbG9zZTogdHJ1ZSxcclxuXHRcdCAgICAgICAgY2FsZW5kYXJXZWVrczogdHJ1ZSxcclxuXHRcdCAgICAgICAgY2xlYXJCdG46IHRydWUsXHJcblx0XHQgICAgICAgIHRvZGF5QnRuOiB0cnVlLFxyXG5cdFx0ICAgICAgICB0b2RheUhpZ2hsaWdodDogdHJ1ZSxcclxuXHRcdCAgICB9KTtcclxuXHRcdH0pXHJcblx0fSxcclxuXHRcclxuXHRzaG93Q29udGVudDogZnVuY3Rpb24odGFyZ2V0LCByZXN1bHQgPSAnJykge1xyXG5cdFx0XHJcblx0XHRhamF4Lm9uU3VjY2Vzcyh0YXJnZXQsIHJlc3VsdCk7XHJcblxyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQkKCcjc2F2ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0XHRhamF4LnNldCgnI21vZGFsIC5tb2RhbC1jb250ZW50JywgJCh0aGlzKS5kYXRhKCd1cmwnKSwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHRoYXQub25EYXRhRWRpdGVkLmJpbmQodGhhdCkpO1xyXG5cdCAgICB9KTtcclxuXHR9LFxyXG5cdFxyXG5cdG9uRGF0YUVkaXRlZDogZnVuY3Rpb24odGFyZ2V0LCByZXN1bHQgPSAnJykge1xyXG5cdFx0XHJcblx0XHRpZiAocmVzdWx0KSB7XHJcblx0XHRcdGFqYXgub25TdWNjZXNzKHRhcmdldCwgcmVzdWx0LCB0aGlzLm9uRGF0YUVkaXRlZC5iaW5kKHRoaXMpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdGlmICgkKCcjbW9kYWxfZGV0YWlsJykuaGFzQ2xhc3MoJ3Nob3cnKSkge1xyXG5cdFx0XHRcdGFqYXguc2V0KCcjbW9kYWxfZGV0YWlsIC5tb2RhbC1ib2R5JywgJCgnI21lbnUnKS5kYXRhKCd1cmwnKSwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHRoYXQuc2hvd0RldGFpbC5iaW5kKHRoYXQpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQkKCcjbW9kYWwgLm1vZGFsLWNvbnRlbnQnKS5lbXB0eSgpO1xyXG5cdFx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSxcclxuXHRcclxuXHRvblZ1ZUVkaXRlZDogZnVuY3Rpb24odGFyZ2V0LCByZXN1bHQgPSAnJykge1xyXG5cdFx0XHJcblx0XHRpZiAocmVzdWx0KSB7XHJcblx0XHRcdGFqYXgub25TdWNjZXNzKHRhcmdldCwgcmVzdWx0LCB0aGlzLm9uVnVlRWRpdGVkLmJpbmQodGhpcykpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bG9jYXRpb24uYXNzaWduKGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lICsgdXJsU2VhcmNoLnRvVXJsKCkpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSxcclxuXHRcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy8gdGFibGVIZWFkZXJcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlSGVhZGVyKHRoYXQpIHtcclxuXHRcclxuXHR2YXIgdGFibGVIZWFkZXIgPSB7XHJcblx0XHRjb2w6ICQodGhhdCkuY2xvc2VzdCgndGFibGUnKS5maW5kKCdjb2wnKS5lcSgkKHRoYXQpLmluZGV4KCkpLFxyXG5cdFx0dGg6ICQodGhhdCksXHJcblx0XHRpZDogJCh0aGF0KS5hdHRyKCdpZCcpLFxyXG5cdFx0dGl0bGU6ICQodGhhdCkuZGF0YSgndGl0bGUnKSxcclxuXHRcdHNvcnQ6ICQodGhhdCkuZGF0YSgnc29ydCcpLFxyXG5cdFx0aXNGaWx0ZXJlZDogZmFsc2UsXHJcblx0XHRpc1NvcnRlZEFzYzogZmFsc2UsXHJcblx0XHRpc1NvcnRlZERlc2M6IGZhbHNlLFxyXG5cdFx0c2VsZWN0czogW10sXHJcblx0fVxyXG5cdFxyXG5cdCQodGhhdCkuZmluZCgnc2VsZWN0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0dmFyIG11bHRpcGxlQXR0ciA9ICh0eXBlb2YgJCh0aGlzKS5hdHRyKCdtdWx0aXBsZScpICE9PSB0eXBlb2YgdW5kZWZpbmVkICYmICQodGhpcykuYXR0cignbXVsdGlwbGUnKSAhPT0gZmFsc2UpO1xyXG5cdFx0dmFyIG5hbWUgPSAkKHRoaXMpLnByb3AoJ25hbWUnKSArICgobXVsdGlwbGVBdHRyKT8nW10nOicnKTtcclxuXHRcdFxyXG5cdFx0dmFyIHNlbGVjdCA9IHtcclxuXHRcdFx0XHRzbHQ6ICQodGhpcyksXHJcblx0XHRcdFx0aWQ6ICQodGhpcykucHJvcCgnaWQnKSxcclxuXHRcdFx0XHRuYW1lOiBuYW1lLFxyXG5cdFx0XHRcdG11bHRpcGxlOiBtdWx0aXBsZUF0dHIsXHJcblx0XHRcdFx0dGl0bGU6ICQodGhpcykuZGF0YSgndGl0bGUnKSxcclxuXHRcdFx0XHRvcHRpb25zOiBbXSxcclxuXHRcdH07XHJcblx0XHRcclxuXHRcdCQodGhpcykuZmluZCgnb3B0aW9uJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0c2VsZWN0Lm9wdGlvbnMucHVzaCh7XHJcblx0XHRcdFx0dmFsdWU6ICQodGhpcykuYXR0cigndmFsdWUnKSxcclxuXHRcdFx0XHR0ZXh0OiAkKHRoaXMpLnRleHQoKSxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuc2VsZWN0cy5wdXNoKHNlbGVjdCk7XHJcblx0XHRcclxuXHR9KTtcclxuXHRcclxuXHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGgpIHtcclxuXHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAgPSB0YWJsZUhlYWRlci50aC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdidG4tZ3JvdXAgdy0xMDAnKVxyXG5cdFx0XHQuYXR0cigncm9sZScsICdncm91cCcpXHJcblx0XHRcdC5vbignaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYoZS5jbGlja0V2ZW50ICYmICQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0LnBhcmVudE5vZGUsIGUuY2xpY2tFdmVudC50YXJnZXQpKSB7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCd3LTEwMCcpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdC50ZXh0KHRhYmxlSGVhZGVyLnRpdGxlKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMgJiYgdGFibGVIZWFkZXIuc29ydCkge1xyXG5cdFx0XHRcdFx0aWYgKHVybFNlYXJjaC5nZXQoJ3NvcnRBc2MnKSA9PSB0YWJsZUhlYWRlci5zZWxlY3RzWzBdLm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydEFzYycpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0RGVzYycsIHRhYmxlSGVhZGVyLnNlbGVjdHNbMF0ubmFtZSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0QXNjJywgdGFibGVIZWFkZXIuc2VsZWN0c1swXS5uYW1lKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcclxuXHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duID0gdGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cC5hcHBlbmQoY3JlYXRlLm1lbnVCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygncHgtMCcpXHJcblx0XHRcdC5jc3MoJ3dpZHRoJywgJzNlbScpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdC5hdHRyKCdpZCcsICdiXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0LmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ2Ryb3Bkb3duJylcclxuXHRcdFx0LmF0dHIoJ2FyaWEtaGFzcG9wdXAnLCB0cnVlKVxyXG5cdFx0XHQuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxyXG5cdFx0O1xyXG5cdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51ID0gdGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdkcm9wZG93bi1tZW51JylcclxuXHRcdFx0LmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsICdiXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnZC1mbGV4IGZsZXgtcm93JylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cC5vbignc2hvdy5icy5kcm9wZG93bicsIGNyZWF0ZU1lbnUpO1xyXG5cdFxyXG5cdH0gZWxzZSB7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duID0gdGFibGVIZWFkZXIudGguYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3ctMTAwJylcclxuXHRcdFx0LnRleHQodGFibGVIZWFkZXIudGl0bGUpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdilcclxuXHRcdDtcclxuXHRcdFxyXG5cdH1cclxuXHJcblx0ZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcclxuXHRcdGZvciAobGV0IHNlbGVjdCBvZiB0YWJsZUhlYWRlci5zZWxlY3RzKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRzZWxlY3QuZGl2Q29udGVudCA9IHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duTWVudS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ214LTEnKVxyXG5cdFx0XHRcdC5jc3MoJ21pbi13aWR0aCcsICcxNWVtJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHNlbGVjdC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRcdHNlbGVjdC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtY2VudGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLWRhcmsgcGItMiBweC0xJylcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChzZWxlY3QudGl0bGUpO1xyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2RmlsdGVyID0gc2VsZWN0LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtY2VudGVyIHAtMScpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdFx0XHRzZWxlY3QuYnRuU29ydERlc2MgPSBzZWxlY3QuZGl2RmlsdGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd1VwKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoKHVybFNlYXJjaC5nZXQoJ3NvcnREZXNjJykgPT0gc2VsZWN0Lm5hbWUpPydweC0yIGJ0bi1vdXRsaW5lLXByaW1hcnkgYmctZGFyayB0ZXh0LXdoaXRlJzoncHgtMiBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBzb3J0RGVzYylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdkZpbHRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LnRleHQodGV4dC5maWx0ZXIpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTMgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZpbHRlcilcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0XHRcdHNlbGVjdC5idG5Tb3J0QXNjID0gc2VsZWN0LmRpdkZpbHRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKGljb24uYXJyb3dEb3duKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoKHVybFNlYXJjaC5nZXQoJ3NvcnRBc2MnKSA9PSBzZWxlY3QubmFtZSk/J3B4LTIgYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOidweC0yIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIHNvcnRBc2MpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZTZWFyY2ggPSBzZWxlY3QuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItZGFyayBwLTInKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2U2VhcmNoLmFwcGVuZChjcmVhdGUuaW5wdXQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHZhciBzZWFyY2hWYWx1ZSA9ICQodGhpcykudmFsKCkudG9Mb3dlckNhc2UoKVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKHNlYXJjaFZhbHVlID09ICcnKSB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0LmRpdlNlbGVjdEFsbC5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb24uZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5jaHgucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0LmRpdlNlbGVjdEFsbC5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAob3B0aW9uLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uZGl2LmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmRpdi5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5jaHgucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0c2VsZWN0LmRpdkxpc3QgPSBzZWxlY3QuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTIgb3ZlcmZsb3ctYXV0byAnICsgKChzZWxlY3QubXVsdGlwbGUpPydwdC0zJzoncHQtMScpKVxyXG5cdFx0XHRcdC5jc3MoJ21heC1oZWlnaHQnLCAnMjBlbScpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChzZWxlY3QubXVsdGlwbGUpIHtcclxuXHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsID0gc2VsZWN0LmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5jaHhTZWxlY3RBbGwgPSBzZWxlY3QuZGl2U2VsZWN0QWxsLmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfc2VsZWN0QWxsJylcclxuXHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR2YXIgY2hlY2tlZCA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1x0XHJcblx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsLmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnX3NlbGVjdEFsbCcpXHJcblx0XHRcdFx0XHQudGV4dCh0ZXh0LnNlbGVjdEFsbClcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5kaXYgPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cclxuXHRcdFx0XHRcdG9wdGlvbi5jaHggPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ18nICsgb3B0aW9uLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsIHVybFNlYXJjaC5nZXQoc2VsZWN0Lm5hbWUpLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRsZXQgY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdGxldCB1bmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICgkKG9wdGlvbi5jaHgpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dW5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKGNoZWNrZWQgJiYgdW5jaGVja2VkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LmNoeFNlbGVjdEFsbC5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LmNoeFNlbGVjdEFsbC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvcHRpb24ubGJsID0gb3B0aW9uLmRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdC50ZXh0KG9wdGlvbi50ZXh0KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2VW5rbm93biA9IHNlbGVjdC5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuY2h4VW5rbm93biA9IHNlbGVjdC5kaXZVbmtub3duLmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfbm90QXBwbGljYWJsZScpXHJcblx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsICF1cmxTZWFyY2guaGFzKHNlbGVjdC5uYW1lKSlcclxuXHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR2YXIgY2hlY2tlZCA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XHJcblx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1x0XHJcblx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uZHJvcGRvd24oJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdlVua25vd24uYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfbm90QXBwbGljYWJsZScpXHJcblx0XHRcdFx0XHQudGV4dCh0ZXh0Lm5vdEFwcGxpY2FibGUpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvcHRpb24uZGl2ID0gc2VsZWN0LmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0b3B0aW9uLmNoeCA9IG9wdGlvbi5kaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdXJsU2VhcmNoLmdldChzZWxlY3QubmFtZSkuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdC5kaXZMaXN0LmZpbmQoJ2lucHV0Jykubm90KHRoaXMpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZShzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKCFzZWxlY3QuY2h4VW5rbm93bi5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb24uY2h4LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZChzZWxlY3QubmFtZSwgb3B0aW9uLnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvcHRpb24ubGJsID0gb3B0aW9uLmRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdC50ZXh0KG9wdGlvbi50ZXh0KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHJcblx0XHRcdGZ1bmN0aW9uIHNvcnRBc2MoKSB7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnRBc2MnLCBzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGZpbHRlcigpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdGZ1bmN0aW9uIGZpbHRlcigpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHRpZiAoIXNlbGVjdC5jaHhTZWxlY3RBbGwuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdGlmIChvcHRpb24uY2h4LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZChzZWxlY3QubmFtZSwgb3B0aW9uLnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdGZ1bmN0aW9uIHNvcnREZXNjKCkge1xyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSBzZWxlY3QubmFtZSkge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydERlc2MnLCBzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0fVx0XHJcblx0XHRcdFx0ZmlsdGVyKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gdGFibGVIZWFkZXI7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGZpbGxEaXNwbGF5XHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBmaWxsRGlzcGxheSgpIHtcclxuXHR2YXIgY29sID0gJCgnI2Rpc3BsYXknKS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdC5hZGRDbGFzcygncm93IHB5LTInKVxyXG5cdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbCcpXHJcblx0O1xyXG5cdFxyXG5cdGZvciAobGV0IHRhYmxlSGVhZGVyIG9mIHRhYmxlSGVhZGVycykge1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5hRGlzcGxheSA9IGNvbC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeSBjb2wtMiBtLTEgdGV4dC1sZWZ0JylcclxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmNoeERpc3BsYXkucHJvcCgnY2hlY2tlZCcsICF0YWJsZUhlYWRlci5jaHhEaXNwbGF5LmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgZGlzcGxheSA9IHVybFNlYXJjaC5nZXQoJ2Rpc3BsYXlbJyArIHRhYmxlSGVhZGVyLmlkICsgJ10nKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdkaXNwbGF5WycgKyB0YWJsZUhlYWRlci5pZCArICddJyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmNoeERpc3BsYXkuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdGlmIChkaXNwbGF5ID09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZCgnZGlzcGxheVsnICsgdGFibGVIZWFkZXIuaWQgKyAnXScsIDEwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRsZXQgZGl2ID0gdGFibGVIZWFkZXIuYURpc3BsYXkuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5jaHhEaXNwbGF5ID0gZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hdHRyKCdpZCcsICdoXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0Lm9uKCdjaGFuZ2UgY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXR0cignZm9yJywgJ2hfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG59XHRcclxuXHJcbnZhciB1cmxTZWFyY2ggPSBuZXcgVXJsU2VhcmNoKCk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFNlYXJjaCBmb3JtXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjc2VhcmNoIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHR1cmxTZWFyY2guc2V0KCdzZWFyY2gnLCAkKCcjc2VhcmNoIGlucHV0JykudmFsKCkpO1xyXG5cdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3NlYXJjaCBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdCQoJyNzZWFyY2ggaW5wdXQnKS52YWwoJycpO1xyXG5cdFx0XHJcblx0XHRpZiAodXJsU2VhcmNoLmhhcygnc2VhcmNoJykpIHtcclxuXHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc2VhcmNoJyk7XHJcblx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcclxuXHR9KTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIE1vZGFsXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQvKlxyXG5cdCQoJyNtb2RhbCcpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0YWpheC5zZXQoJyNtb2RhbCAubW9kYWwtY29udGVudCcsICQoZS5yZWxhdGVkVGFyZ2V0KS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1VybCgpKTtcclxuXHR9KTtcclxuXHQqL1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9uZXcsICNkb2N1bWVudF9lZGl0LCAjZG9jdW1lbnRfbW92ZSwgI2RvY3VtZW50X2RlbGV0ZSwgI3ZlcnNpb25fbmV3LCAjdmVyc2lvbl9lZGl0LCAjdmVyc2lvbl9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJyNtb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcblx0XHRhamF4LnNldCgnI21vZGFsIC5tb2RhbC1jb250ZW50JywgJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1VybCgnaWRbXScpLCAnR0VUJywgdW5kZWZpbmVkLCBmYWxzZSwgdXJsU2VhcmNoLm9uRGF0YUVkaXRlZC5iaW5kKHVybFNlYXJjaCkpO1xyXG5cdH0pXHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBNb2RhbF9kZXRhaWxcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdC8qXHJcblx0JChkb2N1bWVudCkuYWpheENvbXBsZXRlKGZ1bmN0aW9uKGUsIHhocikge1xyXG5cdFx0aWYgKHhoci5yZXNwb25zZVRleHQgPT09ICcnKSB7XHJcblx0XHRcdC8vdXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdCQoJyNtb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcblx0XHRcdGFqYXguc2V0KCcjdG9hc3QnLCAkKCcjdG9hc3QnKS5kYXRhKCd1cmwnKSk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0Ki9cclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBNZW51IGRpc3BsYXlcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHQkKCcjZG9jdW1lbnRfZWRpdCcpLmhpZGUoKTtcclxuXHQkKCcjZG9jdW1lbnRfbW92ZScpLmhpZGUoKTtcclxuXHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdCQoJyN2ZXJzaW9uX21lbnUnKS5oaWRlKCk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBUYWIgY29sbGFwc2VcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyN0YWJzJykub24oJ3Nob3cuYnMudGFiJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcuY29sbGFwc2UnKS5jb2xsYXBzZSgnc2hvdycpO1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCd0YWJzX2hpZGRlbicpO1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCd0YWJzX3Nob3dlZCcpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN0YWJzIHVsIGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0JCh0aGlzKS5ibHVyKCk7XHJcblx0XHRcdCQodGhpcykuYXR0cignYXJpYS1zZWxlY3RlZCcsIGZhbHNlKTtcclxuXHRcdFx0JCgnIycgKyAkKHRoaXMpLmF0dHIoJ2FyaWEtY29udHJvbHMnKSkucGFyZW50KCkuY29sbGFwc2UoJ2hpZGUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuICAgIFxyXG5cdCQoJyN0YWJzJykub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3RhYnNfaGlkZGVuJyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuYWRkQ2xhc3MoJ3RhYnNfc2hvd2VkJyk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3RhYnMnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCd0YWJzX3Nob3dlZCcpO1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCd0YWJzX2hpZGRlbicpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gQ2hlY2sgYWxsIGNoZWNrYm94ZXNcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyNjaGVja19hbGwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJ3Rib2R5JykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgJCgnI2NoZWNrX2FsbCcpLmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdH0pO1xyXG5cdFx0dXJsU2VhcmNoLmxpbmVDaGVja2VkKCk7XHJcblx0fSk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBKcXVlcnkgUmVzaXphYmxlIENvbHVtbnNcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdC8vJCgndGFibGUnKS5yZXNpemFibGVDb2x1bW5zKCk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBEcmFndGFibGVcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdC8qXHJcblx0dmFyIGRyYWdnZXIgPSB0YWJsZURyYWdnZXIuZGVmYXVsdCgkKCd0YWJsZScpLmdldCgwKSwge1xyXG4gICAgICAgIG1vZGU6ICdjb2x1bW4nLFxyXG5cdH0pO1xyXG5cdCovXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBUYWJsZSBoZWFkZXJzXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjdGFicycpLnRyaWdnZXIoJ3Nob3cuYnMudGFiJyk7XHJcblx0XHJcblx0JCgndGFibGUnKS5maW5kKCd0aFtpZF1bZGF0YS10aXRsZV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0dGFibGVIZWFkZXJzLnB1c2goY3JlYXRlVGFibGVIZWFkZXIodGhpcykpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gVnVlc1xyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3Z1ZXMnKS5maW5kKCdidXR0b25bZGF0YS1pZF0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdHVybFNlYXJjaC5zZXQoJ3Z1ZScsICQodGhpcykuZGF0YSgnaWQnKSk7XHJcblx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdnVlcycpLmZpbmQoJ2FbZGF0YS11cmxdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0YWpheC5zZXQoJyNtb2RhbCAubW9kYWwtY29udGVudCcsICQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9VcmwoKSwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHVybFNlYXJjaC5vblZ1ZUVkaXRlZC5iaW5kKHVybFNlYXJjaCkpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2dWVfbmV3Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0YWpheC5zZXQoJyNtb2RhbCAubW9kYWwtY29udGVudCcsICQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9VcmwoKSwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHVybFNlYXJjaC5vblZ1ZUVkaXRlZC5iaW5kKHVybFNlYXJjaCkpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGZpbGxEaXNwbGF5KCk7XHJcblx0dXJsU2VhcmNoLnNldEZyb21Vcmwod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=