import { createTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: React.CSSProperties['color'];
    };
  }
}

export const theme = createTheme({
    palette:{
       primary:{
        main: '#2b59ff'
       },
    }
})