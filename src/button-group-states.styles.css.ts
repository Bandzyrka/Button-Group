import { css } from "lit-element";
export const ButtonGroupStatesCss = css`

::slotted(button:hover) {
    background-color: #94A8BC0D;
    cursor: pointer;
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
  ::slotted(button.succes)::before {
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        font-family: "Font Awesome 5 Free"; 
        font-weight: 900; 
        content: "\\f00c";
        color: #4599FF;
        font-size: 1.2em;
  }
  ::slotted(button.succes.active)::before {
    color: black;
  }
  
  ::slotted(button.error.active)::before {
    color: black;
  }
  ::slotted(button.error){
    padding: 0;
    width: var(--button-width-px);
    height: var(--button-height-px);
    display: flex;
    justify-content: space-evenly;
  }
  ::slotted(button.succes){
    padding: 0;
    width: var(--button-width-px);
    height: var(--button-height-px);
    display: flex;
    justify-content: space-evenly;
  }
  
  ::slotted(button.error)::before {
        display: inline-block;
        font-style: normal;
        font-variant: normal;
        text-rendering: auto;
        -webkit-font-smoothing: antialiased;
        font-family: "Font Awesome 5 Free"; 
        font-weight: 900; 
        content: "\\f06a";
        color: #ff4545;
        font-size: 1em;
  }
  ::slotted(button.progress)::before{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50%;
    height: 10%;
    background-color: #4599FF;
    content: "";
    transition: all ease-in-out 100ms;
  }
  ::slotted(button.progress.active)::before {
    background-color: white;
  }
`;