import React, { useState } from 'react';
import './LoginUser.css';
import { Link } from 'react-router-dom';

const LoginUser = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const {email, password} = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
      <div className="parent-container">
        <div className="child-container">
          <section className="heading">
            <h1>LOGIN</h1>
            <p>Please login with your existing account</p>
          </section>
          <section className="form">
            <form onSubmit={onSubmit}>
             
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={onChange}
                />
              </div>
             
              <div className="form-group">
                <button type="submit" className="btn1 btn-block">
                  Submit
                </button>
              </div>
            </form>
            <p>
            Don't have an account? <Link to="/user/register">Register</Link>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default LoginUser;
