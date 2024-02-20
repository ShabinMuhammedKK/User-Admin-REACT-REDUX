import React from 'react';
import {useSelector} from 'react-redux';
import { Navigate,Outlet } from 'react-router-dom';




const UserPrivateRoute = () => {

    const {userInfo} = useSelector((state)=> state.userAuth);
  return userInfo ? <Outlet/> : <Navigate to='/' replace />
}

export default UserPrivateRoute