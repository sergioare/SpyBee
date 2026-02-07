import { theme } from "@/utils/ThemeProvider";
import css from "styled-jsx/css";

const { colors } = theme;

export const FilterModalStyles = css`
  .filterModal__container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
  }

  .filterModal__content {
    position: absolute;
    top: 100%;
    right: 6.5rem;
    margin-top: 0.5rem;
    background-color: ${colors.primary[100]};
    min-width: 200px;
    border-radius: 0.25rem;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
    z-index: 11;
    overflow: hidden;
    padding: 0.5rem 0;
  }

  .filterModal__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .filterModal__item {
    padding: 0.5rem 1.5rem;
    white-space: nowrap;
    cursor: pointer;
  }

  .filterModal__item:hover {
    background-color: ${colors.neutrals[100]};
  }
`;
