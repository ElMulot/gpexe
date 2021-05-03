const $ = require('jquery');
require('../css/dashboard.scss');
const {Chart, LineElement, PointElement, LineController, CategoryScale, LinearScale, Legend, Tooltip} = require('chart.js');
Chart.register(LineElement, PointElement, LineController, CategoryScale, LinearScale, Legend, Tooltip);

const serieMdr = 1;
const serieSdr = 3;

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
		$('#chart_container').empty();
		let $chart = $('#chart_container').addLast('canvas');
		
		let dates = [];
		let datasets = [];
		let currentProgressDefined = false;
		
		let $thead = $('#table').addLast('thead');
		let $tr = $thead.addLast('tr');
		$tr.addLast('th')
			.css('min-width', '8rem')
			.css('padding-left', '2rem')
			.addLast('div')
				.text($.i18n('date'))
		;
		
		for (let serie of result.series) {
			$tr.addLast('th')
				.addLast('div')
				.text(serie.name)
			;
		}
		
		let $tbody = $('#table').addLast('tbody');
		$tr = $tbody.addLast('tr');
		$tr.addLast('td')
			.addClass('font-italic')
			.text((new Date).format())
		;
		
		//current progress
		
		for (let serie of result.series) {
			
			datasets.push({
				label: serie.name,
				serieId: serie.id,
				serieType: serie.type,
				serieCount: serie.count,
				fill: false,
				data: [],
			});
			
			let progress = getCurentProgress(serie.id);
			$tr.addLast('td')
				.addClass('font-italic')
				.text((progress === null)?'--':progress)
			;
			
			for (dataset of datasets) {
				if (dataset.label == serie.name && progress !== null) {
					dataset.data.push(progress);
					currentProgressDefined = true;
				}
			}
		}
		
		//recorded progress
		for (let progress of result.progress) {
			date = progress.date.toDate().format();
			if (dates.indexOf(date) === -1) {
				dates.push(date);
				continue;
			}
		}
		
		for (let date of dates) {
			$tr = $tbody.addLast('tr');
			$tr.addLast('td')
				.text(date)
			;
			
			for (let serie of result.series) {
				progress = getProgress(date, serie.id);
				$tr.addLast('td')
					.text((progress === null)?'--':progress)
				;
				
				for (dataset of datasets) {
					if (dataset.label == serie.name) {
						dataset.data.push(progress);
					}
				}
			}
			
		}
		
		if (currentProgressDefined === true) {
			dates.unshift((new Date).format());
		}
		
		$('#chart_nav').css('height', ($(window).height() - remToPx(12)) + 'px');
		
		let chart = new Chart($chart, {
			type: 'gpexeLine',
			data: {
				labels: dates,
				datasets: datasets,
			},
			options: {
				plugins: {
					gpexeLegend: {
						containerId: 'legend_container',
						align: 'center',
					},
					legend: {
						display: false,
					}
				},
			},
			plugins: [gpexeLegendPlugin],
		});
		
		$('#all, #mdr, #sdr').on('click', function() {
			
			chart.data.datasets.forEach((dataset, i) => {
				if (dataset.label != $.i18n('all')) {
					let meta = chart.getDatasetMeta(i);
					switch ($(this).attr('id')) {
						case 'all':
							meta.hidden = false;
							break;
						case 'mdr':
							meta.hidden = (dataset.serieType === serieSdr);
							break;
						case 'sdr':
							meta.hidden = (dataset.serieType === serieMdr);
							break;
					}
				}
			});
			
			chart.update();
			
			var that = this;
			$('#all, #mdr, #sdr').each(function() {
				$(this).removeClass((this == that)?'btn-primary':'btn-outline-primary');
				$(this).addClass((this == that)?'btn-outline-primary':'btn-primary');
			});
			$(that).blur();
			
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
				if (progress.serieId == serieId && progress.date == date) {
					return Math.round(progress.value);
				}
			}
			return null;
		}
		
		$chart.trigger('click');
		
	});
});