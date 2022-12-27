import React, {useState, useEffect} from 'react'
import Masonry from 'react-masonry-css'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setSearch, setInputChange } from '../../Redux/action'
import './Explore.css'
import Loading from '../../Components/ui/Loading'

const getExplore = async () => {
   const response = await fetch(`https://g.tenor.com/v1/categories?key=O2F76B8G7S1C`)
   const data = response.json();
   return data;
}

const Explore = () => {
   const [explore, setExplore] = useState([])

   const dispatch = useDispatch()
   let navigate = useNavigate()

   const handleClick = (name) => {
      navigate(`../search/${name}`)
      dispatch(setSearch(name))
      dispatch(setInputChange(name))
      
   }

   useEffect(() => {
      getExplore().then(data => setExplore(data.tags));
   }, [])

   const breakPoints = {
      default: 4,
      1240: 3,
      780: 2,
      540: 1
   }

   return (
      <div className='explore-page'>
         <div className="container">
            <h2>Explore GIFs</h2>
            <div className="explore-wrapper">
            <Masonry
               breakpointCols={breakPoints}
               className="my-masonry-grid"
               columnClassName="my-masonry-grid_column"
            >
               {explore ? explore.map(item => (
                  <div key={item.name} className="exploreItem">
                     <h4 onClick={(e) => handleClick(e.target.innerText)}>{item.searchterm}</h4>
                     <img src={item.image} alt={item.name} />
                  </div>
               )) : <Loading />}
            </Masonry>
      </div> 
         </div>
      </div>
   )
}

export default Explore