const $ = require('jquery');
const Chart = require('chart.js');
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
	
	$('#clear').on('click', function() {
		$('#console').empty();
	});
	
	$('#chart_container').on('ajax.success', function(e, result, textStatus, jqXHR) {
		
		e.stopPropagation();
//		$('#chart_container').empty();
		
		let dates = [(new Date).format()];
		let dataSets = [];
		
		let thead = $('#table').append(create.thead).children().last();
		let tr = thead.append(create.tr).children().last();
		tr.append(create.th).children().last()
			.text($.i18n('date'))
		;
		
		for (let serie of result.series) {
			tr.append(create.th).children().last()
				.text(serie.name)
			;
		}
		
		let tbody = $('#table').append(create.tbody).children().last();
		tr = tbody.append(create.tr).children().last();
		tr.append(create.td).children().last()
			.addClass('font-italic')
			.text((new Date).format())
		;
		
		for (let serie of result.series) {
			if ((progress = getCurentProgress(serie.id)) === null) {
				tr.append(create.td).children().last()
					.addClass('font-italic')	
					.text('--')
				;
			} else {
				dataSets.push({
					'label': serie.name,
					'data': [(new Date).format(), progress],
				});
				
				tr.append(create.td).children().last()
					.addClass('font-italic')
					.text(progress)
				;
			}
		}
		
		for (let progress of result.progress) {
			if (progress.date instanceof Object) {
				date = new Date(progress.date.date).format();
				if (dates.indexOf(date) === -1) {
					dates.push(date);
					continue;
				}
			}
		}
		
		for (let date of dates) {
			tr = tbody.append(create.tr).children().last();
			tr.append(create.td).children().last()
				.text(date)
			;
			
			for (let serie of result.series) {
				if ((progress = getProgress(date, serie.id)) === null) {
					tr.append(create.td).children().last()
						.text('--')
					;
				} else {
					for (dataSet of dataSets) {
						if (dataSet.label == serie.name) {
							dataSet.data = [date, progress];
						}
					}
					
					tr.append(create.td).children().last()
						.text(progress)
					;
				}
			}
		}
		
		Chart.defaults.global.defaultFontColor = 'white';
		
		let chart = new Chart('chart', {
			type: 'line',
			data: {
				labels: dates,
				datasets: dataSets,
			},
			options: {
				'responsive': true,
				'maintainAspectRatio': true,
				'aspectRatio': 2,
			},
		});
		
		function getCurentProgress(serieId) {
			for (let id in result.current_progress) {
				if (id == serieId) {
					return result.current_progress[id];
				}
			}
			return null;
		}
		
		function getProgress(date, serieId) {
			for (let progress of result.progress) {
				if (progress.date instanceof Object) {
					if (progress.serieId == serieId && new Date(progress.date.date).format() == date) {
						return progress.value;
					}
				}
			}
			return null;
		}
		
	});
});