import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import { toast } from 'react-toastify';
import mainLogo from "../assets/logo-removebg-preview.png"

const Navbar = () => {
  const {user, logOut} =use(AuthContext);
  console.log(user);
  const handleLogOut = () => { 
    logOut()
    .then(() => {
      // const handleDeleteToast = () => {
        toast.warn('User have Loged Out', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      // }
    }).catch(() => {
      toast.warn('There is a problem with loged Out', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    });
  }
                return (
                                <div className='lg:w-11/12 lg:mx-auto mx-2 '>
                                                <div className="navbar bg-gradient-to-r from-green-100 via-white to-green-100 shadow-sm mb-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/jobs">Blogs</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
      </ul>
    </div>
    <Link to="/" className="text-xl cursor-pointer"><img className='w-[70px] h-[70px]' src={mainLogo} alt="" /></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/jobs">Blogs</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/contact-us">Contact Us</NavLink></li>
        {user ? <li><NavLink to="/profile-page">Profile</NavLink></li> : ""}
    </ul>
  </div>
  <div className="navbar-end space-x-3">
    {/* <p>{user && user.email}</p> */}
    <Link to="/profile-page" className='cursor-pointer'><img className='bg-green-200 rounded-full p-1' src={user && user.photoURL} alt="" /></Link>
    { 
      user ? <button onClick={handleLogOut} className='btn'>Logout</button> : <Link to="/auth/login" className="btn">Login</Link>
    }
    { 
      user ? "" : <Link to="/auth/register" className="btn">Register</Link>
    }
  </div>
</div>
                                </div>
                );
};

export default Navbar;