import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';
//import capsulecloset from '../assets/img/capsulecloset.gif'

// make links as buttons
// make link to new page
const Projects = () => {
  return (
    // <div className='projects'>

    <div className="projects">
      <h1 className="align-items-center">PROJECTS</h1> 
            <Container>
                <Row className="align-items-center">
                  <Col xs={12} sm={8} md={8} lg={8} xl={8}>
                   <div className="iframes">
                   {/* <img src={capsulecloset} alt="my-gif" /> */}
                    <iframe className='projects-iframe'
                      width="600"
                      height="300"
                      src={`https://www.loom.com/embed/b0d6bc55d64a43ccb883be34c0c71c04?hide_owner=true&hide_title=true&hideEmbedTopBar=true`}
                      frameBorder="0" 
                      title="Capsule Closet Demo"  
                      allowFullScreen  
                      webkitallowfullscreen="true" 
                      mozallowfullscreen="true"   
                    />   
                   </div>                
                    </Col>               

                    <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                    <h5>CAPSULE CLOSET</h5>
                    <p className="align-items-center">A virtual closet organization tool allowing users to add items to their closet and create capsule wardrobes and outfits based on items in their closet. </p>    
                   
                    <button type="button" className="btn-sm">HTML</button>
                    <button type="button" className="btn-sm">CSS</button>                    
                    <button type="button" className="btn-sm">React</button>
                    <button type="button" className="btn-sm">Material UI</button>
                    <button type="button" className="btn-sm">Ruby on Rails</button>
                    <button type="button" className="btn-sm">ActiveRecord</button>
                    <br />   
                    <a className="btn" href="https://github.com/janice87/my-capsule-closet" role="button" target="_blank" rel="noreferrer">GitHub</a>
                    <a className="btn" href="https://capsule-closet.herokuapp.com/" role="button" target="_blank" rel="noreferrer">Demo</a>
                    <br />           
                    </Col>
                    </Row>
            </Container>

                <Container>
                <Row className="align-items-center">
                <Col xs={12} sm={8} md={8} lg={8} xl={8}>
                   <div className="iframes">
                   <iframe
                      width="600"
                      height="300"
                      src={`https://www.loom.com/embed/0536aadb2fea46b6bbf1db92586e1d3a?hide_owner=true&hide_title=true&hideEmbedTopBar=true`}
                      frameBorder="0" 
                      title="Super Host Demo"  
                      allowFullScreen    
                      webkitallowfullscreen="true" 
                      mozallowfullscreen="true" 
                    />
                    </div>

                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                    <h5>SUPER HOST</h5>
                     <p>Full stack web app for hosts to list their rentals. Hosts are able to sign up and login to view, add, edit and delete their list of rentals. </p>
                     
                    <button type="button" className="btn-sm">HTML</button>
                    <button type="button" className="btn-sm">CSS</button>                   
                    <button type="button" className="btn-sm">React</button>
                    <button type="button" className="btn-sm">Material UI</button>
                    <button type="button" className="btn-sm">Ruby on Rails</button>
                    <button type="button" className="btn-sm">ActiveRecord</button>
                    <br />  

                     <a className="btn" href="https://github.com/janice87/air-superhost" role="button" target="_blank" rel="noreferrer">GitHub</a>
                     <a className="btn" href="https://air-superhost.herokuapp.com/" role="button" target="_blank" rel="noreferrer">Demo</a>
                     <br />         
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row className="align-items-center">
                <Col xs={12} sm={8} md={8} lg={8} xl={8}>
                   <div className="iframes">
                   <iframe
                      width="600"
                      height="300"
                      src={`https://www.loom.com/embed/78b6644405f3463e8621248538361a3e?hide_owner=true&hide_title=true&hideEmbedTopBar=true`}
                      frameBorder="0" 
                      title="myBujo Demo"  
                      allowFullScreen     
                      webkitallowfullscreen="true" 
                      mozallowfullscreen="true" 
                    />
                    </div>

                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                    <h5>MY BUJO</h5>
                      <p>Full stack web app created as an online bullet journal allowing users to create todo lists, track moods and post/edit/delete journals. </p>      
                    
                    <button type="button" className="btn-sm">HTML</button>
                    <button type="button" className="btn-sm">CSS</button>                   
                    <button type="button" className="btn-sm">React</button>
                    <button type="button" className="btn-sm">Material UI</button>
                    <button type="button" className="btn-sm">Ruby</button>
                    <button type="button" className="btn-sm">ActiveRecord</button>
                    <button type="button" className="btn-sm">Sinatra</button>
                    <br />  

                     <a className="btn" href="https://github.com/janice87/phase-3-sinatra-react-frontend" role="button" target="_blank" rel="noreferrer">GitHub</a>
                     </Col>
                </Row>
            </Container>

            <Container>
                <Row className="align-items-center">
                <Col xs={12} sm={8} md={8} lg={8} xl={8}>
                   <div className="iframes">
                   <iframe
                      width="600"
                      height="300"
                      src={`https://www.loom.com/embed/78b6644405f3463e8621248538361a3e?hide_owner=true&hide_title=true&hideEmbedTopBar=true`}
                      frameBorder="0" 
                      title="Hawaii Planner Demo"  
                      allowFullScreen     
                      webkitallowfullscreen="true" 
                      mozallowfullscreen="true" 
                    />
                    </div>

                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                    <h5>HAWAII ACTIVITY PLANNER</h5>
                      <p>Frontend activity planning app providing details on national parks with search features, the ability to add a national park and add parks to your favorite list.  </p>      
                    
                    <button type="button" className="btn-sm">JavaScript</button>
                    <button type="button" className="btn-sm">React</button>
                    <button type="button" className="btn-sm">HTML</button>
                    <button type="button" className="btn-sm">CSS</button>                   
                    <button type="button" className="btn-sm">Material UI</button>                 
                    <br />  

                     <a className="btn" href="https://github.com/janice87/phase-2-project" role="button" target="_blank" rel="noreferrer">GitHub</a>
                     </Col>
                </Row>
            </Container>

            <Container>
                <Row className="align-items-center">
                <Col xs={12} sm={8} md={8} lg={8} xl={8}>
                   <div className="iframes">
                   <iframe
                      width="600"
                      height="300"
                      src={`https://www.loom.com/embed/78b6644405f3463e8621248538361a3e?hide_owner=true&hide_title=true&hideEmbedTopBar=true`}
                      frameBorder="0" 
                      title="Ecommerce Demo"  
                      allowFullScreen     
                      webkitallowfullscreen="true" 
                      mozallowfullscreen="true" 
                    />
                    </div>

                    </Col>
                    <Col xs={12} sm={4} md={4} lg={4} xl={4}>
                    <h5>ECOMMERCE SINGLE PAGE APP</h5>
                      <p>Frontend application displaying products by categories, get product details and add/remove items in a customers cart.</p>      
                    
                    <button type="button" className="btn-sm">JavaScript</button>
                    <button type="button" className="btn-sm">HTML</button>
                    <button type="button" className="btn-sm">CSS</button>                
                    <br />  

                     <a className="btn" href="https://github.com/janice87/phase1-final-project" role="button" target="_blank" rel="noreferrer">GitHub</a>
                     </Col>
                </Row>
            </Container>

        </div>
  )
}

export default Projects

