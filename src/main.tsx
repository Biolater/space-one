import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App.tsx';
import './index.css';
import Login from './components/Navbar/Login.jsx';
import Signup from './components/Navbar/Signup.tsx';
import Dashboard from './components/Dashboard/Dashboard.tsx';
import Friends from './components/Friends/Friends.tsx';
import ProfilePage from './components/ProfilePage/ProfilePage.tsx';
const theme = createTheme({
  typography: {
    fontFamily: 'Montserrat, sans-serif',
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/friends" element={<Friends />} />
          <Route path="/profile/:username" element={<ProfilePage />} /> 
        </Routes>
      </Router>
    </ThemeProvider>
  </React.StrictMode>
);
