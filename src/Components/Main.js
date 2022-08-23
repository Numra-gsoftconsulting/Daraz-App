import React from 'react'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid } from '@mui/material';

function Main() {
  return (

    
    <Box sx={{ bgcolor: '#017c64', width: '100%', marginTop:'20px'}} >
       <Grid container >
       <Grid item xs={1}>
        </Grid>
        <Grid item xs={3} md={2}>
         
  <Tabs
        orientation="vertical"
        variant="scrollable"
      
        aria-label="Vertical tabs example"
        sx={{ marginTop:'none', borderColor: '#ffff',   bgcolor: '#ffff'}}
      >
        <Tab label="Item One"  />
        <Tab label="Item Two" />
        <Tab label="Item Three"  />
        <Tab label="Item Four"  />
        <Tab label="Item Five"  />
        <Tab label="Item Six"  />
        <Tab label="Item Seven"  />
      </Tabs>
      </Grid>
      <Grid item xs={8}>
        </Grid>
        <Grid item xs={1}>
        </Grid>
        </Grid>
        </Box>
  
//   <Container maxWidth="sm">
 
// </Container>
  )
}

export default Main