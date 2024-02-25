import React, { useEffect, useState } from 'react'
import './HomeUser.css'
import {useSelector} from 'react-redux';
import axios from 'axios';


const HomeUser = () => {
  const [userName,setUserName] = useState('');

  const userData = useSelector(state=>state.userAuth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userEmail = userData.userInfo.email;
        const response = await axios.post('http://localhost:8000/user/userFullData', {userEmail});
        setUserName(response.data.name)


      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchData();
  }, [userData]);

  return (
    <>
    <div className="home-container">
    <div className="content-cotainer">
      <div className="title">
      &#128075; Hi ,{userName}
      </div>
      <div className="desc">
      You have been logged in successfully
      </div>
    </div>
    </div>

    </>
  )
}

export default HomeUser