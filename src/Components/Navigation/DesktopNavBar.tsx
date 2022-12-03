import Logo from './Logo/TaburTuaiLogoHorisontal.jpg';
import { Link } from 'react-router-dom';
import '../Navigation/DesktopNavigation.css';

export const DesktopNavBar = () => {
    return (
        <header>
            <nav className="navbar">
                <div className="logo-company">
                    <img className='Logo' src={Logo} alt="TaburTuaiLogo" />
                </div>
                <ul id="list">
                    <li><Link to={'./Beranda'}>Beranda</Link></li>
                    <li><Link to={'./'}>Tentang</Link></li>
                    <li><a href="mitra.html">Mitra</a></li>
                    <li><a href="produk.html">Produk</a></li>
                    <li><a href="blog.html">Blog</a></li>
                    <li><a href="contact.html">Kontak </a></li>
                </ul>
            </nav>
        </header>
    )
}