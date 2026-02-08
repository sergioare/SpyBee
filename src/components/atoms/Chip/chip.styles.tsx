import { theme } from "@/utils/ThemeProvider";
import css from "styled-jsx/css";

const { colors, typography } = theme;

export const ChipStyles = css`
  .chip {
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    width: var(--width);
    min-width: 1.75rem;
    height: 1.75rem;
    text-transform: capitalize;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: var(--shrink);
    font-weight: ${typography.weight.regular};
  }
  .chip--small,
  .chip--large {
    font-size: 0.75rem;
  }
  .chip--medium {
    font-size: 0.875rem;
  }
  .chip--status--default {
    background-color: ${colors.neutrals[100]};
    color: ${colors.neutrals[300]};
  }
  .chip--status--active {
    background-color: ${colors.status.activeBg};
    color: ${colors.status.activeText};
  }
  .chip--status--inactive {
    background-color: ${colors.status.inactiveBg};
    color: ${colors.status.inactiveText};
  }
  .chip--status--pending_payment {
    background-color: ${colors.status.pendingBg};
    color: ${colors.status.pendingText};
  }
  .chip--status--suspended {
    background-color: ${colors.status.suspendedBg};
    color: ${colors.status.suspendedText};
  }
  .chip--status--small {
    background-color: ${colors.plans.small};
    color: ${colors.primary[100]};
  }
  .chip--status--advanced {
    background-color: ${colors.plans.advanced};
    color: ${colors.primary[100]};
  }
  .chip--status--premium,
  .chip--status--big {
    background-color: ${colors.plans.premium};
    color: ${colors.primary[500]};
  }
`;
