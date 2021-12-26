
import './App.css';
import Header from "./Components/Heading-bar";
import Intro from './Components/Intro';
import Aboutme from  "./Components/Aboutme";
import Projects from "./Components/Projects"
import Contact from './Components/Contactme';


function App() {
  return (
    <div className="Container">
      <section className='section-header'>
        <Header />
      </section>
      <section className='section-intro'>
        <Intro />
      </section>
      <section id ="Aboutme" className='section-aboutme'>
        <Aboutme />
      </section>
      <section id ="Projects" className='section-projects'>
        <Projects />
      </section>
      <footer>
        <Contact />
      </footer>
    </div>
  );
}

export default App;
