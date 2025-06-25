import { Box, Paper, Stack, Typography } from '@mui/material';
import React from 'react'

const  Card=({title,subTitle,incraese,icon,chart})=> {
  return (
    <Box>

      <Paper sx={{minWidth:"280px",p:"2px",display:"flex",justifyContent:"space-between"}} >

<Stack sx={{textAlign:"left"}}   gap={1}>
{icon}

<Typography variant='body2' sx={{fontSize:'13px'}}> {title}</Typography>

<Typography variant='body2' sx={{fontSize:'13px'}}> {subTitle}</Typography>


</Stack>

<Stack sx={{textAlign:"left"}} gap={2} >
  {chart}
<Typography variant='body2' sx={{fontSize:'13px'}}> {incraese}</Typography>



</Stack>


      </Paper>

    </Box>
  )
}
export default Card;