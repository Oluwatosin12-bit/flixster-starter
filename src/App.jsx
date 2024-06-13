import './App.css'
import MovieList from './MovieList'
import Footer from './Footer'

function App() {
  return (
      <div>
        <MovieList/>
        <Footer />
      </div>
  )
}

export default App


// TO-DO:
//when favorite/watchlist is clicked, let it follow the movie id (then add to favorites array)
//filter (genres, release date, vote average, or other relevant options.)
//genre id map
//style footer
//style modal *
//modal info
//sort by rating too*
