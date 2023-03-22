import React, { useRef, useState, useEffect } from 'react'
import { Box, Text, Button, Link, Image, Grid, GridItem, AspectRatio } from '@chakra-ui/react'
import PreLine from 'components/util/PreLine'
import NineLink from 'components/util/NineLink'
import { mock } from 'utils/common'
import Container from 'components/util/Container'
import Img from 'components/util/Img'
import Figure from 'components/util/Figure'
// swiper
import { SwiperSlide } from 'swiper/react';
import Swiper from "swiper";
import { Navigation, Autoplay, Mousewheel, Controller } from "swiper";
//
import { motion } from "framer-motion";

export default function Hero() {
  const navigationPrevRef = React.useRef(null)
  const navigationNextRef = React.useRef(null)
  const slider1Ref = useRef(null);
  const slider2Ref = useRef(null);
  const [activeSlide, setActiveSlide] = useState(1)

  // initialize 2 sliders
  useEffect(() => {
    // Slider 1 options (cover)
    const slider1 = new Swiper(slider1Ref.current, {
      initialSlide: 3, // change to last slide because it opposite way
      slidePerView: -1, // set to negative to move invert
      speed: 1300,
      allowTouchMove: false,
      allowMouseTouch: false,
      modules: [Autoplay, Navigation, Mousewheel, Controller]
    });

    // Slider 2 options (middle box)
    const slider2 = new Swiper(slider2Ref.current, {
      // allowTouchMove: false,
      // allowMouseTouch: false,
      speed: 1300,
      modules: [Autoplay, Navigation, Mousewheel, Controller],
      navigation:{
        enabled: true,
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      },
      onBeforeInit:(swiper) => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      },
      on: {
        init: function(slider2) {
          // slider1.controller.control = slider2
        },
        slideChange: function(slide) {
          if(slide.previousIndex < slide.realIndex)  {
            slider1.slidePrev()
          } else {
            slider1.slideNext()
          }
          setActiveSlide(parseInt(slide.activeIndex) + 1)
        }
      }
    });

    return () => {
      slider1.destroy();
      slider2.destroy();
    };
  }, [])


  return (
    <Box pos='relative' >

      {/* cover */}
      <Box ref={slider1Ref} className="swiper-container slider1" h={'100vh'} overflow='hidden'>
        <Box className="swiper-wrapper">
          <SwiperSlide className='swiper-slide' >
            <Image fit='cover' h='full' w='full' src={'http://placekitten.com/640/360'} />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide' >
            <Image fit='cover' h='full' w='full' src={'http://placekitten.com/630/360'} />
          </SwiperSlide>
          <SwiperSlide className='swiper-slide' >
            <Image fit='cover' h='full' w='full' src={'http://placekitten.com/620/360'} />
          </SwiperSlide>
        </Box>
      </Box>

      {/* middle box */}
      <Box pos='absolute' inset='100px 0 0 0' >
        <Box ref={slider2Ref} pos='relative' className="swiper-container slider2" w={{base: '95%'}} mr={{base: 'auto'}}  overflow='hidden'>
          <Box className="swiper-wrapper">
            <SwiperSlide className='swiper-slide' >
              <Image fit='cover' w='full'  src={'./images/hero-a.jpg'} />
            </SwiperSlide>
            <SwiperSlide className='swiper-slide' >
              <Image fit='cover' w='full' src={'./images/hero-b.jpg'} />
            </SwiperSlide>
            <SwiperSlide className='swiper-slide' >
              <Image fit='cover' w='full' src={'./images/hero-c.jpg'} />
            </SwiperSlide>
          </Box>
        </Box>

        <Box pos='relative' zIndex={2} mt={{base: '-10px'}} px={{base: '20px'}}>
          <PreLine as='h1' mb={{base: '10px'}} {...texts.heading}>
            {`Trekking
            Hill End`}
          </PreLine>
          <Text {...texts.subtitle}>A 4x4 Adventure</Text>

          <Text pt={{base: '180px'}} {...texts.presented}>Presented by Ford Everest</Text>
        </Box>

        {/* arrows */}
        <AspectRatio ratio={{base: 359/287}} pos='absolute' inset='0 0 auto 0'>
          <Box className="arrow-holder" sx={{
            pos: 'absolute',
            inset: '0 0 0 0',
            display:'flex',
            gap: '50px',
            px: {base: '10px'},
            justifyContent: 'space-between!important',
            alignItems: 'center',
            'svg': {
              '&:hover': {
                cursor: 'pointer'
              }
            },
          }}>
            <Box pos="relative" zIndex={100} ref={navigationPrevRef} className="slider-container btn-prev">
              <svg id="ARROW_BACK" data-name="ARROW BACK" width="34" height="34" viewBox="0 0 34 34">
                <rect id="Rectangle_2075" data-name="Rectangle 2075" width="34" height="34" rx="3" fill="#00095b"/>
                <path id="arrow" d="M8.932.194h0a.661.661,0,0,1,0,.934L1.6,8.463h0L8.934,15.8a.661.661,0,0,1,0,.935l0,0a.661.661,0,0,1-.935,0l-7.8-7.8A.659.659,0,0,1,.194,8L8,.194a.661.661,0,0,1,.934,0" transform="translate(10.872 8.999)" fill="#fff"/>
              </svg>
            </Box>

            <Box pos="relative" zIndex={100} ref={navigationNextRef} className="slider-container btn-next">
              <svg width="34" height="34" viewBox="0 0 34 34">
                <g id="ARROW_FWD" data-name="ARROW FWD" transform="translate(-1822.753 -495.807)">
                  <rect id="Rectangle_2075" data-name="Rectangle 2075" width="34" height="34" rx="3" transform="translate(1822.753 495.807)" fill="#00095b"/>
                  <path id="arrow" d="M.2.194h0a.661.661,0,0,0,0,.934L7.529,8.463h0L.193,15.8a.661.661,0,0,0,0,.935l0,0a.661.661,0,0,0,.935,0l7.8-7.8a.659.659,0,0,0,0-.934l-7.8-7.8A.661.661,0,0,0,.2.194" transform="translate(1836.754 504.806)" fill="#fff"/>
                </g>
              </svg>
            </Box>
          </Box>
        </AspectRatio>
      </Box>

    </Box>
  )
}

// font styles
const texts = {
  heading: {
    color: 'white',
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base:'55px', sm: '62px'},
    lineHeight: {base: '55px', sm: '62px'},
  },
  subtitle: {
    color: 'white',
    fontFamily: 'heading',
    fontWeight: 'medium',
    fontSize: {base: '26px'},
    lineHeight: {base: '26px'},
  },
  presented: {
    color: 'white',
    fontFamily: 'heading',
    fontWeight: 'regular',
    fontSize: {base: '15px'},
    lineHeight: {base: '20px'},
  },
}

