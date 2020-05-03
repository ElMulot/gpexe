const $ = require('jquery');

(function () {
	
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
		
		radio: function() {
			return $(document.createElement('input'))
				.attr('type', 'radio')
				.addClass('custom-control-input')
			;
		},
		
		label: function() {
			return $(document.createElement('label'))
				.addClass('custom-control-label w-100 text-nowrap')
			;
		},
		
		button: function() {
			return $(document.createElement('button'))
				.addClass('btn btn-primary')
			;
		},
		
		smallButton: function() {
			return $(document.createElement('button'))
				.addClass('btn btn-sm btn-primary mx-1')
			;
		},
		
	};
	
	var text = {
	    noneSelected: 'None selected',
	    multipleSeparator: ', ',
	    selectAll: 'Select all',
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
		
	};
	
	$.fn.extend({
		multiselect: function() {
			
			$(this).each(function() {
				createMultiselect(this);
			});
		}
	
	
	});
		
	function createMultiselect(that) {
		
		var multipleAttr = (typeof $(that).attr('multiple') !== typeof undefined && $(that).attr('multiple') !== false);
		
		if(multipleAttr) {
			if (n = $(that).prop('name').match(/(.+)\[\]$/i)) {
				var name = n[1];
			} else {
				return false;
			}
		} else {
			var name = $(that).prop('name');
		}
		
		var select = {
				element: $(that),
				name: name,
				multiple: multipleAttr,
				title: $(that).data('title'),
				locale: $(that).data('locale'),
				target: $(that).data('target'),
				fullHeader: $(that).data('full_header'),
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
		
		select.dropdownMenu = $('#' + select.target).append(create.div).children().last()
			.addClass('mx-1')
			.css('min-width', '15em')
		;
		
		select.dropDownButton = $('#' + select.target).parent().parent();
		
		select.dropDownButton.on('show.bs.dropdown', createMenu);

		function createMenu() {
			
			select.dropdownMenu.empty();
			
			if (select.multiple) {
				var header = select.dropdownMenu.append(create.div).children().last()
					.addClass('text-center border-bottom border-dark pb-2 px-1')
				;
			
				if (select.fullHeader) {
					header.append(create.smallButton).children().last()
						.append(icon.arrowUp)
						.addClass('px-2 ' + ($('#sortAsc').val() == select.name?'btn-outline-primary bg-dark text-white':'btn-primary'))
						.on('click', sortAsc)
					;
					
					header.append(create.smallButton).children().last()
						.text(text.filter)
						.addClass('px-3')
						.on('click', filter)
					;
					
					header.append(create.smallButton).children().last()
						.append(icon.arrowDown)
						.addClass('px-2 ' + ($('#sortDesc').val() == select.name?'btn-outline-primary bg-dark text-white':'btn-primary'))
						.on('click', sortDesc)
					;
				} else {
					header.text(select.title)
					;
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
						.addClass('px-3')
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
				
				for (const o of select.options) {
					
					o.div = body.append(create.div).children().last()
						.addClass('custom-control custom-checkbox')
					;
					
					o.checkbox = o.div.append(create.checkbox).children().last()
						.attr('id', select.name + '_' + o.value)
						.attr('checked', o.selected)
						.on('change', function() {
							
							for (const o of select.options) {
								o.element.prop('selected', o.checkbox.is(':checked'));
							}
							
							$('#form').submit();
							
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
			$('#sortAsc').val(select.name);
			$('#sortDesc').val('');
			filter();
		}
			
		function filter() {
			for (const o of select.options) {
				o.element.attr('selected', o.checkbox.is(':checked'));
			}
			$('#form').submit();
		}
			
		function sortDesc() {
			$('#sortDesc').val(select.name);
			$('#sortAsc').val('');
			filter();
		}
		
		select.dropDownButton.on('hide.bs.dropdown', function (e) {
			
			if(e.clickEvent && $.contains(e.relatedTarget.parentNode, e.clickEvent.target)) {
				e.preventDefault()
			} else {
				select.dropdownMenu.empty();
			}
		});
		
	}
	
})($);