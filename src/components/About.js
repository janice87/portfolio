import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import pic from '../assets/img/pic.png'
import about from '../assets/img/about.jpg'
import line from '../assets/img/line.png'
import del from '../assets/img/del.png'
import window from '../assets/img/window.png'

const About = () => {
  return (
    <div className="about" id="about">
       <h4>about
        <span> 
          <img src={del} alt="cancel" className="about-span" />
          <img src={window} alt="window" className="about-span" />
          <img src={line} alt="line" className="about-span" />
          </span>
        </h4> 
            <Container>
                <Row className="align-items-center">
                   <h3>ABOUT</h3>
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>                    
                    <img src={pic} alt="my_picture" className="about-pic" />   
                    </Col>            

                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>
                      <img src={about} alt="about_section" className="about-image" />           
                      <h3>SKILLS</h3>
                      <h5> FRONT END</h5>
                      <button className="custom-btn-skills btn-skills"><span>HTML</span></button>
                      <button className="custom-btn-skills btn-skills"><span>CSS</span></button>
                      <button className="custom-btn-skills btn-skills"><span>JAVASCRIPT</span></button>
                      <button className="custom-btn-skills btn-skills"><span>REACT</span></button>
                      <button className="custom-btn-skills btn-skills"><span>MATERIAL UI</span></button>                   
                      <h5> BACK END </h5>
                      <button className="custom-btn-skills btn-skills"><span>RUBY</span></button>
                      <button className="custom-btn-skills btn-skills"><span>RAILS</span></button>
                      <button className="custom-btn-skills btn-skills"><span>ACTIVERECORD</span></button> 
                      <button className="custom-btn-skills btn-skills"><span>SQLITE3</span></button> 
                      <button className="custom-btn-skills btn-skills"><span>POSTMAN</span></button>                    
                    </Col>
                    </Row>
            </Container>          
    </div>
  )
}

export default About