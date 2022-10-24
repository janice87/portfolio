import {useState, useEffect} from 'react'
import {Container, Row, Col} from 'react-bootstrap';
//import { ArrowRightCircle } from 'react-bootstrap-icons';
import coding from '../assets/img/coding.png'

const Banner = () => {
    const [loop, setLoop] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const [text, setText] = useState('')
    const [change, setChange] = useState(300 - Math.random() * 100)

    const words = ["Full Stack Developer", "Software Engineer", "Web Developer"]
    const time = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, change)
        return () => {clearInterval(ticker)}

    }, [text])

    const tick = () => {
        let i = loop % words.length;
        let fullText = words[i]
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText)

        if(isDeleting) {
            setChange(prevChange => prevChange/2)
        }

        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setChange(time)
        } else if(isDeleting && updatedText === "") {
            setIsDeleting(false)
            setLoop(loop + 1)
            setChange(500)
        }

    }

  return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>Hi I'm Janice <span className='wrap'> {text} </span></h1>
                <p>This is some info about me lorem ipsum blah blah etc etc info info</p>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={coding} alt="header" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner