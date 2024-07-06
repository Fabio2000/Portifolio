import './App.css';
import Historico from './components/historico/historico';
import Home from './components/home/home';
import NavBar from './components/navBar/navBar';
import Resumo from './components/resumo/resumo';

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
      <div>
      <Historico />
      </div>
    </section>
  )
}

export default App;
