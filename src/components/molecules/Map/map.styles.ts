import css from "styled-jsx/css";

export const MapStyles = css`
  #map-container {
    width: 100%;
    height: 23rem;
    min-height: 23rem;
    max-height: 23rem;
    background-color: lightgrey;
    position: relative;
    overflow: hidden;
  }

  :global(.mapboxgl-canvas) {
    width: 100% !important;
    height: 23rem !important;
  }

  :global(.mapboxgl-canvas-container) {
    width: 100% !important;
    height: 23rem !important;
  }

  .map-wrapper {
    width: 100%;
    height: 23rem;
    position: relative;
    overflow: hidden;
  }

  .map-container {
    width: 100%;
    height: 23rem;
  }
`;
