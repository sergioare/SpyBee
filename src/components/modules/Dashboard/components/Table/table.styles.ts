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
    padding: 0.75rem 2rem 0.75rem 1rem;
  }

  .projects__list {
    list-style: none;
    margin: 0;
    padding: 0 0.5rem 0 0;
  }

  .projectTable__pagination {
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    align-items: center;
  }
  .projectTable__pagination--button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    border: none;
    cursor: pointer;
    background-color: transparent;
  }
`;
