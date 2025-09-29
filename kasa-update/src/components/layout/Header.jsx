import { NavLink } from 'react-router-dom';
import logo from '../../../public/Header-LOGO.png';


export default function Header() {
    return (
        <header className="header">
            <img src={logo} alt="Kasa Logo" className="logo"  />

            <nav className="nav">
                <NavLink to="/" className="nav-link">ACCUEIL</NavLink>
                <NavLink to="/about" className="nav-link">A PROPOS</NavLink>
            </nav>
        </header>
    );
}
