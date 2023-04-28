import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"
import { HashLink as Link } from "react-router-hash-link"

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        <Link to='#home'> Home Link</Link>
        <Link to='#about'> About Link</Link>
        < Home />
        < Projects />
        < About />
      </div>
    </BrowserRouter>
  );
}

export default App;
