import { theme } from "@/utils/ThemeProvider";
import css from "styled-jsx/css";

const { colors } = theme;

export const StatsCardStyles = css`
  .stat-card {
    background: ${colors.primary[100]};
    border-radius: 12px;
    padding: 1rem 0.5rem 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    transition: transform 0.2s;
    cursor: pointer;
  }

  .stat-card:hover {
    transform: translateY(-4px);
  }

  .stat-card__header {
    margin-bottom: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
  }

  .stat-card__chart-container {
    align-self: center;
    margin-top: auto;
    padding: 0.5rem 0;
  }
`;
