import React from 'react';
import {Typography } from '@mui/material';

const HeadingH3 = ({Title,}) => {
  return (
    <Typography variant="h3"  
        sx={{
          mt: 0,
          mb: 4,
          fontWeight: 600,
          color: "#333",
          textAlign: "center",
          fontSize: {
            xs: "20px", 
            sm: "24px", 
            md: "30px", 
          },
        }}
      >
        {Title}
      </Typography>
  )
}

export default HeadingH3;