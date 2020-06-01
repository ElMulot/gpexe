require('../js/app.js');
const $ = require('jquery');
const popper = require('popper.js');
require('sticky-table-headers');
require('../css/document.scss');
const URLSearchParams = require('@ungap/url-search-params/cjs');



var tableHeaders = [];

//---------------
// ajax
//---------------

var ajax = {
		
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
		
	set: function (target, url, method='GET', data) {
		
		if (target && url) {
			$(target)
				.empty()
				.append(icon.loading);
			
			let that = this;
			
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
			return this._paramsArray.getAll(key);
		} else {
			return this._paramsArray.get(key);
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
		
		$('#table > tbody').empty();
		$(icon.loading).insertAfter('#table');
		
		let that = this;
		
		$.ajax({
			url : $('#table').data('url') + that.toString(),
			type: 'GET',
			
			success: function(result) {
				
				let searchUrl = $.param(result.query);
				that._paramsArray = new URLSearchParams(searchUrl);
				
				$('#table').next().remove();
				$('#table').show();
				
				//vue
				$('#vues').find('button[data-value]').each(function() {
					if ($(this).data('value') == that.get('vue')) {
						$(this).attr('class', 'btn btn-outline-primary m-1')
					} else {
						$(this).attr('class', 'btn btn-primary m-1')
					}
				});
				
				for (let tableHeader of tableHeaders) {
					
					//hide
					
					let hide = that.get('hide[]');
					let index = hide.indexOf(tableHeader.id);
					
					tableHeader.aHide
						.toggleClass('btn-primary', !(index == -1))
						.toggleClass('btn-outline-primary', (index == -1))
					;
					tableHeader.chxHide.prop('checked', (index == -1))
					
					//headers
					
					tableHeader.btnDropdown.empty();
					
					tableHeader.isFiltered = false;
					tableHeader.isSortedAsc = false;
					tableHeader.isSortedDesc = false;
					
					for (let select of tableHeader.selects) {
						
						if (that.has(select.name)) {
							tableHeader.isFiltered = true;
						}
						
						if (that.get('sortAsc') == select.name) {
							tableHeader.isSortedAsc = true;
						}
						
						if (that.get('sortDesc') == select.name) {
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
						.on('click', lineChecked)
					;
					
					div.append(create.label).children().last()
						.attr('for', 'c_' + version.id)
					;
					
					
					for (let tableHeader of tableHeaders) {
						
						data = version[tableHeader.id];
						
						if (data !== undefined) {
							tableHeader.col.show();
							tableHeader.th.show();
							if (tableHeader.col.attr('class') == 'type-standard') {
								if (/^[-+]?[0-9]+$/.test(data)) {
									dataClass = 'type-integer';
								} else if (/^[-+]?[0-9]*\\.?[0-9]+$/.test(data)) {
									dataClass = 'type-float';
								} else {
									dataClass = 'type-text';
								}
							} else {
								dataClass = '';
							}
							tr.append(create.td).children().last()
								.addClass(dataClass)
								.text(data);
							
						} else {
							
							tableHeader.col.hide();
							tableHeader.th.hide();
							
						}
					}
					
					tr.append(create.td).children().last()
						.append(create.smallButton).children().last()
							.addClass('btn-success w-100')
							.attr('data-toggle', 'modal')
							.attr('data-target', '#modal')
							.attr('data-url', version.detailUrl)
							.text(text.details)
							
					;
					
				}
				
				//pagination
				
				if (result.pageMax > 1) {
					
					$('#table_container').addClass('mb-4');
					
					let pageMax = result.pageMax;
					let page = that.get('page') || 1;
					let pageMin = Math.max(1, page - 2);
					
					ul = $('#pagination').append(create.ul).children().last()
						.addClass('pagination justify-content-center')
					;
					
					ul.append(create.li).children().last()
						.addClass('page-item' + ((page == 1)?' disabled':''))
						.append(create.a).children().last()
							.addClass('page-link')
							.attr('data-value', Math.max(1, page - 1))
							.append(create.span).children().last()
								.attr('aria-hidden', true)
								.html('&laquo;')
					;
					
					for (let i=0; i<5; i++) {
						if (pageMax > i) {
							ul.append(create.li).children().last()
								.addClass('page-item' + ((page == pageMin + i)?' disabled':''))
								.append(create.a).children().last()
									.addClass('page-link')
									.attr('data-value', pageMin)
									.text(pageMin + i)
							;
						}
					}
					
					ul.append(create.li).children().last()
						.addClass('page-item' + ((page == pageMax)?' disabled':''))
						.append(create.a).children().last()
							.addClass('page-link')
							.attr('data-value', Math.min(pageMax, page + 1))
							.append(create.span).children().last()
								.attr('aria-hidden', true)
								.html('&raquo;')
					;
					
				}
				
				//$('table').stickyTableHeaders();
				
			},
		});	
	},	
}

/*
var datas = {
	
	get searchUrl() {
		
		let url = {};
		
		if (paramsArray.has('id[]')) {
			url.id = paramsArray.getAll('id[]');	
		}
		
		let _paramsArray = new URLSearchParams(this._searchUrl);
		
		if (_paramsArray.has('vue')) {
			url.vue = _paramsArray.get('vue');
			return $.param(url);
		} else {
			return paramsArray.toString();
		}
	},
	
	set searchUrl(value) {
		
		if (r = /\?(\S*)/g.exec(value)) { //enlève le ?
			this._searchUrl = r[1];
		} else if (r = /(\S+=\S+)+/g.exec(value)) {
			this._searchUrl = r[1];
		} else {
			paramsArray.delete('vue');
			this._searchUrl = paramsArray.toString();
		}
	},
	
	fetch: function() {
	
		$('#table > tbody').empty();
		$(icon.loading).insertAfter('#table');
		
		let that = this;
		
		$.ajax({
			url : $('#table').data('url') + '?' + this._searchUrl,
			type: 'GET',
			
			success: function(result) {
				
				paramsArray = new URLSearchParams($.param(result.query));
				
				$('#table').next().remove();
				$('#table').show();
				
				//vue
				if (paramsArray.has('vue')) that.searchUrl = 'vue=' + paramsArray.get('vue');
				
				$('#vues').find('button[data-value]').each(function() {
					if ($(this).data('value') == paramsArray.get('vue')) {
						$(this).attr('class', 'btn btn-outline-primary m-1')
					} else {
						$(this).attr('class', 'btn btn-primary m-1')
					}
				});
				
				for (let tableHeader of tableHeaders) {
					
					//hide
					
					let hide = paramsArray.getAll('hide[]');
					let index = hide.indexOf(tableHeader.id);
					
					tableHeader.aHide
						.toggleClass('btn-primary', !(index == -1))
						.toggleClass('btn-outline-primary', (index == -1))
					;
					tableHeader.chxHide.prop('checked', (index == -1))
					
					//headers
					
					tableHeader.btnDropdown.empty();
					
					tableHeader.isFiltered = false;
					tableHeader.isSortedAsc = false;
					tableHeader.isSortedDesc = false;
					
					for (let select of tableHeader.selects) {
						
						if (paramsArray.has(select.name)) {
							tableHeader.isFiltered = true;
						}
						
						if (paramsArray.get('sortAsc') == select.name) {
							tableHeader.isSortedAsc = true;
						}
						
						if (paramsArray.get('sortDesc') == select.name) {
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
						.on('click', lineChecked)
					;
					
					div.append(create.label).children().last()
						.attr('for', 'c_' + version.id)
					;
					
					
					for (let tableHeader of tableHeaders) {
						
						data = version[tableHeader.id];
						
						if (data !== undefined) {
							tableHeader.col.show();
							tableHeader.th.show();
							if (tableHeader.col.attr('class') == 'type-standard') {
								if (/^[-+]?[0-9]+$/.test(data)) {
									dataClass = 'type-integer';
								} else if (/^[-+]?[0-9]*\\.?[0-9]+$/.test(data)) {
									dataClass = 'type-float';
								} else {
									dataClass = 'type-text';
								}
							} else {
								dataClass = '';
							}
							tr.append(create.td).children().last()
								.addClass(dataClass)
								.text(data);
							
						} else {
							
							tableHeader.col.hide();
							tableHeader.th.hide();
							
						}
					}
					
					tr.append(create.td).children().last()
						.append(create.smallButton).children().last()
							.addClass('btn-success w-100')
							.attr('data-toggle', 'modal')
							.attr('data-target', '#modal')
							.attr('data-url', version.detailUrl)
							.text(text.details)
							
					;
					
				}
				
				//pagination
				
				if (result.pageMax > 1) {
					
					$('#table_container').addClass('mb-4');
					
					let pageMax = result.pageMax;
					let page = paramsArray.get('page') || 1;
					let pageMin = Math.max(1, page - 2);
					
					ul = $('#pagination').append(create.ul).children().last()
						.addClass('pagination justify-content-center')
					;
					
					ul.append(create.li).children().last()
						.addClass('page-item' + ((page == 1)?' disabled':''))
						.append(create.a).children().last()
							.addClass('page-link')
							.attr('data-value', Math.max(1, page - 1))
							.append(create.span).children().last()
								.attr('aria-hidden', true)
								.html('&laquo;')
					;
					
					for (let i=0; i<5; i++) {
						if (pageMax > i) {
							ul.append(create.li).children().last()
								.addClass('page-item' + ((page == pageMin + i)?' disabled':''))
								.append(create.a).children().last()
									.addClass('page-link')
									.attr('data-value', pageMin)
									.text(pageMin + i)
							;
						}
					}
					
					ul.append(create.li).children().last()
						.addClass('page-item' + ((page == pageMax)?' disabled':''))
						.append(create.a).children().last()
							.addClass('page-link')
							.attr('data-value', Math.min(pageMax, page + 1))
							.append(create.span).children().last()
								.attr('aria-hidden', true)
								.html('&raquo;')
					;
					
				}
				
				//$('table').stickyTableHeaders();
				
			},
		});	
	}

};
*/


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
				.addClass('px-2 ' + ((select.multiple)?'pt-3':'pt-1'))
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
		
		tableHeader.aHide = col.append(create.a).children().last()
			.addClass('btn-outline-primary col-2 m-1 text-left')
			.on('click', function() {
				
				tableHeader.chxHide.prop('checked', !tableHeader.chxHide.is(':checked'));
				
				let hide = urlSearch.get('hide[]');
				let index = hide.indexOf(tableHeader.id);
				
				if (tableHeader.chxHide.is(':checked')) {
					if (index > -1) {
						hide.splice(index, 1);
					}
				} else {
					if (index == -1 && tableHeader.id) {
						hide.push(tableHeader.id);
					}
				}
				
				urlSearch.delete('hide[]');
				hide.forEach(e => urlSearch.append('hide[]', e));
				urlSearch.fetch();
				
				return false;
			})
		;
		
		let div = tableHeader.aHide.append(create.div).children().last()
				.addClass('custom-control custom-checkbox')
		;
		
		tableHeader.chxHide = div.append(create.checkbox).children().last()
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

//---------------
// lineChecked
//---------------

function lineChecked() {
	
	var checked = false;
	var unchecked = false;

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
	
	urlSearch.delete('id[]');
	if (checked) {
		$('table').find('input[type="checkbox"]').each(function() {
			if ($(this).prop('id') != 'check_all' && $(this).is(':checked')) {
				urlSearch.append('id[]', $(this).val());
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

var urlSearch = new UrlSearch();

$(document).ready(function() {
	
	$('#form').on('submit', function(event) {
		
		event.preventDefault;
		$(event.target).find('select').each(function() {
			if ($(this).val().toString()  == '') {
				$(this).attr('disabled', 'disabled');
			}
		});
		
		return true;
	});
	
	$('#document_edit').hide();
	$('#document_move').hide();
	$('#document_delete').hide();
	$('#version_menu').hide();
	
	$('#modal').on('show.bs.modal', function(e) {
		ajax.set('.modal-body', $(e.relatedTarget).data('url'));
	});

	
	$('#document_edit').on('click', function() {
		location.assign($(this).data('url') + urlSearch.toString());
		return false;
	});
	
	$('#document_move').on('click', function() {
		location.assign($(this).data('url') + urlSearch.toString());
		return false;
	});
	
	$('#document_delete').on('click', function() {
		location.assign($(this).data('url') + urlSearch.toString());
		return false;
	});
	
	$('#version_new').on('click', function() {
		location.assign($(this).data('url') + urlSearch.toString());
		return false;
	});
	
	$('#version_edit').on('click', function() {
		location.assign($(this).data('url') + urlSearch.toString());
		return false;
	});
	
	$('#version_delete').on('click', function() {
		location.assign($(this).data('url') + urlSearch.toString());
		return false;
	});
	
	$('#check_all').on('click', function() {
		$('tbody').find('input[type="checkbox"]').each(function() {
			$(this).prop('checked', $('#check_all').is(':checked'));
		});
		lineChecked();
	});
	
	$('table').find('th[id][data-title]').each(function() {
		tableHeaders.push(createTableHeader(this));
	});
	
	$('#vues').find('button').on('click', function() {
		if ($(this).attr('id') == 'vue_new') {
			location.assign($(this).data('url') + urlSearch.toString());
		} else {
			urlSearch.set('vue', $(this).data('value'));
			urlSearch.fetch();
		}
	});
	
	
	
	
	
	
	fillDisplay();
	urlSearch.setFromUrl(window.location);
	urlSearch.fetch();
	
});