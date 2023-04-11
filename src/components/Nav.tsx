import { Grid, Typography, Button } from '@mui/material'

import {Link} from 'react-router-dom'

import { onScrollSection } from '../pages/LandingPage'

const Nav = () => {
  return (
        <Grid container justifyContent='space-evenly' alignItems='center' pt='40px' pb='80px'>
            <Grid item xs={0} md={4}>
              <Link to='/' style={{textDecoration:'none'}}>
                <Typography fontWeight='bold' fontSize='1.5rem' display='inline'>
                CoderUn<Typography color='#2b59ff' fontWeight='bold' fontSize='1.5rem' display='inline'>block</Typography></Typography></Link>
            </Grid>
            <Grid container item xs={0} md={4} justifyContent='space-evenly' sx={{fontWeight:'5rem'}}>
              <Typography fontWeight='bold' onClick={onScrollSection}>Features</Typography>
              <Typography fontWeight='bold' onClick={onScrollSection}>Developers</Typography>
              <Typography fontWeight='bold' onClick={onScrollSection}>Reviews</Typography>
              <Typography fontWeight='bold' onClick={onScrollSection}>Contact</Typography>
            </Grid>
            <Grid container xs={0} md={4} justifyContent='end'>
              <Link to='signup' style={{textDecoration: 'none'}}><Button variant='contained' disableElevation color='primary' sx={{borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem'}}>Join For Free</Button></Link>
            </Grid>
          </Grid>
  )
}

export default Nav