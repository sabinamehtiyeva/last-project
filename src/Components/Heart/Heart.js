import React, { useState } from 'react'
import './Heart.css'

const Heart = React.forwardRef(({ item }, ref) => {

   let favoriteItemArray = [];
   !localStorage.favoriteItem && localStorage.setItem('favoriteItem', JSON.stringify(favoriteItemArray))

   favoriteItemArray = JSON.parse(localStorage.favoriteItem)
   let check = (favoriteItemArray.find(a => a.id === item.id) === undefined ? false : favoriteItemArray.find(a => a.id === item.id).id === item.id)
   const [heartActive, setHeartActive] = useState(check)

   const heartClick = () => {
      if (!Boolean(favoriteItemArray.find(a => a.id === item.id))) {
         favoriteItemArray.push({ ...item, status: !heartActive })
         localStorage.setItem('favoriteItem', JSON.stringify(favoriteItemArray))
         setHeartActive(true)
      }
      else {
         const index = favoriteItemArray.findIndex(a => a.id === item.id)
         favoriteItemArray.splice(index, 1)
         localStorage.setItem('favoriteItem', JSON.stringify(favoriteItemArray))
         setHeartActive(false)
      }
   }

   return (
      <div
         ref={ref}
         onClick={heartClick}
         className="heart-box"
         tabIndex={23}
      >
         <span
            tabIndex={30}
            className={`${heartActive ? 'heart heart-active' : 'heart'}`}>
         </span>
      </div>
   )
})

export default Heart