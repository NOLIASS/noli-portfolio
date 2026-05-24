import { User, Mail, MessageSquare } from 'lucide-react'
import { FaInstagram, FaTelegram, FaGithub, FaLinkedin, } from 'react-icons/fa'
import '../style/contact.css'
import { motion } from 'framer-motion'
import { Helmet } from 'react-helmet-async'

function Contact() {
  return (
    <section className='contact-page' id='contact'>
      <Helmet>
        <title>Contact — NOLI</title>
        <meta name="description" content="Get in touch with NOLI — Fullstack Developer." />
      </Helmet>
      <h3 className='me-contact'>Contact</h3>
      <div className='contact-panels'>
        <motion.div
          initial={{ y: -1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className='your-contact'>
          <h4 className='contact-zagol'>Get in Touch</h4>
          <p className='contact-text'>Have something to discuss? Send me a message and let's talk</p>

          <div className='input-wrapper'>
            <User className='input-icon' />
            <input type="text" name='name' className='message-input' placeholder="Your name" />
          </div>

          <div className='input-wrapper'>
            <Mail className='input-icon' />
            <input type="email" name='email' className='message-input' placeholder="your@email.com" />
          </div>

          <div className='input-wrapper'>
            <MessageSquare className='textarea-icon' />
            <textarea name='message' className='message-textarea' placeholder="Напиши щось..." />
          </div>
          <div className='social-links'>
            <a href='https://instagram.com/yourname' target='_blank'><FaInstagram /></a>
            <a href='https://t.me/yourname' target='_blank'><FaTelegram /></a>
            <a href='https://github.com/yourname' target='_blank'><FaGithub /></a>
            <a href='https://linkedin.com/in/yourname' target='_blank'><FaLinkedin /></a>
          </div>
        </motion.div>
      </div>
    </section >
  )
}

export default Contact