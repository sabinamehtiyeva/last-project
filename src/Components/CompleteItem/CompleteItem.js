import React from 'react'
import './CompleteItem.css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearch, setInputChange } from '../../Redux/action'
import { WiDirectionUpRight } from 'react-icons/wi'

const CompleteItem = ({ item }) => {

   const dispatch = useDispatch()
   let navigate = useNavigate()

   const handleClick = () => {
      dispatch(setSearch(item))

      navigate(`../search/${item}`)
      dispatch(setInputChange(item))
   }

   return (
      <li onClick={handleClick} className='complete-item'>
         <WiDirectionUpRight size={30}/> <p>{item}</p>
      </li>
   )
}

export default CompleteItem