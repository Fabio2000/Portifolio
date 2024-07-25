import './App.css';
import Carrossel from './components/carrossel/carrossel';
import Historico from './components/historico/historico';
import Home from './components/home/home';
import NavBar from './components/navBar/navBar';
import Resumo from './components/resumo/resumo';
import Skills from './components/skills/skills';
import Project from './components/projetos/project';

function App() {
  return (
    <section>
      <NavBar />
      <div id='home'>
        <Home />
      </div>
      <div id='resumo'>
        <Resumo />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6' id='Histrico'>
            <Historico />
          </div>
          <div className='col-sm-12 col-md-6' id='Skills'>
            <Skills />
          </div>
        </div>
      </div>
      <div className='col-lg-12' id='Carrossel'>
        <Carrossel />
      </div>
      <div id='projects'>
        <Project />
      </div>
    </section>
  );
}

export default App;
