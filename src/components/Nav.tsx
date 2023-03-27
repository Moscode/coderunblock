import { Grid, Typography, Button } from '@mui/material'

const Nav = () => {
  return (
        <Grid container justifyContent='space-evenly' alignItems='center' pt='40px' pb='80px'>
            <Grid item xs={0} md={4}>
              <Typography fontWeight='bold' fontSize='1.5rem' display='inline'>
                CoderUn<Typography color='#2b59ff' fontWeight='bold' fontSize='1.5rem' display='inline'>block</Typography></Typography>
            </Grid>
            <Grid container item xs={0} md={4} justifyContent='space-evenly' sx={{fontWeight:'5rem'}}>
              <Typography fontWeight='bold'>Features</Typography>
              <Typography fontWeight='bold'>Developers</Typography>
              <Typography fontWeight='bold'>Reviews</Typography>
              <Typography fontWeight='bold'>Contact</Typography>
            </Grid>
            <Grid container xs={0} md={4} justifyContent='end'>
              <Button variant='contained' disableElevation color='primary' sx={{borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem'}}>Join For Free</Button>
            </Grid>
          </Grid>
  )
}

export default Nav