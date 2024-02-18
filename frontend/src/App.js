import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import LoginUser from './pages/userPages/LoginUser.jsx';
import RegisterUser from './pages/userPages/RegisterUser.jsx';
import HomeUser from './pages/userPages/HomeUser.jsx';
import DashAdmin from './pages/adminPages/DashAdmin.jsx';
import LoginAdmin from './pages/adminPages/LoginAdmin.jsx';
import RegisterAdmin from './pages/adminPages/RegisterAdmin.jsx';
import HeaderUser from './components/HeaderUser.jsx';

function App() {
  return (
    <>
    <Router>
    <div className='container'>
    <HeaderUser/>
      <Routes>
        {/* user routes */}
        <Route path='/user/login' element={<LoginUser/>}/>
        <Route path='/user/register' element={<RegisterUser/>}/>
        <Route path='/user/home' element={<HomeUser/>}/>
         {/* admin routes */}
        {/* <Route path='/admin/login' element={<LoginAdmin/>}/>
        <Route path='/admin/register' element={<RegisterAdmin/>}/>
        <Route path='/admin/dash' element={<DashAdmin/>}/> */}
      </Routes>
    </div>
    </Router>
    </>
  );
}

export default App;
