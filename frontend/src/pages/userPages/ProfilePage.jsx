import React from 'react'
import './ProfilePage.css'
import { FaPen } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { useState,useEffect } from 'react';
import axios from 'axios';


const ProfilePage = () => {

  const [userName,setUserName] = useState('');
  const [usersEmail,setUserEmail] = useState('');


  const userData = useSelector(state => state.userAuth);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const userEmail = userData.userInfo.email;
        const response = await axios.post('http://localhost:8000/user/userFullData', {userEmail});
        const userName = response.data.name
        setUserName(userName)
        setUserEmail(userEmail)


      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
  
    fetchData();
  }, [userData]);


  const handleUploadImg = ()=>{
    console.log('hello')
  }

  return (
    <>
      <div className="parent-container">
        <div className="child-container">
          <section className="heading">
            <h1>Profile</h1>
            
          </section>
          <div className="profile-div">
            <div className="img-add">
                <FaPen className='edit-pen' onClick={handleUploadImg}/>
            </div>
          </div>
          <section className="form">
            <form >
              <div className="form-group">
              <h4>Name : {userName}</h4>
              </div>
              <div className="form-group">
                <h4>Email : {usersEmail}</h4>
              </div>
              
              <div className="form-group">
                {/* <button type="submit" className="btn1 btn-block">
                  Update
                </button> */}
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  )
}

export default ProfilePage