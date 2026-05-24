import '../style/about.css'
import { SiReact, SiTypescript, SiNodedotjs, SiExpress, SiMongodb, SiGit, SiVite, SiJavascript } from 'react-icons/si'
import { motion } from 'framer-motion'
import { fadeUp } from '../utils/animations'
import { Helmet } from 'react-helmet-async'
const skills = [
  { name: 'React', icon: <SiReact />, color: '#61DAFB' },
  { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
  { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
  { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
  { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
  { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
  { name: 'Git', icon: <SiGit />, color: '#F05032' },
  { name: 'Vite', icon: <SiVite />, color: '#646CFF' },
]
const list = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}


function About() {
  return (
    <>
      <Helmet>
        <title>About — NOLI</title>
        <meta name="description" content="16 y.o. Fullstack Developer from Ukraine. React, Node.js, TypeScript." />
      </Helmet>
      <motion.section
        variants={fadeUp}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
        className="about" id="about">

        <div className="section-label">About</div>

        <div className="about-grid">
          <div className="about-text">
            <h2 className="about-title">
              I build things<br />
              <span>for the web.</span>
            </h2>
            <p className="about-desc">
              16 y.o. Fullstack Developer from Ukraine.
              I turn ideas into fast, modern web experiences
              using React, Node.js and MongoDB.
            </p>
          </div>

          <div
            className="about-skills">
            <p className="skills-label">Tech Stack</p>
            <motion.div
              variants={list}
              initial="hidden"
              animate="visible" className="skills-grid">
              {skills.map(skill => (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ type: 'spring', delay: 0.8 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={skill.name}
                  className="skill-tag">
                  <span className="skill-icon" style={{ color: skill.color }}>
                    {skill.icon}
                  </span>
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.section >
    </>
  )
}

export default About