import { Controller } from 'stimulus';
import UrlParams from 'helpers/url_params_helper';

export default class extends Controller {
	
    #viewId = 0;
    #seriesIds = [];

    static targets = ['navContainer', 'table', 'thead', 'tbody'];

    static values = {
        urlHeader: String,
        urlBody: String,
    }

    static params = {

    }

    connect() {
        
        this.element.addEventListener('engineering--view:update', event => {
            this.#viewId = event.detail.id;
            this.updateHeader();
        });

        this.element.addEventListener('engineering--serie:update', event => {
            this.#seriesIds = event.detail.ids;
            this.updateHeader();
        });
        
        this.element.addEventListener('engineering--header:sortDesc', event => {
            console.log(event.detail);
        });

        this.element.addEventListener('engineering--header:filter', event => {
            console.log(event.detail);
        });

        this.element.addEventListener('engineering--header:sortAsc', event => {
            console.log(event.detail);
        });

        this.element.addEventListener('engineering--header:highlight', event => {
            console.log(event.detail);
        });

        document.addEventListener('engineering--main:thead:update', (event) => {
            this.updateBody();
        });

        document.addEventListener('turbo:before-stream-render', (event) => {
            this.dispatch(event.target.getAttribute('target') + ':update');
        });

        this.element.querySelectorAll('button[data-bs-toggle="tab"]').forEach(e => {
            
            e.addEventListener('mousedown', (event) => {
                if (event.originalTarget.classList.contains('active')) {
                    this.navContainerTarget.style.height = 0;
                    this.tableTarget.classList.remove('nav-shown');
                    this.tableTarget.classList.add('nav-hidden');
                }
            });

            e.addEventListener('show.bs.tab', () => {
                this.navContainerTarget.style.removeProperty("height");
                this.tableTarget.classList.remove('nav-hidden');
                this.tableTarget.classList.add('nav-shown');
            });
            
        }); 

        this.dispatch('connected');
    }

    updateHeader() {
        
        if (this.#viewId && this.#seriesIds != false) {
            this.theadTarget.innerHTML = '';
            this.tbodyTarget.innerHTML = '';
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