import React, { useState } from 'react'
import './Login.css'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { setLoginModal, setLoginStatus } from '../../Redux/action'
import { useNavigate } from 'react-router-dom'

const Login = () => {
   const [signupShow, setSignupShow] = useState(false)
   const [username, setUsername] = useState('')
   const dispatch = useDispatch()

   const navigate = useNavigate()
   const handleClick = () => {
      setSignupShow(!signupShow)
   }

   const handleFormSubmit = (e) => {
      localStorage.setItem('username', JSON.stringify(username))
      localStorage.setItem('loginStatus', true)
      dispatch(setLoginStatus(localStorage.loginStatus))
      
      setTimeout(() => {
         dispatch(setLoginModal(false))
         navigate(`/user/${JSON.parse(localStorage.username)}`)
         // loading qoy
      }, 300);
      e.preventDefault()
   }
   return (
      <div className='login-page'>
         <div className="container">
            <div className={`user ${signupShow && 'sign-up-box'}`}>
               <AiOutlineClose onClick={() => dispatch(setLoginModal(false))} className='close' />
               <div className="img-box">
                  <img src="https://bestanimations.com/media/keys/28804563key-animated-gif-3.gif" alt="" />
               </div>
               <div className="form-box">
                  <form onSubmit={(e) => handleFormSubmit(e)}>

                     <h2>Sign {signupShow ? 'Up' : 'In'}</h2>

                     <input
                        onChange={(e) => setUsername(e.target.value)}
                        value={username}
                        type="text"
                        placeholder='Username'
                        required
                     />
                     {signupShow && (
                        <>
                           <input type="email" placeholder='Email Address' required />
                           <input type="password" placeholder='Create Password' required />
                        </>
                     )}
                     <input
                        type="password"
                        placeholder={`${signupShow ? 'Create Password' : 'Password'}`}
                        required
                     />
                     <button>
                        {signupShow ? 'Sign Up' : 'Sign In'}
                     </button>
                     <p className="signup">
                        {signupShow ? 'Already have an account?' : "don't have an account?"}
                        <span onClick={handleClick}>{signupShow ? 'Sign In' : 'Sign Up'}</span>
                     </p>
                  </form>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login