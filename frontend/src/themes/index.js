const colors = {
  bgLight: '#fd8383 !important',
  bgBlack: '#343a40 !important',
  bgLigthContent:
    'linear-gradient(to right top, #fd8383, #f97777, #f46b6a, #ef5e5e, #e95151);',
  bgBlackContent:
    'linear-gradient(to right top, #343a40, #384049, #3b4752, #3f4d5b, #425464);',
  white: '#fff !important',
  green: '#d3f77b !important',
  pink: '#ef5e5e',
  darkPink: '#d23f3f',
  red: '#FF0000',
  lightGreen: '#caff00',
  darkRed: '#bd4949'
};

const transition = '0.3s';

export const theme = {
  light: {
    bg: colors.bgLight,
    bgContent: colors.bgLigthContent
  },
  black: {
    bg: colors.bgBlack,
    bgContent: colors.bgBlackContent
  },
  common: {
    link: colors.white,
    linkTransition: transition,
    linkHover: colors.green,
    button: colors.pink,
    buttonHover: colors.darkPink,
    buttonBorder: colors.darkRed,
    spinner: colors.lightGreen
  },
  colors: {
    green: colors.green,
    white: colors.white,
    red: colors.red
  }
};
