import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'

export default function Drive() {

  return (
    <Container pb={{base: '6px',wide: '60px',lg:'60px'}}>
      <Grid gap='52px' templateColumns={{wide: '5fr 7fr', lg: '6fr 6fr', md:'6fr 6fr'}}>
        
          <GridItem pl='20px' >
            <Box w='31px' bg='primary' h='3px'></Box>
            <Text as='p' pt='25px' fontSize='21px' pr='60px' color='blue'  maxW={{lg:'506px'}}>
                The Ford Everest, largely developed and tested in Australia and with plenty of engine grunt, is up to the challenge of the bush conditions.
            </Text>
            <Text {...texts.content} pr='24px' as='p' fontSize='17px' maxW={{lg:'550px'}}>
              Although you’ll need reasonable experience, a dedicated off-road screen on your Ford Everest’s dash can assist with information about your driveline settings and the vehicle’s pitch and roll, while a camera provides a view of the terrain ahead.
            </Text>
          </GridItem>
        
        <GridItem>
          <Grid  gap={{sm:'6px'}}    templateColumns={{wide:'8fr 4fr',lg: '8fr 3fr',md: '9fr 2fr'}}>
            
            <Img  dimension='800x452' w={{base: 'full'}} fit='cover'   src={mock('800x452', 'drive-1', 'blue')} />
            <Img dimension='917x515' w={{base: 'full'}} fit='cover'  src={mock('917x515', 'drive-2', 'red')}/>

          </Grid>
        </GridItem>
      </Grid>
    </Container>
    // <Flex h={{base:'full', lg: '1260px'}} justifyContent='center' align='end' pb={{base:'0px',sm:'0px',lg:'90px'}}  direction={{base: 'column', sm: 'column', lg: 'row'}} gap={{base: '51px', lg:'107px'}}>
    //   <Box p={{base: '21px 19px 0px 21px'}} >
    //     <Img dimension='56x6' src='/Images/line-blue.png' pb='25px'/>

    //     

    //     
    //   </Box>

    //     <Flex gap={{base: '6px', sm: '6px', lg:'10px'}} fontSize='17px' maxH='538px' h='full' direction={{base: 'column', sm: 'column', lg: 'row'}}>
    //       
    //          
    //     </Flex>
    // </Flex>
    
      

    
      
    
    
  )
}

// font styles
const texts = {
  content: {
    color: 'black',
    fontFamily: 'heading',
    fontWeight: 'normal',
    fontSize: {base: '17px', d: '22px'},
    lineHeight: {base: '30px', d: '28px'},
  },
}