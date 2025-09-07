"use client";
import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import HeadingH5 from '../common/HeadingTitle/HeadingH5';
import HeadingH3 from '../common/HeadingTitle/HeadingH3';
import { Padding } from '@mui/icons-material';

const Testimonials = () => {
  const testimonialsList = [
    {
      clientPick: '',
      clientname: 'John Doe ',
      description:
        "It's amazing to see how fast Instalanes platform can be set up. Yes, we set it up not in months, weeks but in just 1 day — no kidding, it's a breakthrough!",
      designation: 'Logistics Director at Havells',
    },
    {
      clientPick: '',
      clientname: 'John Doe ',
      description:
        "With Instalanes platform, we spend less time managing our transportation and delivers more value to our customers",
      designation: 'Logistics Director at Havells',
    },
    {
      clientPick: '',
      clientname: 'John Doe ',
      description:
        "It's amazing to see how fast Instalanes platform can be set up. Yes, we set it up not in months, weeks but in just 1 day — no kidding, it's a breakthrough!",
      designation: 'Logistics Director at Havells',
    },
    {
      clientPick: '',
      clientname: 'John Doe ',
      description:
        "It's amazing to see how fast Instalanes platform can be set up. Yes, we set it up not in months, weeks but in just 1 day — no kidding, it's a breakthrough!",
      designation: 'Logistics Director at Havells',
    },
    {
      clientPick: '',
      clientname: 'John Doe ',
      description:
        "It's amazing to see how fast Instalanes platform can be set up. Yes, we set it up not in months, weeks but in just 1 day — no kidding, it's a breakthrough!",
      designation: 'Logistics Director at Havells',
    },
  ]
  return (
    <Box component="section" sx={{ width: '100%', mt: 4, py: 5, }} className='testimonial'>
      <Container maxWidth="lg">
        <HeadingH5 SmallTitle={'Testimonials'} />
        <HeadingH3 Title={'What our Customer says'} />


        <Box component='div' sx={{ px: 2, }}>
          <Swiper
            sx={{padding: '10px',}}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={28}
            slidesPerView={2}
            navigation={false}
            pagination={{ clickable: true }}
            autoplay={{
                delay: 5000,
                    disableOnInteraction: true, 
                }}
            speed={1000}
            breakpoints={{
              0: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2 },
            }}
          >
            {testimonialsList.map((item, index) => (
              <SwiperSlide>
                <Box component="div"
                  sx={{
                      width: '100%',
                      p: 3,
                      borderRadius: '12px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      gap: 2,
                      backgroundColor: '#fff',
                      textAlign: 'center',
                      boxShadow: '0px 1px 10px 0px rgba(0, 0, 0, 8%)',
                    }}>
                  <Typography component="span" sx={{ mb: 1, fontSize: '18px', width: '50px', height: '50px', borderRadius: '50%', background: '#f5f5f5', textAlign: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', }}>
                    <PersonIcon sx={{ fontSize: '25px' }} />
                  </Typography>
                  <Typography component="p" sx={{ mb: 1, fontSize: '14px', fontWeight: "400", color: "#333", textAlign: 'center', }}>
                    {item.description}
                  </Typography>

                  <Typography component="h5" sx={{ mb: 0, marginBottom: '-12px', fontSize: '16px', fontWeight: "400", color: "#242424ff", textAlign: 'center', }}>
                    {item.clientname}
                  </Typography>
                  <Typography component="h6" sx={{ mt: 0, mb: 2, fontSize: '14px', fontWeight: "400", color: "#8d8d8dff", textAlign: 'center', }}>
                    {item.designation}
                  </Typography>
                </Box>
              </SwiperSlide>
            ))}

          </Swiper>
        </Box>

      </Container>
    </Box>
  )
}

export default Testimonials;