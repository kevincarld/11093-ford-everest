export const ButtonStyles = {
  // style object for base or default style
  baseStyle: {
    outline: 'none!important',
    _focus: {
      ring: '0px'
    },
  },

  // styles for different sizes ("sm", "md", "lg")
  sizes: {},

  // styles for different visual variants ("outline", "solid")
  variants: {
    round: {
      bg: 'primary',
      color: 'white',
      fontFamily: 'body',
      fontWeight: 'bold',
      fontSize: {base: '20px', desktop: '25px'},
      lineHeight: {base: '24px', desktop:'23px'},
      height: 'auto',
      pt: '20px',
      pb: '20px',
      pl: '50px',
      pr: '50px',
      borderRadius: '9999px',
    }
  },

  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    variant: 'cta'
  },
}