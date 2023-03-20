import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'

export default function Intro() {

  return (
    <Box>
      <Box p={{base: '0 20px 26px'}}>
        <Text as='h2' {...texts.heading} mb='60px'>Turon National Park is wedged like a splinter into the western side of the Greater Blue Mountains region. </Text>
        <Text textStyle='body'>It’s only 185 kilometres from Sydney but the urban environment couldn’t feel further away as you drive into rugged hills where silver wattles shimmer, streams run crystal-clear, and ruined gold mines make you feel you’ve been transported to another century.</Text>
      </Box>

      <Img dimension='709x479' src={mock('709x479', 'car', 'blue')} />
      <Img dimension='709x574' src={mock('709x574', 'car2', 'yellow')} />
    </Box>
  )
}

// font styles
const texts = {
  heading: {
    color: 'primary',
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base: '18px', sm: '21px', lg: '40px'},
    lineHeight: {base: '28px', lg: '50px'},
  }
}