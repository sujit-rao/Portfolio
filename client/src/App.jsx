
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Intro from './pages/intro'
import About from './pages/About.jsx'
import Portfolio from './pages/portfolio.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './pages/Navbar.jsx'






function App() {


  return (


    <BrowserRouter>
  
    <Navbar/>

      <Routes>
        <Route path={'/'} element={<Intro />} />
        <Route path={"/about"} element={<About />} />
        <Route path={"/profile"} element={<Portfolio />} />
        <Route path={"/contact"} element={<Contact />} />

      </Routes>

    </BrowserRouter>


  )
}

export default App
