import { Link, useLocation } from 'react-router-dom'
import './Navigation.css'

const Navigation = () => {
  const location = useLocation()

  const navItems = [
    { path: '/home', label: 'Início', icon: '🏠' },
    { path: '/artists', label: 'Artistas', icon: '🎤' },
    { path: '/songs', label: 'Músicas', icon: '🎵' },
    { path: '/favorites', label: 'Favoritos', icon: '❤️' }
  ]

  return (
    <nav className="navigation">
      <div className="navigation__container">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`navigation__item ${location.pathname === item.path ? 'navigation__item--active' : ''}`}
          >
            <span className="navigation__icon">{item.icon}</span>
            <span className="navigation__label">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navigation

