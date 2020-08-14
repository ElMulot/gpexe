const $ = require('jquery');

require('bootstrap');
require('bootstrap-datepicker');
require('bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js');
const bsCustomFileInput = require('bs-custom-file-input');
require('../css/global.scss');

init = function(target) {
	
	
	//---------------------
	// popover
	//---------------------
	
	$(target).find('[data-toggle="popover"]').popover();
	
	//---------------------
	// Ajax
	//---------------------
	
    ajax.fetch(target);
	
	
	//---------------------
	// Modal & Collapse
	//---------------------
    
	$(target).on('hidden.bs.collapse', function() {
		$('[data-toggle="collapse"][href="#' + $(this).attr('id') + '"]')
			.removeClass('active')
			.blur()
		;
	});
	
	$(target).on('hidden.bs.modal', function() {
		$('[data-toggle="modal"]').blur();
	});
	
	$(target).find('button[data-dismiss]').on('click', function() {
		$('#modal').modal('hide');
	});
	
	
	//---------------------
	// Bootstrap datepicker
	//---------------------
	
	$(target).find('.datepicker').each(function() {
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
	        todayHighlight: true,
	    });
	})

	
	//---------------------
	// Form multiple
	//---------------------
	
	$(target).find("[name$='_multiple']").each(function() {
		
		var id;
		if (id = $(this).prop('name').match(/(\S+)_multiple$/y)) {
			
			$(this).on('click', function(event) {
				
				if ($(this).val() == 0) {
					
					$("[id^='" + id[1] + "']").not("[id*='multiple']").each(function() {
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
					
					$("[id^='" + id[1] + "']").not("[id*='multiple']").each(function() {
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
	
	$('form').find('div, input, select').each(function () {
		
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
	
}

global.create = {
	div: function() {
		return $(document.createElement('div'))

		;
	},
	
	a: function() {
		return $(document.createElement('a'))
			.addClass('btn btn-sm text-nowrap')
	},
	
	span: function() {
		return $(document.createElement('span'))
		
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
	
	menuButton: function() {
		return $(document.createElement('button'))
			.addClass('btn btn-sm btn-primary text-nowrap rounded-0')
		;
	},
	
	smallButton: function() {
		return $(document.createElement('button'))
			.addClass('btn btn-sm mx-1 text-nowrap')
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
};

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
	
	loading:
		'<div class="d-flex justify-content-center">' +
			'<div class="spinner-border" role="status">' +
				'<span class="sr-only">' + text.loading + '</span>' +
			'</div>' +
		'</div>',
	
};

global.ajax = {
		
	fetch: function(container) {
		
		let that = this;
		
		$(container).find('a[data-toggle="ajax"], button[data-toggle="ajax"]').not('[type="submit"]').each(function() {
			
			$(this).on('click', function(e) {
				
				if ($(this).parent().has('.active')) {
					$(this).parent().find('.active').removeClass('active');
					$(this).addClass('active');
				}
				
				let url = $(this).data('url');
				let target = $(this).data('target') || this;
				let add = $(this).data('add');
				
				that.set(target, url, undefined, undefined, add);
				
			});
			
			if ($(this).hasClass('active')) {
				$(this).trigger('click');
			}
			
		});
		
		$(container).find('a[data-toggle="ajax"][type="submit"], button[data-toggle="ajax"][type="submit"]').each(function() {
			
			if (($form = $('#' + $(this).attr('form'))) === false) {
				return false;
			}
			
			$form.on('submit', function(e) {
				return false;
			});
			
			$(this).on('click', function(e) {
				
				let url = $(this).data('url');
				let target = $(this).data('target') || this;
				let add = $(this).data('add');
				
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
		
		$(container).find('div[data-toggle="ajax"]').each(function(e) {
			
			let target = $(this).data('target') || this;
			let url = $(this).data('url');
			let add = $(this).data('add');
			
			that.set(target, url, undefined, undefined, add);
			
		});
		
	},
		
	set: function (target, url, method='GET', data=[], add=false) {
		
		if (target && url) {
			if (add === false) {
				$(target)
					.empty()
					.append(icon.loading)
				;
			}
			
			let that = this;
			$.ajax({
				url : url,
				type: method,
				data: data,
				contentType: (data.constructor === FormData)?false:'application/x-www-form-urlencoded; charset=UTF-8',
				processData: (data.constructor !== FormData),
				
				success: function(result) {
					if (add) {
						$(target).find('[data-toggle="ajax"]').remove();
						$(target).html($(target).html() + result);
					} else {
						$(target).html(result);
					}
					init(target);
				},
				
				error: function(xhr, thrownError) {
					
					if (add === false) {
						let result = '<div class="alert alert-danger">' +
										'<h6 class="alert-heading font-weight-bold">' + text.error + ' ' + xhr.status + ' : ' + xhr.statusText + '</h6>';
						
						if ((m = /<title>(.+)<\/title>/.exec(xhr.responseText)) !== null) {
							result += '<p>' + m[1] + '</p>';
						}
						
						result += '<button type="button" class="btn btn-sm btn-primary" data-toggle="ajax" data-url="' + url + '" data-target="' + target + '">' + text.reload + '</button>' +
									'</div>';
						$(target).html(result);
						that.fetch(target);
					}
				}
			});
		}
		
	}
}

global.rem = function() {
	return parseInt($('html').css('font-size'));
}


$(document).ready(function() {
	
    init(document);
    
});