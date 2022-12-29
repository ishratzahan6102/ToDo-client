import './App.css';
import * as React from 'react';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



function App() {
  return (
    <div  style={{maxWidth: '1200px', margin: '2px auto ', padding: '6px', }}>
      <RouterProvider router={router}></RouterProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
    
      </ThemeProvider>
     
    </div>
  );
}

export default App;
