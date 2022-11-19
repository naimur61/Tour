import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import logout from '../../../Assets/Login/logout.svg'
import editor from '../../../Assets/Login/editor.svg'
import profile from '../../../Assets/Login/profile.svg'
import userImg from '../../../Assets/Login/user.svg'
import useAuth from '../../../Hooks/Auth/useAuth';
import { FaPaperPlane } from 'react-icons/fa';
import './Header.css'



const Header = () => {
   const { user, logoutUser } = useAuth();

   const handlerLogout = () => {
      logoutUser()
         .then(() => { })
         .catch(error => console.error(error))
   }



   const navLink = <>
      <li><NavLink className={({ isActive }) => isActive ? 'active' : undefined} to='/home'>Home</NavLink></li>
      <li><NavLink to='/packages'>Packages</NavLink></li>
      <li><NavLink to='/blogs'>Blogs</NavLink></li>
      {(user || user?.uid) ?
         <>
            <li><NavLink to='/reviewsByEmail'>My Reviews</NavLink></li>
            <li><NavLink to='/addPlaces'>Add Places</NavLink></li>
         </>
         : <li><NavLink to='/login'>Login</NavLink></li>}
   </>



   return (
      <div className="navbar md:px-10">
         <div className="navbar-start">
            <div className="dropdown">
               <label tabIndex={0} className="btn btn-ghost lg:hidden">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
               </label>
               <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 header-style">
                  {navLink}
               </ul>
            </div>
            <Link className='text-3xl text-sky-600 flex items-center gap-2 font-semibold'> <FaPaperPlane /> <span style={{ fontFamily: "'Acme', sans-serif" }}>Tour</span></Link>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0 header-style">
               {navLink}
            </ul>
         </div>
         <div className="navbar-end">
            {(user || user?.uid) ?

               <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="btn btn-ghost btn-circle ">
                     <div className="w-10 rounded-full">
                        {
                           (user?.photoURL !== null) ?
                              <img className="w-10 h-10 rounded-full" src={user?.photoURL
                              } alt='' />
                              :
                              <img src={userImg} alt='' />
                        }
                     </div>
                  </label>
                  <ul tabIndex={0} className="mt-3 p-2  menu menu-compact dropdown-content bg-base-100 shadow-lg rounded-box w-52">
                     <li>
                        <Link to='/profile' className="justify-between">
                           <img className='profile-i rounded-full' src={!(user?.photoURL === null) ? user?.photoURL : profile} alt="" />
                           <span className="badge">{(user?.displayName !== null) ?
                              user?.displayName
                              : 'New'}</span>
                        </Link>
                     </li>
                     <li><Link to='/reviewsByEmail'><img className='profile-i' src={editor} alt="" />Edit Reviews</Link></li>
                     <li><Link to='/login' onClick={handlerLogout} ><img className='profile-i' src={logout} alt="" />Logout</Link></li>
                  </ul>
               </div>
               :
               <div className="w-10 rounded-full">
                  <Link to='/login'><img src={userImg} alt='' data-tip='Go to login!' /></Link>
                  <ReactTooltip place="top" type="info" effect="float" />
               </div>
            }
         </div>
      </div>
   );
};

export default Header;




