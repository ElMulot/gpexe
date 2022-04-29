import { Controller } from 'stimulus';
import UrlParams from 'helpers/url_params_helper';

export default class extends Controller {
	
    #viewId = 0;
    #seriesIds = [];

    static targets = ['table'];

    static values = {
        urlHeader: String,
        urlBody: String,
    }

    static params = {

    }

    connect() {
        
        this.element.addEventListener('view:update', event => {
            this.#viewId = event.detail.id;
            this.updateHeader();
        });

        this.element.addEventListener('serie:update', event => {
            this.#seriesIds = event.detail.ids;
            this.updateHeader();
        });

        document.addEventListener('turbo:before-stream-render', (event) => {
            if (event.target.getAttribute('target') === 'header') {
                this.updateBody();
            }
        });

        this.dispatch('connected');
    }

    updateHeader() {
        
        if (this.#viewId && this.#seriesIds != false) {
            let paramsString = new UrlParams();
            paramsString.set('view', this.#viewId);
            paramsString.set('series', this.#seriesIds);
            this.tableTarget.src = this.urlHeaderValue + '?' + paramsString;
        }
    }

    updateBody() {
        
        if (this.#viewId && this.#seriesIds != false) {
            let paramsString = new UrlParams();
            paramsString.set('view', this.#viewId);
            paramsString.set('series', this.#seriesIds);
            this.tableTarget.src = this.urlBodyValue + '?' + paramsString;
        }
    }


    

    
}