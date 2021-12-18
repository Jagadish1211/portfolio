
import './App.css';
import Header from "./Components/Heading-bar";
import Intro from './Components/Intro';
import Aboutme from  "./Components/Aboutme";
import Projects from "./Components/Projects"



function App() {
  return (
    <div className="Container">
      <section>
        <Header />
      </section>
      <section>
        <Intro />
      </section>
      <section>
        <Aboutme />
      </section>
      <section>
        <Projects />
      </section>
    </div>
  );
}

export default App;
