import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo_header.png'
import About from '../../pages/About/About'
import './header.scss'
 
function Header() {
    return (<header>
                <div className='kasa_header'>
                    <img src={logo} alt='Kasa' className='kasa_logo'/>
                    <nav>
                        <NavLink to="/">Accueil</NavLink>
                        <NavLink to="/About" element={<About />}>A propos</NavLink>
                    </nav>
                </div>
            </header>)
}

export default Header;