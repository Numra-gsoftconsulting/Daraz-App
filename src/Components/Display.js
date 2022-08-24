import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Container } from '@mui/system';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#017c67',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#ffff',
      },
    },
  });
  const them = createTheme({
    palette: {
      primary: {
        // Purple and green play nicely together.
        main: '#017c67',
      },
      secondary: {
        // This is green.A700 as hex.
        main: '#ffff',
      },
    },
  });
function Display() {
  return (
    <Box sx={{ width: '100%', bgcolor: '#f5f5f5'}}>
    <Grid container spacing={2} >
    <Grid item md={2}>
        </Grid>
       <Grid item xs={12} md={8}>
         
         <Card sx={{ display: 'flex',  }}>
        
         <Grid item xs={6} md={6}>
         <CardContent sx={{ flex: '1 0 auto', bgcolor: '#007d65' }}>
          <Typography  variant="h5" sx={{color:'#f4fe89'}}>
           Crazy Flash Sale
          </Typography>
          <Typography  variant="h4" sx={{color:'#ffff'}}>
           Upto 40% off
           
          </Typography>
          </CardContent>
          </Grid>
          <Grid item xs={6} md={6}>
          <CardContent sx={{ flex: '1 0 auto', bgcolor:'#cffffb' }}>
          <Typography  variant="h5" sx={{color:'#017c67'}}>
           Azadi Sale upto 70% off
          </Typography>
          <ThemeProvider theme={theme}>
          <Button variant="contained" sx={{marginTop:'5px'}}>Shop Now</Button>
          </ThemeProvider>
          </CardContent>
          </Grid>
         
         </Card>
         </Grid>
         <Grid item md={2}>
        </Grid>
         </Grid>
         <Container sx={{display:'flex', fontSize:'8px', justifyContent:'center', justifyContent:'space-between', marginTop:'15px' }}>
         <ThemeProvider theme={theme}>
         <Grid item xs={2} md={2}>
         <Button variant="outlined" >Mart</Button>
         </Grid>
         <Grid item xs={2} md={2}>
         <Button variant="outlined" >Fashion</Button>
         </Grid>
         <Grid item xs={2} md={2}>
         <Button variant="outlined">Beauty</Button>
         </Grid>
         <Grid item xs={2} md={2}>
         <Button variant="outlined">Appliance</Button>
         </Grid>
         </ThemeProvider>
         </Container>
    
        </Box>
  )
}

export default Display