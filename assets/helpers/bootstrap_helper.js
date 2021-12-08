import { Tooltip, Collapse } from 'bootstrap';
import i18n from './../i18n';

const BsPopper = class {

    constructor() {
		document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach(e => new Tooltip(e));
	}
}

export const Popper = new BsPopper();

const BsCollapse = class {
	
    static show(e) {

		if (e.classList.contains('collapsing')) {
			return false;
		}
		
		if (e.classList.contains('collapse show')) {
			return false;
		}
		
		if (!e.classList.contains('collapse')) {
			e.classList.add('collapse');
		}

		e.innerHTML = 
			'<div class="d-flex justify-content-center">' +
				'<div class="spinner-border" role="status">' +
					'<span class="visually-hidden">' + i18n.t('loading') + '</span>' +
				'</div>' +
			'</div>';
		let bsCollapse = new Collapse(e, { toggle: false });
		bsCollapse.show();
		return true;
    }

    static hide(e) {

		if (e.classList.contains('collapsing')) {
			return false;
		}

		if (e.classList.contains('collapse') && !e.classList.contains('show')) {
			return false;
		}
		
		if (!e.classList.contains('collapse')) {
			e.classList.add('collapse');
			if (!e.classList.contains('show')) {
				e.classList.add('show');
			}
		}
		
		let bsCollapse = new Collapse(e, { toggle: false });
		bsCollapse.hide();
		
		e.addEventListener('hidden.bs.collapse', (e) => { e.target.innerHTML = '' }, { once: true });
		return true;
    }
	
}

export { BsCollapse as Collapse };