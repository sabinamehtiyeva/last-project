import React, { useEffect, useState } from 'react'
import './FeaturedGifs.css'
import GifItem from '../GifItem/GifItem'
import Masonry from 'react-masonry-css'
import Loading from '../ui/Loading'

const getFeatured = async () => {
   const response = await fetch(`https://g.tenor.com/v1/trending?key=O2F76B8G7S1C&limit=50`)
   const data = response.json();
   return data;
}

function FeaturedGifs() {
   const [feature, setFeature] = useState([])
   const [status, setStatus] = useState(false)

   const statusFunc = () => {
      setStatus(true)
   }

   useEffect(() => {
      getFeatured().then(data => setFeature(data.results));
      setTimeout(statusFunc, 500);

      return () => {
         clearTimeout(statusFunc)
      }
   }, [])

   const breakPoints = {
      default: 4,
      1240: 3,
      780: 2,
      540: 1
   }
   console.log(feature);

   return (
      status && feature.length ? <div className='feature-gifs'>
         <h3>Featured GIFs</h3>
         <div className="gif-wrapper">
            <Masonry
               breakpointCols={breakPoints}
               className="my-masonry-grid"
               columnClassName="my-masonry-grid_column"
            >
               {feature.map(item => (
                  <GifItem key={item.id} {...item} />
               )) }
            </Masonry>
         </div>
      </div> : <Loading />
   )
}

export default FeaturedGifs