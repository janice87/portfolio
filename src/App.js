import NavBar from './components/NavBar'
import Banner from './components/Banner'
import About from './components/About'
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />
      <Experience />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
