import "./App.css";
import Header from "./Components/Heading-bar";
import { useEffect } from "react";
import Intro from "./Components/Intro";
import Aboutme from "./Components/Aboutme";
import Projects from "./Components/Projects";
import Contact from "./Components/Contactme";
import { GlobalProvider, useGlobal } from "./context/global";

function App() {
  useEffect(()=>{
    const target = document.querySelector('#section-intro');
    const observer = new IntersectionObserver((entries)=>{
      const header = document.querySelector('#section-header');
      if(!entries[0].isIntersecting){
        header.style.background = "white";
        header.style.color = "black"
      }else{
        header.style.background = "black";
        header.style.color = "white"
      }
    },{
      rootMargin: '-72px'
    });
    observer.observe(target);
  },[]);
  return (
    <GlobalProvider>
      <div className="Container">
        <section className="section-header" id="section-header">
          <Header />
        </section>
        <section className="section-intro" id='section-intro'>
          <Intro />
        </section>
        <section id="Aboutme" className="section-aboutme">
          <Aboutme />
        </section>
        <section id="Projects" className="section-projects">
          <Projects />
        </section>
        <footer>
          <Contact />
        </footer>
      </div>
    </GlobalProvider>
  );
}

export default App;
