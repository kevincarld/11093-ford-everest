import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'

export default function Video() {

  return (
    <Container>
      <Grid templateColumns={{wide:'6fr 6fr', d:'6fr 6fr', lg: '6fr 6fr',md:'6fr 6fr'}} gap={{wide:'152px', lg: '120px'}}>
        <GridItem p={{base:'25px 24px 30px 20px', md: '0px 20px'}}>
          <Box w='31px' bg='accent' h='3px' mt='30px' mb='55px'></Box>
          <PreLine maxW='505px' children={
            `Another great way to spend a day is on a three-or-four-hour drive to Sofala, which is still on the Turon River. You’ll meander across private properties where cows and horses play. Then low ranges take over where you can test your skills on steep ascents and descents – occasionally in reverse should you encounter an oncoming vehicle on the narrow tracks.

            19th century gold mining town Sofala is a quaint place for a leg-stretch, and has an old pub and several cafés that offer a break from the campfire, plus a playground where the kids can run off some energy.
            
            Bitumen leads on to Hill End, but it’s winding and scenic bitumen, and worth the drive to see this second gold-rush town. Check out its story at the Hill End Heritage Centre and inspect the town’s many fine colonial-era facades.
            
            You can camp at Glendora campground or in one of Hill End’s surrounding bush-camping sites. Next day you can test the Ford Everest’s toughness and performance all over again in this region where family adventure awaits.
            `
          }/>
        </GridItem>
        <GridItem order={{wide: '-1' ,lg: '-1', d: '-1' ,md:'-1'}}>
            <Img  dimension='948x968' mt={{wide:'-530px', lg: '-180px'}}  w={{base: 'full'}}
            fit='cover'   src={mock('948x968', 'video', 'green')} />
        </GridItem>
      </Grid>
    </Container>
   
  )
}

// font styles
const texts = {

}