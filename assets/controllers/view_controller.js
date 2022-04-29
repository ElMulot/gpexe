import { Controller } from 'stimulus';

export default class extends Controller {
	
    static targets = ['button'];

    static values = {
        id: Number
    }

    static params = {
        id: Number
    }

    connect() {
        this.updateClasses(this.idValue);
        this.dispatch('connected');
    }

    update({ params }) {
        this.updateClasses(params.id);
    }

    updateClasses(id) {
        this.buttonTargets.forEach(e => {
            if (e.dataset.viewIdParam == id) {
                e.classList.remove('btn-primary');
                e.classList.add('btn-outline-primary');
            } else {
                e.classList.remove('btn-outline-primary');
                e.classList.add('btn-primary');
            }
        });
        this.dispatch('update', { detail: { id: id } });
    }
}