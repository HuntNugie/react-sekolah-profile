import './App.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Navbar from './components/Navbar'
import AboutPage from './pages/AboutPage'
import PrestasiPage from './pages/PrestasiPage'
import ContactPage from './pages/ContactPage'
function App() {


  return (
    <>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/prestasi' element={<PrestasiPage/>}/>
          <Route path='/kontak' element={<ContactPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
