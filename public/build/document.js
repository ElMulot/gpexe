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

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.some */ "./node_modules/core-js/modules/es.array.some.js");

__webpack_require__(/*! core-js/modules/es.array.sort */ "./node_modules/core-js/modules/es.array.sort.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.map */ "./node_modules/core-js/modules/es.map.js");

__webpack_require__(/*! core-js/modules/es.object.keys */ "./node_modules/core-js/modules/es.object.keys.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.parse-int */ "./node_modules/core-js/modules/es.parse-int.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.search */ "./node_modules/core-js/modules/es.string.search.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function (_e2) { function e(_x) { return _e2.apply(this, arguments); } e.toString = function () { return _e2.toString(); }; return e; }(function (e) { throw e; }), f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function (_e3) { function e(_x2) { return _e3.apply(this, arguments); } e.toString = function () { return _e3.toString(); }; return e; }(function (e) { didErr = true; err = e; }), f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js"); //require('sticky-table-headers');
//const tableDragger = require('table-dragger');
//require('jquery-resizable-columns');


__webpack_require__(/*! ../css/document.scss */ "./assets/css/document.scss");

var URLSearchParams = __webpack_require__(/*! @ungap/url-search-params/cjs */ "./node_modules/@ungap/url-search-params/cjs/index.js");

var gpexe = {
  headers: new Array(),
  series: [],
  table: null,
  chxCheckall: null,
  colResize: {},
  colDrag: {}
};
var type = {
  bool: 11,
  text: 12,
  date: 13,
  link: 14,
  list: 15
}; //---------------
//Header
//---------------

function Header(field) {
  this.id = field.id;
  this.title = field.title;
  this.type = field.type;
  this.permissions = field.permissions;
  this.defaultWidth = field.default_width;
  this.hasSort = field.elements && field.elements.some(function (v) {
    return v.sort === true;
  });
  this.hasFilter = field.elements && field.elements.some(function (v) {
    return v.filter;
  });
  this.elements = [];
}

Header.prototype = {
  setWidth: function setWidth(width) {
    if (this.th) {
      this.th.css('width', width + 'rem');
      this.th.css('min-width', width + 'rem');
      this.th.css('max-width', width + 'rem');
      var index = this.th.index() + 1;
      $(this.th).parents('table').find('td:nth-child(' + index + ')').each(function () {
        $(this).css('max-width', width + 'rem');
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
    global.ajax.set('#table', url);
  },
  getVues: function getVues() {
    var url = $('#vues').data('url');
    global.ajax.set('#vues', url);
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
  }
}; //---------------
// Setup
//---------------

function setup(datas) {
  $('#table').show();
  var thead = $('#table').append(create.thead).children().last();
  var tr = thead.append(create.tr).children().last();
  var th = tr.append(create.th).children().last().attr('id', 'selector').css('width', '2em');
  var div = th.append(create.div).children().last().addClass('btn-group custom-control custom-checkbox btn btn-sm btn-primary rounded-0');
  gpexe.chxCheckall = div.append(create.checkbox).children().last().attr('id', 'check_all').attr('unchecked', 'unchecked').on('click', function () {
    $('tbody').find('input[type="checkbox"]').each(function () {
      $(this).prop('checked', $('#check_all').is(':checked'));
    });
    urlSearch.lineChecked();
  });
  ;
  div.append(create.label).children().last().addClass('mx-1').attr('for', 'check_all');
  gpexe.series = datas.series;

  for (var _i in datas.fields) {
    field = datas.fields[_i];

    if (field.display.table) {
      var header = new Header(field);
      $.each(field.elements, function (j, element) {
        e = {
          id: element.id,
          title: element.title,
          sort: element.sort
        };

        if (element.filter) {
          switch (element.filter.type) {
            case type.bool:
              var c = [{
                text: $.i18n('notApplicable'),
                value: -1
              }, {
                text: $.i18n('yes'),
                value: 1
              }, {
                text: $.i18n('no'),
                value: 0
              }];
              break;

            case type.list:
              var c = [];
              $.each(element.filter.choices, function (key, value) {
                if (_typeof(value) === 'object') {
                  c.push({
                    text: value.name || value.value,
                    value: value.id
                  });
                } else {
                  c.push({
                    text: value,
                    value: key
                  });
                }
              });
              c.sort(function (a, b) {
                if (a.text < b.text) {
                  return -1;
                }

                if (a.text > b.text) {
                  return 1;
                }

                return 0;
              });
              c.unshift({
                text: $.i18n('selectAll'),
                value: -1
              });
          }

          e.filter = {
            type: element.filter.type,
            choices: c
          };
        }

        header.elements.push(e);
      });
      gpexe.headers.push(header);
    }
  }

  var _iterator = _createForOfIteratorHelper(gpexe.headers),
      _step;

  try {
    var _loop2 = function _loop2() {
      var header = _step.value;
      header.th = tr.append(create.th).children().last();
      header.setWidth(header.defaultWidth);

      if (header.hasSort || header.hasFilter) {
        //main button group
        var divDropdownGroup = header.th.append(create.div).children().last().addClass('btn-group w-100').attr('role', 'group').on('hide.bs.dropdown', function (e) {
          if (e.clickEvent && $.contains(e.relatedTarget.parentNode, e.clickEvent.target)) {
            e.preventDefault();
          } else {
            header.divDropdownMenu.empty();
          }
        }); //title

        divDropdownGroup.append(create.menuButton).children().last().addClass('text-truncate w-100').attr('type', 'button').text(header.title).on('click', function () {
          if (header.hasFilter) {
            var _iterator19 = _createForOfIteratorHelper(header.elements),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                element = _step19.value;

                if (urlSearch.get('sortAsc') == element.id) {
                  urlSearch["delete"]('sortAsc');
                  urlSearch.set('sortDesc', element.id);
                  urlSearch["delete"]('vue');
                  urlSearch.fetch();
                  return;
                }

                if (urlSearch.get('sortDesc') == element.id) {
                  urlSearch["delete"]('sortDesc');
                  urlSearch.set('sortAsc', element.id);
                  urlSearch["delete"]('vue');
                  urlSearch.fetch();
                  return;
                }
              }
            } catch (err) {
              _iterator19.e(err);
            } finally {
              _iterator19.f();
            }

            var _iterator20 = _createForOfIteratorHelper(header.elements),
                _step20;

            try {
              for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                element = _step20.value;

                if (element.sort) {
                  urlSearch.set('sortAsc', element.id);
                  urlSearch["delete"]('vue');
                  urlSearch.fetch();
                  return;
                }
              }
            } catch (err) {
              _iterator20.e(err);
            } finally {
              _iterator20.f();
            }
          }
        }); //dropDown button

        header.btnDropdown = divDropdownGroup.append(create.menuButton).children().last().addClass('px-0').css('width', '3em').attr('type', 'button').attr('id', 'b_' + header.id).attr('data-toggle', 'dropdown').attr('data-display', 'static').attr('aria-haspopup', true).attr('aria-expanded', false); //dropDown menu

        header.divDropdownMenu = divDropdownGroup.append(create.div).children().last().addClass('dropdown-menu dropdown-menu-left').attr('aria-labelledby', 'b_' + header.id).append(create.div).children().last().addClass('d-flex flex-row');
        divDropdownGroup.on('show.bs.dropdown', function () {
          createMenu(header);
        });
      } else {
        header.btnDropdown = header.th.append(create.menuButton).children().last().addClass('text-truncate w-100').text(header.title).children().last().append(create.div);
      }
    };

    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  tr.append(create.th).children().last().attr('id', 'detail').css('width', '6em');
  var tbody = $('#table').append(create.tbody).children().last(); //---------------------
  // Col Resize
  //---------------------
  //supprimer width=100% dans le css
  //sur le th (min-width, max-width) et sur les td (max-width)

  var _iterator2 = _createForOfIteratorHelper(gpexe.headers),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var _header3 = _step2.value;
      colResize(_header3);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  $('body').on('mousemove', function (e) {
    if ($.isEmptyObject(gpexe.colResize) === false) {
      var width = Math.max(1, Math.round(pxToRem(gpexe.colResize.currentWidth + (e.pageX - gpexe.colResize.currentPosition))));
      gpexe.colResize.header.setWidth(width);
    }

    if ($.isEmptyObject(gpexe.colDrag) === false) {
      if ($.isEmptyObject(gpexe.colDrag.$ul) && Math.abs(e.pageX - gpexe.colDrag.currentPosition) > 10) {
        var $table = gpexe.colDrag.header.th.parents('table');
        gpexe.colDrag.$ul = $table.parent().prepend(create.ul).children().first().addClass('col-drag-container').css('width', $table.outerWidth() + 1);
        $table.find('th:visible').each(function () {
          if (gpexe.colDrag.header.th.is(this)) {
            gpexe.colDrag.$liPlaceholder = gpexe.colDrag.$ul.append(create.li).children().last().addClass('col-drag-placeholder');
            gpexe.colDrag.$liPlaceholder.append(create.div).children().last().css('width', $(this).width()).css('height', $table.height());
          }

          var $li = gpexe.colDrag.$ul.append(create.li).children().last();

          if ($(this).is('#selector, #detail')) {
            $li.addClass('no-drag');
          }

          if (gpexe.colDrag.header.th.is(this)) {
            $li.addClass('col-drag-helper');
            gpexe.colDrag.$liHelper = $li;
          }

          $li.append(create.table).children().last().addClass($table.attr('class')).append(create.thead).children().last().append($(this).clone());
          var $tbody = $li.children().last().append(create.tbody).children().last();
          var index = $(this).index() + 1;
          $table.find('td:nth-child(' + index + ')').each(function () {
            $tbody.append(create.tr).children().last().addClass($(this).parent().attr('class')).css('height', $(this).parent().outerHeight()).append($(this).clone());
          });
        });
        $table.hide();
      }

      if ($.isEmptyObject(gpexe.colDrag.$liPlaceholder) === false) {
        var left = gpexe.colDrag.currentLeft + e.pageX - gpexe.colDrag.currentPosition;
        gpexe.colDrag.$liHelper.css('left', left);

        if (left > gpexe.colDrag.$liPlaceholder.position().left + gpexe.colDrag.$liPlaceholder.nextAll().not('.col-drag-helper, .no-drag').first().width()) {
          gpexe.colDrag.$liPlaceholder.nextAll().not('.col-drag-helper, .no-drag').first().insertBefore(gpexe.colDrag.$liPlaceholder);
        } else if (left < gpexe.colDrag.$liPlaceholder.position().left - gpexe.colDrag.$liPlaceholder.prevAll().not('.col-drag-helper, .no-drag').first().width()) {
          gpexe.colDrag.$liPlaceholder.prevAll().not('.col-drag-helper, .no-drag').first().insertAfter(gpexe.colDrag.$liPlaceholder);
        }
      }
    }
  });
  $('body').on('mouseup', function (e) {
    if ($.isEmptyObject(gpexe.colResize) === false) {
      var width = gpexe.colResize.header.th.width();
      urlSearch["delete"]('display[' + gpexe.colResize.header.id + ']');
      urlSearch.append('display[' + gpexe.colResize.header.id + ']', pxToRem(width));
      gpexe.colResize = {};
    } //		if ($.isEmptyObject(gpexe.colDrag) === false) {
    //			gpexe.colDrag.th.removeClass('col-drag-handle')
    //		}

  }); //---------------------
  // Col Drag
  //---------------------

  var _iterator3 = _createForOfIteratorHelper(gpexe.headers),
      _step3;

  try {
    for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
      var _header4 = _step3.value;
      colDrag(_header4);
    }
  } catch (err) {
    _iterator3.e(err);
  } finally {
    _iterator3.f();
  }

  function createMenu(header) {
    if (header.hasSort || header.hasFilter) {
      header.divDropdownMenu.empty();

      if (header.elements.length == 1) {
        createMenuItem(header, header.elements[0]);
      } else {
        var _iterator4 = _createForOfIteratorHelper(header.elements),
            _step4;

        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var element = _step4.value;

            if (element.filter || element.sort) {
              createMenuItem(header, element); //header if many selects

              element.divContent.prepend(create.div).children().first().addClass('text-center border-bottom border-dark pb-2 px-1').append(element.title);
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
      }
    }
  }

  function createMenuItem(header, element) {
    element.divContent = header.divDropdownMenu.append(create.div).children().last().addClass('mx-1').css('min-width', '15em');
    var divButtons = element.divContent.append(create.div).children().last().addClass('text-center p-1');

    if (element.sort) {
      divButtons.append(create.smallButton).children().last().append(global.icon.arrowDown).addClass(urlSearch.get('sortDesc') == element.id ? 'px-2 btn-outline-primary bg-dark text-white' : 'px-2 btn-primary').on('click', function () {
        urlSearch["delete"]('sortAsc');

        if (urlSearch.get('sortDesc') == element.id) {
          urlSearch["delete"]('sortDesc');
        } else {
          urlSearch.set('sortDesc', element.id);
        }

        element.filter.divFilter.trigger('click');
      });
    }

    if (element.filter) {
      element.filter.divFilter = divButtons.append(create.smallButton).children().last().text($.i18n('filter')).addClass('px-3 btn-primary');

      switch (element.filter.type) {
        case type.date:
          element.filter.divFilter.on('filter.update', function () {
            urlSearch["delete"]('filter[' + element.id + '][]');

            if (element.filter.chxInf.is(':checked') && (result = /^≥\s(\d{2}-\d{2}-\d{4})/.exec(element.filter.inputInf.val()))) {
              urlSearch.append('filter[' + element.id + '][]', '>' + result[1]);
            }

            if (element.filter.chxSup.is(':checked') && (result = /^≤\s(\d{2}-\d{2}-\d{4})/.exec(element.filter.inputSup.val()))) {
              urlSearch.append('filter[' + element.id + '][]', '<' + result[1]);
            }

            if (element.filter.chxHighlight.is(':checked')) {
              urlSearch.set('highlight', element.id);
            } else if (urlSearch.get('highlight').toString() == element.id) {
              urlSearch["delete"]('highlight');
            }
          }).on('click', function () {
            var _iterator5 = _createForOfIteratorHelper(header.elements),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _element = _step5.value;

                if (_element.filter) {
                  _element.filter.divFilter.trigger('filter.update');
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            header.btnDropdown.dropdown('hide');
            urlSearch["delete"]('vue');
            urlSearch.fetch();
          });
          break;

        case type.text:
          element.filter.divFilter.on('filter.update', function () {
            urlSearch["delete"]('filter[' + element.id + ']');
            var searchValue = element.inputSearch.val().toLowerCase();

            if (searchValue != '') {
              urlSearch.set('filter[' + element.id + ']', searchValue);
            }
          }).on('click', function () {
            var _iterator6 = _createForOfIteratorHelper(header.elements),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _element2 = _step6.value;

                if (_element2.filter) {
                  _element2.filter.divFilter.trigger('filter.update');
                }
              }
            } catch (err) {
              _iterator6.e(err);
            } finally {
              _iterator6.f();
            }

            header.btnDropdown.dropdown('hide');
            urlSearch["delete"]('vue');
            urlSearch.fetch();
          });
          break;

        case type.list:
          element.filter.divFilter.on('filter.update', function () {
            urlSearch["delete"]('filter[' + element.id + '][]');

            if (element.filter.choices[0].chx.is(':checked') === false) {
              var _iterator7 = _createForOfIteratorHelper(element.filter.choices),
                  _step7;

              try {
                for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                  var choice = _step7.value;

                  if (choice.chx.is(':checked')) {
                    urlSearch.append('filter[' + element.id + '][]', choice.value);
                  }
                }
              } catch (err) {
                _iterator7.e(err);
              } finally {
                _iterator7.f();
              }
            }
          }).on('click', function () {
            var _iterator8 = _createForOfIteratorHelper(header.elements),
                _step8;

            try {
              for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                var _element3 = _step8.value;

                if (_element3.filter) {
                  _element3.filter.divFilter.trigger('filter.update');
                }
              }
            } catch (err) {
              _iterator8.e(err);
            } finally {
              _iterator8.f();
            }

            header.btnDropdown.dropdown('hide');
            urlSearch["delete"]('vue');
            urlSearch.fetch();
          });
          break;
      }
    }

    if (element.sort) {
      divButtons.append(create.smallButton).children().last().append(global.icon.arrowUp).addClass(urlSearch.get('sortAsc') == element.id ? 'px-2 btn-outline-primary bg-dark text-white' : 'px-2 btn-primary').on('click', function () {
        urlSearch["delete"]('sortDesc');

        if (urlSearch.get('sortAsc') == element.id) {
          urlSearch["delete"]('sortAsc');
        } else {
          urlSearch.set('sortAsc', element.id);
        }

        element.filter.divFilter.trigger('click');
      });
    }

    if (element.filter) {
      switch (element.filter.type) {
        case type.bool:
          element.filter.divList = element.divContent.append(create.div).children().last().addClass('px-2 overflow-auto ' + (element.filter.type === type.list ? 'pt-3' : 'pt-1')).css('max-height', '20em');

          var _iterator9 = _createForOfIteratorHelper(element.filter.choices),
              _step9;

          try {
            var _loop = function _loop() {
              var choice = _step9.value;
              choice.div = element.filter.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
              choice.chx = choice.div.append(create.checkbox).children().last().attr('id', element.id + '_' + choice.value);
              choice.div.append(create.label).children().last().attr('for', element.id + '_' + choice.value).text(choice.text);

              if (choice.value == -1) {
                choice.chx.attr('checked', !urlSearch.get('filter[' + element.id + ']')).on('click', function () {
                  var _iterator10 = _createForOfIteratorHelper(element.filter.choices),
                      _step10;

                  try {
                    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                      var _choice = _step10.value;

                      _choice.chx.prop('checked', false);
                    }
                  } catch (err) {
                    _iterator10.e(err);
                  } finally {
                    _iterator10.f();
                  }

                  urlSearch["delete"]('filter[' + element.id + ']');
                  header.btnDropdown.dropdown('hide');
                  urlSearch["delete"]('vue');
                  urlSearch.fetch();
                });
              } else {
                choice.chx.attr('checked', parseInt(urlSearch.get('filter[' + element.id + ']')) === choice.value).on('click', function () {
                  var _iterator11 = _createForOfIteratorHelper(element.filter.choices),
                      _step11;

                  try {
                    for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                      var _choice2 = _step11.value;

                      if (_choice2.chx != this) {
                        _choice2.chx.prop('checked', false);
                      }
                    }
                  } catch (err) {
                    _iterator11.e(err);
                  } finally {
                    _iterator11.f();
                  }

                  urlSearch.set('filter[' + element.id + ']', choice.value);
                  header.btnDropdown.dropdown('hide');
                  urlSearch["delete"]('vue');
                  urlSearch.fetch();
                });
              }
            };

            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator9.e(err);
          } finally {
            _iterator9.f();
          }

          break;

        case type.text:
          var divSearch = element.divContent.append(create.div).children().last().addClass('input-group input-group-sm p-2');
          element.inputSearch = divSearch.append(create.input).children().last().val(urlSearch.get('filter[' + element.id + ']')).on('keypress', function (e) {
            if (e.which == 13) {
              element.filter.divFilter.trigger('click');
            }
          });

          var _div = divSearch.append(create.div).children().last().addClass('input-group-append');

          var a = _div.append(create.a).children().last().attr('type', 'button').addClass('btn btn-light border-left-0 border text-primary');

          a.append(create.span).children().last().html('&times;').on('click', function () {
            element.inputSearch.val('');
            element.filter.divFilter.trigger('click');
          });
          break;

        case type.date:
          if ((result = />(\d{2}-\d{2}-\d{4})/.exec(urlSearch.get('filter[' + element.id + '][]').toString())) !== null) {
            var valueInf = result[1];
          } else {
            var valueInf = '';
          }

          if ((result = /<(\d{2}-\d{2}-\d{4})/.exec(urlSearch.get('filter[' + element.id + '][]').toString())) !== null) {
            var valueSup = result[1];
          } else {
            var valueSup = '';
          }

          var highlight = urlSearch.get('highlight').toString() == element.id;
          element.filter.divList = element.divContent.append(create.div).children().last().addClass('px-2 overflow-auto ' + (element.filter.type === type.list ? 'pt-3' : 'pt-1')).css('max-height', '20em');
          element.filter.divInf = element.filter.divList.append(create.div).children().last().addClass('custom-control custom-checkbox mt-2');
          element.filter.chxInf = element.filter.divInf.append(create.checkbox).children().last().attr('id', element.id + '_inf').attr('checked', valueInf != '').on('change', function () {
            var checked = $(this).is(':checked');

            if (checked) {
              if (/^≥\s\d{2}-\d{2}-\d{4}/.test(element.filter.inputInf.val()) === false) {
                element.filter.inputInf.val('');
              }
            } else {
              element.filter.inputInf.val($.i18n('fromDate'));
            }

            element.filter.inputInf.attr('readonly', checked === false);
          });
          element.filter.labelInf = element.filter.divInf.append(create.label).children().last().attr('for', element.id + '_inf');
          element.filter.inputInf = element.filter.labelInf.append(create.input).children().last().addClass('form-control datepicker').val(valueInf ? '≥ ' + valueInf : $.i18n('fromDate')).attr('readonly', valueInf == '').datepicker({
            'format': '≥ dd-mm-yyyy'
          }).on('click', function () {
            element.filter.chxInf.prop('checked', true);
            element.filter.chxInf.trigger('change');
          }).on('show.bs.dropdown hide.bs.dropdown', function (e) {
            e.stopPropagation();
          });
          element.filter.divSup = element.filter.divList.append(create.div).children().last().addClass('custom-control custom-checkbox mt-2');
          element.filter.chxSup = element.filter.divSup.append(create.checkbox).children().last().attr('id', element.id + '_sup').attr('checked', valueSup != '').on('change', function () {
            var checked = $(this).is(':checked');

            if (checked) {
              if (/^≤\s\d{2}-\d{2}-\d{4}/.test(element.filter.inputSup.val()) === false) {
                element.filter.inputSup.val('');
              }
            } else {
              element.filter.inputSup.val($.i18n('toDate'));
            }

            element.filter.inputSup.attr('readonly', checked === false);
          });
          element.filter.labelSup = element.filter.divSup.append(create.label).children().last().attr('for', element.id + '_sup');
          element.filter.inputSup = element.filter.labelSup.append(create.input).children().last().addClass('form-control datepicker').val(valueSup ? '≤ ' + valueSup : $.i18n('toDate')).attr('readonly', valueSup == '').datepicker({
            'format': "≤ dd-mm-yyyy"
          }).on('click', function () {
            element.filter.chxSup.prop('checked', true);
            element.filter.chxSup.trigger('change');
          }).on('show.bs.dropdown hide.bs.dropdown', function (e) {
            e.stopPropagation();
          });
          element.filter.divHighlight = element.filter.divList.append(create.div).children().last().addClass('custom-control custom-checkbox mt-2');
          element.filter.chxHighlight = element.filter.divHighlight.append(create.checkbox).children().last().attr('id', element.id + '_highlight').attr('name', 'highlight').val(element.id).attr('checked', highlight);
          element.filter.divHighlight.append(create.label).children().last().attr('for', element.id + '_highlight').text($.i18n('highlight'));
          break;

        case type.list:
          divSearch = element.divContent.append(create.div).children().last().addClass('input-group input-group-sm border-bottom border-dark p-2');
          element.inputSearch = divSearch.append(create.input).children().last().on('keypress', function (e) {
            if (e.which == 13) {
              element.filter.divFilter.trigger('click');
            }
          }).on('input', function () {
            var searchValue = $(this).val().toLowerCase();

            if (searchValue == '') {
              var _iterator12 = _createForOfIteratorHelper(element.filter.choices),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var choice = _step12.value;
                  choice.div.show();
                  choice.chx.prop('checked', false);
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
              }
            } else {
              element.filter.choices[0].div.hide();

              var _iterator13 = _createForOfIteratorHelper(element.filter.choices),
                  _step13;

              try {
                for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                  var _choice3 = _step13.value;

                  if (_choice3.text.toLowerCase().indexOf(searchValue) == -1) {
                    _choice3.div.hide();

                    _choice3.chx.prop('checked', false);
                  } else {
                    _choice3.div.show();

                    _choice3.chx.prop('checked', true);
                  }
                }
              } catch (err) {
                _iterator13.e(err);
              } finally {
                _iterator13.f();
              }
            }
          });
          _div = divSearch.append(create.div).children().last().addClass('input-group-append');
          a = _div.append(create.a).children().last().attr('type', 'button').addClass('btn btn-light border-left-0 border text-primary');
          a.append(create.span).children().last().html('&times;').on('click', function () {
            element.inputSearch.val('');
            element.inputSearch.trigger('input');
          });
          element.filter.divList = element.divContent.append(create.div).children().last().addClass('px-2 overflow-auto ' + (element.filter.type === type.list ? 'pt-3' : 'pt-1')).css('max-height', '20em');

          var _iterator14 = _createForOfIteratorHelper(element.filter.choices),
              _step14;

          try {
            for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
              var choice = _step14.value;
              choice.div = element.filter.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
              choice.chx = choice.div.append(create.checkbox).children().last().attr('id', element.id + '_' + choice.value);
              choice.div.append(create.label).children().last().attr('for', element.id + '_' + choice.value).text(choice.text);

              if (choice.value == -1) {
                choice.chx.on('change', function () {
                  var checked = $(this).is(':checked');

                  var _iterator15 = _createForOfIteratorHelper(element.filter.choices),
                      _step15;

                  try {
                    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                      var _choice4 = _step15.value;

                      _choice4.chx.prop('checked', checked);
                    }
                  } catch (err) {
                    _iterator15.e(err);
                  } finally {
                    _iterator15.f();
                  }
                });
              } else {
                choice.chx.attr('checked', urlSearch.get('filter[' + element.id + '][]').has(choice.value)).on('click', function () {
                  var checked = false;
                  var unchecked = false;

                  var _iterator16 = _createForOfIteratorHelper(element.filter.choices),
                      _step16;

                  try {
                    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                      var _choice5 = _step16.value;

                      if ($(_choice5.chx).is(':checked') && _choice5.value != 1) {
                        checked = true;
                      } else {
                        unchecked = true;
                      }
                    }
                  } catch (err) {
                    _iterator16.e(err);
                  } finally {
                    _iterator16.f();
                  }

                  if (checked && unchecked) {
                    element.filter.choices[0].chx.prop('indeterminate', true);
                  } else {
                    element.filter.choices[0].chx.prop('indeterminate', false);
                    element.filter.choices[0].chx.prop('checked', checked);
                  }
                });
              }
            }
          } catch (err) {
            _iterator14.e(err);
          } finally {
            _iterator14.f();
          }

          break;
      }
    }
  }

  function colResize(header) {
    if (header.th) {
      header.th.append(create.div).children().last().css('right', '0').addClass('col-resize-handle').on('mousedown', function (e) {
        var _iterator17 = _createForOfIteratorHelper(gpexe.headers),
            _step17;

        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var _header = _step17.value;

            if ($(e.target).parent().is(_header.th)) {
              gpexe.colResize = {
                header: _header,
                currentPosition: e.pageX,
                currentWidth: _header.th.width()
              };
            }
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
      });
      header.th.next().append(create.div).children().last().css('left', '0').addClass('col-resize-handle').on('mousedown', function (e) {
        var _iterator18 = _createForOfIteratorHelper(gpexe.headers),
            _step18;

        try {
          for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
            var _header2 = _step18.value;

            if ($(e.target).parent().prevAll(':visible').first().is(_header2.th)) {
              gpexe.colResize = {
                header: _header2,
                currentPosition: e.pageX,
                currentWidth: _header2.th.width()
              };
            }
          }
        } catch (err) {
          _iterator18.e(err);
        } finally {
          _iterator18.f();
        }
      });
    }
  }

  function colDrag(header) {
    if (header.th) {
      header.th.find('button[type="button"]').first().on('mousedown', function (e) {
        gpexe.colDrag = {
          header: header,
          currentPosition: e.pageX,
          currentLeft: header.th.position().left
        };
      });
    }
  }
} //---------------
// fillSeriesPannel
//---------------


