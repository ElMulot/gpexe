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
      (function () {
        var header = {
          id: field.id,
          title: field.title,
          type: field.type,
          permissions: field.permissions,
          defaultWidth: field.default_width,
          hasSort: field.elements && field.elements.some(function (v) {
            return v.sort === true;
          }),
          hasFilter: field.elements && field.elements.some(function (v) {
            return v.filter;
          }),
          elements: []
        };
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
      })();
    }
  }

  var _iterator = _createForOfIteratorHelper(gpexe.headers),
      _step;

  try {
    var _loop2 = function _loop2() {
      var header = _step.value;
      header.th = tr.append(create.th).children().last().css('width', header.defaultWidth + 'em');

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
            var _iterator17 = _createForOfIteratorHelper(header.elements),
                _step17;

            try {
              for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                element = _step17.value;

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
              _iterator17.e(err);
            } finally {
              _iterator17.f();
            }

            var _iterator18 = _createForOfIteratorHelper(header.elements),
                _step18;

            try {
              for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                element = _step18.value;

                if (element.sort) {
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

  var _iterator2 = _createForOfIteratorHelper(gpexe.headers),
      _step2;

  try {
    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      var header = _step2.value;
      colResize(header);
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }

  $('body').on('mousemove', function (e) {
    if ($.isEmptyObject(gpexe.colResize) === false) {
      var width = Math.max(1, Math.round(pxToRem(gpexe.colResize.currentWidth + (e.pageX - gpexe.colResize.currentPosition))));
      gpexe.colResize.th.css('width', width + 'rem');
    } //		if ($.isEmptyObject(gpexe.colDrag) === false) {
    //			gpexe.colDrag.th.addClass('col-drag-handle')
    //		}

  });
  $('body').on('mouseup', function (e) {
    if ($.isEmptyObject(gpexe.colResize) === false) {
      var _iterator3 = _createForOfIteratorHelper(gpexe.headers),
          _step3;

      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var header = _step3.value;

          if (gpexe.colResize.th.is(header.th)) {
            var width = Math.max(1, Math.round(pxToRem(gpexe.colResize.th.width())));
            urlSearch["delete"]('display[' + header.id + ']');
            urlSearch.append('display[' + header.id + ']', width);
            break;
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }

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
        gpexe.colResize = {
          th: $(e.target).parent(),
          currentPosition: e.pageX,
          currentWidth: $(e.target).parent().width()
        };
      });
      header.th.next().append(create.div).children().last().css('left', '0').addClass('col-resize-handle').on('mousedown', function (e) {
        console.log(e);
        gpexe.colResize = {
          th: $(e.target).parent().prevAll(':visible').first(),
          currentPosition: e.pageX,
          currentWidth: $(e.target).parent().prevAll(':visible').first().width()
        };
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
  var _iterator19 = _createForOfIteratorHelper(gpexe.series),
      _step19;

  try {
    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
      var serie = _step19.value;
      serie.btn = $('#series').append(create.a).children().last().attr('role', 'button').addClass('btn btn-primary m-1').attr('href', serie.url).text(serie.name);
    }
  } catch (err) {
    _iterator19.e(err);
  } finally {
    _iterator19.f();
  }
} //---------------
//fillDisplayPannel
//---------------


function fillDisplayPannel() {
  var divCol = $('#display_panel').append(create.div).children().last().addClass('row py-2').append(create.div).children().last().addClass('col');

  var _iterator20 = _createForOfIteratorHelper(gpexe.headers),
      _step20;

  try {
    var _loop3 = function _loop3() {
      var header = _step20.value;
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

    for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
      _loop3();
    }
  } catch (err) {
    _iterator20.e(err);
  } finally {
    _iterator20.f();
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

    var _iterator21 = _createForOfIteratorHelper(result),
        _step21;

    try {
      var _loop4 = function _loop4() {
        var vue = _step21.value;
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

      for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
        _loop4();
      } //---------------------
      // Dragtable
      //---------------------
      //		var dragger = tableDragger.default($('table').get(0), {
      //	        mode: 'column',
      //		});

    } catch (err) {
      _iterator21.e(err);
    } finally {
      _iterator21.f();
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

    var _iterator22 = _createForOfIteratorHelper(gpexe.series),
        _step22;

    try {
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
        var serie = _step22.value;

        if (result.serie && serie.id == result.serie) {
          serie.btn.removeClass('btn-primary');
          serie.btn.addClass('btn-outline-primary');
        } else {
          serie.btn.removeClass('btn-outline-primary');
          serie.btn.addClass('btn-primary');
        }
      }
    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
    }

    var _iterator23 = _createForOfIteratorHelper(gpexe.headers),
        _step23;

    try {
      for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
        var header = _step23.value;

        //display
        if (display = result.query.display[header.id]) {
          header.aDisplay.addClass('btn-outline-primary');
          header.aDisplay.removeClass('btn-primary');
          header.chxDisplay.prop('checked', true);
          header.th.css('width', display + 'em');
          header.th.show(); //headers

          header.btnDropdown.empty();
          header.isFiltered = false;
          header.isSortedAsc = false;
          header.isSortedDesc = false;

          if (header.hasSort) {
            var _iterator27 = _createForOfIteratorHelper(header.elements),
                _step27;

            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                element = _step27.value;

                if (urlSearch.get('sortAsc') == element.id) {
                  header.isSortedAsc = true;
                }

                if (urlSearch.get('sortDesc') == element.id) {
                  header.isSortedDesc = true;
                }
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }
          }

          if (header.hasFilter) {
            var _iterator28 = _createForOfIteratorHelper(header.elements),
                _step28;

            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                element = _step28.value;

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
              _iterator28.e(err);
            } finally {
              _iterator28.f();
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
      _iterator23.e(err);
    } finally {
      _iterator23.f();
    }

    var _iterator24 = _createForOfIteratorHelper(result.datas),
        _step24;

    try {
      var _loop6 = function _loop6() {
        var data = _step24.value;
        var tr = $('#table > tbody').append(create.tr).children().last();
        var div = tr.append(create.td).children().last().append(create.div).children().last().addClass('custom-control custom-checkbox');
        div.append(create.checkbox).children().last().attr('id', 'c_' + data.version_id).val(data.version_id).on('click', urlSearch.lineChecked.bind(urlSearch));
        div.append(create.label).children().last().attr('for', 'c_' + data.version_id);

        var _iterator29 = _createForOfIteratorHelper(gpexe.headers),
            _step29;

        try {
          var _loop7 = function _loop7() {
            var header = _step29.value;
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

          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            _loop7();
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }

        tr.append(create.td).children().last().append(create.smallButton).children().last().addClass('btn-success w-100').attr('data-url', data.detailUrl).attr('data-toggle', 'modal ajax').attr('data-target', '#modal_detail').text($.i18n('details'));
      };

      for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
        _loop6();
      } //pagination

    } catch (err) {
      _iterator24.e(err);
    } finally {
      _iterator24.f();
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

    var _iterator25 = _createForOfIteratorHelper(resultsPerPage),
        _step25;

    try {
      for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
        var _step25$value = _slicedToArray(_step25.value, 2),
            text = _step25$value[0],
            _value = _step25$value[1];

        select.append(create.option).children().last().attr('value', _value).attr('selected', urlSearch.get('results_per_page') == _value).text(text);
      } //flashes

    } catch (err) {
      _iterator25.e(err);
    } finally {
      _iterator25.f();
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
        var _iterator26 = _createForOfIteratorHelper(result.flash[label]),
            _step26;

        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var message = _step26.value;
            ulBody.append(create.li).children().last().text(message);
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwiZ3BleGUiLCJoZWFkZXJzIiwiQXJyYXkiLCJzZXJpZXMiLCJ0YWJsZSIsImNoeENoZWNrYWxsIiwiY29sUmVzaXplIiwiY29sRHJhZyIsInR5cGUiLCJib29sIiwidGV4dCIsImRhdGUiLCJsaW5rIiwibGlzdCIsIlVybFNlYXJjaCIsIl9wYXJhbXNBcnJheSIsInByb3RvdHlwZSIsImhhcyIsImtleSIsImdldCIsImV4ZWMiLCJnZXRBbGwiLCJzZXQiLCJ2YWx1ZSIsImFwcGVuZCIsInNldEZyb21VcmwiLCJwYXJhbXNBcnJheSIsInRvVXJsIiwidXJsIiwidG9TdHJpbmciLCJ2YWx1ZXMiLCJpIiwiam9pbiIsImZldGNoIiwiZGF0YSIsImdsb2JhbCIsImFqYXgiLCJnZXRWdWVzIiwibGluZUNoZWNrZWQiLCJjaGVja2VkIiwidW5jaGVja2VkIiwidGhhdCIsImZpbmQiLCJlYWNoIiwiaXMiLCJwcm9wIiwidmFsIiwic2hvdyIsImhpZGUiLCJzZXR1cCIsImRhdGFzIiwidGhlYWQiLCJjcmVhdGUiLCJjaGlsZHJlbiIsImxhc3QiLCJ0ciIsInRoIiwiY3NzIiwiZGl2IiwiYWRkQ2xhc3MiLCJjaGVja2JveCIsImF0dHIiLCJvbiIsInVybFNlYXJjaCIsImxhYmVsIiwiZmllbGRzIiwiZmllbGQiLCJkaXNwbGF5IiwiaGVhZGVyIiwiaWQiLCJ0aXRsZSIsInBlcm1pc3Npb25zIiwiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdF93aWR0aCIsImhhc1NvcnQiLCJlbGVtZW50cyIsInNvbWUiLCJ2Iiwic29ydCIsImhhc0ZpbHRlciIsImZpbHRlciIsImoiLCJlbGVtZW50IiwiZSIsImMiLCJpMThuIiwiY2hvaWNlcyIsInB1c2giLCJuYW1lIiwiYSIsImIiLCJ1bnNoaWZ0IiwiZGl2RHJvcGRvd25Hcm91cCIsImNsaWNrRXZlbnQiLCJjb250YWlucyIsInJlbGF0ZWRUYXJnZXQiLCJwYXJlbnROb2RlIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJkaXZEcm9wZG93bk1lbnUiLCJlbXB0eSIsIm1lbnVCdXR0b24iLCJidG5Ecm9wZG93biIsImNyZWF0ZU1lbnUiLCJ0Ym9keSIsImlzRW1wdHlPYmplY3QiLCJ3aWR0aCIsIk1hdGgiLCJtYXgiLCJyb3VuZCIsInB4VG9SZW0iLCJjdXJyZW50V2lkdGgiLCJwYWdlWCIsImN1cnJlbnRQb3NpdGlvbiIsImxlbmd0aCIsImNyZWF0ZU1lbnVJdGVtIiwiZGl2Q29udGVudCIsInByZXBlbmQiLCJmaXJzdCIsImRpdkJ1dHRvbnMiLCJzbWFsbEJ1dHRvbiIsImljb24iLCJhcnJvd0Rvd24iLCJkaXZGaWx0ZXIiLCJ0cmlnZ2VyIiwiY2h4SW5mIiwicmVzdWx0IiwiaW5wdXRJbmYiLCJjaHhTdXAiLCJpbnB1dFN1cCIsImNoeEhpZ2hsaWdodCIsImRyb3Bkb3duIiwic2VhcmNoVmFsdWUiLCJpbnB1dFNlYXJjaCIsInRvTG93ZXJDYXNlIiwiY2h4IiwiY2hvaWNlIiwiYXJyb3dVcCIsImRpdkxpc3QiLCJwYXJzZUludCIsImRpdlNlYXJjaCIsImlucHV0Iiwid2hpY2giLCJzcGFuIiwiaHRtbCIsInZhbHVlSW5mIiwidmFsdWVTdXAiLCJoaWdobGlnaHQiLCJkaXZJbmYiLCJ0ZXN0IiwibGFiZWxJbmYiLCJkYXRlcGlja2VyIiwic3RvcFByb3BhZ2F0aW9uIiwiZGl2U3VwIiwibGFiZWxTdXAiLCJkaXZIaWdobGlnaHQiLCJpbmRleE9mIiwicGFyZW50IiwibmV4dCIsImNvbnNvbGUiLCJsb2ciLCJwcmV2QWxsIiwiZmlsbFNlcmllc1Bhbm5lbCIsInNlcmllIiwiYnRuIiwiZmlsbERpc3BsYXlQYW5uZWwiLCJkaXZDb2wiLCJhRGlzcGxheSIsImNoeERpc3BsYXkiLCJkb2N1bWVudCIsInJlYWR5IiwiZnJvbSIsImNvbGxhcHNlIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImJsdXIiLCJ0ZXh0U3RhdHVzIiwianFYSFIiLCJsb2FkaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJ2dWUiLCJidXR0b24iLCJkaXYyIiwiYnRuMiIsImRpdjMiLCJtb2RhbCIsInNlYXJjaFVybCIsInBhcmFtIiwicXVlcnkiLCJpc0ZpbHRlcmVkIiwiaXNTb3J0ZWRBc2MiLCJpc1NvcnRlZERlc2MiLCJmdW5uZWxGaWxsIiwiZnVubmVsIiwidGQiLCJ2ZXJzaW9uX2lkIiwiYmluZCIsInVuZGVmaW5lZCIsImRhdGFDbGFzcyIsInRvRGF0ZSIsIkRhdGUiLCJhZGREYXlzIiwiZm9ybWF0Iiwid3JpdGUiLCIkZm9ybSIsImV4aXN0Iiwic3VibWl0IiwicmVtb3ZlQXR0ciIsIm9mZiIsImRldGFpbFVybCIsInBhZ2VNYXgiLCJwYWdlIiwibWluIiwidWwiLCJsaSIsInBhZ2VTdGFydCIsInBhZ2VFbmQiLCJzZWxlY3QiLCJyZXN1bHRzUGVyUGFnZSIsIk1hcCIsIm9wdGlvbiIsIk9iamVjdCIsImtleXMiLCJmbGFzaCIsImRpdlRvYXN0IiwiZGl2Q29udGFpbmVyIiwidWxCb2R5IiwiY2xvc2UiLCJtZXNzYWdlIiwidG9hc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsOERBQUQsQ0FBdEIsQyxDQUNBO0FBQ0E7QUFDQTs7O0FBQ0FBLG1CQUFPLENBQUMsd0RBQUQsQ0FBUDs7QUFDQSxJQUFNRSxlQUFlLEdBQUdGLG1CQUFPLENBQUMsMEZBQUQsQ0FBL0I7O0FBRUEsSUFB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QUFDQUMsUUFBTSxDQUFDQyxJQUFQLENBQVlkLEdBQVosQ0FBZ0Isa0JBQWhCLEVBQW9DTSxHQUFwQztBQUVBLENBbHFCRCxFIiwiZmlsZSI6ImRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5jb25zdCBwb3BwZXIgPSByZXF1aXJlKCdwb3BwZXIuanMnKTtcclxuLy9yZXF1aXJlKCdzdGlja3ktdGFibGUtaGVhZGVycycpO1xyXG4vL2NvbnN0IHRhYmxlRHJhZ2dlciA9IHJlcXVpcmUoJ3RhYmxlLWRyYWdnZXInKTtcclxuLy9yZXF1aXJlKCdqcXVlcnktcmVzaXphYmxlLWNvbHVtbnMnKTtcclxucmVxdWlyZSgnLi4vY3NzL2RvY3VtZW50LnNjc3MnKTtcclxuY29uc3QgVVJMU2VhcmNoUGFyYW1zID0gcmVxdWlyZSgnQHVuZ2FwL3VybC1zZWFyY2gtcGFyYW1zL2NqcycpO1xyXG5cclxudmFyIGdwZXhlID0ge1xyXG5cdGhlYWRlcnM6IG5ldyBBcnJheSgpLFxyXG5cdHNlcmllczogW10sXHJcblx0dGFibGU6IG51bGwsXHJcblx0Y2h4Q2hlY2thbGw6IG51bGwsXHJcblx0Y29sUmVzaXplOiB7fSxcclxuXHRjb2xEcmFnOiB7fSxcclxufVxyXG5cclxuY29uc3QgdHlwZSA9IHtcclxuXHRib29sOiAxMSxcclxuXHR0ZXh0OiAxMixcclxuXHRkYXRlOiAxMyxcclxuXHRsaW5rOiAxNCxcclxuXHRsaXN0OiAxNSxcclxufTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vVXJsU2VhcmNoXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBVcmxTZWFyY2ggKCkge1xyXG5cdHRoaXMuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG59XHJcblxyXG5VcmxTZWFyY2gucHJvdG90eXBlID0ge1xyXG5cclxuXHRoYXM6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmhhcyhrZXkpO1xyXG5cdH0sXHJcblx0XHJcblx0Z2V0OiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdGlmICgvXFxTK1xcW1xcXS9nLmV4ZWMoa2V5KSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGFyYW1zQXJyYXkuZ2V0QWxsKGtleSkgfHwgW107XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGFyYW1zQXJyYXkuZ2V0KGtleSkgfHwgJyc7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHRcdGlmIChrZXkgPT0gJ3Z1ZScpIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsndnVlJzogdmFsdWV9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5LnNldChrZXksIHZhbHVlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdGFwcGVuZDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG5cdFx0aWYgKGtleSA9PSAndnVlJykge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoeyd2dWUnOiB2YWx1ZX0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkuYXBwZW5kKGtleSwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0ZGVsZXRlOiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdHRoaXMuX3BhcmFtc0FycmF5LmRlbGV0ZShrZXkpO1xyXG5cdH0sXHJcblx0XHJcblx0c2V0RnJvbVVybDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGxldCBwYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXModmFsdWUpO1xyXG5cdFx0aWYgKHBhcmFtc0FycmF5LmhhcygndnVlJykpIHtcclxuXHRcdFx0dGhpcy5zZXQoJ3Z1ZScsIHBhcmFtc0FycmF5LmdldCgndnVlJykpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBwYXJhbXNBcnJheTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdHRvVXJsOiBmdW5jdGlvbihrZXkgPSAnJykge1xyXG5cdFx0bGV0IHVybCA9ICcnO1xyXG5cdFx0aWYgKGtleSA9PSAnJykge1xyXG5cdFx0XHR1cmwgPSB0aGlzLl9wYXJhbXNBcnJheS50b1N0cmluZygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFsdWVzID0gdGhpcy5nZXQoa2V5KTtcclxuXHRcdFx0Zm9yIChpIGluIHZhbHVlcykge1xyXG5cdFx0XHRcdHZhbHVlc1tpXSA9IGtleSArICc9JyArIHZhbHVlc1tpXTtcclxuXHRcdFx0fVxyXG5cdFx0XHR1cmwgPSB2YWx1ZXMuam9pbignJicpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICh1cmwpPyc/JyArIHVybDonJztcclxuXHR9LFxyXG5cdFxyXG5cdGZldGNoOiBmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHVybCA9ICQoJyN0YWJsZScpLmRhdGEoJ3VybCcpICsgdGhpcy50b1VybCgpO1xyXG5cdFx0Z2xvYmFsLmFqYXguc2V0KCcjdGFibGUnLCB1cmwpO1xyXG5cdFx0XHJcblx0fSxcclxuXHRcclxuXHRnZXRWdWVzOiBmdW5jdGlvbigpIHtcclxuXHRcdGxldCB1cmwgPSAkKCcjdnVlcycpLmRhdGEoJ3VybCcpO1xyXG5cdFx0Z2xvYmFsLmFqYXguc2V0KCcjdnVlcycsIHVybCk7XHJcblx0fSxcclxuXHRcclxuXHRsaW5lQ2hlY2tlZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHJcblx0XHR2YXIgY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0dmFyIHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQkKCd0Ym9keScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdGNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHVuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmIChjaGVja2VkICYmIHVuY2hlY2tlZCkge1xyXG5cdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdpbmRldGVybWluYXRlJywgdHJ1ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHRoYXQuZGVsZXRlKCdpZFtdJyk7XHJcblx0XHRcclxuXHRcdGlmIChjaGVja2VkKSB7XHJcblx0XHRcdCQoJ3RhYmxlJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5wcm9wKCdpZCcpICE9ICdjaGVja19hbGwnICYmICQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdHRoYXQuYXBwZW5kKCdpZFtdJywgJCh0aGlzKS52YWwoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdCQoJyNkb2N1bWVudF9lZGl0Jykuc2hvdygpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfbW92ZScpLnNob3coKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLnNob3coKTtcclxuXHRcdFx0JCgnI3ZlcnNpb25fbWVudScpLnNob3coKTtcclxuXHRcdH0gZWxzZSBpZih1bmNoZWNrZWQpIHtcclxuXHRcdFx0JCgnI3ZlcnNpb24nKS52YWwoJycpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZWRpdCcpLmhpZGUoKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X21vdmUnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyN2ZXJzaW9uX21lbnUnKS5oaWRlKCk7XHJcblx0XHR9XHJcblx0fSxcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy8gU2V0dXBcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIHNldHVwKGRhdGFzKSB7XHJcblx0XHJcblx0JCgnI3RhYmxlJykuc2hvdygpO1xyXG5cdFxyXG5cdGxldCB0aGVhZCA9ICQoJyN0YWJsZScpLmFwcGVuZChjcmVhdGUudGhlYWQpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdGxldCB0ciA9IHRoZWFkLmFwcGVuZChjcmVhdGUudHIpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdGxldCB0aCA9IHRyLmFwcGVuZChjcmVhdGUudGgpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHQuY3NzKCd3aWR0aCcsICcyZW0nKVxyXG5cdDtcclxuXHRcclxuXHRsZXQgZGl2ID0gdGguYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHQuYWRkQ2xhc3MoJ2J0bi1ncm91cCBjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSByb3VuZGVkLTAnKVxyXG5cdDtcclxuXHRcclxuXHRncGV4ZS5jaHhDaGVja2FsbCA9IGRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0LmF0dHIoJ2lkJywgJ2NoZWNrX2FsbCcpXHJcblx0XHQuYXR0cigndW5jaGVja2VkJywgJ3VuY2hlY2tlZCcpXHJcblx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCAkKCd0Ym9keScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgJCgnI2NoZWNrX2FsbCcpLmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdCB1cmxTZWFyY2gubGluZUNoZWNrZWQoKTtcclxuXHRcdH0pO1xyXG5cdDtcclxuXHRcclxuXHRkaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdC5hZGRDbGFzcygnbXgtMScpXHJcblx0XHQuYXR0cignZm9yJywgJ2NoZWNrX2FsbCcpXHJcblx0O1x0XHJcblx0XHJcblx0Z3BleGUuc2VyaWVzID0gZGF0YXMuc2VyaWVzO1xyXG5cdFxyXG5cdGZvciAobGV0IGkgaW4gZGF0YXMuZmllbGRzKSB7XHJcblx0XHRcclxuXHRcdGZpZWxkID0gZGF0YXMuZmllbGRzW2ldO1xyXG5cdFx0XHJcblx0XHRpZiAoZmllbGQuZGlzcGxheS50YWJsZSkge1xyXG5cdFx0XHJcblx0XHRcdGxldCBoZWFkZXIgPSB7XHJcblx0XHRcdFx0aWQ6IGZpZWxkLmlkLFxyXG5cdFx0XHRcdHRpdGxlOiBmaWVsZC50aXRsZSxcclxuXHRcdFx0XHR0eXBlOiBmaWVsZC50eXBlLFxyXG5cdFx0XHRcdHBlcm1pc3Npb25zOiBmaWVsZC5wZXJtaXNzaW9ucyxcclxuXHRcdFx0XHRkZWZhdWx0V2lkdGg6IGZpZWxkLmRlZmF1bHRfd2lkdGgsXHJcblx0XHRcdFx0aGFzU29ydDogKGZpZWxkLmVsZW1lbnRzICYmIGZpZWxkLmVsZW1lbnRzLnNvbWUodiA9PiB2LnNvcnQgPT09IHRydWUpKSxcclxuXHRcdFx0XHRoYXNGaWx0ZXI6IChmaWVsZC5lbGVtZW50cyAmJiBmaWVsZC5lbGVtZW50cy5zb21lKHYgPT4gdi5maWx0ZXIpKSxcclxuXHRcdFx0XHRlbGVtZW50czogW10sXHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCQuZWFjaChmaWVsZC5lbGVtZW50cywgZnVuY3Rpb24gKGosIGVsZW1lbnQpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRlID0ge1xyXG5cdFx0XHRcdFx0aWQ6IGVsZW1lbnQuaWQsXHJcblx0XHRcdFx0XHR0aXRsZTogZWxlbWVudC50aXRsZSxcclxuXHRcdFx0XHRcdHNvcnQ6IGVsZW1lbnQuc29ydCxcclxuXHRcdFx0XHR9O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChlbGVtZW50LmZpbHRlcikge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzd2l0Y2ggKGVsZW1lbnQuZmlsdGVyLnR5cGUpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSB0eXBlLmJvb2w6XHJcblx0XHRcdFx0XHRcdFx0dmFyIGMgPSBbXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6ICQuaTE4bignbm90QXBwbGljYWJsZScpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogLTEsXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiAkLmkxOG4oJ3llcycpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogMSxcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6ICQuaTE4bignbm8nKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDAsXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XTtcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcclxuXHRcdFx0XHRcdFx0Y2FzZSB0eXBlLmxpc3Q6XHJcblx0XHRcdFx0XHRcdFx0dmFyIGMgPSBbXTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHQkLmVhY2goZWxlbWVudC5maWx0ZXIuY2hvaWNlcywgZnVuY3Rpb24gKGtleSwgdmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGMucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dDogdmFsdWUubmFtZSB8fCB2YWx1ZS52YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogdmFsdWUuaWQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Yy5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiB2YWx1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZToga2V5LFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRjLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChhLnRleHQgPCBiLnRleHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIC0xO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGEudGV4dCA+IGIudGV4dCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gMTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybiAwO1xyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGMudW5zaGlmdCh7XHJcblx0XHRcdFx0XHRcdFx0XHR0ZXh0OiAkLmkxOG4oJ3NlbGVjdEFsbCcpLFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IC0xLFxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlLmZpbHRlciA9IHtcclxuXHRcdFx0XHRcdFx0dHlwZTogZWxlbWVudC5maWx0ZXIudHlwZSxcclxuXHRcdFx0XHRcdFx0Y2hvaWNlczogYyxcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGhlYWRlci5lbGVtZW50cy5wdXNoKGUpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFxyXG5cdFx0XHRncGV4ZS5oZWFkZXJzLnB1c2goaGVhZGVyKTtcclxuXHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdGZvciAobGV0IGhlYWRlciBvZiBncGV4ZS5oZWFkZXJzKSB7XHJcblx0XHRcclxuXHRcdGhlYWRlci50aCA9IHRyLmFwcGVuZChjcmVhdGUudGgpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5jc3MoJ3dpZHRoJywgaGVhZGVyLmRlZmF1bHRXaWR0aCArICdlbScpXHJcblx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRpZiAoaGVhZGVyLmhhc1NvcnQgfHwgaGVhZGVyLmhhc0ZpbHRlcikge1xyXG5cdFx0XHRcclxuXHRcdFx0Ly9tYWluIGJ1dHRvbiBncm91cFxyXG5cdFx0XHRsZXQgZGl2RHJvcGRvd25Hcm91cCA9IGhlYWRlci50aC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2J0bi1ncm91cCB3LTEwMCcpXHJcblx0XHRcdFx0LmF0dHIoJ3JvbGUnLCAnZ3JvdXAnKVxyXG5cdFx0XHRcdC5vbignaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmKGUuY2xpY2tFdmVudCAmJiAkLmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldC5wYXJlbnROb2RlLCBlLmNsaWNrRXZlbnQudGFyZ2V0KSkge1xyXG5cdFx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KClcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdGhlYWRlci5kaXZEcm9wZG93bk1lbnUuZW1wdHkoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHQvL3RpdGxlXHJcblx0XHRcdGRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygndGV4dC10cnVuY2F0ZSB3LTEwMCcpXHJcblx0XHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0XHQudGV4dChoZWFkZXIudGl0bGUpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKGhlYWRlci5oYXNGaWx0ZXIpIHtcclxuXHRcdFx0XHRcdFx0Zm9yIChlbGVtZW50IG9mIGhlYWRlci5lbGVtZW50cykge1xyXG5cdFx0XHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gZWxlbWVudC5pZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydEFzYycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydERlc2MnLCBlbGVtZW50LmlkKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IGVsZW1lbnQuaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0QXNjJywgZWxlbWVudC5pZCk7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRmb3IgKGVsZW1lbnQgb2YgaGVhZGVyLmVsZW1lbnRzKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuc29ydCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydEFzYycsIGVsZW1lbnQuaWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cdFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdC8vZHJvcERvd24gYnV0dG9uXHJcblx0XHRcdGhlYWRlci5idG5Ecm9wZG93biA9IGRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncHgtMCcpXHJcblx0XHRcdFx0LmNzcygnd2lkdGgnLCAnM2VtJylcclxuXHRcdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHRcdC5hdHRyKCdpZCcsICdiXycgKyBoZWFkZXIuaWQpXHJcblx0XHRcdFx0LmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ2Ryb3Bkb3duJylcclxuXHRcdFx0XHQuYXR0cignZGF0YS1kaXNwbGF5JywgJ3N0YXRpYycpXHJcblx0XHRcdFx0LmF0dHIoJ2FyaWEtaGFzcG9wdXAnLCB0cnVlKVxyXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWV4cGFuZGVkJywgZmFsc2UpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdC8vZHJvcERvd24gbWVudVxyXG5cdFx0XHRoZWFkZXIuZGl2RHJvcGRvd25NZW51ID0gZGl2RHJvcGRvd25Hcm91cC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2Ryb3Bkb3duLW1lbnUgZHJvcGRvd24tbWVudS1sZWZ0JylcclxuXHRcdFx0XHQuYXR0cignYXJpYS1sYWJlbGxlZGJ5JywgJ2JfJyArIGhlYWRlci5pZClcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2QtZmxleCBmbGV4LXJvdycpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGRpdkRyb3Bkb3duR3JvdXAub24oJ3Nob3cuYnMuZHJvcGRvd24nLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRjcmVhdGVNZW51KGhlYWRlcik7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFxyXG5cdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24gPSBoZWFkZXIudGguYXBwZW5kKGNyZWF0ZS5tZW51QnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygndGV4dC10cnVuY2F0ZSB3LTEwMCcpXHJcblx0XHRcdFx0LnRleHQoaGVhZGVyLnRpdGxlKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdilcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHJcblx0fVxyXG5cdFxyXG5cdHRyLmFwcGVuZChjcmVhdGUudGgpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHQuYXR0cignaWQnLCAnZGV0YWlsJylcclxuXHRcdC5jc3MoJ3dpZHRoJywgJzZlbScpXHJcblx0O1xyXG5cdFxyXG5cdGxldCB0Ym9keSA9ICQoJyN0YWJsZScpLmFwcGVuZChjcmVhdGUudGJvZHkpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gQ29sIFJlc2l6ZVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0Zm9yIChsZXQgaGVhZGVyIG9mIGdwZXhlLmhlYWRlcnMpIHtcclxuXHRcdGNvbFJlc2l6ZShoZWFkZXIpO1xyXG5cdH1cclxuXHRcclxuXHQkKCdib2R5Jykub24oJ21vdXNlbW92ZScsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICgkLmlzRW1wdHlPYmplY3QoZ3BleGUuY29sUmVzaXplKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0bGV0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChweFRvUmVtKGdwZXhlLmNvbFJlc2l6ZS5jdXJyZW50V2lkdGggKyAoZS5wYWdlWCAtIGdwZXhlLmNvbFJlc2l6ZS5jdXJyZW50UG9zaXRpb24pKSkpO1xyXG5cdFx0XHRncGV4ZS5jb2xSZXNpemUudGguY3NzKCd3aWR0aCcsIHdpZHRoICsgJ3JlbScpO1xyXG5cdFx0fVxyXG5cdFx0XHJcbi8vXHRcdGlmICgkLmlzRW1wdHlPYmplY3QoZ3BleGUuY29sRHJhZykgPT09IGZhbHNlKSB7XHJcbi8vXHRcdFx0Z3BleGUuY29sRHJhZy50aC5hZGRDbGFzcygnY29sLWRyYWctaGFuZGxlJylcclxuLy9cdFx0fVxyXG5cdFx0XHJcblx0fSk7XHJcblx0XHJcblx0JCgnYm9keScpLm9uKCdtb3VzZXVwJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCQuaXNFbXB0eU9iamVjdChncGV4ZS5jb2xSZXNpemUpID09PSBmYWxzZSkge1xyXG5cdFx0XHRmb3IgKGxldCBoZWFkZXIgb2YgZ3BleGUuaGVhZGVycykge1xyXG5cdFx0XHRcdGlmIChncGV4ZS5jb2xSZXNpemUudGguaXMoaGVhZGVyLnRoKSkge1xyXG5cdFx0XHRcdFx0bGV0IHdpZHRoID0gTWF0aC5tYXgoMSwgTWF0aC5yb3VuZChweFRvUmVtKGdwZXhlLmNvbFJlc2l6ZS50aC53aWR0aCgpKSkpO1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnZGlzcGxheVsnICsgaGVhZGVyLmlkICsgJ10nKTtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5hcHBlbmQoJ2Rpc3BsYXlbJyArIGhlYWRlci5pZCArICddJywgd2lkdGgpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdGdwZXhlLmNvbFJlc2l6ZSA9IHt9O1xyXG5cdFx0fVxyXG5cdFx0XHJcbi8vXHRcdGlmICgkLmlzRW1wdHlPYmplY3QoZ3BleGUuY29sRHJhZykgPT09IGZhbHNlKSB7XHJcbi8vXHRcdFx0Z3BleGUuY29sRHJhZy50aC5yZW1vdmVDbGFzcygnY29sLWRyYWctaGFuZGxlJylcclxuLy9cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gQ29sIERyYWdcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG4vL1x0Zm9yIChsZXQgaGVhZGVyIG9mIGdwZXhlLmhlYWRlcnMpIHtcclxuLy9cdFx0Y29sRHJhZyhoZWFkZXIpO1xyXG4vL1x0fVxyXG5cdFxyXG5cdFxyXG5cdGZ1bmN0aW9uIGNyZWF0ZU1lbnUoaGVhZGVyKSB7XHJcblx0XHRcclxuXHRcdGlmIChoZWFkZXIuaGFzU29ydCB8fCBoZWFkZXIuaGFzRmlsdGVyKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRoZWFkZXIuZGl2RHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoaGVhZGVyLmVsZW1lbnRzLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdFx0Y3JlYXRlTWVudUl0ZW0oaGVhZGVyLCBoZWFkZXIuZWxlbWVudHNbMF0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGZvciAodmFyIGVsZW1lbnQgb2YgaGVhZGVyLmVsZW1lbnRzKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChlbGVtZW50LmZpbHRlciB8fCBlbGVtZW50LnNvcnQpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGNyZWF0ZU1lbnVJdGVtKGhlYWRlciwgZWxlbWVudCk7XHJcblxyXG5cdFx0XHRcdFx0XHQvL2hlYWRlciBpZiBtYW55IHNlbGVjdHNcclxuXHRcdFx0XHRcdFx0ZWxlbWVudC5kaXZDb250ZW50LnByZXBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5maXJzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHBiLTIgcHgtMScpXHJcblx0XHRcdFx0XHRcdFx0LmFwcGVuZChlbGVtZW50LnRpdGxlKVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKGhlYWRlciwgZWxlbWVudCkge1xyXG5cdFx0XHJcblx0XHRlbGVtZW50LmRpdkNvbnRlbnQgPSBoZWFkZXIuZGl2RHJvcGRvd25NZW51LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ214LTEnKVxyXG5cdFx0XHQuY3NzKCdtaW4td2lkdGgnLCAnMTVlbScpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGxldCBkaXZCdXR0b25zID0gZWxlbWVudC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3RleHQtY2VudGVyIHAtMScpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGlmIChlbGVtZW50LnNvcnQpIHtcclxuXHRcdFx0ZGl2QnV0dG9ucy5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hcHBlbmQoZ2xvYmFsLmljb24uYXJyb3dEb3duKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSBlbGVtZW50LmlkKT8ncHgtMiBidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J3B4LTIgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IGVsZW1lbnQuaWQpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnREZXNjJywgZWxlbWVudC5pZCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkZpbHRlci50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKGVsZW1lbnQuZmlsdGVyKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIgPSBkaXZCdXR0b25zLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LnRleHQoJC5pMThuKCdmaWx0ZXInKSlcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTMgYnRuLXByaW1hcnknKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRzd2l0Y2ggKGVsZW1lbnQuZmlsdGVyLnR5cGUpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjYXNlIHR5cGUuZGF0ZTpcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyXHJcblx0XHRcdFx0XHRcdC5vbignZmlsdGVyLnVwZGF0ZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddW10nKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIuY2h4SW5mLmlzKCc6Y2hlY2tlZCcpICYmIChyZXN1bHQgPSAvXuKJpVxccyhcXGR7Mn0tXFxkezJ9LVxcZHs0fSkvLmV4ZWMoZWxlbWVudC5maWx0ZXIuaW5wdXRJbmYudmFsKCkpKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScsICc+JyArIHJlc3VsdFsxXSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmIChlbGVtZW50LmZpbHRlci5jaHhTdXAuaXMoJzpjaGVja2VkJykgJiYgKHJlc3VsdCA9IC9e4omkXFxzKFxcZHsyfS1cXGR7Mn0tXFxkezR9KS8uZXhlYyhlbGVtZW50LmZpbHRlci5pbnB1dFN1cC52YWwoKSkpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXVtdJywgJzwnICsgcmVzdWx0WzFdKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZmlsdGVyLmNoeEhpZ2hsaWdodC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnaGlnaGxpZ2h0JywgZWxlbWVudC5pZCk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICh1cmxTZWFyY2guZ2V0KCdoaWdobGlnaHQnKS50b1N0cmluZygpID09IGVsZW1lbnQuaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ2hpZ2hsaWdodCcpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGVsZW1lbnQgb2YgaGVhZGVyLmVsZW1lbnRzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyLnRyaWdnZXIoJ2ZpbHRlci51cGRhdGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHRcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSB0eXBlLnRleHQ6XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkZpbHRlclxyXG5cdFx0XHRcdFx0XHQub24oJ2ZpbHRlci51cGRhdGUnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXScpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHZhciBzZWFyY2hWYWx1ZSA9IGVsZW1lbnQuaW5wdXRTZWFyY2gudmFsKCkudG9Mb3dlckNhc2UoKVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmIChzZWFyY2hWYWx1ZSAhPSAnJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ10nLCBzZWFyY2hWYWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgZWxlbWVudCBvZiBoZWFkZXIuZWxlbWVudHMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChlbGVtZW50LmZpbHRlcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIudHJpZ2dlcignZmlsdGVyLnVwZGF0ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24uZHJvcGRvd24oJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcdFxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRjYXNlIHR5cGUubGlzdDpcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyXHJcblx0XHRcdFx0XHRcdC5vbignZmlsdGVyLnVwZGF0ZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddW10nKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIuY2hvaWNlc1swXS5jaHguaXMoJzpjaGVja2VkJykgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2hvaWNlLmNoeC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5hcHBlbmQoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddW10nLCBjaG9pY2UudmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgZWxlbWVudCBvZiBoZWFkZXIuZWxlbWVudHMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChlbGVtZW50LmZpbHRlcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIudHJpZ2dlcignZmlsdGVyLnVwZGF0ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24uZHJvcGRvd24oJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHRcdFxyXG5cdFx0XHJcblx0XHRpZiAoZWxlbWVudC5zb3J0KSB7XHJcblx0XHRcdGRpdkJ1dHRvbnMuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXBwZW5kKGdsb2JhbC5pY29uLmFycm93VXApXHJcblx0XHRcdFx0LmFkZENsYXNzKCh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gZWxlbWVudC5pZCk/J3B4LTIgYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOidweC0yIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdFx0aWYgKHVybFNlYXJjaC5nZXQoJ3NvcnRBc2MnKSA9PSBlbGVtZW50LmlkKSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnRBc2MnLCBlbGVtZW50LmlkKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmIChlbGVtZW50LmZpbHRlcikge1xyXG5cdFx0XHRcclxuXHRcdFx0c3dpdGNoIChlbGVtZW50LmZpbHRlci50eXBlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSB0eXBlLmJvb2w6XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkxpc3QgPSBlbGVtZW50LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMiBvdmVyZmxvdy1hdXRvICcgKyAoKGVsZW1lbnQuZmlsdGVyLnR5cGUgPT09IHR5cGUubGlzdCk/J3B0LTMnOidwdC0xJykpXHJcblx0XHRcdFx0XHRcdC5jc3MoJ21heC1oZWlnaHQnLCAnMjBlbScpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IGNob2ljZSBvZiBlbGVtZW50LmZpbHRlci5jaG9pY2VzKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjaG9pY2UuZGl2ID0gZWxlbWVudC5maWx0ZXIuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGNob2ljZS5jaHggPSBjaG9pY2UuZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgZWxlbWVudC5pZCArICdfJyArIGNob2ljZS52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjaG9pY2UuZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIGVsZW1lbnQuaWQgKyAnXycgKyBjaG9pY2UudmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0LnRleHQoY2hvaWNlLnRleHQpXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChjaG9pY2UudmFsdWUgPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRjaG9pY2UuY2h4XHJcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsICF1cmxTZWFyY2guZ2V0KCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXScpKVxyXG5cdFx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24uZHJvcGRvd24oJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeFxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCBwYXJzZUludCh1cmxTZWFyY2guZ2V0KCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXScpKSA9PT0gY2hvaWNlLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgY2hvaWNlIG9mIGVsZW1lbnQuZmlsdGVyLmNob2ljZXMpIHtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjaG9pY2UuY2h4ICE9IHRoaXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNob2ljZS5jaHgucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddJywgY2hvaWNlLnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSB0eXBlLnRleHQ6XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBkaXZTZWFyY2ggPSBlbGVtZW50LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc20gcC0yJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5pbnB1dFNlYXJjaCA9IGRpdlNlYXJjaC5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQudmFsKHVybFNlYXJjaC5nZXQoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddJykpXHJcblx0XHRcdFx0XHRcdC5vbigna2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGUud2hpY2ggPT0gMTMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkZpbHRlci50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGRpdiA9IGRpdlNlYXJjaC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdpbnB1dC1ncm91cC1hcHBlbmQnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgYSA9IGRpdi5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1saWdodCBib3JkZXItbGVmdC0wIGJvcmRlciB0ZXh0LXByaW1hcnknKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0YS5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5odG1sKCcmdGltZXM7JylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuaW5wdXRTZWFyY2gudmFsKCcnKTtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNhc2UgdHlwZS5kYXRlOlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoKHJlc3VsdCA9IC8+KFxcZHsyfS1cXGR7Mn0tXFxkezR9KS8uZXhlYyh1cmxTZWFyY2guZ2V0KCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXVtdJykudG9TdHJpbmcoKSkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHZhciB2YWx1ZUluZiA9IHJlc3VsdFsxXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHZhciB2YWx1ZUluZiA9ICcnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoKHJlc3VsdCA9IC88KFxcZHsyfS1cXGR7Mn0tXFxkezR9KS8uZXhlYyh1cmxTZWFyY2guZ2V0KCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXVtdJykudG9TdHJpbmcoKSkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHZhciB2YWx1ZVN1cCA9IHJlc3VsdFsxXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHZhciB2YWx1ZVN1cCA9ICcnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgaGlnaGxpZ2h0ID0gKHVybFNlYXJjaC5nZXQoJ2hpZ2hsaWdodCcpLnRvU3RyaW5nKCkgPT0gZWxlbWVudC5pZCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkxpc3QgPSBlbGVtZW50LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMiBvdmVyZmxvdy1hdXRvICcgKyAoKGVsZW1lbnQuZmlsdGVyLnR5cGUgPT09IHR5cGUubGlzdCk/J3B0LTMnOidwdC0xJykpXHJcblx0XHRcdFx0XHRcdC5jc3MoJ21heC1oZWlnaHQnLCAnMjBlbScpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkluZiA9IGVsZW1lbnQuZmlsdGVyLmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94IG10LTInKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaHhJbmYgPSBlbGVtZW50LmZpbHRlci5kaXZJbmYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgZWxlbWVudC5pZCArICdfaW5mJylcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCB2YWx1ZUluZiAhPSAnJylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgY2hlY2tlZCA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICgvXuKJpVxcc1xcZHsyfS1cXGR7Mn0tXFxkezR9Ly50ZXN0KGVsZW1lbnQuZmlsdGVyLmlucHV0SW5mLnZhbCgpKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuaW5wdXRJbmYudmFsKCcnKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuaW5wdXRJbmYudmFsKCQuaTE4bignZnJvbURhdGUnKSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0SW5mLmF0dHIoJ3JlYWRvbmx5JywgY2hlY2tlZCA9PT0gZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5sYWJlbEluZiA9IGVsZW1lbnQuZmlsdGVyLmRpdkluZi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgZWxlbWVudC5pZCArICdfaW5mJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuaW5wdXRJbmYgPSBlbGVtZW50LmZpbHRlci5sYWJlbEluZi5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBkYXRlcGlja2VyJylcclxuXHRcdFx0XHRcdFx0LnZhbCgodmFsdWVJbmYpPygn4omlICcgKyB2YWx1ZUluZik6JC5pMThuKCdmcm9tRGF0ZScpKVxyXG5cdFx0XHRcdFx0XHQuYXR0cigncmVhZG9ubHknLCB2YWx1ZUluZiA9PSAnJylcclxuXHRcdFx0XHRcdFx0LmRhdGVwaWNrZXIoeydmb3JtYXQnOiAn4omlIGRkLW1tLXl5eXknfSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNoeEluZi5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuY2h4SW5mLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0ICAgIC5vbignc2hvdy5icy5kcm9wZG93biBoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0ICAgIFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHRcdCAgICB9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZTdXAgPSBlbGVtZW50LmZpbHRlci5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCBtdC0yJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuY2h4U3VwID0gZWxlbWVudC5maWx0ZXIuZGl2U3VwLmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIGVsZW1lbnQuaWQgKyAnX3N1cCcpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdmFsdWVTdXAgIT0gJycpXHJcblx0XHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGNoZWNrZWQgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChjaGVja2VkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoL17iiaRcXHNcXGR7Mn0tXFxkezJ9LVxcZHs0fS8udGVzdChlbGVtZW50LmZpbHRlci5pbnB1dFN1cC52YWwoKSkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0U3VwLnZhbCgnJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0U3VwLnZhbCgkLmkxOG4oJ3RvRGF0ZScpKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuaW5wdXRTdXAuYXR0cigncmVhZG9ubHknLCBjaGVja2VkID09PSBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmxhYmVsU3VwID0gZWxlbWVudC5maWx0ZXIuZGl2U3VwLmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBlbGVtZW50LmlkICsgJ19zdXAnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5pbnB1dFN1cCA9IGVsZW1lbnQuZmlsdGVyLmxhYmVsU3VwLmFwcGVuZChjcmVhdGUuaW5wdXQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnZm9ybS1jb250cm9sIGRhdGVwaWNrZXInKVxyXG5cdFx0XHRcdFx0XHQudmFsKCh2YWx1ZVN1cCk/J+KJpCAnICsgdmFsdWVTdXA6JC5pMThuKCd0b0RhdGUnKSlcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ3JlYWRvbmx5JywgdmFsdWVTdXAgPT0gJycpXHJcblx0XHRcdFx0XHRcdC5kYXRlcGlja2VyKHsnZm9ybWF0JzogXCLiiaQgZGQtbW0teXl5eVwifSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNoeFN1cC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuY2h4U3VwLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0ICAgIC5vbignc2hvdy5icy5kcm9wZG93biBoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0ICAgIFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHRcdCAgICB9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZIaWdobGlnaHQgPSBlbGVtZW50LmZpbHRlci5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCBtdC0yJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuY2h4SGlnaGxpZ2h0ID0gZWxlbWVudC5maWx0ZXIuZGl2SGlnaGxpZ2h0LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIGVsZW1lbnQuaWQgKyAnX2hpZ2hsaWdodCcpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCduYW1lJywgJ2hpZ2hsaWdodCcpXHJcblx0XHRcdFx0XHRcdC52YWwoZWxlbWVudC5pZClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCBoaWdobGlnaHQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkhpZ2hsaWdodC5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgZWxlbWVudC5pZCArICdfaGlnaGxpZ2h0JylcclxuXHRcdFx0XHRcdFx0LnRleHQoJC5pMThuKCdoaWdobGlnaHQnKSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjYXNlIHR5cGUubGlzdDpcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZGl2U2VhcmNoID0gZWxlbWVudC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2lucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtIGJvcmRlci1ib3R0b20gYm9yZGVyLWRhcmsgcC0yJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5pbnB1dFNlYXJjaCA9IGRpdlNlYXJjaC5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQub24oJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChlLndoaWNoID09IDEzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdC5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgc2VhcmNoVmFsdWUgPSAkKHRoaXMpLnZhbCgpLnRvTG93ZXJDYXNlKClcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoc2VhcmNoVmFsdWUgPT0gJycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGNob2ljZSBvZiBlbGVtZW50LmZpbHRlci5jaG9pY2VzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNob2ljZS5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjaG9pY2UuY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNob2ljZXNbMF0uZGl2LmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGNob2ljZSBvZiBlbGVtZW50LmZpbHRlci5jaG9pY2VzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChjaG9pY2UudGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVmFsdWUpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hvaWNlLmRpdi5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNob2ljZS5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNob2ljZS5jaHgucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGRpdiA9IGRpdlNlYXJjaC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdpbnB1dC1ncm91cC1hcHBlbmQnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRhID0gZGl2LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLWxpZ2h0IGJvcmRlci1sZWZ0LTAgYm9yZGVyIHRleHQtcHJpbWFyeScpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRhLmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0Lmh0bWwoJyZ0aW1lczsnKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5pbnB1dFNlYXJjaC52YWwoJycpO1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuaW5wdXRTZWFyY2gudHJpZ2dlcignaW5wdXQnKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2TGlzdCA9IGVsZW1lbnQuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdweC0yIG92ZXJmbG93LWF1dG8gJyArICgoZWxlbWVudC5maWx0ZXIudHlwZSA9PT0gdHlwZS5saXN0KT8ncHQtMyc6J3B0LTEnKSlcclxuXHRcdFx0XHRcdFx0LmNzcygnbWF4LWhlaWdodCcsICcyMGVtJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgY2hvaWNlIG9mIGVsZW1lbnQuZmlsdGVyLmNob2ljZXMpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGNob2ljZS5kaXYgPSBlbGVtZW50LmZpbHRlci5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y2hvaWNlLmNoeCA9IGNob2ljZS5kaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnLCBlbGVtZW50LmlkICsgJ18nICsgY2hvaWNlLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjaG9pY2UuZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIGVsZW1lbnQuaWQgKyAnXycgKyBjaG9pY2UudmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0LnRleHQoY2hvaWNlLnRleHQpXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChjaG9pY2UudmFsdWUgPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRjaG9pY2UuY2h4XHJcblx0XHRcdFx0XHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgY2hlY2tlZCA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGNob2ljZSBvZiBlbGVtZW50LmZpbHRlci5jaG9pY2VzKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaG9pY2UuY2h4LnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeFxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCB1cmxTZWFyY2guZ2V0KCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXVtdJykuaGFzKGNob2ljZS52YWx1ZSkpXHJcblx0XHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgdW5jaGVja2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgkKGNob2ljZS5jaHgpLmlzKCc6Y2hlY2tlZCcpICYmIGNob2ljZS52YWx1ZSAhPSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChjaGVja2VkICYmIHVuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNob2ljZXNbMF0uY2h4LnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaG9pY2VzWzBdLmNoeC5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNob2ljZXNbMF0uY2h4LnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBjb2xSZXNpemUoaGVhZGVyKSB7XHJcblx0XHRcclxuXHRcdGlmIChoZWFkZXIudGgpIHtcclxuXHRcdFx0aGVhZGVyLnRoLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5jc3MoJ3JpZ2h0JywgJzAnKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnY29sLXJlc2l6ZS1oYW5kbGUnKVxyXG5cdFx0XHRcdC5vbignbW91c2Vkb3duJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0Z3BleGUuY29sUmVzaXplID0ge1xyXG5cdFx0XHRcdFx0XHR0aDogJChlLnRhcmdldCkucGFyZW50KCksXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQb3NpdGlvbjogZS5wYWdlWCxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFdpZHRoOiAkKGUudGFyZ2V0KS5wYXJlbnQoKS53aWR0aCgpLFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRoZWFkZXIudGgubmV4dCgpLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5jc3MoJ2xlZnQnLCAnMCcpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjb2wtcmVzaXplLWhhbmRsZScpXHJcblx0XHRcdFx0Lm9uKCdtb3VzZWRvd24nLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhlKTtcclxuXHRcdFx0XHRcdGdwZXhlLmNvbFJlc2l6ZSA9IHtcclxuXHRcdFx0XHRcdFx0dGg6ICQoZS50YXJnZXQpLnBhcmVudCgpLnByZXZBbGwoJzp2aXNpYmxlJykuZmlyc3QoKSxcclxuXHRcdFx0XHRcdFx0Y3VycmVudFBvc2l0aW9uOiBlLnBhZ2VYLFxyXG5cdFx0XHRcdFx0XHRjdXJyZW50V2lkdGg6ICQoZS50YXJnZXQpLnBhcmVudCgpLnByZXZBbGwoJzp2aXNpYmxlJykuZmlyc3QoKS53aWR0aCgpLFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGNvbERyYWcoaGVhZGVyKSB7XHJcblx0XHRcclxuXHRcdGlmIChoZWFkZXIudGgpIHtcclxuXHRcdFx0XHJcblx0XHRcdGhlYWRlci50aC5maW5kKCdidXR0b25bdHlwZT1cImJ1dHRvblwiXScpLmZpcnN0KClcclxuXHRcdFx0XHQub24oJ21vdXNlZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdGdwZXhlLmNvbERyYWcgPSB7XHJcblx0XHRcdFx0XHRcdGlkOiBoZWFkZXIuaWQsXHJcblx0XHRcdFx0XHRcdHRoOiBoZWFkZXIudGgsXHJcblx0XHRcdFx0XHRcdGN1cnJlbnRQb3NpdGlvbjogZS5wYWdlWCxcclxuXHRcdFx0XHRcdH07XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fVxyXG59XHJcblxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy8gZmlsbFNlcmllc1Bhbm5lbFxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gZmlsbFNlcmllc1Bhbm5lbCgpIHtcclxuXHRcclxuXHRmb3IgKGxldCBzZXJpZSBvZiBncGV4ZS5zZXJpZXMpIHtcclxuXHRcdHNlcmllLmJ0biA9ICQoJyNzZXJpZXMnKS5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hdHRyKCdyb2xlJywgJ2J1dHRvbicpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1wcmltYXJ5IG0tMScpXHJcblx0XHRcdC5hdHRyKCdocmVmJywgc2VyaWUudXJsKVxyXG5cdFx0XHQudGV4dChzZXJpZS5uYW1lKVxyXG5cdFx0O1xyXG5cdH1cclxuXHRcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy9maWxsRGlzcGxheVBhbm5lbFxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gZmlsbERpc3BsYXlQYW5uZWwoKSB7XHJcblx0XHJcblx0bGV0IGRpdkNvbCA9ICQoJyNkaXNwbGF5X3BhbmVsJykuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHQuYWRkQ2xhc3MoJ3JvdyBweS0yJylcclxuXHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdjb2wnKVxyXG5cdDtcclxuXHRcclxuXHRmb3IgKGxldCBoZWFkZXIgb2YgZ3BleGUuaGVhZGVycykge1xyXG5cdFx0XHJcblx0XHRoZWFkZXIuYURpc3BsYXkgPSBkaXZDb2wuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0biBidG4tc20gYnRuLW91dGxpbmUtcHJpbWFyeSBjb2wtMiBtLTEgdGV4dC1sZWZ0IHRleHQtbm93cmFwJylcclxuXHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGhlYWRlci5jaHhEaXNwbGF5LnByb3AoJ2NoZWNrZWQnLCAhaGVhZGVyLmNoeERpc3BsYXkuaXMoJzpjaGVja2VkJykpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCBkaXNwbGF5ID0gdXJsU2VhcmNoLmdldCgnZGlzcGxheVsnICsgaGVhZGVyLmlkICsgJ10nKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdkaXNwbGF5WycgKyBoZWFkZXIuaWQgKyAnXScpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChoZWFkZXIuY2h4RGlzcGxheS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0aWYgKGRpc3BsYXkgPT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZCgnZGlzcGxheVsnICsgaGVhZGVyLmlkICsgJ10nLCBoZWFkZXIuZGVmYXVsdFdpZHRoKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRsZXQgZGl2ID0gaGVhZGVyLmFEaXNwbGF5LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0aGVhZGVyLmNoeERpc3BsYXkgPSBkaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmF0dHIoJ2lkJywgJ2hfJyArIGhlYWRlci5pZClcclxuXHRcdFx0Lm9uKCdjaGFuZ2UgY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXR0cignZm9yJywgJ2hfJyArIGhlYWRlci5pZClcclxuXHRcdFx0LnRleHQoaGVhZGVyLnRpdGxlKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRcclxuXHR9XHJcblx0XHJcbn1cclxuXHJcbnZhciB1cmxTZWFyY2ggPSBuZXcgVXJsU2VhcmNoKCk7XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBNZW51IGRpc3BsYXlcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuXHQkKCcjZG9jdW1lbnRfbmV3LCAjZG9jdW1lbnRfZWRpdCwgI2RvY3VtZW50X21vdmUsICNkb2N1bWVudF9kZWxldGUsICN2ZXJzaW9uX25ldywgI3ZlcnNpb25fZWRpdCwgI3ZlcnNpb25fZGVsZXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRnbG9iYWwuYWpheC5zZXQoJyNtb2RhbCcsICQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9VcmwoJ2lkW10nKSwge2Zyb206IHRoaXN9KTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfZWRpdCcpLmhpZGUoKTtcclxuXHQkKCcjZG9jdW1lbnRfbW92ZScpLmhpZGUoKTtcclxuXHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuaGlkZSgpO1xyXG5cdCQoJyN2ZXJzaW9uX21lbnUnKS5oaWRlKCk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBUYWIgY29sbGFwc2VcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyN0YWJzJykub24oJ3Nob3cuYnMudGFiJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcuY29sbGFwc2UnKS5jb2xsYXBzZSgnc2hvdycpO1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCd0YWJzX2hpZGRlbicpO1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCd0YWJzX3Nob3dlZCcpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN0YWJzIHVsIGxpIGEnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cdFx0XHQkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0JCh0aGlzKS5ibHVyKCk7XHJcblx0XHRcdCQodGhpcykuYXR0cignYXJpYS1zZWxlY3RlZCcsIGZhbHNlKTtcclxuXHRcdFx0JCgnIycgKyAkKHRoaXMpLmF0dHIoJ2FyaWEtY29udHJvbHMnKSkucGFyZW50KCkuY29sbGFwc2UoJ2hpZGUnKTtcclxuXHRcdH1cclxuXHR9KTtcclxuICAgIFxyXG5cdCQoJyN0YWJzJykub24oJ3Nob3duLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oKSB7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3RhYnNfaGlkZGVuJyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuYWRkQ2xhc3MoJ3RhYnNfc2hvd2VkJyk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3RhYnMnKS5vbignaGlkZGVuLmJzLmNvbGxhcHNlJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCd0YWJzX3Nob3dlZCcpO1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCd0YWJzX2hpZGRlbicpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gVGFicyBtaW5pbWl6ZVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3RhYnMnKS50cmlnZ2VyKCdzaG93LmJzLnRhYicpO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gVGFibGVfY29udGFpbmVyXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjdGFibGVfY29udGFpbmVyLCAjdnVlcywgI3RhYmxlJykub24oJ2FqYXguYmVmb3JlU2VuZCcsIGZ1bmN0aW9uKGUsIHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcclxuXHRcdFxyXG5cdFx0aWYgKGUudGFyZ2V0ICE9PSB0aGlzKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdCQoJyN0YWJsZScpLmhpZGUoKTtcclxuXHRcdFxyXG5cdFx0JCgnI3NwaW5uZXInKVxyXG5cdFx0XHQuc2hvdygpXHJcblx0XHRcdC5lbXB0eSgpXHJcblx0XHRcdC5hcHBlbmQoZ2xvYmFsLmljb24ubG9hZGluZylcclxuXHRcdDtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdGFibGVfY29udGFpbmVyJykub24oJ2FqYXguc3VjY2VzcycsIGZ1bmN0aW9uKGUsIHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcclxuXHRcdFxyXG5cdFx0aWYgKGUudGFyZ2V0ICE9PSB0aGlzKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdCQoJyNzcGlubmVyJykuZW1wdHkoKTtcclxuXHRcdFxyXG5cdFx0Ly9zZXR1cCBqcyBkYXRhc1xyXG5cdFx0c2V0dXAocmVzdWx0KTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdGFibGVfY29udGFpbmVyJykub24oJ2FqYXguY29tcGxldGVkJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHJcblx0XHRpZiAoZS50YXJnZXQgIT09IHRoaXMpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZmlsbFNlcmllc1Bhbm5lbCgpO1xyXG5cdFx0ZmlsbERpc3BsYXlQYW5uZWwoKTtcclxuXHRcdFxyXG5cdFx0Ly9zZXR1cCB1cmxcclxuXHRcdHVybFNlYXJjaC5zZXRGcm9tVXJsKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cdFx0XHJcblx0XHR1cmxTZWFyY2guZ2V0VnVlcygpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gVnVlc1xyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3Z1ZXMnKS5vbignYWpheC5zdWNjZXNzJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHJcblx0XHRpZiAoZS50YXJnZXQgIT09IHRoaXMpIHtcclxuXHRcdFx0cmV0dXJuO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1x0XHJcblx0XHQkKCcjdnVlcycpLmVtcHR5KCk7XHJcblx0XHRcclxuXHRcdGZvciAobGV0IHZ1ZSBvZiByZXN1bHQpIHtcclxuXHRcdFx0XHJcblx0XHRcdGRpdiA9ICQoJyN2dWVzJylcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdidG4tZ3JvdXAgbS0xJylcclxuXHRcdFx0XHQuYXR0cigncm9sZScsICdncm91cCcpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGJ0biA9IGRpdi5hcHBlbmQoY3JlYXRlLmJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5JylcclxuXHRcdFx0XHQuYXR0cignZGF0YS1pZCcsIHZ1ZS5pZClcclxuXHRcdFx0XHQudGV4dCh2dWUubmFtZSlcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCd2dWUnLCB2dWUuaWQpO1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmJsdXIoKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAodnVlWydlZGl0X3VybCddICYmIHZ1ZVsnZGVsZXRlX3VybCddKSB7XHJcblx0XHRcdFx0ZGl2MiA9IGRpdi5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuLWdyb3VwJylcclxuXHRcdFx0XHRcdC5hdHRyKCdyb2xlJywgJ2dyb3VwJylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YnRuMiA9IGRpdjIuYXBwZW5kKGNyZWF0ZS5idXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5IGRyb3Bkb3duLXRvZ2dsZScpXHJcblx0XHRcdFx0XHQuYXR0cignZGF0YS10b2dnbGUnLCAnZHJvcGRvd24nKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGFzcG9wdXAnLCB0cnVlKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0ZGl2MyA9IGRpdjIuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2Ryb3Bkb3duLW1lbnUnKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRkaXYzLmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnZHJvcGRvd24taXRlbSB0ZXh0LXN1Y2Nlc3MnKVxyXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRnbG9iYWwuYWpheC5zZXQoJyNtb2RhbCcsIHZ1ZVsnZWRpdF91cmwnXSwge21vZGFsOiB0cnVlfSk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnRleHQoJC5pMThuKCdlZGl0JykpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRpdjMuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdkcm9wZG93bi1pdGVtIHRleHQtZGFuZ2VyJylcclxuXHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0Z2xvYmFsLmFqYXguc2V0KCcjbW9kYWwnLCB2dWVbJ2RlbGV0ZV91cmwnXSwge21vZGFsOiB0cnVlLCBmcm9tOiB0aGlzfSk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnRleHQoJC5pMThuKCdkZWxldGUnKSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIERyYWd0YWJsZVxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG4vL1x0XHR2YXIgZHJhZ2dlciA9IHRhYmxlRHJhZ2dlci5kZWZhdWx0KCQoJ3RhYmxlJykuZ2V0KDApLCB7XHJcbi8vXHQgICAgICAgIG1vZGU6ICdjb2x1bW4nLFxyXG4vL1x0XHR9KTtcclxuXHRcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdnVlcycpLm9uKCdhamF4LmNvbXBsZXRlZCcsIGZ1bmN0aW9uKGUsIHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcclxuXHRcdFxyXG5cdFx0aWYgKGUudGFyZ2V0ICE9PSB0aGlzKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2dWVfbmV3Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRnbG9iYWwuYWpheC5zZXQoJyNtb2RhbCcsICQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9VcmwoKSwge21vZGFsOiB0cnVlfSk7XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBUYWJsZVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3RhYmxlJykub24oJ2FqYXguc3VjY2VzcycsIGZ1bmN0aW9uKGUsIHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcclxuXHRcdFxyXG5cdFx0aWYgKGUudGFyZ2V0ICE9PSB0aGlzKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFxyXG5cdFx0JCgnI3NwaW5uZXInKS5lbXB0eSgpO1xyXG5cdFx0JCgnI3RhYmxlID4gdGJvZHknKS5lbXB0eSgpO1xyXG5cdFx0JCgnI3RhYmxlJykuc2hvdygpO1xyXG5cdFx0aWYgKHJlc3VsdCA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cdFx0XHJcbi8vXHRcdGNvbnNvbGUubG9nKHJlc3VsdC5xdWVyeSk7XHJcbi8vXHRcdGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhcyk7XHJcblx0XHRcclxuXHRcdGxldCBzZWFyY2hVcmwgPSAkLnBhcmFtKHJlc3VsdC5xdWVyeSk7XHJcblx0XHR1cmxTZWFyY2guX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2hVcmwpO1xyXG5cdFx0dXJsU2VhcmNoLmRlbGV0ZSgnaWRbXScpO1xyXG5cdFx0XHJcblx0XHQvL3Z1ZVxyXG5cdFx0JCgnI3Z1ZXMnKS5maW5kKCdidXR0b25bZGF0YS1pZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoJCh0aGlzKS5kYXRhKCdpZCcpID09IHVybFNlYXJjaC5nZXQoJ3Z1ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLW91dGxpbmUtcHJpbWFyeScpO1xyXG5cdFx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnZGl2ID4gYnV0dG9uJykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLXByaW1hcnknKTtcclxuXHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ2RpdiA+IGJ1dHRvbicpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tcHJpbWFyeSBkcm9wZG93bi10b2dnbGUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdC8vc2VyaWVzXHJcblx0XHRmb3IgKGxldCBzZXJpZSBvZiBncGV4ZS5zZXJpZXMpIHtcclxuXHRcdFx0aWYgKHJlc3VsdC5zZXJpZSAmJiBzZXJpZS5pZCA9PSByZXN1bHQuc2VyaWUpIHtcclxuXHRcdFx0XHRzZXJpZS5idG4ucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0c2VyaWUuYnRuLmFkZENsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2VyaWUuYnRuLnJlbW92ZUNsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0c2VyaWUuYnRuLmFkZENsYXNzKCdidG4tcHJpbWFyeScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGZvciAobGV0IGhlYWRlciBvZiBncGV4ZS5oZWFkZXJzKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQvL2Rpc3BsYXlcclxuXHRcdFx0XHJcblx0XHRcdGlmIChkaXNwbGF5ID0gcmVzdWx0LnF1ZXJ5LmRpc3BsYXlbaGVhZGVyLmlkXSkge1xyXG5cclxuXHRcdFx0XHRoZWFkZXIuYURpc3BsYXkuYWRkQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0XHRoZWFkZXIuYURpc3BsYXkucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0aGVhZGVyLmNoeERpc3BsYXkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdGhlYWRlci50aC5jc3MoJ3dpZHRoJywgZGlzcGxheSArICdlbScpO1xyXG5cdFx0XHRcdGhlYWRlci50aC5zaG93KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9oZWFkZXJzXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duLmVtcHR5KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aGVhZGVyLmlzRmlsdGVyZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRoZWFkZXIuaXNTb3J0ZWRBc2MgPSBmYWxzZTtcclxuXHRcdFx0XHRoZWFkZXIuaXNTb3J0ZWREZXNjID0gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKGhlYWRlci5oYXNTb3J0KSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAoZWxlbWVudCBvZiBoZWFkZXIuZWxlbWVudHMpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gZWxlbWVudC5pZCkge1xyXG5cdFx0XHRcdFx0XHRcdGhlYWRlci5pc1NvcnRlZEFzYyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IGVsZW1lbnQuaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRoZWFkZXIuaXNTb3J0ZWREZXNjID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChoZWFkZXIuaGFzRmlsdGVyKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAoZWxlbWVudCBvZiBoZWFkZXIuZWxlbWVudHMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZmlsdGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChlbGVtZW50LmZpbHRlci50eXBlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIHR5cGUuYm9vbDpcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgdHlwZS50ZXh0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmhhcygnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ10nKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlYWRlci5pc0ZpbHRlcmVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIHR5cGUuZGF0ZTpcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgdHlwZS5saXN0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmhhcygnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVhZGVyLmlzRmlsdGVyZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoKGhlYWRlci5pc0ZpbHRlcmVkKT9nbG9iYWwuaWNvbi5mdW5uZWxGaWxsOmdsb2JhbC5pY29uLmZ1bm5lbCk7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChoZWFkZXIuaXNTb3J0ZWRBc2MpIHtcclxuXHRcdFx0XHRcdGhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoZ2xvYmFsLmljb24uYXJyb3dVcCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChoZWFkZXIuaXNTb3J0ZWREZXNjKSB7XHJcblx0XHRcdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGdsb2JhbC5pY29uLmFycm93RG93bik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGhlYWRlci5hRGlzcGxheS5hZGRDbGFzcygnYnRuLXByaW1hcnknKTtcclxuXHRcdFx0XHRoZWFkZXIuYURpc3BsYXkucmVtb3ZlQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0XHRoZWFkZXIuY2h4RGlzcGxheS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdGhlYWRlci50aC5oaWRlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vdGJvZHlcclxuXHRcdGZvciAobGV0IGRhdGEgb2YgcmVzdWx0LmRhdGFzKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgdHIgPSAkKCcjdGFibGUgPiB0Ym9keScpLmFwcGVuZChjcmVhdGUudHIpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGRpdiA9IHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXR0cignaWQnLCAnY18nICsgZGF0YS52ZXJzaW9uX2lkKVxyXG5cdFx0XHRcdC52YWwoZGF0YS52ZXJzaW9uX2lkKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCB1cmxTZWFyY2gubGluZUNoZWNrZWQuYmluZCh1cmxTZWFyY2gpKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXR0cignZm9yJywgJ2NfJyArIGRhdGEudmVyc2lvbl9pZClcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0Zm9yIChsZXQgaGVhZGVyIG9mIGdwZXhlLmhlYWRlcnMpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YWx1ZSA9IGRhdGFbaGVhZGVyLmlkXTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoaGVhZGVyLmlkID09ICdzdGF0dXNfdHlwZScpIHtcclxuXHRcdFx0XHRcdFx0dmFsdWUgPSBoZWFkZXIuZWxlbWVudHNbMF0uZmlsdGVyLmNob2ljZXNbdmFsdWVdLnRleHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHN3aXRjaCAoaGVhZGVyLnR5cGUpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSB0eXBlLmJvb2w6XHJcblx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3RleHQtY2VudGVyJztcclxuXHRcdFx0XHRcdFx0XHRpZiAodmFsdWUgPT0gMCB8fCB2YWx1ZSA9PSBudWxsKSB2YWx1ZSA9ICQuaTE4bignbm8nKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAodmFsdWUgPT0gMSkgdmFsdWUgPSAkLmkxOG4oJ3llcycpO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIHR5cGUuZGF0ZTpcclxuXHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndGV4dC1jZW50ZXInO1xyXG5cdFx0XHRcdFx0XHRcdGlmICh2YWx1ZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS50b0RhdGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHZhbHVlICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vaGlnaGxpZ2h0XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdoaWdobGlnaHQnKS50b1N0cmluZygpID09IGhlYWRlci5pZFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHx8ICh1cmxTZWFyY2guZ2V0KCdoaWdobGlnaHQnKS50b1N0cmluZygpID09ICd2ZXJzaW9uX2RhdGUnICYmIGhlYWRlci5pZCA9PSAndmVyc2lvbl9zY2hlZHVsZWRfZGF0ZScpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHZhbHVlIDwgbmV3IERhdGUoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHIuYWRkQ2xhc3MoJ2hpZ2hsaWdodC1sYXRlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZS5hZGREYXlzKC0xNSkgPCBuZXcgRGF0ZSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ci5hZGRDbGFzcygnaGlnaGxpZ2h0LTE1Jyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZS5hZGREYXlzKC0zMCkgPCBuZXcgRGF0ZSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ci5hZGRDbGFzcygnaGlnaGxpZ2h0LTMwJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyLmFkZENsYXNzKCdoaWdobGlnaHQtb2snKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5mb3JtYXQoKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGNhc2UgdHlwZS5saW5rOlxyXG5cdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0ZXh0LWNlbnRlcic7XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdFx0c3dpdGNoICh0eXBlb2YgdmFsdWUpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgJ251bWJlcic6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0ZXh0LXJpZ2h0JztcclxuXHRcdFx0XHRcdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0ZXh0LWxlZnQnO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGlmICh2YWx1ZSA9PT0gbnVsbCkgdmFsdWUgPSAnJztcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IHRkID0gdHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKGRhdGFDbGFzcylcclxuXHRcdFx0XHRcdFx0LnRleHQodmFsdWUpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChoZWFkZXIucGVybWlzc2lvbnMud3JpdGUpIHtcclxuXHRcdFx0XHRcdFx0dGQub24oJ2RibGNsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0Z2xvYmFsLmFqYXguc2V0KHRoaXMsICcvZ3BleGUvcHJvamVjdC9zZXJpZS9kb2N1bWVudC92ZXJzaW9uLycgKyBkYXRhWyd2ZXJzaW9uX2lkJ10gKyAnL3F1aWNrX2VkaXQvJyArIGhlYWRlci5pZCk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dGQub24oJ2FqYXguY29tcGxldGVkJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGxldCAkZm9ybSA9ICQodGhpcykuZmluZCgnZm9ybScpLmNoaWxkcmVuKCkuZmlyc3QoKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoJGZvcm0uZXhpc3QoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0JGZvcm0ub24oJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoZS53aGljaCA9PSAxMykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuc3VibWl0KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQkKCdib2R5Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoJGZvcm0uaXMoZS50YXJnZXQpID09PSBmYWxzZSAmJiAkZm9ybS5oYXMoZS50YXJnZXQpLmV4aXN0KCkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JGZvcm0udHJpZ2dlcignc3VibWl0Jyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRzd2l0Y2ggKGhlYWRlci50eXBlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhc2UgdHlwZS5ib29sOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQgPT0gMCB8fCByZXN1bHQgPT0gbnVsbCkgcmVzdWx0ID0gJC5pMThuKCdubycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXN1bHQgPT0gMSkgcmVzdWx0ID0gJC5pMThuKCd5ZXMnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FzZSB0eXBlLmRhdGU6XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnRvRGF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkucmVtb3ZlQXR0cignY2xhc3MnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0ICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vaGlnaGxpZ2h0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnaGlnaGxpZ2h0JykudG9TdHJpbmcoKSA9PSBoZWFkZXIuaWRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fHwgKHVybFNlYXJjaC5nZXQoJ2hpZ2hsaWdodCcpLnRvU3RyaW5nKCkgPT0gJ3ZlcnNpb25fc2NoZWR1bGVkX2RhdGUnICYmIGhlYWRlci5pZCA9PSAndmVyc2lvbl9kYXRlJykpIHtcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHJlc3VsdCA8IG5ldyBEYXRlKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdoaWdobGlnaHQtbGF0ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKHJlc3VsdC5hZGREYXlzKC0xNSkgPCBuZXcgRGF0ZSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5hZGRDbGFzcygnaGlnaGxpZ2h0LTE1Jyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAocmVzdWx0LmFkZERheXMoLTMwKSA8IG5ldyBEYXRlKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdoaWdobGlnaHQtMzAnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmFkZENsYXNzKCdoaWdobGlnaHQtb2snKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LmZvcm1hdCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0JCgnYm9keScpLm9mZignY2xpY2snKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aGVhZGVyLnRoLmhpZGUoKTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dHIuYXBwZW5kKGNyZWF0ZS50ZCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuLXN1Y2Nlc3Mgdy0xMDAnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdXJsJywgZGF0YS5kZXRhaWxVcmwpXHJcblx0XHRcdFx0XHQuYXR0cignZGF0YS10b2dnbGUnLCAnbW9kYWwgYWpheCcpXHJcblx0XHRcdFx0XHQuYXR0cignZGF0YS10YXJnZXQnLCAnI21vZGFsX2RldGFpbCcpXHJcblx0XHRcdFx0XHQudGV4dCgkLmkxOG4oJ2RldGFpbHMnKSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly9wYWdpbmF0aW9uXHJcblx0XHQkKCcjcGFnaW5hdGlvbicpLmVtcHR5KCk7XHJcblx0XHRcdFxyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCdtYi00Jyk7XHJcblx0XHRcclxuXHRcdGxldCBwYWdlTWF4ID0gcmVzdWx0LnBhZ2VNYXg7XHJcblx0XHRsZXQgcGFnZSA9IHBhcnNlSW50KHVybFNlYXJjaC5nZXQoJ3BhZ2UnKSkgfHwgMTtcclxuXHRcdHBhZ2UgPSBNYXRoLm1heChNYXRoLm1pbihwYWdlLCBwYWdlTWF4KSwgMSk7XHJcblx0XHRcclxuXHRcdGRpdiA9ICQoJyNwYWdpbmF0aW9uJykuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygncm93IG0tMCcpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGRpdi5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdjb2wnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHR1bCA9IGRpdi5hcHBlbmQoY3JlYXRlLnVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3BhZ2luYXRpb24gY29sIGp1c3RpZnktY29udGVudC1jZW50ZXInKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRpZiAocmVzdWx0LnBhZ2VNYXggPiAxKSB7XHJcblx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IDEpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAocGFnZSA+IDEpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgncGFnZScsIHBhZ2UgLSAxKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgTWF0aC5tYXgoMSwgcGFnZSAtIDEpKVxyXG5cdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0Lmh0bWwoJyZsYXF1bzsnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgcGFnZVN0YXJ0ID0gTWF0aC5taW4oTWF0aC5tYXgoMSwgcGFnZSAtIDIpLCBNYXRoLm1heCgxLCByZXN1bHQucGFnZU1heCAtIDQpKTtcclxuXHRcdFx0bGV0IHBhZ2VFbmQgPSBNYXRoLm1pbihwYWdlU3RhcnQgKyA1LCBwYWdlTWF4KTtcclxuXHRcdFx0XHJcblx0XHRcdGZvciAobGV0IGkgPSBwYWdlU3RhcnQ7IGkgPD0gcGFnZUVuZDsgaSsrKSB7XHJcblx0XHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSBpKT8nIGFjdGl2ZSc6JycpKVxyXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdwYWdlJywgaSk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgaSlcclxuXHRcdFx0XHRcdFx0LnRleHQoaSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IHBhZ2VNYXgpPycgZGlzYWJsZWQnOicnKSlcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAocGFnZSA8IHBhZ2VNYXgpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgncGFnZScsIHBhZ2UgKyAxKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLXZhbHVlJywgTWF0aC5taW4ocGFnZU1heCwgcGFnZSArIDEpKVxyXG5cdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSlcclxuXHRcdFx0XHRcdFx0Lmh0bWwoJyZyYXF1bzsnKVxyXG5cdFx0XHQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHNlbGVjdCA9IGRpdi5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdjb2wgZC1mbGV4IGp1c3RpZnktY29udGVudC1lbmQgbXQtMSBtci01JylcclxuXHRcdFx0LmFwcGVuZChjcmVhdGUuc2VsZWN0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20gYmctZGFyayBib3JkZXItc2Vjb25kYXJ5IHRleHQtd2hpdGUnKVxyXG5cdFx0XHQuY3NzKCd3aWR0aCcsICcxNTAnKVxyXG5cdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3Jlc3VsdHNfcGVyX3BhZ2UnLCAkKHRoaXMpLnZhbCgpKVxyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRsZXQgcmVzdWx0c1BlclBhZ2UgPSBuZXcgTWFwKFtbJzEwJywgMTBdLCBbJzUwJywgNTBdLCBbJzEwMCcsIDEwMF0sIFskLmkxOG4oJ2FsbCcpLCAnMCddXSk7XHJcblx0XHRmb3IgKGxldCBbdGV4dCwgdmFsdWVdIG9mIHJlc3VsdHNQZXJQYWdlKSB7XHJcblx0XHRcdHNlbGVjdC5hcHBlbmQoY3JlYXRlLm9wdGlvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXR0cigndmFsdWUnLCB2YWx1ZSlcclxuXHRcdFx0XHQuYXR0cignc2VsZWN0ZWQnLCB1cmxTZWFyY2guZ2V0KCdyZXN1bHRzX3Blcl9wYWdlJykgPT0gdmFsdWUpXHJcblx0XHRcdFx0LnRleHQodGV4dClcclxuXHRcdFx0O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRcclxuXHRcdC8vZmxhc2hlc1xyXG5cdFx0XHJcblx0XHQkKCcjdG9hc3QnKS5lbXB0eSgpO1xyXG5cdFx0XHJcblx0XHRmb3IgKGxldCBsYWJlbCBvZiBPYmplY3Qua2V5cyhyZXN1bHQuZmxhc2gpKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgZGl2VG9hc3QgPSAkKCcjdG9hc3QnKS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3RvYXN0JylcclxuXHRcdFx0XHQuYXR0cigncm9sZScsICdhbGVydCcpXHJcblx0XHRcdFx0LmF0dHIoJ2RhdGEtZGVsYXknLCA1MDAwKVxyXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWxpdmUnLCAnYXNzZXJ0aXZlJylcclxuXHRcdFx0XHQuYXR0cignYXJpYS1hdG9taWMnLCB0cnVlKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgZGl2Q29udGFpbmVyID0gZGl2VG9hc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdhbGVydCBhbGVydC0nICsgbGFiZWwgKyAnIGQtZmxleCBweC0zIG0tMCcpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGRpdkNvbnRhaW5lci5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2FsaWduLXNlbGYtY2VudGVyJylcclxuXHRcdFx0XHQuYXBwZW5kKGdsb2JhbC5pY29uW2xhYmVsXSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHVsQm9keSA9IGRpdkNvbnRhaW5lci5hcHBlbmQoY3JlYXRlLnVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnanVzdGlmeS1jb250ZW50LWNlbnRlciBmbGV4LWZpbGwnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRkaXZDb250YWluZXIuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdqdXN0aWZ5LWNvbnRlbnQtZW5kJylcclxuXHRcdFx0XHQuYXBwZW5kKGdsb2JhbC5pY29uLmNsb3NlKTtcclxuXHRcdFx0XHJcblx0XHRcdGlmIChyZXN1bHQuZmxhc2hbbGFiZWxdLmxlbmd0aCA+IDEpIHtcclxuXHRcdFx0XHRmb3IgKGxldCBtZXNzYWdlIG9mIHJlc3VsdC5mbGFzaFtsYWJlbF0pIHtcclxuXHRcdFx0XHRcdHVsQm9keS5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQudGV4dChtZXNzYWdlKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR1bEJvZHkudGV4dChyZXN1bHQuZmxhc2hbbGFiZWxdWzBdKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0ZGl2VG9hc3QudG9hc3QoJ3Nob3cnKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0dXJsU2VhcmNoLmxpbmVDaGVja2VkKCk7XHJcblx0XHRcclxuXHRcdGdsb2JhbC5hamF4LmZldGNoKCcjdGFibGUgPiB0Ym9keScpO1xyXG4vL1x0XHQkKCd0YWJsZScpLnN0aWNreVRhYmxlSGVhZGVycygpXHJcblx0XHRcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdGFibGUnKS5vbignYWpheC5jb21wbGV0ZWQnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcblxyXG5cdFx0aWYgKGUudGFyZ2V0ICE9PSB0aGlzKSB7XHJcblx0XHRcdHJldHVybjtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9KTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFF1aWNrIGVkaXRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gTW9kYWxcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyNtb2RhbF9kZXRhaWwnKS5vbignYWpheC5jb21wbGV0ZWQnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJyN2ZXJzaW9uX2VkaXRfZGV0YWlsLCAjdmVyc2lvbl9kZWxldGVfZGV0YWlsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGdsb2JhbC5hamF4LnNldCgnI21vZGFsJywgJCh0aGlzKS5kYXRhKCd1cmwnKSArICc/aWRbXT0nICsgJCgnI3ZlcnNpb25fdGFicz5hLmFjdGl2ZScpLmRhdGEoJ2lkJykgKyAnJm1vZGFsPTEnLCB7ZnJvbTogdGhpc30pO1xyXG5cdCAgICB9KTtcclxuXHRcdFxyXG5cdH0pO1xyXG5cdFx0XHJcblx0JCgnI21vZGFsJykub24oJ2FqYXguc3VjY2VzcycsIGZ1bmN0aW9uKGUsIHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcclxuXHRcdFxyXG5cdFx0aWYgKHJlc3VsdCA9PT0gJycpIHtcclxuXHRcdFx0XHJcblx0XHRcdCQoJyNtb2RhbF9jb250YWluZXInKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0XHRcclxuXHRcdFx0JCgnI21vZGFsX2RldGFpbF9jb250YWluZXInKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFxyXG5cdFx0fSBlbHNlIGlmICgkKCc8ZGl2PicgKyByZXN1bHQgKyAnPC9kaXY+JykuZmluZCgnZGl2Lm1vZGFsLWJvZHknKS5leGlzdCgpKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIGlmICgkKCc8ZGl2PicgKyByZXN1bHQgKyAnPC9kaXY+JykuZmluZCgncHJlLnNmLWR1bXAnKS5leGlzdCgpKSB7IC8vZm9yIGRlYnVnIG9ubHlcclxuXHRcdFx0cmV0dXJuIHRydWU7XHRcclxuXHRcdH1cclxuXHRcdCQoJyNtb2RhbF9jb250YWluZXInKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI21vZGFsX2RldGFpbF9jb250YWluZXInKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBTZXR1cFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0bGV0IHVybCA9ICQoJyN0YWJsZV9jb250YWluZXInKS5kYXRhKCd1cmwnKTtcclxuXHRnbG9iYWwuYWpheC5zZXQoJyN0YWJsZV9jb250YWluZXInLCB1cmwpO1xyXG5cdFxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9