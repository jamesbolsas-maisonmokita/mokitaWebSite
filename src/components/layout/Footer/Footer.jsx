import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Il Mio Sito. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}

export default Footer;