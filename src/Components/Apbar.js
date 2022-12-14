import React from 'react'
import Box from '@mui/material/Box';
import logo from '../images/logo.png';
import voucher from '../images/daraz-voucher.png';
import Grid from '@mui/material/Grid';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import TextField from '@mui/material/TextField';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import FormControl from '@mui/material/FormControl';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#f57224',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#ffff',
    },
  },
});

function Apbar() {
  return (
    <Box sx={{ width: '100%', bgcolor: '#ffff', marginTop:'20px;', justifyContent:'center',overflow: 'hidden', fontSize:'10px',}}>
       <ThemeProvider theme={theme}>
       <Grid item xs={1} md={12}> 
      <Grid container spacing={2}>
        <Grid item xs={3} md={4}>
        <img src={logo} width={114} alt="Logo" />
        </Grid>
        <Grid item xs={4} md={4}>
          <FormControl fullWidth md={{ m: 1 }} >
          <TextField  size="small" >     <ButtonGroup
  disableElevation
  variant="contained"
  aria-label="Disabled elevation buttons"
>
      
 
  
  <Button><SearchIcon  width={144}/></Button>
</ButtonGroup> </TextField>
   
</FormControl>
        </Grid>
        <Grid item md={1}  xs={1}>
        <ShoppingCartIcon sx={{ fontSize: "30px" }} />
        </Grid>
        <Grid item md={1} xs={3}>
        <img src={voucher} width={124} alt="Voucher" />
        </Grid>
       
      </Grid>
      </Grid>
      </ThemeProvider>
    </Box>
  )
}

export default Apbar