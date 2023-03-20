import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'

export default function Blue() {

  return (
    <Box>
      <Box p={{base: '0 20px 28px'}}>
        <Text>The best of the</Text>
        <PreLine>
          {`Central
          West`}
        </PreLine>

        <Text textStyle='heading'>Start at Capertree beyond Lithgow, where you hit the beginning of your 4WD adventure as gravel takes over tarmac at Turon Gates Road.</Text>
        <Text textStyle='body'>A slight reduction in tyre pressure should set you up for steep sections of track now you’re in Turon National Park. The track wiggles along a ridge through scribbly gums, before descending steeply towards the river on a few excitingly sharp bends. You don’t have too far to go to set up camp at either Woolshed Flat or The Diggings.</Text>
      </Box>

      <Img dimension='709x479' src={mock('709x479', 'car', 'blue')} />
      <Img dimension='709x479' src={mock('709x479', 'car', 'red')} />

      <Box p={{base: '0 20px 60px'}}>
        <PreLine textStyle='body'>
          {`The Diggings has the most challenging access, but you’ll find wonderful waterholes along the river, some deep for a serious plunge, others shallow to suit small children. Give your kayak or fishing rod a workout. Kangaroos and wombats crop the grass in late afternoon.

          There are no marked bush tracks, but next morning walkers can have a happy time following the river. Crimson rosellas flit through the trees and, if you’re lucky, you might spot a platypus in the river. Fossick in the bush and you’ll see remnants of mining activity. `}
        </PreLine>
      </Box>

      <Img dimension='940x1041' src={mock('940x1041', 'fishing', 'red')} />

    </Box>
  )
}

// font styles
const texts = {
  xx: {

  }
}

