import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'

export default function Drive() {

  return (
    <Box>
      <Box p={{base: '0 20px 50px'}}>
        <Text as='h2' textStyle='heading' mb={{base: '28px'}}>The Ford Everest, largely developed and tested in Australia and with plenty of engine grunt, is up to the challenge of the bush conditions. </Text>
        <Text textStyle='body'>Although you’ll need reasonable experience, a dedicated off-road screen on your Ford Everest’s dash can assist with information about your driveline settings and the vehicle’s pitch and roll, while a camera provides a view of the terrain ahead.</Text>
      </Box>

      <Img dimension='709x479' src={mock('709x479', 'car', 'blue')} />
      <Img dimension='709x574' src={mock('709x574', 'car2', 'yellow')} />
    </Box>
  )
}

// font styles
const texts = {
  heading: {

  }
}

