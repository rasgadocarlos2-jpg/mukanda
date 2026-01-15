import { Routes, Route, useLocation } from 'react-router-dom'
import Navigation from './components/Navigation/Navigation'
import Splash from './pages/Splash/Splash'
import Home from './pages/Home/Home'
import Artists from './pages/Artists/Artists'
import ArtistDetail from './pages/ArtistDetail/ArtistDetail'
import Songs from './pages/Songs/Songs'
import NewArtist from './pages/NewArtist/NewArtist'
import NewSong from './pages/NewSong/NewSong'
import Favorites from './pages/Favorites/Favorites'
import './styles/global.css'

function App() {
  const location = useLocation()
  const showNavigation = location.pathname !== '/'

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/home" element={<Home />} />
        <Route path="/artists" element={<Artists />} />
        <Route path="/artists/new" element={<NewArtist />} />
        <Route path="/artists/:id" element={<ArtistDetail />} />
        <Route path="/songs" element={<Songs />} />
        <Route path="/songs/new" element={<NewSong />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
      {showNavigation && <Navigation />}
    </div>
  )
}

export default App

