import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <div className='app-container'>
        < Home />
        < Projects />
        < About />
      </div>
    </BrowserRouter>
  );
}

export default App;
