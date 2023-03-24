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
        <Grid gap={{lg: '150px'}} templateColumns={{wide:'6fr 6fr', lg:'7fr 5fr',d: '7fr 5fr', md:'6fr 6fr'}} >

           
            <GridItem  pt={{base:'56px'}} pl={{base:'23px'}} pr={{base:'23px'}} >
             
                <Text {...texts.heading} >
                  The best of the
                </Text >
                <Text  {...texts.heading} lineHeight={{sm: '62px',wide:'124px'}} fontSize={{base:'62px', wide:'124px'}}>
                  Central West
                </Text>
                
                <Box w='31px' bg='accent' h='3px' mt='30px' mb='55px'></Box>
                
                <Text maxW='514px' {...texts.content} fontSize='22px'>
                  Start at Capertree beyond Lithgow, where you hit the beginning of your 4WD adventure as gravel takes over tarmac at Turon Gates Road.
                </Text>
                <Text maxW='514px'  {...texts.content}>
                  A slight reduction in tyre pressure should set you up for steep sections of track now you’re in Turon National Park. The track wiggles along a ridge through scribbly gums, before descending steeply towards the river on a few excitingly sharp bends. You don’t have too far to go to set up camp at either Woolshed Flat or The Diggings.
                </Text>
              
              
            </GridItem>
          
            <GridItem>
              <Flex pt={{base:'38px', md:'58px'}} mr={{wide:'-140px'}} direction='column' gap={{base:'6px', wide: '29px'}}>
                  <Img  dimension='709x479'  w={{base: 'full'}} fit='cover'   src={mock('709x479', 'blue-1', 'red')} />
                  <Img  dimension='709x574'  w={{base: 'full'}} fit='cover'   src={mock('709x574', 'blue-2', 'blue')} />
              </Flex>
          </GridItem>
        </Grid>
      </Container>
    
    <Grid templateColumns={{wide:'6fr 6fr' ,lg:'5fr 7fr',md: '5fr 7fr'}} >     
          
            <Container>
              <GridItem >
                <PreLine  mr={{lg:'300px' ,md: '40px' }} p={{base:'30px 23px '}}   {...texts.content} 
                 maxW='504px' children={
                  `The Diggings has the most challenging access, but you’ll find wonderful waterholes along the river, some deep for a serious plunge, others shallow to suit small children. Give your kayak or fishing rod a workout. Kangaroos and wombats crop the grass in late afternoon.

                  There are no marked bush tracks, but next morning walkers can have a happy time following the river. Crimson rosellas flit through the trees and, if you’re lucky, you might spot a platypus in the river. Fossick in the bush and you’ll see remnants of mining activity. `
                }/>
              </GridItem>
            </Container>

          
          <GridItem  order={{md:'-1'}} >
            <Img ml={{wide:'-220px'}} dimension='940x650' w={{base: 'full'}} 
              fit='cover'   src={mock('940x650', 'travel', 'blue')} 
            />
          </GridItem>
    </Grid>
   
  </Box>
  )
}

// font styles
const texts = {
  content: {
    color: 'white',
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base: '16px', sm: '17px', d: '16px'},
    lineHeight: {base: '28px', d: '50px'},
  },
  heading : {
    color: 'white',
    fontFamily: 'heading',
    fontWeight: 'normal',
    fontSize: {base: '26px', sm: '26px', d: '47px'},
    lineHeight: {base: '26px', d: '50px'},
  }
}