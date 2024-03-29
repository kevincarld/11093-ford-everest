import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, AspectRatio } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'


export default function Car() {

  return (
    <Box pos='relative' {...texture}>
      <Container pos='relative' zIndex='30'>
        <Grid mt={{base: '36px'}} templateColumns={{lg: 'repeat(12, 1fr)'}}>
          <GridItem
            mx='auto'
            gridColumn={{lg: '1 / span 8', wide: '1 / span 9'}}
            gridRow='1'
            display={'flex'}
            alignItems='flex-end'
            zIndex={1}
          >
            <Figure ml={{wide: '-100px'}} data-scroll data-scroll-speed='-0.5' data-scroll-direction='horizontal'>
              <Img dimension='1162x675' w='full' src={'./images/car.png'} alt='ford everest' />
            </Figure>
          </GridItem>

          <GridItem
            display={{base: 'none', lg: 'block'}}
            gridColumn={{lg: '7 / 12', wide: '8 / 13'}}
            gridRow='1'
          >

                <Figure maxW='440px' mb='40px' ml={{base: '60px', wide:'100px'}}>
                <Img  dimension='440x502' src={'./images/car-2.jpg'} alt='ford everent through the dust' />
                </Figure>
          </GridItem>

        </Grid>
      </Container>
    </Box>

  )
}

// font styles
const texture = {
  sx: {
    '&:before': {
      content: '""',
      pos: 'absolute',
      top: {base:'-57%', lg: '0'},
      left: '0',
      bottom: {base: '-150%', lg: '-100%' },
      w: 'full',
      zIndex: '3',
      bgImage: {base: './bg/car-m.png', lg: './bg/car-d.png'},
      bgSize: {base: '100%', lg:'cover'},
      bgRepeat: 'no-repeat',
    }
  }
}

