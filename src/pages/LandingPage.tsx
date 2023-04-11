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

import { useRef } from 'react'

export const onScrollSection =(scrollSection: any)=>{
  window.scrollTo(
    {
      top: scrollSection.current.offsetTop,
      behavior: "smooth"
    }
  )
}

export default function LandingPage() {
  const headerRef = useRef('')
  const featureRef = useRef('')
  const topdevRef = useRef('')
  const reviewRef = useRef('')
  const footerRef = useRef('')

  return (
    <>
      <CssBaseline />
        <Box ref={headerRef} sx={{ bgcolor: '#d1edf5', paddingX: '4%'}}>
          <Nav />
          <Header />
        </Box>
        <Box ref={featureRef} sx={{bgcolor: '#fff', paddingX: '6%'}}>
          <Features />
        </Box>
         <Box ref={topdevRef} sx={{ bgcolor: '#f8fafc', paddingX: '4%', marginBottom:'4%',  paddingBottom:'2.5rem' }}>
          <TopDev />
        </Box>
        <Box ref={reviewRef} sx={{bgcolor: '#fff', paddingX: '6%'}}>
          <Review />
        </Box>
        <Box ref={footerRef} sx={{bgcolor: '#18181b', paddingX: '6%'}}>
          <Footer />
        </Box>
    </>
  )
}