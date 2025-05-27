import Technologies from './Technologies';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="min-h-screen pt-[120px] px-4 bg-gradient-to-b from-indigo-300 via-indigo-700 to-[#12071a] text-white font-sans">
      {/* Sección Laptop */}
      <section className="contentSection" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <h1 style={{ fontSize: '8rem', fontWeight: 800, textAlign: 'center', width: '100%' }}>
          Welcome
        </h1>
      </section>


      {/* Sección About Me */}
      <section id="about" className="contentSection aboutSection" style={{ minHeight: '50vh', marginTop: 400 }}>
        <div className="sectionLeft">
          <h1 className="innerExpH1" style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: 700 }}>Sobre mi</h1>
          <p style={{ fontSize: '1.1rem', color: '#d0d0d0', maxWidth: 500, margin: '0 auto' }}>
            ¡Hola! Soy Yehor Fal, tengo 21 años y soy desarrollador web full stack. Me apasiona aprender, crear y enfrentar nuevos retos.<br /><br />
            En mis prácticas mejoré mis habilidades con Bootstrap y resolvía problemas técnicos en la web de la empresa.<br /><br />
            Aspiro a dominar cada vez más mis conocimientos y crear proyectos que sorprendan. Además, disfruto tocando música, porque la creatividad no solo vive en el código.
          </p>
        </div>
        <div className="sectionRight">
          <img
            src="/profile.PNG"
            alt="Yehor Fal"
            className="responsiveImage roundedImage"
            style={{ width: 300, height: 300, objectFit: 'cover', borderRadius: '50%', boxShadow: '0 8px 32px rgba(0,0,0,0.3)' }}
          />
        </div>
      </section>

      {/* Sección Proyectos Destacados */}
      <section id="projects" className="featuredProjects" style={{
        marginTop: 250, paddingTop: 250
      }}>
        <h2
          className="sectionTitle"
          style={{
            fontSize: '2.2rem',
            marginBottom: 40,
            fontWeight: 700,
            textAlign: 'center'
          }}
        >
          Proyectos Destacados
        </h2>
        <div className="projectsGrid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 28,
            padding: '0 10px'
          }}
        >
          <div className="projectCard">
            <img src="/memory.jpg" alt="Memory" className="projectImage" />
            <div className="projectButtons">
              <a
                href="https://github.com/lxstik/M6-Memory"
                target="_blank"
                rel="noopener noreferrer"
                className="projectButton"
              >
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" /></svg>
                GitHub
              </a>
              <a
                href="https://m6-memory-sese.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="projectButton"
              >
                <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 6.667l13.333 22.666H2.667z" /></svg>
                Vercel
              </a>
            </div>
            <span className="projectTitleHover">Memory</span>
          </div>

          <div className="projectCard">
            <img src="/tickets.png" alt="Gestion de Tickets" className="projectImage" />
            <div className="projectButtons">
              <a
                href="https://github.com/lxstik/M6-gestion-de-interficies"
                target="_blank"
                rel="noopener noreferrer"
                className="projectButton"
              >
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" /></svg>
                GitHub
              </a>
              <a
                href="https://m6-gestion-de-interficies.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="projectButton"
              >
                <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 6.667l13.333 22.666H2.667z" /></svg>
                Vercel
              </a>
            </div>
            <span className="projectTitleHover">Gestion de Tickets</span>
          </div>

          <div className="projectCard">
            <img src="/tetris.webp" alt="Tetris" className="projectImage" />
            <div className="projectButtons">
              <a
                href="https://github.com/lxstik/M6-tetris"
                target="_blank"
                rel="noopener noreferrer"
                className="projectButton"
              >
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" /></svg>
                GitHub
              </a>
              <a
                href="https://m6-tetris-ss5b.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="projectButton"
              >
                <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 6.667l13.333 22.666H2.667z" /></svg>
                Vercel
              </a>
            </div>
            <span className="projectTitleHover">Tetris</span>
          </div>

          <div className="projectCard">
            <img src="/crud.png" alt="CRUD" className="projectImage" />
            <div className="projectButtons">
              <a
                href="https://github.com/lxstik/tattoo-POO"
                target="_blank"
                rel="noopener noreferrer"
                className="projectButton"
              >
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" /></svg>
                GitHub
              </a>
              <a
                href="https://yehor.alwaysdata.net/tattoo/login.php"
                target="_blank"
                rel="noopener noreferrer"
                className="projectButton"
              >
                <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 6.667l13.333 22.666H2.667z" /></svg>
                Web
              </a>
            </div>
            <span className="projectTitleHover">CRUD</span>
          </div>

          <div className="projectCard">
            <img src="/pattern.jpg" alt="Design Patterns" className="projectImage" />
            <div className="projectButtons">
              <a
                href="https://github.com/lxstik/m7-2425-Yehor/tree/UF1/practicas/patrones%20de%20diseño"
                target="_blank"
                rel="noopener noreferrer"
                className="projectButton"
              >
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" /></svg>
                GitHub
              </a>
              <a
                href="https://yehor.alwaysdata.net/UF2/patronesDeDisenyo/index.php"
                target="_blank"
                rel="noopener noreferrer"
                className="projectButton"
              >
                <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 6.667l13.333 22.666H2.667z" /></svg>
                Web
              </a>
            </div>
            <span className="projectTitleHover">Patrones de Diseño</span>
          </div>

          <div className="projectCard">
            <img src="/bootstrap.jpeg" alt="Web Bootstrap" className="projectImage" />
            <div className="projectButtons">
              <a
                href="https://github.com/usuario/proyecto1"
                target="_blank"
                rel="noopener noreferrer"
                className="projectButton"
              >
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.7.42.36.79 1.09.79 2.2 0 1.59-.01 2.87-.01 3.26 0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" /></svg>
                GitHub
              </a>
              <a
                href="https://web-bootstrap-scss-czz9.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="projectButton"
              >
                <svg viewBox="0 0 32 32" fill="currentColor"><path d="M16 6.667l13.333 22.666H2.667z" /></svg>
                Vercel
              </a>
            </div>
            <span className="projectTitleHover">Web Bootstrap</span>
          </div>
        </div>
      </section>

      {/* Sección Tecnologías */}
      <section id="technologies" style={{ marginTop: 80 }}>
        <Technologies />
      </section>

