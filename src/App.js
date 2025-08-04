import Navbar from './component/Navbar/navbar';
import Intro from './component/Navbar/Intro/intro';
import Skills from "./component/Skills/skills";
import Works from './component/Works/works';
import Extra from './component/Extra/extra';
import Education from './component/Education/education';
import Contact from './component/Contact/contact';
import Footer from './component/Footer/footer';

import './App.css';

function App() {
  return (
    <div className="App">
        <Navbar />
        <Intro/>
        <Skills/>
        <Works/>
        <Extra/>
        <Education/>
        <Contact/>
        <Footer/>
     
    </div>
  );
}

export default App;
