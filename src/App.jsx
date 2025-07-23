import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Calendar from "./pages/Calendar";
import Research from "./pages/Research";
import Presentation from "./pages/Presentation";
import Contact from "./pages/Contact";
import Particles from './components/Particles';

// Wrap our routes with this component to add page transitions
function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/skills" element={
          <PageTransition>
            <Skills />
          </PageTransition>
        } />
        <Route path="/calendar" element={
          <PageTransition>
            <Calendar />
          </PageTransition>
        } />
        <Route path="/research" element={
          <PageTransition>
            <Research />
          </PageTransition>
        } />
        <Route path="/presentation" element={
          <PageTransition>
            <Presentation />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <Contact />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

// Page transition wrapper component
const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ width: '100%', height: '100%' }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  return (
    <>
      {/* Particles as background */}
      <Particles
        particleColors={['#ffffff']}
        particleCount={1000}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={true}
      />
      {/* Main app content */}
      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Router>
          <NavBar />
          <div style={{ flex: 1, paddingTop: 64 }}>
            <AnimatedRoutes />
          </div>
        </Router>
      </div>
    </>
  );
}