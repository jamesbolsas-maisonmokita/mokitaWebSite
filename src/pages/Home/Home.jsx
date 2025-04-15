import './Home.scss';

function Home() {
  return (
    <div className="home-page">
      <h1>Benvenuto nel Mio Sito</h1>
      <p>Questa è la pagina principale del sito web.</p>
      <div className="features">
        <div className="feature">
          <h2>Chi Siamo</h2>
          <p>Scopri di più sulla nostra azienda e i nostri valori.</p>
        </div>
        <div className="feature">
          <h2>Servizi</h2>
          <p>Esplora i servizi che offriamo ai nostri clienti.</p>
        </div>
        <div className="feature">
          <h2>Contattaci</h2>
          <p>Hai domande? Non esitare a metterti in contatto con noi.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;