import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import linked from '../assets/img/linked.png'
import gith from '../assets/img/gith.png'
import med from '../assets/img/med.png'
import ig from '../assets/img/ig.png'

const Footer = () => {
  return (
    <footer className="footer">
        <Container>
        <Row className="align-items-center">
            <Col size={12} sm={12}>
              <p>Let's Connect!</p>            
                <div className="social-icon-footer">
                  <a href="https://www.linkedin.com/in/janice-chan-swe/" target="_blank" rel="noreferrer"><img src={linked} alt="linkedin" /></a>
                  <a href="https://github.com/janice87" target="_blank" rel="noreferrer"><img src={gith} alt="github" /></a>
                  <a href="https://medium.com/@janicecodes" target="_blank" rel="noreferrer"><img src={med} alt="medium" /></a>
                  <a href="https://www.instagram.com/janice.codes/" target="_blank" rel="noreferrer"><img src={ig} alt="ig" /></a>
                </div>        
                <p>Janice Chan 2022 | All Rights Reserved</p>
            </Col>
        </Row>
        </Container>
    </footer>
  )
}

export default Footer