import css from "styled-jsx/css";
import { theme } from "@/utils/ThemeProvider";

const { colors, typography } = theme;

export const SidePanelStyles = css`
  .side__panel__content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem 1rem 2rem 1rem;
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${colors.primary[100]};
    transition: width 0.3s ease;
    overflow: hidden;
    border-radius: 1rem;
    max-height: 45.625rem;
  }

  .side__panel__header {
    display: flex;
    align-items: center;
    gap: 3px;
  }

  .side__panel__tabs {
    display: grid;
    grid-template-columns: 1fr 2fr auto;
  }

  .side__panel__tab {
    color: ${colors.neutrals[200]};
    background: none;
    border: none;
    padding: 0.5rem 0.5rem 0.5rem 1rem;
    border-bottom: 1px solid ${colors.neutrals[100]};
    text-align: left;
    cursor: pointer;
  }

  .--active {
    color: ${colors.primary[600]};
    border-bottom: 2.5px solid ${colors.primary[700]};
  }

  .side__panel__filter {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: none;
    border: none;
    cursor: pointer;
    border-bottom: 1px solid ${colors.neutrals[100]};
  }

  .side__panel__section {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    overflow: hidden;
  }

  .side__panel__section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .side__panel__section-title {
    display: flex;
    gap: 3px;
    align-items: center;
  }
  .statsCards__container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    width: 100%;
    margin-bottom: 0.75rem;
  }

  .side__panel__link {
    font-size: 12px;
    color: ${colors.primary};
    background: none;
    border: none;
    cursor: pointer;
  }

  .side__panel__section-header :global(.side__panel__header--button p) {
    color: ${colors.charts.blue};
    font-weight: ${typography.weight.regular} !important;
  }
`;
