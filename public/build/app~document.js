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

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js"); // this "modifies" the jquery module: adding behavior to it
// the bootstrap module doesn't export/return anything


__webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

__webpack_require__(/*! ../css/global.scss */ "./assets/css/global.scss"); // or you can include specific pieces
//require('bootstrap/js/dist/tooltip');
//require('bootstrap/js/dist/popover');


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
  details: 'Details'
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

        if ($form.find('input[type="file"]').length) {
          var method = 'POST';
          var data = new FormData($form.get(0));
        } else {
          var method = $form.attr('method') || 'GET';
          var data = $form.serializeArray();
        }

        that.set(target, url, method, data);
        return false;
      });
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

    if (target && url) {
      $(target).empty().append(icon.loading);
      var that = this;
      $.ajax({
        url: url,
        type: method,
        data: data,
        contentType: data.constructor === FormData ? false : 'application/x-www-form-urlencoded; charset=UTF-8',
        processData: data.constructor !== FormData,
        success: function success(result) {
          $(target).empty().html(result);
          that.fetch(target);
        }
      });
    }
  }
};
$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
  ajax.fetch('body');
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJnbG9iYWwiLCJjcmVhdGUiLCJkaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhIiwiYWRkQ2xhc3MiLCJzcGFuIiwiaW5wdXQiLCJhdHRyIiwiY2hlY2tib3giLCJvcHRpb24iLCJsYWJlbCIsIm1lbnVCdXR0b24iLCJzbWFsbEJ1dHRvbiIsInRyIiwidGQiLCJ1bCIsImxpIiwidGV4dCIsIm5vbmVTZWxlY3RlZCIsIm11bHRpcGxlU2VwYXJhdG9yIiwic2VsZWN0QWxsIiwibm90QXBwbGljYWJsZSIsImZpbHRlciIsImxvYWRpbmciLCJkZXRhaWxzIiwiaWNvbiIsImFycm93VXAiLCJhcnJvd0Rvd24iLCJmdW5uZWwiLCJmdW5uZWxGaWxsIiwiYWpheCIsImZldGNoIiwiY29udGFpbmVyIiwidGhhdCIsImZpbmQiLCJub3QiLCJlYWNoIiwib24iLCJlIiwicGFyZW50IiwiaGFzIiwicmVtb3ZlQ2xhc3MiLCJ1cmwiLCJkYXRhIiwidGFyZ2V0Iiwic2V0IiwiaGFzQ2xhc3MiLCJ0cmlnZ2VyIiwiJGZvcm0iLCJwYXJlbnRzIiwiZmlyc3QiLCJsZW5ndGgiLCJtZXRob2QiLCJGb3JtRGF0YSIsImdldCIsInNlcmlhbGl6ZUFycmF5IiwiZW1wdHkiLCJhcHBlbmQiLCJ0eXBlIiwiY29udGVudFR5cGUiLCJjb25zdHJ1Y3RvciIsInByb2Nlc3NEYXRhIiwic3VjY2VzcyIsInJlc3VsdCIsImh0bWwiLCJyZWFkeSIsInBvcG92ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCLEMsQ0FDQTtBQUNBOzs7QUFDQUEsbUJBQU8sQ0FBQyxnRUFBRCxDQUFQOztBQUNBQSxtQkFB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SSxDQUFDaUIsV0FBTCxLQUFxQlAsUUFMN0I7QUFPTlMsZUFBTyxFQUFFLGlCQUFTQyxNQUFULEVBQWlCO0FBQ3pCbkUsV0FBQyxDQUFDZ0QsTUFBRCxDQUFELENBQ0VZLEtBREYsR0FFRVEsSUFGRixDQUVPRCxNQUZQO0FBSUE5QixjQUFJLENBQUNGLEtBQUwsQ0FBV2EsTUFBWDtBQUVBO0FBZEssT0FBUDtBQWdCQTtBQUVEO0FBNUZZLENBQWQ7QUFnR0FoRCxDQUFDLENBQUNLLFFBQUQsQ0FBRCxDQUFZZ0UsS0FBWixDQUFrQixZQUFXO0FBRXpCckUsR0FBQyxDQUFDLHlCQUFELENBQUQsQ0FBNkJzRSxPQUE3QjtBQUNIcEMsTUFBSSxDQUFDQyxLQUFMLENBQVcsTUFBWDtBQUVBLENBTEQsRSIsImZpbGUiOiJhcHB+ZG9jdW1lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJjb25zdCAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbi8vIHRoaXMgXCJtb2RpZmllc1wiIHRoZSBqcXVlcnkgbW9kdWxlOiBhZGRpbmcgYmVoYXZpb3IgdG8gaXRcclxuLy8gdGhlIGJvb3RzdHJhcCBtb2R1bGUgZG9lc24ndCBleHBvcnQvcmV0dXJuIGFueXRoaW5nXHJcbnJlcXVpcmUoJ2Jvb3RzdHJhcCcpO1xyXG5yZXF1aXJlKCcuLi9jc3MvZ2xvYmFsLnNjc3MnKTtcclxuXHJcbi8vIG9yIHlvdSBjYW4gaW5jbHVkZSBzcGVjaWZpYyBwaWVjZXNcclxuLy9yZXF1aXJlKCdib290c3RyYXAvanMvZGlzdC90b29sdGlwJyk7XHJcbi8vcmVxdWlyZSgnYm9vdHN0cmFwL2pzL2Rpc3QvcG9wb3ZlcicpO1xyXG5cclxuZ2xvYmFsLmNyZWF0ZSA9IHtcclxuXHRkaXY6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykpXHJcblxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0YTogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJykpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSB0ZXh0LW5vd3JhcCcpXHJcblx0fSxcclxuXHRcclxuXHRzcGFuOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0aW5wdXQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAndGV4dCcpXHJcblx0XHRcdC5hZGRDbGFzcygnZm9ybS1jb250cm9sIGZvcm0tY29udHJvbC1zbScpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRjaGVja2JveDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpKVxyXG5cdFx0XHQuYXR0cigndHlwZScsICdjaGVja2JveCcpXHJcblx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtaW5wdXQnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0b3B0aW9uOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpKVxyXG5cdFx0XHQuYXR0cigndmFsdWUnLCAnJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGxhYmVsOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJykpXHJcblx0XHRcdC5hZGRDbGFzcygnY3VzdG9tLWNvbnRyb2wtbGFiZWwgdy0xMDAgdGV4dC1ub3dyYXAnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0bWVudUJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcclxuXHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXNtIGJ0bi1wcmltYXJ5IHRleHQtbm93cmFwIHJvdW5kZWQtMCcpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRzbWFsbEJ1dHRvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKSlcclxuXHRcdFx0LmFkZENsYXNzKCdidG4gYnRuLXNtIG14LTEgdGV4dC1ub3dyYXAnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dHI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndHInKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dGQ6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGQnKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0dWw6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0bGk6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKSlcclxuXHRcdFxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcbn07XHJcblxyXG5nbG9iYWwudGV4dCA9IHtcclxuICAgIG5vbmVTZWxlY3RlZDogJ05vbmUgc2VsZWN0ZWQnLFxyXG4gICAgbXVsdGlwbGVTZXBhcmF0b3I6ICcsICcsXHJcbiAgICBzZWxlY3RBbGw6ICdTZWxlY3QgYWxsJyxcclxuICAgIG5vdEFwcGxpY2FibGU6ICduL2EnLFxyXG4gICAgZmlsdGVyOiAnRmlsdGVyJyxcclxuICAgIGxvYWRpbmc6ICdMb2FkaW5nLi4uJyxcclxuICAgIGRldGFpbHM6ICdEZXRhaWxzJyxcclxufTtcclxuXHJcbmdsb2JhbC5pY29uID0ge1xyXG5cdGFycm93VXA6XHJcblx0XHQnPHN2ZyBjbGFzcz1cImJpIGJpLWFycm93LWJhci11cFwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXHJcblx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xMS4zNTQgNS44NTRhLjUuNSAwIDAwMC0uNzA4bC0zLTNhLjUuNSAwIDAwLS43MDggMGwtMyAzYS41LjUgMCAxMC43MDguNzA4TDggMy4yMDdsMi42NDYgMi42NDdhLjUuNSAwIDAwLjcwOCAwelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04IDEwYS41LjUgMCAwMC41LS41VjNhLjUuNSAwIDAwLTEgMHY2LjVhLjUuNSAwIDAwLjUuNXptLTQuOCAxLjZjMC0uMjIuMTgtLjQuNC0uNGg4LjhhLjQuNCAwIDAxMCAuOEgzLjZhLjQuNCAwIDAxLS40LS40elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHQnPC9zdmc+JyxcclxuXHRcdFxyXG5cdGFycm93RG93bjpcclxuXHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1hcnJvdy1iYXItZG93blwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXHJcblx0XHQgIFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuMzU0IDEwLjE0NmEuNS41IDAgMDEwIC43MDhsLTMgM2EuNS41IDAgMDEtLjcwOCAwbC0zLTNhLjUuNSAwIDAxLjcwOC0uNzA4TDggMTIuNzkzbDIuNjQ2LTIuNjQ3YS41LjUgMCAwMS43MDggMHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0ICBcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTggNmEuNS41IDAgMDEuNS41VjEzYS41LjUgMCAwMS0xIDBWNi41QS41LjUgMCAwMTggNnpNMiAzLjVhLjUuNSAwIDAxLjUtLjVoMTFhLjUuNSAwIDAxMCAxaC0xMWEuNS41IDAgMDEtLjUtLjV6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHJcblx0ZnVubmVsOlxyXG5cdFx0XHQnPHN2ZyBjbGFzcz1cImJpIGJpLWZ1bm5lbFwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXHJcblx0XHRcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTEuNSAxLjVBLjUuNSAwIDAxMiAxaDEyYS41LjUgMCAwMS41LjV2MmEuNS41IDAgMDEtLjEyOC4zMzRMMTAgOC42OTJWMTMuNWEuNS41IDAgMDEtLjM0Mi40NzRsLTMgMUEuNS41IDAgMDE2IDE0LjVWOC42OTJMMS42MjggMy44MzRBLjUuNSAwIDAxMS41IDMuNXYtMnptMSAuNXYxLjMwOGw0LjM3MiA0Ljg1OEEuNS41IDAgMDE3IDguNXY1LjMwNmwyLS42NjZWOC41YS41LjUgMCAwMS4xMjgtLjMzNEwxMy41IDMuMzA4VjJoLTExelwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdCc8L3N2Zz4nLFxyXG5cdFx0XHRcclxuXHRmdW5uZWxGaWxsOlxyXG5cdFx0XHQnPHN2ZyBjbGFzcz1cImJpIGJpLWZ1bm5lbC1maWxsXCIgd2lkdGg9XCIxZW1cIiBoZWlnaHQ9XCIxZW1cIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cImN1cnJlbnRDb2xvclwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIj4nICtcclxuXHRcdFx0XHQnPHBhdGggZD1cIk0yIDMuNXYtMmgxMnYybC00LjUgNXY1bC0zIDF2LTZMMiAzLjV6XCIvPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xLjUgMS41QS41LjUgMCAwMTIgMWgxMmEuNS41IDAgMDEuNS41djJhLjUuNSAwIDAxLS4xMjguMzM0TDEwIDguNjkyVjEzLjVhLjUuNSAwIDAxLS4zNDIuNDc0bC0zIDFBLjUuNSAwIDAxNiAxNC41VjguNjkyTDEuNjI4IDMuODM0QS41LjUgMCAwMTEuNSAzLjV2LTJ6bTEgLjV2MS4zMDhsNC4zNzIgNC44NThBLjUuNSAwIDAxNyA4LjV2NS4zMDZsMi0uNjY2VjguNWEuNS41IDAgMDEuMTI4LS4zMzRMMTMuNSAzLjMwOFYyaC0xMXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQnPC9zdmc+JyxcclxuXHRcclxuXHRsb2FkaW5nOlxyXG5cdFx0JzxkaXYgY2xhc3M9XCJkLWZsZXgganVzdGlmeS1jb250ZW50LWNlbnRlclwiPicgK1xyXG5cdFx0XHQnPGRpdiBjbGFzcz1cInNwaW5uZXItYm9yZGVyXCIgcm9sZT1cInN0YXR1c1wiPicgK1xyXG5cdFx0XHRcdCc8c3BhbiBjbGFzcz1cInNyLW9ubHlcIj4nICsgdGV4dC5sb2FkaW5nICsgJzwvc3Bhbj4nICtcclxuXHRcdFx0JzwvZGl2PicgK1xyXG5cdFx0JzwvZGl2PicsXHJcblx0XHJcbn07XHJcblxyXG5nbG9iYWwuYWpheCA9IHtcclxuXHRcdFxyXG5cdGZldGNoOiBmdW5jdGlvbihjb250YWluZXIpIHtcclxuXHRcdFxyXG5cdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHJcblx0XHQkKGNvbnRhaW5lcikuZmluZCgnYVtkYXRhLXRvZ2dsZT1cImFqYXhcIl0sIGJ1dHRvbltkYXRhLXRvZ2dsZT1cImFqYXhcIl0nKS5ub3QoJ1t0eXBlPVwic3VibWl0XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICgkKHRoaXMpLnBhcmVudCgpLmhhcygnLmFjdGl2ZScpKSB7XHJcblx0XHRcdFx0XHQkKHRoaXMpLnBhcmVudCgpLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0bGV0IHVybCA9ICQodGhpcykuZGF0YSgndXJsJyk7XHJcblx0XHRcdFx0bGV0IHRhcmdldCA9ICQodGhpcykuZGF0YSgndGFyZ2V0JykgfHwgdGhpcztcclxuXHRcdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCk7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdhW2RhdGEtdG9nZ2xlPVwiYWpheFwiXVt0eXBlPVwic3VibWl0XCJdLCBidXR0b25bZGF0YS10b2dnbGU9XCJhamF4XCJdW3R5cGU9XCJzdWJtaXRcIl0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCRmb3JtID0gJCh0aGlzKS5wYXJlbnRzKCdmb3JtJykuZmlyc3QoKSkge1xyXG5cdFx0XHRcdCRmb3JtLm9uKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XHJcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRcdCQodGhpcykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xyXG5cdFx0XHRcdGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpIHx8IHRoaXM7XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0aWYgKCRmb3JtLmZpbmQoJ2lucHV0W3R5cGU9XCJmaWxlXCJdJykubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHR2YXIgbWV0aG9kID0gJ1BPU1QnO1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSBuZXcgRm9ybURhdGEoJGZvcm0uZ2V0KDApKTtcclxuXHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0dmFyIG1ldGhvZCA9ICRmb3JtLmF0dHIoJ21ldGhvZCcpIHx8ICdHRVQnO1xyXG5cdFx0XHRcdFx0dmFyIGRhdGEgPSAkZm9ybS5zZXJpYWxpemVBcnJheSgpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRcclxuXHRcdFx0XHR0aGF0LnNldCh0YXJnZXQsIHVybCwgbWV0aG9kLCBkYXRhKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKGNvbnRhaW5lcikuZmluZCgnZGl2W2RhdGEtdG9nZ2xlPVwiYWpheFwiXScpLmVhY2goZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHRhcmdldCA9ICQodGhpcykuZGF0YSgndGFyZ2V0JykgfHwgdGhpcztcclxuXHRcdFx0bGV0IHVybCA9ICQodGhpcykuZGF0YSgndXJsJyk7XHJcblx0XHRcdHRoYXQuc2V0KHRhcmdldCwgdXJsKTtcclxuXHRcdFx0XHJcblx0XHR9KTtcclxuXHRcdFxyXG5cdH0sXHJcblx0XHRcclxuXHRzZXQ6IGZ1bmN0aW9uICh0YXJnZXQsIHVybCwgbWV0aG9kPSdHRVQnLCBkYXRhPVtdKSB7XHJcblx0XHRcclxuXHRcdGlmICh0YXJnZXQgJiYgdXJsKSB7XHJcblx0XHRcdCQodGFyZ2V0KVxyXG5cdFx0XHRcdC5lbXB0eSgpXHJcblx0XHRcdFx0LmFwcGVuZChpY29uLmxvYWRpbmcpO1xyXG5cdFx0XHRcclxuXHRcdFx0bGV0IHRoYXQgPSB0aGlzO1xyXG5cdFx0XHRcclxuXHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHR1cmwgOiB1cmwsXHJcblx0XHRcdFx0dHlwZTogbWV0aG9kLFxyXG5cdFx0XHRcdGRhdGE6IGRhdGEsXHJcblx0XHRcdFx0Y29udGVudFR5cGU6IChkYXRhLmNvbnN0cnVjdG9yID09PSBGb3JtRGF0YSk/ZmFsc2U6J2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCcsXHJcblx0XHRcdFx0cHJvY2Vzc0RhdGE6IChkYXRhLmNvbnN0cnVjdG9yICE9PSBGb3JtRGF0YSksXHJcblx0XHRcdFx0XHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24ocmVzdWx0KSB7XHJcblx0XHRcdFx0XHQkKHRhcmdldClcclxuXHRcdFx0XHRcdFx0LmVtcHR5KClcclxuXHRcdFx0XHRcdFx0Lmh0bWwocmVzdWx0KTtcclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0dGhhdC5mZXRjaCh0YXJnZXQpO1xyXG5cdFx0XHRcdFx0XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcbn1cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcclxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XHJcblx0YWpheC5mZXRjaCgnYm9keScpO1xyXG4gICAgXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=