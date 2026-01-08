import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import GenerateCV from './pages/GenerateCV';
import Templates from './pages/Templates';
import Tutorials from './pages/Tutorials';
import Services from './pages/Services';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/generate">Générer CV</Link></li>
          <li><Link to="/templates">Modèles</Link></li>
          <li><Link to="/tutorials">Tutoriels</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/login">Se connecter</Link></li>
        </ul>
      </nav>
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<GenerateCV />} />
          <Route path="/templates" element={<Templates />} />
          <Route path="/tutorials" element={<Tutorials />} />
          <Route path="/services" element={<Services />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
