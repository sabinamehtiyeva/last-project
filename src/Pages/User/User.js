import React from 'react'
import NotFoundPage from '../NotFoundPage/NotFoundPage';
import Favorites from '../../Components/Favorites/Favorites'
import './User.css'

function User() {
   let username
   localStorage.username ? username = JSON.parse(localStorage.username) : username = null
   let path = window.location.pathname
   console.log(path === `/user/${username}` && true);


   if (path !== `/user/${username}`) {
      return <NotFoundPage error='400' />
   }

   return (
      <div className="user-page">
         <div className="user-header">
            <div className="color-palette"></div>
            <div className="container">
               <div className="profile-section">
                  <div className="photo">{username.slice(0, 1).toUpperCase()}</div>
                  <div className="name">{username}</div>
               </div>
            </div>
         </div>
         <div className="container">
            {/* favorites */}
            <Favorites />
         </div>
      </div>
   )
}

export default User