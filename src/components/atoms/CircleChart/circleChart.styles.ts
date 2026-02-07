import { theme } from "@/utils/ThemeProvider";
import css from "styled-jsx/css";

const { colors } = theme;

export const CircleChartStyles = css`
  .circle__chart {
    display: inline-block;
  }

  .circle__chart__track {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    position: relative;
    background: conic-gradient(
      ${colors.charts.red} var(--value),
      ${colors.neutrals[100]} 0
    );
  }

  .circle__chart__edge {
    position: absolute;
    width: 0.469rem;
    height: 0.469rem;
    background: ${colors.charts.red};
    border-radius: 50%;
    z-index: 2;
  }

  .circle__chart__edge--start {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .circle__chart__edge-container {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    transform: rotate(var(--rotation));
  }

  .circle__chart__edge--end {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  .circle__chart__inner-circle {
    position: absolute;
    top: 0.469rem;
    left: 0.469rem;
    width: 4.063rem;
    height: 4.063rem;
    background: ${colors.primary[100]};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .circle__chart__number {
    font-weight: 600;
    color: ${colors.primary[500]};
    font-size: 1rem;
  }
`;
