import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';
import Badge from '@mui/material/Badge';



import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
import { color } from '@mui/system';


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
   
    <Grid item xs={12} md={12}> 
    <Box sx={{ width: '100%', bgcolor: '#ececec' }}>
         <ThemeProvider theme={theme}>
      <Tabs value={value} onChange={handleChange} centered   textColor="primary"
        indicatorColor="primary" > 
     
        <Tab label="SAVE MORE ON APP" />
       
        <Tab label="DARAZ AFFILAIATE PROGRAM" />
        <Tab label="SELL ON DARAZ" />
        <Tab label="CUSTOMER CARE" />
        <Tab label="TRACK MY ORDER" />
        <Tab label="LOGIN" />
        <Tab label="SIGNUP" />
        <Tab label="زبان تبدیل کریں" />
        
      </Tabs>
      </ThemeProvider>
      
   
      
    </Box>
    </Grid>


  );
}