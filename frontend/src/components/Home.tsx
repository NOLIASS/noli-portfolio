import { useEffect, useRef } from 'react'
import { motion, useMotionValue, animate } from 'framer-motion'
import '../style/hero.css'
import { Helmet } from 'react-helmet-async'

const words = "Fullstack Developer".split(" ")

function Home() {
  const btnPrimaryRef = useRef<HTMLAnchorElement>(null)
  const btnSecondaryRef = useRef<HTMLAnchorElement>(null)

  const x1 = useMotionValue(0), y1 = useMotionValue(0)
  const x2 = useMotionValue(0), y2 = useMotionValue(0)

  const magnet = (e: MouseEvent, el: HTMLElement, x: any, y: any) => {
    const r = el.getBoundingClientRect()
    x.set((e.clientX - r.left - r.width / 2) * 0.35)
    y.set((e.clientY - r.top - r.height / 2) * 0.35)
  }

  const reset = (x: any, y: any) => {
    animate(x, 0, { type: 'spring', stiffness: 200 })
    animate(y, 0, { type: 'spring', stiffness: 200 })
  }

  useEffect(() => {
    const b1 = btnPrimaryRef.current
    const b2 = btnSecondaryRef.current
    if (!b1 || !b2) return

    const h1 = (e: MouseEvent) => magnet(e, b1, x1, y1)
    const h2 = (e: MouseEvent) => magnet(e, b2, x2, y2)
    const l1 = () => reset(x1, y1)
    const l2 = () => reset(x2, y2)

    b1.addEventListener('mousemove', h1)
    b1.addEventListener('mouseleave', l1)
    b2.addEventListener('mousemove', h2)
    b2.addEventListener('mouseleave', l2)
    return () => {
      b1.removeEventListener('mousemove', h1)
      b1.removeEventListener('mouseleave', l1)
      b2.removeEventListener('mousemove', h2)
      b2.removeEventListener('mouseleave', l2)
    }
  }, [])

  return (
    <>
      <Helmet>
        <title>NOLI — Fullstack Developer</title>
        <meta name="description" content="Fullstack Developer. I build clean, fast and modern web experiences." />
        <meta property="og:title" content="NOLI — Fullstack Developer" />
        <meta property="og:description" content="Fullstack Developer. I build clean, fast and modern web experiences." />
      </Helmet>
      {/* Curtain */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
        style={{
          position: 'fixed', inset: 0,
          background: '#7B5EA7',
          zIndex: 9999,
          pointerEvents: 'none'
        }}
      />

      <section className="hero" id='home'>

        {/* Tag */}
        <motion.div
          className="hero-tag"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Available for work
        </motion.div>

        {/* Ім'я по літерах */}
        <h1 className="hero-name">
          {"NOLI".split("").map((l, i) => (
            <motion.span
              key={i}
              initial={{ y: 100, opacity: 0, rotate: -15 }}
              animate={{ y: 0, opacity: 1, rotate: 0 }}
              transition={{ delay: 1.1 + i * 0.08, type: 'spring', stiffness: 150, damping: 12 }}
              style={{ display: 'inline-block' }}
            >
              {l}
            </motion.span>
          ))}
        </h1>

        {/* Роль по словах */}
        <p className="hero-role">
          {words.map((w, i) => (
            <motion.span
              key={i}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.4 + i * 0.12, duration: 0.5, ease: 'easeOut' }}
              style={{ display: 'inline-block', marginRight: 8 }}
            >
              {w}
            </motion.span>
          ))}
        </p>

        {/* Опис */}
        <motion.p
          className="hero-desc"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.7, duration: 0.6 }}
        >
          I build clean, fast and modern web experiences.
        </motion.p>

        {/* Магнітні кнопки */}
        <motion.div
          className="hero-btns"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.9, duration: 0.5 }}
        >
          <motion.a
            ref={btnPrimaryRef}
            href="#projects"
            className="btn-primary"
            style={{ x: x1, y: y1, display: 'inline-block' }}
          >
            View Work
          </motion.a>
          <motion.a
            ref={btnSecondaryRef}
            href="#contact"
            className="btn-secondary"
            style={{ x: x2, y: y2, display: 'inline-block' }}
          >
            Contact Me
          </motion.a>
        </motion.div>

        {/* Соцмережі */}
        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.1, duration: 0.6 }}
        >
          {[
            { label: 'GitHub', href: 'https://github.com/NOLIASS' },
            { label: 'Instagram', href: 'https://www.instagram.com/noli.front_dev/' },
            { label: 'Telegram', href: 'https://t.me/noliasss' },
          ].map((s, i) => (
            <motion.a
              key={s.label}
              href={s.href}
              target="_blank"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1 + i * 0.1 }}
            >
              {s.label}
            </motion.a>
          ))}
        </motion.div>

      </section>
    </>
  )
}

export default Home