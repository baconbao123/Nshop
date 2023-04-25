import React from 'react'
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import logo from '../../img/logo.jpg'
import './topbar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { VscSearch } from 'react-icons/vsc'

function Topbar() {
  return (
    <nav className='container-topbar'>
      <div className='topbar'>
        <Container>
          <Row className='w-100' >
            <Col md={2} className='logo'>
              <img src={logo} width={40} />
              
              <span className='text-logo'>NSHOP</span>
            </Col>
            <Col md={7}>
              <InputGroup>
                <InputGroup.Text className='input-icon-search'> <VscSearch /></InputGroup.Text>
                <Form.Control placeholder='Tìm kiếm sản phẩm trên NSHOP...' type='search' className='input-search' />
              </InputGroup>

            </Col>
            <Col md={3}>
              <Row className='site-heard-user'>
                <Col>
                  <a href="#">
                    <span> <AiOutlineShoppingCart className='shopping-cart' /> Giỏ hàng</span>
                  </a>
                </Col>
                <Col>
                  <a href="#">
                    <span><AiOutlineUser className='user' /> Tài khoản</span>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

      </div>
    </nav>
  )
}

export default Topbar
