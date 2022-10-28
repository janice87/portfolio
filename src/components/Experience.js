import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import line from '../assets/img/line.png'
import del from '../assets/img/del.png'
import window from '../assets/img/window.png'

const Experience = () => {
     
    return (
    <div className='experience' id="experience">
        <h4>experience
        <span> 
            <img src={del} alt="cancel" className="about-span" />
            <img src={window} alt="window" className="about-span" />
            <img src={line} alt="line" className="about-span" />
        </span>
        </h4>  
               <Container>
                <Row className="align-items-center">
                    <Col xs={12} sm={12} md={12} lg={12} xl={12}>                  
                    <h3>EXPERIENCE</h3>
                    <div className="timeline-centered">
                    <div className="timelineMAIN-title">

                    <ul className="timeline timeline-centered">                    
                    <li className="timeline-item">
                        <div className="timeline-info">
                            <span>FEB 2017 - CURRENT</span>
                        </div>
                        <div className="timeline-marker"></div>                   
                        <div className="timeline-content">                    
                        <h5>Northwell Health</h5>
                            <p>Lead Financial Analyst</p>
                        </div>                                   
                    </li>              

                    <li className="timeline-item">
                        <div className="timeline-info">
                            <span>MAR 2022 - OCT 2022</span>
                        </div>
                        <div className="timeline-marker">                            
                            </div>
                        <div className="timeline-content">
                            <h5 className="timeline-title">Flatiron School</h5>
                            <p className="timeline-title">Software Engineering Program</p>
                        </div>                                      
                    </li>    

                    <li className="timeline-item">
                        <div className="timeline-info">
                            <span>FEB 2013 - FEB 2017</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h5>Disney Publishing Worldwide</h5>
                            <p>Sr Financial Analyst</p>
                        </div>                                   
                    </li>
                 
                    <li className="timeline-item">
                        <div className="timeline-info">
                            <span>JAN 2013</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h5>Baruch College</h5>
                            <p>Masters in Accounting</p>
                        </div>                                   
                    </li>
                   
                    <li className="timeline-item">
                        <div className="timeline-info">
                            <span>MAY 2009</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h5>Binghamton University</h5>
                            <p>Bachelors in Financial Economics</p>
                        </div>                                   
                    </li>                    
                    </ul>                
                    </div>
                    </div>
                    </Col>           
                    </Row>
            </Container>      
    </div>   
  )}

export default Experience
