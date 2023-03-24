import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'

export default function Travel() {

  return (

     <Container pt={{wide:'270px', lg:'220px'}}>
        <Grid templateColumns={{lg: '1.5fr 1fr'}} gap={{wide:'100px'}}>
          <GridItem p={{base:'50px 20px', wide:'0px 20px', lg:'0px 20px'}}>
            {/* Line */}
            <Box w={{base:'30px', lg: '50px'}} bg='accent' h={{base: '3px', lg: '6px'}} mt='30px' mb='25px'></Box>

            <Text maxW='500px' {...texts.heading} >
              The main 4WD track also follows the river, crossing back and forwards for some dramatic splashes.
            </Text>
            <PreLine color='black' textStyle='body' maxW={{d: '505px'}} children={
              `Minor tracks branch off, although they’re best avoided after heavy rain. You’ll come across ruined buildings such as the corrugated-iron River Ron’s Hut, and the remains of water races built by early Chinese immigrants.

              The steepest 4WD track takes you up Pinnacle Rock, an outcrop of sandstone. Fortunately, the Ford Everest’s sturdy chassis, wider track and suspension tuning offers a balanced performance whether you’re on a highway or on the roughest track.`
            }/>
          </GridItem>

          <GridItem>
            <Flex mr={{wide:'-140px'}} direction='column' gap={{base:'6px', wide: '29px'}}>
              <Img dimension='709x479' w={{base: 'full'}} fit='cover' src={'./images/travel-1.jpg'} />
              <Img dimension='709x574' w={{base: 'full'}} fit='cover' src={'./images/travel-2.jpg'} />
            </Flex>
          </GridItem>
        </Grid>
     </Container>

  )
}

// font styles
const texts = {
  heading: {
    color: 'primary',
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base: '22px'},
    lineHeight: {base: '30px'},
  },
}