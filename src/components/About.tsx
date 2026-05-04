import '../style/about.css'
import { 
  SiReact, SiTypescript, SiNodedotjs, SiExpress,
  SiMongodb, SiGit, SiVite, SiJavascript
} from 'react-icons/si'

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

function About() {
  return (
    <section className="about" id="about">
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

        <div className="about-skills">
          <p className="skills-label">Tech Stack</p>
          <div className="skills-grid">
            {skills.map(skill => (
              <div key={skill.name} className="skill-tag">
                <span className="skill-icon" style={{ color: skill.color }}>
                  {skill.icon}
                </span>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About