import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Nav from '../components/Nav'
import Header from '../components/Header'
import Metrics from '../components/Metrics';


export default function LandingPage() {

  return (
    <>
      <CssBaseline />
        <Box sx={{ bgcolor: '#cfe8fc', paddingX: '4%'}}>
          <Nav />
          <Header />
        </Box>
        <Box sx={{bgcolor: '#fff', paddingX: '6%'}}>
          <Metrics />
        </Box>
    </>
  )
}