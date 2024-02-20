import React from 'react'
import './ProfilePage.css'
import { FaPen } from "react-icons/fa";


const ProfilePage = () => {
  return (
    <>
      <div className="parent-container">
        <div className="child-container">
          <section className="heading">
            <h1>Profile</h1>
            
          </section>
          <div className="profile-div">
            <div className="img-add">
                <FaPen className='edit-pen'/>
            </div>
          </div>
          <section className="form">
            <form >
              <div className="form-group">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                //   value={name}
                  placeholder="Enter your name"
                //   onChange={onChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                //   value={email}
                  placeholder="Enter your email"
                //   onChange={onChange}
                />
              </div>
              
              <div className="form-group">
                <button type="submit" className="btn1 btn-block">
                  Update
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </>
  )
}

export default ProfilePage