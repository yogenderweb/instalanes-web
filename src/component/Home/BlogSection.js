import React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import HeadingH5 from '../common/HeadingTitle/HeadingH5';
import HeadingH3 from '../common/HeadingTitle/HeadingH3';
import Image from 'next/image';
import Link from 'next/link';

const BlogSection = () => {
  return (
     <Box component="section" sx={{width: '100%', mt: 4, py: 5,}}>
         <Container maxWidth="lg">
             <HeadingH5 SmallTitle="Blogs" />
             <HeadingH3 Title="The latest from Instalanes TMS" />
            <Grid container spacing={4} sx={{ mt: 4, width: '100%', justifyContent: 'space-around',  }}>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, }}>
                    <Box component="div" 
                        sx={{
                            borderRadius: '10px',
                            overflow: 'hidden',
                            mb: 2,
                            '& img': {
                            transition: 'transform 0.4s ease', // smooth animation
                            },
                            '&:hover img': {
                            transform: 'scale(1.1)', // zoom effect
                            },
                        }}
                    >   
                       <Box component="div" sx={{ borderRadius: '10px', overflow: 'hidden', mb: 2 }}>
                          <Image src="/images/postimg1.webp" width={400} height={200} alt='' style={{ borderRadius: '10px' }}  /> 
                       </Box>

                        <Box component="div" sx={{borderRadius: '10px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant='span' sx={{fontSize: '13px', fontWeight: '500', color: '#444'}}>Sep 06, 2025</Typography>
                            <Typography variant='span' sx={{fontSize: '13px', color: '#444'}}>Freight</Typography>
                        </Box>

                        <Typography variant="h5" sx={{ mb: 2, fontSize: '18px', fontWeight: "400", color: "#333", textAlign: 'left', }}>
                            <Link href={'#'} sx={{fontSize: '18px', fontWeight: "400", color: "#333",}}>Embracing efficiency with TMS implementation</Link>
                        </Typography>

                        <Typography component='p' sx={{fontSize: '14px', fontWeight: '500', lineHeight: '22px', color: '#353535ff'}}>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words.
                        </Typography>

                    </Box>
                </Grid>  
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, }}>
                    <Box component="div" 
                        sx={{
                            borderRadius: '10px',
                            overflow: 'hidden',
                            mb: 2,
                            '& img': {
                            transition: 'transform 0.4s ease', // smooth animation
                            },
                            '&:hover img': {
                            transform: 'scale(1.1)', // zoom effect
                            },
                        }}
                    >   
                       <Box component="div" sx={{ borderRadius: '10px', overflow: 'hidden', mb: 2 }}>
                          <Image src="/images/postimg2.webp" width={400} height={200} alt='' style={{ borderRadius: '10px' }}  /> 
                       </Box>

                        <Box component="div" sx={{borderRadius: '10px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant='span' sx={{fontSize: '13px', color: '#444'}}>Sep 06, 2025</Typography>
                            <Typography variant='span' sx={{fontSize: '13px', color: '#444'}}>Freight</Typography>
                        </Box>

                        <Typography variant="h5" sx={{ mb: 2, fontSize: '18px', fontWeight: "400", color: "#333", textAlign: 'left', }}>
                            <Link href={'#'} sx={{fontSize: '18px', fontWeight: "400", color: "#333",}}>Deliver 2024 fostering innovation and impact</Link>
                        </Typography>

                        <Typography component='p' sx={{fontSize: '14px', fontWeight: '500', lineHeight: '22px', color: '#353535ff'}}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>

                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4, }}>
                    <Box component="div" 
                        sx={{
                            borderRadius: '10px',
                            overflow: 'hidden',
                            mb: 2,
                            '& img': {
                            transition: 'transform 0.4s ease', // smooth animation
                            },
                            '&:hover img': {
                            transform: 'scale(1.1)', // zoom effect
                            },
                        }}
                    >   
                       <Box component="div" sx={{ borderRadius: '10px', overflow: 'hidden', mb: 2 }}>
                          <Image src="/images/postimg3.webp" width={400} height={200} alt='' style={{ borderRadius: '10px' }}  /> 
                       </Box>

                        <Box component="div" sx={{borderRadius: '10px', marginBottom: '12px', display: 'flex', justifyContent: 'space-between' }}>
                            <Typography variant='span' sx={{fontSize: '13px', color: '#444'}}>Sep 06, 2025</Typography>
                            <Typography variant='span' sx={{fontSize: '13px', color: '#444'}}>Freight</Typography>
                        </Box>

                        <Typography
                            variant="h5"
                            sx={{ mb: 1, fontSize: "18px", fontWeight: 400, color: "#333", textAlign: "left" }}
                            >
                            <Link
                                href="#"
                                sx={{
                                fontSize: "18px",
                                fontWeight: 400,
                                color: "#444",
                                textDecoration: "none",
                                transition: "color 0.3s ease",
                                "&:hover": {
                                    color: "#3966efff", 
                                },
                                }}
                            >
                                Deliver 2024 fostering innovation and impact
                            </Link>
                        </Typography>

                        <Typography component='p' sx={{fontSize: '14px', fontWeight: '500', lineHeight: '22px', color: '#353535ff'}}>
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </Typography>

                    </Box>
                </Grid>
            </Grid>
         </Container>
     </Box>
  )
}

export default BlogSection;