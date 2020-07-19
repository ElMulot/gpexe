const $ = require('jquery');
require('../css/project.scss');

$(document).ready(function() {
	$('#sub_contractors, #main_contractors').on('show.bs.collapse', function() {
		console.log($(this));
		$('#' + $(this).prop('id') + '_tab').addClass('active');
	});
	
	$('#sub_contractors, #main_contractors').on('hidden.bs.collapse', function() {
		$('#' + $(this).prop('id') + '_tab').removeClass('active');
		$('#' + $(this).prop('id') + '_tab').blur();
	});
});