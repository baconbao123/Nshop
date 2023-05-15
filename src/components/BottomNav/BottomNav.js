import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//icon
import { SlHome } from 'react-icons/sl'
import { CgMenuGridO } from 'react-icons/cg'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
//
import './BottomNav.css'
function BottomNav() {
    return (
            <Row className='d-lg-none d-md-flex nav-md w-100'>
                <Col md={3} className='nav-link-md' style={{ backgroundColor: '#427AA9', color: '#fff' }} >
                    <span className='icon-nav-md'><SlHome /></span>
                    <a style={{ color: '#fff' }} href="" >NShop.com</a>
                </Col>
                <Col md={3} className='nav-link-md' >
                    <span className='icon-nav-md'><CgMenuGridO /></span>
                    <a href="">Danh mục</a>
                </Col>
                <Col md={3} className='nav-link-md' >
                    <span className='icon-nav-md'><AiOutlineShoppingCart /></span>
                    <a href="" data-count='1'>Giỏ hàng</a>
                </Col>
                <Col md={3} className='nav-link-md' >
                    <span className='icon-nav-md'><AiOutlineUser /></span>
                    <a href="">Tài Khoản</a>
                </Col>
            </Row>
    )
}

export default BottomNav
