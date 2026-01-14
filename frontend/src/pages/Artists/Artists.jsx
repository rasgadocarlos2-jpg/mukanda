import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { artistsAPI } from '../../services/api'
import Card from '../../components/Card/Card'
import './Artists.css'

const Artists = () => {
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

  if (loading) {
    return <div className="artists-loading">A carregar artistas...</div>
  }

  if (error) {
    return (
      <div className="artists-error">
        <p>Erro ao carregar artistas: {error}</p>
        <button onClick={loadArtists}>Tentar novamente</button>
      </div>
    )
  }

  return (
    <div className="artists">
      <div className="artists__header">
        <h1 className="artists__title">Artistas</h1>
        <Link to="/artists/new" className="artists__add-link">
          + Adicionar Artista
        </Link>
      </div>

      <div className="artists__content">
        {artists.length === 0 ? (
          <div className="artists__empty">
            <p>Ainda não há artistas cadastrados.</p>
            <Link to="/artists/new" className="artists__empty-link">
              Adicionar primeiro artista →
            </Link>
          </div>
        ) : (
          <div className="artists__grid">
            {artists.map((artist) => (
              <Link 
                key={artist.id} 
                to={`/artists/${artist.id}`}
                className="artists__link"
              >
                <Card className="artists__card">
                  <div className="artists__card-avatar">
                    {artist.nome.charAt(0)}
                  </div>
                  <h3 className="artists__card-name">{artist.nome}</h3>
                  {artist.origem && (
                    <p className="artists__card-info">{artist.origem}</p>
                  )}
                  {artist.estilo && (
                    <p className="artists__card-info">{artist.estilo}</p>
                  )}
                </Card>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Artists
