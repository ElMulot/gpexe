import { Tooltip, Collapse } from 'bootstrap';

const BsPopper = class
	{
	constructor()
	{
		document.querySelectorAll('[data-bs-toggle="tooltip"]').forEach((e: Element) => new Tooltip(e));

		document.addEventListener('hidden.bs.modal', () => {
			if (document.body.querySelectorAll('.modal.show').length === 0) {
				document.querySelectorAll('modal-backdrop-component').forEach((e: Element) => e.remove());
			}
		});
	}
}

const BsCollapse = class
	{	
	static show(e: Element): boolean
	{

		if (e === null) {
			return false;
		}

		if (e.classList.contains('collapsing')) {
			return false;
		}

		if (e.classList.contains('collapse show')) {
			return false;
		}

		if (!e.classList.contains('collapse')) {
			e.classList.add('collapse');
		}

		let bsCollapse = new Collapse(e, { toggle: false });
		bsCollapse.show();
		
		return true;
	}

	static hide(e: Element): boolean
	{

		if (e === null) {
			return false;
		}

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

		//only needed for nav managed by bootstrap
		e.addEventListener('hidden.bs.collapse', (event: Event) => { 
			if (event.target instanceof Element) {
				event.target.classList.remove('active')
			};
		});
		return true;
	}

}

export { BsPopper as Popper, BsCollapse as Collapse };