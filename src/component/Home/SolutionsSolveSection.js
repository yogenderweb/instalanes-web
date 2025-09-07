"use client";
import React from 'react';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import HeadingH5 from '../common/HeadingTitle/HeadingH5';
import HeadingH3 from '../common/HeadingTitle/HeadingH3';

const SolutionsSolve = () => {
  return (
    <Box component="section" sx={{width: '100%', py: 5, backgroundColor: "#f4f4f4ff", }}>
        <Container maxWidth="lg">
            <Typography variant="h3" sx={{ mt: 0, mb: 2, fontSize: { xs: "20px", sm: "24px", md: "30px", }, fontWeight: "600", color: "#333",textAlign: "center", }}>Solutions that solve real industry problems</Typography>
            <Typography component="h5" sx={{ mb: 5, fontSize: '16px', fontWeight: "400", color: "#333", textAlign: 'center', }}>
                Instalanes digitizes your entire transportation process, solving real industry challenges
            </Typography>
        </Container>
        
        <Container
            maxWidth={false}
            sx={{ maxWidth: "1560px" }}
            >  
                <Swiper
                    modules={[Navigation, Pagination]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation={false}
                    pagination={false}
                    breakpoints={{
                        0: { slidesPerView: 1 },  
                        640: { slidesPerView: 2 },  
                        1024: { slidesPerView: 3 },
                    }}
                    >
                    <SwiperSlide>
                        <Box component="div" sx={{width: '100%', p: 2, border: '1px solid #eee', borderRadius: '6px', display: 'flex', gap: '15px',backgroundColor: "#ffffff", }}>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, sm: 6, md: 6, }}>
                                    <Typography component="h3" sx={{ mt: 2, mb: 2, fontSize: '20px', fontWeight: "600", color: "#333", }}>PoD, Billing</Typography>
                                    <Typography component="p"  sx={{mb: 0, fontSize: '15px', fontWeight: "400", color: "#333", }}>Simplify compliance and financial processes with automated documentation.</Typography> 
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 6, }}>
                                    <Image src={'/images/chat.png'} width={400} height={320}  style={{ width: "100%", height: "auto" }}  alt='Chat' />
                                </Grid>
                            </Grid>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component="div" sx={{width: '100%', p: 2, border: '1px solid #eee', borderRadius: '6px', display: 'flex', gap: '15px',backgroundColor: "#ffffff", }}>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, sm: 6, md: 6, }}>
                                    <Typography component="h3" sx={{ mt: 2, mb: 2, fontSize: '20px', fontWeight: "600", color: "#333", }}>Business Intelligence, Reporting</Typography>
                                    <Typography component="p"  sx={{mb: 0, fontSize: '15px', fontWeight: "400", color: "#333", }}>Transform data into actionable insights for smarter decisions.</Typography> 
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 6, }}>
                                    <Image src={'/images/chat.png'} width={400} height={320}  style={{ width: "100%", height: "auto" }}  alt='Chat' />
                                </Grid>
                            </Grid>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component="div" sx={{width: '100%', p: 2, border: '1px solid #eee', borderRadius: '6px', display: 'flex', gap: '15px',backgroundColor: "#ffffff", }}>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, sm: 6, md: 6, }}>
                                    <Typography component="h3" sx={{ mt: 2, mb: 2, fontSize: '20px', fontWeight: "600", color: "#333", }}>Rates and Carrier Selection</Typography>
                                    <Typography component="p"  sx={{mb: 0, fontSize: '15px', fontWeight: "400", color: "#333", }}>Simplify compliance and financial processes with automated documentation.</Typography> 
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 6, }}>
                                    <Image src={'/images/chat.png'} width={400} height={320}  style={{ width: "100%", height: "auto" }}  alt='Chat' />
                                </Grid>
                            </Grid>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Box component="div" sx={{width: '100%', p: 2, border: '1px solid #eee', borderRadius: '6px', display: 'flex', gap: '15px',backgroundColor: "#ffffff", }}>
                            <Grid container spacing={3}>
                                <Grid size={{ xs: 12, sm: 6, md: 6, }}>
                                    <Typography component="h3" sx={{ mt: 2, mb: 2, fontSize: '20px', fontWeight: "600", color: "#333", }}>Shipments and tracking</Typography>
                                    <Typography component="p"  sx={{mb: 0, fontSize: '15px', fontWeight: "400", color: "#333", }}>Gain end-to-end shipment visibility with real-time tracking and updates.</Typography> 
                                </Grid>
                                <Grid size={{ xs: 12, sm: 6, md: 6, }}>
                                    <Image src={'/images/chat.png'} width={400} height={320}  style={{ width: "100%", height: "auto" }}  alt='Chat' />
                                </Grid>
                            </Grid>
                        </Box>
                    </SwiperSlide>
                </Swiper>
      </Container>         
    </Box>
  
  )
}

export default SolutionsSolve;