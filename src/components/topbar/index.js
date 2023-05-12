import React from 'react'
import Container from 'react-bootstrap/Container';  
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { useState, useEffect } from 'react';
import Input from './Input';
import logo from '../../img/logo.jpg'
import './topbar.css'
//icon
import { AiOutlineShoppingCart } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { VscSearch } from 'react-icons/vsc'
// hiển thị thông báo
import MyVerticallyCenteredModal from '../modals/Modal';
function Topbar() {
  const [showModal,setShowModal]=useState(false)
  return (
    <nav className='container-topbar'>
      <div className='topbar'>
        <Container>
          <Row className='w-100' >
            <Col lg={2} md={3} className='logo'>
              <img src={logo} width={40} />
              
              <span className='text-logo'>NSHOP</span>
            </Col>
            <Col lg={7} md={4}>
              <Input></Input>

            </Col>
            <Col lg={3} md={5}>
              <Row className='site-heard-user'>
                <Col>
                  <a href="#" onClick={()=> setShowModal(true)}>
                    <span> <AiOutlineShoppingCart className='shopping-cart' /> Giỏ hàng</span>
                  </a>
                </Col>
                <Col>
                  <a href="/#" onClick={()=> setShowModal(true)}>
                    <span><AiOutlineUser className='user' /> Tài khoản</span>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        {/* hàm hiển thị thông báo */}
        <MyVerticallyCenteredModal
          show={showModal}
          onHide={() => setShowModal(false)}
        />

      </div>
    </nav>
  )
}

export default Topbar
