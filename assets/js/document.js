const $ = require('jquery');

require('../css/document.scss');
require('bootstrap-select');
require('bootstrap-select/dist/js/i18n/defaults-fr_FR.js');


$(document).ready(function() {
	
	$.fn.selectpicker.Constructor.BootstrapVersion = '4';
	
	$('#document_edit').hide();
	$('#document_move').hide();
	$('#document_delete').hide();
	$('#version_menu').hide();	
	
	$('#form').find('input, select').each(function() {
		
		if ($(this).prop('type') == 'checkbox') {
			$(this).on('click', lineChecked);
		}
		
	});
	
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
			$('#document_edit').show();
			$('#document_move').show();
			$('#document_delete').show();
			$('#version_menu').show();	
		} else if(unchecked) {
			$('#document_edit').hide();
			$('#document_move').hide();
			$('#document_delete').hide();
			$('#version_menu').hide();	
		}
	}
	
	$('#document_edit').on('click', function(event) {
		event.preventDefault();
		$('#form').prop('action', $(this).data('link'));
		$('#form').submit()
	});
	
	$('#document_move').on('click', function(event) {
		event.preventDefault();
		$('#form').prop('action', $(this).data('link'));
		$('#form').submit()
	});
	
	$('#document_delete').on('click', function(event) {
		event.preventDefault();
		$('#form').prop('action', $(this).data('link'));
		$('#form').submit()
	});
	
	$('#version_new').on('click', function(event) {
		event.preventDefault();
		$('#form').prop('action', $(this).data('link'));
		$('#form').submit()
	});
	
	$('#version_edit').on('click', function(event) {
		event.preventDefault();
		$('#form').prop('action', $(this).data('link'));
		$('#form').submit()
	});
	
	$('#version_delete').on('click', function(event) {
		event.preventDefault();
		$('#form').prop('action', $(this).data('link'));
		$('#form').submit()
	});

});



    
