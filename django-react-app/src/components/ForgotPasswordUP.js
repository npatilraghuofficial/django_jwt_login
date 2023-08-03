import React, { useState } from 'react';
// import { forgotPassword } from './api';
import  * as api from '../api';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleForgotPassword = async () => {
    try {
      await api.forgotPassword(email);
      setIsSent(true);
    } catch (error) {
      console.error('Failed to initiate password reset:', error);
    }
  };

const handleSubmit = (e) => {
  e.preventDefault();
  if (email && newPassword) {
    handleForgotPassword(email, newPassword);
    setIsSent(true);
  } else {
    alert("Please fill in both email and new password");
  }
};


  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Forgot Password</h2>
      {isSent ? (
        <p style={styles.successMessage}>
          Password reset succesfull.
        </p>
      ) : (
        <form onSubmit={handleSubmit} style={styles.form}>
          <label>
            Email:
            <input
              type="email"
              placeholder="Email"
              style={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            New Password:
            <input
              type="password"
              placeholder="New Password"
              style={styles.input}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
          </label>
          <button type="submit" style={styles.button}>Reset Password</button>
        </form>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
  },
  title: {
    fontSize: '24px',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '300px',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ddd',
    borderRadius: '4px',
  },
  button: {
    width: '300px',
    padding: '10px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
  successMessage: {
    fontSize: '18px',
    color: 'green',
    marginBottom: '10px',
  },
};

export default ForgotPassword;
