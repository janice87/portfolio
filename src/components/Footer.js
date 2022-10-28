import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="footer">
        <Container>
        <Row className="align-items-center">
            <Col size={12} sm={12}>
                <p>Janice Chan 2022</p>
            </Col>
        </Row>
        </Container>
    </footer>
  )
}

export default Footer