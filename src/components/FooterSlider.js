import React, { useState } from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, Flex, AspectRatio,
  //drawer
  useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerBody
} from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'

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

  return (
    <Box pos='relative'>

      <Button onClick={withContent.includes(car) ? onOpen : null}>
        <svg width="32" height="32" viewBox="0 0 32 32">
          <defs>
            <clipPath id="clip-path">
              <rect id="mask" width="32" height="32" rx="16" transform="translate(1396 6811.999)" fill="#fff" stroke="#b5b2a5" stroke-width="1"/>
            </clipPath>
          </defs>
          <g id="V6_ENGINE" data-name="V6 ENGINE" transform="translate(1428 6843.999) rotate(180)">
            <g id="Mask_Group_63" data-name="Mask Group 63" clip-path="url(#clip-path)">
              <rect id="white_circl" data-name="white circl" width="196" height="32" rx="16" transform="translate(1232 6812)" fill="#fff"/>
              <text id="RESPONSIVE_V6_ENGINE" data-name="RESPONSIVE V6 ENGINE" transform="translate(1298 6823) rotate(-180)" fill="#fff" font-size="14" font-family="FordAntenna-Medium, Ford Antenna" font-weight="500" opacity="0.996"><tspan x="-89.95" y="0">RESPONSIVE V6 ENGINE</tspan></text>
              <circle id="Ellipse_27" data-name="Ellipse 27" cx="12" cy="12" r="12" transform="translate(1400 6815.999)" fill="#00095b"/>
              <path id="Path_13979" data-name="Path 13979" d="M0,13.25A1.25,1.25,0,0,1-1.25,12V0A1.25,1.25,0,0,1,0-1.25,1.25,1.25,0,0,1,1.25,0V12A1.25,1.25,0,0,1,0,13.25Z" transform="translate(1418 6827.999) rotate(90)" fill="#fff"/>
              <path id="Path_139788" data-name="Path 139788" d="M0,13.25A1.25,1.25,0,0,1-1.25,12V0A1.25,1.25,0,0,1,0-1.25,1.25,1.25,0,0,1,1.25,0V12A1.25,1.25,0,0,1,0,13.25Z" transform="translate(1412 6821.998)" fill="#fff"/>
            </g>
          </g>
        </svg>
      </Button>

      <AspectRatio mx='auto' minW={{base: '90vw', md: '636px'}} ratio={636/390}>
        <>
          {car}
          <Img w='full' h='full' fit='contain!important' dimension='663x390' src={`./images/slider/${car}.png`} />
        </>
      </AspectRatio>



      <Drawer onClose={onClose} isOpen={isOpen} size='xl' >
        <DrawerOverlay bg='rgba(255,255,255,0.7)' backdropFilter={'blur(5px)'}/>

        <DrawerContent
          bgColor='transparent'
          boxShadow='none'
          bgImage={'./bg/drawer-bg.png'}
          bgSize='cover'
          bgRepeat='no-repeat'
          justifyContent={'flex-end'}
        >
          <DrawerBody
            display='flex'
            alignItems={'center'}
            maxW='60%'
            ml='auto'
            color='white'
          >
            <Box pr={{lg: '75px'}}>
              <Flex mb='80px' pos='relative' right='-50px'>
                <Button onClick={onClose} aria-label='close modal' ml='auto'>
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

              <Button>Find out more</Button>
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