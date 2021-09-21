type ObjectStringType = {
  [key: string]: string
}

const sizes: ObjectStringType = {
  heading1: '6.73rem',
  heading2: '5.05rem',
  heading3: '3.79rem',
  heading4: '2.84rem',
  heading5: '2.13rem',

  paragraphLarge: '2.13rem',
  paragraphRegular: '1.6rem',
  paragraphSmall: '1.4rem',

  buttonSmall: '1.4rem',
  button: '1.6rem',
  buttonLarge: '2.13rem',

  notes: '1.6rem',

  copyRight: '1.2rem'
}

const colors: ObjectStringType = {
  primary: '#F87B36',
  secondary: '#EDEDED',

  black: '#000000',
  white: '#FFFFFF',

  gray: '#6C6C6C',

  statusBlue: '#319FDD'
}

const theme = {
  font: {
    family: "'IBM Plex Sans', sans-serif",

    lineHeight: {
      bodyCopy: 1.4,
      title: 1.1
    },

    sizes,

    weight: {
      normal: 400,
      bold: 700
    }
  },

  colors,

  spacings: {
    xtiny: '0.8rem',
    tiny: '1.2rem',
    xsmall: '1.6rem',
    small: '2.4rem',
    medium: '3.2rem',
    normal: '4.8rem',
    large: '6.4rem',
    xlarge: '9.6rem',
    huge: '12.8rem',
    xhuge: '19.2rem',
    xxhuge: '25.6rem'
  }
}

export default theme
