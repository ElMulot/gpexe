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
    tableHeader.divDropdownGroup.on('show.bs.dropdown', createSelectMenu);
  } else if (tableHeader.type == 'type-date') {
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
    tableHeader.divDropdownGroup.on('show.bs.dropdown', createDateMenu);
  } else {
    tableHeader.btnDropdown = tableHeader.th.append(create.menuButton).children().last().addClass('w-100').text(tableHeader.title).children().last().append(create.div);
  }

  function createSelectMenu() {
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

  function createDateMenu() {
    console.log(tableHeader.divDropdownMenu.children().length);
    if (tableHeader.divDropdownMenu.children().length) return;
    tableHeader.divDropdownMenu.empty();
    tableHeader.divContent = tableHeader.divDropdownMenu.append(create.div).children().last().addClass('mx-1').css('min-width', '15em');
    tableHeader.divFilter = tableHeader.divContent.append(create.div).children().last().addClass('text-center p-1');
    tableHeader.btnSortDesc = tableHeader.divFilter.append(create.smallButton).children().last().append(icon.arrowUp).addClass(urlSearch.get('sortDesc') == tableHeader.id ? 'px-2 btn-outline-primary bg-dark text-white' : 'px-2 btn-primary').on('click', sortDesc);
    tableHeader.divFilter.append(create.smallButton).children().last().text(text.filter).addClass('px-3 btn-primary').on('click', filter);
    tableHeader.btnSortAsc = tableHeader.divFilter.append(create.smallButton).children().last().append(icon.arrowDown).addClass(urlSearch.get('sortAsc') == tableHeader.id ? 'px-2 btn-outline-primary bg-dark text-white' : 'px-2 btn-primary').on('click', sortAsc);
    tableHeader.divList = tableHeader.divContent.append(create.div).children().last().addClass('px-2 overflow-auto ' + (tableHeader.multiple ? 'pt-3' : 'pt-1')); //		tableHeader.divInf = tableHeader.divList.append(create.div).children().last()
    //			.addClass('custom-control custom-checkbox mt-2')
    //		;

    if ((result = /^>(\d{2}\/\d{2}\/\d{4})/.exec(urlSearch.get(tableHeader.id).toString())) !== null) {
      var valueInf = result[0];
    } else {
      var valueInf = '';
    } //		tableHeader.chxInf = tableHeader.divInf.append(create.checkbox).children().last()
    //			.attr('id', tableHeader.id + '_inf')
    //			.attr('checked', valueInf != '')
    //			.on('change', function() {
    //				console.log("ok");
    //				let checked = $(this).is(':checked');
    //				if (checked) {
    //					urlSearch.set(tableHeader.id, '>' + tableHeader.inputInf.val());
    //				} else {
    //					urlSearch.delete(tableHeader.id);
    //				}
    //				tableHeader.fieldsetInf.attr('disabled', checked === false);
    //			})
    //		;
    //		
    //		tableHeader.fieldsetInf = tableHeader.divInf.append(create.label).children().last()
    //			.attr('for', tableHeader.id + '_inf')
    //			.on('click', function() {
    //				console.log(this);
    //				tableHeader.chxInf.attr('checked', true);
    //				tableHeader.chxInf.trigger('change');
    //			})
    //			.append(create.fieldset).children().last()
    //				.attr('disabled', valueInf == '')
    //				.on('click', function() {
    //					console.log(this);
    //					tableHeader.chxInf.attr('checked', true);
    //					tableHeader.chxInf.trigger('change');
    //				})
    //		;


    tableHeader.inputInf = tableHeader.divList.append(create.input).children().last().addClass('form-control datepicker').attr('value', "04-08-2020").datepicker({
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
    /*
    tableHeader.divSup = tableHeader.divList.append(create.div).children().last()
    	.addClass('custom-control custom-checkbox mt-2')
    ;
    
    if ((result = /^<(\d{2}\/\d{2}\/\d{4})/.exec(urlSearch.get(tableHeader.id).toString())) !== null) {
    	var valueSup = result[0];
    } else {
    	var valueSup = '';
    }
    
    tableHeader.chxSup = tableHeader.divSup.append(create.checkbox).children().last()
    	.attr('id', tableHeader.id + '_sup')
    	.attr('checked', valueSup != '')
    	.on('change', function() {
    		
    		let checked = $(this).is(':checked');
    		if (checked) {
    			urlSearch.set(tableHeader.id, '>' + tableHeader.inputSup.val());
    		} else {
    			urlSearch.delete(tableHeader.id);
    		}
    		tableHeader.fieldsetSup.attr('disabled', checked === false);
    	})
    ;
    
    tableHeader.fieldsetSup = tableHeader.divSup.append(create.label).children().last()
    	.attr('for', tableHeader.id + '_sup')
    	.append(create.fieldset).children().last()
    		.attr('disabled', valueSup == '')
    ;
    
    tableHeader.inputSup = tableHeader.fieldsetSup.append(create.input).children().last()
    	.addClass('datepicker')
    	.val(valueSup)
    ;
    */

    function sortAsc() {
      urlSearch["delete"]('sortDesc');

      if (urlSearch.get('sortAsc') == tableHeader.id) {
        urlSearch["delete"]('sortAsc');
      } else {
        urlSearch.set('sortAsc', tableHeader.id);
      }

      filter();
    }

    function filter() {
      urlSearch["delete"](tableHeader.id);

      if (!tableHeader.chxSelectAll.is(':checked')) {
        var _iterator17 = _createForOfIteratorHelper(tableHeader.options),
            _step17;

        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var option = _step17.value;

            if (option.chx.is(':checked')) {
              urlSearch.append(tableHeader.id, option.value);
            }
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
      }

      tableHeader.btnDropdown.dropdown('hide');
      urlSearch.fetch();
    }

    function sortDesc() {
      urlSearch["delete"]('sortAsc');

      if (urlSearch.get('sortDesc') == tableHeader.id) {
        urlSearch["delete"]('sortDesc');
      } else {
        urlSearch.set('sortDesc', tableHeader.id);
      }

      filter();
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

},[["./assets/js/document.js","runtime","vendors~app~automation~dashboard~document~login","vendors~app~document","vendors~document","app~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCIkIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwidGFibGVIZWFkZXJzIiwiVXJsU2VhcmNoIiwiX3BhcmFtc0FycmF5IiwicHJvdG90eXBlIiwiaGFzIiwia2V5IiwiZ2V0IiwiZXhlYyIsImdldEFsbCIsInNldCIsInZhbHVlIiwiYXBwZW5kIiwic2V0RnJvbVVybCIsInBhcmFtc0FycmF5IiwidG9VcmwiLCJ1cmwiLCJ0b1N0cmluZyIsInZhbHVlcyIsImkiLCJqb2luIiwiZmV0Y2giLCJkYXRhIiwiaGlkZSIsImFqYXgiLCJ1bmRlZmluZWQiLCJmaWxsVGFibGUiLCJiaW5kIiwidGFyZ2V0IiwicmVzdWx0IiwiZW1wdHkiLCJzaG93Iiwic2VhcmNoVXJsIiwicGFyYW0iLCJxdWVyeSIsInRoYXQiLCJmaW5kIiwiZWFjaCIsImF0dHIiLCJwYXJlbnQiLCJ0YWJsZUhlYWRlciIsImRpc3BsYXkiLCJpZCIsImFEaXNwbGF5IiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNoeERpc3BsYXkiLCJwcm9wIiwiY29sIiwiY3NzIiwidGgiLCJidG5Ecm9wZG93biIsImlzRmlsdGVyZWQiLCJpc1NvcnRlZEFzYyIsImlzU29ydGVkRGVzYyIsInNlbGVjdHMiLCJzZWxlY3QiLCJuYW1lIiwiaWNvbiIsImZ1bm5lbEZpbGwiLCJmdW5uZWwiLCJhcnJvd0Rvd24iLCJhcnJvd1VwIiwidmVyc2lvbnMiLCJ2ZXJzaW9uIiwidHIiLCJjcmVhdGUiLCJjaGlsZHJlbiIsImxhc3QiLCJkaXYiLCJ0ZCIsImNoZWNrYm94IiwidmFsIiwib24iLCJsaW5lQ2hlY2tlZCIsImxhYmVsIiwiZGF0YUNsYXNzIiwidGV4dCIsInNtYWxsQnV0dG9uIiwiZGV0YWlsVXJsIiwiZGV0YWlscyIsIm1vZGFsIiwic2hvd0RldGFpbCIsInBhZ2VNYXgiLCJwYWdlIiwicGFyc2VJbnQiLCJNYXRoIiwibWF4IiwibWluIiwidWwiLCJsaSIsImEiLCJzcGFuIiwiaHRtbCIsInBhZ2VTdGFydCIsInBhZ2VFbmQiLCJ1cmxTZWFyY2giLCJyZXN1bHRzUGVyUGFnZSIsIk1hcCIsImFsbCIsIm9wdGlvbiIsImZsYXNoIiwiaGVhZGVyIiwiaW5jbHVkZXMiLCJleGNsYW1hdGlvbiIsImluZm9ybWF0aW9uIiwiY2xvc2UiLCJib2R5IiwibGVuZ3RoIiwibWVzc2FnZSIsInRvYXN0IiwiY2hlY2tlZCIsInVuY2hlY2tlZCIsImlzIiwicmVtb3ZlIiwicG9wb3ZlciIsImUiLCJzaG93Q29udGVudCIsImhhc0NsYXNzIiwidHJpZ2dlciIsIm9uRGF0YUVkaXRlZCIsImJsdXIiLCJkYXRlcGlja2VyIiwiZm9ybWF0Iiwid2Vla1N0YXJ0IiwibWF4Vmlld01vZGUiLCJsYW5ndWFnZSIsIm11bHRpZGF0ZSIsImRheXNPZldlZWtEaXNhYmxlZCIsImF1dG9jbG9zZSIsImNhbGVuZGFyV2Vla3MiLCJjbGVhckJ0biIsInRvZGF5QnRuIiwidG9kYXlIaWdobGlnaHQiLCJvblN1Y2Nlc3MiLCJvblZ1ZUVkaXRlZCIsImxvY2F0aW9uIiwiYXNzaWduIiwib3JpZ2luIiwicGF0aG5hbWUiLCJjcmVhdGVUYWJsZUhlYWRlciIsImNsb3Nlc3QiLCJlcSIsImluZGV4IiwidGl0bGUiLCJzb3J0IiwidHlwZSIsIm11bHRpcGxlQXR0ciIsInNsdCIsIm11bHRpcGxlIiwib3B0aW9ucyIsInB1c2giLCJkaXZEcm9wZG93bkdyb3VwIiwiY2xpY2tFdmVudCIsImNvbnRhaW5zIiwicmVsYXRlZFRhcmdldCIsInBhcmVudE5vZGUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdkRyb3Bkb3duTWVudSIsIm1lbnVCdXR0b24iLCJjcmVhdGVTZWxlY3RNZW51IiwiY3JlYXRlRGF0ZU1lbnUiLCJkaXZDb250ZW50IiwiZGl2RmlsdGVyIiwiYnRuU29ydERlc2MiLCJzb3J0RGVzYyIsImZpbHRlciIsImJ0blNvcnRBc2MiLCJzb3J0QXNjIiwiZGl2U2VhcmNoIiwiaW5wdXQiLCJzZWFyY2hWYWx1ZSIsInRvTG93ZXJDYXNlIiwiZGl2U2VsZWN0QWxsIiwiY2h4IiwiaW5kZXhPZiIsImRpdkxpc3QiLCJjaHhTZWxlY3RBbGwiLCJzZWxlY3RBbGwiLCJsYmwiLCJkaXZVbmtub3duIiwiY2h4VW5rbm93biIsImRyb3Bkb3duIiwibm90QXBwbGljYWJsZSIsIm5vdCIsImNvbnNvbGUiLCJsb2ciLCJ2YWx1ZUluZiIsImlucHV0SW5mIiwiZmlsbERpc3BsYXkiLCJkb2N1bWVudCIsInJlYWR5IiwiY29sbGFwc2UiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJ3aW5kb3ciLCJzZWFyY2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBQSxtQkFBTyxDQUFDLHdDQUFELENBQVA7O0FBQ0EsSUFBTUMsQ0FBQyxHQUFHRCxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBLElBQU1FLE1BQU0sR0FBR0YsbUJBQU8sQ0FBQyw4REFBRCxDQUF0Qjs7QUFDQUEsbUJBQU8sQ0FBQyxpR0FBRCxDQUFQLEMsQ0FDQTtBQUNBOzs7QUFDQUEsbUJBQU8sQ0FBQyx3REFBRCxDQUFQOztBQUNBLElBQU1HLGVBQWUsR0FBR0gsbUJBQU8sQ0FBQywwRkFBRCxDQUEvQjs7QUFFQSxJQUFJSSxZQUFZLEdBQUcsRUFBbkIsQyxDQUVBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQyxTQUFULEdBQXNCO0FBQ3JCLE9BQUtDLFlBQUwsR0FBb0IsSUFBSUgsZUFBSixFQUFwQjtBQUNBOztBQUVERSxTQUFTLENBQUNFLFNBQVYsR0FBc0I7QUFFckJDLEtBQUcsRUFBRSxhQUFTQyxHQUFULEVBQWM7QUFDbEIsV0FBTyxLQUFLSCxZQUFMLENBQWtCRSxHQUFs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RCxRQUFQLENBQWdCMkQsTUFBckM7QUFDQW5HLFdBQVMsQ0FBQzNFLEtBQVY7QUFFQSxDQTVKRCxFIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwicmVxdWlyZSgnLi4vanMvYXBwLmpzJyk7XHJcbmNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuY29uc3QgcG9wcGVyID0gcmVxdWlyZSgncG9wcGVyLmpzJyk7XHJcbnJlcXVpcmUoJ3N0aWNreS10YWJsZS1oZWFkZXJzJyk7XHJcbi8vY29uc3QgdGFibGVEcmFnZ2VyID0gcmVxdWlyZSgndGFibGUtZHJhZ2dlcicpO1xyXG4vL3JlcXVpcmUoJ2pxdWVyeS1yZXNpemFibGUtY29sdW1ucycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvZG9jdW1lbnQuc2NzcycpO1xyXG5jb25zdCBVUkxTZWFyY2hQYXJhbXMgPSByZXF1aXJlKCdAdW5nYXAvdXJsLXNlYXJjaC1wYXJhbXMvY2pzJyk7XHJcblxyXG52YXIgdGFibGVIZWFkZXJzID0gW107XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vL1VybFNlYXJjaFxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gVXJsU2VhcmNoICgpIHtcclxuXHR0aGlzLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxufVxyXG5cclxuVXJsU2VhcmNoLnByb3RvdHlwZSA9IHtcclxuXHJcblx0aGFzOiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdHJldHVybiB0aGlzLl9wYXJhbXNBcnJheS5oYXMoa2V5KTtcclxuXHR9LFxyXG5cdFxyXG5cdGdldDogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRpZiAoL1xcUytcXFtcXF0vZy5leGVjKGtleSkpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmdldEFsbChrZXkpIHx8IFtdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmdldChrZXkpIHx8IFtdO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0c2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRpZiAoa2V5ID09ICd2dWUnKSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7J3Z1ZSc6IHZhbHVlfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheS5zZXQoa2V5LCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRhcHBlbmQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHRcdGlmIChrZXkgPT0gJ3Z1ZScpIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsndnVlJzogdmFsdWV9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5LmFwcGVuZChrZXksIHZhbHVlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdGRlbGV0ZTogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHR0aGlzLl9wYXJhbXNBcnJheS5kZWxldGUoa2V5KTtcclxuXHR9LFxyXG5cdFxyXG5cdHNldEZyb21Vcmw6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRsZXQgcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHZhbHVlKTtcclxuXHRcdGlmIChwYXJhbXNBcnJheS5oYXMoJ3Z1ZScpKSB7XHJcblx0XHRcdHRoaXMuc2V0KCd2dWUnLCBwYXJhbXNBcnJheS5nZXQoJ3Z1ZScpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5ID0gcGFyYW1zQXJyYXk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHR0b1VybDogZnVuY3Rpb24oa2V5ID0gJycpIHtcclxuXHRcdGxldCB1cmwgPSAnJztcclxuXHRcdGlmIChrZXkgPT0gJycpIHtcclxuXHRcdFx0dXJsID0gdGhpcy5fcGFyYW1zQXJyYXkudG9TdHJpbmcoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhbHVlcyA9IHRoaXMuZ2V0KGtleSk7XHJcblx0XHRcdGZvciAoaSBpbiB2YWx1ZXMpIHtcclxuXHRcdFx0XHR2YWx1ZXNbaV0gPSBrZXkgKyAnPScgKyB2YWx1ZXNbaV07XHJcblx0XHRcdH1cclxuXHRcdFx0dXJsID0gdmFsdWVzLmpvaW4oJyYnKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAodXJsKT8nPycgKyB1cmw6Jyc7XHJcblx0fSxcclxuXHRcclxuXHRmZXRjaDogZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdGxldCB1cmwgPSAkKCcjdGFibGUnKS5kYXRhKCd1cmwnKSArIHRoaXMudG9VcmwoKTtcclxuXHRcdCQoJyN0YWJsZScpLmhpZGUoKTtcclxuXHRcdGFqYXguc2V0KCcjc3Bpbm5lcicsIHVybCwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHRoaXMuZmlsbFRhYmxlLmJpbmQodGhpcykpO1xyXG5cdFx0XHJcblx0fSxcclxuXHRcclxuXHRmaWxsVGFibGU6IGZ1bmN0aW9uKHRhcmdldCwgcmVzdWx0ID0gJycpIHtcclxuXHRcdFxyXG5cdFx0JCgnI3NwaW5uZXInKS5lbXB0eSgpO1xyXG5cdFx0JCgnI3RhYmxlID4gdGJvZHknKS5lbXB0eSgpO1xyXG5cdFx0JCgnI3RhYmxlJykuc2hvdygpO1xyXG5cdFx0aWYgKHJlc3VsdCA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cdFx0XHJcblx0XHRsZXQgc2VhcmNoVXJsID0gJC5wYXJhbShyZXN1bHQucXVlcnkpO1xyXG5cdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFVybCk7XHJcblx0XHR0aGlzLmRlbGV0ZSgnaWRbXScpO1xyXG5cdFx0XHJcblx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcclxuXHRcdC8vdnVlXHJcblx0XHQkKCcjdnVlcycpLmZpbmQoJ2J1dHRvbltkYXRhLWlkXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICgkKHRoaXMpLmRhdGEoJ2lkJykgPT0gdGhhdC5nZXQoJ3Z1ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLW91dGxpbmUtcHJpbWFyeScpO1xyXG5cdFx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnZGl2ID4gYnV0dG9uJykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLXByaW1hcnknKTtcclxuXHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ2RpdiA+IGJ1dHRvbicpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tcHJpbWFyeSBkcm9wZG93bi10b2dnbGUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdGZvciAobGV0IHRhYmxlSGVhZGVyIG9mIHRhYmxlSGVhZGVycykge1xyXG5cdFx0XHRcclxuXHRcdFx0Ly9kaXNwbGF5XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoZGlzcGxheSA9IHRoaXMuZ2V0KCdkaXNwbGF5WycgKyB0YWJsZUhlYWRlci5pZCArICddJykpIHtcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5hRGlzcGxheS5hZGRDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeScpO1xyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmFEaXNwbGF5LnJlbW92ZUNsYXNzKCdidG4tcHJpbWFyeScpO1xyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmNoeERpc3BsYXkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmNvbC5jc3MoJ3dpZHRoJywgZGlzcGxheSArICdlbScpO1xyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmNvbC5zaG93KCk7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIudGguc2hvdygpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vaGVhZGVyc1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmVtcHR5KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuaXNGaWx0ZXJlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmlzU29ydGVkQXNjID0gZmFsc2U7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjID0gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgc2VsZWN0IG9mIHRhYmxlSGVhZGVyLnNlbGVjdHMpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuaGFzKHNlbGVjdC5uYW1lKSkge1xyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5pc0ZpbHRlcmVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGhpcy5nZXQoJ3NvcnREZXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoKHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQpP2ljb24uZnVubmVsRmlsbDppY29uLmZ1bm5lbCk7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICh0YWJsZUhlYWRlci5pc1NvcnRlZEFzYykge1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGljb24uYXJyb3dEb3duKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmlzU29ydGVkRGVzYykge1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGljb24uYXJyb3dVcCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmFEaXNwbGF5LmFkZENsYXNzKCdidG4tcHJpbWFyeScpO1xyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmFEaXNwbGF5LnJlbW92ZUNsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuY2h4RGlzcGxheS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmNvbC5oaWRlKCk7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIudGguaGlkZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvL3Rib2R5XHJcblx0XHRmb3IgKGxldCB2ZXJzaW9uIG9mIHJlc3VsdC52ZXJzaW9ucykge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHRyID0gJCgnI3RhYmxlID4gdGJvZHknKS5hcHBlbmQoY3JlYXRlLnRyKS5jaGlsZHJlbigpLmxhc3QoKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBkaXYgPSB0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ2NfJyArIHZlcnNpb24uaWQpXHJcblx0XHRcdFx0LnZhbCh2ZXJzaW9uLmlkKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCB0aGlzLmxpbmVDaGVja2VkLmJpbmQodGhpcykpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hdHRyKCdmb3InLCAnY18nICsgdmVyc2lvbi5pZClcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0XHJcblx0XHRcdGZvciAobGV0IHRhYmxlSGVhZGVyIG9mIHRhYmxlSGVhZGVycykge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRhdGEgPSB2ZXJzaW9uW3RhYmxlSGVhZGVyLmlkXTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHRzd2l0Y2ggKHRhYmxlSGVhZGVyLmNvbC5hdHRyKCdjbGFzcycpKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3R5cGUtYm9vbGVhbic6XHJcblx0XHRcdFx0XHRcdFx0aWYgKGRhdGEgPT0gMCkgZGF0YSA9ICdObyc7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGRhdGEgPT0gMSkgZGF0YSA9ICdZZXMnO1xyXG5cdFx0XHRcdFx0XHRjYXNlICd0eXBlLXZlcnNpb24nOlxyXG5cdFx0XHRcdFx0XHRjYXNlICd0eXBlLWRhdGUnOlxyXG5cdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0ZXh0LWNlbnRlcic7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3R5cGUtcmVmZXJlbmNlJzpcclxuXHRcdFx0XHRcdFx0Y2FzZSAndHlwZS1uYW1lJzpcclxuXHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndGV4dC1sZWZ0JztcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAnJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKGRhdGFDbGFzcylcclxuXHRcdFx0XHRcdFx0LnRleHQoZGF0YSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNvbC5oaWRlKCk7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci50aC5oaWRlKCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2J0bi1zdWNjZXNzIHctMTAwJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLXVybCcsIHZlcnNpb24uZGV0YWlsVXJsKVxyXG5cdFx0XHRcdFx0LnRleHQodGV4dC5kZXRhaWxzKVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdCQoJyN0YWJsZSB0Ym9keSBidXR0b25bZGF0YS11cmxdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJyNtb2RhbF9kZXRhaWwnKS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0XHRhamF4LnNldCgnI21vZGFsX2RldGFpbCAubW9kYWwtYm9keScsICQodGhpcykuZGF0YSgndXJsJyksICdHRVQnLCB1bmRlZmluZWQsIGZhbHNlLCB0aGF0LnNob3dEZXRhaWwuYmluZCh0aGF0KSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0Ly9wYWdpbmF0aW9uXHJcblx0XHQkKCcjcGFnaW5hdGlvbicpLmVtcHR5KCk7XHJcblx0XHRcdFxyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCdtYi00Jyk7XHJcblx0XHRcclxuXHRcdGxldCBwYWdlTWF4ID0gcmVzdWx0LnBhZ2VNYXg7XHJcblx0XHRsZXQgcGFnZSA9IHBhcnNlSW50KHRoaXMuZ2V0KCdwYWdlJykpIHx8IDE7XHJcblx0XHRwYWdlID0gTWF0aC5tYXgoTWF0aC5taW4ocGFnZSwgcGFnZU1heCksIDEpO1xyXG5cdFx0XHJcblx0XHRkaXYgPSAkKCcjcGFnaW5hdGlvbicpLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3JvdycpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGRpdi5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdjb2wnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHR1bCA9IGRpdi5hcHBlbmQoY3JlYXRlLnVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3BhZ2luYXRpb24gY29sIGp1c3RpZnktY29udGVudC1jZW50ZXInKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRpZiAocmVzdWx0LnBhZ2VNYXggPiAxKSB7XHJcblx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IDEpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAocGFnZSA+IDEpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5zZXQoJ3BhZ2UnLCBwYWdlIC0gMSk7XHJcblx0XHRcdFx0XHRcdHRoYXQuZmV0Y2goKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIE1hdGgubWF4KDEsIHBhZ2UgLSAxKSlcclxuXHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpXHJcblx0XHRcdFx0XHRcdC5odG1sKCcmbGFxdW87JylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHBhZ2VTdGFydCA9IE1hdGgubWluKE1hdGgubWF4KDEsIHBhZ2UgLSAyKSwgTWF0aC5tYXgoMSwgcmVzdWx0LnBhZ2VNYXggLSA0KSk7XHJcblx0XHRcdGxldCBwYWdlRW5kID0gTWF0aC5taW4ocGFnZVN0YXJ0ICsgNSwgcGFnZU1heCk7XHJcblx0XHRcdFxyXG5cdFx0XHRmb3IgKGxldCBpID0gcGFnZVN0YXJ0OyBpIDw9IHBhZ2VFbmQ7IGkrKykge1xyXG5cdFx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gaSk/JyBhY3RpdmUnOicnKSlcclxuXHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5zZXQoJ3BhZ2UnLCBpKTtcclxuXHRcdFx0XHRcdFx0dGhhdC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBpKVxyXG5cdFx0XHRcdFx0XHQudGV4dChpKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gcGFnZU1heCk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmIChwYWdlIDwgcGFnZU1heCkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNldCgncGFnZScsIHBhZ2UgKyAxKTtcclxuXHRcdFx0XHRcdFx0dGhhdC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgTWF0aC5taW4ocGFnZU1heCwgcGFnZSArIDEpKVxyXG5cdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0Lmh0bWwoJyZyYXF1bzsnKVxyXG5cdFx0XHQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHNlbGVjdCA9IGRpdi5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdjb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbXQtMSBtci01JylcclxuXHRcdFx0LmFwcGVuZChjcmVhdGUuc2VsZWN0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gYmctZGFyayBib3JkZXItc2Vjb25kYXJ5IHRleHQtd2hpdGUnKVxyXG5cdFx0XHQuY3NzKCd3aWR0aCcsICcxNTAnKVxyXG5cdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3Jlc3VsdHNfcGVyX3BhZ2UnLCAkKHRoaXMpLnZhbCgpKVxyXG5cdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRsZXQgcmVzdWx0c1BlclBhZ2UgPSBuZXcgTWFwKFtbJzEwJywgMTBdLCBbJzUwJywgNTBdLCBbJzEwMCcsIDEwMF0sIFt0ZXh0LmFsbCwgJzAnXV0pO1xyXG5cdFx0Zm9yIChsZXQgW3RleHQsIHZhbHVlXSBvZiByZXN1bHRzUGVyUGFnZSkge1xyXG5cdFx0XHRzZWxlY3QuYXBwZW5kKGNyZWF0ZS5vcHRpb24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ3ZhbHVlJywgdmFsdWUpXHJcblx0XHRcdFx0LmF0dHIoJ3NlbGVjdGVkJywgdXJsU2VhcmNoLmdldCgncmVzdWx0c19wZXJfcGFnZScpID09IHZhbHVlKVxyXG5cdFx0XHRcdC50ZXh0KHRleHQpXHJcblx0XHRcdDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0XHQvL2ZsYXNoZXNcclxuXHRcdFxyXG5cdFx0JCgnI3RvYXN0JykuZW1wdHkoKTtcclxuXHRcdFxyXG5cdFx0Zm9yIChjb25zdCBsYWJlbCBpbiByZXN1bHQuZmxhc2gpIHtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBkaXYgPSAkKCcjdG9hc3QnKS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3RvYXN0IHB4LTMnKVxyXG5cdFx0XHRcdC5hdHRyKCdyb2xlJywgJ2FsZXJ0JylcclxuXHRcdFx0XHQuZGF0YSgnZGVsYXknLCA1MDAwKVxyXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWxpdmUnLCAnYXNzZXJ0aXZlJylcclxuXHRcdFx0XHQuYXR0cignYXJpYS1hdG9taWMnLCB0cnVlKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgaGVhZGVyID0gZGl2LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygndG9hc3QtaGVhZGVyJylcclxuXHRcdFx0XHQuYXBwZW5kKChbJ2RhbmdlcicsICd3YXJuaW5nJ10uaW5jbHVkZXMobGFiZWwpKT9pY29uLmV4Y2xhbWF0aW9uOmljb24uaW5mb3JtYXRpb24pXHJcblx0XHRcdFx0LmFwcGVuZChpY29uLmNsb3NlKTtcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGJvZHkgPSBkaXYuYXBwZW5kKGNyZWF0ZS51bCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3RvYXN0LWJvZHknKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAocmVzdWx0LmZsYXNoW2xhYmVsXS5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgbWVzc2FnZSBvZiByZXN1bHQuZmxhc2hbbGFiZWxdKSB7XHJcblx0XHRcdFx0XHRib2R5LmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC50ZXh0KG1lc3NhZ2UpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGJvZHkudGV4dChyZXN1bHQuZmxhc2hbbGFiZWxdWzBdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0ZGl2LnRvYXN0KCdzaG93Jyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHRoaXMubGluZUNoZWNrZWQoKTtcclxuXHRcdFxyXG5cdFx0Ly8kKCd0YWJsZScpLnN0aWNreVRhYmxlSGVhZGVycygpO1xyXG5cdFx0XHJcblx0fSxcclxuXHRcclxuXHRsaW5lQ2hlY2tlZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHJcblx0XHR2YXIgY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0dmFyIHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuXHRcdCQoJ3Rib2R5JykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dW5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGNoZWNrZWQgJiYgdW5jaGVja2VkKSB7XHJcblx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0dGhhdC5kZWxldGUoJ2lkW10nKTtcclxuXHRcdFxyXG5cdFx0aWYgKGNoZWNrZWQpIHtcclxuXHRcdFx0JCgndGFibGUnKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICgkKHRoaXMpLnByb3AoJ2lkJykgIT0gJ2NoZWNrX2FsbCcgJiYgJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0dGhhdC5hcHBlbmQoJ2lkW10nLCAkKHRoaXMpLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5zaG93KCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuc2hvdygpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuc2hvdygpO1xyXG5cdFx0XHQkKCcjdmVyc2lvbl9tZW51Jykuc2hvdygpO1xyXG5cdFx0fSBlbHNlIGlmKHVuY2hlY2tlZCkge1xyXG5cdFx0XHQkKCcjdmVyc2lvbicpLnZhbCgnJyk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfbW92ZScpLmhpZGUoKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLmhpZGUoKTtcclxuXHRcdFx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdHNob3dEZXRhaWw6IGZ1bmN0aW9uKHRhcmdldCwgcmVzdWx0ID0gJycpIHtcclxuXHRcdCQodGFyZ2V0KS5maW5kKCcuc3Bpbm5lci1ib3JkZXInKS5wYXJlbnQoKS5yZW1vdmUoKTtcclxuXHRcdGlmIChyZXN1bHQpIHtcclxuXHRcdFx0JCh0YXJnZXQpLmh0bWwoJCh0YXJnZXQpLmh0bWwoKSArIHJlc3VsdCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBwb3BvdmVyXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcblx0XHQkKHRhcmdldCkuZmluZCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKTtcclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIEFqYXhcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHQgICAgLy9hamF4LmZldGNoKHRhcmdldCwgdGhpcy5zaG93RGV0YWlsLmJpbmQodGhpcykpO1xyXG5cdCAgICBcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFxyXG5cdFx0JCgnI3ZlcnNpb25fdGFicycpLmZpbmQoJ2EnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0aWYgKCQodGhpcykucGFyZW50KCkuaGFzKCcuYWN0aXZlJykpIHtcclxuXHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRhamF4LnNldCgnI3ZlcnNpb25fY29udGVudCcsICQodGhpcykuZGF0YSgndXJsJyksICdHRVQnLCB1bmRlZmluZWQsIGZhbHNlLCB0aGF0LnNob3dDb250ZW50LmJpbmQodGhhdCkpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdCQodGhpcykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoJyN2ZXJzaW9uX25ld19kZXRhaWwsICN2ZXJzaW9uX2VkaXRfZGV0YWlsLCAjdmVyc2lvbl9yZW1vdmVfZGV0YWlsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJyNtb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcblx0XHRcdGFqYXguc2V0KCcjbW9kYWwgLm1vZGFsLWNvbnRlbnQnLCAkKHRoaXMpLmRhdGEoJ3VybCcpICsgJz9pZFtdPScgKyAkKCcjdmVyc2lvbl90YWJzPmEuYWN0aXZlJykuZGF0YSgnaWQnKSwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHRoYXQub25EYXRhRWRpdGVkLmJpbmQodGhhdCkpO1xyXG5cdCAgICB9KTtcclxuXHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBNb2RhbCAmIENvbGxhcHNlXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdCAgICBcclxuXHRcdCQodGFyZ2V0KS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2hyZWY9XCIjJyArICQodGhpcykuYXR0cignaWQnKSArICdcIl0nKVxyXG5cdFx0XHRcdC5yZW1vdmVDbGFzcygnYWN0aXZlJylcclxuXHRcdFx0XHQuYmx1cigpXHJcblx0XHRcdDtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKHRhcmdldCkub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCdbZGF0YS10b2dnbGU9XCJtb2RhbFwiXScpLmJsdXIoKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKHRhcmdldCkuZmluZCgnYnV0dG9uW2RhdGEtZGlzbWlzc10nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnI21vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBCb290c3RyYXAgZGF0ZXBpY2tlclxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdFx0JCh0YXJnZXQpLmZpbmQoJy5kYXRlcGlja2VyJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5kYXRlcGlja2VyKHtcclxuXHRcdFx0XHRmb3JtYXQ6IFwiZGQtbW0teXl5eVwiLFxyXG5cdFx0ICAgICAgICB3ZWVrU3RhcnQ6IDEsXHJcblx0XHQgICAgICAgIG1heFZpZXdNb2RlOiAzLFxyXG5cdFx0ICAgICAgICBsYW5ndWFnZTogJCh0aGlzKS5kYXRhKCdsb2NhbGUnKSxcclxuXHRcdCAgICAgICAgbXVsdGlkYXRlOiBmYWxzZSxcclxuXHRcdCAgICAgICAgZGF5c09mV2Vla0Rpc2FibGVkOiBcIjAsNlwiLFxyXG5cdFx0ICAgICAgICBhdXRvY2xvc2U6IHRydWUsXHJcblx0XHQgICAgICAgIGNhbGVuZGFyV2Vla3M6IHRydWUsXHJcblx0XHQgICAgICAgIGNsZWFyQnRuOiB0cnVlLFxyXG5cdFx0ICAgICAgICB0b2RheUJ0bjogdHJ1ZSxcclxuXHRcdCAgICAgICAgdG9kYXlIaWdobGlnaHQ6IHRydWUsXHJcblx0XHQgICAgfSk7XHJcblx0XHR9KVxyXG5cdH0sXHJcblx0XHJcblx0c2hvd0NvbnRlbnQ6IGZ1bmN0aW9uKHRhcmdldCwgcmVzdWx0ID0gJycpIHtcclxuXHRcdFxyXG5cdFx0YWpheC5vblN1Y2Nlc3ModGFyZ2V0LCByZXN1bHQpO1xyXG5cclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFxyXG5cdFx0JCgnI3NhdmUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnI21vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuXHRcdFx0YWpheC5zZXQoJyNtb2RhbCAubW9kYWwtY29udGVudCcsICQodGhpcykuZGF0YSgndXJsJyksICdHRVQnLCB1bmRlZmluZWQsIGZhbHNlLCB0aGF0Lm9uRGF0YUVkaXRlZC5iaW5kKHRoYXQpKTtcclxuXHQgICAgfSk7XHJcblx0fSxcclxuXHRcclxuXHRvbkRhdGFFZGl0ZWQ6IGZ1bmN0aW9uKHRhcmdldCwgcmVzdWx0ID0gJycpIHtcclxuXHRcdFxyXG5cdFx0aWYgKHJlc3VsdCkge1xyXG5cdFx0XHRhamF4Lm9uU3VjY2Vzcyh0YXJnZXQsIHJlc3VsdCwgdGhpcy5vbkRhdGFFZGl0ZWQuYmluZCh0aGlzKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRpZiAoJCgnI21vZGFsX2RldGFpbCcpLmhhc0NsYXNzKCdzaG93JykpIHtcclxuXHRcdFx0XHRhamF4LnNldCgnI21vZGFsX2RldGFpbCAubW9kYWwtYm9keScsICQoJyNtZW51JykuZGF0YSgndXJsJyksICdHRVQnLCB1bmRlZmluZWQsIGZhbHNlLCB0aGF0LnNob3dEZXRhaWwuYmluZCh0aGF0KSk7XHJcblx0XHRcdH1cclxuXHRcdFx0JCgnI21vZGFsIC5tb2RhbC1jb250ZW50JykuZW1wdHkoKTtcclxuXHRcdFx0JCgnI21vZGFsJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sXHJcblx0XHJcblx0b25WdWVFZGl0ZWQ6IGZ1bmN0aW9uKHRhcmdldCwgcmVzdWx0ID0gJycpIHtcclxuXHRcdFxyXG5cdFx0aWYgKHJlc3VsdCkge1xyXG5cdFx0XHRhamF4Lm9uU3VjY2Vzcyh0YXJnZXQsIHJlc3VsdCwgdGhpcy5vblZ1ZUVkaXRlZC5iaW5kKHRoaXMpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxvY2F0aW9uLmFzc2lnbihsb2NhdGlvbi5vcmlnaW4gKyBsb2NhdGlvbi5wYXRobmFtZSArIHVybFNlYXJjaC50b1VybCgpKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdH0sXHJcblx0XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vIHRhYmxlSGVhZGVyXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUYWJsZUhlYWRlcih0aGF0KSB7XHJcblx0XHJcblx0dmFyIHRhYmxlSGVhZGVyID0ge1xyXG5cdFx0Y29sOiAkKHRoYXQpLmNsb3Nlc3QoJ3RhYmxlJykuZmluZCgnY29sJykuZXEoJCh0aGF0KS5pbmRleCgpKSxcclxuXHRcdHRoOiAkKHRoYXQpLFxyXG5cdFx0aWQ6ICQodGhhdCkuYXR0cignaWQnKSxcclxuXHRcdHRpdGxlOiAkKHRoYXQpLmRhdGEoJ3RpdGxlJyksXHJcblx0XHRzb3J0OiAkKHRoYXQpLmRhdGEoJ3NvcnQnKSxcclxuXHRcdHR5cGU6ICQodGhhdCkuYXR0cignY2xhc3MnKSxcclxuXHRcdGlzRmlsdGVyZWQ6IGZhbHNlLFxyXG5cdFx0aXNTb3J0ZWRBc2M6IGZhbHNlLFxyXG5cdFx0aXNTb3J0ZWREZXNjOiBmYWxzZSxcclxuXHRcdHNlbGVjdHM6IFtdLFxyXG5cdH1cclxuXHRcclxuXHQkKHRoYXQpLmZpbmQoJ3NlbGVjdCcpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdHZhciBtdWx0aXBsZUF0dHIgPSAodHlwZW9mICQodGhpcykuYXR0cignbXVsdGlwbGUnKSAhPT0gdHlwZW9mIHVuZGVmaW5lZCAmJiAkKHRoaXMpLmF0dHIoJ211bHRpcGxlJykgIT09IGZhbHNlKTtcclxuXHRcdHZhciBuYW1lID0gJCh0aGlzKS5wcm9wKCduYW1lJykgKyAoKG11bHRpcGxlQXR0cik/J1tdJzonJyk7XHJcblx0XHRcclxuXHRcdHZhciBzZWxlY3QgPSB7XHJcblx0XHRcdFx0c2x0OiAkKHRoaXMpLFxyXG5cdFx0XHRcdGlkOiAkKHRoaXMpLnByb3AoJ2lkJyksXHJcblx0XHRcdFx0bmFtZTogbmFtZSxcclxuXHRcdFx0XHRtdWx0aXBsZTogbXVsdGlwbGVBdHRyLFxyXG5cdFx0XHRcdHRpdGxlOiAkKHRoaXMpLmRhdGEoJ3RpdGxlJyksXHJcblx0XHRcdFx0b3B0aW9uczogW10sXHJcblx0XHR9O1xyXG5cdFx0XHJcblx0XHQkKHRoaXMpLmZpbmQoJ29wdGlvbicpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHNlbGVjdC5vcHRpb25zLnB1c2goe1xyXG5cdFx0XHRcdHZhbHVlOiAkKHRoaXMpLmF0dHIoJ3ZhbHVlJyksXHJcblx0XHRcdFx0dGV4dDogJCh0aGlzKS50ZXh0KCksXHJcblx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLnNlbGVjdHMucHVzaChzZWxlY3QpO1xyXG5cdFx0XHJcblx0fSk7XHJcblx0XHJcblx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoKSB7XHJcblx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwID0gdGFibGVIZWFkZXIudGguYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuLWdyb3VwIHctMTAwJylcclxuXHRcdFx0LmF0dHIoJ3JvbGUnLCAnZ3JvdXAnKVxyXG5cdFx0XHQub24oJ2hpZGUuYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKGUuY2xpY2tFdmVudCAmJiAkLmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldC5wYXJlbnROb2RlLCBlLmNsaWNrRXZlbnQudGFyZ2V0KSkge1xyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duTWVudS5lbXB0eSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cC5hcHBlbmQoY3JlYXRlLm1lbnVCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygndy0xMDAnKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSlcclxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzICYmIHRhYmxlSGVhZGVyLnNvcnQpIHtcclxuXHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gdGFibGVIZWFkZXIuc2VsZWN0c1swXS5uYW1lKSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydERlc2MnLCB0YWJsZUhlYWRlci5zZWxlY3RzWzBdLm5hbWUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydEFzYycsIHRhYmxlSGVhZGVyLnNlbGVjdHNbMF0ubmFtZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHJcblx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93biA9IHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3B4LTAnKVxyXG5cdFx0XHQuY3NzKCd3aWR0aCcsICczZW0nKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHQuYXR0cignaWQnLCAnYl8nICsgdGFibGVIZWFkZXIuaWQpXHJcblx0XHRcdC5hdHRyKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpXHJcblx0XHRcdC5hdHRyKCdhcmlhLWhhc3BvcHVwJywgdHJ1ZSlcclxuXHRcdFx0LmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcclxuXHRcdDtcclxuXHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duTWVudSA9IHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnZHJvcGRvd24tbWVudScpXHJcblx0XHRcdC5hdHRyKCdhcmlhLWxhYmVsbGVkYnknLCAnYl8nICsgdGFibGVIZWFkZXIuaWQpXHJcblx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2QtZmxleCBmbGV4LXJvdycpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBjcmVhdGVTZWxlY3RNZW51KTtcclxuXHRcclxuXHR9IGVsc2UgaWYgKHRhYmxlSGVhZGVyLnR5cGUgPT0gJ3R5cGUtZGF0ZScpIHtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cCA9IHRhYmxlSGVhZGVyLnRoLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0bi1ncm91cCB3LTEwMCcpXHJcblx0XHRcdC5hdHRyKCdyb2xlJywgJ2dyb3VwJylcclxuXHRcdFx0Lm9uKCdoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZihlLmNsaWNrRXZlbnQgJiYgJC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQucGFyZW50Tm9kZSwgZS5jbGlja0V2ZW50LnRhcmdldCkpIHtcclxuXHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUuZW1wdHkoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3ctMTAwJylcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LnRleHQodGFibGVIZWFkZXIudGl0bGUpXHJcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cyAmJiB0YWJsZUhlYWRlci5zb3J0KSB7XHJcblx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IHRhYmxlSGVhZGVyLnNlbGVjdHNbMF0ubmFtZSkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnREZXNjJywgdGFibGVIZWFkZXIuc2VsZWN0c1swXS5uYW1lKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnRBc2MnLCB0YWJsZUhlYWRlci5zZWxlY3RzWzBdLm5hbWUpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFxyXG5cdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24gPSB0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdweC0wJylcclxuXHRcdFx0LmNzcygnd2lkdGgnLCAnM2VtJylcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LmF0dHIoJ2lkJywgJ2JfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHQuYXR0cignZGF0YS10b2dnbGUnLCAnZHJvcGRvd24nKVxyXG5cdFx0XHQuYXR0cignYXJpYS1oYXNwb3B1cCcsIHRydWUpXHJcblx0XHRcdC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXHJcblx0XHQ7XHJcblx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUgPSB0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2Ryb3Bkb3duLW1lbnUnKVxyXG5cdFx0XHQuYXR0cignYXJpYS1sYWJlbGxlZGJ5JywgJ2JfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdkLWZsZXggZmxleC1yb3cnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgY3JlYXRlRGF0ZU1lbnUpO1xyXG5cdFx0XHJcblx0fSBlbHNlIHtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24gPSB0YWJsZUhlYWRlci50aC5hcHBlbmQoY3JlYXRlLm1lbnVCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygndy0xMDAnKVxyXG5cdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjcmVhdGVTZWxlY3RNZW51KCkge1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUuZW1wdHkoKTtcclxuXHRcdFxyXG5cdFx0Zm9yIChsZXQgc2VsZWN0IG9mIHRhYmxlSGVhZGVyLnNlbGVjdHMpIHtcclxuXHRcdFx0XHJcblx0XHRcdHNlbGVjdC5kaXZDb250ZW50ID0gdGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnbXgtMScpXHJcblx0XHRcdFx0LmNzcygnbWluLXdpZHRoJywgJzE1ZW0nKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoc2VsZWN0Lm11bHRpcGxlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdFx0c2VsZWN0LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItZGFyayBwYi0yIHB4LTEnKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKHNlbGVjdC50aXRsZSk7XHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZGaWx0ZXIgPSBzZWxlY3QuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgcC0xJylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLnNlbGVjdHMubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0XHRcdHNlbGVjdC5idG5Tb3J0RGVzYyA9IHNlbGVjdC5kaXZGaWx0ZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFwcGVuZChpY29uLmFycm93VXApXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSBzZWxlY3QubmFtZSk/J3B4LTIgYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOidweC0yIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIHNvcnREZXNjKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2RmlsdGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQudGV4dCh0ZXh0LmZpbHRlcilcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMyBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgZmlsdGVyKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRcdFx0c2VsZWN0LmJ0blNvcnRBc2MgPSBzZWxlY3QuZGl2RmlsdGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd0Rvd24pXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IHNlbGVjdC5uYW1lKT8ncHgtMiBidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J3B4LTIgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgc29ydEFzYylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdlNlYXJjaCA9IHNlbGVjdC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHAtMicpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZTZWFyY2guYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dmFyIHNlYXJjaFZhbHVlID0gJCh0aGlzKS52YWwoKS50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoc2VhcmNoVmFsdWUgPT0gJycpIHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsLnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsLmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb24udGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVmFsdWUpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5kaXYuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRzZWxlY3QuZGl2TGlzdCA9IHNlbGVjdC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncHgtMiBvdmVyZmxvdy1hdXRvICcgKyAoKHNlbGVjdC5tdWx0aXBsZSk/J3B0LTMnOidwdC0xJykpXHJcblx0XHRcdFx0LmNzcygnbWF4LWhlaWdodCcsICcyMGVtJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHNlbGVjdC5tdWx0aXBsZSkge1xyXG5cdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwgPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmNoeFNlbGVjdEFsbCA9IHNlbGVjdC5kaXZTZWxlY3RBbGwuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ19zZWxlY3RBbGwnKVxyXG5cdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHZhciBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfc2VsZWN0QWxsJylcclxuXHRcdFx0XHRcdC50ZXh0KHRleHQuc2VsZWN0QWxsKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0b3B0aW9uLmRpdiA9IHNlbGVjdC5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHQ7XHJcblxyXG5cdFx0XHRcdFx0b3B0aW9uLmNoeCA9IG9wdGlvbi5kaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdXJsU2VhcmNoLmdldChzZWxlY3QubmFtZSkuaW5jbHVkZXMob3B0aW9uLnZhbHVlKSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGxldCBjaGVja2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0bGV0IHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCQob3B0aW9uLmNoeCkuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5jaHhTZWxlY3RBbGwucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5sYmwgPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LnRleHQob3B0aW9uLnRleHQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5kaXZVbmtub3duID0gc2VsZWN0LmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHNlbGVjdC5jaHhVbmtub3duID0gc2VsZWN0LmRpdlVua25vd24uYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ19ub3RBcHBsaWNhYmxlJylcclxuXHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgIXVybFNlYXJjaC5oYXMoc2VsZWN0Lm5hbWUpKVxyXG5cdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHZhciBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZShzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0XHRzZWxlY3QuZGl2VW5rbm93bi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIHNlbGVjdC5uYW1lICsgJ19ub3RBcHBsaWNhYmxlJylcclxuXHRcdFx0XHRcdC50ZXh0KHRleHQubm90QXBwbGljYWJsZSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5kaXYgPSBzZWxlY3QuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRvcHRpb24uY2h4ID0gb3B0aW9uLmRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCB1cmxTZWFyY2guZ2V0KHNlbGVjdC5uYW1lKS5pbmNsdWRlcyhvcHRpb24udmFsdWUpKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0c2VsZWN0LmRpdkxpc3QuZmluZCgnaW5wdXQnKS5ub3QodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoIXNlbGVjdC5jaHhVbmtub3duLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbi5jaHguaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKHNlbGVjdC5uYW1lLCBvcHRpb24udmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdG9wdGlvbi5sYmwgPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0LnRleHQob3B0aW9uLnRleHQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gc29ydEFzYygpIHtcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gc2VsZWN0Lm5hbWUpIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydEFzYycsIHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0ZmlsdGVyKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gZmlsdGVyKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdGlmICghc2VsZWN0LmNoeFNlbGVjdEFsbC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKG9wdGlvbi5jaHguaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKHNlbGVjdC5uYW1lLCBvcHRpb24udmFsdWUpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0ZnVuY3Rpb24gc29ydERlc2MoKSB7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydEFzYycpO1xyXG5cdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IHNlbGVjdC5uYW1lKSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0RGVzYycsIHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0XHR9XHRcclxuXHRcdFx0XHRmaWx0ZXIoKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBjcmVhdGVEYXRlTWVudSgpIHtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2codGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51LmNoaWxkcmVuKCkubGVuZ3RoKTtcclxuXHRcdGlmICh0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUuY2hpbGRyZW4oKS5sZW5ndGgpIHJldHVybjtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkNvbnRlbnQgPSB0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnbXgtMScpXHJcblx0XHRcdC5jc3MoJ21pbi13aWR0aCcsICcxNWVtJylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RmlsdGVyID0gdGFibGVIZWFkZXIuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBwLTEnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5idG5Tb3J0RGVzYyA9IHRhYmxlSGVhZGVyLmRpdkZpbHRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXBwZW5kKGljb24uYXJyb3dVcClcclxuXHRcdFx0LmFkZENsYXNzKCh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IHRhYmxlSGVhZGVyLmlkKT8ncHgtMiBidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J3B4LTIgYnRuLXByaW1hcnknKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgc29ydERlc2MpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkZpbHRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQudGV4dCh0ZXh0LmZpbHRlcilcclxuXHRcdFx0LmFkZENsYXNzKCdweC0zIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0Lm9uKCdjbGljaycsIGZpbHRlcilcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuYnRuU29ydEFzYyA9IHRhYmxlSGVhZGVyLmRpdkZpbHRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXBwZW5kKGljb24uYXJyb3dEb3duKVxyXG5cdFx0XHQuYWRkQ2xhc3MoKHVybFNlYXJjaC5nZXQoJ3NvcnRBc2MnKSA9PSB0YWJsZUhlYWRlci5pZCk/J3B4LTIgYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOidweC0yIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0Lm9uKCdjbGljaycsIHNvcnRBc2MpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmRpdkxpc3QgPSB0YWJsZUhlYWRlci5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3B4LTIgb3ZlcmZsb3ctYXV0byAnICsgKCh0YWJsZUhlYWRlci5tdWx0aXBsZSk/J3B0LTMnOidwdC0xJykpXHJcblx0XHQ7XHJcblx0XHRcclxuLy9cdFx0dGFibGVIZWFkZXIuZGl2SW5mID0gdGFibGVIZWFkZXIuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuLy9cdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCBtdC0yJylcclxuLy9cdFx0O1xyXG5cdFx0XHJcblx0XHRpZiAoKHJlc3VsdCA9IC9ePihcXGR7Mn1cXC9cXGR7Mn1cXC9cXGR7NH0pLy5leGVjKHVybFNlYXJjaC5nZXQodGFibGVIZWFkZXIuaWQpLnRvU3RyaW5nKCkpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHR2YXIgdmFsdWVJbmYgPSByZXN1bHRbMF07XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YXIgdmFsdWVJbmYgPSAnJztcclxuXHRcdH1cclxuXHRcdFxyXG4vL1x0XHR0YWJsZUhlYWRlci5jaHhJbmYgPSB0YWJsZUhlYWRlci5kaXZJbmYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuLy9cdFx0XHQuYXR0cignaWQnLCB0YWJsZUhlYWRlci5pZCArICdfaW5mJylcclxuLy9cdFx0XHQuYXR0cignY2hlY2tlZCcsIHZhbHVlSW5mICE9ICcnKVxyXG4vL1x0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbi8vXHRcdFx0XHRjb25zb2xlLmxvZyhcIm9rXCIpO1xyXG4vL1x0XHRcdFx0bGV0IGNoZWNrZWQgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xyXG4vL1x0XHRcdFx0aWYgKGNoZWNrZWQpIHtcclxuLy9cdFx0XHRcdFx0dXJsU2VhcmNoLnNldCh0YWJsZUhlYWRlci5pZCwgJz4nICsgdGFibGVIZWFkZXIuaW5wdXRJbmYudmFsKCkpO1xyXG4vL1x0XHRcdFx0fSBlbHNlIHtcclxuLy9cdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSh0YWJsZUhlYWRlci5pZCk7XHJcbi8vXHRcdFx0XHR9XHJcbi8vXHRcdFx0XHR0YWJsZUhlYWRlci5maWVsZHNldEluZi5hdHRyKCdkaXNhYmxlZCcsIGNoZWNrZWQgPT09IGZhbHNlKTtcclxuLy9cdFx0XHR9KVxyXG4vL1x0XHQ7XHJcbi8vXHRcdFxyXG4vL1x0XHR0YWJsZUhlYWRlci5maWVsZHNldEluZiA9IHRhYmxlSGVhZGVyLmRpdkluZi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG4vL1x0XHRcdC5hdHRyKCdmb3InLCB0YWJsZUhlYWRlci5pZCArICdfaW5mJylcclxuLy9cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbi8vXHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzKTtcclxuLy9cdFx0XHRcdHRhYmxlSGVhZGVyLmNoeEluZi5hdHRyKCdjaGVja2VkJywgdHJ1ZSk7XHJcbi8vXHRcdFx0XHR0YWJsZUhlYWRlci5jaHhJbmYudHJpZ2dlcignY2hhbmdlJyk7XHJcbi8vXHRcdFx0fSlcclxuLy9cdFx0XHQuYXBwZW5kKGNyZWF0ZS5maWVsZHNldCkuY2hpbGRyZW4oKS5sYXN0KClcclxuLy9cdFx0XHRcdC5hdHRyKCdkaXNhYmxlZCcsIHZhbHVlSW5mID09ICcnKVxyXG4vL1x0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4vL1x0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzKTtcclxuLy9cdFx0XHRcdFx0dGFibGVIZWFkZXIuY2h4SW5mLmF0dHIoJ2NoZWNrZWQnLCB0cnVlKTtcclxuLy9cdFx0XHRcdFx0dGFibGVIZWFkZXIuY2h4SW5mLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG4vL1x0XHRcdFx0fSlcclxuLy9cdFx0O1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5pbnB1dEluZiA9IHRhYmxlSGVhZGVyLmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdmb3JtLWNvbnRyb2wgZGF0ZXBpY2tlcicpXHJcblx0XHRcdC5hdHRyKCd2YWx1ZScsIFwiMDQtMDgtMjAyMFwiKVxyXG5cdFx0XHQuZGF0ZXBpY2tlcih7XHJcblx0XHRcdFx0Zm9ybWF0OiBcImRkLW1tLXl5eXlcIixcclxuXHRcdCAgICAgICAgd2Vla1N0YXJ0OiAxLFxyXG5cdFx0ICAgICAgICBtYXhWaWV3TW9kZTogMyxcclxuXHRcdCAgICAgICAgbGFuZ3VhZ2U6ICQodGhpcykuZGF0YSgnbG9jYWxlJyksXHJcblx0XHQgICAgICAgIG11bHRpZGF0ZTogZmFsc2UsXHJcblx0XHQgICAgICAgIGRheXNPZldlZWtEaXNhYmxlZDogXCIwLDZcIixcclxuXHRcdCAgICAgICAgYXV0b2Nsb3NlOiB0cnVlLFxyXG5cdFx0ICAgICAgICBjYWxlbmRhcldlZWtzOiB0cnVlLFxyXG5cdFx0ICAgICAgICBjbGVhckJ0bjogdHJ1ZSxcclxuXHRcdCAgICAgICAgdG9kYXlCdG46IHRydWUsXHJcblx0XHQgICAgICAgIHRvZGF5SGlnaGxpZ2h0OiB0cnVlLFxyXG5cdFx0ICAgIH0pXHJcblx0XHQ7XHJcblx0XHQvKlxyXG5cdFx0dGFibGVIZWFkZXIuZGl2U3VwID0gdGFibGVIZWFkZXIuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggbXQtMicpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGlmICgocmVzdWx0ID0gL148KFxcZHsyfVxcL1xcZHsyfVxcL1xcZHs0fSkvLmV4ZWModXJsU2VhcmNoLmdldCh0YWJsZUhlYWRlci5pZCkudG9TdHJpbmcoKSkpICE9PSBudWxsKSB7XHJcblx0XHRcdHZhciB2YWx1ZVN1cCA9IHJlc3VsdFswXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhciB2YWx1ZVN1cCA9ICcnO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5jaHhTdXAgPSB0YWJsZUhlYWRlci5kaXZTdXAuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmF0dHIoJ2lkJywgdGFibGVIZWFkZXIuaWQgKyAnX3N1cCcpXHJcblx0XHRcdC5hdHRyKCdjaGVja2VkJywgdmFsdWVTdXAgIT0gJycpXHJcblx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IGNoZWNrZWQgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdGlmIChjaGVja2VkKSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KHRhYmxlSGVhZGVyLmlkLCAnPicgKyB0YWJsZUhlYWRlci5pbnB1dFN1cC52YWwoKSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUodGFibGVIZWFkZXIuaWQpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0YWJsZUhlYWRlci5maWVsZHNldFN1cC5hdHRyKCdkaXNhYmxlZCcsIGNoZWNrZWQgPT09IGZhbHNlKTtcclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuZmllbGRzZXRTdXAgPSB0YWJsZUhlYWRlci5kaXZTdXAuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmF0dHIoJ2ZvcicsIHRhYmxlSGVhZGVyLmlkICsgJ19zdXAnKVxyXG5cdFx0XHQuYXBwZW5kKGNyZWF0ZS5maWVsZHNldCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXR0cignZGlzYWJsZWQnLCB2YWx1ZVN1cCA9PSAnJylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuaW5wdXRTdXAgPSB0YWJsZUhlYWRlci5maWVsZHNldFN1cC5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2RhdGVwaWNrZXInKVxyXG5cdFx0XHQudmFsKHZhbHVlU3VwKVxyXG5cdFx0O1xyXG5cdFx0Ki9cclxuXHRcdGZ1bmN0aW9uIHNvcnRBc2MoKSB7XHJcblx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gdGFibGVIZWFkZXIuaWQpIHtcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydEFzYycsIHRhYmxlSGVhZGVyLmlkKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRmaWx0ZXIoKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gZmlsdGVyKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSh0YWJsZUhlYWRlci5pZCk7XHJcblx0XHRcdGlmICghdGFibGVIZWFkZXIuY2h4U2VsZWN0QWxsLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHRhYmxlSGVhZGVyLm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdGlmIChvcHRpb24uY2h4LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5hcHBlbmQodGFibGVIZWFkZXIuaWQsIG9wdGlvbi52YWx1ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0fVxyXG5cdFx0XHRcclxuXHRcdGZ1bmN0aW9uIHNvcnREZXNjKCkge1xyXG5cdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IHRhYmxlSGVhZGVyLmlkKSB7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0RGVzYycsIHRhYmxlSGVhZGVyLmlkKTtcclxuXHRcdFx0fVx0XHJcblx0XHRcdGZpbHRlcigpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRyZXR1cm4gdGFibGVIZWFkZXI7XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGZpbGxEaXNwbGF5XHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBmaWxsRGlzcGxheSgpIHtcclxuXHR2YXIgY29sID0gJCgnI2Rpc3BsYXknKS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdC5hZGRDbGFzcygncm93IHB5LTInKVxyXG5cdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbCcpXHJcblx0O1xyXG5cdFxyXG5cdGZvciAobGV0IHRhYmxlSGVhZGVyIG9mIHRhYmxlSGVhZGVycykge1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5hRGlzcGxheSA9IGNvbC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeSBjb2wtMiBtLTEgdGV4dC1sZWZ0JylcclxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmNoeERpc3BsYXkucHJvcCgnY2hlY2tlZCcsICF0YWJsZUhlYWRlci5jaHhEaXNwbGF5LmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgZGlzcGxheSA9IHVybFNlYXJjaC5nZXQoJ2Rpc3BsYXlbJyArIHRhYmxlSGVhZGVyLmlkICsgJ10nKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdkaXNwbGF5WycgKyB0YWJsZUhlYWRlci5pZCArICddJyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmNoeERpc3BsYXkuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdGlmIChkaXNwbGF5ID09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZCgnZGlzcGxheVsnICsgdGFibGVIZWFkZXIuaWQgKyAnXScsIDEwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRsZXQgZGl2ID0gdGFibGVIZWFkZXIuYURpc3BsYXkuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5jaHhEaXNwbGF5ID0gZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hdHRyKCdpZCcsICdoXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0Lm9uKCdjaGFuZ2UgY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXR0cignZm9yJywgJ2hfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG59XHRcclxuXHJcbnZhciB1cmxTZWFyY2ggPSBuZXcgVXJsU2VhcmNoKCk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFNlYXJjaCBmb3JtXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjc2VhcmNoIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHR1cmxTZWFyY2guc2V0KCdzZWFyY2gnLCAkKCcjc2VhcmNoIGlucHV0JykudmFsKCkpO1xyXG5cdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3NlYXJjaCBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdCQoJyNzZWFyY2ggaW5wdXQnKS52YWwoJycpO1xyXG5cdFx0XHJcblx0XHRpZiAodXJsU2VhcmNoLmhhcygnc2VhcmNoJykpIHtcclxuXHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc2VhcmNoJyk7XHJcblx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcclxuXHR9KTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIE1vZGFsXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQvKlxyXG5cdCQoJyNtb2RhbCcpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0YWpheC5zZXQoJyNtb2RhbCAubW9kYWwtY29udGVudCcsICQoZS5yZWxhdGVkVGFyZ2V0KS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1VybCgpKTtcclxuXHR9KTtcclxuXHQqL1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9uZXcsICNkb2N1bWVudF9lZGl0LCAjZG9jdW1lbnRfbW92ZSwgI2RvY3VtZW50X2RlbGV0ZSwgI3ZlcnNpb25fbmV3LCAjdmVyc2lvbl9lZGl0LCAjdmVyc2lvbl9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJyNtb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcblx0XHRhamF4LnNldCgnI21vZGFsIC5tb2RhbC1jb250ZW50JywgJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1VybCgnaWRbXScpLCAnR0VUJywgdW5kZWZpbmVkLCBmYWxzZSwgdXJsU2VhcmNoLm9uRGF0YUVkaXRlZC5iaW5kKHVybFNlYXJjaCkpO1xyXG5cdH0pXHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBNb2RhbF9kZXRhaWxcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdC8qXHJcblx0JChkb2N1bWVudCkuYWpheENvbXBsZXRlKGZ1bmN0aW9uKGUsIHhocikge1xyXG5cdFx0aWYgKHhoci5yZXNwb25zZVRleHQgPT09ICcnKSB7XHJcblx0XHRcdC8vdXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdCQoJyNtb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcblx0XHRcdGFqYXguc2V0KCcjdG9hc3QnLCAkKCcjdG9hc3QnKS5kYXRhKCd1cmwnKSk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0Ki9cclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBNZW51IGRpc3BsYXlcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHQkKCcjZG9jdW1lbnRfZWRpdCcpLmhpZGUoKTtcclxuXHQkKCcjZG9jdW1lbnRfbW92ZScpLmhpZGUoKTtcclxuXHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdCQoJyN2ZXJzaW9uX21lbnUnKS5oaWRlKCk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBUYWIgY29sbGFwc2VcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyN0YWJzJykub24oJ3Nob3cuYnMudGFiJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcuY29sbGFwc2UnKS5jb2xsYXBzZSgnc2hvdycpO1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCd0YWJzX2hpZGRlbicpO1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCd0YWJzX3Nob3dlZCcpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN0YWJzIHVsIGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0JCh0aGlzKS5ibHVyKCk7XHJcblx0XHRcdCQodGhpcykuYXR0cignYXJpYS1zZWxlY3RlZCcsIGZhbHNlKTtcclxuXHRcdFx0JCgnIycgKyAkKHRoaXMpLmF0dHIoJ2FyaWEtY29udHJvbHMnKSkucGFyZW50KCkuY29sbGFwc2UoJ2hpZGUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuICAgIFxyXG5cdCQoJyN0YWJzJykub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3RhYnNfaGlkZGVuJyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuYWRkQ2xhc3MoJ3RhYnNfc2hvd2VkJyk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3RhYnMnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCd0YWJzX3Nob3dlZCcpO1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCd0YWJzX2hpZGRlbicpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gQ2hlY2sgYWxsIGNoZWNrYm94ZXNcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyNjaGVja19hbGwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJ3Rib2R5JykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgJCgnI2NoZWNrX2FsbCcpLmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdH0pO1xyXG5cdFx0dXJsU2VhcmNoLmxpbmVDaGVja2VkKCk7XHJcblx0fSk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBKcXVlcnkgUmVzaXphYmxlIENvbHVtbnNcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdC8vJCgndGFibGUnKS5yZXNpemFibGVDb2x1bW5zKCk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBEcmFndGFibGVcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdC8qXHJcblx0dmFyIGRyYWdnZXIgPSB0YWJsZURyYWdnZXIuZGVmYXVsdCgkKCd0YWJsZScpLmdldCgwKSwge1xyXG4gICAgICAgIG1vZGU6ICdjb2x1bW4nLFxyXG5cdH0pO1xyXG5cdCovXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBUYWJsZSBoZWFkZXJzXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjdGFicycpLnRyaWdnZXIoJ3Nob3cuYnMudGFiJyk7XHJcblx0XHJcblx0JCgndGFibGUnKS5maW5kKCd0aFtpZF1bZGF0YS10aXRsZV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0dGFibGVIZWFkZXJzLnB1c2goY3JlYXRlVGFibGVIZWFkZXIodGhpcykpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gVnVlc1xyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3Z1ZXMnKS5maW5kKCdidXR0b25bZGF0YS1pZF0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdHVybFNlYXJjaC5zZXQoJ3Z1ZScsICQodGhpcykuZGF0YSgnaWQnKSk7XHJcblx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdnVlcycpLmZpbmQoJ2FbZGF0YS11cmxdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0YWpheC5zZXQoJyNtb2RhbCAubW9kYWwtY29udGVudCcsICQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9VcmwoKSwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHVybFNlYXJjaC5vblZ1ZUVkaXRlZC5iaW5kKHVybFNlYXJjaCkpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2dWVfbmV3Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0YWpheC5zZXQoJyNtb2RhbCAubW9kYWwtY29udGVudCcsICQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9VcmwoKSwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHVybFNlYXJjaC5vblZ1ZUVkaXRlZC5iaW5kKHVybFNlYXJjaCkpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGZpbGxEaXNwbGF5KCk7XHJcblx0dXJsU2VhcmNoLnNldEZyb21Vcmwod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=