import Schedule from '../assets/schedule.svg'
import { Grid, Typography, Link } from '@mui/material'

const Footer = () => {
  return (
    <div>
        <Grid container xs={0} md={12} width='90%' spacing='5rem' paddingBottom='2.5rem' margin='0 auto'>
        <Grid item xs={0} md={3.5} sx={{display:'flex', flexDirection:'column'}}>
            <Typography variant='h5' sx={{color: '#fff'}}>Help</Typography>
            <Link>Customer Support</Link>
            <Link>Terms & Conditions</Link>
            <Link>Privacy Policy</Link>
        </Grid>
        <Grid item xs={0} md={3.5} sx={{display:'flex', flexDirection:'column'}}>
            <Typography variant='h5' sx={{color: '#fff'}}>Resources</Typography>
            <Link>Free Web Development Resources</Link>
            <Link>Free Mobile Development Resources</Link>
            <Link>Free Machine Learning Resources</Link>
            <Link>Free Product Design Resources</Link>
        </Grid>
        <Grid item xs={0} md={3.5} sx={{display:'flex', flexDirection:'column'}}>
            <Typography variant='h5' sx={{color: '#fff'}}>Links</Typography>
            <Link>Features</Link>
            <Link>Top Devs</Link>
            <Link>Reviews</Link>
        </Grid>
    </Grid>
    </div>
  )
}

export default Footer