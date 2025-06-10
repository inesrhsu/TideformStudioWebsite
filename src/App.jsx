import './App.css'
import {Home, About, Work, Services, Contact} from './pages'
import Navbar from './components/Navbar'
import { Route, BrowserRouter as Router, Routes} from 'react-router-dom'


function App() {
  return (
    <>
      <Navbar/>
      <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/work" element={<Work/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Routes>
      </main> 
    </> 
  )
}

export default App
