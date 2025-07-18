
import{
  BrowserRouter as Router,
  Routes,
  Route
}from 'react-router-dom'//useNavigate is a react hook
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Education from './pages/Education';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import './App.css';
function App(){
  return(
    <Router>
      <Navbar />
      <Routes>
        <Route path='/'element={<Home />}/>
        <Route path='/about'element={<About />}/>
        <Route path='/education'element={<Education />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/projects' element={<Projects />}/>
        <Route path='contact' element={<Contact />}/>
      </Routes>
    </Router>
  );
}

export default App;
