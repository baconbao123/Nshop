import React from "react";
import { Card  } from "react-bootstrap";
import './card.css'


const ProductCard = ({ products }) => {
    return (
        <>
            {products.map((product, index) => (
                <Card key={index} style={{ width: '12rem' }} className="card">
                    <Card.Img variant="top" src={product.img} style={{ width: 180, height: 160 }}/>
                    <Card.Body>
                        <Card.Text>{product.content}</Card.Text>
                        <Card.Text>{product.price}</Card.Text>
                    </Card.Body>
                </Card>
            ))}
        </>
    )
}

export default ProductCard