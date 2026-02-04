import { theme } from '@/utils/ThemeProvider'
import css from 'styled-jsx/css'


const { colors, mediaQueries } = theme
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
    background: ${colors.primary[100]};
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.08);
  }

  .navbar__content {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;
    flex: 1;
    align-items: center;
  }

  .current-page {
    background-color: ${colors.primary[600]};
    border-radius: 2rem;
    padding: 0.25rem 0.5rem;
  }

  .current-page:hover {
    background-color: ${colors.primary[800]};
  }
  .navbar__icon {
    cursor: pointer;
  }

  .navbar__icon :global(img) {
    cursor: pointer;
  }

  .navbar__icon--anchor {
    display: flex;
  }

  ul.navbar__pages {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
    flex: 1;
  }

  li.navbar__pages__item {
    list-style: none;
    cursor: pointer;
  }

  li.navbar__pages__item :global(p) {
    white-space: wrap;
  }

  li.navbar__pages__item:hover:not(.current-page) :global(a span p) {
    color: var(--primary-500-color);
  }

  .navbar__subPages__wrapper {
    list-style: none;
    display: grid;
    position: absolute;
    top: 3rem;
    z-index: 1;
    padding: 0.75rem;
    color: var(--neutrals-400-color);
    gap: 0.5rem;
    margin-top: 0.25rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
    min-width: 12rem;
    background-color: var(--neutrals-white-color);
    border-radius: 1rem;
  }

  .navbar__subPages__wrapper li {
    padding: 0.5rem;
  }

  .navbar__subPages__wrapper li:hover {
    background-color: rgba(190, 235, 255, 0.12);
    border-radius: 0.25rem;
    color: var(--primary-500-color);
  }

  .navbar__subPages__wrapper li:hover div p {
    color: var(--primary-500-color);
  }

  .navbar__right {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;
  }

  .navbar__right :global(button) {
    flex-shrink: 0;
  }
  .navbar__right :global(button p) {
    white-space: nowrap;
  }
  .navbar__right__buttons {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    justify-content: center;
  }
  .navbar__right--web {
    display: flex;
    align-items: baseline;
    border-radius: 50%;
  }
  .navbar__right--web:hover {
    background-color: ${colors.primary[100]};
  }

  .navbar__right_languages {
    background-color: transparent;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    border: none;
  }

  .navbar__right_languages__menu {
    display: flex;
    justify-content: flex-end;
    position: absolute;
    top: 4.5rem;
    right: 4rem;
  }

  .navbar__right_languages__menu__container {
    width: 11rem;
    padding: 1rem;
    background-color: ${colors.primary[100]};
    box-shadow: 0px 12rem 5rem rgba(0, 0, 0, 0.01), 0px 6.75rem 4rem rgba(0, 0, 0, 0.05),
      0px 3rem 3rem rgba(0, 0, 0, 0.09), 0px 0.75rem 1.5rem rgba(0, 0, 0, 0.1),
      0px 0px 2rem rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
  }
  .navbar__right_languages__menu__options {
    display: inline-flex;
    align-items: center;
    width: 100%;
    cursor: pointer;
    padding: 0.5rem;
    border: none;
    background-color: transparent;
  }
  .navbar__right_languages__menu__options:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }

  .navbar__right_languages__menu__option {
    margin-left: 0.5rem;
  }

  @media screen and (min-width: ${mediaQueries.tablet}) {
    ul.navbar__pages {
      gap: 1rem;
    }

    li.navbar__pages__item :global(p) {
      white-space: nowrap;
    }
  }
`
export default HeaderStyles
