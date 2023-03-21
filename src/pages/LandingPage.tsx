import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Nav from '../components/Nav'
import Header from '../components/Header'


export default function LandingPage() {

  return (
    <>
      <CssBaseline maxWidth={false}/>
        <Box sx={{ bgcolor: '#cfe8fc', height: '2000', paddingX: '4%'}}>
          <Nav />
          <Header />
        </Box>
    </>
  )
}