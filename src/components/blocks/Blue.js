import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'

export default function Blue() {

  return (
    <Box bg='primary'>
      <Container>
        <Grid gap={{lg: '60px', wide: '115px'}} templateColumns={{ lg: '1.5fr 1fr' }} >
          <GridItem pt={{base:'56px'}} px={{base: '23px', d: 0}}>
            <Box pl={{wide:'100px'}}>
              <Text {...texts.preheading} mb={{base: '5px!important', lg: '10px!important'}}> The best of the </Text>
              <PreLine {...texts.heading}>
                {`Central
                West`}
              </PreLine>

              <Box w={{base:'30px', lg: '50px'}} bg='accent' h={{base: '3px', lg: '6px'}} mt='30px' mb='55px' />

              <Text maxW={{lg: '515px'}} color='white' {...texts.bigBody}>
                Start at Capertree beyond Lithgow, where you hit the beginning of your 4WD adventure as gravel takes over tarmac at Turon Gates Road.
              </Text>
              <Text maxW={{lg: '515px'}} color='white' textStyle='body'>
                A slight reduction in tyre pressure should set you up for steep sections of track now you’re in Turon National Park. The track wiggles along a ridge through scribbly gums, before descending steeply towards the river on a few excitingly sharp bends. You don’t have too far to go to set up camp at either Woolshed Flat or The Diggings.
              </Text>
            </Box>
          </GridItem>

          <GridItem>
            <Flex pt={{base:'38px', md:'58px'}} mr={{wide:'-140px'}} direction='column' gap={{base:'6px', wide: '29px'}}>
              <Img dimension='709x479' w={{base: 'full'}} fit='cover' src={'./images/blue-1.jpg'} />
              <Img dimension='709x574' w={{base: 'full'}} fit='cover' src={'./images/blue-2.jpg'} />
            </Flex>
          </GridItem>
        </Grid>
      </Container>

      <Grid templateColumns={{ lg: '1.3fr 1fr'}} gap={{ lg: '150px'}}>
        <GridItem>
          <PreLine
            p={{ base:'30px 23px', lg: '86px 40px 0 0', wide: '86px 0 0' }}
            maxW={{ lg: '505px' }}
            textStyle='body'
            color='white'
          >
            {`The Diggings has the most challenging access, but you’ll find wonderful waterholes along the river, some deep for a serious plunge, others shallow to suit small children. Give your kayak or fishing rod a workout. Kangaroos and wombats crop the grass in late afternoon.

              There are no marked bush tracks, but next morning walkers can have a happy time following the river. Crimson rosellas flit through the trees and, if you’re lucky, you might spot a platypus in the river. Fossick in the bush and you’ll see remnants of mining activity. `}
          </PreLine>
        </GridItem>

        <GridItem order={{lg:'-1'}} >
          <Figure>
            <Img
              ml={{wide: 'auto'}}
              dimension='940x1041'
              fit='cover'
              src={'./images/blue-3.jpg'}
            />
          </Figure>
        </GridItem>
      </Grid>
  </Box>
  )
}

// font styles
const texts = {
  preheading : {
    color: 'white',
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base: '26px', d: '47px'},
    lineHeight: {base: '26px', d: '50px'},
  },
  bigBody: {
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base: '21px', d: '22px'},
    lineHeight: {base: '28px', d: '30px'},
  },
  heading: {
    color: 'white',
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base: '62px', lg: '124px'},
    lineHeight: {base: '62px', lg: '124px'},
  }
}