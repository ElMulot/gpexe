import {LitElement, css, html} from 'lit';
import {styleMap} from 'lit/directives/style-map.js';
import {customElement, property} from 'lit/decorators.js';

@customElement('col-resize-handle-element')
export class ColResizeHandleElement extends LitElement
{
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

	@property({type: String})
	position = 'left';

	@property({type: Object})
	styles = {};
	
	render()
	{
		this.styles = {[this.position]: '0px'};
        return html`
			<div style="${styleMap(this.styles)}"></div>
    	`;
    }
	
}