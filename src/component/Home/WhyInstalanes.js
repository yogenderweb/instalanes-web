import React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import HeadingH5 from '../common/HeadingTitle/HeadingH5';
import HeadingH2 from '../common/HeadingTitle/HeadingH2';


const WhyInstalanes = () => {
  return (
    <Box component="section" sx={{width: '100%', mt: 5, py: 5, backgroundColor: "#f4f4f4ff", }}>
        <Container maxWidth="lg">
            <HeadingH5 SmallTitle={'Why Instalanes platform'}  />
            <HeadingH2 Title={'Instalanes is a Collaborative TMS platform that helps Business leaders generate real business outcomes, they care for!'} />
           

            <Box sx={{ width: '100%', flexGrow: 1, pt: 2, }}>
                <Grid container spacing={3}>
                    <Grid size={{ xs: 12, sm: 6, md: 3, }}>
                        <Box component="div" 
                            sx={{
                                padding: '20px 15px 25px',
                                borderRadius: 2,
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                rowGap: '10px',
                                minHeight: '125px',
                                textAlign: 'center',
                                minHeight: '160px',
                                backgroundColor: '#fff',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    boxShadow: '0px 6px 25px rgba(0,0,0,0.2)',
                                    transform: 'translateY(-6px)',
                                    backgroundColor: '#ffffffff',
                                },
                        }}>
                            <Typography component="h3"  sx={{mt: 0, fontSize: '30px', fontWeight: "500", color: "#333"}}>
                            9x
                            </Typography>  
                            <Typography component="h5"  sx={{mt: 0, fontSize: '16px', fontWeight: "500", color: "#333"}}>
                                Visibility
                            </Typography>
                            <Typography component="p"  sx={{mt: 0, fontSize: '14px', fontWeight: "400", color: "#333"}}>
                                Real-time visibility gives you unmatched control and understanding of what's happening on your network. See everything in a glance.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3, }}>
                        <Box component="div" 
                            sx={{
                                padding: '20px 15px 25px',
                                borderRadius: 2,
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                rowGap: '10px',
                                textAlign: 'center',
                                minHeight: '218px',
                                backgroundColor: '#fff',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                boxShadow: '0px 6px 25px rgba(0,0,0,0.2)',
                                transform: 'translateY(-6px)',
                                backgroundColor: '#ffffffff',
                            },
                        }}>
                            <Typography component="h3"  sx={{mt: 0, fontSize: '30px', fontWeight: "500", color: "#333"}}>
                            100%
                            </Typography>  
                            <Typography component="h5"  sx={{mt: 0, fontSize: '16px', fontWeight: "500", color: "#333"}}>
                                Collaboration
                            </Typography>
                            <Typography component="p"  sx={{mt: 0, fontSize: '14px', fontWeight: "400", color: "#333"}}>
                                Boost your teams productivity and experience. Empower your team, enhance effectiveness of your teams.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3, }}>
                        <Box component="div" 
                            sx={{
                                padding: '20px 15px 25px',
                                borderRadius: 2,
                                boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                flexDirection: 'column',
                                rowGap: '10px',
                                minHeight: '160px',
                                textAlign: 'center',
                                backgroundColor: '#fff',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    boxShadow: '0px 6px 25px rgba(0,0,0,0.2)',
                                    transform: 'translateY(-6px)',
                                    backgroundColor: '#ffffffff',
                                },
                        }}>
                            <Typography component="h3"  sx={{mt: 0, fontSize: '30px', fontWeight: "500", color: "#333"}}>
                            ~30%
                            </Typography>  
                            <Typography component="h5"  sx={{mt: 0, fontSize: '16px', fontWeight: "500", color: "#333"}}>
                                Optimization
                            </Typography>
                            <Typography component="p"  sx={{mt: 0, fontSize: '14px', fontWeight: "400", color: "#333"}}>
                                By digitizing your processes, you can eliminate manual tasks and standardize your operations to lower costs.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid size={{ xs: 12, sm: 6, md: 3, }}>
                        <Box component="div" 
                        sx={{
                            padding: '20px 15px 25px',
                            borderRadius: 2,
                            boxShadow: "0px 4px 20px rgba(0,0,0,0.1)",
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            flexDirection: 'column',
                            rowGap: '10px',
                            textAlign: 'center',
                            minHeight: '160px',
                            backgroundColor: '#fff',
                            transition: 'all 0.3s ease',
                            '&:hover': {
                                boxShadow: '0px 6px 25px rgba(0,0,0,0.2)',
                                transform: 'translateY(-6px)',
                                backgroundColor: '#ffffffff',
                            },
                            
                        }}>
                            <Typography component="h3"  sx={{mt: 0, fontSize: '30px', fontWeight: "500", color: "#333"}}>
                            ~2x
                            </Typography>  
                            <Typography component="h5"  sx={{mt: 0, fontSize: '16px', fontWeight: "500", color: "#333"}}>
                                Growth
                            </Typography>
                            <Typography component="p"  sx={{mt: 0, fontSize: '14px', fontWeight: "400", color: "#333"}}>
                                The network provides opportunities for businesses to expand quickly and help businesses grow rapidly in new geographic areas.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        
        </Container>
    </Box>
  )
}

export default WhyInstalanes;