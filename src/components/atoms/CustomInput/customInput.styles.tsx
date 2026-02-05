import { theme } from "@/utils/ThemeProvider";
import css from "styled-jsx/css";

const {colors} = theme

export const CustomInputStyles = css`
  .customInput {
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
  }

  .customInput input {
    width: 100%;
    padding: 0.5rem 0.75rem; 
    border-radius: 0.25rem; 
    border: 1.5px solid ${colors.primary[700]}; 
    outline: none;
    font-size: 0.875rem; 
  }

  .customInput__icon {
    position: absolute;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .customInput.hasIcon.icon--left .customInput__icon {
    left: 0.625rem; 
  }

  .customInput.hasIcon.icon--left input {
    padding-left: 2.25rem; 
  }

  .customInput.hasIcon.icon--right .customInput__icon {
    right: 0.625rem; 
  }

  .customInput.hasIcon.icon--right input {
    padding-right: 2.25rem;
  }

  .customInput input::placeholder {
    color: ${colors.neutrals[100]};
  }
`;
