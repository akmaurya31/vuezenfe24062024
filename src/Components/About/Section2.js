import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import whatImg from '../../Images/what-we-do.webp'
import './About.scss'


const Section2 = () => {
  return (
    <>
    <Container>
        <Row className='whatabout'>
            <Col lg={6} md={12}>
                <img src={whatImg} className='img-block-100'/>
            </Col>
            <Col lg={6} md={12}>
                <h3>Seeing beyond the ordinary</h3>
                <h2>Our Story</h2>
                <h4></h4>
                <p>Luxyara Is Where Collections Meets Style. We Pride Ourselves On Crafting Premium All Product That Seamlessly Blends Innovation And Fashion. With A Commitment To Quality And A Passion For Design, Luxyara Brings Clarity And Confidence To Your World.</p>
                <p>Luxyara is not just a brand but a signature style. Our passion for our products goes beyond just Leather & Surgical belts and Auto Parts ; it's about embracing individuality, expressing your unique style, and tuch the world through a tuch that reflects your personality. Discover the story behind our brand and why we're more than just an Leather / Surgical Belts And Auto Parts company.</p>
            </Col>
        </Row>

    </Container>
    </>
  )
}

export default Section2