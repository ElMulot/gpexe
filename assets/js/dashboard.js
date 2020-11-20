const $ = require('jquery');
const Chart = require('chart.js');
require('../css/dashboard.scss');

var chartColors = [
	'#4dc9f6',
	'#f67019',
	'#f53794',
	'#537bc4',
	'#acc236',
	'#166a8f',
	'#00a950',
	'#58595b',
	'#8549ba'
];

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
	
	$('#spinner').on('ajax.success', function(e, result, textStatus, jqXHR) {
		
		e.stopPropagation();
		$('#spinner').empty();
		
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
				let color = chartColors[Math.floor(Math.random() * chartColors.length)];
				dataSets.push({
					label: serie.name,
					borderColor: color,
					backgroundColor: color,
					borderWidth: 1,
					fill: false,
					data: [progress],
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
					tr.append(create.td).children().last()
						.text(progress)
					;
				}
				
				for (dataSet of dataSets) {
					if (dataSet.label == serie.name) {
						dataSet.data.push(progress);
					}
				}
			}
			
		}
		
		$('#chart_container').css('height', ($(window).height() - remToPx(10)) + 'px');
		Chart.defaults.global.defaultFontColor = 'white';
		
		let chart = new Chart('chart', {
			type: 'line',
			data: {
				labels: dates,
				datasets: dataSets,
			},
			options: {
				responsive: true,
				maintainAspectRatio: false,
				onResize: function() {
					$('#chart_container').css('height', ($(window).height() - remToPx(10)) + 'px');
				},
				scales: {
					xAxes: [{
						ticks: {
							reverse: true
						}
					}],
					yAxes: [{
						ticks: {
							min: 0,
							max: 100
						}
					}]
				}
			},
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
				if (progress.date instanceof Object) {
					if (progress.serieId == serieId && new Date(progress.date.date).format() == date) {
						return Math.round(progress.value);
					}
				}
			}
			return null;
		}
		
	});
});