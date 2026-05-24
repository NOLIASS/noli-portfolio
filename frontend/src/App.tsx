import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Home from './components/Home'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Cursor from './components/Cursor'

function App() {
  return (
    <>
      <Cursor />
      <Navbar brand='Noli' />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App