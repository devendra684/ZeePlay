import React from 'react';
import { NavLink } from "react-router-dom";
import { RiVipCrownFill } from "react-icons/ri";

import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Icon,
  Container,
  Button,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = React.useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // This list contains all the data for carousels
  // This can be static or loaded from a server
  const cards = [
    {
      title: 'Har Har Manadav',
    //   text:
        // "",
      image:
        'https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-0-1z5264082/app_cover/1440x8109a1f1b76b86749d68affac9a166ce03e.jpg',
    },
    {
      title: 'Blurr',
    //   text:
        // "",
      image:
        'https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-0-1z5259649/app_cover/blurrcarousalposterp1ag1440x810withreview1612202233edaa2a64a8415daec908ba0f21fd8a.jpg',
    },
    {
      title: 'Country Mafia',
    //   text:
    //     "",
      image:
        'https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-6-4z5246228/cover/1920x7702c9b1a467ac54bb88d1d10ea40cde7c6fe2aceea54f149968b56565141ff844f.jpg',
    },
    {
        title: 'Chup: Revenge the Artist',
      //   text:
      //     "",
        image:
          'https://akamaividz2.zee5.com/image/upload/w_1013,h_405,c_scale,f_webp,q_auto:eco/resources/0-0-1z5254708/cover/1920x77088754fa6d1384d259444f7d1d4b00a33.jpg',
      },
      {
        title: 'Khumkum Bhagya',
      //   text:
      //     "",
        image:
          'https://akamaividz2.zee5.com/image/upload/w_899,h_506,c_scale,f_webp,q_auto:eco/resources/0-6-127/app_cover/1440x810c832d8e7eab44467a279d4b576743600.jpg',
      },



    
  ];

  return (
    <Box
      position={'relative'}
      height={'auto'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'440px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>
            {/* This is the block you need to change, to customize the caption */}
            <Container 
            height="100px" 
            textAlign= "center"
            position="absolute"
            bottom= "78px"
            left="50px"
            // border= "1px solid black"
            >
              <Stack
                spacing={6}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading 
                // fontSize={{ base: '3xl', md: '4xl', lg: '5xl' } }
                color="white"
                fontSize= "38px"
                width="1000px"
                // border= "1px solid blue"
                textAlign= "left"
                >
                  {card.title}
                </Heading>
                {/* <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.text}
                </Text> */}
              </Stack>
              
              <Box 
                // border= "1px solid red"
                position="absolute"
                bottom= "-38px"
                left="16px"
                >
              <Button
                _hover={{ background: "#e7e7e7"}}
                border= "1px solid #3498db"
                backgroundColor= "transparent"
                color= "#3498db"
                >
                ▶ Watch
                </Button>
              <Button
                marginLeft="15px"
                fontSize={12}
                colorScheme="purple"
                _hover={{ background: "#8230E9", color: "white" }}
                leftIcon={<Icon as={RiVipCrownFill} width="18px" height="18px" />}
              >
                <NavLink to={"/Payment"}>
                BUY PLAN</NavLink>

              </Button>
               </Box>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}