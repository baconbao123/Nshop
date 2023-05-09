import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slidebar from '../sildebar/Slidebar';
import CarouselSlide from '../carousel/carousel';
import Content from '../Content/Content';
import { Blog as BlogContent } from '../Blog/Blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './body.css';

const Home = () => {
   return (
      <>
         {/* Phần trang chủ (home)*/}
         <CarouselSlide />
         <Content />
      </>
   );
};

const ProductsAll = () => {
   return (
      <>
         {/* Phần Product (sản phẩm) */}
         <h1>Tất cả sản phẩm</h1>
      </>
   );
};

const Blog = () => {
   return (
      <>
         {/* Phần blog */}
         <BlogContent />
      </>
   );
};

const Address = () => {
   return (
      <>
         {/* Phần hệ thống cửa hàng */}
         <h1>Hệ thống cửa hàng</h1>
      </>
   );
};

export default function Body() {
   return (
      <Container className="body">
         <Row>
            <Col md={3}>
               <div className="scroll-container">
                  <div className="scroll-content">
                     <Slidebar></Slidebar>
                  </div>
               </div>
            </Col>
            <Col md={9}>
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/productsall" element={<ProductsAll />} />
                     <Route path="/blog" element={<Blog />} />
                     <Route path="/store" element={<Address />} />
                  </Routes>
            </Col>
         </Row>
      </Container>
   );
}
