import css from "styled-jsx/css";

export const TableStyles = css`
  .projects__header {
    display: grid;
    grid-template-columns: 2.5fr 1fr 2.5fr 1.5fr 1.7fr;
    padding: 0.75rem 4.5rem 0.75rem 1rem;
    background-color: transparent;
  }
  .projects__header-sidePanel--open {
    grid-template-columns: 2.5fr 1fr 1fr 1.5fr 1.5fr;
    padding: 0.75rem 2.5rem 0.75rem 1rem;
  }

  .projects__list {
    list-style: none;
    margin: 0;
    padding: 0 0.5rem 0 0;
  }
`;
