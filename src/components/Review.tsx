import Schedule from '../assets/schedule.svg'
import { Grid, Typography,Paper, Link } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import AOS from 'aos'
import 'aos/dist/aos.css';
import { useEffect } from 'react'

const Review = () => {
    useEffect(()=>{
        AOS.init({duration: 2000})
    }, [])
  return (
        <>
        <Typography variant='h4' sx={{textAlign: 'center', paddingTop: '2.5rem', marginBottom: '1.25rem'}}>What learning developers and contributors say</Typography>
         <Typography variant='h5' sx={{paddingTop: '2.5rem', marginBottom: '1.25rem', display:'flex', alignItems:'center', justifyContent:'center'}}><Link>View all reviews <ArrowForwardIcon /></Link></Typography>
        <Grid container xs={0} md={12} justifyContent='space-evenly' marginBottom='5rem'>
        <Grid item xs={0} md={3.5} data-aos='flip-left'>
            <Paper sx={{boxShadow: 1,"&:hover": {boxShadow: 8}, padding: '1rem 2rem', height: '100%', alignItems:'center'}} variant='outlined'>
                <Typography variant='h1' sx={{color:'#2b59ff'}}>``</Typography>
                <div style={{height:'100%'}}>
                    <div style={{display: 'flex', columnGap:'1rem'}}>
                        <img src='https://randomuser.me/api/portraits/women/48.jpg' alt="schedule" style={{width: '30%', borderRadius:'10px'}} />
                        <div>
                        <Typography sx={{fontWeight:'bold'}}>Daniel Daniel</Typography>
                        <Typography sx={{color:'#bcc0c9'}}>Learning Node.JS and Express.JS</Typography>
                        </div>
                    </div>
                    <Typography sx={{color:'#898b8f'}}>
                        Claimed Available Schedule by Experienced Developer using your Stack
                    </Typography>
                </div>
            </Paper>
        </Grid>
        <Grid item xs={0} md={3.5} data-aos='flip-left'>
            <Paper sx={{boxShadow: 1,"&:hover": {boxShadow: 8}, padding: '1rem 2rem', height: '100%', alignItems:'center'}} variant='outlined'>
                <Typography variant='h1' sx={{color:'#2b59ff'}}>``</Typography>
                <div style={{height:'100%'}}>
                    <div style={{display: 'flex', columnGap:'1rem'}}>
                        <img src='https://randomuser.me/api/portraits/men/75.jpg' alt="schedule" style={{width: '30%', borderRadius:'10px'}} />
                        <div>
                        <Typography sx={{fontWeight:'bold'}}>Daniel Daniel</Typography>
                        <Typography sx={{color:'#bcc0c9'}}>Learning Node.JS and Express.JS</Typography>
                        </div>
                    </div>
                    <Typography sx={{color:'#898b8f'}}>
                        Claimed Available Schedule by Experienced Developer using your Stack
                    </Typography>
                </div>
            </Paper>
        </Grid>
        <Grid item xs={0} md={3.5} data-aos='flip-left'>
            <Paper sx={{boxShadow: 1,"&:hover": {boxShadow: 8}, padding: '1rem 2rem', height: '100%', alignItems:'center'}} variant='outlined'>
                <Typography variant='h1' sx={{color:'#2b59ff'}}>``</Typography>
                <div style={{height:'100%'}}>
                    <div style={{display: 'flex', columnGap:'1rem'}}>
                        <img src='https://randomuser.me/api/portraits/men/40.jpg' alt="schedule" style={{width: '30%', borderRadius:'10px'}} />
                        <div>
                        <Typography sx={{fontWeight:'bold'}}>Daniel Daniel</Typography>
                        <Typography sx={{color:'#bcc0c9'}}>Learning Node.JS and Express.JS</Typography>
                        </div>
                    </div>
                    <Typography sx={{color:'#898b8f'}}>
                        Claimed Available Schedule by Experienced Developer using your Stack
                    </Typography>
                </div>
            </Paper>
        </Grid>
    </Grid>
    </>
  )
}

export default Review