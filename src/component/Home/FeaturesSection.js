"use client";
import React from 'react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import MobileScreenShareIcon from '@mui/icons-material/MobileScreenShare';
import AssignmentIcon from '@mui/icons-material/Assignment';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ControlCameraIcon from '@mui/icons-material/ControlCamera';
import RepartitionIcon from '@mui/icons-material/Repartition';
import WebhookIcon from '@mui/icons-material/Webhook';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
import { IconButton } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const FeaturesSection = () => {

    const featureList = [
        {
            title: "Mobile driven",
            peraText: "Run logistics anytime, anywhere effortlessly",
            icon: <><MobileScreenShareIcon sx={{fontSize: '30px'}} /></>,
        },
        {
            title: "Instant PoD & Invoicing",
            peraText: "Fast proof of delivery and billing",
            icon: <><AssignmentIcon sx={{fontSize: '30px'}} /></>,
        },
        {
            title: "Smart notifications",
            peraText: "Stay ahead with timely updates and alerts",
            icon: <><NotificationsActiveIcon sx={{fontSize: '30px'}} /></>,
        },
        {
            title: "Control tower view",
            peraText: "Full operational visibility in one place",
            icon: <><ControlCameraIcon sx={{fontSize: '30px'}} /></>,
        },
        {
            title: "Next action ready",
            peraText: "Your next action is visibile and a click away",
            icon: <><MobileScreenShareIcon sx={{fontSize: '30px'}} /></>,
        },
        {
            title: "Centralized documentation",
            peraText: "Run logistics anytime, anywhere effortlessly",
            icon: <><PlagiarismIcon sx={{fontSize: '30px'}} /></>,
        },
        {
            title: "Auto status reporting",
            peraText: "Customized reports delivered automatically",
            icon: <><SettingsSuggestIcon sx={{fontSize: '30px'}} /></>,
        },
        {
            title: "API-Enabled",
            peraText: "Easily integrate with your existing systems",
            icon: <><WebhookIcon sx={{fontSize: '30px'}} /></>,
        },
        {
            title: "Data intelligence",
            peraText: "Boost revenue, reduce costs, improve KPIs",
            icon: <><RepartitionIcon sx={{fontSize: '30px'}} /></>,
        },
        
    ]

  return (
    <Box component="section" sx={{width: '100%', py: 5, paddingBottom: '100px', backgroundColor: '#000000ff', }}>
        <Container maxWidth="lg">
            <Typography variant="h5" sx={{ mb: 2, fontSize: '16px', fontWeight: "400", color: "#fff", textAlign: 'center', }}>
                Features
            </Typography>
            <Typography variant="h3" sx={{ mt: 0, mb: 4, fontSize: '30px', fontWeight: "600", color: "#fff",textAlign: "center", }}>Instalanes platform makes you standout in front of your Customers by offering</Typography>

            <Box component="div" sx={{position: 'relative'}}>
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={3}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    pagination={false}
                    autoplay={{
                    delay: 4000,
                        disableOnInteraction: true, 
                    }}
                    speed={800} 
                    breakpoints={{
                        0: { slidesPerView: 1 },     // mobile
                        640: { slidesPerView: 3 },   // tablets
                        1024: { slidesPerView: 4 },  // desktops
                    }}
                    >
                    {featureList.map((item, i) => (
                        <SwiperSlide key={i}>
                            <Box component="div" 
                                sx={{width: '100%', 
                                minHeight: '180px', 
                                p: 3, 
                                borderRadius: '12px', 
                                display: 'flex', 
                                gap: '2px',
                                flexDirection: 'column', 
                                backgroundColor: "#ffffff", 
                                transition: 'all 0.3s ease-in-out',
                            }}
                                >
                                <Typography component="span">
                                    {item.icon}
                                </Typography>
                                <Typography component="h4" sx={{ mt: 1, mb: 1, fontSize: '16px', fontWeight: "600", color: "#333", }}>{item.title}</Typography>
                                <Typography component="p"  sx={{ mt: 0, mb: 0, fontSize: '15px', fontWeight: "400", color: "#333", }}>{item.peraText}</Typography>                         
                            </Box>
                        </SwiperSlide>       
                    ))}
                </Swiper>
                <Box component="div" sx={{
                        maxWidth: '500px',
                        position: "absolute",
                        bottom: "-70px",
                        left: "50%",
                        transform: "translateX(-50%)",
                    display: 'flex',
                    gap: '16px',
                    justifyContent: 'center',
                    }}>
                    <IconButton
                        className="custom-prev"
                        sx={{
                        backgroundColor: "white",
                        boxShadow: 2,
                        "&:hover": { backgroundColor: "#f0f0f0" },
                        }}
                    >
                        <ArrowBack />
                    </IconButton>

                    <IconButton
                        className="custom-next"
                        sx={{
                        backgroundColor: "white",
                        boxShadow: 2,
                        "&:hover": { backgroundColor: "#f0f0f0" },
                        }}
                    >
                        <ArrowForward />
                    </IconButton>
                </Box>
            </Box>        
        </Container>
        
    </Box>
  )
}

export default FeaturesSection;