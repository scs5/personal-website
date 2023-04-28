import './App.css';
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import NavBar from './components/NavBar';

function App() {
  return (
    <div className='app-container'>
      < NavBar />
      < Home />
      < Projects />
      < About />
    </div>
  );
}

export default App;
