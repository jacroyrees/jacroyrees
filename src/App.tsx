import React, { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import "./App.css";
import particlesOptions from "./particles.json";
import { ISourceOptions } from "@tsparticles/engine";
import Header from "./components/Header";
import Content from "./components/Content";
import TechStack from "./components/TechStack";
import Technologies from "./components/Technologies";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Personal from "./components/Personal";

function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Particle Background */}
      {init && (
        <Particles
          className="fixed top-0 left-0 w-full h-full z-0 bg-[#232323]"
          options={particlesOptions as unknown as ISourceOptions}
        />
      )}

      {/* Header */}
      <div className="relative z-10 w-full">
        <Header />
      </div>

      {/* Sections */}
      <main className="relative z-10 flex flex-col w-full">
        <section className="w-full min-h-screen flex items-center justify-center">
          <Content />
        </section>
        <section className="w-full min-h-screen flex items-center justify-center">
          <Technologies />
        </section>
        <section className="w-full min-h-screen flex items-center justify-center">
          <TechStack />
        </section>
        <section className="w-full min-h-screen flex items-center justify-center">
          <Portfolio />
        </section> 
        <section className="w-full min-h-screen flex items-center justify-center">
          <Resume />
        </section>
        <section className="w-full min-h-screen flex items-center justify-center">
          <Personal />
        </section>
        <footer className={'w-full items-center text-white text-center'}><p>Designed and Developed by Jac Royston Rees</p></footer>
      </main>
    </div>
  );
}

export default App;
