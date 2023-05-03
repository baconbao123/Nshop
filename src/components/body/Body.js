import React from 'react'
import { Container,Row,Col} from 'react-bootstrap'
import Slidebar from '../sildebar/Slidebar'
import CarouselSlide from '../carousel/carousel'
import './body.css'
import Content from '../Content/Content'
import Blog from '../Blog/Blog'
export default function Body() {
  return (
    <Container className='body'>
        <Row>
        <Col md={3}>
          <div className='scroll-container'>
            <div className='scroll-content'>
            <Slidebar></Slidebar>
            </div>
          </div>
        
        </Col>
        <Col md={9}>
          
          {/* Phần trang chủ (home)*/}
          <CarouselSlide/>
          <Content />
          {/* Phần Product (sản phẩm) */}

          {/* Phần blog */}
          {/* <Blog></Blog> */}

          {/* Phần hệ thống cửa hàng */}
        </Col>
        </Row>
    </Container>
  )
}
