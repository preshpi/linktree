import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Linktree from './pages/linktree';
import Contact from './pages/Contact';

function App() {
  return (
    <div>
      <Router>
          <Routes>
          
          <Route path="/" element={<Linktree/>}/>
          <Route path="/contact" element={<Contact/>}/>

          </Routes>        
      </Router>

    </div>
  );
}

export default App;
