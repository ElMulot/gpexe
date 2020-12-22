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

  $('#tabs').trigger('show.bs.tab');
  $('#table_container, #vues, #table').on('ajax.beforeSend', function (e, result, textStatus, jqXHR) {
    e.stopPropagation();
    $('#table').hide();
    $('#spinner').show().empty().append(global.icon.loading);
  }); //---------------------
  // Table_container
  //---------------------

  $('#table_container').on('ajax.success', function (e, result, textStatus, jqXHR) {
    e.stopPropagation();
    $('#spinner').empty(); //setup js datas

    setup(result);
  });
  $('#table_container').on('ajax.completed', function (e, result, textStatus, jqXHR) {
    e.stopImmediatePropagation();
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
      for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
        var data = _step22.value;
        var tr = $('#table > tbody').append(create.tr).children().last();

        var _div2 = tr.append(create.td).children().last().append(create.div).children().last().addClass('custom-control custom-checkbox');

        _div2.append(create.checkbox).children().last().attr('id', 'c_' + data.version_id).val(data.version_id).on('click', urlSearch.lineChecked.bind(urlSearch));

        _div2.append(create.label).children().last().attr('for', 'c_' + data.version_id);

        var _iterator27 = _createForOfIteratorHelper(gpexe.headers),
            _step27;

        try {
          for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var _header = _step27.value;
            value = data[_header.id];

            if (value !== undefined) {
              if (_header.id == 'status_type') {
                value = _header.elements[0].filter.choices[value].text;
              }

              switch (_header.type) {
                case type.bool:
                  dataClass = 'text-center';
                  if (value == 0) value = 'No';
                  if (value == 1) value = 'Yes';
                  break;

                case type.date:
                  dataClass = 'text-center';

                  if (value instanceof Object) {
                    value = value.date.toDate(); //highlight

                    if (urlSearch.get('highlight').toString() == _header.id) {
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
              tr.append(create.td).children().last().addClass(dataClass).text(value);
            } else {
              _header.th.hide();
            }
          }
        } catch (err) {
          _iterator27.e(err);
        } finally {
          _iterator27.f();
        }

        tr.append(create.td).children().last().append(create.smallButton).children().last().addClass('btn-success w-100').attr('data-url', data.detailUrl).attr('data-toggle', 'modal ajax').attr('data-target', '#modal_detail').text($.i18n('details'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIl0sIm5hbWVzIjpbIiQiLCJyZXF1aXJlIiwicG9wcGVyIiwiVVJMU2VhcmNoUGFyYW1zIiwiZ3BleGUiLCJoZWFkZXJzIiwiQXJyYXkiLCJzZXJpZXMiLCJ0YWJsZSIsImNoeENoZWNrYWxsIiwidHlwZSIsImJvb2wiLCJ0ZXh0IiwiZGF0ZSIsImxpbmsiLCJsaXN0IiwiVXJsU2VhcmNoIiwiX3BhcmFtc0FycmF5IiwicHJvdG90eXBlIiwiaGFzIiwia2V5IiwiZ2V0IiwiZXhlYyIsImdldEFsbCIsInNldCIsInZhbHVlIiwiYXBwZW5kIiwic2V0RnJvbVVybCIsInBhcmFtc0FycmF5IiwidG9VcmwiLCJ1cmwiLCJ0b1N0cmluZyIsInZhbHVlcyIsImkiLCJqb2luIiwiZmV0Y2giLCJkYXRhIiwiZ2xvYmFsIiwiYWpheCIsImdldFZ1ZXMiLCJsaW5lQ2hlY2tlZCIsImNoZWNrZWQiLCJ1bmNoZWNrZWQiLCJ0aGF0IiwiZmluZCIsImVhY2giLCJpcyIsInByb3AiLCJ2YWwiLCJzaG93IiwiaGlkZSIsInNldHVwIiwiZGF0YXMiLCJ0aGVhZCIsImNyZWF0ZSIsImNoaWxkcmVuIiwibGFzdCIsInRyIiwidGgiLCJjc3MiLCJkaXYiLCJhZGRDbGFzcyIsImNoZWNrYm94IiwiYXR0ciIsIm9uIiwidXJsU2VhcmNoIiwibGFiZWwiLCJmaWVsZHMiLCJmaWVsZCIsImRpc3BsYXkiLCJoZWFkZXIiLCJpZCIsInRpdGxlIiwiZGVmYXVsdFdpZHRoIiwiZGVmYXVsdF93aWR0aCIsImhhc1NvcnQiLCJlbGVtZW50cyIsInNvbWUiLCJ2Iiwic29ydCIsImhhc0ZpbHRlciIsImZpbHRlciIsImoiLCJlbGVtZW50IiwiZSIsImMiLCJpMThuIiwiY2hvaWNlcyIsInB1c2giLCJuYW1lIiwiYSIsImIiLCJ1bnNoaWZ0IiwiZGl2RHJvcGRvd25Hcm91cCIsImNsaWNrRXZlbnQiLCJjb250YWlucyIsInJlbGF0ZWRUYXJnZXQiLCJwYXJlbnROb2RlIiwidGFyZ2V0IiwicHJldmVudERlZmF1bHQiLCJkaXZEcm9wZG93bk1lbnUiLCJlbXB0eSIsIm1lbnVCdXR0b24iLCJidG5Ecm9wZG93biIsImNyZWF0ZU1lbnUiLCJ0Ym9keSIsImxlbmd0aCIsImNyZWF0ZU1lbnVJdGVtIiwiZGl2Q29udGVudCIsInByZXBlbmQiLCJmaXJzdCIsImRpdkJ1dHRvbnMiLCJzbWFsbEJ1dHRvbiIsImljb24iLCJhcnJvd0Rvd24iLCJkaXZGaWx0ZXIiLCJ0cmlnZ2VyIiwiY2h4SW5mIiwicmVzdWx0IiwiaW5wdXRJbmYiLCJjaHhTdXAiLCJpbnB1dFN1cCIsImNoeEhpZ2hsaWdodCIsImRyb3Bkb3duIiwic2VhcmNoVmFsdWUiLCJpbnB1dFNlYXJjaCIsInRvTG93ZXJDYXNlIiwiY2h4IiwiY2hvaWNlIiwiYXJyb3dVcCIsImRpdkxpc3QiLCJwYXJzZUludCIsImRpdlNlYXJjaCIsImlucHV0Iiwid2hpY2giLCJzcGFuIiwiaHRtbCIsInZhbHVlSW5mIiwidmFsdWVTdXAiLCJoaWdobGlnaHQiLCJkaXZJbmYiLCJ0ZXN0IiwibGFiZWxJbmYiLCJkYXRlcGlja2VyIiwic3RvcFByb3BhZ2F0aW9uIiwiZGl2U3VwIiwibGFiZWxTdXAiLCJkaXZIaWdobGlnaHQiLCJpbmRleE9mIiwiZmlsbFNlcmllc1Bhbm5lbCIsInNlcmllIiwiYnRuIiwiZmlsbERpc3BsYXlQYW5uZWwiLCJkaXZDb2wiLCJhRGlzcGxheSIsImNoeERpc3BsYXkiLCJkb2N1bWVudCIsInJlYWR5IiwiZnJvbSIsImNvbGxhcHNlIiwicmVtb3ZlQ2xhc3MiLCJoYXNDbGFzcyIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsImJsdXIiLCJwYXJlbnQiLCJ0ZXh0U3RhdHVzIiwianFYSFIiLCJsb2FkaW5nIiwid2luZG93IiwibG9jYXRpb24iLCJzZWFyY2giLCJ2dWUiLCJidXR0b24iLCJkaXYyIiwiYnRuMiIsImRpdjMiLCJtb2RhbCIsInNlYXJjaFVybCIsInBhcmFtIiwicXVlcnkiLCJpc0ZpbHRlcmVkIiwiaXNTb3J0ZWRBc2MiLCJpc1NvcnRlZERlc2MiLCJmdW5uZWxGaWxsIiwiZnVubmVsIiwidGQiLCJ2ZXJzaW9uX2lkIiwiYmluZCIsInVuZGVmaW5lZCIsImRhdGFDbGFzcyIsIk9iamVjdCIsInRvRGF0ZSIsIkRhdGUiLCJhZGREYXlzIiwiZm9ybWF0IiwiZGV0YWlsVXJsIiwicGFnZU1heCIsInBhZ2UiLCJNYXRoIiwibWF4IiwibWluIiwidWwiLCJsaSIsInBhZ2VTdGFydCIsInBhZ2VFbmQiLCJzZWxlY3QiLCJyZXN1bHRzUGVyUGFnZSIsIk1hcCIsIm9wdGlvbiIsImtleXMiLCJmbGFzaCIsImRpdlRvYXN0IiwiZGl2Q29udGFpbmVyIiwidWxCb2R5IiwiY2xvc2UiLCJtZXNzYWdlIiwidG9hc3QiLCJleGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBLElBQU1DLE1BQU0sR0FBR0QsbUJBQU8sQ0FBQyw4REFBRCxDQUF0QixDLENBQ0E7QUFDQTtBQUNBOzs7QUFDQUEsbUJBQU8sQ0FBQyx3REFBRCxDQUFQOztBQUNBLElBQU1FLGVBQWUsR0FBR0YsbUJBQU8sQ0FBQywwRkFBRCxDQUEvQjs7QUFFQSxJQUFJRyxLQUFLLEdBQUc7QUFDWEMsU0FBTyxFQUFFLElBQUlDLEtBQUosRUFERTtBQUVYQyxRQUFNLEVBQUUsRUFGRztBQUdYQyxPQUFLLEVBQUUsSUFISTtBQUlYQyxhQUFXLEVBQUU7QUFKRixDQUFaO0FBT0EsSUFBTUMsSUFBSSxHQUFHO0FBQ1pDLE1BQUksRUFBRSxFQURNO0FBRVpDLE1BQUksRUFBRSxFQUZNO0FBR1pDLE1BQUksRUFBRSxFQUhN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QUFKLEVBQW1FO0FBQ3pFLGFBQU8sSUFBUDtBQUNBLEtBRk0sTUFFQSxJQUFJek4sQ0FBQyxDQUFDLFVBQVVzSCxNQUFWLEdBQW1CLFFBQXBCLENBQUQsQ0FBK0IxRSxJQUEvQixDQUFvQyxhQUFwQyxFQUFtRDZLLEtBQW5ELEVBQUosRUFBZ0U7QUFBRTtBQUN4RSxhQUFPLElBQVA7QUFDQTs7QUFDRHpOLEtBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCZ0wsS0FBdEIsQ0FBNEIsTUFBNUI7QUFFQSxHQWpCRDtBQW1CQWhMLEdBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCZ0UsRUFBN0IsQ0FBZ0MsaUJBQWhDLEVBQW1ELFVBQVNvQixDQUFULEVBQVk7QUFDOURuQixhQUFTLENBQUM5QixLQUFWO0FBQ0EsR0FGRCxFQWxrQjRCLENBdWtCNUI7QUFDQTtBQUNBOztBQUVBLE1BQUlMLEdBQUcsR0FBRzlCLENBQUMsQ0FBQyxrQkFBRCxDQUFELENBQXNCb0MsSUFBdEIsQ0FBMkIsS0FBM0IsQ0FBVjtBQUNBQyxRQUFNLENBQUNDLElBQVAsQ0FBWWQsR0FBWixDQUFnQixrQkFBaEIsRUFBb0NNLEdBQXBDO0FBRUEsQ0E5a0JELEUiLCJmaWxlIjoiZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbmNvbnN0IHBvcHBlciA9IHJlcXVpcmUoJ3BvcHBlci5qcycpO1xyXG4vL3JlcXVpcmUoJ3N0aWNreS10YWJsZS1oZWFkZXJzJyk7XHJcbi8vY29uc3QgdGFibGVEcmFnZ2VyID0gcmVxdWlyZSgndGFibGUtZHJhZ2dlcicpO1xyXG4vL3JlcXVpcmUoJ2pxdWVyeS1yZXNpemFibGUtY29sdW1ucycpO1xyXG5yZXF1aXJlKCcuLi9jc3MvZG9jdW1lbnQuc2NzcycpO1xyXG5jb25zdCBVUkxTZWFyY2hQYXJhbXMgPSByZXF1aXJlKCdAdW5nYXAvdXJsLXNlYXJjaC1wYXJhbXMvY2pzJyk7XHJcblxyXG52YXIgZ3BleGUgPSB7XHJcblx0aGVhZGVyczogbmV3IEFycmF5KCksXHJcblx0c2VyaWVzOiBbXSxcclxuXHR0YWJsZTogbnVsbCxcclxuXHRjaHhDaGVja2FsbDogbnVsbCxcclxufVxyXG5cclxuY29uc3QgdHlwZSA9IHtcclxuXHRib29sOiAxMSxcclxuXHR0ZXh0OiAxMixcclxuXHRkYXRlOiAxMyxcclxuXHRsaW5rOiAxNCxcclxuXHRsaXN0OiAxNSxcclxufTtcclxuXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcbi8vVXJsU2VhcmNoXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBVcmxTZWFyY2ggKCkge1xyXG5cdHRoaXMuX3BhcmFtc0FycmF5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG59XHJcblxyXG5VcmxTZWFyY2gucHJvdG90eXBlID0ge1xyXG5cclxuXHRoYXM6IGZ1bmN0aW9uKGtleSkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3BhcmFtc0FycmF5LmhhcyhrZXkpO1xyXG5cdH0sXHJcblx0XHJcblx0Z2V0OiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdGlmICgvXFxTK1xcW1xcXS9nLmV4ZWMoa2V5KSkge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGFyYW1zQXJyYXkuZ2V0QWxsKGtleSkgfHwgW107XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5fcGFyYW1zQXJyYXkuZ2V0KGtleSkgfHwgJyc7XHJcblx0XHR9XHJcblx0fSxcclxuXHRcclxuXHRzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpIHtcclxuXHRcdGlmIChrZXkgPT0gJ3Z1ZScpIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHsndnVlJzogdmFsdWV9KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuX3BhcmFtc0FycmF5LnNldChrZXksIHZhbHVlKTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdGFwcGVuZDogZnVuY3Rpb24oa2V5LCB2YWx1ZSkge1xyXG5cdFx0aWYgKGtleSA9PSAndnVlJykge1xyXG5cdFx0XHR0aGlzLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoeyd2dWUnOiB2YWx1ZX0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkuYXBwZW5kKGtleSwgdmFsdWUpO1xyXG5cdFx0fVxyXG5cdH0sXHJcblx0XHJcblx0ZGVsZXRlOiBmdW5jdGlvbihrZXkpIHtcclxuXHRcdHRoaXMuX3BhcmFtc0FycmF5LmRlbGV0ZShrZXkpO1xyXG5cdH0sXHJcblx0XHJcblx0c2V0RnJvbVVybDogZnVuY3Rpb24odmFsdWUpIHtcclxuXHRcdGxldCBwYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXModmFsdWUpO1xyXG5cdFx0aWYgKHBhcmFtc0FycmF5LmhhcygndnVlJykpIHtcclxuXHRcdFx0dGhpcy5zZXQoJ3Z1ZScsIHBhcmFtc0FycmF5LmdldCgndnVlJykpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dGhpcy5fcGFyYW1zQXJyYXkgPSBwYXJhbXNBcnJheTtcclxuXHRcdH1cclxuXHR9LFxyXG5cdFxyXG5cdHRvVXJsOiBmdW5jdGlvbihrZXkgPSAnJykge1xyXG5cdFx0bGV0IHVybCA9ICcnO1xyXG5cdFx0aWYgKGtleSA9PSAnJykge1xyXG5cdFx0XHR1cmwgPSB0aGlzLl9wYXJhbXNBcnJheS50b1N0cmluZygpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0dmFsdWVzID0gdGhpcy5nZXQoa2V5KTtcclxuXHRcdFx0Zm9yIChpIGluIHZhbHVlcykge1xyXG5cdFx0XHRcdHZhbHVlc1tpXSA9IGtleSArICc9JyArIHZhbHVlc1tpXTtcclxuXHRcdFx0fVxyXG5cdFx0XHR1cmwgPSB2YWx1ZXMuam9pbignJicpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICh1cmwpPyc/JyArIHVybDonJztcclxuXHR9LFxyXG5cdFxyXG5cdGZldGNoOiBmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHVybCA9ICQoJyN0YWJsZScpLmRhdGEoJ3VybCcpICsgdGhpcy50b1VybCgpO1xyXG5cdFx0Z2xvYmFsLmFqYXguc2V0KCcjdGFibGUnLCB1cmwpO1xyXG5cdFx0XHJcblx0fSxcclxuXHRcclxuXHRnZXRWdWVzOiBmdW5jdGlvbigpIHtcclxuXHRcdGxldCB1cmwgPSAkKCcjdnVlcycpLmRhdGEoJ3VybCcpO1xyXG5cdFx0Z2xvYmFsLmFqYXguc2V0KCcjdnVlcycsIHVybCk7XHJcblx0fSxcclxuXHRcclxuXHRsaW5lQ2hlY2tlZDogZnVuY3Rpb24gKCkge1xyXG5cdFx0XHJcblx0XHR2YXIgY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0dmFyIHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQkKCd0Ym9keScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdGNoZWNrZWQgPSB0cnVlO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHVuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGlmIChjaGVja2VkICYmIHVuY2hlY2tlZCkge1xyXG5cdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdpbmRldGVybWluYXRlJywgdHJ1ZSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdHRoYXQuZGVsZXRlKCdpZFtdJyk7XHJcblx0XHRcclxuXHRcdGlmIChjaGVja2VkKSB7XHJcblx0XHRcdCQoJ3RhYmxlJykuZmluZCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5wcm9wKCdpZCcpICE9ICdjaGVja19hbGwnICYmICQodGhpcykuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdHRoYXQuYXBwZW5kKCdpZFtdJywgJCh0aGlzKS52YWwoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdCQoJyNkb2N1bWVudF9lZGl0Jykuc2hvdygpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfbW92ZScpLnNob3coKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X2RlbGV0ZScpLnNob3coKTtcclxuXHRcdFx0JCgnI3ZlcnNpb25fbWVudScpLnNob3coKTtcclxuXHRcdH0gZWxzZSBpZih1bmNoZWNrZWQpIHtcclxuXHRcdFx0JCgnI3ZlcnNpb24nKS52YWwoJycpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZWRpdCcpLmhpZGUoKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X21vdmUnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyN2ZXJzaW9uX21lbnUnKS5oaWRlKCk7XHJcblx0XHR9XHJcblx0fSxcclxufVxyXG5cclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuLy8gU2V0dXBcclxuLy8tLS0tLS0tLS0tLS0tLS1cclxuXHJcbmZ1bmN0aW9uIHNldHVwKGRhdGFzKSB7XHJcblx0XHJcblx0JCgnI3RhYmxlJykuc2hvdygpO1xyXG5cdFxyXG5cdGxldCB0aGVhZCA9ICQoJyN0YWJsZScpLmFwcGVuZChjcmVhdGUudGhlYWQpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdGxldCB0ciA9IHRoZWFkLmFwcGVuZChjcmVhdGUudHIpLmNoaWxkcmVuKCkubGFzdCgpO1xyXG5cdGxldCB0aCA9IHRyLmFwcGVuZChjcmVhdGUudGgpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHQuY3NzKCd3aWR0aCcsICcyZW0nKVxyXG5cdDtcclxuXHRcclxuXHRsZXQgZGl2ID0gdGguYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHQuYWRkQ2xhc3MoJ2J0bi1ncm91cCBjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSByb3VuZGVkLTAnKVxyXG5cdDtcclxuXHRcclxuXHRncGV4ZS5jaHhDaGVja2FsbCA9IGRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0LmF0dHIoJ2lkJywgJ2NoZWNrX2FsbCcpXHJcblx0XHQuYXR0cigndW5jaGVja2VkJywgJ3VuY2hlY2tlZCcpXHJcblx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCAkKCd0Ym9keScpLmZpbmQoJ2lucHV0W3R5cGU9XCJjaGVja2JveFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgJCgnI2NoZWNrX2FsbCcpLmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdCB1cmxTZWFyY2gubGluZUNoZWNrZWQoKTtcclxuXHRcdH0pO1xyXG5cdDtcclxuXHRcclxuXHRkaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdC5hZGRDbGFzcygnbXgtMScpXHJcblx0XHQuYXR0cignZm9yJywgJ2NoZWNrX2FsbCcpXHJcblx0O1x0XHJcblx0XHJcblx0Z3BleGUuc2VyaWVzID0gZGF0YXMuc2VyaWVzO1xyXG5cdFxyXG5cdGZvciAobGV0IGkgaW4gZGF0YXMuZmllbGRzKSB7XHJcblx0XHRcclxuXHRcdGZpZWxkID0gZGF0YXMuZmllbGRzW2ldO1xyXG5cdFx0XHJcblx0XHRpZiAoZmllbGQuZGlzcGxheS50YWJsZSkge1xyXG5cdFx0XHJcblx0XHRcdGxldCBoZWFkZXIgPSB7XHJcblx0XHRcdFx0aWQ6IGZpZWxkLmlkLFxyXG5cdFx0XHRcdHRpdGxlOiBmaWVsZC50aXRsZSxcclxuXHRcdFx0XHR0eXBlOiBmaWVsZC50eXBlLFxyXG5cdFx0XHRcdGRlZmF1bHRXaWR0aDogZmllbGQuZGVmYXVsdF93aWR0aCxcclxuXHRcdFx0XHRoYXNTb3J0OiAoZmllbGQuZWxlbWVudHMgJiYgZmllbGQuZWxlbWVudHMuc29tZSh2ID0+IHYuc29ydCA9PT0gdHJ1ZSkpLFxyXG5cdFx0XHRcdGhhc0ZpbHRlcjogKGZpZWxkLmVsZW1lbnRzICYmIGZpZWxkLmVsZW1lbnRzLnNvbWUodiA9PiB2LmZpbHRlcikpLFxyXG5cdFx0XHRcdGVsZW1lbnRzOiBbXSxcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0JC5lYWNoKGZpZWxkLmVsZW1lbnRzLCBmdW5jdGlvbiAoaiwgZWxlbWVudCkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGUgPSB7XHJcblx0XHRcdFx0XHRpZDogZWxlbWVudC5pZCxcclxuXHRcdFx0XHRcdHRpdGxlOiBlbGVtZW50LnRpdGxlLFxyXG5cdFx0XHRcdFx0c29ydDogZWxlbWVudC5zb3J0LFxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKGVsZW1lbnQuZmlsdGVyKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdHN3aXRjaCAoZWxlbWVudC5maWx0ZXIudHlwZSkge1xyXG5cdFx0XHRcdFx0XHRjYXNlIHR5cGUuYm9vbDpcclxuXHRcdFx0XHRcdFx0XHR2YXIgYyA9IFtcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dDogJC5pMThuKCdub3RBcHBsaWNhYmxlJyksXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAtMSxcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFx0XHR7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6ICQuaTE4bignWWVzJyksXHJcblx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiAxLFxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dDogJC5pMThuKCdObycpLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogMCxcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRdO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFxyXG5cdFx0XHRcdFx0XHRjYXNlIHR5cGUubGlzdDpcclxuXHRcdFx0XHRcdFx0XHR2YXIgYyA9IFtdO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdCQuZWFjaChlbGVtZW50LmZpbHRlci5jaG9pY2VzLCBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Yy5wdXNoKHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiB2YWx1ZS5uYW1lIHx8IHZhbHVlLnZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB2YWx1ZS5pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IHZhbHVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHZhbHVlOiBrZXksXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGMuc29ydChmdW5jdGlvbiAoYSwgYikge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGEudGV4dCA8IGIudGV4dCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gLTE7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoYS50ZXh0ID4gYi50ZXh0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiAxO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIDA7XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Yy51bnNoaWZ0KHtcclxuXHRcdFx0XHRcdFx0XHRcdHRleHQ6ICQuaTE4bignc2VsZWN0QWxsJyksXHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZTogLTEsXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGUuZmlsdGVyID0ge1xyXG5cdFx0XHRcdFx0XHR0eXBlOiBlbGVtZW50LmZpbHRlci50eXBlLFxyXG5cdFx0XHRcdFx0XHRjaG9pY2VzOiBjLFxyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aGVhZGVyLmVsZW1lbnRzLnB1c2goZSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHJcblx0XHRcdGdwZXhlLmhlYWRlcnMucHVzaChoZWFkZXIpO1xyXG5cdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblx0XHJcblx0Zm9yIChsZXQgaGVhZGVyIG9mIGdwZXhlLmhlYWRlcnMpIHtcclxuXHRcdFxyXG5cdFx0aGVhZGVyLnRoID0gdHIuYXBwZW5kKGNyZWF0ZS50aCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmNzcygnd2lkdGgnLCBoZWFkZXIuZGVmYXVsdFdpZHRoICsgJ2VtJylcclxuXHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdGlmIChoZWFkZXIuaGFzU29ydCB8fCBoZWFkZXIuaGFzRmlsdGVyKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQvL21haW4gYnV0dG9uIGdyb3VwXHJcblx0XHRcdGxldCBkaXZEcm9wZG93bkdyb3VwID0gaGVhZGVyLnRoLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnYnRuLWdyb3VwIHctMTAwJylcclxuXHRcdFx0XHQuYXR0cigncm9sZScsICdncm91cCcpXHJcblx0XHRcdFx0Lm9uKCdoaWRlLmJzLmRyb3Bkb3duJywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYoZS5jbGlja0V2ZW50ICYmICQuY29udGFpbnMoZS5yZWxhdGVkVGFyZ2V0LnBhcmVudE5vZGUsIGUuY2xpY2tFdmVudC50YXJnZXQpKSB7XHJcblx0XHRcdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0aGVhZGVyLmRpdkRyb3Bkb3duTWVudS5lbXB0eSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdC8vdGl0bGVcclxuXHRcdFx0ZGl2RHJvcGRvd25Hcm91cC5hcHBlbmQoY3JlYXRlLm1lbnVCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LXRydW5jYXRlIHctMTAwJylcclxuXHRcdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHRcdC50ZXh0KGhlYWRlci50aXRsZSlcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRpZiAoaGVhZGVyLmhhc0ZpbHRlcikge1xyXG5cdFx0XHRcdFx0XHRmb3IgKGVsZW1lbnQgb2YgaGVhZGVyLmVsZW1lbnRzKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHVybFNlYXJjaC5nZXQoJ3NvcnRBc2MnKSA9PSBlbGVtZW50LmlkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0RGVzYycsIGVsZW1lbnQuaWQpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYgKHVybFNlYXJjaC5nZXQoJ3NvcnREZXNjJykgPT0gZWxlbWVudC5pZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3NvcnRBc2MnLCBlbGVtZW50LmlkKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGZvciAoZWxlbWVudCBvZiBoZWFkZXIuZWxlbWVudHMpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5zb3J0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0QXNjJywgZWxlbWVudC5pZCk7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0Ly9kcm9wRG93biBidXR0b25cclxuXHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duID0gZGl2RHJvcGRvd25Hcm91cC5hcHBlbmQoY3JlYXRlLm1lbnVCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdweC0wJylcclxuXHRcdFx0XHQuY3NzKCd3aWR0aCcsICczZW0nKVxyXG5cdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ2JfJyArIGhlYWRlci5pZClcclxuXHRcdFx0XHQuYXR0cignZGF0YS10b2dnbGUnLCAnZHJvcGRvd24nKVxyXG5cdFx0XHRcdC5hdHRyKCdkYXRhLWRpc3BsYXknLCAnc3RhdGljJylcclxuXHRcdFx0XHQuYXR0cignYXJpYS1oYXNwb3B1cCcsIHRydWUpXHJcblx0XHRcdFx0LmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0Ly9kcm9wRG93biBtZW51XHJcblx0XHRcdGhlYWRlci5kaXZEcm9wZG93bk1lbnUgPSBkaXZEcm9wZG93bkdyb3VwLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LWxlZnQnKVxyXG5cdFx0XHRcdC5hdHRyKCdhcmlhLWxhYmVsbGVkYnknLCAnYl8nICsgaGVhZGVyLmlkKVxyXG5cdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnZC1mbGV4IGZsZXgtcm93JylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0ZGl2RHJvcGRvd25Hcm91cC5vbignc2hvdy5icy5kcm9wZG93bicsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNyZWF0ZU1lbnUoaGVhZGVyKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0XHJcblx0XHRcdGhlYWRlci5idG5Ecm9wZG93biA9IGhlYWRlci50aC5hcHBlbmQoY3JlYXRlLm1lbnVCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LXRydW5jYXRlIHctMTAwJylcclxuXHRcdFx0XHQudGV4dChoZWFkZXIudGl0bGUpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuZGl2KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHR0ci5hcHBlbmQoY3JlYXRlLnRoKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0LmF0dHIoJ2lkJywgJ2RldGFpbCcpXHJcblx0XHQuY3NzKCd3aWR0aCcsICc2ZW0nKVxyXG5cdDtcclxuXHRcclxuXHRsZXQgdGJvZHkgPSAkKCcjdGFibGUnKS5hcHBlbmQoY3JlYXRlLnRib2R5KS5jaGlsZHJlbigpLmxhc3QoKTtcclxuXHRcclxuXHRcclxuXHRmdW5jdGlvbiBjcmVhdGVNZW51KGhlYWRlcikge1xyXG5cdFx0XHJcblx0XHRpZiAoaGVhZGVyLmhhc1NvcnQgfHwgaGVhZGVyLmhhc0ZpbHRlcikge1xyXG5cdFx0XHRcclxuXHRcdFx0aGVhZGVyLmRpdkRyb3Bkb3duTWVudS5lbXB0eSgpO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKGhlYWRlci5lbGVtZW50cy5sZW5ndGggPT0gMSkge1xyXG5cdFx0XHRcdGNyZWF0ZU1lbnVJdGVtKGhlYWRlciwgaGVhZGVyLmVsZW1lbnRzWzBdKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRmb3IgKHZhciBlbGVtZW50IG9mIGhlYWRlci5lbGVtZW50cykge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIgfHwgZWxlbWVudC5zb3J0KSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjcmVhdGVNZW51SXRlbShoZWFkZXIsIGVsZW1lbnQpO1xyXG5cclxuXHRcdFx0XHRcdFx0Ly9oZWFkZXIgaWYgbWFueSBzZWxlY3RzXHJcblx0XHRcdFx0XHRcdGVsZW1lbnQuZGl2Q29udGVudC5wcmVwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkuZmlyc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hZGRDbGFzcygndGV4dC1jZW50ZXIgYm9yZGVyLWJvdHRvbSBib3JkZXItZGFyayBwYi0yIHB4LTEnKVxyXG5cdFx0XHRcdFx0XHRcdC5hcHBlbmQoZWxlbWVudC50aXRsZSlcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHRcclxuXHRmdW5jdGlvbiBjcmVhdGVNZW51SXRlbShoZWFkZXIsIGVsZW1lbnQpIHtcclxuXHRcdFxyXG5cdFx0ZWxlbWVudC5kaXZDb250ZW50ID0gaGVhZGVyLmRpdkRyb3Bkb3duTWVudS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdteC0xJylcclxuXHRcdFx0LmNzcygnbWluLXdpZHRoJywgJzE1ZW0nKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRsZXQgZGl2QnV0dG9ucyA9IGVsZW1lbnQuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBwLTEnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRpZiAoZWxlbWVudC5zb3J0KSB7XHJcblx0XHRcdGRpdkJ1dHRvbnMuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXBwZW5kKGdsb2JhbC5pY29uLmFycm93RG93bilcclxuXHRcdFx0XHQuYWRkQ2xhc3MoKHVybFNlYXJjaC5nZXQoJ3NvcnREZXNjJykgPT0gZWxlbWVudC5pZCk/J3B4LTIgYnRuLW91dGxpbmUtcHJpbWFyeSBiZy1kYXJrIHRleHQtd2hpdGUnOidweC0yIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSBlbGVtZW50LmlkKSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3NvcnREZXNjJyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0RGVzYycsIGVsZW1lbnQuaWQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmIChlbGVtZW50LmZpbHRlcikge1xyXG5cdFx0XHRcclxuXHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyID0gZGl2QnV0dG9ucy5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC50ZXh0KCQuaTE4bignZmlsdGVyJykpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdweC0zIGJ0bi1wcmltYXJ5JylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0c3dpdGNoIChlbGVtZW50LmZpbHRlci50eXBlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSB0eXBlLmRhdGU6XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkZpbHRlclxyXG5cdFx0XHRcdFx0XHQub24oJ2ZpbHRlci51cGRhdGUnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXVtdJyk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZmlsdGVyLmNoeEluZi5pcygnOmNoZWNrZWQnKSAmJiAocmVzdWx0ID0gL17iiaVcXHMoXFxkezJ9LVxcZHsyfS1cXGR7NH0pLy5leGVjKGVsZW1lbnQuZmlsdGVyLmlucHV0SW5mLnZhbCgpKSkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5hcHBlbmQoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddW10nLCAnPicgKyByZXN1bHRbMV0pO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIuY2h4U3VwLmlzKCc6Y2hlY2tlZCcpICYmIChyZXN1bHQgPSAvXuKJpFxccyhcXGR7Mn0tXFxkezJ9LVxcZHs0fSkvLmV4ZWMoZWxlbWVudC5maWx0ZXIuaW5wdXRTdXAudmFsKCkpKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmFwcGVuZCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScsICc8JyArIHJlc3VsdFsxXSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGlmIChlbGVtZW50LmZpbHRlci5jaHhIaWdobGlnaHQuaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ2hpZ2hsaWdodCcsIGVsZW1lbnQuaWQpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodXJsU2VhcmNoLmdldCgnaGlnaGxpZ2h0JykudG9TdHJpbmcoKSA9PSBlbGVtZW50LmlkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdoaWdobGlnaHQnKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBlbGVtZW50IG9mIGhlYWRlci5lbGVtZW50cykge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZmlsdGVyKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkZpbHRlci50cmlnZ2VyKCdmaWx0ZXIudXBkYXRlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGhlYWRlci5idG5Ecm9wZG93bi5kcm9wZG93bignaGlkZScpO1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1x0XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGNhc2UgdHlwZS50ZXh0OlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXJcclxuXHRcdFx0XHRcdFx0Lm9uKCdmaWx0ZXIudXBkYXRlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ10nKTtcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR2YXIgc2VhcmNoVmFsdWUgPSBlbGVtZW50LmlucHV0U2VhcmNoLnZhbCgpLnRvTG93ZXJDYXNlKClcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoc2VhcmNoVmFsdWUgIT0gJycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddJywgc2VhcmNoVmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGVsZW1lbnQgb2YgaGVhZGVyLmVsZW1lbnRzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyLnRyaWdnZXIoJ2ZpbHRlci51cGRhdGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHRcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSB0eXBlLmxpc3Q6XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkZpbHRlclxyXG5cdFx0XHRcdFx0XHQub24oJ2ZpbHRlci51cGRhdGUnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXVtdJyk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKGVsZW1lbnQuZmlsdGVyLmNob2ljZXNbMF0uY2h4LmlzKCc6Y2hlY2tlZCcpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgY2hvaWNlIG9mIGVsZW1lbnQuZmlsdGVyLmNob2ljZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKGNob2ljZS5jaHguaXMoJzpjaGVja2VkJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXVtdJywgY2hvaWNlLnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGZvciAobGV0IGVsZW1lbnQgb2YgaGVhZGVyLmVsZW1lbnRzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoZWxlbWVudC5maWx0ZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyLnRyaWdnZXIoJ2ZpbHRlci51cGRhdGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdH1cclxuXHRcdH1cdFx0XHRcclxuXHRcdFxyXG5cdFx0aWYgKGVsZW1lbnQuc29ydCkge1xyXG5cdFx0XHRkaXZCdXR0b25zLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFwcGVuZChnbG9iYWwuaWNvbi5hcnJvd1VwKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IGVsZW1lbnQuaWQpPydweC0yIGJ0bi1vdXRsaW5lLXByaW1hcnkgYmctZGFyayB0ZXh0LXdoaXRlJzoncHgtMiBidG4tcHJpbWFyeScpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgnc29ydERlc2MnKTtcclxuXHRcdFx0XHRcdGlmICh1cmxTZWFyY2guZ2V0KCdzb3J0QXNjJykgPT0gZWxlbWVudC5pZCkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdzb3J0QXNjJyk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdzb3J0QXNjJywgZWxlbWVudC5pZCk7XHJcblx0XHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0fSlcclxuXHRcdFx0O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRpZiAoZWxlbWVudC5maWx0ZXIpIHtcclxuXHRcdFx0XHJcblx0XHRcdHN3aXRjaCAoZWxlbWVudC5maWx0ZXIudHlwZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGNhc2UgdHlwZS5ib29sOlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZMaXN0ID0gZWxlbWVudC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTIgb3ZlcmZsb3ctYXV0byAnICsgKChlbGVtZW50LmZpbHRlci50eXBlID09PSB0eXBlLmxpc3QpPydwdC0zJzoncHQtMScpKVxyXG5cdFx0XHRcdFx0XHQuY3NzKCdtYXgtaGVpZ2h0JywgJzIwZW0nKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y2hvaWNlLmRpdiA9IGVsZW1lbnQuZmlsdGVyLmRpdkxpc3QuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjaG9pY2UuY2h4ID0gY2hvaWNlLmRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIGVsZW1lbnQuaWQgKyAnXycgKyBjaG9pY2UudmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y2hvaWNlLmRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBlbGVtZW50LmlkICsgJ18nICsgY2hvaWNlLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdC50ZXh0KGNob2ljZS50ZXh0KVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoY2hvaWNlLnZhbHVlID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeFxyXG5cdFx0XHRcdFx0XHRcdFx0LmF0dHIoJ2NoZWNrZWQnLCAhdXJsU2VhcmNoLmdldCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ10nKSlcclxuXHRcdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgY2hvaWNlIG9mIGVsZW1lbnQuZmlsdGVyLmNob2ljZXMpIHtcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNob2ljZS5jaHgucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duLmRyb3Bkb3duKCdoaWRlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGNob2ljZS5jaHhcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgcGFyc2VJbnQodXJsU2VhcmNoLmdldCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ10nKSkgPT09IGNob2ljZS52YWx1ZSlcclxuXHRcdFx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHRcdGZvciAobGV0IGNob2ljZSBvZiBlbGVtZW50LmZpbHRlci5jaG9pY2VzKSB7XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2hvaWNlLmNoeCAhPSB0aGlzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaG9pY2UuY2h4LnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXScsIGNob2ljZS52YWx1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24uZHJvcGRvd24oJ2hpZGUnKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dXJsU2VhcmNoLmRlbGV0ZSgndnVlJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVybFNlYXJjaC5mZXRjaCgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdGNhc2UgdHlwZS50ZXh0OlxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRsZXQgZGl2U2VhcmNoID0gZWxlbWVudC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2lucHV0LWdyb3VwIGlucHV0LWdyb3VwLXNtIHAtMicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuaW5wdXRTZWFyY2ggPSBkaXZTZWFyY2guYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LnZhbCh1cmxTZWFyY2guZ2V0KCdmaWx0ZXJbJyArIGVsZW1lbnQuaWQgKyAnXScpKVxyXG5cdFx0XHRcdFx0XHQub24oJ2tleXByZXNzJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChlLndoaWNoID09IDEzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZGaWx0ZXIudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGxldCBkaXYgPSBkaXZTZWFyY2guYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnaW5wdXQtZ3JvdXAtYXBwZW5kJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGEgPSBkaXYuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cigndHlwZScsICdidXR0b24nKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2J0biBidG4tbGlnaHQgYm9yZGVyLWxlZnQtMCBib3JkZXIgdGV4dC1wcmltYXJ5JylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdGEuYXBwZW5kKGNyZWF0ZS5zcGFuKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuaHRtbCgnJnRpbWVzOycpXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmlucHV0U2VhcmNoLnZhbCgnJyk7XHJcblx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRjYXNlIHR5cGUuZGF0ZTpcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKChyZXN1bHQgPSAvPihcXGR7Mn0tXFxkezJ9LVxcZHs0fSkvLmV4ZWModXJsU2VhcmNoLmdldCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScpLnRvU3RyaW5nKCkpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVJbmYgPSByZXN1bHRbMV07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVJbmYgPSAnJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKChyZXN1bHQgPSAvPChcXGR7Mn0tXFxkezJ9LVxcZHs0fSkvLmV4ZWModXJsU2VhcmNoLmdldCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScpLnRvU3RyaW5nKCkpKSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVTdXAgPSByZXN1bHRbMV07XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR2YXIgdmFsdWVTdXAgPSAnJztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0bGV0IGhpZ2hsaWdodCA9ICh1cmxTZWFyY2guZ2V0KCdoaWdobGlnaHQnKS50b1N0cmluZygpID09IGVsZW1lbnQuaWQpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZMaXN0ID0gZWxlbWVudC5kaXZDb250ZW50LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3B4LTIgb3ZlcmZsb3ctYXV0byAnICsgKChlbGVtZW50LmZpbHRlci50eXBlID09PSB0eXBlLmxpc3QpPydwdC0zJzoncHQtMScpKVxyXG5cdFx0XHRcdFx0XHQuY3NzKCdtYXgtaGVpZ2h0JywgJzIwZW0nKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZJbmYgPSBlbGVtZW50LmZpbHRlci5kaXZMaXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCBtdC0yJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuY2h4SW5mID0gZWxlbWVudC5maWx0ZXIuZGl2SW5mLmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdpZCcsIGVsZW1lbnQuaWQgKyAnX2luZicpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdmFsdWVJbmYgIT0gJycpXHJcblx0XHRcdFx0XHRcdC5vbignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGNoZWNrZWQgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdFx0XHRcdGlmIChjaGVja2VkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAoL17iiaVcXHNcXGR7Mn0tXFxkezJ9LVxcZHs0fS8udGVzdChlbGVtZW50LmZpbHRlci5pbnB1dEluZi52YWwoKSkgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0SW5mLnZhbCgnJyk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0SW5mLnZhbCgkLmkxOG4oJ2Zyb21EYXRlJykpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5pbnB1dEluZi5hdHRyKCdyZWFkb25seScsIGNoZWNrZWQgPT09IGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIubGFiZWxJbmYgPSBlbGVtZW50LmZpbHRlci5kaXZJbmYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIGVsZW1lbnQuaWQgKyAnX2luZicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0SW5mID0gZWxlbWVudC5maWx0ZXIubGFiZWxJbmYuYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdmb3JtLWNvbnRyb2wgZGF0ZXBpY2tlcicpXHJcblx0XHRcdFx0XHRcdC52YWwoKHZhbHVlSW5mKT8oJ+KJpSAnICsgdmFsdWVJbmYpOiQuaTE4bignZnJvbURhdGUnKSlcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ3JlYWRvbmx5JywgdmFsdWVJbmYgPT0gJycpXHJcblx0XHRcdFx0XHRcdC5kYXRlcGlja2VyKHsnZm9ybWF0JzogJ+KJpSBkZC1tbS15eXl5J30pXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaHhJbmYucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNoeEluZi50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdCAgICAub24oJ3Nob3cuYnMuZHJvcGRvd24gaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdCAgICBcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHQgICAgfSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2U3VwID0gZWxlbWVudC5maWx0ZXIuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggbXQtMicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNoeFN1cCA9IGVsZW1lbnQuZmlsdGVyLmRpdlN1cC5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCBlbGVtZW50LmlkICsgJ19zdXAnKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsIHZhbHVlU3VwICE9ICcnKVxyXG5cdFx0XHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGxldCBjaGVja2VkID0gJCh0aGlzKS5pcygnOmNoZWNrZWQnKTtcclxuXHRcdFx0XHRcdFx0XHRpZiAoY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKC9e4omkXFxzXFxkezJ9LVxcZHsyfS1cXGR7NH0vLnRlc3QoZWxlbWVudC5maWx0ZXIuaW5wdXRTdXAudmFsKCkpID09PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5pbnB1dFN1cC52YWwoJycpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5pbnB1dFN1cC52YWwoJC5pMThuKCd0b0RhdGUnKSk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmlucHV0U3VwLmF0dHIoJ3JlYWRvbmx5JywgY2hlY2tlZCA9PT0gZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5sYWJlbFN1cCA9IGVsZW1lbnQuZmlsdGVyLmRpdlN1cC5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZm9yJywgZWxlbWVudC5pZCArICdfc3VwJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuaW5wdXRTdXAgPSBlbGVtZW50LmZpbHRlci5sYWJlbFN1cC5hcHBlbmQoY3JlYXRlLmlucHV0KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBkYXRlcGlja2VyJylcclxuXHRcdFx0XHRcdFx0LnZhbCgodmFsdWVTdXApPyfiiaQgJyArIHZhbHVlU3VwOiQuaTE4bigndG9EYXRlJykpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdyZWFkb25seScsIHZhbHVlU3VwID09ICcnKVxyXG5cdFx0XHRcdFx0XHQuZGF0ZXBpY2tlcih7J2Zvcm1hdCc6IFwi4omkIGRkLW1tLXl5eXlcIn0pXHJcblx0XHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaHhTdXAucHJvcCgnY2hlY2tlZCcsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNoeFN1cC50cmlnZ2VyKCdjaGFuZ2UnKTtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdCAgICAub24oJ3Nob3cuYnMuZHJvcGRvd24gaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdCAgICBcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdFx0XHQgICAgfSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2SGlnaGxpZ2h0ID0gZWxlbWVudC5maWx0ZXIuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3ggbXQtMicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmNoeEhpZ2hsaWdodCA9IGVsZW1lbnQuZmlsdGVyLmRpdkhpZ2hsaWdodC5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignaWQnLCBlbGVtZW50LmlkICsgJ19oaWdobGlnaHQnKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignbmFtZScsICdoaWdobGlnaHQnKVxyXG5cdFx0XHRcdFx0XHQudmFsKGVsZW1lbnQuaWQpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgaGlnaGxpZ2h0KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5kaXZIaWdobGlnaHQuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmF0dHIoJ2ZvcicsIGVsZW1lbnQuaWQgKyAnX2hpZ2hsaWdodCcpXHJcblx0XHRcdFx0XHRcdC50ZXh0KCQuaTE4bignaGlnaGxpZ2h0JykpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0Y2FzZSB0eXBlLmxpc3Q6XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGRpdlNlYXJjaCA9IGVsZW1lbnQuZGl2Q29udGVudC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdpbnB1dC1ncm91cCBpbnB1dC1ncm91cC1zbSBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHAtMicpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuaW5wdXRTZWFyY2ggPSBkaXZTZWFyY2guYXBwZW5kKGNyZWF0ZS5pbnB1dCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0Lm9uKCdrZXlwcmVzcycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoZS53aGljaCA9PSAxMykge1xyXG5cdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuZGl2RmlsdGVyLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHQub24oJ2lucHV0JywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHRcdFx0dmFyIHNlYXJjaFZhbHVlID0gJCh0aGlzKS52YWwoKS50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0aWYgKHNlYXJjaFZhbHVlID09ICcnKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRjaG9pY2UuZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaG9pY2VzWzBdLmRpdi5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2hvaWNlLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNob2ljZS5kaXYuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNob2ljZS5jaHgucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaG9pY2UuZGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjaG9pY2UuY2h4LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVx0XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRkaXYgPSBkaXZTZWFyY2guYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnaW5wdXQtZ3JvdXAtYXBwZW5kJylcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0YSA9IGRpdi5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1saWdodCBib3JkZXItbGVmdC0wIGJvcmRlciB0ZXh0LXByaW1hcnknKVxyXG5cdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0YS5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5odG1sKCcmdGltZXM7JylcclxuXHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGVsZW1lbnQuaW5wdXRTZWFyY2gudmFsKCcnKTtcclxuXHRcdFx0XHRcdFx0XHRlbGVtZW50LmlucHV0U2VhcmNoLnRyaWdnZXIoJ2lucHV0Jyk7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGVsZW1lbnQuZmlsdGVyLmRpdkxpc3QgPSBlbGVtZW50LmRpdkNvbnRlbnQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hZGRDbGFzcygncHgtMiBvdmVyZmxvdy1hdXRvICcgKyAoKGVsZW1lbnQuZmlsdGVyLnR5cGUgPT09IHR5cGUubGlzdCk/J3B0LTMnOidwdC0xJykpXHJcblx0XHRcdFx0XHRcdC5jc3MoJ21heC1oZWlnaHQnLCAnMjBlbScpXHJcblx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGZvciAobGV0IGNob2ljZSBvZiBlbGVtZW50LmZpbHRlci5jaG9pY2VzKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRjaG9pY2UuZGl2ID0gZWxlbWVudC5maWx0ZXIuZGl2TGlzdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGNob2ljZS5jaHggPSBjaG9pY2UuZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2lkJywgZWxlbWVudC5pZCArICdfJyArIGNob2ljZS52YWx1ZSlcclxuXHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0Y2hvaWNlLmRpdi5hcHBlbmQoY3JlYXRlLmxhYmVsKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHRcdC5hdHRyKCdmb3InLCBlbGVtZW50LmlkICsgJ18nICsgY2hvaWNlLnZhbHVlKVxyXG5cdFx0XHRcdFx0XHRcdC50ZXh0KGNob2ljZS50ZXh0KVxyXG5cdFx0XHRcdFx0XHQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoY2hvaWNlLnZhbHVlID09IC0xKSB7XHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeFxyXG5cdFx0XHRcdFx0XHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0dmFyIGNoZWNrZWQgPSAkKHRoaXMpLmlzKCc6Y2hlY2tlZCcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRmb3IgKGxldCBjaG9pY2Ugb2YgZWxlbWVudC5maWx0ZXIuY2hvaWNlcykge1x0XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hvaWNlLmNoeC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0O1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdGNob2ljZS5jaHhcclxuXHRcdFx0XHRcdFx0XHRcdC5hdHRyKCdjaGVja2VkJywgdXJsU2VhcmNoLmdldCgnZmlsdGVyWycgKyBlbGVtZW50LmlkICsgJ11bXScpLmhhcyhjaG9pY2UudmFsdWUpKVxyXG5cdFx0XHRcdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IGNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGV0IHVuY2hlY2tlZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgY2hvaWNlIG9mIGVsZW1lbnQuZmlsdGVyLmNob2ljZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoJChjaG9pY2UuY2h4KS5pcygnOmNoZWNrZWQnKSAmJiBjaG9pY2UudmFsdWUgIT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHVuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaG9pY2VzWzBdLmNoeC5wcm9wKCdpbmRldGVybWluYXRlJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZWxlbWVudC5maWx0ZXIuY2hvaWNlc1swXS5jaHgucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRlbGVtZW50LmZpbHRlci5jaG9pY2VzWzBdLmNoeC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcbn1cclxuXHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vLyBmaWxsU2VyaWVzUGFubmVsXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBmaWxsU2VyaWVzUGFubmVsKCkge1xyXG5cdFxyXG5cdGZvciAobGV0IHNlcmllIG9mIGdwZXhlLnNlcmllcykge1xyXG5cdFx0c2VyaWUuYnRuID0gJCgnI3NlcmllcycpLmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmF0dHIoJ3JvbGUnLCAnYnV0dG9uJylcclxuXHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXByaW1hcnkgbS0xJylcclxuXHRcdFx0LmF0dHIoJ2hyZWYnLCBzZXJpZS51cmwpXHJcblx0XHRcdC50ZXh0KHNlcmllLm5hbWUpXHJcblx0XHQ7XHJcblx0fVxyXG5cdFxyXG59XHJcblxyXG4vLy0tLS0tLS0tLS0tLS0tLVxyXG4vL2ZpbGxEaXNwbGF5UGFubmVsXHJcbi8vLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5mdW5jdGlvbiBmaWxsRGlzcGxheVBhbm5lbCgpIHtcclxuXHRcclxuXHRsZXQgZGl2Q29sID0gJCgnI2Rpc3BsYXlfcGFuZWwnKS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdC5hZGRDbGFzcygncm93IHB5LTInKVxyXG5cdFx0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2NvbCcpXHJcblx0O1xyXG5cdFxyXG5cdGZvciAobGV0IGhlYWRlciBvZiBncGV4ZS5oZWFkZXJzKSB7XHJcblx0XHRcclxuXHRcdGhlYWRlci5hRGlzcGxheSA9IGRpdkNvbC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBidG4tb3V0bGluZS1wcmltYXJ5IGNvbC0yIG0tMSB0ZXh0LWxlZnQgdGV4dC1ub3dyYXAnKVxyXG5cdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aGVhZGVyLmNoeERpc3BsYXkucHJvcCgnY2hlY2tlZCcsICFoZWFkZXIuY2h4RGlzcGxheS5pcygnOmNoZWNrZWQnKSk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IGRpc3BsYXkgPSB1cmxTZWFyY2guZ2V0KCdkaXNwbGF5WycgKyBoZWFkZXIuaWQgKyAnXScpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ2Rpc3BsYXlbJyArIGhlYWRlci5pZCArICddJyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKGhlYWRlci5jaHhEaXNwbGF5LmlzKCc6Y2hlY2tlZCcpKSB7XHJcblx0XHRcdFx0XHRpZiAoZGlzcGxheSA9PSBmYWxzZSkge1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guYXBwZW5kKCdkaXNwbGF5WycgKyBoZWFkZXIuaWQgKyAnXScsIGhlYWRlci5kZWZhdWx0V2lkdGgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH0pXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdGxldCBkaXYgPSBoZWFkZXIuYURpc3BsYXkuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbCBjdXN0b20tY2hlY2tib3gnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRoZWFkZXIuY2h4RGlzcGxheSA9IGRpdi5hcHBlbmQoY3JlYXRlLmNoZWNrYm94KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXR0cignaWQnLCAnaF8nICsgaGVhZGVyLmlkKVxyXG5cdFx0XHQub24oJ2NoYW5nZSBjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hdHRyKCdmb3InLCAnaF8nICsgaGVhZGVyLmlkKVxyXG5cdFx0XHQudGV4dChoZWFkZXIudGl0bGUpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdFxyXG5cdH1cclxuXHRcclxufVxyXG5cclxudmFyIHVybFNlYXJjaCA9IG5ldyBVcmxTZWFyY2goKTtcclxuXHJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xyXG5cclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIE1lbnUgZGlzcGxheVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG5cdCQoJyNkb2N1bWVudF9uZXcsICNkb2N1bWVudF9lZGl0LCAjZG9jdW1lbnRfbW92ZSwgI2RvY3VtZW50X2RlbGV0ZSwgI3ZlcnNpb25fbmV3LCAjdmVyc2lvbl9lZGl0LCAjdmVyc2lvbl9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdGdsb2JhbC5hamF4LnNldCgnI21vZGFsJywgJCh0aGlzKS5kYXRhKCd1cmwnKSArIHVybFNlYXJjaC50b1VybCgnaWRbXScpLCB7ZnJvbTogdGhpc30pO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcclxuXHRcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdC8vIFRhYiBjb2xsYXBzZVxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3RhYnMnKS5vbignc2hvdy5icy50YWInLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJy5jb2xsYXBzZScpLmNvbGxhcHNlKCdzaG93Jyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3RhYnNfaGlkZGVuJyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuYWRkQ2xhc3MoJ3RhYnNfc2hvd2VkJyk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3RhYnMgdWwgbGkgYScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XHJcblx0XHRcdCQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkKHRoaXMpLmJsdXIoKTtcclxuXHRcdFx0JCh0aGlzKS5hdHRyKCdhcmlhLXNlbGVjdGVkJywgZmFsc2UpO1xyXG5cdFx0XHQkKCcjJyArICQodGhpcykuYXR0cignYXJpYS1jb250cm9scycpKS5wYXJlbnQoKS5jb2xsYXBzZSgnaGlkZScpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG4gICAgXHJcblx0JCgnI3RhYnMnKS5vbignc2hvd24uYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5yZW1vdmVDbGFzcygndGFic19oaWRkZW4nKTtcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5hZGRDbGFzcygndGFic19zaG93ZWQnKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdGFicycpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbihlKSB7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykucmVtb3ZlQ2xhc3MoJ3RhYnNfc2hvd2VkJyk7XHJcblx0XHQkKCcjdGFibGVfY29udGFpbmVyJykuYWRkQ2xhc3MoJ3RhYnNfaGlkZGVuJyk7XHJcblx0fSk7XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBUYWJzIG1pbmltaXplXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjdGFicycpLnRyaWdnZXIoJ3Nob3cuYnMudGFiJyk7XHJcblx0XHJcblxyXG5cdCQoJyN0YWJsZV9jb250YWluZXIsICN2dWVzLCAjdGFibGUnKS5vbignYWpheC5iZWZvcmVTZW5kJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdFx0JCgnI3RhYmxlJykuaGlkZSgpO1xyXG5cdFx0XHJcblx0XHQkKCcjc3Bpbm5lcicpXHJcblx0XHRcdC5zaG93KClcclxuXHRcdFx0LmVtcHR5KClcclxuXHRcdFx0LmFwcGVuZChnbG9iYWwuaWNvbi5sb2FkaW5nKVxyXG5cdFx0O1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gVGFibGVfY29udGFpbmVyXHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcclxuXHQkKCcjdGFibGVfY29udGFpbmVyJykub24oJ2FqYXguc3VjY2VzcycsIGZ1bmN0aW9uKGUsIHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcclxuXHRcdFxyXG5cdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdCQoJyNzcGlubmVyJykuZW1wdHkoKTtcclxuXHRcdFxyXG5cdFx0Ly9zZXR1cCBqcyBkYXRhc1xyXG5cdFx0c2V0dXAocmVzdWx0KTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdGFibGVfY29udGFpbmVyJykub24oJ2FqYXguY29tcGxldGVkJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHJcblx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xyXG5cdFx0ZmlsbFNlcmllc1Bhbm5lbCgpO1xyXG5cdFx0ZmlsbERpc3BsYXlQYW5uZWwoKTtcclxuXHRcdFxyXG5cdFx0Ly9zZXR1cCB1cmxcclxuXHRcdHVybFNlYXJjaC5zZXRGcm9tVXJsKHdpbmRvdy5sb2NhdGlvbi5zZWFyY2gpO1xyXG5cdFx0XHJcblx0XHR1cmxTZWFyY2guZ2V0VnVlcygpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gVnVlc1xyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0JCgnI3Z1ZXMnKS5vbignYWpheC5zdWNjZXNzJywgZnVuY3Rpb24oZSwgcmVzdWx0LCB0ZXh0U3RhdHVzLCBqcVhIUikge1xyXG5cdFx0XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1x0XHJcblx0XHQkKCcjdnVlcycpLmVtcHR5KCk7XHJcblx0XHRcclxuXHRcdGZvciAobGV0IHZ1ZSBvZiByZXN1bHQpIHtcclxuXHRcdFx0XHJcblx0XHRcdGRpdiA9ICQoJyN2dWVzJylcclxuXHRcdFx0XHQuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdidG4tZ3JvdXAgbS0xJylcclxuXHRcdFx0XHQuYXR0cigncm9sZScsICdncm91cCcpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGJ0biA9IGRpdi5hcHBlbmQoY3JlYXRlLmJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5JylcclxuXHRcdFx0XHQuYXR0cignZGF0YS1pZCcsIHZ1ZS5pZClcclxuXHRcdFx0XHQudGV4dCh2dWUubmFtZSlcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0XHR1cmxTZWFyY2guc2V0KCd2dWUnLCB2dWUuaWQpO1xyXG5cdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmJsdXIoKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAodnVlWydlZGl0X3VybCddICYmIHZ1ZVsnZGVsZXRlX3VybCddKSB7XHJcblx0XHRcdFx0ZGl2MiA9IGRpdi5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnYnRuLWdyb3VwJylcclxuXHRcdFx0XHRcdC5hdHRyKCdyb2xlJywgJ2dyb3VwJylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0YnRuMiA9IGRpdjIuYXBwZW5kKGNyZWF0ZS5idXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5IGRyb3Bkb3duLXRvZ2dsZScpXHJcblx0XHRcdFx0XHQuYXR0cignZGF0YS10b2dnbGUnLCAnZHJvcGRvd24nKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2FyaWEtaGFzcG9wdXAnLCB0cnVlKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0ZGl2MyA9IGRpdjIuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2Ryb3Bkb3duLW1lbnUnKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRkaXYzLmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnZHJvcGRvd24taXRlbSB0ZXh0LXN1Y2Nlc3MnKVxyXG5cdFx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRnbG9iYWwuYWpheC5zZXQoJyNtb2RhbCcsIHZ1ZVsnZWRpdF91cmwnXSwge21vZGFsOiB0cnVlfSk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnRleHQoJC5pMThuKCdlZGl0JykpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGRpdjMuYXBwZW5kKGNyZWF0ZS5hKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0LmFkZENsYXNzKCdkcm9wZG93bi1pdGVtIHRleHQtZGFuZ2VyJylcclxuXHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0Z2xvYmFsLmFqYXguc2V0KCcjbW9kYWwnLCB2dWVbJ2RlbGV0ZV91cmwnXSwge21vZGFsOiB0cnVlLCBmcm9tOiB0aGlzfSk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LnRleHQoJC5pMThuKCdkZWxldGUnKSlcclxuXHRcdFx0XHQ7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIERyYWd0YWJsZVxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG4vL1x0XHR2YXIgZHJhZ2dlciA9IHRhYmxlRHJhZ2dlci5kZWZhdWx0KCQoJ3RhYmxlJykuZ2V0KDApLCB7XHJcbi8vXHQgICAgICAgIG1vZGU6ICdjb2x1bW4nLFxyXG4vL1x0XHR9KTtcclxuXHRcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdnVlcycpLm9uKCdhamF4LmNvbXBsZXRlZCcsIGZ1bmN0aW9uKGUsIHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdnVlX25ldycpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0Z2xvYmFsLmFqYXguc2V0KCcjbW9kYWwnLCAkKHRoaXMpLmRhdGEoJ3VybCcpICsgdXJsU2VhcmNoLnRvVXJsKCksIHttb2RhbDogdHJ1ZX0pO1xyXG5cdH0pO1xyXG5cdFxyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gVGFibGVcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyN0YWJsZScpLm9uKCdhamF4LnN1Y2Nlc3MnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcblx0XHRcclxuXHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblx0XHRcclxuXHRcdCQoJyNzcGlubmVyJykuZW1wdHkoKTtcclxuXHRcdCQoJyN0YWJsZSA+IHRib2R5JykuZW1wdHkoKTtcclxuXHRcdCQoJyN0YWJsZScpLnNob3coKTtcclxuXHRcdGlmIChyZXN1bHQgPT0gZmFsc2UpIHJldHVybjtcclxuXHRcdFxyXG4vL1x0XHRjb25zb2xlLmxvZyhyZXN1bHQucXVlcnkpO1xyXG4vL1x0XHRjb25zb2xlLmxvZyhyZXN1bHQuZGF0YXMpO1xyXG5cdFx0XHJcblx0XHRsZXQgc2VhcmNoVXJsID0gJC5wYXJhbShyZXN1bHQucXVlcnkpO1xyXG5cdFx0dXJsU2VhcmNoLl9wYXJhbXNBcnJheSA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoVXJsKTtcclxuXHRcdHVybFNlYXJjaC5kZWxldGUoJ2lkW10nKTtcclxuXHRcdFxyXG5cdFx0Ly92dWVcclxuXHRcdCQoJyN2dWVzJykuZmluZCgnYnV0dG9uW2RhdGEtaWRdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0aWYgKCQodGhpcykuZGF0YSgnaWQnKSA9PSB1cmxTZWFyY2guZ2V0KCd2dWUnKSkge1xyXG5cdFx0XHRcdCQodGhpcykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1vdXRsaW5lLXByaW1hcnknKTtcclxuXHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJ2RpdiA+IGJ1dHRvbicpLmF0dHIoJ2NsYXNzJywgJ2J0biBidG4tb3V0bGluZS1wcmltYXJ5IGRyb3Bkb3duLXRvZ2dsZScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQodGhpcykuYXR0cignY2xhc3MnLCAnYnRuIGJ0bi1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCdkaXYgPiBidXR0b24nKS5hdHRyKCdjbGFzcycsICdidG4gYnRuLXByaW1hcnkgZHJvcGRvd24tdG9nZ2xlJyk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQvL3Nlcmllc1xyXG5cdFx0Zm9yIChsZXQgc2VyaWUgb2YgZ3BleGUuc2VyaWVzKSB7XHJcblx0XHRcdGlmIChyZXN1bHQuc2VyaWUgJiYgc2VyaWUuaWQgPT0gcmVzdWx0LnNlcmllKSB7XHJcblx0XHRcdFx0c2VyaWUuYnRuLnJlbW92ZUNsYXNzKCdidG4tcHJpbWFyeScpO1xyXG5cdFx0XHRcdHNlcmllLmJ0bi5hZGRDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeScpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNlcmllLmJ0bi5yZW1vdmVDbGFzcygnYnRuLW91dGxpbmUtcHJpbWFyeScpO1xyXG5cdFx0XHRcdHNlcmllLmJ0bi5hZGRDbGFzcygnYnRuLXByaW1hcnknKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRmb3IgKGxldCBoZWFkZXIgb2YgZ3BleGUuaGVhZGVycykge1xyXG5cdFx0XHRcclxuXHRcdFx0Ly9kaXNwbGF5XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoZGlzcGxheSA9IHJlc3VsdC5xdWVyeS5kaXNwbGF5W2hlYWRlci5pZF0pIHtcclxuXHJcblx0XHRcdFx0aGVhZGVyLmFEaXNwbGF5LmFkZENsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0aGVhZGVyLmFEaXNwbGF5LnJlbW92ZUNsYXNzKCdidG4tcHJpbWFyeScpO1xyXG5cdFx0XHRcdGhlYWRlci5jaHhEaXNwbGF5LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdFx0XHRoZWFkZXIudGguY3NzKCd3aWR0aCcsIGRpc3BsYXkgKyAnZW0nKTtcclxuXHRcdFx0XHRoZWFkZXIudGguc2hvdygpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdC8vaGVhZGVyc1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGhlYWRlci5idG5Ecm9wZG93bi5lbXB0eSgpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGhlYWRlci5pc0ZpbHRlcmVkID0gZmFsc2U7XHJcblx0XHRcdFx0aGVhZGVyLmlzU29ydGVkQXNjID0gZmFsc2U7XHJcblx0XHRcdFx0aGVhZGVyLmlzU29ydGVkRGVzYyA9IGZhbHNlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmIChoZWFkZXIuaGFzU29ydCkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGVsZW1lbnQgb2YgaGVhZGVyLmVsZW1lbnRzKSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydEFzYycpID09IGVsZW1lbnQuaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRoZWFkZXIuaXNTb3J0ZWRBc2MgPSB0cnVlO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAodXJsU2VhcmNoLmdldCgnc29ydERlc2MnKSA9PSBlbGVtZW50LmlkKSB7XHJcblx0XHRcdFx0XHRcdFx0aGVhZGVyLmlzU29ydGVkRGVzYyA9IHRydWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoaGVhZGVyLmhhc0ZpbHRlcikge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRmb3IgKGVsZW1lbnQgb2YgaGVhZGVyLmVsZW1lbnRzKSB7XHJcblx0XHRcdFx0XHRcdGlmIChlbGVtZW50LmZpbHRlcikge1xyXG5cdFx0XHRcdFx0XHRcdHN3aXRjaCAoZWxlbWVudC5maWx0ZXIudHlwZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSB0eXBlLmJvb2w6XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIHR5cGUudGV4dDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHVybFNlYXJjaC5oYXMoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRoZWFkZXIuaXNGaWx0ZXJlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSB0eXBlLmRhdGU6XHJcblx0XHRcdFx0XHRcdFx0XHRjYXNlIHR5cGUubGlzdDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKHVybFNlYXJjaC5oYXMoJ2ZpbHRlclsnICsgZWxlbWVudC5pZCArICddW10nKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGhlYWRlci5pc0ZpbHRlcmVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKChoZWFkZXIuaXNGaWx0ZXJlZCk/Z2xvYmFsLmljb24uZnVubmVsRmlsbDpnbG9iYWwuaWNvbi5mdW5uZWwpO1x0XHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoaGVhZGVyLmlzU29ydGVkQXNjKSB7XHJcblx0XHRcdFx0XHRoZWFkZXIuYnRuRHJvcGRvd24uYXBwZW5kKGdsb2JhbC5pY29uLmFycm93VXApO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoaGVhZGVyLmlzU29ydGVkRGVzYykge1xyXG5cdFx0XHRcdFx0aGVhZGVyLmJ0bkRyb3Bkb3duLmFwcGVuZChnbG9iYWwuaWNvbi5hcnJvd0Rvd24pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRoZWFkZXIuYURpc3BsYXkuYWRkQ2xhc3MoJ2J0bi1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0aGVhZGVyLmFEaXNwbGF5LnJlbW92ZUNsYXNzKCdidG4tb3V0bGluZS1wcmltYXJ5Jyk7XHJcblx0XHRcdFx0aGVhZGVyLmNoeERpc3BsYXkucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRoZWFkZXIudGguaGlkZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHQvL3Rib2R5XHJcblx0XHRmb3IgKGxldCBkYXRhIG9mIHJlc3VsdC5kYXRhcykge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHRyID0gJCgnI3RhYmxlID4gdGJvZHknKS5hcHBlbmQoY3JlYXRlLnRyKS5jaGlsZHJlbigpLmxhc3QoKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCBkaXYgPSB0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ2NfJyArIGRhdGEudmVyc2lvbl9pZClcclxuXHRcdFx0XHQudmFsKGRhdGEudmVyc2lvbl9pZClcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgdXJsU2VhcmNoLmxpbmVDaGVja2VkLmJpbmQodXJsU2VhcmNoKSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0ZGl2LmFwcGVuZChjcmVhdGUubGFiZWwpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ2ZvcicsICdjXycgKyBkYXRhLnZlcnNpb25faWQpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGZvciAobGV0IGhlYWRlciBvZiBncGV4ZS5oZWFkZXJzKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dmFsdWUgPSBkYXRhW2hlYWRlci5pZF07XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKGhlYWRlci5pZCA9PSAnc3RhdHVzX3R5cGUnKSB7XHJcblx0XHRcdFx0XHRcdHZhbHVlID0gaGVhZGVyLmVsZW1lbnRzWzBdLmZpbHRlci5jaG9pY2VzW3ZhbHVlXS50ZXh0O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRzd2l0Y2ggKGhlYWRlci50eXBlKSB7XHJcblx0XHRcdFx0XHRcdGNhc2UgdHlwZS5ib29sOlxyXG5cdFx0XHRcdFx0XHRcdGRhdGFDbGFzcyA9ICd0ZXh0LWNlbnRlcic7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHZhbHVlID09IDApIHZhbHVlID0gJ05vJztcclxuXHRcdFx0XHRcdFx0XHRpZiAodmFsdWUgPT0gMSkgdmFsdWUgPSAnWWVzJztcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSB0eXBlLmRhdGU6XHJcblx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3RleHQtY2VudGVyJztcclxuXHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAodmFsdWUgaW5zdGFuY2VvZiBPYmplY3QpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5kYXRlLnRvRGF0ZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQvL2hpZ2hsaWdodFxyXG5cdFx0XHRcdFx0XHRcdFx0aWYgKHVybFNlYXJjaC5nZXQoJ2hpZ2hsaWdodCcpLnRvU3RyaW5nKCkgPT0gaGVhZGVyLmlkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmICh2YWx1ZSAhPT0gbnVsbCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICh2YWx1ZSA8IG5ldyBEYXRlKCkpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRyLmFkZENsYXNzKCdoaWdobGlnaHQtbGF0ZScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUuYWRkRGF5cygtMTUpIDwgbmV3IERhdGUoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHIuYWRkQ2xhc3MoJ2hpZ2hsaWdodC0xNScpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsdWUuYWRkRGF5cygtMzApIDwgbmV3IERhdGUoKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHIuYWRkQ2xhc3MoJ2hpZ2hsaWdodC0zMCcpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ci5hZGRDbGFzcygnaGlnaGxpZ2h0LW9rJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR2YWx1ZSA9IHZhbHVlLmZvcm1hdCgpO1xyXG5cdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0Y2FzZSB0eXBlLmxpbms6XHJcblx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3RleHQtY2VudGVyJztcclxuXHRcdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0XHRzd2l0Y2ggKHR5cGVvZiB2YWx1ZSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2FzZSAnbnVtYmVyJzpcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3RleHQtcmlnaHQnO1xyXG5cdFx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZGF0YUNsYXNzID0gJ3RleHQtbGVmdCc7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0aWYgKHZhbHVlID09PSBudWxsKSB2YWx1ZSA9ICcnO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR0ci5hcHBlbmQoY3JlYXRlLnRkKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdFx0XHQuYWRkQ2xhc3MoZGF0YUNsYXNzKVxyXG5cdFx0XHRcdFx0XHQudGV4dCh2YWx1ZSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGhlYWRlci50aC5oaWRlKCk7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdHRyLmFwcGVuZChjcmVhdGUudGQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ2J0bi1zdWNjZXNzIHctMTAwJylcclxuXHRcdFx0XHRcdC5hdHRyKCdkYXRhLXVybCcsIGRhdGEuZGV0YWlsVXJsKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdG9nZ2xlJywgJ21vZGFsIGFqYXgnKVxyXG5cdFx0XHRcdFx0LmF0dHIoJ2RhdGEtdGFyZ2V0JywgJyNtb2RhbF9kZXRhaWwnKVxyXG5cdFx0XHRcdFx0LnRleHQoJC5pMThuKCdkZXRhaWxzJykpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vcGFnaW5hdGlvblxyXG5cdFx0JCgnI3BhZ2luYXRpb24nKS5lbXB0eSgpO1xyXG5cdFx0XHRcclxuXHRcdCQoJyN0YWJsZV9jb250YWluZXInKS5hZGRDbGFzcygnbWItNCcpO1xyXG5cdFx0XHJcblx0XHRsZXQgcGFnZU1heCA9IHJlc3VsdC5wYWdlTWF4O1xyXG5cdFx0bGV0IHBhZ2UgPSBwYXJzZUludCh1cmxTZWFyY2guZ2V0KCdwYWdlJykpIHx8IDE7XHJcblx0XHRwYWdlID0gTWF0aC5tYXgoTWF0aC5taW4ocGFnZSwgcGFnZU1heCksIDEpO1xyXG5cdFx0XHJcblx0XHRkaXYgPSAkKCcjcGFnaW5hdGlvbicpLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ3JvdyBtLTAnKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRkaXYuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnY29sJylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dWwgPSBkaXYuYXBwZW5kKGNyZWF0ZS51bCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdwYWdpbmF0aW9uIGNvbCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyJylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0aWYgKHJlc3VsdC5wYWdlTWF4ID4gMSkge1xyXG5cdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSAxKT8nIGRpc2FibGVkJzonJykpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKHBhZ2UgPiAxKSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3BhZ2UnLCBwYWdlIC0gMSk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIE1hdGgubWF4KDEsIHBhZ2UgLSAxKSlcclxuXHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpXHJcblx0XHRcdFx0XHRcdC5odG1sKCcmbGFxdW87JylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHBhZ2VTdGFydCA9IE1hdGgubWluKE1hdGgubWF4KDEsIHBhZ2UgLSAyKSwgTWF0aC5tYXgoMSwgcmVzdWx0LnBhZ2VNYXggLSA0KSk7XHJcblx0XHRcdGxldCBwYWdlRW5kID0gTWF0aC5taW4ocGFnZVN0YXJ0ICsgNSwgcGFnZU1heCk7XHJcblx0XHRcdFxyXG5cdFx0XHRmb3IgKGxldCBpID0gcGFnZVN0YXJ0OyBpIDw9IHBhZ2VFbmQ7IGkrKykge1xyXG5cdFx0XHRcdHVsLmFwcGVuZChjcmVhdGUubGkpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtaXRlbScgKyAoKHBhZ2UgPT0gaSk/JyBhY3RpdmUnOicnKSlcclxuXHRcdFx0XHRcdC5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLnNldCgncGFnZScsIGkpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHRcdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0LmFwcGVuZChjcmVhdGUuYSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LmFkZENsYXNzKCdwYWdlLWxpbmsnKVxyXG5cdFx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIGkpXHJcblx0XHRcdFx0XHRcdC50ZXh0KGkpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHR1bC5hcHBlbmQoY3JlYXRlLmxpKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncGFnZS1pdGVtJyArICgocGFnZSA9PSBwYWdlTWF4KT8nIGRpc2FibGVkJzonJykpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKHBhZ2UgPCBwYWdlTWF4KSB7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5zZXQoJ3BhZ2UnLCBwYWdlICsgMSk7XHJcblx0XHRcdFx0XHRcdHVybFNlYXJjaC5kZWxldGUoJ3Z1ZScpO1xyXG5cdFx0XHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5hcHBlbmQoY3JlYXRlLmEpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYWRkQ2xhc3MoJ3BhZ2UtbGluaycpXHJcblx0XHRcdFx0XHQuYXR0cignZGF0YS12YWx1ZScsIE1hdGgubWluKHBhZ2VNYXgsIHBhZ2UgKyAxKSlcclxuXHRcdFx0XHRcdC5hcHBlbmQoY3JlYXRlLnNwYW4pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHRcdC5hdHRyKCdhcmlhLWhpZGRlbicsIHRydWUpXHJcblx0XHRcdFx0XHRcdC5odG1sKCcmcmFxdW87JylcclxuXHRcdFx0O1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHRzZWxlY3QgPSBkaXYuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnY29sIGQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtZW5kIG10LTEgbXItNScpXHJcblx0XHRcdC5hcHBlbmQoY3JlYXRlLnNlbGVjdCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0LmFkZENsYXNzKCdmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtIGJnLWRhcmsgYm9yZGVyLXNlY29uZGFyeSB0ZXh0LXdoaXRlJylcclxuXHRcdFx0LmNzcygnd2lkdGgnLCAnMTUwJylcclxuXHRcdFx0Lm9uKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR1cmxTZWFyY2guc2V0KCdyZXN1bHRzX3Blcl9wYWdlJywgJCh0aGlzKS52YWwoKSlcclxuXHRcdFx0XHR1cmxTZWFyY2guZGVsZXRlKCd2dWUnKTtcclxuXHRcdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0fSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0bGV0IHJlc3VsdHNQZXJQYWdlID0gbmV3IE1hcChbWycxMCcsIDEwXSwgWyc1MCcsIDUwXSwgWycxMDAnLCAxMDBdLCBbJC5pMThuKCdhbGwnKSwgJzAnXV0pO1xyXG5cdFx0Zm9yIChsZXQgW3RleHQsIHZhbHVlXSBvZiByZXN1bHRzUGVyUGFnZSkge1xyXG5cdFx0XHRzZWxlY3QuYXBwZW5kKGNyZWF0ZS5vcHRpb24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmF0dHIoJ3ZhbHVlJywgdmFsdWUpXHJcblx0XHRcdFx0LmF0dHIoJ3NlbGVjdGVkJywgdXJsU2VhcmNoLmdldCgncmVzdWx0c19wZXJfcGFnZScpID09IHZhbHVlKVxyXG5cdFx0XHRcdC50ZXh0KHRleHQpXHJcblx0XHRcdDtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0XHJcblx0XHQvL2ZsYXNoZXNcclxuXHRcdFxyXG5cdFx0JCgnI3RvYXN0JykuZW1wdHkoKTtcclxuXHRcdFxyXG5cdFx0Zm9yIChsZXQgbGFiZWwgb2YgT2JqZWN0LmtleXMocmVzdWx0LmZsYXNoKSkge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGRpdlRvYXN0ID0gJCgnI3RvYXN0JykuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCd0b2FzdCcpXHJcblx0XHRcdFx0LmF0dHIoJ3JvbGUnLCAnYWxlcnQnKVxyXG5cdFx0XHRcdC5hdHRyKCdkYXRhLWRlbGF5JywgNTAwMClcclxuXHRcdFx0XHQuYXR0cignYXJpYS1saXZlJywgJ2Fzc2VydGl2ZScpXHJcblx0XHRcdFx0LmF0dHIoJ2FyaWEtYXRvbWljJywgdHJ1ZSlcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IGRpdkNvbnRhaW5lciA9IGRpdlRvYXN0LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnYWxlcnQgYWxlcnQtJyArIGxhYmVsICsgJyBkLWZsZXggcHgtMyBtLTAnKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRkaXZDb250YWluZXIuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdhbGlnbi1zZWxmLWNlbnRlcicpXHJcblx0XHRcdFx0LmFwcGVuZChnbG9iYWwuaWNvbltsYWJlbF0pXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGxldCB1bEJvZHkgPSBkaXZDb250YWluZXIuYXBwZW5kKGNyZWF0ZS51bCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2p1c3RpZnktY29udGVudC1jZW50ZXIgZmxleC1maWxsJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0ZGl2Q29udGFpbmVyLmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnanVzdGlmeS1jb250ZW50LWVuZCcpXHJcblx0XHRcdFx0LmFwcGVuZChnbG9iYWwuaWNvbi5jbG9zZSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAocmVzdWx0LmZsYXNoW2xhYmVsXS5sZW5ndGggPiAxKSB7XHJcblx0XHRcdFx0Zm9yIChsZXQgbWVzc2FnZSBvZiByZXN1bHQuZmxhc2hbbGFiZWxdKSB7XHJcblx0XHRcdFx0XHR1bEJvZHkuYXBwZW5kKGNyZWF0ZS5saSkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdFx0LnRleHQobWVzc2FnZSlcclxuXHRcdFx0XHRcdDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0dWxCb2R5LnRleHQocmVzdWx0LmZsYXNoW2xhYmVsXVswXSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGRpdlRvYXN0LnRvYXN0KCdzaG93Jyk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdHVybFNlYXJjaC5saW5lQ2hlY2tlZCgpO1xyXG5cdFx0XHJcblx0XHRnbG9iYWwuYWpheC5mZXRjaCgnI3RhYmxlID4gdGJvZHknKTtcclxuLy9cdFx0JCgndGFibGUnKS5zdGlja3lUYWJsZUhlYWRlcnMoKTtcclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIEpxdWVyeSBSZXNpemFibGUgQ29sdW1uc1xyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG4vL1x0XHQkKCcjdGFibGUnKS5yZXNpemFibGVDb2x1bW5zKCk7XHJcblx0XHRcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdGFibGUnKS5vbignYWpheC5jb21wbGV0ZWQnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0Ly8gTW9kYWxcclxuXHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFxyXG5cdCQoJyNtb2RhbF9kZXRhaWwnKS5vbignYWpheC5jb21wbGV0ZWQnLCBmdW5jdGlvbihlLCByZXN1bHQsIHRleHRTdGF0dXMsIGpxWEhSKSB7XHJcblx0XHRcclxuXHRcdCQoZS50YXJnZXQpLmZpbmQoJyN2ZXJzaW9uX2VkaXRfZGV0YWlsLCAjdmVyc2lvbl9kZWxldGVfZGV0YWlsJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdGdsb2JhbC5hamF4LnNldCgnI21vZGFsJywgJCh0aGlzKS5kYXRhKCd1cmwnKSArICc/aWRbXT0nICsgJCgnI3ZlcnNpb25fdGFicz5hLmFjdGl2ZScpLmRhdGEoJ2lkJykgKyAnJm1vZGFsPTEnLCB7ZnJvbTogdGhpc30pO1xyXG5cdCAgICB9KTtcclxuXHRcdFxyXG5cdH0pO1xyXG5cdFx0XHJcblx0JCgnI21vZGFsJykub24oJ2FqYXguc3VjY2VzcycsIGZ1bmN0aW9uKGUsIHJlc3VsdCwgdGV4dFN0YXR1cywganFYSFIpIHtcclxuXHRcdFxyXG5cdFx0aWYgKHJlc3VsdCA9PT0gJycpIHtcclxuXHRcdFx0XHJcblx0XHRcdCQoJyNtb2RhbF9jb250YWluZXInKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0XHRcclxuXHRcdFx0JCgnI21vZGFsX2RldGFpbF9jb250YWluZXInKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0XHR1cmxTZWFyY2guZmV0Y2goKTtcclxuXHRcdFx0ZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuXHRcdFxyXG5cdFx0fSBlbHNlIGlmICgkKCc8ZGl2PicgKyByZXN1bHQgKyAnPC9kaXY+JykuZmluZCgnZGl2Lm1vZGFsLWJvZHknKS5leGlzdCgpKSB7XHJcblx0XHRcdHJldHVybiB0cnVlO1xyXG5cdFx0fSBlbHNlIGlmICgkKCc8ZGl2PicgKyByZXN1bHQgKyAnPC9kaXY+JykuZmluZCgncHJlLnNmLWR1bXAnKS5leGlzdCgpKSB7IC8vZm9yIGRlYnVnIG9ubHlcclxuXHRcdFx0cmV0dXJuIHRydWU7XHRcclxuXHRcdH1cclxuXHRcdCQoJyNtb2RhbF9jb250YWluZXInKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI21vZGFsX2RldGFpbF9jb250YWluZXInKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0dXJsU2VhcmNoLmZldGNoKCk7XHJcblx0fSk7XHJcblx0XHJcblx0XHJcblx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHQvLyBTZXR1cFxyXG5cdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHJcblx0bGV0IHVybCA9ICQoJyN0YWJsZV9jb250YWluZXInKS5kYXRhKCd1cmwnKTtcclxuXHRnbG9iYWwuYWpheC5zZXQoJyN0YWJsZV9jb250YWluZXInLCB1cmwpO1xyXG5cdFxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9