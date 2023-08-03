import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login_ from './components/Login_';

import Register from './components/Register';
import UserInfo from './components/UserInfo';
import Logout from './components/Logout';
import ForgotPassword from './components/ForgotPasswordUP';

// import Login from './components/Login_'; // Change this to the actual correct import
import * as api from './api';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = async (data) => {
    try {
      const response = await api.login(data);
      if (response.status === 200) {
        setLoggedIn(true);
      }
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  const handleForgotPassword = async (data) => {
    try {
      const response = await api.forgotPassword(data);
      if (response.status === 200) {
        setLoggedIn(true);
      }
    } catch (error) {
      console.error('Forgot Password error:', error);
    }
  };

  const handleRegister = async (data) => {
    try {
      const response = await api.register(data);
      if (response.status === 201) {
        // Optionally, you could automatically log in the user after registration
      }
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  const handleLogout = async () => {
    try {
      await api.logout();
      setLoggedIn(false);
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login_ handleLogin={handleLogin} />} />
        <Route path="/register" element={<Register handleRegister={handleRegister} />} />
        <Route
          path="/user"
          element={
            loggedIn ? (
              <div>
                <UserInfo />
                <Logout handleLogout={handleLogout} />
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />

      </Routes>
    </Router>
  );
};

export default App;