function fillSeriesPannel() {
  var _iterator21 = _createForOfIteratorHelper(gpexe.series),
      _step21;

  try {
    for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
      var serie = _step21.value;
      serie.btn = $('#series').append(create.a).children().last().attr('role', 'button').addClass('btn btn-primary m-1').attr('href', serie.url).text(serie.name);
    }
  } catch (err) {
    _iterator21.e(err);
  } finally {
    _iterator21.f();
  }
} //---------------
//fillDisplayPannel
//---------------


function fillDisplayPannel() {
  var divCol = $('#display_panel').append(create.div).children().last().addClass('row py-2').append(create.div).children().last().addClass('col');

  var _iterator22 = _createForOfIteratorHelper(gpexe.headers),
      _step22;

  try {
    var _loop3 = function _loop3() {
      var header = _step22.value;
      header.aDisplay = divCol.append(create.a).children().last().addClass('btn btn-sm btn-outline-primary col-2 m-1 text-left text-nowrap').on('click', function () {
        header.chxDisplay.prop('checked', !header.chxDisplay.is(':checked'));
        var display = urlSearch.get('display[' + header.id + ']');
        urlSearch["delete"]('display[' + header.id + ']');

        if (header.chxDisplay.is(':checked')) {
          if (display == false) {
            urlSearch.append('display[' + header.id + ']', header.defaultWidth);
          }
        }

        urlSearch["delete"]('vue');
        urlSearch.fetch();
        return false;
      });
      var div = header.aDisplay.append(create.div).children().last().addClass('custom-control custom-checkbox');
      header.chxDisplay = div.append(create.checkbox).children().last().attr('id', 'h_' + header.id).on('change click', function () {
        return false;
      });
      div.append(create.label).children().last().attr('for', 'h_' + header.id).text(header.title);
    };

    for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
      _loop3();
    }
  } catch (err) {
    _iterator22.e(err);
  } finally {
    _iterator22.f();
  }
}

