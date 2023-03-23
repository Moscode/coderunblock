import { Button, Typography } from '@mui/material';

const JoinInputBox = () => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', width: '100%', paddingRight:'0.5rem', paddingLeft:'1rem', alignItems: 'center'}}>
        <input placeholder='Enter your email' style={{fontSize: '1.2rem', outline: 'none', border:'0px', borderRadius: '1rem 0px 0px 1rem', backgroundColor:'white', display:'flex', width:'100%'}}/>
        <Button disableElevation variant='contained' style={{width:'40%', height:'80%', borderRadius: '0.5rem 0.5rem 0.5rem 0.5rem'}}>Sign Up</Button>
    </div>
  )
}

export default JoinInputBox