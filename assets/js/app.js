const $ = require('jquery');

require('bootstrap');
require('bootstrap-datepicker');
require('bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js');
const bsCustomFileInput = require('bs-custom-file-input');
require ('@wikimedia/jquery.i18n/src/jquery.i18n.js');
require ('@wikimedia/jquery.i18n/src/jquery.i18n.messagestore.js');
require('../css/global.scss');

String.prototype.toDate = function () {
	if (s = /\d{2}-\d{2}-\d{4}/g.exec(this)) {
		const [day, month, year] = s[0].split("-");
		d = new Date(year, month - 1, day);
		return (d instanceof Date && isNaN(d) === false)?d:null;
	}
	return null;
};

String.prototype.htmlDecode = function () {
	return $("<div/>").html(this).text();
}

Date.prototype.format = function() {
	
	day = this.getDate();
	month = this.getMonth() + 1;
	year = this.getFullYear();
	
	if (month < 10) month = '0' + month;
	if (day < 10) day = '0' + day;
	
	return [day, month, year].join('-');
	
}

Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

Array.prototype.has = function(value) {
	return this.some(v => String(v) === String(value))
}

$.fn.exist = function () {
	return this.length !== 0 && this;
}

$.fn.drags = function(opt) {

    opt = $.extend({handle:"",cursor:"move"}, opt);

    if(opt.handle === "") {
        var $el = this;
    } else {
        var $el = this.find(opt.handle);
    }

    return $el.css('cursor', opt.cursor).on("mousedown", function(e) {
        if(opt.handle === "") {
            var $drag = $(this).addClass('draggable');
        } else {
            var $drag = $(this).addClass('active-handle').parent().addClass('draggable');
        }
        var z_idx = $drag.css('z-index'),
            drg_h = $drag.outerHeight(),
            drg_w = $drag.outerWidth(),
            pos_y = $drag.offset().top + drg_h - e.pageY,
            pos_x = $drag.offset().left + drg_w - e.pageX;
        $drag.css('z-index', 1000).parents().on("mousemove", function(e) {
            $('.draggable').offset({
                top:e.pageY + pos_y - drg_h,
                left:e.pageX + pos_x - drg_w
            }).on("mouseup", function() {
                $(this).removeClass('draggable').css('z-index', z_idx);
            });
        });
        e.preventDefault(); // disable selection
    }).on("mouseup", function() {
        if(opt.handle === "") {
            $(this).removeClass('draggable');
        } else {
            $(this).removeClass('active-handle').parent().removeClass('draggable');
        }
    });

}

