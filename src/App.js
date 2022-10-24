import NavBar from './components/NavBar'
import Banner from './components/Banner'
import About from './components/About'
import Projects from './components/Projects';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Projects />
    </div>
  );
}

export default App;
