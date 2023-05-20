import {LitElement, html} from 'lit';
import {customElement} from 'lit/decorators.js';
import i18n from 'i18n';

@customElement('loading-element')
export class LoadingElement extends LitElement
{
	createRenderRoot(): this
	{
		return this;
	}
	
	render()
	{
        return html`
			<div class="modal show" tabindex="-1" style="display: block;">
				<div class="modal-dialog modal-dialog-centered justify-content-center">
					<div class="spinner-border" role="status">
						<span class="visually-hidden">${ i18n.t('loading') }</span>
					</div>
				</div>
			</div>
    	`;
    }
	
}