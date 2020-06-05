const $ = require('jquery');

$(document).ready(function() {
	
	let ajax = {
		
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
					that.set(target, url);
					
				});
				
				if ($(this).hasClass('active')) {
					$(this).trigger('click');
				}
				
			});
			
			$(container).find('a[data-toggle="ajax"][type="submit"], button[data-toggle="ajax"][type="submit"]').each(function() {
				
				if ($form = $(this).parents('form').first()) {
					$form.on('submit', function(e) {
						return false;
					});
				}
				
				$(this).on('click', function(e) {
					
					let url = $(this).data('url');
					let target = $(this).data('target') || this;
					
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
			
			$(container).find('div[data-toggle="ajax"]').each(function(e) {
				
				let target = $(this).data('target') || this;
				let url = $(this).data('url');
				that.set(target, url);
				
			});
			
		},
			
		set: function (target, url, method='GET', data=[]) {
			
			if (target && url) {
				$(target)
					.empty()
					.append(icon.loading);
				
				let that = this;
				
				console.log(data.constructor !== FormData);
				
				$.ajax({
					url : url,
					type: method,
					data: data,
					contentType: (data.constructor === FormData)?false:'application/x-www-form-urlencoded; charset=UTF-8',
					processData: (data.constructor !== FormData),
					
					success: function(result) {
						$(target)
							.empty()
							.html(result);
						
						that.fetch(target);
						
					},
				});
			}
			
		}
	}
	
	ajax.fetch('body');
	
});

var text = {
    noneSelected: 'None selected',
    multipleSeparator: ', ',
    selectAll: 'Select all',
    notApplicable: 'n/a',
    filter: 'Filter',
    loading: 'Loading...',
    details: 'Details',
};

var icon = {
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