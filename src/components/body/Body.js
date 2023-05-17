import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slidebar from '../sildebar/Slidebar';
import CarouselSlide from '../carousel/carousel';
import Content from '../Content/Content';
import { Blog as BlogContent } from '../Blog/Blog';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import System from '~/System/System';
import './body.css';
import Products from '../ProductAll/Products';
import BottomNav from '../BottomNav/BottomNav';
import Footer from '../footer/footer';
import Category from '../Category/Category';
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
         <Products/>
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
        <System/>
      </>
   );
};
// Ipad Air
const category =()=>{
   return(
      <>
         {/* Phần Danh Mục   */}
        <Category/>
      </>
   )
}
export default function Body() {
   return (
      <>
      <Container className="body container-lg container-fluid">
         <Row>
            <Col lg={3} className='d-md-none d-lg-block'>
               <div className="scroll-container">
                  <div className="scroll-content">
                     <Slidebar></Slidebar>
                  </div>
               </div>
            </Col>
            <Col lg={9} md={12} className='body-content'>
                  <Routes>
                     <Route path="/" element={<Home />} />
                     <Route path="/productsall" element={<ProductsAll />} />
                     <Route path="/blog" element={<Blog />} />
                     <Route path="/store" element={<Address />} />
                     <Route path="/category" element={<Category/>}/>
                  </Routes>
            </Col>
         </Row>
         <Routes>
                     <Route path="/" element={ <Footer/>} />
                     <Route path="/productsall" element={ <Footer/>} />
                     <Route path="/blog" element={ <Footer/>} />
                     <Route path="/store" element={ <Footer/>} />
                     <Route path="/category"/>
                  </Routes>
      </Container>
      <BottomNav/>

      </>
   );
}
