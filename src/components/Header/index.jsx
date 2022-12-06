import { Link } from 'react-router-dom'
import logo from '../../assets/logo_header.png'
import '../../styles/banner.scss'
 
function Banner() {
    return (<div className='kasa_banner'>
    <img src={logo} alt='Kasa' className='kasa_logo'/>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/About">A propos</Link>
        </nav>
    </div>)
}

export default Banner