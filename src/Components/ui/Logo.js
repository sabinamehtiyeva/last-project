import React from 'react'
import './Logo.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setInputChange } from '../../Redux/action'

export const Logo = ({ className }) => {
   let navigate = useNavigate()
   const dispatch = useDispatch()

   const handleClick = () => {
      navigate('/')
      dispatch(setInputChange(''))
   }

   return (
      <div onClick={handleClick} className={className}>
         GIFs
      </div>
   )
}