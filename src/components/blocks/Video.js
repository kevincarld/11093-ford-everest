import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'

export default function Video() {

  return (
    <Box>
      <Box p={{base: '0 20px 28px'}}>

        <PreLine textStyle='body'>
          {`Another great way to spend a day is on a three-or-four-hour drive to Sofala, which is still on the Turon River. You’ll meander across private properties where cows and horses play. Then low ranges take over where you can test your skills on steep ascents and descents – occasionally in reverse should you encounter an oncoming vehicle on the narrow tracks.

          19th century gold mining town Sofala is a quaint place for a leg-stretch, and has an old pub and several cafés that offer a break from the campfire, plus a playground where the kids can run off some energy.

          Bitumen leads on to Hill End, but it’s winding and scenic bitumen, and worth the drive to see this second gold-rush town. Check out its story at the Hill End Heritage Centre and inspect the town’s many fine colonial-era facades.

          You can camp at Glendora campground or in one of Hill End’s surrounding bush-camping sites. Next day you can test the Ford Everest’s toughness and performance all over again in this region where family adventure awaits.`}
        </PreLine>
      </Box>

      <Img dimension='709x479' src={mock('709x479', 'car', 'blue')} />
      <Img dimension='709x479' src={mock('709x479', 'video here', 'yellow')} />
    </Box>
  )
}

// font styles
const texts = {
  xx: {

  }
}

