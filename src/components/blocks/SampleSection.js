import React from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import { mock } from 'utils/common'
import Container from '../util/Container'
import Img from '../util/Img'
import Figure from 'components/util/Figure'

export default function SampleSection() {

  return (
    <Box className='intro' pos='relative'>
      <Container>
        <Grid templateColumns={{lg: '6fr 6fr', wide: '8fr 4fr'}}>
          <Box pos='relative' >
            <Box pos='relative' zIndex='10' p={{base: '25% 20px 55px'}}>
              <Text as='h2' {...texts.heading} mb='60px'>Sample heading here </Text>
              <Text {...texts.content}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique soluta necessitatibus eos eius veritatis molestias esse ratione. Libero, sequi provident! Dignissimos ut, eligendi culpa molestiae fugiat quidem beatae minima consectetur consequuntur, ipsum iste laboriosam praesentium sint dolore voluptate temporibus! Eaque aspernatur, officiis cum unde rerum magni suscipit adipisci cumque pariatur!</Text>
            </Box>
          </Box>

          <Box>
            <Figure>
              <Img dimension='709x479' w={{base: 'full'}} fit='cover' alt='sample alt' src={mock('709x479', 'sample img', 'blue')} />
            </Figure>

            <Figure>
              <Img dimension='709x574' w={{base: 'full'}} fit='cover' alt='another image' src={mock('709x574', 'another img', 'green')} />
            </Figure>
          </Box>
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
    fontSize: {base: '18px', sm: '21px', d: '40px'},
    lineHeight: {base: '28px', d: '50px'},
  },
  content: {
    fontFamily: 'body',
    fontWeight: 'medium',
    color: 'black',
    fontSize: {base: '17px', lg: '16px'},
    lineHeight: {base: '30px', lg: '29px'}
  }
}