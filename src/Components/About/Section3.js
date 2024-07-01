import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import missionImg from '../../Images/our-mission.webp'
import './About.scss'


const Section2 = () => {
  return (
    <>
    <Container className='mission-main'>
        <Row className='whatabout'>
            <Col lg={6} md={12}>
                <h3>MORE THAN JUST YOUR CHOICE</h3>
                <h2>Luxury  and Values</h2>
                <h4></h4>
                <p>Our Luxyara is clear – to be more than just a brand; we aim to be a part of your daily life. We are committed to providing best product that seamlessly combines style, comfort, and functionality. Quality craftsmanship is at the core of everything we do, ensuring that each  dedication to excellence.</p>
            </Col>
            <Col lg={6} md={12}>
                <img src={missionImg} className='img-block-100'/>
            </Col>
        </Row>

    </Container>
    </>
  )
}

export default Section2