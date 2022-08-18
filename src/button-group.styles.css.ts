import { css } from "lit-element";

export const ButtonGroupCss = css`
  :host {
    display: flex;
    flex-direction: row;
    box-sizing: border-box;
    --button-height-px: 32.64px;
    --button-width-px: 126.86px;
    --button-padding-height: 0.30rem;
    --button-padding-width: 1.55rem;
    --font-size: 14px;
    --border-color: #E7ECF0;
    --bg-color: #FFFFFF00;
    --text-color: #191C1B;
    --font-family: Nunito, sans-serif;
    --color-accent: #4599FF;
  }
  ::slotted(button) {
    padding: var(--button-padding-height) var(--button-padding-width);
    border: 2px solid var(--border-color);
    background-color: var(--bg-color);
    
    font-family: var(--font-family);
    font-size: var(--font-size);
    color: var(--text-color);
    
    position: relative;
    letter-spacing: 0px;
    text-align: center;
    white-space: nowrap;
    overflow: hidden;
    transition: all ease-in-out 200ms;

    display: flex;
    justify-content: center;
    align-items: center;
  }
`
