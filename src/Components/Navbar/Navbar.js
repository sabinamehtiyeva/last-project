import React, { useState, useEffect } from 'react'
import './Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { CgProfile } from 'react-icons/cg'
import { Logo } from '../ui/Logo'
import { useDispatch, useSelector } from 'react-redux'
import { setLoginModal } from '../../Redux/action'

function Navbar() {

   const [hamburgerActive, setHamburgerActive] = useState(true)

   let username
   !localStorage.username ? username = null : username = JSON.parse(localStorage.username)

   const navigate = useNavigate()
   const loginStatus = useSelector(state => state.loginStatus)
   const dispatch = useDispatch()

   const handleClick = () => {
      dispatch(setLoginModal(true))
   }

   const handleResize = () => {
      if(window.innerWidth < 620) {
         setHamburgerActive(false)
      }
      else {
         setHamburgerActive(true)
      }
   }

   useEffect(() => {
      window.addEventListener('resize', handleResize)

      return () => {
         window.removeEventListener('resize', handleResize)
      }
   }, [])


   return (
      <nav>
         <div className="container">
            <Logo className="logo" />
            <div className='right'>
               {hamburgerActive && <ul>
                  <li className='nav-item'><NavLink to="/explore">Explore GIFs</NavLink></li>
                  <li className='nav-item'><NavLink to="/contact-us">Contact Us</NavLink></li>
                  <li className='nav-item'><NavLink to="/about">About</NavLink></li>
               </ul>}
               <div className='user'>
                  {loginStatus && username ?
                     <span style={{cursor: 'pointer'}}>
                        <CgProfile onClick={() => navigate(`/user/${username}`)} size={28} />
                     </span> :
                     <button className='signin' onClick={handleClick} type='button'>Sign In</button>}
               </div>
               <button
                  type='button'
                  onClick={() => setHamburgerActive(!hamburgerActive)}
                  className={`hamburger ${hamburgerActive && 'active'}`}>
                  <span className='line'></span>
                  <span className='line'></span>
                  <span className='line'></span>
               </button>

            </div>

         </div>
      </nav>
   )
}

export default Navbar