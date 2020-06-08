const $ = require('jquery');

require('../css/form.scss');
require('bootstrap-datepicker');
require('bootstrap-datepicker/dist/locales/bootstrap-datepicker.fr.min.js');

$(document).ready(function() {
	
	$('.js-datepicker').each(function() {
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

	
	$("[name$='_multiple']").each(function() {
		
		var id;
		if (id = $(this).prop('name').match(/(\S+)_multiple$/y)) {
			
			$(this).on('click', function(event) {
				
				if ($(this).val() == 0) {
					
					$("[id^='" + id[1] + "']").not("[id*='multiple']").each(function() {
						if ($(this).hasClass('js-datepicker')) {
							$(this).datepicker('setDate', new Date());
						} else if ($(this).attr('type') == 'radio') {
							$(this).prop('checked', false);
						} else if ($(this).attr('type') == 'checkbox') {
							$(this).prop('checked', false);
							$(this).prop('indeterminate', false);
						} else if ($(this).attr('type') == 'text' || $(this).is('select')) {
							$(this).val(null);
						} else {
							return;
						}
						$(this).attr("disabled", false);
						$(this).attr("required", $(this).data('required'));
					});
					
				} else {
					
					$("[id^='" + id[1] + "']").not("[id*='multiple']").each(function() {
						if ($(this).hasClass('js-datepicker')) {
							$(this).datepicker('setDate', null);
						} else if ($(this).attr('type') == 'radio') {
							$(this).prop('checked', false);
						} else if ($(this).attr('type') == 'checkbox') {
							$(this).prop('checked', false);
							$(this).prop('indeterminate', true);
						} else if ($(this).attr('type') == 'text' || $(this).is('select')) {
							$(this).val(null);
						} else {
							return;
						}
						$(this).attr("disabled", true);
						$(this).attr("required", false);
					});
										
				}
				
				$('#' + id[1] + '_multiple').val($(this).val());
			});
		}
	});
	
	$('form').find('div, input, select').each(function () {
		
		if ($(this).data('multiple')) {
			$("[name='" + $(this).prop('id') + "_multiple']").filter('[value=1]').trigger('click');
		} else {
			$("[name='" + $(this).prop('id') + "_multiple']").filter('[value=0]').trigger('click');
		}
		
	})
	
	/*
	$('#form').find('input').each(function() {
		
		if ($(this).prop('type') == 'radio' && $(this).id == ) {
			$(this).on('click', lineChecked);
		}
		
	});
	*/
});