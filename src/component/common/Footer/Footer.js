import React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Image from 'next/image';
import Grid from '@mui/material/Grid';
import { List, ListItem, ListItemText } from "@mui/material";
import Link from 'next/link';
import EmailIcon from '@mui/icons-material/Email';
import TextField from '@mui/material/TextField';

const Footer = () => {
  return (
    <Box component="section" sx={{width: '100%', py: 5, paddingBottom: '30px', backgroundColor: '#000000ff', }}>
        <Container maxWidth="lg">
            <Box component="div" sx={{position: 'relative'}}>

                <Box component="div" sx={{display: 'flex', columnGap: '5px',}}>
                    <Image src="/images/logo.svg" width={30} height={30} alt="Footer Logo"  
                    style={{
                        width: 30,
                        height: 30,
                        filter: "brightness(0) invert(1)",
                    }} /> 
                    <Typography variant="h3" sx={{ mb: 2, fontSize: '25px', fontWeight: "400", color: "#ffffffff", }}>
                        Instalanes 
                    </Typography>
                </Box>

                <Typography component="p" sx={{ mb: 2, fontSize: '15px', fontWeight: "400", color: "#ffffffff", }}>
                    Instalanes is a Transport management and visibility platform that helps businesses improve their supply chain visibility, collaboration, growth, and efficiency. The platform helps users to manage and track their supply chain, as well as to access performance insights that help teams make better decisions
                </Typography>
            </Box>   
            
            <Grid container spacing={4} sx={{ mt: 4, width: '100%',  }}>
                <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3, }}>
                    <Box component="div" sx={{width: '100%',}}>
                        <Typography variant="h4" sx={{ mb: 2, fontSize: '20px', fontWeight: "400", color: "#ffffffff", }}>
                            Company
                        </Typography>
                         <List>
                            <ListItem sx={{paddingLeft: '2px'}}>
                                <Link href="#" style={{color: '#fff', fontSize: '15px',}}>About</Link>
                            </ListItem>
                            <ListItem sx={{paddingLeft: '2px'}}>
                                 <Link href="#" style={{color: '#fff', fontSize: '15px',}}>Careers</Link>
                            </ListItem>
                            <ListItem sx={{paddingLeft: '2px'}}>
                                 <Link href="#" style={{color: '#fff', fontSize: '15px',}}>Terms</Link>
                            </ListItem>
                              <ListItem sx={{paddingLeft: '2px'}}>
                                 <Link href="#" style={{color: '#fff', fontSize: '15px',}}>Privacy policy</Link>
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3, }}>
                    <Box component="div" sx={{width: '100%',}}>
                        <Typography variant="h4" sx={{ mb: 2, fontSize: '20px', fontWeight: "400", color: "#ffffffff", }}>
                           TMS Capabilities
                        </Typography>
                        <List>
                            <ListItem sx={{paddingLeft: '2px'}}>
                                <Link href="#" style={{color: '#fff', fontSize: '15px',}}>Consulting</Link>
                            </ListItem>
                            <ListItem sx={{paddingLeft: '2px'}}>
                                <Link href="#" style={{color: '#fff', fontSize: '15px',}}>Data analytics</Link>
                            </ListItem>
                            <ListItem sx={{paddingLeft: '2px'}}>
                                <Link href="#" style={{color: '#fff', fontSize: '15px',}}>Business intelligence</Link>
                            </ListItem>
                             <ListItem sx={{paddingLeft: '2px'}}>
                                <Link href="#" style={{color: '#fff', fontSize: '15px',}}>Process automation</Link>
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid size={{ xs: 6, sm: 6, md: 3, lg: 3, }}>
                    <Box component="div" sx={{width: '100%',}}>
                        <Typography variant="h4" sx={{ mb: 2, fontSize: '20px', fontWeight: "400", color: "#ffffffff", }}>
                            Resources
                        </Typography>
                         <List>
                            <ListItem sx={{paddingLeft: '2px'}}>
                                <Link href="#" style={{color: '#fff', fontSize: '15px',}}>Blogs</Link>
                            </ListItem>
                            <ListItem sx={{paddingLeft: '2px'}}>
                                <Link href="#" style={{color: '#fff', fontSize: '15px',}}>Partnering</Link>
                            </ListItem>
                            <ListItem sx={{paddingLeft: '2px'}}>
                                <Link href="#" style={{color: '#fff', fontSize: '15px',}}>Pricing - Get Quote</Link>
                            </ListItem>
                             <ListItem sx={{paddingLeft: '2px'}}>
                                <Link href="#" style={{color: '#fff', fontSize: '15px',}}>Pay here</Link>
                            </ListItem>
                        </List>
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 3, lg: 3, }}>
                    <Box component="div" sx={{width: '100%',}}>
                        <Typography variant="h4" sx={{ mb: 2, fontSize: '20px', fontWeight: "400", color: "#ffffffff", }}>
                            Contact us
                        </Typography>
                         <List>
                            <ListItem sx={{paddingLeft: '2px'}}>
                                <Link href="mailto:contact@instalanes.com" style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#fff', fontSize: '15px',}}><EmailIcon sx={{fontSize: '16px'}} /> contact@instalanes.com</Link>
                            </ListItem>
                            <ListItem sx={{paddingLeft: '2px'}}>
                                 <Link href="mailto:careers@instalanes.com" style={{display: 'flex', alignItems: 'center', gap: '4px', color: '#fff', fontSize: '15px',}}><EmailIcon sx={{fontSize: '16px'}} /> careers@instalanes.com</Link>
                            </ListItem>
                           
                        </List>
                    </Box>
                </Grid>
            </Grid>

            <Box component="div" sx={{paddingTop: 3, mt: 5, borderTop: '1px solid #333333ff',}}>
                <Grid container spacing={2} sx={{ width: '100%', justifyContent: 'space-between' }}>
                    <Typography component="p" style={{color: '#fff', mb: 0, fontSize: '15px',}}>Copyright © 2024 Instalanes.com. All rights reserved.</Typography>
                    
                    <Box component="div" 
                        sx={{
                           display: 'flex',
                           columnGap: '4px', 
                           maxWidth: '400px',
                           width: '100%',
                        }}>
                        
                        <input type='text' className='newsleter_input' placeholder='Enter Your Email' />
                        <button className='subscribebtn'>Subscribe</button>
                            
                    </Box>
                    
                </Grid>
            </Box>

        </Container>
    </Box>
  )
}

export default Footer;