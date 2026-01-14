import Card from '../../components/Card/Card'
import './Favorites.css'

const Favorites = () => {
  // Mock data - substituir por estado/contexto real
  const favoriteArtists = []
  const favoriteSongs = []

  return (
    <div className="favorites">
      <div className="favorites__header">
        <h1 className="favorites__title">Favoritos</h1>
        <p className="favorites__subtitle">As tuas músicas e artistas guardados</p>
      </div>

      <div className="favorites__content">
        {favoriteArtists.length === 0 && favoriteSongs.length === 0 ? (
          <Card className="favorites__empty">
            <p className="favorites__empty-text">
              Ainda não tens favoritos guardados.
            </p>
            <p className="favorites__empty-hint">
              Explora artistas e músicas para começar a guardar os teus favoritos.
            </p>
          </Card>
        ) : (
          <>
            {favoriteArtists.length > 0 && (
              <section className="favorites__section">
                <h2 className="favorites__section-title">Artistas Favoritos</h2>
                <div className="favorites__grid">
                  {favoriteArtists.map((artist) => (
                    <Card key={artist.id} className="favorites__item">
                      <div className="favorites__item-avatar">
                        {artist.nome.charAt(0)}
                      </div>
                      <h3 className="favorites__item-name">{artist.nome}</h3>
                    </Card>
                  ))}
                </div>
              </section>
            )}

            {favoriteSongs.length > 0 && (
              <section className="favorites__section">
                <h2 className="favorites__section-title">Músicas Favoritas</h2>
                <div className="favorites__songs-list">
                  {favoriteSongs.map((song) => (
                    <Card key={song.id} className="favorites__song-item">
                      <div className="favorites__song-info">
                        <h3 className="favorites__song-title">{song.titulo}</h3>
                        <p className="favorites__song-artist">{song.artista}</p>
                      </div>
                      <button className="favorites__play-button">▶️</button>
                    </Card>
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default Favorites

