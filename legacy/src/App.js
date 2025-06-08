import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Servicos from './pages/Serviços/Serviços'; 
import QuemSomos from './pages/QuemSomos/QuemSomos';
import Contatos from './pages/Contatos/Contatos';


import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './App.css';


function App() {
  return (
    <Router>
      <Navbar /> 

      <main> {/* Um elemento semântico para o conteúdo principal */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/servicos" element={<Servicos />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/contatos" element={<Contatos />} />
          {/* Opcional: Rota para 404 Not Found (se você tiver um componente NotFound) */}
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
      </main>

      <Footer /> {/* */}
    </Router>
  );
}

export default App;