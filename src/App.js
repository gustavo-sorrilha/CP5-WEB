import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import Calcados from './pages/Tênis'
import Camisetas from './pages/Camisa'
import Equipamento from './pages/Equipamento'

import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Nav /> 
      
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/calcado" element={<Calcados/>}/>
        <Route path="/camisetas" element={<Camisetas/>}/>
        <Route path="/equipamento" element={<Equipamento/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
