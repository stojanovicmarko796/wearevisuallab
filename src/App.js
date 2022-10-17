import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/pages/Home';
import Projects from './components/pages/Projects';
import OurTeam from './components/pages/OurTeam';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer.js';

function App() {
  return (
    <>
      <Router>
        <Navbar />
          <Routes>
            <Route path='/' element = {<Home/>} />
            <Route path='/projects' element = {<Projects/>} />
            <Route path='/ourTeam' element = {<OurTeam/>} />
            <Route path='/sign-up' element = {<SignUp/>} />
          </Routes>
          <Footer />
      </Router>
    </>
    
  );
}

export default App;
