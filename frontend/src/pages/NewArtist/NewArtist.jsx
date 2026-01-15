import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { artistsAPI } from '../../services/api'
import Card from '../../components/Card/Card'
import './NewArtist.css'

const NewArtist = () => {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [formData, setFormData] = useState({
    nome: '',
    origem: '',
    estilo: '',
    descricao: ''
  })

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
      await artistsAPI.create(formData)
      navigate('/artists')
    } catch (err) {
      setError(err.message)
      console.error('Erro ao criar artista:', err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="new-artist">
      <div className="new-artist__header">
        <button 
          className="new-artist__back"
          onClick={() => navigate('/artists')}
        >
          ← Voltar
        </button>
        <h1 className="new-artist__title">Adicionar Artista</h1>
      </div>

      <div className="new-artist__content">
        <Card className="new-artist__card">
          <form onSubmit={handleSubmit} className="new-artist__form">
            <div className="new-artist__field">
              <label htmlFor="nome" className="new-artist__label">
                Nome *
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                className="new-artist__input"
                required
              />
            </div>

            <div className="new-artist__field">
              <label htmlFor="origem" className="new-artist__label">
                Origem
              </label>
              <input
                type="text"
                id="origem"
                name="origem"
                value={formData.origem}
                onChange={handleChange}
                className="new-artist__input"
                placeholder="Ex: Luanda, Benguela..."
              />
            </div>

            <div className="new-artist__field">
              <label htmlFor="estilo" className="new-artist__label">
                Estilo
              </label>
              <input
                type="text"
                id="estilo"
                name="estilo"
                value={formData.estilo}
                onChange={handleChange}
                className="new-artist__input"
                placeholder="Ex: Semba, Kizomba..."
              />
            </div>

            <div className="new-artist__field">
              <label htmlFor="descricao" className="new-artist__label">
                Descrição
              </label>
              <textarea
                id="descricao"
                name="descricao"
                value={formData.descricao}
                onChange={handleChange}
                className="new-artist__textarea"
                rows="4"
                placeholder="Breve descrição do artista..."
              />
            </div>

            {error && (
              <div className="new-artist__error">
                Erro: {error}
              </div>
            )}

            <div className="new-artist__actions">
              <button
                type="button"
                onClick={() => navigate('/artists')}
                className="new-artist__button new-artist__button--secondary"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={loading}
                className="new-artist__button new-artist__button--primary"
              >
                {loading ? 'A guardar...' : 'Guardar Artista'}
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  )
}

export default NewArtist

