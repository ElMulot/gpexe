const $ = require('jquery');
require('../css/dashboard.scss');

$(document).ready(function() {
	
	$('#console').on('ajax.beforeSend', function(e, jqXHR, settings) {
		
		$(e.target)
			.show()
			.find('[data-toggle*="ajax"]').remove()
		;
		e.stopPropagation();
		
	});
	
	$('#console').on('ajax.success', function(e, result, textStatus, jqXHR) {
		
		$(e.target).html($(e.target).html() + result);
		global.ajax.fetch(e.target);
		e.stopPropagation();
		
	});
	
});