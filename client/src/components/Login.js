// client/src/components/Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const { username, password } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    // Implement login logic here
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            name="username"
            value={username}
            onChange={(e) => onChange(e)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name="password"
            value={password}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Login
        </button>
      </form>
      <p>
        Don't have an account? <Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Login;
