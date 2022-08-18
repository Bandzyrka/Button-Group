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
        margin-right: 0.4em;
        font-size: 1.3em;
    
  }
  ::slotted(button.succes.active)::before {
    color: black;
  }
  ::slotted(button.error.active)::before {
    color: black;
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
        margin-right: 0.4em;
        font-size: 1.1em;
  }
  
`;