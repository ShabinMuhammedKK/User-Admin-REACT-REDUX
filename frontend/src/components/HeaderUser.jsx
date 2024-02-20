import React from "react";
import {
  FaHome,
  FaSignInAlt,
  FaSignOutAlt,
  FaUser,
  FaDatabase,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./HeaderUser.css";

const HeaderUser = () => {
  const location = useLocation();

  const isHomePage = location.pathname === "/home";
  const isAdminPage = location.pathname.startsWith("/admin");
  const isProfilePage = location.pathname === "/profile";
  const isRegisterPage = location.pathname === "/register";

  const handleLogout = () => {
    // Perform logout action based on user type (admin or regular user)
    if (isAdminPage) {
      // Handle admin logout
      // Redirect to admin login page or perform admin logout action
      console.log("Admin logout");
    } else {
      // Handle regular user logout
      // Redirect to regular user login page or perform regular user logout action
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
              <span className="page-name">LogOut</span>

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

          {/* Render admin-specific actions */}
          {isAdminPage && !isRegisterPage && (
            <>
              <button onClick={handleLogout} className="butn">
                <FaSignOutAlt className="btn" />
              </button>
              <span className="page-name">LogOut</span>

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
        </div>
      </div>
    </div>
  );
};

export default HeaderUser;