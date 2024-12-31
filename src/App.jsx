import React from "react";
import NavBar from "./sections/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
  return (
    <main className="max-w-7xl mx-auto relative">
      <NavBar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
</main>
  );
};
export default App;

