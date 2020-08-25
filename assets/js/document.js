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
		ajax.set('#spinner', url, 'GET', undefined, false, this.fillTable.bind(this));
		
	},
	
	fillTable: function(target, result = '') {
		
		$('#spinner').empty();
		$('#table > tbody').empty();
		$('#table').show();
		if (result == false) return;
		
		console.log(result.query);
		
		let searchUrl = $.param(result.query);
		this._paramsArray = new URLSearchParams(searchUrl);
		this.delete('id[]');
		
		let that = this;
		
		//vue
		$('#vues').find('button[data-id]').each(function() {
			if ($(this).data('id') == that.get('vue')) {
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
				}
				
				if (this.get('sortAsc') == tableHeader.id) {
					tableHeader.isSortedAsc = true;
				}
				
				if (this.get('sortDesc') == tableHeader.id) {
					tableHeader.isSortedDesc = true;
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
					
					//highlight
					
					if (urlSearch.get('highlight') == tableHeader.id) {
						if (data.toDate() !== null) {
							if (data.toDate() < new Date()) {
								tr.addClass('highlight-late');
							} else if (data.toDate().addDays(-15) < new Date()) {
								tr.addClass('highlight-15');
							} else if (data.toDate().addDays(-30) < new Date()) {
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
					.attr('data-url', version.detailUrl)
					.text(text.details)
					
			;
			
		}
		
		$('#table tbody button[data-url]').on('click', function() {
			$('#modal_detail').modal('show');
			ajax.set('#modal_detail .modal-body', $(this).data('url'), 'GET', undefined, false, that.showDetail.bind(that));
		});
		
		//pagination
		$('#pagination').empty();
			
		$('#table_container').addClass('mb-4');
		
		let pageMax = result.pageMax;
		let page = parseInt(this.get('page')) || 1;
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
						that.set('page', page - 1);
						that.delete('vue');
						that.fetch();
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
						that.set('page', i);
						that.delete('vue');
						that.fetch();
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
						that.set('page', page + 1);
						that.delete('vue');
						that.fetch();
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
				that.delete('vue');
				urlSearch.fetch();
			})
		;
		
		let resultsPerPage = new Map([['10', 10], ['50', 50], ['100', 100], [text.all, '0']]);
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
				.data('delay', 5000)
				.attr('aria-live', 'assertive')
				.attr('aria-atomic', true)
			;
			
			div.append(create.div).children().last()
				.addClass('align-self-center')
				.append(icon[label]);
			
			let body = div.append(create.ul).children().last()
				.addClass('justify-content-center flex-fill')
			;
			
			div.append(create.div).children().last()
				.addClass('justify-content-end')
				.append(icon.close);
			
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
				
				ajax.set('#version_content', $(this).data('url'), 'GET', undefined, false, that.showContent.bind(that));
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
			$(this).datepicker();
		})
	},
	
	showContent: function(target, result = '') {
		
		ajax.onSuccess(target, result);

		let that = this;
		
		$('#save').on('click', function() {
			$('#modal').modal('show');
			ajax.set('#modal .modal-content', $(this).data('url'), 'GET', undefined, false, that.onDataEdited.bind(that));
	    });
	},
	
	onDataEdited: function(target, result = '') {
		
		if (result) {
			ajax.onSuccess(target, result, this.onDataEdited.bind(this));
		} else {
			let that = this;
			urlSearch.fetch();
			if ($('#modal_detail').hasClass('show')) {
				ajax.set('#modal_detail .modal-body', $('#menu').data('url'), 'GET', undefined, false, that.showDetail.bind(that));
			}
			$('#modal .modal-content').empty();
			$('#modal').modal('hide');
		}
		
	},
	
	onVueEdited: function(target, result = '') {
		
		if (result) {
			ajax.onSuccess(target, result, this.onVueEdited.bind(this));
		} else {
			location.assign(location.origin + location.pathname + urlSearch.toUrl());
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
		name: $(that).attr('name'),
		title: $(that).data('title'),
		sort: $(that).data('sort'),
		type: $(that).attr('class'),
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
	
	if (tableHeader.selects.length || tableHeader.type == 'type-date') {
	
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
					urlSearch.delete('vue');
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
		
		if (tableHeader.selects.length) {
		
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
							.addClass((urlSearch.get('sortDesc') == tableHeader.id)?'px-2 btn-outline-primary bg-dark text-white':'px-2 btn-primary')
							.on('click', function() {
								urlSearch.delete('sortAsc');
								if (urlSearch.get('sortDesc') == tableHeader.id) {
									urlSearch.delete('sortDesc');
								} else {
									urlSearch.set('sortDesc', tableHeader.id);
								}	
								select.btnFilter.trigger('click');
							})
						;
					}
					
					select.btnFilter = select.divFilter.append(create.smallButton).children().last()
						.text(text.filter)
						.addClass('px-3 btn-primary')
						.on('click', function() {
							for (let select of tableHeader.selects) {
								urlSearch.delete(select.name);
								if (!select.chxSelectAll.is(':checked')) {
									for (let option of select.options) {
										if (option.chx.is(':checked')) {
											urlSearch.append(select.name, option.value);
										}
									}
								}
							}
							tableHeader.btnDropdown.dropdown('hide');
							urlSearch.delete('vue');
							urlSearch.fetch();
						})
					;
					
					if (tableHeader.selects.length == 1) {
						select.btnSortAsc = select.divFilter.append(create.smallButton).children().last()
							.append(icon.arrowDown)
							.addClass((urlSearch.get('sortAsc') == tableHeader.id)?'px-2 btn-outline-primary bg-dark text-white':'px-2 btn-primary')
							.on('click', function() {
								urlSearch.delete('sortDesc');
								if (urlSearch.get('sortAsc') == tableHeader.id) {
									urlSearch.delete('sortAsc');
								} else {
									urlSearch.set('sortAsc', tableHeader.id);
								}
								select.btnFilter.trigger('click');
							})
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
						.on('click', function() {
							
							var checked = $(this).is(':checked');
							for (let option of select.options) {	
								option.chx.prop('checked', false);
							}
							urlSearch.delete(select.name);
							
							tableHeader.btnDropdown.dropdown('hide');
							urlSearch.delete('vue');
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
								urlSearch.delete('vue');
								urlSearch.fetch();
							})
						;
						
						option.lbl = option.div.append(create.label).children().last()
							.attr('for', select.name + '_' + option.value)
							.text(option.text)
						;
					}
				}
			}
			
		} else if (tableHeader.type == 'type-date') {
			
			if ((result = />(\d{2}-\d{2}-\d{4})/.exec(urlSearch.get(tableHeader.name + '[]').toString())) !== null) {
				var valueInf = result[1];
			} else {
				var valueInf = '';
			}
			
			if ((result = /<(\d{2}-\d{2}-\d{4})/.exec(urlSearch.get(tableHeader.name + '[]').toString())) !== null) {
				var valueSup = result[1];
			} else {
				var valueSup = '';
			}
			
			var highlight = (urlSearch.get('highlight').toString() == tableHeader.id);
			
			tableHeader.divContent = tableHeader.divDropdownMenu.append(create.div).children().last()
				.addClass('mx-1')
				.css('min-width', '15em')
			;
			
			tableHeader.divFilter = tableHeader.divContent.append(create.div).children().last()
				.addClass('text-center p-1')
			;
			
			tableHeader.btnSortDesc = tableHeader.divFilter.append(create.smallButton).children().last()
				.append(icon.arrowUp)
				.addClass((urlSearch.get('sortDesc') == tableHeader.id)?'px-2 btn-outline-primary bg-dark text-white':'px-2 btn-primary')
				.on('click', function() {
					urlSearch.delete('sortAsc');
					if (urlSearch.get('sortDesc') == tableHeader.id) {
						urlSearch.delete('sortDesc');
					} else {
						urlSearch.set('sortDesc', tableHeader.id);
					}	
					tableHeader.btnFilter.trigger('click');
				})
			;
			
			tableHeader.btnFilter = tableHeader.divFilter.append(create.smallButton).children().last()
				.text(text.filter)
				.addClass('px-3 btn-primary')
				.on('click', function() {
					urlSearch.delete(tableHeader.name + '[]');
					if (tableHeader.chxInf.is(':checked') && (result = /^≥\s(\d{2}-\d{2}-\d{4})/.exec(tableHeader.inputInf.val()))) {
						urlSearch.append(tableHeader.name + '[]', '>' + result[1]);
					}
					
					if (tableHeader.chxSup.is(':checked') && (result = /^≤\s(\d{2}-\d{2}-\d{4})/.exec(tableHeader.inputSup.val()))) {
						urlSearch.append(tableHeader.name + '[]', '<' + result[1]);
					}
					
					if (tableHeader.chxHighlight.is(':checked')) {
						urlSearch.set('highlight', tableHeader.id);
					} else if (urlSearch.get('highlight').toString() == tableHeader.id) {
						urlSearch.delete('highlight');
					}
					
					tableHeader.btnDropdown.dropdown('hide');
					urlSearch.delete('vue');
					urlSearch.fetch();
				})
			;
			
			tableHeader.btnSortAsc = tableHeader.divFilter.append(create.smallButton).children().last()
				.append(icon.arrowDown)
				.addClass((urlSearch.get('sortAsc') == tableHeader.id)?'px-2 btn-outline-primary bg-dark text-white':'px-2 btn-primary')
				.on('click', function() {
					urlSearch.delete('sortDesc');
					if (urlSearch.get('sortAsc') == tableHeader.id) {
						urlSearch.delete('sortAsc');
					} else {
						urlSearch.set('sortAsc', tableHeader.id);
					}
					tableHeader.btnFilter.trigger('click');
				})
			;
			
			tableHeader.divList = tableHeader.divContent.append(create.div).children().last()
				.addClass('px-2 overflow-auto ' + ((tableHeader.multiple)?'pt-3':'pt-1'))
			;
			
			tableHeader.divInf = tableHeader.divList.append(create.div).children().last()
				.addClass('custom-control custom-checkbox mt-2')
			;
			
			tableHeader.chxInf = tableHeader.divInf.append(create.checkbox).children().last()
				.attr('id', tableHeader.id + '_inf')
				.attr('checked', valueInf != '')
				.on('change', function() {
					let checked = $(this).is(':checked');
					if (checked) {
						if (/^≥\s\d{2}-\d{2}-\d{4}/.test(tableHeader.inputInf.val()) === false) {
							tableHeader.inputInf.val('');
						}
					} else {
						tableHeader.inputInf.val(text.fromDate);
					}
					tableHeader.inputInf.attr('readonly', checked === false);
				})
			;
			
			tableHeader.labelInf = tableHeader.divInf.append(create.label).children().last()
				.attr('for', tableHeader.id + '_inf')
			;
			
			tableHeader.inputInf = tableHeader.labelInf.append(create.input).children().last()
				.addClass('form-control datepicker')
				.val((valueInf)?('≥ ' + valueInf):text.fromDate)
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
			
			tableHeader.divSup = tableHeader.divList.append(create.div).children().last()
				.addClass('custom-control custom-checkbox mt-2')
			;
			
			tableHeader.chxSup = tableHeader.divSup.append(create.checkbox).children().last()
				.attr('id', tableHeader.id + '_sup')
				.attr('checked', valueSup != '')
				.on('change', function() {
					let checked = $(this).is(':checked');
					if (checked) {
						if (/^≤\s\d{2}-\d{2}-\d{4}/.test(tableHeader.inputSup.val()) === false) {
							tableHeader.inputSup.val('');
						}
					} else {
						tableHeader.inputSup.val(text.toDate);
					}
					tableHeader.inputSup.attr('readonly', checked === false);
				})
			;
			
			tableHeader.labelSup = tableHeader.divSup.append(create.label).children().last()
				.attr('for', tableHeader.id + '_sup')
			;
			
			tableHeader.inputSup = tableHeader.labelSup.append(create.input).children().last()
				.addClass('form-control datepicker')
				.val((valueSup)?'≤ ' + valueSup:text.toDate)
				.attr('readonly', valueSup == '')
				.datepicker({'format': "≤ dd-mm-yyyy"})
				.on('click', function() {
					tableHeader.chxSup.prop('checked', true);
					tableHeader.chxSup.trigger('change');
				})
			    .on('show.bs.dropdown hide.bs.dropdown', function(e) {
			    	e.stopPropagation();
			    })
			;
			
			tableHeader.divHighlight = tableHeader.divList.append(create.div).children().last()
				.addClass('custom-control custom-checkbox mt-2')
			;
			
			tableHeader.chxHighlight = tableHeader.divHighlight.append(create.checkbox).children().last()
				.attr('id', tableHeader.id + '_highlight')
				.attr('name', 'highlight')
				.val(tableHeader.id)
				.attr('checked', highlight)
			;
			
			tableHeader.labelHighlight = tableHeader.divHighlight.append(create.label).children().last()
				.attr('for', tableHeader.id + '_highlight')
				.text(text.highlight)
			;
			
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
					if (display == false) {
						urlSearch.append('display[' + tableHeader.id + ']', 10);
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
		ajax.set('#modal .modal-content', $(e.relatedTarget).data('url') + urlSearch.toUrl());
	});
	*/
	
	$('#document_new, #document_edit, #document_move, #document_delete, #version_new, #version_edit, #version_delete').on('click', function() {
		$('#modal').modal('show');
		ajax.set('#modal .modal-content', $(this).data('url') + urlSearch.toUrl('id[]'), 'GET', undefined, false, urlSearch.onDataEdited.bind(urlSearch));
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
	
	$('#vues').find('button[data-id]').on('click', function() {
		urlSearch.set('vue', $(this).data('id'));
		urlSearch.fetch();
	});
	
	$('#vues').find('a[data-url]').on('click', function() {
		$('#modal').modal('show');
		ajax.set('#modal .modal-content', $(this).data('url') + urlSearch.toUrl(), 'GET', undefined, false, urlSearch.onVueEdited.bind(urlSearch));
	});
	
	$('#vue_new').on('click', function() {
		$('#modal').modal('show');
		ajax.set('#modal .modal-content', $(this).data('url') + urlSearch.toUrl(), 'GET', undefined, false, urlSearch.onVueEdited.bind(urlSearch));
	});
	
	fillDisplay();
	urlSearch.setFromUrl(window.location.search);
	urlSearch.fetch();
	
});