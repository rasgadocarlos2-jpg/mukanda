import { Link } from 'react-router-dom'
import Card from '../../components/Card/Card'
import './Home.css'

const Home = () => {
  // Dados mockados para demonstração
  const featuredArtists = [
    { id: 1, nome: 'Bonga', estilo: 'Semba' },
    { id: 2, nome: 'Elias Dia Kimuezo', estilo: 'Semba' },
    { id: 3, nome: 'Artur Nunes', estilo: 'Semba' }
  ]

  const curiosity = {
    title: 'Sabias que...',
    text: 'O Semba é considerado o precursor do Samba brasileiro. A palavra "Semba" vem do Kimbundu e significa "umbigada", um movimento característico desta dança.'
  }

  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__title">Mukanda</h1>
        <p className="home__subtitle">Arquivo vivo da música angolana</p>
      </div>

      <div className="home__content">
        {/* Destaque */}
        <section className="home__section">
          <Card className="home__featured-card">
            <h2 className="home__section-title">De quem é esta música?</h2>
            <p className="home__featured-text">
              Explore a história e os artistas por trás das músicas clássicas angolanas.
            </p>
            <Link to="/artists" className="home__cta">
              Explorar Artistas →
            </Link>
          </Card>
        </section>

        {/* Artistas em destaque */}
        <section className="home__section">
          <h2 className="home__section-title">Artistas em Destaque</h2>
          <div className="home__artists-grid">
            {featuredArtists.map((artist) => (
              <Link 
                key={artist.id} 
                to={`/artists/${artist.id}`}
                className="home__artist-card"
              >
                <div className="home__artist-avatar">
                  {artist.nome.charAt(0)}
                </div>
                <h3 className="home__artist-name">{artist.nome}</h3>
                <p className="home__artist-style">{artist.estilo}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Curiosidade */}
        <section className="home__section">
          <Card className="home__curiosity-card">
            <h3 className="home__curiosity-title">{curiosity.title}</h3>
            <p className="home__curiosity-text">{curiosity.text}</p>
          </Card>
        </section>
      </div>
    </div>
  )
}

export default Home

