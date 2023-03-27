import React, { useState } from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex, AspectRatio,Center,
  //drawer
  useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody
} from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
import { useResponsive } from 'utils/common'
import { motion } from 'framer-motion'
import {animation_shaker} from 'utils/motion'

export default function FooterSlider() {
  const [car, setCar] = useState(1)

  const handleIncrement = () => {
    if (car === 10) {
      setCar(1);
    } else {
      setCar(car + 1);
    }
  }

  const handleDecrement = () => {
    if (car === 1) {
      setCar(10);
    } else {
      setCar(car - 1);
    }
  }

  return (
    <Container>
      <Flex pos='relative' justifyContent={{base: 'center', lg:'space-between'}} alignItems='center'>
        <Button onClick={handleDecrement} w={{base: '22px', lg: '34px'}} p='0' pos={{base: 'absolute', lg: 'relative'}} zIndex='3' left={{base:'-18px', md: 0}}
          sx={{
            'svg': {
              w: {base: '22px', md: '34px'}
            }
          }}
        >
          <svg id="ARROW_BACK" data-name="ARROW BACK" xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
            <rect id="Rectangle_2075" data-name="Rectangle 2075" width="34" height="34" rx="3" fill="#00095b"/>
            <path id="arrow" d="M8.932.194h0a.661.661,0,0,1,0,.934L1.6,8.463h0L8.934,15.8a.661.661,0,0,1,0,.935l0,0a.661.661,0,0,1-.935,0l-7.8-7.8A.659.659,0,0,1,.194,8L8,.194a.661.661,0,0,1,.934,0" transform="translate(10.872 8.999)" fill="#fff"/>
          </svg>
        </Button>

        <Car car={car} />

        <Button onClick={handleIncrement}  w={{base: '22px', lg: '34px'}} p='0' pos={{base: 'absolute', lg: 'relative'}} zIndex='3' right={{base: '-18px', md: 0}}
          sx={{
            'svg': {
              w: {base: '22px', md: '34px'}
            }
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34">
            <g id="ARROW_FWD" data-name="ARROW FWD" transform="translate(-1822.753 -495.807)">
              <rect id="Rectangle_2075" data-name="Rectangle 2075" width="34" height="34" rx="3" transform="translate(1822.753 495.807)" fill="#00095b"/>
              <path id="arrow" d="M.2.194h0a.661.661,0,0,0,0,.934L7.529,8.463h0L.193,15.8a.661.661,0,0,0,0,.935l0,0a.661.661,0,0,0,.935,0l7.8-7.8a.659.659,0,0,0,0-.934l-7.8-7.8A.661.661,0,0,0,.2.194" transform="translate(1836.754 504.806)" fill="#fff"/>
            </g>
          </svg>
        </Button>
      </Flex>
    </Container>
  )
}




/////////////////// CAR and buttons //////////////////////
const Car = ({car}) => {
  const isLg = useResponsive('up', 'lg')
  const { isOpen, onOpen, onClose } = useDisclosure()
  const withContent = [1,3,4,6,7,10]

  const carTexts = [
    {title: `Responsive
    V6 Engine`, content: 'that delivers power and torque for off-roading and towing.'},
    {title: '', content: ''},
    {title: `Spacious,
    well-crafted
    interior `, content: 'that ups refinement levels, because off-road driving shouldn’t mean sacrificing style and comfort.'},
    {title: `Nine
    Airbags `, content: 'for the protection of the driver and all passengers.'},
    {title: '', content: ''},
    {title: `Clear,
    responsive
    12-inch
    touchscreen `, content: 'with the latest communication and entertainment systems.'},
    {title: `Six drive
    modes `, content: 'including four off-road modes: Slippery, Mud/Ruts, Sand and Tow/Haul.'},
    {title: '', content: ''},
    {title: '', content: ''},
    {title: `ANCAP
    5 Star Safety
    Rating`, content: 'with safety features such as smart driver assistance technology, road-edge and blind-spot detection, and reverse break assist.'},
  ]

  const btnPosition = [
    {base: '14% 10px auto auto', wide: '22% -180px auto auto'}, {}, //1
    {base: '25% 25% auto auto', wide: '22% -150px auto auto'}, //3
    {base: '20% 20% auto auto', wide: '22% -40px auto auto'}, {}, //4
    {base: '20% 10px auto auto', wide: '30% -370px auto auto'},  //6
    {base: '20% auto auto 25%', wide: '15% auto auto 200px'}, {}, {}, //7
    {base: '8% 0px auto auto', wide: '22% -280px auto auto'} //10
  ]

  return (
    <Box pos='relative'>

      {/* modal button */}
      {withContent.includes(car) &&

          <Box
            onClick={onOpen}
            pos='absolute'
            zIndex={10}
            inset={{...btnPosition[car-1]}}
            borderRadius='9999px'
            p='5px 10px'
            _hover={{ cursor: 'pointer'}}
            sx={{
              display: 'flex',
              clipPath: 'polygon(0 0, 40px 0, 40px 100%, 0 100%)',
              '@media(min-width: 1600px)': {
                '@media(hover: hover)': {
                  '&:hover': {
                    bg:'primary',
                    color: 'white',
                    transition: 'all 0.4s ease',
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
                    cursor: 'pointer',

                    '.icon': {
                      opacity: '0',
                      m: 0
                    }
                  }
                }
              },

            }}
          >
            <Box mr='10px' as={motion.div} className='icon' variants={animation_shaker} whileInView='shake'>
              <svg width="24" height="24" viewBox="0 0 24 24">
                <g id="Group_6957" data-name="Group 6957" transform="translate(-1400 -6815.998)">
                  <circle id="Ellipse_27" data-name="Ellipse 27" cx="12" cy="12" r="12" transform="translate(1400 6815.998)" fill="#00095b"/>
                  <path id="Path_13979" data-name="Path 13979" d="M0,13.25A1.25,1.25,0,0,1-1.25,12V0A1.25,1.25,0,0,1,0-1.25,1.25,1.25,0,0,1,1.25,0V12A1.25,1.25,0,0,1,0,13.25Z" transform="translate(1418 6827.998) rotate(90)" fill="#fff"/>
                  <path id="Path_139788" data-name="Path 139788" d="M0,13.25A1.25,1.25,0,0,1-1.25,12V0A1.25,1.25,0,0,1,0-1.25,1.25,1.25,0,0,1,1.25,0V12A1.25,1.25,0,0,1,0,13.25Z" transform="translate(1412 6821.997)" fill="#fff"/>
                </g>
              </svg>
            </Box>


            <Text className='txt' gap='15px' as='span' display={{base: 'none', wide:'flex'}} textTransform={'uppercase'} fontSize='14px' lineHeight={'28px'} fontWeight='medium'>
              {carTexts[car-1].title}
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <g id="Group_6957" data-name="Group 6957" transform="translate(-1189 -6815.998)">
                  <circle id="Ellipse_27" data-name="Ellipse 27" cx="12" cy="12" r="12" transform="translate(1189 6815.998)" fill="#fff"/>
                  <path id="Path_139788" data-name="Path 139788" d="M0,13.25A1.25,1.25,0,0,1-1.25,12V0A1.25,1.25,0,0,1,0-1.25,1.25,1.25,0,0,1,1.25,0V12A1.25,1.25,0,0,1,0,13.25Z" transform="translate(1207 6827.997) rotate(90)" fill="#00095b"/>
                </g>
              </svg>
            </Text>

          </Box>
      }

      <AspectRatio mx='auto' minW={{base: '90vw', md: '636px'}} ratio={636/390}>
        <>
          {car === 1 &&
            <Box>
              <Img dimension='69x69' w='69px' h='69px' src='./images/360.png' draggable='false' opacity='.75' zIndex={10} pos='relative' />
            </Box>
          }

          <Img w='full' h='full' fit='contain!important' dimension='663x390' src={`./images/slider/${car}.png`} draggable='false' />

        </>
      </AspectRatio>



      <Drawer onClose={onClose} isOpen={isOpen} size='xl' placement={isLg ? 'right' : 'bottom'}>
        <DrawerOverlay bg='rgba(255,255,255,0.7)' backdropFilter={'blur(5px)'}/>

        <DrawerContent
          bgColor='transparent'
          boxShadow='none'
          bgImage={{base:'./bg/drawer-bg-mob.png', lg:'./bg/drawer-bg.png'}}
          bgSize='cover'
          bgRepeat='no-repeat'
          justifyContent={'flex-end'}
          top={{base: '15%!important', lg: '0!important'}}
        >
          <DrawerBody
            display='flex'
            alignItems={{base: 'flex-start', lg:'center'}}
            justifyContent={'center'}
            maxW={{base: '100%',lg: '60%'}}
            ml='auto'
            color='white'
            w={{base: '100%', lg: '60%'}}
          >
            <Box pt={{base: '150px', md: '200px', lg: 0}} pr={{lg: '75px'}}>
              <Flex mb='80px' pos='relative' right={{base: 0, lg:'-50px'}}>
                <Button onClick={onClose} aria-label='close modal' ml='auto' transform={{base: 'scale(1.5)'}}>
                  <svg width="33.941" height="33.941" viewBox="0 0 33.941 33.941">
                    <g id="X" transform="translate(-1795.03 -9942.032)">
                      <g id="Ellipse_27" data-name="Ellipse 27" transform="translate(1812 9975.974) rotate(-135)" fill="none" stroke="#fff" stroke-width="1">
                        <circle cx="12" cy="12" r="12" stroke="none"/>
                        <circle cx="12" cy="12" r="11.5" fill="none"/>
                      </g>
                      <path id="Path_13979" data-name="Path 13979" d="M0,13.25A1.25,1.25,0,0,1-1.25,12V0A1.25,1.25,0,0,1,0-1.25,1.25,1.25,0,0,1,1.25,0V12A1.25,1.25,0,0,1,0,13.25Z" transform="translate(1807.758 9954.761) rotate(-45)" fill="#fff"/>
                      <path id="Path_139788" data-name="Path 139788" d="M0,13.25A1.25,1.25,0,0,1-1.25,12V0A1.25,1.25,0,0,1,0-1.25,1.25,1.25,0,0,1,1.25,0V12A1.25,1.25,0,0,1,0,13.25Z" transform="translate(1807.757 9963.247) rotate(-135)" fill="#fff"/>
                    </g>
                  </svg>
                </Button>
              </Flex>

              <PreLine as='h3' mb={{base: '30px'}} {...texts.title}>
                {carTexts[car-1].title}
              </PreLine>

              <Text maxW='409px' {...texts.content}>
                {carTexts[car-1].content}
              </Text>

              <Button variant='round' mt='10px' border='1px solid white'>Find out more</Button>
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  )
}


const texts = {
  title: {
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base: '47px', d: '92px'},
    lineHeight: {base: '55px', d: '92px'},
  },
  content: {
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base: '20px', d: '22px'},
    lineHeight: {base: '30px', d: '30px'},
  },
}