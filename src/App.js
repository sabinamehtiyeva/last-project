import React from 'react'
import { Routes, Route } from 'react-router-dom'
import MainPage from './Pages/MainPage/MainPage'
import User from './Pages/User/User'
import GifView from './Pages/GifView/GifView'
import About from './Pages/About/About'
import SearchPage from './Pages/SearchPage/SearchPage'
import Navbar from './Components/Navbar/Navbar'
import Contact from './Pages/Contact/Contact'
import NotFoundPage from './Pages/NotFoundPage/NotFoundPage'
import "./Style/style.css"
import Search from './Components/Search/Search'
import Login from './Pages/Login/Login'
import Explore from './Pages/Explore/Explore'
import { useSelector } from 'react-redux'


function App() {
   const loginModal = useSelector(state => state.loginModal)
   return (
      <div className='app'>
         {loginModal && <Login />}
         <Navbar />
         <Routes>
            <Route path='/' element={<><Search /><MainPage /></>} />
            <Route path='/search/:value' element={<><Search /><SearchPage /></>} />
            <Route path='/user/:name' element={<><Search /><User /></>} />
            <Route path='/view/:name' element={<><Search /><GifView /></>} />
            <Route path='/sign-in' element={<Login />} />
            <Route path='/explore' element={<><Search /><Explore /></>} />
            <Route path='/about' element={<About />} />
            <Route path='/contact-us' element={<Contact />} />
            <Route path='*' element={<NotFoundPage error='404' />} />
         </Routes>
      </div>
   )
}

export default App