import React from 'react'
import './Favorites.css'
import Masonry from 'react-masonry-css'
import GifItem from '../GifItem/GifItem'

const Favorites = () => {

   let favorites = JSON.parse(localStorage.favoriteItem)

   const breakPoints = {
      default: 4,
      1240: 3,
      780: 2,
      540: 1
   }

   return (
      <div className="favorites">
         <h2>Favorites</h2>
         {favorites.length ? <Masonry
               breakpointCols={breakPoints}
               className="my-masonry-grid"
               columnClassName="my-masonry-grid_column"
            >
               {favorites.map(item => (
                  <GifItem key={item.id} {...item} />
               )) }
            </Masonry> : <div className='no-results'>No Results
            <img src="https://cdn.dribbble.com/users/2394319/screenshots/4773584/media/598d91dbd5b67d8bbb9e38d2d8e0967c.png?compress=1&resize=800x600&vertical=top" alt="" /></div> } {/* sonra duzelt */} 
      </div>
   )
}

export default Favorites