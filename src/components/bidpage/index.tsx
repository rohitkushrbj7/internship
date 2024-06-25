/* eslint-disable @next/next/no-img-element */
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Bidpage() {
  return (
    <>
    <Box pt={10} pb={10}>
    <Box sx={{ flexGrow: 1, bgcolor:"#5E019A"}}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
          <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/A-Images-HD-Screen-Download-620x388.jpg" alt="img" />
        </Grid>
        <Grid item xs={12} md={6} >
          <Typography variant='h3' color={"white"} fontWeight={'bold'}>
          Get your desired hotel at your price
          </Typography>
          <Typography variant='body1' pt={5} color={"white"}>Tired of searching for the perfect hotel that fits your budget? With BidInn, you can set your own price and find the perfect stay!</Typography>
          <Box pt={10}>
          <Button sx={{bgcolor:"white",color:"black", borderRadius:"17px"}}>Learn More..</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
    </Box>
    </>
  );
}
