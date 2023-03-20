import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'

export default function Intro() {

  return (
    <Box className='intro' pos='relative' {...texture.mask.desktop}>
      <Container>
        <Grid templateColumns={{lg: '6fr 6fr', wide: '8fr 4fr'}} gap={{lg: '50px', d:'0'}}>
          <GridItem pos='relative' {...texture.mask}>
            <Box pos='relative' zIndex='10' p={{base: '25% 20px 55px'}}>
              <Text as='h2' {...texts.heading} mb='60px' maxW={{d: '830px'}}>Turon National Park is wedged like a splinter into the western side of the Greater Blue Mountains region. </Text>
              <Text textStyle='body' maxW={{d: '482px'}}>It’s only 185 kilometres from Sydney but the urban environment couldn’t feel further away as you drive into rugged hills where silver wattles shimmer, streams run crystal-clear, and ruined gold mines make you feel you’ve been transported to another century.</Text>
            </Box>
          </GridItem>

          <GridItem pos='relative' zIndex='10' pt={{lg: '220px'}}  mr={{wide: '-40%', hd: '-300px'}}>
            <Figure mb={{base: '5px'}}>
              <Img dimension='709x479' w={{base: 'full'}} fit='cover' alt='ford everest with driver outside its window' src={'./images/intro-1.jpg'} />
            </Figure>

            <Figure>
              <Img dimension='709x574' w={{base: 'full'}} fit='cover' alt='ford everest driving through river' src={'./images/intro-2.jpg'} />
            </Figure>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  )
}

// font styles
const texts = {
  heading: {
    color: 'primary',
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base: '18px', sm: '21px', d: '40px'},
    lineHeight: {base: '28px', d: '50px'},
  }
}

const texture = {
  mask: {
    sx: {
      '&:before': {
        content: '""',
        pos: 'absolute',
        top: '-25%',
        left: '0',
        bottom: '-20%',
        w: 'full',
        zIndex: '1',
        bgImage: {base: './bg/intro.png'},
        bgSize: {base: 'cover'},
        bgRepeat: 'no-repeat',
        display: {lg: 'none'}
      }
    },
    desktop: {
      sx: {
        '@media screen and (min-width: 1024px)': {
          '&:before': {
            content: '""',
            pos: 'absolute',
            top: '-25%',
            left: '0',
            bottom: '0',
            w: 'full',
            zIndex: '1',
            bgImage: {base: './bg/intro-d.png'},
            bgSize: {base: '100%'},
            bgRepeat: 'no-repeat',
          }
        }
      }
    }
  },
}