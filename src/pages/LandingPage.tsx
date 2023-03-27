import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Nav from '../components/Nav'
import Header from '../components/Header'
import Metrics from '../components/Features';
import TopDev from '../components/TopDev';
import Review from '../components/Review';
import Footer from '../components/Footer'
import Features from '../components/Features';


export default function LandingPage() {

  return (
    <>
      <CssBaseline />
        <Box sx={{ bgcolor: '#d1edf5', paddingX: '4%'}}>
          <Nav />
          <Header />
        </Box>
        <Box sx={{bgcolor: '#fff', paddingX: '6%'}}>
          <Features />
        </Box>
         <Box sx={{ bgcolor: '#f8fafc', paddingX: '4%', marginBottom:'4%'}}>
          <TopDev />
        </Box>
        <Box sx={{bgcolor: '#fff', paddingX: '6%'}}>
          <Review />
        </Box>
        <Box sx={{bgcolor: '#18181b', paddingX: '6%'}}>
          <Footer />
        </Box>
    </>
  )
}