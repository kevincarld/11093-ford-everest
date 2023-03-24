import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'

export default function Drive() {

  return (
    <Container pb={{ base: '6px', lg:'67px' }}>
      <Grid gap={{base:'52px', hd:'108px'}} templateColumns={{ lg: '6fr 6fr', wide: '5.5fr 6.5fr', }}>
        <GridItem px={{base:'20px', d:'0' }} display='flex' alignItems='flex-end'>
          <Box>
            {/* line */}
            <Box bg='primary' w={{base: '30px', lg: '50px'}} h={{base:'3px', lg: '6px'}} />

            <Text pt='25px' {...texts.title} maxW={{lg:'505px'}}>
                The Ford Everest, largely developed and tested in Australia and with plenty of engine grunt, is up to the challenge of the bush conditions.
            </Text>
            <Text {...texts.content} maxW={{lg:'510px'}}>
              Although you’ll need reasonable experience, a dedicated off-road screen on your Ford Everest’s dash can assist with information about your driveline settings and the vehicle’s pitch and roll, while a camera provides a view of the terrain ahead.
            </Text>
          </Box>
        </GridItem>

        <GridItem mr={{wide: '-150px', hd: '-320px'}}>
          <Grid gap={{ base:'6px', lg: '13px' }} templateColumns={{ wide:'9.5fr 2.5fr' }}>
            <Img dimension='800x452' w={{base: 'full'}} fit='cover' src={'./images/drive-1.jpg'} mock='drive-1' />
            <Img dimension='375x225' w={{base: 'full'}} h='full' fit='cover' src={'./images/drive-2-mob.jpg'} mock='drive-2-mob' />
          </Grid>
        </GridItem>
      </Grid>
    </Container>
  )
}

// font styles
const texts = {
  title: {
    color: 'blue',
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base: '21px', lg: '22px'},
    lineHeight: {base: '28px', lg:'30px'},
  },
  content: {
    color: 'black',
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base: '17px', lg: '16px'},
    lineHeight: {base: '30px', lg: '28px'},
  },
}