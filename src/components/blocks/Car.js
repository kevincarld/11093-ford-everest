import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'

export default function Car() {

  return (
    <Box>
      <Img dimension='1162x675' src={mock('1162x675', 'solo car', 'blue')} />
    </Box>
  )
}

// font styles
const texts = {
  xx: {

  }
}

