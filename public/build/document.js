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

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.join */ "./node_modules/core-js/modules/es.array.join.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var Popper = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

__webpack_require__(/*! ../css/document.scss */ "./assets/css/document.scss"); //require('bootstrap-select');
//require('./bootstrap-select/bootstrap-select.js');
//require('./bootstrap-select/defaults-fr_FR.js');


__webpack_require__(/*! ./multiselect/multiselect.js */ "./assets/js/multiselect/multiselect.js");

__webpack_require__(/*! ./multiselect/fr_FR.js */ "./assets/js/multiselect/fr_FR.js");

$(document).ready(function () {
  /*
  $.fn.selectpicker.Constructor.BootstrapVersion = '4';
  
  $("select[multiple]").selectpicker({
  	header: true,
  	liveSearch:true,
  	style: 'btn-primary',
  	actionsBox: true,
  });
  */
  $("select[multiple]").multiselect();
  $('#document_edit').hide();
  $('#document_move').hide();
  $('#document_delete').hide();
  $('#version_menu').hide();
  var checkboxes = [];
  $('table').find('input').each(function () {
    if ($(this).prop('type') == 'checkbox') {
      $(this).prop('checked', false);
      $(this).on('click', lineChecked);

      if ($(this).prop('id') != 'check_all') {
        checkboxes.push($(this));
      }
    }
  });
  $('table').find('a').each(function () {
    $.ajax({
      url: $(this).data('url'),
      type: 'GET',
      success: function success(result) {
        $('.modal-body').empty();
        $('.modal-body').html(result);
      }
    });
  });

  function lineChecked() {
    var checked = false;
    var unchecked = false;

    if ($(this).prop('id') == 'check_all') {
      $('table').find('input').each(function () {
        checked = $('#check_all').is(':checked');
        unchecked = !checked;
        $(this).prop('checked', checked);
      });
    } else {
      $('table').find('input').each(function () {
        if ($(this).prop('id') != 'check_all') {
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
        }
      });
    }

    if (checked) {
      var array = [];

      var _iterator = _createForOfIteratorHelper(checkboxes),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var checkbox = _step.value;

          if (checkbox.is(':checked')) {
            array.push('v[]=' + checkbox.val());
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      $('#version').val(array.join('&'));
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

  $('#document_edit').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('link'));
    $('#form').submit();
  });
  $('#document_move').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('link'));
    $('#form').submit();
  });
  $('#document_delete').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('link'));
    $('#form').submit();
  });
  $('#version_new').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('link'));
    $('#form').submit();
  });
  $('#version_edit').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('link'));
    $('#form').submit();
  });
  $('#version_delete').on('click', function (event) {
    event.preventDefault();
    $('#form').prop('action', $(this).data('link'));
    $('#form').submit();
  });
  /*
  console.log($.fn.selectpicker.Constructor.prototype.createDropdown);
  
  $.fn.selectpicker.Constructor.prototype.createDropdown = function () {
    // Options
    // If we are multiple or showTick option is set, then add the show-tick class
    var showTick = (this.multiple || this.options.showTick) ? ' show-tick' : '',
        multiselectable = this.multiple ? ' aria-multiselectable="true"' : '',
        inputGroup = '',
        autofocus = this.autofocus ? ' autofocus' : '';
  
    if (version.major < 4 && this.$element.parent().hasClass('input-group')) {
      inputGroup = ' input-group-btn';
    }
  
    // Elements
    var drop,
        header = '',
        searchbox = '',
        actionsbox = '',
        donebutton = '';
  
    if (this.options.header) {
      header =
        '<div class="' + classNames.POPOVERHEADER + '">' +
          '<button type="button" class="close" aria-hidden="true">&times;</button>' +
            this.options.header +
        '</div>';
    }
  
    if (this.options.liveSearch) {
  	  
      searchbox =
        '<div class="bs-searchbox">' +
          '<input type="search" class="form-control" autocomplete="off"' +
            (
              this.options.liveSearchPlaceholder === null ? ''
              :
              ' placeholder="' + htmlEscape(this.options.liveSearchPlaceholder) + '"'
            ) +
            ' role="combobox" aria-label="Search" aria-controls="' + this.selectId + '" aria-autocomplete="list">' +
        '</div>';
    }
  
   if (this.multiple && this.options.actionsBox) {
     actionsbox =
         '<div class="bs-actionsbox">' +
           '<div class="btn-group btn-group-sm btn-block">' +
             '<button type="button" class="actions-btn bs-select-all btn ' + classNames.BUTTONCLASS + '">' +
               this.options.selectAllText +
             '</button>' +
             '<button type="button" class="actions-btn bs-deselect-all btn ' + classNames.BUTTONCLASS + '">' +
               this.options.deselectAllText +
             '</button>' +
           '</div>' +
         '</div>';
   }
  
    if (this.multiple && this.options.doneButton) {
      donebutton =
        '<div class="bs-donebutton">' +
          '<div class="btn-group btn-block">' +
            '<button type="button" class="btn btn-sm ' + classNames.BUTTONCLASS + '">' +
              this.options.doneButtonText +
            '</button>' +
          '</div>' +
        '</div>';
    }
  
    drop =
      '<div class="dropdown bootstrap-select' + showTick + inputGroup + '">' +
        '<button type="button" class="' + this.options.styleBase + ' dropdown-toggle" ' + (this.options.display === 'static' ? 'data-display="static"' : '') + 'data-toggle="dropdown"' + autofocus + ' role="combobox" aria-owns="' + this.selectId + '" aria-haspopup="listbox" aria-expanded="false">' +
          '<div class="filter-option">' +
            '<div class="filter-option-inner">' +
              '<div class="filter-option-inner-inner"></div>' +
            '</div> ' +
          '</div>' +
          (
            version.major === '4' ? ''
            :
            '<span class="bs-caret">' +
              this.options.template.caret +
            '</span>'
          ) +
        '</button>' +
        '<div class="' + classNames.MENU + ' ' + (version.major === '4' ? '' : classNames.SHOW) + '">' +
          header +
          searchbox +
          actionsbox +
          '<div class="inner ' + classNames.SHOW + '" role="listbox" id="' + this.selectId + '" tabindex="-1" ' + multiselectable + '>' +
              '<ul class="' + classNames.MENU + ' inner ' + (version.major === '4' ? classNames.SHOW : '') + '" role="presentation">' +
              '</ul>' +
          '</div>' +
          donebutton +
        '</div>' +
      '</div>';
  
    return $(drop);
  };
  
  console.log($.fn.selectpicker.Constructor.prototype.createDropdown);
  */
});

/***/ }),

/***/ "./assets/js/multiselect/fr_FR.js":
/*!****************************************!*\
  !*** ./assets/js/multiselect/fr_FR.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

(function (root, factory) {
  if (root === undefined && window !== undefined) root = window;

  if (true) {
    // AMD. Register as an anonymous module unless amdModuleId is set
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (a0) {
      return factory(a0);
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function (jQuery) {
  (function ($) {
    /*
    $.fn.multiselect.defaults = {
        noneSelectedText: 'Aucune sélection',
        noneResultsText: 'Aucun résultat pour {0}',
        multipleSeparator: ', ',
        selectAllText: 'Tout sélectionner',
        filterText: 'Filtrer'
    };
    */
  })(jQuery);
});

/***/ }),

/***/ "./assets/js/multiselect/multiselect.js":
/*!**********************************************!*\
  !*** ./assets/js/multiselect/multiselect.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.symbol */ "./node_modules/core-js/modules/es.symbol.js");

__webpack_require__(/*! core-js/modules/es.symbol.description */ "./node_modules/core-js/modules/es.symbol.description.js");

__webpack_require__(/*! core-js/modules/es.symbol.iterator */ "./node_modules/core-js/modules/es.symbol.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.array.from */ "./node_modules/core-js/modules/es.array.from.js");

__webpack_require__(/*! core-js/modules/es.array.index-of */ "./node_modules/core-js/modules/es.array.index-of.js");

__webpack_require__(/*! core-js/modules/es.array.is-array */ "./node_modules/core-js/modules/es.array.is-array.js");

__webpack_require__(/*! core-js/modules/es.array.iterator */ "./node_modules/core-js/modules/es.array.iterator.js");

__webpack_require__(/*! core-js/modules/es.array.slice */ "./node_modules/core-js/modules/es.array.slice.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.name */ "./node_modules/core-js/modules/es.function.name.js");

__webpack_require__(/*! core-js/modules/es.object.to-string */ "./node_modules/core-js/modules/es.object.to-string.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.iterator */ "./node_modules/core-js/modules/es.string.iterator.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

__webpack_require__(/*! core-js/modules/web.dom-collections.iterator */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

(function () {
  var create = {
    div: function div() {
      return $(document.createElement('div'));
    },
    input: function input() {
      return $(document.createElement('input')).attr('type', 'text').addClass('form-control form-control-sm');
    },
    checkbox: function checkbox() {
      return $(document.createElement('input')).attr('type', 'checkbox').addClass('custom-control-input');
    },
    label: function label() {
      return $(document.createElement('label')).addClass('custom-control-label w-100 text-nowrap');
    },
    button: function button() {
      return $(document.createElement('button')).attr('type', 'button').addClass('btn btn-primary');
    },
    smallButton: function smallButton() {
      return $(document.createElement('button')).attr('type', 'button').addClass('btn btn-sm mx-1');
    },
    closeButton: function closeButton() {
      return $(document.createElement('button')).attr('type', 'button').addClass('close').append('<span>&times;</span>');
    }
  };
  var text = {
    noneSelected: 'None selected',
    multipleSeparator: ', ',
    selectAll: 'Select all',
    filter: 'Filter'
  };
  var icon = {
    arrowUp: '<svg class="bi bi-arrow-bar-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 5.854a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L8 3.207l2.646 2.647a.5.5 0 00.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 10a.5.5 0 00.5-.5V3a.5.5 0 00-1 0v6.5a.5.5 0 00.5.5zm-4.8 1.6c0-.22.18-.4.4-.4h8.8a.4.4 0 010 .8H3.6a.4.4 0 01-.4-.4z" clip-rule="evenodd"/>' + '</svg>',
    arrowDown: '<svg class="bi bi-arrow-bar-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 10.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L8 12.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 6a.5.5 0 01.5.5V13a.5.5 0 01-1 0V6.5A.5.5 0 018 6zM2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>' + '</svg>'
  };
  $.fn.extend({
    multiselect: function multiselect() {
      $(this).each(function () {
        init(this);
      });
    }
  });

  function init(that) {
    if (n = $(that).prop('name').match(/(.+)\[\]$/i)) {
      var name = n[1];
    } else {
      return false;
    }

    var select = {
      element: $(that),
      name: name,
      title: $(that).data('title'),
      locale: $(that).data('locale'),
      options: []
    };
    $(that).find('option').each(function () {
      select.options.push({
        element: $(this),
        value: $(this).attr('value'),
        text: $(this).text(),
        selected: $(this).attr('selected')
      });
    });
    $(that).hide();
    var div = $(that).after(create.div).next().addClass('btn-group col').attr('role', 'group');
    select.sortButton = div.append(create.button).children().last().append(select.title);
    var divGroup = div.append(create.div).children().last().addClass('btn-group').attr('role', 'group');
    select.dropdownButton = divGroup.append(create.button).children().last().attr('id', select.name + '_b').addClass('dropdown-toggle').attr('data-toggle', 'dropdown');
    select.dropdownMenu = divGroup.append(create.div).children().last().addClass('dropdown-menu dropdown-menu-right').css('min-width', '15em');
    select.dropdownMenu.parent().on('show.bs.dropdown', createMenu);

    function createMenu() {
      select.dropdownMenu.empty();
      var header = select.dropdownMenu.append(create.div).children().last().addClass('text-center border-bottom border-dark pb-2 px-1');
      header.append(create.smallButton).children().last().append(icon.arrowUp).addClass('px-2 ' + ($('#sortAsc').val() == select.name ? 'btn-outline-primary bg-dark text-white' : 'btn-primary')).on('click', sortAsc);
      header.append(create.smallButton).children().last().text(text.filter).addClass('px-3').on('click', filter);
      header.append(create.smallButton).children().last().append(icon.arrowDown).addClass('px-2 ' + ($('#sortDesc').val() == select.name ? 'btn-outline-primary bg-dark text-white' : 'btn-primary')).on('click', sortDesc);
      header.append(create.closeButton).children().last().on('click', function () {
        select.dropdownButton.popover('hide');
      });
      var search = select.dropdownMenu.append(create.div).children().last().addClass('text-center border-bottom border-dark p-2');
      search.append(create.input).children().last().on('input', function () {
        var searchValue = $(this).val().toLowerCase();

        if (searchValue == '') {
          select.selectAllDiv.show();

          var _iterator = _createForOfIteratorHelper(select.options),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var o = _step.value;
              o.div.show();
              o.checkbox.prop('checked', false);
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }
        } else {
          select.selectAllDiv.hide();

          var _iterator2 = _createForOfIteratorHelper(select.options),
              _step2;

          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var _o = _step2.value;

              if (_o.text.toLowerCase().indexOf(searchValue) == -1) {
                _o.div.hide();

                _o.checkbox.prop('checked', false);
              } else {
                _o.div.show();

                _o.checkbox.prop('checked', true);
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      });
      var body = select.dropdownMenu.append(create.div).children().last().addClass('px-2 pt-3');
      select.selectAllDiv = body.append(create.div).children().last().addClass('custom-control custom-checkbox');
      select.selectAllCheckbox = select.selectAllDiv.append(create.checkbox).children().last().attr('id', select.name + '_selectAll').on('change', function () {
        var checked = $(this).is(':checked');

        var _iterator3 = _createForOfIteratorHelper(select.options),
            _step3;

        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var o = _step3.value;
            o.checkbox.prop('checked', checked);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      });
      select.selectAllLabel = select.selectAllDiv.append(create.label).children().last().attr('for', select.name + '_selectAll').text(text.selectAll);

      var _iterator4 = _createForOfIteratorHelper(select.options),
          _step4;

      try {
        for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
          var o = _step4.value;
          o.div = body.append(create.div).children().last().addClass('custom-control custom-checkbox');
          o.checkbox = o.div.append(create.checkbox).children().last().attr('id', select.name + '_' + o.value).attr('checked', o.selected).on('change', function () {
            var checked;
            var unchecked;

            var _iterator5 = _createForOfIteratorHelper(select.options),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var _o2 = _step5.value;

                if ($(_o2.checkbox).is(':checked')) {
                  checked = true;
                } else {
                  unchecked = true;
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }

            if (checked && unchecked) {
              select.selectAllCheckbox.prop('indeterminate', true);
            } else {
              select.selectAllCheckbox.prop('indeterminate', false);
              select.selectAllCheckbox.prop('checked', checked);
            }
          });
          o.label = o.div.append(create.label).children().last().attr('for', select.name + '_' + o.value).text(o.text);
        }
      } catch (err) {
        _iterator4.e(err);
      } finally {
        _iterator4.f();
      }
    }

    function sortAsc() {
      $('#sortAsc').val(select.name);
      $('#sortDesc').val('');
      filter();
    }

    function filter() {
      var _iterator6 = _createForOfIteratorHelper(select.options),
          _step6;

      try {
        for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
          var o = _step6.value;
          o.element.prop('selected', o.checkbox.is(':checked'));
        }
      } catch (err) {
        _iterator6.e(err);
      } finally {
        _iterator6.f();
      }

      $('#form').submit();
    }

    function sortDesc() {
      $('#sortDesc').val(select.name);
      $('#sortAsc').val('');
      filter();
    }

    select.dropdownMenu.parent().on('hide.bs.dropdown', function (e) {
      if (e.clickEvent && $.contains(e.relatedTarget.parentNode, e.clickEvent.target)) {
        e.preventDefault();
      } else {
        select.dropdownMenu.empty();
      }
    });
  }
})($);

/***/ })

},[["./assets/js/document.js","runtime","vendors~app~document~form~login","vendors~app~document","vendors~document~form","vendors~document"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2RvY3VtZW50LnNjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2RvY3VtZW50LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9tdWx0aXNlbGVjdC9mcl9GUi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvbXVsdGlzZWxlY3QvbXVsdGlzZWxlY3QuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJQb3BwZXIiLCJkb2N1bWVudCIsInJlYWR5IiwibXVsdGlzZWxlY3QiLCJoaWRlIiwiY2hlY2tib3hlcyIsImZpbmQiLCJlYWNoIiwicHJvcCIsIm9uIiwibGluZUNoZWNrZWQiLCJwdXNoIiwiYWpheCIsInVybCIsImRhdGEiLCJ0eXBlIiwic3VjY2VzcyIsInJlc3VsdCIsImVtcHR5IiwiaHRtbCIsImNoZWNrZWQiLCJ1bmNoZWNrZWQiLCJpcyIsImFycmF5IiwiY2hlY2tib3giLCJ2YWwiLCJqb2luIiwic2hvdyIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJzdWJtaXQiLCJyb290IiwiZmFjdG9yeSIsInVuZGVmaW5lZCIsIndpbmRvdyIsImRlZmluZSIsImEwIiwialF1ZXJ5IiwiY3JlYXRlIiwiZGl2IiwiY3JlYXRlRWxlbWVudCIsImlucHV0IiwiYXR0ciIsImFkZENsYXNzIiwibGFiZWwiLCJidXR0b24iLCJzbWFsbEJ1dHRvbiIsImNsb3NlQnV0dG9uIiwiYXBwZW5kIiwidGV4dCIsIm5vbmVTZWxlY3RlZCIsIm11bHRpcGxlU2VwYXJhdG9yIiwic2VsZWN0QWxsIiwiZmlsdGVyIiwiaWNvbiIsImFycm93VXAiLCJhcnJvd0Rvd24iLCJmbiIsImV4dGVuZCIsImluaXQiLCJ0aGF0IiwibiIsIm1hdGNoIiwibmFtZSIsInNlbGVjdCIsImVsZW1lbnQiLCJ0aXRsZSIsImxvY2FsZSIsIm9wdGlvbnMiLCJ2YWx1ZSIsInNlbGVjdGVkIiwiYWZ0ZXIiLCJuZXh0Iiwic29ydEJ1dHRvbiIsImNoaWxkcmVuIiwibGFzdCIsImRpdkdyb3VwIiwiZHJvcGRvd25CdXR0b24iLCJkcm9wZG93bk1lbnUiLCJjc3MiLCJwYXJlbnQiLCJjcmVhdGVNZW51IiwiaGVhZGVyIiwic29ydEFzYyIsInNvcnREZXNjIiwicG9wb3ZlciIsInNlYXJjaCIsInNlYXJjaFZhbHVlIiwidG9Mb3dlckNhc2UiLCJzZWxlY3RBbGxEaXYiLCJvIiwiaW5kZXhPZiIsImJvZHkiLCJzZWxlY3RBbGxDaGVja2JveCIsInNlbGVjdEFsbExhYmVsIiwiZSIsImNsaWNrRXZlbnQiLCJjb250YWlucyIsInJlbGF0ZWRUYXJnZXQiLCJwYXJlbnROb2RlIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQSxJQUFNQSxDQUFDLEdBQUdDLG1CQUFPLENBQUMsb0RBQUQsQ0FBakI7O0FBQ0EsSUFBTUMsTUFBTSxHQUFHRCxtQkFBTyxDQUFDLDhEQUFELENBQXRCOztBQUVBQSxtQkFBTyxDQUFDLHdEQUFELENBQVAsQyxDQUNBO0FBQ0E7QUFDQTs7O0FBRUFBLG1CQUFPLENBQUMsNEVBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyxnRUFBRCxDQUFQOztBQUdBRCxDQUFDLENBQUNHLFFBQUQsQ0FBRCxDQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFFNUI7Ozs7Ozs7Ozs7QUFXQUosR0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JLLFdBQXRCO0FBRUFMLEdBQUMsQ0FBQyxnQkFBRCxDQUFELENBQW9CTSxJQUFwQjtBQUNBTixHQUFDLENBQUMsZ0JBQUQsQ0FBRCxDQUFvQk0sSUFBcEI7QUFDQU4sR0FBQyxDQUFDLGtCQUFELENBQUQsQ0FBc0JNLElBQXRCO0FBQ0FOLEdBQUMsQ0FBQyxlQUFELENBQUQsQ0FBbUJNLElBQW5CO0FBRUEsTUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBRUFQLEdBQUMsQ0FBQyxPQUFELENBQUQsQ0FBV1EsSUFB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LENBQUQsQ0FBZTJCLEdBQWYsQ0FBbUJ1QyxNQUFNLENBQUNELElBQTFCO0FBQ0FqRSxPQUFDLENBQUMsVUFBRCxDQUFELENBQWMyQixHQUFkLENBQWtCLEVBQWxCO0FBQ0E0QixZQUFNO0FBQ047O0FBRURXLFVBQU0sQ0FBQ2MsWUFBUCxDQUFvQkUsTUFBcEIsR0FBNkJ2RSxFQUE3QixDQUFnQyxrQkFBaEMsRUFBb0QsVUFBVXNGLENBQVYsRUFBYTtBQUNoRSxVQUFHQSxDQUFDLENBQUNDLFVBQUYsSUFBZ0JsRyxDQUFDLENBQUNtRyxRQUFGLENBQVdGLENBQUMsQ0FBQ0csYUFBRixDQUFnQkMsVUFBM0IsRUFBdUNKLENBQUMsQ0FBQ0MsVUFBRixDQUFhSSxNQUFwRCxDQUFuQixFQUFnRjtBQUMvRUwsU0FBQyxDQUFDbEUsY0FBRjtBQUNBLE9BRkQsTUFFTztBQUNObUMsY0FBTSxDQUFDYyxZQUFQLENBQW9CNUQsS0FBcEI7QUFDQTtBQUNELEtBTkQ7QUFRQTtBQUVELENBelNELEVBeVNHcEIsQ0F6U0gsRSIsImZpbGUiOiJkb2N1bWVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuY29uc3QgUG9wcGVyID0gcmVxdWlyZSgncG9wcGVyLmpzJyk7XHJcblxyXG5yZXF1aXJlKCcuLi9jc3MvZG9jdW1lbnQuc2NzcycpO1xyXG4vL3JlcXVpcmUoJ2Jvb3RzdHJhcC1zZWxlY3QnKTtcclxuLy9yZXF1aXJlKCcuL2Jvb3RzdHJhcC1zZWxlY3QvYm9vdHN0cmFwLXNlbGVjdC5qcycpO1xyXG4vL3JlcXVpcmUoJy4vYm9vdHN0cmFwLXNlbGVjdC9kZWZhdWx0cy1mcl9GUi5qcycpO1xyXG5cclxucmVxdWlyZSgnLi9tdWx0aXNlbGVjdC9tdWx0aXNlbGVjdC5qcycpO1xyXG5yZXF1aXJlKCcuL211bHRpc2VsZWN0L2ZyX0ZSLmpzJyk7XHJcblxyXG5cclxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XHJcblx0XHJcblx0LypcclxuXHQkLmZuLnNlbGVjdHBpY2tlci5Db25zdHJ1Y3Rvci5Cb290c3RyYXBWZXJzaW9uID0gJzQnO1xyXG5cdFxyXG5cdCQoXCJzZWxlY3RbbXVsdGlwbGVdXCIpLnNlbGVjdHBpY2tlcih7XHJcblx0XHRoZWFkZXI6IHRydWUsXHJcblx0XHRsaXZlU2VhcmNoOnRydWUsXHJcblx0XHRzdHlsZTogJ2J0bi1wcmltYXJ5JyxcclxuXHRcdGFjdGlvbnNCb3g6IHRydWUsXHJcblx0fSk7XHJcblx0Ki9cclxuXHRcclxuXHQkKFwic2VsZWN0W211bHRpcGxlXVwiKS5tdWx0aXNlbGVjdCgpO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9lZGl0JykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9tb3ZlJykuaGlkZSgpO1xyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0JCgnI3ZlcnNpb25fbWVudScpLmhpZGUoKTtcdFx0XHJcblx0XHJcblx0dmFyIGNoZWNrYm94ZXMgPSBbXTtcclxuXHRcclxuXHQkKCd0YWJsZScpLmZpbmQoJ2lucHV0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFxyXG5cdFx0aWYgKCQodGhpcykucHJvcCgndHlwZScpID09ICdjaGVja2JveCcpIHtcclxuXHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGxpbmVDaGVja2VkKTtcclxuXHRcdFx0aWYgKCQodGhpcykucHJvcCgnaWQnKSAhPSAnY2hlY2tfYWxsJykge1xyXG5cdFx0XHRcdGNoZWNrYm94ZXMucHVzaCgkKHRoaXMpKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJ3RhYmxlJykuZmluZCgnYScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHVybCA6ICQodGhpcykuZGF0YSgndXJsJyksXHJcblx0XHRcdHR5cGU6ICdHRVQnLFxyXG5cdFx0XHRcclxuXHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0JCgnLm1vZGFsLWJvZHknKS5lbXB0eSgpO1xyXG5cdFx0XHRcdCQoJy5tb2RhbC1ib2R5JykuaHRtbChyZXN1bHQpO1xyXG5cdFx0XHR9LFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHR9KTtcclxuXHRcclxuXHRmdW5jdGlvbiBsaW5lQ2hlY2tlZCgpIHtcclxuXHRcdFxyXG5cdFx0dmFyIGNoZWNrZWQgPSBmYWxzZTtcclxuXHRcdHZhciB1bmNoZWNrZWQgPSBmYWxzZTtcclxuXHJcblx0XHRcclxuXHRcdGlmICgkKHRoaXMpLnByb3AoJ2lkJykgPT0gJ2NoZWNrX2FsbCcpIHtcclxuXHRcdFx0XHJcblx0XHRcdCQoJ3RhYmxlJykuZmluZCgnaW5wdXQnKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdGNoZWNrZWQgPSAkKCcjY2hlY2tfYWxsJykuaXMoJzpjaGVja2VkJyk7XHJcblx0XHRcdFx0dW5jaGVja2VkID0gIWNoZWNrZWQ7XHJcblx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdFxyXG5cdFx0XHQkKCd0YWJsZScpLmZpbmQoJ2lucHV0JykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5wcm9wKCdpZCcpICE9ICdjaGVja19hbGwnKSB7XHJcblx0XHRcdFx0XHRpZiAoJCh0aGlzKS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRjaGVja2VkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHVuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChjaGVja2VkICYmIHVuY2hlY2tlZCkge1xyXG5cdFx0XHRcdFx0XHQkKCcjY2hlY2tfYWxsJykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0JCgnI2NoZWNrX2FsbCcpLnByb3AoJ2luZGV0ZXJtaW5hdGUnLCBmYWxzZSk7XHJcblx0XHRcdFx0XHRcdCQoJyNjaGVja19hbGwnKS5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0aWYgKGNoZWNrZWQpIHtcclxuXHRcdFx0dmFyIGFycmF5ID0gW107XHJcblx0XHRcdGZvciAoY29uc3QgY2hlY2tib3ggb2YgY2hlY2tib3hlcykge1xyXG5cdFx0XHRcdGlmIChjaGVja2JveC5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0YXJyYXkucHVzaCgndltdPScgKyBjaGVja2JveC52YWwoKSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdCQoJyN2ZXJzaW9uJykudmFsKGFycmF5LmpvaW4oJyYnKSk7XHJcblx0XHRcdFxyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZWRpdCcpLnNob3coKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X21vdmUnKS5zaG93KCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9kZWxldGUnKS5zaG93KCk7XHJcblx0XHRcdCQoJyN2ZXJzaW9uX21lbnUnKS5zaG93KCk7XHRcclxuXHRcdH0gZWxzZSBpZih1bmNoZWNrZWQpIHtcclxuXHRcdFx0JCgnI3ZlcnNpb24nKS52YWwoJycpO1xyXG5cdFx0XHQkKCcjZG9jdW1lbnRfZWRpdCcpLmhpZGUoKTtcclxuXHRcdFx0JCgnI2RvY3VtZW50X21vdmUnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyNkb2N1bWVudF9kZWxldGUnKS5oaWRlKCk7XHJcblx0XHRcdCQoJyN2ZXJzaW9uX21lbnUnKS5oaWRlKCk7XHRcclxuXHRcdH1cclxuXHR9XHJcblx0XHJcblx0JCgnI2RvY3VtZW50X2VkaXQnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJyNmb3JtJykucHJvcCgnYWN0aW9uJywgJCh0aGlzKS5kYXRhKCdsaW5rJykpO1xyXG5cdFx0JCgnI2Zvcm0nKS5zdWJtaXQoKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjZG9jdW1lbnRfbW92ZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cdFx0JCgnI2Zvcm0nKS5wcm9wKCdhY3Rpb24nLCAkKHRoaXMpLmRhdGEoJ2xpbmsnKSk7XHJcblx0XHQkKCcjZm9ybScpLnN1Ym1pdCgpO1xyXG5cdH0pO1xyXG5cdFxyXG5cdCQoJyNkb2N1bWVudF9kZWxldGUnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJyNmb3JtJykucHJvcCgnYWN0aW9uJywgJCh0aGlzKS5kYXRhKCdsaW5rJykpO1xyXG5cdFx0JCgnI2Zvcm0nKS5zdWJtaXQoKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdmVyc2lvbl9uZXcnKS5vbignY2xpY2snLCBmdW5jdGlvbihldmVudCkge1xyXG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHRcdCQoJyNmb3JtJykucHJvcCgnYWN0aW9uJywgJCh0aGlzKS5kYXRhKCdsaW5rJykpO1xyXG5cdFx0JCgnI2Zvcm0nKS5zdWJtaXQoKTtcclxuXHR9KTtcclxuXHRcclxuXHQkKCcjdmVyc2lvbl9lZGl0Jykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKCcjZm9ybScpLnByb3AoJ2FjdGlvbicsICQodGhpcykuZGF0YSgnbGluaycpKTtcclxuXHRcdCQoJyNmb3JtJykuc3VibWl0KCk7XHJcblx0fSk7XHJcblx0XHJcblx0JCgnI3ZlcnNpb25fZGVsZXRlJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHQkKCcjZm9ybScpLnByb3AoJ2FjdGlvbicsICQodGhpcykuZGF0YSgnbGluaycpKTtcclxuXHRcdCQoJyNmb3JtJykuc3VibWl0KCk7XHJcblx0fSk7XHJcblx0XHJcblx0LypcclxuXHRjb25zb2xlLmxvZygkLmZuLnNlbGVjdHBpY2tlci5Db25zdHJ1Y3Rvci5wcm90b3R5cGUuY3JlYXRlRHJvcGRvd24pO1xyXG5cdFxyXG5cdCQuZm4uc2VsZWN0cGlja2VyLkNvbnN0cnVjdG9yLnByb3RvdHlwZS5jcmVhdGVEcm9wZG93biA9IGZ1bmN0aW9uICgpIHtcclxuXHQgIC8vIE9wdGlvbnNcclxuXHQgIC8vIElmIHdlIGFyZSBtdWx0aXBsZSBvciBzaG93VGljayBvcHRpb24gaXMgc2V0LCB0aGVuIGFkZCB0aGUgc2hvdy10aWNrIGNsYXNzXHJcblx0ICB2YXIgc2hvd1RpY2sgPSAodGhpcy5tdWx0aXBsZSB8fCB0aGlzLm9wdGlvbnMuc2hvd1RpY2spID8gJyBzaG93LXRpY2snIDogJycsXHJcblx0ICAgICAgbXVsdGlzZWxlY3RhYmxlID0gdGhpcy5tdWx0aXBsZSA/ICcgYXJpYS1tdWx0aXNlbGVjdGFibGU9XCJ0cnVlXCInIDogJycsXHJcblx0ICAgICAgaW5wdXRHcm91cCA9ICcnLFxyXG5cdCAgICAgIGF1dG9mb2N1cyA9IHRoaXMuYXV0b2ZvY3VzID8gJyBhdXRvZm9jdXMnIDogJyc7XHJcblx0XHJcblx0ICBpZiAodmVyc2lvbi5tYWpvciA8IDQgJiYgdGhpcy4kZWxlbWVudC5wYXJlbnQoKS5oYXNDbGFzcygnaW5wdXQtZ3JvdXAnKSkge1xyXG5cdCAgICBpbnB1dEdyb3VwID0gJyBpbnB1dC1ncm91cC1idG4nO1xyXG5cdCAgfVxyXG5cdFxyXG5cdCAgLy8gRWxlbWVudHNcclxuXHQgIHZhciBkcm9wLFxyXG5cdCAgICAgIGhlYWRlciA9ICcnLFxyXG5cdCAgICAgIHNlYXJjaGJveCA9ICcnLFxyXG5cdCAgICAgIGFjdGlvbnNib3ggPSAnJyxcclxuXHQgICAgICBkb25lYnV0dG9uID0gJyc7XHJcblx0XHJcblx0ICBpZiAodGhpcy5vcHRpb25zLmhlYWRlcikge1xyXG5cdCAgICBoZWFkZXIgPVxyXG5cdCAgICAgICc8ZGl2IGNsYXNzPVwiJyArIGNsYXNzTmFtZXMuUE9QT1ZFUkhFQURFUiArICdcIj4nICtcclxuXHQgICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImNsb3NlXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvYnV0dG9uPicgK1xyXG5cdCAgICAgICAgICB0aGlzLm9wdGlvbnMuaGVhZGVyICtcclxuXHQgICAgICAnPC9kaXY+JztcclxuXHQgIH1cclxuXHRcclxuXHQgIGlmICh0aGlzLm9wdGlvbnMubGl2ZVNlYXJjaCkge1xyXG5cdFx0ICBcclxuXHQgICAgc2VhcmNoYm94ID1cclxuXHQgICAgICAnPGRpdiBjbGFzcz1cImJzLXNlYXJjaGJveFwiPicgK1xyXG5cdCAgICAgICAgJzxpbnB1dCB0eXBlPVwic2VhcmNoXCIgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIiBhdXRvY29tcGxldGU9XCJvZmZcIicgK1xyXG5cdCAgICAgICAgICAoXHJcblx0ICAgICAgICAgICAgdGhpcy5vcHRpb25zLmxpdmVTZWFyY2hQbGFjZWhvbGRlciA9PT0gbnVsbCA/ICcnXHJcblx0ICAgICAgICAgICAgOlxyXG5cdCAgICAgICAgICAgICcgcGxhY2Vob2xkZXI9XCInICsgaHRtbEVzY2FwZSh0aGlzLm9wdGlvbnMubGl2ZVNlYXJjaFBsYWNlaG9sZGVyKSArICdcIidcclxuXHQgICAgICAgICAgKSArXHJcblx0ICAgICAgICAgICcgcm9sZT1cImNvbWJvYm94XCIgYXJpYS1sYWJlbD1cIlNlYXJjaFwiIGFyaWEtY29udHJvbHM9XCInICsgdGhpcy5zZWxlY3RJZCArICdcIiBhcmlhLWF1dG9jb21wbGV0ZT1cImxpc3RcIj4nICtcclxuXHQgICAgICAnPC9kaXY+JztcclxuXHQgIH1cclxuXHRcclxuICBpZiAodGhpcy5tdWx0aXBsZSAmJiB0aGlzLm9wdGlvbnMuYWN0aW9uc0JveCkge1xyXG4gICAgYWN0aW9uc2JveCA9XHJcbiAgICAgICAgJzxkaXYgY2xhc3M9XCJicy1hY3Rpb25zYm94XCI+JyArXHJcbiAgICAgICAgICAnPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tZ3JvdXAtc20gYnRuLWJsb2NrXCI+JyArXHJcbiAgICAgICAgICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFjdGlvbnMtYnRuIGJzLXNlbGVjdC1hbGwgYnRuICcgKyBjbGFzc05hbWVzLkJVVFRPTkNMQVNTICsgJ1wiPicgK1xyXG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5zZWxlY3RBbGxUZXh0ICtcclxuICAgICAgICAgICAgJzwvYnV0dG9uPicgK1xyXG4gICAgICAgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJhY3Rpb25zLWJ0biBicy1kZXNlbGVjdC1hbGwgYnRuICcgKyBjbGFzc05hbWVzLkJVVFRPTkNMQVNTICsgJ1wiPicgK1xyXG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucy5kZXNlbGVjdEFsbFRleHQgK1xyXG4gICAgICAgICAgICAnPC9idXR0b24+JyArXHJcbiAgICAgICAgICAnPC9kaXY+JyArXHJcbiAgICAgICAgJzwvZGl2Pic7XHJcbiAgfVxyXG5cdFxyXG5cdCAgaWYgKHRoaXMubXVsdGlwbGUgJiYgdGhpcy5vcHRpb25zLmRvbmVCdXR0b24pIHtcclxuXHQgICAgZG9uZWJ1dHRvbiA9XHJcblx0ICAgICAgJzxkaXYgY2xhc3M9XCJicy1kb25lYnV0dG9uXCI+JyArXHJcblx0ICAgICAgICAnPGRpdiBjbGFzcz1cImJ0bi1ncm91cCBidG4tYmxvY2tcIj4nICtcclxuXHQgICAgICAgICAgJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSAnICsgY2xhc3NOYW1lcy5CVVRUT05DTEFTUyArICdcIj4nICtcclxuXHQgICAgICAgICAgICB0aGlzLm9wdGlvbnMuZG9uZUJ1dHRvblRleHQgK1xyXG5cdCAgICAgICAgICAnPC9idXR0b24+JyArXHJcblx0ICAgICAgICAnPC9kaXY+JyArXHJcblx0ICAgICAgJzwvZGl2Pic7XHJcblx0ICB9XHJcblx0XHJcblx0ICBkcm9wID1cclxuXHQgICAgJzxkaXYgY2xhc3M9XCJkcm9wZG93biBib290c3RyYXAtc2VsZWN0JyArIHNob3dUaWNrICsgaW5wdXRHcm91cCArICdcIj4nICtcclxuXHQgICAgICAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCInICsgdGhpcy5vcHRpb25zLnN0eWxlQmFzZSArICcgZHJvcGRvd24tdG9nZ2xlXCIgJyArICh0aGlzLm9wdGlvbnMuZGlzcGxheSA9PT0gJ3N0YXRpYycgPyAnZGF0YS1kaXNwbGF5PVwic3RhdGljXCInIDogJycpICsgJ2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIicgKyBhdXRvZm9jdXMgKyAnIHJvbGU9XCJjb21ib2JveFwiIGFyaWEtb3ducz1cIicgKyB0aGlzLnNlbGVjdElkICsgJ1wiIGFyaWEtaGFzcG9wdXA9XCJsaXN0Ym94XCIgYXJpYS1leHBhbmRlZD1cImZhbHNlXCI+JyArXHJcblx0ICAgICAgICAnPGRpdiBjbGFzcz1cImZpbHRlci1vcHRpb25cIj4nICtcclxuXHQgICAgICAgICAgJzxkaXYgY2xhc3M9XCJmaWx0ZXItb3B0aW9uLWlubmVyXCI+JyArXHJcblx0ICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJmaWx0ZXItb3B0aW9uLWlubmVyLWlubmVyXCI+PC9kaXY+JyArXHJcblx0ICAgICAgICAgICc8L2Rpdj4gJyArXHJcblx0ICAgICAgICAnPC9kaXY+JyArXHJcblx0ICAgICAgICAoXHJcblx0ICAgICAgICAgIHZlcnNpb24ubWFqb3IgPT09ICc0JyA/ICcnXHJcblx0ICAgICAgICAgIDpcclxuXHQgICAgICAgICAgJzxzcGFuIGNsYXNzPVwiYnMtY2FyZXRcIj4nICtcclxuXHQgICAgICAgICAgICB0aGlzLm9wdGlvbnMudGVtcGxhdGUuY2FyZXQgK1xyXG5cdCAgICAgICAgICAnPC9zcGFuPidcclxuXHQgICAgICAgICkgK1xyXG5cdCAgICAgICc8L2J1dHRvbj4nICtcclxuXHQgICAgICAnPGRpdiBjbGFzcz1cIicgKyBjbGFzc05hbWVzLk1FTlUgKyAnICcgKyAodmVyc2lvbi5tYWpvciA9PT0gJzQnID8gJycgOiBjbGFzc05hbWVzLlNIT1cpICsgJ1wiPicgK1xyXG5cdCAgICAgICAgaGVhZGVyICtcclxuXHQgICAgICAgIHNlYXJjaGJveCArXHJcblx0ICAgICAgICBhY3Rpb25zYm94ICtcclxuXHQgICAgICAgICc8ZGl2IGNsYXNzPVwiaW5uZXIgJyArIGNsYXNzTmFtZXMuU0hPVyArICdcIiByb2xlPVwibGlzdGJveFwiIGlkPVwiJyArIHRoaXMuc2VsZWN0SWQgKyAnXCIgdGFiaW5kZXg9XCItMVwiICcgKyBtdWx0aXNlbGVjdGFibGUgKyAnPicgK1xyXG5cdCAgICAgICAgICAgICc8dWwgY2xhc3M9XCInICsgY2xhc3NOYW1lcy5NRU5VICsgJyBpbm5lciAnICsgKHZlcnNpb24ubWFqb3IgPT09ICc0JyA/IGNsYXNzTmFtZXMuU0hPVyA6ICcnKSArICdcIiByb2xlPVwicHJlc2VudGF0aW9uXCI+JyArXHJcblx0ICAgICAgICAgICAgJzwvdWw+JyArXHJcblx0ICAgICAgICAnPC9kaXY+JyArXHJcblx0ICAgICAgICBkb25lYnV0dG9uICtcclxuXHQgICAgICAnPC9kaXY+JyArXHJcblx0ICAgICc8L2Rpdj4nO1xyXG5cdFxyXG5cdCAgcmV0dXJuICQoZHJvcCk7XHJcblx0fTtcclxuXHRcclxuXHRjb25zb2xlLmxvZygkLmZuLnNlbGVjdHBpY2tlci5Db25zdHJ1Y3Rvci5wcm90b3R5cGUuY3JlYXRlRHJvcGRvd24pO1xyXG5cdCovXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cdFxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgXHJcbiIsIihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xyXG5cdGlmIChyb290ID09PSB1bmRlZmluZWQgJiYgd2luZG93ICE9PSB1bmRlZmluZWQpIHJvb3QgPSB3aW5kb3c7XHJcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xyXG5cdFx0Ly8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlIHVubGVzcyBhbWRNb2R1bGVJZCBpcyBzZXRcclxuXHRcdGRlZmluZShbXCJqcXVlcnlcIl0sIGZ1bmN0aW9uIChhMCkge1xyXG5cdFx0XHRyZXR1cm4gKGZhY3RvcnkoYTApKTtcclxuXHRcdH0pO1xyXG5cdH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcclxuXHRcdC8vIE5vZGUuIERvZXMgbm90IHdvcmsgd2l0aCBzdHJpY3QgQ29tbW9uSlMsIGJ1dFxyXG5cdFx0Ly8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXHJcblx0XHQvLyBsaWtlIE5vZGUuXHJcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcImpxdWVyeVwiKSk7XHJcblx0fSBlbHNlIHtcclxuXHRcdGZhY3Rvcnkocm9vdFtcImpRdWVyeVwiXSk7XHJcblx0fVxyXG59KHRoaXMsIGZ1bmN0aW9uIChqUXVlcnkpIHtcclxuXHRcclxuXHQoZnVuY3Rpb24gKCQpIHtcclxuXHRcdC8qXHJcblx0XHQkLmZuLm11bHRpc2VsZWN0LmRlZmF1bHRzID0ge1xyXG5cdFx0ICAgIG5vbmVTZWxlY3RlZFRleHQ6ICdBdWN1bmUgc8OpbGVjdGlvbicsXHJcblx0XHQgICAgbm9uZVJlc3VsdHNUZXh0OiAnQXVjdW4gcsOpc3VsdGF0IHBvdXIgezB9JyxcclxuXHRcdCAgICBtdWx0aXBsZVNlcGFyYXRvcjogJywgJyxcclxuXHRcdCAgICBzZWxlY3RBbGxUZXh0OiAnVG91dCBzw6lsZWN0aW9ubmVyJyxcclxuXHRcdCAgICBmaWx0ZXJUZXh0OiAnRmlsdHJlcidcclxuXHRcdH07XHJcblx0XHQqL1xyXG5cdH0pKGpRdWVyeSk7XHJcblx0XHJcbn0pKTsiLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcblxyXG4oZnVuY3Rpb24gKCkge1xyXG5cdFxyXG5cdHZhciBjcmVhdGUgPSB7XHJcblx0XHRkaXY6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcclxuXHRcdFx0XHJcblx0XHRcdDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGlucHV0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0XHQuYXR0cigndHlwZScsICd0ZXh0JylcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20nKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRjaGVja2JveDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpXHJcblx0XHRcdFx0LmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtaW5wdXQnKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRsYWJlbDogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjdXN0b20tY29udHJvbC1sYWJlbCB3LTEwMCB0ZXh0LW5vd3JhcCcpXHJcblx0XHRcdDtcclxuXHRcdH0sXHJcblx0XHRcclxuXHRcdGJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKVxyXG5cdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXByaW1hcnknKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRzbWFsbEJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKVxyXG5cdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXNtIG14LTEnKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRjbG9zZUJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpKVxyXG5cdFx0XHRcdC5hdHRyKCd0eXBlJywgJ2J1dHRvbicpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdjbG9zZScpXHJcblx0XHRcdFx0LmFwcGVuZCgnPHNwYW4+JnRpbWVzOzwvc3Bhbj4nKVxyXG5cdFx0XHQ7XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0fTtcclxuXHRcclxuXHR2YXIgdGV4dCA9IHtcclxuXHQgICAgbm9uZVNlbGVjdGVkOiAnTm9uZSBzZWxlY3RlZCcsXHJcblx0ICAgIG11bHRpcGxlU2VwYXJhdG9yOiAnLCAnLFxyXG5cdCAgICBzZWxlY3RBbGw6ICdTZWxlY3QgYWxsJyxcclxuXHQgICAgZmlsdGVyOiAnRmlsdGVyJ1xyXG5cdH07XHJcblx0XHJcblx0dmFyIGljb24gPSB7XHJcblx0XHRhcnJvd1VwOlxyXG5cdFx0XHQnPHN2ZyBjbGFzcz1cImJpIGJpLWFycm93LWJhci11cFwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXHJcblx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjM1NCA1Ljg1NGEuNS41IDAgMDAwLS43MDhsLTMtM2EuNS41IDAgMDAtLjcwOCAwbC0zIDNhLjUuNSAwIDEwLjcwOC43MDhMOCAzLjIwN2wyLjY0NiAyLjY0N2EuNS41IDAgMDAuNzA4IDB6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCAxMGEuNS41IDAgMDAuNS0uNVYzYS41LjUgMCAwMC0xIDB2Ni41YS41LjUgMCAwMC41LjV6bS00LjggMS42YzAtLjIyLjE4LS40LjQtLjRoOC44YS40LjQgMCAwMTAgLjhIMy42YS40LjQgMCAwMS0uNC0uNHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQnPC9zdmc+JyxcclxuXHRcdFx0XHJcblx0XHRhcnJvd0Rvd246XHJcblx0XHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1hcnJvdy1iYXItZG93blwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXHJcblx0XHRcdCAgXHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS4zNTQgMTAuMTQ2YS41LjUgMCAwMTAgLjcwOGwtMyAzYS41LjUgMCAwMS0uNzA4IDBsLTMtM2EuNS41IDAgMDEuNzA4LS43MDhMOCAxMi43OTNsMi42NDYtMi42NDdhLjUuNSAwIDAxLjcwOCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdCAgXHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04IDZhLjUuNSAwIDAxLjUuNVYxM2EuNS41IDAgMDEtMSAwVjYuNUEuNS41IDAgMDE4IDZ6TTIgMy41YS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMTAgMWgtMTFhLjUuNSAwIDAxLS41LS41elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcclxuXHR9O1xyXG5cdFxyXG5cdCQuZm4uZXh0ZW5kKHtcclxuXHRcdG11bHRpc2VsZWN0OiBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdCQodGhpcykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRpbml0KHRoaXMpO1xyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHRcclxuXHRcclxuXHR9KTtcclxuXHRcclxuXHRmdW5jdGlvbiBpbml0KHRoYXQpIHtcclxuXHRcdFxyXG5cdFx0aWYgKG4gPSAkKHRoYXQpLnByb3AoJ25hbWUnKS5tYXRjaCgvKC4rKVxcW1xcXSQvaSkpIHtcclxuXHRcdFx0dmFyIG5hbWUgPSBuWzFdO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0XHR2YXIgc2VsZWN0ID0ge1xyXG5cdFx0XHRlbGVtZW50OiAkKHRoYXQpLFxyXG5cdFx0XHRuYW1lOiBuYW1lLFxyXG5cdFx0XHR0aXRsZTogJCh0aGF0KS5kYXRhKCd0aXRsZScpLFxyXG5cdFx0XHRsb2NhbGU6ICQodGhhdCkuZGF0YSgnbG9jYWxlJyksXHJcblx0XHRcdG9wdGlvbnM6IFtdLFxyXG5cdFx0fTtcclxuXHRcdFxyXG5cdFx0JCh0aGF0KS5maW5kKCdvcHRpb24nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRzZWxlY3Qub3B0aW9ucy5wdXNoKHtcclxuXHRcdFx0XHRlbGVtZW50OiAkKHRoaXMpLFxyXG5cdFx0XHRcdHZhbHVlOiAkKHRoaXMpLmF0dHIoJ3ZhbHVlJyksXHJcblx0XHRcdFx0dGV4dDogJCh0aGlzKS50ZXh0KCksXHJcblx0XHRcdFx0c2VsZWN0ZWQ6ICQodGhpcykuYXR0cignc2VsZWN0ZWQnKSxcclxuXHRcdFx0fSk7XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JCh0aGF0KS5oaWRlKCk7XHJcblx0XHRcclxuXHRcdHZhciBkaXYgPSAkKHRoYXQpLmFmdGVyKGNyZWF0ZS5kaXYpLm5leHQoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0bi1ncm91cCBjb2wnKVxyXG5cdFx0XHQuYXR0cigncm9sZScsICdncm91cCcpXHJcblx0XHQ7XHJcblx0XHRcclxuXHRcdHNlbGVjdC5zb3J0QnV0dG9uID0gZGl2LmFwcGVuZChjcmVhdGUuYnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYXBwZW5kKHNlbGVjdC50aXRsZSlcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0dmFyIGRpdkdyb3VwID0gZGl2LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0bi1ncm91cCcpXHJcblx0XHRcdC5hdHRyKCdyb2xlJywgJ2dyb3VwJylcclxuXHRcdDtcclxuXHRcdFxyXG5cdFx0c2VsZWN0LmRyb3Bkb3duQnV0dG9uID0gZGl2R3JvdXAuYXBwZW5kKGNyZWF0ZS5idXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hdHRyKCdpZCcsIHNlbGVjdC5uYW1lICsgJ19iJylcclxuXHRcdFx0LmFkZENsYXNzKCdkcm9wZG93bi10b2dnbGUnKVxyXG5cdFx0XHQuYXR0cignZGF0YS10b2dnbGUnLCAnZHJvcGRvd24nKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRzZWxlY3QuZHJvcGRvd25NZW51ID0gZGl2R3JvdXAuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdC5hZGRDbGFzcygnZHJvcGRvd24tbWVudSBkcm9wZG93bi1tZW51LXJpZ2h0JylcclxuXHRcdFx0LmNzcygnbWluLXdpZHRoJywgJzE1ZW0nKVxyXG5cdFx0O1xyXG5cdFx0XHJcblx0XHRzZWxlY3QuZHJvcGRvd25NZW51LnBhcmVudCgpLm9uKCdzaG93LmJzLmRyb3Bkb3duJywgY3JlYXRlTWVudSk7XHJcblx0XHRcclxuXHRcdFxyXG5cdFx0ZnVuY3Rpb24gY3JlYXRlTWVudSgpIHtcclxuXHRcclxuXHRcdFx0c2VsZWN0LmRyb3Bkb3duTWVudS5lbXB0eSgpO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGhlYWRlciA9IHNlbGVjdC5kcm9wZG93bk1lbnUuYXBwZW5kKGNyZWF0ZS5kaXYpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LmFkZENsYXNzKCd0ZXh0LWNlbnRlciBib3JkZXItYm90dG9tIGJvcmRlci1kYXJrIHBiLTIgcHgtMScpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGhlYWRlci5hcHBlbmQoY3JlYXRlLnNtYWxsQnV0dG9uKS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hcHBlbmQoaWNvbi5hcnJvd1VwKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncHgtMiAnICsgKCQoJyNzb3J0QXNjJykudmFsKCkgPT0gc2VsZWN0Lm5hbWU/J2J0bi1vdXRsaW5lLXByaW1hcnkgYmctZGFyayB0ZXh0LXdoaXRlJzonYnRuLXByaW1hcnknKSlcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgc29ydEFzYylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0aGVhZGVyLmFwcGVuZChjcmVhdGUuc21hbGxCdXR0b24pLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0LnRleHQodGV4dC5maWx0ZXIpXHJcblx0XHRcdFx0LmFkZENsYXNzKCdweC0zJylcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZmlsdGVyKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRoZWFkZXIuYXBwZW5kKGNyZWF0ZS5zbWFsbEJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXBwZW5kKGljb24uYXJyb3dEb3duKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncHgtMiAnICsgKCQoJyNzb3J0RGVzYycpLnZhbCgpID09IHNlbGVjdC5uYW1lPydidG4tb3V0bGluZS1wcmltYXJ5IGJnLWRhcmsgdGV4dC13aGl0ZSc6J2J0bi1wcmltYXJ5JykpXHJcblx0XHRcdFx0Lm9uKCdjbGljaycsIHNvcnREZXNjKVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHRoZWFkZXIuYXBwZW5kKGNyZWF0ZS5jbG9zZUJ1dHRvbikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7IFxyXG5cdFx0XHRcdFx0c2VsZWN0LmRyb3Bkb3duQnV0dG9uLnBvcG92ZXIoJ2hpZGUnKTtcclxuXHRcdFx0XHR9KVxyXG5cdFx0XHQ7XHJcblx0XHRcdFxyXG5cdFx0XHR2YXIgc2VhcmNoID0gc2VsZWN0LmRyb3Bkb3duTWVudS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ3RleHQtY2VudGVyIGJvcmRlci1ib3R0b20gYm9yZGVyLWRhcmsgcC0yJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcclxuXHRcdFx0c2VhcmNoLmFwcGVuZChjcmVhdGUuaW5wdXQpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0Lm9uKCdpbnB1dCcsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0dmFyIHNlYXJjaFZhbHVlID0gJCh0aGlzKS52YWwoKS50b0xvd2VyQ2FzZSgpXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChzZWFyY2hWYWx1ZSA9PSAnJykge1xyXG5cdFx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsRGl2LnNob3coKTtcclxuXHRcdFx0XHRcdFx0Zm9yIChjb25zdCBvIG9mIHNlbGVjdC5vcHRpb25zKSB7XHJcblx0XHRcdFx0XHRcdFx0by5kaXYuc2hvdygpO1xyXG5cdFx0XHRcdFx0XHRcdG8uY2hlY2tib3gucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0c2VsZWN0LnNlbGVjdEFsbERpdi5oaWRlKCk7XHJcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChvLnRleHQudG9Mb3dlckNhc2UoKS5pbmRleE9mKHNlYXJjaFZhbHVlKSA9PSAtMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0by5kaXYuaGlkZSgpO1xyXG5cdFx0XHRcdFx0XHRcdFx0by5jaGVja2JveC5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRvLmRpdi5zaG93KCk7XHJcblx0XHRcdFx0XHRcdFx0XHRvLmNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHR9XHRcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGJvZHkgPSBzZWxlY3QuZHJvcGRvd25NZW51LmFwcGVuZChjcmVhdGUuZGl2KS5jaGlsZHJlbigpLmxhc3QoKVxyXG5cdFx0XHRcdC5hZGRDbGFzcygncHgtMiBwdC0zJylcclxuXHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRzZWxlY3Quc2VsZWN0QWxsRGl2ID0gYm9keS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCcpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdHNlbGVjdC5zZWxlY3RBbGxDaGVja2JveCA9IHNlbGVjdC5zZWxlY3RBbGxEaXYuYXBwZW5kKGNyZWF0ZS5jaGVja2JveCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfc2VsZWN0QWxsJylcclxuXHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR2YXIgY2hlY2tlZCA9ICQodGhpcykuaXMoJzpjaGVja2VkJyk7XHJcblx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcdFxyXG5cdFx0XHRcdFx0XHRvLmNoZWNrYm94LnByb3AoJ2NoZWNrZWQnLCBjaGVja2VkKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdHNlbGVjdC5zZWxlY3RBbGxMYWJlbCA9IHNlbGVjdC5zZWxlY3RBbGxEaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHQuYXR0cignZm9yJywgc2VsZWN0Lm5hbWUgKyAnX3NlbGVjdEFsbCcpXHJcblx0XHRcdFx0LnRleHQodGV4dC5zZWxlY3RBbGwpXHJcblx0XHRcdDtcclxuXHRcdFx0XHJcblx0XHRcdGZvciAoY29uc3QgbyBvZiBzZWxlY3Qub3B0aW9ucykge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdG8uZGl2ID0gYm9keS5hcHBlbmQoY3JlYXRlLmRpdikuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wgY3VzdG9tLWNoZWNrYm94JylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0by5jaGVja2JveCA9IG8uZGl2LmFwcGVuZChjcmVhdGUuY2hlY2tib3gpLmNoaWxkcmVuKCkubGFzdCgpXHJcblx0XHRcdFx0XHQuYXR0cignaWQnLCBzZWxlY3QubmFtZSArICdfJyArIG8udmFsdWUpXHJcblx0XHRcdFx0XHQuYXR0cignY2hlY2tlZCcsIG8uc2VsZWN0ZWQpXHJcblx0XHRcdFx0XHQub24oJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0dmFyIGNoZWNrZWQ7XHJcblx0XHRcdFx0XHRcdHZhciB1bmNoZWNrZWQ7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoJChvLmNoZWNrYm94KS5pcygnOmNoZWNrZWQnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHVuY2hlY2tlZCA9IHRydWU7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRpZiAoY2hlY2tlZCAmJiB1bmNoZWNrZWQpIHtcclxuXHRcdFx0XHRcdFx0XHRzZWxlY3Quc2VsZWN0QWxsQ2hlY2tib3gucHJvcCgnaW5kZXRlcm1pbmF0ZScsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdC5zZWxlY3RBbGxDaGVja2JveC5wcm9wKCdpbmRldGVybWluYXRlJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdHNlbGVjdC5zZWxlY3RBbGxDaGVja2JveC5wcm9wKCdjaGVja2VkJywgY2hlY2tlZCk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRvLmxhYmVsID0gby5kaXYuYXBwZW5kKGNyZWF0ZS5sYWJlbCkuY2hpbGRyZW4oKS5sYXN0KClcclxuXHRcdFx0XHRcdC5hdHRyKCdmb3InLCBzZWxlY3QubmFtZSArICdfJyArIG8udmFsdWUpXHJcblx0XHRcdFx0XHQudGV4dChvLnRleHQpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fVxyXG5cdFx0XHRcdCBcclxuXHRcdGZ1bmN0aW9uIHNvcnRBc2MoKSB7XHJcblx0XHRcdCQoJyNzb3J0QXNjJykudmFsKHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0JCgnI3NvcnREZXNjJykudmFsKCcnKTtcclxuXHRcdFx0ZmlsdGVyKCk7XHJcblx0XHR9XHJcblx0XHRcdFxyXG5cdFx0ZnVuY3Rpb24gZmlsdGVyKCkge1xyXG5cdFx0XHRmb3IgKGNvbnN0IG8gb2Ygc2VsZWN0Lm9wdGlvbnMpIHtcclxuXHRcdFx0XHRvLmVsZW1lbnQucHJvcCgnc2VsZWN0ZWQnLCBvLmNoZWNrYm94LmlzKCc6Y2hlY2tlZCcpKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0JCgnI2Zvcm0nKS5zdWJtaXQoKTtcclxuXHRcdH1cclxuXHRcdFx0XHJcblx0XHRmdW5jdGlvbiBzb3J0RGVzYygpIHtcclxuXHRcdFx0JCgnI3NvcnREZXNjJykudmFsKHNlbGVjdC5uYW1lKTtcclxuXHRcdFx0JCgnI3NvcnRBc2MnKS52YWwoJycpO1xyXG5cdFx0XHRmaWx0ZXIoKTtcclxuXHRcdH1cclxuXHRcdFxyXG5cdFx0c2VsZWN0LmRyb3Bkb3duTWVudS5wYXJlbnQoKS5vbignaGlkZS5icy5kcm9wZG93bicsIGZ1bmN0aW9uIChlKSB7XHJcblx0XHRcdGlmKGUuY2xpY2tFdmVudCAmJiAkLmNvbnRhaW5zKGUucmVsYXRlZFRhcmdldC5wYXJlbnROb2RlLCBlLmNsaWNrRXZlbnQudGFyZ2V0KSkge1xyXG5cdFx0XHRcdGUucHJldmVudERlZmF1bHQoKVxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHNlbGVjdC5kcm9wZG93bk1lbnUuZW1wdHkoKTtcclxuXHRcdFx0fVxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHR9XHJcblx0XHJcbn0pKCQpOyJdLCJzb3VyY2VSb290IjoiIn0=