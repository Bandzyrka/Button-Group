import { css } from "lit-element";
export const ButtonGroupDirectionCss = css`
  :host([direction="horizontal"]) {
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  :host([direction="horizontal"]) ::slotted(:not(:last-child)) {
    border-right: 0;
  }
  :host([direction="horizontal"]) ::slotted(button:first-child) {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  :host([direction="horizontal"]) ::slotted(button:last-child) {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  :host([direction="vertical"]) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  :host([direction="vertical"]) ::slotted(:not(:last-child)) {
    border-bottom: 0;
  }
  :host([direction="vertical"]) ::slotted(button:first-child) {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  :host([direction="vertical"]) ::slotted(button:last-child) {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`;
