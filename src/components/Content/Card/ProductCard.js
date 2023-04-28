import React from "react";
import { Card } from "react-bootstrap";

const ProductCard = (products) => {
    return (
        {products.map((product,index) => (
            <Card>
                <Card.Img variant={index} src={product.img}/>
                <Card.Body>
                    <Card.Text>{product.content}</Card.Text>
                    <Card.Text>{product.price}</Card.Text>
                </Card.Body>
            </Card>
        ))}
    )
}

export default ProductCard