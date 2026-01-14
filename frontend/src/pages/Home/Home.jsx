import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { artistsAPI } from '../../services/api'
import './Home.css'

const Home = () => {
  const [artists, setArtists] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    loadArtists()
  }, [])

  const loadArtists = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await artistsAPI.getAll()
      setArtists(data)
    } catch (err) {
      setError(err.message)
      console.error('Erro ao carregar artistas:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__title">Mukanda</h1>
        <p className="home__subtitle">Arquivo vivo da música angolana</p>
      </div>

      <div className="home__content">
        {loading && <p className="home__loading">A carregar artistas...</p>}
        
        {error && (
          <div className="home__error">
            <p>Erro ao carregar artistas: {error}</p>
            <button onClick={loadArtists}>Tentar novamente</button>
          </div>
        )}

        {!loading && !error && (
          <>
            {artists.length === 0 ? (
              <div className="home__empty">
                <p>Ainda não há artistas cadastrados.</p>
                <Link to="/artists/new" className="home__cta">
                  Adicionar primeiro artista →
                </Link>
              </div>
            ) : (
              <section className="home__section">
                <h2 className="home__section-title">Artistas</h2>
                <div className="home__artists-grid">
                  {artists.map((artist) => (
                    <Link 
                      key={artist.id} 
                      to={`/artists/${artist.id}`}
                      className="home__artist-card"
                    >
                      <div className="home__artist-avatar">
                        {artist.nome.charAt(0)}
                      </div>
                      <h3 className="home__artist-name">{artist.nome}</h3>
                      {artist.origem && (
                        <p className="home__artist-origin">{artist.origem}</p>
                      )}
                    </Link>
                  ))}
                </div>
                <div className="home__actions">
                  <Link to="/artists" className="home__link">Ver todos os artistas →</Link>
                  <Link to="/artists/new" className="home__link">Adicionar artista →</Link>
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Home
