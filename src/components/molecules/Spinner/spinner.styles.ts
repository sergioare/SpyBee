import css from "styled-jsx/css";

const SpinnerStyles = css`
  .spinner-overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.35);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 9999;
  }

  .spinner-orbit {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 150px;
    height: 150px;
  }

  .spinner-bee {
    animation: dizzy 3s ease-in-out infinite;
  }

  @keyframes dizzy {
    0% {
      transform: rotate(0deg) translateX(0px) rotate(0deg) scale(1);
    }
    25% {
      transform: rotate(90deg) translateX(50px) rotate(-110deg) scale(0.8);
    }
    50% {
      transform: rotate(180deg) translateX(70px) rotate(-250deg) scale(1.2);
    }
    75% {
      transform: rotate(270deg) translateX(40px) rotate(-150deg) scale(0.9);
    }
    100% {
      transform: rotate(360deg) translateX(0px) rotate(-360deg) scale(1);
    }
  }
`;

export default SpinnerStyles;
