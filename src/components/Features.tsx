import { Grid, Paper, Typography } from '@mui/material'
import Schedule from '../assets/schedule.svg'
import share from '../assets/share.svg'
import videocall from '../assets/videocall.svg'
import rating from '../assets/rating.svg'

const Features = () => {
  return (
    <>
    <Typography variant='h4' sx={{textAlign: 'center', marginTop: '2.5rem', marginBottom: '2.5rem', fontWeight:'bold', color:'#080811'}}>Enjoy Our Amazing Features</Typography>
    <Grid container xs={0} md={12} justifyContent='space-evenly' marginBottom='5rem'>
        <Grid item xs={0} md={2.5}>
            <Paper sx={{boxShadow: 1,"&:hover": {boxShadow: 8}, padding: '3rem 2rem', height: '100%', display: 'flex', alignItems:'center'}} variant='outlined'>
                <div style={{height:'100%'}}>
                    <img src={Schedule} alt="schedule" style={{width: '30%', backgroundColor:'orange', borderRadius:'10px'}} />
                    <Typography sx={{color:'#1f1f37', fontWeight:'bold'}}>
                        Claim Available Schedule
                    </Typography>
                </div>
            </Paper>
        </Grid>
        <Grid item xs={0} md={2.5}>
            <Paper sx={{boxShadow: 1,"&:hover": {boxShadow: 8}, padding: '3rem 2rem', height: '100%', display: 'flex', alignItems:'center'}} variant='outlined'>
                <div style={{height:'100%'}}>
                    <img src={share} alt="schedule" style={{width: '30%', backgroundColor:'lightblue', borderRadius:'10px'}} />
                    <Typography sx={{color:'#1f1f37', fontWeight:'bold'}}>
                        Discuss Topic/Problem Before The Call
                    </Typography>

                </div>
            </Paper>
        </Grid>
        <Grid item xs={0} md={2.5}>
            <Paper sx={{boxShadow: 1,"&:hover": {boxShadow: 8}, padding: '3rem 2rem', height: '100%', display: 'flex', alignItems:'center'}} variant='outlined'>
                <div style={{height:'100%'}}>
                    <img src={videocall} alt="schedule" style={{width: '30%', backgroundColor:'lightgreen', borderRadius:'10px'}} />
                    <Typography sx={{color:'#1f1f37', fontWeight:'bold'}}>
                        Real-Time Collaboration
                    </Typography>
                </div>
            </Paper>
        </Grid>
        <Grid item xs={0} md={2.5}>
            <Paper sx={{boxShadow: 1,"&:hover": {boxShadow: 8}, padding: '3rem 2rem', height: '100%', display: 'flex', alignItems:'center'}} variant='outlined'>
                <div style={{height:'100%'}}>
                    <img src={rating} alt="schedule" style={{width: '30%', backgroundColor:'#f4a2de', borderRadius:'10px'}} />
                    <Typography sx={{color:'#1f1f37', fontWeight:'bold'}}>
                        Rate Your Experience With The Engineer
                    </Typography>
                </div>
            </Paper>
        </Grid>
    </Grid>
    </>
  )
}

export default Features