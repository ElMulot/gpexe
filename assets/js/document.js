const $ = require('jquery');
const Popper = require('popper.js');
//require('bootstrap-table');
//require('sticky-table-headers');

require('../css/document.scss');

require('./multiselect/multiselect.js');
require('./multiselect/fr_FR.js');

$(document).ready(function() {
	
	$("select").multiselect();
	//$("table").stickyTableHeaders();
	
	$('#document_edit').hide();
	$('#document_move').hide();
	$('#document_delete').hide();
	$('#version_menu').hide();		
	
	var checkboxes = [];
	console.log($('#display').find('input'));
	$('#display').find('input').on('click', function() {
		console.log('ok');
		var data = [];
		if ($('#hide').val()) {
			data = JSON.parse($('#hide').val());
		}
		
		var index = data.indexOf($(this).data('value'));
		
		if ($(this).is(':checked')) {
			if (index > -1) {
				data.splice(index, 1);
			}
		} else {
			if (index == -1) {
				data.push($(this).data('value'));
			}
		}
		
		$('#hide').val(JSON.stringify(data));
		$('#form').submit();
	});
	
	$('table').find('input').each(function() {
		
		if ($(this).prop('type') == 'checkbox') {
			$(this).prop('checked', false);
			$(this).on('click', lineChecked);
			if ($(this).prop('id') != 'check_all') {
				checkboxes.push($(this));
			}
		}
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
	
	function lineChecked() {
		
		var checked = false;
		var unchecked = false;

		
		if ($(this).prop('id') == 'check_all') {
			
			$('table').find('input').each(function() {
				checked = $('#check_all').is(':checked');
				unchecked = !checked;
				$(this).prop('checked', checked);
			});
			
		} else {
			
			$('table').find('input').each(function() {
				
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
		
		if (checked) {
			var array = [];
			for (const checkbox of checkboxes) {
				if (checkbox.is(':checked')) {
					array.push(checkbox.val());
				}
			}
			$('#versions').val(JSON.stringify(array));
			
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
	
	$('#document_edit').on('click', function(event) {
		event.preventDefault();
		$('#form').prop('action', $(this).data('link'));
		$('#form').submit();
	});
	
	$('#document_move').on('click', function(event) {
		event.preventDefault();
		$('#form').prop('action', $(this).data('link'));
		$('#form').submit();
	});
	
	$('#document_delete').on('click', function(event) {
		event.preventDefault();
		$('#form').prop('action', $(this).data('link'));
		$('#form').submit();
	});
	
	$('#version_new').on('click', function(event) {
		event.preventDefault();
		$('#form').prop('action', $(this).data('link'));
		$('#form').submit();
	});
	
	$('#version_edit').on('click', function(event) {
		event.preventDefault();
		$('#form').prop('action', $(this).data('link'));
		$('#form').submit();
	});
	
	$('#version_delete').on('click', function(event) {
		event.preventDefault();
		$('#form').prop('action', $(this).data('link'));
		$('#form').submit();
	});
});



	






    
