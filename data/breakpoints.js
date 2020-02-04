import facepaint from "facepaint";

const widths = [576, 768, 992, 1200];

const breakpoints = facepaint(
  widths.map(width => `@media (min-width: ${width}px)`)
);

export default breakpoints;
