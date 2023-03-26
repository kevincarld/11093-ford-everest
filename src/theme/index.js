import { extendTheme } from '@chakra-ui/react'
import { ButtonStyles as Button } from './components/ButtonStyles'

const customTheme = extendTheme({
  components: {
    Button
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'medium',
      fontSize: {base: '21px', lg: '22px'},
      lineHeight: {base: '28px', lg: '30px'},
    },
    body: {
      fontFamily: 'body',
      fontWeight: 'medium',
      color: 'black',
      fontSize: {base: '17px', lg: '16px'},
      lineHeight: {base: '30px', lg: '29px'}
    }
  },
  breakpoints : {
    sm: '360px',
    md: '768px',
    lg: '1024px',
    d: '1280px',
    wide: '1600px',
    hd: '1900px',
  },
  fonts: {
    body: "Ford Antenna, system-ui, sans-serif",
    heading: "Ford Antenna, system-ui, sans-serif",
    alt: "Ford Antenna Cond, system-ui, sans-serif",
    mono: "Menlo, monospace",
  },
  colors: {
    primary: '#00095B',
    blue: '#00095B',
    cta: '#000D5C',
    accent: '#1700F4',
    black: '#171717',
    white: '#FFFFFF',
    link: '#5081FF'
  },
  space: {
    gutter: '20px',
    gridcol: '85px',
    gridmargin: '340px',
    px: '1px',
    spacer: '40px',
    desktop: {
      spacer: '75px'
    },
  },
  sizes: {
    gutter: '20px',
    gridcol: '85px',
    gridmargin: '340px',
    px: '1px',
    spacer: '40px',
    desktop: {
      spacer: '75px'
    },
    max: 'max-content',
    min: 'min-content',
    full: '100%',
    half: '50%',
    '4xl': '1260px', //used for footer slider modal
    container: {
      desktop: '1240px',
    },
  },

  fontSizes: {
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
    'modal': '1160px'
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  },
})

export default customTheme
