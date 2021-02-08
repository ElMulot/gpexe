const $ = require('jquery');
const popper = require('popper.js');
//require('sticky-table-headers');
//const tableDragger = require('table-dragger');
//require('jquery-resizable-columns');
require('../css/document.scss');
const URLSearchParams = require('@ungap/url-search-params/cjs');

var gpexe = {
	headers: new Array(),
	series: [],
	table: null,
	chxCheckall: null,
	colResize: {},
	colDrag: {},
}

const type = {
	bool: 11,
	text: 12,
	date: 13,
	link: 14,
	list: 15,
};


//---------------
//Header
//---------------

function Header(field) {
	this.id = field.id;
	this.title = field.title;
	this.type = field.type;
	this.permissions = field.permissions;
	this.defaultWidth = field.default_width;
	this.hasSort = (field.elements && field.elements.some(v => v.sort === true));
	this.hasFilter = (field.elements && field.elements.some(v => v.filter));
	this.elements = [];
}

Header.prototype = {
	
	setWidth: function(width) {
		if (this.th) {
			this.th.css('width', width + 'rem');
			this.th.css('min-width', width + 'rem');
			this.th.css('max-width', width + 'rem');
			let index = this.th.index() + 1;
			$(this.th).parents('table').find('td:nth-child(' + index + ')').each(function() {
				$(this).css('max-width', width + 'rem');
			});
		}
	},
	
}


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
		global.ajax.set('#table', url);
		
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
	
	let thead = $('#table').append(create.thead).children().last();
	let tr = thead.append(create.tr).children().last();
	let th = tr.append(create.th).children().last()
		.attr('id', 'selector')	
		.css('width', '2em')
	;
	
	let div = th.append(create.div).children().last()
		.addClass('btn-group custom-control custom-checkbox btn btn-sm btn-primary rounded-0')
	;
	
	gpexe.chxCheckall = div.append(create.checkbox).children().last()
		.attr('id', 'check_all')
		.attr('unchecked', 'unchecked')
		.on('click', function() {
			 $('tbody').find('input[type="checkbox"]').each(function() {
				$(this).prop('checked', $('#check_all').is(':checked'));
			});
			 urlSearch.lineChecked();
		});
	;
	
	div.append(create.label).children().last()
		.addClass('mx-1')
		.attr('for', 'check_all')
	;	
	
	gpexe.series = datas.series;
	
	for (let i in datas.fields) {
		
		field = datas.fields[i];
		
		if (field.display.table) {
		
			var header = new Header(field);
			
			$.each(field.elements, function (j, element) {
				
				e = {
					id: element.id,
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
									text: $.i18n('yes'),
									value: 1,
								},
								{
									text: $.i18n('no'),
									value: 0,
								}
							];
							break;
	
						case type.list:
							var c = [];
							
							$.each(element.filter.choices, function (key, value) {
								if (typeof value === 'object') {
									c.push({
										text: value.name || value.value,
										value: value.id,
									});
								} else {
									c.push({
										text: value,
										value: key,
									});
								}
							});
							
							c.sort(function (a, b) {
								if (a.text < b.text) {
									return -1;
								}
								if (a.text > b.text) {
									return 1;
								}
								return 0;
							});
							
							c.unshift({
								text: $.i18n('selectAll'),
								value: -1,
							});
					}
					
					e.filter = {
						type: element.filter.type,
						choices: c,
					};
				}
				
				header.elements.push(e);
			});
		
			gpexe.headers.push(header);
		
		}
		
	}
	
	for (let header of gpexe.headers) {
		
		header.th = tr.append(create.th).children().last();
		header.setWidth(header.defaultWidth);
		
		if (header.hasSort || header.hasFilter) {
			
			//main button group
			let divDropdownGroup = header.th.append(create.div).children().last()
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
				.text(header.title)
				.on('click', function() {
					if (header.hasFilter) {
						for (element of header.elements) {
							if (urlSearch.get('sortAsc') == element.id) {
								urlSearch.delete('sortAsc');
								urlSearch.set('sortDesc', element.id);
								urlSearch.delete('vue');
								urlSearch.fetch();
								return;
							}
							if (urlSearch.get('sortDesc') == element.id) {
								urlSearch.delete('sortDesc');
								urlSearch.set('sortAsc', element.id);
								urlSearch.delete('vue');
								urlSearch.fetch();
								return;
							}
						}
						for (element of header.elements) {
							if (element.sort) {
								urlSearch.set('sortAsc', element.id);
								urlSearch.delete('vue');
								urlSearch.fetch();
								return;
							}
						}	
					}
				})
			;
			
			//dropDown button
			header.btnDropdown = divDropdownGroup.append(create.menuButton).children().last()
				.addClass('px-0')
				.css('width', '3em')
				.attr('type', 'button')
				.attr('id', 'b_' + header.id)
				.attr('data-toggle', 'dropdown')
				.attr('data-display', 'static')
				.attr('aria-haspopup', true)
				.attr('aria-expanded', false)
			;
			
			//dropDown menu
			header.divDropdownMenu = divDropdownGroup.append(create.div).children().last()
				.addClass('dropdown-menu dropdown-menu-left')
				.attr('aria-labelledby', 'b_' + header.id)
				.append(create.div).children().last()
					.addClass('d-flex flex-row')
			;
			
			divDropdownGroup.on('show.bs.dropdown', function() {
				createMenu(header);
			});
			
		} else {
			
			header.btnDropdown = header.th.append(create.menuButton).children().last()
				.addClass('text-truncate w-100')
				.text(header.title).children().last()
				.append(create.div)
			;
			
		}

	}
	
	tr.append(create.th).children().last()
		.attr('id', 'detail')
		.css('width', '6em')
	;
	
	let tbody = $('#table').append(create.tbody).children().last();
	
	//---------------------
	// Col Resize
	//---------------------
	
	//supprimer width=100% dans le css
	//sur le th (min-width, max-width) et sur les td (max-width)
	
	for (let header of gpexe.headers) {
		colResize(header);
	}
	
	$('body').on('mousemove', function(e) {
		if ($.isEmptyObject(gpexe.colResize) === false) {
			let width = Math.max(1, Math.round(pxToRem(gpexe.colResize.currentWidth + (e.pageX - gpexe.colResize.currentPosition))));
			gpexe.colResize.header.setWidth(width);
		}
		if ($.isEmptyObject(gpexe.colDrag) === false) {
			
			if ($.isEmptyObject(gpexe.colDrag.$ul) && Math.abs(e.pageX - gpexe.colDrag.currentPosition) > 10) {
			
				let $table = gpexe.colDrag.header.th.parents('table');
				
				gpexe.colDrag.$ul = $table.parent().prepend(create.ul).children().first()
					.addClass('col-drag-container')
					.css('width', $table.outerWidth() + 1)
				;
				
				$table.find('th:visible').each(function() {
					
					if (gpexe.colDrag.header.th.is(this)) {
						gpexe.colDrag.$liPlaceholder = gpexe.colDrag.$ul.append(create.li).children().last()
							.addClass('col-drag-placeholder')
						;
						gpexe.colDrag.$liPlaceholder.append(create.div).children().last()
							.css('width', $(this).width())
							.css('height', $table.height())
						;
					}
					
					let $li = gpexe.colDrag.$ul.append(create.li).children().last();
					
					if ($(this).is('#selector, #detail')) {
						$li.addClass('no-drag');
					}
					
					if (gpexe.colDrag.header.th.is(this)) {
						$li.addClass('col-drag-helper');
						gpexe.colDrag.$liHelper = $li;
					}
					
					$li.append(create.table).children().last()
						.addClass($table.attr('class'))
						.append(create.thead).children().last()
						.append($(this).clone())
					;
					
					let $tbody = $li.children().last().append(create.tbody).children().last();
					let index = $(this).index() + 1;
					
					$table.find('td:nth-child(' + index + ')').each(function() {
						$tbody.append(create.tr).children().last()
							.addClass($(this).parent().attr('class'))
							.css('height', $(this).parent().outerHeight())
							.append($(this).clone())
						;
					});
				});
				
				$table.hide();
			}
			
			if ($.isEmptyObject(gpexe.colDrag.$liPlaceholder) === false) {
				let left = gpexe.colDrag.currentLeft + e.pageX - gpexe.colDrag.currentPosition;
				gpexe.colDrag.$liHelper.css('left', left);
				
				if (left > gpexe.colDrag.$liPlaceholder.position().left + gpexe.colDrag.$liPlaceholder.nextAll().not('.col-drag-helper, .no-drag').first().width()) {
					gpexe.colDrag.$liPlaceholder.nextAll().not('.col-drag-helper, .no-drag').first().insertBefore(gpexe.colDrag.$liPlaceholder);
				} else if (left < gpexe.colDrag.$liPlaceholder.position().left - gpexe.colDrag.$liPlaceholder.prevAll().not('.col-drag-helper, .no-drag').first().width()) {
					gpexe.colDrag.$liPlaceholder.prevAll().not('.col-drag-helper, .no-drag').first().insertAfter(gpexe.colDrag.$liPlaceholder);
				}
				
			}
		}
	});
	
	$('body').on('mouseup', function(e) {
		if ($.isEmptyObject(gpexe.colResize) === false) {
			let width = gpexe.colResize.header.th.width();
			urlSearch.delete('display[' + gpexe.colResize.header.id + ']');
			urlSearch.append('display[' + gpexe.colResize.header.id + ']', pxToRem(width));
			gpexe.colResize = {};
		}
		
//		if ($.isEmptyObject(gpexe.colDrag) === false) {
//			gpexe.colDrag.th.removeClass('col-drag-handle')
//		}
	});
	
	
	//---------------------
	// Col Drag
	//---------------------
	
	for (let header of gpexe.headers) {
		colDrag(header);
	}
	
	
	function createMenu(header) {
		
		if (header.hasSort || header.hasFilter) {
			
			header.divDropdownMenu.empty();
			
			if (header.elements.length == 1) {
				createMenuItem(header, header.elements[0]);
			} else {
				for (var element of header.elements) {
					
					if (element.filter || element.sort) {
						
						createMenuItem(header, element);

						//header if many selects
						element.divContent.prepend(create.div).children().first()
							.addClass('text-center border-bottom border-dark pb-2 px-1')
							.append(element.title)
						;
					}
				}
			}
		}
	}
	
	function createMenuItem(header, element) {
		
		element.divContent = header.divDropdownMenu.append(create.div).children().last()
			.addClass('mx-1')
			.css('min-width', '15em')
		;
		
		let divButtons = element.divContent.append(create.div).children().last()
			.addClass('text-center p-1')
		;
		
		if (element.sort) {
			divButtons.append(create.smallButton).children().last()
				.append(global.icon.arrowDown)
				.addClass((urlSearch.get('sortDesc') == element.id)?'px-2 btn-outline-primary bg-dark text-white':'px-2 btn-primary')
				.on('click', function() {
					urlSearch.delete('sortAsc');
					if (urlSearch.get('sortDesc') == element.id) {
						urlSearch.delete('sortDesc');
					} else {
						urlSearch.set('sortDesc', element.id);
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
					
					element.filter.divFilter
						.on('filter.update', function() {
							urlSearch.delete('filter[' + element.id + '][]');
							if (element.filter.chxInf.is(':checked') && (result = /^≥\s(\d{2}-\d{2}-\d{4})/.exec(element.filter.inputInf.val()))) {
								urlSearch.append('filter[' + element.id + '][]', '>' + result[1]);
							}
							
							if (element.filter.chxSup.is(':checked') && (result = /^≤\s(\d{2}-\d{2}-\d{4})/.exec(element.filter.inputSup.val()))) {
								urlSearch.append('filter[' + element.id + '][]', '<' + result[1]);
							}
							
							if (element.filter.chxHighlight.is(':checked')) {
								urlSearch.set('highlight', element.id);
							} else if (urlSearch.get('highlight').toString() == element.id) {
								urlSearch.delete('highlight');
							}
						})
						.on('click', function() {
							for (let element of header.elements) {
								if (element.filter) {
									element.filter.divFilter.trigger('filter.update');
								}
							}
							header.btnDropdown.dropdown('hide');
							urlSearch.delete('vue');
							urlSearch.fetch();
						})
					;	
					break;
					
				case type.text:
					
					element.filter.divFilter
						.on('filter.update', function() {
							urlSearch.delete('filter[' + element.id + ']');
							
							var searchValue = element.inputSearch.val().toLowerCase()
							
							if (searchValue != '') {
								urlSearch.set('filter[' + element.id + ']', searchValue);
							}
						})
						.on('click', function() {
							for (let element of header.elements) {
								if (element.filter) {
									element.filter.divFilter.trigger('filter.update');
								}
							}
							header.btnDropdown.dropdown('hide');
							urlSearch.delete('vue');
							urlSearch.fetch();
						})
					;	
					break;
					
				case type.list:
					
					element.filter.divFilter
						.on('filter.update', function() {
							urlSearch.delete('filter[' + element.id + '][]');
							if (element.filter.choices[0].chx.is(':checked') === false) {
								for (let choice of element.filter.choices) {
									if (choice.chx.is(':checked')) {
										urlSearch.append('filter[' + element.id + '][]', choice.value);
									}
								}
							}
						})
						.on('click', function() {
							for (let element of header.elements) {
								if (element.filter) {
									element.filter.divFilter.trigger('filter.update');
								}
							}
							header.btnDropdown.dropdown('hide');
							urlSearch.delete('vue');
							urlSearch.fetch();
						})
						
					;
					break;
			}
		}			
		
		if (element.sort) {
			divButtons.append(create.smallButton).children().last()
				.append(global.icon.arrowUp)
				.addClass((urlSearch.get('sortAsc') == element.id)?'px-2 btn-outline-primary bg-dark text-white':'px-2 btn-primary')
				.on('click', function() {
					urlSearch.delete('sortDesc');
					if (urlSearch.get('sortAsc') == element.id) {
						urlSearch.delete('sortAsc');
					} else {
						urlSearch.set('sortAsc', element.id);
					}

					element.filter.divFilter.trigger('click');
				})
			;
		}
		
		if (element.filter) {
			
			switch (element.filter.type) {
				
				case type.bool:
					
					element.filter.divList = element.divContent.append(create.div).children().last()
						.addClass('px-2 overflow-auto ' + ((element.filter.type === type.list)?'pt-3':'pt-1'))
						.css('max-height', '20em')
					;
					
					for (let choice of element.filter.choices) {
						
						choice.div = element.filter.divList.append(create.div).children().last()
							.addClass('custom-control custom-checkbox')
						;
						
						choice.chx = choice.div.append(create.checkbox).children().last()
							.attr('id', element.id + '_' + choice.value);
						
						choice.div.append(create.label).children().last()
							.attr('for', element.id + '_' + choice.value)
							.text(choice.text)
						;
						
						if (choice.value == -1) {
							
							choice.chx
								.attr('checked', !urlSearch.get('filter[' + element.id + ']'))
								.on('click', function() {
									for (let choice of element.filter.choices) {	
										choice.chx.prop('checked', false);
									}
									urlSearch.delete('filter[' + element.id + ']');
									
									header.btnDropdown.dropdown('hide');
									urlSearch.delete('vue');
									urlSearch.fetch();
								})
							;
							
						} else {
							
							choice.chx
								.attr('checked', parseInt(urlSearch.get('filter[' + element.id + ']')) === choice.value)
								.on('click', function() {
									
									for (let choice of element.filter.choices) {	
										if (choice.chx != this) {
											choice.chx.prop('checked', false);
										}
									}
									
									urlSearch.set('filter[' + element.id + ']', choice.value);
									
									header.btnDropdown.dropdown('hide');
									urlSearch.delete('vue');
									urlSearch.fetch();
								})
							;
						}
					}
					
					
					break;
					
				case type.text:
					
					let divSearch = element.divContent.append(create.div).children().last()
						.addClass('input-group input-group-sm p-2')
					;
					
					element.inputSearch = divSearch.append(create.input).children().last()
						.val(urlSearch.get('filter[' + element.id + ']'))
						.on('keypress', function(e) {
							if (e.which == 13) {
								element.filter.divFilter.trigger('click');
							}
						})
					;
					
					let div = divSearch.append(create.div).children().last()
						.addClass('input-group-append')
					;
					
					let a = div.append(create.a).children().last()
						.attr('type', 'button')
						.addClass('btn btn-light border-left-0 border text-primary')
					;
					a.append(create.span).children().last()
						.html('&times;')
						.on('click', function() {
							element.inputSearch.val('');
							element.filter.divFilter.trigger('click');
						})
					;
					break;
				
				case type.date:
					
					if ((result = />(\d{2}-\d{2}-\d{4})/.exec(urlSearch.get('filter[' + element.id + '][]').toString())) !== null) {
						var valueInf = result[1];
					} else {
						var valueInf = '';
					}
					
					if ((result = /<(\d{2}-\d{2}-\d{4})/.exec(urlSearch.get('filter[' + element.id + '][]').toString())) !== null) {
						var valueSup = result[1];
					} else {
						var valueSup = '';
					}
					
					let highlight = (urlSearch.get('highlight').toString() == element.id);
					
					element.filter.divList = element.divContent.append(create.div).children().last()
						.addClass('px-2 overflow-auto ' + ((element.filter.type === type.list)?'pt-3':'pt-1'))
						.css('max-height', '20em')
					;
					
					element.filter.divInf = element.filter.divList.append(create.div).children().last()
						.addClass('custom-control custom-checkbox mt-2')
					;
					
					element.filter.chxInf = element.filter.divInf.append(create.checkbox).children().last()
						.attr('id', element.id + '_inf')
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
						.attr('for', element.id + '_inf')
					;
					
					element.filter.inputInf = element.filter.labelInf.append(create.input).children().last()
						.addClass('form-control datepicker')
						.val((valueInf)?('≥ ' + valueInf):$.i18n('fromDate'))
						.attr('readonly', valueInf == '')
						.datepicker({'format': '≥ dd-mm-yyyy'})
						.on('click', function() {
							element.filter.chxInf.prop('checked', true);
							element.filter.chxInf.trigger('change');
						})
					    .on('show.bs.dropdown hide.bs.dropdown', function(e) {
					    	e.stopPropagation();
					    })
					;
					
					element.filter.divSup = element.filter.divList.append(create.div).children().last()
						.addClass('custom-control custom-checkbox mt-2')
					;
					
					element.filter.chxSup = element.filter.divSup.append(create.checkbox).children().last()
						.attr('id', element.id + '_sup')
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
						.attr('for', element.id + '_sup')
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
						.attr('id', element.id + '_highlight')
						.attr('name', 'highlight')
						.val(element.id)
						.attr('checked', highlight)
					;
					
					element.filter.divHighlight.append(create.label).children().last()
						.attr('for', element.id + '_highlight')
						.text($.i18n('highlight'))
					;
					
					
					break;
				
				case type.list:
					
					divSearch = element.divContent.append(create.div).children().last()
						.addClass('input-group input-group-sm border-bottom border-dark p-2')
					;
					
					element.inputSearch = divSearch.append(create.input).children().last()
						.on('keypress', function(e) {
							if (e.which == 13) {
								element.filter.divFilter.trigger('click');
							}
						})
						.on('input', function() {
							var searchValue = $(this).val().toLowerCase()
							
							if (searchValue == '') {
								for (let choice of element.filter.choices) {
									choice.div.show();
									choice.chx.prop('checked', false);
								}
							} else {
								element.filter.choices[0].div.hide();
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
					
					div = divSearch.append(create.div).children().last()
						.addClass('input-group-append')
					;
					
					a = div.append(create.a).children().last()
						.attr('type', 'button')
						.addClass('btn btn-light border-left-0 border text-primary')
					;
					a.append(create.span).children().last()
						.html('&times;')
						.on('click', function() {
							element.inputSearch.val('');
							element.inputSearch.trigger('input');
						})
					;
					
					element.filter.divList = element.divContent.append(create.div).children().last()
						.addClass('px-2 overflow-auto ' + ((element.filter.type === type.list)?'pt-3':'pt-1'))
						.css('max-height', '20em')
					;
					
					for (let choice of element.filter.choices) {
						
						choice.div = element.filter.divList.append(create.div).children().last()
							.addClass('custom-control custom-checkbox')
						;
						
						choice.chx = choice.div.append(create.checkbox).children().last()
							.attr('id', element.id + '_' + choice.value)
						;
						
						choice.div.append(create.label).children().last()
							.attr('for', element.id + '_' + choice.value)
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
								.attr('checked', urlSearch.get('filter[' + element.id + '][]').has(choice.value))
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
										element.filter.choices[0].chx.prop('indeterminate', true);
									} else {
										element.filter.choices[0].chx.prop('indeterminate', false);
										element.filter.choices[0].chx.prop('checked', checked);
									}
									
								})
							;
						}
					}
					
					break;
			}
			
		}
	}
	
	function colResize(header) {
		
		if (header.th) {
			header.th.append(create.div).children().last()
				.css('right', '0')
				.addClass('col-resize-handle')
				.on('mousedown', function(e) {
					for (let header of gpexe.headers) {
						if ($(e.target).parent().is(header.th)) {
							gpexe.colResize = {
								header: header,
								currentPosition: e.pageX,
								currentWidth: header.th.width(),
							};
						}
					}
				})
			;
			
			header.th.next().append(create.div).children().last()
				.css('left', '0')
				.addClass('col-resize-handle')
				.on('mousedown', function(e) {
					for (let header of gpexe.headers) {
						if ($(e.target).parent().prevAll(':visible').first().is(header.th)) {
							gpexe.colResize = {
								header: header,
								currentPosition: e.pageX,
								currentWidth: header.th.width(),
							};
						}
					}
				})
			;
			
		}
		
	}
	
	function colDrag(header) {
		
		if (header.th) {
			header.th.find('button[type="button"]').first()
				.on('mousedown', function(e) {
					gpexe.colDrag = {
						header: header,
						currentPosition: e.pageX,
						currentLeft: header.th.position().left,
					};
				})
			;
		}
		
	}
	
}

