import React, { useRef, useState } from 'react'
import './GifItem.css'
import { useNavigate } from 'react-router-dom'
import Heart from '../Heart/Heart'

const GifItem = ({ ...item }) => {
   const [hover, setHover] = useState(false)
   const heartRef = useRef()

   let navigate = useNavigate()
   const handleClick = (e) => {
      heartRef.current.contains(e.target) || navigate(`/view/${item.id}`)
   }

   return (
      <div
         onMouseEnter={() => setHover(true)}
         onMouseLeave={() => setHover(false)}
         onClick={(e) => handleClick(e)}
         className="gif" 
         tabIndex={45}
         style={{ height: `${item.media[0].tinygif.dims[1]}px` }}
      >
         {hover} {/* helelik */}
         <Heart item={item} ref={heartRef} />
         <img className='item-img' src={item.media[0].tinygif.url} alt={item.content_description} />
      </div>
   )
}

export default GifItem