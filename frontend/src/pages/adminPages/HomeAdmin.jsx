import React from 'react'
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';

const HomeAdmin = () => {

  const [adminName,setAdminName] = useState('');

  const adminData = useSelector(state=>state.adminAuth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const adminEmail = adminData.userInfo.email;
        const response = await axios.post('http://localhost:8000/admin/adminFullData', {adminEmail});
        // console.log(response.data.name)
        // // setAdminName(response.data.name)


      } catch (error) {
        console.error('Error fetching admin data:', error);
      }
    };
  
    fetchData();
  }, [adminData]);

  return (
    <>
    <div className="home-container">
    <div className="content-cotainer">
      <div className="title">
      &#128075;hi,{adminName} !
      </div>
      <div className="desc">
      You have been logged in successfully
      </div>
    </div>
    </div>

    </>
  )
}

export default HomeAdmin