import { theme } from "@/utils/ThemeProvider";
import css from "styled-jsx/css";

const { colors } = theme;

export const TablesRowStyles = css`
  .row__container {
    display: grid;
    grid-template-columns: 2.5fr 1fr 2.5fr 1.5fr 1.7fr;
    padding: 0.75rem 4rem 0.75rem 1rem;
    align-items: center;
    border-bottom: 1px solid ${colors.neutrals[100]};
    background-color: ${colors.primary[100]};
    cursor: pointer;
  }

  .row__container:hover {
    background: transparent;
  }

  .row__project {
    display: flex;
    gap: 0.75rem;
    align-items: center;
  }

  .thumb {
    width: 2.25rem;
    height: 2.25rem;
    background: ${colors.neutrals[50]};
    border-radius: 0.25rem;
  }

  .team {
    display: flex;
    gap: 1px;
  }

  .items {
    display: grid;
    grid-template-columns: repeat(3, max-content);
    text-align: start;
    justify-content: space-between;
  }
`;
