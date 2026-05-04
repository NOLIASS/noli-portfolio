import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './page/About'
import Home from './page/Home'
import Contact from './page/Contact'
import Projects from './page/Projects'

function App() {
  return (
    <>
      <Navbar brand='Noli' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/progects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer></Footer>
    </>
  )
}

export default App