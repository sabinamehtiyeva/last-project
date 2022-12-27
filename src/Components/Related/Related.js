import React, { useEffect } from 'react'
import './Related.css'
import { useDispatch, useSelector } from 'react-redux'
import GifItem from '../GifItem/GifItem';
import Masonry from 'react-masonry-css';
import { setSearch } from '../../Redux/action';
import Loading from '../ui/Loading';


const breakPoints = {
   default: 1,
   830: 3,
   740: 2,
   500: 1
}

const Related = ({ name }) => {
   const getSearch = useSelector(state => state.search)
   const dispatch = useDispatch()

   useEffect(() => {
      dispatch(setSearch(name, 7))
   }, [dispatch, name])

   return (
      <div className='related-gifs'>
         <div className="gif-wrapper">
            <Masonry
               breakpointCols={breakPoints}
               className="my-masonry-grid"
               columnClassName="my-masonry-grid_column"
            >
               {getSearch ? getSearch.map(item => (
                  <GifItem key={item.id} {...item} />
               )) : <Loading />}
            </Masonry>
         </div>
      </div>
   )
}

export default Related