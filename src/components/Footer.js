import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => {
  return (
    <footer>
        <Container>
        <Row className="align-items-center">
            <Col size={12} sm={6}>
                <p>Janice Chan Copyright 2022</p>
            </Col>
        </Row>
        </Container>
    </footer>
  )
}

export default Footer