{/* Sección Contacto */}
<section id="contact" className="contentSection contactSection">
  <div className="sectionLeft" style={{ alignItems: 'center' }}>
    <h1 className="innerExpH1" style={{ fontSize: '2.2rem', marginBottom: '1rem', fontWeight: 700 }}>Contact</h1>
    <p style={{ fontSize: '1.1rem', color: '#d0d0d0', marginBottom: 32 }}>Puedes contactarme a través de:</p>
    <div
      className="contactLinks"
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '5vw', // Espacio proporcional según el ancho de la pantalla
        marginTop: 12,
      }}
    >
      <a href="mailto:egorrfal32@gmail.com" target="_blank" rel="noopener noreferrer" className="contactIcon gmail">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/gmail.svg" alt="Gmail" style={{ width: 48, height: 48, display: 'block', background: 'white', borderRadius: 8, padding: 4 }} />
      </a>
      <a href="https://github.com/lxstik" target="_blank" rel="noopener noreferrer" className="contactIcon github">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/github.svg" alt="GitHub" style={{ width: 48, height: 48, display: 'block', background: 'white', borderRadius: 8, padding: 4 }} />
      </a>
      <a href="https://www.linkedin.com/in/yehor-fal/" target="_blank" rel="noopener noreferrer" className="contactIcon linkedin">
        <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" alt="LinkedIn" style={{ width: 48, height: 48, display: 'block', background: 'white', borderRadius: 8, padding: 4 }} />
      </a>
    </div>
  </div>
</section>
      <Footer />
    </div>
  );
}