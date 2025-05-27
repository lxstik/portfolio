import { BrowserRouter as Router } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './App.css';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-custom">
        <div className="container-fluid">
          <HashLink className="navbar-brand nav-link" smooth to="/#">
            Yehor Fal
          </HashLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="/#about">
                  Sobre mí
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="/#projects">
                  Proyectos
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="/#technologies">
                  Tecnologías
                </HashLink>
              </li>
              <li className="nav-item">
                <HashLink className="nav-link" smooth to="/#contact">
                  Contacto
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Home />
    </Router>
  );
}

export default App;