import { Global } from '@emotion/react'

const GlobalCss = () => (
  <Global
    styles={`
      /* spacer */
      p:not(:last-child) {
        margin-bottom: 24px;

        @media(min-width: 1280px) {
          margin-bottom: 30px;
        }
      }

      @font-face {
        font-family: 'Ford Antenna';
        src: url('./fonts/FordAntenna-BoldItalic.woff2') format('woff2'),
            url('./fonts/FordAntenna-BoldItalic.woff') format('woff'),
            url('./fonts/FordAntenna-BoldItalic.ttf') format('truetype');
        font-weight: bold;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Ford Antenna Cond';
        src: url('./fonts/FordAntennaCond-LightItalic.woff2') format('woff2'),
            url('./fonts/FordAntennaCond-LightItalic.woff') format('woff'),
            url('./fonts/FordAntennaCond-LightItalic.ttf') format('truetype');
        font-weight: 300;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Ford Antenna';
        src: url('./fonts/FordAntenna-Bold.woff2') format('woff2'),
            url('./fonts/FordAntenna-Bold.woff') format('woff'),
            url('./fonts/FordAntenna-Bold.ttf') format('truetype');
        font-weight: bold;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Ford Antenna Cond';
        src: url('./fonts/FordAntennaCond-Light.woff2') format('woff2'),
            url('./fonts/FordAntennaCond-Light.woff') format('woff'),
            url('./fonts/FordAntennaCond-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Ford Antenna';
        src: url('./fonts/FordAntenna-LightItalic.woff2') format('woff2'),
            url('./fonts/FordAntenna-LightItalic.woff') format('woff'),
            url('./fonts/FordAntenna-LightItalic.ttf') format('truetype');
        font-weight: 300;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Ford Antenna';
        src: url('./fonts/FordAntenna-MediumItalic.woff2') format('woff2'),
            url('./fonts/FordAntenna-MediumItalic.woff') format('woff'),
            url('./fonts/FordAntenna-MediumItalic.ttf') format('truetype');
        font-weight: 500;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Ford Antenna';
        src: url('./fonts/FordAntenna-Light.woff2') format('woff2'),
            url('./fonts/FordAntenna-Light.woff') format('woff'),
            url('./fonts/FordAntenna-Light.ttf') format('truetype');
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Ford Antenna';
        src: url('./fonts/FordAntenna-RegularItalic.woff2') format('woff2'),
            url('./fonts/FordAntenna-RegularItalic.woff') format('woff'),
            url('./fonts/FordAntenna-RegularItalic.ttf') format('truetype');
        font-weight: normal;
        font-style: italic;
        font-display: swap;
    }

    @font-face {
        font-family: 'Ford Antenna';
        src: url('./fonts/FordAntenna-Medium.woff2') format('woff2'),
            url('./fonts/FordAntenna-Medium.woff') format('woff'),
            url('./fonts/FordAntenna-Medium.ttf') format('truetype');
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: 'Ford Antenna';
        src: url('./fonts/FordAntenna-Regular.woff2') format('woff2'),
            url('./fonts/FordAntenna-Regular.woff') format('woff'),
            url('./fonts/FordAntenna-Regular.ttf') format('truetype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }


    `}
  />
)

export default GlobalCss