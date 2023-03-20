import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'

export default function Travel() {

  return (
    <Box>
      <Box p={{base: '0 20px 60px'}}>
        <Text textStyle='heading'>The main 4WD track also follows the river, crossing back and forwards for some dramatic splashes.</Text>

        <PreLine textStyle='body'>
          {`Minor tracks branch off, although they’re best avoided after heavy rain. You’ll come across ruined buildings such as the corrugated-iron River Ron’s Hut, and the remains of water races built by early Chinese immigrants.

          The steepest 4WD track takes you up Pinnacle Rock, an outcrop of sandstone. Fortunately, the Ford Everest’s sturdy chassis, wider track and suspension tuning offers a balanced performance whether you’re on a highway or on the roughest track.`}
        </PreLine>
      </Box>

      <Img dimension='709x479' src={mock('709x479', 'car', 'blue')} />
      <Img dimension='709x574' src={mock('709x574', 'car2', 'yellow')} />
    </Box>
  )
}

// font styles
const texts = {
  xx: {

  }
}

