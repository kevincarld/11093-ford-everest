import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'

export default function SecondIntro() {

  return (
    <Box>
      <Box p={{base: '0 20px 26px'}}>
        <PreLine textStyle='body'>
          {`It reminds you how lucky we are in Australia to have such landscapes so near our cities to feed our spirit of adventure. Pack everyone into a Ford Everest and set off on a 4WD exploration. Turon National Park has everything for a great family getaway: bushwalking, mountain biking, kayaking, fishing, swimming in waterholes.

          For 4WD enthusiasts, this is an outstanding destination. You don’t need to be geared up for an outback trek, but the terrain has plenty to challenge your driving skills, including river crossings, steep hills, and narrow tracks between entanglements of eucalyptus trees.`}
        </PreLine>
      </Box>

      <Img dimension='949x1049' src={mock('949x1049', 'car', 'blue')} />
      <Img dimension='868x481' src={mock('868x481', 'car2', 'yellow')} />
    </Box>
  )
}