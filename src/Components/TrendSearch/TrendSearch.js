import React, { useEffect, useState } from 'react'
import './TrendSearch.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useDispatch } from 'react-redux';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr'
import { useNavigate } from 'react-router-dom';
import { setSearch, setInputChange, setSuggestions } from '../../Redux/action';

const getTrend = async () => {
   const response = await fetch(`https://g.tenor.com/v1/trending_terms?key=O2F76B8G7S1C&limit=20`)
   const data = await response.json()
   return data;
}

const getData = async (name) => {
   const response = await fetch(`https://g.tenor.com/v1/search?q=${name}&key=O2F76B8G7S1C&limit=1`)
   const data = await response.json()
   return data
}

function SampleNextArrow({ onClick }) {
   return (
      <div onClick={onClick} className='next-arrow'><GrFormNext size={30} /></div>
   );
}

function SamplePrevArrow({ onClick }) {
   return (
      <div onClick={onClick} className='prev-arrow'><GrFormPrevious size={30} /></div>
   );
}

function TrendSearch() {
   const [trendName, setTrendName] = useState([])
   const [trend, setTrend] = useState([])
   const [status, setStatus] = useState(false)

   const dispatch = useDispatch()
   let navigate = useNavigate()

   const handleClick = (name) => {
      navigate(`../search/${name}`)
      dispatch(setSearch(name))
      dispatch(setInputChange(name))
   }

   const statusFunc = () => {
      setStatus(true)
   }

   useEffect(() => {
      getTrend().then(data => setTrendName(data.results))
      setTimeout(statusFunc, 500);

      return () => {
         clearTimeout(statusFunc)
      }
   }, [])

   useEffect(() => {
      // helelik
      dispatch(setSuggestions(''))
      let array = []
      trendName.forEach(name => {
         getData(name).then(data => {
            array.push({ name: name, ...data })
         })
         setTrend(array)
      })

   }, [trendName,dispatch])

   var settings = {
      infinite: true,
      autoplay: true,
      autoplaySpeed: 4000,
      speed: 1200,
      slidesToShow: 5,
      slidesToScroll: 5,
      initialSlide: 0,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
      responsive: [
         {
            breakpoint: 1024,
            settings: {
               slidesToShow: 3,
               slidesToScroll: 3,
               infinite: true,
            }
         },
         {
            breakpoint: 600,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               initialSlide: 2,
               nextArrow: false,
               prevArrow: false
            }
         },
         {
            breakpoint: 480,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               nextArrow: false,
               prevArrow: false
            }
         }
      ]
   };

   return (
      status && <div className='trend-search'>
         <h3>Trending Searches</h3>
         <div className='slider'>
            <Slider {...settings}>
               {trend.map((item, index) => {
                  return (
                     <div 
                     onClick={() => handleClick(item.name)}
                     className="trend-item" key={index} >
                        <div className="trend-gif"
                           style={{
                              backgroundImage: `url(${item.results[0].media[0].nanogif.url})`,
                              height: `${item.results[0].media[0].nanogif.dims[1]}px`
                           }}></div>
                        <h6>{item.name}</h6>
                     </div>
                  )
               })}
            </Slider>
         </div>
      </div>
   )
}

export default TrendSearch