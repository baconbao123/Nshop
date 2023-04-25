import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import Slidebar from '../sildebar/Slidebar'
export default function Body() {
  return (
    <Container>
        <Row>
        <Col md={3}>
          <Slidebar></Slidebar>
        </Col>
        <Col md={9}>
          Truogn trung nguyen
        </Col>
        </Row>
    </Container>
  )
}
