import { useState } from 'react';

function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <h1>Contact Me</h1>
      {submitted ? (
        <div style={{ padding: '1rem', backgroundColor: '#d4edda', color: '#155724', borderRadius: '5px' }}>
          Thank you! Your message has been simulated as sent.
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
          <div>
            <label>Name:</label><br />
            <input type="text" required style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <div>
            <label>Email:</label><br />
            <input type="email" required style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <div>
            <label>Message:</label><br />
            <textarea required rows="5" style={{ width: '100%', padding: '0.5rem' }}></textarea>
          </div>
          <button type="submit" style={{ padding: '0.75rem', backgroundColor: '#3498db', color: 'white', border: 'none', cursor: 'pointer', borderRadius: '4px' }}>
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}

export default Contact;