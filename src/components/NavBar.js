import React from 'react'
import './NavBar.css'
import logo from '../images/logo.PNG'
import {NavLink, useNavigate } from 'react-router-dom'
import My from '../images/My.jpg'
import { useDispatch, useSelector } from 'react-redux'

const NavBar = () => {
  //selector
 
const user = useSelector(state=>state.userReducer);
  //declaring Dispatch
  const dispatch = useDispatch();
  //declaring Navigation
  const navigate = useNavigate();
  //declaring useselector
  //let user = useSelector((state) => state.user);
  //console.log(user);
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch({ type: "LOGIN_ERROR" });
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };
    return (
        <div>
            <nav className="navbar bg-light shadow-sm">
                <div className="container-fluid">
                    <NavLink className="navbar-brand ms-5" to="/">
                        <img alt="logo" src={logo} height="45px"/>
                    </NavLink>
                    <form className="d-flex me-md-5" role="search">
                        <input className="searchbox form-control me-2 text-muted" type="search" placeholder="Search" />
                        <a className="nav-link text-dark fs-5 searchIcon" href="#"><i className="fa-solid fa-magnifying-glass"></i></a>
                        <a className="nav-link text-dark fs-5" href="#"><i className="fa-solid fa-house"></i></a>
      
                       { user ? <a className="nav-link text-dark fs-5" href="#"><i className="fa-regular fa-heart"></i></a>:''}
                        <div className="dropdown">
                        { user ? <> <a className="btn" href="#" role="button" data-bs-toggle="dropdown">
                          <img className='navbar-profile-pic' alt="profile pic" src={My}/>
                          </a>

                          <ul className="dropdown-menu">
                            <li>
                                <NavLink className="dropdown-item mt-0" to="/myprofile">My Profile</NavLink>
                            </li>
                            <li>
                              <a className="dropdown-item" href="#" onClick={()=>logout()}>
                                Logout
                              </a>
                            </li> 
                          </ul></> : ''}
                        </div>
                        
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default NavBar