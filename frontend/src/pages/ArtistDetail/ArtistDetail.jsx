import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { artistsAPI, songsAPI } from '../../services/api'
import Card from '../../components/Card/Card'
import './ArtistDetail.css'

const ArtistDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [artist, setArtist] = useState(null)
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetchData()
  }, [id])

  const fetchData = async () => {
    try {
      setLoading(true)
      setError(null)
      
      // Buscar artista
      const artistData = await artistsAPI.getById(id)
      setArtist(artistData)
      
      // Buscar todas as músicas e filtrar pelo nome do artista
      const allSongs = await songsAPI.getAll()
      const artistSongs = allSongs.filter(song => 
        song.artista.toLowerCase() === artistData.nome.toLowerCase()
      )
      setSongs(artistSongs)
    } catch (err) {
      setError(err.message)
      console.error('Erro ao carregar dados:', err)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return <div className="artist-detail-loading">A carregar...</div>
  }

  if (error || !artist) {
    return (
      <div className="artist-detail-error">
        <p>{error || 'Artista não encontrado'}</p>
        <button onClick={() => navigate('/artists')}>Voltar para Artistas</button>
      </div>
    )
  }

  return (
    <div className="artist-detail">
      <div className="artist-detail__header">
        <button 
          className="artist-detail__back"
          onClick={() => navigate('/artists')}
        >
          ← Voltar
        </button>
        <div className="artist-detail__avatar">
          {artist.nome.charAt(0)}
        </div>
        <h1 className="artist-detail__name">{artist.nome}</h1>
        <p className="artist-detail__meta">
          {artist.origem && <span>{artist.origem}</span>}
          {artist.estilo && (
            <>
              {artist.origem && ' • '}
              <span>{artist.estilo}</span>
            </>
          )}
        </p>
        <Link to="/songs/new" className="artist-detail__add-song">
          + Adicionar Música
        </Link>
      </div>

      <div className="artist-detail__content">
        {artist.descricao && (
          <Card className="artist-detail__bio">
            <h2 className="artist-detail__section-title">Biografia</h2>
            <p className="artist-detail__bio-text">{artist.descricao}</p>
          </Card>
        )}

        <section className="artist-detail__songs">
          <h2 className="artist-detail__section-title">Músicas</h2>
          {songs.length === 0 ? (
            <div className="artist-detail__no-songs">
              <p>Ainda não há músicas cadastradas para este artista.</p>
              <Link to="/songs/new" className="artist-detail__add-song-link">
                Adicionar primeira música →
              </Link>
            </div>
          ) : (
            <div className="artist-detail__songs-list">
              {songs.map((song) => (
                <Card key={song.id} className="artist-detail__song-card">
                  <div className="artist-detail__song-info">
                    <h3 className="artist-detail__song-title">{song.titulo}</h3>
                    {song.ano && (
                      <p className="artist-detail__song-year">{song.ano}</p>
                    )}
                    {song.estilo && (
                      <p className="artist-detail__song-style">{song.estilo}</p>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default ArtistDetail
