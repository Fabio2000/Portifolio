import './App.css';
import Carrossel from './components/carrossel/carrossel';
import Historico from './components/historico/historico';
import Home from './components/home/home';
import NavBar from './components/navBar/navBar';
import Resumo from './components/resumo/resumo';
import Skills from './components/skills/skills';
import Project from './components/projetos/project';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duração da animação em milissegundos
      offset: 200, // Offset da animação em pixels
      once: false, // Se verdadeiro, a animação ocorre apenas uma vez
    });
  }, []);

  return (
    <section>
      <NavBar />
      <div id='home' data-aos="fade-up">
        <Home />
      </div>
      <div id='resumo' data-aos="fade-up">
        <Resumo />
      </div>
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12 col-md-6' id='Historico' data-aos="fade-up">
            <Historico />
          </div>
          <div className='col-sm-12 col-md-6' id='Skills' data-aos="fade-up">
            <Skills />
          </div>
        </div>
      </div>
      <div className='col-lg-12' id='Carrossel' data-aos="fade-up">
        <Carrossel />
      </div>
      <div id='Projects' data-aos="fade-up">
        <Project />
      </div>
    </section>
  );
}

export default App;
