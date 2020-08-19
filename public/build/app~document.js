(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~document"],{

/***/ "./assets/css/global.scss":
/*!********************************!*\
  !*** ./assets/css/global.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(/*! core-js/modules/es.array.filter */ "./node_modules/core-js/modules/es.array.filter.js");

__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.date.to-string */ "./node_modules/core-js/modules/es.date.to-string.js");

__webpack_require__(/*! core-js/modules/es.function.bind */ "./node_modules/core-js/modules/es.function.bind.js");

__webpack_require__(/*! core-js/modules/es.regexp.constructor */ "./node_modules/core-js/modules/es.regexp.constructor.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

__webpack_require__(/*! core-js/modules/es.regexp.to-string */ "./node_modules/core-js/modules/es.regexp.to-string.js");

__webpack_require__(/*! core-js/modules/es.string.match */ "./node_modules/core-js/modules/es.string.match.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! bootstrap-datepicker */ "./node_modules/bootstrap-datepicker/dist/js/bootstrap-datepicker.js");

__webpack_require__(/*! bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js */ "./node_modules/bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js");

var bsCustomFileInput = __webpack_require__(/*! bs-custom-file-input */ "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js");

__webpack_require__(/*! ../css/global.scss */ "./assets/css/global.scss");

global.create = {
  div: function div() {
    return $(document.createElement('div'));
  },
  a: function a() {
    return $(document.createElement('a')).addClass('btn btn-sm text-nowrap');
  },
  span: function span() {
    return $(document.createElement('span'));
  },
  input: function input() {
    return $(document.createElement('input')).attr('type', 'text').addClass('form-control form-control-sm');
  },
  checkbox: function checkbox() {
    return $(document.createElement('input')).attr('type', 'checkbox').addClass('custom-control-input');
  },
  select: function select() {
    return $(document.createElement('select')).addClass('form-control form-control-sm');
  },
  option: function option() {
    return $(document.createElement('option')).attr('value', '');
  },
  label: function label() {
    return $(document.createElement('label')).addClass('custom-control-label w-100 text-nowrap');
  },
  menuButton: function menuButton() {
    return $(document.createElement('button')).addClass('btn btn-sm btn-primary text-nowrap rounded-0');
  },
  smallButton: function smallButton() {
    return $(document.createElement('button')).addClass('btn btn-sm mx-1 text-nowrap');
  },
  tr: function tr() {
    return $(document.createElement('tr'));
  },
  td: function td() {
    return $(document.createElement('td'));
  },
  ul: function ul() {
    return $(document.createElement('ul'));
  },
  li: function li() {
    return $(document.createElement('li'));
  }
};
global.text = {
  noneSelected: 'None selected',
  multipleSeparator: ', ',
  selectAll: 'Select all',
  notApplicable: 'n/a',
  filter: 'Filter',
  loading: 'Loading...',
  details: 'Details',
  error: 'Ereur',
  reload: 'Relancer',
  close: 'Close',
  all: 'All'
};
global.icon = {
  arrowUp: '<svg class="bi bi-arrow-bar-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 5.854a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L8 3.207l2.646 2.647a.5.5 0 00.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 10a.5.5 0 00.5-.5V3a.5.5 0 00-1 0v6.5a.5.5 0 00.5.5zm-4.8 1.6c0-.22.18-.4.4-.4h8.8a.4.4 0 010 .8H3.6a.4.4 0 01-.4-.4z" clip-rule="evenodd"/>' + '</svg>',
  arrowDown: '<svg class="bi bi-arrow-bar-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 10.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L8 12.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 6a.5.5 0 01.5.5V13a.5.5 0 01-1 0V6.5A.5.5 0 018 6zM2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>' + '</svg>',
  funnel: '<svg class="bi bi-funnel" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clip-rule="evenodd"/>' + '</svg>',
  funnelFill: '<svg class="bi bi-funnel-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path d="M2 3.5v-2h12v2l-4.5 5v5l-3 1v-6L2 3.5z"/>' + '<path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clip-rule="evenodd"/>' + '</svg>',
  information: '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-chat-left-dots-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm5 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>' + '</svg>',
  exclamation: '<svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-exclamation-diamond-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M9.05.435c-.58-.58-1.52-.58-2.1 0L.436 6.95c-.58.58-.58 1.519 0 2.098l6.516 6.516c.58.58 1.519.58 2.098 0l6.516-6.516c.58-.58.58-1.519 0-2.098L9.05.435zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>' + '</svg>',
  loading: '<div class="d-flex justify-content-center mt-5">' + '<div class="spinner-border" role="status">' + '<span class="sr-only">' + text.loading + '</span>' + '</div>' + '</div>',
  close: '<button type="button" class="ml-2 mb-1 close ml-auto" data-dismiss="toast" aria-label=' + text.close + '>' + '<span aria-hidden="true">&times;</span>' + '</button>'
};
global.ajax = {
  fetch: function fetch(container) {
    var callBack = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.onSuccess.bind(this);
    var that = this;
    $(container).find('a[data-toggle="ajax"], button[data-toggle="ajax"]').not('[type="submit"]').each(function () {
      $(this).on('click', function (e) {
        if ($(this).parent().has('.active')) {
          $(this).parent().find('.active').removeClass('active');
          $(this).addClass('active');
        }

        var url = $(this).data('url');
        var target = $(this).data('target') || this;
        var add = $(this).data('add');
        that.set(target, url, undefined, undefined, add, callBack);
      });

      if ($(this).hasClass('active')) {
        $(this).trigger('click');
      }
    });
    $(container).find('a[data-toggle="ajax"][type="submit"], button[data-toggle="ajax"][type="submit"]').each(function () {
      if (($form = $('#' + $(this).attr('form'))) === false) {
        return false;
      }

      $form.on('submit', function (e) {
        return false;
      });
      $(this).on('click', function (e) {
        var url = $(this).data('url');
        var target = $(this).data('target') || this;
        var add = $(this).data('add');

        if ($form.find('input[type="file"]').length) {
          var method = 'POST';
          var data = new FormData($form.get(0));
        } else {
          var method = $form.attr('method') || 'GET';
          var data = $form.serializeArray();
        }

        that.set(target, url, method, data, add, callBack);
        return false;
      });

      if ($(this).hasClass('active')) {
        $(this).trigger('click');
      }
    });
    $(container).find('div[data-toggle="ajax"]').each(function (e) {
      var target = $(this).data('target') || this;
      var url = $(this).data('url');
      var add = $(this).data('add');
      that.set(target, url, undefined, undefined, add, callBack);
    });
  },
  set: function set(target, url) {
    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
    var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var add = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
    var callBack = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : this.onSuccess.bind(this);

    if (target && url) {
      //$(target).closest('.modal').modal('show');
      if (add === false) {
        $(target).show().empty().append(icon.loading);
      } else {
        $(target).show().find('[data-toggle="ajax"]').remove();
      }

      var that = this;
      $.ajax({
        url: url,
        type: method,
        data: data,
        contentType: data.constructor === FormData ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
        processData: data.constructor !== FormData,
        success: function success(result) {
          callBack(target, result);
        },
        error: function error(xhr, thrownError) {
          if (add === false) {
            var result = '<div class="alert alert-danger">' + '<h6 class="alert-heading font-weight-bold">' + text.error + ' ' + xhr.status + ' : ' + xhr.statusText + '</h6>';

            if ((m = /<title>(.+)<\/title>/.exec(xhr.responseText)) !== null) {
              result += '<p>' + m[1] + '</p>';
            }

            result += '<button type="button" class="btn btn-sm btn-primary" data-toggle="ajax" data-url="' + url + '" data-target="' + target + '">' + text.reload + '</button>' + '</div>';
            $(target).html(result);
            that.fetch(target);
          }
        }
      });
    }
  },
  onSuccess: function onSuccess() {
    var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.body;
    var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
    var callBack = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.onSuccess.bind(this);
    $(target).find('.spinner-border').parent().remove();

    if (result) {
      $(target).html($(target).html() + result);
    } //---------------------
    // popover
    //---------------------


    $(target).find('[data-toggle="popover"]').popover(); //---------------------
    // Ajax
    //---------------------

    this.fetch(target, callBack); //---------------------
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
    }); //---------------------
    // Form multiple
    //---------------------

    $(target).find("[name$='_multiple']").each(function () {
      var id;

      if (id = $(this).prop('name').match(new RegExp("(\\S+)_multiple$", "y"))) {
        $(this).on('click', function (event) {
          if ($(this).val() == 0) {
            $("[id^='" + id[1] + "']").not("[id*='multiple']").each(function () {
              if ($(this).hasClass('datepicker')) {
                $(this).datepicker('setDate', new Date());
              } else if ($(this).attr('type') == 'radio') {
                $(this).prop('checked', false);
              } else if ($(this).attr('type') == 'checkbox') {
                $(this).prop('checked', false);
                $(this).prop('indeterminate', false);
              } else if ($(this).attr('type') == 'text' || $(this).is('select')) {
                $(this).val(null);
              } else {
                return;
              }

              $(this).attr("disabled", false);
              $(this).attr("required", $(this).data('required'));
            });
          } else {
            $("[id^='" + id[1] + "']").not("[id*='multiple']").each(function () {
              if ($(this).hasClass('datepicker')) {
                $(this).datepicker('setDate', null);
              } else if ($(this).attr('type') == 'radio') {
                $(this).prop('checked', false);
              } else if ($(this).attr('type') == 'checkbox') {
                $(this).prop('checked', false);
                $(this).prop('indeterminate', true);
              } else if ($(this).attr('type') == 'text' || $(this).is('select')) {
                $(this).val(null);
              } else {
                return;
              }

              $(this).attr("disabled", true);
              $(this).attr("required", false);
            });
          }

          $('#' + id[1] + '_multiple').val($(this).val());
        });
      }
    });
    $(target).find('form').find('div, input, select').each(function () {
      if ($(this).data('multiple')) {
        $("[name='" + $(this).prop('id') + "_multiple']").filter('[value=1]').trigger('click');
      } else {
        $("[name='" + $(this).prop('id') + "_multiple']").filter('[value=0]').trigger('click');
      }
    }); //---------------------
    // BsCustomFileInput
    //---------------------

    bsCustomFileInput.init();
  }
};
$(document).ready(function () {
  ajax.onSuccess();
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJic0N1c3RvbUZpbGVJbnB1dCIsImdsb2JhbCIsImNyZWF0ZSIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImEiLCJhZGRDbGFzcyIsInNwYW4iLCJpbnB1dCIsImF0dHIiLCJjaGVja2JveCIsInNlbGVjdCIsIm9wdGlvbiIsImxhYmVsIiwibWVudUJ1dHRvbiIsInNtYWxsQnV0dG9uIiwidHIiLCJ0ZCIsInVsIiwibGkiLCJ0ZXh0Iiwibm9uZVNlbGVjdGVkIiwibXVsdGlwbGVTZXBhcmF0b3IiLCJzZWxlY3RBbGwiLCJub3RBcHBsaWNhYmxlIiwiZmlsdGVyIiwibG9hZGluZyIsImRldGFpbHMiLCJlcnJvciIsInJlbG9hZCIsImNsb3NlIiwiYWxsIiwiaWNvbiIsImFycm93VXAiLCJhcnJvd0Rvd24iLCJmdW5uZWwiLCJmdW5uZWxGaWxsIiwiaW5mb3JtYXRpb24iLCJleGNsYW1hdGlvbiIsImFqYXgiLCJmZXRjaCIsImNvbnRhaW5lciIsImNhbGxCYWNrIiwib25TdWNjZXNzIiwiYmluZCIsInRoYXQiLCJmaW5kIiwibm90IiwiZWFjaCIsIm9uIiwiZSIsInBhcmVudCIsImhhcyIsInJlbW92ZUNsYXNzIiwidXJsIiwiZGF0YSIsInRhcmdldCIsImFkZCIsInNldCIsInVuZGVmaW5lZCIsImhhc0NsYXNzIiwidHJpZ2dlciIsIiRmb3JtIiwibGVuZ3RoIiwibWV0aG9kIiwiRm9ybURhdGEiLCJnZXQiLCJzZXJpYWxpemVBcnJheSIsInNob3ciLCJlbXB0eSIsImFwcGVuZCIsInJlbW92ZSIsInR5cGUiLCJjb250ZW50VHlwZSIsImNvbnN0cnVjdG9yIiwicHJvY2Vzc0RhdGEiLCJzdWNjZXNzIiwicmVzdWx0IiwieGhyIiwidGhyb3duRXJyb3IiLCJzdGF0dXMiLCJzdGF0dXNUZXh0IiwibSIsImV4ZWMiLCJyZXNwb25zZVRleHQiLCJodG1sIiwiYm9keSIsInBvcG92ZXIiLCJibHVyIiwibW9kYWwiLCJkYXRlcGlja2VyIiwiZm9ybWF0Iiwid2Vla1N0YXJ0IiwibWF4Vmlld01vZGUiLCJsYW5ndWFnZSIsIm11bHRpZGF0ZSIsImRheXNPZldlZWtEaXNhYmxlZCIsImF1dG9jbG9zZSIsImNhbGVuZGFyV2Vla3MiLCJjbGVhckJ0biIsInRvZGF5QnRuIiwidG9kYXlIaWdobGlnaHQiLCJpZCIsInByb3AiLCJtYXRjaCIsImV2ZW50IiwidmFsIiwiRGF0ZSIsImlzIiwiaW5pdCIsInJlYWR5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUVBQSxtQkFBTyxDQUFDLGdFQUFELENBQVA7O0FBQ0FBLG1CQUFPLENBQUMsaUdBQUQsQ0FBUDs7QUFDQUEsbUJBQU8sQ0FBQyx5SkFBRCxDQUFQOztBQUNBLElBQU1DLGlCQUFpQixHQUFHRCxtQkFBTyxDQUFDLDhGQUFELENBQWpDOztBQUNBQSxtQkFBTyxDQUFDLG9EQUFELENBQVA7O0FBRUFFLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQjtBQUNmQyxLQUFHLEVBQUUsZUFBVztBQUNmLFdBQU9MLENBQUMsQ0FBQ00sUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQUQsQ0FBUjtBQUdBLEdBTGM7QUFPZkMsR0FBQyxFQUFFLGFBQVc7QUFDYixXQUFPUixDQUFDLENBQUNNLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUFELENBQUQsQ0FDTEUsUUFESyxDQUNJLHdCQURKLENBQVA7QUFFQSxHQVZjO0FBWWZDLE1BQUksRUFBRSxnQkFBVztBQUNoQixXQUFPVixDQUFDLENBQUNNLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUFELENBQVI7QUFHQSxHQWhCYztBQWtCZkks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QVIsRUFBakM7QUFDQSxTQTNDRDtBQTRDQTtBQUNELEtBbEREO0FBb0RBN0csS0FBQyxDQUFDMkQsTUFBRCxDQUFELENBQVVWLElBQVYsQ0FBZSxNQUFmLEVBQXVCQSxJQUF2QixDQUE0QixvQkFBNUIsRUFBa0RFLElBQWxELENBQXVELFlBQVk7QUFFbEUsVUFBSW5ELENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTBELElBQVIsQ0FBYSxVQUFiLENBQUosRUFBOEI7QUFDN0IxRCxTQUFDLENBQUMsWUFBWUEsQ0FBQyxDQUFDLElBQUQsQ0FBRCxDQUFRMEcsSUFBUixDQUFhLElBQWIsQ0FBWixHQUFpQyxhQUFsQyxDQUFELENBQWtEOUUsTUFBbEQsQ0FBeUQsV0FBekQsRUFBc0VvQyxPQUF0RSxDQUE4RSxPQUE5RTtBQUNBLE9BRkQsTUFFTztBQUNOaEUsU0FBQyxDQUFDLFlBQVlBLENBQUMsQ0FBQyxJQUFELENBQUQsQ0FBUTBHLElBQVIsQ0FBYSxJQUFiLENBQVosR0FBaUMsYUFBbEMsQ0FBRCxDQUFrRDlFLE1BQWxELENBQXlELFdBQXpELEVBQXNFb0MsT0FBdEUsQ0FBOEUsT0FBOUU7QUFDQTtBQUVELEtBUkQsRUFuSCtGLENBOEgvRjtBQUNBO0FBQ0E7O0FBRUE5RCxxQkFBaUIsQ0FBQzhHLElBQWxCO0FBR0E7QUFuUVksQ0FBZDtBQXNRQWhILENBQUMsQ0FBQ00sUUFBRCxDQUFELENBQVkyRyxLQUFaLENBQWtCLFlBQVc7QUFFekJ2RSxNQUFJLENBQUNJLFNBQUw7QUFFSCxDQUpELEUiLCJmaWxlIjoiYXBwfmRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5cclxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcC1kYXRlcGlja2VyJyk7XHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcC1kYXRlcGlja2VyL2Rpc3QvbG9jYWxlcy9ib290c3RyYXAtZGF0ZXBpY2tlci5mci5taW4uanMnKTtcclxuY29uc3QgYnNDdXN0b21GaWxlSW5wdXQgPSByZXF1aXJlKCdicy1jdXN0b20tZmlsZS1pbnB1dCcpO1xyXG5yZXF1aXJlKCcuLi9jc3MvZ2xvYmFsLnNjc3MnKTtcclxuXHJcbmdsb2JhbC5jcmVhdGUgPSB7XHJcblx0ZGl2OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxyXG5cclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0biBidG4tc20gdGV4dC1ub3dyYXAnKVxyXG5cdH0sXHJcblx0XHJcblx0c3BhbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGlucHV0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ3RleHQnKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20nKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0Y2hlY2tib3g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWlucHV0JylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHNlbGVjdDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzZWxlY3QnKSlcclxuXHRcdFx0LmFkZENsYXNzKCdmb3JtLWNvbnRyb2wgZm9ybS1jb250cm9sLXNtJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdG9wdGlvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSlcclxuXHRcdFx0LmF0dHIoJ3ZhbHVlJywgJycpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRsYWJlbDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWxhYmVsIHctMTAwIHRleHQtbm93cmFwJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdG1lbnVCdXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSB0ZXh0LW5vd3JhcCByb3VuZGVkLTAnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0c21hbGxCdXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBteC0xIHRleHQtbm93cmFwJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRyOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHVsOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGxpOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG59O1xyXG5cclxuZ2xvYmFsLnRleHQgPSB7XHJcbiAgICBub25lU2VsZWN0ZWQ6ICdOb25lIHNlbGVjdGVkJyxcclxuICAgIG11bHRpcGxlU2VwYXJhdG9yOiAnLCAnLFxyXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0IGFsbCcsXHJcbiAgICBub3RBcHBsaWNhYmxlOiAnbi9hJyxcclxuICAgIGZpbHRlcjogJ0ZpbHRlcicsXHJcbiAgICBsb2FkaW5nOiAnTG9hZGluZy4uLicsXHJcbiAgICBkZXRhaWxzOiAnRGV0YWlscycsXHJcbiAgICBlcnJvcjogJ0VyZXVyJyxcclxuICAgIHJlbG9hZDogJ1JlbGFuY2VyJyxcclxuICAgIGNsb3NlOiAnQ2xvc2UnLFxyXG4gICAgYWxsOiAnQWxsJ1xyXG59O1xyXG5cclxuZ2xvYmFsLmljb24gPSB7XHJcblx0YXJyb3dVcDpcclxuXHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktYXJyb3ctYmFyLXVwXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjM1NCA1Ljg1NGEuNS41IDAgMDAwLS43MDhsLTMtM2EuNS41IDAgMDAtLjcwOCAwbC0zIDNhLjUuNSAwIDEwLjcwOC43MDhMOCAzLjIwN2wyLjY0NiAyLjY0N2EuNS41IDAgMDAuNzA4IDB6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggMTBhLjUuNSAwIDAwLjUtLjVWM2EuNS41IDAgMDAtMSAwdjYuNWEuNS41IDAgMDAuNS41em0tNC44IDEuNmMwLS4yMi4xOC0uNC40LS40aDguOGEuNC40IDAgMDEwIC44SDMuNmEuNC40IDAgMDEtLjQtLjR6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0YXJyb3dEb3duOlxyXG5cdFx0XHQnPHN2ZyBjbGFzcz1cImJpIGJpLWFycm93LWJhci1kb3duXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdCAgXHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS4zNTQgMTAuMTQ2YS41LjUgMCAwMTAgLjcwOGwtMyAzYS41LjUgMCAwMS0uNzA4IDBsLTMtM2EuNS41IDAgMDEuNzA4LS43MDhMOCAxMi43OTNsMi42NDYtMi42NDdhLjUuNSAwIDAxLjcwOCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCA2YS41LjUgMCAwMS41LjVWMTNhLjUuNSAwIDAxLTEgMFY2LjVBLjUuNSAwIDAxOCA2ek0yIDMuNWEuNS41IDAgMDEuNS0uNWgxMWEuNS41IDAgMDEwIDFoLTExYS41LjUgMCAwMS0uNS0uNXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQnPC9zdmc+JyxcclxuXHRcclxuXHRmdW5uZWw6XHJcblx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktZnVubmVsXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMS41IDEuNUEuNS41IDAgMDEyIDFoMTJhLjUuNSAwIDAxLjUuNXYyYS41LjUgMCAwMS0uMTI4LjMzNEwxMCA4LjY5MlYxMy41YS41LjUgMCAwMS0uMzQyLjQ3NGwtMyAxQS41LjUgMCAwMTYgMTQuNVY4LjY5MkwxLjYyOCAzLjgzNEEuNS41IDAgMDExLjUgMy41di0yem0xIC41djEuMzA4bDQuMzcyIDQuODU4QS41LjUgMCAwMTcgOC41djUuMzA2bDItLjY2NlY4LjVhLjUuNSAwIDAxLjEyOC0uMzM0TDEzLjUgMy4zMDhWMmgtMTF6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcdFxyXG5cdGZ1bm5lbEZpbGw6XHJcblx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktZnVubmVsLWZpbGxcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBkPVwiTTIgMy41di0yaDEydjJsLTQuNSA1djVsLTMgMXYtNkwyIDMuNXpcIi8+JyArXHJcblx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEuNSAxLjVBLjUuNSAwIDAxMiAxaDEyYS41LjUgMCAwMS41LjV2MmEuNS41IDAgMDEtLjEyOC4zMzRMMTAgOC42OTJWMTMuNWEuNS41IDAgMDEtLjM0Mi40NzRsLTMgMUEuNS41IDAgMDE2IDE0LjVWOC42OTJMMS42MjggMy44MzRBLjUuNSAwIDAxMS41IDMuNXYtMnptMSAuNXYxLjMwOGw0LjM3MiA0Ljg1OEEuNS41IDAgMDE3IDguNXY1LjMwNmwyLS42NjZWOC41YS41LjUgMCAwMS4xMjgtLjMzNEwxMy41IDMuMzA4VjJoLTExelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdCc8L3N2Zz4nLFxyXG5cdFxyXG5cdGluZm9ybWF0aW9uOlxyXG5cdFx0XHQnPHN2ZyB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBjbGFzcz1cImJpIGJpLWNoYXQtbGVmdC1kb3RzLWZpbGxcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0wIDJhMiAyIDAgMCAxIDItMmgxMmEyIDIgMCAwIDEgMiAydjhhMiAyIDAgMCAxLTIgMkg0LjQxNGExIDEgMCAwIDAtLjcwNy4yOTNMLjg1NCAxNS4xNDZBLjUuNSAwIDAgMSAwIDE0Ljc5M1Yyem01IDRhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwem00IDBhMSAxIDAgMSAxLTIgMCAxIDEgMCAwIDEgMiAwem0zIDFhMSAxIDAgMSAwIDAtMiAxIDEgMCAwIDAgMCAyelwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHJcblx0ZXhjbGFtYXRpb246XHJcblx0XHRcdCc8c3ZnIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGNsYXNzPVwiYmkgYmktZXhjbGFtYXRpb24tZGlhbW9uZC1maWxsXCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOS4wNS40MzVjLS41OC0uNTgtMS41Mi0uNTgtMi4xIDBMLjQzNiA2Ljk1Yy0uNTguNTgtLjU4IDEuNTE5IDAgMi4wOThsNi41MTYgNi41MTZjLjU4LjU4IDEuNTE5LjU4IDIuMDk4IDBsNi41MTYtNi41MTZjLjU4LS41OC41OC0xLjUxOSAwLTIuMDk4TDkuMDUuNDM1ek04IDRhLjkwNS45MDUgMCAwIDAtLjkuOTk1bC4zNSAzLjUwN2EuNTUyLjU1MiAwIDAgMCAxLjEgMGwuMzUtMy41MDdBLjkwNS45MDUgMCAwIDAgOCA0em0uMDAyIDZhMSAxIDAgMSAwIDAgMiAxIDEgMCAwIDAgMC0yelwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHJcblx0bG9hZGluZzpcclxuXHRcdCc8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXIgbXQtNVwiPicgK1xyXG5cdFx0XHQnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPicgK1xyXG5cdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4nICsgdGV4dC5sb2FkaW5nICsgJzwvc3Bhbj4nICtcclxuXHRcdFx0JzwvZGl2PicgK1xyXG5cdFx0JzwvZGl2PicsXHJcblx0XHJcblx0Y2xvc2U6XHJcblx0ICAgICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cIm1sLTIgbWItMSBjbG9zZSBtbC1hdXRvXCIgZGF0YS1kaXNtaXNzPVwidG9hc3RcIiBhcmlhLWxhYmVsPScgKyB0ZXh0LmNsb3NlICsgJz4nICtcclxuXHQgICAgXHQnPHNwYW4gYXJpYS1oaWRkZW49XCJ0cnVlXCI+JnRpbWVzOzwvc3Bhbj4nICtcclxuXHQgICAgJzwvYnV0dG9uPicsXHJcblx0XHJcbn07XHJcblxyXG5nbG9iYWwuYWpheCA9IHtcclxuXHRcdFxyXG5cdGZldGNoOiBmdW5jdGlvbihjb250YWluZXIsIGNhbGxCYWNrID0gdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSkge1xyXG5cdFx0XHJcblx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdhW2RhdGEtdG9nZ2xlPVwiYWpheFwiXSwgYnV0dG9uW2RhdGEtdG9nZ2xlPVwiYWpheFwiXScpLm5vdCgnW3R5cGU9XCJzdWJtaXRcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCQodGhpcykucGFyZW50KCkuaGFzKCcuYWN0aXZlJykpIHtcclxuXHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCB0aGlzO1xyXG5cdFx0XHRcdGxldCBhZGQgPSAkKHRoaXMpLmRhdGEoJ2FkZCcpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsLCB1bmRlZmluZWQsIHVuZGVmaW5lZCwgYWRkLCBjYWxsQmFjayk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdhW2RhdGEtdG9nZ2xlPVwiYWpheFwiXVt0eXBlPVwic3VibWl0XCJdLCBidXR0b25bZGF0YS10b2dnbGU9XCJhamF4XCJdW3R5cGU9XCJzdWJtaXRcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCgkZm9ybSA9ICQoJyMnICsgJCh0aGlzKS5hdHRyKCdmb3JtJykpKSA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xyXG5cdFx0XHRcdGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpIHx8IHRoaXM7XHJcblx0XHRcdFx0bGV0IGFkZCA9ICQodGhpcykuZGF0YSgnYWRkJyk7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHR2YXIgbWV0aG9kID0gJ1BPU1QnO1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm0uZ2V0KDApKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dmFyIG1ldGhvZCA9ICRmb3JtLmF0dHIoJ21ldGhvZCcpIHx8ICdHRVQnO1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSAkZm9ybS5zZXJpYWxpemVBcnJheSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCwgbWV0aG9kLCBkYXRhLCBhZGQsIGNhbGxCYWNrKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdkaXZbZGF0YS10b2dnbGU9XCJhamF4XCJdJykuZWFjaChmdW5jdGlvbihlKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCB0aGlzO1xyXG5cdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0bGV0IGFkZCA9ICQodGhpcykuZGF0YSgnYWRkJyk7XHJcblx0XHRcdFxyXG5cdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCwgdW5kZWZpbmVkLCB1bmRlZmluZWQsIGFkZCwgY2FsbEJhY2spO1xyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0fSxcclxuXHRcdFxyXG5cdHNldDogZnVuY3Rpb24gKHRhcmdldCwgdXJsLCBtZXRob2QgPSAnR0VUJywgZGF0YSA9IFtdLCBhZGQgPSBmYWxzZSwgY2FsbEJhY2sgPSB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpKSB7XHJcblx0XHRcclxuXHRcdGlmICh0YXJnZXQgJiYgdXJsKSB7XHJcblx0XHRcdC8vJCh0YXJnZXQpLmNsb3Nlc3QoJy5tb2RhbCcpLm1vZGFsKCdzaG93Jyk7XHJcblx0XHRcdGlmIChhZGQgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0JCh0YXJnZXQpXHJcblx0XHRcdFx0XHQuc2hvdygpXHJcblx0XHRcdFx0XHQuZW1wdHkoKVxyXG5cdFx0XHRcdFx0LmFwcGVuZChpY29uLmxvYWRpbmcpXHJcblx0XHRcdFx0O1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCQodGFyZ2V0KVxyXG5cdFx0XHRcdFx0LnNob3coKVxyXG5cdFx0XHRcdFx0LmZpbmQoJ1tkYXRhLXRvZ2dsZT1cImFqYXhcIl0nKS5yZW1vdmUoKVxyXG5cdFx0XHRcdDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHQkLmFqYXgoe1xyXG5cdFx0XHRcdHVybCA6IHVybCxcclxuXHRcdFx0XHR0eXBlOiBtZXRob2QsXHJcblx0XHRcdFx0ZGF0YTogZGF0YSxcclxuXHRcdFx0XHRjb250ZW50VHlwZTogKGRhdGEuY29uc3RydWN0b3IgPT09IEZvcm1EYXRhKT9mYWxzZTonYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04JyxcclxuXHRcdFx0XHRwcm9jZXNzRGF0YTogKGRhdGEuY29uc3RydWN0b3IgIT09IEZvcm1EYXRhKSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXN1bHQpIHtcclxuXHRcdFx0XHRcdGNhbGxCYWNrKHRhcmdldCwgcmVzdWx0KTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGVycm9yOiBmdW5jdGlvbih4aHIsIHRocm93bkVycm9yKSB7XHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdGlmIChhZGQgPT09IGZhbHNlKSB7XHJcblx0XHRcdFx0XHRcdGxldCByZXN1bHQgPSAnPGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPicgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdCc8aDYgY2xhc3M9XCJhbGVydC1oZWFkaW5nIGZvbnQtd2VpZ2h0LWJvbGRcIj4nICsgdGV4dC5lcnJvciArICcgJyArIHhoci5zdGF0dXMgKyAnIDogJyArIHhoci5zdGF0dXNUZXh0ICsgJzwvaDY+JztcclxuXHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdGlmICgobSA9IC88dGl0bGU+KC4rKTxcXC90aXRsZT4vLmV4ZWMoeGhyLnJlc3BvbnNlVGV4dCkpICE9PSBudWxsKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzdWx0ICs9ICc8cD4nICsgbVsxXSArICc8L3A+JztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0cmVzdWx0ICs9ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0biBidG4tc20gYnRuLXByaW1hcnlcIiBkYXRhLXRvZ2dsZT1cImFqYXhcIiBkYXRhLXVybD1cIicgKyB1cmwgKyAnXCIgZGF0YS10YXJnZXQ9XCInICsgdGFyZ2V0ICsgJ1wiPicgKyB0ZXh0LnJlbG9hZCArICc8L2J1dHRvbj4nICtcclxuXHRcdFx0XHRcdFx0XHRcdFx0JzwvZGl2Pic7XHJcblx0XHRcdFx0XHRcdCQodGFyZ2V0KS5odG1sKHJlc3VsdCk7XHJcblx0XHRcdFx0XHRcdHRoYXQuZmV0Y2godGFyZ2V0KTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdFx0XHJcblx0fSxcclxuXHRcclxuXHRvblN1Y2Nlc3M6IGZ1bmN0aW9uICh0YXJnZXQgPSBkb2N1bWVudC5ib2R5LCByZXN1bHQgPSAnJywgY2FsbEJhY2sgPSB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpKSB7XHJcblx0XHRcclxuXHRcdCQodGFyZ2V0KS5maW5kKCcuc3Bpbm5lci1ib3JkZXInKS5wYXJlbnQoKS5yZW1vdmUoKTtcclxuXHRcdGlmIChyZXN1bHQpIHtcclxuXHRcdFx0JCh0YXJnZXQpLmh0bWwoJCh0YXJnZXQpLmh0bWwoKSArIHJlc3VsdCk7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBwb3BvdmVyXHJcblx0XHQvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cdFx0XHJcblx0XHQkKHRhcmdldCkuZmluZCgnW2RhdGEtdG9nZ2xlPVwicG9wb3ZlclwiXScpLnBvcG92ZXIoKTtcclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIEFqYXhcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHQgICAgdGhpcy5mZXRjaCh0YXJnZXQsIGNhbGxCYWNrKTtcclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIE1vZGFsICYgQ29sbGFwc2VcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0ICAgIFxyXG5cdFx0JCh0YXJnZXQpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0JCgnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1baHJlZj1cIiMnICsgJCh0aGlzKS5hdHRyKCdpZCcpICsgJ1wiXScpXHJcblx0XHRcdFx0LnJlbW92ZUNsYXNzKCdhY3RpdmUnKVxyXG5cdFx0XHRcdC5ibHVyKClcclxuXHRcdFx0O1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQodGFyZ2V0KS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJykuYmx1cigpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQodGFyZ2V0KS5maW5kKCdidXR0b25bZGF0YS1kaXNtaXNzXScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKCcjbW9kYWwnKS5tb2RhbCgnaGlkZScpO1xyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBCb290c3RyYXAgZGF0ZXBpY2tlclxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdFx0JCh0YXJnZXQpLmZpbmQoJy5kYXRlcGlja2VyJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0JCh0aGlzKS5kYXRlcGlja2VyKHtcclxuXHRcdFx0XHRmb3JtYXQ6IFwiZGQtbW0teXl5eVwiLFxyXG5cdFx0ICAgICAgICB3ZWVrU3RhcnQ6IDEsXHJcblx0XHQgICAgICAgIG1heFZpZXdNb2RlOiAzLFxyXG5cdFx0ICAgICAgICBsYW5ndWFnZTogJCh0aGlzKS5kYXRhKCdsb2NhbGUnKSxcclxuXHRcdCAgICAgICAgbXVsdGlkYXRlOiBmYWxzZSxcclxuXHRcdCAgICAgICAgZGF5c09mV2Vla0Rpc2FibGVkOiBcIjAsNlwiLFxyXG5cdFx0ICAgICAgICBhdXRvY2xvc2U6IHRydWUsXHJcblx0XHQgICAgICAgIGNhbGVuZGFyV2Vla3M6IHRydWUsXHJcblx0XHQgICAgICAgIGNsZWFyQnRuOiB0cnVlLFxyXG5cdFx0ICAgICAgICB0b2RheUJ0bjogdHJ1ZSxcclxuXHRcdCAgICAgICAgdG9kYXlIaWdobGlnaHQ6IHRydWUsXHJcblx0XHQgICAgfSk7XHJcblx0XHR9KVxyXG5cclxuXHRcdFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdC8vIEZvcm0gbXVsdGlwbGVcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHRcclxuXHRcdCQodGFyZ2V0KS5maW5kKFwiW25hbWUkPSdfbXVsdGlwbGUnXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0dmFyIGlkO1xyXG5cdFx0XHRpZiAoaWQgPSAkKHRoaXMpLnByb3AoJ25hbWUnKS5tYXRjaCgvKFxcUyspX211bHRpcGxlJC95KSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0aWYgKCQodGhpcykudmFsKCkgPT0gMCkge1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0JChcIltpZF49J1wiICsgaWRbMV0gKyBcIiddXCIpLm5vdChcIltpZCo9J211bHRpcGxlJ11cIikuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnZGF0ZXBpY2tlcicpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQkKHRoaXMpLmRhdGVwaWNrZXIoJ3NldERhdGUnLCBuZXcgRGF0ZSgpKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICdyYWRpbycpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICdjaGVja2JveCcpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykucHJvcCgnaW5kZXRlcm1pbmF0ZScsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCQodGhpcykuYXR0cigndHlwZScpID09ICd0ZXh0JyB8fCAkKHRoaXMpLmlzKCdzZWxlY3QnKSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS52YWwobnVsbCk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0JCh0aGlzKS5hdHRyKFwiZGlzYWJsZWRcIiwgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykuYXR0cihcInJlcXVpcmVkXCIsICQodGhpcykuZGF0YSgncmVxdWlyZWQnKSk7XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHQkKFwiW2lkXj0nXCIgKyBpZFsxXSArIFwiJ11cIikubm90KFwiW2lkKj0nbXVsdGlwbGUnXVwiKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdkYXRlcGlja2VyJykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykuZGF0ZXBpY2tlcignc2V0RGF0ZScsIG51bGwpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ3JhZGlvJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoJCh0aGlzKS5hdHRyKCd0eXBlJykgPT0gJ2NoZWNrYm94Jykge1xyXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xyXG5cdFx0XHRcdFx0XHRcdFx0JCh0aGlzKS5wcm9wKCdpbmRldGVybWluYXRlJywgdHJ1ZSk7XHJcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICgkKHRoaXMpLmF0dHIoJ3R5cGUnKSA9PSAndGV4dCcgfHwgJCh0aGlzKS5pcygnc2VsZWN0JykpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCQodGhpcykudmFsKG51bGwpO1xyXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykuYXR0cihcImRpc2FibGVkXCIsIHRydWUpO1xyXG5cdFx0XHRcdFx0XHRcdCQodGhpcykuYXR0cihcInJlcXVpcmVkXCIsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0JCgnIycgKyBpZFsxXSArICdfbXVsdGlwbGUnKS52YWwoJCh0aGlzKS52YWwoKSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKHRhcmdldCkuZmluZCgnZm9ybScpLmZpbmQoJ2RpdiwgaW5wdXQsIHNlbGVjdCcpLmVhY2goZnVuY3Rpb24gKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuZGF0YSgnbXVsdGlwbGUnKSkge1xyXG5cdFx0XHRcdCQoXCJbbmFtZT0nXCIgKyAkKHRoaXMpLnByb3AoJ2lkJykgKyBcIl9tdWx0aXBsZSddXCIpLmZpbHRlcignW3ZhbHVlPTFdJykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKFwiW25hbWU9J1wiICsgJCh0aGlzKS5wcm9wKCdpZCcpICsgXCJfbXVsdGlwbGUnXVwiKS5maWx0ZXIoJ1t2YWx1ZT0wXScpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KVxyXG5cdFx0XHJcblx0XHRcclxuXHRcdC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblx0XHQvLyBCc0N1c3RvbUZpbGVJbnB1dFxyXG5cdFx0Ly8tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuXHRcdFxyXG5cdFx0YnNDdXN0b21GaWxlSW5wdXQuaW5pdCgpO1xyXG5cdFx0XHJcblx0XHRcclxuXHR9LFxyXG59XHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcclxuICAgIGFqYXgub25TdWNjZXNzKCk7XHJcbiAgICBcclxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==