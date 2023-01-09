import React, { useContext, useEffect, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import "../home/nav.css";
import { logout as exsist } from "../../redux/store";
import { useSelector,useDispatch } from "react-redux";
import Axios from '../../axios/axios'
function Nav() {
  
  let user = useSelector((state) => state.user.value.username)
  let id = useSelector((state)=>state.user.value.id)
  let navigate = useNavigate()
  let dispatch=useDispatch()

  function logout() {
    try {
      
      Axios.get('/logout', {withCredentials: true}).then(() => {
        dispatch(exsist())
        console.log('reachedclient');
      })

    } catch (err){
      console.log(err);
      
    }
   
  }
  
  return (
    <div>
      <header>
        <img
          className="logo"
          src="https://o.remove.bg/downloads/3f9867f4-a414-4101-a838-eebeef51fae1/apple-logo-black-isolated-on-transparent-background-free-vector-removebg-preview.png"
          alt=""
          srcset=""
        />
        <div className="user">
          
            <ul className="list">
              <li>{user?user:''}</li>
              <li>
                <Link className="link" to="/profile">
                  view profile
                </Link>
              </li>
            {user? <li>
                <span onClick={logout} >logout</span>
              </li>:
              <li>
                <Link className="link" to="/login">
                  Login
                </Link>
              </li>}
            </ul>
          
        </div>
      </header>
    </div>
  );
}

export default Nav;
