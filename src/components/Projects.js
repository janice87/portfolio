import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const Projects = () => {
  return (
     <div className="projects" id="projects">
      <h1 className="align-items-center">PROJECTS</h1> 
          <div className="projects-container">
            <Container>
                <Row className="align-items-center">
                  <Col xs={12} sm={12} md={12} lg={8} xl={8}>                    
                   <div className="iframes">     
                    <iframe 
                      width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/4KA5RzWlvgQ?autoplay=1&loop=1&mute=1&rel=0" 
                      title="Capsule Closet Demo" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen 
                    />
                   </div>                
                  </Col>               

                    <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                    <h5>CAPSULE CLOSET</h5>
                        <p className="align-items-center">A virtual closet organization tool. Users are able to add items, create capsule wardrobes and outfits based on items in their closet. Authentication and Authorization was used on the backend with bcrypt.</p>    
                        <button type="button" className="btn"><span>HTML</span></button>
                        <button type="button" className="btn"><span>CSS</span></button>                    
                        <button type="button" className="btn">React</button>
                        <button type="button" className="btn">Material UI</button>
                        <button type="button" className="btn">Ruby on Rails</button>
                        <button type="button" className="btn">ActiveRecord</button>
                        <br />             
                        <a href="https://github.com/janice87/my-capsule-closet" className="custom-btn btn-projects" role="button" aria-pressed="true" target="_blank" rel="noreferrer"><span>GitHub</span></a>
                        <a href="https://capsule-closet.herokuapp.com/" className="custom-btn btn-projects" role="button" aria-pressed="true" target="_blank" rel="noreferrer"><span>Demo</span></a>              
                        <br />           
                    </Col>
                    </Row>
            </Container>
            </div>

                <Container>
                <Row className="align-items-center">
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                   <div className="iframes">                 
                    <iframe 
                      width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/569c6rGrkEM?autoplay=1&loop=1&mute=1&rel=0" 
                      title="Super Host Demo" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen 
                    />
                    </div>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                    <h5>SUPER HOST</h5>
                      <p>Full stack web app for hosts to list their rentals. Hosts are able to sign up and login to view, add, edit and delete their list of rentals. Bcrypt was used for user authentication and authorization on the backend. </p>
                      <button type="button" className="btn">HTML</button>
                      <button type="button" className="btn">CSS</button>                   
                      <button type="button" className="btn">React</button>
                      <button type="button" className="btn">Material UI</button>
                      <button type="button" className="btn">Ruby on Rails</button>
                      <button type="button" className="btn">ActiveRecord</button>
                      <br />  
                      <a href="https://github.com/janice87/air-superhost" className="custom-btn btn-projects" role="button" aria-pressed="true" target="_blank" rel="noreferrer"><span>GitHub</span></a>
                      <a href="https://air-superhost.herokuapp.com/" className="custom-btn btn-projects" role="button" aria-pressed="true" target="_blank" rel="noreferrer"><span>Demo</span></a>                   
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="align-items-center">
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                   <div className="iframes">             
                    <iframe 
                      width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/suQP-htssjQ?autoplay=1&loop=1&mute=1&rel=0" 
                      title="myBujo Demo" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen 
                    />
                  </div>
                </Col>
                    
                    <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                      <h5>MY BUJO</h5>
                      <p>Full stack web app created as an online bullet journal allowing users to create todo lists, track moods and post/edit/delete journals. </p>      
                      <button type="button" className="btn">HTML</button>
                      <button type="button" className="btn">CSS</button>                   
                      <button type="button" className="btn">React</button>
                      <button type="button" className="btn">Material UI</button>
                      <button type="button" className="btn">Ruby</button>
                      <button type="button" className="btn">ActiveRecord</button>
                      <button type="button" className="btn">Sinatra</button>
                      <br />  
                      <a href="https://github.com/janice87/phase-3-sinatra-react-frontend" className="custom-btn btn-projects" role="button" aria-pressed="true" target="_blank" rel="noreferrer"><span>GitHub</span></a>
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="align-items-center">
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                   <div className="iframes">                 
                    <iframe 
                      width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/7YTJlv5YG6s?autoplay=1&loop=1&mute=1&rel=0" 
                      title="Hawaii Planner Demo" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen 
                    />
                    </div>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                      <h5>HAWAII ACTIVITY PLANNER</h5>
                      <p>Frontend activity planning app providing details on national parks. Users are able to search parks, add parks and create a favorites list. Data was used from the National Parks API.</p>      
                      <button type="button" className="btn">JavaScript</button>
                      <button type="button" className="btn">React</button>
                      <button type="button" className="btn">HTML</button>
                      <button type="button" className="btn">CSS</button>                   
                      <button type="button" className="btn">Material UI</button>                 
                      <br />  
                      <a href="https://github.com/janice87/phase-2-project" className="custom-btn btn-projects" role="button" aria-pressed="true" target="_blank" rel="noreferrer"><span>GitHub</span></a>
                      </Col>
                </Row>
            </Container>

            <Container>
                <Row className="align-items-center">
                <Col xs={12} sm={12} md={12} lg={8} xl={8}>
                   <div className="iframes">                 
                    <iframe 
                      width="560" 
                      height="315" 
                      src="https://www.youtube.com/embed/aCGpOEhaasc?autoplay=1&loop=1&mute=1&rel=0" 
                      title="Ecommerce Demo" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen 
                   />
                    </div>
                    </Col>

                    <Col xs={12} sm={12} md={12} lg={4} xl={4}>
                    <h5>ECOMMERCE STORE</h5>
                      <p>Frontend single page application which displays products by categories, allows customers to get product details and add/remove items in a customers cart.  Built using vanilla JS.</p>  
                      <button type="button" className="btn">JavaScript</button>
                      <button type="button" className="btn">HTML</button>
                      <button type="button" className="btn">CSS</button>                
                      <br />  
                      <a href="https://github.com/janice87/phase1-final-project" className="custom-btn btn-projects" role="button" aria-pressed="true" target="_blank" rel="noreferrer"><span>GitHub</span></a>
                    </Col>
                </Row>
            </Container>
        </div>
  )
}

export default Projects