//---------------
// fillSeriesPannel
//---------------

function fillSeriesPannel() {
	
	for (let serie of gpexe.series) {
		serie.btn = $('#series').append(create.a).children().last()
			.attr('role', 'button')
			.addClass('btn btn-primary m-1')
			.attr('href', serie.url)
			.text(serie.name)
		;
	}
	
}

//---------------
//fillDisplayPannel
//---------------

function fillDisplayPannel() {
	
	let divCol = $('#display_panel').append(create.div).children().last()
		.addClass('row py-2')
		.append(create.div).children().last()
			.addClass('col')
	;
	
	for (let header of gpexe.headers) {
		
		header.aDisplay = divCol.append(create.a).children().last()
			.addClass('btn btn-sm btn-outline-primary col-2 m-1 text-left text-nowrap')
			.on('click', function() {
				
				header.chxDisplay.prop('checked', !header.chxDisplay.is(':checked'));
				
				let display = urlSearch.get('display[' + header.id + ']');
				
				urlSearch.delete('display[' + header.id + ']');
				
				if (header.chxDisplay.is(':checked')) {
					if (display == false) {
						urlSearch.append('display[' + header.id + ']', header.defaultWidth);
					}
				}
				urlSearch.delete('vue');
				urlSearch.fetch();
				return false;
			})
		;
		
		let div = header.aDisplay.append(create.div).children().last()
				.addClass('custom-control custom-checkbox')
		;
		
		header.chxDisplay = div.append(create.checkbox).children().last()
			.attr('id', 'h_' + header.id)
			.on('change click', function() {
				return false;
			})
		;
		
		div.append(create.label).children().last()
			.attr('for', 'h_' + header.id)
			.text(header.title)
		;
		
		
	}
	
}

