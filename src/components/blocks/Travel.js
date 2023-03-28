import React from 'react'
import { Box, Text, Button, Link, Image, Grid, AspectRatio, GridItem, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'
import dynamic from 'next/dynamic'
const Jarallax = dynamic(() => import('../Jarallax'), { ssr: false });

export default function Travel() {

  return (
    <Box pos='relative' {...texture.mask}>
     <Container pt={{ lg:'220px', d:'150px', wide:'230px', hd: '270px' }} pos='relative' zIndex='70'>
        <Grid templateColumns={{lg: '1.5fr 1fr'}} gap={{wide:'100px'}}>
          <GridItem p={{base:'30px 20px 50px', lg:'0px 20px'}} pos='relative' top={{ wide: '-70px' }}  data-scroll data-scroll-speed='1'>
            {/* Line */}
            <Box w={{base:'30px', lg: '50px'}} bg='accent' h={{base: '3px', lg: '6px'}} mt='30px' mb='25px'></Box>

            <Text maxW='500px' {...texts.heading} >
            A sealed road gives you a gentle start through rolling, cattle-chewed farm country, but soon dissolves to dirt and dust.
            </Text>
            <PreLine color='black' textStyle='body' maxW={{d: '505px'}}>
              { `Test your skills on ascents and descents – occasionally in reverse should you encounter an oncoming vehicle.

              While you could charge along the Bridle Track’s length, why would you? A choice of ten bush camps along the way ensure you won’t have to rush it, and you’ll find ample opportunities to explore, fish and swim.`
              }
            </PreLine>
          </GridItem>

          <GridItem>
            <Flex mr={{wide:'-140px'}} direction='column' gap={{base:'6px', wide: '29px'}}>
                  <Img  dimension='709x479' w={{base: 'full'}} fit='cover' src={'./images/travel-1.jpg'} />

                  <Img  dimension='709x574' w={{base: 'full'}} fit='cover' src={'./images/travel-2.jpg'} />
            </Flex>
          </GridItem>
        </Grid>
     </Container>
    </Box>
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
        zIndex: '60',
        bgSize: {base: '100% 50%', lg: '100%'},
        bgRepeat: 'no-repeat',
        bgImage: { base: './bg/travel-mob.png', lg: './bg/travel.png' },
        top: { base: '-7%', d: '-17%', hd: '-20%'},
      },
    }
  },
}