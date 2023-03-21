import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Typography } from '@mui/material'
import { styled } from '@mui/material/styles';

const Nav = () => {
  return (
        <Grid container justifyContent='between' pt='40px' pb='80px'>
            <Grid item xs={0} md={3}>
              <Typography variant="h5" display='inline'>
                CoderUn<Typography color='#2b59ff' variant="h5" display='inline'>block</Typography></Typography>
            </Grid>
            <Grid container item xs={0} md={6} justifyContent='space-between' flexGrow={3}>
              <Typography>CoderUblock</Typography>
              <Typography>CoderUblock</Typography>
              <Typography>CoderUblock</Typography>
              <Typography>CoderUblock</Typography>
            </Grid>
            <Grid container xs={0} md={3} justifyContent='end'>
              <Typography>CoderUblock</Typography>
            </Grid>
          </Grid>
  )
}

export default Nav