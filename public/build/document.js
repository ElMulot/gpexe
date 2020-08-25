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
      var _div = $('#toast').append(create.div).children().last().addClass('alert alert-' + label + ' d-flex px-3').attr('role', 'alert').data('delay', 5000).attr('aria-live', 'assertive').attr('aria-atomic', true);

      _div.append(create.div).children().last().addClass('align-self-center').append(icon[label]);

      var body = _div.append(create.ul).children().last().addClass('justify-content-center flex-fill');

      _div.append(create.div).children().last().addClass('justify-content-end').append(icon.close);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwidGFibGVIZWFkZXJzIiwiVXJsU2VhcmNoIiwiX3BhcmFtc0FycmF5IiwicHJvdG90eXBlIiwiaGFzIiwia2V5IiwiZ2V0IiwiZXhlYyIsImdldEFsbCIsInNldCIsInZhbHVlIiwiYXBwZW5kIiwic2V0RnJvbVVybCIsInBhcmFtc0FycmF5IiwidG9VcmwiLCJ1cmwiLCJ0b1N0cmluZyIsInZhbHVlcyIsImkiLCJqb2luIiwiZmV0Y2giLCJkYXRhIiwiaGlkZSIsImFqYXgiLCJ1bmRlZmluZWQiLCJmaWxsVGFibGUiLCJiaW5kIiwidGFyZ2V0IiwicmVzdWx0IiwiZW1wdHkiLCJzaG93IiwiY29uc29sZSIsImxvZyIsInF1ZXJ5Iiwic2VhcmNoVXJsIiwicGFyYW0iLCJ0aGF0IiwiZmluZCIsImVhY2giLCJhdHRyIiwicGFyZW50IiwidGFibGVIZWFkZXIiLCJkaXNwbGF5IiwiaWQiLCJhRGlzcGxheSIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjaHhEaXNwbGF5IiwicHJvcCIsImNvbCIsImNzcyIsInRoIiwiYnRuRHJvcGRvd24iLCJpc0ZpbHRlcmVkIiwiaXNTb3J0ZWRBc2MiLCJpc1NvcnRlZERlc2MiLCJzZWxlY3RzIiwic2VsZWN0IiwibmFtZSIsImljb24iLCJmdW5uZWxGaWxsIiwiZnVubmVsIiwiYXJyb3dEb3duIiwiYXJyb3dVcCIsInZlcnNpb25zIiwidmVyc2lvbiIsInRyIiwiY3JlYXRlIiwiY2hpbGRyZW4iLCJsYXN0IiwiZGl2IiwidGQiLCJjaGVja2JveCIsInZhbCIsIm9uIiwibGluZUNoZWNrZWQiLCJsYWJlbCIsImRhdGFDbGFzcyIsInRleHQiLCJ1cmxTZWFyY2giLCJ0b0RhdGUiLCJEYXRlIiwiYWRkRGF5cyIsInNtYWxsQnV0dG9uIiwiZGV0YWlsVXJsIiwiZGV0YWlscyIsIm1vZGFsIiwic2hvd0RldGFpbCIsInBhZ2VNYXgiLCJwYWdlIiwicGFyc2VJbnQiLCJNYXRoIiwibWF4IiwibWluIiwidWwiLCJsaSIsImEiLCJzcGFuIiwiaHRtbCIsInBhZ2VTdGFydCIsInBhZ2VFbmQiLCJyZXN1bHRzUGVyUGFnZSIsIk1hcCIsImFsbCIsIm9wdGlvbiIsImZsYXNoIiwiYm9keSIsImNsb3NlIiwibGVuZ3RoIiwibWVzc2FnZSIsInRvYXN0IiwiY2hlY2tlZCIsInVuY2hlY2tlZCIsImlzIiwicmVtb3ZlIiwicG9wb3ZlciIsImUiLCJzaG93Q29udGVudCIsImhhc0NsYXNzIiwidHJpZ2dlciIsIm9uRGF0YUVkaXRlZCIsImJsdXIiLCJkYXRlcGlja2VyIiwib25TdWNjZXNzIiwib25WdWVFZGl0ZWQiLCJsb2NhdGlvbiIsImFzc2lnbiIsIm9yaWdpbiIsInBhdGhuYW1lIiwiY3JlYXRlVGFibGVIZWFkZXIiLCJjbG9zZXN0IiwiZXEiLCJpbmRleCIsInRpdGxlIiwic29ydCIsInR5cGUiLCJtdWx0aXBsZUF0dHIiLCJzbHQiLCJtdWx0aXBsZSIsIm9wdGlvbnMiLCJwdXNoIiwiZGl2RHJvcGRvd25Hcm91cCIsImNsaWNrRXZlbnQiLCJjb250YWlucyIsInJlbGF0ZWRUYXJnZXQiLCJwYXJlbnROb2RlIiwicHJldmVudERlZmF1bHQiLCJkaXZEcm9wZG93bk1lbnUiLCJtZW51QnV0dG9uIiwiY3JlYXRlTWVudSIsImRpdkNvbnRlbnQiLCJkaXZGaWx0ZXIiLCJidG5Tb3J0RGVzYyIsImJ0bkZpbHRlciIsImZpbHRlciIsImNoeFNlbGVjdEFsbCIsImNoeCIsImRyb3Bkb3duIiwiYnRuU29ydEFzYyIsImRpdlNlYXJjaCIsImlucHV0Iiwic2VhcmNoVmFsdWUiLCJ0b0xvd2VyQ2FzZSIsImRpdlNlbGVjdEFsbCIsImluZGV4T2YiLCJkaXZMaXN0Iiwic2VsZWN0QWxsIiwiaW5jbHVkZXMiLCJsYmwiLCJkaXZVbmtub3duIiwiY2h4VW5rbm93biIsIm5vdEFwcGxpY2FibGUiLCJub3QiLCJ2YWx1ZUluZiIsInZhbHVlU3VwIiwiaGlnaGxpZ2h0IiwiY2h4SW5mIiwiaW5wdXRJbmYiLCJjaHhTdXAiLCJpbnB1dFN1cCIsImNoeEhpZ2hsaWdodCIsImRpdkluZiIsInRlc3QiLCJmcm9tRGF0ZSIsImxhYmVsSW5mIiwic3RvcFByb3BhZ2F0aW9uIiwiZGl2U3VwIiwibGFiZWxTdXAiLCJkaXZIaWdobGlnaHQiLCJsYWJlbEhpZ2hsaWdodCIsImZpbGxEaXNwbGF5IiwiZG9jdW1lbnQiLCJyZWFkeSIsImNvbGxhcHNlIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwid2luZG93Iiwic2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLDhEQUFELENBQXRCOztBQUNBQSxtQkFBTyxDQUFDLGlHQUFELENBQVAsQyxDQUNBO0FBQ0E7OztBQUNBQSxtQkFBTyxDQUFDLHdEQUFELENBQVA7O0FBQ0EsSUFBTUUsZUFBZSxHQUFHRixtQkFBTyxDQUFDLDBGQUFELENBQS9COztBQUVBLElBQUlHLFlBQVksR0FBRyxFQUFuQixDLENBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNDLFNBQVQsR0FBc0I7QUFDckIsT0FBS0MsWUFBTCxHQUFvQixJQUFJSCxlQUFKLEVBQXBCO0FBQ0E7O0FBRURFLFNBQVMsQ0FBQ0UsU0FBVixHQUFzQjtBQUVyQkMsS0FBRyxFQUFFLGFBQVNDLEdBQVQsRUFBYztBQUNsQixXQUFPLEtBQUtILFlBQUwsQ0FBa0JFLEdBQWxCLENBQXNCQyxHQUF0QixDQUFQO0FBQ0EsR0FKb0I7QUFNckJDLEtBQUcs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LE1BQU0sQ0FBQ3RFLFFBQVAsQ0FBZ0J1RSxNQUFyQztBQUNBckgsV0FBUyxDQUFDM0QsS0FBVjtBQUVBLENBNUpELEUiLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbmNvbnN0IHBvcHBlciA9IHJlcXVpcmUoJ3BvcHBlci5qcycpO1xyXG5yZXF1aXJlKCdzdGlja3ktdGFibGUtaGVhZGVycycpO1xyXG4vL2NvbnN0IHRhYmxlRHJhZ2dlciA9IHJlcXVpcmUoJ3RhYmxlLWRyYWdnZXInKTtcclxuLy9yZXF1aXJlKCdqcXVlcnktcmVzaXphYmxlLWNvbHVtbnMnKTtcclxucmVxdWlyZSgnLi4vY3NzL2RvY3VtZW50LnNjc3MnKTtcclxuY29uc3QgVVJMU2VhcmNoUGFyYW1zID0gcmVxdWlyZSgnQHVuZ2FwL3VybC1zZWFyY2gtcGFyYW1zL2NqcycpO1xyXG5cclxudmFyIHRhYmxlSGVhZGVycyA9IFtdO1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy9VcmxTZWFyY2hcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIFVybFNlYXJjaCAoKSB7XHJcblx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbn1cclxuXHJcblVybFNlYXJjaC5wcm90b3R5cGUgPSB7XHJcblxyXG5cdGhhczogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcGFyYW1zQXJyYXkuaGFzKGtleSk7XHJcblx0fSxcclxuXHRcclxuXHRnZXQ6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0aWYgKC9cXFMrXFxbXFxdL2cuZXhlYyhrZXkpKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLl9wYXJhbXNBcnJheS5nZXRBbGwoa2V5KSB8fCBbXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB0aGlzLl9wYXJhbXNBcnJheS5nZXQoa2V5KSB8fCAnJztcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG5cdFx0aWYgKGtleSA9PSAndnVlJykge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoeyd2dWUnOiB2YWx1ZX0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkuc2V0KGtleSwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0YXBwZW5kOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRpZiAoa2V5ID09ICd2dWUnKSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7J3Z1ZSc6IHZhbHVlfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheS5hcHBlbmQoa2V5LCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRkZWxldGU6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0dGhpcy5fcGFyYW1zQXJyYXkuZGVsZXRlKGtleSk7XHJcblx0fSxcclxuXHRcclxuXHRzZXRGcm9tVXJsOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0bGV0IHBhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh2YWx1ZSk7XHJcblx0XHRpZiAocGFyYW1zQXJyYXkuaGFzKCd2dWUnKSkge1xyXG5cdFx0XHR0aGlzLnNldCgndnVlJywgcGFyYW1zQXJyYXkuZ2V0KCd2dWUnKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheSA9IHBhcmFtc0FycmF5O1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0dG9Vcmw6IGZ1bmN0aW9uKGtleSA9ICcnKSB7XHJcblx0XHRsZXQgdXJsID0gJyc7XHJcblx0XHRpZiAoa2V5ID09ICcnKSB7XHJcblx0XHRcdHVybCA9IHRoaXMuX3BhcmFtc0FycmF5LnRvU3RyaW5nKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YWx1ZXMgPSB0aGlzLmdldChrZXkpO1xyXG5cdFx0XHRmb3IgKGkgaW4gdmFsdWVzKSB7XHJcblx0XHRcdFx0dmFsdWVzW2ldID0ga2V5ICsgJz0nICsgdmFsdWVzW2ldO1xyXG5cdFx0XHR9XHJcblx0XHRcdHVybCA9IHZhbHVlcy5qb2luKCcmJyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gKHVybCk/Jz8nICsgdXJsOicnO1xyXG5cdH0sXHJcblx0XHJcblx0ZmV0Y2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHRsZXQgdXJsID0gJCgnI3RhYmxlJykuZGF0YSgndXJsJykgKyB0aGlzLnRvVXJsKCk7XHJcblx0XHQkKCcjdGFibGUnKS5oaWRlKCk7XHJcblx0XHRhamF4LnNldCgnI3NwaW5uZXInLCB1cmwsICdHRVQnLCB1bmRlZmluZWQsIGZhbHNlLCB0aGlzLmZpbGxUYWJsZS5iaW5kKHRoaXMpKTtcclxuXHRcdFxyXG5cdH0sXHJcblx0XHJcblx0ZmlsbFRhYmxlOiBmdW5jdGlvbih0YXJnZXQsIHJlc3VsdCA9ICcnKSB7XHJcblx0XHRcclxuXHRcdCQoJyNzcGlubmVyJykuZW1wdHkoKTtcclxuXHRcdCQoJyN0YWJsZSA+IHRib2R5JykuZW1wdHkoKTtcclxuXHRcdCQoJyN0YWJsZScpLnNob3coKTtcclxuXHRcdGlmIChyZXN1bHQgPT0gZmFsc2UpIHJldHVybjtcclxuXHRcdFxyXG5cdFx0Y29uc29sZS5sb2cocmVzdWx0LnF1ZXJ5KTtcclxuXHRcdFxyXG5cdFx0bGV0IHNlYXJjaFVybCA9ICQucGFyYW0ocmVzdWx0LnF1ZXJ5KTtcclxuXHRcdHRoaXMuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2hVcmwpO1xyXG5cdFx0dGhpcy5kZWxldGUoJ2lkW10nKTtcclxuXHRcdFxyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQvL3Z1ZVxyXG5cdFx0JCgnI3Z1ZXMnKS5maW5kKCdidXR0b25bZGF0YS1pZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoJCh0aGlzKS5kYXRhKCdpZCcpID09IHRoYXQuZ2V0KCd2dWUnKSkge1xyXG5cdFx0XHRcdCQodGhpcykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ2RpdiA+IGJ1dHRvbicpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tb3V0bGluZS1wcmltYXJ5IGRyb3Bkb3duLXRvZ2dsZScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQodGhpcykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCdkaXYgPiBidXR0b24nKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHRmb3IgKGxldCB0YWJsZUhlYWRlciBvZiB0YWJsZUhlYWRlcnMpIHtcclxuXHRcdFx0XHJcblx0XHRcdC8vZGlzcGxheVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGRpc3BsYXkgPSB0aGlzLmdldCgnZGlzcGxheVsnICsgdGFibGVIZWFkZXIuaWQgKyAnXScpKSB7XHJcblxyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmFEaXNwbGF5LmFkZENsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuYURpc3BsYXkucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuY2h4RGlzcGxheS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuY29sLmNzcygnd2lkdGgnLCBkaXNwbGF5ICsgJ2VtJyk7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuY29sLnNob3coKTtcclxuXHRcdFx0XHR0YWJsZUhlYWRlci50aC5zaG93KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9oZWFkZXJzXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uZW1wdHkoKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5pc0ZpbHRlcmVkID0gZmFsc2U7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MgPSBmYWxzZTtcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5pc1NvcnRlZERlc2MgPSBmYWxzZTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRmb3IgKGxldCBzZWxlY3Qgb2YgdGFibGVIZWFkZXIuc2VsZWN0cykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGhpcy5oYXMoc2VsZWN0Lm5hbWUpKSB7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzRmlsdGVyZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGhpcy5nZXQoJ3NvcnRBc2MnKSA9PSB0YWJsZUhlYWRlci5pZCkge1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuaXNTb3J0ZWRBc2MgPSB0cnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGhpcy5nZXQoJ3NvcnREZXNjJykgPT0gdGFibGVIZWFkZXIuaWQpIHtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlzU29ydGVkRGVzYyA9IHRydWU7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmFwcGVuZCgodGFibGVIZWFkZXIuaXNGaWx0ZXJlZCk/aWNvbi5mdW5uZWxGaWxsOmljb24uZnVubmVsKTtcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHRhYmxlSGVhZGVyLmlzU29ydGVkQXNjKSB7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoaWNvbi5hcnJvd0Rvd24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuaXNTb3J0ZWREZXNjKSB7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoaWNvbi5hcnJvd1VwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuYURpc3BsYXkuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuYURpc3BsYXkucmVtb3ZlQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0XHR0YWJsZUhlYWRlci5jaHhEaXNwbGF5LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuY29sLmhpZGUoKTtcclxuXHRcdFx0XHR0YWJsZUhlYWRlci50aC5oaWRlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vdGJvZHlcclxuXHRcdGZvciAobGV0IHZlcnNpb24gb2YgcmVzdWx0LnZlcnNpb25zKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgdHIgPSAkKCcjdGFibGUgPiB0Ym9keScpLmFwcGVuZChjcmVhdGUudHIpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGRpdiA9IHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXR0cignaWQnLCAnY18nICsgdmVyc2lvbi5pZClcclxuXHRcdFx0XHQudmFsKHZlcnNpb24uaWQpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIHRoaXMubGluZUNoZWNrZWQuYmluZCh0aGlzKSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ2ZvcicsICdjXycgKyB2ZXJzaW9uLmlkKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRcclxuXHRcdFx0Zm9yIChsZXQgdGFibGVIZWFkZXIgb2YgdGFibGVIZWFkZXJzKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ZGF0YSA9IHZlcnNpb25bdGFibGVIZWFkZXIuaWRdO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdHN3aXRjaCAodGFibGVIZWFkZXIuY29sLmF0dHIoJ2NsYXNzJykpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSAndHlwZS1ib29sZWFuJzpcclxuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YSA9PSAwKSBkYXRhID0gJ05vJztcclxuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YSA9PSAxKSBkYXRhID0gJ1llcyc7XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3R5cGUtdmVyc2lvbic6XHJcblx0XHRcdFx0XHRcdGNhc2UgJ3R5cGUtZGF0ZSc6XHJcblx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3RleHQtY2VudGVyJztcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSAndHlwZS1yZWZlcmVuY2UnOlxyXG5cdFx0XHRcdFx0XHRjYXNlICd0eXBlLW5hbWUnOlxyXG5cdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0ZXh0LWxlZnQnO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICcnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoZGF0YUNsYXNzKVxyXG5cdFx0XHRcdFx0XHQudGV4dChkYXRhKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQvL2hpZ2hsaWdodFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnaGlnaGxpZ2h0JykgPT0gdGFibGVIZWFkZXIuaWQpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGRhdGEudG9EYXRlKCkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZGF0YS50b0RhdGUoKSA8IG5ldyBEYXRlKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRyLmFkZENsYXNzKCdoaWdobGlnaHQtbGF0ZScpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoZGF0YS50b0RhdGUoKS5hZGREYXlzKC0xNSkgPCBuZXcgRGF0ZSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0ci5hZGRDbGFzcygnaGlnaGxpZ2h0LTE1Jyk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChkYXRhLnRvRGF0ZSgpLmFkZERheXMoLTMwKSA8IG5ldyBEYXRlKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHRyLmFkZENsYXNzKCdoaWdobGlnaHQtMzAnKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0dHIuYWRkQ2xhc3MoJ2hpZ2hsaWdodC1vaycpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuY29sLmhpZGUoKTtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLnRoLmhpZGUoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuLXN1Y2Nlc3Mgdy0xMDAnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdXJsJywgdmVyc2lvbi5kZXRhaWxVcmwpXHJcblx0XHRcdFx0XHQudGV4dCh0ZXh0LmRldGFpbHMpXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0JCgnI3RhYmxlIHRib2R5IGJ1dHRvbltkYXRhLXVybF0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnI21vZGFsX2RldGFpbCcpLm1vZGFsKCdzaG93Jyk7XHJcblx0XHRcdGFqYXguc2V0KCcjbW9kYWxfZGV0YWlsIC5tb2RhbC1ib2R5JywgJCh0aGlzKS5kYXRhKCd1cmwnKSwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHRoYXQuc2hvd0RldGFpbC5iaW5kKHRoYXQpKTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQvL3BhZ2luYXRpb25cclxuXHRcdCQoJyNwYWdpbmF0aW9uJykuZW1wdHkoKTtcclxuXHRcdFx0XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuYWRkQ2xhc3MoJ21iLTQnKTtcclxuXHRcdFxyXG5cdFx0bGV0IHBhZ2VNYXggPSByZXN1bHQucGFnZU1heDtcclxuXHRcdGxldCBwYWdlID0gcGFyc2VJbnQodGhpcy5nZXQoJ3BhZ2UnKSkgfHwgMTtcclxuXHRcdHBhZ2UgPSBNYXRoLm1heChNYXRoLm1pbihwYWdlLCBwYWdlTWF4KSwgMSk7XHJcblx0XHRcclxuXHRcdGRpdiA9ICQoJyNwYWdpbmF0aW9uJykuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygncm93IG0tMCcpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGRpdi5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdjb2wnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHR1bCA9IGRpdi5hcHBlbmQoY3JlYXRlLnVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3BhZ2luYXRpb24gY29sIGp1c3RpZnktY29udGVudC1jZW50ZXInKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRpZiAocmVzdWx0LnBhZ2VNYXggPiAxKSB7XHJcblx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IDEpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAocGFnZSA+IDEpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5zZXQoJ3BhZ2UnLCBwYWdlIC0gMSk7XHJcblx0XHRcdFx0XHRcdHRoYXQuZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0dGhhdC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgTWF0aC5tYXgoMSwgcGFnZSAtIDEpKVxyXG5cdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0Lmh0bWwoJyZsYXF1bzsnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgcGFnZVN0YXJ0ID0gTWF0aC5taW4oTWF0aC5tYXgoMSwgcGFnZSAtIDIpLCBNYXRoLm1heCgxLCByZXN1bHQucGFnZU1heCAtIDQpKTtcclxuXHRcdFx0bGV0IHBhZ2VFbmQgPSBNYXRoLm1pbihwYWdlU3RhcnQgKyA1LCBwYWdlTWF4KTtcclxuXHRcdFx0XHJcblx0XHRcdGZvciAobGV0IGkgPSBwYWdlU3RhcnQ7IGkgPD0gcGFnZUVuZDsgaSsrKSB7XHJcblx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSBpKT8nIGFjdGl2ZSc6JycpKVxyXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR0aGF0LnNldCgncGFnZScsIGkpO1xyXG5cdFx0XHRcdFx0XHR0aGF0LmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdHRoYXQuZmV0Y2goKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgaSlcclxuXHRcdFx0XHRcdFx0LnRleHQoaSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IHBhZ2VNYXgpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAocGFnZSA8IHBhZ2VNYXgpIHtcclxuXHRcdFx0XHRcdFx0dGhhdC5zZXQoJ3BhZ2UnLCBwYWdlICsgMSk7XHJcblx0XHRcdFx0XHRcdHRoYXQuZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0dGhhdC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgTWF0aC5taW4ocGFnZU1heCwgcGFnZSArIDEpKVxyXG5cdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0Lmh0bWwoJyZyYXF1bzsnKVxyXG5cdFx0XHQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHNlbGVjdCA9IGRpdi5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdjb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbXQtMSBtci01JylcclxuXHRcdFx0LmFwcGVuZChjcmVhdGUuc2VsZWN0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gYmctZGFyayBib3JkZXItc2Vjb25kYXJ5IHRleHQtd2hpdGUnKVxyXG5cdFx0XHQuY3NzKCd3aWR0aCcsICcxNTAnKVxyXG5cdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3Jlc3VsdHNfcGVyX3BhZ2UnLCAkKHRoaXMpLnZhbCgpKVxyXG5cdFx0XHRcdHRoYXQuZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0bGV0IHJlc3VsdHNQZXJQYWdlID0gbmV3IE1hcChbWycxMCcsIDEwXSwgWyc1MCcsIDUwXSwgWycxMDAnLCAxMDBdLCBbdGV4dC5hbGwsICcwJ11dKTtcclxuXHRcdGZvciAobGV0IFt0ZXh0LCB2YWx1ZV0gb2YgcmVzdWx0c1BlclBhZ2UpIHtcclxuXHRcdFx0c2VsZWN0LmFwcGVuZChjcmVhdGUub3B0aW9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hdHRyKCd2YWx1ZScsIHZhbHVlKVxyXG5cdFx0XHRcdC5hdHRyKCdzZWxlY3RlZCcsIHVybFNlYXJjaC5nZXQoJ3Jlc3VsdHNfcGVyX3BhZ2UnKSA9PSB2YWx1ZSlcclxuXHRcdFx0XHQudGV4dCh0ZXh0KVxyXG5cdFx0XHQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0Ly9mbGFzaGVzXHJcblx0XHRcclxuXHRcdCQoJyN0b2FzdCcpLmVtcHR5KCk7XHJcblx0XHRcclxuXHRcdGZvciAoY29uc3QgbGFiZWwgaW4gcmVzdWx0LmZsYXNoKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgZGl2ID0gJCgnI3RvYXN0JykuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdhbGVydCBhbGVydC0nICsgbGFiZWwgKyAnIGQtZmxleCBweC0zJylcclxuXHRcdFx0XHQuYXR0cigncm9sZScsICdhbGVydCcpXHJcblx0XHRcdFx0LmRhdGEoJ2RlbGF5JywgNTAwMClcclxuXHRcdFx0XHQuYXR0cignYXJpYS1saXZlJywgJ2Fzc2VydGl2ZScpXHJcblx0XHRcdFx0LmF0dHIoJ2FyaWEtYXRvbWljJywgdHJ1ZSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnYWxpZ24tc2VsZi1jZW50ZXInKVxyXG5cdFx0XHRcdC5hcHBlbmQoaWNvbltsYWJlbF0pO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGJvZHkgPSBkaXYuYXBwZW5kKGNyZWF0ZS51bCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2p1c3RpZnktY29udGVudC1jZW50ZXIgZmxleC1maWxsJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnanVzdGlmeS1jb250ZW50LWVuZCcpXHJcblx0XHRcdFx0LmFwcGVuZChpY29uLmNsb3NlKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChyZXN1bHQuZmxhc2hbbGFiZWxdLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRmb3IgKGxldCBtZXNzYWdlIG9mIHJlc3VsdC5mbGFzaFtsYWJlbF0pIHtcclxuXHRcdFx0XHRcdGJvZHkuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LnRleHQobWVzc2FnZSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ym9keS50ZXh0KHJlc3VsdC5mbGFzaFtsYWJlbF1bMF0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRkaXYudG9hc3QoJ3Nob3cnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dGhpcy5saW5lQ2hlY2tlZCgpO1xyXG5cdFx0XHJcblx0XHQvLyQoJ3RhYmxlJykuc3RpY2t5VGFibGVIZWFkZXJzKCk7XHJcblx0XHRcclxuXHR9LFxyXG5cdFxyXG5cdGxpbmVDaGVja2VkOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcclxuXHRcdHZhciBjaGVja2VkID0gZmFsc2U7XHJcblx0XHR2YXIgdW5jaGVja2VkID0gZmFsc2U7XHJcblx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG5cdFx0JCgndGJvZHknKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR1bmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHR0aGF0LmRlbGV0ZSgnaWRbXScpO1xyXG5cdFx0XHJcblx0XHRpZiAoY2hlY2tlZCkge1xyXG5cdFx0XHQkKCd0YWJsZScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKCQodGhpcykucHJvcCgnaWQnKSAhPSAnY2hlY2tfYWxsJyAmJiAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHR0aGF0LmFwcGVuZCgnaWRbXScsICQodGhpcykudmFsKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZWRpdCcpLnNob3coKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X21vdmUnKS5zaG93KCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9kZWxldGUnKS5zaG93KCk7XHJcblx0XHRcdCQoJyN2ZXJzaW9uX21lbnUnKS5zaG93KCk7XHJcblx0XHR9IGVsc2UgaWYodW5jaGVja2VkKSB7XHJcblx0XHRcdCQoJyN2ZXJzaW9uJykudmFsKCcnKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjdmVyc2lvbl9tZW51JykuaGlkZSgpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0c2hvd0RldGFpbDogZnVuY3Rpb24odGFyZ2V0LCByZXN1bHQgPSAnJykge1xyXG5cdFx0JCh0YXJnZXQpLmZpbmQoJy5zcGlubmVyLWJvcmRlcicpLnBhcmVudCgpLnJlbW92ZSgpO1xyXG5cdFx0aWYgKHJlc3VsdCkge1xyXG5cdFx0XHQkKHRhcmdldCkuaHRtbCgkKHRhcmdldCkuaHRtbCgpICsgcmVzdWx0KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIHBvcG92ZXJcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHRcdCQodGFyZ2V0KS5maW5kKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyXCJdJykucG9wb3ZlcigpO1xyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gQWpheFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdCAgICAvL2FqYXguZmV0Y2godGFyZ2V0LCB0aGlzLnNob3dEZXRhaWwuYmluZCh0aGlzKSk7XHJcblx0ICAgIFxyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQkKCcjdmVyc2lvbl90YWJzJykuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5wYXJlbnQoKS5oYXMoJy5hY3RpdmUnKSkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGFqYXguc2V0KCcjdmVyc2lvbl9jb250ZW50JywgJCh0aGlzKS5kYXRhKCd1cmwnKSwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHRoYXQuc2hvd0NvbnRlbnQuYmluZCh0aGF0KSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JCgnI3ZlcnNpb25fbmV3X2RldGFpbCwgI3ZlcnNpb25fZWRpdF9kZXRhaWwsICN2ZXJzaW9uX3JlbW92ZV9kZXRhaWwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnI21vZGFsJykubW9kYWwoJ3Nob3cnKTtcclxuXHRcdFx0YWpheC5zZXQoJyNtb2RhbCAubW9kYWwtY29udGVudCcsICQodGhpcykuZGF0YSgndXJsJykgKyAnP2lkW109JyArICQoJyN2ZXJzaW9uX3RhYnM+YS5hY3RpdmUnKS5kYXRhKCdpZCcpLCAnR0VUJywgdW5kZWZpbmVkLCBmYWxzZSwgdGhhdC5vbkRhdGFFZGl0ZWQuYmluZCh0aGF0KSk7XHJcblx0ICAgIH0pO1xyXG5cclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIE1vZGFsICYgQ29sbGFwc2VcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0ICAgIFxyXG5cdFx0JCh0YXJnZXQpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1baHJlZj1cIiMnICsgJCh0aGlzKS5hdHRyKCdpZCcpICsgJ1wiXScpXHJcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG5cdFx0XHRcdC5ibHVyKClcclxuXHRcdFx0O1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQodGFyZ2V0KS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJykuYmx1cigpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQodGFyZ2V0KS5maW5kKCdidXR0b25bZGF0YS1kaXNtaXNzXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIEJvb3RzdHJhcCBkYXRlcGlja2VyXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcblx0XHQkKHRhcmdldCkuZmluZCgnLmRhdGVwaWNrZXInKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKHRoaXMpLmRhdGVwaWNrZXIoKTtcclxuXHRcdH0pXHJcblx0fSxcclxuXHRcclxuXHRzaG93Q29udGVudDogZnVuY3Rpb24odGFyZ2V0LCByZXN1bHQgPSAnJykge1xyXG5cdFx0XHJcblx0XHRhamF4Lm9uU3VjY2Vzcyh0YXJnZXQsIHJlc3VsdCk7XHJcblxyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQkKCcjc2F2ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0XHRhamF4LnNldCgnI21vZGFsIC5tb2RhbC1jb250ZW50JywgJCh0aGlzKS5kYXRhKCd1cmwnKSwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHRoYXQub25EYXRhRWRpdGVkLmJpbmQodGhhdCkpO1xyXG5cdCAgICB9KTtcclxuXHR9LFxyXG5cdFxyXG5cdG9uRGF0YUVkaXRlZDogZnVuY3Rpb24odGFyZ2V0LCByZXN1bHQgPSAnJykge1xyXG5cdFx0XHJcblx0XHRpZiAocmVzdWx0KSB7XHJcblx0XHRcdGFqYXgub25TdWNjZXNzKHRhcmdldCwgcmVzdWx0LCB0aGlzLm9uRGF0YUVkaXRlZC5iaW5kKHRoaXMpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdGlmICgkKCcjbW9kYWxfZGV0YWlsJykuaGFzQ2xhc3MoJ3Nob3cnKSkge1xyXG5cdFx0XHRcdGFqYXguc2V0KCcjbW9kYWxfZGV0YWlsIC5tb2RhbC1ib2R5JywgJCgnI21lbnUnKS5kYXRhKCd1cmwnKSwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHRoYXQuc2hvd0RldGFpbC5iaW5kKHRoYXQpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHQkKCcjbW9kYWwgLm1vZGFsLWNvbnRlbnQnKS5lbXB0eSgpO1xyXG5cdFx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSxcclxuXHRcclxuXHRvblZ1ZUVkaXRlZDogZnVuY3Rpb24odGFyZ2V0LCByZXN1bHQgPSAnJykge1xyXG5cdFx0XHJcblx0XHRpZiAocmVzdWx0KSB7XHJcblx0XHRcdGFqYXgub25TdWNjZXNzKHRhcmdldCwgcmVzdWx0LCB0aGlzLm9uVnVlRWRpdGVkLmJpbmQodGhpcykpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bG9jYXRpb24uYXNzaWduKGxvY2F0aW9uLm9yaWdpbiArIGxvY2F0aW9uLnBhdGhuYW1lICsgdXJsU2VhcmNoLnRvVXJsKCkpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSxcclxuXHRcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy8gdGFibGVIZWFkZXJcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVRhYmxlSGVhZGVyKHRoYXQpIHtcclxuXHRcclxuXHR2YXIgdGFibGVIZWFkZXIgPSB7XHJcblx0XHRjb2w6ICQodGhhdCkuY2xvc2VzdCgndGFibGUnKS5maW5kKCdjb2wnKS5lcSgkKHRoYXQpLmluZGV4KCkpLFxyXG5cdFx0dGg6ICQodGhhdCksXHJcblx0XHRpZDogJCh0aGF0KS5hdHRyKCdpZCcpLFxyXG5cdFx0bmFtZTogJCh0aGF0KS5hdHRyKCduYW1lJyksXHJcblx0XHR0aXRsZTogJCh0aGF0KS5kYXRhKCd0aXRsZScpLFxyXG5cdFx0c29ydDogJCh0aGF0KS5kYXRhKCdzb3J0JyksXHJcblx0XHR0eXBlOiAkKHRoYXQpLmF0dHIoJ2NsYXNzJyksXHJcblx0XHRpc0ZpbHRlcmVkOiBmYWxzZSxcclxuXHRcdGlzU29ydGVkQXNjOiBmYWxzZSxcclxuXHRcdGlzU29ydGVkRGVzYzogZmFsc2UsXHJcblx0XHRzZWxlY3RzOiBbXSxcclxuXHR9XHJcblx0XHJcblx0JCh0aGF0KS5maW5kKCdzZWxlY3QnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHR2YXIgbXVsdGlwbGVBdHRyID0gKHR5cGVvZiAkKHRoaXMpLmF0dHIoJ211bHRpcGxlJykgIT09IHR5cGVvZiB1bmRlZmluZWQgJiYgJCh0aGlzKS5hdHRyKCdtdWx0aXBsZScpICE9PSBmYWxzZSk7XHJcblx0XHR2YXIgbmFtZSA9ICQodGhpcykucHJvcCgnbmFtZScpICsgKChtdWx0aXBsZUF0dHIpPydbXSc6JycpO1xyXG5cdFx0XHJcblx0XHR2YXIgc2VsZWN0ID0ge1xyXG5cdFx0XHRcdHNsdDogJCh0aGlzKSxcclxuXHRcdFx0XHRpZDogJCh0aGlzKS5wcm9wKCdpZCcpLFxyXG5cdFx0XHRcdG5hbWU6IG5hbWUsXHJcblx0XHRcdFx0bXVsdGlwbGU6IG11bHRpcGxlQXR0cixcclxuXHRcdFx0XHR0aXRsZTogJCh0aGlzKS5kYXRhKCd0aXRsZScpLFxyXG5cdFx0XHRcdG9wdGlvbnM6IFtdLFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0JCh0aGlzKS5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzZWxlY3Qub3B0aW9ucy5wdXNoKHtcclxuXHRcdFx0XHR2YWx1ZTogJCh0aGlzKS5hdHRyKCd2YWx1ZScpLFxyXG5cdFx0XHRcdHRleHQ6ICQodGhpcykudGV4dCgpLFxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5zZWxlY3RzLnB1c2goc2VsZWN0KTtcclxuXHRcdFxyXG5cdH0pO1xyXG5cdFxyXG5cdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzLmxlbmd0aCB8fCB0YWJsZUhlYWRlci50eXBlID09ICd0eXBlLWRhdGUnKSB7XHJcblx0XHJcblx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bkdyb3VwID0gdGFibGVIZWFkZXIudGguYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuLWdyb3VwIHctMTAwJylcclxuXHRcdFx0LmF0dHIoJ3JvbGUnLCAnZ3JvdXAnKVxyXG5cdFx0XHQub24oJ2hpZGUuYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmKGUuY2xpY2tFdmVudCAmJiAkLmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldC5wYXJlbnROb2RlLCBlLmNsaWNrRXZlbnQudGFyZ2V0KSkge1xyXG5cdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmRpdkRyb3Bkb3duTWVudS5lbXB0eSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cC5hcHBlbmQoY3JlYXRlLm1lbnVCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygndy0xMDAnKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSlcclxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzICYmIHRhYmxlSGVhZGVyLnNvcnQpIHtcclxuXHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gdGFibGVIZWFkZXIuc2VsZWN0c1swXS5uYW1lKSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydERlc2MnLCB0YWJsZUhlYWRlci5zZWxlY3RzWzBdLm5hbWUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydEFzYycsIHRhYmxlSGVhZGVyLnNlbGVjdHNbMF0ubmFtZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcclxuXHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duID0gdGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cC5hcHBlbmQoY3JlYXRlLm1lbnVCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygncHgtMCcpXHJcblx0XHRcdC5jc3MoJ3dpZHRoJywgJzNlbScpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdC5hdHRyKCdpZCcsICdiXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0LmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ2Ryb3Bkb3duJylcclxuXHRcdFx0LmF0dHIoJ2FyaWEtaGFzcG9wdXAnLCB0cnVlKVxyXG5cdFx0XHQuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxyXG5cdFx0O1xyXG5cdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25NZW51ID0gdGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdkcm9wZG93bi1tZW51JylcclxuXHRcdFx0LmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsICdiXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnZC1mbGV4IGZsZXgtcm93JylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuZGl2RHJvcGRvd25Hcm91cC5vbignc2hvdy5icy5kcm9wZG93bicsIGNyZWF0ZU1lbnUpO1xyXG5cdFx0XHJcblx0fSBlbHNlIHtcclxuXHRcdFxyXG5cdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24gPSB0YWJsZUhlYWRlci50aC5hcHBlbmQoY3JlYXRlLm1lbnVCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygndy0xMDAnKVxyXG5cdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0fVxyXG5cclxuXHRmdW5jdGlvbiBjcmVhdGVNZW51KCkge1xyXG5cdFx0XHJcblx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGgpIHtcclxuXHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUuZW1wdHkoKTtcclxuXHRcdFx0XHJcblx0XHRcdGZvciAobGV0IHNlbGVjdCBvZiB0YWJsZUhlYWRlci5zZWxlY3RzKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdkNvbnRlbnQgPSB0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ214LTEnKVxyXG5cdFx0XHRcdFx0LmNzcygnbWluLXdpZHRoJywgJzE1ZW0nKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoc2VsZWN0Lm11bHRpcGxlKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRcdFx0c2VsZWN0LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHBiLTIgcHgtMScpXHJcblx0XHRcdFx0XHRcdFx0LmFwcGVuZChzZWxlY3QudGl0bGUpO1xyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHNlbGVjdC5kaXZGaWx0ZXIgPSBzZWxlY3QuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBwLTEnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuc2VsZWN0cy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRzZWxlY3QuYnRuU29ydERlc2MgPSBzZWxlY3QuZGl2RmlsdGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFwcGVuZChpY29uLmFycm93VXApXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IHRhYmxlSGVhZGVyLmlkKT8ncHgtMiBidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J3B4LTIgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IHRhYmxlSGVhZGVyLmlkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0RGVzYycsIHRhYmxlSGVhZGVyLmlkKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LmJ0bkZpbHRlci50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0c2VsZWN0LmJ0bkZpbHRlciA9IHNlbGVjdC5kaXZGaWx0ZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LnRleHQodGV4dC5maWx0ZXIpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMyBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBzZWxlY3Qgb2YgdGFibGVIZWFkZXIuc2VsZWN0cykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZShzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoIXNlbGVjdC5jaHhTZWxlY3RBbGwuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbi5jaHguaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5hcHBlbmQoc2VsZWN0Lm5hbWUsIG9wdGlvbi52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmICh0YWJsZUhlYWRlci5zZWxlY3RzLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdHNlbGVjdC5idG5Tb3J0QXNjID0gc2VsZWN0LmRpdkZpbHRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd0Rvd24pXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gdGFibGVIZWFkZXIuaWQpPydweC0yIGJ0bi1vdXRsaW5lLXByaW1hcnkgYmctZGFyayB0ZXh0LXdoaXRlJzoncHgtMiBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gdGFibGVIZWFkZXIuaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydEFzYycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydEFzYycsIHRhYmxlSGVhZGVyLmlkKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5idG5GaWx0ZXIudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHNlbGVjdC5kaXZTZWFyY2ggPSBzZWxlY3QuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHAtMicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHNlbGVjdC5kaXZTZWFyY2guYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHZhciBzZWFyY2hWYWx1ZSA9ICQodGhpcykudmFsKCkudG9Mb3dlckNhc2UoKVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmIChzZWFyY2hWYWx1ZSA9PSAnJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LmRpdlNlbGVjdEFsbC5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmRpdi5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbi5jaHgucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0c2VsZWN0LmRpdlNlbGVjdEFsbC5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBvcHRpb24gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbi50ZXh0LnRvTG93ZXJDYXNlKCkuaW5kZXhPZihzZWFyY2hWYWx1ZSkgPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uZGl2LmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmRpdi5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9uLmNoeC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c2VsZWN0LmRpdkxpc3QgPSBzZWxlY3QuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMiBvdmVyZmxvdy1hdXRvICcgKyAoKHNlbGVjdC5tdWx0aXBsZSk/J3B0LTMnOidwdC0xJykpXHJcblx0XHRcdFx0XHQuY3NzKCdtYXgtaGVpZ2h0JywgJzIwZW0nKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoc2VsZWN0Lm11bHRpcGxlKSB7XHJcblx0XHRcdFx0XHRzZWxlY3QuZGl2U2VsZWN0QWxsID0gc2VsZWN0LmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0c2VsZWN0LmNoeFNlbGVjdEFsbCA9IHNlbGVjdC5kaXZTZWxlY3RBbGwuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnX3NlbGVjdEFsbCcpXHJcblx0XHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0dmFyIGNoZWNrZWQgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1x0XHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHNlbGVjdC5kaXZTZWxlY3RBbGwuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIHNlbGVjdC5uYW1lICsgJ19zZWxlY3RBbGwnKVxyXG5cdFx0XHRcdFx0XHQudGV4dCh0ZXh0LnNlbGVjdEFsbClcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRvcHRpb24uZGl2ID0gc2VsZWN0LmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHJcblx0XHRcdFx0XHRcdG9wdGlvbi5jaHggPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCB1cmxTZWFyY2guZ2V0KHNlbGVjdC5uYW1lKS5pbmNsdWRlcyhvcHRpb24udmFsdWUpKVxyXG5cdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IGNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCB1bmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICgkKG9wdGlvbi5jaHgpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dW5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2VsZWN0LmNoeFNlbGVjdEFsbC5wcm9wKCdpbmRldGVybWluYXRlJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuY2h4U2VsZWN0QWxsLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHNlbGVjdC5jaHhTZWxlY3RBbGwucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0b3B0aW9uLmxibCA9IG9wdGlvbi5kaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnXycgKyBvcHRpb24udmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0LnRleHQob3B0aW9uLnRleHQpXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHNlbGVjdC5kaXZVbmtub3duID0gc2VsZWN0LmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0c2VsZWN0LmNoeFVua25vd24gPSBzZWxlY3QuZGl2VW5rbm93bi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfbm90QXBwbGljYWJsZScpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgIXVybFNlYXJjaC5oYXMoc2VsZWN0Lm5hbWUpKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0dmFyIGNoZWNrZWQgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1x0XHJcblx0XHRcdFx0XHRcdFx0XHRvcHRpb24uY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoc2VsZWN0Lm5hbWUpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0XHRzZWxlY3QuZGl2VW5rbm93bi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnX25vdEFwcGxpY2FibGUnKVxyXG5cdFx0XHRcdFx0XHQudGV4dCh0ZXh0Lm5vdEFwcGxpY2FibGUpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IG9wdGlvbiBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0b3B0aW9uLmRpdiA9IHNlbGVjdC5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0b3B0aW9uLmNoeCA9IG9wdGlvbi5kaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfJyArIG9wdGlvbi52YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsIHVybFNlYXJjaC5nZXQoc2VsZWN0Lm5hbWUpLmluY2x1ZGVzKG9wdGlvbi52YWx1ZSkpXHJcblx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRzZWxlY3QuZGl2TGlzdC5maW5kKCdpbnB1dCcpLm5vdCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZShzZWxlY3QubmFtZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdGlmICghc2VsZWN0LmNoeFVua25vd24uaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgb3B0aW9uIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbi5jaHguaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5hcHBlbmQoc2VsZWN0Lm5hbWUsIG9wdGlvbi52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdG9wdGlvbi5sYmwgPSBvcHRpb24uZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIHNlbGVjdC5uYW1lICsgJ18nICsgb3B0aW9uLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdC50ZXh0KG9wdGlvbi50ZXh0KVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSBlbHNlIGlmICh0YWJsZUhlYWRlci50eXBlID09ICd0eXBlLWRhdGUnKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoKHJlc3VsdCA9IC8+KFxcZHsyfS1cXGR7Mn0tXFxkezR9KS8uZXhlYyh1cmxTZWFyY2guZ2V0KHRhYmxlSGVhZGVyLm5hbWUgKyAnW10nKS50b1N0cmluZygpKSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHR2YXIgdmFsdWVJbmYgPSByZXN1bHRbMV07XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dmFyIHZhbHVlSW5mID0gJyc7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmICgocmVzdWx0ID0gLzwoXFxkezJ9LVxcZHsyfS1cXGR7NH0pLy5leGVjKHVybFNlYXJjaC5nZXQodGFibGVIZWFkZXIubmFtZSArICdbXScpLnRvU3RyaW5nKCkpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdHZhciB2YWx1ZVN1cCA9IHJlc3VsdFsxXTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR2YXIgdmFsdWVTdXAgPSAnJztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGhpZ2hsaWdodCA9ICh1cmxTZWFyY2guZ2V0KCdoaWdobGlnaHQnKS50b1N0cmluZygpID09IHRhYmxlSGVhZGVyLmlkKTtcclxuXHRcdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLmRpdkNvbnRlbnQgPSB0YWJsZUhlYWRlci5kaXZEcm9wZG93bk1lbnUuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdteC0xJylcclxuXHRcdFx0XHQuY3NzKCdtaW4td2lkdGgnLCAnMTVlbScpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLmRpdkZpbHRlciA9IHRhYmxlSGVhZGVyLmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBwLTEnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5idG5Tb3J0RGVzYyA9IHRhYmxlSGVhZGVyLmRpdkZpbHRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd1VwKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSB0YWJsZUhlYWRlci5pZCk/J3B4LTIgYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOidweC0yIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSB0YWJsZUhlYWRlci5pZCkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydERlc2MnLCB0YWJsZUhlYWRlci5pZCk7XHJcblx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkZpbHRlci50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLmJ0bkZpbHRlciA9IHRhYmxlSGVhZGVyLmRpdkZpbHRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC50ZXh0KHRleHQuZmlsdGVyKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncHgtMyBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSh0YWJsZUhlYWRlci5uYW1lICsgJ1tdJyk7XHJcblx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuY2h4SW5mLmlzKCc6Y2hlY2tlZCcpICYmIChyZXN1bHQgPSAvXuKJpVxccyhcXGR7Mn0tXFxkezJ9LVxcZHs0fSkvLmV4ZWModGFibGVIZWFkZXIuaW5wdXRJbmYudmFsKCkpKSkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKHRhYmxlSGVhZGVyLm5hbWUgKyAnW10nLCAnPicgKyByZXN1bHRbMV0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuY2h4U3VwLmlzKCc6Y2hlY2tlZCcpICYmIChyZXN1bHQgPSAvXuKJpFxccyhcXGR7Mn0tXFxkezJ9LVxcZHs0fSkvLmV4ZWModGFibGVIZWFkZXIuaW5wdXRTdXAudmFsKCkpKSkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKHRhYmxlSGVhZGVyLm5hbWUgKyAnW10nLCAnPCcgKyByZXN1bHRbMV0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAodGFibGVIZWFkZXIuY2h4SGlnaGxpZ2h0LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ2hpZ2hsaWdodCcsIHRhYmxlSGVhZGVyLmlkKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodXJsU2VhcmNoLmdldCgnaGlnaGxpZ2h0JykudG9TdHJpbmcoKSA9PSB0YWJsZUhlYWRlci5pZCkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdoaWdobGlnaHQnKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuYnRuRHJvcGRvd24uZHJvcGRvd24oJ2hpZGUnKTtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuYnRuU29ydEFzYyA9IHRhYmxlSGVhZGVyLmRpdkZpbHRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd0Rvd24pXHJcblx0XHRcdFx0LmFkZENsYXNzKCh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gdGFibGVIZWFkZXIuaWQpPydweC0yIGJ0bi1vdXRsaW5lLXByaW1hcnkgYmctZGFyayB0ZXh0LXdoaXRlJzoncHgtMiBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gdGFibGVIZWFkZXIuaWQpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydEFzYycpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydEFzYycsIHRhYmxlSGVhZGVyLmlkKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmJ0bkZpbHRlci50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLmRpdkxpc3QgPSB0YWJsZUhlYWRlci5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncHgtMiBvdmVyZmxvdy1hdXRvICcgKyAoKHRhYmxlSGVhZGVyLm11bHRpcGxlKT8ncHQtMyc6J3B0LTEnKSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuZGl2SW5mID0gdGFibGVIZWFkZXIuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCBtdC0yJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuY2h4SW5mID0gdGFibGVIZWFkZXIuZGl2SW5mLmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ2lkJywgdGFibGVIZWFkZXIuaWQgKyAnX2luZicpXHJcblx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCB2YWx1ZUluZiAhPSAnJylcclxuXHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0bGV0IGNoZWNrZWQgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdFx0aWYgKGNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0aWYgKC9e4omlXFxzXFxkezJ9LVxcZHsyfS1cXGR7NH0vLnRlc3QodGFibGVIZWFkZXIuaW5wdXRJbmYudmFsKCkpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlucHV0SW5mLnZhbCgnJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlucHV0SW5mLnZhbCh0ZXh0LmZyb21EYXRlKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlucHV0SW5mLmF0dHIoJ3JlYWRvbmx5JywgY2hlY2tlZCA9PT0gZmFsc2UpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLmxhYmVsSW5mID0gdGFibGVIZWFkZXIuZGl2SW5mLmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ2ZvcicsIHRhYmxlSGVhZGVyLmlkICsgJ19pbmYnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5pbnB1dEluZiA9IHRhYmxlSGVhZGVyLmxhYmVsSW5mLmFwcGVuZChjcmVhdGUuaW5wdXQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdmb3JtLWNvbnRyb2wgZGF0ZXBpY2tlcicpXHJcblx0XHRcdFx0LnZhbCgodmFsdWVJbmYpPygn4omlICcgKyB2YWx1ZUluZik6dGV4dC5mcm9tRGF0ZSlcclxuXHRcdFx0XHQuYXR0cigncmVhZG9ubHknLCB2YWx1ZUluZiA9PSAnJylcclxuXHRcdFx0XHQuZGF0ZXBpY2tlcih7J2Zvcm1hdCc6ICfiiaUgZGQtbW0teXl5eSd9KVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNoeEluZi5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5jaHhJbmYudHJpZ2dlcignY2hhbmdlJyk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0ICAgIC5vbignc2hvdy5icy5kcm9wZG93biBoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHQgICAgXHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHQgICAgfSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuZGl2U3VwID0gdGFibGVIZWFkZXIuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCBtdC0yJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuY2h4U3VwID0gdGFibGVIZWFkZXIuZGl2U3VwLmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ2lkJywgdGFibGVIZWFkZXIuaWQgKyAnX3N1cCcpXHJcblx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCB2YWx1ZVN1cCAhPSAnJylcclxuXHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0bGV0IGNoZWNrZWQgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdFx0aWYgKGNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0aWYgKC9e4omkXFxzXFxkezJ9LVxcZHsyfS1cXGR7NH0vLnRlc3QodGFibGVIZWFkZXIuaW5wdXRTdXAudmFsKCkpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlucHV0U3VwLnZhbCgnJyk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRhYmxlSGVhZGVyLmlucHV0U3VwLnZhbCh0ZXh0LnRvRGF0ZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0YWJsZUhlYWRlci5pbnB1dFN1cC5hdHRyKCdyZWFkb25seScsIGNoZWNrZWQgPT09IGZhbHNlKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5sYWJlbFN1cCA9IHRhYmxlSGVhZGVyLmRpdlN1cC5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hdHRyKCdmb3InLCB0YWJsZUhlYWRlci5pZCArICdfc3VwJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0dGFibGVIZWFkZXIuaW5wdXRTdXAgPSB0YWJsZUhlYWRlci5sYWJlbFN1cC5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnZm9ybS1jb250cm9sIGRhdGVwaWNrZXInKVxyXG5cdFx0XHRcdC52YWwoKHZhbHVlU3VwKT8n4omkICcgKyB2YWx1ZVN1cDp0ZXh0LnRvRGF0ZSlcclxuXHRcdFx0XHQuYXR0cigncmVhZG9ubHknLCB2YWx1ZVN1cCA9PSAnJylcclxuXHRcdFx0XHQuZGF0ZXBpY2tlcih7J2Zvcm1hdCc6IFwi4omkIGRkLW1tLXl5eXlcIn0pXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dGFibGVIZWFkZXIuY2h4U3VwLnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdFx0XHRcdHRhYmxlSGVhZGVyLmNoeFN1cC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQgICAgLm9uKCdzaG93LmJzLmRyb3Bkb3duIGhpZGUuYnMuZHJvcGRvd24nLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdCAgICBcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdCAgICB9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5kaXZIaWdobGlnaHQgPSB0YWJsZUhlYWRlci5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94IG10LTInKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHR0YWJsZUhlYWRlci5jaHhIaWdobGlnaHQgPSB0YWJsZUhlYWRlci5kaXZIaWdobGlnaHQuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXR0cignaWQnLCB0YWJsZUhlYWRlci5pZCArICdfaGlnaGxpZ2h0JylcclxuXHRcdFx0XHQuYXR0cignbmFtZScsICdoaWdobGlnaHQnKVxyXG5cdFx0XHRcdC52YWwodGFibGVIZWFkZXIuaWQpXHJcblx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCBoaWdobGlnaHQpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdHRhYmxlSGVhZGVyLmxhYmVsSGlnaGxpZ2h0ID0gdGFibGVIZWFkZXIuZGl2SGlnaGxpZ2h0LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ2ZvcicsIHRhYmxlSGVhZGVyLmlkICsgJ19oaWdobGlnaHQnKVxyXG5cdFx0XHRcdC50ZXh0KHRleHQuaGlnaGxpZ2h0KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdHJldHVybiB0YWJsZUhlYWRlcjtcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy8gZmlsbERpc3BsYXlcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGZpbGxEaXNwbGF5KCkge1xyXG5cdHZhciBjb2wgPSAkKCcjZGlzcGxheScpLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0LmFkZENsYXNzKCdyb3cgcHktMicpXHJcblx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnY29sJylcclxuXHQ7XHJcblx0XHJcblx0Zm9yIChsZXQgdGFibGVIZWFkZXIgb2YgdGFibGVIZWFkZXJzKSB7XHJcblx0XHRcclxuXHRcdHRhYmxlSGVhZGVyLmFEaXNwbGF5ID0gY29sLmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5IGNvbC0yIG0tMSB0ZXh0LWxlZnQnKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGFibGVIZWFkZXIuY2h4RGlzcGxheS5wcm9wKCdjaGVja2VkJywgIXRhYmxlSGVhZGVyLmNoeERpc3BsYXkuaXMoJzpjaGVja2VkJykpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCBkaXNwbGF5ID0gdXJsU2VhcmNoLmdldCgnZGlzcGxheVsnICsgdGFibGVIZWFkZXIuaWQgKyAnXScpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ2Rpc3BsYXlbJyArIHRhYmxlSGVhZGVyLmlkICsgJ10nKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodGFibGVIZWFkZXIuY2h4RGlzcGxheS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0aWYgKGRpc3BsYXkgPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZCgnZGlzcGxheVsnICsgdGFibGVIZWFkZXIuaWQgKyAnXScsIDEwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRsZXQgZGl2ID0gdGFibGVIZWFkZXIuYURpc3BsYXkuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHR0YWJsZUhlYWRlci5jaHhEaXNwbGF5ID0gZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hdHRyKCdpZCcsICdoXycgKyB0YWJsZUhlYWRlci5pZClcclxuXHRcdFx0Lm9uKCdjaGFuZ2UgY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXR0cignZm9yJywgJ2hfJyArIHRhYmxlSGVhZGVyLmlkKVxyXG5cdFx0XHQudGV4dCh0YWJsZUhlYWRlci50aXRsZSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG59XHRcclxuXHJcbnZhciB1cmxTZWFyY2ggPSBuZXcgVXJsU2VhcmNoKCk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFNlYXJjaCBmb3JtXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjc2VhcmNoIGJ1dHRvbicpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHR1cmxTZWFyY2guc2V0KCdzZWFyY2gnLCAkKCcjc2VhcmNoIGlucHV0JykudmFsKCkpO1xyXG5cdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdFx0XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3NlYXJjaCBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdCQoJyNzZWFyY2ggaW5wdXQnKS52YWwoJycpO1xyXG5cdFx0XHJcblx0XHRpZiAodXJsU2VhcmNoLmhhcygnc2VhcmNoJykpIHtcclxuXHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc2VhcmNoJyk7XHJcblx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIHRydWU7XHJcblx0XHRcclxuXHR9KTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIE1vZGFsXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQvKlxyXG5cdCQoJyNtb2RhbCcpLm9uKCdzaG93LmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0YWpheC5zZXQoJyNtb2RhbCAubW9kYWwtY29udGVudCcsICQoZS5yZWxhdGVkVGFyZ2V0KS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1VybCgpKTtcclxuXHR9KTtcclxuXHQqL1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9uZXcsICNkb2N1bWVudF9lZGl0LCAjZG9jdW1lbnRfbW92ZSwgI2RvY3VtZW50X2RlbGV0ZSwgI3ZlcnNpb25fbmV3LCAjdmVyc2lvbl9lZGl0LCAjdmVyc2lvbl9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJyNtb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcblx0XHRhamF4LnNldCgnI21vZGFsIC5tb2RhbC1jb250ZW50JywgJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1VybCgnaWRbXScpLCAnR0VUJywgdW5kZWZpbmVkLCBmYWxzZSwgdXJsU2VhcmNoLm9uRGF0YUVkaXRlZC5iaW5kKHVybFNlYXJjaCkpO1xyXG5cdH0pXHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBNb2RhbF9kZXRhaWxcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdC8qXHJcblx0JChkb2N1bWVudCkuYWpheENvbXBsZXRlKGZ1bmN0aW9uKGUsIHhocikge1xyXG5cdFx0aWYgKHhoci5yZXNwb25zZVRleHQgPT09ICcnKSB7XHJcblx0XHRcdC8vdXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdCQoJyNtb2RhbCcpLm1vZGFsKCdoaWRlJyk7XHJcblx0XHRcdGFqYXguc2V0KCcjdG9hc3QnLCAkKCcjdG9hc3QnKS5kYXRhKCd1cmwnKSk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0Ki9cclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBNZW51IGRpc3BsYXlcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHQkKCcjZG9jdW1lbnRfZWRpdCcpLmhpZGUoKTtcclxuXHQkKCcjZG9jdW1lbnRfbW92ZScpLmhpZGUoKTtcclxuXHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdCQoJyN2ZXJzaW9uX21lbnUnKS5oaWRlKCk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBUYWIgY29sbGFwc2VcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyN0YWJzJykub24oJ3Nob3cuYnMudGFiJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcuY29sbGFwc2UnKS5jb2xsYXBzZSgnc2hvdycpO1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCd0YWJzX2hpZGRlbicpO1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCd0YWJzX3Nob3dlZCcpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN0YWJzIHVsIGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0JCh0aGlzKS5ibHVyKCk7XHJcblx0XHRcdCQodGhpcykuYXR0cignYXJpYS1zZWxlY3RlZCcsIGZhbHNlKTtcclxuXHRcdFx0JCgnIycgKyAkKHRoaXMpLmF0dHIoJ2FyaWEtY29udHJvbHMnKSkucGFyZW50KCkuY29sbGFwc2UoJ2hpZGUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuICAgIFxyXG5cdCQoJyN0YWJzJykub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3RhYnNfaGlkZGVuJyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuYWRkQ2xhc3MoJ3RhYnNfc2hvd2VkJyk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3RhYnMnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCd0YWJzX3Nob3dlZCcpO1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCd0YWJzX2hpZGRlbicpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gQ2hlY2sgYWxsIGNoZWNrYm94ZXNcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyNjaGVja19hbGwnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJ3Rib2R5JykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgJCgnI2NoZWNrX2FsbCcpLmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdH0pO1xyXG5cdFx0dXJsU2VhcmNoLmxpbmVDaGVja2VkKCk7XHJcblx0fSk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBKcXVlcnkgUmVzaXphYmxlIENvbHVtbnNcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdC8vJCgndGFibGUnKS5yZXNpemFibGVDb2x1bW5zKCk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBEcmFndGFibGVcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdC8qXHJcblx0dmFyIGRyYWdnZXIgPSB0YWJsZURyYWdnZXIuZGVmYXVsdCgkKCd0YWJsZScpLmdldCgwKSwge1xyXG4gICAgICAgIG1vZGU6ICdjb2x1bW4nLFxyXG5cdH0pO1xyXG5cdCovXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBUYWJsZSBoZWFkZXJzXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjdGFicycpLnRyaWdnZXIoJ3Nob3cuYnMudGFiJyk7XHJcblx0XHJcblx0JCgndGFibGUnKS5maW5kKCd0aFtpZF1bZGF0YS10aXRsZV0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0dGFibGVIZWFkZXJzLnB1c2goY3JlYXRlVGFibGVIZWFkZXIodGhpcykpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gVnVlc1xyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3Z1ZXMnKS5maW5kKCdidXR0b25bZGF0YS1pZF0nKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdHVybFNlYXJjaC5zZXQoJ3Z1ZScsICQodGhpcykuZGF0YSgnaWQnKSk7XHJcblx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdnVlcycpLmZpbmQoJ2FbZGF0YS11cmxdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0YWpheC5zZXQoJyNtb2RhbCAubW9kYWwtY29udGVudCcsICQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9VcmwoKSwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHVybFNlYXJjaC5vblZ1ZUVkaXRlZC5iaW5kKHVybFNlYXJjaCkpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2dWVfbmV3Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnc2hvdycpO1xyXG5cdFx0YWpheC5zZXQoJyNtb2RhbCAubW9kYWwtY29udGVudCcsICQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9VcmwoKSwgJ0dFVCcsIHVuZGVmaW5lZCwgZmFsc2UsIHVybFNlYXJjaC5vblZ1ZUVkaXRlZC5iaW5kKHVybFNlYXJjaCkpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdGZpbGxEaXNwbGF5KCk7XHJcblx0dXJsU2VhcmNoLnNldEZyb21Vcmwod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=