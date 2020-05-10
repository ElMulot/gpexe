const $ = require('jquery');
const popper = require('popper.js');
require('sticky-table-headers');

require('../css/document.scss');

//require('./multiselect/multiselect.js');
//require('./multiselect/fr_FR.js');

const URLSearchParams = require('@ungap/url-search-params/cjs');

$(document).ready(function() {
	
	var paramsArray = new URLSearchParams(decodeURIComponent(window.location.search.slice(1)));
	
	$('#form').on('submit', function(event) {
		event.preventDefault;
		$(event.target).find('select').each(function() {
			if ($(this).val().toString()  == '') {
				$(this).attr('disabled', 'disabled');
			}
		});
		
		return true;
	});
	
	$('table').find('th').each(function() {
		createHeader(this);
	});
	
	$('table').stickyTableHeaders();
	
	$('#document_edit').hide();
	$('#document_move').hide();
	$('#document_delete').hide();
	$('#version_menu').hide();
	
	$('#display').find('a').on('click', function(event) {
		
		if (input = $(event.delegateTarget).find('input')) {
			input.attr('checked', !input.is(':checked'));
			var hide = paramsArray.getAll('hide[]');
			var index = hide.indexOf(input.data('value'));
			
			if (input.is(':checked')) {
				if (index > -1) {
					hide.splice(index, 1);
				}
			} else {
				if (index == -1 && input.data('value')) {
					hide.push(input.data('value'));
				}
			}
			paramsArray.delete('hide[]');
			hide.forEach(e => paramsArray.append('hide[]', e));
			
			location.assign(location.origin + location.pathname + '?' + paramsArray.toString());
		}
		return false;
	});
	
	$('#display').not('a').on('change click', function(event) {
		return false;
	});
	
	$('td').find('input[type="checkbox"]').each(function() {
		$(this).prop('checked', false);
		$(this).on('click', lineChecked);
	});
	
	$('#detail').on('show.bs.modal', function(event) {
		
		$('.modal-body')
			.empty()
			.append('<div class="d-flex justify-content-center">' +
						'<div class="spinner-border" role="status">' +
							'<span class="sr-only">Loading...</span>' +
						'</div>' +
					'</div>');
	
		$.ajax({
			url : $(event.relatedTarget).data('url'),
			type: 'GET',
			
			success: function(result) {
				$('.modal-body').empty();
				$('.modal-body').html(result);
				
				$('#version_tabs').find('a').each(function() {
					$(this).on('click', function(event) {
						getDetail(event.target);
					});
					
					if ($(this).hasClass('active')) {
						$(this).trigger('click');
					}
				});
				
			},
		});
	});
	
	$('#document_edit').on('click', function() {
		location.assign($(this).data('url') + '?' + paramsArray.toString());
		return false;
	});
	
	$('#document_move').on('click', function(event) {
		location.assign($(this).data('url') + '?' + paramsArray.toString());
		return false;
	});
	
	$('#document_delete').on('click', function(event) {
		location.assign($(this).data('url') + '?' + paramsArray.toString());
		return false;
	});
	
	$('#version_new').on('click', function(event) {
		location.assign($(this).data('url') + '?' + paramsArray.toString());
		return false;
	});
	
	$('#version_edit').on('click', function(event) {
		location.assign($(this).data('url') + '?' + paramsArray.toString());
		return false;
	});
	
	$('#version_delete').on('click', function(event) {
		location.assign($(this).data('url') + '?' + paramsArray.toString());
		return false;
	});
	
	
	//---------------
	// getDetail
	//---------------
	
	function getDetail(that) {
		$(that).parent().find('a.active').removeClass('active');
		$(that).addClass('active');
		
		$('#version')
			.empty()
			.append('<div class="d-flex justify-content-center">' +
					'<div class="spinner-border" role="status">' +
						'<span class="sr-only">Loading...</span>' +
					'</div>' +
				'</div>');
		
		$.ajax({
			url : $(that).data('url'),
			type: 'GET',
			
			success: function(result) {
				$('#version').empty();
				$('#version').html(result);
				$('#review_tabs').find('a').each(function() {
					$(this).on('click', function(event) {
						getReview(event.target);
					});
					
					/*
					$(this).on('show.bs.tab', function(event) {
						event.target.trigger('click');
					});
					*/
					if ($(this).hasClass('active')) {
						$(this).trigger('click');
					}
				});
				

			},
		});
	}
	
	
	//---------------
	// getReview
	//---------------
	
	function getReview(that) {
		$(that).parent().find('a.active').removeClass('active');
		$(that).addClass('active');
		
		var url = $(that).data('url');
		var method = $('form[name="review"]').attr('method') || 'GET';
		var data = $('form[name="review"]').serializeArray()
		
		$('#review')
			.empty()
			.append('<div class="d-flex justify-content-center">' +
					'<div class="spinner-border spinner-border-sm" role="status">' +
						'<span class="sr-only">Loading...</span>' +
					'</div>' +
				'</div>');
		
		$.ajax({
			url : url,
			type: method,
			data: data,
			
			success: function(result) {
				$('#review').empty();
				$('#review').html(result);
				$('#review').find('button').on('click', function() {
					getReview(this)
				});

			},
		});
	}
	
	
	//---------------
	// lineChecked
	//---------------
	
	function lineChecked() {
		
		var checked = false;
		var unchecked = false;

		
		if ($(this).prop('id') == 'check_all') {
			
			$('table').find('input[type="checkbox"]').each(function() {
				checked = $('#check_all').is(':checked');
				unchecked = !checked;
				$(this).prop('checked', checked);
			});
			
		} else {
			
			$('table').find('input[type="checkbox"]').each(function() {
				
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
		
		paramsArray.delete('id[]');
		if (checked) {
			$('table').find('input[type="checkbox"]').each(function() {
				if ($(this).prop('id') != 'check_all' && $(this).is(':checked')) {
					paramsArray.append('id[]', $(this).val());
				}
			});
			
			$('#document_edit').show();
			$('#document_move').show();
			$('#document_delete').show();
			$('#version_menu').show();	
		} else if(unchecked) {
			$('#version').val('');
			$('#document_edit').hide();
			$('#document_move').hide();
			$('#document_delete').hide();
			$('#version_menu').hide();	
		}
	}
	
	//---------------
	// multiSelect
	//---------------
	
	function createMultiselect(that) {
		
		var multipleAttr = (typeof $(that).attr('multiple') !== typeof undefined && $(that).attr('multiple') !== false);
		
		if(multipleAttr) {
			if (n = $(that).prop('name').match(/(.+)\[\]$/i)) {
				var fullName = n[0];
				var name = n[1];
			} else {
				return false;
			}
		} else {
			var fullName = $(that).prop('name')
			var name = fullName;
			/*
			$(that).prepend(create.option).children().first()
				.text(text.notApplicable)
			;
			if ($(that).find('option[selected]').length === 0) {
				$(that).children().first().attr('selected', true);
			}
			*/
		}
		
		var select = {
				element: $(that),
				name: name,
				fullName: fullName,
				multiple: multipleAttr,
				title: $(that).data('title'),
				locale: $(that).data('locale'),
				target: $(that).data('target'),
				fullHeader: $(that).data('full-header') || false,
				options: [],
		};
		
		$(that).find('option').each(function() {
			select.options.push({
				element: $(this),
				value: $(this).attr('value'),
				text: $(this).text(),
				selected: $(this).attr('selected'),
			});
		});
		
		if ($('#' + select.target).children().length == 0) {
			
			var columnTitle = $('#' + select.target).text().trim();
			console.log(columnTitle);
			$('#' + select.target).empty();
			
			select.dropdownButton = $('#' + select.target).append(create.div).children().last()
				.addClass('btn-group w-100')
				.attr('role', 'group')
			;
			select.dropdownButton.append(create.menuButton).children().last()
				.addClass('w-100')
				.attr('type', 'button')
				.text(select.title)
			;
			
			select.dropdownButton.append(create.menuButton).children().last()
				.addClass('px-0')
				.css('width', '3em')
				.attr('type', 'button')
				.attr('id', 'b_' + select.target)
				.attr('data-toggle', 'dropdown')
				.attr('aria-haspopup', true)
				.attr('aria-expanded', false)
				.append((paramsArray.get(select.fullName))?icon.funnelFill:icon.funnel)
				.append((paramsArray.get('sortAsc') == select.name)?icon.arrowUp:'')
				.append((paramsArray.get('sortDesc') == select.name)?icon.arrowDown:'')
			;
			
			var div = select.dropdownButton.append(create.div).children().last()
				.addClass('dropdown-menu')
				.attr('aria-labelledby', 'b_' + select.target)
				.append(create.div).children().last()
					.addClass('d-flex flex-row')
					.attr('id', 'm_' + select.target)
			;
			

			
		} else {
			if (!(select.dropdownButton = $('#b_' + select.target).parent())) return;
			if (!(div = $('#m_' + select.target))) return;
		}
		
		select.dropdownMenu = div.append(create.div).children().last()
			.addClass('mx-1')
			.css('min-width', '15em')
		;
		
		select.dropdownButton.on('show.bs.dropdown', createMenu);
		/*
		select.dropdownMenu = $('#' + select.target).append(create.div).children().last()
			.addClass('mx-1')
			.css('min-width', '15em')
		;
		
		select.dropDownButton = $('#' + select.target).parent().parent();
		
		select.dropDownButton.on('show.bs.dropdown', createMenu);
		*/
		function createMenu() {
			
			//select.dropdownMenu.css('zIndex', 1);
			select.dropdownMenu.empty();
			
			if (select.multiple) {
				var header = select.dropdownMenu.append(create.div).children().last()
					.addClass('text-center border-bottom border-dark pb-2 px-1')
				;
			
				if (select.fullHeader) {
					header.append(create.smallButton).children().last()
						.append(icon.arrowUp)
						.addClass('px-2 ' + (paramsArray.get('sortAsc') == select.name?'btn-outline-primary bg-dark text-white':'btn-primary'))
						.on('click', sortAsc)
					;
					
					header.append(create.smallButton).children().last()
						.text(text.filter)
						.addClass('px-3 btn-primary')
						.on('click', filter)
					;
					
					header.append(create.smallButton).children().last()
						.append(icon.arrowDown)
						.addClass('px-2 ' + (paramsArray.get('sortDesc') == select.name?'btn-outline-primary bg-dark text-white':'btn-primary'))
						.on('click', sortDesc)
					;
				} else {
					header.text(select.title);
				}
			
				var search = select.dropdownMenu.append(create.div).children().last()
					.addClass('text-center border-bottom border-dark p-2')
				;
				
				search.append(create.input).children().last()
					.on('input', function() {
						var searchValue = $(this).val().toLowerCase()
						
						if (searchValue == '') {
							select.selectAllDiv.show();
							for (const o of select.options) {
								o.div.show();
								o.checkbox.prop('checked', false);
							}
						} else {
							select.selectAllDiv.hide();
							for (const o of select.options) {
								if (o.text.toLowerCase().indexOf(searchValue) == -1) {
									o.div.hide();
									o.checkbox.prop('checked', false);
								} else {
									o.div.show();
									o.checkbox.prop('checked', true);
								}	
							}
						}
					});
				
				if (!select.fullHeader) {
					search.addClass('d-flex flex-row');
					search.append(create.smallButton).children().last()
						.text(text.filter)
						.addClass('px-3 btn-primary')
						.on('click', filter)
					;
				}
			}
			
			var body = select.dropdownMenu.append(create.div).children().last()
				.addClass('px-2' + ((select.multiple)?' pt-3':''))
			;

			if (select.multiple) {
				select.selectAllDiv = body.append(create.div).children().last()
					.addClass('custom-control custom-checkbox')
				;
				
				select.selectAllCheckbox = select.selectAllDiv.append(create.checkbox).children().last()
					.attr('id', select.name + '_selectAll')
					.on('change', function() {
						
						var checked = $(this).is(':checked');
						for (const o of select.options) {	
							o.checkbox.prop('checked', checked);
						}
						
					})
				;
			
				select.selectAllLabel = select.selectAllDiv.append(create.label).children().last()
					.attr('for', select.name + '_selectAll')
					.text(text.selectAll)
				;
				
				for (const o of select.options) {
					
					o.div = body.append(create.div).children().last()
						.addClass('custom-control custom-checkbox')
					;
					
					o.checkbox = o.div.append(create.checkbox).children().last()
						.attr('id', select.name + '_' + o.value)
						.attr('checked', o.selected)
						.on('change', function() {
							
							var checked;
							var unchecked;
							
							for (const o of select.options) {
								if ($(o.checkbox).is(':checked')) {
									checked = true;
								} else {
									unchecked = true;
								}
							}
							
							if (checked && unchecked) {
								select.selectAllCheckbox.prop('indeterminate', true);
							} else {
								select.selectAllCheckbox.prop('indeterminate', false);
								select.selectAllCheckbox.prop('checked', checked);
							}
							
						})
					;
					
					o.label = o.div.append(create.label).children().last()
						.attr('for', select.name + '_' + o.value)
						.text(o.text)
					;
				}
				
			} else {
				
				select.notApplicableDiv = body.append(create.div).children().last()
					.addClass('custom-control custom-checkbox')
				;
				
				select.notApplicableCheckbox = select.notApplicableDiv.append(create.checkbox).children().last()
					.attr('id', select.name + '_notApplicable')
					.on('change', function() {
						
						var checked = $(this).is(':checked');
						for (const o of select.options) {	
							o.checkbox.prop('checked', false);
						}
						paramsArray.delete(select.name);
						location.assign(location.origin + location.pathname + '?' + paramsArray.toString());
					})
				;
			
				select.notApplicableLabel = select.notApplicableDiv.append(create.label).children().last()
					.attr('for', select.name + '_notApplicable')
					.text(text.notApplicable)
				;
				
				for (const o of select.options) {
					
					o.div = body.append(create.div).children().last()
						.addClass('custom-control custom-checkbox')
					;
					
					o.checkbox = o.div.append(create.checkbox).children().last()
						.attr('id', select.name + '_' + o.value)
						.attr('checked', paramsArray.get(select.name) == o.value)
						.on('click', function() {
							
							body.find('input').not(this).prop('checked', false);
							paramsArray.delete(select.name);
							
							if (!select.notApplicableCheckbox.is(':checked')) {
								for (const o of select.options) {
									if (o.checkbox.is(':checked')) {
										paramsArray.append(select.name, o.value);
									}
								}
							}
							
							location.assign(location.origin + location.pathname + '?' + paramsArray.toString());
						})
					;
					
					o.label = o.div.append(create.label).children().last()
						.attr('for', select.name + '_' + o.value)
						.text(o.text)
					;
				}
			}
			
		}
				 
		function sortAsc() {
			paramsArray.delete('sortDesc');
			if (paramsArray.get('sortAsc') == select.name) {
				paramsArray.delete('sortAsc');
			} else {
				paramsArray.set('sortAsc', select.name);
			}	
			filter();
		}
			
		function filter() {
			
			paramsArray.delete(select.name + '[]');
			if (!select.selectAllCheckbox.is(':checked')) {
				
				for (const o of select.options) {
					if (o.checkbox.is(':checked')) {
						paramsArray.append(select.name + '[]', o.value);
					}
				}
			}
			
			location.assign(location.origin + location.pathname + '?' + paramsArray.toString());
		}
			
		function sortDesc() {
			paramsArray.delete('sortAsc');
			if (paramsArray.get('sortDesc') == select.name) {
				paramsArray.delete('sortDesc');
			} else {
				paramsArray.set('sortDesc', select.name);
			}	
			filter();
		}
		
		select.dropdownButton.on('hide.bs.dropdown', function (e) {
			
			if(e.clickEvent && $.contains(e.relatedTarget.parentNode, e.clickEvent.target)) {
				e.preventDefault()
			} else {
				select.dropdownMenu.empty();
			}
		});
		
	}
	
	
});

	var create = {
		div: function() {
			return $(document.createElement('div'))
			
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
				.addClass('btn btn-sm mx-1')
			;
		},
		
	};
	
	var text = {
	    noneSelected: 'None selected',
	    multipleSeparator: ', ',
	    selectAll: 'Select all',
	    notApplicable: 'n/a',
	    filter: 'Filter'
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
		
	};



	






    
