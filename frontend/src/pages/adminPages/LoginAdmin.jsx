import React, { useState,useEffect } from 'react';
import '../userPages/LoginUser.css';
import { Link } from 'react-router-dom';
import axios from 'axios'
import {toast} from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from 'react-redux';
import {setCredentials} from '../../app/adminAuthSlice';

const LoginAdmin = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {email, password} = formData;

  const {adminInfo} = useSelector((state)=>state.adminAuth)

  useEffect(()=>{
    if(adminInfo){
      navigate('/admin/home')
    }
  },[navigate,adminInfo]);



  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
       await axios.post('http://localhost:8000/admin/login',formData)
       dispatch(setCredentials(formData))
       navigate('/admin/home')
    } catch (error) {
      toast.error(error?.data?.message || 'An error occurred');
    }
    
  };

  return (
    <>
      <div className="parent-container">
        <div className="child-container">
          <section className="heading">
            <h1>Admin Login</h1>
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
            Don't have an account? <Link to="/admin/register">Register</Link>
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default LoginAdmin;
