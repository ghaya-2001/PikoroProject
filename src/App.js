
import './App.css';
import Navbar from './Components/NavBar/NavBar';
import Intro from './Components/Intro/Intro';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Features from './Components/Features/Features';

function App() {
  return (
    <div className="App">
      
        <Navbar/>
        <Intro/>
        <Features/>
        <Contact/>
    
       
    </div>
  );
}

export default App;
