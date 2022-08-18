import { html, css, LitElement } from 'lit';
import { ButtonGroupCss } from './button-group.styles.css'
import { property} from 'lit/decorators.js';

export class ButtonGroup extends LitElement {
  static get styles() {
    return [ButtonGroupCss];
  }
  @property()
  active = -1
  
  connectedCallback() {
    super.connectedCallback()
    let buttons = this.shadowRoot?.host.querySelectorAll('button')
    buttons?.forEach((button, i) =>{
      button.addEventListener('click', () => {
        buttons?.forEach((button) => button.classList.remove('active'));
        button.className += 'active';
      })
    })
  }
  
  
  render() 
  {
    return html`
    <slot></slot>
    `;
  }
}

