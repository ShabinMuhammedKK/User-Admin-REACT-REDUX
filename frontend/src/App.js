import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginUser from "./pages/userPages/LoginUser.jsx";
import RegisterUser from "./pages/userPages/RegisterUser.jsx";
import HomeUser from "./pages/userPages/HomeUser.jsx";
import HeaderUser from "./components/HeaderUser.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProfilePage from "./pages/userPages/ProfilePage.jsx";
import RegisterAdmin from "./pages/adminPages/RegisterAdmin.jsx";
import LoginAdmin from "./pages/adminPages/LoginAdmin.jsx";
import HomeAdmin from "./pages/adminPages/HomeAdmin.jsx";
import DashAdmin from "./pages/adminPages/DashAdmin.jsx";
import UserPrivateRoute from "./components/UserPrivateRoute.jsx";
import AdminPrivateRoute from "./components/AdminPrivateRoute.jsx";
import store from "./app/store.js";
import { Provider } from 'react-redux';

function App() {
  return (
    <>
    <Provider store={store}>
      <Router>
        <div className="container">
          <HeaderUser />
          <Routes>
            {/* user routes */}
            <Route path="/register" element={<RegisterUser />} />
            <Route path="/" element={<LoginUser />} />

            <Route path="" element={<UserPrivateRoute />}>
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/home" element={<HomeUser />} />
            </Route>

            <Route path="/admin/" element={<LoginAdmin />} />
            <Route path="/admin/register" element={<RegisterAdmin />} />

            <Route path="" element={<AdminPrivateRoute />}>
              <Route path="/admin/home" element={<HomeAdmin />} />
              <Route path="/admin/dash" element={<DashAdmin />} />
            </Route>
          </Routes>
        </div>
      </Router>
      <ToastContainer />
      </Provider>
    </>
  );
}

export default App;
