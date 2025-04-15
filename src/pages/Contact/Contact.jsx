import { useState } from 'react';
import './Contact.scss';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitStatus, setSubmitStatus] = useState(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simuliamo l'invio del form
    setSubmitStatus('loading');
    
    // Simula una chiamata API
    setTimeout(() => {
      console.log('Form inviato:', formData);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1500);
  };
  
  return (
    <div className="contact-page">
      <h1>Contattaci</h1>
      <p>Compila il modulo sottostante per metterti in contatto con noi.</p>
      
      {submitStatus === 'success' && (
        <div className="success-message">
          Grazie per averci contattato! Ti risponderemo al più presto.
        </div>
      )}
      
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Messaggio</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            required
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className="submit-button"
          disabled={submitStatus === 'loading'}
        >
          {submitStatus === 'loading' ? 'Invio in corso...' : 'Invia'}
        </button>
      </form>
    </div>
  );
}

export default Contact;