import React from 'react'
import { Box, Text, Button, Link, Image, Grid, AspectRatio, GridItem, Flex, VStack } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'
import dynamic from 'next/dynamic'
const Jarallax = dynamic(() => import('../Jarallax'), { ssr: false });

export default function SecondIntro() {

  return (
    <Box pos='relative' zIndex={2} pt={{base: '100px'}} overflow={{base: 'hidden', lg: 'initial'}} mt={{lg: '-550px',  wide: '-700px', hd: '-850px'}}>
      <Grid templateColumns={{lg: '1fr 1fr', wide: '8fr 4fr'}} maxW='1604px' mx='auto' >
        <GridItem order={{lg: 1}}>
          <Box pos='relative' p={{base: '0 20px 26px'}} pl={{wide:0}} mt={{lg: '550px', d: '650px', wide: '750px', hd: '1000px'}}>
            {/* skid */}
            <Box pos='absolute' h={{base:'80px', d:'170px'}} inset={{base: '-130px -100% auto 0', lg:'-250px 0 auto 0', hd: '-350px -140px auto 0'}} bgImage='./bg/skid.png' bgRepeat={'no-repeat'} bgPosition='right bottom' bgSize={{base: 'cover', lg: '100%'}} />


            <PreLine data-scroll data-scroll-speed='1'  textStyle='body' maxW={{lg: '505px'}} ml={{wide: 'auto'}}>
              <Box as='span' display='block' w={{base:'30px', lg: '50px'}} bg='accent' h={{base: '3px', lg: '6px'}} mb='30px'></Box>

              {`It reminds you how lucky we are in Australia to have such landscapes so near our cities to feed our spirit of adventure. Pack everyone into a Ford Everest and set off on a 4WD exploration. Turon National Park has everything for a great family getaway: bushwalking, mountain biking, kayaking, fishing, swimming in waterholes.

              For 4WD enthusiasts, this is an outstanding destination. You don’t need to be geared up for an outback trek, but the terrain has plenty to challenge your driving skills, including river crossings, steep hills, and narrow tracks between entanglements of eucalyptus trees.`}
            </PreLine>
          </Box>
        </GridItem>

        <GridItem pr={{lg: '40px'}}>
          <VStack alignItems={'flex-end'} pr={{wide: '60px'}}>
            <AspectRatio w='full' ratio={949/1049} mb={{base: '5px', lg: '35px'}}>
              <Jarallax imgSize='cover' speed={1.06}>
                <Figure >
                  <Img className="jarallax-img" dimension='949x1049' w={{base:'full', lg: 'auto'}} fit='cover' src='./images/sintro-1.jpg' alt='man chilling next to his ford everest' />
                </Figure>
              </Jarallax>
            </AspectRatio>

            <AspectRatio w='full' ratio={868/481} mb={{base: '5px', lg: '35px'}}>
              <Jarallax imgSize='cover' speed={1.06}>
                <Img className="jarallax-img" dimension='868x481' w={{base:'full', lg: 'auto'}} fit='cover' src='./images/sintro-2.jpg' alt='man getting something out of his ford everest trunk' />
              </Jarallax>
            </AspectRatio>
          </VStack>
        </GridItem>
      </Grid>
    </Box>
  )
}