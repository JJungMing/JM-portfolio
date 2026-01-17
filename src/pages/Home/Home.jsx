import React from 'react';
import { useEffect, useState } from "react";
import Header from '../../components/Header/Header';
import About from '../../components/sections/About/About';
import Skills from '../../components/sections/Skills/Skills';
import Archiving from '../../components/sections/Archiving/Archiving';
import Projects from '../../components/sections/Projects/Projects';


const SECTION_IDS = ["header", "about", "skills", "projects", "career", "archiving"];

function Home() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const els = SECTION_IDS.map((id) => document.getElementById(id)).filter(Boolean);

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target?.id) setActive(visible.target.id);
      },
      { root: null, threshold: [0.2, 0.4, 0.6] }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div>
      <Header active={active} />
      <main>
        <section id="header"><Header /></section>
        <section id="about"><About /></section>
        <section id="skills"><Skills /></section>
        <section id="Archiving"><Archiving /></section>
        <section id="projects"><Projects /></section>
      </main>
    </div>
  );
}

export default Home;