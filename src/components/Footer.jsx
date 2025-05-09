import React from 'react';
import '../Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <p>&copy; 2025 egorrfal32@gmail.com</p>
        <div className="footerIcons">
          <a href="https://github.com/lxstik" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/github.svg" alt="GitHub"/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
