import React, { Component } from 'react';
import './Css/style.css';
import { Container, Row, Col, Nav, Dropdown } from 'react-bootstrap';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { MdSupportAgent } from 'react-icons/md';

class NavigationBar extends Component {
   render() {
      return (
         <Nav className="container-navbar d-flex align-items-center">
            <div className="navbar">
               <Container>
                  <Row className="navbar-item">
                     <Col md={2} lg={6} className="nav-left d-flex justify-content-between">
                        <Nav.Link href="/" className="home-item">
                           <span>Trang chủ</span>
                        </Nav.Link>
                        <Nav.Link href="/productsall" className="product-item">
                           <span>Sản phẩm</span>
                        </Nav.Link>
                        <Nav.Link href="/blog" className="blog-item">
                           <span>Blog</span>
                        </Nav.Link>
                        <Nav.Link href="/store" className="store-item">
                           <span>Hệ thống cửa hàng</span>
                        </Nav.Link>
                     </Col>

                     <Col md={2} lg={1} className="space"></Col>

                     <Col lg={5} className="nav-right d-flex align-items-center">
                        <Nav.Link href="#" className="mail-item" style={{ flexBasis: '50%' }}>
                           <span>
                              <AiOutlineMail />
                              info@nshopvn.com
                           </span>
                        </Nav.Link>
                        <Nav.Link href="#" className="add-item" style={{ flexBasis: '25%' }}>
                           <span>
                              <AiFillPhone />
                              Tân Phú: 0902 643 978
                           </span>
                        </Nav.Link>
                        <Nav.Link href="#" className="add-item" style={{ flexBasis: '25%' }}>
                           <span>
                              <AiFillPhone />
                              Quận 9: 093 27 23 186
                           </span>
                        </Nav.Link>
                        <Dropdown id="dropdown" style={{ flexBasis: '100px' }}>
                           <Dropdown.Toggle variant="success">Liên hệ</Dropdown.Toggle>
                           <Dropdown.Menu>
                              <Dropdown.Item className='sale-item' disabled>
                                 Bán hàng</Dropdown.Item>
                              <Dropdown.Item className='phone-item' disabled>
                              <MdSupportAgent className='icon'/> Quận 9: 093 27 23 186</Dropdown.Item>
                              <Dropdown.Item className='phone-item'disabled>
                                 <MdSupportAgent className='icon'/> Quận 9: 093 27 34 186</Dropdown.Item>
                              <Dropdown.Item className='phone-item' disabled>
                              <MdSupportAgent className='icon'/> Tân Phú: 0902 64 39 78</Dropdown.Item>
                              <Dropdown.Item className='sale-item' disabled>Kỹ thuật</Dropdown.Item>
                              <Dropdown.Item className='phone-item' disabled>
                              <MdSupportAgent className='icon'/> 0339 449 749</Dropdown.Item>

                           </Dropdown.Menu>
                        </Dropdown>
                     </Col>
                  </Row>
               </Container>
            </div>
         </Nav>
      );
   }
}

export default NavigationBar;
