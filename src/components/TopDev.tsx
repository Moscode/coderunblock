import { Typography } from "@mui/material"
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Grid } from '@mui/material'
import { Alert } from '@mui/material'

const TopDev = () => {
  return (
    <div>
      <Typography variant='h4' sx={{textAlign: 'center', paddingTop: '2.5rem', marginBottom: '1.25rem', fontWeight:'bold', color:'#080811'}}>Top 10 Contributors For The Week</Typography>
      <Typography sx={{width:'60%', margin:'0 auto', textAlign:'center', marginBottom: '1.25rem', color: '#72777e'}}>These are the top developers for this week. They are creating time to help upskill other developers across the globe by sharing their knowledge through explaining difficult concepts to helping with code reviews, and fixing bugs in code.</Typography>
      <Grid container xs={0} md={12} sx={{gap: '2rem', marginLeft:'2rem'}}>
        <Grid item xs={0} md={3}>
          <Card sx={{ maxWidth: 345, paddingTop:'1rem'}}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://randomuser.me/api/portraits/men/50.jpg"
              alt="green iguana"
              sx={{width:'50%', marginX:'auto', borderRadius:'50%'}}
            />
            <CardContent  sx={{textAlign: 'center'}}>
              <Typography gutterBottom component="div">
                Divid Brown
              </Typography>
              <Typography gutterBottom component="div">
                Software Engineer @Google AI
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
              </Typography>
            </CardContent>
          </CardActionArea>
          <Grid container xs={0} md={12} sx={{gap:'1rem', justifyContent: 'center'}}>
            <Grid item xs={0} md={5}>
            <Alert icon={false} severity="success">
              C#
            </Alert>
            </Grid>
            <Grid item xs={0} md={5}>
            <Alert icon={false} severity="success">
              ASP.NET
            </Alert>
            </Grid>
            <Grid item xs={0} md={5}>
            <Alert icon={false} severity="success">
              PYTHON
            </Alert>
            </Grid>
             <Grid item xs={0} md={5}>
            <Alert icon={false} severity="success">
              PYTHON
            </Alert>
            </Grid>
          </Grid>
          <CardActions>
            <Button variant='contained' sx={{color:"white", bgcolor:'primary', marginX:'auto'}}>
              View Schedule
            </Button>
          </CardActions>
        </Card>
        </Grid>
        <Grid item xs={0} md={3}>
          <Card sx={{ paddingTop:'1rem' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://randomuser.me/api/portraits/women/40.jpg"
              alt="green iguana"
              sx={{width:'50%', marginX:'auto', borderRadius:'50%'}}
            />
            <CardContent  sx={{textAlign: 'center'}}>
              <Typography gutterBottom component="div">
                Divid Brown
              </Typography>
              <Typography gutterBottom component="div">
                Software Engineer @Google AI
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
              </Typography>
            </CardContent>
          </CardActionArea>
          <Grid container xs={0} md={12} sx={{gap:'1rem', justifyContent: 'center'}}>
            <Grid item xs={0} md={5}>
            <Alert icon={false} severity="success">
              C#
            </Alert>
            </Grid>
            <Grid item xs={0} md={5}>
            <Alert icon={false} severity="success">
              ASP.NET
            </Alert>
            </Grid>
            <Grid item xs={0} md={5}>
            <Alert icon={false} severity="success">
              PYTHON
            </Alert>
            </Grid>
             <Grid item xs={0} md={5}>
            <Alert icon={false} severity="success">
              PYTHON
            </Alert>
            </Grid>
          </Grid>
          <CardActions>
            <Button variant='contained' sx={{color:"white", bgcolor:'primary', marginX:'auto'}}>
              View Schedule
            </Button>
          </CardActions>
        </Card>
        </Grid>
        <Grid item xs={0} md={3}>
          <Card sx={{ maxWidth: 345, paddingTop:'1rem' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://randomuser.me/api/portraits/men/46.jpg"
              alt="green iguana"
              sx={{width:'50%', marginX:'auto', borderRadius:'50%'}}
            />
            <CardContent  sx={{textAlign: 'center'}}>
              <Typography gutterBottom component="div">
                Divid Brown
              </Typography>
              <Typography gutterBottom component="div">
                Software Engineer @Google AI
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
              </Typography>
            </CardContent>
          </CardActionArea>
          <Grid container xs={0} md={12} sx={{gap:'1rem', justifyContent: 'center'}}>
            <Grid item xs={0} md={5}>
            <Alert icon={false} severity="success">
              C#
            </Alert>
            </Grid>
            <Grid item xs={0} md={5}>
            <Alert icon={false} severity="success">
              ASP.NET
            </Alert>
            </Grid>
            <Grid item xs={0} md={5}>
            <Alert icon={false} severity="success">
              PYTHON
            </Alert>
            </Grid>
             <Grid item xs={0} md={5}>
            <Alert icon={false} severity="success">
              PYTHON
            </Alert>
            </Grid>
          </Grid>
          <CardActions>
            <Button variant='contained' sx={{color:"white", bgcolor:'primary', marginX:'auto'}}>
              View Schedule
            </Button>
          </CardActions>
        </Card>
        </Grid>
        <Grid item xs={0} md={3}>
          <Card sx={{ maxWidth: 345, paddingTop:'1rem' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="https://randomuser.me/api/portraits/women/67.jpg"
              alt="green iguana"
              sx={{width:'50%', marginX:'auto', borderRadius:'50%'}}
            />
            <CardContent  sx={{textAlign: 'center'}}>
              <Typography gutterBottom component="div">
                Divid Brown
              </Typography>
              <Typography gutterBottom component="div">
                Software Engineer @Google AI
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
              </Typography>
            </CardContent>
          </CardActionArea>
          <Grid container xs={0} md={12} sx={{gap:'1rem', justifyContent: 'center'}}>
            <Grid item xs={0} md={5}>
            <Alert icon={false} severity="success">
              C#
            </Alert>
            </Grid>
            <Grid item xs={0} md={5}>
            <Alert icon={false} severity="success">
              ASP.NET
            </Alert>
            </Grid>
            <Grid item xs={0} md={5}>
            <Alert icon={false} severity="success">
              PYTHON
            </Alert>
            </Grid>
             <Grid item xs={0} md={5}>
            <Alert icon={false} severity="success">
              PYTHON
            </Alert>
            </Grid>
          </Grid>
          <CardActions>
            <Button variant='contained' sx={{color:"white", bgcolor:'primary', marginX:'auto'}}>
              View Schedule
            </Button>
          </CardActions>
        </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default TopDev