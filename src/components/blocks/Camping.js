import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'

export default function Camping() {

  return (
    <Flex pos='relative' direction={{base:'column', sm:'column',lg:'row'}} justify='end'>

    <Img dimension='1760x791'  w={{base: 'full'}} fit='cover'  src={mock('1760x791', 'camping', 'red')}/>
      
    <Container pos={{base:'relative',wide:'absolute',md: 'absolute', lg: 'absolute'}}  zIndex='3' top='0' right='0'>
      <Text   maxW='460px' pl={{sm:'20px'}} pr={{sm:'32px'}} pb={{sm:'30px'}} w='full' pt={{base: '50px',wide:'160px',lg:'158px'}}   mr={{lg:'155px'}} {...texts.content} as='p' >
          Your reward is a long weekend or week-long 4WD family escape into rugged bushland where you’ll enjoy both the thrills of off-road driving and the peace of secluded campsites. Just when you’re feeling tired and dusty, you can cool off in a waterhole and watch as the sun sets through the riverside, she-oaks.
      </Text>
    </Container>

    </Flex>
  )
}

// font styles
const texts = {
  content: {
    color: {base: 'black', lg: 'white',md:'white'},
    fontFamily: 'heading',
    fontWeight: 'normal',
    fontSize: {base: '16px', sm: '21px', d: '16px'},
    lineHeight: {base: '28px', d: '29px'},
  },
}