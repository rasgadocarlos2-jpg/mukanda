import './Button.css'

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  onClick,
  type = 'button',
  className = ''
}) => {
  return (
    <button 
      type={type}
      className={`btn btn--${variant} btn--${size} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button

