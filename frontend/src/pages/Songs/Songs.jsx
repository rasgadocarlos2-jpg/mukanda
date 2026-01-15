import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { songsAPI } from '../../services/api'
import Card from '../../components/Card/Card'
import './Songs.css'

const Songs = () => {
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [playingId, setPlayingId] = useState(null)

  useEffect(() => {
    loadSongs()
  }, [])

  const loadSongs = async () => {
    try {
      setLoading(true)
      setError(null)
      const data = await songsAPI.getAll()
      setSongs(data)
    } catch (err) {
      setError(err.message)
      console.error('Erro ao carregar músicas:', err)
    } finally {
      setLoading(false)
    }
  }

  const handlePlay = (songId) => {
    if (playingId === songId) {
      setPlayingId(null) // Pausar se já estiver a tocar
    } else {
      setPlayingId(songId) // Tocar
    }
  }

  if (loading) {
    return <div className="songs-loading">A carregar músicas...</div>
  }

  if (error) {
    return (
      <div className="songs-error">
        <p>Erro ao carregar músicas: {error}</p>
        <button onClick={loadSongs}>Tentar novamente</button>
      </div>
    )
  }

  return (
    <div className="songs">
      <div className="songs__header">
        <h1 className="songs__title">Músicas</h1>
        <p className="songs__subtitle">Arquivo completo de músicas angolanas</p>
      </div>

      <div className="songs__content">
        {songs.length === 0 ? (
          <div className="songs__empty">
            <p>Ainda não há músicas cadastradas.</p>
            <Link to="/songs/new" className="songs__empty-link">
              Adicionar primeira música →
            </Link>
          </div>
        ) : (
          <div className="songs__list">
            {songs.map((song) => (
              <Card key={song.id} className="songs__song-card">
                <div className="songs__song-info">
                  <h3 className="songs__song-title">{song.titulo}</h3>
                  <p className="songs__song-artist">{song.artista}</p>
                  <div className="songs__song-meta">
                    {song.ano && <span className="songs__song-year">{song.ano}</span>}
                    {song.estilo && (
                      <>
                        {song.ano && ' • '}
                        <span className="songs__song-style">{song.estilo}</span>
                      </>
                    )}
                  </div>
                </div>
                <button
                  className={`songs__play-button ${playingId === song.id ? 'songs__play-button--playing' : ''}`}
                  onClick={() => handlePlay(song.id)}
                  aria-label={playingId === song.id ? 'Pausar' : 'Reproduzir'}
                >
                  {playingId === song.id ? '⏸️' : '▶️'}
                </button>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Songs

