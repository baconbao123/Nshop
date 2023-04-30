import React from 'react'
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

import Card from './Card/ProductCard';
const ProductList = ({ products }) => {
    return (
        <div className='product-list'>
            <Row className="card-product">
                {products.map((product) => (

                    <Col md={2}>
                        <Card key={product.content} product={product} />
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default ProductList
