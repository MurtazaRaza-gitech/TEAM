
import React, { useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTopButton from './components/ScrollToTopButton';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Leadership from './pages/Leadership';
import Team from './pages/Team';
import Contact from './pages/Contact';
import VisionRoadmap from './pages/VisionRoadmap';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col relative">
        <Navbar />
        <main className="flex-grow pt-20">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/leadership" element={<Leadership />} />
              <Route path="/team" element={<Team />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/roadmap" element={<VisionRoadmap />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </HashRouter>
  );
};

export default App;
