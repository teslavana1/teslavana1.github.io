import './css/App.css';
import Main from './components/Main';
import DrawerAppBar from "./components/Navbar";
import { unstable_createMuiStrictModeTheme } from "@mui/material";
import { ThemeProvider } from "@mui/system";
import { Navigate, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getHours } from 'date-fns';

const light = unstable_createMuiStrictModeTheme({
  typography: {
    h1: {
      fontWeight: 600,
      fontSize: ['50px', '!important'],
      fontFamily: ['Poppins', '!important'],
      color: 'white'
    },
    h2: {
      fontWeight: 500,
      fontSize: ["32px", '!important'],
      fontFamily: ['Poppins', '!important'],
    },
    h3: {
      fontWeight: 400,
      fontSize: ["29px", '!important'],
      color: 'white'
    },
    h4: {
      fontSize: ["24px", '!important'],
      letterSpacing: '.1em',
      textTransform: 'uppercase',
    },
    h6: {
      color: 'black'
    },
    body1: {
      fontSize: ["16px", '!important']
    },
    body2: {
      fontSize: ["14px", '!important']
    },
    p: {
      fontSize: '12px',
      fontWeight: 700,
    },
    fontFamily: [
      'Inter',
      'sans-serif'
    ].join(','),
  },
});

const dark = unstable_createMuiStrictModeTheme({
  grid: {
    '&:.main': {
      backgroundColor: 'black',
    },
  },
  typography: {
    h1: {
      fontWeight: 600,
      fontSize: ['50px', '!important'],
      fontFamily: ['Poppins', '!important'],
      color: 'white'
    },
    h2: {
      fontWeight: 500,
      fontSize: ["32px", '!important'],
      fontFamily: ['Poppins', '!important'],
      color: 'white'
    },
    h3: {
      fontWeight: 400,
      fontSize: ["29px", '!important'],
      color: 'white'
    },
    h4: {
      fontSize: ["24px", '!important'],
      letterSpacing: '.1em',
      textTransform: 'uppercase',
      color: 'white'
    },
    h6: {
      color: 'white'
    },
    body1: {
      fontSize: ["16px", '!important'],
      color: 'white'
    },
    body2: {
      fontSize: ["14px", '!important'],
      color: 'white'
    },
    p: {
      fontSize: '12px',
      fontWeight: 700,
      color: 'white'
    },
    fontFamily: [
      'Inter',
      'sans-serif'
    ].join(','),
  },
});

function App() {

  const [theme, setTheme] = useState(null)

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(()=> {
    if (getHours(new Date()) > 6 && getHours(new Date()) < 19) {
      setTheme('dark')
    } else {
      setTheme('dark')
    } 
  }, [])

  return (
    <div className="App" style={{backgroundColor: 'black'}}>
      <ThemeProvider theme={theme === 'light' ? light : dark}>
        <DrawerAppBar toggleTheme={toggleTheme} theme={theme} />
        <Routes>
          <Route path="/" element={<Main theme={theme} />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
