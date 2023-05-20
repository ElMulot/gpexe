import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import i18n from 'i18n';

@customElement('frame-loading-element')
export class FrameLoadingElement extends LitElement
{
	createRenderRoot(): this
	{
		return this;
	}
	
	render()
	{
        return html`
			<div class="d-flex justify-content-center">
				<div class="spinner-border" role="status">
					<span class="visually-hidden">${ i18n.t('loading') }</span>
				</div>
			</div>
    	`;
    }
	
}