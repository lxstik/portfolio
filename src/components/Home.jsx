import '../App.css';
import Technologies from './Technologies';
import Footer from './Footer';

export default function Home() {
  return (
    <div className="contentContainer">
      {/* Sección Laptop */}
      <section className="contentSection">
        <div className="sectionLeft">
          <h1 className="innerLaptopH1">Welcome</h1>
          <p>My name is Yehor Fal and this is my Portfolio</p>
        </div>
        <div className="sectionRight">
          <img src="/laptop.svg" alt="laptop" className="responsiveImage" />
        </div>
      </section>

      {/* Sección Experiencia */}
      <section className="contentSection">
        <div className="sectionLeft">
          <h1 className="innerExpH1">My<br />Experience</h1>
          <p>Texto sobre mi experiencia</p>
        </div>
        <div className="sectionRight">
          <img src="/experience.webp" alt="experience" className="responsiveImage" />
        </div>
      </section>

      {/* Sección Proyectos Destacados */}
      <section className="featuredProjects">
        <h2 className="sectionTitle">Featured Projects</h2>
        <div className="projectsGrid">
          {[...Array(6)].map((_, i) => (
            <div className="projectCard" key={i}>
              <img src={`../../public/tetris.webp`} alt={`Project ${i + 1}`} className="projectImage" />
              <h3>Project Title {i + 1}</h3>
              <p>Brief description of the project goes here. Catchy and short.</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Tecnologías */}
       <Technologies />
       <Footer />
    </div>
  );
}