var urlSearch = new UrlSearch();

$(document).ready(function() {

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
	// Tabs minimize
	//---------------------
	
	$('#tabs').trigger('show.bs.tab');
	
	//---------------------
	// Table_container
	//---------------------
	
	$('#table_container, #vues, #table').on('ajax.beforeSend', function(e, result, textStatus, jqXHR) {
		
		if (e.target !== this) {
			return;
		}
		
		e.stopPropagation();
		$('#table').hide();
		
		$('#spinner')
			.show()
			.empty()
			.append(global.icon.loading)
		;
	});
	
	$('#table_container').on('ajax.success', function(e, result, textStatus, jqXHR) {
		
		if (e.target !== this) {
			return;
		}
		
		e.stopPropagation();
		$('#spinner').empty();
		
		//setup js datas
		setup(result);
	});
	
	$('#table_container').on('ajax.completed', function(e, result, textStatus, jqXHR) {
		
		if (e.target !== this) {
			return;
		}
		
		e.stopPropagation();
		fillSeriesPannel();
		fillDisplayPannel();
		
		//setup url
		urlSearch.setFromUrl(window.location.search);
		
		urlSearch.getVues();
	});
	
	
	//---------------------
	// Vues
	//---------------------
	
	$('#vues').on('ajax.success', function(e, result, textStatus, jqXHR) {
		
		if (e.target !== this) {
			return;
		}
		
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
						global.ajax.set('#modal', vue['edit_url'], {modal: true});
					})
					.text($.i18n('edit'))
				;
				
				div3.append(create.a).children().last()
					.addClass('dropdown-item text-danger')
					.on('click', function() {
						global.ajax.set('#modal', vue['delete_url'], {modal: true, from: this});
					})
					.text($.i18n('delete'))
				;
			}
		}
		
		//---------------------
		// Dragtable
		//---------------------
		
