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

var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");

var bsCustomFileInput = __webpack_require__(/*! bs-custom-file-input */ "./node_modules/bs-custom-file-input/dist/bs-custom-file-input.js");

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
      $(target).empty().append(icon.loading);
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
        }
      });
    }
  }
};
$(document).ready(function () {
  $('[data-toggle="popover"]').popover();
  ajax.fetch('body');
 
	
	$('[id]').on('hidden.bs.collapse', function() {
		$('[data-toggle="collapse"][href="#' + $(this).attr('id') + '"]')
			.removeClass('active')
			.blur()
		;
	});
  
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2dsb2JhbC5zY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAuanMiXSwibmFtZXMiOlsiJCIsInJlcXVpcmUiLCJic0N1c3RvbUZpbGVJbnB1dCIsImdsb2JhbCIsImNyZWF0ZSIsImRpdiIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImEiLCJhZGRDbGFzcyIsInNwYW4iLCJpbnB1dCIsImF0dHIiLCJjaGVja2JveCIsIm9wdGlvbiIsImxhYmVsIiwibWVudUJ1dHRvbiIsInNtYWxsQnV0dG9uIiwidHIiLCJ0ZCIsInVsIiwibGkiLCJ0ZXh0Iiwibm9uZVNlbGVjdGVkIiwibXVsdGlwbGVTZXBhcmF0b3IiLCJzZWxlY3RBbGwiLCJub3RBcHBsaWNhYmxlIiwiZmlsdGVyIiwibG9hZGluZyIsImRldGFpbHMiLCJpY29uIiwiYXJyb3dVcCIsImFycm93RG93biIsImZ1bm5lbCIsImZ1bm5lbEZpbGwiLCJhamF4IiwiZmV0Y2giLCJjb250YWluZXIiLCJ0aGF0IiwiZmluZCIsIm5vdCIsImVhY2giLCJvbiIsImUiLCJwYXJlbnQiLCJoYXMiLCJyZW1vdmVDbGFzcyIsInVybCIsImRhdGEiLCJ0YXJnZXQiLCJzZXQiLCJoYXNDbGFzcyIsInRyaWdnZXIiLCIkZm9ybSIsInBhcmVudHMiLCJmaXJzdCIsImFkZCIsImxlbmd0aCIsIm1ldGhvZCIsIkZvcm1EYXRhIiwiZ2V0Iiwic2VyaWFsaXplQXJyYXkiLCJlbXB0eSIsImFwcGVuZCIsInR5cGUiLCJjb250ZW50VHlwZSIsImNvbnN0cnVjdG9yIiwicHJvY2Vzc0RhdGEiLCJzdWNjZXNzIiwicmVzdWx0IiwiaHRtbCIsImluaXQiLCJyZWFkeSIsInBvcG92ZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHVDOzs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTUEsQ0FBQyxHQUFHQyxtQkFBTyxDQUFDLG9EQUFELENBQWpCOztBQUNBLElBQU1DLGlCQUFpQixH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LEdBQWQsRUFBbUI7QUFDbEIvQyxPQUFDLENBQUNpRCxNQUFELENBQUQsQ0FDRWEsS0FERixHQUVFQyxNQUZGLENBRVNqQyxJQUFJLENBQUNGLE9BRmQ7QUFJQSxVQUFJVSxJQUFJLEdBQUcsSUFBWDtBQUVBdEMsT0FBQyxDQUFDbUMsSUFBRixDQUFPO0FBQ05ZLFdBQUcsRUFBR0EsR0FEQTtBQUVOaUIsWUFBSSxFQUFFTixNQUZBO0FBR05WLFlBQUksRUFBRUEsSUFIQTtBQUlOaUIsbUJBQVcsRUFBR2pCLElBQUksQ0FBQ2tCLFdBQUwsS0FBcUJQLFFBQXRCLEdBQWdDLEtBQWhDLEdBQXNDLGtEQUo3QztBQUtOUSxtQkFBVyxFQUFHbkIsSUFBSSxDQUFDa0IsV0FBTCxLQUFxQlAsUUFMN0I7QUFPTlMsZUFBTyxFQUFFLGlCQUFTQyxNQUFULEVBQWlCO0FBQ3pCLGNBQUliLEdBQUosRUFBUztBQUNSeEQsYUFBQyxDQUFDaUQsTUFBRCxDQUFELENBQVVxQixJQUFWLENBQWV0RSxDQUFDLENBQUNpRCxNQUFELENBQUQsQ0FBVXFCLElBQVYsS0FBbUJELE1BQWxDO0FBQ0EsV0FGRCxNQUVPO0FBQ05yRSxhQUFDLENBQUNpRCxNQUFELENBQUQsQ0FBVXFCLElBQVYsQ0FBZUQsTUFBZjtBQUNBOztBQUNEbkUsMkJBQWlCLENBQUNxRSxJQUFsQjtBQUNBakMsY0FBSSxDQUFDRixLQUFMLENBQVdhLE1BQVg7QUFDQTtBQWZLLE9BQVA7QUFpQkE7QUFFRDtBQWxHWSxDQUFkO0FBc0dBakQsQ0FBQyxDQUFDTSxRQUFELENBQUQsQ0FBWWtFLEtBQVosQ0FBa0IsWUFBVztBQUV6QnhFLEdBQUMsQ0FBQyx5QkFBRCxDQUFELENBQTZCeUUsT0FBN0I7QUFDSHRDLE1BQUksQ0FBQ0MsS0FBTCxDQUFXLE1BQVg7QUFFQSxDQUxELEUiLCJmaWxlIjoiYXBwfmRvY3VtZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiY29uc3QgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xyXG5jb25zdCBic0N1c3RvbUZpbGVJbnB1dCA9IHJlcXVpcmUoJ2JzLWN1c3RvbS1maWxlLWlucHV0Jyk7XHJcblxyXG5yZXF1aXJlKCdib290c3RyYXAnKTtcclxucmVxdWlyZSgnLi4vY3NzL2dsb2JhbC5zY3NzJyk7XHJcblxyXG4vLyBvciB5b3UgY2FuIGluY2x1ZGUgc3BlY2lmaWMgcGllY2VzXHJcbi8vcmVxdWlyZSgnYm9vdHN0cmFwL2pzL2Rpc3QvdG9vbHRpcCcpO1xyXG4vL3JlcXVpcmUoJ2Jvb3RzdHJhcC9qcy9kaXN0L3BvcG92ZXInKTtcclxuXHJcbmdsb2JhbC5jcmVhdGUgPSB7XHJcblx0ZGl2OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpKVxyXG5cclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGE6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2J0biBidG4tc20gdGV4dC1ub3dyYXAnKVxyXG5cdH0sXHJcblx0XHJcblx0c3BhbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGlucHV0OiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0JykpXHJcblx0XHRcdC5hdHRyKCd0eXBlJywgJ3RleHQnKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2Zvcm0tY29udHJvbCBmb3JtLWNvbnRyb2wtc20nKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0Y2hlY2tib3g6IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKSlcclxuXHRcdFx0LmF0dHIoJ3R5cGUnLCAnY2hlY2tib3gnKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWlucHV0JylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdG9wdGlvbjogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKSlcclxuXHRcdFx0LmF0dHIoJ3ZhbHVlJywgJycpXHJcblx0XHQ7XHJcblx0fSxcclxuXHRcclxuXHRsYWJlbDogZnVuY3Rpb24oKSB7XHJcblx0XHRyZXR1cm4gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpKVxyXG5cdFx0XHQuYWRkQ2xhc3MoJ2N1c3RvbS1jb250cm9sLWxhYmVsIHctMTAwIHRleHQtbm93cmFwJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdG1lbnVCdXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBidG4tcHJpbWFyeSB0ZXh0LW5vd3JhcCByb3VuZGVkLTAnKVxyXG5cdFx0O1xyXG5cdH0sXHJcblx0XHJcblx0c21hbGxCdXR0b246IGZ1bmN0aW9uKCkge1xyXG5cdFx0cmV0dXJuICQoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJykpXHJcblx0XHRcdC5hZGRDbGFzcygnYnRuIGJ0bi1zbSBteC0xIHRleHQtbm93cmFwJylcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRyOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RyJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHRkOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RkJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdHVsOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG5cdGxpOiBmdW5jdGlvbigpIHtcclxuXHRcdHJldHVybiAkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJykpXHJcblx0XHRcclxuXHRcdDtcclxuXHR9LFxyXG5cdFxyXG59O1xyXG5cclxuZ2xvYmFsLnRleHQgPSB7XHJcbiAgICBub25lU2VsZWN0ZWQ6ICdOb25lIHNlbGVjdGVkJyxcclxuICAgIG11bHRpcGxlU2VwYXJhdG9yOiAnLCAnLFxyXG4gICAgc2VsZWN0QWxsOiAnU2VsZWN0IGFsbCcsXHJcbiAgICBub3RBcHBsaWNhYmxlOiAnbi9hJyxcclxuICAgIGZpbHRlcjogJ0ZpbHRlcicsXHJcbiAgICBsb2FkaW5nOiAnTG9hZGluZy4uLicsXHJcbiAgICBkZXRhaWxzOiAnRGV0YWlscycsXHJcbn07XHJcblxyXG5nbG9iYWwuaWNvbiA9IHtcclxuXHRhcnJvd1VwOlxyXG5cdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1hcnJvdy1iYXItdXBcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMTEuMzU0IDUuODU0YS41LjUgMCAwMDAtLjcwOGwtMy0zYS41LjUgMCAwMC0uNzA4IDBsLTMgM2EuNS41IDAgMTAuNzA4LjcwOEw4IDMuMjA3bDIuNjQ2IDIuNjQ3YS41LjUgMCAwMC43MDggMHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNOCAxMGEuNS41IDAgMDAuNS0uNVYzYS41LjUgMCAwMC0xIDB2Ni41YS41LjUgMCAwMC41LjV6bS00LjggMS42YzAtLjIyLjE4LS40LjQtLjRoOC44YS40LjQgMCAwMTAgLjhIMy42YS40LjQgMCAwMS0uNC0uNHpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0Jzwvc3ZnPicsXHJcblx0XHRcclxuXHRhcnJvd0Rvd246XHJcblx0XHRcdCc8c3ZnIGNsYXNzPVwiYmkgYmktYXJyb3ctYmFyLWRvd25cIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0ICBcdFx0JzxwYXRoIGZpbGwtcnVsZT1cImV2ZW5vZGRcIiBkPVwiTTExLjM1NCAxMC4xNDZhLjUuNSAwIDAxMCAuNzA4bC0zIDNhLjUuNSAwIDAxLS43MDggMGwtMy0zYS41LjUgMCAwMS43MDgtLjcwOEw4IDEyLjc5M2wyLjY0Ni0yLjY0N2EuNS41IDAgMDEuNzA4IDB6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdCAgXHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk04IDZhLjUuNSAwIDAxLjUuNVYxM2EuNS41IDAgMDEtMSAwVjYuNUEuNS41IDAgMDE4IDZ6TTIgMy41YS41LjUgMCAwMS41LS41aDExYS41LjUgMCAwMTAgMWgtMTFhLjUuNSAwIDAxLS41LS41elwiIGNsaXAtcnVsZT1cImV2ZW5vZGRcIi8+JyArXHJcblx0XHRcdCc8L3N2Zz4nLFxyXG5cdFxyXG5cdGZ1bm5lbDpcclxuXHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1mdW5uZWxcIiB3aWR0aD1cIjFlbVwiIGhlaWdodD1cIjFlbVwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPicgK1xyXG5cdFx0XHRcdCc8cGF0aCBmaWxsLXJ1bGU9XCJldmVub2RkXCIgZD1cIk0xLjUgMS41QS41LjUgMCAwMTIgMWgxMmEuNS41IDAgMDEuNS41djJhLjUuNSAwIDAxLS4xMjguMzM0TDEwIDguNjkyVjEzLjVhLjUuNSAwIDAxLS4zNDIuNDc0bC0zIDFBLjUuNSAwIDAxNiAxNC41VjguNjkyTDEuNjI4IDMuODM0QS41LjUgMCAwMTEuNSAzLjV2LTJ6bTEgLjV2MS4zMDhsNC4zNzIgNC44NThBLjUuNSAwIDAxNyA4LjV2NS4zMDZsMi0uNjY2VjguNWEuNS41IDAgMDEuMTI4LS4zMzRMMTMuNSAzLjMwOFYyaC0xMXpcIiBjbGlwLXJ1bGU9XCJldmVub2RkXCIvPicgK1xyXG5cdFx0XHQnPC9zdmc+JyxcclxuXHRcdFx0XHJcblx0ZnVubmVsRmlsbDpcclxuXHRcdFx0JzxzdmcgY2xhc3M9XCJiaSBiaS1mdW5uZWwtZmlsbFwiIHdpZHRoPVwiMWVtXCIgaGVpZ2h0PVwiMWVtXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+JyArXHJcblx0XHRcdFx0JzxwYXRoIGQ9XCJNMiAzLjV2LTJoMTJ2MmwtNC41IDV2NWwtMyAxdi02TDIgMy41elwiLz4nICtcclxuXHRcdFx0XHQnPHBhdGggZmlsbC1ydWxlPVwiZXZlbm9kZFwiIGQ9XCJNMS41IDEuNUEuNS41IDAgMDEyIDFoMTJhLjUuNSAwIDAxLjUuNXYyYS41LjUgMCAwMS0uMTI4LjMzNEwxMCA4LjY5MlYxMy41YS41LjUgMCAwMS0uMzQyLjQ3NGwtMyAxQS41LjUgMCAwMTYgMTQuNVY4LjY5MkwxLjYyOCAzLjgzNEEuNS41IDAgMDExLjUgMy41di0yem0xIC41djEuMzA4bDQuMzcyIDQuODU4QS41LjUgMCAwMTcgOC41djUuMzA2bDItLjY2NlY4LjVhLjUuNSAwIDAxLjEyOC0uMzM0TDEzLjUgMy4zMDhWMmgtMTF6XCIgY2xpcC1ydWxlPVwiZXZlbm9kZFwiLz4nICtcclxuXHRcdFx0Jzwvc3ZnPicsXHJcblx0XHJcblx0bG9hZGluZzpcclxuXHRcdCc8ZGl2IGNsYXNzPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj4nICtcclxuXHRcdFx0JzxkaXYgY2xhc3M9XCJzcGlubmVyLWJvcmRlclwiIHJvbGU9XCJzdGF0dXNcIj4nICtcclxuXHRcdFx0XHQnPHNwYW4gY2xhc3M9XCJzci1vbmx5XCI+JyArIHRleHQubG9hZGluZyArICc8L3NwYW4+JyArXHJcblx0XHRcdCc8L2Rpdj4nICtcclxuXHRcdCc8L2Rpdj4nLFxyXG5cdFxyXG59O1xyXG5cclxuZ2xvYmFsLmFqYXggPSB7XHJcblx0XHRcclxuXHRmZXRjaDogZnVuY3Rpb24oY29udGFpbmVyKSB7XHJcblx0XHRcclxuXHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFxyXG5cdFx0JChjb250YWluZXIpLmZpbmQoJ2FbZGF0YS10b2dnbGU9XCJhamF4XCJdLCBidXR0b25bZGF0YS10b2dnbGU9XCJhamF4XCJdJykubm90KCdbdHlwZT1cInN1Ym1pdFwiXScpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5wYXJlbnQoKS5oYXMoJy5hY3RpdmUnKSkge1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5wYXJlbnQoKS5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGxldCB1cmwgPSAkKHRoaXMpLmRhdGEoJ3VybCcpO1xyXG5cdFx0XHRcdGxldCB0YXJnZXQgPSAkKHRoaXMpLmRhdGEoJ3RhcmdldCcpIHx8IHRoaXM7XHJcblx0XHRcdFx0dGhhdC5zZXQodGFyZ2V0LCB1cmwpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xyXG5cdFx0XHRcdCQodGhpcykudHJpZ2dlcignY2xpY2snKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0XHQkKGNvbnRhaW5lcikuZmluZCgnYVtkYXRhLXRvZ2dsZT1cImFqYXhcIl1bdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uW2RhdGEtdG9nZ2xlPVwiYWpheFwiXVt0eXBlPVwic3VibWl0XCJdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHJcblx0XHRcdGlmICgkZm9ybSA9ICQodGhpcykucGFyZW50cygnZm9ybScpLmZpcnN0KCkpIHtcclxuXHRcdFx0XHQkZm9ybS5vbignc3VibWl0JywgZnVuY3Rpb24oZSkge1xyXG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0XHQkKHRoaXMpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCB0aGlzO1xyXG5cdFx0XHRcdGxldCBhZGQgPSAkKHRoaXMpLmRhdGEoJ2FkZCcpO1xyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdGlmICgkZm9ybS5maW5kKCdpbnB1dFt0eXBlPVwiZmlsZVwiXScpLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0dmFyIG1ldGhvZCA9ICdQT1NUJztcclxuXHRcdFx0XHRcdHZhciBkYXRhID0gbmV3IEZvcm1EYXRhKCRmb3JtLmdldCgwKSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHZhciBtZXRob2QgPSAkZm9ybS5hdHRyKCdtZXRob2QnKSB8fCAnR0VUJztcclxuXHRcdFx0XHRcdHZhciBkYXRhID0gJGZvcm0uc2VyaWFsaXplQXJyYXkoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0XHJcblx0XHRcdFx0dGhhdC5zZXQodGFyZ2V0LCB1cmwsIG1ldGhvZCwgZGF0YSwgYWRkKTtcclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHRcdFx0XHJcblx0XHRcdH0pO1xyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XHJcblx0XHRcdFx0JCh0aGlzKS50cmlnZ2VyKCdjbGljaycpO1xyXG5cdFx0XHR9XHJcblx0XHRcdFxyXG5cdFx0fSk7XHJcblx0XHRcclxuXHRcdCQoY29udGFpbmVyKS5maW5kKCdkaXZbZGF0YS10b2dnbGU9XCJhamF4XCJdJykuZWFjaChmdW5jdGlvbihlKSB7XHJcblx0XHRcdFxyXG5cdFx0XHRsZXQgdGFyZ2V0ID0gJCh0aGlzKS5kYXRhKCd0YXJnZXQnKSB8fCB0aGlzO1xyXG5cdFx0XHRsZXQgdXJsID0gJCh0aGlzKS5kYXRhKCd1cmwnKTtcclxuXHRcdFx0dGhhdC5zZXQodGFyZ2V0LCB1cmwpO1xyXG5cdFx0XHRcclxuXHRcdH0pO1xyXG5cdFx0XHJcblx0fSxcclxuXHRcdFxyXG5cdHNldDogZnVuY3Rpb24gKHRhcmdldCwgdXJsLCBtZXRob2Q9J0dFVCcsIGRhdGE9W10sIGFkZD1mYWxzZSkge1xyXG5cdFx0XHJcblx0XHRpZiAodGFyZ2V0ICYmIHVybCkge1xyXG5cdFx0XHQkKHRhcmdldClcclxuXHRcdFx0XHQuZW1wdHkoKVxyXG5cdFx0XHRcdC5hcHBlbmQoaWNvbi5sb2FkaW5nKTtcclxuXHRcdFx0XHJcblx0XHRcdGxldCB0aGF0ID0gdGhpcztcclxuXHRcdFx0XHJcblx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0dXJsIDogdXJsLFxyXG5cdFx0XHRcdHR5cGU6IG1ldGhvZCxcclxuXHRcdFx0XHRkYXRhOiBkYXRhLFxyXG5cdFx0XHRcdGNvbnRlbnRUeXBlOiAoZGF0YS5jb25zdHJ1Y3RvciA9PT0gRm9ybURhdGEpP2ZhbHNlOidhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnLFxyXG5cdFx0XHRcdHByb2Nlc3NEYXRhOiAoZGF0YS5jb25zdHJ1Y3RvciAhPT0gRm9ybURhdGEpLFxyXG5cdFx0XHRcdFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0aWYgKGFkZCkge1xyXG5cdFx0XHRcdFx0XHQkKHRhcmdldCkuaHRtbCgkKHRhcmdldCkuaHRtbCgpICsgcmVzdWx0KTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdCQodGFyZ2V0KS5odG1sKHJlc3VsdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRic0N1c3RvbUZpbGVJbnB1dC5pbml0KCk7XHJcblx0XHRcdFx0XHR0aGF0LmZldGNoKHRhcmdldCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcbn1cclxuXHJcblxyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcclxuXHRcclxuICAgICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXJcIl0nKS5wb3BvdmVyKCk7XHJcblx0YWpheC5mZXRjaCgnYm9keScpO1xyXG4gICAgXHJcbn0pOyJdLCJzb3VyY2VSb290IjoiIn0=