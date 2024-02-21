import React from "react";
import {
  FaHome,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaDatabase,
  FaRegistered,
  FaAd,
  FaBuilding,
  FaMarker,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./HeaderUser.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logoutUser } from "../app/userAuthSlice";
import { logoutAdmin } from "../app/adminAuthSlice";




const HeaderUser = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/home";
  const isAdminPage = location.pathname.startsWith("/admin");
  const isAdminHomePage = location.pathname === "/admin/home";
  const isAdminDashPage = location.pathname === "/admin/dash";
  const isAdminRegiterPage = location.pathname === '/admin/register'
  const isUserLogin = location.pathname === '/'
  const isAdminLogin = location.pathname === '/admin'
  const isProfilePage = location.pathname === "/profile";
  const isRegisterPage = location.pathname === "/register";
  
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {

    if (isAdminPage) {
      dispatch(logoutAdmin())
      navigate('/admin/')
      
      console.log("Admin logout");
    } else {
      dispatch(logoutUser())
      navigate('/')
      console.log("Regular user logout");
    }
  };

  return (
    <div className="main-container">
      <div className="contents">
        <h3>
          <Link to={isAdminPage ? "/admin/home" : "/home"} className="home-btn">
            {isAdminPage ? "Admin" : "User"}
          </Link>
        </h3>
        <div className="actions">
          {/* Render appropriate actions based on page and user type */}
          {!isAdminPage && isRegisterPage && (
            <>
              <Link to="/" style={{ color: "inherit" }}>
                <FaSignInAlt className="btn" />
              </Link>
              <span className="page-name">Login</span>
            </>
          )}

          {isHomePage && (
            <>
              <button onClick={handleLogout} className="butn">
                <FaSignOutAlt className="btn" />
              </button>
              <span className="page-name">Logout</span>

              <Link to="/profile" style={{ color: "inherit" }}>
                <FaUser className="btn" />
              </Link>
              <span className="page-name">Profile</span>
            </>
          )}

          {isProfilePage && (
            <>
              <Link
                to={isAdminPage ? "/admin/home" : "/home"}
                style={{ color: "inherit" }}
              >
                <FaHome className="btn" />
              </Link>
              <span className="page-name">Home</span>
            </>
          )}
          {isUserLogin && (
            <>
             <Link to="/register" style={{ color: "inherit" }}>
                <FaMarker className="btn" />
              </Link>
              <span className="page-name">Register</span>
            </>
          )}

          {/* Render admin-specific actions */}
          {isAdminDashPage && !isAdminRegiterPage && !isAdminLogin && (
            <>
              <button onClick={handleLogout} className="butn">
                <FaSignOutAlt className="btn" />
              </button>
              <span className="page-name">Logout</span>

              {location.pathname === "/admin/dash" && (
                <>
                  <Link
                    to="/admin/home"
                    style={{ color: "inherit" }}
                  >
                    <FaHome className="btn" />
                  </Link>
                  <span className="page-name">Home</span>
                </>
              )}

            </>
          )}
          {isAdminHomePage && !isAdminRegiterPage && !isAdminLogin && (
            <>
              <button onClick={handleLogout} className="butn">
                <FaSignOutAlt className="btn" />
              </button>
              <span className="page-name">Logout</span>

              {location.pathname === "/admin/home" && (
                <>
                  <Link
                to="/admin/dash"
                style={{ color: "inherit" }}
              >
                <FaDatabase className="btn" />
              </Link>
              <span className="page-name">Dashboard</span>
                </>
              )}

            </>
          )}
          {isAdminRegiterPage && (
            <>
             <Link to="/admin" style={{ color: "inherit" }}>
                <FaSignInAlt className="btn" />
              </Link>
              <span className="page-name">Login</span>
            </>
          )}
          {isAdminLogin && (
            <>
             <Link to="/admin/register" style={{ color: "inherit" }}>
                <FaMarker className="btn" />
              </Link>
              <span className="page-name">Register</span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;