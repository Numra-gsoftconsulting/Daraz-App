import React from 'react'
import Box from '@mui/material/Box';
import barcode from '../images/barcode.png';
import icon from '../images/icon.png';
import playstore from '../images/play-store.png';
import appstore from '../images/app-store.png'
import gallerystore from '../images/app-gallery.png'
import Grid from '@mui/material/Grid';
import { Container } from '@mui/system';
import Typography from '@mui/material/Typography';


function Footer() {
  return (
    <Box sx={{ width: '100%', bgcolor: '#2e2e54', marginTop:'20px;', color:'#ffff', fontSize:'11px', }}>
        <Container sx={ {textAlign:'left'} }>
<Grid container spacing={3}>
    
  <Grid item xs={3}>

   <h2>Cutomer Care</h2>
   <p>Help Center</p>
    <p>How to Buy</p>
    <p>Corporate Bulk Purchasing </p>
    <p>Returns Refunds</p>
    <p>Daraz Shop</p>
   < p>Contact Us</p>
    <p>Purchase Protection</p>
   <p> Daraz Pick up Points</p>
    <p>Fulfilled by Daraz (FBD)</p>

    <h2>Make Money With Us</h2>
    <p>Daraz University</p>
    <p>Sell on Daraz</p>
    <p>Join Daraz Affiliate Program</p>


  </Grid>
  <Grid item xs={3}>

   <h2>About Us</h2>
    <p>Digital Payments</p>
    <p>Daraz Cares</p>
    <p>Daraz Blog</p>
    <p>Terms and Conditions</p>
    <p>Privacy Policy</p>
    <p>NTN Number : 4012118-6</p>
   <p> STRN Number : 1700401211818</p>
    <p>Online Shopping App</p>
   <p>Online Grocery Shopping</p> 
    <p>Daraz Exclusive</p>
    <p>How to shop on Daraz</p>
    <p>Asia Cup 2022</p>

  </Grid>
  
 
  <Grid item xs={3} md={1}>

  <img src={barcode} width={94} alt="Voucher"  />
  
  </Grid>
 
  <Grid item xs={2} md={5}>
  <Grid item xs={2} md={2}>
  <img src={icon} width={44} alt="Voucher"  />
  </Grid>
  <Typography  variant="h6" sx={{color:'#f85606'}}>
           Happy Shopping
          </Typography>
          <Typography  variant="h6" sx={{color:'#ffff'}}>
           Download App
           
          </Typography>
 <Grid item sx={{display:'flex'}} xs={1}  md={9}>
 <Grid item  xs={1}  md={3}> 
  <img src={appstore} width={74} alt="Voucher"  />
  </Grid>
  <Grid item xs={1} md={3}>
  <img src={playstore} width={74} alt="Voucher"  />
  </Grid>
  <Grid item xs={1} md={3}>
  <img src={gallerystore} width={74} alt="Voucher"  />
  </Grid>
 </Grid>
 </Grid>
</Grid>

</Container>

  </Box>
  
  )
}

export default Footer