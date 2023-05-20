import './App.css';
import { Routes,Route, NavLink } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About'
import Project from './routes/Project';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home></Home>}>Home</Route>
        <Route path="/project" element={<Project></Project>}>Project</Route>
        <Route path="/about" element={<About></About>}>About</Route>
        <Route path="/contact" element={<Contact></Contact>}>Educational Background</Route>
      </Routes>
      
    </div>
  );
}

export default App;
