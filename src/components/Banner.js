import {Container, Row, Col} from 'react-bootstrap';
import bannerlogo from '../assets/img/bannerlogo.png'
import coding from '../assets/img/coding.png'

const Banner = () => {
  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={8} xl={8}>
                <img src={bannerlogo} alt="banner logo" className="banner-logo" />            
                <p>At a young age, I was unknowingly learning HTML and CSS while spending countless hours customizing my Xanga blog. 
                    In 2021, I continued my coding journey learning through freeCodeCamp and completed a coding bootcamp in 2022. My journey continues and I am excited to start the next chapter in my career.
                    When you enjoy what you do, work becomes play.</p>
                </Col>
                <Col xs={12} md={4} xl={4}>
                    <img src={coding} alt="header" className='banner-img' />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner

