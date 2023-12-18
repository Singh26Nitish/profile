import Home from './routes/Home';
import Project from './routes/Project';
import About from './routes/About';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App bg-dark text-light font-comom">
      <Routes>
        <Route path="/" element={< Home />} />
        <Route path="/project" element={< Project />} />
        <Route path="/about" element={< About />} />
      </Routes>
      </div>
    // <div className="App bg-dark text-light font-comom">
    //   <Header />
    //   <Home id='home'/>
    //   <Project id='project'/>
    //   <About id='about'/>
    //   <Footer />
    // </div>
  );
}

export default App;