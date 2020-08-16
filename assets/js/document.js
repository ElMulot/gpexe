require('../js/app.js');
const $ = require('jquery');
const popper = require('popper.js');
require('sticky-table-headers');
//const tableDragger = require('table-dragger');
//require('jquery-resizable-columns');
require('../css/document.scss');
const URLSearchParams = require('@ungap/url-search-params/cjs');

var tableHeaders = [];

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
			return this._paramsArray.get(key) || [];
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
	
	toString: function() {
		let urlSearch = this._paramsArray.toString();
		return (urlSearch)?'?' + urlSearch:'';
	},
	
	fetch: function() {
		
		let url = $('#table').data('url') + this.toString();
		$('#table').hide();
		ajax.set('#spinner', url, 'GET', undefined, false, this.fillTable.bind(this));
		
	},
	
	fillTable: function(target, result = '') {
		
		$('#spinner').empty();
		$('#table > tbody').empty();
		$('#table').show();
		if (result == false) return;
		
		let searchUrl = $.param(result.query);
		this._paramsArray = new URLSearchParams(searchUrl);
		this.delete('id[]');
		
		let that = this;
		
		//vue
		$('#vues').find('button[data-value]').each(function() {
			if ($(this).data('value') == that.get('vue')) {
				$(this).attr('class', 'btn btn-outline-primary');
				$(this).parent().find('div > button').attr('class', 'btn btn-outline-primary dropdown-toggle');
			} else {
				$(this).attr('class', 'btn btn-primary');
				$(this).parent().find('div > button').attr('class', 'btn btn-primary dropdown-toggle');
			}
		});
		
		for (let tableHeader of tableHeaders) {
			
			//display
			
			if (display = this.get('display[' + tableHeader.id + ']')) {
				tableHeader.aDisplay.addClass('btn-outline-primary');
				tableHeader.aDisplay.removeClass('btn-primary');
				tableHeader.chxDisplay.prop('checked', true);
				tableHeader.col.css('width', display + 'em');
				tableHeader.col.show();
				tableHeader.th.show();
				
				//headers
				
				tableHeader.btnDropdown.empty();
				
				tableHeader.isFiltered = false;
				tableHeader.isSortedAsc = false;
				tableHeader.isSortedDesc = false;
				
				for (let select of tableHeader.selects) {
					
					if (this.has(select.name)) {
						tableHeader.isFiltered = true;
					}
					
					if (this.get('sortAsc') == select.name) {
						tableHeader.isSortedAsc = true;
					}
					
					if (this.get('sortDesc') == select.name) {
						tableHeader.isSortedDesc = true;
					}
					
				}
				
				tableHeader.btnDropdown.append((tableHeader.isFiltered)?icon.funnelFill:icon.funnel);					
				
				if (tableHeader.isSortedAsc) {
					tableHeader.btnDropdown.append(icon.arrowDown);
				}
				
				if (tableHeader.isSortedDesc) {
					tableHeader.btnDropdown.append(icon.arrowUp);
				}
				
			} else {
				tableHeader.aDisplay.addClass('btn-primary');
				tableHeader.aDisplay.removeClass('btn-outline-primary');
				tableHeader.chxDisplay.prop('checked', false);
				tableHeader.col.hide();
				tableHeader.th.hide();
			}
			
		}
		console.log(result.versions.length);
		//tbody
		for (let version of result.versions) {
			
			let tr = $('#table > tbody').append(create.tr).children().last();
			
			let div = tr.append(create.td).children().last()
				.append(create.div).children().last()
					.addClass('custom-control custom-checkbox')
			;
			
			div.append(create.checkbox).children().last()
				.attr('id', 'c_' + version.id)
				.val(version.id)
				.on('click', this.lineChecked.bind(this))
			;
			
			div.append(create.label).children().last()
				.attr('for', 'c_' + version.id)
			;
			
			
			for (let tableHeader of tableHeaders) {
				
				data = version[tableHeader.id];
				
				if (data !== undefined) {
					switch (tableHeader.col.attr('class')) {
						case 'type-boolean':
							if (data == 0) data = 'No';
							if (data == 1) data = 'Yes';
						case 'type-version':
						case 'type-date':
							dataClass = 'text-center';
							break;
						case 'type-reference':
						case 'type-name':
							dataClass = 'text-left';
							break;
						default:
							dataClass = '';
					}
					
					tr.append(create.td).children().last()
						.addClass(dataClass)
						.text(data)
					;
					
				} else {
					
					tableHeader.col.hide();
					tableHeader.th.hide();
					
				}
			}
			
			tr.append(create.td).children().last()
				.append(create.smallButton).children().last()
					.addClass('btn-success w-100')
					.attr('data-toggle', 'modal')
					.attr('data-target', '#modal_detail')
					.attr('data-url', version.detailUrl)
					.text(text.details)
					
			;
			
		}
		
		$('button[data-toggle="modal"][data-target="#modal_detail"]').on('click', function() {
			ajax.set('#modal_detail .modal-body', $(this).data('url'), 'GET', undefined, false, that.showDetail.bind(that));
		});
		
		//pagination
		$('#pagination').empty();
		
		if (result.pageMax > 1) {
			
			$('#table_container').addClass('mb-4');
			
			let pageMax = result.pageMax;
			let page = parseInt(this.get('page')) || 1;
			let pageMin = Math.max(1, page - 2);
			
			ul = $('#pagination').append(create.ul).children().last()
				.addClass('pagination justify-content-center')
			;
			
			ul.append(create.li).children().last()
				.addClass('page-item' + ((page == 1)?' disabled':''))
				.on('click', function() {
					that.set('page', page - 1);
					that.fetch();
				})
				.append(create.a).children().last()
					.addClass('page-link')
					.attr('data-value', Math.max(1, page - 1))
					.append(create.span).children().last()
						.attr('aria-hidden', true)
						.html('&laquo;')
			;
			
			for (let i=0; i<5; i++) {
				if (pageMax > pageMin + i) {
					ul.append(create.li).children().last()
						.addClass('page-item' + ((page == pageMin + i)?' active':''))
						.on('click', function() {
							that.set('page', pageMin + i);
							that.fetch();
						})
						.append(create.a).children().last()
							.addClass('page-link')
							.attr('data-value', pageMin)
							.text(pageMin + i)
					;
				}
			}
			
			ul.append(create.li).children().last()
				.addClass('page-item' + ((page == pageMax)?' disabled':''))
				.on('click', function() {
					that.set('page', page + 1);
					that.fetch();
				})
				.append(create.a).children().last()
					.addClass('page-link')
					.attr('data-value', Math.min(pageMax, page + 1))
					.append(create.span).children().last()
						.attr('aria-hidden', true)
						.html('&raquo;')
			;
			
		}
		
		
		//flashes
		
		$('#toast').empty();
		
		for (const label in result.flash) {
			
			let div = $('#toast').append(create.div).children().last()
				.addClass('toast px-3')
				.attr('role', 'alert')
				.data('delay', 5000)
				.attr('aria-live', 'assertive')
				.attr('aria-atomic', true)
			;
			
			let header = div.append(create.div).children().last()
				.addClass('toast-header')
				.append((['danger', 'warning'].includes(label))?icon.exclamation:icon.information)
				.append(icon.close);
			;
			
			let body = div.append(create.ul).children().last()
				.addClass('toast-body')
			;
			
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
		
		this.lineChecked();
		
		//$('table').stickyTableHeaders();
		
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
	
	showDetail: function(target, result = '') {
		$(target).find('.spinner-border').parent().remove();
		if (result) {
			$(target).html($(target).html() + result);
		}
		
		//---------------------
		// popover
		//---------------------
		
		$(target).find('[data-toggle="popover"]').popover();
		
		//---------------------
		// Ajax
		//---------------------
		
	    //ajax.fetch(target, this.showDetail.bind(this));
	    
		let that = this;
		
		$('#version_tabs').find('a').each(function() {
			
			$(this).on('click', function(e) {
				if ($(this).parent().has('.active')) {
					$(this).parent().find('.active').removeClass('active');
					$(this).addClass('active');
				}
				
				ajax.set('#version_content', $(this).data('url'));
			});
			
			if ($(this).hasClass('active')) {
				$(this).trigger('click');
			}
		});
		
		$('#version_new_detail, #version_edit_detail, #version_remove_detail').on('click', function() {
			$('#modal').modal('show');
			ajax.set('#modal .modal-content', $(this).data('url') + '?id[]=' + $('#version_tabs>a.active').data('id'), 'GET', undefined, false, that.onDataEdited.bind(that));
	    });
		
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
	},
	
	onDataEdited: function(target, result = '') {
		
		if (result) {
			ajax.onSuccess(target, result, this.onDataEdited.bind(this));
		} else {
			urlSearch.fetch();
			if ($('#modal').hasClass('show')) {
				ajax.set('#version_content', $('#version_tabs').find('a.active').data('url'));
			}
			$('#modal .modal-content').empty();
			$('#modal').modal('hide');
		}
		
	},
	
}

//---------------
// tableHeader
//---------------

function createTableHeader(that) {
	
	var tableHeader = {
		col: $(that).closest('table').find('col').eq($(that).index()),
		th: $(that),
		id: $(that).attr('id'),
		title: $(that).data('title'),
		sort: $(that).data('sort'),
		isFiltered: false,
		isSortedAsc: false,
		isSortedDesc: false,
		selects: [],
	}
	
	$(that).find('select').each(function() {
		
		var multipleAttr = (typeof $(this).attr('multiple') !== typeof undefined && $(this).attr('multiple') !== false);
		var name = $(this).prop('name') + ((multipleAttr)?'[]':'');
		
		var select = {
				slt: $(this),
				id: $(this).prop('id'),
				name: name,
				multiple: multipleAttr,
				title: $(this).data('title'),
				options: [],
		};
		
		$(this).find('option').each(function() {
			select.options.push({
				value: $(this).attr('value'),
				text: $(this).text(),
			});
		});
		
		tableHeader.selects.push(select);
		
	});
	
	if (tableHeader.selects.length) {
	
		tableHeader.divDropdownGroup = tableHeader.th.append(create.div).children().last()
			.addClass('btn-group w-100')
			.attr('role', 'group')
			.on('hide.bs.dropdown', function (e) {
				
				if(e.clickEvent && $.contains(e.relatedTarget.parentNode, e.clickEvent.target)) {
					e.preventDefault()
				} else {
					tableHeader.divDropdownMenu.empty();
				}
			})
		;
		
		tableHeader.divDropdownGroup.append(create.menuButton).children().last()
			.addClass('w-100')
			.attr('type', 'button')
			.text(tableHeader.title)
			.on('click', function() {
				if (tableHeader.selects && tableHeader.sort) {
					if (urlSearch.get('sortAsc') == tableHeader.selects[0].name) {
						urlSearch.delete('sortAsc');
						urlSearch.set('sortDesc', tableHeader.selects[0].name);
					} else {
						urlSearch.delete('sortDesc');
						urlSearch.set('sortAsc', tableHeader.selects[0].name);
					}
					urlSearch.fetch();
				}
			})
		;
	
		tableHeader.btnDropdown = tableHeader.divDropdownGroup.append(create.menuButton).children().last()
			.addClass('px-0')
			.css('width', '3em')
			.attr('type', 'button')
			.attr('id', 'b_' + tableHeader.id)
			.attr('data-toggle', 'dropdown')
			.attr('aria-haspopup', true)
			.attr('aria-expanded', false)
		;
	
		tableHeader.divDropdownMenu = tableHeader.divDropdownGroup.append(create.div).children().last()
			.addClass('dropdown-menu')
			.attr('aria-labelledby', 'b_' + tableHeader.id)
			.append(create.div).children().last()
				.addClass('d-flex flex-row')
		;
		
		tableHeader.divDropdownGroup.on('show.bs.dropdown', createMenu);
	
	} else {
		
		tableHeader.btnDropdown = tableHeader.th.append(create.menuButton).children().last()
			.addClass('w-100')
			.text(tableHeader.title).children().last()
			.append(create.div)
		;
		
	}

	function createMenu() {
		
		tableHeader.divDropdownMenu.empty();
		
		for (let select of tableHeader.selects) {
			
			select.divContent = tableHeader.divDropdownMenu.append(create.div).children().last()
				.addClass('mx-1')
				.css('min-width', '15em')
			;
			
			if (select.multiple) {
				
				if (tableHeader.selects.length > 1) {
					select.divContent.append(create.div).children().last()
						.addClass('text-center border-bottom border-dark pb-2 px-1')
						.append(select.title);
					;
				}
				
				select.divFilter = select.divContent.append(create.div).children().last()
					.addClass('text-center p-1')
				;
				
				if (tableHeader.selects.length == 1) {
					select.btnSortDesc = select.divFilter.append(create.smallButton).children().last()
						.append(icon.arrowUp)
						.addClass((urlSearch.get('sortDesc') == select.name)?'px-2 btn-outline-primary bg-dark text-white':'px-2 btn-primary')
						.on('click', sortDesc)
					;
				}
				
				select.divFilter.append(create.smallButton).children().last()
					.text(text.filter)
					.addClass('px-3 btn-primary')
					.on('click', filter)
				;
				
				if (tableHeader.selects.length == 1) {
					select.btnSortAsc = select.divFilter.append(create.smallButton).children().last()
						.append(icon.arrowDown)
						.addClass((urlSearch.get('sortAsc') == select.name)?'px-2 btn-outline-primary bg-dark text-white':'px-2 btn-primary')
						.on('click', sortAsc)
					;
				}
				
				select.divSearch = select.divContent.append(create.div).children().last()
					.addClass('text-center border-bottom border-dark p-2')
				;
				
				select.divSearch.append(create.input).children().last()
					.on('input', function() {
						var searchValue = $(this).val().toLowerCase()
						
						if (searchValue == '') {
							select.divSelectAll.show();
							for (let option of select.options) {
								option.div.show();
								option.chx.prop('checked', false);
							}
						} else {
							select.divSelectAll.hide();
							for (let option of select.options) {
								if (option.text.toLowerCase().indexOf(searchValue) == -1) {
									option.div.hide();
									option.chx.prop('checked', false);
								} else {
									option.div.show();
									option.chx.prop('checked', true);
								}	
							}
						}
					})
				;
			}
			
			select.divList = select.divContent.append(create.div).children().last()
				.addClass('px-2 overflow-auto ' + ((select.multiple)?'pt-3':'pt-1'))
				.css('max-height', '20em')
			;
			
			if (select.multiple) {
				select.divSelectAll = select.divList.append(create.div).children().last()
					.addClass('custom-control custom-checkbox')
				;
				
				select.chxSelectAll = select.divSelectAll.append(create.checkbox).children().last()
					.attr('id', select.name + '_selectAll')
					.on('change', function() {
						
						var checked = $(this).is(':checked');
						for (let option of select.options) {	
							option.chx.prop('checked', checked);
						}
						
					})
				;
				
				select.divSelectAll.append(create.label).children().last()
					.attr('for', select.name + '_selectAll')
					.text(text.selectAll)
				;
				
				for (let option of select.options) {
					
					option.div = select.divList.append(create.div).children().last()
						.addClass('custom-control custom-checkbox')
					;

					option.chx = option.div.append(create.checkbox).children().last()
						.attr('id', select.name + '_' + option.value)
						.attr('checked', urlSearch.get(select.name).includes(option.value))
						.on('click', function() {
							
							let checked = false;
							let unchecked = false;
							
							for (let option of select.options) {
								if ($(option.chx).is(':checked')) {
									checked = true;
								} else {
									unchecked = true;
								}
							}
							
							if (checked && unchecked) {
								select.chxSelectAll.prop('indeterminate', true);
							} else {
								select.chxSelectAll.prop('indeterminate', false);
								select.chxSelectAll.prop('checked', checked);
							}
							
						})
					;
					
					option.lbl = option.div.append(create.label).children().last()
						.attr('for', select.name + '_' + option.value)
						.text(option.text)
					;
				}
				
			} else {
				
				select.divUnknown = select.divList.append(create.div).children().last()
					.addClass('custom-control custom-checkbox')
				;
				
				select.chxUnknown = select.divUnknown.append(create.checkbox).children().last()
					.attr('id', select.name + '_notApplicable')
					.attr('checked', !urlSearch.has(select.name))
					.on('change', function() {
						
						var checked = $(this).is(':checked');
						for (let option of select.options) {	
							option.chx.prop('checked', false);
						}
						urlSearch.delete(select.name);
						
						tableHeader.btnDropdown.dropdown('hide');
						urlSearch.fetch();
					})
				;
			
				select.divUnknown.append(create.label).children().last()
					.attr('for', select.name + '_notApplicable')
					.text(text.notApplicable)
				;
				
				for (let option of select.options) {
					
					option.div = select.divList.append(create.div).children().last()
						.addClass('custom-control custom-checkbox')
					;
					
					option.chx = option.div.append(create.checkbox).children().last()
						.attr('id', select.name + '_' + option.value)
						.attr('checked', urlSearch.get(select.name).includes(option.value))
						.on('click', function() {
							
							select.divList.find('input').not(this).prop('checked', false);
							urlSearch.delete(select.name);
							
							if (!select.chxUnknown.is(':checked')) {
								for (let option of select.options) {
									if (option.chx.is(':checked')) {
										urlSearch.append(select.name, option.value);
									}
								}
							}
							
							tableHeader.btnDropdown.dropdown('hide');
							urlSearch.fetch();
						})
					;
					
					option.lbl = option.div.append(create.label).children().last()
						.attr('for', select.name + '_' + option.value)
						.text(option.text)
					;
				}
			}
		
			function sortAsc() {
				urlSearch.delete('sortDesc');
				if (urlSearch.get('sortAsc') == select.name) {
					urlSearch.delete('sortAsc');
				} else {
					urlSearch.set('sortAsc', select.name);
				}
				filter();
			}
				
			function filter() {
				
				urlSearch.delete(select.name);
				if (!select.chxSelectAll.is(':checked')) {
					
					for (let option of select.options) {
						if (option.chx.is(':checked')) {
							urlSearch.append(select.name, option.value);
						}
					}
				}
				tableHeader.btnDropdown.dropdown('hide');
				urlSearch.fetch();
			}
				
			function sortDesc() {
				urlSearch.delete('sortAsc');
				if (urlSearch.get('sortDesc') == select.name) {
					urlSearch.delete('sortDesc');
				} else {
					urlSearch.set('sortDesc', select.name);
				}	
				filter();
			}
		}
		
	}
	
	return tableHeader;
}

//---------------
// fillDisplay
//---------------

function fillDisplay() {
	var col = $('#display').append(create.div).children().last()
		.addClass('row py-2')
		.append(create.div).children().last()
			.addClass('col')
	;
	
	for (let tableHeader of tableHeaders) {
		
		tableHeader.aDisplay = col.append(create.a).children().last()
			.addClass('btn-outline-primary col-2 m-1 text-left')
			.on('click', function() {
				
				tableHeader.chxDisplay.prop('checked', !tableHeader.chxDisplay.is(':checked'));
				
				let display = urlSearch.get('display[' + tableHeader.id + ']');
				
				urlSearch.delete('display[' + tableHeader.id + ']');
				
				if (tableHeader.chxDisplay.is(':checked')) {
					if (display == null) {
						urlSearch.append('display[' + tableHeader.id + ']', 10);
					}
				}
				
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
	
	$('#search button').on('click', function() {
		
		urlSearch.set('search', $('#search input').val());
		urlSearch.fetch();
		
		return true;
		
	});
	
	$('#search a').on('click', function() {
		
		$('#search input').val('');
		
		if (urlSearch.has('search')) {
			urlSearch.delete('search');
			urlSearch.fetch();
		}
		return true;
		
	});
	
	//---------------------
	// Modal
	//---------------------
	
	/*
	$('#modal').on('show.bs.modal', function(e) {
		ajax.set('#modal .modal-content', $(e.relatedTarget).data('url') + urlSearch.toString());
	});
	*/
	
	$('#document_new, #document_edit, #document_move, #document_delete, #version_new, #version_edit, #version_delete').on('click', function() {
		$('#modal').modal('show');
		ajax.set('#modal .modal-content', $(this).data('url') + urlSearch.toString(), 'GET', undefined, false, urlSearch.onDataEdited.bind(urlSearch));
	})
	
	
	//---------------------
	// Modal_detail
	//---------------------
	
	/*
	$(document).ajaxComplete(function(e, xhr) {
		if (xhr.responseText === '') {
			//urlSearch.fetch();
			$('#modal').modal('hide');
			ajax.set('#toast', $('#toast').data('url'));
		}
	});
	*/

	//---------------------
	// Menu display
	//---------------------

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
	// Table headers
	//---------------------
	
	$('#tabs').trigger('show.bs.tab');
	
	$('table').find('th[id][data-title]').each(function() {
		tableHeaders.push(createTableHeader(this));
	});
	
	//---------------------
	// Vues
	//---------------------
	
	$('#vues').find('button[data-value]').on('click', function() {
		if ($(this).attr('id') == 'vue_new') {
			location.assign($(this).data('url') + urlSearch.toString());
		} else {
			urlSearch.set('vue', $(this).data('value'));
			urlSearch.fetch();
		}
	});
	
	fillDisplay();
	urlSearch.setFromUrl(window.location.search);
	urlSearch.fetch();
	
});