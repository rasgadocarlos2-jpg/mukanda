import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { songsAPI, artistsAPI } from '../../services/api'
import Card from '../../components/Card/Card'
import './NewSong.css'

const NewSong = () => {
  const navigate = useNavigate()
  const [artists, setArtists] = useState([])
  const [loading, setLoading] = useState(false)
  const [loadingArtists, setLoadingArtists] = useState(true)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    titulo: '',
    artista: '',
    ano: '',
    estilo: ''
  })

  useEffect(() => {
    loadArtists()
  }, [])

  const loadArtists = async () => {
    try {
      const data = await artistsAPI.getAll()
      setArtists(data)
    } catch (err) {
      console.error('Erro ao carregar artistas:', err)
    } finally {
      setLoadingArtists(false)
    }
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const songData = {
        ...formData,
        ano: formData.ano ? parseInt(formData.ano) : null
      }
      await songsAPI.create(songData)
      navigate('/artists')
    } catch (err) {
      setError(err.message)
      console.error('Erro ao criar música:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="new-song">
      <div className="new-song__header">
        <button 
          className="new-song__back"
          onClick={() => navigate('/artists')}
        >
          ← Voltar
        </button>
        <h1 className="new-song__title">Adicionar Música</h1>
      </div>

      <div className="new-song__content">
        <Card className="new-song__card">
          <form onSubmit={handleSubmit} className="new-song__form">
            <div className="new-song__field">
              <label htmlFor="titulo" className="new-song__label">
                Título *
              </label>
              <input
                type="text"
                id="titulo"
                name="titulo"
                value={formData.titulo}
                onChange={handleChange}
                className="new-song__input"
                required
              />
            </div>

            <div className="new-song__field">
              <label htmlFor="artista" className="new-song__label">
                Artista *
              </label>
              <input
                type="text"
                id="artista"
                name="artista"
                value={formData.artista}
                onChange={handleChange}
                className="new-song__input"
                placeholder="Nome do artista"
                required
                list="artists-list"
              />
              {loadingArtists ? (
                <p className="new-song__hint">A carregar artistas...</p>
              ) : artists.length > 0 && (
                <datalist id="artists-list">
                  {artists.map((artist) => (
                    <option key={artist.id} value={artist.nome} />
                  ))}
                </datalist>
              )}
            </div>

            <div className="new-song__field">
              <label htmlFor="ano" className="new-song__label">
                Ano
              </label>
              <input
                type="number"
                id="ano"
                name="ano"
                value={formData.ano}
                onChange={handleChange}
                className="new-song__input"
                placeholder="Ex: 1972"
                min="1900"
                max="2100"
              />
            </div>

            <div className="new-song__field">
              <label htmlFor="estilo" className="new-song__label">
                Estilo
              </label>
              <input
                type="text"
                id="estilo"
                name="estilo"
                value={formData.estilo}
                onChange={handleChange}
                className="new-song__input"
                placeholder="Ex: Semba, Kizomba..."
              />
            </div>

            {error && (
              <div className="new-song__error">
                Erro: {error}
              </div>
            )}

            <div className="new-song__actions">
              <button
                type="button"
                onClick={() => navigate('/artists')}
                className="new-song__button new-song__button--secondary"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="new-song__button new-song__button--primary"
              >
                {loading ? 'A guardar...' : 'Guardar Música'}
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default NewSong

