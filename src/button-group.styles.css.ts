import { css } from "lit-element";

export const ButtonGroupCss = css`
  :host {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    --button-height: 32px;
    --button-width: 125px;
    --font-size: 14px;
    --border-color: #E7ECF0;
    --bg-color: #FFFFFF00;
    --text-color: #191C1B;
    --font-family: Nunito, sans-serif
  }
  ::slotted(button) {
    height: var(--button-height);
    width: var(--button-width);
    border: 2px solid var(--border-color);
    background-color: var(--bg-color);
    
    font-family: var(--font-family);
    font-size: var(--font-size);
    color: var(--text-color);
    
    letter-spacing: 0px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`
