import React from 'react';
import "../Technologies.css";

const techData = [
  { title: 'Languages', items: ['C++', 'JavaScript', 'PHP', 'SQL', 'Java'] },
  { title: 'Web', items: ['HTML5', 'CSS3'] },
  { title: 'Front-End', items: ['React', 'Sass', 'Bootstrap', 'Next.js'] },
  { title: 'Cloud', items: ['GitHub Pages', 'Vercel'] },
  { title: 'Tools', items: ['Git', 'GitHub', 'VS Code'] },
  { title: 'Extras', items: ['Node.js', 'Apache', 'SQLite', 'npm'] },
];

const getIconSrc = (name) => {
  const formatted = name
    .toLowerCase()
    .replace(/\+/g, 'plus')
    .replace(/\.js$/, 'dotjs')
    .replace(/\./g, '')
    .replace(/\s+/g, '');
  return `https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/${formatted}.svg`;
};

const Technologies = () => {
  return (
    <section className="techMini" style={{ marginTop: "150px", marginBottom: "150px" }}>
      <h2 className="techMiniTitle">Tecnologias</h2>
      <div className="techMiniGrid">
        {techData.map((category, idx) => (
          <div key={idx} className="techMiniGroup">
            {category.items.map((tech, i) => (
              <div className="techMiniItem" key={i}>
                <img src={getIconSrc(tech)} alt={tech} onError={(e) => e.target.style.display = 'none'} />
                <span>{tech}</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;