//		var dragger = tableDragger.default($('table').get(0), {
//	        mode: 'column',
//		});
	
	});
	
	$('#vues').on('ajax.completed', function(e, result, textStatus, jqXHR) {
		
		if (e.target !== this) {
			return;
		}
		
		e.stopPropagation();
		urlSearch.fetch();
	});
	
	$('#vue_new').on('click', function() {
		global.ajax.set('#modal', $(this).data('url') + urlSearch.toUrl(), {modal: true});
	});
	
	
	//---------------------
	// Table
	//---------------------
	
	$('#table').on('ajax.success', function(e, result, textStatus, jqXHR) {
		
		if (e.target !== this) {
			return;
		}
		
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
		
		//series
		for (let serie of gpexe.series) {
			if (result.serie && serie.id == result.serie) {
				serie.btn.removeClass('btn-primary');
				serie.btn.addClass('btn-outline-primary');
			} else {
				serie.btn.removeClass('btn-outline-primary');
				serie.btn.addClass('btn-primary');
			}
		}
		
		for (let header of gpexe.headers) {
			
			//display
			
			if (display = result.query.display[header.id]) {

				header.aDisplay.addClass('btn-outline-primary');
				header.aDisplay.removeClass('btn-primary');
				header.chxDisplay.prop('checked', true);
				header.setWidth(display);
				header.th.show();
				
				//headers
				
				header.btnDropdown.empty();
				
				header.isFiltered = false;
				header.isSortedAsc = false;
				header.isSortedDesc = false;
				
				if (header.hasSort) {
					
					for (element of header.elements) {
						
						if (urlSearch.get('sortAsc') == element.id) {
							header.isSortedAsc = true;
						}
						
						if (urlSearch.get('sortDesc') == element.id) {
							header.isSortedDesc = true;
						}
					}
					
				}
				
				if (header.hasFilter) {
					
					for (element of header.elements) {
						if (element.filter) {
							switch (element.filter.type) {
								case type.bool:
								case type.text:
									if (urlSearch.has('filter[' + element.id + ']')) {
										header.isFiltered = true;
									}
									break;
									
								case type.date:
								case type.list:
									if (urlSearch.has('filter[' + element.id + '][]')) {
										header.isFiltered = true;
									}
									break;
							}
						}
					}
					
				}
				
				header.btnDropdown.append((header.isFiltered)?global.icon.funnelFill:global.icon.funnel);					
				
				if (header.isSortedAsc) {
					header.btnDropdown.append(global.icon.arrowUp);
				}
				
				if (header.isSortedDesc) {
					header.btnDropdown.append(global.icon.arrowDown);
				}
				
			} else {
				header.aDisplay.addClass('btn-primary');
				header.aDisplay.removeClass('btn-outline-primary');
				header.chxDisplay.prop('checked', false);
				header.th.hide();
			}
		}
		
		
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
			
			for (let header of gpexe.headers) {
				
				value = data[header.id];
				
				if (value !== undefined) {
					
					if (header.id == 'status_type') {
						value = header.elements[0].filter.choices[value].text;
					}
					
					switch (header.type) {
						case type.bool:
							dataClass = 'text-center';
							if (value == 0 || value == null) value = $.i18n('no');
							if (value == 1) value = $.i18n('yes');
							break;
						case type.date:
							dataClass = 'text-center';
							if (value !== null) {
								value = value.toDate();
								
								if (value !== null) {
									//highlight
									if (urlSearch.get('highlight').toString() == header.id
										|| (urlSearch.get('highlight').toString() == 'version_date' && header.id == 'version_scheduled_date')) {
										if (value < new Date()) {
											tr.addClass('highlight-late');
										} else if (value.addDays(-15) < new Date()) {
											tr.addClass('highlight-15');
										} else if (value.addDays(-30) < new Date()) {
											tr.addClass('highlight-30');
										} else {
											tr.addClass('highlight-ok');
										}
									}
									value = value.format();
								}
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
					
					let td = tr.append(create.td).children().last()
						.addClass(dataClass)
						.text(value)
					;
					
					if (header.permissions.write) {
						td.on('dblclick', function() {
							global.ajax.set(this, '/gpexe/project/serie/document/version/' + data['version_id'] + '/quick_edit/' + header.id);
						});
						
						td.on('ajax.completed', function(e, result, textStatus, jqXHR) {
							
							let $form = $(this).find('form').children().first();
							
							if ($form.exist()) {
								$form.on('keypress', function(e) {
									if (e.which == 13) {
										$(this).parent().submit();
									}
								});
								
								$('body').on('click', function(e) {
									if ($form.is(e.target) === false && $form.has(e.target).exist() === false) {
										$form.trigger('submit');
									}
								});
							} else {
								switch (header.type) {
									case type.bool:
										if (result == 0 || result == null) result = $.i18n('no');
										if (result == 1) result = $.i18n('yes');
										break;
									case type.date:
										
										result = result.toDate();
										$(this).parent().removeAttr('class');
										
										if (result !== null) {
											
											//highlight
											if (urlSearch.get('highlight').toString() == header.id
												|| (urlSearch.get('highlight').toString() == 'version_scheduled_date' && header.id == 'version_date')) {												
												if (result < new Date()) {
													$(this).parent().addClass('highlight-late');
												} else if (result.addDays(-15) < new Date()) {
													$(this).parent().addClass('highlight-15');
												} else if (result.addDays(-30) < new Date()) {
													$(this).parent().addClass('highlight-30');
												} else {
													$(this).parent().addClass('highlight-ok');
												}
											}
											result = result.format();
										}
										break;
								}
								
								$('body').off('click');
							}
							
						});
					}
					
				} else {
					
					header.th.hide();
					tr.append(create.td).children().last()
						.hide()
					;
					
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
		
		for (let label of Object.keys(result.flash)) {
			
			let divToast = $('#toast').append(create.div).children().last()
				.addClass('toast')
				.attr('role', 'alert')
				.attr('data-delay', 5000)
				.attr('aria-live', 'assertive')
				.attr('aria-atomic', true)
			;
			
			let divContainer = divToast.append(create.div).children().last()
				.addClass('alert alert-' + label + ' d-flex px-3 m-0')
			;
			
			divContainer.append(create.div).children().last()
				.addClass('align-self-center')
				.append(global.icon[label])
			;
			
			let ulBody = divContainer.append(create.ul).children().last()
				.addClass('justify-content-center flex-fill')
			;
			
			divContainer.append(create.div).children().last()
				.addClass('justify-content-end')
				.append(global.icon.close);
			
			if (result.flash[label].length > 1) {
				for (let message of result.flash[label]) {
					ulBody.append(create.li).children().last()
						.text(message)
					;
				}
			} else {
				ulBody.text(result.flash[label][0]);
			}
			
			divToast.toast('show');
		}
		
		urlSearch.lineChecked();
		
		global.ajax.fetch('#table > tbody');
//		$('table').stickyTableHeaders()
		
	});
	
	$('#table').on('ajax.completed', function(e, result, textStatus, jqXHR) {

		if (e.target !== this) {
			return;
		}
		
		e.stopPropagation();
	});
	
	//---------------------
	// Quick edit
	//---------------------
	
	//---------------------
	// Modal
	//---------------------
	
	$('#modal_detail').on('ajax.completed', function(e, result, textStatus, jqXHR) {
		
		$(e.target).find('#version_edit_detail, #version_delete_detail').on('click', function() {
			global.ajax.set('#modal', $(this).data('url') + '?id[]=' + $('#version_tabs>a.active').data('id') + '&modal=1', {from: this});
	    });
		
	});
		
	$('#modal').on('ajax.success', function(e, result, textStatus, jqXHR) {
		
		if (result === '') {
			
			$('#modal_container').modal('hide');
			
			$('#modal_detail_container').modal('hide');
			urlSearch.fetch();
			e.stopPropagation();
		
		} else if ($('<div>' + result + '</div>').find('div.modal-body').exist()) {
			return true;
		} else if ($('<div>' + result + '</div>').find('pre.sf-dump').exist()) { //for debug only
			return true;	
		}
		$('#modal_container').modal('hide');
		
	});
	
	$('#modal_detail_container').on('hidden.bs.modal', function(e) {
		urlSearch.fetch();
	});
	
	
	//---------------------
	// Setup
	//---------------------
	
	let url = $('#table_container').data('url');
	global.ajax.set('#table_container', url);
	
});