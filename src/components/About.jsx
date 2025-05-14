import '../App.css';
import Footer from './Footer';


export default function About() {
  return (
    <div className="contentContainer2">
      <section className="contentSection aboutSection">
        <div className="sectionLeft">
          <h1 className="innerExpH1">About Me</h1>
          <p>
            Hi, I'm Yehor Fal, a passionate developer with a love for creating
            innovative and efficient solutions. I enjoy learning new
            technologies and applying them to real-world projects. In my free
            time, I like exploring new ideas, coding, and collaborating with
            others to bring creative visions to life.
          </p>
        </div>
        <div className="sectionRight">
          <img
            src="/profile.PNG"
            alt="Yehor Fal"
            className="responsiveImage roundedImage"
          />
        </div>
      </section>

      <Footer />
    </div>
  );
}