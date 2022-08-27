import {LitElement, css, html} from 'lit';
import {styleMap} from 'lit/directives/style-map.js';

export default class extends LitElement {

    static properties = {
		position: {type: String},
    }

	static styles = css`
    	div {
			cursor: col-resize;
			height: 100%;
			position: absolute;
			top: 0;
			user-select: none;
			width: 5px;
			z-index: 1030; /*$zindex-fixed*/
			background-color: red;
    	}
  	`;

    constructor() {
        super();
		this.position = 'left';
    }

    render() {
		this.styles = {[this.position]: '0px'};
        return html`
			<div style="${styleMap(this.styles)}"></div>
    	`;
    }
	
}