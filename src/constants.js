export const BREAKPOINTS = {
  phoneMax: 600,
  tabletMax: 950,
  laptopMax: 1300,
};

export const QUERIES = {
  phoneAndBelow: `(max-width: ${BREAKPOINTS.phoneMax / 16}rem)`,
  tabletAndBelow: `(max-width: ${BREAKPOINTS.tabletMax / 16}rem)`,
  laptopAndBelow: `(max-width: ${BREAKPOINTS.laptopMax / 16}rem)`,
};
