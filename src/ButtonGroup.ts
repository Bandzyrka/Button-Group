import { html, LitElement } from "lit";
import {
  ButtonGroupCss,
  ButtonGroupDirectionCss,
  ButtonGroupStatesCss,
  ButtonGroupSizesCss,
} from "./index";

export class ButtonGroup extends LitElement {
  static get styles() {
    return [
      ButtonGroupCss,
      ButtonGroupDirectionCss,
      ButtonGroupStatesCss,
      ButtonGroupSizesCss,
    ];
  }
  static get properties() {
    return {
      direction: {
        type: String,
        reflect: true,
      },
    };
  }

  connectedCallback() {
    super.connectedCallback();
    let buttons = this.shadowRoot?.host.querySelectorAll("button");
    buttons?.forEach((button, i) => {
      button.addEventListener("click", () => {
        buttons?.forEach((button) => button.classList.remove("active"));
        button.className += " active";
      });
    });
  }
  render() {
    return html` <slot></slot> `;
  }

  direction: string;
  constructor() {
    super();
    this.direction = "horizontal";
  }
}
