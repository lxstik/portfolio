import '../App.css';
import Footer from './Footer';

export default function Contact() {
  return (
    <div className="contentContainer">
      <section className="contactSection">
        <h2 className="sectionTitle">Contact Me</h2>
        <form className="contactForm">
          <div className="formGroup">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Your Name" required />
          </div>
          <div className="formGroup">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Your Email" required />
          </div>
          <div className="formGroup">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" placeholder="Your Message" rows="5" required></textarea>
          </div>
          <button type="submit" className="submitButton">Send</button>
        </form>
      </section>
      <Footer />
    </div>
  );
}