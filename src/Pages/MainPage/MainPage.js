import FeaturedGifs from '../../Components/FeaturedGifs/FeaturedGifs'
import TrendSearch from '../../Components/TrendSearch/TrendSearch'

function MainPage() {
   return (
      <div className="main-page">
         <div className="container">
            <img style={{width: '100%', marginBottom: '20px'}} src="https://media.giphy.com/headers/2022-06-03-42-1654274525/MTVMOVIE_BANNER_2022_HP.gif" alt="gifs" />
            <TrendSearch />
            <FeaturedGifs />
         </div>
      </div>
   )
}

export default MainPage