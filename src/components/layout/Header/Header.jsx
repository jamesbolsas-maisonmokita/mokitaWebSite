import { Link } from 'react-router-dom';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Il Mio Sito</Link>
      </div>
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">Chi Siamo</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact">Contatti</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;