import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";

function userAuth() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
  let user = useSelector((state) => state.user.value.username);
  return (
    user?<Outlet/>:<Navigate to='/login' />
  )     
}

export default userAuth