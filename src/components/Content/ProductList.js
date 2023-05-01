import React from 'react'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import Card from './Card/ProductCard';
const ProductList = ({ products }) => {
    
    return (
        <div className='product-list'>
            <Row className="card-product">
                {products.map((product,index) => (
                    <Col md={2} key={index}>
                        <Card  product={product} />
                    </Col>
                ))}
            </Row>
        </div>
        
    )
}

export default ProductList
