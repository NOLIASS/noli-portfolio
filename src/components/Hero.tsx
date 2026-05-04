import '../style/hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-tag">Available for work</div>

      <h1 className="hero-name">
        NOLI
      </h1>

      <p className="hero-role">Fullstack Developer</p>

      <p className="hero-desc">
        I build clean, fast and modern web experiences.
      </p>

      <div className="hero-btns">
        <a href="#projects" className="btn-primary">View Work</a>
        <a href="#contact" className="btn-secondary">Contact Me</a>
      </div>

      <div className="hero-socials">
        <a href="https://github.com/NOLIASS" target="_blank">GitHub</a>
        <a href="https://www.instagram.com/noli.front_dev/" target="_blank">Instagram</a>
        <a href="https://t.me/noliasss" target="_blank">Telegram</a>
      </div>
    </section>
  )
}

export default Hero