import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { BASE_URL } from "../ConnectionServer";

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const { username, password, confirmPassword } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      console.log('Passwords do not match');
      return;
    }
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const body = JSON.stringify({ username, password });
      const res = await axios.post(`${BASE_URL}/api/register`, body, config);
      console.log(res.data); // Log the response data if registration is successful
    } catch (err) {
      console.error('Registration error:', err.response.data);
    }
  };

  return (
    <div className="container">
      <h2>Register</h2>
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
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            name="confirmPassword"
            value={confirmPassword}
            onChange={(e) => onChange(e)}
            minLength="6"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Register;
