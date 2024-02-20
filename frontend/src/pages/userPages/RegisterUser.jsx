import React, {useState} from 'react';
import './RegisterUser.css';
import { Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';





const RegisterUser = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confPassword: ''
  });

  const navigate = useNavigate();

  const { name, email, password, confPassword } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confPassword) {
      toast.error('Passwords do not match');
    } else {
      try {
        const response = await axios.post('http://localhost:8000/user/registerUser', formData);
        if(response){
          navigate('/home')
        }
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };


  return (
    <>
      <div className="parent-container">
        <div className="child-container">
          <section className="heading">
            <h1>REGISTER</h1>
            <p>Please create an account</p>
          </section>
          <section className="form">
            <form onSubmit={onSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  placeholder="Enter your name"
                  onChange={onChange}
                />
              </div>
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
                <input
                  type="password"
                  className="form-control"
                  id="confPassword"
                  name="confPassword"
                  value={confPassword}
                  placeholder="Confirm your password"
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
              Already have an account? <Link to="/">Login</Link>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default RegisterUser;
