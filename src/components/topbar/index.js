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
              <Input></Input>

            </Col>
            <Col md={3}>
              <Row className='site-heard-user'>
                <Col>
                  <a href="/cart">
                    <span> <AiOutlineShoppingCart className='shopping-cart' /> Giỏ hàng</span>
                  </a>
                </Col>
                <Col>
                  <a href="/user">
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
