import './App.css';
import Home from './components/home/home';
import NavBar from './components/navBar/navBar';
import Toggle from './components/toggle/toggle';

function App() {
  return (
    <section>
      <NavBar />
      <body>
        <section>
          <Toggle />
        </section>
      <section>
        <Home />
      </section>
      </body>
    </section>
  )
}

export default App;
