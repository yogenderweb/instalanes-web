import React from 'react'

const HeadingH4 = ({TitleMedium}) => {
  return (
    <Typography variant="h4" sx={{ mt: 2, mb: 2, fontSize: '20px', fontWeight: "600", color: "#333" }}>
        {TitleMedium}
    </Typography>
  )
}

export default HeadingH4