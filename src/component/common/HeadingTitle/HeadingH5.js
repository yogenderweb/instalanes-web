import React from 'react';
import {Typography } from '@mui/material';

const HeadingH5 = ({SmallTitle}) => {
  return (
    <Typography variant="h5" sx={{ mb: 2, fontSize: '16px', fontWeight: "400", color: "#333", textAlign: 'center', }}>
        {SmallTitle}
    </Typography>
  )
}

export default HeadingH5;