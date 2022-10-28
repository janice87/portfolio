import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
// import work from '../assets/img/work.png'
// import edu from '../assets/img/edu.png'
import line from '../assets/img/line.png'
import del from '../assets/img/del.png'
import window from '../assets/img/window.png'

const Skills = () => {
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
                        {/* <h6><span className="work-edu-circle"><img src={work} alt="work" className="work-edu-img" /></span>Northwell Health</h6> */}
                        <h6>Northwell Health</h6>
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
                            <h6 className="timeline-title">Flatiron School</h6>
                            <p className="timeline-title">Software Engineering Program</p>
                        </div>                                      
                    </li>    

                    <li className="timeline-item">
                        <div className="timeline-info">
                            <span>FEB 2013 - FEB 2017</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h6>Disney Publishing Worldwide</h6>
                            <p>Sr Financial Analyst</p>
                        </div>                                   
                    </li>
                 
                    <li className="timeline-item">
                        <div className="timeline-info">
                            <span>JAN 2013</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h6>Baruch College</h6>
                            <p>Masters in Accounting</p>
                        </div>                                   
                    </li>
                   
                    <li className="timeline-item">
                        <div className="timeline-info">
                            <span>MAY 2009</span>
                        </div>
                        <div className="timeline-marker"></div>
                        <div className="timeline-content">
                            <h6>Binghamton University</h6>
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

export default Skills


// <Container>
// <Row className="align-items-center">
//     <Col xs={6} sm={6} md={6} lg={6} xl={6}>                    
//     <h3><span className="work-edu-circle"><img src={work} alt="work" className="work-edu-img" /></span>WORK EXPERIENCE</h3>
//     <hr/>
//     <div className="description">
//     <h6>FEB 2017 - CURRENT</h6>
//     <h6>Northwell Health</h6>
//     <p>Lead Financial Analyst</p>
//     <br />
//     <h6>FEB 2013 - FEB 2017</h6>
//     <h6>Disney Publishing Worldwide</h6>
//     <p>Sr Financial Analyst</p>
//     </div>
//     </Col>              

//     <Col xs={6} sm={6} md={6} lg={6} xl={6}>  
//     <h3><span className="work-edu-circle"><img src={edu} alt="education" className="work-edu-img" /></span>EDUCATION</h3>  
//     <hr/>  
//     <div className="description">
//     <h6>MAR 2022 - OCT 2022</h6>
//     <h6>Flatiron School</h6>
//     <p>Software Engineering Program</p>
//     <br />
//     <h6>JAN 2013</h6>
//     <h6>Baruch College</h6>
//     <p>Masters in Accounting</p>
//     <br />
//     <h6>MAY 2009</h6>
//     <h6>Binghamton University</h6>
//     <p>Bachelors in Financial Economics</p>
//     </div>             
//     </Col>
//     </Row>
// </Container>  