import React from 'react'
import { Link } from 'react-router-dom';
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
            {/* Home */}
            <Col md={3} className='nav-link-md' style={{ backgroundColor: '#427AA9' }} >
                <Link as={Link} to="/" style={{ color: '#fff' }}>
                    <span className='icon-nav-md'><SlHome /></span>
                    <span  >NShop.com</span>
                </Link>
            </Col>
            {/* Category*/}
            <Col md={3} className='nav-link-md' >
                <Link as={Link} to="/category" >
                    <span className='icon-nav-md'><CgMenuGridO /></span>
                    <span>Danh mục</span>
                </Link>
            </Col>
            {/* Cart */}
            <Col md={3} className='nav-link-md' >
                <Link as={Link} to="/cart">
                    <span className='icon-nav-md'><AiOutlineShoppingCart /></span>
                    <span>Giỏ hàng</span>
                </Link>
            </Col>
            {/*Account*/}
            <Col md={3} className='nav-link-md' >
                <Link as={Link} to="/account" >
                    <span className='icon-nav-md'><AiOutlineUser /></span>
                    <span>Tài Khoản</span>
                </Link>
            </Col>
        </Row>
    )
}

export default BottomNav
