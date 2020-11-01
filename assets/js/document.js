const $ = require('jquery');
const popper = require('popper.js');
require('sticky-table-headers');
//const tableDragger = require('table-dragger');
//require('jquery-resizable-columns');
require('../css/document.scss');
const URLSearchParams = require('@ungap/url-search-params/cjs');

var series = [];
var table;

const type = {
	bool: 1,
	text: 2,
	date: 3,
	link: 4,
	list: 5,
};

//---------------
//UrlSearch
//---------------

function UrlSearch () {
	this._paramsArray = new URLSearchParams();
}

UrlSearch.prototype = {

	has: function(key) {
		return this._paramsArray.has(key);
	},
	
	get: function(key) {
		if (/\S+\[\]/g.exec(key)) {
			return this._paramsArray.getAll(key) || [];
		} else {
			return this._paramsArray.get(key) || '';
		}
	},
	
	set: function(key, value) {
		if (key == 'vue') {
			this._paramsArray = new URLSearchParams({'vue': value});
		} else {
			this._paramsArray.set(key, value);
		}
	},
	
	append: function(key, value) {
		if (key == 'vue') {
			this._paramsArray = new URLSearchParams({'vue': value});
		} else {
			this._paramsArray.append(key, value);
		}
	},
	
	delete: function(key) {
		this._paramsArray.delete(key);
	},
	
	setFromUrl: function(value) {
		let paramsArray = new URLSearchParams(value);
		if (paramsArray.has('vue')) {
			this.set('vue', paramsArray.get('vue'));
		} else {
			this._paramsArray = paramsArray;
		}
	},
	
	toUrl: function(key = '') {
		let url = '';
		if (key == '') {
			url = this._paramsArray.toString();
		} else {
			values = this.get(key);
			for (i in values) {
				values[i] = key + '=' + values[i];
			}
			url = values.join('&');
		}
		return (url)?'?' + url:'';
	},
	
	fetch: function() {
		
		let url = $('#table').data('url') + this.toUrl();
		$('#table').hide();
		global.ajax.set('#spinner', url);
		
	},
	
	getVues: function() {
		let url = $('#vues').data('url');
		global.ajax.set('#vues', url);
	},
	
	lineChecked: function () {
		
		var checked = false;
		var unchecked = false;
		let that = this;
		
		$('tbody').find('input[type="checkbox"]').each(function() {
			
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
		});
		
		that.delete('id[]');
		
		if (checked) {
			$('table').find('input[type="checkbox"]').each(function() {
				if ($(this).prop('id') != 'check_all' && $(this).is(':checked')) {
					that.append('id[]', $(this).val());
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
	},
}

//---------------
// Setup
//---------------

function setup(datas) {
	
	$('#table').show();
	
	table = {
		headers: [],
		series: datas.serie,
	};
	
	let thead = $('#table').append(create.thead).children().last();
	let tr = thead.append(create.tr).children().last();
	let th = tr.append(create.th).children().last()
		.css('width', '2em')
	;
	
	let div = th.append(create.div).children().last()
		.addClass('btn-group custom-control custom-checkbox btn btn-sm btn-primary rounded-0')
	;
	
	table.chxCheckall = div.append(create.checkbox).children().last()
		.attr('id', 'check_all')
		.attr('unchecked', 'unchecked')
	;
	
	div.append(create.label).children().last()
		.addClass('mx-1')
		.attr('for', 'check_all')
	;	
	
	
	for (let i in datas.fields) {
		
		field = datas.fields[i];
		
		//correct eventual mistakes
		if (field.codename == 'document.reference') {
			for (element of field.elements) {
				element.sort = false;
			}
		}
		
		table.headers[field.codename] = {
			full_id: field.full_id,
			title: field.title,
			default_width: field.default_width,
			hasSort: (field.elements && field.elements.every(v => v.sort === true)),
			hasFilter: (field.elements && field.elements.every(v => v.filter)),
			elements: [],
		}
		
		$.each(field.elements, function (j, element) {
			
			e = {
				full_id: element.full_id,
				title: element.title,
				sort: element.sort,
			};
			
			if (element.filter) {
				
				switch (element.filter.type) {
					case type.bool:
						var c = [
							{
								text: $.i18n('notApplicable'),
								value: -1,
							},
							{
								text: $.i18n('Yes'),
								value: 1,
							},
							{
								text: $.i18n('No'),
								value: 0,
							}
						];
						break;

					case type.list:
						var c = [
							{
								text: $.i18n('selectAll'),
								value: -1,
							}
						];
						
						$.each(element.filter.choices, function (key, value) {
							c.push({
								text: key,
								value: value,
							});
						});
				}
				
				e.filter = {
					type: element.filter.type,
					choices: c,
				};
			}
			
			table.headers[field.codename].elements.push(e);
		});
		
	}
	
	for (let header of table.headers) {
	
		let th = tr.append(create.th).children().last()
			.css('width', field.default_width + 'em')
		;
				
		if (header.hasSort || header.hasFilter) {
			
			//main button group
			let divDropdownGroup = th.append(create.div).children().last()
				.addClass('btn-group w-100')
				.attr('role', 'group')
				.on('hide.bs.dropdown', function (e) {
					
					if(e.clickEvent && $.contains(e.relatedTarget.parentNode, e.clickEvent.target)) {
						e.preventDefault()
					} else {
						header.divDropdownMenu.empty();
					}
				})
			;
			
			//title
			divDropdownGroup.append(create.menuButton).children().last()
				.addClass('text-truncate w-100')
				.attr('type', 'button')
				.text(field.title)
				.on('click', function() {
					if (header.hasSort && header.elements) {
						for (element of field.elements) {
							if (urlSearch.get('sortAsc') == element.full_id) {
								urlSearch.delete('sortAsc');
								urlSearch.set('sortDesc', element.full_id);
							}
							if (urlSearch.get('sortDesc') == element.full_id) {
								urlSearch.delete('sortDesc');
								urlSearch.set('sortAsc', element.full_id);
							}
						}
						urlSearch.delete('vue');
						urlSearch.fetch();
					}
				})
			;
			
			//dropDown button
			header.btnDropdown = divDropdownGroup.append(create.menuButton).children().last()
				.addClass('px-0')
				.css('width', '3em')
				.attr('type', 'button')
				.attr('id', 'b_' + field.full_id)
				.attr('data-toggle', 'dropdown')
				.attr('data-display', 'static')
				.attr('aria-haspopup', true)
				.attr('aria-expanded', false)
			;
			
			//dropDown menu
			header.divDropdownMenu = divDropdownGroup.append(create.div).children().last()
				.addClass('dropdown-menu dropdown-menu-left')
				.attr('aria-labelledby', 'b_' + field.full_id)
				.append(create.div).children().last()
					.addClass('d-flex flex-row')
			;
			
			divDropdownGroup.on('show.bs.dropdown', function() {
				createMenu(header);
			});
			
		} else {
			
			header.btnDropdown = th.append(create.menuButton).children().last()
				.addClass('text-truncate w-100')
				.text(field.title).children().last()
				.append(create.div)
			;
			
		}
	}
	
	tr.append(create.th).children().last()
		.attr('id', 'detail')
		.css('width', '6em')
	;
	
	let tbody = $('#table').append(create.tbody).children().last();
	
	
	function createMenu(header) {
		
		if (header.hasSort || header.hasFilter) {
			
			header.divDropdownMenu.empty();
			
			if (header.elements.length == 1) {
				createMenuItem(header, header.elements[0]);
			} else {
				for (let element of header.elements) {
					
					createMenuItem(header, element);
					
					//header if many selects
					element.divContent.prepend(create.div).children().last()
						.addClass('text-center border-bottom border-dark pb-2 px-1')
						.append(element.title);
					;
				}
			}
		}
	}
	
	function createMenuItem(header, element) {
		
		let divContent = header.divDropdownMenu.append(create.div).children().last()
			.addClass('mx-1')
			.css('min-width', '15em')
		;
		
		let divButtons = divContent.append(create.div).children().last()
			.addClass('text-center p-1')
		;
		
		if (element.sort) {
			divButtons.append(create.smallButton).children().last()
				.append(global.icon.arrowUp)
				.addClass((urlSearch.get('sortDesc') == element.full_id)?'px-2 btn-outline-primary bg-dark text-white':'px-2 btn-primary')
				.on('click', function() {
					urlSearch.delete('sortAsc');
					if (urlSearch.get('sortDesc') == element.full_id) {
						urlSearch.delete('sortDesc');
					} else {
						urlSearch.set('sortDesc', element.full_id);
					}
					
					element.filter.divFilter.trigger('click');
				})
			;
		}
		
		if (element.filter) {
			
			element.filter.divFilter = divButtons.append(create.smallButton).children().last()
				.text($.i18n('filter'))
				.addClass('px-3 btn-primary')
			;
			
			switch (element.filter.type) {
				
				case type.date:
					
					element.filter.divFilter.on('click', function() {
						urlSearch.delete('filter[' + element.full_id + '][]');
						if (element.filter.chxInf.is(':checked') && (result = /^≥\s(\d{2}-\d{2}-\d{4})/.exec(element.filter.inputInf.val()))) {
							urlSearch.append('filter[' + element.full_id + '][]', '>' + result[1]);
						}
						
						if (element.filter.chxSup.is(':checked') && (result = /^≤\s(\d{2}-\d{2}-\d{4})/.exec(element.filter.inputSup.val()))) {
							urlSearch.append('filter[' + element.full_id + '][]', '<' + result[1]);
						}
						
						if (element.filter.chxHighlight.is(':checked')) {
							urlSearch.set('highlight', element.full_id);
						} else if (urlSearch.get('highlight').toString() == element.full_id) {
							urlSearch.delete('highlight');
						}
						
						header.btnDropdown.dropdown('hide');
						urlSearch.delete('vue');
						urlSearch.fetch();
					});	
					break;
					
				case type.list:
					
					element.filter.divFilter.on('click', function() {
						for (let e of header.elements) {
							urlSearch.delete('filter[' + e.full_id + '][]');
							if (!e.filter.choices[0].chx.is(':checked')) {
								for (let choice of e.filter.choices) {
									if (choice.chx.is(':checked')) {
										urlSearch.append('filter[' + e.full_id + '][]', choice.value);
									}
								}
							}
						}
						
						header.btnDropdown.dropdown('hide');
						urlSearch.delete('vue');
						urlSearch.fetch();
					});
					break;
			}
		}			
		
		if (element.sort) {
			divButtons.append(create.smallButton).children().last()
				.append(global.icon.arrowDown)
				.addClass((urlSearch.get('sortAsc') == element.full_id)?'px-2 btn-outline-primary bg-dark text-white':'px-2 btn-primary')
				.on('click', function() {
					urlSearch.delete('sortDesc');
					if (urlSearch.get('sortAsc') == element.full_id) {
						urlSearch.delete('sortAsc');
					} else {
						urlSearch.set('sortAsc', element.full_id);
					}

					element.filter.divFilter.trigger('click');
				})
			;
		}
		
		if (element.filter) {
			
			element.filter.divList = divContent.append(create.div).children().last()
				.addClass('px-2 overflow-auto ' + ((element.filter.type === type.list)?'pt-3':'pt-1'))
				.css('max-height', '20em')
			;
		
			
			switch (element.filter.type) {
				
				case type.bool:
					
					for (let choice of element.filter.choices) {
						
						choice.div = element.filter.divList.append(create.div).children().last()
							.addClass('custom-control custom-checkbox')
						;
						
						choice.chx = choice.div.append(create.checkbox).children().last()
							.attr('id', element.full_id + '_' + choice.value);
						
						choice.div.append(create.label).children().last()
							.attr('for', element.full_id + '_' + choice.value)
							.text(choice.text)
						;
						
						if (choice.value == -1) {
							
							choice.chx
								.attr('checked', !urlSearch.get('filter[' + element.full_id + ']'))
								.on('click', function() {
									for (let choice of element.filter.choices) {	
										choice.chx.prop('checked', false);
									}
									urlSearch.delete('filter[' + element.full_id + ']');
									
									header.btnDropdown.dropdown('hide');
									urlSearch.delete('vue');
									urlSearch.fetch();
								})
							;
							
						} else {
							
							choice.chx
								.attr('checked', urlSearch.get('filter[' + element.full_id + ']').includes(choice.value))
								.on('click', function() {
									
									element.filter.find('input').not(this).prop('checked', false);
									urlSearch.set('filter[' + element.full_id + ']', choice.value);
									
//											urlSearch.delete(element.full_id);
//											if (element.filter.choices[0].chx.is(':checked') === false) {
//												for (let choice of element.filter.choices) {
//													if (choice.chx.is(':checked')) {
//														urlSearch.append('filter[' + element.full_id + ']', choice.value);
//													}
//												}
//											}
									
									header.btnDropdown.dropdown('hide');
									urlSearch.delete('vue');
									urlSearch.fetch();
								})
							;
						}
					}
					
					
					break;
					
				case type.text:
					
					break;
				
				case type.date:
					
					if ((result = />(\d{2}-\d{2}-\d{4})/.exec(urlSearch.get('filter[' + element.full_id + '][]').toString())) !== null) {
						let valueInf = result[1];
					} else {
						let valueInf = '';
					}
					
					if ((result = /<(\d{2}-\d{2}-\d{4})/.exec(urlSearch.get('filter[' + element.full_id + '][]').toString())) !== null) {
						let valueSup = result[1];
					} else {
						let valueSup = '';
					}
					
					let highlight = (urlSearch.get('highlight').toString() == tableHeader.id);
					
					element.filter.divInf = element.filter.divList.append(create.div).children().last()
						.addClass('custom-control custom-checkbox mt-2')
					;
					
					element.filter.chxInf = element.filter.divInf.append(create.checkbox).children().last()
						.attr('id', element.full_id + '_inf')
						.attr('checked', valueInf != '')
						.on('change', function() {
							let checked = $(this).is(':checked');
							if (checked) {
								if (/^≥\s\d{2}-\d{2}-\d{4}/.test(element.filter.inputInf.val()) === false) {
									element.filter.inputInf.val('');
								}
							} else {
								element.filter.inputInf.val($.i18n('fromDate'));
							}
							element.filter.inputInf.attr('readonly', checked === false);
						})
					;
					
					element.filter.labelInf = element.filter.divInf.append(create.label).children().last()
						.attr('for', element.full_id + '_inf')
					;
					
					element.filter.inputInf = element.filter.labelInf.append(create.input).children().last()
						.addClass('form-control datepicker')
						.val((valueInf)?('≥ ' + valueInf):$.i18n('fromDate'))
						.attr('readonly', valueInf == '')
						.datepicker({'format': '≥ dd-mm-yyyy'})
						.on('click', function() {
							tableHeader.chxInf.prop('checked', true);
							tableHeader.chxInf.trigger('change');
						})
					    .on('show.bs.dropdown hide.bs.dropdown', function(e) {
					    	e.stopPropagation();
					    })
					;
					
					element.filter.divSup = element.filter.divList.append(create.div).children().last()
						.addClass('custom-control custom-checkbox mt-2')
					;
					
					element.filter.chxSup = element.filter.divSup.append(create.checkbox).children().last()
						.attr('id', element.full_id + '_sup')
						.attr('checked', valueSup != '')
						.on('change', function() {
							let checked = $(this).is(':checked');
							if (checked) {
								if (/^≤\s\d{2}-\d{2}-\d{4}/.test(element.filter.inputSup.val()) === false) {
									element.filter.inputSup.val('');
								}
							} else {
								element.filter.inputSup.val($.i18n('toDate'));
							}
							element.filter.inputSup.attr('readonly', checked === false);
						})
					;
					
					element.filter.labelSup = element.filter.divSup.append(create.label).children().last()
						.attr('for', element.full_id + '_sup')
					;
					
					element.filter.inputSup = element.filter.labelSup.append(create.input).children().last()
						.addClass('form-control datepicker')
						.val((valueSup)?'≤ ' + valueSup:$.i18n('toDate'))
						.attr('readonly', valueSup == '')
						.datepicker({'format': "≤ dd-mm-yyyy"})
						.on('click', function() {
							element.filter.chxSup.prop('checked', true);
							element.filter.chxSup.trigger('change');
						})
					    .on('show.bs.dropdown hide.bs.dropdown', function(e) {
					    	e.stopPropagation();
					    })
					;
					
					element.filter.divHighlight = element.filter.divList.append(create.div).children().last()
						.addClass('custom-control custom-checkbox mt-2')
					;
					
					element.filter.chxHighlight = element.filter.divHighlight.append(create.checkbox).children().last()
						.attr('id', element.full_id + '_highlight')
						.attr('name', 'highlight')
						.val(element.full_id)
						.attr('checked', highlight)
					;
					
					element.filter.divHighlight.append(create.label).children().last()
						.attr('for', element.full_id + '_highlight')
						.text($.i18n('highlight'))
					;
					
					
					break;
				
				case type.list:
					
					let divSearch = divContent.append(create.div).children().last()
						.addClass('text-center border-bottom border-dark p-2')
					;
				
					divSearch.append(create.input).children().last()
						.on('input', function() {
							var searchValue = $(this).val().toLowerCase()
							
							if (searchValue == '') {
								for (let choice of element.filter.choices) {
									choice.div.show();
									choice.chx.prop('checked', false);
								}
							} else {
								element.filter.choices[0].hide();
								for (let choice of element.filter.choices) {
									if (choice.text.toLowerCase().indexOf(searchValue) == -1) {
										choice.div.hide();
										choice.chx.prop('checked', false);
									} else {
										choice.div.show();
										choice.chx.prop('checked', true);
									}	
								}
							}
						})
					;
					
					for (let choice of element.filter.choices) {
						
						choice.div = element.filter.divList.append(create.div).children().last()
							.addClass('custom-control custom-checkbox')
						;
						
						choice.chx = choice.div.append(create.checkbox).children().last()
							.attr('id', element.full_id + '_' + choice.value);
						
						choice.div.append(create.label).children().last()
							.attr('for', element.full_id + '_' + choice.value)
							.text(choice.text)
						;
						
						if (choice.value == -1) {
							
							choice.chx
								.on('change', function() {
									var checked = $(this).is(':checked');
									for (let choice of element.filter.choices) {	
										choice.chx.prop('checked', checked);
									}
								})
							;
							
						} else {
							

							choice.chx
								.attr('checked', urlSearch.get('filter[' + element.full_id + '][]').includes(choice.value))
								.on('click', function() {
									
									let checked = false;
									let unchecked = false;
									
									for (let choice of element.filter.choices) {
										if ($(choice.chx).is(':checked') && choice.value != 1) {
											checked = true;
										} else {
											unchecked = true;
										}
									}
									
									if (checked && unchecked) {
										element.filter.choice[0].prop('indeterminate', true);
									} else {
										element.filter.choice[0].prop('indeterminate', false);
										element.filter.choice[0].prop('checked', checked);
									}
									
								})
							;
						}
					}
					
					break;
			}
			
		}
	}
	
}




//---------------
// tableHeader
//---------------

	

//---------------
// fillDisplay
//---------------

function fillDisplay() {
	var col = $('#display_panel').append(create.div).children().last()
		.addClass('row py-2')
		.append(create.div).children().last()
			.addClass('col')
	;
	
	for (let tableHeader of tableHeaders) {
		
		tableHeader.aDisplay = col.append(create.a).children().last()
			.addClass('btn btn-sm btn-outline-primary col-2 m-1 text-left text-nowrap')
			.on('click', function() {
				
				tableHeader.chxDisplay.prop('checked', !tableHeader.chxDisplay.is(':checked'));
				
				let display = urlSearch.get('display[' + tableHeader.id + ']');
				
				urlSearch.delete('display[' + tableHeader.id + ']');
				
				if (tableHeader.chxDisplay.is(':checked')) {
					if (display == false) {
						urlSearch.append('display[' + tableHeader.id + ']', tableHeader.defaultWidth);
					}
				}
				urlSearch.delete('vue');
				urlSearch.fetch();
				return false;
			})
		;
		
		let div = tableHeader.aDisplay.append(create.div).children().last()
				.addClass('custom-control custom-checkbox')
		;
		
		tableHeader.chxDisplay = div.append(create.checkbox).children().last()
			.attr('id', 'h_' + tableHeader.id)
			.on('change click', function() {
				return false;
			})
		;
		
		div.append(create.label).children().last()
			.attr('for', 'h_' + tableHeader.id)
			.text(tableHeader.title)
		;
		
		
	}
	
}	

var urlSearch = new UrlSearch();

$(document).ready(function() {
	
	//---------------------
	// Search form
	//---------------------
	
	$('#search_panel input').on('keypress', function(e) {
		
		if (e.which == 13) {
			$('#search_panel button').trigger('click');
		}
		return true;
		
	});
	
	$('#search_panel button').on('click', function() {
		
		urlSearch.set('search', $('#search_panel input').val());
		urlSearch.delete('vue');
		urlSearch.fetch();
		
		return true;
		
	});
	
	$('#search_panel a').on('click', function() {
		
		if (urlSearch.has('search')) {
			urlSearch.delete('search');
			$('#search_panel input').val('');
			urlSearch.fetch();
		}
		return true;
		
	});

	//---------------------
	// Menu display
	//---------------------

	$('#document_new, #document_edit, #document_move, #document_delete, #version_new, #version_edit, #version_delete').on('click', function() {
		global.ajax.set('#modal', $(this).data('url') + urlSearch.toUrl('id[]'), {from: this});
	});
	
	$('#document_edit').hide();
	$('#document_move').hide();
	$('#document_delete').hide();
	$('#version_menu').hide();
	
	//---------------------
	// Tab collapse
	//---------------------
	
	$('#tabs').on('show.bs.tab', function() {
		$('.collapse').collapse('show');
		$('#table_container').removeClass('tabs_hidden');
		$('#table_container').addClass('tabs_showed');
	});
	
	$('#tabs ul li a').on('click', function(e) {
		if ($(this).hasClass('active')) {
			e.preventDefault();
			e.stopImmediatePropagation();
			$(this).removeClass('active');
			$(this).blur();
			$(this).attr('aria-selected', false);
			$('#' + $(this).attr('aria-controls')).parent().collapse('hide');
		}
	});
    
	$('#tabs').on('shown.bs.collapse', function() {
		$('#table_container').removeClass('tabs_hidden');
		$('#table_container').addClass('tabs_showed');
	});
	
	$('#tabs').on('hidden.bs.collapse', function(e) {
		$('#table_container').removeClass('tabs_showed');
		$('#table_container').addClass('tabs_hidden');
	});
	
	//---------------------
	// Check all checkboxes
	//---------------------
	
	$('#check_all').on('click', function() {
		$('tbody').find('input[type="checkbox"]').each(function() {
			$(this).prop('checked', $('#check_all').is(':checked'));
		});
		urlSearch.lineChecked();
	});
	
	//---------------------
	// Jquery Resizable Columns
	//---------------------
	
	//$('table').resizableColumns();
	
	//---------------------
	// Dragtable
	//---------------------
	
	/*
	var dragger = tableDragger.default($('table').get(0), {
        mode: 'column',
	});
	*/
	//---------------------
	// Tabs minimize
	//---------------------
	
	$('#tabs').trigger('show.bs.tab');
	
		
	//---------------------
	// Vues
	//---------------------
	
	$('#vue_new').on('click', function() {
		$('#modal').attr('data-upload', 'vues');
		global.ajax.set('#modal', $(this).data('url') + urlSearch.toUrl(), {modal: true});
	});
	
	$('#vues').on('ajax.success', function(e, result, textStatus, jqXHR) {
		
		e.stopPropagation();	
		$('#vues').empty();
		
		for (let vue of result) {
			
			div = $('#vues')
				.append(create.div).children().last()
				.addClass('btn-group m-1')
				.attr('role', 'group')
			;
			
			btn = div.append(create.button).children().last()
				.addClass('btn-primary')
				.attr('data-id', vue.id)
				.text(vue.name)
				.on('click', function() {
					urlSearch.set('vue', vue.id);
					urlSearch.fetch();
					$(this).blur();
				})
			;
			
			if (vue['edit_url'] && vue['delete_url']) {
				div2 = div.append(create.div).children().last()
					.addClass('btn-group')
					.attr('role', 'group')
				;
				
				btn2 = div2.append(create.button).children().last()
					.addClass('btn-primary dropdown-toggle')
					.attr('data-toggle', 'dropdown')
					.attr('aria-haspopup', true)
					.attr('aria-expanded', false)
				;
				div3 = div2.append(create.div).children().last()
					.addClass('dropdown-menu')
				;
				
				div3.append(create.a).children().last()
					.addClass('dropdown-item text-success')
					.on('click', function() {
						$('#modal').attr('data-upload', 'vues');
						global.ajax.set('#modal', vue['edit_url'], {modal: true});
					})
					.text($.i18n('edit'))
				;
				
				div3.append(create.a).children().last()
					.addClass('dropdown-item text-danger')
					.on('click', function() {
						$('#modal').attr('data-upload', 'vues');
						global.ajax.set('#modal', vue['delete_url'], {modal: true, from: this});
					})
					.text($.i18n('delete'))
				;
			}
		}
	
	});
	
	//---------------------
	// Table
	//---------------------
	
	$('#table').on('ajax.success', function(e, result, textStatus, jqXHR) {
		
		e.stopPropagation();
		
		$('#spinner').empty();
		$('#table > tbody').empty();
		$('#table').show();
		if (result == false) return;
		
//		console.log(result.query);
//		console.log(result.datas);
		
		let searchUrl = $.param(result.query);
		urlSearch._paramsArray = new URLSearchParams(searchUrl);
		urlSearch.delete('id[]');
		
		//vue
		$('#vues').find('button[data-id]').each(function() {
			if ($(this).data('id') == urlSearch.get('vue')) {
				$(this).attr('class', 'btn btn-outline-primary');
				$(this).parent().find('div > button').attr('class', 'btn btn-outline-primary dropdown-toggle');
			} else {
				$(this).attr('class', 'btn btn-primary');
				$(this).parent().find('div > button').attr('class', 'btn btn-primary dropdown-toggle');
			}
		});
		
		for (let tableHeader of tableHeaders) {
			
			//display
			
			if (display = result.query.display[tableHeader.id]) {

				tableHeader.aDisplay.addClass('btn-outline-primary');
				tableHeader.aDisplay.removeClass('btn-primary');
				tableHeader.chxDisplay.prop('checked', true);
				tableHeader.th.css('width', display + 'em');
				tableHeader.th.show();
				
				//headers
				
				tableHeader.btnDropdown.empty();
				
				tableHeader.isFiltered = false;
				tableHeader.isSortedAsc = false;
				tableHeader.isSortedDesc = false;
				
				switch (tableHeader.type) {
					case type.bool:
						if (urlSearch.has('filter[' + tableHeader.id + ']')) {
							tableHeader.isFiltered = true;
						}
						break;
						
					case type.date:
						if (urlSearch.has('filter[' + tableHeader.id + '][]')) {
							tableHeader.isFiltered = true;
						}
						break;
						
					case type.list:
						for (let select of tableHeader.selects) {
							if (urlSearch.has('filter[' + select.id + '][]')) {
								tableHeader.isFiltered = true;
								break;
							}
						}
						break;
				}
				
				if (urlSearch.get('sortAsc') == tableHeader.id) {
					tableHeader.isSortedAsc = true;
				}
				
				if (urlSearch.get('sortDesc') == tableHeader.id) {
					tableHeader.isSortedDesc = true;
				}
				
				tableHeader.btnDropdown.append((tableHeader.isFiltered)?global.icon.funnelFill:global.icon.funnel);					
				
				if (tableHeader.isSortedAsc) {
					tableHeader.btnDropdown.append(global.icon.arrowDown);
				}
				
				if (tableHeader.isSortedDesc) {
					tableHeader.btnDropdown.append(global.icon.arrowUp);
				}
				
			} else {
				tableHeader.aDisplay.addClass('btn-primary');
				tableHeader.aDisplay.removeClass('btn-outline-primary');
				tableHeader.chxDisplay.prop('checked', false);
				tableHeader.col.hide();
				tableHeader.th.hide();
			}
			
		}
		
		//tbody
		for (let data of result.datas) {
			
			let tr = $('#table > tbody').append(create.tr).children().last();
			
			let div = tr.append(create.td).children().last()
				.append(create.div).children().last()
					.addClass('custom-control custom-checkbox')
			;
			
			div.append(create.checkbox).children().last()
				.attr('id', 'c_' + data.version_id)
				.val(data.version_id)
				.on('click', urlSearch.lineChecked.bind(urlSearch))
			;
			
			div.append(create.label).children().last()
				.attr('for', 'c_' + data.version_id)
			;
			
			for (let tableHeader of tableHeaders) {
				
				value = data[tableHeader.id];
				
				if (value !== undefined) {
					
					switch (tableHeader.type) {
						case type.bool:
							dataClass = 'text-center';
							if (value == 0) value = 'No';
							if (value == 1) value = 'Yes';
							break;
						case type.date:
							dataClass = 'text-center';
							if (value instanceof Object){
								value = new Date(value.date).format();
							}
							break;
						case type.link:
							dataClass = 'text-center';
							break;
						default:
							switch (typeof value) {
								case 'number':
									dataClass = 'text-right';
								default:
									dataClass = 'text-left';
							}
					}
					if (value === null) value = '';
					
					tr.append(create.td).children().last()
						.addClass(dataClass)
						.text(value)
					;
					
					//highlight
					
					if (urlSearch.get('highlight') == tableHeader.id) {
						if (value.toDate() !== null) {
							if (value.toDate() < new Date()) {
								tr.addClass('highlight-late');
							} else if (value.toDate().addDays(-15) < new Date()) {
								tr.addClass('highlight-15');
							} else if (value.toDate().addDays(-30) < new Date()) {
								tr.addClass('highlight-30');
							} else {
								tr.addClass('highlight-ok');
							}
						}
					}
					
				} else {
					
					tableHeader.col.hide();
					tableHeader.th.hide();
					
				}
			}
			
			tr.append(create.td).children().last()
				.append(create.smallButton).children().last()
					.addClass('btn-success w-100')
					.attr('data-url', data.detailUrl)
					.attr('data-toggle', 'modal ajax')
					.attr('data-target', '#modal_detail')
					.text($.i18n('details'))
			;
			
		}
		
		//pagination
		$('#pagination').empty();
			
		$('#table_container').addClass('mb-4');
		
		let pageMax = result.pageMax;
		let page = parseInt(urlSearch.get('page')) || 1;
		page = Math.max(Math.min(page, pageMax), 1);
		
		div = $('#pagination').append(create.div).children().last()
			.addClass('row m-0')
		;
		
		div.append(create.div).children().last()
			.addClass('col')
		;
		
		ul = div.append(create.ul).children().last()
			.addClass('pagination col justify-content-center')
		;
		
		if (result.pageMax > 1) {
			ul.append(create.li).children().last()
				.addClass('page-item' + ((page == 1)?' disabled':''))
				.on('click', function() {
					if (page > 1) {
						urlSearch.set('page', page - 1);
						urlSearch.delete('vue');
						urlSearch.fetch();
					}
				})
				.append(create.a).children().last()
					.addClass('page-link')
					.attr('data-value', Math.max(1, page - 1))
					.append(create.span).children().last()
						.attr('aria-hidden', true)
						.html('&laquo;')
			;
			
			let pageStart = Math.min(Math.max(1, page - 2), Math.max(1, result.pageMax - 4));
			let pageEnd = Math.min(pageStart + 5, pageMax);
			
			for (let i = pageStart; i <= pageEnd; i++) {
				ul.append(create.li).children().last()
					.addClass('page-item' + ((page == i)?' active':''))
					.on('click', function() {
						urlSearch.set('page', i);
						urlSearch.delete('vue');
						urlSearch.fetch();
					})
					.append(create.a).children().last()
						.addClass('page-link')
						.attr('data-value', i)
						.text(i)
				;
			}
			
			ul.append(create.li).children().last()
				.addClass('page-item' + ((page == pageMax)?' disabled':''))
				.on('click', function() {
					if (page < pageMax) {
						urlSearch.set('page', page + 1);
						urlSearch.delete('vue');
						urlSearch.fetch();
					}
				})
				.append(create.a).children().last()
					.addClass('page-link')
					.attr('data-value', Math.min(pageMax, page + 1))
					.append(create.span).children().last()
						.attr('aria-hidden', true)
						.html('&raquo;')
			;
		}
		
		select = div.append(create.div).children().last()
			.addClass('col d-flex justify-content-end mt-1 mr-5')
			.append(create.select).children().last()
			.addClass('form-control form-control-sm bg-dark border-secondary text-white')
			.css('width', '150')
			.on('change', function() {
				urlSearch.set('results_per_page', $(this).val())
				urlSearch.delete('vue');
				urlSearch.fetch();
			})
		;
		
		let resultsPerPage = new Map([['10', 10], ['50', 50], ['100', 100], [$.i18n('all'), '0']]);
		for (let [text, value] of resultsPerPage) {
			select.append(create.option).children().last()
				.attr('value', value)
				.attr('selected', urlSearch.get('results_per_page') == value)
				.text(text)
			;
		}
		
		
		//flashes
		
		$('#toast').empty();
		
		for (const label in result.flash) {
			
			let div = $('#toast').append(create.div).children().last()
				.addClass('alert alert-' + label + ' d-flex px-3')
				.attr('role', 'alert')
				.attr('data-delay', 5000)
				.attr('aria-live', 'assertive')
				.attr('aria-atomic', true)
			;
			
			div.append(create.div).children().last()
				.addClass('align-self-center')
				.append(global.icon[label]);
			
			let body = div.append(create.ul).children().last()
				.addClass('justify-content-center flex-fill')
			;
			
			div.append(create.div).children().last()
				.addClass('justify-content-end')
				.append(global.icon.close);
			
			if (result.flash[label].length > 1) {
				for (let message of result.flash[label]) {
					body.append(create.li).children().last()
						.text(message)
					;
				}
			} else {
				body.text(result.flash[label][0]);
			}
			
			div.toast('show');
		}
		
		urlSearch.lineChecked();
		
		global.ajax.fetch('#table > tbody');
		//$('table').stickyTableHeaders();
		
	});
	
	//---------------------
	// Modal
	//---------------------
	
	$('#modal_detail').on('ajax.completed', function(e, result, textStatus, jqXHR) {
		
		$(e.target).find('#version_edit_detail, #version_delete_detail').on('click', function() {
			global.ajax.set('#modal', $(this).data('url') + '?id[]=' + $('#version_tabs>a.active').data('id'), {from: this});
	    });
		
	});
		
	$('#modal').on('ajax.success', function(e, result, textStatus, jqXHR) {
		
		if (result === '') {
			
			if ($('#modal_detail_container').hasClass('show')) {
				global.ajax.set('#modal_detail', $('#menu').data('url'));
			} else {
				urlSearch.fetch();
			}
			$('#modal').empty();
			$('#modal_container').modal('hide');
			
			if ($('#modal').data('upload') === 'vues') {
				global.ajax.set('#vues', $('#vues').data('url'));
				$('#modal').removeAttr('data-upload');
			}
			
			e.stopPropagation();
		}
		
	});
	
	$('#modal_detail_close').on('click', function(e) {
		urlSearch.fetch();
	});
	
	
	//---------------------
	// Setup
	//---------------------
	
	let url = $('#table_container').data('url');
	global.ajax.set('#spinner', url);
	
	
	$('#table_container').on('ajax.success', function(e, result, textStatus, jqXHR) {
		
		e.stopPropagation();
		$('#spinner').empty();
		
		//setup js datas
		setup(result);
	});
	
	$('#table_container').on('ajax.completed', function(e, result, textStatus, jqXHR) {
		
		//setup display pannel
		fillDisplay();
		
		//setup url
		urlSearch.setFromUrl(window.location.search);
		
		let url = $('#vues').data('url');
		global.ajax.set('#vues', url);
	});
	
	$('#vues').on('ajax.completed', function(e, result, textStatus, jqXHR) {
		urlSearch.fetch();
		e.stopPropagation();
	});
	
});