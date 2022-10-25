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
                <Col xs={12} md={8} xl={7}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>Hi, I'm Janice. I'm a <span className='wrap'> {text} </span></h1>
                <p>At a young age, I was unknowingly learning HTML and CSS while spending countless hours customizing my Xanga blog.
                    It was something that I truly enjoyed and is something I am pursuing since I've always had an interest in coding. When you enjoy what you do, work becomes play.</p>
                </Col>
                <Col xs={12} md={4} xl={5}>
                    <img src={coding} alt="header" />
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner

