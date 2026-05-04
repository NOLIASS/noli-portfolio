import '../style/project.css'

const projects = [
  {
    id: 1,
    name: 'ДУБ Furniture',
    desc: 'Fullstack e-commerce. React + TypeScript + Node.js + MongoDB + JWT auth.',
    tags: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    link: 'https://dub-furniture-teoz.vercel.app',
    github: 'https://github.com/NOLIASS/Dub-furniture'
  }
]

function Projects() {
  return (
    <section className="projects" id="projects">
      <div className="section-label">Projects</div>

      <div className="projects-list">
        {projects.map(p => (
          <div key={p.id} className="project-card">
            <div className="project-number">0{p.id}</div>
            <div className="project-info">
              <h3 className="project-name">{p.name}</h3>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map(tag => (
                  <span key={tag} className="project-tag">{tag}</span>
                ))}
              </div>
            </div>
            <div className="project-links">
              <a href={p.link} target="_blank" className="project-link">Live ↗</a>
              <a href={p.github} target="_blank" className="project-link">GitHub ↗</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects