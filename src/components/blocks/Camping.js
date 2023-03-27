import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex, AspectRatio } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'
import dynamic from 'next/dynamic'
const Jarallax = dynamic(() => import('../Jarallax'), { ssr: false });

export default function Camping() {

  return (
    <Flex pos='relative' zIndex={4} direction={{base:'column', lg:'row'}} justify='end'>

          <Img  dimension='1760x791'  w={{base: 'full'}} fit='cover' src='./images/camping.jpg' />

      <Container pos={{base:'relative', lg: 'absolute'}}  zIndex='3' top='0' right='0'>
        <Text
          color={{base: 'black', lg: 'white'}}
          textStyle='body'
          maxW={{md: '440px'}}
          w='full'
          p={{ base: '50px 32px 50px 20px', md: '50px 0 50px' }}
          pt={{base: '50px', lg:'158px', wide:'160px'}}
          mr={{lg: '50px', d:'155px'}}
          data-scroll
          data-scroll-speed='0.5'
          data-scroll-direction='horizontal'
        >
            Your reward is a long weekend or week-long 4WD family escape into rugged bushland where you’ll enjoy both the thrills of off-road driving and the peace of secluded campsites. Just when you’re feeling tired and dusty, you can cool off in a waterhole and watch as the sun sets through the riverside, she-oaks.
        </Text>
      </Container>

    </Flex>
  )
}

