// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import {useState, useEffect} from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap';
import linkedin from '../assets/img/linkedin.png'
import github from '../assets/img/github.png'
import medium from '../assets/img/medium.png'
import banner from '../assets/img/banner.jpg'
//import Banner1 from '../assets/img/Banner1.png'

function NavBar() {
  const [activeLink, setActiveLink] = useState('home')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      if(window.scrollY > 50) {
        setScrolled(true)
      } else (
        setScrolled(false)
      )
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll) 
  }, [])

  const onUpdateActiveLink = (link) => {
    setActiveLink(link)
  }

  return (
    <Navbar expand="md" className={scrolled ? "scrolled": ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={banner} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('home')}>HOME</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('about')}>ABOUT</Nav.Link>      
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link':'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>PROJECTS</Nav.Link>   
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/janice-chan-swe/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin" /></a>
              <a href="https://github.com/janice87" target="_blank" rel="noreferrer"><img src={github} alt="github" /></a>
              <a href="https://medium.com/@janicecodes" target="_blank" rel="noreferrer"><img src={medium} alt="medium" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;