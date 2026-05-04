import '../style/footer.css'

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="section-label">Contact</div>

      <div className="footer-content">
        <h2 className="footer-title">
          Let's work<br />
          <span>together.</span>
        </h2>

        <div className="footer-links">
          <a href="mailto:info@dub-furniture.ua" className="footer-email">
            nazar.noli@gmail.com
          </a>

          <div className="footer-socials">
            <a href="https://github.com/NOLIASS" target="_blank">GitHub</a>
            <a href="https://www.instagram.com/noli.front_dev/" target="_blank">Instagram</a>
            <a href="https://t.me/noliasss" target="_blank">Telegram</a>
          </div>

          <p className="footer-copy">© 2026 NOLI. Built with React + TypeScript.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer