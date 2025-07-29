import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import DoodlePage from "./components/DoodlePage";
import Doodle from "./components/Doodle";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar /> <Hero /> <About /> <Projects /> <Doodle />
              <Footer />
            </>
          }
        />
        <Route path="/doodle" element={<DoodlePage />} />
      </Routes>
    </Router>
  );
}
