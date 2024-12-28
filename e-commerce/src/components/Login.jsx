import React, { useState } from 'react';
import '../styles/Login.css';
import '../styles/Navbar.css';
import { useNavigate } from 'react-router-dom';
import user_icon from '../components/Assets/user.png';
import email_icon from '../components/Assets/email.png';
import password_icon from '../components/Assets/password.png';

const InputField = ({ icon, type, placeholder, value, onChange }) => (
  <div className="input-container">
    <img src={icon} alt="" className="input-container__icon" />
    <input
      type={type}
      placeholder={placeholder}
      className="input-container__input"
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
    const user = users.find(
      (u) => u.username === email && u.password === password
    );

    if (user) {
      setCurrentUser(user); 
      navigate('/');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">Login</div>
      </div>

      <div className="inputs">
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

      <div className="submit-container">
        <button className="submit" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
