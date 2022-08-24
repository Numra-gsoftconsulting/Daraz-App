import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Grid } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import MobileStepper from '@mui/material/MobileStepper';
import { createTheme } from '@mui/material/styles';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://icms-image.slatic.net/images/ims-web/cf7b4783-2001-4f5d-a425-d98a521dda8f.jpg',
  },
  {
    label: 'Bird',
    imgPath:
      'https://icms-image.slatic.net/images/ims-web/ac29115f-04c7-422c-b070-2ecfd2f42e36.jpg_1200x1200.jpg',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://icms-image.slatic.net/images/ims-web/e5b6f62b-b30a-411d-b0f2-9058761ee895.jpg',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://icms-image.slatic.net/images/ims-web/6aaa1218-a6e9-4cd5-9b55-632bac119f31.png',
  },
];


 
 

function Main() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;
    const handleStepChange = (step) => {
        setActiveStep(step);
      };
 
  return (

    
    <Box sx={{ bgcolor: '#017c64', width: '100%', height:'350px', marginTop:'10px',overflow: 'hidden' }} >
       <Grid container >
       <Grid item md={1}>
        </Grid>
        <Grid item xs={3} md={2}>
        <Container sx={ {textAlign:'left'} }> 
  <Tabs
        orientation="vertical"
        variant="scrollable"
      
        aria-label="Vertical tabs example"
        sx={{ marginTop:'none', borderColor: '#ffff',  textAlign:'left', bgcolor: '#ffff', }}
      >
        <Tab label="Groceries"  />
        <Tab label="Health and Beauty" />
        <Tab label="Womens Fashion"  />
        <Tab label="Mens Fashion"  />
        <Tab label="Home LifeStyle"  />
        <Tab label="Sports"  />
        <Tab label="Automotive"  />
        
      </Tabs>
      </Container>
      </Grid>
      <Grid item xs={8} md={8}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  
                  display: 'block',
                  maxWidth: '900px',
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
            
          </div>
        ))}
        
      </AutoPlaySwipeableViews>
  
      <MobileStepper
        steps={maxSteps}
        position="static"
        sx={{background:'none',color:'#ffff', justifyContent:'center'}}
        activeStep={activeStep}
       
          />
     
        </Grid>
    
        <Grid item xs={1}>
        </Grid>
        
        </Grid>
    
        </Box>
 
//   <Container maxWidth="sm">
 
// </Container>
  )
}

export default Main;