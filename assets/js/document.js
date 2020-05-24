const $ = require('jquery');
const popper = require('popper.js');
require('sticky-table-headers');
require('../css/document.scss');
const URLSearchParams = require('@ungap/url-search-params/cjs');

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
	
	var paramsArray = new URLSearchParams();
	var tableHeaders = [];
	
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
	
	/*
	$('#modal').on('show.bs.modal', function(event) {
		
		$('.modal-body')
			.empty()
			.append(icon.loading);
	
		$.ajax({
			url : $(event.relatedTarget).data('url'),
			type: 'GET',
			
			success: function(result) {
				$('.modal-body').empty();
				$('.modal-body').html(result);
				
				$('#modal').find('#version_tabs a').each(function() {
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
	*/
	
	$('#modal').on('show.bs.modal', function(e) {
		ajax.set('.modal-body', $(e.relatedTarget).data('url'));
	});

	
	$('#document_edit').on('click', function() {
		location.assign($(this).data('url') + '?' + datas.searchUrl);
		return false;
	});
	
	$('#document_move').on('click', function(event) {
		location.assign($(this).data('url') + '?' + datas.searchUrl);
		return false;
	});
	
	$('#document_delete').on('click', function(event) {
		location.assign($(this).data('url') + '?' + datas.searchUrl);
		return false;
	});
	
	$('#version_new').on('click', function(event) {
		location.assign($(this).data('url') + '?' + datas.searchUrl);
		return false;
	});
	
	$('#version_edit').on('click', function(event) {
		location.assign($(this).data('url') + '?' + datas.searchUrl);
		return false;
	});
	
	$('#version_delete').on('click', function(event) {
		location.assign($(this).data('url') + '?' + datas.searchUrl);
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
			let search = datas.searchUrl;
			if (search) window.location = $(this).data('url') + '?' + search;
		} else {
			datas.searchUrl = 'vue=' + $(this).data('value');
			datas.fetch();
		}
	});
	
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
					
					let hide = paramsArray.getAll('hide[]');
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
					
					paramsArray.delete('hide[]');
					hide.forEach(e => paramsArray.append('hide[]', e));
					datas.searchUrl = '';
					datas.fetch();
					
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
	// datas
	//---------------
	
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
			
			if (r = /\?(\S*)/g.exec(value)) {
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
	
	//---------------
	// getDetail
	//---------------
	/*
	function getDetail(that) {
		$(that).parent().find('a.active').removeClass('active');
		$(that).addClass('active');
		
		$('#version')
			.empty()
			.append(icon.loading)
			;
		
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
			.append(icon.loading);
		
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
	*/
	
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
						if (paramsArray.get('sortAsc') == tableHeader.selects[0].name) {
							paramsArray.delete('sortAsc');
							paramsArray.set('sortDesc', tableHeader.selects[0].name);
						} else {
							paramsArray.delete('sortDesc');
							paramsArray.set('sortAsc', tableHeader.selects[0].name);
						}
						datas.searchUrl = '';
						datas.fetch();
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
							.addClass((paramsArray.get('sortDesc') == select.name)?'px-2 btn-outline-primary bg-dark text-white':'px-2 btn-primary')
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
							.addClass((paramsArray.get('sortAsc') == select.name)?'px-2 btn-outline-primary bg-dark text-white':'px-2 btn-primary')
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
							.attr('checked', paramsArray.getAll(select.name).includes(option.value))
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
						.attr('checked', !paramsArray.has(select.name))
						.on('change', function() {
							
							var checked = $(this).is(':checked');
							for (let option of select.options) {	
								option.chx.prop('checked', false);
							}
							paramsArray.delete(select.name);
							
							tableHeader.btnDropdown.dropdown('hide');
							datas.searchUrl = '';
							datas.fetch();
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
							.attr('checked', paramsArray.getAll(select.name).includes(option.value))
							.on('click', function() {
								
								select.divList.find('input').not(this).prop('checked', false);
								paramsArray.delete(select.name);
								
								if (!select.chxUnknown.is(':checked')) {
									for (let option of select.options) {
										if (option.chx.is(':checked')) {
											paramsArray.append(select.name, option.value);
										}
									}
								}
								
								tableHeader.btnDropdown.dropdown('hide');
								datas.searchUrl = '';
								datas.fetch();
							})
						;
						
						option.lbl = option.div.append(create.label).children().last()
							.attr('for', select.name + '_' + option.value)
							.text(option.text)
						;
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
					
					paramsArray.delete(select.name);
					if (!select.chxSelectAll.is(':checked')) {
						
						for (let option of select.options) {
							if (option.chx.is(':checked')) {
								paramsArray.append(select.name, option.value);
							}
						}
					}
					tableHeader.btnDropdown.dropdown('hide');
					datas.searchUrl = '';
					datas.fetch();
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
			}
			
		}
		
		return tableHeader;
	}
	
	
	fillDisplay();
	datas.searchUrl = window.location;
	datas.fetch();
	
});

var create = {
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