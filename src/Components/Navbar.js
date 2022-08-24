import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { color } from '@mui/system';
import {
    MemoryRouter,
    Route,
    Routes,
    Link,
    matchPath,
    useLocation,
  } from 'react-router-dom';


const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: '#f57224',
    },
    secondary: {
      // This is green.A700 as hex.
      main: '#11cb5f',
    },
  },
});

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
 

  return (
   
    <Grid item xs={6} md={12}> 
    <Box sx={{ width: '100%', bgcolor: '#ececec', fontSize:'10px' }}>
         <ThemeProvider theme={theme}>
            
      <Tabs value={value} onChange={handleChange} centered    textColor="primary"
        indicatorColor="primary" > 
     
        <Tab label="SAVE MORE ON APP" />
       
        <Tab label="DARAZ AFFILAIATE PROGRAM" />
        <Tab label="SELL ON DARAZ"  />
        <Tab label="CUSTOMER CARE" />
        <Tab label="Dashboard" value="dashboard" to="/dashboard" component={Link} />
        <Tab label="LOGIN" value="login" to="/login" component={Link} />
        <Tab label="SIGNUP" />
        <Tab label="زبان تبدیل کریں" />
        
      </Tabs>
      </ThemeProvider>
      
   
      
    </Box>
    </Grid>


  );
}