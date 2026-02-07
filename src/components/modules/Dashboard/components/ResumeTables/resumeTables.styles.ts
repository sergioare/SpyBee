import { theme } from "@/utils/ThemeProvider";
import css from "styled-jsx/css";

const { colors } = theme;

export const ResumeTableStyles = css`
  .resume__table,
  .resume__table__body,
  .resume__table__cell {
    display: flex;
    flex-direction: column;
  }

  .resume__table__header {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    padding: 0.5rem;
    background-color: ${colors.neutrals[100]};
    border-radius: 0.5rem 0.5rem 0 0;
  }

  .resume__table__row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    align-items: center;
    padding: 0.35rem 0.5rem;
    border-bottom: 1px solid ${colors.neutrals[100]};
  }

  .team {
    display: flex;
    gap: 1px;
  }

  .resume__table__cell {
    gap: 2px;
    padding-right: 0.5rem;
    min-width: 0;
    display: flex;
    overflow: hidden;
    flex-direction: column;
  }
  .resume__table__cell :global(.--text p) {
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    margin: 0;
  }
  .resume__table__time {
    gap: 1px;
    align-items: center;
    display: flex;
  }
`;
