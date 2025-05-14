import '../App.css';
import Footer from './Footer';

export default function Projects() {
  return (
    <div className="contentContainer">
      {/* Sección Proyectos */}
      <section className="allProjects">
        <h2 className="sectionTitle">Projects</h2>
        <div className="projectsGrid">
          {[...Array(12)].map((_, i) => (
            <div className="projectCard" key={i}>
              <img
                src={`/tetris.webp`}
                alt={`Project ${i + 1}`}
                className="projectImage"
              />
              <h3>Project Title {i + 1}</h3>
              <p>Brief description of the project goes here. Catchy and short.</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
    
  );
}