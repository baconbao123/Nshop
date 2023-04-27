import React from "react";
import { memo } from "react";
import { Card } from "react-bootstrap";

const Products = memo(({ product }) => {
    return (
        <Card>
            <Card.Img variant="top" src={product.image}/>
            <Card.Body>
                <Card.Text>{product.name}</Card.Text>
                <h5>{product.price}</h5>
            </Card.Body>
        </Card>
    )
})

export default Products