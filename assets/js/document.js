const $ = require('jquery');
const {Chart, LineElement, PointElement, LineController, CategoryScale, LinearScale, Legend, Tooltip} = require('chart.js');
Chart.register(LineElement, PointElement, LineController, CategoryScale, LinearScale, Legend, Tooltip);

//require('sticky-table-headers');
require('../css/document.scss');
const URLSearchParams = require('@ungap/url-search-params');

var gpexe = {
	_headers: [],
	_selectors: [],
	series: [],
	$table: null,
	$chxCheckall: null,
	colResize: {},
	colDrag: {},
	
	addHeader: function(field) {
		let header = {
			id: field.id,
			title: field.title,
			type: field.type,
			permissions: field.permissions,
			_visible: true,
			_defaultOrder: this._headers.length + 1,
			_order: 0,
			_defaultWidth: field.default_width,
			_width: 0,
			mandatory: field.mandatory,
			hasSort: (field.elements && field.elements.some(v => v.sort === true)),
			hasFilter: (field.elements && field.elements.some(v => v.filter)),
			elements: [],
			$colResizeHandleLeft: null,
			$colResizeHandleRight: null,
			menu: {},
			_parent: this,
			
			setVisible: function(visible) {
				if (this._visible != visible) {
					this._visible = visible;
					this.update();
				}
			},
			
			getVisible: function() {
				return this._visible && this.getWidth() != 0;
			},
			
			setWidth: function(width) {
				if (this._width != width) {
					this._width = width;
					this.update();
				}
			},
			
			getWidth: function() {
				return (this._width)?this._width:this._defaultWidth;
			},
			
			setOrder: function(order) {
				
				if (order > 0) {
					
					let currentOrder = this._parent.getHeaders(true).indexOf(this) + 1;
					
//					console.log('order: ' + order);
//					console.log('currentOrder: ' + currentOrder);
					
					if (currentOrder > order) {
						for (let header of this._parent.getHeaders()) {
							if (header._order > 0 && header._order >= order && header._order <= currentOrder && header != this) {
								header._order++;
								urlSearch.set('order[' + header.id + ']', header._order);
							}
						}
					} else if (currentOrder < order) {
						for (let header of this._parent.getHeaders()) {
							if (header._order > 0 && header._order <= order && header._order >= currentOrder && header != this) {
								header._order--;
								urlSearch.set('order[' + header.id + ']', header._order);
							}
						}
					}
					
					this._order = parseInt(order);
					urlSearch.set('order[' + this.id + ']', order);
					
				} else if (order == 0) {
					this._order = 0;
				} else {
					return;
				}
				
				if (this.$th) {
					let currentIndex = this._parent.$table.find('th').index(this.$th);
					let index;
					if (order > 0) {
						index = this._parent.$table.find('th').index(this._parent.$table.find('th').not('#selector, #detail').eq(order - 1));
					} else {
						index = this._defaultOrder
							- this._parent.getHeaders().filter(v => v._order > 0 && v._defaultOrder < this._defaultOrder).length
							+ this._parent.getHeaders().filter(v => v._order > 0 && v._defaultOrder > this._defaultOrder).length;
					}
					
					if (currentIndex > index) {
						this._parent.$table.find('tr').each(function() {
							$(this).children().eq(currentIndex).insertBefore($(this).children().eq(index));
						});
					} else if (currentIndex < index) {
						this._parent.$table.find('tr').each(function() {
							$(this).children().eq(currentIndex).insertAfter($(this).children().eq(index));
						});
					}
				}
			},
			
			getOrder: function() {
				return this._order;
			},
			
			update: function() {
				
				if (this._visible === true) {
					
					if (this.menu.$a && this.menu.$chx) {			
						this.menu.$a.addClass('btn-outline-primary');
						this.menu.$a.removeClass('btn-primary');
						this.menu.$chx.prop('checked', true);
					}
					
					if (this.$th) {
						this.$th.show();
						let width = this.getWidth();
						this.$th.css('width', width + 'rem');
						this.$th.css('min-width', width + 'rem');
						this.$th.css('max-width', width + 'rem');
						let index = this.$th.index() + 1;
						$('#table').find('td:nth-child(' + index + ')').each(function() {
							$(this).show();
							$(this).css('max-width', width + 'rem');
						});
					}
					
				} else {
					
					if (this.menu.$a  && this.menu.$chx) {			
						this.menu.$a.addClass('btn-primary');
						this.menu.$a.removeClass('btn-outline-primary');
						this.menu.$chx.prop('checked', false);
					}
					
					if (this.$th) {
						this.$th.hide();
						
						let index = this.$th.index() + 1;
						$('#table').find('td:nth-child(' + index + ')').each(function() {
							$(this).hide();
						});
					}
				}
			},
		};
		
		$.each(field.elements, function () {
			
			e = {
				id: this.id,
				title: this.title,
				sort: this.sort,
			};
			
			if (this.filter) {
				
				switch (this.filter.type) {
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
						
						$.each(this.filter.choices, function (key, value) {
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
						
						if (field.mandatory === false) {
							c.push({
								text: $.i18n('empty'),
								value: 0,
							});	
						}
				}
				
				e.filter = {
						type: this.filter.type,
						choices: c,
				};
			}
			
			header.elements.push(e);
		});
		
		this._headers.push(header);
		
	},
	
	getHeaders: function(sort = false) {
		
		//sort=false: display all headers
		//sort=true: display headers in the right order
		
		if (sort === true) {
			let headers = [];
			for (let header of this._headers) {
				if (header._order > 0) {
					headers[header._order - 1] = header;
				}
			}
			let i = 0;
			for (let header of this._headers) {
				if (header._order == 0) {
					while (headers[i] != undefined && i < this._headers.length) {
						i++;
					}
					
					headers[i] = header;
				}
			}
			return headers;
		} else {
			return this._headers;
		}
	},
	
	retoreOrder: function() {
		$(this._headers).each(function() {
			this.setOrder(0);
		});
	},
	
	addSelector: function(field) {
		let selector = {
			id: field.id,
			title: field.title,
			menu: {},
		};
		
		this._selectors.push(selector);
		
	},
	
	getSelectors: function() {
		return this._selectors;
	},
	
	hasSelector: function() {
		return this._selectors.some(v => urlSearch.get('filter[' + v.id + ']') == 1);
	}
	
}

const type = {
	bool: 11,
	text: 12,
	date: 13,
	link: 14,
	list: 15,
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
		if (key == 'view') {
			this._paramsArray = new URLSearchParams({'view': value});
		} else {
			this._paramsArray.set(key, value);
		}
	},
	
	append: function(key, value) {
		if (key == 'view') {
			this._paramsArray = new URLSearchParams({'view': value});
		} else {
			this._paramsArray.append(key, value);
		}
	},
	
	delete: function(key) {
		this._paramsArray.delete(key);
	},
	
	setFromUrl: function(value) {
		let paramsArray = new URLSearchParams(value);
		if (paramsArray.has('view')) {
			this.set('view', paramsArray.get('view'));
		} else {
			this._paramsArray = paramsArray;
		}
	},
	
	toUrl: function() {
		let url = '';
		if (arguments.length == 0) {
			url = this._paramsArray.toString();
		} else {
			let urlArray = [];
			for (let i=0; i<arguments.length; i++) {
				values = this.get(arguments[i]);
				if (Array.isArray(values)) {
					for (let j=0; j<values.length; j++) {
						values[j] = arguments[i] + '[]=' + values[j];
					}
					urlArray[i] = values.join('&');
				} else {
					urlArray[i] = arguments[i] + '=' + values;
				}
			}
			url = urlArray.join('&');
		}
		return (url)?'?' + url:'';
	},
	
	fetch: function() {
		
		if (this.get('view')) {
			var url = $('#table').data('url') + this.toUrl('view', 'page');
		} else {
			var url = $('#table').data('url') + this.toUrl();
		}
		global.ajax.set('#table', url);
		
	},
	
	getViews: function() {
		let url = $('#views').data('url');
		global.ajax.set('#views', url);
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
	
	gpexe.$table = $('#table');
	gpexe.$table.show();
	
	let $thead = $('#table').addLast('thead');
	let $tr = $thead.addLast('tr');
	let $th = $tr.addLast('th')
		.attr('id', 'selector')	
		.css('width', '2em')
	;
	
	let $div = $th.addLast('div.btn-group.custom-control.custom-checkbox.btn.btn-sm.btn-primary.rounded-0');
	
	gpexe.$chxCheckall = $div.addLast('checkbox')
		.attr('id', 'check_all')
		.attr('unchecked', 'unchecked')
		.on('click', function() {
			 $('tbody').find('input[type="checkbox"]').each(function() {
				$(this).prop('checked', $('#check_all').is(':checked'));
			});
			 urlSearch.lineChecked();
		});
	;
	
	$div.addLast('label.mx-1[for="check_all"]');	
	
	gpexe.series = datas.series;
	
	for (let i in datas.fields) {
		
		field = datas.fields[i];
		
		if (field.display.header) {
			gpexe.addHeader(field);
		} else if (field.display.selector) {
			gpexe.addSelector(field);
		}
	}
	
	for (let header of gpexe.getHeaders()) {
				
		header.$th = $tr.addLast('th');
		if (header.hasSort || header.hasFilter) {
			
			//main button group
			let $divDropdownGroup = header.$th.addLast('div')
				.addClass('btn-group w-100')
				.attr('role', 'group')
				.on('hide.bs.dropdown', function (e) {
					if (e.clickEvent && ($.contains(e.relatedTarget.parentNode, e.clickEvent.target) || header.mousedown)) {
						e.preventDefault();
						header.mousedown = false;
					} else {
						header.$divDropdownMenu.empty();
					}
				})
				.on('show.bs.dropdown', function() {
					createMenu(header);
				})
			;
			
			//title
			$divDropdownGroup.addLast('menuButton')
				.addClass('text-truncate w-100')
				.text(header.title)
				.on('click', function() {
					if (header.hasFilter) {
						for (element of header.elements) {
							if (urlSearch.get('sortAsc') == element.id) {
								urlSearch.delete('sortAsc');
								urlSearch.set('sortDesc', element.id);
								urlSearch.delete('view');
								urlSearch.fetch();
								return;
							}
							if (urlSearch.get('sortDesc') == element.id) {
								urlSearch.delete('sortDesc');
								urlSearch.set('sortAsc', element.id);
								urlSearch.delete('view');
								urlSearch.fetch();
								return;
							}
						}
						for (element of header.elements) {
							if (element.sort) {
								urlSearch.set('sortAsc', element.id);
								urlSearch.delete('view');
								urlSearch.fetch();
								return;
							}
						}	
					}
				})
			;
			
			//dropDown button
			header.$btnDropdown = $divDropdownGroup.addLast('menuButton')
				.addClass('px-0')
				.css('width', '3em')
				.attr('id', 'b_' + header.id)
				.attr('data-toggle', 'dropdown')
				.attr('data-display', 'static')
				.attr('aria-haspopup', true)
				.attr('aria-expanded', false)
			;
			
			//dropDown menu
			header.$divDropdownMenu = $divDropdownGroup.addLast('div')
				.addClass('dropdown-menu dropdown-menu-left')
				.attr('aria-labelledby', 'b_' + header.id)
				.on('mousedown', function() {
					header.mousedown = true;
				})
				.addLast('div.d-flex.flex-row')
			;
			
		} else {
			
			header.$th.addLast('menuButton')
				.addClass('text-truncate w-100')
				.text(header.title)
				.on('click', function(e) {
					$(e.target).blur();
				})
			;
			
		}
	}
	
	let $thDetail = $tr.addLast('th')
		.attr('id', 'detail')
		.css('width', '6rem')
		.css('min-width', '6rem')
	;
	
	gpexe.$divHeadersDropdown = $thDetail.addLast('div')
		.addClass('dropdown float-left')
		.on('hide.bs.dropdown', function (e) {
			if(e.clickEvent && $.contains(e.relatedTarget.parentNode, e.clickEvent.target)) {
				e.preventDefault();
			} else {
				gpexe.$divHeadersDropdown.children('div').empty();
			}
		})
		.on('show.bs.dropdown', function() {
			createHeadersMenu();
		})
	;
	
	gpexe.$divHeadersDropdown.addLast('menuButton')
		.addClass('mx-1')
		.css('width', '2.5rem')
		.attr('id', 'b_headers')
		.attr('data-toggle', 'dropdown')
		.attr('data-display', 'static')
		.attr('aria-haspopup', true)
		.attr('aria-expanded', false)
		.append(global.icon.display)
	;
	
	gpexe.$divHeadersDropdown.addLast('div')
		.addClass('dropdown-menu dropdown-menu-right p-2')
		.css('max-height', '20em')
		.css('overflow-x', 'hidden')
		.css('overflow-y', 'visible')
		.attr('aria-labelledby', 'b_headers')
		.addLast('div.d-flex.flex-row')
	;
	
	gpexe.$divSelectorsDropdown = $thDetail.addLast('div')
		.addClass('dropdown float-right')
		.on('hide.bs.dropdown', function (e) {
			if(e.clickEvent && $.contains(e.relatedTarget.parentNode, e.clickEvent.target)) {
				e.preventDefault();
			} else {
				gpexe.$divSelectorsDropdown.children('div').empty();
			}
		})
		.on('show.bs.dropdown', function() {
			createSelectorsMenu();
		})
	;
	
	gpexe.$divSelectorsDropdown.addLast('menuButton')
		.addClass('mx-1')
		.css('width', '2.5rem')
		.attr('id', 'b_selectors')
		.attr('data-toggle', 'dropdown')
		.attr('data-display', 'static')
		.attr('aria-haspopup', true)
		.attr('aria-expanded', false)
		.append(global.icon.filter)
	;
	
	gpexe.$divSelectorsDropdown.addLast('div')
		.addClass('dropdown-menu dropdown-menu-right px-2')
		.css('max-height', '20em')
		.css('overflow-x', 'hidden')
		.css('overflow-y', 'visible')
		.attr('aria-labelledby', 'b_headers')
		.addLast('div.d-flex.flex-row')
	;
	
	let tbody = $('#table').addLast('tbody');
	
	//---------------------
	// Col Resize & Col Drag
	//---------------------
	
	for (let header of gpexe.getHeaders()) {
		colResize(header);
	}
	
	$('#detail').addLast('div')
		.css('left', '0')
		.addClass('col-resize-handle')
		.on('mousedown', function(e) {
			for (let header of gpexe.getHeaders()) {
				if ($(e.target).parent().prevAll(':visible').first().is(header.$th)) {
					gpexe.colResize = {
						header: header,
						currentPosition: e.pageX,
						currentWidth: header.$th.width(),
					};
				}
			}
		})
	;
	
	$('body').on('mousemove', function(e) {
		
		if ($.isEmptyObject(gpexe.colResize) === false) {
			let width = Math.max(1, Math.round(pxToRem(gpexe.colResize.currentWidth + (e.pageX - gpexe.colResize.currentPosition))));
			gpexe.colResize.header.setWidth(width);
		}
		if ($.isEmptyObject(gpexe.colDrag) === false) {
			
			if ($.isEmptyObject(gpexe.colDrag.$ul) && Math.abs(e.pageX - gpexe.colDrag.currentPosition) > 10) {
				
				gpexe.colDrag.$ul = gpexe.$table.parent().addFirst('ul')
					.addClass('col-drag-container')
					.css('width', gpexe.$table.outerWidth() + 1)
				;
				
				gpexe.$table.find('th').each(function() {
					
					if (gpexe.colDrag.header.$th.is(this)) {
						gpexe.colDrag.$liPlaceholder = gpexe.colDrag.$ul.addLast('li')
							.addClass('col-drag-placeholder')
						;
						gpexe.colDrag.$liPlaceholder.addLast('div')
							.css('width', $(this).width())
							.css('height', gpexe.$table.height())
						;
					}
					
					let $li = gpexe.colDrag.$ul.addLast('li');
					
					if ($(this).is('#selector, #detail')) {
						$li.addClass('col-drag-disabled');
					}
					
					if ($(this).is(':visible')) {
					
						if (gpexe.colDrag.header.$th.is(this)) {
							$li.addClass('col-drag-helper');
							gpexe.colDrag.$liHelper = $li;
						}
						
						$li.addLast('table')
							.addClass(gpexe.$table.attr('class'))
							.addLast('thead')
							.append($(this).clone())
						;
						
						let $tbody = $li.children().last().addLast('tbody');
						let index = $(this).index() + 1;
						gpexe.$table.find('td:nth-child(' + index + ')').each(function() {
							$tbody.addLast('tr')
								.addClass($(this).parent().attr('class'))
								.css('height', $(this).parent().outerHeight())
								.append($(this).clone())
							;
						});
						
					} else {
						$li.addClass('col-drag-hidden');
					}
				});
				
				gpexe.$table.hide();
			}
			
			if ($.isEmptyObject(gpexe.colDrag.$liPlaceholder) === false) {
				let left = gpexe.colDrag.currentLeft + e.pageX - gpexe.colDrag.currentPosition;
				gpexe.colDrag.$liHelper.css('left', left);
				
				if (left > gpexe.colDrag.$liPlaceholder.position().left + gpexe.colDrag.$liPlaceholder.nextAll().not('.col-drag-helper, .col-drag-disabled').first().width()) {
					gpexe.colDrag.$liPlaceholder.nextAll().not('.col-drag-helper, .col-drag-disabled').first().insertBefore(gpexe.colDrag.$liPlaceholder);
				} else if (left < gpexe.colDrag.$liPlaceholder.position().left - gpexe.colDrag.$liPlaceholder.prevAll().not('.col-drag-helper, .col-drag-disabled').first().width()) {
					gpexe.colDrag.$liPlaceholder.prevAll().not('.col-drag-helper, .col-drag-disabled').first().insertAfter(gpexe.colDrag.$liPlaceholder);
				}
				
			}
		}
	});
	
	$('body').on('mouseup', function(e) {
		
		if ($.isEmptyObject(gpexe.colResize) === false) {
			let width = pxToRem(gpexe.colResize.header.$th.width());
			gpexe.colResize.header.setWidth(width);
			
			urlSearch.set('display[' + gpexe.colResize.header.id + ']', width);
			urlSearch.delete('view');
		}
		
		if ($.isEmptyObject(gpexe.colDrag) === false && $.isEmptyObject(gpexe.colDrag.$ul) === false) {
			let newOrder = gpexe.colDrag.$ul.children().not('.col-drag-helper, .col-drag-disabled').index(gpexe.colDrag.$liPlaceholder) + 1;
			gpexe.colDrag.$ul.remove();
			gpexe.$table.show();
			
			gpexe.colDrag.header.setOrder(newOrder);
			
			urlSearch.set('order[' + gpexe.colDrag.header.id + ']', newOrder);
			urlSearch.delete('view');
		}
		
		if ($.isEmptyObject(gpexe.colResize) === false) {
			gpexe.colResize = {};
		}
		
		if ($.isEmptyObject(gpexe.colDrag) === false) {
			$(e.target).blur();
			gpexe.colDrag = {};
		}
		
	});
	
	
	//---------------------
	// Col Drag
	//---------------------
	
	for (let header of gpexe.getHeaders()) {
		colDrag(header);
	}
	
	
	//---------------------
	// Progress programs
	//---------------------
	
	$('#progress_panel select').empty();
	
	for (let program of datas.progress_programs) {
		$('#progress_panel select').addLast('option')
			.attr('value', program.id)
			.text(program.name)
			.on('click', function() {
				global.ajax.set('#chart', program.url);
			})
		;
	}
	
	$('#progress-tab').removeClass('disabled');
	
	//---------------------
	// Functions
	//---------------------
	
	function createMenu(header) {
		
		if (header.hasSort || header.hasFilter) {
			
			header.$divDropdownMenu.empty();
			
			if (header.elements.length == 1) {
				createMenuItem(header, header.elements[0]);
			} else {
				for (var element of header.elements) {
					
					if (element.filter || element.sort) {
						
						createMenuItem(header, element);

						//header if many selects
						element.$divContent.addFirst('div')
							.addClass('text-center border-bottom border-dark pb-2 px-1')
							.text(element.title)
						;
					}
				}
			}
		}
	}
	
	function createMenuItem(header, element) {
		
		element.$divContent = header.$divDropdownMenu.addLast('div')
			.addClass('mx-1')
			.css('min-width', '15em')
		;
		
		let $divButtons = element.$divContent.addLast('div.text-center.p-1');
		
		if (element.sort) {
			$divButtons.addLast('smallButton')
				.append(global.icon.arrowDown)
				.addClass((urlSearch.get('sortDesc') == element.id)?'px-2 btn-outline-primary bg-dark text-white':'px-2 btn-primary')
				.on('click', function() {
					urlSearch.delete('sortAsc');
					if (urlSearch.get('sortDesc') == element.id) {
						urlSearch.delete('sortDesc');
					} else {
						urlSearch.set('sortDesc', element.id);
					}
					urlSearch.delete('view');
					element.filter.$divFilter.trigger('click');
				})
			;
		}
		
		if (element.filter) {
			
			element.filter.$divFilter = $divButtons.addLast('smallButton')
				.text($.i18n('filter'))
				.addClass('px-3 btn-primary')
			;
			
			switch (element.filter.type) {
				
			case type.bool:
				
				element.filter.$divFilter
					.on('click', function() {
						header.$btnDropdown.dropdown('hide');
						urlSearch.delete('view');
						urlSearch.fetch();
					})
				;	
				break;
			
				case type.text:
					
					element.filter.$divFilter
						.on('filter.update', function() {
							urlSearch.delete('filter[' + element.id + ']');
							
							var searchValue = element.$inputSearch.val().toLowerCase()
							
							if (searchValue != '') {
								urlSearch.set('filter[' + element.id + ']', searchValue);
								urlSearch.delete('view');
							}
						})
						.on('click', function() {
							for (let element of header.elements) {
								if (element.filter) {
									element.filter.$divFilter.trigger('filter.update');
								}
							}
							header.$btnDropdown.dropdown('hide');
							urlSearch.delete('view');
							urlSearch.fetch();
						})
					;	
					break;
					
				case type.date:
					
					element.filter.$divFilter
						.on('filter.update', function() {
							urlSearch.delete('filter[' + element.id + '][]');
							if (element.filter.$chxInf.is(':checked') && (result = /^≥\s(\d{2}-\d{2}-\d{4})/.exec(element.filter.$inputInf.val()))) {
								urlSearch.append('filter[' + element.id + '][]', '>' + result[1]);
							}
							
							if (element.filter.$chxSup.is(':checked') && (result = /^≤\s(\d{2}-\d{2}-\d{4})/.exec(element.filter.$inputSup.val()))) {
								urlSearch.append('filter[' + element.id + '][]', '<' + result[1]);
							}
							
							if (header.mandatory === false && element.filter.$chxEmpty.is(':checked')) {
								urlSearch.append('filter[' + element.id + '][]', 0);
							}
							
							if (element.filter.$chxHighlight.is(':checked')) {
								urlSearch.set('highlight', element.id);
							} else if (urlSearch.get('highlight').toString() == element.id) {
								urlSearch.delete('highlight');
							}
							urlSearch.delete('view');
						})
						.on('click', function() {
							for (let element of header.elements) {
								if (element.filter) {
									element.filter.$divFilter.trigger('filter.update');
								}
							}
							header.$btnDropdown.dropdown('hide');
							urlSearch.delete('view');
							urlSearch.fetch();
						})
					;	
					break;
					
					
				case type.list:
					
					element.filter.$divFilter
						.on('filter.update', function() {
							urlSearch.delete('filter[' + element.id + '][]');
							if (element.filter.choices[0].$chx.is(':checked') === false) {
								for (let choice of element.filter.choices) {
									if (choice.$chx.is(':checked')) {
										urlSearch.append('filter[' + element.id + '][]', choice.value);
									}
								}
							}
						})
						.on('click', function() {
							for (let element of header.elements) {
								if (element.filter) {
									element.filter.$divFilter.trigger('filter.update');
								}
							}
							header.$btnDropdown.dropdown('hide');
							urlSearch.delete('view');
							urlSearch.fetch();
						})
						
					;
					break;
			}
		}			
		
		if (element.sort) {
			$divButtons.addLast('smallButton')
				.append(global.icon.arrowUp)
				.addClass((urlSearch.get('sortAsc') == element.id)?'px-2 btn-outline-primary bg-dark text-white':'px-2 btn-primary')
				.on('click', function() {
					urlSearch.delete('sortDesc');
					if (urlSearch.get('sortAsc') == element.id) {
						urlSearch.delete('sortAsc');
					} else {
						urlSearch.set('sortAsc', element.id);
					}
					urlSearch.delete('view');
					
					element.filter.$divFilter.trigger('click');
				})
			;
		}
		
		if (element.filter) {
			
			switch (element.filter.type) {
				
				case type.bool:
					
					element.filter.$divList = element.$divContent.addLast('div')
						.addClass('px-2 overflow-auto ' + ((element.filter.type === type.list)?'pt-3':'pt-1'))
						.css('max-height', '20em')
					;
					
					for (let choice of element.filter.choices) {
						
						choice.$div = element.filter.$divList.addLast('div.custom-control.custom-checkbox');
						
						choice.$chx = choice.$div.addLast('checkbox')
							.attr('id', element.id + '_' + choice.value);
						
						choice.$div.addLast('label')
							.attr('for', element.id + '_' + choice.value)
							.text(choice.text)
						;
						
						if (choice.value == -1) {
							
							choice.$chx
								.attr('checked', !urlSearch.get('filter[' + element.id + ']'))
								.on('click', function() {
									for (let choice of element.filter.choices) {	
										choice.$chx.prop('checked', false);
									}
									urlSearch.delete('filter[' + element.id + ']');
									
									header.$btnDropdown.dropdown('hide');
									urlSearch.delete('view');
									urlSearch.fetch();
								})
							;
							
						} else {
							
							choice.$chx
								.attr('checked', parseInt(urlSearch.get('filter[' + element.id + ']')) === choice.value)
								.on('click', function() {
									
									for (let choice of element.filter.choices) {	
										if (choice.$chx != this) {
											choice.$chx.prop('checked', false);
										}
									}
									
									header.$btnDropdown.dropdown('hide');
									
									urlSearch.set('filter[' + element.id + ']', choice.value);
									urlSearch.delete('view');
									urlSearch.fetch();
								})
							;
						}
					}
					
					break;
					
				case type.text:
					
					let $divSearch = element.$divContent.addLast('div.input-group.input-group-sm.p-2');
					
					element.$inputSearch = $divSearch.addLast('textbox')
						.val(urlSearch.get('filter[' + element.id + ']'))
						.on('keypress', function(e) {
							if (e.which == 13) {
								element.filter.$divFilter.trigger('click');
							}
						})
					;
					
					let $div = $divSearch.addLast('div.input-group-append');
					
					$div.addLast('a')
						.attr('type', 'button')
						.addClass('btn btn-light border-left-0 border text-primary')
						.on('click', function() {
							element.$inputSearch.val('');
							element.filter.$divFilter.trigger('click');
						})
						.addLast('span')
							.html('&times;')
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
					
					element.filter.$divList = element.$divContent.addLast('div')
						.addClass('px-2 overflow-auto ' + ((element.filter.type === type.list)?'pt-3':'pt-1'))
						.css('max-height', '20em')
					;
					
					element.filter.$divInf = element.filter.$divList.addLast('div.custom-control.custom-checkbox.mt-2');
					
					element.filter.$chxInf = element.filter.$divInf.addLast('checkbox')
						.attr('id', element.id + '_inf')
						.attr('checked', valueInf != '')
						.on('change', function() {
							let checked = $(this).is(':checked');
							if (checked) {
								if (/^≥\s\d{2}-\d{2}-\d{4}/.test(element.filter.$inputInf.val()) === false) {
									element.filter.$inputInf.val('');
								}
							} else {
								element.filter.$inputInf.val($.i18n('fromDate'));
							}
							element.filter.$inputInf.attr('readonly', checked === false);
						})
					;
					
					element.filter.$labelInf = element.filter.$divInf.addLast('label')
						.attr('for', element.id + '_inf')
					;
					
					element.filter.$inputInf = element.filter.$labelInf.addLast('textbox')
						.addClass('form-control datepicker')
						.val((valueInf)?('≥ ' + valueInf):$.i18n('fromDate'))
						.attr('readonly', valueInf == '')
						.datepicker({'format': '≥ dd-mm-yyyy'})
						.on('click', function() {
							element.filter.$chxInf.prop('checked', true);
							element.filter.$chxInf.trigger('change');
						})
						.on('show.bs.dropdown hide.bs.dropdown', function(e) {
							e.stopPropagation();
						})
					;
					
					element.filter.$divSup = element.filter.$divList.addLast('div.custom-control.custom-checkbox.mt-2');
					
					element.filter.$chxSup = element.filter.$divSup.addLast('checkbox')
						.attr('id', element.id + '_sup')
						.attr('checked', valueSup != '')
						.on('change', function() {
							let checked = $(this).is(':checked');
							if (checked) {
								if (/^≤\s\d{2}-\d{2}-\d{4}/.test(element.filter.$inputSup.val()) === false) {
									element.filter.$inputSup.val('');
								}
							} else {
								element.filter.$inputSup.val($.i18n('toDate'));
							}
							element.filter.$inputSup.attr('readonly', checked === false);
						})
					;
					
					element.filter.$labelSup = element.filter.$divSup.addLast('label')
						.attr('for', element.id + '_sup')
					;
					
					element.filter.$inputSup = element.filter.$labelSup.addLast('textbox')
						.addClass('form-control datepicker')
						.val((valueSup)?'≤ ' + valueSup:$.i18n('toDate'))
						.attr('readonly', valueSup == '')
						.datepicker({'format': "≤ dd-mm-yyyy"})
						.on('click', function() {
							element.filter.$chxSup.prop('checked', true);
							element.filter.$chxSup.trigger('change');
						})
						.on('show.bs.dropdown hide.bs.dropdown', function(e) {
							e.stopPropagation();
						})
					;
					
					if (header.mandatory === false) {
						element.filter.$divEmpty = element.filter.$divList.addLast('div.custom-control.custom-checkbox.mt-2');
						
						element.filter.$chxEmpty = element.filter.$divEmpty.addLast('checkbox')
							.attr('id', element.id + '_empty')
							.attr('name', 'empty')
							.val(element.id)
							.attr('checked', urlSearch.get('filter[' + element.id + '][]').has(0))
						;
						
						element.filter.$divEmpty.addLast('label')
							.attr('for', element.id + '_empty')
							.text($.i18n('empty'))
						;
					}
					
					element.filter.$divHighlight = element.filter.$divList.addLast('div.custom-control.custom-checkbox.mt-2');
					
					element.filter.$chxHighlight = element.filter.$divHighlight.addLast('checkbox')
						.attr('id', element.id + '_highlight')
						.attr('name', 'highlight')
						.val(element.id)
						.attr('checked', urlSearch.get('highlight').toString() == element.id)
					;
					
					element.filter.$divHighlight.addLast('label')
						.attr('for', element.id + '_highlight')
						.text($.i18n('highlight'))
					;
					
					break;
				
				case type.list:
					
					$divSearch = element.$divContent.addLast('div.input-group.input-group-sm.border-bottom.border-dark.p-2');
					
					element.$inputSearch = $divSearch.addLast('textbox')
						.on('keypress', function(e) {
							if (e.which == 13) {
								element.filter.$divFilter.trigger('click');
							}
						})
						.on('input', function() {
							var searchValue = $(this).val().toLowerCase()
							
							if (searchValue == '') {
								for (let choice of element.filter.choices) {
									choice.$div.show();
									choice.$chx.prop('checked', false);
								}
							} else {
								element.filter.choices[0].$div.hide();
								for (let choice of element.filter.choices) {
									if (choice.text.toLowerCase().indexOf(searchValue) == -1) {
										choice.$div.hide();
										choice.$chx.prop('checked', false);
									} else {
										choice.$div.show();
										choice.$chx.prop('checked', true);
									}	
								}
							}
						})
					;
					
					$div = $divSearch.addLast('div.input-group-append');
					
					a = $div.addLast('a')
						.attr('type', 'button')
						.addClass('btn btn-light border-left-0 border text-primary')
						.on('click', function() {
							element.$inputSearch.val('');
							element.$inputSearch.trigger('input');
						})
						.addLast('span')
							.html('&times;')
					;
					
					element.filter.$divList = element.$divContent.addLast('div')
						.addClass('px-2 overflow-auto ' + ((element.filter.type === type.list)?'pt-3':'pt-1'))
						.css('max-height', '20em')
					;
					
					for (let choice of element.filter.choices) {
						
						choice.$div = element.filter.$divList.addLast('div.custom-control.custom-checkbox');
						
						choice.$chx = choice.$div.addLast('checkbox')
							.attr('id', element.id + '_' + choice.value)
						;
						
						choice.$div.addLast('label')
							.attr('for', element.id + '_' + choice.value)
							.text(choice.text)
						;
						
						if (choice.value == -1) {
							
							choice.$chx
								.on('change', function() {
									var checked = $(this).is(':checked');
									for (let choice of element.filter.choices) {	
										choice.$chx.prop('checked', checked);
									}
								})
							;
							
						} else {
							
							choice.$chx
								.attr('checked', urlSearch.get('filter[' + element.id + '][]').has(choice.value))
								.on('click', function() {
									
									let checked = false;
									let unchecked = false;
									
									for (let choice of element.filter.choices) {
										if ($(choice.$chx).is(':checked') && choice.value != 1) {
											checked = true;
										} else {
											unchecked = true;
										}
									}
									
									if (checked && unchecked) {
										element.filter.choices[0].$chx.prop('indeterminate', true);
									} else {
										element.filter.choices[0].$chx.prop('indeterminate', false);
										element.filter.choices[0].$chx.prop('checked', checked);
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
		
		if (header.$th) {
			header.$colResizeHandleRight = header.$th.addLast('div')
				.addClass('col-resize-handle')	
				.css('right', '0')
				.on('mousedown', function(e) {
					for (let header of gpexe.getHeaders()) {
						if ($(e.target).parent().is(header.$th)) {
							gpexe.colResize = {
								header: header,
								currentPosition: e.pageX,
								currentWidth: header.$th.width(),
							};
						}
					}
				})
			;
			
			header.$colResizeHandleLeft = header.$th.addLast('div')
				.addClass('col-resize-handle')
				.css('left', '0')
				.on('mousedown', function(e) {
					for (let header of gpexe.getHeaders()) {
						if ($(e.target).parent().prevAll(':visible').first().is(header.$th)) {
							gpexe.colResize = {
								header: header,
								currentPosition: e.pageX,
								currentWidth: header.$th.width(),
							};
						}
					}
				})
			;
			
		}
		
	}
	
	function colDrag(header) {
		
		if (header.$th) {
			header.$th.find('button[type="button"]').first()
				.on('mousedown', function(e) {
					gpexe.colDrag = {
						header: header,
						currentIndex: header.$th.parents('table').find('th:visible').index(header.$th),
						currentPosition: e.pageX,
						currentLeft: header.$th.position().left,
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
		serie.$a = $('#series').addLast('a')
			.attr('role', 'button')
			.addClass('btn btn-primary m-1')
			.attr('href', serie.url)
			.text(serie.name)
		;
	}
	
}

//---------------
//createHeadersMenu
//---------------

function createHeadersMenu() {
	
	let $divDropdownMenu = gpexe.$divHeadersDropdown.children('div');
	$divDropdownMenu.empty();
	
	for (let header of gpexe.getHeaders()) {
		
		let $div = $divDropdownMenu.addLast('div.custom-control.custom-checkbox.pr-2');
		
		header.menu.$chx = $div.addLast('checkbox')
			.attr('id', 'h_' + header.id)
			.prop('checked', (urlSearch.get('display[' + header.id + ']') > 0))
			.on('click change', function() {
				
				let display = urlSearch.get('display[' + header.id + ']');
				
				urlSearch.delete('display[' + header.id + ']');
				
				if (header.menu.$chx.not(':checked') && display == false) {
					urlSearch.append('display[' + header.id + ']', header.getWidth());
				}
				
				gpexe.$divHeadersDropdown.children('button').dropdown('hide');
				urlSearch.delete('view');
				urlSearch.fetch();
				return false;
			})
		;
		
		$div.addLast('label')
			.attr('for', 'h_' + header.id)
			.text(header.title)
		;
	}
	
}

//---------------
//createSelectorsMenu
//---------------

function createSelectorsMenu() {
	
	let $divDropdownMenu = gpexe.$divSelectorsDropdown.children('div');
	$divDropdownMenu.empty();
	
	for (let selector of gpexe.getSelectors()) {
		
		let $div = $divDropdownMenu.addLast('div.custom-control.custom-checkbox.pr-2');
		
		selector.menu.$chx = $div.addLast('checkbox')
			.attr('id', 'h_' + selector.id)
			.prop('checked', (urlSearch.get('filter[' + selector.id + ']') == 1))
			.on('click', function() {
				
				gpexe.getSelectors().forEach(v => urlSearch.delete('filter[' + v.id + ']'));
				
				if (selector.menu.$chx.is(':checked') === true) {
					urlSearch.append('filter[' + selector.id + ']', 1);
				}
				
				gpexe.$divSelectorsDropdown.children('button').dropdown('hide');
				urlSearch.delete('view');
				urlSearch.fetch();
				return false;
			})
		;
		
		$div.addLast('label')
			.attr('for', 'h_' + selector.id)
			.text(selector.title)
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
	
	$('#table_container, #views, #table').on('ajax.beforeSend', function(e, result, textStatus, jqXHR) {
		
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
		
		//setup url
		urlSearch.setFromUrl(window.location.search);
		
		urlSearch.getViews();
	});
	
	
	//---------------------
	// Views
	//---------------------
	
	$('#views').on('ajax.success', function(e, result, textStatus, jqXHR) {
		
		if (e.target !== this) {
			return;
		}
		
		e.stopPropagation();	
		$('#views').empty();
		
		for (let view of result) {
			
			$div = $('#views').addLast('div.btn-group.m-1[role="group"]');
			
			btn = $div.addLast('standardButton')
				.addClass('btn-primary')
				.attr('data-id', view.id)
				.text(view.name)
				.on('click', function() {
					urlSearch.set('view', view.id);
					urlSearch.fetch();
					$(this).blur();
				})
			;
			
			if (view['edit_url'] && view['delete_url']) {
				$div2 = $div.addLast('div.btn-group.[role="group"]');
				
				$div2.addLast('standardButton')
					.addClass('btn-primary dropdown-toggle')
					.attr('data-toggle', 'dropdown')
					.attr('aria-haspopup', true)
					.attr('aria-expanded', false)
				;
				$div3 = $div2.addLast('div.dropdown-menu');
				
				$div3.addLast('a')
					.addClass('dropdown-item text-success')
					.on('click', function() {
						global.ajax.set('#modal', view['edit_url'], {modal: true});
					})
					.text($.i18n('edit'))
				;
				
				$div3.addLast('a')
					.addClass('dropdown-item text-danger')
					.on('click', function() {
						global.ajax.set('#modal', view['delete_url'], {modal: true, from: this});
					})
					.text($.i18n('delete'))
				;
			}
		}
		
		//---------------------
		// Dragtable
		//---------------------
		
//		var dragger = tableDragger.default($('table').get(0), {
//			mode: 'column',
//		});
	
	});
	
	$('#views').on('ajax.completed', function(e, result, textStatus, jqXHR) {
		
		if (e.target !== this) {
			return;
		}
		
		e.stopPropagation();
		urlSearch.fetch(false);
	});
	
	$('#document_export, #view_new').on('click', function() {
		global.ajax.set('#modal', $(this).data('url') + urlSearch.toUrl(), {modal: true});
	});
	
	//---------------------
	// Progress
	//---------------------
	
	
	$('#progress-tab').on('show.bs.tab', function() {
		$('#progress_panel option:first').trigger('click');
	});
	
	$('#chart').on('ajax.completed', function(e, result, textStatus, jqXHR) {
		
		if (e.target !== this) {
			return;
		}
		
		e.stopPropagation();
		$('#chart').empty();
		let $chart = $('#chart').addLast('canvas');
		
		let dates = [];
		let datasets = [];
		
		//current progress
		for (let serie of result.series) {
			datasets.push({
				label: serie.name,
				serieId: serie.id,
				serieType: serie.type,
				serieCount: serie.count,
				data: [],
			});
		}
		
		//recorded progress
		for (let progress of result.progress) {
			date = progress.date.toDate().format();
			if (dates.indexOf(date) === -1) {
				dates.push(date);
				continue;
			}
		}
		
		for (let date of dates) {
			for (let serie of result.series) {
				progress = getProgress(date, serie.id);
				for (dataset of datasets) {
					if (dataset.label == serie.name && progress !== null) {
						dataset.data.push(progress);
					}
				}
			}
		}
		
		$('#chart').css('height', '5.5rem');
		
		let chart = new Chart($chart, {
			type: 'gpexeLine',
			data: {
				labels: dates,
				datasets: datasets,
			},
			options: {
				plugins: {
					gpexeLegend: {
						containerId: 'legend_container',
						align: 'left',
						maxWidth: '10rem',
					},
					legend: {
						display: false,
					}
				},
			},
			plugins: [gpexeLegendPlugin],
		});
		
		function getCurentProgress(serieId) {
			for (let id in result.current_progress) {
				if (id == serieId) {
					return Math.round(result.current_progress[id]);
				}
			}
			return null;
		}
		
		function getProgress(date, serieId) {
			for (let progress of result.progress) {
				if (progress.serieId == serieId && progress.date == date) {
					return Math.round(progress.value);
				}
			}
			return null;
		}
		
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
		
		//view
		$('#views').find('button[data-id]').each(function() {
			if ($(this).data('id') == urlSearch.get('view')) {
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
				serie.$a.removeClass('btn-primary');
				serie.$a.addClass('btn-outline-primary');
			} else {
				serie.$a.removeClass('btn-outline-primary');
				serie.$a.addClass('btn-primary');
			}
		}
		
		//visible & order

		gpexe.retoreOrder();
		
		if (result.query.order) {
			$(result.query.order).sort();
		}
		
		for (let header of gpexe.getHeaders()) {
			header.setVisible(result.query.display[header.id] > 0);
			if (result.query.order) {
				header.setOrder(result.query.order[header.id]);
			}
		}
		
		//selector icon
		gpexe.$divSelectorsDropdown.children('button').html(gpexe.hasSelector()?global.icon.filterFill:global.icon.filter);
		
		for (let header of gpexe.getHeaders()) {
			
			if (header.getVisible()) {
				
				if (gpexe.$table.find('th:visible').not('#selector').eq(0).is(header.$th)) {
					header.$colResizeHandleLeft.hide();
				} else {
					header.$colResizeHandleLeft.show();
				}
				
				if (header.hasSort || header.hasFilter) {
					
					header.$btnDropdown.empty();
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
					
					header.$btnDropdown.append((header.isFiltered)?global.icon.funnelFill:global.icon.funnel);					
					
					if (header.isSortedAsc) {
						header.$btnDropdown.append(global.icon.arrowUp);
					}
					
					if (header.isSortedDesc) {
						header.$btnDropdown.append(global.icon.arrowDown);
					}
				}
			}
		}
		
		for (let data of result.datas) {
			
			let $tr = $('#table > tbody').addLast('tr');
			
			let $div = $tr.addLast('td').addLast('div.custom-control.custom-checkbox');
			
			$div.addLast('checkbox')
				.attr('id', 'c_' + data.version_id)
				.val(data.version_id)
				.on('click', urlSearch.lineChecked.bind(urlSearch))
			;
			
			$div.addLast('label')
				.attr('for', 'c_' + data.version_id)
			;
			
			for (let header of gpexe.getHeaders(true)) {
				
				let td = $tr.addLast('td');
				
				if (header.getVisible()) {
					
					if (header.id == 'status_type') {
						value = header.elements[0].filter.choices[data[header.id] || 0].text;
					} else {
						value = data[header.id];
					}
					
					switch (header.type) {
						case type.bool:
							dataClass = 'text-center';
							if (value == 0 || value == null) value = $.i18n('no');
							if (value == 1) value = $.i18n('yes');
							break;
						case type.date:
							dataClass = 'text-center';
							if (value != null) {
								value = value.toDate();
							}
							
							if (data['highlight']) {
								$tr.css('background-color', '#' + data['highlight']);
							}
							
							if (value !== null) {
								value = value.format();
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
					
					if (value == null) {
						value = '';
					}
					
					td.addClass(dataClass);
					td.text(value);
					
					if (header.permissions.write) {
						td.on('dblclick', function(e) {
							if ($(this).find('form, div.spinner-border').exist() === false) {
								global.ajax.set(this, window.location.href.match(/(.+)\/project/)[1] + '/project/serie/document/version/' + data['version_id'] + '/quick_edit/' + header.id);
							}
						});
						
						td.on('ajax.beforeSend', function(e, jqXHR, settings) {
							$(e.target)
								.show()
								.empty()
								.append('<div class="d-flex justify-content-center">' +
									'<div class="spinner-border" role="status">' +
										'<span class="sr-only">' + $.i18n('loading') + '</span>' +
									'</div>' +
								'</div>')
							;
							e.stopPropagation();
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
									if ($form.is(':visible') === true && $form.is(e.target) === false && $form.has(e.target).exist() === false) {
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
					td.hide();
				}
			}
			
			$tr.addLast('td')
				.addLast('smallButton')
					.addClass('btn-success w-100')
					.attr('data-url', data.detailUrl)
					.attr('data-toggle', 'modal ajax')
					.attr('data-target', '#modal_detail')
					.text($.i18n('details'))
			;
			
		}
		
		//width
		for (let header of gpexe.getHeaders()) {
			if (header.id in result.query.display) {
				header.setWidth(result.query.display[header.id]);
			}
		}
		
		//pagination
		$('#pagination').empty();
			
		$('#table_container').addClass('mb-4');
		
		let pageMax = result.page_max;
		let page = parseInt(urlSearch.get('page')) || 1;
		page = Math.max(Math.min(page, pageMax), 1);
		
		$div = $('#pagination').addLast('div.row.m-0');
		
		$div.addLast('div.col');
		
		$ul = $div.addLast('ul.pagination.col.justify-content-center');
		
		if (pageMax > 1) {
			$ul.addLast('li')
				.addClass('page-item' + ((page == 1)?' disabled':''))
				.on('click', function() {
					if (page > 1) {
						urlSearch.set('page', page - 1);
						urlSearch.fetch();
					}
				})
				.addLast('a')
					.addClass('page-link')
					.attr('data-value', Math.max(1, page - 1))
					.addLast('span')
						.attr('aria-hidden', true)
						.html('&laquo;')
			;
			
			let pageStart = Math.min(Math.max(1, page - 2), Math.max(1, pageMax - 4));
			let pageEnd = Math.min(pageStart + 5, pageMax);
			
			for (let i = pageStart; i <= pageEnd; i++) {
				$ul.addLast('li')
					.addClass('page-item' + ((page == i)?' active':''))
					.on('click', function() {
						urlSearch.set('page', i);
						urlSearch.fetch();
					})
					.addLast('a')
						.addClass('page-link')
						.attr('data-value', i)
						.text(i)
				;
			}
			
			$ul.addLast('li')
				.addClass('page-item' + ((page == pageMax)?' disabled':''))
				.on('click', function() {
					if (page < pageMax) {
						urlSearch.set('page', page + 1);
						urlSearch.fetch();
					}
				})
				.addLast('a')
					.addClass('page-link')
					.attr('data-value', Math.min(pageMax, page + 1))
					.addLast('span')
						.attr('aria-hidden', true)
						.html('&raquo;')
			;
		}
		
		select = $div.addLast('div.col.d-flex.justify-content-end.mt-1.mr-5')
			.addLast('select')
				.addClass('form-control form-control-sm bg-dark border-secondary text-white')
				.css('width', '150')
				.on('change', function() {
					urlSearch.set('max_results_per_page', $(this).val())
					urlSearch.delete('view');
					urlSearch.fetch();
				})
		;
		
		let maxResultsPerQuery = new Map([['10', 10], ['50', 50], ['100', 100], [$.i18n('all'), '0']]);
		for (let [text, value] of maxResultsPerQuery) {
			select.addLast('option')
				.attr('value', value)
				.attr('selected', urlSearch.get('max_results_per_page') == value)
				.text(text)
			;
		}
		
		
		//flashes
		
		$('#toast').empty();
		
		for (let label of Object.keys(result.flash)) {
			
			let $divToast = $('#toast').addLast('div')
				.addClass('toast')
				.attr('role', 'alert')
				.attr('data-delay', 5000)
				.attr('aria-live', 'assertive')
				.attr('aria-atomic', true)
			;
			
			let $divContainer = $divToast.addLast('div')
				.addClass('alert alert-' + label + ' d-flex px-3 m-0')
			;
			
			$divContainer.addLast('div.align-self-center')
				.append(global.icon[label])
			;
			
			let $ulBody = $divContainer.addLast('ul.justify-content-center.flex-fill');
			
			$divContainer.addLast('div.justify-content-end')
				.append(global.icon.close)
			;
			
			if (result.flash[label].length > 1) {
				for (let message of result.flash[label]) {
					$ulBody.addLast('li')
						.text(message)
					;
				}
			} else {
				$ulBody.text(result.flash[label][0]);
			}
			
			$divToast.toast('show');
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