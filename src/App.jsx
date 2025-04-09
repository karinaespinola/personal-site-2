import React from 'react';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/main.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <main className="main-content">
        <Hero />
        <Skills />
        <Contact />
        <footer>
          <div className="container">
            <p>&copy; 2025 Karina Espinola. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
