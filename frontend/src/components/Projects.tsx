import '../style/project.css'
import { motion } from 'framer-motion'
import { fadeUp } from '../utils/animations'
import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'



interface Project {
  id: number
  title: string
  mini_description: string
  full_description: string
  github_url: string
  site_url: string
  image_url: string
}

const list = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  useEffect(() => {
    fetch('https://noli-portfolio-production.up.railway.app/api/projects')
      .then(res => res.json())
      .then(data => setProjects(data))
  }, [])

  return (
    <section className="projects" id="projects">
      <Helmet>
        <title>Projects — NOLI</title>
        <meta name="description" content="Projects built by NOLI — Fullstack Developer." />
      </Helmet>
      <div className="section-label">Projects</div>

      <motion.div
        variants={list}
        initial="hidden"
        animate="visible"
        className="projects-list">
        {projects.map(p => (
          <motion.div
            initial={{ x: -80, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ type: 'spring', delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            key={p.id}
            className="project-card" onClick={() => setSelectedProject(p)}>
            <img className="project-thumb" src={p.image_url} />
            <div className="project-info">
              <h3 className="project-name">{p.title}</h3>
              <p className="project-desc">{p.mini_description}</p>
              <div className="project-tags">

              </div>
            </div>
            <div className="project-links">
              <a href={p.site_url} target="_blank" className="project-link">Live ↗</a>
              <a href={p.github_url} target="_blank" className="project-link">GitHub ↗</a>
            </div>
          </motion.div>
        ))}

      </motion.div>
      {selectedProject && (
        <div className="modal">
          <div className="modal-content">
            <button className="modal-close" onClick={() => setSelectedProject(null)}>✕</button>
            <img className="modal-image" src={selectedProject.image_url} />
            <div className='modal-body'>
              <h2 className="modal-title">{selectedProject.title}</h2>
              <p className="modal-desc">{selectedProject.full_description}</p>
            </div>
            <div className="modal-links">
              <a href={selectedProject.site_url} target="_blank" className="modal-link">Live ↗</a>
              <a href={selectedProject.github_url} target="_blank" className="modal-link">GitHub ↗</a>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Projects