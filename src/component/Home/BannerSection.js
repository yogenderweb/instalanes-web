import React from 'react';
import Box from '@mui/material/Box';
import { Grid, Typography } from '@mui/material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AppsIcon from '@mui/icons-material/Apps';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';   
import ShareLocationIcon from '@mui/icons-material/ShareLocation';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import HeadingH1 from '../common/HeadingTitle/HeadingH1';

const BannerSection = () => {
  return (
    <>
    <Box component="section" sx={{
        width: "100%",
        height: { xs: "auto", sm: "500px" },
        display: "flex",
        alignItems: "center",
        p: 4,
        backgroundColor: "#f4f4f4ff",
        textAlign: "center",
      }}>

        <Container maxWidth="lg">

        
          {/* <HeadingH1 Title={'Instalanes TMS Transport Management System'} /> */}
          <Typography variant="h3" 
          sx={{ maxWidth: '700px', margin: '0px auto', mt: 0, mb: 4, fontSize: {xs: "26px", sm: "30px",  md: "50px",}, fontWeight: "600", color: "#121212ff",textAlign: "center", }}>
            Instalanes TMS Transport Management System
          </Typography>

          <Typography component="p" sx={{ mt: 2, mb: 3, fontSize: {xs: "15px", sm: "16px",  md: "18px",}, fontWeight: "500", color: "#3f3f3fff" }}>Streamline your transportation operations with our comprehensive TMS platform. Gain real-time visibility, optimize routes, and enhance collaboration across your supply chain.</Typography>

        <Button
          variant="contained"
          sx={{
            backgroundColor: '#2a2a2aff',
            '&:hover': {
              backgroundColor: '#0982ecff',
            },
            padding: '12px 20px'
          }}
        >
          Schedule a Demo
        </Button>

      </Container>
    </Box>


   </>     
  )
}

export default BannerSection;