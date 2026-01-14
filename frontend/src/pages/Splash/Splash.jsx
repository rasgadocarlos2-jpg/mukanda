import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './Splash.css'

const Splash = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home')
    }, 2000)

    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="splash">
      <div className="splash__content">
        <h1 className="splash__logo">Mukanda</h1>
        <p className="splash__tagline">Arquivo vivo da música angolana</p>
      </div>
    </div>
  )
}

export default Splash

