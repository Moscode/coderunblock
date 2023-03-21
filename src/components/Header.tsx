import { Grid } from '@mui/material'
import { Typography } from '@mui/material'
import { Image } from 'mui-image'
import Hero from '../assets/pairprogramming1.jpg'

const Header = () => {
  return (
    <Grid container alignItems='center' justifyContent='between' pt='40px' pb='80px'>
        <Grid item xs={0} md={6}>
            <Typography variant='h3'>
                Learn New Concept and Debug Your Code with Expert
            </Typography>
            <Typography>
                Experienced developers shared their stacks and weekly availability with you and you can quickly claim the spot
            </Typography>
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
            />
        </Grid>
    </Grid>
  )
}

export default Header