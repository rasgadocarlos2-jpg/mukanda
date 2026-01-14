import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import './ArtistDetail.css'

const ArtistDetail = () => {
  const { id } = useParams()
  const [artist, setArtist] = useState(null)
  const [songs, setSongs] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Mock data - substituir por chamadas à API
        // const artistResponse = await fetch(`/api/artists/${id}`)
        // const artistData = await artistResponse.json()
        // setArtist(artistData)
        
        // const songsResponse = await fetch(`/api/artists/${id}/songs`)
        // const songsData = await songsResponse.json()
        // setSongs(songsData)

        // Mock data temporário
        setArtist({
          id: parseInt(id),
          nome: 'Bonga',
          origem: 'Benguela',
          estilo: 'Semba',
          descricao: 'Bonga Kuenda é um dos mais importantes músicos angolanos. Pioneiro do Semba e da música popular angolana, a sua música carrega mensagens de resistência e identidade cultural.'
        })

        setSongs([
          { id: 1, titulo: 'Mona Ki Ngi Xica', artista: 'Bonga', ano: 1972 },
          { id: 2, titulo: 'Angola', artista: 'Bonga', ano: 1972 }
        ])
      } catch (error) {
        console.error('Erro ao carregar dados:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [id])

  if (loading) {
    return <div className="artist-detail-loading">A carregar...</div>
  }

  if (!artist) {
    return <div className="artist-detail-error">Artista não encontrado</div>
  }

  return (
    <div className="artist-detail">
      <div className="artist-detail__header">
        <Link to="/artists" className="artist-detail__back">← Voltar</Link>
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
          <div className="artist-detail__songs-list">
            {songs.map((song) => (
              <Card key={song.id} className="artist-detail__song-card">
                <div className="artist-detail__song-info">
                  <h3 className="artist-detail__song-title">{song.titulo}</h3>
                  {song.ano && (
                    <p className="artist-detail__song-year">{song.ano}</p>
                  )}
                </div>
                <button className="artist-detail__play-button">
                  ▶️
                </button>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ArtistDetail

