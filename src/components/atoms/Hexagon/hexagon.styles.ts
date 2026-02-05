import css from "styled-jsx/css";

export const HexagonStyles = css`
  .hexagon {
    width: var(--hex-size);
    height: calc(var(--hex-size) * 1.2);
    background-color: var(--hex-bg);
    color: var(--hex-color);

    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);

    display: flex;
    align-items: center;
    justify-content: center;

    font-weight: 600;
    font-size: calc(var(--hex-size) * 0.35);
    user-select: none;
  }
`;