global.remToPx = function(i) {
	return i * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

global.pxToRem = function(i) {
	return i / parseFloat(getComputedStyle(document.documentElement).fontSize);
}

global.create = {
	div: function() {
		return $(document.createElement('div'))

		;
	},
	
	a: function() {
		return $(document.createElement('a'));
			//.addClass('btn btn-sm text-nowrap')
	},
	
	span: function() {
		return $(document.createElement('span'))
		;
	},
	
	fieldset: function() {
		return $(document.createElement('fieldset'))
		;
	},
	
	input: function() {
		return $(document.createElement('input'))
			.attr('type', 'text')
			.addClass('form-control form-control-sm')
		;
	},
	
	checkbox: function() {
		return $(document.createElement('input'))
			.attr('type', 'checkbox')
			.addClass('custom-control-input')
		;
	},
	
	select: function() {
		return $(document.createElement('select'))
			.addClass('form-control form-control-sm')
		;
	},
	
	option: function() {
		return $(document.createElement('option'))
			.attr('value', '')
		;
	},
	
	label: function() {
		return $(document.createElement('label'))
			.addClass('custom-control-label w-100 text-nowrap')
		;
	},
	
	button: function() {
		return $(document.createElement('button'))
			.attr('type', 'button')
			.addClass('btn')
		;
	},
	
	menuButton: function() {
		return $(document.createElement('button'))
			.attr('type', 'button')
			.addClass('btn btn-sm btn-primary text-nowrap rounded-0')
		;
	},
	
	smallButton: function() {
		return $(document.createElement('button'))
			.attr('type', 'button')
			.addClass('btn btn-sm mx-1 text-nowrap')
		;
	},
	
	thead: function() {
		return $(document.createElement('thead'))
		
		;
	},
	
	th: function() {
		return $(document.createElement('th'))
		
		;
	},
	
	tbody: function() {
		return $(document.createElement('tbody'))
		
		;
	},
	
	tr: function() {
		return $(document.createElement('tr'))
		
		;
	},
	
	td: function() {
		return $(document.createElement('td'))
		
		;
	},
	
	ul: function() {
		return $(document.createElement('ul'))
		
		;
	},
	
	li: function() {
		return $(document.createElement('li'))
		
		;
	},
	
};

global.ajax = {
		
	fetch: function(container) {
		
		let that = this;
		
		$(container).find('a[data-toggle*="ajax"], button[data-toggle*="ajax"]').not('[type="submit"]').each(function() {
			
			$(this).on('click', function(e) {
				
				if ($(this).parent().has('.active')) {
					$(this).parent().find('.active').removeClass('active');
					$(this).addClass('active');
				}
				
				let url = $(this).data('url');
				let target = $(this).data('target') || this;
				
				that.set(target, url, {from: this});
				return false;
			});
			
			if ($(this).hasClass('active')) {
				$(this).trigger('click');
			}
			
		});
		
		$(container).find('a[data-toggle*="ajax"], button[data-toggle*="ajax"]').filter('[type="submit"]').each(function() {
			
			if (($form = $('#' + $(this).attr('form'))) === false) {
				return false;
			}
			
			$form.on('submit', function(e) {
				return false;
			});
			
			$(this).on('click', function(e) {
				
				let url = $(this).data('url');
				let target = $(this).data('target') || this;
				
				if ($form.find('input[type="file"]').exist()) {
					var method = 'POST';
					var data = new FormData($form.get(0));
				} else {
					var method = $form.attr('method') || 'GET';
					var data = $form.serializeArray();
				}
				
				that.set(target, url, {method: method, from: this, data: data});
				return false;
				
			});
			
			if ($(this).hasClass('active')) {
				$(this).trigger('click');
			}
			
		});
		
		$(container).find('form[data-toggle*="ajax"]').each(function() {
			
			$(this).on('submit', function(e) {
				let url = $(this).data('url');
				let target = $(this).data('target') || $(this).parent();
				
				if ($(this).find('input[type="file"]').exist()) {
					var method = 'POST';
					var data = new FormData($(this).get(0));
				} else {
					var method = $(this).attr('method') || 'GET';
					var data = $(this).serializeArray();
				}
				
				that.set(target, url, {method: method, from: this, data: data});
				return false;
			});
			
			if ($(this).hasClass('active')) {
				$(this).trigger('submit');
			}
			
		});
		
		$(container).find('div[data-toggle*="ajax"]').each(function(e) {
			let target = $(this).data('target') || this;
			let url = $(this).data('url');
			
			that.set(target, url, {from: this});
		});
		
	},
		
	set: function (target, url, options = {}) {
		
		if (target && url) {
			
			if (options.modal === true || (options.from && $(options.from).is('[data-toggle*="modal"]'))) {
				if ($(target).is('.modal')) {
					$(target).modal('show');
				} else {
					$(target).parents('.modal').modal('show');
				}
			}
			
			let method = options.method || 'GET';
			let data = options.data || [];
			
			let that = this;
			$.ajax({
				url : url,
				type: method,
				data: data,
				contentType: (data.constructor === FormData)?false:'application/x-www-form-urlencoded; charset=UTF-8',
				processData: (data.constructor !== FormData),
				
				beforeSend: function(jqXHR, settings) {
					jqXHR.settings = settings;
					jqXHR.from = $(options.from);
					$(target).trigger('ajax.beforeSend', [jqXHR, settings]);
				},
				
				success: function(result, textStatus, jqXHR) {
					jqXHR.from = $(options.from);
					$(target).trigger('ajax.success', [result, textStatus, jqXHR]);
					$(target).trigger('ajax.completed', [result, textStatus, jqXHR]);
				},
				
				error: function(jqXHR, textStatus, errorThrown) {
					jqXHR.from = $(options.from);
					$(target).trigger('ajax.error', [jqXHR, textStatus, errorThrown]);
				},
			});
		}
		
	},
}

$(document).ready(function() {
	
	//---------------------
	// Translator
	//---------------------

	let locale = $('html').attr('lang');
	
	$.i18n().load({
		locale: require('./locales/' + locale + '.json')
	});
	
	$.i18n({
		locale: 'locale',
	});
	
	//---------------------
	// Global icons
	//---------------------
	
	global.icon = {
		arrowUp:
			'<svg class="bi bi-arrow-bar-up" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
				'<path fill-rule="evenodd" d="M11.354 5.854a.5.5 0 000-.708l-3-3a.5.5 0 00-.708 0l-3 3a.5.5 0 10.708.708L8 3.207l2.646 2.647a.5.5 0 00.708 0z" clip-rule="evenodd"/>' +
				'<path fill-rule="evenodd" d="M8 10a.5.5 0 00.5-.5V3a.5.5 0 00-1 0v6.5a.5.5 0 00.5.5zm-4.8 1.6c0-.22.18-.4.4-.4h8.8a.4.4 0 010 .8H3.6a.4.4 0 01-.4-.4z" clip-rule="evenodd"/>' +
			'</svg>',
			
		arrowDown:
				'<svg class="bi bi-arrow-bar-down" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
			  		'<path fill-rule="evenodd" d="M11.354 10.146a.5.5 0 010 .708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 01.708-.708L8 12.793l2.646-2.647a.5.5 0 01.708 0z" clip-rule="evenodd"/>' +
			  		'<path fill-rule="evenodd" d="M8 6a.5.5 0 01.5.5V13a.5.5 0 01-1 0V6.5A.5.5 0 018 6zM2 3.5a.5.5 0 01.5-.5h11a.5.5 0 010 1h-11a.5.5 0 01-.5-.5z" clip-rule="evenodd"/>' +
				'</svg>',
		
		funnel:
				'<svg class="bi bi-funnel" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
					'<path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clip-rule="evenodd"/>' +
				'</svg>',
				
		funnelFill:
				'<svg class="bi bi-funnel-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
					'<path d="M2 3.5v-2h12v2l-4.5 5v5l-3 1v-6L2 3.5z"/>' +
					'<path fill-rule="evenodd" d="M1.5 1.5A.5.5 0 012 1h12a.5.5 0 01.5.5v2a.5.5 0 01-.128.334L10 8.692V13.5a.5.5 0 01-.342.474l-3 1A.5.5 0 016 14.5V8.692L1.628 3.834A.5.5 0 011.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 017 8.5v5.306l2-.666V8.5a.5.5 0 01.128-.334L13.5 3.308V2h-11z" clip-rule="evenodd"/>' +
				'</svg>',
		
		success:
				'<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-check-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
					'<path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm10.03 4.97a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>' +
				'</svg>',
		
		warning:
				'<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-info-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
					'<path fill-rule="evenodd" d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.93 4.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM8 5.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>' +
				'</svg>',
		
		danger:
				'<svg width="1.5em" height="1.5em" viewBox="0 0 16 16" class="bi bi-exclamation-square-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">' +
					'<path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>' +
				'</svg>',
		
		loading:
			'<div class="d-flex justify-content-center mt-4">' +
				'<div class="spinner-border" role="status">' +
					'<span class="sr-only">' + $.i18n('loading') + '</span>' +
				'</div>' +
			'</div>',
		
		close:
		    '<button type="button" class="ml-2 mb-1 close ml-auto" data-dismiss="toast" aria-label=' + $.i18n('close') + '>' +
		    	'<span aria-hidden="true">&times;</span>' +
		    '</button>',
		
	};
	
	
	//---------------------
	// Defaults parameters for datepicker
	//---------------------
	
	$.fn.datepicker.defaults.format = "dd-mm-yyyy";
	$.fn.datepicker.defaults.weekStart = 1;
	$.fn.datepicker.defaults.maxViewMode = 3;
	$.fn.datepicker.defaults.language = locale.replace(/_/, '-');
	$.fn.datepicker.defaults.multidate = false;
	$.fn.datepicker.defaults.daysOfWeekDisabled = "0,6";
	$.fn.datepicker.defaults.autoclose = true;
	$.fn.datepicker.defaults.calendarWeeks = true;
	$.fn.datepicker.defaults.clearBtn = true;
	$.fn.datepicker.defaults.todayBtn = true;
	$.fn.datepicker.defaults.todayHighlight = true;
    
	
	
    $(document).on('ajax.beforeSend', function(e, jqXHR, settings) {
    	$(e.target)
			.show()
			.empty()
			.append(global.icon.loading)
		;
    });
    
    $(document).on('ajax.success', function(e, result, textStatus, jqXHR) {
    	
		$(e.target).find('.spinner-border').parent().remove();
		if (result) {
			$(e.target).html($(e.target).html() + result);
		}
		
		//---------------------
		// popover
		//---------------------
		
		$(e.target).find('[data-toggle="popover"]').popover();
		
		//---------------------
		// Ajax
		//---------------------
		
	    global.ajax.fetch(e.target);
		
		//---------------------
		// Modal & Collapse
		//---------------------
	    
		$(e.target).on('hidden.bs.collapse', function() {
			$('[data-toggle="collapse"][href="#' + $(this).attr('id') + '"]')
				.removeClass('active')
				.blur()
			;
		});
		
		$(e.target).on('hidden.bs.modal', function(e) {
			$('[data-toggle="modal"]').blur();
			$(e.target).find('.modal-content').removeAttr('style');
		});
		
		$(e.target).find('button[data-dismiss]').on('click', function() {
			$('#modal').modal('hide');
		});
		
		$(e.target).find('.modal-header').each(function() {
			$(this).closest('.modal-dialog').drags({handle:'.modal-header'});
		});
		
		//---------------------
		// Bootstrap datepicker
		//---------------------
		
		$(e.target).find('.datepicker').each(function() {
			$(this).datepicker({'format': $.fn.datepicker.defaults.format});
		});

		
		//---------------------
		// Form multiple
		//---------------------
		
		$(e.target).find("[name$='_multiple']").each(function() {
			
			let id;
			if (id = $(this).prop('name').match(/(\S+)_multiple$/y)) {
				
				$(this).on('click', function() {
					
					let defined = ($(this).val() != 0);
					
					$("[id^='" + id[1] + "']").not("[id$='multiple_0']").not("[id$='multiple_1']").each(function() {
						if ($(this).hasClass('datepicker')) {
							$(this).datepicker('setDate', new Date());
						} else if ($(this).attr('type') == 'radio') {
							$(this).prop('checked', false);
						} else if ($(this).attr('type') == 'checkbox') {
							$(this).prop('checked', false);
							$(this).prop('indeterminate', false);
						} else if ($(this).attr('type') == 'text' || $(this).is('select') || $(this).is('textarea')) {
							$(this).val(null);
						} else {
							return;
						}
						$(this).attr("disabled", defined);
						$(this).attr("required", $(this).data('required') && defined === false);
					});
					
					$('#' + id[1] + '_multiple').val($(this).val());
				});
			}
		});
		
		$(e.target).find('form').find('div, input, select').each(function () {
			
			if ($(this).data('multiple')) {
				$("[name='" + $(this).prop('id') + "_multiple']").filter('[value=1]').trigger('click');
			} else {
				$("[name='" + $(this).prop('id') + "_multiple']").filter('[value=0]').trigger('click');
			}
			
		})
		
		
		//---------------------
		// BsCustomFileInput
		//---------------------
		
		bsCustomFileInput.init();
		
    });
    
    $(document).on('ajax.error', function(e, jqXHR, textStatus, errorThrown) {
    	
		if ((m = /<!--\s(.+)\s-->/.exec(jqXHR.responseText)) !== null) {
			title = m[1].htmlDecode();
		} else {
			title = $.i18n('error');
		}
		
    	let div = $(e.target).append(global.create.div()).children().last()
    		.addClass('alert alert-danger')
    	;
    	
    	div.append(global.create.div).children().last()
    		.addClass('alert-heading font-weight-bold')
    		.text($.i18n('error') + ' ' + jqXHR.status + ' : ' + jqXHR.statusText)
    	;
		
    	div.append(global.create.p).children().last()
			.text(title)
		;
    	
    	div.append(global.create.smallButton).children().last()
			.addClass('btn-primary mt-2')
			.text($.i18n('reload'))
			.on('click', function() {
				global.ajax.set(e.target, jqXHR.settings.url, {data: jqXHR.settings.data})
			})
		;
    	
    	div.append(global.create.smallButton).children().last()
			.addClass('btn-primary mt-2')
			.text($.i18n('details'))
			.on('click', function() {
				let resultWindow = window.open('', '_blank', 'width=800,height=600,scrollbars=yes,resizable=yes');
				if ((m = /<head>(.+?)<\/head>/s.exec(jqXHR.responseText)) !== null) {
					$(resultWindow.document.head).append(m[1]);
				}
				if ((m = /<body>(.+?)<\/body>/s.exec(jqXHR.responseText)) !== null) {
					$(resultWindow.document.body).append(m[1]);
				}
			})
		;
    	
    });
    
    $(document).trigger('ajax.success');
    
});