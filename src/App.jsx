import { useState } from "react";

import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";
import Resume from "./components/Resume";

import About from "./sections/About";
import { TechStack } from "./sections/TechStack"
import Contact from "./sections/Contact";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Home from "./sections/Home";
function App() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  const openResume = () => setIsResumeOpen(true);
  const closeResume = () => setIsResumeOpen(false);

  return (
    <>
      <main className="max-w-7xl mx-auto">
        <Navbar onOpenResume={openResume} />
        <Home onOpenResume={openResume} />
        <h2 className="text-3xl font-bold mb-8 md:-mb-3 mt-8 lg:mt-20 ml-5">About Me</h2>
        <About />
        <TechStack />
        <Projects />
        <Certifications />
        <Contact />
        <div className="">
          <Resume
            isOpen={isResumeOpen}
            onOpen={openResume}
            onClose={closeResume}
          />
        </div>
        <Footer />
      </main>
    </>
  );
}

export default App;
