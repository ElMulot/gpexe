import { Controller } from 'stimulus';
import { Tab } from 'bootstrap';

export default class extends Controller {
	
    static targets = ['button'];

    static values = {
        ids: Array,
    }

    static param = {
        id: Number,
    }

    connect() {
        
        if (this.buttonTargets.length === 0) { //no series to display
            document.getElementById('serie_label').classList.add('disabled');
            Tab.getInstance(document.getElementById('view_label')).show();
        } else {
            document.getElementById('serie_label').classList.remove('disabled');
            this.updateClasses(this.idsValue);
            this.dispatch('connected');
        }

        this.element.dispatchEvent(new Event('controller:connected'));
    }

    update({ params }) {
        this.updateClasses([params.id]);
    }

    updateClasses(ids) {
        this.buttonTargets.forEach(e => {
            if (ids.includes(Number(e.dataset.serieIdParam))) {
                e.classList.remove('btn-primary');
                e.classList.add('btn-outline-primary');
            } else {
                e.classList.remove('btn-outline-primary');
                e.classList.add('btn-primary');
            }
        });
        this.dispatch('update', { detail: { ids: ids } });
    }
}