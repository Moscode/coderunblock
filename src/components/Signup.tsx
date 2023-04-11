import { Box, Container, Grid, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <Container component='main' maxWidth='xs'>
      <Box sx={{
        marginTop:'8px',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        height:'200px'}}>
          <Typography component='h1' variant='h5'>Sign up</Typography>
          <Box component='form' noValidate sx={{marginTop:'30px'}}>
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                      <TextField label='First Name' name='firstName' id='firstName' fullWidth required autoFocus/>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField label='Last Name' name='lastName' id='lastName' fullWidth required/>
                  </Grid>
                  <Grid item xs={12}>
                      <TextField label='Email Address' name='emailAddress' id='emailAddress' type='email' fullWidth required/>
                  </Grid>
                  <Grid item xs={12}>
                      <TextField label='Password' name='password' id='password' type='password' fullWidth required/>
                  </Grid>
              </Grid>
          </Box>
      </Box>
    </Container>
  )
}

export default Signup