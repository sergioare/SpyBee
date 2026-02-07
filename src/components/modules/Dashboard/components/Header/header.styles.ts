import { theme } from "@/utils/ThemeProvider";
import css from "styled-jsx/css";

const { colors } = theme;
const HeaderStyles = css`
  .header__container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }

  .header__title,
  .header__actions,
  .header__actions--filters {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  .header__actions{
    position: relative;
  }
  .header__actions--filters {
    flex-direction: row;
    gap: 0;
  }

  .header__actions :global(.--button) {
    padding-left: 0.313rem;
    background-color: ${colors.primary[100]};
    border-radius: 0.25rem;
    height: 1.8rem;
    display: flex;
  }
  .header__actions :global(.--button):focus-within {
    background-color: transparent;
  }

  .header__actions--filters :global(.--initial),
  .header__actions--filters :global(.--final) {
    border: 1.5px solid ${colors.neutrals[200]};
    box-sizing: border-box;
    overflow: hidden;
  }
  .header__actions--filters :global(.--initial) {
    border-radius: 0.25rem 0 0 0.25rem;
  }

  .header__actions--filters :global(.--middle) {
    border-top: 1.5px solid ${colors.neutrals[200]};
    border-bottom: 1.5px solid ${colors.neutrals[200]};
    border-left: none;
    border-right: none;
    border-radius: 0;
    box-sizing: border-box;
    overflow: hidden;
  }

  .header__actions--filters :global(.--final) {
    border-radius: 0 0.25rem 0.25rem 0;
  }
`;
export default HeaderStyles;
