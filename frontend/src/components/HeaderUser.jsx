import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./HeaderUser.css";

const HeaderUser = () => {
  return (
    <>
      <div className="main-container">
        <div className="contents">
          <h3>User Header</h3>
          <div className="actions">
            <Link to="/user/login" style={{color: 'inherit'}}>
              <FaSignInAlt className="btn"/>
            </Link>
            {/* <Link to="/user/login" style={{color: 'inherit'}}>
            <FaSignOutAlt className="btn"/>
            </Link>
            <Link to="/user/login" style={{color: 'inherit'}}>
            <FaUser className="btn" />
            </Link> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderUser;
