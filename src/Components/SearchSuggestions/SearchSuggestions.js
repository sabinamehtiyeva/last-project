import React from 'react'
import './SearchSuggestions.css'
import { useDispatch } from 'react-redux'
import { setSearch, setInputChange } from '../../Redux/action'
import { useNavigate } from 'react-router-dom'

function SearchSuggestions({ item }) {

   const dispatch = useDispatch()
   let navigate = useNavigate()
   const handleClick = () => {
      navigate(`../search/${item}`)
      dispatch(setSearch(item))
      dispatch(setInputChange(item))
      
   }
   return (
      <button tabIndex={56} onClick={handleClick} className='suggestions-button'>
         {item}
      </button>
   )
}

export default SearchSuggestions