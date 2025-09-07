import React from 'react';
import Box from '@mui/material/Box';
import { Container, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import HeadingH5 from '../common/HeadingTitle/HeadingH5';
import HeadingH3 from '../common/HeadingTitle/HeadingH3';

const SolvingTheBig = () => {
  return (
    <Box component="section" sx={{width: '100%', py: 5, backgroundColor: "#ffffffff", }}>
        <Container maxWidth="lg">
            <HeadingH5 SmallTitle={'Why Instalanes platform'} />
            <HeadingH3 Title={'Simplifying The Complex Manual Chaos, Digitally'} />

           <Grid container spacing={3}>
              <Grid size={{ xs: 12, sm: 6, md: 6, }}>
                  <Box component="div" sx={{padding: '12px'}}>
                    <Typography component="h3" sx={{ mt: 2, mb: 2, fontSize: '20px', fontWeight: "600", color: "#333" }}>Simplifying The Complex Manual Chaos, Digitally</Typography> 
                    <Typography component="p"  sx={{mb: 3, fontSize: '14px', fontWeight: "400", color: "#333", }}>
                        Efficient and visible supply chain management is the goal of every business leader. Having a clear understanding of the supply chain and being able to track it in real time is critical for running a successful operation and expanding the business.
                    </Typography>

                    <Typography component="h3" sx={{ mt: 3, mb: 2, fontSize: '20px', fontWeight: "600", color: "#333" }}>The Challenge</Typography> 
                    <Typography component="p"  sx={{ mt: 0, mb: 2, fontSize: '14px', fontWeight: "400", color: "#333", }}>
                        However, managing the supply chain and maintaining visibility across all teams, systems, documents, and process handoffs is extremely complex. Organizations are still relying on emails and phone calls to manage and track.
                    </Typography>

                     <Typography component="p"  sx={{fontSize: '14px', fontWeight: "400", color: "#333", }}>
                        This leads to a complex way of working, additional logistics costs, poor experience, and low operational control.
                    </Typography>

                  </Box> 
              </Grid> 
              <Grid size={{ xs: 12, sm: 6, md: 6, }}>
                  <Box component="div" sx={{padding: '12px'}}>
                      <Image src={'/images/supply.png'} width={600} height={450}  style={{ width: "100%", height: "auto" }}  alt='Simplifying' />
                  </Box>
             </Grid> 
             <Grid size={{ xs: 12, sm: 6, md: 6, }}>
                <Box component="div" sx={{padding: '12px'}}>
                    <Image 
                        src="/images/tms.png" 
                        alt="Simplifying" 
                        width={600} 
                        height={450} 
                        style={{ width: "100%", height: "auto" }} 
                    />
                </Box>
             </Grid>
             <Grid size={{ xs: 12, sm: 6, md: 6, }}>
                  <Box component="div" sx={{padding: '12px'}}>
                    <Typography component="h3" sx={{ mt: 2, mb: 2, fontSize: '20px', fontWeight: "600", color: "#333" }}>The Digital Solution</Typography> 
                    <Typography component="p"  sx={{mb: 3, fontSize: '14px', fontWeight: "400", color: "#333", }}>
                        Currently, there is a need to have an impactful global platform that is easy, smart, and accessible by the masses that keeps everyone on the same page.
                        Instalanes platform enhances the ability of supply chain leaders and their teams to make transportation logistics a competitive advantage. With the value proposition offered, your teams can deliver real impact on business outcomes.
                    </Typography>

                   

                  </Box> 
              </Grid> 
               
              
           </Grid>     
        
        </Container>
    </Box>
  )
}

export default SolvingTheBig;