var urlSearch = new UrlSearch();
$(document).ready(function () {
  //---------------------
  // Menu display
  //---------------------
  $('#document_new, #document_edit, #document_move, #document_delete, #version_new, #version_edit, #version_delete').on('click', function () {
    global.ajax.set('#modal', $(this).data('url') + urlSearch.toUrl('id[]'), {
      from: this
    });
  });
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
  // Tabs minimize
  //---------------------

  $('#tabs').trigger('show.bs.tab'); //---------------------
  // Table_container
  //---------------------

  $('#table_container, #vues, #table').on('ajax.beforeSend', function (e, result, textStatus, jqXHR) {
    if (e.target !== this) {
      return;
    }

    e.stopPropagation();
    $('#table').hide();
    $('#spinner').show().empty().append(global.icon.loading);
  });
  $('#table_container').on('ajax.success', function (e, result, textStatus, jqXHR) {
    if (e.target !== this) {
      return;
    }

    e.stopPropagation();
    $('#spinner').empty(); //setup js datas

    setup(result);
  });
  $('#table_container').on('ajax.completed', function (e, result, textStatus, jqXHR) {
    if (e.target !== this) {
      return;
    }

    e.stopPropagation();
    fillSeriesPannel();
    fillDisplayPannel(); //setup url

    urlSearch.setFromUrl(window.location.search);
    urlSearch.getVues();
  }); //---------------------
  // Vues
  //---------------------

  $('#vues').on('ajax.success', function (e, result, textStatus, jqXHR) {
    if (e.target !== this) {
      return;
    }

    e.stopPropagation();
    $('#vues').empty();

    var _iterator23 = _createForOfIteratorHelper(result),
        _step23;

    try {
      var _loop4 = function _loop4() {
        var vue = _step23.value;
        div = $('#vues').append(create.div).children().last().addClass('btn-group m-1').attr('role', 'group');
        btn = div.append(create.button).children().last().addClass('btn-primary').attr('data-id', vue.id).text(vue.name).on('click', function () {
          urlSearch.set('vue', vue.id);
          urlSearch.fetch();
          $(this).blur();
        });

        if (vue['edit_url'] && vue['delete_url']) {
          div2 = div.append(create.div).children().last().addClass('btn-group').attr('role', 'group');
          btn2 = div2.append(create.button).children().last().addClass('btn-primary dropdown-toggle').attr('data-toggle', 'dropdown').attr('aria-haspopup', true).attr('aria-expanded', false);
          div3 = div2.append(create.div).children().last().addClass('dropdown-menu');
          div3.append(create.a).children().last().addClass('dropdown-item text-success').on('click', function () {
            global.ajax.set('#modal', vue['edit_url'], {
              modal: true
            });
          }).text($.i18n('edit'));
          div3.append(create.a).children().last().addClass('dropdown-item text-danger').on('click', function () {
            global.ajax.set('#modal', vue['delete_url'], {
              modal: true,
              from: this
            });
          }).text($.i18n('delete'));
        }
      };

      for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
        _loop4();
      } //---------------------
      // Dragtable
      //---------------------
      //		var dragger = tableDragger.default($('table').get(0), {
      //	        mode: 'column',
      //		});

    } catch (err) {
      _iterator23.e(err);
    } finally {
      _iterator23.f();
    }
  });
  $('#vues').on('ajax.completed', function (e, result, textStatus, jqXHR) {
    if (e.target !== this) {
      return;
    }

    e.stopPropagation();
    urlSearch.fetch();
  });
  $('#vue_new').on('click', function () {
    global.ajax.set('#modal', $(this).data('url') + urlSearch.toUrl(), {
      modal: true
    });
  }); //---------------------
  // Table
  //---------------------

  $('#table').on('ajax.success', function (e, result, textStatus, jqXHR) {
    if (e.target !== this) {
      return;
    }

    e.stopPropagation();
    $('#spinner').empty();
    $('#table > tbody').empty();
    $('#table').show();
    if (result == false) return; //		console.log(result.query);
    //		console.log(result.datas);

    var searchUrl = $.param(result.query);
    urlSearch._paramsArray = new URLSearchParams(searchUrl);
    urlSearch["delete"]('id[]'); //vue

    $('#vues').find('button[data-id]').each(function () {
      if ($(this).data('id') == urlSearch.get('vue')) {
        $(this).attr('class', 'btn btn-outline-primary');
        $(this).parent().find('div > button').attr('class', 'btn btn-outline-primary dropdown-toggle');
      } else {
        $(this).attr('class', 'btn btn-primary');
        $(this).parent().find('div > button').attr('class', 'btn btn-primary dropdown-toggle');
      }
    }); //series

    var _iterator24 = _createForOfIteratorHelper(gpexe.series),
        _step24;

    try {
      for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
        var serie = _step24.value;

        if (result.serie && serie.id == result.serie) {
          serie.btn.removeClass('btn-primary');
          serie.btn.addClass('btn-outline-primary');
        } else {
          serie.btn.removeClass('btn-outline-primary');
          serie.btn.addClass('btn-primary');
        }
      }
    } catch (err) {
      _iterator24.e(err);
    } finally {
      _iterator24.f();
    }

    var _iterator25 = _createForOfIteratorHelper(gpexe.headers),
        _step25;

    try {
      for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
        var header = _step25.value;

        //display
        if (display = result.query.display[header.id]) {
          header.aDisplay.addClass('btn-outline-primary');
          header.aDisplay.removeClass('btn-primary');
          header.chxDisplay.prop('checked', true);
          header.setWidth(display);
          header.th.show(); //headers

          header.btnDropdown.empty();
          header.isFiltered = false;
          header.isSortedAsc = false;
          header.isSortedDesc = false;

          if (header.hasSort) {
            var _iterator29 = _createForOfIteratorHelper(header.elements),
                _step29;

            try {
              for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                element = _step29.value;

                if (urlSearch.get('sortAsc') == element.id) {
                  header.isSortedAsc = true;
                }

                if (urlSearch.get('sortDesc') == element.id) {
                  header.isSortedDesc = true;
                }
              }
            } catch (err) {
              _iterator29.e(err);
            } finally {
              _iterator29.f();
            }
          }

          if (header.hasFilter) {
            var _iterator30 = _createForOfIteratorHelper(header.elements),
                _step30;

            try {
              for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                element = _step30.value;

                if (element.filter) {
                  switch (element.filter.type) {
                    case type.bool:
                    case type.text:
                      if (urlSearch.has('filter[' + element.id + ']')) {
                        header.isFiltered = true;
                      }

                      break;

                    case type.date:
                    case type.list:
                      if (urlSearch.has('filter[' + element.id + '][]')) {
                        header.isFiltered = true;
                      }

                      break;
                  }
                }
              }
            } catch (err) {
              _iterator30.e(err);
            } finally {
              _iterator30.f();
            }
          }

          header.btnDropdown.append(header.isFiltered ? global.icon.funnelFill : global.icon.funnel);

          if (header.isSortedAsc) {
            header.btnDropdown.append(global.icon.arrowUp);
          }

          if (header.isSortedDesc) {
            header.btnDropdown.append(global.icon.arrowDown);
          }
        } else {
          header.aDisplay.addClass('btn-primary');
          header.aDisplay.removeClass('btn-outline-primary');
          header.chxDisplay.prop('checked', false);
          header.th.hide();
        }
      }
    } catch (err) {
      _iterator25.e(err);
    } finally {
      _iterator25.f();
    }

    var _iterator26 = _createForOfIteratorHelper(result.datas),
        _step26;

    try {
      var _loop6 = function _loop6() {
        var data = _step26.value;
        var tr = $('#table > tbody').append(create.tr).children().last();
        var div = tr.append(create.td).children().last().append(create.div).children().last().addClass('custom-control custom-checkbox');
        div.append(create.checkbox).children().last().attr('id', 'c_' + data.version_id).val(data.version_id).on('click', urlSearch.lineChecked.bind(urlSearch));
        div.append(create.label).children().last().attr('for', 'c_' + data.version_id);

        var _iterator31 = _createForOfIteratorHelper(gpexe.headers),
            _step31;

        try {
          var _loop7 = function _loop7() {
            var header = _step31.value;
            value = data[header.id];

            if (value !== undefined) {
              if (header.id == 'status_type') {
                value = header.elements[0].filter.choices[value].text;
              }

              switch (header.type) {
                case type.bool:
                  dataClass = 'text-center';
                  if (value == 0 || value == null) value = $.i18n('no');
                  if (value == 1) value = $.i18n('yes');
                  break;

                case type.date:
                  dataClass = 'text-center';

                  if (value !== null) {
                    value = value.toDate();

                    if (value !== null) {
                      //highlight
                      if (urlSearch.get('highlight').toString() == header.id || urlSearch.get('highlight').toString() == 'version_date' && header.id == 'version_scheduled_date') {
                        if (value < new Date()) {
                          tr.addClass('highlight-late');
                        } else if (value.addDays(-15) < new Date()) {
                          tr.addClass('highlight-15');
                        } else if (value.addDays(-30) < new Date()) {
                          tr.addClass('highlight-30');
                        } else {
                          tr.addClass('highlight-ok');
                        }
                      }

                      value = value.format();
                    }
                  }

                  break;

                case type.link:
                  dataClass = 'text-center';
                  break;

                default:
                  switch (typeof value === "undefined" ? "undefined" : _typeof(value)) {
                    case 'number':
                      dataClass = 'text-right';

                    default:
                      dataClass = 'text-left';
                  }

              }

              if (value === null) value = '';
              var td = tr.append(create.td).children().last().addClass(dataClass).text(value);

              if (header.permissions.write) {
                td.on('dblclick', function () {
                  global.ajax.set(this, '/gpexe/project/serie/document/version/' + data['version_id'] + '/quick_edit/' + header.id);
                });
                td.on('ajax.completed', function (e, result, textStatus, jqXHR) {
                  var $form = $(this).find('form').children().first();

                  if ($form.exist()) {
                    $form.on('keypress', function (e) {
                      if (e.which == 13) {
                        $(this).parent().submit();
                      }
                    });
                    $('body').on('click', function (e) {
                      if ($form.is(e.target) === false && $form.has(e.target).exist() === false) {
                        $form.trigger('submit');
                      }
                    });
                  } else {
                    switch (header.type) {
                      case type.bool:
                        if (result == 0 || result == null) result = $.i18n('no');
                        if (result == 1) result = $.i18n('yes');
                        break;

                      case type.date:
                        result = result.toDate();
                        $(this).parent().removeAttr('class');

                        if (result !== null) {
                          //highlight
                          if (urlSearch.get('highlight').toString() == header.id || urlSearch.get('highlight').toString() == 'version_scheduled_date' && header.id == 'version_date') {
                            if (result < new Date()) {
                              $(this).parent().addClass('highlight-late');
                            } else if (result.addDays(-15) < new Date()) {
                              $(this).parent().addClass('highlight-15');
                            } else if (result.addDays(-30) < new Date()) {
                              $(this).parent().addClass('highlight-30');
                            } else {
                              $(this).parent().addClass('highlight-ok');
                            }
                          }

                          result = result.format();
                        }

                        break;
                    }

                    $('body').off('click');
                  }
                });
              }
            } else {
              header.th.hide();
              tr.append(create.td).children().last().hide();
            }
          };

          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            _loop7();
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }

        tr.append(create.td).children().last().append(create.smallButton).children().last().addClass('btn-success w-100').attr('data-url', data.detailUrl).attr('data-toggle', 'modal ajax').attr('data-target', '#modal_detail').text($.i18n('details'));
      };

      for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
        _loop6();
      } //pagination

    } catch (err) {
      _iterator26.e(err);
    } finally {
      _iterator26.f();
    }

    $('#pagination').empty();
    $('#table_container').addClass('mb-4');
    var pageMax = result.pageMax;
    var page = parseInt(urlSearch.get('page')) || 1;
    page = Math.max(Math.min(page, pageMax), 1);
    div = $('#pagination').append(create.div).children().last().addClass('row m-0');
    div.append(create.div).children().last().addClass('col');
    ul = div.append(create.ul).children().last().addClass('pagination col justify-content-center');

    if (result.pageMax > 1) {
      ul.append(create.li).children().last().addClass('page-item' + (page == 1 ? ' disabled' : '')).on('click', function () {
        if (page > 1) {
          urlSearch.set('page', page - 1);
          urlSearch["delete"]('vue');
          urlSearch.fetch();
        }
      }).append(create.a).children().last().addClass('page-link').attr('data-value', Math.max(1, page - 1)).append(create.span).children().last().attr('aria-hidden', true).html('&laquo;');
      var pageStart = Math.min(Math.max(1, page - 2), Math.max(1, result.pageMax - 4));
      var pageEnd = Math.min(pageStart + 5, pageMax);

      var _loop5 = function _loop5(_i2) {
        ul.append(create.li).children().last().addClass('page-item' + (page == _i2 ? ' active' : '')).on('click', function () {
          urlSearch.set('page', _i2);
          urlSearch["delete"]('vue');
          urlSearch.fetch();
        }).append(create.a).children().last().addClass('page-link').attr('data-value', _i2).text(_i2);
      };

      for (var _i2 = pageStart; _i2 <= pageEnd; _i2++) {
        _loop5(_i2);
      }

      ul.append(create.li).children().last().addClass('page-item' + (page == pageMax ? ' disabled' : '')).on('click', function () {
        if (page < pageMax) {
          urlSearch.set('page', page + 1);
          urlSearch["delete"]('vue');
          urlSearch.fetch();
        }
      }).append(create.a).children().last().addClass('page-link').attr('data-value', Math.min(pageMax, page + 1)).append(create.span).children().last().attr('aria-hidden', true).html('&raquo;');
    }

    select = div.append(create.div).children().last().addClass('col d-flex justify-content-end mt-1 mr-5').append(create.select).children().last().addClass('form-control form-control-sm bg-dark border-secondary text-white').css('width', '150').on('change', function () {
      urlSearch.set('results_per_page', $(this).val());
      urlSearch["delete"]('vue');
      urlSearch.fetch();
    });
    var resultsPerPage = new Map([['10', 10], ['50', 50], ['100', 100], [$.i18n('all'), '0']]);

    var _iterator27 = _createForOfIteratorHelper(resultsPerPage),
        _step27;

    try {
      for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
        var _step27$value = _slicedToArray(_step27.value, 2),
            text = _step27$value[0],
            _value = _step27$value[1];

        select.append(create.option).children().last().attr('value', _value).attr('selected', urlSearch.get('results_per_page') == _value).text(text);
      } //flashes

    } catch (err) {
      _iterator27.e(err);
    } finally {
      _iterator27.f();
    }

    $('#toast').empty();

    for (var _i3 = 0, _Object$keys = Object.keys(result.flash); _i3 < _Object$keys.length; _i3++) {
      var label = _Object$keys[_i3];
      var divToast = $('#toast').append(create.div).children().last().addClass('toast').attr('role', 'alert').attr('data-delay', 5000).attr('aria-live', 'assertive').attr('aria-atomic', true);
      var divContainer = divToast.append(create.div).children().last().addClass('alert alert-' + label + ' d-flex px-3 m-0');
      divContainer.append(create.div).children().last().addClass('align-self-center').append(global.icon[label]);
      var ulBody = divContainer.append(create.ul).children().last().addClass('justify-content-center flex-fill');
      divContainer.append(create.div).children().last().addClass('justify-content-end').append(global.icon.close);

      if (result.flash[label].length > 1) {
        var _iterator28 = _createForOfIteratorHelper(result.flash[label]),
            _step28;

        try {
          for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
            var message = _step28.value;
            ulBody.append(create.li).children().last().text(message);
          }
        } catch (err) {
          _iterator28.e(err);
        } finally {
          _iterator28.f();
        }
      } else {
        ulBody.text(result.flash[label][0]);
      }

      divToast.toast('show');
    }

    urlSearch.lineChecked();
    global.ajax.fetch('#table > tbody'); //		$('table').stickyTableHeaders()
  });
  $('#table').on('ajax.completed', function (e, result, textStatus, jqXHR) {
    if (e.target !== this) {
      return;
    }

    e.stopPropagation();
  }); //---------------------
  // Quick edit
  //---------------------
  //---------------------
  // Modal
  //---------------------

  $('#modal_detail').on('ajax.completed', function (e, result, textStatus, jqXHR) {
    $(e.target).find('#version_edit_detail, #version_delete_detail').on('click', function () {
      global.ajax.set('#modal', $(this).data('url') + '?id[]=' + $('#version_tabs>a.active').data('id') + '&modal=1', {
        from: this
      });
    });
  });
  $('#modal').on('ajax.success', function (e, result, textStatus, jqXHR) {
    if (result === '') {
      $('#modal_container').modal('hide');
      $('#modal_detail_container').modal('hide');
      urlSearch.fetch();
      e.stopPropagation();
    } else if ($('<div>' + result + '</div>').find('div.modal-body').exist()) {
      return true;
    } else if ($('<div>' + result + '</div>').find('pre.sf-dump').exist()) {
      //for debug only
      return true;
    }

    $('#modal_container').modal('hide');
  });
  $('#modal_detail_container').on('hidden.bs.modal', function (e) {
    urlSearch.fetch();
  }); //---------------------
  // Setup
  //---------------------

  var url = $('#table_container').data('url');
  global.ajax.set('#table_container', url);
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

},[["./assets/js/document.js","runtime","vendors~app~dashboard~document~program","vendors~app~dashboard~document","vendors~app~document","vendors~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwiZ3BleGUiLCJoZWFkZXJzIiwiQXJyYXkiLCJzZXJpZXMiLCJ0YWJsZSIsImNoeENoZWNrYWxsIiwiY29sUmVzaXplIiwiY29sRHJhZyIsInR5cGUiLCJib29sIiwidGV4dCIsImRhdGUiLCJsaW5rIiwibGlzdCIsIkhlYWRlciIsImZpZWxkIiwiaWQiLCJ0aXRsZSIsInBlcm1pc3Npb25zIiwiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdF93aWR0aCIsImhhc1NvcnQiLCJlbGVtZW50cyIsInNvbWUiLCJ2Iiwic29ydCIsImhhc0ZpbHRlciIsImZpbHRlciIsInByb3RvdHlwZSIsInNldFdpZHRoIiwid2lkdGgiLCJ0aCIsImNzcyIsImluZGV4IiwicGFyZW50cyIsImZpbmQiLCJlYWNoIiwiVXJsU2VhcmNoIiwiX3BhcmFtc0FycmF5IiwiaGFzIiwia2V5IiwiZ2V0IiwiZXhlYyIsImdldEFsbCIsInNldCIsInZhbHVlIiwiYXBwZW5kIiwic2V0RnJvbVVybCIsInBhcmFtc0FycmF5IiwidG9VcmwiLCJ1cmwiLCJ0b1N0cmluZyIsInZhbHVlcyIsImkiLCJqb2luIiwiZmV0Y2giLCJkYXRhIiwiZ2xvYmFsIiwiYWpheCIsImdldFZ1ZXMiLCJsaW5lQ2hlY2tlZCIsImNoZWNrZWQiLCJ1bmNoZWNrZWQiLCJ0aGF0IiwiaXMiLCJwcm9wIiwidmFsIiwic2hvdyIsImhpZGUiLCJzZXR1cCIsImRhdGFzIiwidGhlYWQiLCJjcmVhdGUiLCJjaGlsZHJlbiIsImxhc3QiLCJ0ciIsImF0dHIiLCJkaXYiLCJhZGRDbGFzcyIsImNoZWNrYm94Iiwib24iLCJ1cmxTZWFyY2giLCJsYWJlbCIsImZpZWxkcyIsImRpc3BsYXkiLCJoZWFkZXIiLCJqIiwiZWxlbWVudCIsImUiLCJjIiwiaTE4biIsImNob2ljZXMiLCJwdXNoIiwibmFtZSIsImEiLCJiIiwidW5zaGlmdCIsImRpdkRyb3Bkb3duR3JvdXAiLCJjbGlja0V2ZW50IiwiY29udGFpbnMiLCJyZWxhdGVkVGFyZ2V0IiwicGFyZW50Tm9kZSIsInRhcmdldCIsInByZXZlbnREZWZhdWx0IiwiZGl2RHJvcGRvd25NZW51IiwiZW1wdHkiLCJtZW51QnV0dG9uIiwiYnRuRHJvcGRvd24iLCJjcmVhdGVNZW51IiwidGJvZHkiLCJpc0VtcHR5T2JqZWN0IiwiTWF0aCIsIm1heCIsInJvdW5kIiwicHhUb1JlbSIsImN1cnJlbnRXaWR0aCIsInBhZ2VYIiwiY3VycmVudFBvc2l0aW9uIiwiJHVsIiwiYWJzIiwiJHRhYmxlIiwicGFyZW50IiwicHJlcGVuZCIsInVsIiwiZmlyc3QiLCJvdXRlcldpZHRoIiwiJGxpUGxhY2Vob2xkZXIiLCJsaSIsImhlaWdodCIsIiRsaSIsIiRsaUhlbHBlciIsImNsb25lIiwiJHRib2R5Iiwib3V0ZXJIZWlnaHQiLCJsZWZ0IiwiY3VycmVudExlZnQiLCJwb3NpdGlvbiIsIm5leHRBbGwiLCJub3QiLCJpbnNlcnRCZWZvcmUiLCJwcmV2QWxsIiwiaW5zZXJ0QWZ0ZXIiLCJsZW5ndGgiLCJjcmVhdGVNZW51SXRlbSIsImRpdkNvbnRlbnQiLCJkaXZCdXR0b25zIiwic21hbGxCdXR0b24iLCJpY29uIiwiYXJyb3dEb3duIiwiZGl2RmlsdGVyIiwidHJpZ2dlciIsImNoeEluZiIsInJlc3VsdCIsImlucHV0SW5mIiwiY2h4U3VwIiwiaW5wdXRTdXAiLCJjaHhIaWdobGlnaHQiLCJkcm9wZG93biIsInNlYXJjaFZhbHVlIiwiaW5wdXRTZWFyY2giLCJ0b0xvd2VyQ2FzZSIsImNoeCIsImNob2ljZSIsImFycm93VXAiLCJkaXZMaXN0IiwicGFyc2VJbnQiLCJkaXZTZWFyY2giLCJpbnB1dCIsIndoaWNoIiwic3BhbiIsImh0bWwiLCJ2YWx1ZUluZiIsInZhbHVlU3VwIiwiaGlnaGxpZ2h0IiwiZGl2SW5mIiwidGVzdCIsImxhYmVsSW5mIiwiZGF0ZXBpY2tlciIsInN0b3BQcm9wYWdhdGlvbiIsImRpdlN1cCIsImxhYmVsU3VwIiwiZGl2SGlnaGxpZ2h0IiwiaW5kZXhPZiIsIm5leHQiLCJmaWxsU2VyaWVzUGFubmVsIiwic2VyaWUiLCJidG4iLCJmaWxsRGlzcGxheVBhbm5lbCIsImRpdkNvbCIsImFEaXNwbGF5IiwiY2h4RGlzcGxheSIsImRvY3VtZW50IiwicmVhZHkiLCJmcm9tIiwiY29sbGFwc2UiLCJyZW1vdmVDbGFzcyIsImhhc0NsYXNzIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwiYmx1ciIsInRleHRTdGF0dXMiLCJqcVhIUiIsImxvYWRpbmciLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInNlYXJjaCIsInZ1ZSIsImJ1dHRvbiIsImRpdjIiLCJidG4yIiwiZGl2MyIsIm1vZGFsIiwic2VhcmNoVXJsIiwicGFyYW0iLCJxdWVyeSIsImlzRmlsdGVyZWQiLCJpc1NvcnRlZEFzYyIsImlzU29ydGVkRGVzYyIsImZ1bm5lbEZpbGwiLCJmdW5uZWwiLCJ0ZCIsInZlcnNpb25faWQiLCJiaW5kIiwidW5kZWZpbmVkIiwiZGF0YUNsYXNzIiwidG9EYXRlIiwiRGF0ZSIsImFkZERheXMiLCJmb3JtYXQiLCJ3cml0ZSIsIiRmb3JtIiwiZXhpc3QiLCJzdWJtaXQiLCJyZW1vdmVBdHRyIiwib2ZmIiwiZGV0YWlsVXJsIiwicGFnZU1heCIsInBhZ2UiLCJtaW4iLCJwYWdlU3RhcnQiLCJwYWdlRW5kIiwic2VsZWN0IiwicmVzdWx0c1BlclBhZ2UiLCJNYXAiLCJvcHRpb24iLCJPYmplY3QiLCJrZXlzIiwiZmxhc2giLCJkaXZUb2FzdCIsImRpdkNvbnRhaW5lciIsInVsQm9keSIsImNsb3NlIiwibWVzc2FnZSIsInRvYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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YUFBUyxDQUFDMUIsS0FBVjtBQUNBLEdBRkQsRUF4cEI0QixDQTZwQjVCO0FBQ0E7QUFDQTs7QUFFQSxNQUFJTCxHQUFHLEdBQUd0RCxDQUFDLENBQUMsa0JBQUQsQ0FBRCxDQUFzQjRELElBQXRCLENBQTJCLEtBQTNCLENBQVY7QUFDQUMsUUFBTSxDQUFDQyxJQUFQLENBQVlkLEdBQVosQ0FBZ0Isa0JBQWhCLEVBQW9DTSxHQUFwQztBQUVBLENBcHFCRCxFIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5jb25zdCBwb3BwZXIgPSByZXF1aXJlKCdwb3BwZXIuanMnKTtcclxuLy9yZXF1aXJlKCdzdGlja3ktdGFibGUtaGVhZGVycycpO1xyXG4vL2NvbnN0IHRhYmxlRHJhZ2dlciA9IHJlcXVpcmUoJ3RhYmxlLWRyYWdnZXInKTtcclxuLy9yZXF1aXJlKCdqcXVlcnktcmVzaXphYmxlLWNvbHVtbnMnKTtcclxucmVxdWlyZSgnLi4vY3NzL2RvY3VtZW50LnNjc3MnKTtcclxuY29uc3QgVVJMU2VhcmNoUGFyYW1zID0gcmVxdWlyZSgnQHVuZ2FwL3VybC1zZWFyY2gtcGFyYW1zL2NqcycpO1xyXG5cclxudmFyIGdwZXhlID0ge1xyXG5cdGhlYWRlcnM6IG5ldyBBcnJheSgpLFxyXG5cdHNlcmllczogW10sXHJcblx0dGFibGU6IG51bGwsXHJcblx0Y2h4Q2hlY2thbGw6IG51bGwsXHJcblx0Y29sUmVzaXplOiB7fSxcclxuXHRjb2xEcmFnOiB7fSxcclxufVxyXG5cclxuY29uc3QgdHlwZSA9IHtcclxuXHRib29sOiAxMSxcclxuXHR0ZXh0OiAxMixcclxuXHRkYXRlOiAxMyxcclxuXHRsaW5rOiAxNCxcclxuXHRsaXN0OiAxNSxcclxufTtcclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vL0hlYWRlclxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gSGVhZGVyKGZpZWxkKSB7XHJcblx0dGhpcy5pZCA9IGZpZWxkLmlkO1xyXG5cdHRoaXMudGl0bGUgPSBmaWVsZC50aXRsZTtcclxuXHR0aGlzLnR5cGUgPSBmaWVsZC50eXBlO1xyXG5cdHRoaXMucGVybWlzc2lvbnMgPSBmaWVsZC5wZXJtaXNzaW9ucztcclxuXHR0aGlzLmRlZmF1bHRXaWR0aCA9IGZpZWxkLmRlZmF1bHRfd2lkdGg7XHJcblx0dGhpcy5oYXNTb3J0ID0gKGZpZWxkLmVsZW1lbnRzICYmIGZpZWxkLmVsZW1lbnRzLnNvbWUodiA9PiB2LnNvcnQgPT09IHRydWUpKTtcclxuXHR0aGlzLmhhc0ZpbHRlciA9IChmaWVsZC5lbGVtZW50cyAmJiBmaWVsZC5lbGVtZW50cy5zb21lKHYgPT4gdi5maWx0ZXIpKTtcclxuXHR0aGlzLmVsZW1lbnRzID0gW107XHJcbn1cclxuXHJcbkhlYWRlci5wcm90b3R5cGUgPSB7XHJcblx0XHJcblx0c2V0V2lkdGg6IGZ1bmN0aW9uKHdpZHRoKSB7XHJcblx0XHRpZiAodGhpcy50aCkge1xyXG5cdFx0XHR0aGlzLnRoLmNzcygnd2lkdGgnLCB3aWR0aCArICdyZW0nKTtcclxuXHRcdFx0dGhpcy50aC5jc3MoJ21pbi13aWR0aCcsIHdpZHRoICsgJ3JlbScpO1xyXG5cdFx0XHR0aGlzLnRoLmNzcygnbWF4LXdpZHRoJywgd2lkdGggKyAncmVtJyk7XHJcblx0XHRcdGxldCBpbmRleCA9IHRoaXMudGguaW5kZXgoKSArIDE7XHJcblx0XHRcdCQodGhpcy50aCkucGFyZW50cygndGFibGUnKS5maW5kKCd0ZDpudGgtY2hpbGQoJyArIGluZGV4ICsgJyknKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQodGhpcykuY3NzKCdtYXgtd2lkdGgnLCB3aWR0aCArICdyZW0nKTtcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxufVxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vVXJsU2VhcmNoXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBVcmxTZWFyY2ggKCkge1xyXG5cdHRoaXMuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG59XHJcblxyXG5VcmxTZWFyY2gucHJvdG90eXBlID0ge1xyXG5cclxuXHRoYXM6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmhhcyhrZXkpO1xyXG5cdH0sXHJcblx0XHJcblx0Z2V0OiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdGlmICgvXFxTK1xcW1xcXS9nLmV4ZWMoa2V5KSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGFyYW1zQXJyYXkuZ2V0QWxsKGtleSkgfHwgW107XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGFyYW1zQXJyYXkuZ2V0KGtleSkgfHwgJyc7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHRcdGlmIChrZXkgPT0gJ3Z1ZScpIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsndnVlJzogdmFsdWV9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5LnNldChrZXksIHZhbHVlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdGFwcGVuZDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG5cdFx0aWYgKGtleSA9PSAndnVlJykge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoeyd2dWUnOiB2YWx1ZX0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkuYXBwZW5kKGtleSwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0ZGVsZXRlOiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdHRoaXMuX3BhcmFtc0FycmF5LmRlbGV0ZShrZXkpO1xyXG5cdH0sXHJcblx0XHJcblx0c2V0RnJvbVVybDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGxldCBwYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXModmFsdWUpO1xyXG5cdFx0aWYgKHBhcmFtc0FycmF5LmhhcygndnVlJykpIHtcclxuXHRcdFx0dGhpcy5zZXQoJ3Z1ZScsIHBhcmFtc0FycmF5LmdldCgndnVlJykpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBwYXJhbXNBcnJheTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdHRvVXJsOiBmdW5jdGlvbihrZXkgPSAnJykge1xyXG5cdFx0bGV0IHVybCA9ICcnO1xyXG5cdFx0aWYgKGtleSA9PSAnJykge1xyXG5cdFx0XHR1cmwgPSB0aGlzLl9wYXJhbXNBcnJheS50b1N0cmluZygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFsdWVzID0gdGhpcy5nZXQoa2V5KTtcclxuXHRcdFx0Zm9yIChpIGluIHZhbHVlcykge1xyXG5cdFx0XHRcdHZhbHVlc1tpXSA9IGtleSArICc9JyArIHZhbHVlc1tpXTtcclxuXHRcdFx0fVxyXG5cdFx0XHR1cmwgPSB2YWx1ZXMuam9pbignJicpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICh1cmwpPyc/JyArIHVybDonJztcclxuXHR9LFxyXG5cdFxyXG5cdGZldGNoOiBmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHVybCA9ICQoJyN0YWJsZScpLmRhdGEoJ3VybCcpICsgdGhpcy50b1VybCgpO1xyXG5cdFx0Z2xvYmFsLmFqYXguc2V0KCcjdGFibGUnLCB1cmwpO1xyXG5cdFx0XHJcblx0fSxcclxuXHRcclxuXHRnZXRWdWVzOiBmdW5jdGlvbigpIHtcclxuXHRcdGxldCB1cmwgPSAkKCcjdnVlcycpLmRhdGEoJ3VybCcpO1xyXG5cdFx0Z2xvYmFsLmFqYXguc2V0KCcjdnVlcycsIHVybCk7XHJcblx0fSxcclxuXHRcclxuXHRsaW5lQ2hlY2tlZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHJcblx0XHR2YXIgY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0dmFyIHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQkKCd0Ym9keScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdGNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHVuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmIChjaGVja2VkICYmIHVuY2hlY2tlZCkge1xyXG5cdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdpbmRldGVybWluYXRlJywgdHJ1ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHRoYXQuZGVsZXRlKCdpZFtdJyk7XHJcblx0XHRcclxuXHRcdGlmIChjaGVja2VkKSB7XHJcblx0XHRcdCQoJ3RhYmxlJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5wcm9wKCdpZCcpICE9ICdjaGVja19hbGwnICYmICQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdHRoYXQuYXBwZW5kKCdpZFtdJywgJCh0aGlzKS52YWwoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdCQoJyNkb2N1bWVudF9lZGl0Jykuc2hvdygpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfbW92ZScpLnNob3coKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLnNob3coKTtcclxuXHRcdFx0JCgnI3ZlcnNpb25fbWVudScpLnNob3coKTtcclxuXHRcdH0gZWxzZSBpZih1bmNoZWNrZWQpIHtcclxuXHRcdFx0JCgnI3ZlcnNpb24nKS52YWwoJycpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZWRpdCcpLmhpZGUoKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X21vdmUnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyN2ZXJzaW9uX21lbnUnKS5oaWRlKCk7XHJcblx0XHR9XHJcblx0fSxcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy8gU2V0dXBcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIHNldHVwKGRhdGFzKSB7XHJcblx0XHJcblx0JCgnI3RhYmxlJykuc2hvdygpO1xyXG5cdFxyXG5cdGxldCB0aGVhZCA9ICQoJyN0YWJsZScpLmFwcGVuZChjcmVhdGUudGhlYWQpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdGxldCB0ciA9IHRoZWFkLmFwcGVuZChjcmVhdGUudHIpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdGxldCB0aCA9IHRyLmFwcGVuZChjcmVhdGUudGgpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHQuYXR0cignaWQnLCAnc2VsZWN0b3InKVx0XHJcblx0XHQuY3NzKCd3aWR0aCcsICcyZW0nKVxyXG5cdDtcclxuXHRcclxuXHRsZXQgZGl2ID0gdGguYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHQuYWRkQ2xhc3MoJ2J0bi1ncm91cCBjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSByb3VuZGVkLTAnKVxyXG5cdDtcclxuXHRcclxuXHRncGV4ZS5jaHhDaGVja2FsbCA9IGRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0LmF0dHIoJ2lkJywgJ2NoZWNrX2FsbCcpXHJcblx0XHQuYXR0cigndW5jaGVja2VkJywgJ3VuY2hlY2tlZCcpXHJcblx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCAkKCd0Ym9keScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgJCgnI2NoZWNrX2FsbCcpLmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdCB1cmxTZWFyY2gubGluZUNoZWNrZWQoKTtcclxuXHRcdH0pO1xyXG5cdDtcclxuXHRcclxuXHRkaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdC5hZGRDbGFzcygnbXgtMScpXHJcblx0XHQuYXR0cignZm9yJywgJ2NoZWNrX2FsbCcpXHJcblx0O1x0XHJcblx0XHJcblx0Z3BleGUuc2VyaWVzID0gZGF0YXMuc2VyaWVzO1xyXG5cdFxyXG5cdGZvciAobGV0IGkgaW4gZGF0YXMuZmllbGRzKSB7XHJcblx0XHRcclxuXHRcdGZpZWxkID0gZGF0YXMuZmllbGRzW2ldO1xyXG5cdFx0XHJcblx0XHRpZiAoZmllbGQuZGlzcGxheS50YWJsZSkge1xyXG5cdFx0XHJcblx0XHRcdHZhciBoZWFkZXIgPSBuZXcgSGVhZGVyKGZpZWxkKTtcclxuXHRcdFx0XHJcblx0XHRcdCQuZWFjaChmaWVsZC5lbGVtZW50cywgZnVuY3Rpb24gKGosIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRlID0ge1xyXG5cdFx0XHRcdFx0aWQ6IGVsZW1lbnQuaWQsXHJcblx0XHRcdFx0XHR0aXRsZTogZWxlbWVudC50aXRsZSxcclxuXHRcdFx0XHRcdHNvcnQ6IGVsZW1lbnQuc29ydCxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChlbGVtZW50LmZpbHRlcikge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzd2l0Y2ggKGVsZW1lbnQuZmlsdGVyLnR5cGUpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSB0eXBlLmJvb2w6XHJcblx0XHRcdFx0XHRcdFx0dmFyIGMgPSBbXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6ICQuaTE4bignbm90QXBwbGljYWJsZScpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogLTEsXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiAkLmkxOG4oJ3llcycpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogMSxcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6ICQuaTE4bignbm8nKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcclxuXHRcdFx0XHRcdFx0Y2FzZSB0eXBlLmxpc3Q6XHJcblx0XHRcdFx0XHRcdFx0dmFyIGMgPSBbXTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQkLmVhY2goZWxlbWVudC5maWx0ZXIuY2hvaWNlcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGMucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dDogdmFsdWUubmFtZSB8fCB2YWx1ZS52YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWUuaWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Yy5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiB2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZToga2V5LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRjLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChhLnRleHQgPCBiLnRleHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGEudGV4dCA+IGIudGV4dCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGMudW5zaGlmdCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiAkLmkxOG4oJ3NlbGVjdEFsbCcpLFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IC0xLFxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlLmZpbHRlciA9IHtcclxuXHRcdFx0XHRcdFx0dHlwZTogZWxlbWVudC5maWx0ZXIudHlwZSxcclxuXHRcdFx0XHRcdFx0Y2hvaWNlczogYyxcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGhlYWRlci5lbGVtZW50cy5wdXNoKGUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFxyXG5cdFx0XHRncGV4ZS5oZWFkZXJzLnB1c2goaGVhZGVyKTtcclxuXHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdGZvciAobGV0IGhlYWRlciBvZiBncGV4ZS5oZWFkZXJzKSB7XHJcblx0XHRcclxuXHRcdGhlYWRlci50aCA9IHRyLmFwcGVuZChjcmVhdGUudGgpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdFx0aGVhZGVyLnNldFdpZHRoKGhlYWRlci5kZWZhdWx0V2lkdGgpO1xyXG5cdFx0XHJcblx0XHRpZiAoaGVhZGVyLmhhc1NvcnQgfHwgaGVhZGVyLmhhc0ZpbHRlcikge1xyXG5cdFx0XHRcclxuXHRcdFx0Ly9tYWluIGJ1dHRvbiBncm91cFxyXG5cdFx0XHRsZXQgZGl2RHJvcGRvd25Hcm91cCA9IGhlYWRlci50aC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2J0bi1ncm91cCB3LTEwMCcpXHJcblx0XHRcdFx0LmF0dHIoJ3JvbGUnLCAnZ3JvdXAnKVxyXG5cdFx0XHRcdC5vbignaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmKGUuY2xpY2tFdmVudCAmJiAkLmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldC5wYXJlbnROb2RlLCBlLmNsaWNrRXZlbnQudGFyZ2V0KSkge1xyXG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGhlYWRlci5kaXZEcm9wZG93bk1lbnUuZW1wdHkoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHQvL3RpdGxlXHJcblx0XHRcdGRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygndGV4dC10cnVuY2F0ZSB3LTEwMCcpXHJcblx0XHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0XHQudGV4dChoZWFkZXIudGl0bGUpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKGhlYWRlci5oYXNGaWx0ZXIpIHtcclxuXHRcdFx0XHRcdFx0Zm9yIChlbGVtZW50IG9mIGhlYWRlci5lbGVtZW50cykge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gZWxlbWVudC5pZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydEFzYycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydERlc2MnLCBlbGVtZW50LmlkKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IGVsZW1lbnQuaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0QXNjJywgZWxlbWVudC5pZCk7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRmb3IgKGVsZW1lbnQgb2YgaGVhZGVyLmVsZW1lbnRzKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuc29ydCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydEFzYycsIGVsZW1lbnQuaWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdC8vZHJvcERvd24gYnV0dG9uXHJcblx0XHRcdGhlYWRlci5idG5Ecm9wZG93biA9IGRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncHgtMCcpXHJcblx0XHRcdFx0LmNzcygnd2lkdGgnLCAnM2VtJylcclxuXHRcdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHRcdC5hdHRyKCdpZCcsICdiXycgKyBoZWFkZXIuaWQpXHJcblx0XHRcdFx0LmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ2Ryb3Bkb3duJylcclxuXHRcdFx0XHQuYXR0cignZGF0YS1kaXNwbGF5JywgJ3N0YXRpYycpXHJcblx0XHRcdFx0LmF0dHIoJ2FyaWEtaGFzcG9wdXAnLCB0cnVlKVxyXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdC8vZHJvcERvd24gbWVudVxyXG5cdFx0XHRoZWFkZXIuZGl2RHJvcGRvd25NZW51ID0gZGl2RHJvcGRvd25Hcm91cC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2Ryb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1sZWZ0JylcclxuXHRcdFx0XHQuYXR0cignYXJpYS1sYWJlbGxlZGJ5JywgJ2JfJyArIGhlYWRlci5pZClcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2QtZmxleCBmbGV4LXJvdycpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGRpdkRyb3Bkb3duR3JvdXAub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjcmVhdGVNZW51KGhlYWRlcik7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFxyXG5cdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24gPSBoZWFkZXIudGguYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygndGV4dC10cnVuY2F0ZSB3LTEwMCcpXHJcblx0XHRcdFx0LnRleHQoaGVhZGVyLnRpdGxlKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdilcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cdFxyXG5cdHRyLmFwcGVuZChjcmVhdGUudGgpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHQuYXR0cignaWQnLCAnZGV0YWlsJylcclxuXHRcdC5jc3MoJ3dpZHRoJywgJzZlbScpXHJcblx0O1xyXG5cdFxyXG5cdGxldCB0Ym9keSA9ICQoJyN0YWJsZScpLmFwcGVuZChjcmVhdGUudGJvZHkpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gQ29sIFJlc2l6ZVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0Ly9zdXBwcmltZXIgd2lkdGg9MTAwJSBkYW5zIGxlIGNzc1xyXG5cdC8vc3VyIGxlIHRoIChtaW4td2lkdGgsIG1heC13aWR0aCkgZXQgc3VyIGxlcyB0ZCAobWF4LXdpZHRoKVxyXG5cdFxyXG5cdGZvciAobGV0IGhlYWRlciBvZiBncGV4ZS5oZWFkZXJzKSB7XHJcblx0XHRjb2xSZXNpemUoaGVhZGVyKTtcclxuXHR9XHJcblx0XHJcblx0JCgnYm9keScpLm9uKCdtb3VzZW1vdmUnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoJC5pc0VtcHR5T2JqZWN0KGdwZXhlLmNvbFJlc2l6ZSkgPT09IGZhbHNlKSB7XHJcblx0XHRcdGxldCB3aWR0aCA9IE1hdGgubWF4KDEsIE1hdGgucm91bmQocHhUb1JlbShncGV4ZS5jb2xSZXNpemUuY3VycmVudFdpZHRoICsgKGUucGFnZVggLSBncGV4ZS5jb2xSZXNpemUuY3VycmVudFBvc2l0aW9uKSkpKTtcclxuXHRcdFx0Z3BleGUuY29sUmVzaXplLmhlYWRlci5zZXRXaWR0aCh3aWR0aCk7XHJcblx0XHR9XHJcblx0XHRpZiAoJC5pc0VtcHR5T2JqZWN0KGdwZXhlLmNvbERyYWcpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQuaXNFbXB0eU9iamVjdChncGV4ZS5jb2xEcmFnLiR1bCkgJiYgTWF0aC5hYnMoZS5wYWdlWCAtIGdwZXhlLmNvbERyYWcuY3VycmVudFBvc2l0aW9uKSA+IDEwKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRcdGxldCAkdGFibGUgPSBncGV4ZS5jb2xEcmFnLmhlYWRlci50aC5wYXJlbnRzKCd0YWJsZScpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGdwZXhlLmNvbERyYWcuJHVsID0gJHRhYmxlLnBhcmVudCgpLnByZXBlbmQoY3JlYXRlLnVsKS5jaGlsZHJlbigpLmZpcnN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY29sLWRyYWctY29udGFpbmVyJylcclxuXHRcdFx0XHRcdC5jc3MoJ3dpZHRoJywgJHRhYmxlLm91dGVyV2lkdGgoKSArIDEpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCR0YWJsZS5maW5kKCd0aDp2aXNpYmxlJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKGdwZXhlLmNvbERyYWcuaGVhZGVyLnRoLmlzKHRoaXMpKSB7XHJcblx0XHRcdFx0XHRcdGdwZXhlLmNvbERyYWcuJGxpUGxhY2Vob2xkZXIgPSBncGV4ZS5jb2xEcmFnLiR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY29sLWRyYWctcGxhY2Vob2xkZXInKVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdGdwZXhlLmNvbERyYWcuJGxpUGxhY2Vob2xkZXIuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmNzcygnd2lkdGgnLCAkKHRoaXMpLndpZHRoKCkpXHJcblx0XHRcdFx0XHRcdFx0LmNzcygnaGVpZ2h0JywgJHRhYmxlLmhlaWdodCgpKVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCAkbGkgPSBncGV4ZS5jb2xEcmFnLiR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykuaXMoJyNzZWxlY3RvciwgI2RldGFpbCcpKSB7XHJcblx0XHRcdFx0XHRcdCRsaS5hZGRDbGFzcygnbm8tZHJhZycpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoZ3BleGUuY29sRHJhZy5oZWFkZXIudGguaXModGhpcykpIHtcclxuXHRcdFx0XHRcdFx0JGxpLmFkZENsYXNzKCdjb2wtZHJhZy1oZWxwZXInKTtcclxuXHRcdFx0XHRcdFx0Z3BleGUuY29sRHJhZy4kbGlIZWxwZXIgPSAkbGk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCRsaS5hcHBlbmQoY3JlYXRlLnRhYmxlKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJHRhYmxlLmF0dHIoJ2NsYXNzJykpXHJcblx0XHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnRoZWFkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXBwZW5kKCQodGhpcykuY2xvbmUoKSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0ICR0Ym9keSA9ICRsaS5jaGlsZHJlbigpLmxhc3QoKS5hcHBlbmQoY3JlYXRlLnRib2R5KS5jaGlsZHJlbigpLmxhc3QoKTtcclxuXHRcdFx0XHRcdGxldCBpbmRleCA9ICQodGhpcykuaW5kZXgoKSArIDE7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdCR0YWJsZS5maW5kKCd0ZDpudGgtY2hpbGQoJyArIGluZGV4ICsgJyknKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHQkdGJvZHkuYXBwZW5kKGNyZWF0ZS50cikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJCh0aGlzKS5wYXJlbnQoKS5hdHRyKCdjbGFzcycpKVxyXG5cdFx0XHRcdFx0XHRcdC5jc3MoJ2hlaWdodCcsICQodGhpcykucGFyZW50KCkub3V0ZXJIZWlnaHQoKSlcclxuXHRcdFx0XHRcdFx0XHQuYXBwZW5kKCQodGhpcykuY2xvbmUoKSlcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0JHRhYmxlLmhpZGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQuaXNFbXB0eU9iamVjdChncGV4ZS5jb2xEcmFnLiRsaVBsYWNlaG9sZGVyKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRsZXQgbGVmdCA9IGdwZXhlLmNvbERyYWcuY3VycmVudExlZnQgKyBlLnBhZ2VYIC0gZ3BleGUuY29sRHJhZy5jdXJyZW50UG9zaXRpb247XHJcblx0XHRcdFx0Z3BleGUuY29sRHJhZy4kbGlIZWxwZXIuY3NzKCdsZWZ0JywgbGVmdCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKGxlZnQgPiBncGV4ZS5jb2xEcmFnLiRsaVBsYWNlaG9sZGVyLnBvc2l0aW9uKCkubGVmdCArIGdwZXhlLmNvbERyYWcuJGxpUGxhY2Vob2xkZXIubmV4dEFsbCgpLm5vdCgnLmNvbC1kcmFnLWhlbHBlciwgLm5vLWRyYWcnKS5maXJzdCgpLndpZHRoKCkpIHtcclxuXHRcdFx0XHRcdGdwZXhlLmNvbERyYWcuJGxpUGxhY2Vob2xkZXIubmV4dEFsbCgpLm5vdCgnLmNvbC1kcmFnLWhlbHBlciwgLm5vLWRyYWcnKS5maXJzdCgpLmluc2VydEJlZm9yZShncGV4ZS5jb2xEcmFnLiRsaVBsYWNlaG9sZGVyKTtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGxlZnQgPCBncGV4ZS5jb2xEcmFnLiRsaVBsYWNlaG9sZGVyLnBvc2l0aW9uKCkubGVmdCAtIGdwZXhlLmNvbERyYWcuJGxpUGxhY2Vob2xkZXIucHJldkFsbCgpLm5vdCgnLmNvbC1kcmFnLWhlbHBlciwgLm5vLWRyYWcnKS5maXJzdCgpLndpZHRoKCkpIHtcclxuXHRcdFx0XHRcdGdwZXhlLmNvbERyYWcuJGxpUGxhY2Vob2xkZXIucHJldkFsbCgpLm5vdCgnLmNvbC1kcmFnLWhlbHBlciwgLm5vLWRyYWcnKS5maXJzdCgpLmluc2VydEFmdGVyKGdwZXhlLmNvbERyYWcuJGxpUGxhY2Vob2xkZXIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJ2JvZHknKS5vbignbW91c2V1cCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICgkLmlzRW1wdHlPYmplY3QoZ3BleGUuY29sUmVzaXplKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0bGV0IHdpZHRoID0gZ3BleGUuY29sUmVzaXplLmhlYWRlci50aC53aWR0aCgpO1xyXG5cdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdkaXNwbGF5WycgKyBncGV4ZS5jb2xSZXNpemUuaGVhZGVyLmlkICsgJ10nKTtcclxuXHRcdFx0dXJsU2VhcmNoLmFwcGVuZCgnZGlzcGxheVsnICsgZ3BleGUuY29sUmVzaXplLmhlYWRlci5pZCArICddJywgcHhUb1JlbSh3aWR0aCkpO1xyXG5cdFx0XHRncGV4ZS5jb2xSZXNpemUgPSB7fTtcclxuXHRcdH1cclxuXHRcdFxyXG4vL1x0XHRpZiAoJC5pc0VtcHR5T2JqZWN0KGdwZXhlLmNvbERyYWcpID09PSBmYWxzZSkge1xyXG4vL1x0XHRcdGdwZXhlLmNvbERyYWcudGgucmVtb3ZlQ2xhc3MoJ2NvbC1kcmFnLWhhbmRsZScpXHJcbi8vXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIENvbCBEcmFnXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHRmb3IgKGxldCBoZWFkZXIgb2YgZ3BleGUuaGVhZGVycykge1xyXG5cdFx0Y29sRHJhZyhoZWFkZXIpO1xyXG5cdH1cclxuXHRcclxuXHRcclxuXHRmdW5jdGlvbiBjcmVhdGVNZW51KGhlYWRlcikge1xyXG5cdFx0XHJcblx0XHRpZiAoaGVhZGVyLmhhc1NvcnQgfHwgaGVhZGVyLmhhc0ZpbHRlcikge1xyXG5cdFx0XHRcclxuXHRcdFx0aGVhZGVyLmRpdkRyb3Bkb3duTWVudS5lbXB0eSgpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGhlYWRlci5lbGVtZW50cy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRcdGNyZWF0ZU1lbnVJdGVtKGhlYWRlciwgaGVhZGVyLmVsZW1lbnRzWzBdKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRmb3IgKHZhciBlbGVtZW50IG9mIGhlYWRlci5lbGVtZW50cykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIgfHwgZWxlbWVudC5zb3J0KSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjcmVhdGVNZW51SXRlbShoZWFkZXIsIGVsZW1lbnQpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly9oZWFkZXIgaWYgbWFueSBzZWxlY3RzXHJcblx0XHRcdFx0XHRcdGVsZW1lbnQuZGl2Q29udGVudC5wcmVwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkuZmlyc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItZGFyayBwYi0yIHB4LTEnKVxyXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoZWxlbWVudC50aXRsZSlcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBjcmVhdGVNZW51SXRlbShoZWFkZXIsIGVsZW1lbnQpIHtcclxuXHRcdFxyXG5cdFx0ZWxlbWVudC5kaXZDb250ZW50ID0gaGVhZGVyLmRpdkRyb3Bkb3duTWVudS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdteC0xJylcclxuXHRcdFx0LmNzcygnbWluLXdpZHRoJywgJzE1ZW0nKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRsZXQgZGl2QnV0dG9ucyA9IGVsZW1lbnQuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBwLTEnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRpZiAoZWxlbWVudC5zb3J0KSB7XHJcblx0XHRcdGRpdkJ1dHRvbnMuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXBwZW5kKGdsb2JhbC5pY29uLmFycm93RG93bilcclxuXHRcdFx0XHQuYWRkQ2xhc3MoKHVybFNlYXJjaC5nZXQoJ3NvcnREZXNjJykgPT0gZWxlbWVudC5pZCk/J3B4LTIgYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOidweC0yIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSBlbGVtZW50LmlkKSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0RGVzYycsIGVsZW1lbnQuaWQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmIChlbGVtZW50LmZpbHRlcikge1xyXG5cdFx0XHRcclxuXHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyID0gZGl2QnV0dG9ucy5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC50ZXh0KCQuaTE4bignZmlsdGVyJykpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdweC0zIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0c3dpdGNoIChlbGVtZW50LmZpbHRlci50eXBlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSB0eXBlLmRhdGU6XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkZpbHRlclxyXG5cdFx0XHRcdFx0XHQub24oJ2ZpbHRlci51cGRhdGUnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXVtdJyk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZmlsdGVyLmNoeEluZi5pcygnOmNoZWNrZWQnKSAmJiAocmVzdWx0ID0gL17iiaVcXHMoXFxkezJ9LVxcZHsyfS1cXGR7NH0pLy5leGVjKGVsZW1lbnQuZmlsdGVyLmlucHV0SW5mLnZhbCgpKSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5hcHBlbmQoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddW10nLCAnPicgKyByZXN1bHRbMV0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIuY2h4U3VwLmlzKCc6Y2hlY2tlZCcpICYmIChyZXN1bHQgPSAvXuKJpFxccyhcXGR7Mn0tXFxkezJ9LVxcZHs0fSkvLmV4ZWMoZWxlbWVudC5maWx0ZXIuaW5wdXRTdXAudmFsKCkpKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScsICc8JyArIHJlc3VsdFsxXSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmIChlbGVtZW50LmZpbHRlci5jaHhIaWdobGlnaHQuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ2hpZ2hsaWdodCcsIGVsZW1lbnQuaWQpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodXJsU2VhcmNoLmdldCgnaGlnaGxpZ2h0JykudG9TdHJpbmcoKSA9PSBlbGVtZW50LmlkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdoaWdobGlnaHQnKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBlbGVtZW50IG9mIGhlYWRlci5lbGVtZW50cykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZmlsdGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkZpbHRlci50cmlnZ2VyKCdmaWx0ZXIudXBkYXRlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1x0XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGNhc2UgdHlwZS50ZXh0OlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXJcclxuXHRcdFx0XHRcdFx0Lm9uKCdmaWx0ZXIudXBkYXRlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ10nKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR2YXIgc2VhcmNoVmFsdWUgPSBlbGVtZW50LmlucHV0U2VhcmNoLnZhbCgpLnRvTG93ZXJDYXNlKClcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoc2VhcmNoVmFsdWUgIT0gJycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddJywgc2VhcmNoVmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGVsZW1lbnQgb2YgaGVhZGVyLmVsZW1lbnRzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyLnRyaWdnZXIoJ2ZpbHRlci51cGRhdGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHRcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSB0eXBlLmxpc3Q6XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkZpbHRlclxyXG5cdFx0XHRcdFx0XHQub24oJ2ZpbHRlci51cGRhdGUnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXVtdJyk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZmlsdGVyLmNob2ljZXNbMF0uY2h4LmlzKCc6Y2hlY2tlZCcpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgY2hvaWNlIG9mIGVsZW1lbnQuZmlsdGVyLmNob2ljZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGNob2ljZS5jaHguaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXVtdJywgY2hvaWNlLnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGVsZW1lbnQgb2YgaGVhZGVyLmVsZW1lbnRzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyLnRyaWdnZXIoJ2ZpbHRlci51cGRhdGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cdFx0XHRcclxuXHRcdFxyXG5cdFx0aWYgKGVsZW1lbnQuc29ydCkge1xyXG5cdFx0XHRkaXZCdXR0b25zLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFwcGVuZChnbG9iYWwuaWNvbi5hcnJvd1VwKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IGVsZW1lbnQuaWQpPydweC0yIGJ0bi1vdXRsaW5lLXByaW1hcnkgYmctZGFyayB0ZXh0LXdoaXRlJzoncHgtMiBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gZWxlbWVudC5pZCkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0QXNjJywgZWxlbWVudC5pZCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAoZWxlbWVudC5maWx0ZXIpIHtcclxuXHRcdFx0XHJcblx0XHRcdHN3aXRjaCAoZWxlbWVudC5maWx0ZXIudHlwZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNhc2UgdHlwZS5ib29sOlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZMaXN0ID0gZWxlbWVudC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTIgb3ZlcmZsb3ctYXV0byAnICsgKChlbGVtZW50LmZpbHRlci50eXBlID09PSB0eXBlLmxpc3QpPydwdC0zJzoncHQtMScpKVxyXG5cdFx0XHRcdFx0XHQuY3NzKCdtYXgtaGVpZ2h0JywgJzIwZW0nKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y2hvaWNlLmRpdiA9IGVsZW1lbnQuZmlsdGVyLmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjaG9pY2UuY2h4ID0gY2hvaWNlLmRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIGVsZW1lbnQuaWQgKyAnXycgKyBjaG9pY2UudmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y2hvaWNlLmRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBlbGVtZW50LmlkICsgJ18nICsgY2hvaWNlLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdC50ZXh0KGNob2ljZS50ZXh0KVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoY2hvaWNlLnZhbHVlID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeFxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCAhdXJsU2VhcmNoLmdldCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ10nKSlcclxuXHRcdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgY2hvaWNlIG9mIGVsZW1lbnQuZmlsdGVyLmNob2ljZXMpIHtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNob2ljZS5jaHgucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGNob2ljZS5jaHhcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgcGFyc2VJbnQodXJsU2VhcmNoLmdldCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ10nKSkgPT09IGNob2ljZS52YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGNob2ljZSBvZiBlbGVtZW50LmZpbHRlci5jaG9pY2VzKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2hvaWNlLmNoeCAhPSB0aGlzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaG9pY2UuY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXScsIGNob2ljZS52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24uZHJvcGRvd24oJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGNhc2UgdHlwZS50ZXh0OlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZGl2U2VhcmNoID0gZWxlbWVudC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2lucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtIHAtMicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuaW5wdXRTZWFyY2ggPSBkaXZTZWFyY2guYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LnZhbCh1cmxTZWFyY2guZ2V0KCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXScpKVxyXG5cdFx0XHRcdFx0XHQub24oJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChlLndoaWNoID09IDEzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBkaXYgPSBkaXZTZWFyY2guYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnaW5wdXQtZ3JvdXAtYXBwZW5kJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGEgPSBkaXYuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2J0biBidG4tbGlnaHQgYm9yZGVyLWxlZnQtMCBib3JkZXIgdGV4dC1wcmltYXJ5JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdGEuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuaHRtbCgnJnRpbWVzOycpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmlucHV0U2VhcmNoLnZhbCgnJyk7XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjYXNlIHR5cGUuZGF0ZTpcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKChyZXN1bHQgPSAvPihcXGR7Mn0tXFxkezJ9LVxcZHs0fSkvLmV4ZWModXJsU2VhcmNoLmdldCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScpLnRvU3RyaW5nKCkpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVJbmYgPSByZXN1bHRbMV07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVJbmYgPSAnJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKChyZXN1bHQgPSAvPChcXGR7Mn0tXFxkezJ9LVxcZHs0fSkvLmV4ZWModXJsU2VhcmNoLmdldCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScpLnRvU3RyaW5nKCkpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVTdXAgPSByZXN1bHRbMV07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVTdXAgPSAnJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGhpZ2hsaWdodCA9ICh1cmxTZWFyY2guZ2V0KCdoaWdobGlnaHQnKS50b1N0cmluZygpID09IGVsZW1lbnQuaWQpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZMaXN0ID0gZWxlbWVudC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTIgb3ZlcmZsb3ctYXV0byAnICsgKChlbGVtZW50LmZpbHRlci50eXBlID09PSB0eXBlLmxpc3QpPydwdC0zJzoncHQtMScpKVxyXG5cdFx0XHRcdFx0XHQuY3NzKCdtYXgtaGVpZ2h0JywgJzIwZW0nKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZJbmYgPSBlbGVtZW50LmZpbHRlci5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCBtdC0yJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuY2h4SW5mID0gZWxlbWVudC5maWx0ZXIuZGl2SW5mLmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIGVsZW1lbnQuaWQgKyAnX2luZicpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdmFsdWVJbmYgIT0gJycpXHJcblx0XHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGNoZWNrZWQgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChjaGVja2VkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoL17iiaVcXHNcXGR7Mn0tXFxkezJ9LVxcZHs0fS8udGVzdChlbGVtZW50LmZpbHRlci5pbnB1dEluZi52YWwoKSkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0SW5mLnZhbCgnJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0SW5mLnZhbCgkLmkxOG4oJ2Zyb21EYXRlJykpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5pbnB1dEluZi5hdHRyKCdyZWFkb25seScsIGNoZWNrZWQgPT09IGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIubGFiZWxJbmYgPSBlbGVtZW50LmZpbHRlci5kaXZJbmYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIGVsZW1lbnQuaWQgKyAnX2luZicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0SW5mID0gZWxlbWVudC5maWx0ZXIubGFiZWxJbmYuYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdmb3JtLWNvbnRyb2wgZGF0ZXBpY2tlcicpXHJcblx0XHRcdFx0XHRcdC52YWwoKHZhbHVlSW5mKT8oJ+KJpSAnICsgdmFsdWVJbmYpOiQuaTE4bignZnJvbURhdGUnKSlcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ3JlYWRvbmx5JywgdmFsdWVJbmYgPT0gJycpXHJcblx0XHRcdFx0XHRcdC5kYXRlcGlja2VyKHsnZm9ybWF0JzogJ+KJpSBkZC1tbS15eXl5J30pXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaHhJbmYucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNoeEluZi50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdCAgICAub24oJ3Nob3cuYnMuZHJvcGRvd24gaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdCAgICBcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHQgICAgfSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2U3VwID0gZWxlbWVudC5maWx0ZXIuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggbXQtMicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNoeFN1cCA9IGVsZW1lbnQuZmlsdGVyLmRpdlN1cC5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCBlbGVtZW50LmlkICsgJ19zdXAnKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsIHZhbHVlU3VwICE9ICcnKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKC9e4omkXFxzXFxkezJ9LVxcZHsyfS1cXGR7NH0vLnRlc3QoZWxlbWVudC5maWx0ZXIuaW5wdXRTdXAudmFsKCkpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5pbnB1dFN1cC52YWwoJycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5pbnB1dFN1cC52YWwoJC5pMThuKCd0b0RhdGUnKSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0U3VwLmF0dHIoJ3JlYWRvbmx5JywgY2hlY2tlZCA9PT0gZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5sYWJlbFN1cCA9IGVsZW1lbnQuZmlsdGVyLmRpdlN1cC5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgZWxlbWVudC5pZCArICdfc3VwJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuaW5wdXRTdXAgPSBlbGVtZW50LmZpbHRlci5sYWJlbFN1cC5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBkYXRlcGlja2VyJylcclxuXHRcdFx0XHRcdFx0LnZhbCgodmFsdWVTdXApPyfiiaQgJyArIHZhbHVlU3VwOiQuaTE4bigndG9EYXRlJykpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdyZWFkb25seScsIHZhbHVlU3VwID09ICcnKVxyXG5cdFx0XHRcdFx0XHQuZGF0ZXBpY2tlcih7J2Zvcm1hdCc6IFwi4omkIGRkLW1tLXl5eXlcIn0pXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaHhTdXAucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNoeFN1cC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdCAgICAub24oJ3Nob3cuYnMuZHJvcGRvd24gaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdCAgICBcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHQgICAgfSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2SGlnaGxpZ2h0ID0gZWxlbWVudC5maWx0ZXIuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggbXQtMicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNoeEhpZ2hsaWdodCA9IGVsZW1lbnQuZmlsdGVyLmRpdkhpZ2hsaWdodC5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCBlbGVtZW50LmlkICsgJ19oaWdobGlnaHQnKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignbmFtZScsICdoaWdobGlnaHQnKVxyXG5cdFx0XHRcdFx0XHQudmFsKGVsZW1lbnQuaWQpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgaGlnaGxpZ2h0KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZIaWdobGlnaHQuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIGVsZW1lbnQuaWQgKyAnX2hpZ2hsaWdodCcpXHJcblx0XHRcdFx0XHRcdC50ZXh0KCQuaTE4bignaGlnaGxpZ2h0JykpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSB0eXBlLmxpc3Q6XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGRpdlNlYXJjaCA9IGVsZW1lbnQuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbSBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHAtMicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuaW5wdXRTZWFyY2ggPSBkaXZTZWFyY2guYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0Lm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZS53aGljaCA9PSAxMykge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHNlYXJjaFZhbHVlID0gJCh0aGlzKS52YWwoKS50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKHNlYXJjaFZhbHVlID09ICcnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjaG9pY2UuZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaG9pY2VzWzBdLmRpdi5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2hvaWNlLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNob2ljZS5kaXYuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNob2ljZS5jaHgucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaG9pY2UuZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaG9pY2UuY2h4LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRkaXYgPSBkaXZTZWFyY2guYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnaW5wdXQtZ3JvdXAtYXBwZW5kJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0YSA9IGRpdi5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1saWdodCBib3JkZXItbGVmdC0wIGJvcmRlciB0ZXh0LXByaW1hcnknKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0YS5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5odG1sKCcmdGltZXM7JylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuaW5wdXRTZWFyY2gudmFsKCcnKTtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmlucHV0U2VhcmNoLnRyaWdnZXIoJ2lucHV0Jyk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkxpc3QgPSBlbGVtZW50LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMiBvdmVyZmxvdy1hdXRvICcgKyAoKGVsZW1lbnQuZmlsdGVyLnR5cGUgPT09IHR5cGUubGlzdCk/J3B0LTMnOidwdC0xJykpXHJcblx0XHRcdFx0XHRcdC5jc3MoJ21heC1oZWlnaHQnLCAnMjBlbScpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IGNob2ljZSBvZiBlbGVtZW50LmZpbHRlci5jaG9pY2VzKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjaG9pY2UuZGl2ID0gZWxlbWVudC5maWx0ZXIuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGNob2ljZS5jaHggPSBjaG9pY2UuZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgZWxlbWVudC5pZCArICdfJyArIGNob2ljZS52YWx1ZSlcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y2hvaWNlLmRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBlbGVtZW50LmlkICsgJ18nICsgY2hvaWNlLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdC50ZXh0KGNob2ljZS50ZXh0KVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoY2hvaWNlLnZhbHVlID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeFxyXG5cdFx0XHRcdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGNoZWNrZWQgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGNob2ljZS5jaHhcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdXJsU2VhcmNoLmdldCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScpLmhhcyhjaG9pY2UudmFsdWUpKVxyXG5cdFx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgY2hvaWNlIG9mIGVsZW1lbnQuZmlsdGVyLmNob2ljZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoJChjaG9pY2UuY2h4KS5pcygnOmNoZWNrZWQnKSAmJiBjaG9pY2UudmFsdWUgIT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaG9pY2VzWzBdLmNoeC5wcm9wKCdpbmRldGVybWluYXRlJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuY2hvaWNlc1swXS5jaHgucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaG9pY2VzWzBdLmNoeC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gY29sUmVzaXplKGhlYWRlcikge1xyXG5cdFx0XHJcblx0XHRpZiAoaGVhZGVyLnRoKSB7XHJcblx0XHRcdGhlYWRlci50aC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuY3NzKCdyaWdodCcsICcwJylcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2NvbC1yZXNpemUtaGFuZGxlJylcclxuXHRcdFx0XHQub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGhlYWRlciBvZiBncGV4ZS5oZWFkZXJzKSB7XHJcblx0XHRcdFx0XHRcdGlmICgkKGUudGFyZ2V0KS5wYXJlbnQoKS5pcyhoZWFkZXIudGgpKSB7XHJcblx0XHRcdFx0XHRcdFx0Z3BleGUuY29sUmVzaXplID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aGVhZGVyOiBoZWFkZXIsXHJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UG9zaXRpb246IGUucGFnZVgsXHJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50V2lkdGg6IGhlYWRlci50aC53aWR0aCgpLFxyXG5cdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRoZWFkZXIudGgubmV4dCgpLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5jc3MoJ2xlZnQnLCAnMCcpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjb2wtcmVzaXplLWhhbmRsZScpXHJcblx0XHRcdFx0Lm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBoZWFkZXIgb2YgZ3BleGUuaGVhZGVycykge1xyXG5cdFx0XHRcdFx0XHRpZiAoJChlLnRhcmdldCkucGFyZW50KCkucHJldkFsbCgnOnZpc2libGUnKS5maXJzdCgpLmlzKGhlYWRlci50aCkpIHtcclxuXHRcdFx0XHRcdFx0XHRncGV4ZS5jb2xSZXNpemUgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRoZWFkZXI6IGhlYWRlcixcclxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRQb3NpdGlvbjogZS5wYWdlWCxcclxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRXaWR0aDogaGVhZGVyLnRoLndpZHRoKCksXHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gY29sRHJhZyhoZWFkZXIpIHtcclxuXHRcdFxyXG5cdFx0aWYgKGhlYWRlci50aCkge1xyXG5cdFx0XHRoZWFkZXIudGguZmluZCgnYnV0dG9uW3R5cGU9XCJidXR0b25cIl0nKS5maXJzdCgpXHJcblx0XHRcdFx0Lm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRncGV4ZS5jb2xEcmFnID0ge1xyXG5cdFx0XHRcdFx0XHRoZWFkZXI6IGhlYWRlcixcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBvc2l0aW9uOiBlLnBhZ2VYLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50TGVmdDogaGVhZGVyLnRoLnBvc2l0aW9uKCkubGVmdCxcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vLyBmaWxsU2VyaWVzUGFubmVsXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBmaWxsU2VyaWVzUGFubmVsKCkge1xyXG5cdFxyXG5cdGZvciAobGV0IHNlcmllIG9mIGdwZXhlLnNlcmllcykge1xyXG5cdFx0c2VyaWUuYnRuID0gJCgnI3NlcmllcycpLmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmF0dHIoJ3JvbGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXByaW1hcnkgbS0xJylcclxuXHRcdFx0LmF0dHIoJ2hyZWYnLCBzZXJpZS51cmwpXHJcblx0XHRcdC50ZXh0KHNlcmllLm5hbWUpXHJcblx0XHQ7XHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vL2ZpbGxEaXNwbGF5UGFubmVsXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBmaWxsRGlzcGxheVBhbm5lbCgpIHtcclxuXHRcclxuXHRsZXQgZGl2Q29sID0gJCgnI2Rpc3BsYXlfcGFuZWwnKS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdC5hZGRDbGFzcygncm93IHB5LTInKVxyXG5cdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbCcpXHJcblx0O1xyXG5cdFxyXG5cdGZvciAobGV0IGhlYWRlciBvZiBncGV4ZS5oZWFkZXJzKSB7XHJcblx0XHRcclxuXHRcdGhlYWRlci5hRGlzcGxheSA9IGRpdkNvbC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1wcmltYXJ5IGNvbC0yIG0tMSB0ZXh0LWxlZnQgdGV4dC1ub3dyYXAnKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aGVhZGVyLmNoeERpc3BsYXkucHJvcCgnY2hlY2tlZCcsICFoZWFkZXIuY2h4RGlzcGxheS5pcygnOmNoZWNrZWQnKSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IGRpc3BsYXkgPSB1cmxTZWFyY2guZ2V0KCdkaXNwbGF5WycgKyBoZWFkZXIuaWQgKyAnXScpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ2Rpc3BsYXlbJyArIGhlYWRlci5pZCArICddJyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKGhlYWRlci5jaHhEaXNwbGF5LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRpZiAoZGlzcGxheSA9PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKCdkaXNwbGF5WycgKyBoZWFkZXIuaWQgKyAnXScsIGhlYWRlci5kZWZhdWx0V2lkdGgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGxldCBkaXYgPSBoZWFkZXIuYURpc3BsYXkuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRoZWFkZXIuY2h4RGlzcGxheSA9IGRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXR0cignaWQnLCAnaF8nICsgaGVhZGVyLmlkKVxyXG5cdFx0XHQub24oJ2NoYW5nZSBjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hdHRyKCdmb3InLCAnaF8nICsgaGVhZGVyLmlkKVxyXG5cdFx0XHQudGV4dChoZWFkZXIudGl0bGUpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxuXHRcclxufVxyXG5cclxudmFyIHVybFNlYXJjaCA9IG5ldyBVcmxTZWFyY2goKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIE1lbnUgZGlzcGxheVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdCQoJyNkb2N1bWVudF9uZXcsICNkb2N1bWVudF9lZGl0LCAjZG9jdW1lbnRfbW92ZSwgI2RvY3VtZW50X2RlbGV0ZSwgI3ZlcnNpb25fbmV3LCAjdmVyc2lvbl9lZGl0LCAjdmVyc2lvbl9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGdsb2JhbC5hamF4LnNldCgnI21vZGFsJywgJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1VybCgnaWRbXScpLCB7ZnJvbTogdGhpc30pO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFRhYiBjb2xsYXBzZVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3RhYnMnKS5vbignc2hvdy5icy50YWInLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5jb2xsYXBzZScpLmNvbGxhcHNlKCdzaG93Jyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3RhYnNfaGlkZGVuJyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuYWRkQ2xhc3MoJ3RhYnNfc2hvd2VkJyk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3RhYnMgdWwgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkKHRoaXMpLmJsdXIoKTtcclxuXHRcdFx0JCh0aGlzKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xyXG5cdFx0XHQkKCcjJyArICQodGhpcykuYXR0cignYXJpYS1jb250cm9scycpKS5wYXJlbnQoKS5jb2xsYXBzZSgnaGlkZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG4gICAgXHJcblx0JCgnI3RhYnMnKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5yZW1vdmVDbGFzcygndGFic19oaWRkZW4nKTtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5hZGRDbGFzcygndGFic19zaG93ZWQnKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdGFicycpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3RhYnNfc2hvd2VkJyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuYWRkQ2xhc3MoJ3RhYnNfaGlkZGVuJyk7XHJcblx0fSk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBUYWJzIG1pbmltaXplXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjdGFicycpLnRyaWdnZXIoJ3Nob3cuYnMudGFiJyk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBUYWJsZV9jb250YWluZXJcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyN0YWJsZV9jb250YWluZXIsICN2dWVzLCAjdGFibGUnKS5vbignYWpheC5iZWZvcmVTZW5kJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHJcblx0XHRpZiAoZS50YXJnZXQgIT09IHRoaXMpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0JCgnI3RhYmxlJykuaGlkZSgpO1xyXG5cdFx0XHJcblx0XHQkKCcjc3Bpbm5lcicpXHJcblx0XHRcdC5zaG93KClcclxuXHRcdFx0LmVtcHR5KClcclxuXHRcdFx0LmFwcGVuZChnbG9iYWwuaWNvbi5sb2FkaW5nKVxyXG5cdFx0O1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN0YWJsZV9jb250YWluZXInKS5vbignYWpheC5zdWNjZXNzJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHJcblx0XHRpZiAoZS50YXJnZXQgIT09IHRoaXMpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0JCgnI3NwaW5uZXInKS5lbXB0eSgpO1xyXG5cdFx0XHJcblx0XHQvL3NldHVwIGpzIGRhdGFzXHJcblx0XHRzZXR1cChyZXN1bHQpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN0YWJsZV9jb250YWluZXInKS5vbignYWpheC5jb21wbGV0ZWQnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcblx0XHRcclxuXHRcdGlmIChlLnRhcmdldCAhPT0gdGhpcykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRmaWxsU2VyaWVzUGFubmVsKCk7XHJcblx0XHRmaWxsRGlzcGxheVBhbm5lbCgpO1xyXG5cdFx0XHJcblx0XHQvL3NldHVwIHVybFxyXG5cdFx0dXJsU2VhcmNoLnNldEZyb21Vcmwod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblx0XHRcclxuXHRcdHVybFNlYXJjaC5nZXRWdWVzKCk7XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBWdWVzXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjdnVlcycpLm9uKCdhamF4LnN1Y2Nlc3MnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcblx0XHRcclxuXHRcdGlmIChlLnRhcmdldCAhPT0gdGhpcykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHRcclxuXHRcdCQoJyN2dWVzJykuZW1wdHkoKTtcclxuXHRcdFxyXG5cdFx0Zm9yIChsZXQgdnVlIG9mIHJlc3VsdCkge1xyXG5cdFx0XHRcclxuXHRcdFx0ZGl2ID0gJCgnI3Z1ZXMnKVxyXG5cdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2J0bi1ncm91cCBtLTEnKVxyXG5cdFx0XHRcdC5hdHRyKCdyb2xlJywgJ2dyb3VwJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0YnRuID0gZGl2LmFwcGVuZChjcmVhdGUuYnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdC5hdHRyKCdkYXRhLWlkJywgdnVlLmlkKVxyXG5cdFx0XHRcdC50ZXh0KHZ1ZS5uYW1lKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3Z1ZScsIHZ1ZS5pZCk7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdCQodGhpcykuYmx1cigpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGlmICh2dWVbJ2VkaXRfdXJsJ10gJiYgdnVlWydkZWxldGVfdXJsJ10pIHtcclxuXHRcdFx0XHRkaXYyID0gZGl2LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdidG4tZ3JvdXAnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ3JvbGUnLCAnZ3JvdXAnKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRidG4yID0gZGl2Mi5hcHBlbmQoY3JlYXRlLmJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpXHJcblx0XHRcdFx0XHQuYXR0cignYXJpYS1oYXNwb3B1cCcsIHRydWUpXHJcblx0XHRcdFx0XHQuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRkaXYzID0gZGl2Mi5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnZHJvcGRvd24tbWVudScpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRpdjMuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdkcm9wZG93bi1pdGVtIHRleHQtc3VjY2VzcycpXHJcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGdsb2JhbC5hamF4LnNldCgnI21vZGFsJywgdnVlWydlZGl0X3VybCddLCB7bW9kYWw6IHRydWV9KTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQudGV4dCgkLmkxOG4oJ2VkaXQnKSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ZGl2My5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2Ryb3Bkb3duLWl0ZW0gdGV4dC1kYW5nZXInKVxyXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRnbG9iYWwuYWpheC5zZXQoJyNtb2RhbCcsIHZ1ZVsnZGVsZXRlX3VybCddLCB7bW9kYWw6IHRydWUsIGZyb206IHRoaXN9KTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQudGV4dCgkLmkxOG4oJ2RlbGV0ZScpKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gRHJhZ3RhYmxlXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcbi8vXHRcdHZhciBkcmFnZ2VyID0gdGFibGVEcmFnZ2VyLmRlZmF1bHQoJCgndGFibGUnKS5nZXQoMCksIHtcclxuLy9cdCAgICAgICAgbW9kZTogJ2NvbHVtbicsXHJcbi8vXHRcdH0pO1xyXG5cdFxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2dWVzJykub24oJ2FqYXguY29tcGxldGVkJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHJcblx0XHRpZiAoZS50YXJnZXQgIT09IHRoaXMpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3Z1ZV9uZXcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGdsb2JhbC5hamF4LnNldCgnI21vZGFsJywgJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1VybCgpLCB7bW9kYWw6IHRydWV9KTtcclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFRhYmxlXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjdGFibGUnKS5vbignYWpheC5zdWNjZXNzJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHJcblx0XHRpZiAoZS50YXJnZXQgIT09IHRoaXMpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHJcblx0XHQkKCcjc3Bpbm5lcicpLmVtcHR5KCk7XHJcblx0XHQkKCcjdGFibGUgPiB0Ym9keScpLmVtcHR5KCk7XHJcblx0XHQkKCcjdGFibGUnKS5zaG93KCk7XHJcblx0XHRpZiAocmVzdWx0ID09IGZhbHNlKSByZXR1cm47XHJcblx0XHRcclxuLy9cdFx0Y29uc29sZS5sb2cocmVzdWx0LnF1ZXJ5KTtcclxuLy9cdFx0Y29uc29sZS5sb2cocmVzdWx0LmRhdGFzKTtcclxuXHRcdFxyXG5cdFx0bGV0IHNlYXJjaFVybCA9ICQucGFyYW0ocmVzdWx0LnF1ZXJ5KTtcclxuXHRcdHVybFNlYXJjaC5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFVybCk7XHJcblx0XHR1cmxTZWFyY2guZGVsZXRlKCdpZFtdJyk7XHJcblx0XHRcclxuXHRcdC8vdnVlXHJcblx0XHQkKCcjdnVlcycpLmZpbmQoJ2J1dHRvbltkYXRhLWlkXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICgkKHRoaXMpLmRhdGEoJ2lkJykgPT0gdXJsU2VhcmNoLmdldCgndnVlJykpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tb3V0bGluZS1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCdkaXYgPiBidXR0b24nKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBkcm9wZG93bi10b2dnbGUnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tcHJpbWFyeScpO1xyXG5cdFx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnZGl2ID4gYnV0dG9uJykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1wcmltYXJ5IGRyb3Bkb3duLXRvZ2dsZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0Ly9zZXJpZXNcclxuXHRcdGZvciAobGV0IHNlcmllIG9mIGdwZXhlLnNlcmllcykge1xyXG5cdFx0XHRpZiAocmVzdWx0LnNlcmllICYmIHNlcmllLmlkID09IHJlc3VsdC5zZXJpZSkge1xyXG5cdFx0XHRcdHNlcmllLmJ0bi5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnknKTtcclxuXHRcdFx0XHRzZXJpZS5idG4uYWRkQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXJpZS5idG4ucmVtb3ZlQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0XHRzZXJpZS5idG4uYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5Jyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Zm9yIChsZXQgaGVhZGVyIG9mIGdwZXhlLmhlYWRlcnMpIHtcclxuXHRcdFx0XHJcblx0XHRcdC8vZGlzcGxheVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGRpc3BsYXkgPSByZXN1bHQucXVlcnkuZGlzcGxheVtoZWFkZXIuaWRdKSB7XHJcblxyXG5cdFx0XHRcdGhlYWRlci5hRGlzcGxheS5hZGRDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeScpO1xyXG5cdFx0XHRcdGhlYWRlci5hRGlzcGxheS5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnknKTtcclxuXHRcdFx0XHRoZWFkZXIuY2h4RGlzcGxheS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0aGVhZGVyLnNldFdpZHRoKGRpc3BsYXkpO1xyXG5cdFx0XHRcdGhlYWRlci50aC5zaG93KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9oZWFkZXJzXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duLmVtcHR5KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aGVhZGVyLmlzRmlsdGVyZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRoZWFkZXIuaXNTb3J0ZWRBc2MgPSBmYWxzZTtcclxuXHRcdFx0XHRoZWFkZXIuaXNTb3J0ZWREZXNjID0gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKGhlYWRlci5oYXNTb3J0KSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAoZWxlbWVudCBvZiBoZWFkZXIuZWxlbWVudHMpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gZWxlbWVudC5pZCkge1xyXG5cdFx0XHRcdFx0XHRcdGhlYWRlci5pc1NvcnRlZEFzYyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IGVsZW1lbnQuaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRoZWFkZXIuaXNTb3J0ZWREZXNjID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChoZWFkZXIuaGFzRmlsdGVyKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAoZWxlbWVudCBvZiBoZWFkZXIuZWxlbWVudHMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZmlsdGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChlbGVtZW50LmZpbHRlci50eXBlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIHR5cGUuYm9vbDpcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgdHlwZS50ZXh0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmhhcygnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ10nKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlYWRlci5pc0ZpbHRlcmVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIHR5cGUuZGF0ZTpcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgdHlwZS5saXN0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmhhcygnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVhZGVyLmlzRmlsdGVyZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoKGhlYWRlci5pc0ZpbHRlcmVkKT9nbG9iYWwuaWNvbi5mdW5uZWxGaWxsOmdsb2JhbC5pY29uLmZ1bm5lbCk7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChoZWFkZXIuaXNTb3J0ZWRBc2MpIHtcclxuXHRcdFx0XHRcdGhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoZ2xvYmFsLmljb24uYXJyb3dVcCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChoZWFkZXIuaXNTb3J0ZWREZXNjKSB7XHJcblx0XHRcdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGdsb2JhbC5pY29uLmFycm93RG93bik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGhlYWRlci5hRGlzcGxheS5hZGRDbGFzcygnYnRuLXByaW1hcnknKTtcclxuXHRcdFx0XHRoZWFkZXIuYURpc3BsYXkucmVtb3ZlQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0XHRoZWFkZXIuY2h4RGlzcGxheS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdGhlYWRlci50aC5oaWRlKCk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0XHRmb3IgKGxldCBkYXRhIG9mIHJlc3VsdC5kYXRhcykge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHRyID0gJCgnI3RhYmxlID4gdGJvZHknKS5hcHBlbmQoY3JlYXRlLnRyKS5jaGlsZHJlbigpLmxhc3QoKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBkaXYgPSB0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ2NfJyArIGRhdGEudmVyc2lvbl9pZClcclxuXHRcdFx0XHQudmFsKGRhdGEudmVyc2lvbl9pZClcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgdXJsU2VhcmNoLmxpbmVDaGVja2VkLmJpbmQodXJsU2VhcmNoKSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ2ZvcicsICdjXycgKyBkYXRhLnZlcnNpb25faWQpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGZvciAobGV0IGhlYWRlciBvZiBncGV4ZS5oZWFkZXJzKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFsdWUgPSBkYXRhW2hlYWRlci5pZF07XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKGhlYWRlci5pZCA9PSAnc3RhdHVzX3R5cGUnKSB7XHJcblx0XHRcdFx0XHRcdHZhbHVlID0gaGVhZGVyLmVsZW1lbnRzWzBdLmZpbHRlci5jaG9pY2VzW3ZhbHVlXS50ZXh0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzd2l0Y2ggKGhlYWRlci50eXBlKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgdHlwZS5ib29sOlxyXG5cdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0ZXh0LWNlbnRlcic7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHZhbHVlID09IDAgfHwgdmFsdWUgPT0gbnVsbCkgdmFsdWUgPSAkLmkxOG4oJ25vJyk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHZhbHVlID09IDEpIHZhbHVlID0gJC5pMThuKCd5ZXMnKTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSB0eXBlLmRhdGU6XHJcblx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3RleHQtY2VudGVyJztcclxuXHRcdFx0XHRcdFx0XHRpZiAodmFsdWUgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlID0gdmFsdWUudG9EYXRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh2YWx1ZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQvL2hpZ2hsaWdodFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnaGlnaGxpZ2h0JykudG9TdHJpbmcoKSA9PSBoZWFkZXIuaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR8fCAodXJsU2VhcmNoLmdldCgnaGlnaGxpZ2h0JykudG9TdHJpbmcoKSA9PSAndmVyc2lvbl9kYXRlJyAmJiBoZWFkZXIuaWQgPT0gJ3ZlcnNpb25fc2NoZWR1bGVkX2RhdGUnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICh2YWx1ZSA8IG5ldyBEYXRlKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyLmFkZENsYXNzKCdoaWdobGlnaHQtbGF0ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUuYWRkRGF5cygtMTUpIDwgbmV3IERhdGUoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHIuYWRkQ2xhc3MoJ2hpZ2hsaWdodC0xNScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUuYWRkRGF5cygtMzApIDwgbmV3IERhdGUoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHIuYWRkQ2xhc3MoJ2hpZ2hsaWdodC0zMCcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ci5hZGRDbGFzcygnaGlnaGxpZ2h0LW9rJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlID0gdmFsdWUuZm9ybWF0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIHR5cGUubGluazpcclxuXHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndGV4dC1jZW50ZXInO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdudW1iZXInOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndGV4dC1yaWdodCc7XHJcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndGV4dC1sZWZ0JztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHZhbHVlID0gJyc7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCB0ZCA9IHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcyhkYXRhQ2xhc3MpXHJcblx0XHRcdFx0XHRcdC50ZXh0KHZhbHVlKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoaGVhZGVyLnBlcm1pc3Npb25zLndyaXRlKSB7XHJcblx0XHRcdFx0XHRcdHRkLm9uKCdkYmxjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGdsb2JhbC5hamF4LnNldCh0aGlzLCAnL2dwZXhlL3Byb2plY3Qvc2VyaWUvZG9jdW1lbnQvdmVyc2lvbi8nICsgZGF0YVsndmVyc2lvbl9pZCddICsgJy9xdWlja19lZGl0LycgKyBoZWFkZXIuaWQpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdHRkLm9uKCdhamF4LmNvbXBsZXRlZCcsIGZ1bmN0aW9uKGUsIHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRsZXQgJGZvcm0gPSAkKHRoaXMpLmZpbmQoJ2Zvcm0nKS5jaGlsZHJlbigpLmZpcnN0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKCRmb3JtLmV4aXN0KCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCRmb3JtLm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGUud2hpY2ggPT0gMTMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLnN1Ym1pdCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0JCgnYm9keScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCRmb3JtLmlzKGUudGFyZ2V0KSA9PT0gZmFsc2UgJiYgJGZvcm0uaGFzKGUudGFyZ2V0KS5leGlzdCgpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCRmb3JtLnRyaWdnZXIoJ3N1Ym1pdCcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0c3dpdGNoIChoZWFkZXIudHlwZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjYXNlIHR5cGUuYm9vbDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0ID09IDAgfHwgcmVzdWx0ID09IG51bGwpIHJlc3VsdCA9ICQuaTE4bignbm8nKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0ID09IDEpIHJlc3VsdCA9ICQuaTE4bigneWVzJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgdHlwZS5kYXRlOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC50b0RhdGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLnJlbW92ZUF0dHIoJ2NsYXNzJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdCAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvL2hpZ2hsaWdodFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHVybFNlYXJjaC5nZXQoJ2hpZ2hsaWdodCcpLnRvU3RyaW5nKCkgPT0gaGVhZGVyLmlkXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHx8ICh1cmxTZWFyY2guZ2V0KCdoaWdobGlnaHQnKS50b1N0cmluZygpID09ICd2ZXJzaW9uX3NjaGVkdWxlZF9kYXRlJyAmJiBoZWFkZXIuaWQgPT0gJ3ZlcnNpb25fZGF0ZScpKSB7XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQgPCBuZXcgRGF0ZSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnaGlnaGxpZ2h0LWxhdGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmIChyZXN1bHQuYWRkRGF5cygtMTUpIDwgbmV3IERhdGUoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuYWRkQ2xhc3MoJ2hpZ2hsaWdodC0xNScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlc3VsdC5hZGREYXlzKC0zMCkgPCBuZXcgRGF0ZSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnaGlnaGxpZ2h0LTMwJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnaGlnaGxpZ2h0LW9rJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC5mb3JtYXQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdCQoJ2JvZHknKS5vZmYoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGhlYWRlci50aC5oaWRlKCk7XHJcblx0XHRcdFx0XHR0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuaGlkZSgpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2J0bi1zdWNjZXNzIHctMTAwJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLXVybCcsIGRhdGEuZGV0YWlsVXJsKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ21vZGFsIGFqYXgnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdGFyZ2V0JywgJyNtb2RhbF9kZXRhaWwnKVxyXG5cdFx0XHRcdFx0LnRleHQoJC5pMThuKCdkZXRhaWxzJykpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vcGFnaW5hdGlvblxyXG5cdFx0JCgnI3BhZ2luYXRpb24nKS5lbXB0eSgpO1xyXG5cdFx0XHRcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5hZGRDbGFzcygnbWItNCcpO1xyXG5cdFx0XHJcblx0XHRsZXQgcGFnZU1heCA9IHJlc3VsdC5wYWdlTWF4O1xyXG5cdFx0bGV0IHBhZ2UgPSBwYXJzZUludCh1cmxTZWFyY2guZ2V0KCdwYWdlJykpIHx8IDE7XHJcblx0XHRwYWdlID0gTWF0aC5tYXgoTWF0aC5taW4ocGFnZSwgcGFnZU1heCksIDEpO1xyXG5cdFx0XHJcblx0XHRkaXYgPSAkKCcjcGFnaW5hdGlvbicpLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3JvdyBtLTAnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnY29sJylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dWwgPSBkaXYuYXBwZW5kKGNyZWF0ZS51bCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdwYWdpbmF0aW9uIGNvbCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0aWYgKHJlc3VsdC5wYWdlTWF4ID4gMSkge1xyXG5cdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSAxKT8nIGRpc2FibGVkJzonJykpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKHBhZ2UgPiAxKSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3BhZ2UnLCBwYWdlIC0gMSk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIE1hdGgubWF4KDEsIHBhZ2UgLSAxKSlcclxuXHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpXHJcblx0XHRcdFx0XHRcdC5odG1sKCcmbGFxdW87JylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHBhZ2VTdGFydCA9IE1hdGgubWluKE1hdGgubWF4KDEsIHBhZ2UgLSAyKSwgTWF0aC5tYXgoMSwgcmVzdWx0LnBhZ2VNYXggLSA0KSk7XHJcblx0XHRcdGxldCBwYWdlRW5kID0gTWF0aC5taW4ocGFnZVN0YXJ0ICsgNSwgcGFnZU1heCk7XHJcblx0XHRcdFxyXG5cdFx0XHRmb3IgKGxldCBpID0gcGFnZVN0YXJ0OyBpIDw9IHBhZ2VFbmQ7IGkrKykge1xyXG5cdFx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gaSk/JyBhY3RpdmUnOicnKSlcclxuXHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgncGFnZScsIGkpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIGkpXHJcblx0XHRcdFx0XHRcdC50ZXh0KGkpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSBwYWdlTWF4KT8nIGRpc2FibGVkJzonJykpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKHBhZ2UgPCBwYWdlTWF4KSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3BhZ2UnLCBwYWdlICsgMSk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIE1hdGgubWluKHBhZ2VNYXgsIHBhZ2UgKyAxKSlcclxuXHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpXHJcblx0XHRcdFx0XHRcdC5odG1sKCcmcmFxdW87JylcclxuXHRcdFx0O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRzZWxlY3QgPSBkaXYuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG10LTEgbXItNScpXHJcblx0XHRcdC5hcHBlbmQoY3JlYXRlLnNlbGVjdCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGJnLWRhcmsgYm9yZGVyLXNlY29uZGFyeSB0ZXh0LXdoaXRlJylcclxuXHRcdFx0LmNzcygnd2lkdGgnLCAnMTUwJylcclxuXHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR1cmxTZWFyY2guc2V0KCdyZXN1bHRzX3Blcl9wYWdlJywgJCh0aGlzKS52YWwoKSlcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0bGV0IHJlc3VsdHNQZXJQYWdlID0gbmV3IE1hcChbWycxMCcsIDEwXSwgWyc1MCcsIDUwXSwgWycxMDAnLCAxMDBdLCBbJC5pMThuKCdhbGwnKSwgJzAnXV0pO1xyXG5cdFx0Zm9yIChsZXQgW3RleHQsIHZhbHVlXSBvZiByZXN1bHRzUGVyUGFnZSkge1xyXG5cdFx0XHRzZWxlY3QuYXBwZW5kKGNyZWF0ZS5vcHRpb24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ3ZhbHVlJywgdmFsdWUpXHJcblx0XHRcdFx0LmF0dHIoJ3NlbGVjdGVkJywgdXJsU2VhcmNoLmdldCgncmVzdWx0c19wZXJfcGFnZScpID09IHZhbHVlKVxyXG5cdFx0XHRcdC50ZXh0KHRleHQpXHJcblx0XHRcdDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0XHQvL2ZsYXNoZXNcclxuXHRcdFxyXG5cdFx0JCgnI3RvYXN0JykuZW1wdHkoKTtcclxuXHRcdFxyXG5cdFx0Zm9yIChsZXQgbGFiZWwgb2YgT2JqZWN0LmtleXMocmVzdWx0LmZsYXNoKSkge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGRpdlRvYXN0ID0gJCgnI3RvYXN0JykuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCd0b2FzdCcpXHJcblx0XHRcdFx0LmF0dHIoJ3JvbGUnLCAnYWxlcnQnKVxyXG5cdFx0XHRcdC5hdHRyKCdkYXRhLWRlbGF5JywgNTAwMClcclxuXHRcdFx0XHQuYXR0cignYXJpYS1saXZlJywgJ2Fzc2VydGl2ZScpXHJcblx0XHRcdFx0LmF0dHIoJ2FyaWEtYXRvbWljJywgdHJ1ZSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGRpdkNvbnRhaW5lciA9IGRpdlRvYXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnYWxlcnQgYWxlcnQtJyArIGxhYmVsICsgJyBkLWZsZXggcHgtMyBtLTAnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRkaXZDb250YWluZXIuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdhbGlnbi1zZWxmLWNlbnRlcicpXHJcblx0XHRcdFx0LmFwcGVuZChnbG9iYWwuaWNvbltsYWJlbF0pXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGxldCB1bEJvZHkgPSBkaXZDb250YWluZXIuYXBwZW5kKGNyZWF0ZS51bCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2p1c3RpZnktY29udGVudC1jZW50ZXIgZmxleC1maWxsJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0ZGl2Q29udGFpbmVyLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnanVzdGlmeS1jb250ZW50LWVuZCcpXHJcblx0XHRcdFx0LmFwcGVuZChnbG9iYWwuaWNvbi5jbG9zZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAocmVzdWx0LmZsYXNoW2xhYmVsXS5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgbWVzc2FnZSBvZiByZXN1bHQuZmxhc2hbbGFiZWxdKSB7XHJcblx0XHRcdFx0XHR1bEJvZHkuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LnRleHQobWVzc2FnZSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dWxCb2R5LnRleHQocmVzdWx0LmZsYXNoW2xhYmVsXVswXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGRpdlRvYXN0LnRvYXN0KCdzaG93Jyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHVybFNlYXJjaC5saW5lQ2hlY2tlZCgpO1xyXG5cdFx0XHJcblx0XHRnbG9iYWwuYWpheC5mZXRjaCgnI3RhYmxlID4gdGJvZHknKTtcclxuLy9cdFx0JCgndGFibGUnKS5zdGlja3lUYWJsZUhlYWRlcnMoKVxyXG5cdFx0XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3RhYmxlJykub24oJ2FqYXguY29tcGxldGVkJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cclxuXHRcdGlmIChlLnRhcmdldCAhPT0gdGhpcykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0fSk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBRdWljayBlZGl0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIE1vZGFsXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjbW9kYWxfZGV0YWlsJykub24oJ2FqYXguY29tcGxldGVkJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHJcblx0XHQkKGUudGFyZ2V0KS5maW5kKCcjdmVyc2lvbl9lZGl0X2RldGFpbCwgI3ZlcnNpb25fZGVsZXRlX2RldGFpbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRnbG9iYWwuYWpheC5zZXQoJyNtb2RhbCcsICQodGhpcykuZGF0YSgndXJsJykgKyAnP2lkW109JyArICQoJyN2ZXJzaW9uX3RhYnM+YS5hY3RpdmUnKS5kYXRhKCdpZCcpICsgJyZtb2RhbD0xJywge2Zyb206IHRoaXN9KTtcclxuXHQgICAgfSk7XHJcblx0XHRcclxuXHR9KTtcclxuXHRcdFxyXG5cdCQoJyNtb2RhbCcpLm9uKCdhamF4LnN1Y2Nlc3MnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcblx0XHRcclxuXHRcdGlmIChyZXN1bHQgPT09ICcnKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQkKCcjbW9kYWxfY29udGFpbmVyJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdFx0XHJcblx0XHRcdCQoJyNtb2RhbF9kZXRhaWxfY29udGFpbmVyJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcclxuXHRcdH0gZWxzZSBpZiAoJCgnPGRpdj4nICsgcmVzdWx0ICsgJzwvZGl2PicpLmZpbmQoJ2Rpdi5tb2RhbC1ib2R5JykuZXhpc3QoKSkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0gZWxzZSBpZiAoJCgnPGRpdj4nICsgcmVzdWx0ICsgJzwvZGl2PicpLmZpbmQoJ3ByZS5zZi1kdW1wJykuZXhpc3QoKSkgeyAvL2ZvciBkZWJ1ZyBvbmx5XHJcblx0XHRcdHJldHVybiB0cnVlO1x0XHJcblx0XHR9XHJcblx0XHQkKCcjbW9kYWxfY29udGFpbmVyJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdFxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNtb2RhbF9kZXRhaWxfY29udGFpbmVyJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gU2V0dXBcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdGxldCB1cmwgPSAkKCcjdGFibGVfY29udGFpbmVyJykuZGF0YSgndXJsJyk7XHJcblx0Z2xvYmFsLmFqYXguc2V0KCcjdGFibGVfY29udGFpbmVyJywgdXJsKTtcclxuXHRcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==