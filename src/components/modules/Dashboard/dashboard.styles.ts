import { theme } from "@/utils/ThemeProvider";
import css from "styled-jsx/css";

const { colors } = theme;

export const DashboardStyles = css`
  .dashboard {
    display: grid;
    position: relative;
    grid-template-columns: 1fr;
    gap: 1rem;
    transition: grid-template-columns 0.3s ease;
  }

  .dashboard--with-panel {
    grid-template-columns: 2fr 1fr;
  }

  .dashboard__table {
    min-width: 0;
  }

  .dashboard__sidepanel {
    min-width: 0;
  }

  .dashboard__open-panel {
    position: fixed;
    right: 0;
    top: 10.7rem;
    z-index: 20;
  }

  .dashboard__open-panel--base {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2.75rem;
    height: 2.75rem;
    border-radius: 0.25rem 0 0 0.25rem;
    background-color: ${colors.primary[100]};
    border: 1px solid ${colors.neutrals[100]};
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    cursor: pointer;
  }

  .dashboard__open-panel--arrow,
  .dashboard__close-panel--arrow {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    background-color: ${colors.primary[100]};
    border: none;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
    z-index: 2;
    cursor: pointer;
  }

  .dashboard__open-panel--arrow {
    top: 25%;
    left: -0.85rem;
  }

  .dashboard__close-panel--arrow {
    right: -0.5rem;
    top: 0.75rem;
  }
`;
