import Schedule from '../assets/schedule.svg'
import { Grid, Typography,Paper, Link } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Review = () => {
  return (
        <>
        <Typography variant='h4' sx={{textAlign: 'center', paddingTop: '2.5rem', marginBottom: '1.25rem'}}>What learning developers and contributors say</Typography>
         <Typography variant='h5' sx={{paddingTop: '2.5rem', marginBottom: '1.25rem', display:'flex', alignItems:'center', justifyContent:'center'}}><Link>View all reviews <ArrowForwardIcon /></Link></Typography>
        <Grid container xs={0} md={12} justifyContent='space-evenly' marginBottom='5rem'>
        <Grid item xs={0} md={3.5}>
            <Paper sx={{boxShadow: 1,"&:hover": {boxShadow: 8}, padding: '1rem 2rem', height: '100%', alignItems:'center'}} variant='outlined'>
                <Typography variant='h1' sx={{color:'blue'}}>``</Typography>
                <div style={{height:'100%'}}>
                    <img src={Schedule} alt="schedule" style={{width: '30%', backgroundColor:'orange', borderRadius:'10px'}} />
                    <Typography>
                        Claimed Available Schedule by Experienced Developer using your Stack
                    </Typography>
                </div>
            </Paper>
        </Grid>
        <Grid item xs={0} md={3.5}>
            <Paper sx={{boxShadow: 1,"&:hover": {boxShadow: 8}, padding: '1rem 2rem', height: '100%', alignItems:'center'}} variant='outlined'>
                <Typography variant='h1' sx={{color:'blue'}}>``</Typography>
                <div style={{height:'100%'}}>
                    <img src={Schedule} alt="schedule" style={{width: '30%', backgroundColor:'orange', borderRadius:'10px'}} />
                    <Typography>
                        Claimed Available Schedule by Experienced Developer using your Stack
                    </Typography>
                </div>
            </Paper>
        </Grid>
        <Grid item xs={0} md={3.5}>
            <Paper sx={{boxShadow: 1,"&:hover": {boxShadow: 8}, padding: '1rem 2rem', height: '100%', alignItems:'center'}} variant='outlined'>
                <Typography variant='h1' sx={{color:'blue'}}>``</Typography>
                <div style={{height:'100%'}}>
                    <img src={Schedule} alt="schedule" style={{width: '30%', backgroundColor:'orange', borderRadius:'10px'}} />
                    <Typography>
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