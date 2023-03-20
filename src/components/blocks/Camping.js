import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'

export default function Camping() {

  return (
    <Box>
      <Img dimension='1760x791' src={mock('1760x791', 'camping', 'blue')} />

      <Text textStyle='body'>Your reward is a long weekend or week-long 4WD family escape into rugged bushland where you’ll enjoy both the thrills of off-road driving and the peace of secluded campsites. Just when you’re feeling tired and dusty, you can cool off in a waterhole and watch as the sun sets through the riverside, she-oaks.</Text>
    </Box>
  )
}