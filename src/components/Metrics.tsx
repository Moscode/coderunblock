import { Grid, Paper, Typography } from '@mui/material'

const Metrics = () => {
  return (
    <>
    <Typography variant='h3' sx={{textAlign: 'center', marginTop: '2.5rem', marginBottom: '2.5rem'}}>Enjoy Our Amazing Features</Typography>
    <Grid container xs={0} md={12} justifyContent='space-evenly'>
        <Grid item xs={0} md={2.5}>
            <Paper elevation={3} sx={{boxShadow: 1,"&:hover": {boxShadow: 8}, padding: '3rem 2rem', height: '100%', display: 'flex', alignItems:'center'}} variant='outlined'>
                <Typography>
                    Claimed Available Schedule by Experienced Developer using your Stack
                </Typography>
            </Paper>
        </Grid>
        <Grid item xs={0} md={2.5}>
            <Paper elevation={3} sx={{boxShadow: 1,"&:hover": {boxShadow: 8}, padding: '3rem 2rem', height: '100%', display: 'flex', alignItems:'center'}} variant='outlined'>
                <Typography>
                    Share the Aim of the Call with the Engineer before the Call
                </Typography>
            </Paper>
        </Grid>
        <Grid item xs={0} md={2.5}>
            <Paper elevation={3} sx={{boxShadow: 1,"&:hover": {boxShadow: 8}, padding: '3rem 2rem', height: '100%', display: 'flex', alignItems:'center'}} variant='outlined'>
                <Typography>
                    Leverage on our Remote Screen Sharing Video Call
                </Typography>
            </Paper>
        </Grid>
        <Grid item xs={0} md={2.5}>
            <Paper elevation={3}  sx={{boxShadow: 1,"&:hover": {boxShadow: 8}, padding: '3rem 2rem', height: '100%', display: 'flex', alignItems:'center'}} variant='outlined'>
                <Typography>
                    Rate your Experience with our Engineer
                </Typography>
            </Paper>
        </Grid>
    </Grid>
    </>
  )
}

export default Metrics