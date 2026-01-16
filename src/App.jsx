import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/main.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Hero />
        <Portfolio />
        <Skills />
        <Contact />
        <footer>
          <div className="container">
            <p>&copy; 2026 Karina Espinola. Made with 💖 and 🦝</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
