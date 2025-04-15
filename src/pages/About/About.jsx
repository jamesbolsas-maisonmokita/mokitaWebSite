import './About.scss';

function About() {
  return (
    <div className="about-page">
      <h1>Chi Siamo</h1>
      <p>Questa pagina contiene informazioni sulla nostra azienda.</p>
      <div className="about-content">
        <div className="about-section">
          <h2>La Nostra Storia</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, 
            nisl eget ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl 
            nisl eget nisl.
          </p>
        </div>
        <div className="about-section">
          <h2>La Nostra Missione</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, 
            nisl eget ultricies lacinia, nisl nisl aliquet nisl, eget aliquet nisl 
            nisl eget nisl.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;