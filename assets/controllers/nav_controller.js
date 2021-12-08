import { Controller } from 'stimulus';
import { Collapse } from './../helpers/bootstrap_helper';

export default class extends Controller {
    
    connect() {
        
        this.element.addEventListener('click', (event) => {
            
            var $turboFrame = document.getElementById(event.originalTarget.dataset.turboFrame);

            if (event.originalTarget.classList.contains('active')) {
                
                event.preventDefault();
                this.element.querySelectorAll('.active').forEach(e => e.classList.remove('active'));
                Collapse.hide($turboFrame);
                event.originalTarget.blur();
                
            } else {
                
                this.element.querySelectorAll('.active').forEach(e => e.classList.remove('active'));
                event.originalTarget.classList.add('active');
                
                Collapse.show($turboFrame);

            }

        });
        
        // render active link at startup
        this.element.querySelectorAll('.active').forEach(e => {
            document.getElementById(e.dataset.turboFrame).src = e.href;
        });

    }

}
