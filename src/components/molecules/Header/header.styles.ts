import { theme } from "@/utils/ThemeProvider";
import css from "styled-jsx/css";

const { colors } = theme;
const HeaderStyles = css`
  .navbar {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    width: 100%;
    height: 4.37rem;
    padding: 1.5rem 1rem;
    z-index: 12;
    gap: 1rem;
    background: ${colors.primary[500]};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
  }
  .navbar__content {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    flex: 1;
    align-items: center;
    justify-content: space-between;
  }
  .navbar__icon {
    cursor: pointer;
  }
  .navbar__right,
  .navbar__right__menu {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }
  .navbar__right__menu{
    cursor: pointer;
  }
  .navbar__right__menu--user {
    color: ${colors.primary[100]};
  }
`;
export default HeaderStyles;
