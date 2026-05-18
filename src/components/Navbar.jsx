import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: if you want to extract styles

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Ashish's Portfolio</h2>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/projects" style={styles.link}>Projects</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: { display: 'flex', justifyContent: 'space-between', padding: '1rem 2rem', backgroundColor: '#2c3e50', color: 'white' },
  logo: { margin: 0 },
  links: { display: 'flex', gap: '1.5rem', alignItems: 'center' },
  link: { color: 'white', textDecoration: 'none', fontSize: '1.1rem' }
};

export default Navbar;