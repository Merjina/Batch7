import React, { useState } from 'react';
import '../styles/Login.css';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import user_icon from '../components/Assets/user.png';
import email_icon from '../components/Assets/email.png';
import password_icon from '../components/Assets/password.png';

const InputField = ({ icon, type, placeholder, value, onChange }) => (
  <div className="login-input-container">
    <img src={icon} alt="" className="input-container__icon" />
    <input
      type={type}
      placeholder={placeholder}
      className="login-input-container__input"
      value={value}
      onChange={onChange}
      aria-label={placeholder}
    />
  </div>
);

function Login({ setCurrentUser }) {
  const users = [
    { username: 'admin@gmail.com', password: 'password', role: 'admin' },
    { username: 'user1@gmail.com', password: 'pass1', role: 'user' },
  ];

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    setError('');
    const foundUser = users.find(
      (u) => u.username === email && u.password === password
    );

    if (foundUser) {
      setCurrentUser(foundUser); // Update the current user
      if (foundUser.role === 'admin') {
        navigate('/admin'); // Navigate to Admin page
      } else {
        navigate('/'); // Navigate to Home page
      }
    } else {
      setError('Invalid email or password');
    }
  };

  return (


    <div className="login-container">
      <div className="login-header">
        <div className="login-text">{action}</div>
      </div>

      <div className="login-inputs">
        {action==="Login"?<div></div>:<InputField
          icon={user_icon}
          type="name"
          placeholder="Name"
          value={user}
          onChange={(e) => setUser(e.target.value)}
        />}

        <InputField
          icon={email_icon}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputField
          icon={password_icon}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {error && <div className="error-message">{error}</div>}

      <div className="forgot-password">
        Lost Password? <span className="forgot-password__link">Click Here</span>
      </div>
      <div className="submit-container">
        <button className="submit" onClick={handleLogin}>

          Login
        </button>
      </div>
    </div>
  );
}

export default Login;