import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import Slidebar from '../sildebar/Slidebar'
import CarouselSlide from '../carousel/carousel'
import './body.css'
export default function Body() {
  return (
    <Container className='body'>
        <Row>
        <Col md={3}>
          <Slidebar></Slidebar>
        </Col>
        <Col md={9}>
          {/* Truogn trung nguyen */}
          <CarouselSlide/>
        </Col>
        </Row>
    </Container>
  )
}
