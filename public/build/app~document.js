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

/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(/*! core-js/modules/es.array.find */ "./node_modules/core-js/modules/es.array.find.js");

__webpack_require__(/*! core-js/modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var bsCustomFileInput = __webpack_require__(/*! bs-custom-file-input */ "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js");

__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

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
  reload: 'Relancer'
};
global.icon = {
  arrowUp: '<svg class="bi bi-arrow-bar-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 5.854a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L8 3.207l2.646 2.647a.5.5 0 00.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 10a.5.5 0 00.5-.5V3a.5.5 0 00-1 0v6.5a.5.5 0 00.5.5zm-4.8 1.6c0-.22.18-.4.4-.4h8.8a.4.4 0 010 .8H3.6a.4.4 0 01-.4-.4z" clip-rule="evenodd"/>' + '</svg>',
  arrowDown: '<svg class="bi bi-arrow-bar-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M11.354 10.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L8 12.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>' + '<path fill-rule="evenodd" d="M8 6a.5.5 0 01.5.5V13a.5.5 0 01-1 0V6.5A.5.5 0 018 6zM2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>' + '</svg>',
  funnel: '<svg class="bi bi-funnel" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clip-rule="evenodd"/>' + '</svg>',
  funnelFill: '<svg class="bi bi-funnel-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' + '<path d="M2 3.5v-2h12v2l-4.5 5v5l-3 1v-6L2 3.5z"/>' + '<path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clip-rule="evenodd"/>' + '</svg>',
  loading: '<div class="d-flex justify-content-center">' + '<div class="spinner-border" role="status">' + '<span class="sr-only">' + text.loading + '</span>' + '</div>' + '</div>'
};
global.ajax = {
  fetch: function fetch(container) {
    var that = this;
    $(container).find('a[data-toggle="ajax"], button[data-toggle="ajax"]').not('[type="submit"]').each(function () {
      $(this).on('click', function (e) {
        if ($(this).parent().has('.active')) {
          $(this).parent().find('.active').removeClass('active');
          $(this).addClass('active');
        }

        var url = $(this).data('url');
        var target = $(this).data('target') || this;
        that.set(target, url);
      });

      if ($(this).hasClass('active')) {
        $(this).trigger('click');
      }
    });
    $(container).find('a[data-toggle="ajax"][type="submit"], button[data-toggle="ajax"][type="submit"]').each(function () {
      if ($form = $(this).parents('form').first()) {
        $form.on('submit', function (e) {
          return false;
        });
      }

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

        that.set(target, url, method, data, add);
        return false;
      });

      if ($(this).hasClass('active')) {
        $(this).trigger('click');
      }
    });
    $(container).find('div[data-toggle="ajax"]').each(function (e) {
      var target = $(this).data('target') || this;
      var url = $(this).data('url');
      that.set(target, url);
    });
  },
  set: function set(target, url) {
    var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'GET';
    var data = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
    var add = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

    if (target && url) {
      if (add === false) {
        $(target).empty().append(icon.loading);
      }

      var that = this;
      $.ajax({
        url: url,
        type: method,
        data: data,
        contentType: data.constructor === FormData ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
        processData: data.constructor !== FormData,
        success: function success(result) {
          if (add) {
            $(target).html($(target).html() + result);
          } else {
            $(target).html(result);
          }

          bsCustomFileInput.init();
          that.fetch(target);
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
  }
};
$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
  ajax.fetch('body');
  /*
  $('[id]').on('show.bs.collapse', function() {
  $('[data-toggle="collapse"][href="#' + $(this).attr('id') + '"]')
  .addClass('active')
  ;
  });
  */

  $('[id]').on('hidden.bs.collapse', function () {
    $('[data-toggle="collapse"][href="#' + $(this).attr('id') + '"]').removeClass('active').blur();
  });
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJic0N1c3RvbUZpbGVJbnB1dCIsImdsb2JhbCIsImNyZWF0ZSIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImEiLCJhZGRDbGFzcyIsInNwYW4iLCJpbnB1dCIsImF0dHIiLCJjaGVja2JveCIsIm9wdGlvbiIsImxhYmVsIiwibWVudUJ1dHRvbiIsInNtYWxsQnV0dG9uIiwidHIiLCJ0ZCIsInVsIiwibGkiLCJ0ZXh0Iiwibm9uZVNlbGVjdGVkIiwibXVsdGlwbGVTZXBhcmF0b3IiLCJzZWxlY3RBbGwiLCJub3RBcHBsaWNhYmxlIiwiZmlsdGVyIiwibG9hZGluZyIsImRldGFpbHMiLCJlcnJvciIsInJlbG9hZCIsImljb24iLCJhcnJvd1VwIiwiYXJyb3dEb3duIiwiZnVubmVsIiwiZnVubmVsRmlsbCIsImFqYXgiLCJmZXRjaCIsImNvbnRhaW5lciIsInRoYXQiLCJmaW5kIiwibm90IiwiZWFjaCIsIm9uIiwiZSIsInBhcmVudCIsImhhcyIsInJlbW92ZUNsYXNzIiwidXJsIiwiZGF0YSIsInRhcmdldCIsInNldCIsImhhc0NsYXNzIiwidHJpZ2dlciIsIiRmb3JtIiwicGFyZW50cyIsImZpcnN0IiwiYWRkIiwibGVuZ3RoIiwibWV0aG9kIiwiRm9ybURhdGEiLCJnZXQiLCJzZXJpYWxpemVBcnJheSIsImVtcHR5IiwiYXBwZW5kIiwidHlwZSIsImNvbnRlbnRUeXBlIiwiY29uc3RydWN0b3IiLCJwcm9jZXNzRGF0YSIsInN1Y2Nlc3MiLCJyZXN1bHQiLCJodG1sIiwiaW5pdCIsInhociIsInRocm93bkVycm9yIiwic3RhdHVzIiwic3RhdHVzVGV4dCIsIm0iLCJleGVjIiwicmVzcG9uc2VUZXh0IiwicmVhZHkiLCJwb3BvdmVyIiwiYmx1ciJdLCJtYXBwaW5ncyI6Ijs7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Ii8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImNvbnN0ICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxuY29uc3QgYnNDdXN0b21GaWxlSW5wdXQgPSByZXF1aXJlKCdicy1jdXN0b20tZmlsZS1pbnB1dCcpO1xyXG5cclxucmVxdWlyZSgnYm9vdHN0cmFwJyk7XHJcbnJlcXVpcmUoJy4uL2Nzcy9nbG9iYWwuc2NzcycpO1xyXG5cclxuZ2xvYmFsLmNyZWF0ZSA9IHtcclxuXHRkaXY6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXHJcblxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSB0ZXh0LW5vd3JhcCcpXHJcblx0fSxcclxuXHRcclxuXHRzcGFuOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0aW5wdXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAndGV4dCcpXHJcblx0XHRcdC5hZGRDbGFzcygnZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbScpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRjaGVja2JveDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICdjaGVja2JveCcpXHJcblx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtaW5wdXQnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0b3B0aW9uOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpKVxyXG5cdFx0XHQuYXR0cigndmFsdWUnLCAnJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGxhYmVsOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpXHJcblx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtbGFiZWwgdy0xMDAgdGV4dC1ub3dyYXAnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0bWVudUJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcclxuXHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXNtIGJ0bi1wcmltYXJ5IHRleHQtbm93cmFwIHJvdW5kZWQtMCcpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRzbWFsbEJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcclxuXHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXNtIG14LTEgdGV4dC1ub3dyYXAnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dHI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0bGk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcbn07XHJcblxyXG5nbG9iYWwudGV4dCA9IHtcclxuICAgIG5vbmVTZWxlY3RlZDogJ05vbmUgc2VsZWN0ZWQnLFxyXG4gICAgbXVsdGlwbGVTZXBhcmF0b3I6ICcsICcsXHJcbiAgICBzZWxlY3RBbGw6ICdTZWxlY3QgYWxsJyxcclxuICAgIG5vdEFwcGxpY2FibGU6ICduL2EnLFxyXG4gICAgZmlsdGVyOiAnRmlsdGVyJyxcclxuICAgIGxvYWRpbmc6ICdMb2FkaW5nLi4uJyxcclxuICAgIGRldGFpbHM6ICdEZXRhaWxzJyxcclxuICAgIGVycm9yOiAnRXJldXInLFxyXG4gICAgcmVsb2FkOiAnUmVsYW5jZXInLFxyXG59O1xyXG5cclxuZ2xvYmFsLmljb24gPSB7XHJcblx0YXJyb3dVcDpcclxuXHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktYXJyb3ctYmFyLXVwXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjM1NCA1Ljg1NGEuNS41IDAgMDAwLS43MDhsLTMtM2EuNS41IDAgMDAtLjcwOCAwbC0zIDNhLjUuNSAwIDEwLjcwOC43MDhMOCAzLjIwN2wyLjY0NiAyLjY0N2EuNS41IDAgMDAuNzA4IDB6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggMTBhLjUuNSAwIDAwLjUtLjVWM2EuNS41IDAgMDAtMSAwdjYuNWEuNS41IDAgMDAuNS41em0tNC44IDEuNmMwLS4yMi4xOC0uNC40LS40aDguOGEuNC40IDAgMDEwIC44SDMuNmEuNC40IDAgMDEtLjQtLjR6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHJcblx0YXJyb3dEb3duOlxyXG5cdFx0XHQnPHN2ZyBjbGFzcz1cImJpIGJpLWFycm93LWJhci1kb3duXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdCAgXHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS4zNTQgMTAuMTQ2YS41LjUgMCAwMTAgLjcwOGwtMyAzYS41LjUgMCAwMS0uNzA4IDBsLTMtM2EuNS41IDAgMDEuNzA4LS43MDhMOCAxMi43OTNsMi42NDYtMi42NDdhLjUuNSAwIDAxLjcwOCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCA2YS41LjUgMCAwMS41LjVWMTNhLjUuNSAwIDAxLTEgMFY2LjVBLjUuNSAwIDAxOCA2ek0yIDMuNWEuNS41IDAgMDEuNS0uNWgxMWEuNS41IDAgMDEwIDFoLTExYS41LjUgMCAwMS0uNS0uNXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQnPC9zdmc+JyxcclxuXHRcclxuXHRmdW5uZWw6XHJcblx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktZnVubmVsXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMS41IDEuNUEuNS41IDAgMDEyIDFoMTJhLjUuNSAwIDAxLjUuNXYyYS41LjUgMCAwMS0uMTI4LjMzNEwxMCA4LjY5MlYxMy41YS41LjUgMCAwMS0uMzQyLjQ3NGwtMyAxQS41LjUgMCAwMTYgMTQuNVY4LjY5MkwxLjYyOCAzLjgzNEEuNS41IDAgMDExLjUgMy41di0yem0xIC41djEuMzA4bDQuMzcyIDQuODU4QS41LjUgMCAwMTcgOC41djUuMzA2bDItLjY2NlY4LjVhLjUuNSAwIDAxLjEyOC0uMzM0TDEzLjUgMy4zMDhWMmgtMTF6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHRcdFxyXG5cdGZ1bm5lbEZpbGw6XHJcblx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktZnVubmVsLWZpbGxcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBkPVwiTTIgMy41di0yaDEydjJsLTQuNSA1djVsLTMgMXYtNkwyIDMuNXpcIi8+JyArXHJcblx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEuNSAxLjVBLjUuNSAwIDAxMiAxaDEyYS41LjUgMCAwMS41LjV2MmEuNS41IDAgMDEtLjEyOC4zMzRMMTAgOC42OTJWMTMuNWEuNS41IDAgMDEtLjM0Mi40NzRsLTMgMUEuNS41IDAgMDE2IDE0LjVWOC42OTJMMS42MjggMy44MzRBLjUuNSAwIDAxMS41IDMuNXYtMnptMSAuNXYxLjMwOGw0LjM3MiA0Ljg1OEEuNS41IDAgMDE3IDguNXY1LjMwNmwyLS42NjZWOC41YS41LjUgMCAwMS4xMjgtLjMzNEwxMy41IDMuMzA4VjJoLTExelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdCc8L3N2Zz4nLFxyXG5cdFxyXG5cdGxvYWRpbmc6XHJcblx0XHQnPGRpdiBjbGFzcz1cImQtZmxleCBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyXCI+JyArXHJcblx0XHRcdCc8ZGl2IGNsYXNzPVwic3Bpbm5lci1ib3JkZXJcIiByb2xlPVwic3RhdHVzXCI+JyArXHJcblx0XHRcdFx0JzxzcGFuIGNsYXNzPVwic3Itb25seVwiPicgKyB0ZXh0LmxvYWRpbmcgKyAnPC9zcGFuPicgK1xyXG5cdFx0XHQnPC9kaXY+JyArXHJcblx0XHQnPC9kaXY+JyxcclxuXHRcclxufTtcclxuXHJcbmdsb2JhbC5hamF4ID0ge1xyXG5cdFx0XHJcblx0ZmV0Y2g6IGZ1bmN0aW9uKGNvbnRhaW5lcikge1xyXG5cdFx0XHJcblx0XHRsZXQgdGhhdCA9IHRoaXM7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdhW2RhdGEtdG9nZ2xlPVwiYWpheFwiXSwgYnV0dG9uW2RhdGEtdG9nZ2xlPVwiYWpheFwiXScpLm5vdCgnW3R5cGU9XCJzdWJtaXRcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCQodGhpcykucGFyZW50KCkuaGFzKCcuYWN0aXZlJykpIHtcclxuXHRcdFx0XHRcdCQodGhpcykucGFyZW50KCkuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCB0aGlzO1xyXG5cdFx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0fSk7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcclxuXHRcdFx0XHQkKHRoaXMpLnRyaWdnZXIoJ2NsaWNrJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdFx0JChjb250YWluZXIpLmZpbmQoJ2FbZGF0YS10b2dnbGU9XCJhamF4XCJdW3R5cGU9XCJzdWJtaXRcIl0sIGJ1dHRvbltkYXRhLXRvZ2dsZT1cImFqYXhcIl1bdHlwZT1cInN1Ym1pdFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRpZiAoJGZvcm0gPSAkKHRoaXMpLnBhcmVudHMoJ2Zvcm0nKS5maXJzdCgpKSB7XHJcblx0XHRcdFx0JGZvcm0ub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0JCh0aGlzKS5vbignY2xpY2snLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IHVybCA9ICQodGhpcykuZGF0YSgndXJsJyk7XHJcblx0XHRcdFx0bGV0IHRhcmdldCA9ICQodGhpcykuZGF0YSgndGFyZ2V0JykgfHwgdGhpcztcclxuXHRcdFx0XHRsZXQgYWRkID0gJCh0aGlzKS5kYXRhKCdhZGQnKTtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoJGZvcm0uZmluZCgnaW5wdXRbdHlwZT1cImZpbGVcIl0nKS5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdHZhciBtZXRob2QgPSAnUE9TVCc7XHJcblx0XHRcdFx0XHR2YXIgZGF0YSA9IG5ldyBGb3JtRGF0YSgkZm9ybS5nZXQoMCkpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR2YXIgbWV0aG9kID0gJGZvcm0uYXR0cignbWV0aG9kJykgfHwgJ0dFVCc7XHJcblx0XHRcdFx0XHR2YXIgZGF0YSA9ICRmb3JtLnNlcmlhbGl6ZUFycmF5KCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsLCBtZXRob2QsIGRhdGEsIGFkZCk7XHJcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdCQodGhpcykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKGNvbnRhaW5lcikuZmluZCgnZGl2W2RhdGEtdG9nZ2xlPVwiYWpheFwiXScpLmVhY2goZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHRhcmdldCA9ICQodGhpcykuZGF0YSgndGFyZ2V0JykgfHwgdGhpcztcclxuXHRcdFx0bGV0IHVybCA9ICQodGhpcykuZGF0YSgndXJsJyk7XHJcblx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsKTtcclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH0sXHJcblx0XHRcclxuXHRzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHVybCwgbWV0aG9kPSdHRVQnLCBkYXRhPVtdLCBhZGQ9ZmFsc2UpIHtcclxuXHRcdFxyXG5cdFx0aWYgKHRhcmdldCAmJiB1cmwpIHtcclxuXHRcdFx0aWYgKGFkZCA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHQkKHRhcmdldClcclxuXHRcdFx0XHRcdC5lbXB0eSgpXHJcblx0XHRcdFx0XHQuYXBwZW5kKGljb24ubG9hZGluZylcclxuXHRcdFx0XHQ7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHJcblx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0dXJsIDogdXJsLFxyXG5cdFx0XHRcdHR5cGU6IG1ldGhvZCxcclxuXHRcdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHRcdGNvbnRlbnRUeXBlOiAoZGF0YS5jb25zdHJ1Y3RvciA9PT0gRm9ybURhdGEpP2ZhbHNlOidhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnLFxyXG5cdFx0XHRcdHByb2Nlc3NEYXRhOiAoZGF0YS5jb25zdHJ1Y3RvciAhPT0gRm9ybURhdGEpLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0aWYgKGFkZCkge1xyXG5cdFx0XHRcdFx0XHQkKHRhcmdldCkuaHRtbCgkKHRhcmdldCkuaHRtbCgpICsgcmVzdWx0KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdCQodGFyZ2V0KS5odG1sKHJlc3VsdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRic0N1c3RvbUZpbGVJbnB1dC5pbml0KCk7XHJcblx0XHRcdFx0XHR0aGF0LmZldGNoKHRhcmdldCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRlcnJvcjogZnVuY3Rpb24oeGhyLCB0aHJvd25FcnJvcikge1xyXG5cdFx0XHRcdFx0aWYgKGFkZCA9PT0gZmFsc2UpIHtcclxuXHRcdFx0XHRcdFx0bGV0IHJlc3VsdCA9ICc8ZGl2IGNsYXNzPVwiYWxlcnQgYWxlcnQtZGFuZ2VyXCI+JyArXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JzxoNiBjbGFzcz1cImFsZXJ0LWhlYWRpbmcgZm9udC13ZWlnaHQtYm9sZFwiPicgKyB0ZXh0LmVycm9yICsgJyAnICsgeGhyLnN0YXR1cyArICcgOiAnICsgeGhyLnN0YXR1c1RleHQgKyAnPC9oNj4nO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0aWYgKChtID0gLzx0aXRsZT4oLispPFxcL3RpdGxlPi8uZXhlYyh4aHIucmVzcG9uc2VUZXh0KSkgIT09IG51bGwpIHtcclxuXHRcdFx0XHRcdFx0XHRyZXN1bHQgKz0gJzxwPicgKyBtWzFdICsgJzwvcD4nO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRyZXN1bHQgKz0gJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zbSBidG4tcHJpbWFyeVwiIGRhdGEtdG9nZ2xlPVwiYWpheFwiIGRhdGEtdXJsPVwiJyArIHVybCArICdcIiBkYXRhLXRhcmdldD1cIicgKyB0YXJnZXQgKyAnXCI+JyArIHRleHQucmVsb2FkICsgJzwvYnV0dG9uPicgK1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQnPC9kaXY+JztcclxuXHRcdFx0XHRcdFx0JCh0YXJnZXQpLmh0bWwocmVzdWx0KTtcclxuXHRcdFx0XHRcdFx0dGhhdC5mZXRjaCh0YXJnZXQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcbn1cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcclxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XHJcblx0XHJcbiAgICBhamF4LmZldGNoKCdib2R5Jyk7XHJcblx0XHJcbiAgICAvKlxyXG5cdCQoJ1tpZF0nKS5vbignc2hvdy5icy5jb2xsYXBzZScsIGZ1bmN0aW9uKCkge1xyXG5cdFx0JCgnW2RhdGEtdG9nZ2xlPVwiY29sbGFwc2VcIl1baHJlZj1cIiMnICsgJCh0aGlzKS5hdHRyKCdpZCcpICsgJ1wiXScpXHJcblx0XHRcdC5hZGRDbGFzcygnYWN0aXZlJylcclxuXHRcdDtcclxuXHR9KTtcclxuXHQqL1xyXG4gICAgXHJcblx0JCgnW2lkXScpLm9uKCdoaWRkZW4uYnMuY29sbGFwc2UnLCBmdW5jdGlvbigpIHtcclxuXHRcdCQoJ1tkYXRhLXRvZ2dsZT1cImNvbGxhcHNlXCJdW2hyZWY9XCIjJyArICQodGhpcykuYXR0cignaWQnKSArICdcIl0nKVxyXG5cdFx0XHQucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpXHJcblx0XHRcdC5ibHVyKClcclxuXHRcdDtcclxuXHR9KTtcclxuICAgIFxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9