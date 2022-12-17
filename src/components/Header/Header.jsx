import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo_header.png'
import About from '../../pages/About/About'
import './header.scss'

let navs = document.querySelectorAll(".NavLink");

for (let i = 0; i < navs.length; i++) {
    navs[i].addEventListener("click", function() {
      let current = document.querySelector("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
    });
  }
 
function Header() {
    return (<header>
                <div className='kasa_header'>
                    <NavLink to="/"><img src={logo} alt='Kasa' className='kasa_logo'/></NavLink>
                    <nav>
                        <NavLink to="/">Accueil</NavLink>
                        <NavLink to="/About" element={<About />}>A propos</NavLink>
                    </nav>
                </div>
            </header>)
}

export default Header;