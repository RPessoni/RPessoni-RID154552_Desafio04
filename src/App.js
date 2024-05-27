import logo from './logo.svg';
import './App.css';
import Navibar from './componentes/section/Navibar';
import Presentation from './componentes/section/Presentation';
import Projects from './componentes/section/Projects';
import Skills from './componentes/section/Skills';
import Footer from './componentes/section/Footer';

function App() {
  return (
    <div className="App">
     <Navibar/>
     <Presentation/>
     <Projects/>
     <Skills/>
     <Footer/>

    </div>
  );
}

export default App;
