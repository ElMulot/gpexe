import { Tooltip, Collapse } from 'bootstrap';
import { createApp } from 'vue';
import Loading from './../components/loading_component.vue';

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
		
		createApp(Loading).mount(e);
		let bsCollapse = new Collapse(e, { toggle: false });
		bsCollapse.show();
		e.innerHTML = "Loading";
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