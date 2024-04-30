import { NavLink } from 'react-router-dom'
import './Header.css'
const Header = () => {
  return (
    <header>
      <nav>
        <NavLink to=''>Home</NavLink>
        <NavLink to='about/hola desde React'>About</NavLink>
        <NavLink to='contact'>Contact</NavLink>
      </nav>
    </header>
  )
}

export default Header
