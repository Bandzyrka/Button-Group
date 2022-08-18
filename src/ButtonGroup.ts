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
      direction: { //property for chosing vertical or horizontal rendering 
        type: String,
        reflect: true,
      },
    };
  }

  connectedCallback() { //Attaches event listener that adds active class to the button when pressed
    super.connectedCallback();
    let buttons = this.shadowRoot?.host.querySelectorAll("button");
    buttons?.forEach((button, i) => {
      button.addEventListener("click", () => {
        buttons?.forEach((button) => button.classList.remove("active")); //removes active class fron other button
        button.className += " active"; //adds active class to current pressed button
      });
    });
  }
  render() {
    return html` <slot></slot> `; // renders child buttons elements into shadowDOM
  }

  direction: string;
  constructor() {
    super();
    this.direction = "horizontal"; // default property to prevent styling issues 
  }
}
