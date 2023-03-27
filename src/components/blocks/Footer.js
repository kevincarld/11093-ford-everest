import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import FooterSlider from 'components/FooterSlider'
import FeatureFooter from 'components/util/FeatureFooter'
export default function Footer() {

  return (
    <Box pos='relative' py={{base: '100px', d:'150px'}} px={{base: '20px'}} textAlign='center'
      sx={{
        '&:before': {
          content: '""',
          pos: 'absolute',
          left: '0',
          bottom: '0',
          w: 'full',
          top: {base: 0, lg: '35%'},
          zIndex: '60',
          bgSize: {base: '100%', lg: '100% 100%', wide: 'cover'},
          bgRepeat: 'no-repeat',
          bgImage: { base: './bg/footer-bg-mob.png', lg: './bg/footer-bg.png' },
        },
      }}
    >
      <Box pos='relative' zIndex={100}>

        <Text as='h2' {...texts.title}>Built to last</Text>
        <PreLine display={{base: 'block', lg: 'none'}} {...texts.subtitle}>
          {`Click on the various hotspots to find
          out more about the features of the
          Next-Gen Ford Everest
          `}
        </PreLine>
        <PreLine display={{base: 'none', lg: 'block'}} {...texts.subtitle}>
          {`Click on the various hotspots to find out more about
          the features of the Next-Gen Ford Everest
          `}
        </PreLine>

        <FooterSlider />

        <Button mt={{base: '40px', lg: '50px'}} variant={'round'}>Find out more</Button>

      </Box>

      <FeatureFooter href='#'/>
    </Box>
  )
}

// font styles
const texts = {
  title: {
    color: 'cta',
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base: '48px', sm: '52px', lg: '100px'},
    lineHeight: {base: '71px', lg: '184px'},
  },
  subtitle: {
    color: 'black',
    fontWeight: 'medium',
    fontSize: {base: '14px', sm: '16px'},
    lineHeight: {base: '28px'},
  }
}

