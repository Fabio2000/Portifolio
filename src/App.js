import './App.css';
import Historico from './components/historico/historico';
import Home from './components/home/home';
import NavBar from './components/navBar/navBar';
import Resumo from './components/resumo/resumo';
import Skills from './components/skills/skills';

function App() {
  return (
    <section>
      <NavBar />
      <div>
        <Home />
      </div>
      <div>
        <Resumo />
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-md-6 mb-4">
            <Historico />
          </div>
          <div className="col-12 col-md-6">
            <Skills />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
