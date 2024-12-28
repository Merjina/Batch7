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

  const [user, setUser] = useState('');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const [action, setAction] = useState("Login");

  const handleLogin = () => {
    setError('');
    const foundUser = users.find(
      (u) => u.username === email && u.password === password
    );

    if (foundUser) {
      if (foundUser.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/'); 
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

        <div className="forgot-password">
          Lost Password? <span className="forgot-password__link">Click Here</span>
        </div>
      

      <div className="submit-container">
        <button
          className={action === "Login" ? "submit" : "submit gray"}
          onClick={handleLogin}
        >
          Login
        </button>
        <button
          className={action === "Sign Up" ? "submit" : "submit gray"}
          onClick={() => setAction("Sign Up")}
        >
          Sign Up
        </button>

     
    </div>
  );
}

export default Login;
