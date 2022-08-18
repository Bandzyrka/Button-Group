import { css } from "lit-element";

export const ButtonGroupCss = css`
  :host {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
  }
  ::slotted(button) {
    border: 2px solid #E7ECF0;
    background-color: #FFFFFF00;
    padding: 0.25rem 1.45rem;
    text-align: center;
    font-family: Nunito, sans-serif;
    letter-spacing: 0px;
    color: #191C1B;
  }
  ::slotted(button:first-child) {
    
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  ::slotted(button:last-child) {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  ::slotted(button:not(:last-child)) {
    border-right: none;
  }
  ::slotted(button:hover) {
    background-color: #94A8BC0D;
  } 
  
  ::slotted(button:active) {
    background-color: #94A8BC26;
  }
  ::slotted(button:disabled) {
    color: #B0BFCD;
    pointer-events:none;
  }

  ::slotted(button.active) {
    background-color: #4599FF;
    color: white;
  }
`;
