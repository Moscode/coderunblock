import { Button, Grid, Link } from '@mui/material'
import { Typography } from '@mui/material'
import { Image } from 'mui-image'
import Hero from '../assets/pairprogramming1.jpg'
import JoinInputBox from './JoinInputBox'

const Header = () => {
  return (
    <Grid container justifyContent='between' color='primary' pt='40px' pb='80px'>
        <Grid container xs={0} md={6} style={{padding:'60px 0px'}}>
            <Typography variant='h3' sx={{color:'#080811', fontWeight:'bold'}}>
                Learn New Concept and Debug Your Code with Expert
            </Typography>
            <Typography width='80%' sx={{color: '#72777e'}}>
                Experienced developers shared their stacks and weekly availability with you and you can quickly claim the spot
            </Typography>
            <Grid container style={{backgroundColor: '#fff', borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem', width:'80%'}}>
                <JoinInputBox />
            </Grid>
            <Typography sx={{marginTop: '10px', color:'#72777e'}}>Already have an account? <Link color='#080811' variant='inherit' href='#' sx={{fontWeight:'bold'}}>Log In now</Link></Typography>
        </Grid>
        <Grid item xs={0} md={6}>
            <Image 
            height="500px" 
            src={Hero} 
            alt='hero'
            duration={300}
            easing='cubic-bezier(0.7, 0, 0.6, 1)'
            showLoading={true}
            errorIcon={false}
            bgColor='inherit'
            style={{borderRadius:"4px 10px 10px 4px"}}
            />
        </Grid>
    </Grid>
  )
}

export default Header