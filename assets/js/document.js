const $ = require('jquery');
const Popper = require('popper.js');

require('../css/document.scss');
//require('bootstrap-select');
//require('./bootstrap-select/bootstrap-select.js');
//require('./bootstrap-select/defaults-fr_FR.js');

require('./multiselect/multiselect.js');
require('./multiselect/fr_FR.js');


$(document).ready(function() {
	
	/*
	$.fn.selectpicker.Constructor.BootstrapVersion = '4';
	
	$("select[multiple]").selectpicker({
		header: true,
		liveSearch:true,
		style: 'btn-primary',
		actionsBox: true,
	});
	*/
	
	$("select[multiple]").multiselect();
	
	$('#document_edit').hide();
	$('#document_move').hide();
	$('#document_delete').hide();
	$('#version_menu').hide();		
	
	var checkboxes = [];
	
	$('table').find('input').each(function() {
		
		if ($(this).prop('type') == 'checkbox') {
			$(this).prop('checked', false);
			$(this).on('click', lineChecked);
			if ($(this).prop('id') != 'check_all') {
				checkboxes.push($(this));
			}
		}
	});
	
	$('table').find('a').each(function() {
		
		$.ajax({
			url : $(this).data('url'),
			type: 'GET',
			
			success: function(result) {
				$('.modal-body').empty();
				$('.modal-body').html(result);
			},
		});
		
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
			var array = [];
			for (const checkbox of checkboxes) {
				if (checkbox.is(':checked')) {
					array.push('v[]=' + checkbox.val());
				}
			}
			$('#version').val(array.join('&'));
			
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
	
	/*
	console.log($.fn.selectpicker.Constructor.prototype.createDropdown);
	
	$.fn.selectpicker.Constructor.prototype.createDropdown = function () {
	  // Options
	  // If we are multiple or showTick option is set, then add the show-tick class
	  var showTick = (this.multiple || this.options.showTick) ? ' show-tick' : '',
	      multiselectable = this.multiple ? ' aria-multiselectable="true"' : '',
	      inputGroup = '',
	      autofocus = this.autofocus ? ' autofocus' : '';
	
	  if (version.major < 4 && this.$element.parent().hasClass('input-group')) {
	    inputGroup = ' input-group-btn';
	  }
	
	  // Elements
	  var drop,
	      header = '',
	      searchbox = '',
	      actionsbox = '',
	      donebutton = '';
	
	  if (this.options.header) {
	    header =
	      '<div class="' + classNames.POPOVERHEADER + '">' +
	        '<button type="button" class="close" aria-hidden="true">&times;</button>' +
	          this.options.header +
	      '</div>';
	  }
	
	  if (this.options.liveSearch) {
		  
	    searchbox =
	      '<div class="bs-searchbox">' +
	        '<input type="search" class="form-control" autocomplete="off"' +
	          (
	            this.options.liveSearchPlaceholder === null ? ''
	            :
	            ' placeholder="' + htmlEscape(this.options.liveSearchPlaceholder) + '"'
	          ) +
	          ' role="combobox" aria-label="Search" aria-controls="' + this.selectId + '" aria-autocomplete="list">' +
	      '</div>';
	  }
	
  if (this.multiple && this.options.actionsBox) {
    actionsbox =
        '<div class="bs-actionsbox">' +
          '<div class="btn-group btn-group-sm btn-block">' +
            '<button type="button" class="actions-btn bs-select-all btn ' + classNames.BUTTONCLASS + '">' +
              this.options.selectAllText +
            '</button>' +
            '<button type="button" class="actions-btn bs-deselect-all btn ' + classNames.BUTTONCLASS + '">' +
              this.options.deselectAllText +
            '</button>' +
          '</div>' +
        '</div>';
  }
	
	  if (this.multiple && this.options.doneButton) {
	    donebutton =
	      '<div class="bs-donebutton">' +
	        '<div class="btn-group btn-block">' +
	          '<button type="button" class="btn btn-sm ' + classNames.BUTTONCLASS + '">' +
	            this.options.doneButtonText +
	          '</button>' +
	        '</div>' +
	      '</div>';
	  }
	
	  drop =
	    '<div class="dropdown bootstrap-select' + showTick + inputGroup + '">' +
	      '<button type="button" class="' + this.options.styleBase + ' dropdown-toggle" ' + (this.options.display === 'static' ? 'data-display="static"' : '') + 'data-toggle="dropdown"' + autofocus + ' role="combobox" aria-owns="' + this.selectId + '" aria-haspopup="listbox" aria-expanded="false">' +
	        '<div class="filter-option">' +
	          '<div class="filter-option-inner">' +
	            '<div class="filter-option-inner-inner"></div>' +
	          '</div> ' +
	        '</div>' +
	        (
	          version.major === '4' ? ''
	          :
	          '<span class="bs-caret">' +
	            this.options.template.caret +
	          '</span>'
	        ) +
	      '</button>' +
	      '<div class="' + classNames.MENU + ' ' + (version.major === '4' ? '' : classNames.SHOW) + '">' +
	        header +
	        searchbox +
	        actionsbox +
	        '<div class="inner ' + classNames.SHOW + '" role="listbox" id="' + this.selectId + '" tabindex="-1" ' + multiselectable + '>' +
	            '<ul class="' + classNames.MENU + ' inner ' + (version.major === '4' ? classNames.SHOW : '') + '" role="presentation">' +
	            '</ul>' +
	        '</div>' +
	        donebutton +
	      '</div>' +
	    '</div>';
	
	  return $(drop);
	};
	
	console.log($.fn.selectpicker.Constructor.prototype.createDropdown);
	*/
});



	






    
