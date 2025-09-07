import React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Button from '@mui/material/Button';

const StreamlineTransportation = () => {
  return (
    <Box component="section" sx={{width: '100%', paddingTop: '80px', paddingBottom: '80px', backgroundColor: '#000000ff', }}>
        <Container maxWidth="lg">
            <Typography variant="h3" sx={{ mt: 0, mb: 4, fontSize: '30px', fontWeight: "600", color: "#fff",textAlign: "center", }}>
                Streamline your transportation process and scale with ease — elevate your business performance with Instalanes TMS !
            </Typography>
            <Typography variant="p" sx={{ mb: 4, fontSize: '16px', fontWeight: "400", lineHeight: '24px', color: "#fff", textAlign: 'center', }}>
                Instalanes is a Transport management and visibility platform that helps businesses improve their supply chain visibility, collaboration, growth, and efficiency. The platform helps users to manage and track their supply chain, as well as to access performance insights that help teams make better decisions
            </Typography>

            <Box component="div" sx={{display: 'flex', justifyContent: 'center', mt: 4,}}>
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: "#ffffffff", 
                        color: "#171717ff",
                        padding: '12px 22px',
                        fontWeight: '500',
                        borderRadius: '6px',
                        "&:hover": {
                        backgroundColor: "#0982ecff",
                        color: "#ffffffff",
                        },
                    }}
                >
                Contact Our Expert
                </Button>
            </Box>
            
        </Container>
    </Box>
  )
}

export default StreamlineTransportation;