import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, AspectRatio, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'
import dynamic from 'next/dynamic'
const Jarallax = dynamic(() => import('../Jarallax'), { ssr: false });

export default function Blue() {

  return (
    <Box mt={{base: '80px', md: '140px', lg: 0}} bg='primary' pos='relative' {...texture.mask}>
      <Container pt={{ lg: '40px'}} pos='relative' zIndex='30'>
        <Grid pt={{hd: '60px'}} gap={{lg: '60px', wide: '115px'}} templateColumns={{ lg: '1.5fr 1fr' }} >
          <GridItem pt={{base:'56px',}} px={{base: '23px', d: 0}}>
            <Box pl={{wide:'100px'}} data-scroll data-scroll-speed='1' >
              <Text {...texts.preheading} mb={{base: '5px!important', lg: '10px!important'}}> The best of the </Text>
              <PreLine {...texts.heading}>
                {`Central
                West`}
              </PreLine>

              {/* Line */}
              <Box w={{base:'30px', lg: '50px'}} bg='accent' h={{base: '3px', lg: '6px'}} mt='30px' mb='55px' />

              <Text maxW={{lg: '515px'}} color='white' {...texts.bigBody}>
                Start at Capertree beyond Lithgow, where you hit the beginning of your 4WD adventure as gravel takes over tarmac at Turon Gates Road.
              </Text>
              <Text maxW={{lg: '515px'}} mb={{lg: '30px', d: '60px', wide: 0}} color='white' textStyle='body'>
                A slight reduction in tyre pressure should set you up for steep sections of track now you’re in Turon National Park. The track wiggles along a ridge through scribbly gums, before descending steeply towards the river on a few excitingly sharp bends. You don’t have too far to go to set up camp at either Woolshed Flat or The Diggings.
              </Text>
            </Box>
          </GridItem>

          <GridItem>
            <Flex pt={{base:'38px', md:'58px'}} mr={{wide:'-140px'}} direction='column' gap={{base:'6px', wide: '29px'}}>
              <AspectRatio w='full' ratio={709/479}>
                <Jarallax imgSize='cover' speed={1.06}>
                  <Figure >
                    <Img className="jarallax-img" dimension='709x479' w={{base: 'full'}} fit='cover' src={'./images/blue-1.jpg'} />
                  </Figure>
                </Jarallax>
              </AspectRatio>

              <AspectRatio w='full' ratio={709/574}>
                <Jarallax imgSize='cover' speed={1.06}>
                  <Figure >
                  <Img className="jarallax-img" dimension='709x574' w={{base: 'full'}} fit='cover' src={'./images/blue-2.jpg'} />
                  </Figure>
                </Jarallax>
              </AspectRatio>

            </Flex>
          </GridItem>
        </Grid>
      </Container>

      <Grid templateColumns={{ lg: '1.3fr 1fr'}} gap={{ lg: '150px'}}>
        <GridItem {...texture.tire} pos='relative'>
          <PreLine
            pos='relative'
            zIndex='40'
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
          <Figure pos='relative' zIndex='35' mt={{wide: '-140px',}} data-scroll data-scroll-speed='-0.5' data-scroll-direction='horizontal' >

            <Img
              pos='relative'
              zIndex='50'
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

const texture = {
  mask: {
    sx: {
      '&:before': {
        content: '""',
        pos: 'absolute',
        left: '0',
        bottom: '0',
        top: '0',
        w: 'full',
        zIndex: '20',
        bgSize: {base: '100%'},
        bgRepeat: 'no-repeat',
        bgImage: {base: './bg/blue.png', lg: './bg/blue-d.png'},
        top: { base: '-4%', md: '-6%', lg: '-10%'},
      },
    }
  },
  tire: {
    sx:{
      '&:after': {
        content: '""',
        pos: 'absolute',
        left: { base: '0', lg: '-30%' },

        bottom: '0',
        w: {base: 'full', lg: '150%'},
        zIndex: '30',
        bgRepeat: 'repeat-x',
        bgImage: './bg/blue-tire.png',
        h: {base: '50%'}
      }
    }
  }
}