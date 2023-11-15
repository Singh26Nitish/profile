import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Project from './Components/Project';
import About from './Components/About';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App bg-dark text-light font-comom">
      <Header />
      <Home id='home'/>
      <Project id='project'/>
      <About id='about'/>
      <Footer />
    </div>
  );
}

export default App;