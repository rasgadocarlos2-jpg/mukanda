import { useState } from 'react'
import './Player.css'

const Player = ({ song, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="player">
      <div className="player__content">
        <div className="player__info">
          <h4 className="player__title">{song?.titulo || 'Título'}</h4>
          <p className="player__artist">{song?.artista || 'Artista'}</p>
        </div>
        
        <div className="player__controls">
          <button 
            className="player__button"
            onClick={togglePlay}
            aria-label={isPlaying ? 'Pausar' : 'Reproduzir'}
          >
            {isPlaying ? '⏸️' : '▶️'}
          </button>
        </div>
        
        <div className="player__progress">
          <div 
            className="player__progress-bar"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
      
      {onClose && (
        <button 
          className="player__close"
          onClick={onClose}
          aria-label="Fechar player"
        >
          ×
        </button>
      )}
    </div>
  )
}

export default Player

