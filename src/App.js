import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About'
import Project from './routes/Project';
import Contact from './routes/Contact';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}>Home</Route>
        <Route path="/project" element={<Project/>}>Project</Route>
        <Route path="/about" element={<About/>}>About</Route>
        <Route path="/contact" element={<Contact/>}>Educational Background</Route>
      </Routes>
    </div>
  );
}

export default App;
