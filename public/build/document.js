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
  chxCheckall: null
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
                  text: $.i18n('Yes'),
                  value: 1
                }, {
                  text: $.i18n('No'),
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
            var _iterator15 = _createForOfIteratorHelper(header.elements),
                _step15;

            try {
              for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
                element = _step15.value;

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
              _iterator15.e(err);
            } finally {
              _iterator15.f();
            }

            var _iterator16 = _createForOfIteratorHelper(header.elements),
                _step16;

            try {
              for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                element = _step16.value;

                if (element.sort) {
                  urlSearch.set('sortAsc', element.id);
                  urlSearch["delete"]('vue');
                  urlSearch.fetch();
                  return;
                }
              }
            } catch (err) {
              _iterator16.e(err);
            } finally {
              _iterator16.f();
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
  var tbody = $('#table').append(create.tbody).children().last();

  function createMenu(header) {
    if (header.hasSort || header.hasFilter) {
      header.divDropdownMenu.empty();

      if (header.elements.length == 1) {
        createMenuItem(header, header.elements[0]);
      } else {
        var _iterator2 = _createForOfIteratorHelper(header.elements),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var element = _step2.value;

            if (element.filter || element.sort) {
              createMenuItem(header, element); //header if many selects

              element.divContent.prepend(create.div).children().first().addClass('text-center border-bottom border-dark pb-2 px-1').append(element.title);
            }
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
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
            var _iterator3 = _createForOfIteratorHelper(header.elements),
                _step3;

            try {
              for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                var _element = _step3.value;

                if (_element.filter) {
                  _element.filter.divFilter.trigger('filter.update');
                }
              }
            } catch (err) {
              _iterator3.e(err);
            } finally {
              _iterator3.f();
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
            var _iterator4 = _createForOfIteratorHelper(header.elements),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var _element2 = _step4.value;

                if (_element2.filter) {
                  _element2.filter.divFilter.trigger('filter.update');
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

        case type.list:
          element.filter.divFilter.on('filter.update', function () {
            urlSearch["delete"]('filter[' + element.id + '][]');

            if (element.filter.choices[0].chx.is(':checked') === false) {
              var _iterator5 = _createForOfIteratorHelper(element.filter.choices),
                  _step5;

              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var choice = _step5.value;

                  if (choice.chx.is(':checked')) {
                    urlSearch.append('filter[' + element.id + '][]', choice.value);
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          }).on('click', function () {
            var _iterator6 = _createForOfIteratorHelper(header.elements),
                _step6;

            try {
              for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                var _element3 = _step6.value;

                if (_element3.filter) {
                  _element3.filter.divFilter.trigger('filter.update');
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

          var _iterator7 = _createForOfIteratorHelper(element.filter.choices),
              _step7;

          try {
            var _loop = function _loop() {
              var choice = _step7.value;
              choice.div = element.filter.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
              choice.chx = choice.div.append(create.checkbox).children().last().attr('id', element.id + '_' + choice.value);
              choice.div.append(create.label).children().last().attr('for', element.id + '_' + choice.value).text(choice.text);

              if (choice.value == -1) {
                choice.chx.attr('checked', !urlSearch.get('filter[' + element.id + ']')).on('click', function () {
                  var _iterator8 = _createForOfIteratorHelper(element.filter.choices),
                      _step8;

                  try {
                    for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                      var _choice = _step8.value;

                      _choice.chx.prop('checked', false);
                    }
                  } catch (err) {
                    _iterator8.e(err);
                  } finally {
                    _iterator8.f();
                  }

                  urlSearch["delete"]('filter[' + element.id + ']');
                  header.btnDropdown.dropdown('hide');
                  urlSearch["delete"]('vue');
                  urlSearch.fetch();
                });
              } else {
                choice.chx.attr('checked', parseInt(urlSearch.get('filter[' + element.id + ']')) === choice.value).on('click', function () {
                  var _iterator9 = _createForOfIteratorHelper(element.filter.choices),
                      _step9;

                  try {
                    for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                      var _choice2 = _step9.value;

                      if (_choice2.chx != this) {
                        _choice2.chx.prop('checked', false);
                      }
                    }
                  } catch (err) {
                    _iterator9.e(err);
                  } finally {
                    _iterator9.f();
                  }

                  urlSearch.set('filter[' + element.id + ']', choice.value);
                  header.btnDropdown.dropdown('hide');
                  urlSearch["delete"]('vue');
                  urlSearch.fetch();
                });
              }
            };

            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
              _loop();
            }
          } catch (err) {
            _iterator7.e(err);
          } finally {
            _iterator7.f();
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
              var _iterator10 = _createForOfIteratorHelper(element.filter.choices),
                  _step10;

              try {
                for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                  var choice = _step10.value;
                  choice.div.show();
                  choice.chx.prop('checked', false);
                }
              } catch (err) {
                _iterator10.e(err);
              } finally {
                _iterator10.f();
              }
            } else {
              element.filter.choices[0].div.hide();

              var _iterator11 = _createForOfIteratorHelper(element.filter.choices),
                  _step11;

              try {
                for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                  var _choice3 = _step11.value;

                  if (_choice3.text.toLowerCase().indexOf(searchValue) == -1) {
                    _choice3.div.hide();

                    _choice3.chx.prop('checked', false);
                  } else {
                    _choice3.div.show();

                    _choice3.chx.prop('checked', true);
                  }
                }
              } catch (err) {
                _iterator11.e(err);
              } finally {
                _iterator11.f();
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

          var _iterator12 = _createForOfIteratorHelper(element.filter.choices),
              _step12;

          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var choice = _step12.value;
              choice.div = element.filter.divList.append(create.div).children().last().addClass('custom-control custom-checkbox');
              choice.chx = choice.div.append(create.checkbox).children().last().attr('id', element.id + '_' + choice.value);
              choice.div.append(create.label).children().last().attr('for', element.id + '_' + choice.value).text(choice.text);

              if (choice.value == -1) {
                choice.chx.on('change', function () {
                  var checked = $(this).is(':checked');

                  var _iterator13 = _createForOfIteratorHelper(element.filter.choices),
                      _step13;

                  try {
                    for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
                      var _choice4 = _step13.value;

                      _choice4.chx.prop('checked', checked);
                    }
                  } catch (err) {
                    _iterator13.e(err);
                  } finally {
                    _iterator13.f();
                  }
                });
              } else {
                choice.chx.attr('checked', urlSearch.get('filter[' + element.id + '][]').has(choice.value)).on('click', function () {
                  var checked = false;
                  var unchecked = false;

                  var _iterator14 = _createForOfIteratorHelper(element.filter.choices),
                      _step14;

                  try {
                    for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
                      var _choice5 = _step14.value;

                      if ($(_choice5.chx).is(':checked') && _choice5.value != 1) {
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
                    element.filter.choices[0].chx.prop('indeterminate', true);
                  } else {
                    element.filter.choices[0].chx.prop('indeterminate', false);
                    element.filter.choices[0].chx.prop('checked', checked);
                  }
                });
              }
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }

          break;
      }
    }
  }
} //---------------
// fillSeriesPannel
//---------------


function fillSeriesPannel() {
  var _iterator17 = _createForOfIteratorHelper(gpexe.series),
      _step17;

  try {
    for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
      var serie = _step17.value;
      serie.btn = $('#series').append(create.a).children().last().attr('role', 'button').addClass('btn btn-primary m-1').attr('href', serie.url).text(serie.name);
    }
  } catch (err) {
    _iterator17.e(err);
  } finally {
    _iterator17.f();
  }
} //---------------
//fillDisplayPannel
//---------------


function fillDisplayPannel() {
  var divCol = $('#display_panel').append(create.div).children().last().addClass('row py-2').append(create.div).children().last().addClass('col');

  var _iterator18 = _createForOfIteratorHelper(gpexe.headers),
      _step18;

  try {
    var _loop3 = function _loop3() {
      var header = _step18.value;
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
    console.log(e.target);
    e.stopPropagation();
    $('#table').hide();
    $('#spinner').show().empty().append(global.icon.loading);
  });
  $('#table_container').on('ajax.success', function (e, result, textStatus, jqXHR) {
    e.stopPropagation();
    $('#spinner').empty(); //setup js datas

    setup(result);
  });
  $('#table_container').on('ajax.completed', function (e, result, textStatus, jqXHR) {
    e.stopPropagation();
    fillSeriesPannel();
    fillDisplayPannel(); //setup url

    urlSearch.setFromUrl(window.location.search);
    urlSearch.getVues();
  }); //---------------------
  // Vues
  //---------------------

  $('#vues').on('ajax.success', function (e, result, textStatus, jqXHR) {
    e.stopPropagation();
    $('#vues').empty();

    var _iterator19 = _createForOfIteratorHelper(result),
        _step19;

    try {
      var _loop4 = function _loop4() {
        var vue = _step19.value;
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

      for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
        _loop4();
      } //---------------------
      // Dragtable
      //---------------------
      //		var dragger = tableDragger.default($('table').get(0), {
      //	        mode: 'column',
      //		});

    } catch (err) {
      _iterator19.e(err);
    } finally {
      _iterator19.f();
    }
  });
  $('#vues').on('ajax.completed', function (e, result, textStatus, jqXHR) {
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

    var _iterator20 = _createForOfIteratorHelper(gpexe.series),
        _step20;

    try {
      for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
        var serie = _step20.value;

        if (result.serie && serie.id == result.serie) {
          serie.btn.removeClass('btn-primary');
          serie.btn.addClass('btn-outline-primary');
        } else {
          serie.btn.removeClass('btn-outline-primary');
          serie.btn.addClass('btn-primary');
        }
      }
    } catch (err) {
      _iterator20.e(err);
    } finally {
      _iterator20.f();
    }

    var _iterator21 = _createForOfIteratorHelper(gpexe.headers),
        _step21;

    try {
      for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
        var header = _step21.value;

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
            var _iterator25 = _createForOfIteratorHelper(header.elements),
                _step25;

            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                element = _step25.value;

                if (urlSearch.get('sortAsc') == element.id) {
                  header.isSortedAsc = true;
                }

                if (urlSearch.get('sortDesc') == element.id) {
                  header.isSortedDesc = true;
                }
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }
          }

          if (header.hasFilter) {
            var _iterator26 = _createForOfIteratorHelper(header.elements),
                _step26;

            try {
              for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                element = _step26.value;

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
              _iterator26.e(err);
            } finally {
              _iterator26.f();
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
      _iterator21.e(err);
    } finally {
      _iterator21.f();
    }

    var _iterator22 = _createForOfIteratorHelper(result.datas),
        _step22;

    try {
      var _loop6 = function _loop6() {
        var data = _step22.value;
        var tr = $('#table > tbody').append(create.tr).children().last();
        var div = tr.append(create.td).children().last().append(create.div).children().last().addClass('custom-control custom-checkbox');
        div.append(create.checkbox).children().last().attr('id', 'c_' + data.version_id).val(data.version_id).on('click', urlSearch.lineChecked.bind(urlSearch));
        div.append(create.label).children().last().attr('for', 'c_' + data.version_id);

        var _iterator27 = _createForOfIteratorHelper(gpexe.headers),
            _step27;

        try {
          var _loop7 = function _loop7() {
            var header = _step27.value;
            value = data[header.id];

            if (value !== undefined) {
              if (header.id == 'status_type') {
                value = header.elements[0].filter.choices[value].text;
              }

              switch (header.type) {
                case type.bool:
                  dataClass = 'text-center';
                  if (value == 0) value = 'No';
                  if (value == 1) value = 'Yes';
                  break;

                case type.date:
                  dataClass = 'text-center';

                  if (value instanceof Object) {
                    value = value.date.toDate(); //highlight

                    if (urlSearch.get('highlight').toString() == header.id) {
                      if (value !== null) {
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
                    }

                    value = value.format();
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
              tr.append(create.td).children().last().addClass(dataClass).text(value).on('dblclick', function () {
                global.ajax.set(this, '/gpexe/project/serie/document/version/' + data['version_id'] + '/quick_edit/' + header.id);
              }).on('ajax.beforeSend', function (e, result, textStatus, jqXHR) {
                e.stopPropagation();
                $(e.target).show().empty().append(global.icon.loading);
              });
            } else {
              header.th.hide();
            }
          };

          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            _loop7();
          }
        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }

        tr.append(create.td).children().last().append(create.smallButton).children().last().addClass('btn-success w-100').attr('data-url', data.detailUrl).attr('data-toggle', 'modal ajax').attr('data-target', '#modal_detail').text($.i18n('details'));
      };

      for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
        _loop6();
      } //pagination

    } catch (err) {
      _iterator22.e(err);
    } finally {
      _iterator22.f();
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

    var _iterator23 = _createForOfIteratorHelper(resultsPerPage),
        _step23;

    try {
      for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
        var _step23$value = _slicedToArray(_step23.value, 2),
            text = _step23$value[0],
            _value = _step23$value[1];

        select.append(create.option).children().last().attr('value', _value).attr('selected', urlSearch.get('results_per_page') == _value).text(text);
      } //flashes

    } catch (err) {
      _iterator23.e(err);
    } finally {
      _iterator23.f();
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
        var _iterator24 = _createForOfIteratorHelper(result.flash[label]),
            _step24;

        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var message = _step24.value;
            ulBody.append(create.li).children().last().text(message);
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
      } else {
        ulBody.text(result.flash[label][0]);
      }

      divToast.toast('show');
    }

    urlSearch.lineChecked();
    global.ajax.fetch('#table > tbody'); //		$('table').stickyTableHeaders();
    //---------------------
    // Jquery Resizable Columns
    //---------------------
    //		$('#table').resizableColumns();
  });
  $('#table').on('ajax.completed', function (e, result, textStatus, jqXHR) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwiZ3BleGUiLCJoZWFkZXJzIiwiQXJyYXkiLCJzZXJpZXMiLCJ0YWJsZSIsImNoeENoZWNrYWxsIiwidHlwZSIsImJvb2wiLCJ0ZXh0IiwiZGF0ZSIsImxpbmsiLCJsaXN0IiwiVXJsU2VhcmNoIiwiX3BhcmFtc0FycmF5IiwicHJvdG90eXBlIiwiaGFzIiwia2V5IiwiZ2V0IiwiZXhlYyIsImdldEFsbCIsInNldCIsInZhbHVlIiwiYXBwZW5kIiwic2V0RnJvbVVybCIsInBhcmFtc0FycmF5IiwidG9VcmwiLCJ1cmwiLCJ0b1N0cmluZyIsInZhbHVlcyIsImkiLCJqb2luIiwiZmV0Y2giLCJkYXRhIiwiZ2xvYmFsIiwiYWpheCIsImdldFZ1ZXMiLCJsaW5lQ2hlY2tlZCIsImNoZWNrZWQiLCJ1bmNoZWNrZWQiLCJ0aGF0IiwiZmluZCIsImVhY2giLCJpcyIsInByb3AiLCJ2YWwiLCJzaG93IiwiaGlkZSIsInNldHVwIiwiZGF0YXMiLCJ0aGVhZCIsImNyZWF0ZSIsImNoaWxkcmVuIiwibGFzdCIsInRyIiwidGgiLCJjc3MiLCJkaXYiLCJhZGRDbGFzcyIsImNoZWNrYm94IiwiYXR0ciIsIm9uIiwidXJsU2VhcmNoIiwibGFiZWwiLCJmaWVsZHMiLCJmaWVsZCIsImRpc3BsYXkiLCJoZWFkZXIiLCJpZCIsInRpdGxlIiwiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdF93aWR0aCIsImhhc1NvcnQiLCJlbGVtZW50cyIsInNvbWUiLCJ2Iiwic29ydCIsImhhc0ZpbHRlciIsImZpbHRlciIsImoiLCJlbGVtZW50IiwiZSIsImMiLCJpMThuIiwiY2hvaWNlcyIsInB1c2giLCJuYW1lIiwiYSIsImIiLCJ1bnNoaWZ0IiwiZGl2RHJvcGRvd25Hcm91cCIsImNsaWNrRXZlbnQiLCJjb250YWlucyIsInJlbGF0ZWRUYXJnZXQiLCJwYXJlbnROb2RlIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJkaXZEcm9wZG93bk1lbnUiLCJlbXB0eSIsIm1lbnVCdXR0b24iLCJidG5Ecm9wZG93biIsImNyZWF0ZU1lbnUiLCJ0Ym9keSIsImxlbmd0aCIsImNyZWF0ZU1lbnVJdGVtIiwiZGl2Q29udGVudCIsInByZXBlbmQiLCJmaXJzdCIsImRpdkJ1dHRvbnMiLCJzbWFsbEJ1dHRvbiIsImljb24iLCJhcnJvd0Rvd24iLCJkaXZGaWx0ZXIiLCJ0cmlnZ2VyIiwiY2h4SW5mIiwicmVzdWx0IiwiaW5wdXRJbmYiLCJjaHhTdXAiLCJpbnB1dFN1cCIsImNoeEhpZ2hsaWdodCIsImRyb3Bkb3duIiwic2VhcmNoVmFsdWUiLCJpbnB1dFNlYXJjaCIsInRvTG93ZXJDYXNlIiwiY2h4IiwiY2hvaWNlIiwiYXJyb3dVcCIsImRpdkxpc3QiLCJwYXJzZUludCIsImRpdlNlYXJjaCIsImlucHV0Iiwid2hpY2giLCJzcGFuIiwiaHRtbCIsInZhbHVlSW5mIiwidmFsdWVTdXAiLCJoaWdobGlnaHQiLCJkaXZJbmYiLCJ0ZXN0IiwibGFiZWxJbmYiLCJkYXRlcGlja2VyIiwic3RvcFByb3BhZ2F0aW9uIiwiZGl2U3VwIiwibGFiZWxTdXAiLCJkaXZIaWdobGlnaHQiLCJpbmRleE9mIiwiZmlsbFNlcmllc1Bhbm5lbCIsInNlcmllIiwiYnRuIiwiZmlsbERpc3BsYXlQYW5uZWwiLCJkaXZDb2wiLCJhRGlzcGxheSIsImNoeERpc3BsYXkiLCJkb2N1bWVudCIsInJlYWR5IiwiZnJvbSIsImNvbGxhcHNlIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImJsdXIiLCJwYXJlbnQiLCJ0ZXh0U3RhdHVzIiwianFYSFIiLCJjb25zb2xlIiwibG9nIiwibG9hZGluZyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwidnVlIiwiYnV0dG9uIiwiZGl2MiIsImJ0bjIiLCJkaXYzIiwibW9kYWwiLCJzZWFyY2hVcmwiLCJwYXJhbSIsInF1ZXJ5IiwiaXNGaWx0ZXJlZCIsImlzU29ydGVkQXNjIiwiaXNTb3J0ZWREZXNjIiwiZnVubmVsRmlsbCIsImZ1bm5lbCIsInRkIiwidmVyc2lvbl9pZCIsImJpbmQiLCJ1bmRlZmluZWQiLCJkYXRhQ2xhc3MiLCJPYmplY3QiLCJ0b0RhdGUiLCJEYXRlIiwiYWRkRGF5cyIsImZvcm1hdCIsImRldGFpbFVybCIsInBhZ2VNYXgiLCJwYWdlIiwiTWF0aCIsIm1heCIsIm1pbiIsInVsIiwibGkiLCJwYWdlU3RhcnQiLCJwYWdlRW5kIiwic2VsZWN0IiwicmVzdWx0c1BlclBhZ2UiLCJNYXAiLCJvcHRpb24iLCJrZXlzIiwiZmxhc2giLCJkaXZUb2FzdCIsImRpdkNvbnRhaW5lciIsInVsQm9keSIsImNsb3NlIiwibWVzc2FnZSIsInRvYXN0IiwiZXhpc3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBLElBQU1BLENBQUMsR0FBR0MsbUJBQU8sQ0FBQyxvREFBRCxDQUFqQjs7QUFDQSxJQUFNQyxNQUFNLEdBQUdELG1CQUFPLENBQUMsOERBQUQsQ0FBdEIsQyxDQUNBO0FBQ0E7QUFDQTs7O0FBQ0FBLG1CQUFPLENBQUMsd0RBQUQsQ0FBUDs7QUFDQSxJQUFNRSxlQUFlLEdBQUdGLG1CQUFPLENBQUMsMEZBQUQsQ0FBL0I7O0FBRUEsSUFBSUcsS0FBSyxHQUFHO0FBQ1hDLFNBQU8sRUFBRSxJQUFJQyxLQUFKLEVBREU7QUFFWEMsUUFBTSxFQUFFLEVBRkc7QUFHWEMsT0FBSyxFQUFFLElBSEk7QUFJWEMsYUFBVyxFQUFFO0FBSkYsQ0FBWjtBQU9BLElBQU1DLElBQUksR0FBRztBQUNaQyxNQUFJLEVBQUUsRUFETTtBQUVaQyxNQUFJLEVBQUUsRUFGTTtBQUda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R0FBRyxHQUFHOUIsQ0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JvQyxJQUF0QixDQUEyQixLQUEzQixDQUFWO0FBQ0FDLFFBQU0sQ0FBQ0MsSUFBUCxDQUFZZCxHQUFaLENBQWdCLGtCQUFoQixFQUFvQ00sR0FBcEM7QUFFQSxDQTlsQkQsRSIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuY29uc3QgcG9wcGVyID0gcmVxdWlyZSgncG9wcGVyLmpzJyk7XHJcbi8vcmVxdWlyZSgnc3RpY2t5LXRhYmxlLWhlYWRlcnMnKTtcclxuLy9jb25zdCB0YWJsZURyYWdnZXIgPSByZXF1aXJlKCd0YWJsZS1kcmFnZ2VyJyk7XHJcbi8vcmVxdWlyZSgnanF1ZXJ5LXJlc2l6YWJsZS1jb2x1bW5zJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9kb2N1bWVudC5zY3NzJyk7XHJcbmNvbnN0IFVSTFNlYXJjaFBhcmFtcyA9IHJlcXVpcmUoJ0B1bmdhcC91cmwtc2VhcmNoLXBhcmFtcy9janMnKTtcclxuXHJcbnZhciBncGV4ZSA9IHtcclxuXHRoZWFkZXJzOiBuZXcgQXJyYXkoKSxcclxuXHRzZXJpZXM6IFtdLFxyXG5cdHRhYmxlOiBudWxsLFxyXG5cdGNoeENoZWNrYWxsOiBudWxsLFxyXG59XHJcblxyXG5jb25zdCB0eXBlID0ge1xyXG5cdGJvb2w6IDExLFxyXG5cdHRleHQ6IDEyLFxyXG5cdGRhdGU6IDEzLFxyXG5cdGxpbms6IDE0LFxyXG5cdGxpc3Q6IDE1LFxyXG59O1xyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy9VcmxTZWFyY2hcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIFVybFNlYXJjaCAoKSB7XHJcblx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XHJcbn1cclxuXHJcblVybFNlYXJjaC5wcm90b3R5cGUgPSB7XHJcblxyXG5cdGhhczogZnVuY3Rpb24oa2V5KSB7XHJcblx0XHRyZXR1cm4gdGhpcy5fcGFyYW1zQXJyYXkuaGFzKGtleSk7XHJcblx0fSxcclxuXHRcclxuXHRnZXQ6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0aWYgKC9cXFMrXFxbXFxdL2cuZXhlYyhrZXkpKSB7XHJcblx0XHRcdHJldHVybiB0aGlzLl9wYXJhbXNBcnJheS5nZXRBbGwoa2V5KSB8fCBbXTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJldHVybiB0aGlzLl9wYXJhbXNBcnJheS5nZXQoa2V5KSB8fCAnJztcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG5cdFx0aWYgKGtleSA9PSAndnVlJykge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoeyd2dWUnOiB2YWx1ZX0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkuc2V0KGtleSwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0YXBwZW5kOiBmdW5jdGlvbihrZXksIHZhbHVlKSB7XHJcblx0XHRpZiAoa2V5ID09ICd2dWUnKSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh7J3Z1ZSc6IHZhbHVlfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheS5hcHBlbmQoa2V5LCB2YWx1ZSk7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRkZWxldGU6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0dGhpcy5fcGFyYW1zQXJyYXkuZGVsZXRlKGtleSk7XHJcblx0fSxcclxuXHRcclxuXHRzZXRGcm9tVXJsOiBmdW5jdGlvbih2YWx1ZSkge1xyXG5cdFx0bGV0IHBhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh2YWx1ZSk7XHJcblx0XHRpZiAocGFyYW1zQXJyYXkuaGFzKCd2dWUnKSkge1xyXG5cdFx0XHR0aGlzLnNldCgndnVlJywgcGFyYW1zQXJyYXkuZ2V0KCd2dWUnKSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheSA9IHBhcmFtc0FycmF5O1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0dG9Vcmw6IGZ1bmN0aW9uKGtleSA9ICcnKSB7XHJcblx0XHRsZXQgdXJsID0gJyc7XHJcblx0XHRpZiAoa2V5ID09ICcnKSB7XHJcblx0XHRcdHVybCA9IHRoaXMuX3BhcmFtc0FycmF5LnRvU3RyaW5nKCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHR2YWx1ZXMgPSB0aGlzLmdldChrZXkpO1xyXG5cdFx0XHRmb3IgKGkgaW4gdmFsdWVzKSB7XHJcblx0XHRcdFx0dmFsdWVzW2ldID0ga2V5ICsgJz0nICsgdmFsdWVzW2ldO1xyXG5cdFx0XHR9XHJcblx0XHRcdHVybCA9IHZhbHVlcy5qb2luKCcmJyk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gKHVybCk/Jz8nICsgdXJsOicnO1xyXG5cdH0sXHJcblx0XHJcblx0ZmV0Y2g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHJcblx0XHRsZXQgdXJsID0gJCgnI3RhYmxlJykuZGF0YSgndXJsJykgKyB0aGlzLnRvVXJsKCk7XHJcblx0XHRnbG9iYWwuYWpheC5zZXQoJyN0YWJsZScsIHVybCk7XHJcblx0XHRcclxuXHR9LFxyXG5cdFxyXG5cdGdldFZ1ZXM6IGZ1bmN0aW9uKCkge1xyXG5cdFx0bGV0IHVybCA9ICQoJyN2dWVzJykuZGF0YSgndXJsJyk7XHJcblx0XHRnbG9iYWwuYWpheC5zZXQoJyN2dWVzJywgdXJsKTtcclxuXHR9LFxyXG5cdFxyXG5cdGxpbmVDaGVja2VkOiBmdW5jdGlvbiAoKSB7XHJcblx0XHRcclxuXHRcdHZhciBjaGVja2VkID0gZmFsc2U7XHJcblx0XHR2YXIgdW5jaGVja2VkID0gZmFsc2U7XHJcblx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcclxuXHRcdCQoJ3Rib2R5JykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dW5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGNoZWNrZWQgJiYgdW5jaGVja2VkKSB7XHJcblx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnY2hlY2tlZCcsIGNoZWNrZWQpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0dGhhdC5kZWxldGUoJ2lkW10nKTtcclxuXHRcdFxyXG5cdFx0aWYgKGNoZWNrZWQpIHtcclxuXHRcdFx0JCgndGFibGUnKS5maW5kKCdpbnB1dFt0eXBlPVwiY2hlY2tib3hcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGlmICgkKHRoaXMpLnByb3AoJ2lkJykgIT0gJ2NoZWNrX2FsbCcgJiYgJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0dGhhdC5hcHBlbmQoJ2lkW10nLCAkKHRoaXMpLnZhbCgpKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0JCgnI2RvY3VtZW50X2VkaXQnKS5zaG93KCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9tb3ZlJykuc2hvdygpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZGVsZXRlJykuc2hvdygpO1xyXG5cdFx0XHQkKCcjdmVyc2lvbl9tZW51Jykuc2hvdygpO1xyXG5cdFx0fSBlbHNlIGlmKHVuY2hlY2tlZCkge1xyXG5cdFx0XHQkKCcjdmVyc2lvbicpLnZhbCgnJyk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfbW92ZScpLmhpZGUoKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLmhpZGUoKTtcclxuXHRcdFx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcclxuXHRcdH1cclxuXHR9LFxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vLyBTZXR1cFxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG5cclxuZnVuY3Rpb24gc2V0dXAoZGF0YXMpIHtcclxuXHRcclxuXHQkKCcjdGFibGUnKS5zaG93KCk7XHJcblx0XHJcblx0bGV0IHRoZWFkID0gJCgnI3RhYmxlJykuYXBwZW5kKGNyZWF0ZS50aGVhZCkuY2hpbGRyZW4oKS5sYXN0KCk7XHJcblx0bGV0IHRyID0gdGhlYWQuYXBwZW5kKGNyZWF0ZS50cikuY2hpbGRyZW4oKS5sYXN0KCk7XHJcblx0bGV0IHRoID0gdHIuYXBwZW5kKGNyZWF0ZS50aCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdC5jc3MoJ3dpZHRoJywgJzJlbScpXHJcblx0O1xyXG5cdFxyXG5cdGxldCBkaXYgPSB0aC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdC5hZGRDbGFzcygnYnRuLWdyb3VwIGN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCBidG4gYnRuLXNtIGJ0bi1wcmltYXJ5IHJvdW5kZWQtMCcpXHJcblx0O1xyXG5cdFxyXG5cdGdwZXhlLmNoeENoZWNrYWxsID0gZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHQuYXR0cignaWQnLCAnY2hlY2tfYWxsJylcclxuXHRcdC5hdHRyKCd1bmNoZWNrZWQnLCAndW5jaGVja2VkJylcclxuXHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0ICQoJ3Rib2R5JykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnByb3AoJ2NoZWNrZWQnLCAkKCcjY2hlY2tfYWxsJykuaXMoJzpjaGVja2VkJykpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0IHVybFNlYXJjaC5saW5lQ2hlY2tlZCgpO1xyXG5cdFx0fSk7XHJcblx0O1xyXG5cdFxyXG5cdGRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0LmFkZENsYXNzKCdteC0xJylcclxuXHRcdC5hdHRyKCdmb3InLCAnY2hlY2tfYWxsJylcclxuXHQ7XHRcclxuXHRcclxuXHRncGV4ZS5zZXJpZXMgPSBkYXRhcy5zZXJpZXM7XHJcblx0XHJcblx0Zm9yIChsZXQgaSBpbiBkYXRhcy5maWVsZHMpIHtcclxuXHRcdFxyXG5cdFx0ZmllbGQgPSBkYXRhcy5maWVsZHNbaV07XHJcblx0XHRcclxuXHRcdGlmIChmaWVsZC5kaXNwbGF5LnRhYmxlKSB7XHJcblx0XHRcclxuXHRcdFx0bGV0IGhlYWRlciA9IHtcclxuXHRcdFx0XHRpZDogZmllbGQuaWQsXHJcblx0XHRcdFx0dGl0bGU6IGZpZWxkLnRpdGxlLFxyXG5cdFx0XHRcdHR5cGU6IGZpZWxkLnR5cGUsXHJcblx0XHRcdFx0ZGVmYXVsdFdpZHRoOiBmaWVsZC5kZWZhdWx0X3dpZHRoLFxyXG5cdFx0XHRcdGhhc1NvcnQ6IChmaWVsZC5lbGVtZW50cyAmJiBmaWVsZC5lbGVtZW50cy5zb21lKHYgPT4gdi5zb3J0ID09PSB0cnVlKSksXHJcblx0XHRcdFx0aGFzRmlsdGVyOiAoZmllbGQuZWxlbWVudHMgJiYgZmllbGQuZWxlbWVudHMuc29tZSh2ID0+IHYuZmlsdGVyKSksXHJcblx0XHRcdFx0ZWxlbWVudHM6IFtdLFxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQkLmVhY2goZmllbGQuZWxlbWVudHMsIGZ1bmN0aW9uIChqLCBlbGVtZW50KSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ZSA9IHtcclxuXHRcdFx0XHRcdGlkOiBlbGVtZW50LmlkLFxyXG5cdFx0XHRcdFx0dGl0bGU6IGVsZW1lbnQudGl0bGUsXHJcblx0XHRcdFx0XHRzb3J0OiBlbGVtZW50LnNvcnQsXHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0c3dpdGNoIChlbGVtZW50LmZpbHRlci50eXBlKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgdHlwZS5ib29sOlxyXG5cdFx0XHRcdFx0XHRcdHZhciBjID0gW1xyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiAkLmkxOG4oJ25vdEFwcGxpY2FibGUnKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IC0xLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dDogJC5pMThuKCdZZXMnKSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IDEsXHJcblx0XHRcdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcdFx0e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiAkLmkxOG4oJ05vJyksXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAwLFxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdF07XHJcblx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHJcblx0XHRcdFx0XHRcdGNhc2UgdHlwZS5saXN0OlxyXG5cdFx0XHRcdFx0XHRcdHZhciBjID0gW107XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0JC5lYWNoKGVsZW1lbnQuZmlsdGVyLmNob2ljZXMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IHZhbHVlLm5hbWUgfHwgdmFsdWUudmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IHZhbHVlLmlkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGMucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dDogdmFsdWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0dmFsdWU6IGtleSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Yy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoYS50ZXh0IDwgYi50ZXh0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAtMTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdGlmIChhLnRleHQgPiBiLnRleHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDE7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gMDtcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRjLnVuc2hpZnQoe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGV4dDogJC5pMThuKCdzZWxlY3RBbGwnKSxcclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAtMSxcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZS5maWx0ZXIgPSB7XHJcblx0XHRcdFx0XHRcdHR5cGU6IGVsZW1lbnQuZmlsdGVyLnR5cGUsXHJcblx0XHRcdFx0XHRcdGNob2ljZXM6IGMsXHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRoZWFkZXIuZWxlbWVudHMucHVzaChlKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcclxuXHRcdFx0Z3BleGUuaGVhZGVycy5wdXNoKGhlYWRlcik7XHJcblx0XHRcclxuXHRcdH1cclxuXHRcdFxyXG5cdH1cclxuXHRcclxuXHRmb3IgKGxldCBoZWFkZXIgb2YgZ3BleGUuaGVhZGVycykge1xyXG5cdFx0XHJcblx0XHRoZWFkZXIudGggPSB0ci5hcHBlbmQoY3JlYXRlLnRoKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuY3NzKCd3aWR0aCcsIGhlYWRlci5kZWZhdWx0V2lkdGggKyAnZW0nKVxyXG5cdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0aWYgKGhlYWRlci5oYXNTb3J0IHx8IGhlYWRlci5oYXNGaWx0ZXIpIHtcclxuXHRcdFx0XHJcblx0XHRcdC8vbWFpbiBidXR0b24gZ3JvdXBcclxuXHRcdFx0bGV0IGRpdkRyb3Bkb3duR3JvdXAgPSBoZWFkZXIudGguYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdidG4tZ3JvdXAgdy0xMDAnKVxyXG5cdFx0XHRcdC5hdHRyKCdyb2xlJywgJ2dyb3VwJylcclxuXHRcdFx0XHQub24oJ2hpZGUuYnMuZHJvcGRvd24nLCBmdW5jdGlvbiAoZSkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZihlLmNsaWNrRXZlbnQgJiYgJC5jb250YWlucyhlLnJlbGF0ZWRUYXJnZXQucGFyZW50Tm9kZSwgZS5jbGlja0V2ZW50LnRhcmdldCkpIHtcclxuXHRcdFx0XHRcdFx0ZS5wcmV2ZW50RGVmYXVsdCgpXHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRoZWFkZXIuZGl2RHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0Ly90aXRsZVxyXG5cdFx0XHRkaXZEcm9wZG93bkdyb3VwLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtdHJ1bmNhdGUgdy0xMDAnKVxyXG5cdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdFx0LnRleHQoaGVhZGVyLnRpdGxlKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmIChoZWFkZXIuaGFzRmlsdGVyKSB7XHJcblx0XHRcdFx0XHRcdGZvciAoZWxlbWVudCBvZiBoZWFkZXIuZWxlbWVudHMpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IGVsZW1lbnQuaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnREZXNjJywgZWxlbWVudC5pZCk7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSBlbGVtZW50LmlkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnc29ydEFzYycsIGVsZW1lbnQuaWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Zm9yIChlbGVtZW50IG9mIGhlYWRlci5lbGVtZW50cykge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChlbGVtZW50LnNvcnQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnRBc2MnLCBlbGVtZW50LmlkKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHQvL2Ryb3BEb3duIGJ1dHRvblxyXG5cdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24gPSBkaXZEcm9wZG93bkdyb3VwLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTAnKVxyXG5cdFx0XHRcdC5jc3MoJ3dpZHRoJywgJzNlbScpXHJcblx0XHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0XHQuYXR0cignaWQnLCAnYl8nICsgaGVhZGVyLmlkKVxyXG5cdFx0XHRcdC5hdHRyKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpXHJcblx0XHRcdFx0LmF0dHIoJ2RhdGEtZGlzcGxheScsICdzdGF0aWMnKVxyXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWhhc3BvcHVwJywgdHJ1ZSlcclxuXHRcdFx0XHQuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHQvL2Ryb3BEb3duIG1lbnVcclxuXHRcdFx0aGVhZGVyLmRpdkRyb3Bkb3duTWVudSA9IGRpdkRyb3Bkb3duR3JvdXAuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdkcm9wZG93bi1tZW51IGRyb3Bkb3duLW1lbnUtbGVmdCcpXHJcblx0XHRcdFx0LmF0dHIoJ2FyaWEtbGFiZWxsZWRieScsICdiXycgKyBoZWFkZXIuaWQpXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdkLWZsZXggZmxleC1yb3cnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRkaXZEcm9wZG93bkdyb3VwLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0Y3JlYXRlTWVudShoZWFkZXIpO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcclxuXHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duID0gaGVhZGVyLnRoLmFwcGVuZChjcmVhdGUubWVudUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtdHJ1bmNhdGUgdy0xMDAnKVxyXG5cdFx0XHRcdC50ZXh0KGhlYWRlci50aXRsZSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdHRyLmFwcGVuZChjcmVhdGUudGgpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHQuYXR0cignaWQnLCAnZGV0YWlsJylcclxuXHRcdC5jc3MoJ3dpZHRoJywgJzZlbScpXHJcblx0O1xyXG5cdFxyXG5cdGxldCB0Ym9keSA9ICQoJyN0YWJsZScpLmFwcGVuZChjcmVhdGUudGJvZHkpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdFxyXG5cdFxyXG5cdGZ1bmN0aW9uIGNyZWF0ZU1lbnUoaGVhZGVyKSB7XHJcblx0XHRcclxuXHRcdGlmIChoZWFkZXIuaGFzU29ydCB8fCBoZWFkZXIuaGFzRmlsdGVyKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRoZWFkZXIuZGl2RHJvcGRvd25NZW51LmVtcHR5KCk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoaGVhZGVyLmVsZW1lbnRzLmxlbmd0aCA9PSAxKSB7XHJcblx0XHRcdFx0Y3JlYXRlTWVudUl0ZW0oaGVhZGVyLCBoZWFkZXIuZWxlbWVudHNbMF0pO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGZvciAodmFyIGVsZW1lbnQgb2YgaGVhZGVyLmVsZW1lbnRzKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChlbGVtZW50LmZpbHRlciB8fCBlbGVtZW50LnNvcnQpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGNyZWF0ZU1lbnVJdGVtKGhlYWRlciwgZWxlbWVudCk7XHJcblxyXG5cdFx0XHRcdFx0XHQvL2hlYWRlciBpZiBtYW55IHNlbGVjdHNcclxuXHRcdFx0XHRcdFx0ZWxlbWVudC5kaXZDb250ZW50LnByZXBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5maXJzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHBiLTIgcHgtMScpXHJcblx0XHRcdFx0XHRcdFx0LmFwcGVuZChlbGVtZW50LnRpdGxlKVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdFxyXG5cdGZ1bmN0aW9uIGNyZWF0ZU1lbnVJdGVtKGhlYWRlciwgZWxlbWVudCkge1xyXG5cdFx0XHJcblx0XHRlbGVtZW50LmRpdkNvbnRlbnQgPSBoZWFkZXIuZGl2RHJvcGRvd25NZW51LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ214LTEnKVxyXG5cdFx0XHQuY3NzKCdtaW4td2lkdGgnLCAnMTVlbScpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGxldCBkaXZCdXR0b25zID0gZWxlbWVudC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3RleHQtY2VudGVyIHAtMScpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGlmIChlbGVtZW50LnNvcnQpIHtcclxuXHRcdFx0ZGl2QnV0dG9ucy5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hcHBlbmQoZ2xvYmFsLmljb24uYXJyb3dEb3duKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSBlbGVtZW50LmlkKT8ncHgtMiBidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J3B4LTIgYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IGVsZW1lbnQuaWQpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnREZXNjJywgZWxlbWVudC5pZCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkZpbHRlci50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKGVsZW1lbnQuZmlsdGVyKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIgPSBkaXZCdXR0b25zLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LnRleHQoJC5pMThuKCdmaWx0ZXInKSlcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTMgYnRuLXByaW1hcnknKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRzd2l0Y2ggKGVsZW1lbnQuZmlsdGVyLnR5cGUpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjYXNlIHR5cGUuZGF0ZTpcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyXHJcblx0XHRcdFx0XHRcdC5vbignZmlsdGVyLnVwZGF0ZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddW10nKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIuY2h4SW5mLmlzKCc6Y2hlY2tlZCcpICYmIChyZXN1bHQgPSAvXuKJpVxccyhcXGR7Mn0tXFxkezJ9LVxcZHs0fSkvLmV4ZWMoZWxlbWVudC5maWx0ZXIuaW5wdXRJbmYudmFsKCkpKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScsICc+JyArIHJlc3VsdFsxXSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmIChlbGVtZW50LmZpbHRlci5jaHhTdXAuaXMoJzpjaGVja2VkJykgJiYgKHJlc3VsdCA9IC9e4omkXFxzKFxcZHsyfS1cXGR7Mn0tXFxkezR9KS8uZXhlYyhlbGVtZW50LmZpbHRlci5pbnB1dFN1cC52YWwoKSkpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXVtdJywgJzwnICsgcmVzdWx0WzFdKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZmlsdGVyLmNoeEhpZ2hsaWdodC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnaGlnaGxpZ2h0JywgZWxlbWVudC5pZCk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICh1cmxTZWFyY2guZ2V0KCdoaWdobGlnaHQnKS50b1N0cmluZygpID09IGVsZW1lbnQuaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ2hpZ2hsaWdodCcpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGVsZW1lbnQgb2YgaGVhZGVyLmVsZW1lbnRzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyLnRyaWdnZXIoJ2ZpbHRlci51cGRhdGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHRcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSB0eXBlLnRleHQ6XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkZpbHRlclxyXG5cdFx0XHRcdFx0XHQub24oJ2ZpbHRlci51cGRhdGUnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXScpO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdHZhciBzZWFyY2hWYWx1ZSA9IGVsZW1lbnQuaW5wdXRTZWFyY2gudmFsKCkudG9Mb3dlckNhc2UoKVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmIChzZWFyY2hWYWx1ZSAhPSAnJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ10nLCBzZWFyY2hWYWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgZWxlbWVudCBvZiBoZWFkZXIuZWxlbWVudHMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChlbGVtZW50LmZpbHRlcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIudHJpZ2dlcignZmlsdGVyLnVwZGF0ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24uZHJvcGRvd24oJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcdFxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRjYXNlIHR5cGUubGlzdDpcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyXHJcblx0XHRcdFx0XHRcdC5vbignZmlsdGVyLnVwZGF0ZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddW10nKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIuY2hvaWNlc1swXS5jaHguaXMoJzpjaGVja2VkJykgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2hvaWNlLmNoeC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5hcHBlbmQoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddW10nLCBjaG9pY2UudmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgZWxlbWVudCBvZiBoZWFkZXIuZWxlbWVudHMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmIChlbGVtZW50LmZpbHRlcikge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIudHJpZ2dlcignZmlsdGVyLnVwZGF0ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24uZHJvcGRvd24oJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0fVx0XHRcdFxyXG5cdFx0XHJcblx0XHRpZiAoZWxlbWVudC5zb3J0KSB7XHJcblx0XHRcdGRpdkJ1dHRvbnMuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXBwZW5kKGdsb2JhbC5pY29uLmFycm93VXApXHJcblx0XHRcdFx0LmFkZENsYXNzKCh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gZWxlbWVudC5pZCk/J3B4LTIgYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOidweC0yIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0RGVzYycpO1xyXG5cdFx0XHRcdFx0aWYgKHVybFNlYXJjaC5nZXQoJ3NvcnRBc2MnKSA9PSBlbGVtZW50LmlkKSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnRBc2MnKTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnRBc2MnLCBlbGVtZW50LmlkKTtcclxuXHRcdFx0XHRcdH1cclxuXHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmIChlbGVtZW50LmZpbHRlcikge1xyXG5cdFx0XHRcclxuXHRcdFx0c3dpdGNoIChlbGVtZW50LmZpbHRlci50eXBlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSB0eXBlLmJvb2w6XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkxpc3QgPSBlbGVtZW50LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMiBvdmVyZmxvdy1hdXRvICcgKyAoKGVsZW1lbnQuZmlsdGVyLnR5cGUgPT09IHR5cGUubGlzdCk/J3B0LTMnOidwdC0xJykpXHJcblx0XHRcdFx0XHRcdC5jc3MoJ21heC1oZWlnaHQnLCAnMjBlbScpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IGNob2ljZSBvZiBlbGVtZW50LmZpbHRlci5jaG9pY2VzKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjaG9pY2UuZGl2ID0gZWxlbWVudC5maWx0ZXIuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGNob2ljZS5jaHggPSBjaG9pY2UuZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgZWxlbWVudC5pZCArICdfJyArIGNob2ljZS52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjaG9pY2UuZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIGVsZW1lbnQuaWQgKyAnXycgKyBjaG9pY2UudmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0LnRleHQoY2hvaWNlLnRleHQpXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChjaG9pY2UudmFsdWUgPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRjaG9pY2UuY2h4XHJcblx0XHRcdFx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsICF1cmxTZWFyY2guZ2V0KCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXScpKVxyXG5cdFx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24uZHJvcGRvd24oJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeFxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCBwYXJzZUludCh1cmxTZWFyY2guZ2V0KCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXScpKSA9PT0gY2hvaWNlLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgY2hvaWNlIG9mIGVsZW1lbnQuZmlsdGVyLmNob2ljZXMpIHtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChjaG9pY2UuY2h4ICE9IHRoaXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNob2ljZS5jaHgucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddJywgY2hvaWNlLnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdGhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSB0eXBlLnRleHQ6XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBkaXZTZWFyY2ggPSBlbGVtZW50LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnaW5wdXQtZ3JvdXAgaW5wdXQtZ3JvdXAtc20gcC0yJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5pbnB1dFNlYXJjaCA9IGRpdlNlYXJjaC5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQudmFsKHVybFNlYXJjaC5nZXQoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddJykpXHJcblx0XHRcdFx0XHRcdC5vbigna2V5cHJlc3MnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGUud2hpY2ggPT0gMTMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkZpbHRlci50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGRpdiA9IGRpdlNlYXJjaC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdpbnB1dC1ncm91cC1hcHBlbmQnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgYSA9IGRpdi5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1saWdodCBib3JkZXItbGVmdC0wIGJvcmRlciB0ZXh0LXByaW1hcnknKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0YS5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5odG1sKCcmdGltZXM7JylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuaW5wdXRTZWFyY2gudmFsKCcnKTtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNhc2UgdHlwZS5kYXRlOlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoKHJlc3VsdCA9IC8+KFxcZHsyfS1cXGR7Mn0tXFxkezR9KS8uZXhlYyh1cmxTZWFyY2guZ2V0KCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXVtdJykudG9TdHJpbmcoKSkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHZhciB2YWx1ZUluZiA9IHJlc3VsdFsxXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHZhciB2YWx1ZUluZiA9ICcnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoKHJlc3VsdCA9IC88KFxcZHsyfS1cXGR7Mn0tXFxkezR9KS8uZXhlYyh1cmxTZWFyY2guZ2V0KCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXVtdJykudG9TdHJpbmcoKSkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdHZhciB2YWx1ZVN1cCA9IHJlc3VsdFsxXTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHZhciB2YWx1ZVN1cCA9ICcnO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgaGlnaGxpZ2h0ID0gKHVybFNlYXJjaC5nZXQoJ2hpZ2hsaWdodCcpLnRvU3RyaW5nKCkgPT0gZWxlbWVudC5pZCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkxpc3QgPSBlbGVtZW50LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMiBvdmVyZmxvdy1hdXRvICcgKyAoKGVsZW1lbnQuZmlsdGVyLnR5cGUgPT09IHR5cGUubGlzdCk/J3B0LTMnOidwdC0xJykpXHJcblx0XHRcdFx0XHRcdC5jc3MoJ21heC1oZWlnaHQnLCAnMjBlbScpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkluZiA9IGVsZW1lbnQuZmlsdGVyLmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94IG10LTInKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaHhJbmYgPSBlbGVtZW50LmZpbHRlci5kaXZJbmYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgZWxlbWVudC5pZCArICdfaW5mJylcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCB2YWx1ZUluZiAhPSAnJylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgY2hlY2tlZCA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGlmICgvXuKJpVxcc1xcZHsyfS1cXGR7Mn0tXFxkezR9Ly50ZXN0KGVsZW1lbnQuZmlsdGVyLmlucHV0SW5mLnZhbCgpKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuaW5wdXRJbmYudmFsKCcnKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuaW5wdXRJbmYudmFsKCQuaTE4bignZnJvbURhdGUnKSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0SW5mLmF0dHIoJ3JlYWRvbmx5JywgY2hlY2tlZCA9PT0gZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5sYWJlbEluZiA9IGVsZW1lbnQuZmlsdGVyLmRpdkluZi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgZWxlbWVudC5pZCArICdfaW5mJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuaW5wdXRJbmYgPSBlbGVtZW50LmZpbHRlci5sYWJlbEluZi5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBkYXRlcGlja2VyJylcclxuXHRcdFx0XHRcdFx0LnZhbCgodmFsdWVJbmYpPygn4omlICcgKyB2YWx1ZUluZik6JC5pMThuKCdmcm9tRGF0ZScpKVxyXG5cdFx0XHRcdFx0XHQuYXR0cigncmVhZG9ubHknLCB2YWx1ZUluZiA9PSAnJylcclxuXHRcdFx0XHRcdFx0LmRhdGVwaWNrZXIoeydmb3JtYXQnOiAn4omlIGRkLW1tLXl5eXknfSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNoeEluZi5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuY2h4SW5mLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0ICAgIC5vbignc2hvdy5icy5kcm9wZG93biBoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0ICAgIFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHRcdCAgICB9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZTdXAgPSBlbGVtZW50LmZpbHRlci5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCBtdC0yJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuY2h4U3VwID0gZWxlbWVudC5maWx0ZXIuZGl2U3VwLmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIGVsZW1lbnQuaWQgKyAnX3N1cCcpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdmFsdWVTdXAgIT0gJycpXHJcblx0XHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGNoZWNrZWQgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChjaGVja2VkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoL17iiaRcXHNcXGR7Mn0tXFxkezJ9LVxcZHs0fS8udGVzdChlbGVtZW50LmZpbHRlci5pbnB1dFN1cC52YWwoKSkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0U3VwLnZhbCgnJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0U3VwLnZhbCgkLmkxOG4oJ3RvRGF0ZScpKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuaW5wdXRTdXAuYXR0cigncmVhZG9ubHknLCBjaGVja2VkID09PSBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmxhYmVsU3VwID0gZWxlbWVudC5maWx0ZXIuZGl2U3VwLmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBlbGVtZW50LmlkICsgJ19zdXAnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5pbnB1dFN1cCA9IGVsZW1lbnQuZmlsdGVyLmxhYmVsU3VwLmFwcGVuZChjcmVhdGUuaW5wdXQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnZm9ybS1jb250cm9sIGRhdGVwaWNrZXInKVxyXG5cdFx0XHRcdFx0XHQudmFsKCh2YWx1ZVN1cCk/J+KJpCAnICsgdmFsdWVTdXA6JC5pMThuKCd0b0RhdGUnKSlcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ3JlYWRvbmx5JywgdmFsdWVTdXAgPT0gJycpXHJcblx0XHRcdFx0XHRcdC5kYXRlcGlja2VyKHsnZm9ybWF0JzogXCLiiaQgZGQtbW0teXl5eVwifSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNoeFN1cC5wcm9wKCdjaGVja2VkJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuY2h4U3VwLnRyaWdnZXIoJ2NoYW5nZScpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0ICAgIC5vbignc2hvdy5icy5kcm9wZG93biBoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0ICAgIFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0XHRcdCAgICB9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZIaWdobGlnaHQgPSBlbGVtZW50LmZpbHRlci5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCBtdC0yJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuY2h4SGlnaGxpZ2h0ID0gZWxlbWVudC5maWx0ZXIuZGl2SGlnaGxpZ2h0LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIGVsZW1lbnQuaWQgKyAnX2hpZ2hsaWdodCcpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCduYW1lJywgJ2hpZ2hsaWdodCcpXHJcblx0XHRcdFx0XHRcdC52YWwoZWxlbWVudC5pZClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCBoaWdobGlnaHQpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkhpZ2hsaWdodC5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgZWxlbWVudC5pZCArICdfaGlnaGxpZ2h0JylcclxuXHRcdFx0XHRcdFx0LnRleHQoJC5pMThuKCdoaWdobGlnaHQnKSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjYXNlIHR5cGUubGlzdDpcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZGl2U2VhcmNoID0gZWxlbWVudC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2lucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtIGJvcmRlci1ib3R0b20gYm9yZGVyLWRhcmsgcC0yJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5pbnB1dFNlYXJjaCA9IGRpdlNlYXJjaC5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQub24oJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChlLndoaWNoID09IDEzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdC5vbignaW5wdXQnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR2YXIgc2VhcmNoVmFsdWUgPSAkKHRoaXMpLnZhbCgpLnRvTG93ZXJDYXNlKClcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoc2VhcmNoVmFsdWUgPT0gJycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGNob2ljZSBvZiBlbGVtZW50LmZpbHRlci5jaG9pY2VzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNob2ljZS5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjaG9pY2UuY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNob2ljZXNbMF0uZGl2LmhpZGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGNob2ljZSBvZiBlbGVtZW50LmZpbHRlci5jaG9pY2VzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChjaG9pY2UudGV4dC50b0xvd2VyQ2FzZSgpLmluZGV4T2Yoc2VhcmNoVmFsdWUpID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hvaWNlLmRpdi5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNob2ljZS5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNob2ljZS5jaHgucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGRpdiA9IGRpdlNlYXJjaC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdpbnB1dC1ncm91cC1hcHBlbmQnKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRhID0gZGl2LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ3R5cGUnLCAnYnV0dG9uJylcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLWxpZ2h0IGJvcmRlci1sZWZ0LTAgYm9yZGVyIHRleHQtcHJpbWFyeScpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRhLmFwcGVuZChjcmVhdGUuc3BhbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0Lmh0bWwoJyZ0aW1lczsnKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5pbnB1dFNlYXJjaC52YWwoJycpO1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuaW5wdXRTZWFyY2gudHJpZ2dlcignaW5wdXQnKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2TGlzdCA9IGVsZW1lbnQuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdweC0yIG92ZXJmbG93LWF1dG8gJyArICgoZWxlbWVudC5maWx0ZXIudHlwZSA9PT0gdHlwZS5saXN0KT8ncHQtMyc6J3B0LTEnKSlcclxuXHRcdFx0XHRcdFx0LmNzcygnbWF4LWhlaWdodCcsICcyMGVtJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0Zm9yIChsZXQgY2hvaWNlIG9mIGVsZW1lbnQuZmlsdGVyLmNob2ljZXMpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGNob2ljZS5kaXYgPSBlbGVtZW50LmZpbHRlci5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y2hvaWNlLmNoeCA9IGNob2ljZS5kaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYXR0cignaWQnLCBlbGVtZW50LmlkICsgJ18nICsgY2hvaWNlLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjaG9pY2UuZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIGVsZW1lbnQuaWQgKyAnXycgKyBjaG9pY2UudmFsdWUpXHJcblx0XHRcdFx0XHRcdFx0LnRleHQoY2hvaWNlLnRleHQpXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmIChjaG9pY2UudmFsdWUgPT0gLTEpIHtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRjaG9pY2UuY2h4XHJcblx0XHRcdFx0XHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YXIgY2hlY2tlZCA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGNob2ljZSBvZiBlbGVtZW50LmZpbHRlci5jaG9pY2VzKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaG9pY2UuY2h4LnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeFxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCB1cmxTZWFyY2guZ2V0KCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXVtdJykuaGFzKGNob2ljZS52YWx1ZSkpXHJcblx0XHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZXQgdW5jaGVja2VkID0gZmFsc2U7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICgkKGNob2ljZS5jaHgpLmlzKCc6Y2hlY2tlZCcpICYmIGNob2ljZS52YWx1ZSAhPSAxKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dW5jaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChjaGVja2VkICYmIHVuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNob2ljZXNbMF0uY2h4LnByb3AoJ2luZGV0ZXJtaW5hdGUnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaG9pY2VzWzBdLmNoeC5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNob2ljZXNbMF0uY2h4LnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxufVxyXG5cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vIGZpbGxTZXJpZXNQYW5uZWxcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGZpbGxTZXJpZXNQYW5uZWwoKSB7XHJcblx0XHJcblx0Zm9yIChsZXQgc2VyaWUgb2YgZ3BleGUuc2VyaWVzKSB7XHJcblx0XHRzZXJpZS5idG4gPSAkKCcjc2VyaWVzJykuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXR0cigncm9sZScsICdidXR0b24nKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0biBidG4tcHJpbWFyeSBtLTEnKVxyXG5cdFx0XHQuYXR0cignaHJlZicsIHNlcmllLnVybClcclxuXHRcdFx0LnRleHQoc2VyaWUubmFtZSlcclxuXHRcdDtcclxuXHR9XHJcblx0XHJcbn1cclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vZmlsbERpc3BsYXlQYW5uZWxcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIGZpbGxEaXNwbGF5UGFubmVsKCkge1xyXG5cdFxyXG5cdGxldCBkaXZDb2wgPSAkKCcjZGlzcGxheV9wYW5lbCcpLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0LmFkZENsYXNzKCdyb3cgcHktMicpXHJcblx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnY29sJylcclxuXHQ7XHJcblx0XHJcblx0Zm9yIChsZXQgaGVhZGVyIG9mIGdwZXhlLmhlYWRlcnMpIHtcclxuXHRcdFxyXG5cdFx0aGVhZGVyLmFEaXNwbGF5ID0gZGl2Q29sLmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXNtIGJ0bi1vdXRsaW5lLXByaW1hcnkgY29sLTIgbS0xIHRleHQtbGVmdCB0ZXh0LW5vd3JhcCcpXHJcblx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRoZWFkZXIuY2h4RGlzcGxheS5wcm9wKCdjaGVja2VkJywgIWhlYWRlci5jaHhEaXNwbGF5LmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgZGlzcGxheSA9IHVybFNlYXJjaC5nZXQoJ2Rpc3BsYXlbJyArIGhlYWRlci5pZCArICddJyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnZGlzcGxheVsnICsgaGVhZGVyLmlkICsgJ10nKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoaGVhZGVyLmNoeERpc3BsYXkuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdGlmIChkaXNwbGF5ID09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5hcHBlbmQoJ2Rpc3BsYXlbJyArIGhlYWRlci5pZCArICddJywgaGVhZGVyLmRlZmF1bHRXaWR0aCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0bGV0IGRpdiA9IGhlYWRlci5hRGlzcGxheS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGhlYWRlci5jaHhEaXNwbGF5ID0gZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hdHRyKCdpZCcsICdoXycgKyBoZWFkZXIuaWQpXHJcblx0XHRcdC5vbignY2hhbmdlIGNsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmF0dHIoJ2ZvcicsICdoXycgKyBoZWFkZXIuaWQpXHJcblx0XHRcdC50ZXh0KGhlYWRlci50aXRsZSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0XHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG52YXIgdXJsU2VhcmNoID0gbmV3IFVybFNlYXJjaCgpO1xyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gTWVudSBkaXNwbGF5XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHJcblx0JCgnI2RvY3VtZW50X25ldywgI2RvY3VtZW50X2VkaXQsICNkb2N1bWVudF9tb3ZlLCAjZG9jdW1lbnRfZGVsZXRlLCAjdmVyc2lvbl9uZXcsICN2ZXJzaW9uX2VkaXQsICN2ZXJzaW9uX2RlbGV0ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0Z2xvYmFsLmFqYXguc2V0KCcjbW9kYWwnLCAkKHRoaXMpLmRhdGEoJ3VybCcpICsgdXJsU2VhcmNoLnRvVXJsKCdpZFtdJyksIHtmcm9tOiB0aGlzfSk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI2RvY3VtZW50X2VkaXQnKS5oaWRlKCk7XHJcblx0JCgnI2RvY3VtZW50X21vdmUnKS5oaWRlKCk7XHJcblx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLmhpZGUoKTtcclxuXHQkKCcjdmVyc2lvbl9tZW51JykuaGlkZSgpO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gVGFiIGNvbGxhcHNlXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjdGFicycpLm9uKCdzaG93LmJzLnRhYicsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnLmNvbGxhcHNlJykuY29sbGFwc2UoJ3Nob3cnKTtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5yZW1vdmVDbGFzcygndGFic19oaWRkZW4nKTtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5hZGRDbGFzcygndGFic19zaG93ZWQnKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdGFicyB1bCBsaSBhJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcclxuXHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcclxuXHRcdFx0JCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdCQodGhpcykuYmx1cigpO1xyXG5cdFx0XHQkKHRoaXMpLmF0dHIoJ2FyaWEtc2VsZWN0ZWQnLCBmYWxzZSk7XHJcblx0XHRcdCQoJyMnICsgJCh0aGlzKS5hdHRyKCdhcmlhLWNvbnRyb2xzJykpLnBhcmVudCgpLmNvbGxhcHNlKCdoaWRlJyk7XHJcblx0XHR9XHJcblx0fSk7XHJcbiAgICBcclxuXHQkKCcjdGFicycpLm9uKCdzaG93bi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLnJlbW92ZUNsYXNzKCd0YWJzX2hpZGRlbicpO1xyXG5cdFx0JCgnI3RhYmxlX2NvbnRhaW5lcicpLmFkZENsYXNzKCd0YWJzX3Nob3dlZCcpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN0YWJzJykub24oJ2hpZGRlbi5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5yZW1vdmVDbGFzcygndGFic19zaG93ZWQnKTtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5hZGRDbGFzcygndGFic19oaWRkZW4nKTtcclxuXHR9KTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFRhYnMgbWluaW1pemVcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyN0YWJzJykudHJpZ2dlcignc2hvdy5icy50YWInKTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFRhYmxlX2NvbnRhaW5lclxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3RhYmxlX2NvbnRhaW5lciwgI3Z1ZXMsICN0YWJsZScpLm9uKCdhamF4LmJlZm9yZVNlbmQnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcblx0XHRjb25zb2xlLmxvZyhlLnRhcmdldCk7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0JCgnI3RhYmxlJykuaGlkZSgpO1xyXG5cdFx0XHJcblx0XHQkKCcjc3Bpbm5lcicpXHJcblx0XHRcdC5zaG93KClcclxuXHRcdFx0LmVtcHR5KClcclxuXHRcdFx0LmFwcGVuZChnbG9iYWwuaWNvbi5sb2FkaW5nKVxyXG5cdFx0O1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN0YWJsZV9jb250YWluZXInKS5vbignYWpheC5zdWNjZXNzJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0JCgnI3NwaW5uZXInKS5lbXB0eSgpO1xyXG5cdFx0XHJcblx0XHQvL3NldHVwIGpzIGRhdGFzXHJcblx0XHRzZXR1cChyZXN1bHQpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN0YWJsZV9jb250YWluZXInKS5vbignYWpheC5jb21wbGV0ZWQnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcblx0XHRcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRmaWxsU2VyaWVzUGFubmVsKCk7XHJcblx0XHRmaWxsRGlzcGxheVBhbm5lbCgpO1xyXG5cdFx0XHJcblx0XHQvL3NldHVwIHVybFxyXG5cdFx0dXJsU2VhcmNoLnNldEZyb21Vcmwod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcblx0XHRcclxuXHRcdHVybFNlYXJjaC5nZXRWdWVzKCk7XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBWdWVzXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjdnVlcycpLm9uKCdhamF4LnN1Y2Nlc3MnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcblx0XHRcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHRcclxuXHRcdCQoJyN2dWVzJykuZW1wdHkoKTtcclxuXHRcdFxyXG5cdFx0Zm9yIChsZXQgdnVlIG9mIHJlc3VsdCkge1xyXG5cdFx0XHRcclxuXHRcdFx0ZGl2ID0gJCgnI3Z1ZXMnKVxyXG5cdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2J0bi1ncm91cCBtLTEnKVxyXG5cdFx0XHRcdC5hdHRyKCdyb2xlJywgJ2dyb3VwJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0YnRuID0gZGl2LmFwcGVuZChjcmVhdGUuYnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnYnRuLXByaW1hcnknKVxyXG5cdFx0XHRcdC5hdHRyKCdkYXRhLWlkJywgdnVlLmlkKVxyXG5cdFx0XHRcdC50ZXh0KHZ1ZS5uYW1lKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3Z1ZScsIHZ1ZS5pZCk7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdCQodGhpcykuYmx1cigpO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGlmICh2dWVbJ2VkaXRfdXJsJ10gJiYgdnVlWydkZWxldGVfdXJsJ10pIHtcclxuXHRcdFx0XHRkaXYyID0gZGl2LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdidG4tZ3JvdXAnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ3JvbGUnLCAnZ3JvdXAnKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRidG4yID0gZGl2Mi5hcHBlbmQoY3JlYXRlLmJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLXRvZ2dsZScsICdkcm9wZG93bicpXHJcblx0XHRcdFx0XHQuYXR0cignYXJpYS1oYXNwb3B1cCcsIHRydWUpXHJcblx0XHRcdFx0XHQuYXR0cignYXJpYS1leHBhbmRlZCcsIGZhbHNlKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRkaXYzID0gZGl2Mi5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnZHJvcGRvd24tbWVudScpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRpdjMuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdkcm9wZG93bi1pdGVtIHRleHQtc3VjY2VzcycpXHJcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdGdsb2JhbC5hamF4LnNldCgnI21vZGFsJywgdnVlWydlZGl0X3VybCddLCB7bW9kYWw6IHRydWV9KTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQudGV4dCgkLmkxOG4oJ2VkaXQnKSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0ZGl2My5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2Ryb3Bkb3duLWl0ZW0gdGV4dC1kYW5nZXInKVxyXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRnbG9iYWwuYWpheC5zZXQoJyNtb2RhbCcsIHZ1ZVsnZGVsZXRlX3VybCddLCB7bW9kYWw6IHRydWUsIGZyb206IHRoaXN9KTtcclxuXHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQudGV4dCgkLmkxOG4oJ2RlbGV0ZScpKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0Ly8gRHJhZ3RhYmxlXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcbi8vXHRcdHZhciBkcmFnZ2VyID0gdGFibGVEcmFnZ2VyLmRlZmF1bHQoJCgndGFibGUnKS5nZXQoMCksIHtcclxuLy9cdCAgICAgICAgbW9kZTogJ2NvbHVtbicsXHJcbi8vXHRcdH0pO1xyXG5cdFxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2dWVzJykub24oJ2FqYXguY29tcGxldGVkJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyN2dWVfbmV3Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRnbG9iYWwuYWpheC5zZXQoJyNtb2RhbCcsICQodGhpcykuZGF0YSgndXJsJykgKyB1cmxTZWFyY2gudG9VcmwoKSwge21vZGFsOiB0cnVlfSk7XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBUYWJsZVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3RhYmxlJykub24oJ2FqYXguc3VjY2VzcycsIGZ1bmN0aW9uKGUsIHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcclxuXHRcdFxyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFxyXG5cdFx0JCgnI3NwaW5uZXInKS5lbXB0eSgpO1xyXG5cdFx0JCgnI3RhYmxlID4gdGJvZHknKS5lbXB0eSgpO1xyXG5cdFx0JCgnI3RhYmxlJykuc2hvdygpO1xyXG5cdFx0aWYgKHJlc3VsdCA9PSBmYWxzZSkgcmV0dXJuO1xyXG5cdFx0XHJcbi8vXHRcdGNvbnNvbGUubG9nKHJlc3VsdC5xdWVyeSk7XHJcbi8vXHRcdGNvbnNvbGUubG9nKHJlc3VsdC5kYXRhcyk7XHJcblx0XHRcclxuXHRcdGxldCBzZWFyY2hVcmwgPSAkLnBhcmFtKHJlc3VsdC5xdWVyeSk7XHJcblx0XHR1cmxTZWFyY2guX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhzZWFyY2hVcmwpO1xyXG5cdFx0dXJsU2VhcmNoLmRlbGV0ZSgnaWRbXScpO1xyXG5cdFx0XHJcblx0XHQvL3Z1ZVxyXG5cdFx0JCgnI3Z1ZXMnKS5maW5kKCdidXR0b25bZGF0YS1pZF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoJCh0aGlzKS5kYXRhKCdpZCcpID09IHVybFNlYXJjaC5nZXQoJ3Z1ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLW91dGxpbmUtcHJpbWFyeScpO1xyXG5cdFx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnZGl2ID4gYnV0dG9uJykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlJyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCh0aGlzKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLXByaW1hcnknKTtcclxuXHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ2RpdiA+IGJ1dHRvbicpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tcHJpbWFyeSBkcm9wZG93bi10b2dnbGUnKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdC8vc2VyaWVzXHJcblx0XHRmb3IgKGxldCBzZXJpZSBvZiBncGV4ZS5zZXJpZXMpIHtcclxuXHRcdFx0aWYgKHJlc3VsdC5zZXJpZSAmJiBzZXJpZS5pZCA9PSByZXN1bHQuc2VyaWUpIHtcclxuXHRcdFx0XHRzZXJpZS5idG4ucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0c2VyaWUuYnRuLmFkZENsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0c2VyaWUuYnRuLnJlbW92ZUNsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0c2VyaWUuYnRuLmFkZENsYXNzKCdidG4tcHJpbWFyeScpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGZvciAobGV0IGhlYWRlciBvZiBncGV4ZS5oZWFkZXJzKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQvL2Rpc3BsYXlcclxuXHRcdFx0XHJcblx0XHRcdGlmIChkaXNwbGF5ID0gcmVzdWx0LnF1ZXJ5LmRpc3BsYXlbaGVhZGVyLmlkXSkge1xyXG5cclxuXHRcdFx0XHRoZWFkZXIuYURpc3BsYXkuYWRkQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0XHRoZWFkZXIuYURpc3BsYXkucmVtb3ZlQ2xhc3MoJ2J0bi1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0aGVhZGVyLmNoeERpc3BsYXkucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdGhlYWRlci50aC5jc3MoJ3dpZHRoJywgZGlzcGxheSArICdlbScpO1xyXG5cdFx0XHRcdGhlYWRlci50aC5zaG93KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Ly9oZWFkZXJzXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duLmVtcHR5KCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aGVhZGVyLmlzRmlsdGVyZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRoZWFkZXIuaXNTb3J0ZWRBc2MgPSBmYWxzZTtcclxuXHRcdFx0XHRoZWFkZXIuaXNTb3J0ZWREZXNjID0gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKGhlYWRlci5oYXNTb3J0KSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAoZWxlbWVudCBvZiBoZWFkZXIuZWxlbWVudHMpIHtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gZWxlbWVudC5pZCkge1xyXG5cdFx0XHRcdFx0XHRcdGhlYWRlci5pc1NvcnRlZEFzYyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0RGVzYycpID09IGVsZW1lbnQuaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRoZWFkZXIuaXNTb3J0ZWREZXNjID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChoZWFkZXIuaGFzRmlsdGVyKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAoZWxlbWVudCBvZiBoZWFkZXIuZWxlbWVudHMpIHtcclxuXHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZmlsdGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0c3dpdGNoIChlbGVtZW50LmZpbHRlci50eXBlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIHR5cGUuYm9vbDpcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgdHlwZS50ZXh0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmhhcygnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ10nKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlYWRlci5pc0ZpbHRlcmVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIHR5cGUuZGF0ZTpcclxuXHRcdFx0XHRcdFx0XHRcdGNhc2UgdHlwZS5saXN0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmhhcygnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aGVhZGVyLmlzRmlsdGVyZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoKGhlYWRlci5pc0ZpbHRlcmVkKT9nbG9iYWwuaWNvbi5mdW5uZWxGaWxsOmdsb2JhbC5pY29uLmZ1bm5lbCk7XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChoZWFkZXIuaXNTb3J0ZWRBc2MpIHtcclxuXHRcdFx0XHRcdGhlYWRlci5idG5Ecm9wZG93bi5hcHBlbmQoZ2xvYmFsLmljb24uYXJyb3dVcCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChoZWFkZXIuaXNTb3J0ZWREZXNjKSB7XHJcblx0XHRcdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGdsb2JhbC5pY29uLmFycm93RG93bik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGhlYWRlci5hRGlzcGxheS5hZGRDbGFzcygnYnRuLXByaW1hcnknKTtcclxuXHRcdFx0XHRoZWFkZXIuYURpc3BsYXkucmVtb3ZlQ2xhc3MoJ2J0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0XHRoZWFkZXIuY2h4RGlzcGxheS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdGhlYWRlci50aC5oaWRlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vdGJvZHlcclxuXHRcdGZvciAobGV0IGRhdGEgb2YgcmVzdWx0LmRhdGFzKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgdHIgPSAkKCcjdGFibGUgPiB0Ym9keScpLmFwcGVuZChjcmVhdGUudHIpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGRpdiA9IHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXR0cignaWQnLCAnY18nICsgZGF0YS52ZXJzaW9uX2lkKVxyXG5cdFx0XHRcdC52YWwoZGF0YS52ZXJzaW9uX2lkKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCB1cmxTZWFyY2gubGluZUNoZWNrZWQuYmluZCh1cmxTZWFyY2gpKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXR0cignZm9yJywgJ2NfJyArIGRhdGEudmVyc2lvbl9pZClcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0Zm9yIChsZXQgaGVhZGVyIG9mIGdwZXhlLmhlYWRlcnMpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHR2YWx1ZSA9IGRhdGFbaGVhZGVyLmlkXTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAodmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoaGVhZGVyLmlkID09ICdzdGF0dXNfdHlwZScpIHtcclxuXHRcdFx0XHRcdFx0dmFsdWUgPSBoZWFkZXIuZWxlbWVudHNbMF0uZmlsdGVyLmNob2ljZXNbdmFsdWVdLnRleHQ7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHN3aXRjaCAoaGVhZGVyLnR5cGUpIHtcclxuXHRcdFx0XHRcdFx0Y2FzZSB0eXBlLmJvb2w6XHJcblx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3RleHQtY2VudGVyJztcclxuXHRcdFx0XHRcdFx0XHRpZiAodmFsdWUgPT0gMCkgdmFsdWUgPSAnTm8nO1xyXG5cdFx0XHRcdFx0XHRcdGlmICh2YWx1ZSA9PSAxKSB2YWx1ZSA9ICdZZXMnO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIHR5cGUuZGF0ZTpcclxuXHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndGV4dC1jZW50ZXInO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLmRhdGUudG9EYXRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdC8vaGlnaGxpZ2h0XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnaGlnaGxpZ2h0JykudG9TdHJpbmcoKSA9PSBoZWFkZXIuaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHZhbHVlICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHZhbHVlIDwgbmV3IERhdGUoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHIuYWRkQ2xhc3MoJ2hpZ2hsaWdodC1sYXRlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZS5hZGREYXlzKC0xNSkgPCBuZXcgRGF0ZSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ci5hZGRDbGFzcygnaGlnaGxpZ2h0LTE1Jyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICh2YWx1ZS5hZGREYXlzKC0zMCkgPCBuZXcgRGF0ZSgpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ci5hZGRDbGFzcygnaGlnaGxpZ2h0LTMwJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyLmFkZENsYXNzKCdoaWdobGlnaHQtb2snKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlID0gdmFsdWUuZm9ybWF0KCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRjYXNlIHR5cGUubGluazpcclxuXHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndGV4dC1jZW50ZXInO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAodHlwZW9mIHZhbHVlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlICdudW1iZXInOlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndGV4dC1yaWdodCc7XHJcblx0XHRcdFx0XHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhQ2xhc3MgPSAndGV4dC1sZWZ0JztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRpZiAodmFsdWUgPT09IG51bGwpIHZhbHVlID0gJyc7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcyhkYXRhQ2xhc3MpXHJcblx0XHRcdFx0XHRcdC50ZXh0KHZhbHVlKVxyXG5cdFx0XHRcdFx0XHQub24oJ2RibGNsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0Z2xvYmFsLmFqYXguc2V0KHRoaXMsICcvZ3BleGUvcHJvamVjdC9zZXJpZS9kb2N1bWVudC92ZXJzaW9uLycgKyBkYXRhWyd2ZXJzaW9uX2lkJ10gKyAnL3F1aWNrX2VkaXQvJyArIGhlYWRlci5pZCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdC5vbignYWpheC5iZWZvcmVTZW5kJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHRcdFx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHQgICAgXHQkKGUudGFyZ2V0KVxyXG5cdFx0XHRcdFx0XHRcdFx0LnNob3coKVxyXG5cdFx0XHRcdFx0XHRcdFx0LmVtcHR5KClcclxuXHRcdFx0XHRcdFx0XHRcdC5hcHBlbmQoZ2xvYmFsLmljb24ubG9hZGluZylcclxuXHRcdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRoZWFkZXIudGguaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdidG4tc3VjY2VzcyB3LTEwMCcpXHJcblx0XHRcdFx0XHQuYXR0cignZGF0YS11cmwnLCBkYXRhLmRldGFpbFVybClcclxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLXRvZ2dsZScsICdtb2RhbCBhamF4JylcclxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLXRhcmdldCcsICcjbW9kYWxfZGV0YWlsJylcclxuXHRcdFx0XHRcdC50ZXh0KCQuaTE4bignZGV0YWlscycpKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvL3BhZ2luYXRpb25cclxuXHRcdCQoJyNwYWdpbmF0aW9uJykuZW1wdHkoKTtcclxuXHRcdFx0XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuYWRkQ2xhc3MoJ21iLTQnKTtcclxuXHRcdFxyXG5cdFx0bGV0IHBhZ2VNYXggPSByZXN1bHQucGFnZU1heDtcclxuXHRcdGxldCBwYWdlID0gcGFyc2VJbnQodXJsU2VhcmNoLmdldCgncGFnZScpKSB8fCAxO1xyXG5cdFx0cGFnZSA9IE1hdGgubWF4KE1hdGgubWluKHBhZ2UsIHBhZ2VNYXgpLCAxKTtcclxuXHRcdFxyXG5cdFx0ZGl2ID0gJCgnI3BhZ2luYXRpb24nKS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdyb3cgbS0wJylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0ZGl2LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbCcpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHVsID0gZGl2LmFwcGVuZChjcmVhdGUudWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygncGFnaW5hdGlvbiBjb2wganVzdGlmeS1jb250ZW50LWNlbnRlcicpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGlmIChyZXN1bHQucGFnZU1heCA+IDEpIHtcclxuXHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gMSk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmIChwYWdlID4gMSkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdwYWdlJywgcGFnZSAtIDEpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBNYXRoLm1heCgxLCBwYWdlIC0gMSkpXHJcblx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKVxyXG5cdFx0XHRcdFx0XHQuaHRtbCgnJmxhcXVvOycpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBwYWdlU3RhcnQgPSBNYXRoLm1pbihNYXRoLm1heCgxLCBwYWdlIC0gMiksIE1hdGgubWF4KDEsIHJlc3VsdC5wYWdlTWF4IC0gNCkpO1xyXG5cdFx0XHRsZXQgcGFnZUVuZCA9IE1hdGgubWluKHBhZ2VTdGFydCArIDUsIHBhZ2VNYXgpO1xyXG5cdFx0XHRcclxuXHRcdFx0Zm9yIChsZXQgaSA9IHBhZ2VTdGFydDsgaSA8PSBwYWdlRW5kOyBpKyspIHtcclxuXHRcdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWl0ZW0nICsgKChwYWdlID09IGkpPycgYWN0aXZlJzonJykpXHJcblx0XHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3BhZ2UnLCBpKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncGFnZS1saW5rJylcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBpKVxyXG5cdFx0XHRcdFx0XHQudGV4dChpKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dWwuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gcGFnZU1heCk/JyBkaXNhYmxlZCc6JycpKVxyXG5cdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdGlmIChwYWdlIDwgcGFnZU1heCkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdwYWdlJywgcGFnZSArIDEpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdmFsdWUnLCBNYXRoLm1pbihwYWdlTWF4LCBwYWdlICsgMSkpXHJcblx0XHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignYXJpYS1oaWRkZW4nLCB0cnVlKVxyXG5cdFx0XHRcdFx0XHQuaHRtbCgnJnJhcXVvOycpXHJcblx0XHRcdDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c2VsZWN0ID0gZGl2LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbCBkLWZsZXgganVzdGlmeS1jb250ZW50LWVuZCBtdC0xIG1yLTUnKVxyXG5cdFx0XHQuYXBwZW5kKGNyZWF0ZS5zZWxlY3QpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbSBiZy1kYXJrIGJvcmRlci1zZWNvbmRhcnkgdGV4dC13aGl0ZScpXHJcblx0XHRcdC5jc3MoJ3dpZHRoJywgJzE1MCcpXHJcblx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dXJsU2VhcmNoLnNldCgncmVzdWx0c19wZXJfcGFnZScsICQodGhpcykudmFsKCkpXHJcblx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGxldCByZXN1bHRzUGVyUGFnZSA9IG5ldyBNYXAoW1snMTAnLCAxMF0sIFsnNTAnLCA1MF0sIFsnMTAwJywgMTAwXSwgWyQuaTE4bignYWxsJyksICcwJ11dKTtcclxuXHRcdGZvciAobGV0IFt0ZXh0LCB2YWx1ZV0gb2YgcmVzdWx0c1BlclBhZ2UpIHtcclxuXHRcdFx0c2VsZWN0LmFwcGVuZChjcmVhdGUub3B0aW9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hdHRyKCd2YWx1ZScsIHZhbHVlKVxyXG5cdFx0XHRcdC5hdHRyKCdzZWxlY3RlZCcsIHVybFNlYXJjaC5nZXQoJ3Jlc3VsdHNfcGVyX3BhZ2UnKSA9PSB2YWx1ZSlcclxuXHRcdFx0XHQudGV4dCh0ZXh0KVxyXG5cdFx0XHQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0Ly9mbGFzaGVzXHJcblx0XHRcclxuXHRcdCQoJyN0b2FzdCcpLmVtcHR5KCk7XHJcblx0XHRcclxuXHRcdGZvciAobGV0IGxhYmVsIG9mIE9iamVjdC5rZXlzKHJlc3VsdC5mbGFzaCkpIHtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBkaXZUb2FzdCA9ICQoJyN0b2FzdCcpLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygndG9hc3QnKVxyXG5cdFx0XHRcdC5hdHRyKCdyb2xlJywgJ2FsZXJ0JylcclxuXHRcdFx0XHQuYXR0cignZGF0YS1kZWxheScsIDUwMDApXHJcblx0XHRcdFx0LmF0dHIoJ2FyaWEtbGl2ZScsICdhc3NlcnRpdmUnKVxyXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWF0b21pYycsIHRydWUpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBkaXZDb250YWluZXIgPSBkaXZUb2FzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2FsZXJ0IGFsZXJ0LScgKyBsYWJlbCArICcgZC1mbGV4IHB4LTMgbS0wJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0ZGl2Q29udGFpbmVyLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnYWxpZ24tc2VsZi1jZW50ZXInKVxyXG5cdFx0XHRcdC5hcHBlbmQoZ2xvYmFsLmljb25bbGFiZWxdKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgdWxCb2R5ID0gZGl2Q29udGFpbmVyLmFwcGVuZChjcmVhdGUudWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdqdXN0aWZ5LWNvbnRlbnQtY2VudGVyIGZsZXgtZmlsbCcpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGRpdkNvbnRhaW5lci5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2p1c3RpZnktY29udGVudC1lbmQnKVxyXG5cdFx0XHRcdC5hcHBlbmQoZ2xvYmFsLmljb24uY2xvc2UpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKHJlc3VsdC5mbGFzaFtsYWJlbF0ubGVuZ3RoID4gMSkge1xyXG5cdFx0XHRcdGZvciAobGV0IG1lc3NhZ2Ugb2YgcmVzdWx0LmZsYXNoW2xhYmVsXSkge1xyXG5cdFx0XHRcdFx0dWxCb2R5LmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC50ZXh0KG1lc3NhZ2UpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHVsQm9keS50ZXh0KHJlc3VsdC5mbGFzaFtsYWJlbF1bMF0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHRkaXZUb2FzdC50b2FzdCgnc2hvdycpO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR1cmxTZWFyY2gubGluZUNoZWNrZWQoKTtcclxuXHRcdFxyXG5cdFx0Z2xvYmFsLmFqYXguZmV0Y2goJyN0YWJsZSA+IHRib2R5Jyk7XHJcbi8vXHRcdCQoJ3RhYmxlJykuc3RpY2t5VGFibGVIZWFkZXJzKCk7XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBKcXVlcnkgUmVzaXphYmxlIENvbHVtbnNcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuLy9cdFx0JCgnI3RhYmxlJykucmVzaXphYmxlQ29sdW1ucygpO1xyXG5cdFx0XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3RhYmxlJykub24oJ2FqYXguY29tcGxldGVkJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHR9KTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFF1aWNrIGVkaXRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIE1vZGFsXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjbW9kYWxfZGV0YWlsJykub24oJ2FqYXguY29tcGxldGVkJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHJcblx0XHQkKGUudGFyZ2V0KS5maW5kKCcjdmVyc2lvbl9lZGl0X2RldGFpbCwgI3ZlcnNpb25fZGVsZXRlX2RldGFpbCcpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRnbG9iYWwuYWpheC5zZXQoJyNtb2RhbCcsICQodGhpcykuZGF0YSgndXJsJykgKyAnP2lkW109JyArICQoJyN2ZXJzaW9uX3RhYnM+YS5hY3RpdmUnKS5kYXRhKCdpZCcpICsgJyZtb2RhbD0xJywge2Zyb206IHRoaXN9KTtcclxuXHQgICAgfSk7XHJcblx0XHRcclxuXHR9KTtcclxuXHRcdFxyXG5cdCQoJyNtb2RhbCcpLm9uKCdhamF4LnN1Y2Nlc3MnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcblx0XHRcclxuXHRcdGlmIChyZXN1bHQgPT09ICcnKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQkKCcjbW9kYWxfY29udGFpbmVyJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdFx0XHJcblx0XHRcdCQoJyNtb2RhbF9kZXRhaWxfY29udGFpbmVyJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcclxuXHRcdH0gZWxzZSBpZiAoJCgnPGRpdj4nICsgcmVzdWx0ICsgJzwvZGl2PicpLmZpbmQoJ2Rpdi5tb2RhbC1ib2R5JykuZXhpc3QoKSkge1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH0gZWxzZSBpZiAoJCgnPGRpdj4nICsgcmVzdWx0ICsgJzwvZGl2PicpLmZpbmQoJ3ByZS5zZi1kdW1wJykuZXhpc3QoKSkgeyAvL2ZvciBkZWJ1ZyBvbmx5XHJcblx0XHRcdHJldHVybiB0cnVlO1x0XHJcblx0XHR9XHJcblx0XHQkKCcjbW9kYWxfY29udGFpbmVyJykubW9kYWwoJ2hpZGUnKTtcclxuXHRcdFxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNtb2RhbF9kZXRhaWxfY29udGFpbmVyJykub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gU2V0dXBcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdGxldCB1cmwgPSAkKCcjdGFibGVfY29udGFpbmVyJykuZGF0YSgndXJsJyk7XHJcblx0Z2xvYmFsLmFqYXguc2V0KCcjdGFibGVfY29udGFpbmVyJywgdXJsKTtcclxuXHRcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==