import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'
import BrightCoveVideo from 'components/util/BrightCoveVideo'

export default function Video() {

  return (
    <Container pos='relative' zIndex='80'>
      <Grid templateColumns={{ lg: '7fr 5fr '}} gap={{ lg: '40px' }}>
        <GridItem p={{base:'25px 24px 30px 20px', md: '0px 20px', wide: '0'}} pos='relative' right={{wide: '-120px'}}>
          <Box  data-scroll data-scroll-speed='1'>
            {/* :Line */}
            <Box w={{base:'30px', lg: '50px'}} bg='accent' h={{base: '3px', lg: '6px'}} mt={{ base: '30px', lg: '60px', hd: '120px'}} mb='30px'></Box>

            <PreLine maxW={{lg: '505px'}} textStyle='body'>
            {
              `You could set up camp at Sammy Hole Reserve, where you’ll find wonderful waterholes along the river shallow to suit small children, while others are deep enough to give your fishing rod a workout.

              An alternative is Black Gate reserve, which has facilities such as drop toilets, fire pits and a water tank – plus more chances to swim or launch a kayak. Kangaroos and wombats crop the grass in late afternoon. Crimson rosellas flit through the trees and, if you’re lucky, you might spot a platypus in the river.

              Another great 4WD route to follow from Hill End brings you to Ophir via the Ullamalla and Long Pont roads, with a crossing of the Macquarie River about halfway along. The tracks take you through a maze of rounded hills and across dried-up creek beds. Fortunately, the Ford Everest’s sturdy chassis, wider track and suspension tuning offers a balanced performance whether you’re on a highway or the roughest track.

              Fossick in the bush almost anywhere and you’ll see remnants of mining activity and the occasional forlorn and forgotten miners’ tombstones. Ophir reserve at the junction of two creeks is a great camping spot. If you pan in the creeks, you might well turn up flecks of gold. Brilliant.              `
            }
            </PreLine>
          </Box>
        </GridItem>

        <GridItem order={{ lg:'-1' }} ml={{wide: '-100px', hd: '-200px'}}>
          <Img
           data-scroll data-scroll-speed='-0.5' data-scroll-direction='horizontal'
            dimension='948x968'
            mt={{ lg: '-100px', d:'-240px', wide: '-460px', hd: '-480px'}}
            w={{base: 'full'}}
            fit='cover'
            src={'./images/video-1.jpg'}
          />

          <BrightCoveVideo
            script={'https://players.brightcove.net/6165065566001/WkAEp4m5G_default/index.min.js'}
            dataPlayer={'WkAEp4m5G'}
            dataVideoId={'6323356171112'}
          />

        </GridItem>
      </Grid>
    </Container>

  )
}

// font styles
const texts = {

}