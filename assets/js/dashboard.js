const $ = require('jquery');
const Chart = require('chart.js');
require('../css/dashboard.scss');

const serieMdr = 1;
const serieSdr = 3;

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
		
		let dates = [];
		let datasets = [];
		
		let thead = $('#table').append(create.thead).children().last();
		let tr = thead.append(create.tr).children().last();
		tr.append(create.th).children().last()
			.css('min-width', '8rem')
			.css('padding-left', '2rem')
			.append(create.div).children().last()
			.text($.i18n('date'))
		;
		
		for (let serie of result.series) {
			tr.append(create.th).children().last()
				.append(create.div).children().last()
				.text(serie.name)
			;
		}
		
		let tbody = $('#table').append(create.tbody).children().last();
		tr = tbody.append(create.tr).children().last();
		tr.append(create.td).children().last()
			.addClass('font-italic')
			.text((new Date).format())
		;
		
		//current progress
		
		for (let serie of result.series) {
			
			let color = chartColors.shift();
			chartColors.push(color);
			datasets.push({
				label: serie.name,
				borderColor: color,
				backgroundColor: color,
				borderWidth: 1,
				serieId: serie.id,
				serieType: serie.type,
				serieCount: serie.count,
				fill: false,
				data: [],
			});
			
			let progress = getCurentProgress(serie.id);
			tr.append(create.td).children().last()
				.addClass('font-italic')
				.text((progress === null)?'--':progress)
			;
			
			for (dataset of datasets) {
				if (dataset.label == serie.name && progress !== null) {
					dataset.data.push(progress);
				}
			}
		}
		
		//recorded progress
		for (let progress of result.progress) {
			if (progress.date instanceof Object) {
				date = progress.date.date.toDate().format();
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
				progress = getProgress(date, serie.id);
				tr.append(create.td).children().last()
					.text((progress === null)?'--':progress)
				;
				
				for (dataset of datasets) {
					if (dataset.label == serie.name) {
						dataset.data.push(progress);
					}
				}
			}
			
		}
		dates.unshift((new Date).format());
		
		$('#chart_container').css('height', ($(window).height() - remToPx(12)) + 'px');
		Chart.defaults.global.defaultFontColor = 'white';
		
		let chart = new Chart('chart', {
			type: 'line',
			data: {
				labels: dates,
				datasets: datasets,
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
		
		$('#chart').on('click', function() {
			
			if (chart.data.datasets.some((dataset) => dataset.label == $.i18n('all')) === false) {
				dataset = {
					label: $.i18n('all'),
					borderColor: 'rgba(255, 255, 255, 0.5)',
					backgroundColor: 'rgba(255, 255, 255, 0.5)',
					borderWidth: 4,
					serieType: 0,
					serieCount: 0,
					fill: false,
					data: [],
				};
				chart.data.datasets.push(dataset);
			} else {
				chart.data.datasets.forEach((dataset) => {
					if (dataset.label == $.i18n('all')) {
						dataset.data = [];
					}
				});
			}
			
			let progress = [];
			let count = 0;
			
			chart.data.datasets.forEach((dataset, i) => {
				if (chart.getDatasetMeta(i).hidden !== true && dataset.label != $.i18n('all')) {
					dataset.data.forEach((value, j) => {
						if (progress[j] === undefined) {
							progress[j] = (parseInt(value) || 0) * dataset.serieCount;
						} else {
							progress[j] += (parseInt(value) || 0) * dataset.serieCount;
						}
					});
					count += parseInt(dataset.serieCount);
				}
			});
			
			let average = progress.map(value => Math.round(value / count));
			
			chart.data.datasets.forEach((dataset) => {
				if (dataset.label == $.i18n('all')) {
					dataset.data = average;
				}
			});
			
			chart.update();
		});
		
		$('#all, #mdr, #sdr').on('click', function() {
			chart.data.datasets.forEach((dataset, i) => {
				let meta = chart.getDatasetMeta(i);
				switch ($(this).attr('id')) {
					case 'all':
						meta.hidden = false;
						break;
					case 'mdr':
						meta.hidden = (dataset.serieType === serieSdr)
						break;
					case 'sdr':
						meta.hidden = (dataset.serieType === serieMdr)
						break;
				}
			});
			
			var that = this;
			$('#all, #mdr, #sdr').each(function() {
				$(this).removeClass((this == that)?'btn-primary':'btn-outline-primary');
				$(this).addClass((this == that)?'btn-outline-primary':'btn-primary');
			});
			$('#chart').trigger('click');
			
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
					if (progress.serieId == serieId && progress.date.date.toDate().format() == date) {
						return Math.round(progress.value);
					}
				}
			}
			return null;
		}
		
		$('#chart').trigger('click');
		
	});
});