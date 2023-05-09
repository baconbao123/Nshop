import './Css/style.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Nav, Dropdown } from 'react-bootstrap';
import { AiOutlineMail, AiFillPhone } from 'react-icons/ai';
import { MdSupportAgent } from 'react-icons/md';

const NavigationBar = () => { 
      return (
         <div className="container-navbar">
            <Nav >
               <div className="navbar">
                  <Container>
                     <Row className="navbar-item  w-100">
                        <Col xs={7} md={6} lg={5} className='nav-left'>
                           <Nav.Link as={Link} to="/" className="home-item" >
                              <span>Trang chủ</span>
                           </Nav.Link>
                           <Nav.Link as={Link} to="/productsall" className="product-item">
                              <span>Sản phẩm</span>
                           </Nav.Link>
                           <Nav.Link as={Link} to="/blog" className="blog-item">
                              <span>Blog</span>
                           </Nav.Link>
                           <Nav.Link as={Link} to="/store" className="store-item">
                              <span>Hệ thống cửa hàng</span>
                           </Nav.Link>
                        </Col>

                        <Col xs={5} md={6} lg={7} className="nav-right d-flex ">
                           <Nav.Link as={Link} to="#" className="mail-item">
                              <span>
                                 <AiOutlineMail />
                                 info@nshopvn.com
                              </span>
                           </Nav.Link>
                           <Nav.Link as={Link} to="#" className="add-item">
                              <span>
                                 <AiFillPhone />
                                 Tân Phú: 0902 643 978
                              </span>
                           </Nav.Link>
                           <Nav.Link as={Link} to="#" className="add-item">
                              <span>
                                 <AiFillPhone />
                                 Quận 9: 093 27 23 186
                              </span>
                           </Nav.Link>
                           <Dropdown className="dropdown">
                              <Dropdown.Toggle variant="primary">Liên hệ</Dropdown.Toggle>
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
         </div>
      );
};

export default NavigationBar;