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
  var th = tr.append(create.th).children().last().css('width', '2em');
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
            var _iterator18 = _createForOfIteratorHelper(header.elements),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                element = _step18.value;

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
              _iterator18.e(err);
            } finally {
              _iterator18.f();
            }

            var _iterator19 = _createForOfIteratorHelper(header.elements),
                _step19;

            try {
              for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                element = _step19.value;

                if (element.sort) {
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
  //	for (let header of gpexe.headers) {
  //		colDrag(header);
  //	}

  function createMenu(header) {
    if (header.hasSort || header.hasFilter) {
      header.divDropdownMenu.empty();

      if (header.elements.length == 1) {
        createMenuItem(header, header.elements[0]);
      } else {
        var _iterator3 = _createForOfIteratorHelper(header.elements),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var element = _step3.value;

            if (element.filter || element.sort) {
              createMenuItem(header, element); //header if many selects

              element.divContent.prepend(create.div).children().first().addClass('text-center border-bottom border-dark pb-2 px-1').append(element.title);
            }
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
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
            var _iterator4 = _createForOfIteratorHelper(header.elements),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _element = _step4.value;

                if (_element.filter) {
                  _element.filter.divFilter.trigger('filter.update');
                }
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
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
            var _iterator5 = _createForOfIteratorHelper(header.elements),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _element2 = _step5.value;

                if (_element2.filter) {
                  _element2.filter.divFilter.trigger('filter.update');
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

        case type.list:
          element.filter.divFilter.on('filter.update', function () {
            urlSearch["delete"]('filter[' + element.id + '][]');

            if (element.filter.choices[0].chx.is(':checked') === false) {
              var _iterator6 = _createForOfIteratorHelper(element.filter.choices),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var choice = _step6.value;

                  if (choice.chx.is(':checked')) {
                    urlSearch.append('filter[' + element.id + '][]', choice.value);
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
            }
          }).on('click', function () {
            var _iterator7 = _createForOfIteratorHelper(header.elements),
                _step7;

            try {
              for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var _element3 = _step7.value;

                if (_element3.filter) {
                  _element3.filter.divFilter.trigger('filter.update');
                }
              }
            } catch (err) {
              _iterator7.e(err);
            } finally {
              _iterator7.f();
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

          var _iterator8 = _createForOfIteratorHelper(element.filter.choices),
              _step8;

          try {
            var _loop = function _loop() {
              var choice = _step8.value;
              choice.div = element.filter.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
              choice.chx = choice.div.append(create.checkbox).children().last().attr('id', element.id + '_' + choice.value);
              choice.div.append(create.label).children().last().attr('for', element.id + '_' + choice.value).text(choice.text);

              if (choice.value == -1) {
                choice.chx.attr('checked', !urlSearch.get('filter[' + element.id + ']')).on('click', function () {
                  var _iterator9 = _createForOfIteratorHelper(element.filter.choices),
                      _step9;

                  try {
                    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                      var _choice = _step9.value;

                      _choice.chx.prop('checked', false);
                    }
                  } catch (err) {
                    _iterator9.e(err);
                  } finally {
                    _iterator9.f();
                  }

                  urlSearch["delete"]('filter[' + element.id + ']');
                  header.btnDropdown.dropdown('hide');
                  urlSearch["delete"]('vue');
                  urlSearch.fetch();
                });
              } else {
                choice.chx.attr('checked', parseInt(urlSearch.get('filter[' + element.id + ']')) === choice.value).on('click', function () {
                  var _iterator10 = _createForOfIteratorHelper(element.filter.choices),
                      _step10;

                  try {
                    for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                      var _choice2 = _step10.value;

                      if (_choice2.chx != this) {
                        _choice2.chx.prop('checked', false);
                      }
                    }
                  } catch (err) {
                    _iterator10.e(err);
                  } finally {
                    _iterator10.f();
                  }

                  urlSearch.set('filter[' + element.id + ']', choice.value);
                  header.btnDropdown.dropdown('hide');
                  urlSearch["delete"]('vue');
                  urlSearch.fetch();
                });
              }
            };

            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
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
              var _iterator11 = _createForOfIteratorHelper(element.filter.choices),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var choice = _step11.value;
                  choice.div.show();
                  choice.chx.prop('checked', false);
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
              }
            } else {
              element.filter.choices[0].div.hide();

              var _iterator12 = _createForOfIteratorHelper(element.filter.choices),
                  _step12;

              try {
                for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                  var _choice3 = _step12.value;

                  if (_choice3.text.toLowerCase().indexOf(searchValue) == -1) {
                    _choice3.div.hide();

                    _choice3.chx.prop('checked', false);
                  } else {
                    _choice3.div.show();

                    _choice3.chx.prop('checked', true);
                  }
                }
              } catch (err) {
                _iterator12.e(err);
              } finally {
                _iterator12.f();
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

          var _iterator13 = _createForOfIteratorHelper(element.filter.choices),
              _step13;

          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var choice = _step13.value;
              choice.div = element.filter.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
              choice.chx = choice.div.append(create.checkbox).children().last().attr('id', element.id + '_' + choice.value);
              choice.div.append(create.label).children().last().attr('for', element.id + '_' + choice.value).text(choice.text);

              if (choice.value == -1) {
                choice.chx.on('change', function () {
                  var checked = $(this).is(':checked');

                  var _iterator14 = _createForOfIteratorHelper(element.filter.choices),
                      _step14;

                  try {
                    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                      var _choice4 = _step14.value;

                      _choice4.chx.prop('checked', checked);
                    }
                  } catch (err) {
                    _iterator14.e(err);
                  } finally {
                    _iterator14.f();
                  }
                });
              } else {
                choice.chx.attr('checked', urlSearch.get('filter[' + element.id + '][]').has(choice.value)).on('click', function () {
                  var checked = false;
                  var unchecked = false;

                  var _iterator15 = _createForOfIteratorHelper(element.filter.choices),
                      _step15;

                  try {
                    for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                      var _choice5 = _step15.value;

                      if ($(_choice5.chx).is(':checked') && _choice5.value != 1) {
                        checked = true;
                      } else {
                        unchecked = true;
                      }
                    }
                  } catch (err) {
                    _iterator15.e(err);
                  } finally {
                    _iterator15.f();
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
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }

          break;
      }
    }
  }

  function colResize(header) {
    if (header.th) {
      header.th.append(create.div).children().last().css('right', '0').addClass('col-resize-handle').on('mousedown', function (e) {
        var _iterator16 = _createForOfIteratorHelper(gpexe.headers),
            _step16;

        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var _header = _step16.value;

            if ($(e.target).parent().is(_header.th)) {
              gpexe.colResize = {
                header: _header,
                currentPosition: e.pageX,
                currentWidth: _header.th.width()
              };
            }
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
      });
      header.th.next().append(create.div).children().last().css('left', '0').addClass('col-resize-handle').on('mousedown', function (e) {
        var _iterator17 = _createForOfIteratorHelper(gpexe.headers),
            _step17;

        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var _header2 = _step17.value;

            if ($(e.target).parent().prevAll(':visible').first().is(_header2.th)) {
              gpexe.colResize = {
                header: _header2,
                currentPosition: e.pageX,
                currentWidth: _header2.th.width()
              };
            }
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
      });
    }
  }

  function colDrag(header) {
    if (header.th) {
      header.th.find('button[type="button"]').first().on('mousedown', function (e) {
        gpexe.colDrag = {
          id: header.id,
          th: header.th,
          currentPosition: e.pageX
        };
      });
    }
  }
} //---------------
// fillSeriesPannel
//---------------


function fillSeriesPannel() {
  var _iterator20 = _createForOfIteratorHelper(gpexe.series),
      _step20;

  try {
    for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
      var serie = _step20.value;
      serie.btn = $('#series').append(create.a).children().last().attr('role', 'button').addClass('btn btn-primary m-1').attr('href', serie.url).text(serie.name);
    }
  } catch (err) {
    _iterator20.e(err);
  } finally {
    _iterator20.f();
  }
} //---------------
//fillDisplayPannel
//---------------


function fillDisplayPannel() {
  var divCol = $('#display_panel').append(create.div).children().last().addClass('row py-2').append(create.div).children().last().addClass('col');

  var _iterator21 = _createForOfIteratorHelper(gpexe.headers),
      _step21;

  try {
    var _loop3 = function _loop3() {
      var header = _step21.value;
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

    for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
      _loop3();
    }
  } catch (err) {
    _iterator21.e(err);
  } finally {
    _iterator21.f();
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

    var _iterator22 = _createForOfIteratorHelper(result),
        _step22;

    try {
      var _loop4 = function _loop4() {
        var vue = _step22.value;
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

      for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
        _loop4();
      } //---------------------
      // Dragtable
      //---------------------
      //		var dragger = tableDragger.default($('table').get(0), {
      //	        mode: 'column',
      //		});

    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
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

    var _iterator23 = _createForOfIteratorHelper(gpexe.series),
        _step23;

    try {
      for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
        var serie = _step23.value;

        if (result.serie && serie.id == result.serie) {
          serie.btn.removeClass('btn-primary');
          serie.btn.addClass('btn-outline-primary');
        } else {
          serie.btn.removeClass('btn-outline-primary');
          serie.btn.addClass('btn-primary');
        }
      }
    } catch (err) {
      _iterator23.e(err);
    } finally {
      _iterator23.f();
    }

    var _iterator24 = _createForOfIteratorHelper(gpexe.headers),
        _step24;

    try {
      for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
        var header = _step24.value;

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
            var _iterator28 = _createForOfIteratorHelper(header.elements),
                _step28;

            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                element = _step28.value;

                if (urlSearch.get('sortAsc') == element.id) {
                  header.isSortedAsc = true;
                }

                if (urlSearch.get('sortDesc') == element.id) {
                  header.isSortedDesc = true;
                }
              }
            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
            }
          }

          if (header.hasFilter) {
            var _iterator29 = _createForOfIteratorHelper(header.elements),
                _step29;

            try {
              for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                element = _step29.value;

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
              _iterator29.e(err);
            } finally {
              _iterator29.f();
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
      } //tbody

    } catch (err) {
      _iterator24.e(err);
    } finally {
      _iterator24.f();
    }

    var _iterator25 = _createForOfIteratorHelper(result.datas),
        _step25;

    try {
      var _loop6 = function _loop6() {
        var data = _step25.value;
        var tr = $('#table > tbody').append(create.tr).children().last();
        var div = tr.append(create.td).children().last().append(create.div).children().last().addClass('custom-control custom-checkbox');
        div.append(create.checkbox).children().last().attr('id', 'c_' + data.version_id).val(data.version_id).on('click', urlSearch.lineChecked.bind(urlSearch));
        div.append(create.label).children().last().attr('for', 'c_' + data.version_id);

        var _iterator30 = _createForOfIteratorHelper(gpexe.headers),
            _step30;

        try {
          var _loop7 = function _loop7() {
            var header = _step30.value;
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
            }
          };

          for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
            _loop7();
          }
        } catch (err) {
          _iterator30.e(err);
        } finally {
          _iterator30.f();
        }

        tr.append(create.td).children().last().append(create.smallButton).children().last().addClass('btn-success w-100').attr('data-url', data.detailUrl).attr('data-toggle', 'modal ajax').attr('data-target', '#modal_detail').text($.i18n('details'));
      };

      for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
        _loop6();
      } //pagination

    } catch (err) {
      _iterator25.e(err);
    } finally {
      _iterator25.f();
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

    var _iterator26 = _createForOfIteratorHelper(resultsPerPage),
        _step26;

    try {
      for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
        var _step26$value = _slicedToArray(_step26.value, 2),
            text = _step26$value[0],
            _value = _step26$value[1];

        select.append(create.option).children().last().attr('value', _value).attr('selected', urlSearch.get('results_per_page') == _value).text(text);
      } //flashes

    } catch (err) {
      _iterator26.e(err);
    } finally {
      _iterator26.f();
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
        var _iterator27 = _createForOfIteratorHelper(result.flash[label]),
            _step27;

        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var message = _step27.value;
            ulBody.append(create.li).children().last().text(message);
          }
        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwiZ3BleGUiLCJoZWFkZXJzIiwiQXJyYXkiLCJzZXJpZXMiLCJ0YWJsZSIsImNoeENoZWNrYWxsIiwiY29sUmVzaXplIiwiY29sRHJhZyIsInR5cGUiLCJib29sIiwidGV4dCIsImRhdGUiLCJsaW5rIiwibGlzdCIsIkhlYWRlciIsImZpZWxkIiwiaWQiLCJ0aXRsZSIsInBlcm1pc3Npb25zIiwiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdF93aWR0aCIsImhhc1NvcnQiLCJlbGVtZW50cyIsInNvbWUiLCJ2Iiwic29ydCIsImhhc0ZpbHRlciIsImZpbHRlciIsInByb3RvdHlwZSIsInNldFdpZHRoIiwid2lkdGgiLCJ0aCIsImNzcyIsImluZGV4IiwicGFyZW50cyIsImZpbmQiLCJlYWNoIiwiVXJsU2VhcmNoIiwiX3BhcmFtc0FycmF5IiwiaGFzIiwia2V5IiwiZ2V0IiwiZXhlYyIsImdldEFsbCIsInNldCIsInZhbHVlIiwiYXBwZW5kIiwic2V0RnJvbVVybCIsInBhcmFtc0FycmF5IiwidG9VcmwiLCJ1cmwiLCJ0b1N0cmluZyIsInZhbHVlcyIsImkiLCJqb2luIiwiZmV0Y2giLCJkYXRhIiwiZ2xvYmFsIiwiYWpheCIsImdldFZ1ZXMiLCJsaW5lQ2hlY2tlZCIsImNoZWNrZWQiLCJ1bmNoZWNrZWQiLCJ0aGF0IiwiaXMiLCJwcm9wIiwidmFsIiwic2hvdyIsImhpZGUiLCJzZXR1cCIsImRhdGFzIiwidGhlYWQiLCJjcmVhdGUiLCJjaGlsZHJlbiIsImxhc3QiLCJ0ciIsImRpdiIsImFkZENsYXNzIiwiY2hlY2tib3giLCJhdHRyIiwib24iLCJ1cmxTZWFyY2giLCJsYWJlbCIsImZpZWxkcyIsImRpc3BsYXkiLCJoZWFkZXIiLCJqIiwiZWxlbWVudCIsImUiLCJjIiwiaTE4biIsImNob2ljZXMiLCJwdXNoIiwibmFtZSIsImEiLCJiIiwidW5zaGlmdCIsImRpdkRyb3Bkb3duR3JvdXAiLCJjbGlja0V2ZW50IiwiY29udGFpbnMiLCJyZWxhdGVkVGFyZ2V0IiwicGFyZW50Tm9kZSIsInRhcmdldCIsInByZXZlbnREZWZhdWx0IiwiZGl2RHJvcGRvd25NZW51IiwiZW1wdHkiLCJtZW51QnV0dG9uIiwiYnRuRHJvcGRvd24iLCJjcmVhdGVNZW51IiwidGJvZHkiLCJpc0VtcHR5T2JqZWN0IiwiTWF0aCIsIm1heCIsInJvdW5kIiwicHhUb1JlbSIsImN1cnJlbnRXaWR0aCIsInBhZ2VYIiwiY3VycmVudFBvc2l0aW9uIiwibGVuZ3RoIiwiY3JlYXRlTWVudUl0ZW0iLCJkaXZDb250ZW50IiwicHJlcGVuZCIsImZpcnN0IiwiZGl2QnV0dG9ucyIsInNtYWxsQnV0dG9uIiwiaWNvbiIsImFycm93RG93biIsImRpdkZpbHRlciIsInRyaWdnZXIiLCJjaHhJbmYiLCJyZXN1bHQiLCJpbnB1dEluZiIsImNoeFN1cCIsImlucHV0U3VwIiwiY2h4SGlnaGxpZ2h0IiwiZHJvcGRvd24iLCJzZWFyY2hWYWx1ZSIsImlucHV0U2VhcmNoIiwidG9Mb3dlckNhc2UiLCJjaHgiLCJjaG9pY2UiLCJhcnJvd1VwIiwiZGl2TGlzdCIsInBhcnNlSW50IiwiZGl2U2VhcmNoIiwiaW5wdXQiLCJ3aGljaCIsInNwYW4iLCJodG1sIiwidmFsdWVJbmYiLCJ2YWx1ZVN1cCIsImhpZ2hsaWdodCIsImRpdkluZiIsInRlc3QiLCJsYWJlbEluZiIsImRhdGVwaWNrZXIiLCJzdG9wUHJvcGFnYXRpb24iLCJkaXZTdXAiLCJsYWJlbFN1cCIsImRpdkhpZ2hsaWdodCIsImluZGV4T2YiLCJwYXJlbnQiLCJuZXh0IiwicHJldkFsbCIsImZpbGxTZXJpZXNQYW5uZWwiLCJzZXJpZSIsImJ0biIsImZpbGxEaXNwbGF5UGFubmVsIiwiZGl2Q29sIiwiYURpc3BsYXkiLCJjaHhEaXNwbGF5IiwiZG9jdW1lbnQiLCJyZWFkeSIsImZyb20iLCJjb2xsYXBzZSIsInJlbW92ZUNsYXNzIiwiaGFzQ2xhc3MiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJibHVyIiwidGV4dFN0YXR1cyIsImpxWEhSIiwibG9hZGluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwidnVlIiwiYnV0dG9uIiwiZGl2MiIsImJ0bjIiLCJkaXYzIiwibW9kYWwiLCJzZWFyY2hVcmwiLCJwYXJhbSIsInF1ZXJ5IiwiaXNGaWx0ZXJlZCIsImlzU29ydGVkQXNjIiwiaXNTb3J0ZWREZXNjIiwiZnVubmVsRmlsbCIsImZ1bm5lbCIsInRkIiwidmVyc2lvbl9pZCIsImJpbmQiLCJ1bmRlZmluZWQiLCJkYXRhQ2xhc3MiLCJ0b0RhdGUiLCJEYXRlIiwiYWRkRGF5cyIsImZvcm1hdCIsIndyaXRlIiwiJGZvcm0iLCJleGlzdCIsInN1Ym1pdCIsInJlbW92ZUF0dHIiLCJvZmYiLCJkZXRhaWxVcmwiLCJwYWdlTWF4IiwicGFnZSIsIm1pbiIsInVsIiwibGkiLCJwYWdlU3RhcnQiLCJwYWdlRW5kIiwic2VsZWN0IiwicmVzdWx0c1BlclBhZ2UiLCJNYXAiLCJvcHRpb24iLCJPYmplY3QiLCJrZXlzIiwiZmxhc2giLCJkaXZUb2FzdCIsImRpdkNvbnRhaW5lciIsInVsQm9keSIsImNsb3NlIiwibWVzc2FnZSIsInRvYXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLDhEQUFELENBQXRCLEMsQ0FDQTtBQUNBO0FBQ0E7OztBQUNBQSxtQkFBTyxDQUFDLHdEQUFELENBQVA7O0FBQ0EsSUFBTUUsZUFBZSxHQUFHRixtQkFBTyxDQUFD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LENBQWdCLGtCQUFoQixFQUFvQ00sR0FBcEM7QUFFQSxDQWxxQkQsRSIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuY29uc3QgcG9wcGVyID0gcmVxdWlyZSgncG9wcGVyLmpzJyk7XHJcbi8vcmVxdWlyZSgnc3RpY2t5LXRhYmxlLWhlYWRlcnMnKTtcclxuLy9jb25zdCB0YWJsZURyYWdnZXIgPSByZXF1aXJlKCd0YWJsZS1kcmFnZ2VyJyk7XHJcbi8vcmVxdWlyZSgnanF1ZXJ5LXJlc2l6YWJsZS1jb2x1bW5zJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9kb2N1bWVudC5zY3NzJyk7XHJcbmNvbnN0IFVSTFNlYXJjaFBhcmFtcyA9IHJlcXVpcmUoJ0B1bmdhcC91cmwtc2VhcmNoLXBhcmFtcy9janMnKTtcclxuXHJcbnZhciBncGV4ZSA9IHtcclxuXHRoZWFkZXJzOiBuZXcgQXJyYXkoKSxcclxuXHRzZXJpZXM6IFtdLFxyXG5cdHRhYmxlOiBudWxsLFxyXG5cdGNoeENoZWNrYWxsOiBudWxsLFxyXG5cdGNvbFJlc2l6ZToge30sXHJcblx0Y29sRHJhZzoge30sXHJcbn1cclxuXHJcbmNvbnN0IHR5cGUgPSB7XHJcblx0Ym9vbDogMTEsXHJcblx0dGV4dDogMTIsXHJcblx0ZGF0ZTogMTMsXHJcblx0bGluazogMTQsXHJcblx0bGlzdDogMTUsXHJcbn07XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy9IZWFkZXJcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIEhlYWRlcihmaWVsZCkge1xyXG5cdHRoaXMuaWQgPSBmaWVsZC5pZDtcclxuXHR0aGlzLnRpdGxlID0gZmllbGQudGl0bGU7XHJcblx0dGhpcy50eXBlID0gZmllbGQudHlwZTtcclxuXHR0aGlzLnBlcm1pc3Npb25zID0gZmllbGQucGVybWlzc2lvbnM7XHJcblx0dGhpcy5kZWZhdWx0V2lkdGggPSBmaWVsZC5kZWZhdWx0X3dpZHRoO1xyXG5cdHRoaXMuaGFzU29ydCA9IChmaWVsZC5lbGVtZW50cyAmJiBmaWVsZC5lbGVtZW50cy5zb21lKHYgPT4gdi5zb3J0ID09PSB0cnVlKSk7XHJcblx0dGhpcy5oYXNGaWx0ZXIgPSAoZmllbGQuZWxlbWVudHMgJiYgZmllbGQuZWxlbWVudHMuc29tZSh2ID0+IHYuZmlsdGVyKSk7XHJcblx0dGhpcy5lbGVtZW50cyA9IFtdO1xyXG59XHJcblxyXG5IZWFkZXIucHJvdG90eXBlID0ge1xyXG5cdFxyXG5cdHNldFdpZHRoOiBmdW5jdGlvbih3aWR0aCkge1xyXG5cdFx0aWYgKHRoaXMudGgpIHtcclxuXHRcdFx0dGhpcy50aC5jc3MoJ3dpZHRoJywgd2lkdGggKyAncmVtJyk7XHJcblx0XHRcdHRoaXMudGguY3NzKCdtaW4td2lkdGgnLCB3aWR0aCArICdyZW0nKTtcclxuXHRcdFx0dGhpcy50aC5jc3MoJ21heC13aWR0aCcsIHdpZHRoICsgJ3JlbScpO1xyXG5cdFx0XHRsZXQgaW5kZXggPSB0aGlzLnRoLmluZGV4KCkgKyAxO1xyXG5cdFx0XHQkKHRoaXMudGgpLnBhcmVudHMoJ3RhYmxlJykuZmluZCgndGQ6bnRoLWNoaWxkKCcgKyBpbmRleCArICcpJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmNzcygnbWF4LXdpZHRoJywgd2lkdGggKyAncmVtJyk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcbn1cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vL1VybFNlYXJjaFxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gVXJsU2VhcmNoICgpIHtcclxuXHR0aGlzLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxufVxyXG5cclxuVXJsU2VhcmNoLnByb3RvdHlwZSA9IHtcclxuXHJcblx0aGFzOiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdHJldHVybiB0aGlzLl9wYXJhbXNBcnJheS5oYXMoa2V5KTtcclxuXHR9LFxyXG5cdFxyXG5cdGdldDogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRpZiAoL1xcUytcXFtcXF0vZy5leGVjKGtleSkpIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmdldEFsbChrZXkpIHx8IFtdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmdldChrZXkpIHx8ICcnO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0c2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRpZiAoa2V5ID09ICd2dWUnKSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7J3Z1ZSc6IHZhbHVlfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheS5zZXQoa2V5LCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRhcHBlbmQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHRcdGlmIChrZXkgPT0gJ3Z1ZScpIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsndnVlJzogdmFsdWV9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5LmFwcGVuZChrZXksIHZhbHVlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdGRlbGV0ZTogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHR0aGlzLl9wYXJhbXNBcnJheS5kZWxldGUoa2V5KTtcclxuXHR9LFxyXG5cdFxyXG5cdHNldEZyb21Vcmw6IGZ1bmN0aW9uKHZhbHVlKSB7XHJcblx0XHRsZXQgcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHZhbHVlKTtcclxuXHRcdGlmIChwYXJhbXNBcnJheS5oYXMoJ3Z1ZScpKSB7XHJcblx0XHRcdHRoaXMuc2V0KCd2dWUnLCBwYXJhbXNBcnJheS5nZXQoJ3Z1ZScpKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5ID0gcGFyYW1zQXJyYXk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHR0b1VybDogZnVuY3Rpb24oa2V5ID0gJycpIHtcclxuXHRcdGxldCB1cmwgPSAnJztcclxuXHRcdGlmIChrZXkgPT0gJycpIHtcclxuXHRcdFx0dXJsID0gdGhpcy5fcGFyYW1zQXJyYXkudG9TdHJpbmcoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHZhbHVlcyA9IHRoaXMuZ2V0KGtleSk7XHJcblx0XHRcdGZvciAoaSBpbiB2YWx1ZXMpIHtcclxuXHRcdFx0XHR2YWx1ZXNbaV0gPSBrZXkgKyAnPScgKyB2YWx1ZXNbaV07XHJcblx0XHRcdH1cclxuXHRcdFx0dXJsID0gdmFsdWVzLmpvaW4oJyYnKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAodXJsKT8nPycgKyB1cmw6Jyc7XHJcblx0fSxcclxuXHRcclxuXHRmZXRjaDogZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdGxldCB1cmwgPSAkKCcjdGFibGUnKS5kYXRhKCd1cmwnKSArIHRoaXMudG9VcmwoKTtcclxuXHRcdGdsb2JhbC5hamF4LnNldCgnI3RhYmxlJywgdXJsKTtcclxuXHRcdFxyXG5cdH0sXHJcblx0XHJcblx0Z2V0VnVlczogZnVuY3Rpb24oKSB7XHJcblx0XHRsZXQgdXJsID0gJCgnI3Z1ZXMnKS5kYXRhKCd1cmwnKTtcclxuXHRcdGdsb2JhbC5hamF4LnNldCgnI3Z1ZXMnLCB1cmwpO1xyXG5cdH0sXHJcblx0XHJcblx0bGluZUNoZWNrZWQ6IGZ1bmN0aW9uICgpIHtcclxuXHRcdFxyXG5cdFx0dmFyIGNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdHZhciB1bmNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFxyXG5cdFx0JCgndGJvZHknKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR1bmNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHR0aGF0LmRlbGV0ZSgnaWRbXScpO1xyXG5cdFx0XHJcblx0XHRpZiAoY2hlY2tlZCkge1xyXG5cdFx0XHQkKCd0YWJsZScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0aWYgKCQodGhpcykucHJvcCgnaWQnKSAhPSAnY2hlY2tfYWxsJyAmJiAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHR0aGF0LmFwcGVuZCgnaWRbXScsICQodGhpcykudmFsKCkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZWRpdCcpLnNob3coKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X21vdmUnKS5zaG93KCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9kZWxldGUnKS5zaG93KCk7XHJcblx0XHRcdCQoJyN2ZXJzaW9uX21lbnUnKS5zaG93KCk7XHJcblx0XHR9IGVsc2UgaWYodW5jaGVja2VkKSB7XHJcblx0XHRcdCQoJyN2ZXJzaW9uJykudmFsKCcnKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjdmVyc2lvbl9tZW51JykuaGlkZSgpO1xyXG5cdFx0fVxyXG5cdH0sXHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vIFNldHVwXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBzZXR1cChkYXRhcykge1xyXG5cdFxyXG5cdCQoJyN0YWJsZScpLnNob3coKTtcclxuXHRcclxuXHRsZXQgdGhlYWQgPSAkKCcjdGFibGUnKS5hcHBlbmQoY3JlYXRlLnRoZWFkKS5jaGlsZHJlbigpLmxhc3QoKTtcclxuXHRsZXQgdHIgPSB0aGVhZC5hcHBlbmQoY3JlYXRlLnRyKS5jaGlsZHJlbigpLmxhc3QoKTtcclxuXHRsZXQgdGggPSB0ci5hcHBlbmQoY3JlYXRlLnRoKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0LmNzcygnd2lkdGgnLCAnMmVtJylcclxuXHQ7XHJcblx0XHJcblx0bGV0IGRpdiA9IHRoLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0LmFkZENsYXNzKCdidG4tZ3JvdXAgY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94IGJ0biBidG4tc20gYnRuLXByaW1hcnkgcm91bmRlZC0wJylcclxuXHQ7XHJcblx0XHJcblx0Z3BleGUuY2h4Q2hlY2thbGwgPSBkaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdC5hdHRyKCdpZCcsICdjaGVja19hbGwnKVxyXG5cdFx0LmF0dHIoJ3VuY2hlY2tlZCcsICd1bmNoZWNrZWQnKVxyXG5cdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQgJCgndGJvZHknKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsICQoJyNjaGVja19hbGwnKS5pcygnOmNoZWNrZWQnKSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHQgdXJsU2VhcmNoLmxpbmVDaGVja2VkKCk7XHJcblx0XHR9KTtcclxuXHQ7XHJcblx0XHJcblx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHQuYWRkQ2xhc3MoJ214LTEnKVxyXG5cdFx0LmF0dHIoJ2ZvcicsICdjaGVja19hbGwnKVxyXG5cdDtcdFxyXG5cdFxyXG5cdGdwZXhlLnNlcmllcyA9IGRhdGFzLnNlcmllcztcclxuXHRcclxuXHRmb3IgKGxldCBpIGluIGRhdGFzLmZpZWxkcykge1xyXG5cdFx0XHJcblx0XHRmaWVsZCA9IGRhdGFzLmZpZWxkc1tpXTtcclxuXHRcdFxyXG5cdFx0aWYgKGZpZWxkLmRpc3BsYXkudGFibGUpIHtcclxuXHRcdFxyXG5cdFx0XHR2YXIgaGVhZGVyID0gbmV3IEhlYWRlcihmaWVsZCk7XHJcblx0XHRcdFxyXG5cdFx0XHQkLmVhY2goZmllbGQuZWxlbWVudHMsIGZ1bmN0aW9uIChqLCBlbGVtZW50KSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ZSA9IHtcclxuXHRcdFx0XHRcdGlkOiBlbGVtZW50LmlkLFxyXG5cdFx0XHRcdFx0dGl0bGU6IGVsZW1lbnQudGl0bGUsXHJcblx0XHRcdFx0XHRzb3J0OiBlbGVtZW50LnNvcnQsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0c3dpdGNoIChlbGVtZW50LmZpbHRlci50eXBlKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgdHlwZS5ib29sOlxyXG5cdFx0XHRcdFx0XHRcdHZhciBjID0gW1xyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiAkLmkxOG4oJ25vdEFwcGxpY2FibGUnKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IC0xLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dDogJC5pMThuKCd5ZXMnKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDEsXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiAkLmkxOG4oJ25vJyksXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdF07XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHJcblx0XHRcdFx0XHRcdGNhc2UgdHlwZS5saXN0OlxyXG5cdFx0XHRcdFx0XHRcdHZhciBjID0gW107XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0JC5lYWNoKGVsZW1lbnQuZmlsdGVyLmNob2ljZXMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IHZhbHVlLm5hbWUgfHwgdmFsdWUudmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHZhbHVlLmlkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGMucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dDogdmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IGtleSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Yy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoYS50ZXh0IDwgYi50ZXh0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChhLnRleHQgPiBiLnRleHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRjLnVuc2hpZnQoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogJC5pMThuKCdzZWxlY3RBbGwnKSxcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAtMSxcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZS5maWx0ZXIgPSB7XHJcblx0XHRcdFx0XHRcdHR5cGU6IGVsZW1lbnQuZmlsdGVyLnR5cGUsXHJcblx0XHRcdFx0XHRcdGNob2ljZXM6IGMsXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRoZWFkZXIuZWxlbWVudHMucHVzaChlKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcclxuXHRcdFx0Z3BleGUuaGVhZGVycy5wdXNoKGhlYWRlcik7XHJcblx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRmb3IgKGxldCBoZWFkZXIgb2YgZ3BleGUuaGVhZGVycykge1xyXG5cdFx0XHJcblx0XHRoZWFkZXIudGggPSB0ci5hcHBlbmQoY3JlYXRlLnRoKS5jaGlsZHJlbigpLmxhc3QoKTtcclxuXHRcdGhlYWRlci5zZXRXaWR0aChoZWFkZXIuZGVmYXVsdFdpZHRoKTtcclxuXHRcdFxyXG5cdFx0aWYgKGhlYWRlci5oYXNTb3J0IHx8IGhlYWRlci5oYXNGaWx0ZXIpIHtcclxuXHRcdFx0XHJcblx0XHRcdC8vbWFpbiBidXR0b24gZ3JvdXBcclxuXHRcdFx0bGV0IGRpdkRyb3Bkb3duR3JvdXAgPSBoZWFkZXIudGguYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdidG4tZ3JvdXAgdy0xMDAnKVxyXG5cdFx0XHRcdC5hdHRyKCdyb2xlJywgJ2dyb3VwJylcclxuXHRcdFx0XHQub24oJ2hpZGUuYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZihlLmNsaWNrRXZlbnQgJiYgJC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQucGFyZW50Tm9kZSwgZS5jbGlja0V2ZW50LnRhcmdldCkpIHtcclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRoZWFkZXIuZGl2RHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0Ly90aXRsZVxyXG5cdFx0XHRkaXZEcm9wZG93bkdyb3VwLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtdHJ1bmNhdGUgdy0xMDAnKVxyXG5cdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdFx0LnRleHQoaGVhZGVyLnRpdGxlKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmIChoZWFkZXIuaGFzRmlsdGVyKSB7XHJcblx0XHRcdFx0XHRcdGZvciAoZWxlbWVudCBvZiBoZWFkZXIuZWxlbWVudHMpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IGVsZW1lbnQuaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnREZXNjJywgZWxlbWVudC5pZCk7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSBlbGVtZW50LmlkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydEFzYycsIGVsZW1lbnQuaWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Zm9yIChlbGVtZW50IG9mIGhlYWRlci5lbGVtZW50cykge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChlbGVtZW50LnNvcnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnRBc2MnLCBlbGVtZW50LmlkKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHQvL2Ryb3BEb3duIGJ1dHRvblxyXG5cdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24gPSBkaXZEcm9wZG93bkdyb3VwLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTAnKVxyXG5cdFx0XHRcdC5jc3MoJ3dpZHRoJywgJzNlbScpXHJcblx0XHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0XHQuYXR0cignaWQnLCAnYl8nICsgaGVhZGVyLmlkKVxyXG5cdFx0XHRcdC5hdHRyKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpXHJcblx0XHRcdFx0LmF0dHIoJ2RhdGEtZGlzcGxheScsICdzdGF0aWMnKVxyXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWhhc3BvcHVwJywgdHJ1ZSlcclxuXHRcdFx0XHQuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHQvL2Ryb3BEb3duIG1lbnVcclxuXHRcdFx0aGVhZGVyLmRpdkRyb3Bkb3duTWVudSA9IGRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtbGVmdCcpXHJcblx0XHRcdFx0LmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsICdiXycgKyBoZWFkZXIuaWQpXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdkLWZsZXggZmxleC1yb3cnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRkaXZEcm9wZG93bkdyb3VwLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y3JlYXRlTWVudShoZWFkZXIpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcclxuXHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duID0gaGVhZGVyLnRoLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtdHJ1bmNhdGUgdy0xMDAnKVxyXG5cdFx0XHRcdC50ZXh0KGhlYWRlci50aXRsZSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHR9XHJcblxyXG5cdH1cclxuXHRcclxuXHR0ci5hcHBlbmQoY3JlYXRlLnRoKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0LmF0dHIoJ2lkJywgJ2RldGFpbCcpXHJcblx0XHQuY3NzKCd3aWR0aCcsICc2ZW0nKVxyXG5cdDtcclxuXHRcclxuXHRsZXQgdGJvZHkgPSAkKCcjdGFibGUnKS5hcHBlbmQoY3JlYXRlLnRib2R5KS5jaGlsZHJlbigpLmxhc3QoKTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIENvbCBSZXNpemVcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdC8vc3VwcHJpbWVyIHdpZHRoPTEwMCUgZGFucyBsZSBjc3NcclxuXHQvL3N1ciBsZSB0aCAobWluLXdpZHRoLCBtYXgtd2lkdGgpIGV0IHN1ciBsZXMgdGQgKG1heC13aWR0aClcclxuXHRcclxuXHRmb3IgKGxldCBoZWFkZXIgb2YgZ3BleGUuaGVhZGVycykge1xyXG5cdFx0Y29sUmVzaXplKGhlYWRlcik7XHJcblx0fVxyXG5cdFxyXG5cdCQoJ2JvZHknKS5vbignbW91c2Vtb3ZlJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCQuaXNFbXB0eU9iamVjdChncGV4ZS5jb2xSZXNpemUpID09PSBmYWxzZSkge1xyXG5cdFx0XHRsZXQgd2lkdGggPSBNYXRoLm1heCgxLCBNYXRoLnJvdW5kKHB4VG9SZW0oZ3BleGUuY29sUmVzaXplLmN1cnJlbnRXaWR0aCArIChlLnBhZ2VYIC0gZ3BleGUuY29sUmVzaXplLmN1cnJlbnRQb3NpdGlvbikpKSk7XHJcblx0XHRcdGdwZXhlLmNvbFJlc2l6ZS5oZWFkZXIuc2V0V2lkdGgod2lkdGgpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJ2JvZHknKS5vbignbW91c2V1cCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICgkLmlzRW1wdHlPYmplY3QoZ3BleGUuY29sUmVzaXplKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0bGV0IHdpZHRoID0gZ3BleGUuY29sUmVzaXplLmhlYWRlci50aC53aWR0aCgpO1xyXG5cdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdkaXNwbGF5WycgKyBncGV4ZS5jb2xSZXNpemUuaGVhZGVyLmlkICsgJ10nKTtcclxuXHRcdFx0dXJsU2VhcmNoLmFwcGVuZCgnZGlzcGxheVsnICsgZ3BleGUuY29sUmVzaXplLmhlYWRlci5pZCArICddJywgcHhUb1JlbSh3aWR0aCkpO1xyXG5cdFx0XHRncGV4ZS5jb2xSZXNpemUgPSB7fTtcclxuXHRcdH1cclxuXHRcdFxyXG4vL1x0XHRpZiAoJC5pc0VtcHR5T2JqZWN0KGdwZXhlLmNvbERyYWcpID09PSBmYWxzZSkge1xyXG4vL1x0XHRcdGdwZXhlLmNvbERyYWcudGgucmVtb3ZlQ2xhc3MoJ2NvbC1kcmFnLWhhbmRsZScpXHJcbi8vXHRcdH1cclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIENvbCBEcmFnXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuLy9cdGZvciAobGV0IGhlYWRlciBvZiBncGV4ZS5oZWFkZXJzKSB7XHJcbi8vXHRcdGNvbERyYWcoaGVhZGVyKTtcclxuLy9cdH1cclxuXHRcclxuXHRcclxuXHRmdW5jdGlvbiBjcmVhdGVNZW51KGhlYWRlcikge1xyXG5cdFx0XHJcblx0XHRpZiAoaGVhZGVyLmhhc1NvcnQgfHwgaGVhZGVyLmhhc0ZpbHRlcikge1xyXG5cdFx0XHRcclxuXHRcdFx0aGVhZGVyLmRpdkRyb3Bkb3duTWVudS5lbXB0eSgpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGhlYWRlci5lbGVtZW50cy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRcdGNyZWF0ZU1lbnVJdGVtKGhlYWRlciwgaGVhZGVyLmVsZW1lbnRzWzBdKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRmb3IgKHZhciBlbGVtZW50IG9mIGhlYWRlci5lbGVtZW50cykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIgfHwgZWxlbWVudC5zb3J0KSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjcmVhdGVNZW51SXRlbShoZWFkZXIsIGVsZW1lbnQpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly9oZWFkZXIgaWYgbWFueSBzZWxlY3RzXHJcblx0XHRcdFx0XHRcdGVsZW1lbnQuZGl2Q29udGVudC5wcmVwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkuZmlyc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItZGFyayBwYi0yIHB4LTEnKVxyXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoZWxlbWVudC50aXRsZSlcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBjcmVhdGVNZW51SXRlbShoZWFkZXIsIGVsZW1lbnQpIHtcclxuXHRcdFxyXG5cdFx0ZWxlbWVudC5kaXZDb250ZW50ID0gaGVhZGVyLmRpdkRyb3Bkb3duTWVudS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdteC0xJylcclxuXHRcdFx0LmNzcygnbWluLXdpZHRoJywgJzE1ZW0nKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRsZXQgZGl2QnV0dG9ucyA9IGVsZW1lbnQuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBwLTEnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRpZiAoZWxlbWVudC5zb3J0KSB7XHJcblx0XHRcdGRpdkJ1dHRvbnMuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXBwZW5kKGdsb2JhbC5pY29uLmFycm93RG93bilcclxuXHRcdFx0XHQuYWRkQ2xhc3MoKHVybFNlYXJjaC5nZXQoJ3NvcnREZXNjJykgPT0gZWxlbWVudC5pZCk/J3B4LTIgYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOidweC0yIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSBlbGVtZW50LmlkKSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0RGVzYycsIGVsZW1lbnQuaWQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmIChlbGVtZW50LmZpbHRlcikge1xyXG5cdFx0XHRcclxuXHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyID0gZGl2QnV0dG9ucy5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC50ZXh0KCQuaTE4bignZmlsdGVyJykpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdweC0zIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0c3dpdGNoIChlbGVtZW50LmZpbHRlci50eXBlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSB0eXBlLmRhdGU6XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkZpbHRlclxyXG5cdFx0XHRcdFx0XHQub24oJ2ZpbHRlci51cGRhdGUnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXVtdJyk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZmlsdGVyLmNoeEluZi5pcygnOmNoZWNrZWQnKSAmJiAocmVzdWx0ID0gL17iiaVcXHMoXFxkezJ9LVxcZHsyfS1cXGR7NH0pLy5leGVjKGVsZW1lbnQuZmlsdGVyLmlucHV0SW5mLnZhbCgpKSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5hcHBlbmQoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddW10nLCAnPicgKyByZXN1bHRbMV0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIuY2h4U3VwLmlzKCc6Y2hlY2tlZCcpICYmIChyZXN1bHQgPSAvXuKJpFxccyhcXGR7Mn0tXFxkezJ9LVxcZHs0fSkvLmV4ZWMoZWxlbWVudC5maWx0ZXIuaW5wdXRTdXAudmFsKCkpKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScsICc8JyArIHJlc3VsdFsxXSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmIChlbGVtZW50LmZpbHRlci5jaHhIaWdobGlnaHQuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ2hpZ2hsaWdodCcsIGVsZW1lbnQuaWQpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodXJsU2VhcmNoLmdldCgnaGlnaGxpZ2h0JykudG9TdHJpbmcoKSA9PSBlbGVtZW50LmlkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdoaWdobGlnaHQnKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBlbGVtZW50IG9mIGhlYWRlci5lbGVtZW50cykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZmlsdGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkZpbHRlci50cmlnZ2VyKCdmaWx0ZXIudXBkYXRlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1x0XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGNhc2UgdHlwZS50ZXh0OlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXJcclxuXHRcdFx0XHRcdFx0Lm9uKCdmaWx0ZXIudXBkYXRlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ10nKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR2YXIgc2VhcmNoVmFsdWUgPSBlbGVtZW50LmlucHV0U2VhcmNoLnZhbCgpLnRvTG93ZXJDYXNlKClcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoc2VhcmNoVmFsdWUgIT0gJycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddJywgc2VhcmNoVmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGVsZW1lbnQgb2YgaGVhZGVyLmVsZW1lbnRzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyLnRyaWdnZXIoJ2ZpbHRlci51cGRhdGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHRcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSB0eXBlLmxpc3Q6XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkZpbHRlclxyXG5cdFx0XHRcdFx0XHQub24oJ2ZpbHRlci51cGRhdGUnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXVtdJyk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZmlsdGVyLmNob2ljZXNbMF0uY2h4LmlzKCc6Y2hlY2tlZCcpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgY2hvaWNlIG9mIGVsZW1lbnQuZmlsdGVyLmNob2ljZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGNob2ljZS5jaHguaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXVtdJywgY2hvaWNlLnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGVsZW1lbnQgb2YgaGVhZGVyLmVsZW1lbnRzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyLnRyaWdnZXIoJ2ZpbHRlci51cGRhdGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cdFx0XHRcclxuXHRcdFxyXG5cdFx0aWYgKGVsZW1lbnQuc29ydCkge1xyXG5cdFx0XHRkaXZCdXR0b25zLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFwcGVuZChnbG9iYWwuaWNvbi5hcnJvd1VwKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IGVsZW1lbnQuaWQpPydweC0yIGJ0bi1vdXRsaW5lLXByaW1hcnkgYmctZGFyayB0ZXh0LXdoaXRlJzoncHgtMiBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gZWxlbWVudC5pZCkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0QXNjJywgZWxlbWVudC5pZCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAoZWxlbWVudC5maWx0ZXIpIHtcclxuXHRcdFx0XHJcblx0XHRcdHN3aXRjaCAoZWxlbWVudC5maWx0ZXIudHlwZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNhc2UgdHlwZS5ib29sOlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZMaXN0ID0gZWxlbWVudC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTIgb3ZlcmZsb3ctYXV0byAnICsgKChlbGVtZW50LmZpbHRlci50eXBlID09PSB0eXBlLmxpc3QpPydwdC0zJzoncHQtMScpKVxyXG5cdFx0XHRcdFx0XHQuY3NzKCdtYXgtaGVpZ2h0JywgJzIwZW0nKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y2hvaWNlLmRpdiA9IGVsZW1lbnQuZmlsdGVyLmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjaG9pY2UuY2h4ID0gY2hvaWNlLmRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIGVsZW1lbnQuaWQgKyAnXycgKyBjaG9pY2UudmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y2hvaWNlLmRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBlbGVtZW50LmlkICsgJ18nICsgY2hvaWNlLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdC50ZXh0KGNob2ljZS50ZXh0KVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoY2hvaWNlLnZhbHVlID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeFxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCAhdXJsU2VhcmNoLmdldCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ10nKSlcclxuXHRcdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgY2hvaWNlIG9mIGVsZW1lbnQuZmlsdGVyLmNob2ljZXMpIHtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNob2ljZS5jaHgucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGNob2ljZS5jaHhcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgcGFyc2VJbnQodXJsU2VhcmNoLmdldCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ10nKSkgPT09IGNob2ljZS52YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGNob2ljZSBvZiBlbGVtZW50LmZpbHRlci5jaG9pY2VzKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2hvaWNlLmNoeCAhPSB0aGlzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaG9pY2UuY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXScsIGNob2ljZS52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24uZHJvcGRvd24oJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGNhc2UgdHlwZS50ZXh0OlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZGl2U2VhcmNoID0gZWxlbWVudC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2lucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtIHAtMicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuaW5wdXRTZWFyY2ggPSBkaXZTZWFyY2guYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LnZhbCh1cmxTZWFyY2guZ2V0KCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXScpKVxyXG5cdFx0XHRcdFx0XHQub24oJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChlLndoaWNoID09IDEzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBkaXYgPSBkaXZTZWFyY2guYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnaW5wdXQtZ3JvdXAtYXBwZW5kJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGEgPSBkaXYuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2J0biBidG4tbGlnaHQgYm9yZGVyLWxlZnQtMCBib3JkZXIgdGV4dC1wcmltYXJ5JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdGEuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuaHRtbCgnJnRpbWVzOycpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmlucHV0U2VhcmNoLnZhbCgnJyk7XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjYXNlIHR5cGUuZGF0ZTpcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKChyZXN1bHQgPSAvPihcXGR7Mn0tXFxkezJ9LVxcZHs0fSkvLmV4ZWModXJsU2VhcmNoLmdldCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScpLnRvU3RyaW5nKCkpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVJbmYgPSByZXN1bHRbMV07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVJbmYgPSAnJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKChyZXN1bHQgPSAvPChcXGR7Mn0tXFxkezJ9LVxcZHs0fSkvLmV4ZWModXJsU2VhcmNoLmdldCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScpLnRvU3RyaW5nKCkpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVTdXAgPSByZXN1bHRbMV07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVTdXAgPSAnJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGhpZ2hsaWdodCA9ICh1cmxTZWFyY2guZ2V0KCdoaWdobGlnaHQnKS50b1N0cmluZygpID09IGVsZW1lbnQuaWQpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZMaXN0ID0gZWxlbWVudC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTIgb3ZlcmZsb3ctYXV0byAnICsgKChlbGVtZW50LmZpbHRlci50eXBlID09PSB0eXBlLmxpc3QpPydwdC0zJzoncHQtMScpKVxyXG5cdFx0XHRcdFx0XHQuY3NzKCdtYXgtaGVpZ2h0JywgJzIwZW0nKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZJbmYgPSBlbGVtZW50LmZpbHRlci5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCBtdC0yJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuY2h4SW5mID0gZWxlbWVudC5maWx0ZXIuZGl2SW5mLmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIGVsZW1lbnQuaWQgKyAnX2luZicpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdmFsdWVJbmYgIT0gJycpXHJcblx0XHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGNoZWNrZWQgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChjaGVja2VkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoL17iiaVcXHNcXGR7Mn0tXFxkezJ9LVxcZHs0fS8udGVzdChlbGVtZW50LmZpbHRlci5pbnB1dEluZi52YWwoKSkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0SW5mLnZhbCgnJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0SW5mLnZhbCgkLmkxOG4oJ2Zyb21EYXRlJykpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5pbnB1dEluZi5hdHRyKCdyZWFkb25seScsIGNoZWNrZWQgPT09IGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIubGFiZWxJbmYgPSBlbGVtZW50LmZpbHRlci5kaXZJbmYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIGVsZW1lbnQuaWQgKyAnX2luZicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0SW5mID0gZWxlbWVudC5maWx0ZXIubGFiZWxJbmYuYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdmb3JtLWNvbnRyb2wgZGF0ZXBpY2tlcicpXHJcblx0XHRcdFx0XHRcdC52YWwoKHZhbHVlSW5mKT8oJ+KJpSAnICsgdmFsdWVJbmYpOiQuaTE4bignZnJvbURhdGUnKSlcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ3JlYWRvbmx5JywgdmFsdWVJbmYgPT0gJycpXHJcblx0XHRcdFx0XHRcdC5kYXRlcGlja2VyKHsnZm9ybWF0JzogJ+KJpSBkZC1tbS15eXl5J30pXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaHhJbmYucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNoeEluZi50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdCAgICAub24oJ3Nob3cuYnMuZHJvcGRvd24gaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdCAgICBcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHQgICAgfSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2U3VwID0gZWxlbWVudC5maWx0ZXIuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggbXQtMicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNoeFN1cCA9IGVsZW1lbnQuZmlsdGVyLmRpdlN1cC5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCBlbGVtZW50LmlkICsgJ19zdXAnKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsIHZhbHVlU3VwICE9ICcnKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKC9e4omkXFxzXFxkezJ9LVxcZHsyfS1cXGR7NH0vLnRlc3QoZWxlbWVudC5maWx0ZXIuaW5wdXRTdXAudmFsKCkpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5pbnB1dFN1cC52YWwoJycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5pbnB1dFN1cC52YWwoJC5pMThuKCd0b0RhdGUnKSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0U3VwLmF0dHIoJ3JlYWRvbmx5JywgY2hlY2tlZCA9PT0gZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5sYWJlbFN1cCA9IGVsZW1lbnQuZmlsdGVyLmRpdlN1cC5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgZWxlbWVudC5pZCArICdfc3VwJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuaW5wdXRTdXAgPSBlbGVtZW50LmZpbHRlci5sYWJlbFN1cC5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBkYXRlcGlja2VyJylcclxuXHRcdFx0XHRcdFx0LnZhbCgodmFsdWVTdXApPyfiiaQgJyArIHZhbHVlU3VwOiQuaTE4bigndG9EYXRlJykpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdyZWFkb25seScsIHZhbHVlU3VwID09ICcnKVxyXG5cdFx0XHRcdFx0XHQuZGF0ZXBpY2tlcih7J2Zvcm1hdCc6IFwi4omkIGRkLW1tLXl5eXlcIn0pXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaHhTdXAucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNoeFN1cC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdCAgICAub24oJ3Nob3cuYnMuZHJvcGRvd24gaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdCAgICBcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHQgICAgfSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2SGlnaGxpZ2h0ID0gZWxlbWVudC5maWx0ZXIuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggbXQtMicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNoeEhpZ2hsaWdodCA9IGVsZW1lbnQuZmlsdGVyLmRpdkhpZ2hsaWdodC5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCBlbGVtZW50LmlkICsgJ19oaWdobGlnaHQnKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignbmFtZScsICdoaWdobGlnaHQnKVxyXG5cdFx0XHRcdFx0XHQudmFsKGVsZW1lbnQuaWQpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgaGlnaGxpZ2h0KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZIaWdobGlnaHQuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIGVsZW1lbnQuaWQgKyAnX2hpZ2hsaWdodCcpXHJcblx0XHRcdFx0XHRcdC50ZXh0KCQuaTE4bignaGlnaGxpZ2h0JykpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSB0eXBlLmxpc3Q6XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGRpdlNlYXJjaCA9IGVsZW1lbnQuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbSBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHAtMicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuaW5wdXRTZWFyY2ggPSBkaXZTZWFyY2guYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0Lm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZS53aGljaCA9PSAxMykge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHNlYXJjaFZhbHVlID0gJCh0aGlzKS52YWwoKS50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKHNlYXJjaFZhbHVlID09ICcnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjaG9pY2UuZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaG9pY2VzWzBdLmRpdi5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2hvaWNlLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNob2ljZS5kaXYuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNob2ljZS5jaHgucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaG9pY2UuZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaG9pY2UuY2h4LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRkaXYgPSBkaXZTZWFyY2guYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnaW5wdXQtZ3JvdXAtYXBwZW5kJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0YSA9IGRpdi5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1saWdodCBib3JkZXItbGVmdC0wIGJvcmRlciB0ZXh0LXByaW1hcnknKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0YS5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5odG1sKCcmdGltZXM7JylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuaW5wdXRTZWFyY2gudmFsKCcnKTtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmlucHV0U2VhcmNoLnRyaWdnZXIoJ2lucHV0Jyk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkxpc3QgPSBlbGVtZW50LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMiBvdmVyZmxvdy1hdXRvICcgKyAoKGVsZW1lbnQuZmlsdGVyLnR5cGUgPT09IHR5cGUubGlzdCk/J3B0LTMnOidwdC0xJykpXHJcblx0XHRcdFx0XHRcdC5jc3MoJ21heC1oZWlnaHQnLCAnMjBlbScpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IGNob2ljZSBvZiBlbGVtZW50LmZpbHRlci5jaG9pY2VzKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjaG9pY2UuZGl2ID0gZWxlbWVudC5maWx0ZXIuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGNob2ljZS5jaHggPSBjaG9pY2UuZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgZWxlbWVudC5pZCArICdfJyArIGNob2ljZS52YWx1ZSlcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y2hvaWNlLmRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBlbGVtZW50LmlkICsgJ18nICsgY2hvaWNlLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdC50ZXh0KGNob2ljZS50ZXh0KVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoY2hvaWNlLnZhbHVlID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeFxyXG5cdFx0XHRcdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGNoZWNrZWQgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGNob2ljZS5jaHhcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdXJsU2VhcmNoLmdldCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScpLmhhcyhjaG9pY2UudmFsdWUpKVxyXG5cdFx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgY2hvaWNlIG9mIGVsZW1lbnQuZmlsdGVyLmNob2ljZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoJChjaG9pY2UuY2h4KS5pcygnOmNoZWNrZWQnKSAmJiBjaG9pY2UudmFsdWUgIT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaG9pY2VzWzBdLmNoeC5wcm9wKCdpbmRldGVybWluYXRlJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuY2hvaWNlc1swXS5jaHgucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaG9pY2VzWzBdLmNoeC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gY29sUmVzaXplKGhlYWRlcikge1xyXG5cdFx0XHJcblx0XHRpZiAoaGVhZGVyLnRoKSB7XHJcblx0XHRcdGhlYWRlci50aC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuY3NzKCdyaWdodCcsICcwJylcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2NvbC1yZXNpemUtaGFuZGxlJylcclxuXHRcdFx0XHQub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdGZvciAobGV0IGhlYWRlciBvZiBncGV4ZS5oZWFkZXJzKSB7XHJcblx0XHRcdFx0XHRcdGlmICgkKGUudGFyZ2V0KS5wYXJlbnQoKS5pcyhoZWFkZXIudGgpKSB7XHJcblx0XHRcdFx0XHRcdFx0Z3BleGUuY29sUmVzaXplID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0aGVhZGVyOiBoZWFkZXIsXHJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50UG9zaXRpb246IGUucGFnZVgsXHJcblx0XHRcdFx0XHRcdFx0XHRjdXJyZW50V2lkdGg6IGhlYWRlci50aC53aWR0aCgpLFxyXG5cdFx0XHRcdFx0XHRcdH07XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRoZWFkZXIudGgubmV4dCgpLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5jc3MoJ2xlZnQnLCAnMCcpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjb2wtcmVzaXplLWhhbmRsZScpXHJcblx0XHRcdFx0Lm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRmb3IgKGxldCBoZWFkZXIgb2YgZ3BleGUuaGVhZGVycykge1xyXG5cdFx0XHRcdFx0XHRpZiAoJChlLnRhcmdldCkucGFyZW50KCkucHJldkFsbCgnOnZpc2libGUnKS5maXJzdCgpLmlzKGhlYWRlci50aCkpIHtcclxuXHRcdFx0XHRcdFx0XHRncGV4ZS5jb2xSZXNpemUgPSB7XHJcblx0XHRcdFx0XHRcdFx0XHRoZWFkZXI6IGhlYWRlcixcclxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRQb3NpdGlvbjogZS5wYWdlWCxcclxuXHRcdFx0XHRcdFx0XHRcdGN1cnJlbnRXaWR0aDogaGVhZGVyLnRoLndpZHRoKCksXHJcblx0XHRcdFx0XHRcdFx0fTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0ZnVuY3Rpb24gY29sRHJhZyhoZWFkZXIpIHtcclxuXHRcdFxyXG5cdFx0aWYgKGhlYWRlci50aCkge1xyXG5cdFx0XHRcclxuXHRcdFx0aGVhZGVyLnRoLmZpbmQoJ2J1dHRvblt0eXBlPVwiYnV0dG9uXCJdJykuZmlyc3QoKVxyXG5cdFx0XHRcdC5vbignbW91c2Vkb3duJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0Z3BleGUuY29sRHJhZyA9IHtcclxuXHRcdFx0XHRcdFx0aWQ6IGhlYWRlci5pZCxcclxuXHRcdFx0XHRcdFx0dGg6IGhlYWRlci50aCxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBvc2l0aW9uOiBlLnBhZ2VYLFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblx0XHJcbn1cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vLyBmaWxsU2VyaWVzUGFubmVsXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBmaWxsU2VyaWVzUGFubmVsKCkge1xyXG5cdFxyXG5cdGZvciAobGV0IHNlcmllIG9mIGdwZXhlLnNlcmllcykge1xyXG5cdFx0c2VyaWUuYnRuID0gJCgnI3NlcmllcycpLmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmF0dHIoJ3JvbGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXByaW1hcnkgbS0xJylcclxuXHRcdFx0LmF0dHIoJ2hyZWYnLCBzZXJpZS51cmwpXHJcblx0XHRcdC50ZXh0KHNlcmllLm5hbWUpXHJcblx0XHQ7XHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vL2ZpbGxEaXNwbGF5UGFubmVsXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBmaWxsRGlzcGxheVBhbm5lbCgpIHtcclxuXHRcclxuXHRsZXQgZGl2Q29sID0gJCgnI2Rpc3BsYXlfcGFuZWwnKS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdC5hZGRDbGFzcygncm93IHB5LTInKVxyXG5cdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbCcpXHJcblx0O1xyXG5cdFxyXG5cdGZvciAobGV0IGhlYWRlciBvZiBncGV4ZS5oZWFkZXJzKSB7XHJcblx0XHRcclxuXHRcdGhlYWRlci5hRGlzcGxheSA9IGRpdkNvbC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1wcmltYXJ5IGNvbC0yIG0tMSB0ZXh0LWxlZnQgdGV4dC1ub3dyYXAnKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aGVhZGVyLmNoeERpc3BsYXkucHJvcCgnY2hlY2tlZCcsICFoZWFkZXIuY2h4RGlzcGxheS5pcygnOmNoZWNrZWQnKSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IGRpc3BsYXkgPSB1cmxTZWFyY2guZ2V0KCdkaXNwbGF5WycgKyBoZWFkZXIuaWQgKyAnXScpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ2Rpc3BsYXlbJyArIGhlYWRlci5pZCArICddJyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKGhlYWRlci5jaHhEaXNwbGF5LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRpZiAoZGlzcGxheSA9PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKCdkaXNwbGF5WycgKyBoZWFkZXIuaWQgKyAnXScsIGhlYWRlci5kZWZhdWx0V2lkdGgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGxldCBkaXYgPSBoZWFkZXIuYURpc3BsYXkuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRoZWFkZXIuY2h4RGlzcGxheSA9IGRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXR0cignaWQnLCAnaF8nICsgaGVhZGVyLmlkKVxyXG5cdFx0XHQub24oJ2NoYW5nZSBjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hdHRyKCdmb3InLCAnaF8nICsgaGVhZGVyLmlkKVxyXG5cdFx0XHQudGV4dChoZWFkZXIudGl0bGUpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxuXHRcclxufVxyXG5cclxudmFyIHVybFNlYXJjaCA9IG5ldyBVcmxTZWFyY2goKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIE1lbnUgZGlzcGxheVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdCQoJyNkb2N1bWVudF9uZXcsICNkb2N1bWVudF9lZGl0LCAjZG9jdW1lbnRfbW92ZSwgI2RvY3VtZW50X2RlbGV0ZSwgI3ZlcnNpb25fbmV3LCAjdmVyc2lvbl9lZGl0LCAjdmVyc2lvbl9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGdsb2JhbC5hamF4LnNldCgnI21vZGFsJywgJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1VybCgnaWRbXScpLCB7ZnJvbTogdGhpc30pO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFRhYiBjb2xsYXBzZVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3RhYnMnKS5vbignc2hvdy5icy50YWInLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5jb2xsYXBzZScpLmNvbGxhcHNlKCdzaG93Jyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3RhYnNfaGlkZGVuJyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuYWRkQ2xhc3MoJ3RhYnNfc2hvd2VkJyk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3RhYnMgdWwgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkKHRoaXMpLmJsdXIoKTtcclxuXHRcdFx0JCh0aGlzKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xyXG5cdFx0XHQkKCcjJyArICQodGhpcykuYXR0cignYXJpYS1jb250cm9scycpKS5wYXJlbnQoKS5jb2xsYXBzZSgnaGlkZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG4gICAgXHJcblx0JCgnI3RhYnMnKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5yZW1vdmVDbGFzcygndGFic19oaWRkZW4nKTtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5hZGRDbGFzcygndGFic19zaG93ZWQnKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdGFicycpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3RhYnNfc2hvd2VkJyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuYWRkQ2xhc3MoJ3RhYnNfaGlkZGVuJyk7XHJcblx0fSk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBUYWJzIG1pbmltaXplXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjdGFicycpLnRyaWdnZXIoJ3Nob3cuYnMudGFiJyk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBUYWJsZV9jb250YWluZXJcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyN0YWJsZV9jb250YWluZXIsICN2dWVzLCAjdGFibGUnKS5vbignYWpheC5iZWZvcmVTZW5kJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHJcblx0XHRpZiAoZS50YXJnZXQgIT09IHRoaXMpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0JCgnI3RhYmxlJykuaGlkZSgpO1xyXG5cdFx0XHJcblx0XHQkKCcjc3Bpbm5lcicpXHJcblx0XHRcdC5zaG93KClcclxuXHRcdFx0LmVtcHR5KClcclxuXHRcdFx0LmFwcGVuZChnbG9iYWwuaWNvbi5sb2FkaW5nKVxyXG5cdFx0O1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN0YWJsZV9jb250YWluZXInKS5vbignYWpheC5zdWNjZXNzJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHJcblx0XHRpZiAoZS50YXJnZXQgIT09IHRoaXMpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0JCgnI3NwaW5uZXInKS5lbXB0eSgpO1xyXG5cdFx0XHJcblx0XHQvL3NldHVwIGpzIGRhdGFzXHJcblx0XHRzZXR1cChyZXN1bHQpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN0YWJsZV9jb250YWluZXInKS5vbignYWpheC5jb21wbGV0ZWQnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcblx0XHRcclxuXHRcdGlmIChlLnRhcmdldCAhPT0gdGhpcykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRmaWxsU2VyaWVzUGFubmVsKCk7XHJcblx0XHRmaWxsRGlzcGxheVBhbm5lbCgpO1xyXG5cdFx0XHJcblx0XHQvL3NldHVwIHVybFxyXG5cdFx0dXJsU2VhcmNoLnNldEZyb21Vcmwod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblx0XHRcclxuXHRcdHVybFNlYXJjaC5nZXRWdWVzKCk7XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBWdWVzXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjdnVlcycpLm9uKCdhamF4LnN1Y2Nlc3MnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcblx0XHRcclxuXHRcdGlmIChlLnRhcmdldCAhPT0gdGhpcykge1xyXG5cdFx0XHRyZXR1cm47XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHRcclxuXHRcdCQoJyN2dWVzJykuZW1wdHkoKTtcclxuXHRcdFxyXG5cdFx0Zm9yIChsZXQgdnVlIG9mIHJlc3VsdCkge1xyXG5cdFx0XHRcclxuXHRcdFx0ZGl2ID0gJCgnI3Z1ZXMnKVxyXG5cdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2J0bi1ncm91cCBtLTEnKVxyXG5cdFx0XHRcdC5hdHRyKCdyb2xlJywgJ2dyb3VwJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0YnRuID0gZGl2LmFwcGVuZChjcmVhdGUuYnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdC5hdHRyKCdkYXRhLWlkJywgdnVlLmlkKVxyXG5cdFx0XHRcdC50ZXh0KHZ1ZS5uYW1lKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3Z1ZScsIHZ1ZS5pZCk7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdCQodGhpcykuYmx1cigpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGlmICh2dWVbJ2VkaXRfdXJsJ10gJiYgdnVlWydkZWxldGVfdXJsJ10pIHtcclxuXHRcdFx0XHRkaXYyID0gZGl2LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdidG4tZ3JvdXAnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ3JvbGUnLCAnZ3JvdXAnKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRidG4yID0gZGl2Mi5hcHBlbmQoY3JlYXRlLmJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpXHJcblx0XHRcdFx0XHQuYXR0cignYXJpYS1oYXNwb3B1cCcsIHRydWUpXHJcblx0XHRcdFx0XHQuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRkaXYzID0gZGl2Mi5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnZHJvcGRvd24tbWVudScpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRpdjMuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdkcm9wZG93bi1pdGVtIHRleHQtc3VjY2VzcycpXHJcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGdsb2JhbC5hamF4LnNldCgnI21vZGFsJywgdnVlWydlZGl0X3VybCddLCB7bW9kYWw6IHRydWV9KTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQudGV4dCgkLmkxOG4oJ2VkaXQnKSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ZGl2My5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2Ryb3Bkb3duLWl0ZW0gdGV4dC1kYW5nZXInKVxyXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRnbG9iYWwuYWpheC5zZXQoJyNtb2RhbCcsIHZ1ZVsnZGVsZXRlX3VybCddLCB7bW9kYWw6IHRydWUsIGZyb206IHRoaXN9KTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQudGV4dCgkLmkxOG4oJ2RlbGV0ZScpKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gRHJhZ3RhYmxlXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcbi8vXHRcdHZhciBkcmFnZ2VyID0gdGFibGVEcmFnZ2VyLmRlZmF1bHQoJCgndGFibGUnKS5nZXQoMCksIHtcclxuLy9cdCAgICAgICAgbW9kZTogJ2NvbHVtbicsXHJcbi8vXHRcdH0pO1xyXG5cdFxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2dWVzJykub24oJ2FqYXguY29tcGxldGVkJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHJcblx0XHRpZiAoZS50YXJnZXQgIT09IHRoaXMpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3Z1ZV9uZXcnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGdsb2JhbC5hamF4LnNldCgnI21vZGFsJywgJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1VybCgpLCB7bW9kYWw6IHRydWV9KTtcclxuXHR9KTtcclxuXHRcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFRhYmxlXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjdGFibGUnKS5vbignYWpheC5zdWNjZXNzJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHJcblx0XHRpZiAoZS50YXJnZXQgIT09IHRoaXMpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHJcblx0XHQkKCcjc3Bpbm5lcicpLmVtcHR5KCk7XHJcblx0XHQkKCcjdGFibGUgPiB0Ym9keScpLmVtcHR5KCk7XHJcblx0XHQkKCcjdGFibGUnKS5zaG93KCk7XHJcblx0XHRpZiAocmVzdWx0ID09IGZhbHNlKSByZXR1cm47XHJcblx0XHRcclxuLy9cdFx0Y29uc29sZS5sb2cocmVzdWx0LnF1ZXJ5KTtcclxuLy9cdFx0Y29uc29sZS5sb2cocmVzdWx0LmRhdGFzKTtcclxuXHRcdFxyXG5cdFx0bGV0IHNlYXJjaFVybCA9ICQucGFyYW0ocmVzdWx0LnF1ZXJ5KTtcclxuXHRcdHVybFNlYXJjaC5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaFVybCk7XHJcblx0XHR1cmxTZWFyY2guZGVsZXRlKCdpZFtdJyk7XHJcblx0XHRcclxuXHRcdC8vdnVlXHJcblx0XHQkKCcjdnVlcycpLmZpbmQoJ2J1dHRvbltkYXRhLWlkXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdGlmICgkKHRoaXMpLmRhdGEoJ2lkJykgPT0gdXJsU2VhcmNoLmdldCgndnVlJykpIHtcclxuXHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tb3V0bGluZS1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCdkaXYgPiBidXR0b24nKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBkcm9wZG93bi10b2dnbGUnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKHRoaXMpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tcHJpbWFyeScpO1xyXG5cdFx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnZGl2ID4gYnV0dG9uJykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1wcmltYXJ5IGRyb3Bkb3duLXRvZ2dsZScpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0Ly9zZXJpZXNcclxuXHRcdGZvciAobGV0IHNlcmllIG9mIGdwZXhlLnNlcmllcykge1xyXG5cdFx0XHRpZiAocmVzdWx0LnNlcmllICYmIHNlcmllLmlkID09IHJlc3VsdC5zZXJpZSkge1xyXG5cdFx0XHRcdHNlcmllLmJ0bi5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnknKTtcclxuXHRcdFx0XHRzZXJpZS5idG4uYWRkQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRzZXJpZS5idG4ucmVtb3ZlQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0XHRzZXJpZS5idG4uYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5Jyk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Zm9yIChsZXQgaGVhZGVyIG9mIGdwZXhlLmhlYWRlcnMpIHtcclxuXHRcdFx0XHJcblx0XHRcdC8vZGlzcGxheVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGRpc3BsYXkgPSByZXN1bHQucXVlcnkuZGlzcGxheVtoZWFkZXIuaWRdKSB7XHJcblxyXG5cdFx0XHRcdGhlYWRlci5hRGlzcGxheS5hZGRDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeScpO1xyXG5cdFx0XHRcdGhlYWRlci5hRGlzcGxheS5yZW1vdmVDbGFzcygnYnRuLXByaW1hcnknKTtcclxuXHRcdFx0XHRoZWFkZXIuY2h4RGlzcGxheS5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0aGVhZGVyLnNldFdpZHRoKGRpc3BsYXkpO1xyXG5cdFx0XHRcdGhlYWRlci50aC5zaG93KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9oZWFkZXJzXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duLmVtcHR5KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aGVhZGVyLmlzRmlsdGVyZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRoZWFkZXIuaXNTb3J0ZWRBc2MgPSBmYWxzZTtcclxuXHRcdFx0XHRoZWFkZXIuaXNTb3J0ZWREZXNjID0gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKGhlYWRlci5oYXNTb3J0KSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAoZWxlbWVudCBvZiBoZWFkZXIuZWxlbWVudHMpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gZWxlbWVudC5pZCkge1xyXG5cdFx0XHRcdFx0XHRcdGhlYWRlci5pc1NvcnRlZEFzYyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IGVsZW1lbnQuaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRoZWFkZXIuaXNTb3J0ZWREZXNjID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChoZWFkZXIuaGFzRmlsdGVyKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAoZWxlbWVudCBvZiBoZWFkZXIuZWxlbWVudHMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZmlsdGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChlbGVtZW50LmZpbHRlci50eXBlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIHR5cGUuYm9vbDpcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgdHlwZS50ZXh0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmhhcygnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ10nKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlYWRlci5pc0ZpbHRlcmVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIHR5cGUuZGF0ZTpcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgdHlwZS5saXN0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmhhcygnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVhZGVyLmlzRmlsdGVyZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoKGhlYWRlci5pc0ZpbHRlcmVkKT9nbG9iYWwuaWNvbi5mdW5uZWxGaWxsOmdsb2JhbC5pY29uLmZ1bm5lbCk7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChoZWFkZXIuaXNTb3J0ZWRBc2MpIHtcclxuXHRcdFx0XHRcdGhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoZ2xvYmFsLmljb24uYXJyb3dVcCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChoZWFkZXIuaXNTb3J0ZWREZXNjKSB7XHJcblx0XHRcdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGdsb2JhbC5pY29uLmFycm93RG93bik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGhlYWRlci5hRGlzcGxheS5hZGRDbGFzcygnYnRuLXByaW1hcnknKTtcclxuXHRcdFx0XHRoZWFkZXIuYURpc3BsYXkucmVtb3ZlQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0XHRoZWFkZXIuY2h4RGlzcGxheS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdGhlYWRlci50aC5oaWRlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vdGJvZHlcclxuXHRcdGZvciAobGV0IGRhdGEgb2YgcmVzdWx0LmRhdGFzKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgdHIgPSAkKCcjdGFibGUgPiB0Ym9keScpLmFwcGVuZChjcmVhdGUudHIpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGRpdiA9IHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXR0cignaWQnLCAnY18nICsgZGF0YS52ZXJzaW9uX2lkKVxyXG5cdFx0XHRcdC52YWwoZGF0YS52ZXJzaW9uX2lkKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCB1cmxTZWFyY2gubGluZUNoZWNrZWQuYmluZCh1cmxTZWFyY2gpKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXR0cignZm9yJywgJ2NfJyArIGRhdGEudmVyc2lvbl9pZClcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0Zm9yIChsZXQgaGVhZGVyIG9mIGdwZXhlLmhlYWRlcnMpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YWx1ZSA9IGRhdGFbaGVhZGVyLmlkXTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoaGVhZGVyLmlkID09ICdzdGF0dXNfdHlwZScpIHtcclxuXHRcdFx0XHRcdFx0dmFsdWUgPSBoZWFkZXIuZWxlbWVudHNbMF0uZmlsdGVyLmNob2ljZXNbdmFsdWVdLnRleHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHN3aXRjaCAoaGVhZGVyLnR5cGUpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSB0eXBlLmJvb2w6XHJcblx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3RleHQtY2VudGVyJztcclxuXHRcdFx0XHRcdFx0XHRpZiAodmFsdWUgPT0gMCB8fCB2YWx1ZSA9PSBudWxsKSB2YWx1ZSA9ICQuaTE4bignbm8nKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAodmFsdWUgPT0gMSkgdmFsdWUgPSAkLmkxOG4oJ3llcycpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIHR5cGUuZGF0ZTpcclxuXHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndGV4dC1jZW50ZXInO1xyXG5cdFx0XHRcdFx0XHRcdGlmICh2YWx1ZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS50b0RhdGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHZhbHVlICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vaGlnaGxpZ2h0XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdoaWdobGlnaHQnKS50b1N0cmluZygpID09IGhlYWRlci5pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHx8ICh1cmxTZWFyY2guZ2V0KCdoaWdobGlnaHQnKS50b1N0cmluZygpID09ICd2ZXJzaW9uX2RhdGUnICYmIGhlYWRlci5pZCA9PSAndmVyc2lvbl9zY2hlZHVsZWRfZGF0ZScpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHZhbHVlIDwgbmV3IERhdGUoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHIuYWRkQ2xhc3MoJ2hpZ2hsaWdodC1sYXRlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZS5hZGREYXlzKC0xNSkgPCBuZXcgRGF0ZSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ci5hZGRDbGFzcygnaGlnaGxpZ2h0LTE1Jyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZS5hZGREYXlzKC0zMCkgPCBuZXcgRGF0ZSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ci5hZGRDbGFzcygnaGlnaGxpZ2h0LTMwJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyLmFkZENsYXNzKCdoaWdobGlnaHQtb2snKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5mb3JtYXQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgdHlwZS5saW5rOlxyXG5cdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0ZXh0LWNlbnRlcic7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdFx0c3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ251bWJlcic6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0ZXh0LXJpZ2h0JztcclxuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0ZXh0LWxlZnQnO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkgdmFsdWUgPSAnJztcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IHRkID0gdHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKGRhdGFDbGFzcylcclxuXHRcdFx0XHRcdFx0LnRleHQodmFsdWUpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChoZWFkZXIucGVybWlzc2lvbnMud3JpdGUpIHtcclxuXHRcdFx0XHRcdFx0dGQub24oJ2RibGNsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0Z2xvYmFsLmFqYXguc2V0KHRoaXMsICcvZ3BleGUvcHJvamVjdC9zZXJpZS9kb2N1bWVudC92ZXJzaW9uLycgKyBkYXRhWyd2ZXJzaW9uX2lkJ10gKyAnL3F1aWNrX2VkaXQvJyArIGhlYWRlci5pZCk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dGQub24oJ2FqYXguY29tcGxldGVkJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGxldCAkZm9ybSA9ICQodGhpcykuZmluZCgnZm9ybScpLmNoaWxkcmVuKCkuZmlyc3QoKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoJGZvcm0uZXhpc3QoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0JGZvcm0ub24oJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZS53aGljaCA9PSAxMykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuc3VibWl0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQkKCdib2R5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoJGZvcm0uaXMoZS50YXJnZXQpID09PSBmYWxzZSAmJiAkZm9ybS5oYXMoZS50YXJnZXQpLmV4aXN0KCkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKGhlYWRlci50eXBlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgdHlwZS5ib29sOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQgPT0gMCB8fCByZXN1bHQgPT0gbnVsbCkgcmVzdWx0ID0gJC5pMThuKCdubycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQgPT0gMSkgcmVzdWx0ID0gJC5pMThuKCd5ZXMnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSB0eXBlLmRhdGU6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnRvRGF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQXR0cignY2xhc3MnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0ICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vaGlnaGxpZ2h0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnaGlnaGxpZ2h0JykudG9TdHJpbmcoKSA9PSBoZWFkZXIuaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fHwgKHVybFNlYXJjaC5nZXQoJ2hpZ2hsaWdodCcpLnRvU3RyaW5nKCkgPT0gJ3ZlcnNpb25fc2NoZWR1bGVkX2RhdGUnICYmIGhlYWRlci5pZCA9PSAndmVyc2lvbl9kYXRlJykpIHtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdCA8IG5ldyBEYXRlKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdoaWdobGlnaHQtbGF0ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlc3VsdC5hZGREYXlzKC0xNSkgPCBuZXcgRGF0ZSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnaGlnaGxpZ2h0LTE1Jyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocmVzdWx0LmFkZERheXMoLTMwKSA8IG5ldyBEYXRlKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdoaWdobGlnaHQtMzAnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdoaWdobGlnaHQtb2snKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LmZvcm1hdCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0JCgnYm9keScpLm9mZignY2xpY2snKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aGVhZGVyLnRoLmhpZGUoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuLXN1Y2Nlc3Mgdy0xMDAnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdXJsJywgZGF0YS5kZXRhaWxVcmwpXHJcblx0XHRcdFx0XHQuYXR0cignZGF0YS10b2dnbGUnLCAnbW9kYWwgYWpheCcpXHJcblx0XHRcdFx0XHQuYXR0cignZGF0YS10YXJnZXQnLCAnI21vZGFsX2RldGFpbCcpXHJcblx0XHRcdFx0XHQudGV4dCgkLmkxOG4oJ2RldGFpbHMnKSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly9wYWdpbmF0aW9uXHJcblx0XHQkKCcjcGFnaW5hdGlvbicpLmVtcHR5KCk7XHJcblx0XHRcdFxyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCdtYi00Jyk7XHJcblx0XHRcclxuXHRcdGxldCBwYWdlTWF4ID0gcmVzdWx0LnBhZ2VNYXg7XHJcblx0XHRsZXQgcGFnZSA9IHBhcnNlSW50KHVybFNlYXJjaC5nZXQoJ3BhZ2UnKSkgfHwgMTtcclxuXHRcdHBhZ2UgPSBNYXRoLm1heChNYXRoLm1pbihwYWdlLCBwYWdlTWF4KSwgMSk7XHJcblx0XHRcclxuXHRcdGRpdiA9ICQoJyNwYWdpbmF0aW9uJykuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygncm93IG0tMCcpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGRpdi5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdjb2wnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHR1bCA9IGRpdi5hcHBlbmQoY3JlYXRlLnVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3BhZ2luYXRpb24gY29sIGp1c3RpZnktY29udGVudC1jZW50ZXInKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRpZiAocmVzdWx0LnBhZ2VNYXggPiAxKSB7XHJcblx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IDEpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAocGFnZSA+IDEpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgncGFnZScsIHBhZ2UgLSAxKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgTWF0aC5tYXgoMSwgcGFnZSAtIDEpKVxyXG5cdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0Lmh0bWwoJyZsYXF1bzsnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgcGFnZVN0YXJ0ID0gTWF0aC5taW4oTWF0aC5tYXgoMSwgcGFnZSAtIDIpLCBNYXRoLm1heCgxLCByZXN1bHQucGFnZU1heCAtIDQpKTtcclxuXHRcdFx0bGV0IHBhZ2VFbmQgPSBNYXRoLm1pbihwYWdlU3RhcnQgKyA1LCBwYWdlTWF4KTtcclxuXHRcdFx0XHJcblx0XHRcdGZvciAobGV0IGkgPSBwYWdlU3RhcnQ7IGkgPD0gcGFnZUVuZDsgaSsrKSB7XHJcblx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSBpKT8nIGFjdGl2ZSc6JycpKVxyXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdwYWdlJywgaSk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgaSlcclxuXHRcdFx0XHRcdFx0LnRleHQoaSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IHBhZ2VNYXgpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAocGFnZSA8IHBhZ2VNYXgpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgncGFnZScsIHBhZ2UgKyAxKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgTWF0aC5taW4ocGFnZU1heCwgcGFnZSArIDEpKVxyXG5cdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0Lmh0bWwoJyZyYXF1bzsnKVxyXG5cdFx0XHQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHNlbGVjdCA9IGRpdi5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdjb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbXQtMSBtci01JylcclxuXHRcdFx0LmFwcGVuZChjcmVhdGUuc2VsZWN0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gYmctZGFyayBib3JkZXItc2Vjb25kYXJ5IHRleHQtd2hpdGUnKVxyXG5cdFx0XHQuY3NzKCd3aWR0aCcsICcxNTAnKVxyXG5cdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3Jlc3VsdHNfcGVyX3BhZ2UnLCAkKHRoaXMpLnZhbCgpKVxyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRsZXQgcmVzdWx0c1BlclBhZ2UgPSBuZXcgTWFwKFtbJzEwJywgMTBdLCBbJzUwJywgNTBdLCBbJzEwMCcsIDEwMF0sIFskLmkxOG4oJ2FsbCcpLCAnMCddXSk7XHJcblx0XHRmb3IgKGxldCBbdGV4dCwgdmFsdWVdIG9mIHJlc3VsdHNQZXJQYWdlKSB7XHJcblx0XHRcdHNlbGVjdC5hcHBlbmQoY3JlYXRlLm9wdGlvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXR0cigndmFsdWUnLCB2YWx1ZSlcclxuXHRcdFx0XHQuYXR0cignc2VsZWN0ZWQnLCB1cmxTZWFyY2guZ2V0KCdyZXN1bHRzX3Blcl9wYWdlJykgPT0gdmFsdWUpXHJcblx0XHRcdFx0LnRleHQodGV4dClcclxuXHRcdFx0O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRcclxuXHRcdC8vZmxhc2hlc1xyXG5cdFx0XHJcblx0XHQkKCcjdG9hc3QnKS5lbXB0eSgpO1xyXG5cdFx0XHJcblx0XHRmb3IgKGxldCBsYWJlbCBvZiBPYmplY3Qua2V5cyhyZXN1bHQuZmxhc2gpKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgZGl2VG9hc3QgPSAkKCcjdG9hc3QnKS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3RvYXN0JylcclxuXHRcdFx0XHQuYXR0cigncm9sZScsICdhbGVydCcpXHJcblx0XHRcdFx0LmF0dHIoJ2RhdGEtZGVsYXknLCA1MDAwKVxyXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWxpdmUnLCAnYXNzZXJ0aXZlJylcclxuXHRcdFx0XHQuYXR0cignYXJpYS1hdG9taWMnLCB0cnVlKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgZGl2Q29udGFpbmVyID0gZGl2VG9hc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdhbGVydCBhbGVydC0nICsgbGFiZWwgKyAnIGQtZmxleCBweC0zIG0tMCcpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGRpdkNvbnRhaW5lci5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2FsaWduLXNlbGYtY2VudGVyJylcclxuXHRcdFx0XHQuYXBwZW5kKGdsb2JhbC5pY29uW2xhYmVsXSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHVsQm9keSA9IGRpdkNvbnRhaW5lci5hcHBlbmQoY3JlYXRlLnVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnanVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LWZpbGwnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRkaXZDb250YWluZXIuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdqdXN0aWZ5LWNvbnRlbnQtZW5kJylcclxuXHRcdFx0XHQuYXBwZW5kKGdsb2JhbC5pY29uLmNsb3NlKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChyZXN1bHQuZmxhc2hbbGFiZWxdLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRmb3IgKGxldCBtZXNzYWdlIG9mIHJlc3VsdC5mbGFzaFtsYWJlbF0pIHtcclxuXHRcdFx0XHRcdHVsQm9keS5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQudGV4dChtZXNzYWdlKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR1bEJvZHkudGV4dChyZXN1bHQuZmxhc2hbbGFiZWxdWzBdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0ZGl2VG9hc3QudG9hc3QoJ3Nob3cnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dXJsU2VhcmNoLmxpbmVDaGVja2VkKCk7XHJcblx0XHRcclxuXHRcdGdsb2JhbC5hamF4LmZldGNoKCcjdGFibGUgPiB0Ym9keScpO1xyXG4vL1x0XHQkKCd0YWJsZScpLnN0aWNreVRhYmxlSGVhZGVycygpXHJcblx0XHRcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdGFibGUnKS5vbignYWpheC5jb21wbGV0ZWQnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcblxyXG5cdFx0aWYgKGUudGFyZ2V0ICE9PSB0aGlzKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9KTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFF1aWNrIGVkaXRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gTW9kYWxcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyNtb2RhbF9kZXRhaWwnKS5vbignYWpheC5jb21wbGV0ZWQnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJyN2ZXJzaW9uX2VkaXRfZGV0YWlsLCAjdmVyc2lvbl9kZWxldGVfZGV0YWlsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGdsb2JhbC5hamF4LnNldCgnI21vZGFsJywgJCh0aGlzKS5kYXRhKCd1cmwnKSArICc/aWRbXT0nICsgJCgnI3ZlcnNpb25fdGFicz5hLmFjdGl2ZScpLmRhdGEoJ2lkJykgKyAnJm1vZGFsPTEnLCB7ZnJvbTogdGhpc30pO1xyXG5cdCAgICB9KTtcclxuXHRcdFxyXG5cdH0pO1xyXG5cdFx0XHJcblx0JCgnI21vZGFsJykub24oJ2FqYXguc3VjY2VzcycsIGZ1bmN0aW9uKGUsIHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcclxuXHRcdFxyXG5cdFx0aWYgKHJlc3VsdCA9PT0gJycpIHtcclxuXHRcdFx0XHJcblx0XHRcdCQoJyNtb2RhbF9jb250YWluZXInKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0XHRcclxuXHRcdFx0JCgnI21vZGFsX2RldGFpbF9jb250YWluZXInKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFxyXG5cdFx0fSBlbHNlIGlmICgkKCc8ZGl2PicgKyByZXN1bHQgKyAnPC9kaXY+JykuZmluZCgnZGl2Lm1vZGFsLWJvZHknKS5leGlzdCgpKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIGlmICgkKCc8ZGl2PicgKyByZXN1bHQgKyAnPC9kaXY+JykuZmluZCgncHJlLnNmLWR1bXAnKS5leGlzdCgpKSB7IC8vZm9yIGRlYnVnIG9ubHlcclxuXHRcdFx0cmV0dXJuIHRydWU7XHRcclxuXHRcdH1cclxuXHRcdCQoJyNtb2RhbF9jb250YWluZXInKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI21vZGFsX2RldGFpbF9jb250YWluZXInKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBTZXR1cFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0bGV0IHVybCA9ICQoJyN0YWJsZV9jb250YWluZXInKS5kYXRhKCd1cmwnKTtcclxuXHRnbG9iYWwuYWpheC5zZXQoJyN0YWJsZV9jb250YWluZXInLCB1cmwpO1xyXG5cdFxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9