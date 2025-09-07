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
import HeadingH5 from '../common/HeadingTitle/HeadingH5';
import HeadingH2 from '../common/HeadingTitle/HeadingH2';

const SimplifyDigitizeSection = () => {
  return (
    <Box component="section" sx={{width: '100%', mt: 4, py: 5, textAlign: 'center'}}>
        <Container maxWidth="lg">
        <HeadingH5 SmallTitle={'Instalanes TMS - the all-in-one unified platform for transportation logistics'} />
        <HeadingH2 Title={'Simplify and digitize FCL, FTL, PTL, ODC, and warehouse shipments with a unified TMS for Shippers, Carriers, 3PLs, and LSPs'} />

        <Grid container spacing={2} sx={{justifyContent: 'center'}}>
          <Grid size={{ xs: 6, sm: 4, md: 2, lg: 2, }}>
             <Box component="div" sx={{
               padding: '20px 15px',
               borderRadius: 2,
               boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               flexDirection: 'column',
               rowGap: '10px',
               minHeight: '135px',
               transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: '0px 6px 25px rgba(0,0,0,0.2)',
                    transform: 'scale(1.05)',
                },
              }}>
                <AppsIcon sx={{fontSize: '40px'}} />   
                <Typography component="h6"  sx={{mt: 0, fontSize: '15px', fontWeight: "500", color: "#333"}}>Dispatch Planner</Typography>
              </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 2, lg: 2, }}>
            <Box component="div" sx={{
               padding: '20px 15px',
               borderRadius: 2,
               boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               flexDirection: 'column',
               rowGap: '10px',
               minHeight: '135px',
               transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: '0px 6px 25px rgba(0,0,0,0.2)',
                    transform: 'scale(1.05)',
                },
              }}>
              <AirportShuttleIcon sx={{fontSize: '40px'}} />  
              <Typography component="h6"  sx={{my: 0, fontSize: '15px', fontWeight: "500", color: "#333"}}>Transport Order</Typography>              
              </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 2, lg: 2, }}>
            <Box component="div" sx={{
               padding: '20px 15px',
               borderRadius: 2,
               boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               flexDirection: 'column',
               rowGap: '10px',
               minHeight: '135px',
               transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: '0px 6px 25px rgba(0,0,0,0.2)',
                    transform: 'scale(1.05)',
                },
              }}>
             <AccountBalanceIcon sx={{fontSize: '40px'}} />
              <Typography component="h6"  sx={{my: 0, fontSize: '15px', fontWeight: "500", color: "#333"}}>Rates and Carrier</Typography>
              </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 2, lg: 2, }}>
            <Box component="div" sx={{
               padding: '20px 15px',
               borderRadius: 2,
               boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               flexDirection: 'column',
               rowGap: '10px',
               minHeight: '135px',
               transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: '0px 6px 25px rgba(0,0,0,0.2)',
                    transform: 'scale(1.05)',
                },
              }}>
              <ShareLocationIcon sx={{fontSize: '40px'}} />  
              <Typography component="h6"  sx={{my: 0, fontSize: '15px', fontWeight: "500", color: "#333"}}>Shipments and tracking</Typography>
              </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 2, lg: 2, }}>
            <Box component="div" sx={{
               padding: '20px 15px',
               borderRadius: 2,
               boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               flexDirection: 'column',
               rowGap: '10px',
               minHeight: '135px',
               transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: '0px 6px 25px rgba(0,0,0,0.2)',
                    transform: 'scale(1.05)',
                },
              }}>
             <AssignmentIcon sx={{fontSize: '40px'}} />
              <Typography component="h6"  sx={{my: 0, fontSize: '15px', fontWeight: "500", color: "#333"}}>POD and Billing</Typography>
              </Box>
          </Grid>
          <Grid size={{ xs: 6, sm: 4, md: 2, lg: 2, }}>
            <Box component="div" sx={{
               padding: '20px 15px',
               borderRadius: 2,
               boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
               display: 'flex',
               justifyContent: 'center',
               alignItems: 'center',
               flexDirection: 'column',
               rowGap: '10px',
               minHeight: '135px',
               transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    boxShadow: '0px 6px 25px rgba(0,0,0,0.2)',
                    transform: 'scale(1.05)',
                },
              }}>
              <AcUnitIcon sx={{fontSize: '40px'}} />
              <Typography component="h6"  sx={{my: 0, fontSize: '15px', fontWeight: "500", color: "#333"}}>Reporting Intelligence</Typography>
              </Box>
          </Grid>
        </Grid>

      </Container>
    </Box>  
  )
}

export default SimplifyDigitizeSection