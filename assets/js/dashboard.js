const $ = require('jquery');
require('../css/dashboard.scss');

//var refreshConsole;

$(document).ready(function() {
	
});
/*
$(document).ajaxSend(function(e, jqxhr, settings) {
	if (settings.url == $('#output').data('url')) {
		$('#console').empty();
		refreshConsole = true;
		updateConsole();
	}
});

$(document).ajaxComplete(function(e, jqxhr, settings) {
	
	if (settings.url == $('#console').data('url') && refreshConsole) {
		setTimeout(updateConsole(), 1000);
	} else {
		refreshConsole = false;
	}
	
});

function updateConsole() {
	$.ajax({
		url : $('#console').data('url'),
		type: 'GET',
		
		success: function(result) {
			$('#console').html($('#console').html() + result);
			bsCustomFileInput.init();
		},
	});
}
*/