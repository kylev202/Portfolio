import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./pages/Home Page/Home";
import Skills from "./pages/Skills";
import Calendar from "./pages/Calendar";
import Research from "./pages/Research";
import Presentation from "./pages/Presentation";
import Particles from './components/Particles';

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
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/research" element={<Research />} />
              <Route path="/presentation" element={<Presentation />} />
            </Routes>
          </div>
          <Footer />
        </Router>
      </div>
    </>
  );
}
