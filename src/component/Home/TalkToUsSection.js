"use client";
import React from 'react';
import HeadingH3 from '../common/HeadingTitle/HeadingH3';
import Box from '@mui/material/Box';
import { Button, Container, Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Image from 'next/image';

const TalkToUsSection = () => {
    const [demo, setDemo] = React.useState('');
     const handleChange = (event) => {
        setDemo(event.target.value);
    };
  return (
    <Box component="section" 
        sx={{
            width: '100%', 
            mt: 4, 
            py: 5, 
            backgroundColor: "#f4f4f4ff",
        }}
    >
        <Container maxWidth="lg">


            <Box component="div" sx={{padding: '25px 25px', backgroundColor: "#ffffffff", boxShadow: 1, borderRadius: '12px',}}>
                <Grid container spacing={4} sx={{justifyContent: 'center'}}>
                    <Grid size={{ xs: 12, md: 6, lg: 6, }}>
                        <Box component="div">
                            <HeadingH3 Title={'Talk to Us'} />

                            <Box component="div" sx={{ padding: '12px', display: 'flex', alignItems: 'start', columnGap: '6px',mb: 2, border: '1px solid #eee', borderRadius: '4px',}}>
                                <div sx={{}}>
                                    <Image src="/images/priyanka.png" width={80} height={70} alt="Priyanka" style={{borderRadius: '50px'}} />   
                                </div>
                                <Box component="div" sx={{paddingTop: '3px'}}>
                                    <Typography variant="h5" sx={{ mt: 1, marginBottom: '5px', fontSize: '16px', fontWeight: "600", color: "#333", textAlign: 'center', }}>
                                        Sales Manager
                                    </Typography>
                                    <Typography variant="span" sx={{ mb: 0, fontSize: '14px', fontWeight: "400", color: "#333", textAlign: 'center', }}>
                                        Priyanka S
                                    </Typography>
                                </Box>
                            </Box>

                            <Box component="div" sx={{ padding: '12px', display: 'flex', columnGap: '6px',mb: 2, border: '1px solid #eee', borderRadius: '4px',}}>
                                <div sx={{}}>
                                    <Image src="/images/lucky.png" width={80} height={70} alt="Priyanka" style={{borderRadius: '50px'}} />   
                                </div>
                               <Box component="div" sx={{paddingTop: '3px'}}>
                                    <Typography variant="h5" sx={{ mt: 1, marginBottom: '5px', fontSize: '16px', fontWeight: "600", color: "#333", textAlign: 'center', }}>
                                        Sales Manager
                                    </Typography>
                                    <Typography variant="span" sx={{ mb: 0, fontSize: '14px', fontWeight: "400", color: "#333", textAlign: 'center', }}>
                                        Lucky S
                                    </Typography>
                                </Box>
                            </Box>

                        </Box>
                    </Grid>
                     <Grid size={{ xs: 12, md: 6, lg: 6, }}>
                         <HeadingH3 Title={'Submit your details'} />
                        <Box component="div" sx={{ width: '100#%', borderRadius: '6px', padding: '25px', boxShadow: '0px 0px 8px 0px #eaeaeaff', }}>
                           
                          
                                <TextField
                                    id="outlined-basic"
                                    label="Full Name"
                                    variant="outlined"
                                    fullWidth
                                    placeholder="Your Name"
                                    sx={{
                                        marginBottom: "20px",
                                        
                                        "& .MuiInputLabel-root": {
                                        fontSize: "15px",
                                        color: "#666",
                                        },
                                        "& .MuiInputLabel-root.Mui-focused": {
                                        color: "#1976d2", 
                                        },

                                        "& .MuiOutlinedInput-root": {
                                        fontSize: "15px",
                                        color: "#333",
                                        "&::placeholder": {
                                            color: "#999",
                                            fontSize: "14px",
                                        },

                                        "& fieldset": {
                                            borderColor: "#ccc",
                                        },

                                        "&:hover fieldset": {
                                            borderColor: "#1976d2",
                                        },

                                        "&.Mui-focused fieldset": {
                                            borderColor: "#1976d2",
                                            borderWidth: "2px",
                                        },
                                        },
                                    }}
                                    required
                                    />
                                <TextField
                                    id="outlined-basic"
                                    label="Your Email"
                                    variant="outlined"
                                    fullWidth
                                    placeholder="Enter Your Email"
                                    sx={{
                                        marginBottom: "20px",
                                        "& .MuiInputLabel-root": {
                                        fontSize: "15px",
                                        color: "#666",
                                        },
                                        "& .MuiInputLabel-root.Mui-focused": {
                                        color: "#1976d2",
                                        },

                                        "& .MuiOutlinedInput-root": {
                                        fontSize: "15px",
                                        color: "#333",
                                        "&::placeholder": {
                                            color: "#999",
                                            fontSize: "14px",
                                        },

                                        "& fieldset": {
                                            borderColor: "#ccc",
                                        },

                                        "&:hover fieldset": {
                                            borderColor: "#1976d2",
                                        },

                                        "&.Mui-focused fieldset": {
                                            borderColor: "#1976d2",
                                            borderWidth: "2px",
                                        },
                                        },
                                    }}
                                    required
                                    />
                                <TextField
                                    id="outlined-basic"
                                    label="Mobile Number"
                                    variant="outlined"
                                    fullWidth
                                    placeholder="Your Name"
                                    sx={{
                                        marginBottom: "20px",
                                        "& .MuiInputLabel-root": {
                                        fontSize: "15px",
                                        color: "#666",
                                        },
                                        "& .MuiInputLabel-root.Mui-focused": {
                                        color: "#1976d2", 
                                        },

                                        "& .MuiOutlinedInput-root": {
                                        fontSize: "15px",
                                        color: "#333",
                                        "&::placeholder": {
                                            color: "#999",
                                            fontSize: "14px",
                                        },

                                        "& fieldset": {
                                            borderColor: "#ccc",
                                        },

                                        "&:hover fieldset": {
                                            borderColor: "#1976d2",
                                        },

                                        "&.Mui-focused fieldset": {
                                            borderColor: "#1976d2",
                                            borderWidth: "2px",
                                        },
                                        },
                                    }}
                                    required
                                    />
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Platform Demo"
                                    value={demo}
                                    onChange={handleChange}
                                    fullWidth
                                    sx={{marginBottom: '14px',fontSize: "15px",color: "#333",}}
                                    MenuProps={{
                                        disableScrollLock: true,
                                    }}
                                >
                                    <MenuItem value={1}>Sales Inquery</MenuItem>
                                    <MenuItem value={2}>Partnership</MenuItem>
                                    <MenuItem value={3}>Other</MenuItem>
                                </Select>

                                <TextField
                                    id="outlined-multiline"
                                    label="Message"
                                    placeholder="Type your message..."
                                    multiline
                                    rows={3} 
                                    fullWidth
                                    variant="outlined"
                                />

                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#202020ff", 
                                        color: "#ffffffff",
                                        padding: '12px 22px',
                                        fontWeight: '500',
                                        borderRadius: '6px',
                                        mt: 3,
                                        "&:hover": {
                                        backgroundColor: "#0982ecff",
                                        color: "#ffffffff",
                                        },
                                    }}
                                >
                                Get Call Back
                                </Button>
                           
                        </Box>
                    </Grid>
                </Grid>   
            </Box>  
        </Container>
    </Box>
  )
}

export default TalkToUsSection;