import { Controller } from 'stimulus';
import UrlParams from 'helpers/url_params_helper';

export default class extends Controller {
	
	#viewId = 0;
	#seriesIds = [];
	#urlParams;
	
	#resize = {
		$currentHeader: null,
		currentWitdh: null,
		currentPosition: null,
	}

	#move = {
		$currentHeader: null,
		currentPosition: null,
		offset: null,
		threshold: 10,
		$container: null,
		$placeholder: null,
		$helper: null,
	}

	static targets = ['navContainer', 'tableContainer', 'table', 'thead', 'header', 'tbody', 'pagination'];

	static values = {
		urlHeader: String,
		urlBody: String,
	}

	connect() {

		/**
		 * Listener triggered on each stream update.
		 */
		document.addEventListener('turbo:before-stream-render', event => {
			this.dispatch(event.target.getAttribute('target') + ':update');
		});

		/**
		 * Listener triggered to manage minization of the top menu.
		 */
		this.element.querySelectorAll('button[data-bs-toggle="tab"]').forEach(e => {
			
			e.addEventListener('mousedown', event => {
				if (event.originalTarget.classList.contains('active')) {
					this.navContainerTarget.style.height = 0;
					this.tableContainerTarget.classList.remove('nav-shown');
					this.tableContainerTarget.classList.add('nav-hidden');
				}
			});

			e.addEventListener('show.bs.tab', () => {
				this.navContainerTarget.style.removeProperty('height');
				this.tableContainerTarget.classList.remove('nav-hidden');
				this.tableContainerTarget.classList.add('nav-shown');
			});
			
		});

		/**
		 * Listener triggered on user change view.
		 */
		this.element.addEventListener('engineering--view:update', event => {
			const serieIds = this.#urlParams.get('series');
			this.paginationTarget.value = 0;
			this.#urlParams.deleteAll();
			this.#urlParams.set('view', event.detail.id);
			this.#urlParams.set('series', serieIds);
			this.setThead();
		});

		/**
		 * Listener triggered on user change serie.
		 */
		this.element.addEventListener('engineering--serie:update', event => {
			this.paginationTarget.value = 0;
			this.#urlParams.delete('page');
			this.#urlParams.set('series', event.detail.ids);
			this.setThead();
		});

		/**
		 * Listener triggered on query update from Twig.
		 */
		 document.addEventListener('engineering--request:updated', (event) => {
			if (Object.isObject(event.detail.query) === true) {
				this.#urlParams.deleteAll();
				Object.entries(event.detail.query).forEach(([k, v]) => this.#urlParams.set(k, v));
			}

			this.#setResizable();
			this.#setMovable();
			this.setTbody();
		});

		/**
		 * Listener triggered on Filter button click.
		 */
		this.element.addEventListener('engineering--header:filter', event => {
			
			if (Array.isArray(event.detail) === false) {
				return;
			}
			console.log(event.detail)
			event.detail.forEach(e => {
				if (e.value == false) {
					e.value = null;
				}
				this.#urlParams.set('filters[' + e.key + ']', e.value);
			});
			
			this.dispatch('update', {
				target: event.target,
				detail: {
					filtered: event.detail.filter(e => e.value !== null),
				},
			});

			this.setTbody();
		});

		/**
		 * Listener triggered on SortDesc button click.
		 */
		 this.element.addEventListener('engineering--header:sortDesc', event => {
			
			this.#urlParams.delete('sortAsc');
			if (this.#urlParams.get('sortDesc') === event.detail.value) {
				this.#urlParams.delete('sortDesc');
			} else {
				this.#urlParams.set('sortDesc', event.detail.value);
			}

			this.headerTargets.forEach(e => {
				this.dispatch('update', {
					target: e,
					detail: {
						sortedDesc: (e === event.target && this.#urlParams.get('sortDesc') === event.detail.value)?this.#urlParams.get('sortDesc'):false,
						sortedAsc: false,
					},
				});
			});

			this.setTbody();
		});

		/**
		 * Listener triggered on SortAsc button click.
		 */
		this.element.addEventListener('engineering--header:sortAsc', event => {
			
			this.#urlParams.delete('sortDesc');
			if (this.#urlParams.get('sortAsc') === event.detail.value) {
				this.#urlParams.delete('sortAsc');
			} else {
				this.#urlParams.set('sortAsc', event.detail.value);
			}
			this.headerTargets.forEach(e => {
				this.dispatch('update', {
					target: e,
					detail: {
						sortedDesc: false,
						sortedAsc: (e === event.target && this.#urlParams.get('sortAsc') === event.detail.value)?this.#urlParams.get('sortAsc'):false,
					},
				});
			});

			this.setTbody();
		});
		
		/**
		 * Listener triggered on Highlight switch changed.
		 */
		this.element.addEventListener('engineering--header:highlight', event => {
			
			if (this.#urlParams.get('highlight') === event.detail.value) {
				this.#urlParams.delete('highlight');
			} else {
				this.#urlParams.set('highlight', event.detail.value);
			}

			this.headerTargets.forEach(e => {
				this.dispatch('update', {
					target: e,
					detail: {
						highlighted: (e === event.target && this.#urlParams.get('highlight') === event.detail.value)?this.#urlParams.get('highlight'):false,
					},
				});
			});

			this.setTbody();
		});

		/**
		 * Listener triggered on Fields_picker selectors click or on col resize
		 */
		this.element.addEventListener('engineering--header:display', event => {
			
			if (Array.isArray(event.detail) === false) {
				return;
			}
			
			var requestUpdate = false;
			event.detail.forEach(e => {
				if (this.#urlParams.get('display[' + e.key + ']') === null) {
					requestUpdate = true;
				}
				this.#urlParams.set('display[' + e.key + ']', e.value);
			});

			if (requestUpdate === true) {
				this.setThead();
			}
		});

		/**
		 * Listener triggered on col move
		 */
		 this.element.addEventListener('engineering--header:order', event => {

			let currentOrder = this.#urlParams.get('order[' + event.key + ']');
			let newOrder = event.value;

			if (currentOrder > newOrder) {
				this.#urlParams.forEach((v, k) => {
					if (k.startsWith('order[') === true && v >= newOrder && v <= currentOrder && k !== event.key) {
						console.log(k + ' : ' + v+1);
						this.#urlParams.set(k, v+1);
					}
				});
			} else {
				this.#urlParams.forEach((v, k) => {
					if (k.startsWith('order[') === true && v >= currentOrder && v <= newOrder && k !== event.key) {
						console.log(k + ' : ' + v-1);
						this.#urlParams.set(k, v-1);
					}
				});
			}

			this.#urlParams.set('order[' + event.key + ']', newOrder);

		});

		this.#urlParams = this.#getUrlParams();

		this.dispatch('connected');
	}

	/**
	 * Update thead frame.
	 */
	appendThead() {
		if (this.#urlParams.has('series') === true && this.#urlParams.has('view') === true || this.#urlParams.has('display') === true) {
			this.tableContainerTarget.src = this.urlHeaderValue + '?' + this.#urlParams.toString();
		} 
	}

	/**
	 * Clear thead and tbody frames and then update thead frame.
	 */
	setThead() {
		if (this.#urlParams.has('series') === true && this.#urlParams.has('view') === true || this.#urlParams.has('display') === true) {
			this.theadTarget.innerHTML = '';
			this.tbodyTarget.innerHTML = '';
			this.tableContainerTarget.src = '';
			this.appendThead();
		}
	}

	/**
	 * Update tobdy frame.
	 */
	appendTbody() {
		var a = {};
		[...this.#urlParams.keys()].forEach(k => a[k] = this.#urlParams.get(k));
		console.log('query : ', a);

		if (this.tableContainerTarget.src !== this.urlBodyValue + '?' + this.#urlParams.toString()) {
			this.tableContainerTarget.removeAttribute('src');
			this.tableContainerTarget.src = this.urlBodyValue + '?' + this.#urlParams.toString();
		}
	}

	/**
	 * Clear tbody frames and then update tbody frame.
	 */
	setTbody() {
		this.tbodyTarget.innerHTML = '';
		this.tableContainerTarget.src = '';
		this.appendTbody();
	}
	
	/**
	 * Action when scrolDown event triggered.
	 * @param {Object} event 
	 */
	scrollDown(event) {

		if (event.target.offsetHeight + event.target.scrollTop >= event.target.scrollHeight && this.paginationTarget.value > 0) {
			this.#urlParams.set('page', Number(this.paginationTarget.value) + 1);
			this.appendTbody();
		}
	}

	
	#getUrlParams() {
		
		let paramString;

		if (this.tableContainerTarget.src) {
			[, paramString] = this.tableContainerTarget.src.split('?');
		}

		return new UrlParams(paramString);
	}

	/**
	 * Set resizable columns for responsive th
	 */
	 #setResizable() {
		
		this.theadTarget.querySelectorAll('col-resize-handle-right-component, col-resize-handle-left-component').forEach(e => e.remove());

		this.headerTargets.filter(e => e.dataset.responsive !== undefined).forEach(e => {
			
			const $nextElement = e.nextElementSibling;
			if ($nextElement instanceof HTMLTableCellElement) {
				const $resizeHandleRight = document.createElement('col-resize-handle-right-component');
				e.appendChild($resizeHandleRight);
				
				const $resizeHandleLeft = document.createElement('col-resize-handle-left-component');
				$nextElement.appendChild($resizeHandleLeft);

				$resizeHandleRight.addEventListener('mousedown', event => {
					if (this.#move.$currentHeader == null) {
						this.#resize.$currentHeader = event.target.parentElement;
						this.#resize.currentWidth = event.target.parentElement.offsetWidth;
						this.#resize.currentPosition = event.pageX;
					}
				});

				$resizeHandleLeft.addEventListener('mousedown', event => {
					if (this.#move.$currentHeader == null) {
						this.#resize.$currentHeader = event.target.parentElement.previousElementSibling;
						this.#resize.currentWidth = event.target.parentElement.previousElementSibling.offsetWidth;
						this.#resize.currentPosition = event.pageX;
					}
				});
			}
			
		});

		document.addEventListener('mousemove', event => {
			if (this.#resize.$currentHeader !== null && this.#resize.currentWidth !== null && this.#resize.currentPosition !== null) {
				let width = Math.max(1, Math.round(this.#resize.currentWidth + (event.pageX - this.#resize.currentPosition)));
				this.dispatch('update', {
					target: this.#resize.$currentHeader,
					detail: {
						width: width.pxToRem(),
					}
				});
			}
		});

		document.addEventListener('mouseup', event => {
			if (this.#resize.$currentHeader !== null && this.#resize.currentWidth !== null && this.#resize.currentPosition !== null) {
				this.dispatch('requestResize', {
					target: this.#resize.$currentHeader,
				});
				this.#resize.$currentHeader = null;
				this.#resize.currentPosition = null;
			}
		});
	}

	/**
	 * Set movable columns for responsive th
	 */
	#setMovable() {

		this.headerTargets.filter(e => e.dataset.responsive !== undefined).forEach(e => {
			e.addEventListener('mousedown', event => {
				if (this.#resize.$currentHeader == null) {
					this.#move.$currentHeader = e;
					this.#move.currentPosition = event.pageX;
					this.#move.offset = event.pageX - e.getBoundingClientRect().left;
				}
			});
		});

		document.addEventListener('mousemove', event => {
			if (this.#move.$currentHeader !== null) {
				if (Math.abs(event.pageX - this.#move.currentPosition) > this.#move.threshold && this.#move.$container === null) {
					this.#move.$container = document.createElement('ul');
					this.#move.$container.style.width = getComputedStyle(this.tableTarget).width;
					this.#move.$container.style.marginLeft = getComputedStyle(this.tableTarget).marginLeft;
					this.#move.$container.style.marginRight = getComputedStyle(this.tableTarget).marginRight;
					
					this.tableContainerTarget.append(this.#move.$container);

					this.headerTargets.forEach((e, k) => {
						if (e === this.#move.$currentHeader) {
							this.#move.$placeholder = document.createElement('li');
							this.#move.$placeholder.classList.add('drag-placeholder');
							this.#move.$placeholder.dataset.responsive = true;
							this.#move.$placeholder.style.width = getComputedStyle(e).width;
							this.#move.$placeholder.style.height = getComputedStyle(this.tableContainerTarget).height;
							this.#move.$container.appendChild(this.#move.$placeholder);
						}

						let $li = document.createElement('li');
						if (e === this.#move.$currentHeader) {
							$li.classList.add('drag-helper');
							$li.style.height = getComputedStyle(this.tableContainerTarget).height;
							this.#move.$helper = $li;
						}

						if (e.dataset.responsive !== undefined) {
							$li.dataset.responsive = true;
						}

						$li.innerHTML = `
							<table class="${this.tableTarget.getAttribute('class')}">	
								<thead>
									<tr style="height: ${getComputedStyle(e.parentElement).height}">
										${e.outerHTML}
									</tr>
								</thead>
								<tbdoy>
									${[...this.tbodyTarget.children].map(e => `<tr style="height: ${getComputedStyle(e).height}">${e.children.item(k).outerHTML}</tr>`).join('')}
								</tbdoy>
							</table>`;

						// let $table = document.createElement('table');
						// this.tableTarget.classList.forEach(v => $table.classList.add(v));
						// let $thead = document.createElement('thead');
						// let $tr = document.createElement('tr');
						
						// $tr.appendChild(e.cloneNode(true));
						// $thead.appendChild($tr);

						// let $tbody = document.createElement('tbody');
						// [...this.tbodyTarget.children].forEach(e => {
						// 	let $tr = document.createElement('tr');
						//  $tr.style.height = getComputedStyle(e).height;
						// 	$tr.appendChild(e.children.item(k).cloneNode(true));
						// 	$tbody.appendChild($tr);
						// });

						// $table.appendChild($thead);
						// $table.appendChild($tbody);
						// $li.appendChild($table);
						this.#move.$container.appendChild($li);

					});

					this.tableTarget.style.display = 'none';
				}

				if (this.#move.$container !== null) {
					let left = event.pageX - this.#move.offset;
					this.#move.$helper.style.left = left + 'px';

					let items = [...this.#move.$container.children];
					let $nextElement = items.find((e, k) => k > items.indexOf(this.#move.$placeholder) && e.classList.contains('drag-helper') === false && e.dataset.responsive !== undefined);
					items.reverse();
					let $prevElement = items.find((e, k) => k > items.indexOf(this.#move.$placeholder) && e.classList.contains('drag-helper') === false && e.dataset.responsive !== undefined);

					if ($nextElement !== undefined && left > this.#move.$placeholder.getBoundingClientRect().left + $nextElement.getBoundingClientRect().width) {
						this.#move.$container.insertBefore($nextElement, this.#move.$placeholder);
					} else if ($prevElement !== undefined && left < this.#move.$placeholder.getBoundingClientRect().left - $prevElement.getBoundingClientRect().width) {
						this.#move.$container.insertBefore(this.#move.$placeholder, $prevElement);
					}
				}
			}
		});

		document.addEventListener('mouseup', () => {
			if (this.#move.$currentHeader !== null) {
				let items = [...this.#move.$container.children];
				let currentIndex = this.headerTargets.indexOf(this.#move.$currentHeader);
				let newIndex = items.filter(e => e.classList.contains('drag-helper') === false).indexOf(this.#move.$placeholder);

				this.dispatch('requestMove', {
					target: this.#move.$currentHeader,
					detail: {
						order: newIndex + 1,
					}
				});

				if (currentIndex > newIndex) {
					this.tableTarget.querySelectorAll('tr').forEach(e => {
						e.insertBefore(e.children.item(currentIndex), e.children.item(newIndex));
					});
				} else {
					this.tableTarget.querySelectorAll('tr').forEach(e => {
						e.insertBefore(e.children.item(currentIndex), e.children.item(newIndex).nextElementSibling);
					});
				}
				
				this.#move.$currentHeader = null;
				
				this.#move.$container.remove();
				this.#move.$container = null;

				this.tableTarget.style.removeProperty('display');

				this.#setResizable();
			}
		});

	}
	
}