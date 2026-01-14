import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import './Artists.css'

const Artists = () => {
  const [artists, setArtists] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Mock data - substituir por chamada à API
    const fetchArtists = async () => {
      try {
        // const response = await fetch('/api/artists')
        // const data = await response.json()
        // setArtists(data)
        
        // Mock data temporário
        setArtists([
          { id: 1, nome: 'Bonga', origem: 'Benguela', estilo: 'Semba' },
          { id: 2, nome: 'Elias Dia Kimuezo', origem: 'Luanda', estilo: 'Semba' },
          { id: 3, nome: 'Artur Nunes', origem: 'Luanda', estilo: 'Semba' }
        ])
      } catch (error) {
        console.error('Erro ao carregar artistas:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchArtists()
  }, [])

  if (loading) {
    return <div className="artists-loading">A carregar artistas...</div>
  }

  return (
    <div className="artists">
      <div className="artists__header">
        <h1 className="artists__title">Artistas</h1>
        <p className="artists__subtitle">Explore os pioneiros da música angolana</p>
      </div>

      <div className="artists__content">
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
                <p className="artists__card-info">
                  {artist.origem && <span>{artist.origem}</span>}
                  {artist.estilo && (
                    <>
                      {artist.origem && ' • '}
                      <span>{artist.estilo}</span>
                    </>
                  )}
                </p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Artists

